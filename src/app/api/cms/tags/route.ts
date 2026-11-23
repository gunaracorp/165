import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'
import { uniqueTaxSlug } from '@/lib/cms'

// GET /api/cms/tags — daftar tag + jumlah pemakaian
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const rows = await db.cmsTag.findMany({
      orderBy: { name: 'asc' },
      include: { _count: { select: { posts: true } } },
    })
    return NextResponse.json({
      items: rows.map((t) => ({ id: t.id, name: t.name, slug: t.slug, posts: t._count.posts })),
    })
  } catch (err) {
    console.error('[api/cms/tags GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}

// POST /api/cms/tags — tambah tag
export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const b = await req.json().catch(() => null)
    const name = String(b?.name ?? '').trim()
    if (name.length < 2) return NextResponse.json({ error: 'Nama tag wajib diisi (min. 2 karakter).' }, { status: 400 })
    if (name.length > 40) return NextResponse.json({ error: 'Nama tag terlalu panjang.' }, { status: 400 })

    const exists = await db.cmsTag.findUnique({ where: { name } })
    if (exists) return NextResponse.json({ error: 'Tag itu sudah ada.' }, { status: 409 })

    const tag = await db.cmsTag.create({
      data: { name, slug: await uniqueTaxSlug('cmsTag', name) },
    })
    return NextResponse.json({ ok: true, id: tag.id })
  } catch (err) {
    console.error('[api/cms/tags POST]', err)
    return NextResponse.json({ error: 'Gagal menambah tag.' }, { status: 500 })
  }
}
