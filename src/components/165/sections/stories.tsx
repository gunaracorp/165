'use client'

// 165 — KISAH & HIKMAH: warisan naratif dengan disiplin bukti.
// Setiap kisah membawa genre, sumber bernama, dan tingkat bukti — narasi
// tradisional tidak pernah diangkat jadi fakta secara senyap.
import { useMemo, useState } from 'react'
import { BookHeart, ExternalLink, GraduationCap, Landmark, ScrollText, Star } from 'lucide-react'
import { ALL_STORIES, GENRE_LABELS, type Story, type StoryGenre } from '@/lib/stories'
import { EvidenceBadge, HonestNote, SectionHeading } from '../ui'
import { EASE_OUT, Reveal, Stagger, StaggerItem, motion } from '../motion'
import { cn } from '@/lib/utils'

type Filter = 'semua' | StoryGenre

const FILTERS: { key: Filter; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'semua', icon: BookHeart },
  { key: 'nabi', icon: ScrollText },
  { key: 'sufi', icon: Star },
  { key: 'aulia', icon: BookHeart },
  { key: 'kejayaan', icon: Landmark },
]

const STATUS_LABELS: Record<Story['status'], string> = {
  TRADITIONAL_ACCOUNT: 'Warisan tradisi',
  DOCUMENTED: 'Terdokumentasi',
  VERIFIED: 'Terverifikasi',
}

function StorySource({ story }: { story: Story }) {
  return (
    <div className="mt-4 border-border/70 space-y-1.5 border-t pt-3">
      <p className="text-muted-foreground font-mono text-[11px] leading-relaxed">
        <span className="label-caps text-[10px]">Sumber · </span>
        {story.source}
      </p>
      <div className="flex flex-wrap items-center gap-1.5">
        <EvidenceBadge level={story.grade} withLabel />
        <span className="text-muted-foreground/80 text-[10.5px]">{STATUS_LABELS[story.status]}</span>
      </div>
    </div>
  )
}

function HikmahLine({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-[var(--khidr)]/50 text-foreground/85 mt-3 border-l-2 pl-3 text-[13px] leading-relaxed">
      <span className="label-caps text-[var(--khidr)] text-[10.5px]">Hikmah · </span>
      {children}
    </p>
  )
}

function StoryCard({ story, onOpenEntity, className, flat }: {
  story: Story
  onOpenEntity?: (slug: string) => void
  className?: string
  flat?: boolean
}) {
  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-md border border-border bg-card p-4 sm:p-5',
        !flat && 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="bg-secondary text-secondary-foreground rounded-sm border border-border px-1.5 py-0.5 text-[11px] font-medium">
          {GENRE_LABELS[story.genre]}
        </span>
      </div>
      <h3 className="font-display mt-2.5 text-[15.5px] leading-snug font-semibold">{story.title}</h3>
      <p className="text-muted-foreground mt-0.5 text-[12px]">
        {story.figure}
        <span aria-hidden> · </span>
        <span className="font-mono">{story.era}</span>
      </p>
      <div className="mt-3 space-y-2.5">
        {story.story.map((para, i) => (
          <p key={i} className="text-muted-foreground text-[13.5px] leading-relaxed">{para}</p>
        ))}
      </div>
      {story.khidr && (
        <div className="border-[var(--khidr)]/50 mt-3.5 rounded-sm border bg-[var(--khidr-soft)]/40 px-3 py-2.5 text-[12.5px] leading-relaxed">
          <span className="label-caps text-[var(--khidr)] text-[10.5px]">Sorotan · </span>
          <strong>Hijau Khidir</strong> — warna identitas 165 mengambil nama dari Nabi Khidir
          &lsquo;alaihissalam: lambang kehidupan, air hidup, dan ilmu yang diberikan rahmat dari sisi Allah.
        </div>
      )}
      <HikmahLine>{story.hikmah}</HikmahLine>
      <StorySource story={story} />
      {story.slug && onOpenEntity && (
        <button
          type="button"
          onClick={() => onOpenEntity(story.slug!)}
          className="text-muted-foreground hover:text-foreground hover:border-[var(--khidr)]/60 mt-3.5 inline-flex w-fit items-center gap-1.5 rounded-sm border border-border px-2.5 py-1.5 text-[12px] font-medium transition-colors"
        >
          <GraduationCap className="size-3.5" aria-hidden />
          Buka profil di registry
          <ExternalLink className="size-3" aria-hidden />
        </button>
      )}
    </article>
  )
}

