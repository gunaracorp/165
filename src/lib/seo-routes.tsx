// 165 — Route factory untuk halaman pengetahuan crawlable.
// Satu factory menghasilkan generateStaticParams + generateMetadata + halaman
// detail + halaman indeks per kind — Next.js App Router, static, SEO penuh.
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { PageEntry, PageKind } from '@/data/pages'
import { categoriesOf, entriesByKind, getEntry, KIND_PATH } from '@/data/pages'
import { EntityPage } from '@/components/165/seo/entity-page'

export const KIND_LABEL: Record<PageKind, string> = {
  glossary: 'Glossarium',
  library: 'Perpustakaan',
  atlas: 'Atlas',
  institution: 'Direktori Institusi',
  archive: 'Arsip Digital',
  ask: 'Ask 165',
}

const KIND_DESCRIPTION: Record<PageKind, string> = {
  glossary: 'Glossarium istilah tarekat: definisi, makna Arab, dan posisinya dalam TQN Qodiriah Naqsyabandiyah — jujur dan beradab.',
  library: 'Perpustakaan kitab, naskah, dan dokumen rujukan dunia tarekat: dari Fath ar-Rabbani hingga Ihya Ulumuddin.',
  atlas: 'Atlas tempat dan lokasi dalam sejarah serta jalur tarekat: dari Makkah dan Bukhara hingga Suryalaya dan Karawang.',
  institution: 'Direktori institusi: pondok pesantren, khanaqah, majelis dzikir, dan jamaah TQN di dalam dan luar negeri.',
  archive: 'Arsip digital 165: koleksi manuskrip, audio wiridan, foto, pers, dan dokumen administrasi yang dikurasi dengan provenance.',
  ask: 'Ask 165: pertanyaan dan jawaban seputar tarekat, amalan, adab, dan platform 165 — jawaban ortodoks dan hati-hati.',
}

export function makeDetailMetadata(kind: PageKind, slug: string): Metadata {
  const entry = getEntry(kind, slug)
  if (!entry) return { title: 'Halaman tidak ditemukan' }
  const url = `${KIND_PATH[kind]}${slug}`
  return {
    title: entry.title,
    description: entry.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${entry.title} · 165`,
      description: entry.summary,
      url,
      type: 'article',
      siteName: '165',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${entry.title} · 165`,
      description: entry.summary,
    },
  }
}

export function makeIndexMetadata(kind: PageKind): Metadata {
  return {
    title: KIND_LABEL[kind],
    description: KIND_DESCRIPTION[kind],
    alternates: { canonical: KIND_PATH[kind] },
    openGraph: {
      title: `${KIND_LABEL[kind]} · 165`,
      description: KIND_DESCRIPTION[kind],
      url: KIND_PATH[kind],
      type: 'website',
      siteName: '165',
    },
  }
}

export function generateDetailParams(kind: PageKind) {
  return entriesByKind(kind).map((e) => ({ slug: e.slug }))
}

export function DetailRoute({ kind, slug }: { kind: PageKind; slug: string }) {
  const entry = getEntry(kind, slug)
  if (!entry) notFound()
  return <EntityPage entry={entry} />
}

export function IndexRoute({ kind }: { kind: PageKind }) {
  const entries = entriesByKind(kind)
  const cats = categoriesOf(kind)
  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-20 pt-10">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href="/" className="hover:underline">165</Link>
        <span className="mx-1.5" aria-hidden>/</span>
        <span className="text-neutral-700 dark:text-neutral-300">{KIND_LABEL[kind]}</span>
      </nav>
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-neutral-50">{KIND_LABEL[kind]}</h1>
      <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">{KIND_DESCRIPTION[kind]}</p>
      <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">{entries.length} halaman tersusun berdasarkan kategori — semuanya statis dan dapat dirayapi mesin pencari.</p>

      {cats.map((cat) => {
        const list = entries.filter((e) => e.category === cat)
        return (
          <section key={cat} className="mt-10">
            <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">{cat} <span className="text-sm font-normal text-neutral-400">({list.length})</span></h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((e) => (
                <li key={e.slug}>
                  <Link href={`${KIND_PATH[kind]}${e.slug}`} className="block h-full rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400">
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </main>
  )
}
