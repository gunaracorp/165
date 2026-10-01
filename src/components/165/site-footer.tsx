'use client'

// 165 — Site Footer v.5 "Emerald Colophon" (SPECTRUM8 god-mode)
// Jangkar gelap sinematik: brand plate · kolofon pendirian · band standar · bar legal.
// Surface gelap permanen → kontras teks dijaga pada KEDUA tema (terang & gelap).
// Prinsip: READABILITY > AESTHETIC · kuningan hanya utk aksen area kecil.

import type { CatalogKey } from '@/lib/i18n/catalog'
import { useI18n } from '@/lib/i18n'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUp,
  BadgeCheck,
  Braces,
  Landmark,
  Languages,
  Share2,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'

type FooterProps = { onNavigate: (s: string) => void }

/* bintang kilau 4-titik — ornamen kolofon (bukan klaim, murni dekoratif) */
function ColophonStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 1.5 14.7 9.3 22.5 12 14.7 14.7 12 22.5 9.3 14.7 1.5 12 9.3 9.3Z" />
    </svg>
  )
}

/* tautan footer: affordance hover (garis kuningan tumbuh) + focus ring */
function FooterLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group -ml-1 inline-flex max-w-full items-center rounded-lg px-1 py-1.5 text-left text-[13.5px] text-white/65 transition-colors duration-200 hover:text-[#f5f1e4] focus-visible:ring-2 focus-visible:ring-[#e3b95c]/60 focus-visible:outline-none"
    >
      <span className="relative [text-wrap:pretty]">
        {label}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#e3b95c]/70 transition-all duration-300 group-hover:w-full"
        />
      </span>
    </button>
  )
}

/* judul kolom — small-caps kuningan */
function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <p className="label-caps text-[12px] tracking-[0.18em] text-[#e3b95c]">{children}</p>
  )
}

const EXPLORE_KEYS = ['explore', 'library', 'archive', 'research'] as const

const INSTITUTION_ITEMS: ReadonlyArray<readonly [section: string, key: CatalogKey]> = [
  ['about', 'nav.about'],
  ['trust', 'nav.trust'],
  ['documents', 'nav.documents'],
  ['academy', 'nav.academy'],
  ['media', 'nav.media'],
  ['seo', 'nav.seo'],
]

const CHIPS: ReadonlyArray<{ icon: LucideIcon; key: CatalogKey }> = [
  { icon: BadgeCheck, key: 'footer.standardsChipWcag' },
  { icon: Languages, key: 'footer.standardsChipLangs' },
  { icon: Braces, key: 'footer.standardsChipSchema' },
  { icon: Smartphone, key: 'footer.standardsChipPwa' },
  { icon: Share2, key: 'footer.standardsChipOg' },
  { icon: Landmark, key: 'footer.standardsChipAppend' },
]

