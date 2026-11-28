'use client'

// 165 — RUANG BACAAN: Wiridian & Bacaan TQN (Source-First, display-only)
// Qasidah · Sholawat · Wiridian · Dzikir — teks Arab terlestarikan
// (dir="rtl") + transliterasi Latin + arti Bahasa Sunda & Indonesia +
// tafsir makna berurut. Data dari DB (CMS-managed) dengan fallback
// arsip bundled — ruang tidak boleh gelap.
import { useEffect, useMemo, useState } from 'react'
import { BookOpenText, Heart, Repeat2, Sparkles, AudioLines, ChevronDown, Compass, Save } from 'lucide-react'
import { cn } from '@/lib/utils'
import { t } from '@/lib/i18n'
import type { CatalogKey } from '@/lib/i18n/catalog'
import { EvidenceBadge, HonestNote, SectionHeading, useApi } from '../ui'
import { Button } from '@/components/ui/button'
import { Reveal, Stagger, StaggerItem } from '../motion'
import { lastOfflineStamp, saveWiridianOffline } from '@/lib/offline-store'
import { WB_ADAB, WB_LEDE, WB_TUJUAN, WIRIDIAN_ENTRIES, type WbEntry, type WbVerse } from '@/data/wiridian/bacaan'
import { QasidahAudioPlayer } from './qasidah-audio'

type ApiEntry = {
  id: string | null
  slug: string
  kind: string
  order: number
  titleAr: string
  titleId: string
  titleSu: string | null
  subtitleId: string | null
  ledeId: string | null
  grade: string
  status: string
  sourceRef: string | null
  noteId: string | null
  verses: {
    order: number
    arabic: string
    latin: string | null
    meaningSu: string | null
    meaningId: string | null
    tafsirId: string | null
    tafsirAr: string | null
  }[]
}

const KIND_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  QASIDAH: AudioLines,
  SHOLAWAT: Sparkles,
  WIRIDIAN: Repeat2,
  DZIKIR: Heart,
  DUAA: BookOpenText,
}

const KIND_LABELS: Record<string, string> = {
  QASIDAH: 'Qasidah',
  SHOLAWAT: 'Sholawat',
  WIRIDIAN: 'Wiridian',
  DZIKIR: 'Dzikir',
  DUAA: 'Doa',
}

const STATUS_LABELS: Record<string, string> = {
  DOCUMENTED: 'Terdokumentasi',
  TRADITIONAL_ACCOUNT: 'Warisan tradisi',
  DISPUTED: 'Diperselisihkan',
  UNVERIFIED: 'Belum terverifikasi',
}

function fallbackEntries(): ApiEntry[] {
  return WIRIDIAN_ENTRIES.map((e: WbEntry) => ({
    id: null,
    slug: e.slug,
    kind: e.kind,
    order: e.order,
    titleAr: e.titleAr,
    titleId: e.titleId,
    titleSu: e.titleSu ?? null,
    subtitleId: e.subtitleId,
    ledeId: e.ledeId,
    grade: e.grade,
    status: e.status,
    sourceRef: e.sourceRef,
    noteId: e.noteId,
    verses: e.verses.map((v: WbVerse) => ({
      order: v.order,
      arabic: v.arabic,
      latin: v.latin,
      meaningSu: v.meaningSu ?? null,
      meaningId: v.meaningId,
      tafsirId: v.tafsirId,
      tafsirAr: v.tafsirAr ?? null,
    })),
  }))
}

