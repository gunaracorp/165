import type { MetadataRoute } from 'next'
import { db } from '@/lib/db'

// 165 — dynamic sitemap: every REAL, crawlable URL.
// Doctrine: a URL is only ever listed once its page actually exists —
// no phantom URLs. Database-driven routes (knowledge articles, blog
// posts) degrade gracefully to the static set when DB is unreachable.
export const revalidate = 3600

const BASE = 'https://165.web.id'

// institutional hash-sections (SPA rooms) — stable, crawlable anchors
const SECTIONS: { hash: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' }[] = [
  { hash: '', priority: 1, freq: 'daily' },
  { hash: 'explore', priority: 0.9, freq: 'daily' },
  { hash: 'library', priority: 0.9, freq: 'weekly' },
  { hash: 'archive', priority: 0.8, freq: 'weekly' },
  { hash: 'research', priority: 0.8, freq: 'weekly' },
  { hash: 'academy', priority: 0.7, freq: 'weekly' },
  { hash: 'manaqib', priority: 0.9, freq: 'weekly' },
  { hash: 'rahasia', priority: 0.8, freq: 'weekly' },
  { hash: 'media', priority: 0.7, freq: 'weekly' },
  { hash: 'trust', priority: 0.9, freq: 'weekly' },
  { hash: 'about', priority: 0.6, freq: 'monthly' },
  { hash: 'documents', priority: 0.7, freq: 'monthly' },
  { hash: 'contribute', priority: 0.6, freq: 'monthly' },
  { hash: 'seo', priority: 0.5, freq: 'monthly' },
]

// ecosystem routes that remain part of the platform
const ROUTES: { path: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' }[] = [
  { path: '/knowledge', priority: 0.7, freq: 'weekly' },
  { path: '/blog', priority: 0.6, freq: 'weekly' },
  { path: '/about', priority: 0.4, freq: 'monthly' },
  { path: '/contact', priority: 0.4, freq: 'monthly' },
  { path: '/portfolio', priority: 0.4, freq: 'monthly' },
  { path: '/pricing', priority: 0.4, freq: 'monthly' },
]

async function dbEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const [articles, posts] = await Promise.all([
      db.knowledgeArticle.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
        take: 500,
        orderBy: { updatedAt: 'desc' },
      }),
      db.post.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true, createdAt: true },
        take: 200,
        orderBy: { createdAt: 'desc' },
      }),
    ])
    return [
      ...articles.map((a) => ({
        url: `${BASE}/knowledge/${a.slug}`,
        lastModified: a.updatedAt ?? new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
      ...posts.map((p) => ({
        url: `${BASE}/blog/${p.slug}`,
        lastModified: p.updatedAt ?? p.createdAt ?? new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      })),
    ]
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const sectionEntries: MetadataRoute.Sitemap = SECTIONS.map((s) => ({
    url: `${BASE}/${s.hash ? '#' + s.hash : ''}`,
    lastModified: now,
    changeFrequency: s.freq,
    priority: s.priority,
  }))

  const routeEntries: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }))

  return [...sectionEntries, ...routeEntries, ...(await dbEntries())]
}
