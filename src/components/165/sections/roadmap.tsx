'use client'

// 165 — ROADMAP 99 HARI MENUJU SEMPURNA
// Peta perjalanan interaktif: 3 fase × 33 hari (Islam → Iman → Ihsan),
// memadukan disiplin ruhani dan tonggak pembangunan fitur situs.
// Kemajuan tiap hari disimpan lokal (localStorage) — milik murid, bukan server.
import { useEffect, useMemo, useState } from 'react'
import { CheckCircle2, Circle, Compass, Flag, Sparkles } from 'lucide-react'
import { DAYS, PHASES, ROADMAP_TOTAL, TAG_META, type RoadmapDay, type RoadmapPhase, type RoadmapTag } from '@/data/roadmap99'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { HonestNote, SectionHeading } from '../ui'
import { EASE_OUT, Reveal, motion } from '../motion'

const STORE_KEY = '165.roadmap.done.v1'
const ALL_TAGS = Object.keys(TAG_META) as RoadmapTag[]

const PHASE_HUE: Record<RoadmapPhase['id'], string> = {
  1: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25',
  2: 'text-teal-700 dark:text-teal-300 bg-teal-500/10 border-teal-500/25',
  3: 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/25',
}

function loadDone(): number[] {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) || '[]')
    return Array.isArray(raw) ? raw.filter((n) => typeof n === 'number') : []
  } catch { return [] }
}

