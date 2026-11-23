'use client'

// ============================================================
// 165 — KITAB PUBLIK (wajah pengunjung dari tab "Kitab" di CMS)
// Daftar kitab dwibahasa → pembaca bab: teks Arab (RTL, font
// Amiri) berdampingan dengan terjemah Indonesia + kunci amalan.
// Kitab ditulis satu per satu dari CMS 165 — apa yang terbit,
// itulah yang tampil (jujur, tanpa kosong-kosongan).
// ============================================================
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, BookMarked, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EmptyState, HonestNote, SectionHeading, SkeletonCard } from '../ui'
import { cn } from '@/lib/utils'

type KitabListItem = {
  id: string; slug: string; titleAr: string; titleId: string
  subtitleId: string | null; author: string; ledeId: string | null; babCount: number
}
type PublicBab = {
  id: string; order: number; titleAr: string; titleId: string
  arabic: string; indonesian: string; kunciAmal: string[]
}
type PublicKitab = Omit<KitabListItem, 'babCount'> & { ledeAr: string | null; bab: PublicBab[] }

export function KitabSection() {
  const [slug, setSlug] = useState<string | null>(null)
  return slug ? <KitabReader slug={slug} onBack={() => setSlug(null)} /> : <KitabList onOpen={(s) => setSlug(s)} />
}

// ---------------- daftar kitab ----------------
function KitabList({ onOpen }: { onOpen: (slug: string) => void }) {
  const [items, setItems] = useState<KitabListItem[] | null>(null)

  useEffect(() => {
    let alive = true
    void (async () => {
      try {
        const r = await fetch('/api/cms/public/kitab')
        const j = await r.json().catch(() => ({}))
        if (alive && r.ok && Array.isArray(j.items)) setItems(j.items)
        else if (alive) setItems([])
      } catch {
        if (alive) setItems([])
      }
    })()
    return () => { alive = false }
  }, [])

  return (
    <div className="space-y-6">
      <SectionHeading
        kicker="Pustaka 165 · dwibahasa"
        title="Kitab 165 — Bahasa Arab & Indonesia"
        lede="Kitab keluarga 165 yang ditulis satu per satu lewat CMS: tiap bab memuat teks Arab, terjemah makna Bahasa Indonesia, dan kunci amalan yang bisa langsung dipraktikkan di rumah."
      />

      {items === null && <SkeletonCard />}

      {items !== null && items.length === 0 && (
        <EmptyState icon={BookMarked} title="Kitab pertama sedang ditulis">
          <p>
            Kitab disusun bab demi bab lewat CMS 165 dan diterbitkan ketika siap.
            Nantikan bab-bab pertamanya — insya Allah mengalir amal jariyah untuk seluruh keluarga.
          </p>
        </EmptyState>
      )}

      {items !== null && items.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((k) => (
            <article key={k.id} className="group border-border bg-card flex flex-col rounded-3xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <p className="font-arabic text-right text-[24px] leading-snug text-[var(--brass)]" dir="rtl" lang="ar">{k.titleAr}</p>
              <h2 className="font-display mt-2 text-[17px] leading-snug font-bold">{k.titleId}</h2>
              {k.subtitleId && <p className="text-muted-foreground mt-1 text-[13px] leading-relaxed">{k.subtitleId}</p>}
              {k.ledeId && <p className="text-muted-foreground mt-2 line-clamp-3 text-[13px] leading-relaxed">{k.ledeId}</p>}
              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                <span className="text-muted-foreground inline-flex items-center gap-1.5 text-[11.5px] font-semibold">
                  <BookMarked className="size-3.5" aria-hidden /> {k.babCount} bab
                </span>
                <Button size="sm" variant="outline" className="h-8 text-[12px]" onClick={() => onOpen(k.slug)}>
                  Baca kitab <ArrowRight className="size-3.5" aria-hidden />
                </Button>
              </div>
              <p className="text-muted-foreground mt-2 text-[11px] leading-relaxed">{k.author}</p>
            </article>
          ))}
        </div>
      )}

      <HonestNote tone="amber">
        Kitab ini disusun digital oleh <strong>Role Activation — Master Polymath Sage Universal (Gabungan Dewan Pakar 46 lintas bidang, tiap bidang berpengalaman 150 tahun)</strong> sebagai bahan belajar mandiri. Tidak menggantikan majelis, mursyid, dan bimbingan langsung di jalur TQN 165.
      </HonestNote>
    </div>
  )
}

