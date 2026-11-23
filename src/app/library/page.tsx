// 165 — Indeks halaman library (crawlable, statis, SEO penuh).
import { makeIndexMetadata, IndexRoute } from '@/lib/seo-routes'

export const dynamic = 'force-static'

export const metadata = makeIndexMetadata('library')

export default function Page() {
  return <IndexRoute kind="library" />
}
