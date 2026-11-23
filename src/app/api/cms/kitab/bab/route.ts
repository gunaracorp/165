import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'

// ============================================================
// CMS 165 — BAB KITAB (teks Arab RTL + terjemah Indonesia)
// GET    /api/cms/kitab/bab?kitabId=… → daftar bab satu kitab
// POST   /api/cms/kitab/bab           → bab baru (urutan otomatis)
// PATCH  /api/cms/kitab/bab           → sunting bab / naik-turun urutan
// DELETE /api/cms/kitab/bab?id=…      → hapus bab
// ============================================================

const STATUSES = new Set(['draft', 'published'])

function babData(b: Record<string, unknown>): Record<string, string | number> {
  const out: Record<string, string | number> = {}
  const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : undefined)
  const tId = str(b.titleId, 160)
  const tAr = str(b.titleAr, 160)
  if (tId) out.titleId = tId
  if (tAr) out.titleAr = tAr
  if ('arabic' in b) out.arabic = typeof b.arabic === 'string' ? b.arabic.slice(0, 20000) : ''
  if ('indonesian' in b) out.indonesian = typeof b.indonesian === 'string' ? b.indonesian.slice(0, 20000) : ''
  if ('kunciAmal' in b) out.kunciAmal = str(b.kunciAmal, 2000) || null
  if (typeof b.order === 'number' && Number.isFinite(b.order)) out.order = Math.trunc(b.order)
  if (typeof b.status === 'string' && STATUSES.has(b.status)) out.status = b.status
  return out
}

export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const kitabId = req.nextUrl.searchParams.get('kitabId')
    if (!kitabId) return NextResponse.json({ error: 'kitabId wajib.' }, { status: 400 })
    const items = await db.cmsBab.findMany({
      where: { kitabId },
      orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
    })
    return NextResponse.json({ items })
  } catch (err) {
    console.error('[api/cms/kitab/bab GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const b = await req.json().catch(() => null)
    if (!b || typeof b.kitabId !== 'string' || typeof b.titleId !== 'string' || !b.titleId.trim() ||
        typeof b.titleAr !== 'string' || !b.titleAr.trim()) {
      return NextResponse.json({ error: 'kitabId, judul Indonesia, dan judul Arab wajib.' }, { status: 400 })
    }
    const kitab = await db.cmsKitab.findUnique({ where: { id: String(b.kitabId) } })
    if (!kitab) return NextResponse.json({ error: 'Kitab tidak ditemukan.' }, { status: 404 })
    const maxOrder = await db.cmsBab.aggregate({ where: { kitabId: kitab.id }, _max: { order: true } })
    const data = babData(b)
    const bab = await db.cmsBab.create({
      data: {
        kitabId: kitab.id,
        titleId: String(data.titleId),
        titleAr: String(data.titleAr),
        arabic: (data.arabic as string) ?? '',
        indonesian: (data.indonesian as string) ?? '',
        kunciAmal: (data.kunciAmal as string | null) ?? null,
        status: (data.status as string) ?? 'draft',
        order: (data.order as number | undefined) ?? (maxOrder._max.order ?? 0) + 1,
      },
    })
    return NextResponse.json({ ok: true, bab }, { status: 201 })
  } catch (err) {
    console.error('[api/cms/kitab/bab POST]', err)
    return NextResponse.json({ error: 'Gagal membuat bab.' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const b = await req.json().catch(() => null)
    if (!b || typeof b.id !== 'string') return NextResponse.json({ error: 'ID bab wajib.' }, { status: 400 })
    const existing = await db.cmsBab.findUnique({ where: { id: String(b.id) } })
    if (!existing) return NextResponse.json({ error: 'Bab tidak ditemukan.' }, { status: 404 })

    // aksi urutan: naik / turun (tukar nomor urut dengan tetangga)
    if (b.move === 'up' || b.move === 'down') {
      const sibling = await db.cmsBab.findFirst({
        where: { kitabId: existing.kitabId, order: b.move === 'up' ? { lt: existing.order } : { gt: existing.order } },
        orderBy: { order: b.move === 'up' ? 'desc' : 'asc' },
      })
      if (sibling) {
        await db.$transaction([
          db.cmsBab.update({ where: { id: sibling.id }, data: { order: existing.order } }),
          db.cmsBab.update({ where: { id: existing.id }, data: { order: sibling.order } }),
        ])
      }
      return NextResponse.json({ ok: true })
    }

    const data = babData(b)
    if (Object.keys(data).length === 0) return NextResponse.json({ error: 'Tidak ada perubahan.' }, { status: 400 })
    const bab = await db.cmsBab.update({ where: { id: existing.id }, data })
    return NextResponse.json({ ok: true, bab })
  } catch (err) {
    console.error('[api/cms/kitab/bab PATCH]', err)
    return NextResponse.json({ error: 'Gagal menyimpan bab.' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const id = req.nextUrl.searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'ID bab wajib.' }, { status: 400 })
    await db.cmsBab.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/cms/kitab/bab DELETE]', err)
    return NextResponse.json({ error: 'Gagal menghapus bab.' }, { status: 500 })
  }
}
