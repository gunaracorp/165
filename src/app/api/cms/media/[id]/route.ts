import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'

type Ctx = { params: Promise<{ id: string }> }

// DELETE /api/cms/media/[id] — hapus berkas media
export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const { id } = await params
    const existing = await db.cmsMedia.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Media tidak ditemukan.' }, { status: 404 })
    await db.cmsMedia.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/cms/media/[id] DELETE]', err)
    return NextResponse.json({ error: 'Gagal menghapus media.' }, { status: 500 })
  }
}
