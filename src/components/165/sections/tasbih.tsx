'use client'

// 165 — TASBIH DIGITAL (fitur premium)
// Penghitung dzikir dengan target, getaran halus, rekap streak harian,
// dan pilihan kalimat dzikir (Arab + transliterasi + arti).
// Semua data tersimpan lokal di perangkat murid — tidak dikirim ke server.
import { useCallback, useEffect, useRef, useState } from 'react'
import { Flame, HandMetal, RotateCcw, Trophy } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HonestNote, SectionHeading } from '../ui'
import { EASE_OUT, Reveal, motion } from '../motion'

const STORE_KEY = '165.tasbih.v1'

interface TasbihState {
  day: string
  today: number
  round: number
  target: number
  streak: number
  best: number
  preset: string
  lastActive: string
}

const PRESETS = [
  {
    id: 'thayalah',
    name: 'Thayalah (Laa Ilaha Illallah)',
    ar: 'لَا إِلٰهَ إِلَّا اللّٰهُ',
    latin: 'Laa ilaaha illallah',
    arti: 'Tiada Tuhan selain Allah',
    sunda: 'Teu aya Tuhan nu disembah salian ti Allah',
  },
  {
    id: 'istighfar',
    name: 'Istighfar',
    ar: 'أَسْتَغْفِرُ اللّٰهَ الْعَظِيْمَ',
    latin: 'Astaghfirullahal-\u2018azhim',
    arti: 'Aku memohon ampun kepada Allah Yang Maha Agung',
    sunda: 'Abdi nuju ménta dihampura ka Allah anu Maha Agung',
  },
  {
    id: 'tahmid',
    name: 'Tahmid (Alhamdulillah)',
    ar: 'اَلْحَمْدُ لِلّٰهِ',
    latin: 'Alhamdulillah',
    arti: 'Segala puji bagi Allah',
    sunda: 'Sakumna puji ka Allah',
  },
  {
    id: 'tasbih',
    name: 'Tasbih (Subhanallah)',
    ar: 'سُبْحَانَ اللّٰهِ',
    latin: 'Subhanallah',
    arti: 'Maha Suci Allah',
    sunda: 'Mahasuci Allah',
  },
  {
    id: 'takbir',
    name: 'Takbir (Allahu Akbar)',
    ar: 'اَللّٰهُ أَكْبَرُ',
    latin: 'Allahu akbar',
    arti: 'Allah Maha Besar',
    sunda: 'Allah Mahabesar',
  },
  {
    id: 'shalawat',
    name: 'Sholawat',
    ar: 'اَللّٰهُمَّ صَلِّ عَلٰى سَيِّدِنَا مُحَمَّدٍ',
    latin: 'Allahumma shalli \u2018ala sayyidina Muhammad',
    arti: 'Ya Allah, limpahkan shalawat kepada junjungan kami Nabi Muhammad SAW',
    sunda: 'Éu Allah, pasihan sholawat ka junjungan abdi Nabi Muhammad SAW',
  },
  {
    id: 'isyarat',
    name: 'Dzikir Isyarat (Allah)',
    ar: 'اَللّٰهُ',
    latin: 'Allah',
    arti: 'Dzikir nama Allah dalam dada (kaidah Naqsyabandiyah)',
    sunda: 'Dzikir ngaran Allah dina dada (kaidah Naqsyabandiyah)',
  },
]

const TARGETS = [33, 99, 100, 300, 500, 1000]

function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}
function yesterdayStr(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

function load(): TasbihState {
  const base: TasbihState = {
    day: todayStr(),
    today: 0,
    round: 0,
    target: 33,
    streak: 0,
    best: 0,
    preset: 'thayalah',
    lastActive: '',
  }
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) || 'null') as TasbihState | null
    if (!raw) return base
    const t = todayStr()
    if (raw.day === t) return { ...base, ...raw }
    // hari baru: streak bertahan hanya bila hari terakhir aktif adalah kemarin
    const carried = raw.lastActive === yesterdayStr() ? raw.streak : 0
    return {
      ...base,
      target: raw.target,
      preset: raw.preset,
      best: raw.best,
      day: t,
      streak: carried,
    }
  } catch {
    return base
  }
}

