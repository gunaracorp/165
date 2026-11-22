'use client'

// 165 — SANAD DIAGRAM: peta gabungan tiga jalur tercatat (display-only).
// Prinsip Master Directive §15: sanad TIDAK dibuat, digabung, diprediksi,
// atau dilegitimasi — hanya direkam dan ditampilkan APA ADANYA.
//
// Diagram ini merender pohon sanad gabungan dari tiga jalur yang didirect
// Founder (S1/S2): Apex (Allah → Jibril → Rasulullah ﷺ), punggung Qodiriah
// (via Sayyidina Ali), penyisipan Naqsabandiah (Bahauddin), punggung bersama
// menuju titik konvergensi #34 Syekh Khatib Sambas (pendiri TQN), lalu
// bercabang ke tiga jalur terminal: Karawang, Al-Bantani/Kaduparasi, Suryalaya.
//
// Tanggal lahir/wafat hanya diisi dari referensi biografi publik terdokumentasi
// (S9). Simpul tanpa tanggal = belum terdokumentasi publik — ditampilkan jujur
// sebagai ruang terbuka untuk deposit kolasi Level A, TIDAK PERNAH dikarang.
import { ArrowDown, CalendarDays, Crown, Download, GitMerge, Landmark, MapPin, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import {
  SANAD_SEG_BANTEN,
  SANAD_SEG_SURYALAYA,
  SANAD_SOURCES,
  SANAD_SPINE,
  SANAD_TAFSIR,
  SANAD_ARABIC,
  TERMINAL_ALBANTANI_NODE,
  TERMINAL_KARAWANG_NODE,
  type SanadNode,
  type SanadTafsir,
} from '@/lib/sanad-data'
import { EvidenceBadge, HonestNote, Kicker, StatusBadge } from './ui'

// urutan arus sanad (dari Apex turun ke mursyid): balikkan array S1 yang aslinya 39→1
const FLOW: SanadNode[] = [...SANAD_SPINE].reverse()

const byRank = (r: number) => FLOW.filter((n) => n.rank === r)

const APEX = FLOW.filter((n) => n.kind === 'APEX')
const RASUL = FLOW.filter((n) => n.kind === 'RASUL')
const QADIRI_EARLY = FLOW.filter((n) => !n.kind && !n.founderOf && n.rank >= 4 && n.rank <= 17)
const NAQSH_INSERT = byRank(22).filter((n) => n.founderOf === 'NAQSABANDIYAH')
const QADIRI_LATE = FLOW.filter((n) => n.rank === 18 || n.rank === 19)
const SPINE_TAIL = FLOW.filter((n) => n.rank >= 21 && n.rank <= 33 && !n.kind && !n.founderOf)
const SAMBAS = byRank(34)

const JALUR_COLUMNS = [
  {
    title: 'Jalur Karawang',
    titleAr: 'مَسْلَكُ كَارَاوَانْغ',
    region: 'Cikangkung, Rengasdengklok, Karawang, Jawa Barat',
    badge: 'S1 #39a · 165-SANAD-000001',
    nodes: [TERMINAL_KARAWANG_NODE, SANAD_SEG_BANTEN[0]],
  },
  {
    title: 'Jalur Al-Bantani (Kaduparasi)',
    titleAr: 'مَسْلَكُ البَنْتَانِيِّ الكَادُوبَرَاسِيِّ',
    region: 'Kaduparasi, Labuan, Pandeglang, Banten',
    badge: 'S1 #39b · 165-SANAD-000002',
    nodes: [TERMINAL_ALBANTANI_NODE, SANAD_SEG_BANTEN[0]],
  },
  {
    title: 'Jalur TQN Suryalaya',
    titleAr: 'مَسْلَكُ سُورِيَلَايَا',
    region: 'Suryalaya, Pagerageung, Tasikmalaya, Jawa Barat',
    badge: 'S2 ke-37 · 165-SANAD-000003',
    nodes: [...SANAD_SEG_SURYALAYA],
  },
]

const FOUNDER_LABEL: Record<string, string> = {
  QODIRIYAH: 'Pendiri Qodiriah',
  NAQSABANDIYAH: 'Pendiri Naqsabandiyah',
  TQN: 'Pendiri TQN',
}

function RankPill({ rank }: { rank: number }) {
  return (
    <span className="inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brass)]/15 px-1.5 font-mono text-[11px] font-bold text-[var(--brass)]" title="Peringkat pada daftar sumber S1">
      {rank}
    </span>
  )
}

function Dates({ node }: { node: SanadNode }) {
  if (!node.dates) {
    // Apex (Allah & Jibril) memang tanpa tahun — bukan celah dokumentasi
    if (node.kind === 'APEX') return null
    return (
      <p className="mt-1 flex items-center gap-1.5 text-[11.5px] text-muted-foreground/70 italic">
        <CalendarDays className="size-3" aria-hidden />
        Tahun belum terdokumentasi — terbuka untuk deposit
      </p>
    )
  }
  return (
    <p className="mt-1 flex items-start gap-1.5 text-[11.5px] leading-snug text-muted-foreground">
      <CalendarDays className="mt-0.5 size-3 shrink-0 text-emerald-600" aria-hidden />
      <span className="font-mono">{node.dates}</span>
    </p>
  )
}

function NodeChip({ node, tone }: { node: SanadNode; tone?: 'apex' | 'rasul' | 'founder' | 'pivot' }) {
  return (
    <div
      className={[
        'rounded-xl border px-3 py-2.5 transition-colors',
        tone === 'apex'
          ? 'border-[var(--brass)]/50 bg-[var(--brass-soft)]/30'
          : tone === 'rasul'
            ? 'border-transparent bg-gradient-to-br from-emerald-900 to-emerald-950 text-white shadow-md shadow-emerald-950/20'
            : tone === 'founder'
              ? 'border-[var(--brass)] bg-[var(--brass-soft)]/40 shadow-sm'
              : tone === 'pivot'
                ? 'border-transparent bg-gradient-to-br from-emerald-800 to-emerald-950 text-white shadow-lg shadow-emerald-950/25'
                : 'border-border bg-card',
      ].join(' ')}
    >
      <div className="flex items-start gap-2">
        {tone === 'rasul' || tone === 'pivot' ? (
          <span className="mt-0.5 inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-white/15 px-1.5 font-mono text-[11px] font-bold text-white">
            {node.rank}
          </span>
        ) : (
          <RankPill rank={node.rank} />
        )}
        <div className="min-w-0">
          <p className={['text-[13px] leading-snug font-semibold', tone === 'rasul' || tone === 'pivot' ? 'text-white' : 'text-foreground'].join(' ')}>
            {node.name}
          </p>
          {node.nameAr && (
            <p
              dir="rtl"
              lang="ar"
              className={['font-arabic mt-0.5 text-[15px] leading-snug', tone === 'rasul' || tone === 'pivot' ? 'text-emerald-100' : tone === 'founder' || tone === 'apex' ? 'text-[var(--brass)]' : 'text-foreground/80'].join(' ')}
            >
              {node.nameAr}
            </p>
          )}
          {node.role && (
            <p className={['mt-0.5 text-[11px] font-medium', tone === 'rasul' || tone === 'pivot' ? 'text-emerald-100/90' : 'text-[var(--brass)]'].join(' ')}>
              {FOUNDER_LABEL[node.founderOf ?? ''] ?? node.role}
            </p>
          )}
          {node.place && (
            <p className={['mt-0.5 flex items-start gap-1 text-[11px] leading-snug', tone === 'rasul' || tone === 'pivot' ? 'text-emerald-100/70' : 'text-muted-foreground'].join(' ')}>
              <MapPin className="mt-0.5 size-3 shrink-0" aria-hidden />
              {node.place}
            </p>
          )}
          <Dates node={node} />
        </div>
      </div>
    </div>
  )
}

function PhaseCard({ id, icon: Icon, title, subtitle, children, className }: { id: string; icon: typeof Crown; title: string; subtitle?: string; children: ReactNode; className?: string }) {
  return (
    <section aria-labelledby={id} className={`rounded-2xl border border-border bg-muted/30 p-4 sm:p-5 ${className ?? ''}`}>
      <div className="flex items-start gap-2.5">
        <span className="bg-primary/10 text-primary mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl">
          <Icon className="size-4" aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 id={id} className="font-display text-[15px] leading-tight font-bold tracking-tight sm:text-base">
            {title}
          </h3>
          {subtitle && <p className="text-muted-foreground mt-0.5 text-[12.5px] leading-snug">{subtitle}</p>}
        </div>
      </div>
      {children}
    </section>
  )
}

function FlowArrow({ label, ar }: { label?: string; ar?: string }) {
  return (
    <div className="text-muted-foreground/70 flex items-center justify-center gap-2 py-1.5" aria-hidden>
      <span className="border-border h-6 w-px border-l border-dashed" />
      <ArrowDown className="size-4" />
      {label && <span className="text-[11px] font-medium tracking-wide">{label}</span>}
      {ar && <span dir="rtl" lang="ar" className="font-arabic text-[14px] leading-none">{ar}</span>}
      <span className="border-border h-6 w-px border-l border-dashed" />
    </div>
  )
}

// ---- tafsir indah — pita ayat/hadis bilingual Arab–Indonesia (crown of the diagram) ----
const TAFSIR_KIND_META: Record<SanadTafsir['kind'], { label: string; chip: string }> = {
  AYAT: { label: 'Ayat Al-Qur\u2019an', chip: 'border-emerald-700/30 bg-emerald-50 text-emerald-900' },
  HADIS: { label: 'Hadis Nabi ﷺ', chip: 'border-[var(--brass)]/40 bg-[var(--brass-soft)] text-[#6b4f18]' },
  'PERINGATAN AHLUL ILM': { label: 'Peringatan ahlul ilm', chip: 'border-stone-400/40 bg-stone-100 text-stone-700' },
}

function TafsirBand() {
  return (
    <section aria-labelledby="sd-tafsir-h" className="mt-4 rounded-2xl border border-[var(--brass)]/40 bg-[var(--brass-soft)]/20 p-4 sm:p-5">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 id="sd-tafsir-h" className="font-display text-[15px] font-bold tracking-tight sm:text-base">
          Tafsir indah yang menjelaskan jiwa sanad
        </h3>
        <span dir="rtl" lang="ar" className="font-arabic text-[21px] leading-snug text-[var(--brass)]">
          {SANAD_ARABIC.rijalTitleAr}
        </span>
      </div>
      <p className="text-muted-foreground mt-1 text-[12.5px] leading-relaxed">
        Ayat, hadis, dan peringatan ahlul ilm tentang makna sanad dan Rijālullah — direkam bilingual: <strong>huruf Arab</strong>{' '}
        seperti mushaf + <strong>terjemah Indonesia</strong>. Catatan tafsir menjelaskan kaitannya dengan peta di atas; ia
        bukan fatwa dan bukan keputusan.
      </p>
      <div className="mt-3.5 grid gap-3 lg:grid-cols-2">
        {SANAD_TAFSIR.map((t) => (
          <article key={t.id} className="rounded-xl border border-border bg-card p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={['inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-bold leading-none', TAFSIR_KIND_META[t.kind].chip].join(' ')}
              >
                {TAFSIR_KIND_META[t.kind].label}
              </span>
              <span className="text-muted-foreground font-mono text-[11px]">{t.source}</span>
            </div>
            <p dir="rtl" lang="ar" className="font-arabic mt-3 text-right text-[17px] leading-[2] text-foreground">
              {t.ar}
            </p>
            <p className="text-muted-foreground mt-3 text-[13px] leading-relaxed">{t.idn}</p>
            <p className="mt-3 border-t border-dashed border-border pt-2.5 text-[12.5px] leading-relaxed text-foreground/80">
              {t.note}
            </p>
          </article>
        ))}
      </div>
      <p className="text-muted-foreground mt-3 text-[12px] leading-relaxed">
        Teks Arab direkam dari mushaf &amp; kumpulan hadis standar; terjemah Indonesia mengikuti gaya terjemah resmi. Ayat
        ditampilkan dengan huruf aslinya sebagai penghormatan pada bahasa wahyu — lapisan terjemah membuka maknanya untuk
        semua pembaca.
      </p>
    </section>
  )
}

export function SanadDiagram() {
  const poster = SANAD_SOURCES.length >= 9 // poster tersedia sejak data S9 tercatat
  return (
    <section aria-labelledby="sdiagram-h">
      <Kicker>Diagram sanad gabungan</Kicker>
      <h2 id="sdiagram-h" className="font-display mt-1.5 flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <GitMerge className="size-4.5 text-[var(--brass)]" aria-hidden /> Satu pohon, tiga jalur — peta sanad lengkap TQN
      </h2>
      <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span dir="rtl" lang="ar" className="font-arabic text-[20px] leading-snug text-[var(--brass)]">
          {SANAD_ARABIC.orderNameAr}
        </span>
        <span className="text-muted-foreground text-[12.5px]">— thariqah dalam huruf Arab</span>
        <span dir="rtl" lang="ar" className="font-arabic text-[15px] leading-snug text-muted-foreground">
          {SANAD_ARABIC.sanadMuttashilAr}
        </span>
      </div>
      <p className="text-muted-foreground mt-2 max-w-3xl text-[14px] leading-relaxed">
        Merender pohon gabungan ketiga jalur tercatat: dari Apex (Allah SWT → Jibril AS → Rasulullah ﷺ) melalui punggung
        Qodiriah, penyisipan Naqsabandiah, titik konvergensi <strong>#34 Syekh Khatib Sambas</strong> (pendiri TQN),
        turun ke tiga jalur terminal — <strong>Karawang</strong>, <strong>Al-Bantani (Kaduparasi, Labuan)</strong>, dan{' '}
        <strong>Suryalaya</strong>. Peringkat mengikuti daftar sumber S1 apa adanya (angka 20 dilewati; angka 22 dipakai
        dua kali). Setiap simpul kini menyandang <strong>nama dalam huruf Arab</strong> — tulisan standar untuk para syekh
        klasik dan transliterasi Arab untuk para syekh Nusantara — dan peta ditutup <strong>tafsir indah Arab–Indonesia</strong>{' '}
        tentang jiwa sanad.
      </p>

      <HonestNote className="mt-3" tone="green">
        <strong>Disiplin tanggal.</strong> Tahun lahir/wafat hanya diisi dari referensi biografi publik terdokumentasi
        (sumber S9 — suryalaya.org, Wikipedia, NU Online, biografi komunitas tersilang). Simpul tanpa tanggal ditampilkan
        jujur sebagai <em>belum terdokumentasi</em> — tidak pernah dikarang, dan terbuka untuk deposit ijazah/manuskrip
        lewat alur contribute (kolasi Level A, tanpa biaya).
      </HonestNote>

      {poster && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <a
            href="/diagrams/sanad-tqn-165.png"
            download="peta-sanad-tqn-165.png"
            className="border-border bg-card hover:bg-accent inline-flex h-9 items-center gap-2 rounded-full border px-4 text-[13px] font-semibold transition-all duration-200 active:scale-95"
          >
            <Download className="size-3.5" aria-hidden />
            Unduh poster peta sanad (PNG)
          </a>
          <span className="text-muted-foreground text-[12px]">versi cetak, resolusi tinggi — dirender dari data yang sama</span>
        </div>
      )}

      {/* ---- Apex ---- */}
      <PhaseCard
        id="sd-apex"
        icon={Sparkles}
        title="Sumber segala sumber — Apex sanad"
        subtitle="Peringkat S1 #1–#2 direkam apa adanya · Rasulullah ﷺ puncak sanad manusiawi"
        className="mt-5"
      >
        <div className="mt-3.5 grid gap-2.5 sm:grid-cols-3">
          {APEX.map((n) => (
            <NodeChip key={n.key} node={n} tone="apex" />
          ))}
        </div>
        <FlowArrow />
        <div className="grid gap-2.5 sm:grid-cols-1">
          {RASUL.map((n) => (
            <NodeChip key={n.key} node={n} tone="rasul" />
          ))}
        </div>
      </PhaseCard>

      <FlowArrow label="sanad Qodiriah — via Sayyidina Ali" ar="سَنَدُ القَادِرِيَّةِ" />

      {/* ---- Qodiriah early ---- */}
      <PhaseCard
        id="sd-qadiriah"
        icon={Landmark}
        title="Punggung Qodiriah — Sayyidina Ali → Ahlul Bait → Para Syekh Baghdad"
        subtitle="S1 #4 → #17 · tahun klasik dari riwayat biografi standar (S9)"
      >
        <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {QADIRI_EARLY.map((n) => (
            <NodeChip key={n.key} node={n} />
          ))}
        </div>
        <FlowArrow />
        <div className="grid gap-2.5 lg:grid-cols-2">
          {QADIRI_LATE.map((n) => (
            <NodeChip key={n.key} node={n} tone={n.founderOf === 'QODIRIYAH' ? 'founder' : undefined} />
          ))}
        </div>
      </PhaseCard>

      <FlowArrow label="penyisipan Naqsabandiah" ar="إِدْرَاجُ النَّقْشَبَنْدِيَّةِ" />

      {/* ---- Naqshbandi insertion ---- */}
      <PhaseCard
        id="sd-naqsyabandi"
        icon={Crown}
        title="Penyisipan Naqsabandiah — Syekh Bahauddin an-Naqsyabandiyah"
        subtitle="S1 memakai ulang angka 22 untuk pendiri Naqsabandiyah — direkam apa adanya, tidak dinomori ulang"
      >
        <div className="mt-3.5 grid gap-2.5">
          {NAQSH_INSERT.map((n) => (
            <NodeChip key={n.key} node={n} tone="founder" />
          ))}
        </div>
      </PhaseCard>

      <FlowArrow label="punggung bersama menuju konvergensi" ar="إِلَى مِلْتَقَى المَسَارِكَ" />

      {/* ---- Tail + Sambas ---- */}
      <PhaseCard
        id="sd-tail"
        icon={GitMerge}
        title="Punggung bersama — para syekh Baghdad & Makkah (#21 → #34)"
        subtitle="Tahun wafat #31–#32 terekam pada daftar S1 sendiri"
      >
        <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {SPINE_TAIL.map((n) => (
            <NodeChip key={n.key} node={n} />
          ))}
        </div>
        <FlowArrow label="titik temu ketiga jalur" />
        <div className="grid gap-2.5">
          {SAMBAS.map((n) => (
            <NodeChip key={n.key} node={n} tone="pivot" />
          ))}
        </div>
      </PhaseCard>

      <FlowArrow label="tiga jalur terminal (murid-penerus tercatat)" ar="ثَلَاثَةُ مَسَارِكَ" />

      {/* ---- Three jalur ---- */}
      <section aria-labelledby="sd-jalur-h" className="rounded-2xl border border-[var(--brass)]/40 bg-[var(--brass-soft)]/20 p-4 sm:p-5">
        <h3 id="sd-jalur-h" className="font-display text-[15px] font-bold tracking-tight sm:text-base">
          Tiga jalur terminal — direkam dari sumber berbeda, dipertemukan di #34
        </h3>
        <div className="mt-3.5 grid gap-3 lg:grid-cols-3">
          {JALUR_COLUMNS.map((j) => (
            <div key={j.title} className="rounded-xl border border-border bg-card p-3.5">
              <p className="font-mono text-[10px] text-[var(--brass)]">{j.badge}</p>
              <p className="mt-1 text-[13.5px] leading-snug font-bold">{j.title}</p>
              <p dir="rtl" lang="ar" className="font-arabic mt-0.5 text-[15px] leading-snug text-[var(--brass)]">
                {j.titleAr}
              </p>
              <p className="text-muted-foreground mt-0.5 flex items-start gap-1 text-[11px] leading-snug">
                <MapPin className="mt-0.5 size-3 shrink-0" aria-hidden />
                {j.region}
              </p>
              <div className="mt-3 space-y-2">
                {j.nodes.map((n, i) => (
                  <div key={`${j.title}-${n.key}-${i}`}>
                    {i > 0 && (
                      <div className="text-muted-foreground/60 flex justify-center py-0.5" aria-hidden>
                        <ArrowDown className="size-3.5" />
                      </div>
                    )}
                    <NodeChip node={n} tone={i === 0 ? 'pivot' : undefined} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-3 text-[12px] leading-relaxed">
          Karawang &amp; Al-Bantani turun dari jalur Banten/Asnawi S1 (#38 → #35). Suryalaya turun dari penomoran resmi
          Suryalaya S2 (ke-35 Tholhah → ke-36 Abah Sepuh → ke-37 Abah Anom). Suksesi setelah Abah Anom dipersoalkan
          publik oleh pihak berbeda — 165 mencatat perbedaan itu tanpa memihak.
        </p>
      </section>

      {/* ---- tafsir indah — Arab + Indonesia ---- */}
      <TafsirBand />

      {/* ---- legend + source ---- */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <EvidenceBadge level="B" withLabel />
        <EvidenceBadge level="C" withLabel />
        <StatusBadge status="DOCUMENTED" />
        <StatusBadge status="TRADITIONAL_ACCOUNT" />
      </div>
      <p className="text-muted-foreground mt-2 text-[12px] leading-relaxed">
        Level B = daftar silsilah bernomor dari Founder (S1) + silsilah institusi Suryalaya (S2). Level C = referensi
        biografi publik (S9, tanggal saja). <span className="font-mono text-[11px]">{SANAD_SOURCES.find((s) => s.id === 'S9')?.publisher}</span>
      </p>
    </section>
  )
}
