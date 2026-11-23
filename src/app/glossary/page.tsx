// 165 — Indeks halaman glossary (crawlable, statis, SEO penuh).
import { makeIndexMetadata, IndexRoute } from '@/lib/seo-routes'

export const dynamic = 'force-static'

export const metadata = makeIndexMetadata('glossary')

export default function Page() {
  return <IndexRoute kind="glossary" />
}
