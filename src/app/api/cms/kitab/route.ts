import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'
import { slugify } from '@/lib/cms'

// ============================================================
// CMS 165 — KITAB (buku dwibahasa Arab–Indonesia)
// GET    /api/cms/kitab         → daftar kitab (+ jumlah bab)
// GET    /api/cms/kitab?id=…    → satu kitab + seluruh bab (editor)
// POST   /api/cms/kitab         → kitab baru
// PATCH  /api/cms/kitab         → sunting meta kitab
// DELETE /api/cms/kitab?id=…    → hapus kitab (bab ikut terhapus)
// ============================================================

async function uniqueKitabSlug(base: string): Promise<string> {
  const root = slugify(base)
  let candidate = root
  for (let i = 2; ; i++) {
    const clash = await db.cmsKitab.findUnique({ where: { slug: candidate } })
    if (!clash) return candidate
    candidate = `${root}-${i}`
  }
}

const STATUSES = new Set(['draft', 'published'])

function meta(b: Record<string, unknown>): Record<string, string | null | number> {
  const out: Record<string, string | null | number> = {}
  const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : undefined)
  const tId = str(b.titleId, 160)
  const tAr = str(b.titleAr, 160)
  if (tId) out.titleId = tId
  if (tAr) out.titleAr = tAr
  if ('subtitleId' in b) out.subtitleId = str(b.subtitleId, 200) || null
  if ('ledeId' in b) out.ledeId = str(b.ledeId, 2000) || null
  if ('ledeAr' in b) out.ledeAr = str(b.ledeAr, 2000) || null
  if ('author' in b) out.author = str(b.author, 160) || 'Master Polymath Sage Universal — Gabungan Dewan Pakar 46'
  if (typeof b.order === 'number' && Number.isFinite(b.order)) out.order = Math.trunc(b.order)
  if (typeof b.status === 'string' && STATUSES.has(b.status)) out.status = b.status
  return out
}

export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const id = req.nextUrl.searchParams.get('id')
    if (id) {
      const kitab = await db.cmsKitab.findUnique({
        where: { id },
        include: { bab: { orderBy: [{ order: 'asc' }, { createdAt: 'asc' }] } },
      })
      if (!kitab) return NextResponse.json({ error: 'Kitab tidak ditemukan.' }, { status: 404 })
      return NextResponse.json({ kitab })
    }
    const items = await db.cmsKitab.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
      include: { _count: { select: { bab: true } } },
    })
    return NextResponse.json({
      items: items.map((k) => ({
        id: k.id, slug: k.slug, order: k.order,
        titleAr: k.titleAr, titleId: k.titleId, subtitleId: k.subtitleId,
        author: k.author, ledeId: k.ledeId, ledeAr: k.ledeAr, status: k.status,
        babCount: k._count.bab, updatedAt: k.updatedAt.toISOString(),
      })),
    })
  } catch (err) {
    console.error('[api/cms/kitab GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const b = await req.json().catch(() => null)
    if (!b || typeof b.titleId !== 'string' || !b.titleId.trim() || typeof b.titleAr !== 'string' || !b.titleAr.trim()) {
      return NextResponse.json({ error: 'Judul Indonesia dan Arab wajib diisi.' }, { status: 400 })
    }
    const data = meta(b)
    const slug = await uniqueKitabSlug(String(b.titleId))
    const maxOrder = await db.cmsKitab.aggregate({ _max: { order: true } })
    const kitab = await db.cmsKitab.create({
      data: {
        slug,
        titleId: String(data.titleId),
        titleAr: String(data.titleAr),
        subtitleId: (data.subtitleId as string | null) ?? null,
        ledeId: (data.ledeId as string | null) ?? null,
        ledeAr: (data.ledeAr as string | null) ?? null,
        author: (data.author as string) ?? undefined,
        status: (data.status as string) ?? 'draft',
        order: (data.order as number | undefined) ?? (maxOrder._max.order ?? 0) + 1,
      },
    })
    return NextResponse.json({ ok: true, kitab }, { status: 201 })
  } catch (err) {
    console.error('[api/cms/kitab POST]', err)
    return NextResponse.json({ error: 'Gagal membuat kitab.' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const b = await req.json().catch(() => null)
    if (!b || typeof b.id !== 'string') return NextResponse.json({ error: 'ID kitab wajib.' }, { status: 400 })
    const existing = await db.cmsKitab.findUnique({ where: { id: String(b.id) } })
    if (!existing) return NextResponse.json({ error: 'Kitab tidak ditemukan.' }, { status: 404 })
    const data = meta(b)
    if (Object.keys(data).length === 0) return NextResponse.json({ error: 'Tidak ada perubahan.' }, { status: 400 })
    const kitab = await db.cmsKitab.update({ where: { id: existing.id }, data })
    return NextResponse.json({ ok: true, kitab })
  } catch (err) {
    console.error('[api/cms/kitab PATCH]', err)
    return NextResponse.json({ error: 'Gagal menyimpan kitab.' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const id = req.nextUrl.searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'ID kitab wajib.' }, { status: 400 })
    await db.cmsKitab.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/cms/kitab DELETE]', err)
    return NextResponse.json({ error: 'Gagal menghapus kitab.' }, { status: 500 })
  }
}
