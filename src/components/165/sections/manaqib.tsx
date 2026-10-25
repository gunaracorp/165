'use client'

// 165 — MANAQIB ROOM: Manaqib Syekh Abdul Qodir Al-Jaelani (lengkap, Source-First)
// Tujuh ruang: Riwayat · Karya · Silsilah · Karamah · Hikam · Dalam TQN · Sumber.
// Dua genre dipisah jujur: sejarah (Documented) vs manakib (Traditional Account) —
// badge bukti menempel pada SETIAP butir; tradisi tidak pernah jadi fakta.
import { useState } from 'react'
import {
  BookOpen, ChevronRight, Landmark, Link2, ScrollText,
  ShieldCheck, Sparkles, UserRound,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { t, useI18n } from '@/lib/i18n'
import type { CatalogKey } from '@/lib/i18n/catalog'
import { EvidenceBadge, HonestNote, Kicker, SectionHeading, StatusBadge } from '../ui'
import {
  CLOSING_NOTE, GENRE_NOTE, HIKAM, HIKAM_NOTE, IDENTITY, KARAMAH, KARAMAH_NOTE,
  KARYA, LEDE, RIWAYAT, SILSILAH, SILSILAH_NOTE, SILSILAH_TITLE, SOURCES, TQN_CARDS,
  type Hikam, type LangText, type MqRecord, type MqSource, type SilsilahLink,
} from '@/data/manaqib/al-jilani'

const TABS = ['riwayat', 'karya', 'silsilah', 'karamah', 'hikam', 'tqn', 'sumber'] as const
type TabKey = (typeof TABS)[number]

const TAB_ICONS: Record<TabKey, React.ComponentType<{ className?: string }>> = {
  riwayat: UserRound,
  karya: BookOpen,
  silsilah: Link2,
  karamah: Sparkles,
  hikam: ScrollText,
  tqn: Landmark,
  sumber: ShieldCheck,
}

export function ManaqibSection({ onOpenEntity }: { onOpenEntity?: (slug: string) => void }) {
  const { t, lang } = useI18n()
  const [tab, setTab] = useState<TabKey>('riwayat')
  const L = (f: LangText) => (lang === 'en' ? f.en : f.id)

  return (
    <div className="space-y-10">
      <SectionHeading
        kicker={t('sec.manaqib.kicker')}
        title={t('sec.manaqib.title')}
        lede={L(LEDE)}
      />

      {/* ---------- kartu identitas (mesh v.4) ---------- */}
      <section aria-labelledby="mq-id-h" className="v4-mesh relative overflow-hidden rounded-[2rem] border border-border px-5 py-7 sm:px-8 sm:py-9">
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="v4-glow-gold inline-flex items-center gap-2 rounded-full border border-[var(--brass)]/40 bg-[var(--brass-soft)]/70 px-3 py-1 font-mono text-[11px] font-bold text-[#6b4f18]">
              {IDENTITY.globalId}
            </span>
            <Kicker className="border-transparent bg-transparent px-0 text-[11px]">{L(IDENTITY.honorific)}</Kicker>
          </div>
          <h2 id="mq-id-h" className="font-display mt-3 text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
            {L(IDENTITY.name)}
          </h2>
          <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              [t('mq.label.born'), L(IDENTITY.born)],
              [t('mq.label.died'), L(IDENTITY.died)],
              [t('mq.label.school'), L(IDENTITY.school)],
              [t('mq.label.rest'), L(IDENTITY.rest)],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
                <dt className="label-caps text-[10.5px] tracking-[0.16em] text-[var(--brass)]">{k}</dt>
                <dd className="mt-1 text-[13.5px] leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-4 flex flex-wrap gap-2">
            {IDENTITY.titles.map((x) => (
              <li key={x.id} className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-[12px] text-foreground/85">
                <span aria-hidden className="bg-[var(--brass)] size-1.5 rounded-full" />
                {L(x)}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onOpenEntity?.(IDENTITY.slug)}
            className="group mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-[13px] font-bold text-primary-foreground v4-glow transition-all duration-200 hover:scale-[1.03] active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {t('mq.openProfile')}
            <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </button>
        </div>
      </section>

      <HonestNote tone="amber">{L(GENRE_NOTE)}</HonestNote>

      {/* ---------- tab pills ---------- */}
      <div role="tablist" aria-label={t('sec.manaqib.title')} className="flex flex-wrap gap-1.5">
        {TABS.map((k) => {
          const Icon = TAB_ICONS[k]
          const active = tab === k
          return (
            <button
              key={k}
              role="tab"
              aria-selected={active}
              onClick={() => setTab(k)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[12.5px] font-semibold transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                active ? 'bg-primary text-primary-foreground v4-glow scale-[1.03]' : 'border-border text-muted-foreground hover:bg-secondary hover:text-foreground border bg-card',
              )}
            >
              <Icon className="size-3.5" aria-hidden />
              {t(`mq.tab.${k}` as CatalogKey)}
            </button>
          )
        })}
      </div>

      {/* ================= RIWAYAT ================= */}
      {tab === 'riwayat' && (
        <section aria-label={t('mq.tab.riwayat')}>
          <ol className="relative space-y-3 border-l border-border pl-4 sm:pl-6">
            {RIWAYAT.map((r) => <MqCard key={r.globalId} r={r} L={L} timeline />)}
          </ol>
        </section>
      )}

      {/* ================= KARYA ================= */}
      {tab === 'karya' && (
        <section aria-label={t('mq.tab.karya')}>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {KARYA.map((r) => <MqCard key={r.globalId} r={r} L={L} flat />)}
          </ul>
        </section>
      )}

      {/* ================= SILSILAH ================= */}
      {tab === 'silsilah' && (
        <section aria-label={t('mq.tab.silsilah')}>
          <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">{L(SILSILAH_TITLE)}</h3>
          <HonestNote className="mt-3" tone="green">{L(SILSILAH_NOTE)}</HonestNote>
          <ol className="mt-5 space-y-2.5">
            {SILSILAH.map((s: SilsilahLink, i) => (
              <li key={s.order}>
                <div className={cn(
                  'flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-2xl border px-4 py-3',
                  i === SILSILAH.length - 1 ? 'border-[var(--brass)]/40 bg-[var(--brass-soft)]/30' : 'border-border bg-card',
                )}>
                  <span className="font-display inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-[12px] font-bold">
                    {s.order}
                  </span>
                  <p className="text-[14.5px] font-semibold">{s.name}</p>
                  <p className="font-mono text-[11.5px] text-muted-foreground">{s.era} · {s.place}</p>
                  <div className="ml-auto flex items-center gap-1.5">
                    <EvidenceBadge level={s.grade} />
                    <StatusBadge status={s.status} withLabel={false} />
                  </div>
                </div>
                {s.note && (
                  <p className="text-muted-foreground mt-1.5 ml-11 text-[12.5px] leading-relaxed">{L(s.note)}</p>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ================= KARAMAH ================= */}
      {tab === 'karamah' && (
        <section aria-label={t('mq.tab.karamah')}>
          <HonestNote tone="amber">{L(KARAMAH_NOTE)}</HonestNote>
          <ul className="nice-scroll mt-4 max-h-[36rem] space-y-3 overflow-y-auto pr-1.5">
            {KARAMAH.map((r) => <MqCard key={r.globalId} r={r} L={L} flat />)}
          </ul>
        </section>
      )}

      {/* ================= HIKAM ================= */}
      {tab === 'hikam' && (
        <section aria-label={t('mq.tab.hikam')}>
          <HonestNote tone="green">{L(HIKAM_NOTE)}</HonestNote>
          <ul className="mt-4 space-y-3">
            {HIKAM.map((h: Hikam) => (
              <li key={h.globalId} className="v4-card rounded-2xl border border-border bg-card px-5 py-4 sm:px-6">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-[10px] text-[var(--brass)]">{h.globalId}</p>
                  <EvidenceBadge level={h.grade} />
                  <StatusBadge status={h.status} />
                </div>
                <h4 className="font-display mt-2 text-[15.5px] font-semibold">{L(h.title)}</h4>
                {h.quote && (
                  <blockquote className="mt-2.5 rounded-xl border-l-4 border-[var(--brass)]/60 bg-[var(--brass-soft)]/25 px-4 py-3 font-display text-[15px] leading-relaxed">
                    {h.quote}
                  </blockquote>
                )}
                <p className="text-muted-foreground mt-2.5 text-[13.5px] leading-relaxed">{L(h.body)}</p>
                <p className="mt-2.5 text-[12px] leading-relaxed text-[#6b4f18]"><span className="font-semibold">{t('mq.source')}:</span> {h.source}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ================= DALAM TQN ================= */}
      {tab === 'tqn' && (
        <section aria-label={t('mq.tab.tqn')}>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {TQN_CARDS.map((c) => (
              <li key={c.globalId} className="v4-card rounded-2xl border border-border bg-card px-5 py-4">
                <p className="font-mono text-[10px] text-[var(--brass)]">{c.globalId}</p>
                <h4 className="font-display mt-1.5 text-[15.5px] font-semibold">{L(c.title)}</h4>
                <p className="text-muted-foreground mt-2 text-[13.5px] leading-relaxed">{L(c.body)}</p>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <EvidenceBadge level={c.grade} withLabel />
                  <StatusBadge status={c.status} />
                </div>
                <p className="mt-2.5 text-[12px] leading-relaxed text-[#6b4f18]"><span className="font-semibold">{t('mq.source')}:</span> {c.source}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-2xl border border-dashed border-[var(--brass)]/45 bg-[var(--brass-soft)]/20 px-5 py-4 text-[13.5px] leading-relaxed">
            <strong className="font-display">{t('mq.sanadTitle')}</strong>
            <p className="text-muted-foreground mt-1">{t('mq.sanadBody')}</p>
          </div>
        </section>
      )}

      {/* ================= SUMBER ================= */}
      {tab === 'sumber' && (
        <section aria-label={t('mq.tab.sumber')}>
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {SOURCES.map((s: MqSource) => (
              <li key={s.globalId} className="flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-3.5 sm:px-5">
                <p className="min-w-0 flex-1 basis-56 text-[13.5px] leading-snug font-semibold">{s.label}</p>
                <p className="text-muted-foreground basis-full text-[12px] leading-relaxed sm:basis-64">{L(s.kind)}</p>
                <div className="ml-auto flex items-center gap-1.5">
                  <EvidenceBadge level={s.grade} />
                  <StatusBadge status={s.status} withLabel={false} />
                </div>
              </li>
            ))}
          </ul>
          <HonestNote className="mt-4" tone="green">{L(CLOSING_NOTE)}</HonestNote>
        </section>
      )}
    </div>
  )
}

// ---------- butir MqRecord (gaya timeline / flat) ----------
function MqCard({ r, L, timeline, flat }: { r: MqRecord; L: (f: LangText) => string; timeline?: boolean; flat?: boolean }) {
  return (
    <li className={cn(timeline && 'relative')}>
      {timeline && (
        <span aria-hidden className="border-border bg-background absolute top-5 -left-[21px] inline-block size-2.5 rounded-full border-2 sm:-left-[29px]" />
      )}
      <div className={cn('h-full rounded-2xl border border-border bg-card px-4 py-3.5 sm:px-5', flat && 'v4-card')}>
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-[10px] text-[var(--brass)]">{r.globalId}</p>
          {r.date && (
            <span className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground">{L(r.date)}</span>
          )}
          <div className="ml-auto flex items-center gap-1.5">
            <EvidenceBadge level={r.grade} />
            <StatusBadge status={r.status} withLabel={false} />
          </div>
        </div>
        <h4 className="font-display mt-2 text-[15.5px] leading-snug font-semibold">{L(r.title)}</h4>
        <p className="text-muted-foreground mt-1.5 text-[13.5px] leading-relaxed">{L(r.body)}</p>
        {r.note && (
          <p className="mt-2 rounded-xl border border-dashed border-amber-600/35 bg-amber-50 px-3 py-2 text-[12.5px] leading-relaxed text-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
            {L(r.note)}
          </p>
        )}
        <p className="mt-2.5 text-[12px] leading-relaxed text-[#6b4f18]"><span className="font-semibold">{t('mq.source')}:</span> {r.source}</p>
      </div>
    </li>
  )
}
