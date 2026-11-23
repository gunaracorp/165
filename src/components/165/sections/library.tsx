'use client'

// 165 — LIBRARY: Books, Manuscripts, Digital Library, Collections
// Honesty policy: no works are fabricated. The catalogues begin when the
// Founder's archive is deposited. Collections are live data.
import { ArrowRight, BookOpen, Landmark, Layers, ScrollText } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n'
import type { EntityProfileDTO, EntitySummaryDTO } from '@/lib/165'
import { BUKTI_META, DIGITALISASI_META, MANUSKRIP_ENTRIES, MUSEUM_KOLEKSI } from '@/data/warisan'
import { EntityCard } from '../entity-card'
import { EmptyState, HonestNote, Kicker, SectionHeading, SkeletonCard, useApi } from '../ui'

export function LibrarySection({ onOpenEntity, onNavigate }: { onOpenEntity: (slug: string) => void; onNavigate: (s: string) => void }) {
  const [tab, setTab] = useState<'books' | 'manuscripts' | 'collections'>('books')
  const { data, loading } = useApi<{ entities: EntitySummaryDTO[] }>('/api/entities?limit=200')
  const { t } = useI18n()

  const books = (data?.entities ?? []).filter((e) => e.type === 'BOOK')
  const manuscripts = (data?.entities ?? []).filter((e) => e.type === 'MANUSCRIPT')
  const collections = (data?.entities ?? []).filter((e) => e.type === 'COLLECTION')

  return (
    <div className="space-y-6">
      <SectionHeading
        kicker={t('sec.library.kicker')}
        title={t('sec.library.title')}
        lede={t('sec.library.lede')}
      />
      <div role="tablist" aria-label="Library views" className="flex flex-wrap gap-1.5">
        {([['books', 'Books', BookOpen], ['manuscripts', 'Manuscripts', ScrollText], ['collections', 'Collections', Layers]] as const).map(([k, label, Icon]) => (
          <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
            className={cn('inline-flex h-9 items-center gap-1.5 rounded-sm border px-3.5 text-[13px] font-medium transition-colors',
              tab === k ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground hover:text-foreground hover:border-[var(--brass)]/50')}>
            <Icon className="size-3.5" aria-hidden /> {label}
          </button>
        ))}
      </div>

      {loading && <SkeletonCard />}

      {!loading && tab === 'books' && (
        books.length === 0 ? (
          <EmptyState icon={BookOpen} title="The book catalogue opens with the archive">
            <p>
              165 does not fabricate bibliographic records. When the Founder&apos;s archive and reviewed sources are deposited,
              works will appear here with authors, years, languages and full provenance.{' '}
              <button onClick={() => onNavigate('contribute')} className="underline underline-offset-2">Propose a work for cataloguing</button>
            </p>
          </EmptyState>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((e) => <EntityCard key={e.id} entity={e} onOpen={onOpenEntity} />)}
          </div>
        )
      )}

      {!loading && tab === 'manuscripts' && (
        manuscripts.length === 0 ? (
          <EmptyState icon={ScrollText} title="Manuscript registry awaits deposit">
            <p>
              Manuscripts will be registered with holding institutions, condition notes and digitisation status —
              each as a Level A primary source when verified. Until then this registry stands deliberately empty.
            </p>
          </EmptyState>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {manuscripts.map((e) => <EntityCard key={e.id} entity={e} onOpen={onOpenEntity} />)}
          </div>
        )
      )}

      {!loading && tab === 'collections' && (
        collections.length === 0 ? (
          <EmptyState icon={Layers} title="No collections yet" />
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((e) => <EntityCard key={e.id} entity={e} onOpen={onOpenEntity} />)}
          </div>
        )
      )}
    </div>
  )
}

// ---------------- ARCHIVE ----------------
// Beta (roadmap hari ke-70 & ke-76): tiga tab — Dokumen (registri entitas),
// Manuskrip (koleksi terdigitalisasi berbasis arsip nyata), Museum (galeri
// warisan digital — koleksi tayang vs menunggu deposit, tanpa pads).
type ArchiveTab = 'dokumen' | 'manuskrip' | 'museum'

