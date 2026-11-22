// 165 — URL & SEKSI SITUS (sumber tunggal)
// Dipakai bersama oleh sitemap, robots, IndexNow, dan panel SEO —
// satu daftar, tidak ada URL bayangan: hanya ruang yang benar-benar ada.
export const SITE_BASE = 'https://165.web.id'

export interface SiteSection {
  hash: string
  priority: number
  freq: 'daily' | 'weekly' | 'monthly'
}

// ruang institusional (hash-seksi SPA) — stabil & dapat dirayapi
export const SITE_SECTIONS: SiteSection[] = [
  { hash: '', priority: 1, freq: 'daily' },
  { hash: 'explore', priority: 0.9, freq: 'daily' },
  { hash: 'library', priority: 0.9, freq: 'weekly' },
  { hash: 'archive', priority: 0.8, freq: 'weekly' },
  { hash: 'research', priority: 0.8, freq: 'weekly' },
  { hash: 'academy', priority: 0.7, freq: 'weekly' },
  { hash: 'manaqib', priority: 0.9, freq: 'weekly' },
  { hash: 'rahasia', priority: 0.8, freq: 'weekly' },
  { hash: 'stories', priority: 0.6, freq: 'weekly' },
  { hash: 'wiridian', priority: 0.9, freq: 'weekly' },
  { hash: 'tasbih', priority: 0.7, freq: 'weekly' },
  { hash: 'sholat', priority: 0.7, freq: 'daily' },
  { hash: 'roadmap', priority: 0.7, freq: 'weekly' },
  { hash: 'dasbor', priority: 0.6, freq: 'weekly' },
  { hash: 'media', priority: 0.7, freq: 'weekly' },
  { hash: 'trust', priority: 0.9, freq: 'weekly' },
  { hash: 'about', priority: 0.6, freq: 'monthly' },
  { hash: 'documents', priority: 0.7, freq: 'monthly' },
  { hash: 'contribute', priority: 0.6, freq: 'monthly' },
  { hash: 'seo', priority: 0.5, freq: 'monthly' },
]

export function sectionUrl(hash: string): string {
  return `${SITE_BASE}/${hash ? '#' + hash : ''}`
}
