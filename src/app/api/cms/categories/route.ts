import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'
import { uniqueTaxSlug } from '@/lib/cms'

// GET /api/cms/categories — daftar kategori + jumlah artikel
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const rows = await db.cmsCategory.findMany({
      orderBy: { name: 'asc' },
      include: { _count: { select: { posts: true } } },
    })
    return NextResponse.json({
      items: rows.map((c) => ({
        id: c.id, name: c.name, slug: c.slug, desc: c.desc, posts: c._count.posts,
      })),
    })
  } catch (err) {
    console.error('[api/cms/categories GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}

// POST /api/cms/categories — tambah kategori
export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const b = await req.json().catch(() => null)
    const name = String(b?.name ?? '').trim()
    if (name.length < 2) return NextResponse.json({ error: 'Nama kategori wajib diisi (min. 2 karakter).' }, { status: 400 })
    if (name.length > 60) return NextResponse.json({ error: 'Nama kategori terlalu panjang.' }, { status: 400 })

    const exists = await db.cmsCategory.findUnique({ where: { name } })
    if (exists) return NextResponse.json({ error: 'Kategori dengan nama itu sudah ada.' }, { status: 409 })

    const cat = await db.cmsCategory.create({
      data: {
        name,
        slug: await uniqueTaxSlug('cmsCategory', String(b?.slug ?? '').trim() || name),
        desc: String(b?.desc ?? '').trim().slice(0, 200) || null,
      },
    })
    return NextResponse.json({ ok: true, id: cat.id, slug: cat.slug })
  } catch (err) {
    console.error('[api/cms/categories POST]', err)
    return NextResponse.json({ error: 'Gagal menambah kategori.' }, { status: 500 })
  }
}
