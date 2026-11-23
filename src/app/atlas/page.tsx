// 165 — Indeks halaman atlas (crawlable, statis, SEO penuh).
import { makeIndexMetadata, IndexRoute } from '@/lib/seo-routes'

export const dynamic = 'force-static'

export const metadata = makeIndexMetadata('atlas')

export default function Page() {
  return <IndexRoute kind="atlas" />
}
