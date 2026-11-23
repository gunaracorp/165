import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'

// GET /api/cms/overview — dashboard CMS: ringkasan angka + aktivitas terbaru
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const [posts, published, pages, drafts, categories, tags, media, pendingComments, totalComments, trash, subscribers, pendingContrib, personaCount, activePersona, kitabCount, babCount, babPublished] =
      await Promise.all([
        db.cmsPost.count({ where: { type: 'post' } }),
        db.cmsPost.count({ where: { type: 'post', status: 'published' } }),
        db.cmsPost.count({ where: { type: 'page' } }),
        db.cmsPost.count({ where: { type: 'post', status: 'draft' } }),
        db.cmsCategory.count(),
        db.cmsTag.count(),
        db.cmsMedia.count(),
        db.cmsComment.count({ where: { status: 'pending' } }),
        db.cmsComment.count(),
        db.cmsPost.count({ where: { status: 'trash' } }),
        db.subscriber.count({ where: { active: true } }),
        db.contribution.count({ where: { status: 'SUBMITTED' } }),
        db.cmsPersona.count(),
        db.cmsPersona.findFirst({ where: { active: true } }),
        db.cmsKitab.count(),
        db.cmsBab.count(),
        db.cmsBab.count({ where: { status: 'published' } }),
      ])

    const recentPosts = await db.cmsPost.findMany({
      where: { type: 'post', status: { not: 'trash' } },
      orderBy: { updatedAt: 'desc' },
      take: 5,
      include: { category: true, _count: { select: { comments: true } } },
    })

    const recentComments = await db.cmsComment.findMany({
      where: { status: { not: 'trash' } },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: { post: { select: { title: true, slug: true } } },
    })

    const totalViews = await db.cmsPost.aggregate({ _sum: { views: true } })

    return NextResponse.json({
      stats: {
        posts, published, pages, drafts, categories, tags, media,
        comments: totalComments, pendingComments, trash,
        views: totalViews._sum.views ?? 0,
        subscribers, pendingContributions: pendingContrib, personas: personaCount,
        kitab: kitabCount, bab: babCount, babPublished,
      },
      activePersona: activePersona
        ? { name: activePersona.name, field: activePersona.field, title: activePersona.title, master: activePersona.master }
        : null,
      recentPosts: recentPosts.map((p) => ({
        id: p.id, title: p.title, slug: p.slug, status: p.status,
        category: p.category?.name ?? null, comments: p._count.comments,
        updatedAt: p.updatedAt.toISOString(),
      })),
      recentComments: recentComments.map((c) => ({
        id: c.id, name: c.name, body: c.body.slice(0, 140), status: c.status,
        createdAt: c.createdAt.toISOString(),
        post: c.post ? { title: c.post.title, slug: c.post.slug } : null,
      })),
    })
  } catch (err) {
    console.error('[api/cms/overview GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}
