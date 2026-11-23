'use client'

// 165 — AKADEMI 165 (beta, roadmap hari ke-86 & ke-89)
// Kurikulum berjenjang yang nyata: tiap jenjang memetakan modul ke ruang
// situs yang SUDAH ada + hari Roadmap 99 — belajar sambil memakai arsip.
// Sertifikasi Kurator (beta) = sertifikasi internal arsip 165, BUKAN
// ijazah thariqat/sanad — keijazaan hanya dari mursyid melalui baiat.
import { Circle, GraduationCap, Languages, ScrollText, ShieldCheck } from 'lucide-react'
import type { EntitySummaryDTO } from '@/lib/165'
import { useI18n } from '@/lib/i18n'
import { EntityCard } from '../entity-card'
import { EvidenceBadge, EmptyState, Kicker, SectionHeading, SkeletonCard, StatusBadge, TypeBadge, useApi, HonestNote } from '../ui'

type Term = EntitySummaryDTO & { summary?: string | null; summaryId?: string | null; nameVariants: { name: string; language: string; kind: string }[] }

interface Modul { nama: string; ruang: string }
interface Jenjang {
  id: string
  nama: string
  sub: string
  hari: string
  modul: Modul[]
}

const JENJANG: Jenjang[] = [
  {
    id: 'ikhwan-baru',
    nama: 'Jenjang 1 — Ikhwan & Akhwat Baru',
    sub: 'Mengenal arsip, adab, dan peta perjalanan — tidak ada yang lompat.',
    hari: 'Roadmap hari 1–14',
    modul: [
      { nama: 'Peta Situs & Ruang', ruang: 'explore' },
      { nama: 'Adab Majelis Dzikir', ruang: 'roadmap' },
      { nama: 'Bacaan Dasar: Qasidah & Wiridian', ruang: 'wiridian' },
      { nama: 'Kisah & Hikmah Aulia', ruang: 'stories' },
    ],
  },
  {
    id: 'murid-bacaan',
    nama: 'Jenjang 2 — Murid Bacaan',
    sub: 'Rutin ibadah harian dengan alat digital: tasbih, wirid, konsistensi.',
    hari: 'Roadmap hari 15–33',
    modul: [
      { nama: 'Tasbih Digital & Target Harian', ruang: 'tasbih' },
      { nama: 'Roadmap 99 Hari Menuju Sempurna', ruang: 'roadmap' },
      { nama: 'Waktu Sholat & Kiblat', ruang: 'sholat' },
      { nama: 'Pengingat Wirid Pagi & Sore', ruang: 'tasbih' },
    ],
  },
  {
    id: 'santri-sanad',
    nama: 'Jenjang 3 — Santri Sanad',
    sub: 'Naik ke kedalaman: sejarah tiga jalur, evidensi, dokumen kendali.',
    hari: 'Roadmap hari 34–66',
    modul: [
      { nama: 'Sanad & Kejujuran Data (S1/S2/S9)', ruang: 'trust' },
      { nama: 'Sejarah Suryalaya · Karawang · Al-Bantani', ruang: 'library' },
      { nama: 'Manaqib Al-Ghauth', ruang: 'manaqib' },
      { nama: 'Dokumen Kendali & Konstitusi Editorial', ruang: 'documents' },
    ],
  },
  {
    id: 'kurator-muda',
    nama: 'Jenjang 4 — Kurator Muda',
    sub: 'Merawat arsip: sumbangan, koreksi, dan telaah makna lintas bahasa.',
    hari: 'Roadmap hari 67–88',
    modul: [
      { nama: 'Alur Kontribusi & Koreksi Terbuka', ruang: 'contribute' },
      { nama: 'Arsip Manuskrip & Museum Digital', ruang: 'archive' },
      { nama: 'Kurasi 178 Bahasa (mesin menyusun, manusia menjaga)', ruang: 'languages' },
      { nama: 'Peta Dunia Sanad & Tingkat Bukti', ruang: 'trust' },
    ],
  },
]

const SYARAT_SERTIFIKASI = [
  'Minimal 3 sumbangan konten yang lolos telaah dewan (bukan sekadar dikirim — diterima).',
  'Minimal 1 koreksi terdokumentasi dengan alasan & sumber — kejujuran teruji.',
  'Memahami tingkat bukti (A–F) & tujuh status verifikasi tanpa mencampuradukkan.',
  'Mampu membedakan klaim, tradisi, dan fakta dokumen saat menulis ringkasan arsip.',
]

