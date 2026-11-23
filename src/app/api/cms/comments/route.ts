import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'

// GET /api/cms/comments?status=pending|approved|spam|trash|all
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const status = req.nextUrl.searchParams.get('status') ?? 'pending'
    const where: Record<string, unknown> = status && status !== 'all' ? { status } : { status: { not: 'trash' } }

    const [rows, counts] = await Promise.all([
      db.cmsComment.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: 200,
        include: { post: { select: { id: true, title: true, slug: true } } },
      }),
      {
        pending: await db.cmsComment.count({ where: { status: 'pending' } }),
        approved: await db.cmsComment.count({ where: { status: 'approved' } }),
        spam: await db.cmsComment.count({ where: { status: 'spam' } }),
        trash: await db.cmsComment.count({ where: { status: 'trash' } }),
        all: await db.cmsComment.count({ where: { status: { not: 'trash' } } }),
      },
    ])

    return NextResponse.json({
      counts,
      items: rows.map((c) => ({
        id: c.id, name: c.name, email: c.email, body: c.body, status: c.status,
        createdAt: c.createdAt.toISOString(),
        post: c.post ? { id: c.post.id, title: c.post.title, slug: c.post.slug } : null,
      })),
    })
  } catch (err) {
    console.error('[api/cms/comments GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}
