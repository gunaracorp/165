import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'
import { sanitizePostHtml, uniquePostSlug, slugify } from '@/lib/cms'

type Ctx = { params: Promise<{ id: string }> }

// GET /api/cms/posts/[id] — ambil satu konten untuk editor
export async function GET(req: NextRequest, { params }: Ctx) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const { id } = await params
    const p = await db.cmsPost.findUnique({
      where: { id },
      include: {
        category: { select: { id: true, name: true } },
        tags: { include: { tag: { select: { name: true } } } },
      },
    })
    if (!p) return NextResponse.json({ error: 'Konten tidak ditemukan.' }, { status: 404 })
    return NextResponse.json({
      post: {
        ...p,
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
        publishedAt: p.publishedAt?.toISOString() ?? null,
        tags: p.tags.map((t) => t.tag.name),
      },
    })
  } catch (err) {
    console.error('[api/cms/posts/[id] GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}

// PUT /api/cms/posts/[id] — perbarui konten
export async function PUT(req: NextRequest, { params }: Ctx) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const { id } = await params
    const existing = await db.cmsPost.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Konten tidak ditemukan.' }, { status: 404 })

    const b = await req.json().catch(() => null)
    if (!b) return NextResponse.json({ error: 'Data tidak valid.' }, { status: 400 })

    const data: Record<string, unknown> = {}

    if (b.title !== undefined) {
      const title = String(b.title).trim()
      if (title.length < 2) return NextResponse.json({ error: 'Judul wajib diisi (min. 2 karakter).' }, { status: 400 })
      data.title = title.slice(0, 200)
    }

    if (b.slug !== undefined || b.title !== undefined) {
      const wanted = String(b.slug ?? '').trim() || (b.title !== undefined ? String(b.title) : existing.title)
      data.slug = await uniquePostSlug(wanted, id)
    }

    if (b.content !== undefined) data.content = sanitizePostHtml(String(b.content))
    if (b.excerpt !== undefined) {
      const raw = String(b.excerpt).trim()
      data.excerpt = raw.slice(0, 300) || null
    }
    if (b.coverUrl !== undefined) data.coverUrl = String(b.coverUrl).trim() || null
    if (b.pinned !== undefined) data.pinned = Boolean(b.pinned)

    if (b.categoryId !== undefined) {
      if (!b.categoryId) data.categoryId = null
      else {
        const cat = await db.cmsCategory.findUnique({ where: { id: String(b.categoryId) } })
        data.categoryId = cat ? cat.id : null
      }
    }

    if (b.status !== undefined && ['draft', 'published', 'trash'].includes(b.status)) {
      data.status = b.status
      if (b.status === 'published' && existing.status !== 'published' && !existing.publishedAt) {
        data.publishedAt = new Date()
      }
    }

    await db.cmsPost.update({ where: { id }, data: data as never })

    // sinkron tag bila dikirim
    if (Array.isArray(b.tags)) {
      const tagNames = b.tags.map((t: unknown) => String(t).trim()).filter(Boolean).slice(0, 12)
      await db.cmsPostTag.deleteMany({ where: { postId: id } })
      for (const name of [...new Set(tagNames)]) {
        const tag = await db.cmsTag.upsert({
          where: { name },
          update: {},
          create: { name, slug: slugify(name) },
        })
        await db.cmsPostTag.create({ data: { postId: id, tagId: tag.id } })
      }
    }

    const fresh = await db.cmsPost.findUnique({ where: { id }, select: { slug: true, status: true } })
    return NextResponse.json({ ok: true, slug: fresh?.slug, status: fresh?.status })
  } catch (err) {
    console.error('[api/cms/posts/[id] PUT]', err)
    return NextResponse.json({ error: 'Gagal memperbarui konten.' }, { status: 500 })
  }
}

// DELETE /api/cms/posts/[id] — kirim ke sampah; bila sudah sampah → hapus permanen
export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const { id } = await params
    const existing = await db.cmsPost.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Konten tidak ditemukan.' }, { status: 404 })

    if (existing.status !== 'trash') {
      await db.cmsPost.update({ where: { id }, data: { status: 'trash' } })
      return NextResponse.json({ ok: true, mode: 'trash' })
    }

    await db.cmsPost.delete({ where: { id } })
    return NextResponse.json({ ok: true, mode: 'permanent' })
  } catch (err) {
    console.error('[api/cms/posts/[id] DELETE]', err)
    return NextResponse.json({ error: 'Gagal menghapus konten.' }, { status: 500 })
  }
}
