// 165 — Indeks halaman institution (crawlable, statis, SEO penuh).
import { makeIndexMetadata, IndexRoute } from '@/lib/seo-routes'

export const dynamic = 'force-static'

export const metadata = makeIndexMetadata('institution')

export default function Page() {
  return <IndexRoute kind="institution" />
}
