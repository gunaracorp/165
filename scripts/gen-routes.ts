// Generate thin route files for the 6 knowledge kinds + artikel page.
import { writeFileSync } from 'node:fs'

const kinds = [
  ['glossary', 'GLOSSARY'],
  ['library', 'LIBRARY'],
  ['atlas', 'ATLAS'],
  ['institution', 'INSTITUTION'],
  ['archive', 'ARCHIVE'],
  ['ask', 'ASK'],
] as const

const detail = (k: string) => `// 165 — Halaman detail ${k} (crawlable, statis, SEO penuh).
import { makeDetailMetadata, DetailRoute, generateDetailParams } from '@/lib/seo-routes'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return generateDetailParams('${k}')
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return makeDetailMetadata('${k}', slug)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <DetailRoute kind="${k}" slug={slug} />
}
`

const index = (k: string) => `// 165 — Indeks halaman ${k} (crawlable, statis, SEO penuh).
import { makeIndexMetadata, IndexRoute } from '@/lib/seo-routes'

export const dynamic = 'force-static'

export const metadata = makeIndexMetadata('${k}')

export default function Page() {
  return <IndexRoute kind="${k}" />
}
`

for (const [k] of kinds) {
  writeFileSync(`/home/z/my-project/src/app/${k}/page.tsx`, index(k))
  writeFileSync(`/home/z/my-project/src/app/${k}/[slug]/page.tsx`, detail(k))
}

const artikel = `// 165 — Artikel: indeks editorial menuju halaman pengetahuan unggulan.
import Link from 'next/link'
import type { Metadata } from 'next'
import { getEntry } from '@/data/pages'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Artikel',
  description: 'Kumpulan artikel dan pintu masuk pengetahuan 165: wirid, khataman, sanad, kitab tarekat, dan sejarah TQN — semua tersambung ke halaman rujukannya.',
  alternates: { canonical: '/artikel' },
}

const HIGHLIGHTS = [
  { kind: 'glossary', slug: 'wirid', why: 'Pintu masuk paling dicari: makna wirid, bentuknya, dan posisinya dalam talqin TQN.' },
  { kind: 'glossary', slug: 'tarekat', why: 'Etimologi thariqah dan hubungan syariat-tarekat-hakikat-makrifat.' },
  { kind: 'library', slug: 'fathul-rabbani', why: 'Fath ar-Rabbani Syekh Abdul Qadir Al-Jilani: 62 maqalah yang menjadi tulang punggung pembinaan.' },
  { kind: 'library', slug: 'futuh-al-ghaib-jilani', why: 'Futuh al-Ghaib: 78 risalah tentang bersandar kepada Allah.' },
  { kind: 'institution', slug: 'pondok-pesantren-suryalaya', why: 'Profil pusat TQN di Panjalu, Tasikmalaya.' },
  { kind: 'ask', slug: 'faq-murid-baru-wirid', why: 'Jawaban untuk murid baru: bagaimana wirid pertama dijalankan.' },
  { kind: 'ask', slug: 'faq-kaidah-11-naqsabandiyah', why: 'Kaidah khas Naqsyabandiyah dijelaskan dengan adab.' },
  { kind: 'archive', slug: 'koleksi-manuskrip-wirid', why: 'Koleksi manuskrip wirid yang dikurasi dengan provenance.' },
  { kind: 'atlas', slug: 'panjalu', why: 'Kampung Suryalaya dan perannya dalam peta TQN Nusantara.' },
] as const

export default function ArtikelPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-20 pt-10">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href="/" className="hover:underline">165</Link>
        <span className="mx-1.5" aria-hidden>/</span>
        <span className="text-neutral-700 dark:text-neutral-300">Artikel</span>
      </nav>
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-neutral-50">Artikel &amp; Pintu Masuk Pengetahuan</h1>
      <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
        Halaman ini merangkum bacaan unggulan dari seluruh ruang 165: glossarium, perpustakaan, atlas, direktori institusi, arsip, dan Ask 165. Setiap artikel mengarah ke halaman rujukan yang lengkap dengan sumber dan batas kejujurannya.
      </p>
      <div className="mt-10 space-y-4">
        {HIGHLIGHTS.map((h) => {
          const e = getEntry(h.kind, h.slug)
          if (!e) return null
          return (
            <Link key={h.slug} href={\`/\${h.kind}/\${h.slug}\`} className="block rounded-2xl border border-neutral-200 p-5 transition hover:border-emerald-600 dark:border-neutral-800 dark:hover:border-emerald-500">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">{e.category}</p>
              <h2 className="mt-1 text-lg font-bold text-neutral-900 dark:text-neutral-50">{e.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{h.why}</p>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
`

writeFileSync('/home/z/my-project/src/app/artikel/page.tsx', artikel)
console.log('routes generated')
