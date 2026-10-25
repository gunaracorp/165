import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

// 165 — analytics summary for the admin statistics room.
// Serves AGGREGATES ONLY (counts, top paths, top searches) — never raw
// visitor data. Falls back to an honest zero-state when DB is unreachable.
export async function GET() {
  try {
    const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const since7d = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    const [total, last24h, last7d, topPaths, topSearches, topEntities, daily] =
      await Promise.all([
        db.visitEvent.count(),
        db.visitEvent.count({ where: { createdAt: { gte: since24h } } }),
        db.visitEvent.count({ where: { createdAt: { gte: since7d } } }),
        db.visitEvent.groupBy({
          by: ['path'],
          where: { kind: 'pageview' },
          _count: { path: true },
          orderBy: { _count: { path: 'desc' } },
          take: 8,
        }),
        db.visitEvent.groupBy({
          by: ['term'],
          where: { kind: 'search', term: { not: null } },
          _count: { term: true },
          orderBy: { _count: { term: 'desc' } },
          take: 8,
        }),
        db.visitEvent.groupBy({
          by: ['path'],
          where: { kind: 'entity' },
          _count: { path: true },
          orderBy: { _count: { path: 'desc' } },
          take: 8,
        }),
        db.visitEvent.groupBy({
          by: ['createdAt'],
          where: { createdAt: { gte: since7d } },
          _count: { createdAt: true },
          orderBy: { createdAt: 'asc' },
        }),
      ])

    // fold events into a per-day series (7 buckets)
    const series: { day: string; count: number }[] = []
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000)
      const key = d.toISOString().slice(0, 10)
      series.push({ day: key, count: 0 })
    }
    for (const row of daily) {
      const key = row.createdAt.toISOString().slice(0, 10)
      const bucket = series.find((s) => s.day === key)
      if (bucket) bucket.count += row._count.createdAt
    }

    return NextResponse.json({
      ok: true,
      totals: { all: total, last24h, last7d },
      topPaths: topPaths.map((r) => ({ path: r.path, count: r._count.path })),
      topSearches: topSearches.map((r) => ({ term: r.term, count: r._count.term })),
      topEntities: topEntities.map((r) => ({ path: r.path, count: r._count.path })),
      series,
    })
  } catch (err) {
    console.error('[api/analytics/summary]', err)
    return NextResponse.json({
      ok: true,
      totals: { all: 0, last24h: 0, last7d: 0 },
      topPaths: [], topSearches: [], topEntities: [],
      series: Array.from({ length: 7 }, (_, i) => ({
        day: new Date(Date.now() - (6 - i) * 86400000).toISOString().slice(0, 10),
        count: 0,
      })),
    })
  }
}