export function RoadmapSection() {
  const [phase, setPhase] = useState<RoadmapPhase>(PHASES[0])
  const [tag, setTag] = useState<RoadmapTag | 'semua'>('semua')
  const [done, setDone] = useState<number[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // defer pembacaan localStorage setelah mount (pola deep-link codebase)
    const t = window.setTimeout(() => {
      setDone(loadDone())
      setMounted(true)
    }, 0)
    return () => window.clearTimeout(t)
  }, [])

  const toggle = (d: number) => {
    setDone((prev) => {
      const next = prev.includes(d) ? prev.filter((n) => n !== d) : [...prev, d]
      try { localStorage.setItem(STORE_KEY, JSON.stringify(next)) } catch { /* noop */ }
      return next
    })
  }

  const days = useMemo(
    () => DAYS.filter((x) => x.d >= phase.from && x.d <= phase.to && (tag === 'semua' || x.g === tag)),
    [phase, tag],
  )

  const pct = Math.round((done.length / ROADMAP_TOTAL) * 100)
  const phaseDone = useMemo(
    () => DAYS.filter((x) => x.d >= phase.from && x.d <= phase.to && done.includes(x.d)).length,
    [phase, done],
  )
  const phaseTotal = phase.to - phase.from + 1

  return (
    <div className="space-y-8">
      <Reveal>
        <SectionHeading
          kicker="Peta Jalan · 3 × 33 Hari"
          title="Roadmap 99 Hari Menuju Sempurna"
          lede="Seperti bilangan tasbih — 33 × 3 = 99 — dan selaras 99 Asmaul Husna: tiga fase Islam (fondasi), Iman (ketinggian), Ihsan (keindahan). Setiap hari memadukan disiplin ruhani dengan tonggak pembangunan fitur 165. Kemajuanmu tersimpan di perangkatmu sendiri."
        />
      </Reveal>

      {/* ---------- progres keseluruhan ---------- */}
      <Reveal delay={0.05}>
        <Card className="v4-card border-border/70">
          <CardContent className="p-5 sm:p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="label-caps text-muted-foreground text-[10px]">Kemajuan Perjalanan</p>
                <p className="font-display mt-1 text-3xl font-bold tabular-nums">
                  {mounted ? done.length : 0}
                  <span className="text-muted-foreground text-lg font-semibold"> / {ROADMAP_TOTAL} hari · {mounted ? pct : 0}%</span>
                </p>
              </div>
              <div className="text-muted-foreground flex items-center gap-2 text-xs">
                <Sparkles className="size-3.5 text-amber-500" aria-hidden />
                99 hari = 99 Asmaul Husna yang direnungkan sepanjang jalan
              </div>
            </div>
            <div className="bg-secondary mt-4 h-2.5 overflow-hidden rounded-full">
              <motion.div
                className="from-primary to-emerald-400 v4-glow h-full rounded-full bg-gradient-to-r"
                initial={{ width: 0 }}
                animate={{ width: `${mounted ? pct : 0}%` }}
                transition={{ duration: 0.8, ease: EASE_OUT }}
              />
            </div>
          </CardContent>
        </Card>
      </Reveal>

      {/* ---------- pilih fase ---------- */}
      <Reveal delay={0.08}>
        <div className="grid gap-3 sm:grid-cols-3">
          {PHASES.map((p) => (
            <button
              key={p.id}
              onClick={() => setPhase(p)}
              aria-current={phase.id === p.id ? 'true' : undefined}
              className={cn(
                'border-border/70 bg-card hover:border-primary/40 rounded-3xl border p-4 text-left transition-all duration-200 active:scale-[0.98]',
                phase.id === p.id && 'ring-primary/50 border-primary/50 ring-2',
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={cn('font-display text-lg font-bold', phase.id === p.id ? 'text-primary' : '')}>
                  {p.id}. {p.name}
                </span>
                <span className={cn('rounded-full border px-2 py-0.5 text-[10px] font-bold', PHASE_HUE[p.id])}>
                  Hari {p.from}–{p.to}
                </span>
              </div>
              <p className="text-muted-foreground mt-0.5 text-xs font-semibold">{p.sub}</p>
              <p className="text-muted-foreground/90 mt-2 text-[11.5px] leading-relaxed line-clamp-3">{p.desc}</p>
              <div className="bg-secondary mt-3 h-1.5 overflow-hidden rounded-full">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-500"
                  style={{ width: mounted ? `${Math.round((DAYS.filter((x) => x.d >= p.from && x.d <= p.to && done.includes(x.d)).length / 33) * 100)}%` : '0%' }}
                />
              </div>
            </button>
          ))}
        </div>
      </Reveal>

      {/* ---------- filter tag ---------- */}
      <Reveal delay={0.1}>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={tag === 'semua' ? 'default' : 'outline'}
            size="sm"
            className="h-8 rounded-full px-3.5 text-xs"
            onClick={() => setTag('semua')}
          >
            <Compass className="mr-1 size-3.5" aria-hidden /> Semua
          </Button>
          {ALL_TAGS.map((g) => (
            <button
              key={g}
              onClick={() => setTag(g)}
              className={cn(
                'inline-flex h-8 items-center rounded-full border px-3.5 text-xs font-semibold transition-all duration-200 active:scale-95',
                tag === g ? TAG_META[g].hue + ' ring-primary/40 ring-2' : 'border-border/70 text-muted-foreground hover:bg-secondary',
              )}
            >
              {TAG_META[g].label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* ---------- daftar hari ---------- */}
      <Reveal delay={0.12}>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-muted-foreground text-sm font-semibold">
            Fase {phase.id} · {phase.name} — {phaseDone}/{phaseTotal} hari selesai
          </p>
          <p className="text-muted-foreground/70 text-[11px]">ketuk kartu untuk menandai selesai</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {days.map((day) => (
            <DayCard key={day.d} day={day} isDone={done.includes(day.d)} onToggle={() => toggle(day.d)} />
          ))}
        </div>
        {days.length === 0 && (
          <p className="text-muted-foreground py-10 text-center text-sm">Belum ada hari pada filter ini.</p>
        )}
      </Reveal>

      <Reveal delay={0.15}>
        <HonestNote tone="amber">
          Penanda bertanda &ldquo;Segera&rdquo; adalah fitur yang <strong>direncanakan</strong> pada fase tersebut —
          disajikan dengan jujur sebagai rencana, bukan klaim sudah terpasang. Sesuai etika editorial 165:
          setiap pernyataan membawa statusnya.
        </HonestNote>
      </Reveal>
    </div>
  )
}

function DayCard({ day, isDone, onToggle }: { day: RoadmapDay; isDone: boolean; onToggle: () => void }) {
  const meta = TAG_META[day.g]
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDone}
      className={cn(
        'group relative w-full rounded-3xl border p-4 text-left transition-all duration-200 active:scale-[0.98]',
        isDone
          ? 'border-primary/45 bg-primary/5 shadow-sm'
          : 'border-border/70 bg-card hover:border-primary/35 hover:shadow-md',
      )}
    >
      <div className="flex items-start gap-3">
        <span className={cn('mt-0.5 shrink-0 transition-colors', isDone ? 'text-primary' : 'text-muted-foreground/60 group-hover:text-primary/70')}>
          {isDone ? <CheckCircle2 className="size-5" aria-hidden /> : <Circle className="size-5" aria-hidden />}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-display text-[11px] font-bold text-primary tabular-nums">
              Hari {day.d}
            </span>
            <span className={cn('rounded-full border px-2 py-0.5 text-[9.5px] font-bold', meta.hue)}>
              {meta.label}
            </span>
            {day.soon && (
              <span className="border-dashed border-amber-500/40 bg-amber-500/5 text-amber-700 dark:text-amber-300 rounded-full border px-2 py-0.5 text-[9.5px] font-bold">
                Segera
              </span>
            )}
          </div>
          <p className={cn('mt-1.5 text-sm font-bold leading-snug', isDone && 'text-primary')}>{day.t}</p>
          <p className={cn('text-muted-foreground mt-1 text-[12px] leading-relaxed', isDone && 'line-through opacity-70')}>{day.x}</p>
        </div>
      </div>
    </button>
  )
}
