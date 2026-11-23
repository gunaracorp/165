'use client'

// ============================================================
// 165 — ROADMAP 99 (tab internal ruang admin)
// Peta jalan privat pendiri: 99 langkah, 10 fase. Data diambil dari
// /api/roadmap/internal yang menuntut sesi admin — komponen ini TIDAK
// mengimpor data roadmap langsung, sehingga isinya tidak pernah masuk
// bundle publik. Tidak diindeks, tidak di sitemap, tidak dibagikan.
// ============================================================
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Circle, CircleCheck, CircleDot, Copy, Lock, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Kicker } from '../ui'
import { cn } from '@/lib/utils'

type Status = 'selesai' | 'berjalan' | 'direncanakan'
type Fase = { id: number; nama: string; singkat: string; tema: string }
type Step = { n: number; fase: number; judul: string; detail: string; status: Status }
type Payload = {
  judul: string; deskripsi: string; total: number; diperbarui: string; prinsip: string
  fases: Fase[]; steps: Step[]
}

const STATUS_STYLE: Record<Status, { chip: string; label: string; icon: typeof Circle }> = {
  selesai: { chip: 'border-emerald-700/30 bg-emerald-50 text-emerald-900', label: 'Selesai', icon: CircleCheck },
  berjalan: { chip: 'border-amber-700/30 bg-amber-50 text-amber-900', label: 'Berjalan', icon: CircleDot },
  direncanakan: { chip: 'border-border/80 bg-secondary text-muted-foreground', label: 'Direncanakan', icon: Circle },
}