function TimelineEntry({ story, onOpenEntity }: { story: Story; onOpenEntity?: (slug: string) => void }) {
  // note: the wrapping <li> comes from StaggerItem as="li" — this is its inner body
  return (
    <div className="border-border/60 relative border-l pb-8 pl-6 last:pb-0 sm:pl-8">
      {/* garis emas yang tumbuh saat masuk pandang — menggambar dirinya dari atas */}
      <motion.span
        aria-hidden
        className="bg-[var(--brass)]/55 absolute top-0 bottom-0 left-[-1px] w-px"
        style={{ transformOrigin: 'top' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      />
      <span
        aria-hidden
        className="bg-background border-[var(--brass)] absolute top-1 left-[-7px] size-3.5 rounded-full border-2 shadow-[0_0_0_3px] shadow-[var(--brass)]/15 sm:left-[-9px]"
      />
      <p className="font-display text-[var(--brass-text)] text-lg font-semibold tracking-tight">{story.year}</p>
      <StoryCard story={story} onOpenEntity={onOpenEntity} flat className="mt-2 border-0 p-0" />
    </div>
  )
}

export function StoriesSection({ onOpenEntity }: { onOpenEntity?: (slug: string) => void }) {
  const [filter, setFilter] = useState<Filter>('semua')

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { semua: ALL_STORIES.length, nabi: 0, sufi: 0, aulia: 0, kejayaan: 0 }
    for (const s of ALL_STORIES) c[s.genre] += 1
    return c
  }, [])

  const shown = useMemo(
    () => (filter === 'semua' ? ALL_STORIES : ALL_STORIES.filter((s) => s.genre === filter)),
    [filter],
  )

  const cardStories = shown.filter((s) => s.genre !== 'kejayaan')
  const timelineStories = shown.filter((s) => s.genre === 'kejayaan')

  return (
    <div>
      <SectionHeading
        kicker="Kisah Sufi · Para Aulia · Sejarah Kejayaan & Perjuangan Umat"
        title="Warisan Kisah — Dari Gua Hirā sampai Hari Ini"
        lede="Kisah adalah warisan yang dijaga umat selama berabad-abad. Setiap kisah di sini membawa genre, sumber bernama, dan tingkat bukti — narasi tradisional dipelihara sebagai tradisi, dan narasi yang bersumber Al-Qur'an menyebut ayatnya. Tidak ada yang diangkat jadi fakta secara senyap."
      />

      {/* filter genre */}
      <Reveal className="mt-7 flex flex-wrap gap-2" role="group" aria-label="Saring kisah per genre">
        {FILTERS.map(({ key, icon: Icon }) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            aria-pressed={filter === key}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-sm border px-3 py-2 text-[13px] font-medium transition-all duration-200',
              filter === key
                ? 'border-transparent bg-primary text-primary-foreground shadow-sm'
                : 'border-border bg-card text-muted-foreground hover:text-foreground hover:border-[var(--brass)]/50',
            )}
          >
            <Icon className="size-3.5" aria-hidden />
            {key === 'semua' ? 'Semua' : GENRE_LABELS[key]}
            <span className={cn('rounded-sm px-1 font-mono text-[10.5px]', filter === key ? 'bg-primary-foreground/20' : 'bg-secondary')}>
              {counts[key]}
            </span>
          </button>
        ))}
      </Reveal>

      {/* kisah nabi · sufi · aulia — kartu */}
      {cardStories.length > 0 && (
        <Stagger key={`cards-${filter}`} className="mt-8 grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          {cardStories.map((s) => (
            <StaggerItem key={s.id} className="h-full">
              <StoryCard story={s} onOpenEntity={onOpenEntity} />
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {/* kejayaan & perjuangan — linimasa */}
      {timelineStories.length > 0 && (
        <div className="mt-10">
          <Reveal>
            <p className="label-caps text-[13px] text-muted-foreground">
              {filter === 'semua' || filter === 'kejayaan' ? 'Linimasa kejayaan & perjuangan umat' : 'Linimasa'}
            </p>
            <p className="text-muted-foreground mt-1.5 max-w-2xl text-[13.5px] leading-relaxed">
              Satu garis panjang: ilmu dibuka, dibangun, diruntuhkan, disembunyikan, dan diwariskan lagi — sampai hari ini.
            </p>
          </Reveal>
          <Stagger key={`timeline-${filter}`} as="ul" className="mt-6">
            {timelineStories.map((s) => (
              <StaggerItem key={s.id} as="li">
                <TimelineEntry story={s} onOpenEntity={onOpenEntity} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      )}

      {/* disiplin naratif */}
      <Reveal className="mt-10">
        <HonestNote tone="amber">
          <strong>Disiplin naratif:</strong> kisah nabi yang bersumber Al-Qur&apos;an membawa rujukan surah dan
          ayatnya (tingkat bukti A); kisah para sufi diwariskan dari hagiografi klasik yang disebut namanya
          (tingkat D — warisan tradisi); sejarah kejayaan bersandar pada literatur akademik (tingkat C) dan
          catatan institusional (tingkat B). Perbedaan versi — seperti tahun wafat Syekh Ahmad Khatib Sambas —
          tampil berdampingan, tidak pernah dipilih diam-diam. <em>Unknown is better than fabricated certainty.</em>
        </HonestNote>
      </Reveal>
    </div>
  )
}