export function SiteFooter({ onNavigate }: FooterProps) {
  const { t } = useI18n()
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="v4-footer-surface relative mt-14 overflow-hidden rounded-t-[2.5rem] pb-[env(safe-area-inset-bottom)] text-white">
      {/* garis rambut kuningan — pembuka sinematik */}
      <div aria-hidden className="h-[3px] w-full bg-gradient-to-r from-[#0f8157] via-[#e3b95c] to-[#0f8157]" />
      {/* lattice khatam — identitas geometris TQN, pudar ke bawah */}
      <div aria-hidden className="v4-footer-lattice pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-14">
        {/* ---------- baris 1 · brand + navigasi ---------- */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.45fr_1fr_1fr_1fr]">
          {/* plate merek */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="v4-glow-gold flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-emerald-500 to-[var(--brass)] font-display text-[15px] font-bold tracking-tight text-white ring-1 ring-white/25">
                165
              </span>
              <div>
                <p className="font-display text-2xl leading-none font-semibold text-[#f5f1e4]">165</p>
                <p className="label-caps mt-1 text-[11px] tracking-[0.14em] text-white/60">
                  {t('header.tagline')}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/70">
              {t('footer.desc')}
            </p>
            {/* slogan — chip kredibilitas */}
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#e3b95c]/30 bg-[#e3b95c]/[0.08] px-3 py-1.5 text-[12px] font-medium text-[#eed9a4]">
              <ShieldCheck className="size-3.5 shrink-0" aria-hidden />
              {t('footer.everyStatement')}
            </p>
            <p className="mt-2.5 inline-flex items-center gap-1.5 text-[12px] text-white/55">
              <Languages className="size-3.5 shrink-0 text-[#e3b95c]/80" aria-hidden />
              {t('footer.langsNote')}
            </p>
          </div>

          {/* kolom jelajah */}
          <nav aria-label="Footer — explore">
            <ColHead>{t('footer.colExplore')}</ColHead>
            <ul className="mt-2.5 space-y-0.5 text-[13.5px]">
              {EXPLORE_KEYS.map((k) => (
                <li key={k}>
                  <FooterLink label={t(`nav.${k}` as CatalogKey)} onClick={() => onNavigate(k)} />
                </li>
              ))}
            </ul>
          </nav>

          {/* kolom institusi */}
          <nav aria-label="Footer — institution">
            <ColHead>{t('footer.colInstitution')}</ColHead>
            <ul className="mt-2.5 space-y-0.5 text-[13.5px]">
              {INSTITUTION_ITEMS.map(([section, key]) => (
                <li key={section}>
                  <FooterLink label={t(key)} onClick={() => onNavigate(section)} />
                </li>
              ))}
            </ul>
          </nav>

          {/* kolom partisipasi */}
          <div>
            <ColHead>{t('footer.colParticipate')}</ColHead>
            <ul className="mt-2.5 space-y-0.5 text-[13.5px]">
              <li><FooterLink label={t('footer.contributeLink')} onClick={() => onNavigate('contribute')} /></li>
              <li><FooterLink label={t('footer.correctionLink')} onClick={() => onNavigate('contribute')} /></li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('admin')}
                  aria-label={t('footer.adminLink')}
                  className="group -ml-1 inline-flex max-w-full items-center gap-1.5 rounded-lg px-1 py-1.5 text-left text-[13.5px] text-white/65 transition-colors duration-200 hover:text-[#f5f1e4] focus-visible:ring-2 focus-visible:ring-[#e3b95c]/60 focus-visible:outline-none"
                >
                  <ShieldCheck className="size-3.5 shrink-0 text-[#e3b95c]" aria-hidden />
                  <span className="relative [text-wrap:pretty]">
                    {t('footer.adminLink')}
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#e3b95c]/70 transition-all duration-300 group-hover:w-full"
                    />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- baris 2 · KOLOFON PENDIRIAN (plakat museum) ---------- */}
        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#e3b95c]/25 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-5 py-8 text-center sm:px-10 sm:py-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(32rem_11rem_at_50%_-22%,oklch(0.72_0.1_85/0.16),transparent_70%)]"
          />
          <div className="relative">
            {/* kicker berornamen */}
            <div className="flex items-center justify-center gap-3 text-[#e3b95c]">
              <span aria-hidden className="h-px w-8 bg-gradient-to-r from-transparent to-[#e3b95c]/60 sm:w-12" />
              <ColophonStar className="size-2.5" />
              <p className="label-caps text-[12.5px] tracking-[0.22em]">{t('footer.colophonKicker')}</p>
              <ColophonStar className="size-2.5" />
              <span aria-hidden className="h-px w-8 bg-gradient-to-l from-transparent to-[#e3b95c]/60 sm:w-12" />
            </div>

            {/* kredit inti — verbatim permintaan pendiri */}
            <p className="font-display mx-auto mt-5 max-w-4xl text-balance text-[1.2rem] leading-snug font-semibold text-[#f5f1e4] sm:text-[1.45rem]">
              {t('footer.colophonTitle')}
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/75 sm:text-[14.5px]">
              {t('footer.colophonBody')}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-[11.5px] leading-relaxed text-white/55">
              {t('footer.colophonNote')}
            </p>
          </div>
        </div>

        {/* ---------- baris 3 · band standar dunia ---------- */}
        <section aria-label={t('footer.standardsTitle')} className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <ColHead>{t('footer.standardsTitle')}</ColHead>
            <button
              type="button"
              onClick={() => onNavigate('trust')}
              className="group inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[12.5px] font-semibold text-[#eed9a4] transition-colors duration-200 hover:text-[#f5f1e4] focus-visible:ring-2 focus-visible:ring-[#e3b95c]/60 focus-visible:outline-none"
            >
              {t('footer.standardsLink')}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            {CHIPS.map(({ icon: Icon, key }) => (
              <span
                key={key}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[12px] font-medium text-white/75 transition-colors duration-200 hover:bg-white/[0.09]"
              >
                <Icon className="size-3.5 shrink-0 text-[#e3b95c]" aria-hidden />
                {t(key)}
              </span>
            ))}
          </div>
        </section>

        {/* ---------- baris 4 · bar legal ---------- */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] leading-relaxed text-white/60">
            {t('footer.rightsPrefix')}{' '}
            <strong className="font-medium text-[#f5f1e4]">Tuan Haji Gugun Gunara — Muhammad Lutfi Azmi</strong>
            {', '}
            {t('footer.rightsRole')}.
          </p>
          <div className="flex items-center gap-3">
            <p className="font-mono text-[12px] text-white/50">165.web.id</p>
            <button
              type="button"
              onClick={toTop}
              aria-label={t('footer.backToTop')}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-[#e3b95c]/60 focus-visible:outline-none active:translate-y-0"
            >
              <ArrowUp className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