export function ArchiveSection({ onOpenEntity, onNavigate }: { onOpenEntity: (slug: string) => void; onNavigate: (s: string) => void }) {
  const { t } = useI18n()
  const [tab, setTab] = useState<ArchiveTab>('dokumen')
  const { data, loading } = useApi<{ entities: EntitySummaryDTO[] }>('/api/entities?limit=200')
  const documents = (data?.entities ?? []).filter((e) => e.type === 'DOCUMENT')

  const TABS: [ArchiveTab, string, typeof BookOpen][] = [
    ['dokumen', 'Dokumen', ScrollText],
    ['manuskrip', 'Manuskrip', BookOpen],
    ['museum', 'Museum', Landmark],
  ]

  return (
    <div className="space-y-6">
      <SectionHeading
        kicker={t('sec.archive.kicker')}
        title={t('sec.archive.title')}
        lede={t('sec.archive.lede')}
      />

      <div role="tablist" aria-label="Pandangan arsip" className="flex flex-wrap gap-1.5">
        {TABS.map(([k, label, Icon]) => (
          <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
            className={cn('inline-flex h-9 items-center gap-1.5 rounded-sm border px-3.5 text-[13px] font-medium transition-colors',
              tab === k ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground hover:text-foreground hover:border-[var(--brass)]/50')}>
            <Icon className="size-3.5" aria-hidden /> {label}
            {k !== 'dokumen' && <span className="rounded-full bg-amber-500/15 px-1.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">beta</span>}
          </button>
        ))}
      </div>

      {tab === 'dokumen' && (
        <section aria-labelledby="arch-docs">
          <Kicker>Document registry</Kicker>
          {loading ? <SkeletonCard /> : documents.length === 0 ? (
            <EmptyState icon={ScrollText} title="No documents registered yet">
              Founding documents await deposit and review.{' '}
              <button onClick={() => onNavigate('contribute')} className="underline underline-offset-2">Submit a document</button>
            </EmptyState>
          ) : (
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {documents.map((e) => <EntityCard key={e.id} entity={e} onOpen={onOpenEntity} />)}
            </div>
          )}
        </section>
      )}

      {tab === 'manuskrip' && (
        <section aria-label="Manuskrip terdigitalisasi (beta)" className="space-y-4">
          <Kicker>Koleksi terdigitalisasi — data arsip nyata, tanpa karangan</Kicker>
          <ul className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {MANUSKRIP_ENTRIES.map((m) => (
              <li key={m.id} className="border-border bg-card hover:border-[var(--brass)]/50 flex h-full flex-col rounded-md border p-5 transition-colors">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className={cn('inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10.5px] font-semibold', BUKTI_META[m.bukti].hue)}>{BUKTI_META[m.bukti].label}</span>
                  <span className={cn('inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10.5px] font-semibold', DIGITALISASI_META[m.digitalisasi].hue)}>{DIGITALISASI_META[m.digitalisasi].label}</span>
                  <span className="text-muted-foreground/80 ml-auto font-mono text-[10.5px]">{m.id}</span>
                </div>
                <h3 className="font-display mt-2.5 text-[15.5px] leading-snug font-semibold">{m.judul}</h3>
                <p className="text-muted-foreground mt-1 text-[12.5px] leading-relaxed">{m.jenis} · {m.asal}</p>
                <p className="text-muted-foreground mt-2.5 text-[13px] leading-relaxed">{m.note}</p>
                <div className="border-border/60 text-muted-foreground mt-auto w-full space-y-0.5 border-t pt-3 text-[11.5px]">
                  <p><span className="label-caps text-[9.5px]">Tempat · </span>{m.tempat}</p>
                  <p><span className="label-caps text-[9.5px]">Era · </span>{m.era}</p>
                </div>
                {m.ruang && (
                  <button onClick={() => onNavigate(m.ruang!)}
                    className="border-border bg-secondary hover:bg-accent mt-3 inline-flex h-8 w-fit items-center gap-1.5 self-start rounded-sm border px-3 text-[12px] font-medium transition-colors">
                    Buka koleksi <ArrowRight className="size-3.5" aria-hidden />
                  </button>
                )}
              </li>
            ))}
          </ul>
          <HonestNote tone="green">
            <strong>Beta — koleksi awal.</strong> Entri hanya merujuk benda yang sudah terdokumentasi di arsip situs (S1/S2, CMS bacaan, diagram sanad). Digitalisasi halaman asli (scan/foto) menunggu unggahan koleksi majelis melalui ruang Kontribusi — tidak ada manuskrip yang dikarang.
          </HonestNote>
        </section>
      )}

      {tab === 'museum' && (
        <section aria-label="Museum digital (beta)" className="space-y-4">
          <Kicker>Galeri warisan digital — koleksi tayang &amp; slot deposit</Kicker>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MUSEUM_KOLEKSI.map((k) => (
              <li key={k.id} className={cn('flex h-full flex-col rounded-md border p-5 transition-colors',
                k.status === 'tayang' ? 'border-border bg-card hover:border-[var(--brass)]/50' : 'border-dashed border-border/70 bg-secondary/30')}>
                <div className="flex items-center justify-between gap-2">
                  <span className={cn('inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10.5px] font-semibold',
                    k.status === 'tayang' ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25' : 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/25')}>
                    {k.status === 'tayang' ? 'Tayang' : 'Menunggu deposit'}
                  </span>
                  <span className="text-muted-foreground/80 font-mono text-[10.5px]">{k.jenis}</span>
                </div>
                <h3 className="font-display mt-2.5 text-[15px] leading-snug font-semibold">{k.nama}</h3>
                <p className="text-muted-foreground mt-1.5 text-[12.5px] leading-relaxed">{k.jumlah}</p>
                <p className="text-muted-foreground/90 mt-2 text-[12.5px] leading-relaxed">{k.note}</p>
                {k.ruang && (
                  <button onClick={() => onNavigate(k.ruang!)}
                    className="border-border bg-secondary hover:bg-accent mt-3 inline-flex h-8 w-fit items-center gap-1.5 self-start rounded-sm border px-3 text-[12px] font-medium transition-colors">
                    Buka ruang <ArrowRight className="size-3.5" aria-hidden />
                  </button>
                )}
              </li>
            ))}
          </ul>
          <HonestNote tone="amber">
            <strong>Museum bukan gudang.</strong> Kategori kosong tetap tampil dengan angka nol — koleksi fisik/video masuk hanya dengan hak, sumber &amp; subjek tercatat; oral history disimpan Level D sebagai kesaksian.
          </HonestNote>
        </section>
      )}

      {tab === 'dokumen' && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <EmptyState icon={ScrollText} title="Oral history programme — planned (Phase 5)">
            <p>Interview collections will carry Level D evidence status: preserved as testimony, never silently promoted to documentary fact. Contribution pipeline opens with the editorial workflow.</p>
          </EmptyState>
          <EmptyState icon={Layers} title="Heritage archive — planned (Phase 5 & 10)">
            <p>Immutability, version snapshots, audit trails, 3-2-1 backups and long-term migration are part of the preservation charter, already modelled in the database layer.</p>
          </EmptyState>
        </div>
      )}

      <HonestNote tone="green">
        <strong>Preservation by design.</strong> Every entity change writes a version snapshot and an audit entry before it becomes visible. Knowledge is never deleted silently — corrections are additive and traceable.
      </HonestNote>
    </div>
  )
}

// ---------------- MEDIA ----------------
export function MediaSection({ onNavigate }: { onOpenEntity: (slug: string) => void; onNavigate: (s: string) => void }) {
  const { t } = useI18n()
  return (
    <div className="space-y-6">
      <SectionHeading
        kicker={t('sec.media.kicker')}
        title={t('sec.media.title')}
        lede={t('sec.media.lede')}
      />
      <EmptyState icon={ScrollText} title="Media registry — reserved, not padded">
        <p>
          No media items are registered yet, and 165 will not invent placeholders. Documentaries, interviews and
          photography enter only with rights, sources and subjects recorded.{' '}
          <button onClick={() => onNavigate('contribute')} className="underline underline-offset-2">Propose media for registration</button>
        </p>
      </EmptyState>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {['Video', 'Audio', 'Documentary', 'Interviews', 'Photography', 'Articles'].map((k) => (
          <div key={k} className="rounded-md border border-border bg-card p-4 text-center">
            <p className="font-display text-sm font-semibold">{k}</p>
            <p className="text-muted-foreground mt-1 text-[12px]">0 registered</p>
          </div>
        ))}
      </div>
    </div>
  )
}