// ---------- satu bait ----------
function VerseCard({ v, open, onToggle }: { v: ApiEntry['verses'][number]; open: boolean; onToggle: () => void }) {
  const hasTafsir = !!v.tafsirId
  return (
    <div className="border-border bg-card/80 overflow-hidden rounded-2xl border shadow-sm">
      <div className="flex items-start gap-3 p-4 sm:p-5">
        <span className="bg-primary/10 text-primary mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold">
          {v.order}
        </span>
        <div className="min-w-0 flex-1">
          {/* Arab — verbatim, RTL */}
          <p dir="rtl" lang="ar" className="text-right text-[21px] leading-[2.05] sm:text-[23px]">
            {v.arabic}
          </p>
          {/* Latin */}
          {v.latin && (
            <p className="text-muted-foreground mt-1.5 text-[12.5px] italic leading-relaxed">
              <span className="label-caps text-[10px] not-italic">Latin · </span>
              {v.latin}
            </p>
          )}
          {/* Arti Sunda */}
          {v.meaningSu && (
            <p className="border-[var(--khidr)]/50 bg-secondary/30 mt-2.5 rounded-lg border-l-2 px-3 py-2 text-[13px] leading-relaxed text-foreground/85">
              <span className="label-caps text-[var(--khidr)] text-[10px]">Arti · Sunda · </span>
              {v.meaningSu}
            </p>
          )}
          {/* Arti Indonesia */}
          {v.meaningId && (
            <p className="text-muted-foreground mt-2 text-[13px] leading-relaxed">
              <span className="label-caps text-[10px]">Arti · Indonesia · </span>
              {v.meaningId}
            </p>
          )}
          {/* Tafsir (expandable) */}
          {hasTafsir && (
            <div className="mt-2.5">
              <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                className={cn(
                  'border-border bg-background/60 hover:bg-secondary inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                  open && 'bg-primary/10 text-primary border-primary/40',
                )}
              >
                <BookOpenText className="size-3.5" aria-hidden />
                {t('sec.wiridian.tafsir' as CatalogKey)}
                <ChevronDown className={cn('size-3.5 transition-transform duration-200', open && 'rotate-180')} aria-hidden />
              </button>
              {open && (
                <div className="border-border/60 bg-background/50 mt-2.5 space-y-2.5 rounded-xl border p-3.5">
                  {v.tafsirId && (
                    <p className="text-[13px] leading-relaxed">
                      <span className="label-caps text-[var(--brass)] text-[10px]">{t('sec.wiridian.tafsirId' as CatalogKey)} · </span>
                      {v.tafsirId}
                    </p>
                  )}
                  {v.tafsirAr && (
                    <p dir="rtl" lang="ar" className="border-t border-border/50 pt-2.5 text-right text-[15.5px] leading-[2] text-foreground/85">
                      {v.tafsirAr}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function WiridianSection() {
  const { data, loading, error } = useApi<{ source: string; entries: ApiEntry[] }>('/api/wiridian')
  const [kind, setKind] = useState<string>('QASIDAH')
  const [openTafsir, setOpenTafsir] = useState<Set<string>>(new Set())
  const [saving, setSaving] = useState(false)
  const [offlineMsg, setOfflineMsg] = useState<string | null>(null)
  const [offlineStamp, setOfflineStamp] = useState<string | null>(null)

  // muat penanda offline setelah mount (pola defer codebase)
  useEffect(() => {
    const t = window.setTimeout(() => setOfflineStamp(lastOfflineStamp()), 0)
    return () => window.clearTimeout(t)
  }, [])

  const saveOffline = async () => {
    setSaving(true)
    setOfflineMsg(null)
    const res = await saveWiridianOffline()
    setSaving(false)
    setOfflineMsg(res.detail)
    if (res.ok) setOfflineStamp(res.at)
  }

  const entries = useMemo(() => {
    if (error || !data || !data.entries?.length) return fallbackEntries()
    return data.entries
  }, [data, error])

  const kinds = useMemo(() => {
    const seen: string[] = []
    for (const e of entries) if (!seen.includes(e.kind)) seen.push(e.kind)
    return seen
  }, [entries])

  const active = entries.filter((e) => e.kind === kind)
  const toggle = (key: string) => {
    setOpenTafsir((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div className="space-y-10">
      <SectionHeading
        kicker={t('sec.wiridian.kicker' as CatalogKey)}
        title={t('sec.wiridian.title' as CatalogKey)}
        lede={WB_LEDE.id}
      />

      {/* simpan offline (hari ke-90) */}
      <div className="border-border/60 bg-card/70 -mt-4 flex flex-wrap items-center justify-between gap-3 rounded-3xl border p-4">
        <div className="min-w-0">
          <p className="text-sm font-bold">Wiridian Offline Penuh <span className="text-amber-600 dark:text-amber-400">· Beta</span></p>
          <p className="text-muted-foreground mt-0.5 text-[11.5px] leading-relaxed">
            {offlineStamp
              ? `Tersimpan di perangkat: ${new Date(offlineStamp).toLocaleString('id-ID', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })} — bacaan tetap hidup tanpa sinyal.`
              : 'Simpan seluruh bacaan ke perangkat agar tetap terbaca tanpa sinyal.'}
          </p>
        </div>
        <Button size="sm" className="h-9 shrink-0 rounded-full px-4 text-xs" onClick={saveOffline} disabled={saving}>
          <Save className={cn('mr-1.5 size-3.5', saving && 'animate-pulse')} aria-hidden />
          {saving ? 'Menyimpan…' : 'Simpan untuk offline'}
        </Button>
      </div>
      {offlineMsg && <p className="text-muted-foreground -mt-6 text-[11.5px] italic">{offlineMsg}</p>}

      <HonestNote tone="green">
        <span className="label-caps text-[10px]">Untuk yang lupa tujuan · </span>
        {WB_TUJUAN.id}
      </HonestNote>
      <HonestNote tone="amber">
        <span className="label-caps text-[10px]">Adab ruang · </span>
        {WB_ADAB.id}
      </HonestNote>

      {/* ---------- tab jenis bacaan ---------- */}
      <div role="tablist" aria-label={t('sec.wiridian.kicker' as CatalogKey)} className="flex flex-wrap gap-1.5">
        {kinds.map((k) => {
          const Icon = KIND_ICONS[k] ?? BookOpenText
          const isOn = kind === k
          return (
            <button
              key={k}
              role="tab"
              aria-selected={isOn}
              onClick={() => setKind(k)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[12.5px] font-semibold transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                isOn
                  ? 'bg-primary text-primary-foreground v4-glow scale-[1.03]'
                  : 'border-border text-muted-foreground hover:bg-secondary hover:text-foreground border bg-card',
              )}
            >
              <Icon className="size-4" aria-hidden />
              {KIND_LABELS[k] ?? k}
            </button>
          )
        })}
      </div>

      {/* ---------- entri bacaan ---------- */}
      {loading && !entries.length ? (
        <div className="space-y-4">
          {[0, 1].map((i) => (
            <div key={i} className="animate-pulse rounded-2xl border border-border bg-card p-6">
              <div className="bg-muted mx-auto h-8 w-2/3 rounded-full" />
              <div className="bg-muted mt-3 h-3 w-1/3 rounded-full" />
              <div className="bg-muted mt-4 h-24 w-full rounded-xl" />
            </div>
          ))}
        </div>
      ) : (
        <Stagger className="space-y-8">
          {active.map((entry) => (
            <StaggerItem key={entry.slug}>
              <article className="border-border bg-gradient-to-b from-card to-card/60 overflow-hidden rounded-3xl border shadow-sm">
                {/* header */}
                <div className="border-border/60 bg-secondary/30 px-4 py-5 sm:px-6">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="label-caps text-primary text-[10px]">{KIND_LABELS[entry.kind] ?? entry.kind}</span>
                    <EvidenceBadge level={entry.grade} withLabel />
                    <span className="text-muted-foreground/80 text-[10.5px]">{STATUS_LABELS[entry.status] ?? entry.status}</span>
                  </div>
                  <p dir="rtl" lang="ar" className="text-[var(--brass)] mt-2 text-right text-[26px] leading-[1.9] sm:text-[30px]">
                    {entry.titleAr}
                  </p>
                  <h3 className="text-foreground mt-1 text-[17px] font-bold sm:text-[19px]">{entry.titleId}</h3>
                  {entry.titleSu && <p className="text-muted-foreground text-[13px] italic">{entry.titleSu}</p>}
                  {entry.subtitleId && <p className="text-muted-foreground mt-1 text-[13px]">{entry.subtitleId}</p>}
                  {entry.ledeId && <p className="text-foreground/80 mt-3 text-[13.5px] leading-relaxed">{entry.ledeId}</p>}
                </div>

                {/* audio qasidah — narasi arti beta + slot rekaman majelis (hari ke-45) */}
                {entry.slug === 'qasidah-ibadallah-rijalallah' && (
                  <div className="px-4 pt-4 sm:px-6">
                    <QasidahAudioPlayer
                      verses={entry.verses.map((v) => ({
                        order: v.order,
                        arabic: v.arabic,
                        meaningId: v.meaningId,
                      }))}
                    />
                  </div>
                )}

                {/* bait */}
                <div className="divide-border/50 divide-y px-4 py-4 sm:px-6">
                  <Stagger className="space-y-4">
                    {entry.verses.map((v) => (
                      <StaggerItem key={v.order}>
                        <VerseCard
                          v={v}
                          open={openTafsir.has(`${entry.slug}-${v.order}`)}
                          onToggle={() => toggle(`${entry.slug}-${v.order}`)}
                        />
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>

                {/* catatan adab + sumber */}
                <div className="border-border/60 bg-background/40 space-y-2 border-t px-4 py-4 sm:px-6">
                  {entry.noteId && (
                    <p className="border-[var(--khidr)]/50 text-foreground/80 border-l-2 pl-3 text-[12.5px] leading-relaxed">
                      <span className="label-caps text-[var(--khidr)] text-[10px]">Adab & amalan · </span>
                      {entry.noteId}
                    </p>
                  )}
                  {entry.sourceRef && (
                    <p className="text-muted-foreground font-mono text-[11px] leading-relaxed">
                      <span className="label-caps text-[10px]">Sumber · </span>
                      {entry.sourceRef}
                    </p>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {/* penutup — kompas tujuan */}
      <Reveal>
        <div className="border-border/70 bg-card/60 mx-auto flex max-w-3xl items-start gap-3 rounded-2xl border p-5">
          <Compass className="text-primary mt-0.5 size-5 shrink-0" aria-hidden />
          <p className="text-foreground/80 text-[13px] leading-relaxed">
            <span className="label-caps text-primary text-[10px]">{t('sec.wiridian.kompas' as CatalogKey)} · </span>
            {WB_TUJUAN.id}
          </p>
        </div>
      </Reveal>
    </div>
  )
}
