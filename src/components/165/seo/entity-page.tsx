// 165 — Knowledge entity page renderer (server component, indexable, zero client JS).
// Satu renderer untuk glossary/library/atlas/institution/archive/ask dengan
// JSON-LD per kind: DefinedTerm, Book, Place, Organization, CollectionPage, FAQPage.
import Link from 'next/link'
import type { PageEntry, PageKind } from '@/data/pages'
import { KIND_PATH, KIND_SCHEMA } from '@/data/pages'
import { resolveRelated } from '@/data/pages'

const KIND_LABEL: Record<PageKind, string> = {
  glossary: 'Glossarium',
  library: 'Perpustakaan',
  atlas: 'Atlas',
  institution: 'Direktori Institusi',
  archive: 'Arsip Digital',
  ask: 'Ask 165',
}

const KIND_INTRO: Record<PageKind, string> = {
  glossary: 'Definisi istilah dalam tradisi tarekat, disusun jujur dan beradab.',
  library: 'Kitab, naskah, dan dokumen rujukan dunia tarekat.',
  atlas: 'Tempat dan lokasi dalam sejarah serta jalur tarekat.',
  institution: 'Profil pesantren, khanaqah, majelis, dan jamaah.',
  archive: 'Koleksi arsip digital yang dikurasi platform 165.',
  ask: 'Pertanyaan dan jawaban seputar tarekat dan platform 165.',
}

function breadcrumbJsonLd(entry: PageEntry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '165', item: 'https://165.web.id/' },
      { '@type': 'ListItem', position: 2, name: KIND_LABEL[entry.kind], item: `https://165.web.id${KIND_PATH[entry.kind]}` },
      { '@type': 'ListItem', position: 3, name: entry.title, item: `https://165.web.id${KIND_PATH[entry.kind]}${entry.slug}` },
    ],
  }
}

function entityJsonLd(entry: PageEntry) {
  const base = {
    '@context': 'https://schema.org',
    '@type': KIND_SCHEMA[entry.kind],
    name: entry.title,
    description: entry.summary,
    url: `https://165.web.id${KIND_PATH[entry.kind]}${entry.slug}`,
    inLanguage: 'id',
    isPartOf: { '@type': 'WebSite', name: '165', url: 'https://165.web.id' },
  }
  if (entry.kind === 'library') {
    return { ...base, ...(entry.titleAr ? { alternateName: entry.titleAr } : {}) }
  }
  if (entry.kind === 'ask') {
    const answer = entry.body.flatMap((s) => s.p).join(' ')
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: entry.question ?? entry.title,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        },
      ],
    }
  }
  return base
}

export function EntityPage({ entry }: { entry: PageEntry }) {
  const related = resolveRelated(entry)
  const idxUrl = KIND_PATH[entry.kind]
  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-20 pt-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(entry)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entityJsonLd(entry)) }} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href="/" className="hover:underline">165</Link>
        <span className="mx-1.5" aria-hidden>/</span>
        <Link href={idxUrl} className="hover:underline">{KIND_LABEL[entry.kind]}</Link>
        <span className="mx-1.5" aria-hidden>/</span>
        <span className="text-neutral-700 dark:text-neutral-300">{entry.title}</span>
      </nav>

      <p className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
        {KIND_LABEL[entry.kind]}{entry.category ? ` · ${entry.category}` : ''}
      </p>

      <h1 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
        {entry.title}
        {entry.titleAr ? (
          <span className="mt-2 block font-serif text-2xl font-normal text-neutral-600 sm:text-3xl dark:text-neutral-300" lang="ar" dir="rtl">{entry.titleAr}</span>
        ) : null}
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">{entry.summary}</p>

      {entry.kind === 'ask' && entry.question ? (
        <p className="mt-6 border-l-4 border-emerald-600 pl-4 text-lg font-semibold text-neutral-900 dark:border-emerald-500 dark:text-neutral-100">{entry.question}</p>
      ) : null}

      {entry.facts && entry.facts.length > 0 ? (
        <dl className="mt-8 grid grid-cols-1 gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:grid-cols-2 dark:border-neutral-800 dark:bg-neutral-900/60">
          {entry.facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{f.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">{f.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="mt-10 space-y-10">
        {entry.body.map((s) => (
          <section key={s.h}>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">{s.h}</h2>
            <div className="mt-3 space-y-4">
              {s.p.map((para, i) => (
                <p key={i} className="leading-relaxed text-neutral-700 dark:text-neutral-300">{para}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">Halaman terkait</h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`${KIND_PATH[r.kind]}${r.slug}`} className="block rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400">
                  <span className="mr-2 text-xs uppercase tracking-wide text-neutral-400">{KIND_LABEL[r.kind]}</span>
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="mt-14 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {KIND_INTRO[entry.kind]} Halaman ini bagian dari <Link href="/" className="text-emerald-700 hover:underline dark:text-emerald-400">165 — TQN Qodiriah Naqsabandiyah</Link>, platform pengetahuan yang menjaga kejujuran sumber: riwayat tradisional disajikan dengan label, dan yang belum terverifikasi tidak dikarang.
      </p>
    </main>
  )
}
