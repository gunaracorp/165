// 165 — Page entity types for the crawlable knowledge pages.
// Sumber slug: katalog URL resmi 165.web.id (panel SEO) — satu slug = satu
// halaman nyata, tidak ada URL bayangan. Semua konten bahasa Indonesia.
export type PageKind = 'glossary' | 'library' | 'atlas' | 'institution' | 'archive' | 'ask'

export interface PageSection {
  h: string
  p: string[]
}

export interface PageFact {
  label: string
  value: string
}

export interface PageEntry {
  slug: string
  kind: PageKind
  title: string
  titleAr?: string
  category: string
  summary: string // meta description ≤160 chars
  facts?: PageFact[]
  body: PageSection[]
  question?: string // ask only
  related?: string[]
}

// JSON-LD @type per kind (dipakai halaman + sitemap)
export const KIND_SCHEMA: Record<PageKind, string> = {
  glossary: 'DefinedTerm',
  library: 'Book',
  atlas: 'Place',
  institution: 'Organization',
  archive: 'CollectionPage',
  ask: 'FAQPage',
}

export const KIND_PATH: Record<PageKind, string> = {
  glossary: '/glossary/',
  library: '/library/',
  atlas: '/atlas/',
  institution: '/institution/',
  archive: '/archive/',
  ask: '/ask/',
}