export function TasbihSection() {
  const [s, setS] = useState<TasbihState | null>(null)
  const [pulse, setPulse] = useState(0)
  const [cheer, setCheer] = useState(false)
  const cheerTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // defer pembacaan localStorage setelah mount (pola deep-link codebase)
    const t = window.setTimeout(() => setS(load()), 0)
    return () => window.clearTimeout(t)
  }, [])

  const persist = useCallback((next: TasbihState) => {
    setS(next)
    try { localStorage.setItem(STORE_KEY, JSON.stringify(next)) } catch { /* noop */ }
  }, [])

  // hitungan: functional setState — tap cepat beruntun tetap akurat
  // (setiap tap selalu dibangun dari state terbaru, bukan closure lama)
  const count = useCallback(() => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try { navigator.vibrate(12) } catch { /* noop */ }
    }
    setPulse((p) => p + 1)
    setS((prev) => {
      if (!prev) return prev
      const round = prev.round + 1
      // streak bertambah sekali per hari aktif (butir pertama hari ini)
      const streak = prev.today === 0 ? prev.streak + 1 : prev.streak
      return {
        ...prev,
        round: round >= prev.target ? 0 : round,
        today: prev.today + 1,
        streak,
        best: Math.max(prev.best, streak),
        lastActive: todayStr(),
      }
    })
  }, [])

  // efek samping "target tercapai": round berubah dari >0 kembali ke 0
  const prevRound = useRef<number | null>(null)
  useEffect(() => {
    const wasHit = !s
      ? false
      : prevRound.current !== null && prevRound.current !== 0 && s.round === 0
    prevRound.current = s?.round ?? null
    if (!s || !wasHit) return
    // defer (pola deep-link) agar lint hooks & batching React aman
    const t = window.setTimeout(() => {
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        try { navigator.vibrate([40, 60, 40, 60, 120]) } catch { /* noop */ }
      }
      setCheer(true)
      if (cheerTimer.current) clearTimeout(cheerTimer.current)
      cheerTimer.current = setTimeout(() => setCheer(false), 2600)
    }, 0)
    return () => window.clearTimeout(t)
  }, [s?.round, s])

  // simpan ke perangkat setiap perubahan (setelah mount)
  useEffect(() => {
    if (!s) return
    try { localStorage.setItem(STORE_KEY, JSON.stringify(s)) } catch { /* noop */ }
  }, [s])

  const resetRound = () => {
    if (!s) return
    persist({ ...s, round: 0 })
  }

  const setTarget = (target: number) => {
    if (!s) return
    persist({ ...s, target, round: 0 })
  }

  const setPreset = (preset: string) => {
    if (!s) return
    persist({ ...s, preset, round: 0 })
  }

  if (!s) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted-foreground text-sm">Menyiapkan tasbih…</p>
      </div>
    )
  }

  const preset = PRESETS.find((p) => p.id === s.preset) ?? PRESETS[0]
  const progress = Math.min(s.round / s.target, 1)
  const R = 84
  const CIRC = 2 * Math.PI * R

  return (
    <div className="space-y-8">
      <Reveal>
        <SectionHeading
          kicker="Fitur Premium · Dzikir Harian"
          title="Tasbih Digital 165"
          lede="Penghitung dzikir dengan target, getaran halus, dan rekap konsistensi harian. Genggam niatmu, tekankan tiap butir — data tersimpan di perangkatmu sendiri, privasi terjaga."
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-5">
        {/* ---------- penghitung ---------- */}
        <Reveal delay={0.05} className="lg:col-span-3">
          <Card className="v4-card border-border/70 relative overflow-hidden">
            <CardContent className="flex flex-col items-center p-6 sm:p-8">
              <p className="font-arabic text-center text-4xl leading-[1.7] text-emerald-700 sm:text-5xl dark:text-emerald-300">
                {preset.ar}
              </p>
              <p className="text-muted-foreground mt-2 text-center text-xs italic">{preset.latin}</p>
              <p className="text-muted-foreground/90 mt-1 text-center text-[11.5px] leading-relaxed">
                {preset.arti} <span className="italic">· {preset.sunda}</span>
              </p>

              {/* lingkar progres + tombol */}
              <motion.button
                type="button"
                onClick={count}
                aria-label={`Hitung dzikir ${preset.name}, sekarang ${s.round} dari ${s.target}`}
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.18, ease: EASE_OUT }}
                className="relative mt-6 grid size-52 select-none place-items-center rounded-full outline-none focus-visible:ring-4 focus-visible:ring-ring/40 sm:size-56"
              >
                <svg viewBox="0 0 200 200" className="absolute inset-0 size-full -rotate-90">
                  <circle cx="100" cy="100" r={R} fill="none" strokeWidth="10" className="stroke-secondary" />
                  <circle
                    cx="100" cy="100" r={R} fill="none" strokeWidth="10" strokeLinecap="round"
                    className="stroke-primary transition-all duration-300"
                    strokeDasharray={CIRC}
                    strokeDashoffset={CIRC * (1 - progress)}
                  />
                </svg>
                <span className="bg-gradient-to-br from-primary via-emerald-500 to-[var(--brass)] v4-glow absolute inset-3 rounded-full shadow-xl" aria-hidden />
                <span className="relative z-10 flex flex-col items-center text-white">
                  <motion.span
                    key={pulse}
                    initial={{ scale: 1.18 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.22, ease: EASE_OUT }}
                    className="font-display text-6xl font-bold tabular-nums"
                  >
                    {s.round}
                  </motion.span>
                  <span className="mt-0.5 text-xs font-semibold opacity-90">dari {s.target}</span>
                  <HandMetal className="mt-1.5 size-5 opacity-80" aria-hidden />
                </span>
              </motion.button>

              <p className="text-muted-foreground mt-4 text-center text-[11.5px]">
                Ketuk lingkaran untuk berdzikir — perangkat bergetar halus tiap hitungan.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 rounded-full px-3.5 text-xs" onClick={resetRound}>
                  <RotateCcw className="mr-1.5 size-3.5" aria-hidden /> Putar ulang ronde
                </Button>
              </div>

              {cheer && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-primary mt-3 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold"
                >
                  Target tercapai — alhamdulillah! Ronde baru dimulai.
                </motion.p>
              )}
            </CardContent>
          </Card>
        </Reveal>

        {/* ---------- statistik & pengaturan ---------- */}
        <div className="space-y-5 lg:col-span-2">
          <Reveal delay={0.08}>
            <Card className="v4-card border-border/70">
              <CardContent className="p-5">
                <p className="label-caps text-muted-foreground text-[10px]">Hari ini</p>
                <p className="font-display mt-1 text-4xl font-bold tabular-nums">{s.today}</p>
                <p className="text-muted-foreground mt-0.5 text-xs">butir dzikir — setiap butir dicatat, bukan diperlihatkan.</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-secondary/60 rounded-2xl p-3 text-center">
                    <Flame className="mx-auto size-4 text-orange-500" aria-hidden />
                    <p className="font-display mt-1 text-xl font-bold tabular-nums">{Math.max(s.streak, s.today > 0 ? 1 : 0)}</p>
                    <p className="text-muted-foreground text-[10px] font-semibold">hari beruntun</p>
                  </div>
                  <div className="bg-secondary/60 rounded-2xl p-3 text-center">
                    <Trophy className="mx-auto size-4 text-amber-500" aria-hidden />
                    <p className="font-display mt-1 text-xl font-bold tabular-nums">{s.best}</p>
                    <p className="text-muted-foreground text-[10px] font-semibold">rekor terbaik</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="v4-card border-border/70">
              <CardContent className="p-5">
                <p className="label-caps text-muted-foreground text-[10px]">Target ronde</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {TARGETS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTarget(t)}
                      className={cn(
                        'inline-flex h-8 items-center rounded-full border px-3 text-xs font-bold transition-all duration-200 active:scale-95',
                        s.target === t
                          ? 'border-primary/50 bg-primary/10 text-primary ring-primary/30 ring-2'
                          : 'border-border/70 text-muted-foreground hover:bg-secondary',
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <p className="label-caps text-muted-foreground mt-4 text-[10px]">Kalimat dzikir</p>
                <div className="mt-2 space-y-1.5">
                  {PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPreset(p.id)}
                      className={cn(
                        'w-full rounded-2xl border px-3 py-2 text-left text-xs font-semibold transition-all duration-200 active:scale-[0.98]',
                        s.preset === p.id
                          ? 'border-primary/50 bg-primary/10 text-primary'
                          : 'border-border/60 text-muted-foreground hover:bg-secondary',
                      )}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15}>
        <HonestNote tone="green">
          Dzikir ditinggalkan hanyalah karena lalai — dan pengingat adalah rahmat.
          Angka di sini hanya alat bantu muhasabah; yang dinilai Allah adalah kehadiran hati, bukan angka.
        </HonestNote>
      </Reveal>
    </div>
  )
}
