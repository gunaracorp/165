import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

type Ctx = { params: Promise<{ slug: string }> }

// GET /api/cms/public/posts/[slug] — satu artikel/halaman terbit + komentar disetujui (PUBLIK)
export async function GET(_req: NextRequest, { params }: Ctx) {
  try {
    const { slug } = await params
    const p = await db.cmsPost.findUnique({
      where: { slug },
      include: {
        category: { select: { name: true, slug: true } },
        tags: { include: { tag: { select: { name: true } } } },
      },
    })
    if (!p || p.status !== 'published' || p.type === 'page') {
      return NextResponse.json({ error: 'Artikel tidak ditemukan.' }, { status: 404 })
    }

    // hitung view (best-effort — jangan gagalkan permintaan)
    try { await db.cmsPost.update({ where: { id: p.id }, data: { views: { increment: 1 } } }) } catch { /* noop */ }

    const comments = await db.cmsComment.findMany({
      where: { postId: p.id, status: 'approved' },
      orderBy: { createdAt: 'asc' },
      select: { id: true, name: true, body: true, createdAt: true },
    })

    return NextResponse.json({
      post: {
        id: p.id, title: p.title, slug: p.slug, excerpt: p.excerpt,
        content: p.content, coverUrl: p.coverUrl, pinned: p.pinned,
        author: p.author, views: p.views + 1,
        category: p.category, tags: p.tags.map((t) => t.tag.name),
        publishedAt: p.publishedAt?.toISOString() ?? null,
      },
      comments: comments.map((c) => ({
        id: c.id, name: c.name, body: c.body, createdAt: c.createdAt.toISOString(),
      })),
    })
  } catch (err) {
    console.error('[api/cms/public/posts/[slug] GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}
