'use client'

// 165 — DASBOR PERJALANAN (beta)
// Rekap personal dari data lokal perangkat: kemajuan Roadmap 99,
// dzikir Tasbih hari ini (streak & rekor), status pengingat,
// dan Rekomendasi Harian — amalan yang disarankan sesuai hari.
// Tidak ada data yang dikirim ke server: dasbor ini cermin, bukan pengawas.
import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, CalendarCheck, Flame, LayoutDashboard, Sparkles, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { HonestNote, SectionHeading } from '../ui'
import { EASE_OUT, Reveal, motion } from '../motion'
import { DAYS, PHASES, ROADMAP_TOTAL } from '@/data/roadmap99'

const ROADMAP_KEY = '165.roadmap.done.v1'
const TASBIH_KEY = '165.tasbih.v1'
const REMIND_KEY = '165.remind.v1'

const REKOM = [
  { day: 0, preset: 'shalawat', name: 'Sholawat', target: 100, why: 'Ahad — amalan umat memperbanyak sholawat membuka hari pekan baru.' },
  { day: 1, preset: 'istighfar', name: 'Istighfar 100×', target: 100, why: 'Senin — puasa Senin menyertai hati yang dibersihkan dengan istighfar.' },
  { day: 2, preset: 'tahmid', name: 'Tahmid (Alhamdulillah)', target: 100, why: 'Selasa — syukur menyambung nikmat yang terus mengalir.' },
  { day: 3, preset: 'thayalah', name: 'Thayalah 100×', target: 100, why: 'Rabu — jantung kalimat tauhid ditancapkan ke lubuk hati.' },
  { day: 4, preset: 'shalawat', name: 'Sholawat', target: 100, why: 'Kamis — amal dinaikkan; bersihkan diri sebelum naik.' },
  { day: 5, preset: 'shalawat', name: 'Sholawat', target: 100, why: 'Jumat — hari sholawat, pembuka pintu-pintu rahmat.' },
  { day: 6, preset: 'isyarat', name: 'Dzikir Isyarat', target: 300, why: 'Sabtu — diam yang tenang dan dzikir dalam dada.' },
] as const

interface TasbihLocal { today?: number; streak?: number; best?: number; target?: number; total?: number; hist?: Record<string, number> }
interface RemindLocal { pagi?: { on?: boolean }; sore?: { on?: boolean } }

