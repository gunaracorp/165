import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'
import { uniqueTaxSlug } from '@/lib/cms'

type Ctx = { params: Promise<{ id: string }> }

// PUT /api/cms/categories/[id] — ubah kategori
export async function PUT(req: NextRequest, { params }: Ctx) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const { id } = await params
    const existing = await db.cmsCategory.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Kategori tidak ditemukan.' }, { status: 404 })

    const b = await req.json().catch(() => null)
    const name = String(b?.name ?? '').trim()
    if (name.length < 2) return NextResponse.json({ error: 'Nama kategori wajib diisi.' }, { status: 400 })

    const clash = await db.cmsCategory.findUnique({ where: { name } })
    if (clash && clash.id !== id) return NextResponse.json({ error: 'Kategori dengan nama itu sudah ada.' }, { status: 409 })

    await db.cmsCategory.update({
      where: { id },
      data: {
        name,
        slug: await uniqueTaxSlug('cmsCategory', String(b?.slug ?? '').trim() || name, id),
        desc: String(b?.desc ?? '').trim().slice(0, 200) || null,
      },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/cms/categories/[id] PUT]', err)
    return NextResponse.json({ error: 'Gagal memperbarui kategori.' }, { status: 500 })
  }
}

// DELETE /api/cms/categories/[id] — hapus (artikel dalam kategori tidak ikut hilang)
export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const { id } = await params
    const existing = await db.cmsCategory.findUnique({
      where: { id },
      include: { _count: { select: { posts: true } } },
    })
    if (!existing) return NextResponse.json({ error: 'Kategori tidak ditemukan.' }, { status: 404 })
    if (existing._count.posts > 0) {
      return NextResponse.json(
        { error: `Kategori masih dipakai ${existing._count.posts} artikel. Pindahkan dulu artikelnya.` },
        { status: 409 },
      )
    }
    await db.cmsCategory.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/cms/categories/[id] DELETE]', err)
    return NextResponse.json({ error: 'Gagal menghapus kategori.' }, { status: 500 })
  }
}