export function AcademySection({ onOpenEntity, onNavigate }: { onOpenEntity: (slug: string) => void; onNavigate?: (s: string) => void }) {
  const { data, loading } = useApi<{ terms: Term[] }>('/api/terms')
  const { t } = useI18n()

  return (
    <div className="space-y-8">
      <SectionHeading
        kicker={t('sec.academy.kicker')}
        title={t('sec.academy.title')}
        lede={t('sec.academy.lede')}
      />

      {/* kurikulum berjenjang — beta */}
      <section aria-labelledby="curr-h">
        <Kicker>Kurikulum berjenjang — beta</Kicker>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 id="curr-h" className="font-display mt-1.5 flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
            <GraduationCap className="text-[var(--brass)] size-5" aria-hidden /> Empat jenjang + sertifikasi kurator
          </h2>
          <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Beta
          </span>
        </div>
        <p className="text-muted-foreground mt-2 max-w-3xl text-[13.5px] leading-relaxed">
          Belajar sambil memakai arsip: tiap modul membuka ruang situs yang sudah tayang dan menyandingkan
          rentang hari Roadmap 99 — kemajuan jenjang selaras dengan perjalanan ruhani, bukan ujian hafalan.
        </p>

        <ol className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
          {JENJANG.map((j, i) => (
            <li key={j.id} className="border-border bg-card hover:border-[var(--brass)]/50 rounded-md border p-5 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="border-[var(--brass)]/50 bg-[var(--brass-soft)] text-[#6b4f18] inline-flex size-7 items-center justify-center rounded-full text-[12px] font-bold">
                  {i + 1}
                </span>
                <span className="text-muted-foreground font-mono text-[10.5px]">{j.hari}</span>
              </div>
              <h3 className="font-display mt-2.5 text-[15.5px] leading-snug font-semibold">{j.nama}</h3>
              <p className="text-muted-foreground mt-1 text-[12.5px] leading-relaxed">{j.sub}</p>
              <ul className="mt-3 space-y-1.5">
                {j.modul.map((m) => (
                  <li key={m.nama} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <span className="text-foreground/90 text-[12.5px] leading-snug">{m.nama}</span>
                    {onNavigate && (
                      <button onClick={() => onNavigate(m.ruang)}
                        className="border-border bg-secondary hover:bg-accent shrink-0 rounded-sm border px-2 py-0.5 text-[10.5px] font-medium transition-colors">
                        buka ruang
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* sertifikasi kurator — beta */}
      <section aria-labelledby="cert-h" className="rounded-lg border border-[var(--brass)]/40 bg-[var(--brass-soft)]/20 px-5 py-6 sm:px-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 id="cert-h" className="font-display flex items-center gap-2 text-lg font-semibold tracking-tight sm:text-xl">
            <ShieldCheck className="text-[var(--brass)] size-4.5" aria-hidden /> Sertifikasi Kurator 165
            <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Beta</span>
          </h2>
          <span className="text-muted-foreground font-mono text-[10.5px]">Roadmap hari 89</span>
        </div>
        <p className="text-muted-foreground mt-2 max-w-3xl text-[13.5px] leading-relaxed">
          Mutu bukan klaim melainkan proses: kurator disertifikasi karena jejak kerjanya terbaca jujur di arsip —
          bukan karena lama bergabung. Alur internal, direview dewan kurasi.
        </p>
        <ul className="mt-4 space-y-2">
          {SYARAT_SERTIFIKASI.map((s) => (
            <li key={s} className="flex items-start gap-2.5 text-[13px] leading-relaxed">
              <Circle aria-hidden className="text-muted-foreground/60 mt-1 size-3.5 shrink-0" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <HonestNote tone="amber" className="mt-4">
          <strong>Sertifikasi arsip — bukan ijazah thariqat.</strong> Status kurator 165 hanya berlaku untuk
          perawatan arsip digital ini. Keijazaan sanad, baiat, dan kedudukan thariqat <em>hanya</em> dari mursyid
          melalui jalur yang sah — 165 tidak pernah menggantikannya, bahkan secara simbolik.
        </HonestNote>
      </section>

      {/* glossary */}
      <section aria-labelledby="gloss-h">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <Kicker>Terminology system — live data</Kicker>
            <h2 id="gloss-h" className="font-display mt-1.5 flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
              <Languages className="size-5 text-[var(--brass)]" aria-hidden /> Glossary of terms
            </h2>
            <p className="text-muted-foreground mt-1.5 max-w-2xl text-[13px] leading-relaxed">
              Definitions are deliberately cautious and generic: 165 records usage and context, it does not adjudicate doctrine.
              Terms carry multilingual forms (Indonesian · English · Arabic).
            </p>
          </div>
        </div>

        {loading && <div className="mt-4"><SkeletonCard /></div>}
        {!loading && (data?.terms ?? []).length === 0 && (
          <EmptyState title="No terms recorded yet" className="mt-4" />
        )}
        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {(data?.terms ?? []).map((t) => (
            <li key={t.id}>
              <button type="button" onClick={() => onOpenEntity(t.slug)}
                className="w-full rounded-md border border-border bg-card p-4 text-left transition-colors hover:border-[var(--brass)]/60 sm:p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-[15px] font-semibold sm:text-base">{t.primaryName}</h3>
                  <span className="font-arabic text-lg text-[var(--brass)]" lang="ar" dir="rtl">
                    {t.nameVariants.find((v) => v.language === 'ar')?.name ?? ''}
                  </span>
                </div>
                <p className="text-muted-foreground mt-1.5 text-[13px] leading-relaxed">{t.summary}</p>
                {t.summaryId && <p className="text-muted-foreground/90 mt-1 text-[13px] leading-relaxed italic">{t.summaryId}</p>}
                <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                  <TypeBadge type={t.type} />
                  <EvidenceBadge level={t.evidenceLevel} />
                  <StatusBadge status={t.verificationStatus} />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* catatan progres jenjang — modul yang sudah dilalui */}
      <p className="text-muted-foreground/70 flex items-center gap-1.5 text-[11.5px]">
        <ScrollText className="size-3.5" aria-hidden />
        Penanda progres jenjang (centang per modul) menyusul pada Dasbor Perjalanan — modul kini langsung
        terhubung ke ruang tayang, tanpa tautan mati.
      </p>
    </div>
  )
}