export function DasborSection({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [data, setData] = useState<{
    done: number[]
    tasbih: TasbihLocal
    remindOn: number
  } | null>(null)

  useEffect(() => {
    const t = window.setTimeout(() => {
      let done: number[] = []
      try {
        const raw = JSON.parse(localStorage.getItem(ROADMAP_KEY) || '[]')
        if (Array.isArray(raw)) done = raw.filter((n) => typeof n === 'number')
      } catch { /* noop */ }
      let tasbih: TasbihLocal = {}
      try { tasbih = JSON.parse(localStorage.getItem(TASBIH_KEY) || '{}') as TasbihLocal } catch { /* noop */ }
      let remind: RemindLocal = {}
      try { remind = JSON.parse(localStorage.getItem(REMIND_KEY) || '{}') as RemindLocal } catch { /* noop */ }
      const remindOn = [remind.pagi?.on, remind.sore?.on].filter(Boolean).length
      setData({ done, tasbih, remindOn })
    }, 0)
    return () => window.clearTimeout(t)
  }, [])

  const progress = data ? Math.round((data.done.length / ROADMAP_TOTAL) * 100) : 0
  const currentDay = data ? Math.min(data.done.length + 1, ROADMAP_TOTAL) : 1
  const todayItem = useMemo(() => DAYS.find((d) => d.d === currentDay) ?? null, [currentDay])
  const phase = useMemo(
    () => PHASES.find((p) => currentDay >= p.from && currentDay <= p.to) ?? PHASES[0],
    [currentDay],
  )
  const rekom = REKOM[new Date().getDay()]
  const hariNama = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][new Date().getDay()]

  // ---- wawasan pribadi: perhitungan dari riwayat lokal ----
  const NAMA_HARI = ['Ahd', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  const spark = useMemo(() => {
    const hist = data?.tasbih.hist ?? {}
    const out: { label: string; short: string; count: number }[] = []
    const now = new Date()
    for (let i = 13; i >= 0; i--) {
      const d = new Date(now)
      d.setDate(now.getDate() - i)
      const key = d.toISOString().slice(0, 10)
      out.push({ label: key, short: NAMA_HARI[d.getDay()], count: hist[key] ?? 0 })
    }
    return out
  }, [data])
  const sparkMax = useMemo(() => Math.max(...spark.map((d) => d.count), 1), [spark])
  const rata7 = useMemo(() => {
    const last7 = spark.slice(-7)
    return last7.reduce((a, d) => a + d.count, 0) / 7
  }, [spark])
  const bestDay = useMemo(() => {
    const hist = data?.tasbih.hist ?? {}
    let best: { label: string; count: number } | null = null
    for (const [key, count] of Object.entries(hist)) {
      if (!best || count > best.count) {
        best = { label: new Date(key).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }), count }
      }
    }
    return best
  }, [data])

  return (
    <div className="space-y-8">
      <Reveal>
        <SectionHeading
          kicker="Fitur Beta · Cermin Perjalanan"
          title="Dasbor Perjalanan"
          lede="Rekap personal dari perangkatmu sendiri: kemajuan 99 hari, dzikir hari ini, pengingat yang berjalan, dan rekomendasi amalan sesuai hari. Cermin, bukan pengawas — tidak ada data yang keluar dari perangkat."
        />
      </Reveal>

      {/* ---- rekomendasi hari ini ---- */}
      <Reveal delay={0.05}>
        <Card className="v4-card border-border/70 relative overflow-hidden">
          <CardContent className="p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-primary bg-primary/10 flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold">
                <Sparkles className="size-3.5" aria-hidden /> Rekomendasi {hariNama} <span className="text-amber-600 dark:text-amber-400">· Beta</span>
              </div>
              <span className="text-muted-foreground text-[11px]">target disarankan: {rekom.target}×</span>
            </div>
            <p className="font-display mt-3 text-2xl font-bold">{rekom.name}</p>
            <p className="text-muted-foreground mt-1.5 text-[13px] leading-relaxed">{rekom.why}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button size="sm" className="h-9 rounded-full px-4 text-xs" onClick={() => onNavigate('tasbih')}>
                Mulai di Tasbih <ArrowRight className="ml-1 size-3.5" aria-hidden />
              </Button>
              <Button size="sm" variant="outline" className="h-9 rounded-full px-4 text-xs" onClick={() => onNavigate('wiridian')}>
                Bacaan wiridian
              </Button>
            </div>
          </CardContent>
        </Card>
      </Reveal>

      {/* ---- statistik ---- */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal delay={0.08}>
          <Card className="v4-card border-border/70 h-full">
            <CardContent className="p-5">
              <div className="text-muted-foreground flex items-center gap-1.5 text-[10px] font-bold tracking-wide">
                <CalendarCheck className="size-3.5" aria-hidden /> ROADMAP 99
              </div>
              <p className="font-display mt-2 text-3xl font-bold tabular-nums">
                {data ? data.done.length : 0}
                <span className="text-muted-foreground text-base font-semibold"> / {ROADMAP_TOTAL}</span>
              </p>
              <div className="bg-secondary mt-2 h-1.5 overflow-hidden rounded-full">
                <motion.div
                  className="bg-primary h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.7, ease: EASE_OUT }}
                />
              </div>
              <p className="text-muted-foreground mt-2 text-[11px]">
                Fase aktif: <span className="font-bold">{phase.id}. {phase.name}</span> — hari {currentDay}
              </p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="v4-card border-border/70 h-full">
            <CardContent className="p-5">
              <div className="text-muted-foreground flex items-center gap-1.5 text-[10px] font-bold tracking-wide">
                <Sparkles className="size-3.5" aria-hidden /> DZIKIR HARI INI
              </div>
              <p className="font-display mt-2 text-3xl font-bold tabular-nums">{data?.tasbih.today ?? 0}</p>
              <p className="text-muted-foreground mt-2 text-[11px]">butir dzikir tercatat hari ini</p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="v4-card border-border/70 h-full">
            <CardContent className="p-5">
              <div className="text-muted-foreground flex items-center gap-1.5 text-[10px] font-bold tracking-wide">
                <Flame className="size-3.5 text-orange-500" aria-hidden /> HARI BERUNTUN
              </div>
              <p className="font-display mt-2 text-3xl font-bold tabular-nums">{data?.tasbih.streak ?? 0}</p>
              <p className="text-muted-foreground mt-2 text-[11px]">hari berturut-turut berdzikir</p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.14}>
          <Card className="v4-card border-border/70 h-full">
            <CardContent className="p-5">
              <div className="text-muted-foreground flex items-center gap-1.5 text-[10px] font-bold tracking-wide">
                <Trophy className="size-3.5 text-amber-500" aria-hidden /> REKOR & PENGINGAT
              </div>
              <p className="font-display mt-2 text-3xl font-bold tabular-nums">{data?.tasbih.best ?? 0}</p>
              <p className="text-muted-foreground mt-2 text-[11px]">
                rekor beruntun · {data?.remindOn ?? 0} pengingat aktif
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>

      {/* ---- wawasan pribadi (hari ke-95) ---- */}
      <Reveal delay={0.14}>
        <Card className="v4-card border-border/70">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-2">
              <p className="label-caps text-muted-foreground text-[10px]">Wawasan Pribadi <span className="text-amber-600 dark:text-amber-400">· Beta</span></p>
              <span className="text-muted-foreground text-[10.5px]">14 hari terakhir · dari perangkatmu sendiri</span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="bg-secondary/50 rounded-2xl p-3.5">
                <p className="font-display text-2xl font-bold tabular-nums">{(data?.tasbih.total ?? 0).toLocaleString('id-ID')}</p>
                <p className="text-muted-foreground mt-0.5 text-[11px]">total dzikir sepanjang waktu</p>
              </div>
              <div className="bg-secondary/50 rounded-2xl p-3.5">
                <p className="font-display text-2xl font-bold tabular-nums">{rata7.toLocaleString('id-ID', { maximumFractionDigits: 1 })}</p>
                <p className="text-muted-foreground mt-0.5 text-[11px]">rata-rata 7 hari terakhir / hari</p>
              </div>
              <div className="bg-secondary/50 rounded-2xl p-3.5">
                <p className="font-display text-2xl font-bold tabular-nums">{bestDay ? bestDay.count.toLocaleString('id-ID') : '0'}</p>
                <p className="text-muted-foreground mt-0.5 text-[11px]">hari terbaik{bestDay ? ` · ${bestDay.label}` : ''}</p>
              </div>
            </div>
            {/* grafik batang 14 hari */}
            <div className="mt-5 flex items-end gap-1.5" role="img" aria-label="Grafik dzikir 14 hari terakhir">
              {spark.map((d, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className={cn('w-full rounded-t-md transition-all duration-500', d.count > 0 ? 'bg-primary' : 'bg-secondary')}
                    style={{ height: `${Math.max(d.count > 0 ? Math.round((d.count / sparkMax) * 64) : 3, 3)}px` }}
                    title={`${d.label}: ${d.count} butir`}
                  />
                  <span className="text-muted-foreground/70 text-[9px] font-semibold">{d.short}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Reveal>

      {/* ---- tugas hari ini ---- */}
      <Reveal delay={0.16}>
        <Card className="v4-card border-border/70">
          <CardContent className="p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="label-caps text-muted-foreground text-[10px]">Tugas 99 Hari · Hari {currentDay}</p>
              <span className={cn('rounded-full border px-2.5 py-0.5 text-[10px] font-bold', 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25')}>
                {phase.name} · Hari {phase.from}–{phase.to}
              </span>
            </div>
            {todayItem ? (
              <>
                <p className="font-display mt-2.5 text-xl font-bold">{todayItem.t}</p>
                <p className="text-muted-foreground mt-1.5 text-[13px] leading-relaxed">{todayItem.x}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" className="h-9 rounded-full px-4 text-xs" onClick={() => onNavigate('roadmap')}>
                    <LayoutDashboard className="mr-1.5 size-3.5" aria-hidden /> Tandai di Roadmap
                  </Button>
                  <Button size="sm" variant="ghost" className="h-9 rounded-full px-4 text-xs" onClick={() => onNavigate('sholat')}>
                    Jadwal sholat hari ini
                  </Button>
                </div>
              </>
            ) : (
              <p className="text-muted-foreground mt-3 text-sm">
                99 hari telah kau lewati — lanjutkan istiqamah seumur hidup.
              </p>
            )}
          </CardContent>
        </Card>
      </Reveal>

      <Reveal delay={0.2}>
        <HonestNote tone="green">
          Rekomendasi adalah <strong>penyuluhan amalan yang lembut</strong> berbasis hari pekan — bukan fatwa, bukan hadis.
          Yang menuntun tetap mursyidmu; dasbor hanya membantu yang lupa tujuannya agar kembali teringat.
        </HonestNote>
      </Reveal>
    </div>
  )
}