// ---------------- pembaca kitab ----------------
function KitabReader({ slug, onBack }: { slug: string; onBack: () => void }) {
  const [kitab, setKitab] = useState<PublicKitab | null>(null)
  const [missing, setMissing] = useState(false)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    let alive = true
    void (async () => {
      try {
        const r = await fetch(`/api/cms/public/kitab?slug=${encodeURIComponent(slug)}`)
        const j = await r.json().catch(() => ({}))
        if (!alive) return
        if (r.ok && j.kitab) setKitab(j.kitab)
        else setMissing(true)
      } catch {
        if (alive) setMissing(true)
      }
    })()
    return () => { alive = false }
  }, [slug])

  if (missing) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="size-4" aria-hidden /> Daftar kitab</Button>
        <EmptyState icon={BookMarked} title="Kitab tidak ditemukan" />
      </div>
    )
  }

  if (!kitab) return <SkeletonCard />

  const bab = kitab.bab[idx] ?? null
  const babLabels = kitab.bab.map((b) => b.titleId)

  return (
    <div className="space-y-5">
      <Button variant="ghost" size="sm" className="-ml-1" onClick={onBack}>
        <ArrowLeft className="size-4" aria-hidden /> Daftar kitab
      </Button>

      {/* kepala kitab */}
      <div className="border-[var(--brass)]/40 bg-gradient-to-br from-[var(--brass-soft)] via-[var(--brass-soft)]/60 to-transparent rounded-3xl border p-5 sm:p-7">
        <p className="font-arabic text-right text-[28px] leading-snug text-[var(--brass)] sm:text-[34px]" dir="rtl" lang="ar">{kitab.titleAr}</p>
        <h1 className="font-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{kitab.titleId}</h1>
        {kitab.subtitleId && <p className="text-[var(--brass)] mt-1 text-[14px] font-semibold">{kitab.subtitleId}</p>}
        {kitab.ledeId && <p className="text-muted-foreground mt-3 max-w-3xl text-[14px] leading-relaxed">{kitab.ledeId}</p>}
        {kitab.ledeAr && <p className="font-arabic mt-4 text-right text-[19px] leading-[2] text-foreground/85" dir="rtl" lang="ar">{kitab.ledeAr}</p>}
        <p className="text-muted-foreground mt-4 text-[12.5px]">{kitab.author}</p>
      </div>

      {/* pilih bab */}
      <div role="tablist" aria-label="Pilih bab" className="flex gap-1.5 overflow-x-auto pb-1">
        {kitab.bab.map((b, i) => (
          <button
            key={b.id} role="tab" aria-selected={i === idx}
            onClick={() => setIdx(i)}
            className={cn(
              'inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-[12.5px] font-bold transition-all active:scale-95',
              i === idx ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground hover:text-foreground hover:border-[var(--brass)]/50',
            )}
          >
            <span className="opacity-70">{i + 1}.</span> {b.titleId}
          </button>
        ))}
      </div>

      {/* isi bab */}
      {bab ? (
        <article className="border-border bg-card rounded-3xl border p-5 sm:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-[15px] font-bold text-[var(--brass)]">
              {idx + 1} / {babLabels.length} — {bab.titleId}
            </h2>
            <p className="font-arabic text-[20px] leading-snug text-foreground/85" dir="rtl" lang="ar">{bab.titleAr}</p>
          </div>

          {/* teks Arab — kanan, besar, Amiri */}
          <div className="border-[var(--brass)]/25 bg-background/60 mt-5 rounded-2xl border p-4 sm:p-6">
            <p className="font-arabic text-right text-[21px] leading-[2.15] text-foreground sm:text-[23px]" dir="rtl" lang="ar">
              {bab.arabic}
            </p>
          </div>

          {/* terjemah Indonesia */}
          <div className="mt-5">
            <h3 className="text-muted-foreground text-[11px] font-bold tracking-[0.14em] uppercase">Terjemah makna — Bahasa Indonesia</h3>
            <p className="mt-2.5 text-[15px] leading-[1.95] text-foreground/90 whitespace-pre-line">{bab.indonesian}</p>
          </div>

          {/* kunci amalan */}
          {bab.kunciAmal.length > 0 && (
            <div className="border-emerald-700/25 bg-emerald-50/60 mt-5 rounded-2xl border p-4 sm:p-5">
              <h3 className="text-emerald-900 text-[11px] font-bold tracking-[0.14em] uppercase">Kunci amalan — praktek langsung</h3>
              <ul className="mt-2.5 space-y-2">
                {bab.kunciAmal.map((k, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-emerald-950">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-700" aria-hidden /> {k}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* navigasi bab */}
          <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
            <Button variant="outline" size="sm" disabled={idx === 0} onClick={() => setIdx((i) => Math.max(0, i - 1))}>
              <ChevronLeft className="size-4" aria-hidden /> Bab sebelumnya
            </Button>
            <span className="text-muted-foreground text-[12px] font-semibold">{idx + 1} dari {babLabels.length}</span>
            <Button variant="outline" size="sm" disabled={idx >= kitab.bab.length - 1} onClick={() => setIdx((i) => Math.min(kitab.bab.length - 1, i + 1))}>
              Bab berikutnya <ChevronRight className="size-4" aria-hidden />
            </Button>
          </div>
        </article>
      ) : (
        <EmptyState icon={BookMarked} title="Belum ada bab terbit" />
      )}

      <HonestNote tone="green">
        Teks Arab ditulis untuk belajar makna bersama keluarga; lafaz ibadah, tartil, dan iramanya tetap mengikuti majelis serta ijazah murshid di jalur TQN 165. Baca berdampingan dengan pengajian majelis — insya Allah berkah.
      </HonestNote>
    </div>
  )
}
