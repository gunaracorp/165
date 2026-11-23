import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'

type Ctx = { params: Promise<{ id: string }> }

// PUT /api/cms/comments/[id] — ubah status (approve / spam / trash / pending)
export async function PUT(req: NextRequest, { params }: Ctx) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const { id } = await params
    const existing = await db.cmsComment.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Komentar tidak ditemukan.' }, { status: 404 })

    const b = await req.json().catch(() => null)
    const status = String(b?.status ?? '')
    if (!['pending', 'approved', 'spam', 'trash'].includes(status)) {
      return NextResponse.json({ error: 'Status tidak dikenal.' }, { status: 400 })
    }

    await db.cmsComment.update({ where: { id }, data: { status } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/cms/comments/[id] PUT]', err)
    return NextResponse.json({ error: 'Gagal memperbarui komentar.' }, { status: 500 })
  }
}

// DELETE /api/cms/comments/[id] — kirim ke sampah; bila sudah sampah → permanen
export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const { id } = await params
    const existing = await db.cmsComment.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Komentar tidak ditemukan.' }, { status: 404 })

    if (existing.status !== 'trash') {
      await db.cmsComment.update({ where: { id }, data: { status: 'trash' } })
      return NextResponse.json({ ok: true, mode: 'trash' })
    }
    await db.cmsComment.delete({ where: { id } })
    return NextResponse.json({ ok: true, mode: 'permanent' })
  } catch (err) {
    console.error('[api/cms/comments/[id] DELETE]', err)
    return NextResponse.json({ error: 'Gagal menghapus komentar.' }, { status: 500 })
  }
}
