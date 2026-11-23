import type { MetadataRoute } from 'next'

// 165 — dynamic sitemap: every REAL, crawlable URL.
// Doctrine: a URL is only ever listed once its page actually exists —
// no phantom URLs. Kombinasi: (1) hash-seksi SPA institusional,
// (2) indeks ruang pengetahuan statis, (3) 486 halaman entri pengetahuan
// (glossary/library/atlas/institution/archive/ask) yang kini nyata ada.
// Sumber seksi: src/lib/site-urls.ts — sumber entri: src/data/pages.
export const revalidate = 3600

import { SITE_SECTIONS, SITE_BASE } from '@/lib/site-urls'
import { ALL_PAGE_ENTRIES, KIND_PATH, type PageKind } from '@/data/pages'

const KIND_PRIORITY: Record<PageKind, number> = {
  glossary: 0.9,
  library: 0.8,
  atlas: 0.7,
  institution: 0.8,
  archive: 0.6,
  ask: 0.7,
}

const INDEX_PAGES: { path: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' }[] = [
  { path: '/glossary', priority: 0.9, freq: 'weekly' },
  { path: '/library', priority: 0.9, freq: 'weekly' },
  { path: '/atlas', priority: 0.7, freq: 'weekly' },
  { path: '/institution', priority: 0.8, freq: 'weekly' },
  { path: '/archive', priority: 0.6, freq: 'monthly' },
  { path: '/ask', priority: 0.7, freq: 'weekly' },
  { path: '/artikel', priority: 0.7, freq: 'weekly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const rows: MetadataRoute.Sitemap = []

  // 1) hash-seksi SPA institusional
  for (const s of SITE_SECTIONS) {
    rows.push({
      url: `${SITE_BASE}/${s.hash ? '#' + s.hash : ''}`,
      lastModified: now,
      changeFrequency: s.freq,
      priority: s.priority,
    })
  }

  // 2) halaman indeks ruang pengetahuan
  for (const p of INDEX_PAGES) {
    rows.push({
      url: `${SITE_BASE}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })
  }

  // 3) halaman entri pengetahuan — satu slug = satu URL nyata
  for (const e of ALL_PAGE_ENTRIES) {
    rows.push({
      url: `${SITE_BASE}${KIND_PATH[e.kind]}${e.slug}`,
      lastModified: now,
      changeFrequency: e.kind === 'ask' || e.kind === 'glossary' ? 'weekly' : 'monthly',
      priority: KIND_PRIORITY[e.kind],
    })
  }

  return rows
}
