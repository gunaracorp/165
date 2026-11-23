import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/cms/public/pages — daftar halaman statis terbit (PUBLIK)
export async function GET() {
  try {
    const rows = await db.cmsPost.findMany({
      where: { type: 'page', status: 'published' },
      orderBy: [{ pinned: 'desc' }, { publishedAt: 'desc' }],
      select: {
        id: true, title: true, slug: true, coverUrl: true, pinned: true,
        views: true, publishedAt: true, author: true,
      },
    })
    return NextResponse.json({
      items: rows.map((p) => ({
        ...p,
        publishedAt: p.publishedAt?.toISOString() ?? null,
      })),
    })
  } catch (err) {
    console.error('[api/cms/public/pages GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}
