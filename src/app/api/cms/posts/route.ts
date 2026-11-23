import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'
import { sanitizePostHtml, uniquePostSlug, slugify } from '@/lib/cms'

// GET /api/cms/posts?type=post|page&status=&q=&categoryId=&page=&perPage=
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const sp = req.nextUrl.searchParams
    const type = sp.get('type') === 'page' ? 'page' : 'post'
    const status = sp.get('status') ?? ''
    const q = (sp.get('q') ?? '').trim()
    const categoryId = (sp.get('categoryId') ?? '').trim()
    const page = Math.max(1, Number(sp.get('page') ?? '1') || 1)
    const perPage = Math.min(50, Math.max(5, Number(sp.get('perPage') ?? '20') || 20))

    const where: Record<string, unknown> = { type }
    if (status && status !== 'all') where.status = status
    else where.status = { not: 'trash' }
    if (categoryId) where.categoryId = categoryId
    if (q) where.OR = [{ title: { contains: q } }, { content: { contains: q } }]

    const [total, rows] = await Promise.all([
      db.cmsPost.count({ where }),
      db.cmsPost.findMany({
        where,
        orderBy: [{ pinned: 'desc' }, { updatedAt: 'desc' }],
        skip: (page - 1) * perPage,
        take: perPage,
        include: {
          category: { select: { id: true, name: true, slug: true } },
          tags: { include: { tag: { select: { id: true, name: true } } } },
          _count: { select: { comments: true } },
        },
      }),
    ])

    const counts = {
      published: await db.cmsPost.count({ where: { type, status: 'published' } }),
      draft: await db.cmsPost.count({ where: { type, status: 'draft' } }),
      trash: await db.cmsPost.count({ where: { type, status: 'trash' } }),
      all: await db.cmsPost.count({ where: { type, status: { not: 'trash' } } }),
    }

    return NextResponse.json({
      total, page, perPage,
      counts,
      items: rows.map((p) => ({
        id: p.id, type: p.type, title: p.title, slug: p.slug,
        excerpt: p.excerpt, coverUrl: p.coverUrl, status: p.status,
        pinned: p.pinned, author: p.author, views: p.views,
        categoryId: p.categoryId, category: p.category,
        tags: p.tags.map((t) => ({ id: t.tag.id, name: t.tag.name })),
        comments: p._count.comments,
        publishedAt: p.publishedAt?.toISOString() ?? null,
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
      })),
    })
  } catch (err) {
    console.error('[api/cms/posts GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}

// POST /api/cms/posts — buat artikel / halaman baru
export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const b = await req.json().catch(() => null)
    if (!b) return NextResponse.json({ error: 'Data tidak valid.' }, { status: 400 })

    const type = b.type === 'page' ? 'page' : 'post'
    const title = String(b.title ?? '').trim()
    if (title.length < 2) return NextResponse.json({ error: 'Judul wajib diisi (min. 2 karakter).' }, { status: 400 })
    if (title.length > 200) return NextResponse.json({ error: 'Judul terlalu panjang (maks. 200 karakter).' }, { status: 400 })

    const content = sanitizePostHtml(String(b.content ?? ''))
    const excerpt = String(b.excerpt ?? '').trim().slice(0, 300) || content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 180)
    const status = ['draft', 'published'].includes(b.status) ? b.status : 'draft'
    const slug = await uniquePostSlug(String(b.slug ?? '').trim() || title)
    const pinned = Boolean(b.pinned)

    let categoryId: string | null = null
    if (typeof b.categoryId === 'string' && b.categoryId) {
      const cat = await db.cmsCategory.findUnique({ where: { id: b.categoryId } })
      if (cat) categoryId = cat.id
    }

    const post = await db.cmsPost.create({
      data: {
        type, title, slug, excerpt, content, categoryId, pinned, status,
        coverUrl: typeof b.coverUrl === 'string' && b.coverUrl ? b.coverUrl : null,
        // penulis = persona aktif (Peran & Persona) atau default Admin 165
        author: typeof b.author === 'string' && b.author.trim() ? b.author.trim().slice(0, 60) : 'Admin 165',
        publishedAt: status === 'published' ? new Date() : null,
      },
    })

    // sinkron tag (nama → upsert → relasi)
    const tagNames: string[] = Array.isArray(b.tags)
      ? b.tags.map((t: unknown) => String(t).trim()).filter(Boolean).slice(0, 12)
      : []
    for (const name of [...new Set(tagNames)]) {
      const tag = await db.cmsTag.upsert({
        where: { name },
        update: {},
        create: { name, slug: slugify(name) },
      })
      await db.cmsPostTag.create({ data: { postId: post.id, tagId: tag.id } })
    }

    return NextResponse.json({ ok: true, id: post.id, slug: post.slug })
  } catch (err) {
    console.error('[api/cms/posts POST]', err)
    return NextResponse.json({ error: 'Gagal menyimpan konten.' }, { status: 500 })
  }
}