export function Roadmap99Panel() {
  const [data, setData] = useState<Payload | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [faseAktif, setFaseAktif] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const [busy, setBusy] = useState(true)

  const load = useCallback(async () => {
    setBusy(true)
    setError(null)
    try {
      const r = await fetch('/api/roadmap/internal')
      if (r.status === 401) {
        setError('Sesi admin berakhir — muat ulang halaman dan masuk kembali.')
        return
      }
      if (!r.ok) throw new Error('gagal')
      setData((await r.json()) as Payload)
    } catch {
      setError('Tidak dapat menghubungi server.')
    } finally {
      setBusy(false)
    }
  }, [])

  useEffect(() => { void load() }, [load])

  const progress = useMemo(() => {
    if (!data) return { selesai: 0, berjalan: 0, direncanakan: 0, pct: 0 }
    const selesai = data.steps.filter((s) => s.status === 'selesai').length
    const berjalan = data.steps.filter((s) => s.status === 'berjalan').length
    return { selesai, berjalan, direncanakan: data.total - selesai - berjalan, pct: Math.round((selesai / data.total) * 100) }
  }, [data])

  const visibleSteps = useMemo(() => {
    if (!data) return []
    return faseAktif ? data.steps.filter((s) => s.fase === faseAktif) : data.steps
  }, [data, faseAktif])

  const copyAll = async () => {
    if (!data) return
    const lines: string[] = [
      `${data.judul} (internal · privat)`,
      `Diperbarui: ${data.diperbarui} — ${progress.selesai}/${data.total} selesai, ${progress.berjalan} berjalan`,
      '',
    ]
    for (const f of data.fases) {
      lines.push(`FASE ${f.id} — ${f.nama}`)
      for (const s of data.steps.filter((x) => x.fase === f.id)) {
        lines.push(`  ${s.n}. [${STATUS_STYLE[s.status].label}] ${s.judul}`)
        lines.push(`     ${s.detail}`)
      }
      lines.push('')
    }
    try {
      await navigator.clipboard.writeText(lines.join('\n'))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setError('Browser memblokir clipboard — salin manual.')
    }
  }

  if (busy) {
    return (
      <div className="mx-auto max-w-2xl space-y-3 py-6" aria-hidden>
        <div className="bg-muted h-24 rounded-sm animate-pulse" />
        <div className="bg-muted h-40 rounded-sm animate-pulse" />
      </div>
    )
  }

  if (error && !data) {
    return (
      <div className="border-rose-700/30 bg-rose-50 text-rose-900 mx-auto max-w-2xl rounded-sm border px-4 py-6 text-center text-[13px]" role="alert">
        {error}
        <div className="mt-3"><Button size="sm" variant="outline" onClick={() => void load()}><RefreshCw className="size-3.5" aria-hidden /> Coba lagi</Button></div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="space-y-5">
      {/* banner privat */}
      <div className="border-[var(--brass)]/40 bg-secondary/60 flex items-start gap-3 rounded-sm border px-4 py-3">
        <Lock className="text-[var(--brass)] mt-0.5 size-4 shrink-0" aria-hidden />
        <div className="text-[12.5px] leading-relaxed">
          <p className="font-semibold">Dokumen privat pendiri — hanya untuk Anda.</p>
          <p className="text-muted-foreground mt-1">
            Roadmap ini tidak muncul di publik: tidak ada di sitemap, ditutup robots, endpoint-nya menuntut sesi admin,
            dan tidak disertakan dalam bundle halaman publik. Hanya Anda dan steward 165 yang mengetahuinya.
          </p>
        </div>
      </div>

      {/* header + progres */}
      <div className="border-border/80 rounded-sm border p-4 sm:p-5">
        <Kicker>Internal · {data.diperbarui}</Kicker>
        <h2 className="font-display mt-1 text-xl font-semibold tracking-tight sm:text-2xl">{data.judul}</h2>
        <p className="text-muted-foreground mt-2 text-[13px] leading-relaxed">{data.deskripsi}</p>
        <p className="text-muted-foreground/80 mt-2 text-[12px] italic">{data.prinsip}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-[12px]">
          <span className="border-emerald-700/30 bg-emerald-50 text-emerald-900 inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5"><CircleCheck className="size-3" aria-hidden /> {progress.selesai} selesai</span>
          <span className="border-amber-700/30 bg-amber-50 text-amber-900 inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5"><CircleDot className="size-3" aria-hidden /> {progress.berjalan} berjalan</span>
          <span className="border-border/80 bg-secondary text-muted-foreground inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5"><Circle className="size-3" aria-hidden /> {progress.direncanakan} direncanakan</span>
        </div>

        <div className="bg-secondary mt-4 h-2.5 overflow-hidden rounded-full" role="progressbar" aria-valuenow={progress.pct} aria-valuemin={0} aria-valuemax={data.total} aria-label="Kemajuan roadmap">
          <div className="bg-gradient-to-r from-primary to-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${progress.pct}%` }} />
        </div>
        <p className="text-muted-foreground mt-1.5 text-[12px]">{progress.pct}% dari {data.total} langkah</p>
      </div>

      {/* filter fase + salin */}
      <div className="flex flex-wrap items-center gap-1.5">
        <button
          onClick={() => setFaseAktif(null)}
          className={cn('rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors', faseAktif === null ? 'bg-primary text-primary-foreground border-transparent' : 'border-border/80 text-muted-foreground hover:bg-secondary hover:text-foreground')}
        >
          Semua ({data.total})
        </button>
        {data.fases.map((f) => (
          <button
            key={f.id}
            onClick={() => setFaseAktif(faseAktif === f.id ? null : f.id)}
            aria-pressed={faseAktif === f.id}
            className={cn('rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors', faseAktif === f.id ? 'bg-primary text-primary-foreground border-transparent' : 'border-border/80 text-muted-foreground hover:bg-secondary hover:text-foreground')}
          >
            {f.id}. {f.singkat}
          </button>
        ))}
        <Button size="sm" variant="outline" className="ml-auto" onClick={() => void copyAll()}>
          <Copy className="size-3.5" aria-hidden /> {copied ? 'Tersalin!' : 'Salin sebagai teks'}
        </Button>
      </div>

      {/* langkah-langkah */}
      {data.fases
        .filter((f) => faseAktif === null || faseAktif === f.id)
        .map((f) => {
          const steps = data.steps.filter((s) => s.fase === f.id)
          const done = steps.filter((s) => s.status === 'selesai').length
          return (
            <section key={f.id} className="border-border/80 rounded-sm border">
              <div className="border-border/70 bg-secondary/40 rounded-t-sm border-b px-4 py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-[15px] font-semibold tracking-tight">
                    Fase {f.id} — {f.nama}
                  </h3>
                  <span className="text-muted-foreground text-[11.5px]">{done}/{steps.length} selesai</span>
                </div>
                <p className="text-muted-foreground mt-1 text-[12px]">{f.tema}</p>
              </div>
              <ul className="divide-border/60 divide-y">
                {steps.map((s) => {
                  const st = STATUS_STYLE[s.status]
                  const Icon = st.icon
                  return (
                    <li key={s.n} className="flex items-start gap-3 px-4 py-3">
                      <span className="border-border/80 bg-background text-muted-foreground mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold">{s.n}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[13.5px] font-semibold leading-snug">{s.judul}</p>
                          <span className={cn('inline-flex shrink-0 items-center gap-1 rounded-sm border px-1.5 py-0.5 text-[10.5px] font-medium', st.chip)}>
                            <Icon className="size-2.5" aria-hidden /> {st.label}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-1 text-[12.5px] leading-relaxed">{s.detail}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
    </div>
  )
}
