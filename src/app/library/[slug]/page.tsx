// 165 — Halaman detail library (crawlable, statis, SEO penuh).
import { makeDetailMetadata, DetailRoute, generateDetailParams } from '@/lib/seo-routes'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return generateDetailParams('library')
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return makeDetailMetadata('library', slug)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <DetailRoute kind="library" slug={slug} />
}
