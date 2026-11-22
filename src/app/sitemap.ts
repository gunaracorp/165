import type { MetadataRoute } from 'next'

// 165 — dynamic sitemap: every REAL, crawlable URL.
// Doctrine: a URL is only ever listed once its page actually exists —
// no phantom URLs. The institution ships as a single-route SPA, so every
// room is a stable, crawlable hash-section on the canonical origin.
// Sumber seksi: src/lib/site-urls.ts (dipakai bersama IndexNow & panel SEO).
export const revalidate = 3600

import { SITE_SECTIONS, SITE_BASE } from '@/lib/site-urls'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return SITE_SECTIONS.map((s) => ({
    url: `${SITE_BASE}/${s.hash ? '#' + s.hash : ''}`,
    lastModified: now,
    changeFrequency: s.freq,
    priority: s.priority,
  }))
}
