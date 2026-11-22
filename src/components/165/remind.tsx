'use client'

// 165 — PENGINGAT WIRID HARIAN (beta)
// Dua slot pengingat (pagi & sore) dengan pemberitahuan lokal:
// bekerja saat aplikasi/situs terbuka (termasuk PWA di ponsel).
// Status izin & jadwal tersimpan di perangkat — tanpa server, tanpa pelacakan.
import { useCallback, useEffect, useRef, useState } from 'react'
import { Bell, BellOff, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const STORE_KEY = '165.remind.v1'

interface RemindSlot { on: boolean; time: string }
interface RemindState {
  pagi: RemindSlot
  sore: RemindSlot
  lastFired: Record<string, string>
}

const DEFAULTS: RemindState = {
  pagi: { on: false, time: '05:30' },
  sore: { on: false, time: '16:30' },
  lastFired: {},
}

function load(): RemindState {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) || 'null') as RemindState | null
    return raw ? { ...DEFAULTS, ...raw } : DEFAULTS
  } catch { return DEFAULTS }
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

function nowHM(): string {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

const SLOT_META = {
  pagi: {
    label: 'Wirid Pagi',
    hint: 'Dzikir pagi & thayalah — hati dibersihkan sebelum hari dimulai.',
    title: 'Waktunya wirid pagi',
    body: 'Selamat pagi — mari berdzikir: istighfar, thayalah & wiridian pagi. Buka 165.',
  },
  sore: {
    label: 'Wiridian Sore',
    hint: 'Wiridian ba\u2019da Asar — mengiringi senja sebelum Magrib.',
    title: 'Waktunya wiridian sore',
    body: 'Senja menjelang — mari mengiringi Magrib dengan wiridian sore. Buka 165.',
  },
} as const

type SlotKey = keyof typeof SLOT_META

export function RemindCard() {
  const [s, setS] = useState<RemindState | null>(null)
  const [perm, setPerm] = useState<'default' | 'granted' | 'denied' | 'unsupported'>('default')
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const t = window.setTimeout(() => {
      setS(load())
      if (typeof window !== 'undefined' && 'Notification' in window) {
        setPerm(Notification.permission as 'default' | 'granted' | 'denied')
      } else {
        setPerm('unsupported')
      }
    }, 0)
    return () => window.clearTimeout(t)
  }, [])

  const fire = useCallback(async (key: SlotKey, state: RemindState) => {
    const meta = SLOT_META[key]
    try {
      if ('serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.getRegistration()
        if (reg) {
          await reg.showNotification(meta.title, {
            body: meta.body,
            icon: '/icons/icon-192.png',
            badge: '/icons/icon-192.png',
            tag: `165-wirid-${key}`,
          })
        } else {
          new Notification(meta.title, { body: meta.body, icon: '/icons/icon-192.png', tag: `165-wirid-${key}` })
        }
      } else {
        new Notification(meta.title, { body: meta.body, icon: '/icons/icon-192.png', tag: `165-wirid-${key}` })
      }
    } catch { /* noop */ }
    const next: RemindState = { ...state, lastFired: { ...state.lastFired, [key]: todayStr() } }
    setS(next)
    try { localStorage.setItem(STORE_KEY, JSON.stringify(next)) } catch { /* noop */ }
  }, [])

  // penjaga waktu: periksa tiap 30 detik selama halaman terbuka
  useEffect(() => {
    if (!s || perm !== 'granted') return
    const check = () => {
      const now = nowHM()
      for (const key of ['pagi', 'sore'] as SlotKey[]) {
        const slot = s[key]
        if (!slot?.on) continue
        if (s.lastFired[key] === todayStr()) continue
        if (now >= slot.time) void fire(key, s)
      }
    }
    check()
    timer.current = setInterval(check, 30000)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [s, perm, fire])

  const requestPermission = async () => {
    if (perm === 'unsupported') return
    try {
      const res = await Notification.requestPermission()
      setPerm(res as 'default' | 'granted' | 'denied')
    } catch { /* noop */ }
  }

  const update = (next: RemindState) => {
    setS(next)
    try { localStorage.setItem(STORE_KEY, JSON.stringify(next)) } catch { /* noop */ }
  }

  if (!s) {
    return (
      <Card className="v4-card border-border/70">
        <CardContent className="p-5"><p className="text-muted-foreground text-sm">Menyiapkan pengingat…</p></CardContent>
      </Card>
    )
  }

  const permLabel: Record<string, string> = {
    granted: 'Notifikasi diizinkan',
    denied: 'Notifikasi ditolak perangkat — buka izin situs di peramban',
    default: 'Izin notifikasi belum diminta',
    unsupported: 'Peramban tidak mendukung notifikasi',
  }

  return (
    <Card className="v4-card border-border/70">
      <CardContent className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Bell className="text-primary size-4" aria-hidden />
            <p className="label-caps text-[10px]">Pengingat Wirid <span className="text-amber-600 dark:text-amber-400">· Beta</span></p>
          </div>
          {perm !== 'granted' && perm !== 'unsupported' && (
            <Button size="sm" className="h-8 rounded-full px-3.5 text-xs" onClick={requestPermission}>
              Izinkan notifikasi
            </Button>
          )}
        </div>
        <p className={cn('mt-2 text-[11.5px] leading-relaxed', perm === 'granted' ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground')}>
          {permLabel[perm]}
        </p>

        <div className="mt-4 space-y-3">
          {(['pagi', 'sore'] as SlotKey[]).map((key) => {
            const slot = s[key]
            const firedToday = s.lastFired[key] === todayStr()
            return (
              <div key={key} className="bg-secondary/50 rounded-2xl p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {slot.on ? <Bell className="text-primary size-4" aria-hidden /> : <BellOff className="text-muted-foreground size-4" aria-hidden />}
                    <p className="text-sm font-bold">{SLOT_META[key].label}</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={slot.on}
                    aria-label={`Aktifkan ${SLOT_META[key].label}`}
                    onClick={() => update({ ...s, [key]: { ...slot, on: !slot.on } })}
                    className={cn(
                      'relative h-6 w-11 rounded-full transition-colors duration-200',
                      slot.on ? 'bg-primary' : 'bg-muted-foreground/30',
                    )}
                  >
                    <span
                      className={cn(
                        'absolute top-0.5 size-5 rounded-full bg-white shadow transition-all duration-200',
                        slot.on ? 'left-[22px]' : 'left-0.5',
                      )}
                    />
                  </button>
                </div>
                <p className="text-muted-foreground mt-1 text-[11.5px] leading-relaxed">{SLOT_META[key].hint}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Clock className="text-muted-foreground size-3.5" aria-hidden />
                  <input
                    type="time"
                    value={slot.time}
                    aria-label={`Jam ${SLOT_META[key].label}`}
                    onChange={(e) => update({ ...s, [key]: { ...slot, time: e.target.value } })}
                    className="border-border bg-card text-foreground h-8 rounded-xl border px-2.5 text-xs font-semibold"
                  />
                  {firedToday && slot.on && (
                    <span className="text-muted-foreground/80 text-[10.5px]">· sudah mengingat hari ini</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-muted-foreground/80 mt-3 text-[10.5px] leading-relaxed">
          Beta: pemberitahuan muncul saat aplikasi/situs terbuka — termasuk saat PWA berjalan di ponsel.
          Pengingat latar penuh menyusul pada kemasan toko aplikasi.
        </p>
      </CardContent>
    </Card>
  )
}
