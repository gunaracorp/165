// 165 — Indeks halaman archive (crawlable, statis, SEO penuh).
import { makeIndexMetadata, IndexRoute } from '@/lib/seo-routes'

export const dynamic = 'force-static'

export const metadata = makeIndexMetadata('archive')

export default function Page() {
  return <IndexRoute kind="archive" />
}
