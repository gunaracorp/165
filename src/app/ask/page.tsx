// 165 — Indeks halaman ask (crawlable, statis, SEO penuh).
import { makeIndexMetadata, IndexRoute } from '@/lib/seo-routes'

export const dynamic = 'force-static'

export const metadata = makeIndexMetadata('ask')

export default function Page() {
  return <IndexRoute kind="ask" />
}
