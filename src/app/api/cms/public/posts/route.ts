import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { loadSettings } from '@/lib/cms'

// GET /api/cms/public/posts?q=&category=&page= — daftar artikel terbit (PUBLIK)
export async function GET(req: NextRequest) {
  try {
    const sp = req.nextUrl.searchParams
    const q = (sp.get('q') ?? '').trim()
    const category = (sp.get('category') ?? '').trim()
    const page = Math.max(1, Number(sp.get('page') ?? '1') || 1)

    const settings = await loadSettings()
    const perPage = Math.min(50, Math.max(1, Number(settings['blog.postsPerPage'] ?? 9)))

    const where: Record<string, unknown> = { type: 'post', status: 'published' }
    if (q) where.OR = [{ title: { contains: q } }, { excerpt: { contains: q } }]
    if (category) where.category = { slug: category }

    const [total, rows] = await Promise.all([
      db.cmsPost.count({ where }),
      db.cmsPost.findMany({
        where,
        orderBy: [{ pinned: 'desc' }, { publishedAt: 'desc' }],
        skip: (page - 1) * perPage,
        take: perPage,
        include: {
          category: { select: { name: true, slug: true } },
          tags: { include: { tag: { select: { name: true } } } },
        },
      }),
    ])

    return NextResponse.json({
      total, page, perPage, pages: Math.max(1, Math.ceil(total / perPage)),
      items: rows.map((p) => ({
        id: p.id, title: p.title, slug: p.slug,
        excerpt: p.excerpt ?? p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 180),
        coverUrl: p.coverUrl, pinned: p.pinned,
        author: settings['blog.showAuthors'] !== 'false' ? p.author : null,
        views: p.views,
        category: p.category, tags: p.tags.map((t) => t.tag.name),
        publishedAt: p.publishedAt?.toISOString() ?? null,
      })),
    })
  } catch (err) {
    console.error('[api/cms/public/posts GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}
