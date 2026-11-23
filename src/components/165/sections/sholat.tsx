'use client'

// 165 — WAKTU SHOLAT & KIBLAT (beta)
// Jadwal lima waktu per lokasi (metode Kementerian Agama RI via AlAdhan)
// dan arah kiblat dihitung lokal dari koordinat ke Ka'bah.
// Hasil terakhir tersimpan di perangkat agar tetap terbaca saat offline.
import { useCallback, useEffect, useState } from 'react'
import { Compass, MapPin, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { HonestNote, SectionHeading } from '../ui'
import { Reveal } from '../motion'

const CACHE_KEY = '165.sholat.v1'
const KAABA = { lat: 21.4224779, lng: 39.8261506 }
// Jakarta — Monas (bawaan bila lokasi tidak diizinkan)
const FALLBACK = { lat: -6.175392, lng: 106.827153, label: 'Jakarta (bawaan)' }

interface CacheShape {
  lat: number
  lng: number
  label: string
  timings: Record<string, string>
  date: string
}

const PRAYERS: { key: string; label: string; note?: string }[] = [
  { key: 'Imsak', label: 'Imsak' },
  { key: 'Fajr', label: 'Subuh' },
  { key: 'Sunrise', label: 'Terbit' },
  { key: 'Dhuhr', label: 'Zuhur' },
  { key: 'Asr', label: 'Asar' },
  { key: 'Sunset', label: 'Terbenam' },
  { key: 'Maghrib', label: 'Magrib' },
  { key: 'Isha', label: 'Isya' },
]

// arah kiblat: sudut (derajat, dari Utara searah jarum jam) menuju Ka'bah
function qiblaBearing(lat: number, lng: number): number {
  const p1 = (lat * Math.PI) / 180
  const p2 = (KAABA.lat * Math.PI) / 180
  const dl = ((KAABA.lng - lng) * Math.PI) / 180
  const y = Math.sin(dl)
  const x = Math.cos(p1) * Math.tan(p2) - Math.sin(p1) * Math.cos(dl)
  return (Math.atan2(y, x) * 180) / Math.PI
}

async function fetchTimings(lat: number, lng: number): Promise<{ timings: Record<string, string>; date: string } | null> {
  const now = new Date()
  const dd = String(now.getDate()).padStart(2, '0')
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const yyyy = now.getFullYear()
  try {
    const res = await fetch(`https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${lat}&longitude=${lng}&method=20`)
    if (!res.ok) return null
    const json = await res.json()
    if (json?.code !== 200 || !json?.data?.timings) return null
    return { timings: json.data.timings, date: json.data.date.readable as string }
  } catch {
    return null
  }
}

export function SholatSection() {
  const [cache, setCache] = useState<CacheShape | null>(null)
  const [loading, setLoading] = useState(false)
  const [geoMsg, setGeoMsg] = useState<string | null>(null)

  useEffect(() => {
    // muat cache lokal; bila kosong ambil dengan lokasi bawaan
    const t = window.setTimeout(async () => {
      try {
        const raw = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null') as CacheShape | null
        if (raw) { setCache(raw); return }
      } catch { /* noop */ }
      const res = await fetchTimings(FALLBACK.lat, FALLBACK.lng)
      if (res) {
        const next: CacheShape = { ...FALLBACK, timings: res.timings, date: res.date }
        setCache(next)
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(next)) } catch { /* noop */ }
      }
    }, 0)
    return () => window.clearTimeout(t)
  }, [])

  const useMyLocation = useCallback(() => {
    if (!('geolocation' in navigator)) {
      setGeoMsg('Peramban tidak mendukung pencarian lokasi.')
      return
    }
    setLoading(true)
    setGeoMsg(null)
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords
        const res = await fetchTimings(latitude, longitude)
        setLoading(false)
        if (!res) { setGeoMsg('Gagal mengambil jadwal — periksa koneksi.'); return }
        const next: CacheShape = {
          lat: latitude,
          lng: longitude,
          label: `Lokasimu (${latitude.toFixed(3)}°, ${longitude.toFixed(3)}°)`,
          timings: res.timings,
          date: res.date,
        }
        setCache(next)
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(next)) } catch { /* noop */ }
      },
      () => {
        setLoading(false)
        setGeoMsg('Lokasi tidak diizinkan — jadwal memakai lokasi terakhir/bawaan.')
      },
      { timeout: 10000 },
    )
  }, [])

  const refresh = useCallback(async () => {
    if (!cache) return
    setLoading(true)
    const res = await fetchTimings(cache.lat, cache.lng)
    setLoading(false)
    if (!res) { setGeoMsg('Gagal menyegarkan — periksa koneksi.'); return }
    const next: CacheShape = { ...cache, timings: res.timings, date: res.date }
    setCache(next)
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(next)) } catch { /* noop */ }
  }, [cache])

  const bearing = cache ? qiblaBearing(cache.lat, cache.lng) : null

  return (
    <div className="space-y-8">
      <Reveal>
        <SectionHeading
          kicker="Fitur Beta · Hari ke-72"
          title="Waktu Sholat & Kiblat"
          lede="Jadwal lima waktu sesuai koordinat lokasimu — metode Kementerian Agama Republik Indonesia — beserta arah kiblat yang dihitung langsung menuju Ka'bah. Jadwal terakhir tersimpan di perangkat untuk dibaca tanpa sinyal."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" className="h-9 rounded-full px-4 text-xs" onClick={useMyLocation} disabled={loading}>
            <MapPin className="mr-1.5 size-3.5" aria-hidden /> Gunakan lokasi saya
          </Button>
          <Button size="sm" variant="outline" className="h-9 rounded-full px-4 text-xs" onClick={refresh} disabled={loading || !cache}>
            <RefreshCw className={cn('mr-1.5 size-3.5', loading && 'animate-spin')} aria-hidden /> Segarkan
          </Button>
          {cache && (
            <span className="text-muted-foreground text-xs">
              {cache.label} · {cache.date}
            </span>
          )}
        </div>
        {geoMsg && <p className="text-muted-foreground mt-2 text-xs italic">{geoMsg}</p>}
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-5">
        {/* jadwal */}
        <Reveal delay={0.08} className="lg:col-span-3">
          <Card className="v4-card border-border/70">
            <CardContent className="p-5 sm:p-6">
              <p className="label-caps text-muted-foreground text-[10px]">Jadwal Hari Ini <span className="text-amber-600 dark:text-amber-400">· Beta</span></p>
              {cache ? (
                <ul className="mt-3 divide-y divide-border/60">
                  {PRAYERS.map((p) => (
                    <li key={p.key} className="flex items-center justify-between py-2.5">
                      <span className="text-sm font-semibold">{p.label}</span>
                      <span className="font-display text-primary text-lg font-bold tabular-nums">
                        {cache.timings[p.key]?.slice(0, 5) ?? '—'}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground py-10 text-center text-sm">
                  Jadwal belum tersimpan — tekan &ldquo;Segarkan&rdquo; atau &ldquo;Gunakan lokasi saya&rdquo;.
                </p>
              )}
            </CardContent>
          </Card>
        </Reveal>

        {/* kiblat */}
        <Reveal delay={0.1} className="lg:col-span-2">
          <Card className="v4-card border-border/70">
            <CardContent className="flex flex-col items-center p-5 sm:p-6">
              <p className="label-caps text-muted-foreground self-start text-[10px]">Arah Kiblat <span className="text-amber-600 dark:text-amber-400">· Beta</span></p>
              {bearing !== null ? (
                <>
                  <div className="relative mt-4 grid size-44 place-items-center rounded-full border border-border/70 bg-secondary/40 shadow-inner">
                    <span className="text-muted-foreground absolute top-2 text-[11px] font-bold">U</span>
                    <span className="text-muted-foreground absolute right-2 text-[11px] font-bold">T</span>
                    <span className="text-muted-foreground absolute bottom-2 text-[11px] font-bold">S</span>
                    <span className="text-muted-foreground absolute left-2 text-[11px] font-bold">B</span>
                    <div
                      className="absolute bottom-1/2 left-1/2 h-16 w-1 origin-bottom rounded-full"
                      style={{ transform: `translateX(-50%) rotate(${bearing}deg)`, transformOrigin: 'bottom center', background: 'linear-gradient(to top, var(--primary), var(--brass))' }}
                      aria-hidden
                    />
                    <Compass className="text-primary/70 size-6" aria-hidden />
                  </div>
                  <p className="font-display mt-4 text-3xl font-bold tabular-nums">{bearing.toFixed(1)}°</p>
                  <p className="text-muted-foreground mt-1 text-center text-[11.5px] leading-relaxed">
                    dari Utara, searah jarum jam — hadapkan badan ke arah ini
                  </p>
                </>
              ) : (
                <p className="text-muted-foreground py-10 text-center text-sm">Arah kiblat muncul setelah lokasi tersedia.</p>
              )}
            </CardContent>
          </Card>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <HonestNote tone="amber">
          Beta: jadwal dihitung AlAdhan dengan metode <strong>Kementerian Agama RI</strong> — deviasi menit mungkin terjadi
          antar daerah; utamakan waktu setempat &amp; hisab resmi masjid sekitar. Arah kiblat dihitung dari koordinat
          perangkat menuju Ka&rsquo;bah (21.4225°, 39.8262°).
        </HonestNote>
      </Reveal>
    </div>
  )
}
