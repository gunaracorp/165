'use client'

// 165 — RAHASIA ROOM: Rahasia Al-Qur'an & Hadis (Source-First, adab terhadap rahasia)
// Lima pilar: Zahir & Batin · Misteri · Ilmu Penjaga · Peringatan · Dzikr & Sirr.
// Teks Arab hanya yang terlestarikan verbatim (mushaf / kitab induk) — dir="rtl".
// Setiap butir ber-grade: A mushaf · B kitab induk · C karya ulama · D riwayat masyhur.
import { useState } from 'react'
import { BookMarked, KeyRound, Landmark, ShieldAlert, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { t, useI18n } from '@/lib/i18n'
import type { CatalogKey } from '@/lib/i18n/catalog'
import { EvidenceBadge, HonestNote, SectionHeading, StatusBadge } from '../ui'
import {
  ARABIC_NOTE, CLOSING_NOTE, GRADE_NOTE, ITEMS, LEDE, PILLARS,
  type LangText, type RhItem, type RhPillar,
} from '@/data/rahasia/kitab-suci'

const PILAR_TABS: RhPillar[] = ['makna', 'misteri', 'ilmu', 'peringatan', 'dzikir']

const TAB_ICONS: Record<RhPillar, React.ComponentType<{ className?: string }>> = {
  makna: KeyRound,
  misteri: Sparkles,
  ilmu: BookMarked,
  peringatan: ShieldAlert,
  dzikir: Landmark,
}

export function RahasiaSection() {
  const { lang } = useI18n()
  const [pillar, setPillar] = useState<RhPillar>('makna')
  const L = (f: LangText) => (lang === 'en' ? f.en : f.id)
  const items = ITEMS.filter((i) => i.pillar === pillar)
  const meta = PILLARS[pillar]

  return (
    <div className="space-y-10">
      <SectionHeading
        kicker={t('sec.rahasia.kicker')}
        title={t('sec.rahasia.title')}
        lede={L(LEDE)}
      />

      <HonestNote tone="green">{L(GRADE_NOTE)}</HonestNote>
      <HonestNote tone="amber">{L(ARABIC_NOTE)}</HonestNote>

      {/* ---------- tab pilar ---------- */}
      <div role="tablist" aria-label={t('sec.rahasia.title')} className="flex flex-wrap gap-1.5">
        {PILAR_TABS.map((p) => {
          const Icon = TAB_ICONS[p]
          const active = pillar === p
          return (
            <button
              key={p}
              role="tab"
              aria-selected={active}
              onClick={() => setPillar(p)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[12.5px] font-semibold transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                active ? 'bg-primary text-primary-foreground v4-glow scale-[1.03]' : 'border-border text-muted-foreground hover:bg-secondary hover:text-foreground border bg-card',
              )}
            >
              <Icon className="size-3.5" aria-hidden />
              {t(`rh.tab.${p}` as CatalogKey)}
            </button>
          )
        })}
      </div>

      {/* ---------- pilar aktif ---------- */}
      <section aria-label={t(`rh.tab.${pillar}` as CatalogKey)}>
        <div className="max-w-3xl">
          <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">{L(meta.title)}</h3>
          <p className="text-muted-foreground mt-2 text-[14px] leading-relaxed">{L(meta.lede)}</p>
          <p className="mt-1.5 text-[12px] font-medium text-[var(--brass)]">
            {t('rh.count', { n: items.length })}
          </p>
        </div>

        <ul className="mt-5 space-y-4">
          {items.map((i: RhItem) => (
            <li key={i.globalId} className="v4-card rounded-[1.35rem] border border-border bg-card px-5 py-5 sm:px-6">
              {/* kepala butir */}
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-mono text-[10px] text-[var(--brass)]">{i.globalId}</p>
                {i.citation && (
                  <span className="rounded-full border border-[var(--brass)]/35 bg-[var(--brass-soft)]/50 px-2.5 py-0.5 font-mono text-[10.5px] font-bold text-[#6b4f18]">
                    {i.citation}
                  </span>
                )}
                <div className="ml-auto flex items-center gap-1.5">
                  <EvidenceBadge level={i.grade} withLabel />
                  <StatusBadge status={i.status} />
                </div>
              </div>

              <h4 className="font-display mt-2.5 text-[16.5px] leading-snug font-semibold">{L(i.title)}</h4>

              {/* panel Arab (verbatim) */}
              {i.arabic && (
                <div className="mt-3.5 overflow-hidden rounded-2xl border border-border bg-secondary/40">
                  <p dir="rtl" lang="ar" className="font-serif px-5 pt-4 pb-1 text-center text-[22px] leading-[2.1] sm:text-[24px]">
                    {i.arabic}
                  </p>
                  <p className="border-t border-border/60 bg-background/50 px-5 py-2.5 text-[13px] leading-relaxed text-foreground/80">
                    <span className="label-caps mr-2 text-[10px] tracking-[0.14em] text-[var(--brass)]">{t('rh.meaning')}</span>
                    {L(i.meaning)}
                  </p>
                </div>
              )}
              {!i.arabic && (
                <p className="text-muted-foreground mt-2.5 text-[14px] leading-relaxed">{L(i.meaning)}</p>
              )}

              <p className="mt-3 text-[13.5px] leading-relaxed">{L(i.body)}</p>

              {i.note && (
                <p className="mt-3 rounded-xl border border-dashed border-amber-600/35 bg-amber-50 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
                  {L(i.note)}
                </p>
              )}

              <p className="mt-3 text-[12px] leading-relaxed text-[#6b4f18]">
                <span className="font-semibold">{t('rh.source')}:</span> {i.source}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <HonestNote tone="green">{L(CLOSING_NOTE)}</HonestNote>
    </div>
  )
}
