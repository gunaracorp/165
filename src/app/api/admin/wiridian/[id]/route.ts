import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'
import { clean, writeAudit } from '@/lib/admin-data'

const KINDS = ['QASIDAH', 'SHOLAWAT', 'WIRIDIAN', 'DZIKIR', 'DUAA']
const GRADES = ['A', 'B', 'C', 'D', 'E', 'F']
const STATUSES = ['DOCUMENTED', 'TRADITIONAL_ACCOUNT', 'DISPUTED', 'UNVERIFIED']

type Ctx = { params: Promise<{ id: string }> }

// ---------- PUT: update entry (+ refresh verses when provided) ----------
export async function PUT(req: NextRequest, ctx: Ctx) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const { id } = await ctx.params
    const prev = await db.wiridEntry.findUnique({ where: { id }, include: { verses: true } })
    if (!prev) return NextResponse.json({ error: 'Bacaan tidak ditemukan.' }, { status: 404 })

    const body = await req.json()
    const titleId = clean(body.titleId) ?? prev.titleId
    const titleAr = clean(body.titleAr) ?? prev.titleAr
    const data = {
      order: Number.isFinite(Number(body.order)) ? Number(body.order) : prev.order,
      kind: KINDS.includes(String(body.kind)) ? String(body.kind) : prev.kind,
      grade: GRADES.includes(String(body.grade)) ? String(body.grade) : prev.grade,
      status: STATUSES.includes(String(body.status)) ? String(body.status) : prev.status,
      titleAr,
      titleId,
      titleSu: clean(body.titleSu),
      subtitleId: clean(body.subtitleId),
      ledeId: clean(body.ledeId),
      sourceRef: clean(body.sourceRef),
      noteId: clean(body.noteId),
      visibility: body.visibility === 'PRIVATE' ? 'PRIVATE' : 'PUBLIC',
    }

    const updated = await db.wiridEntry.update({ where: { id }, data, include: { verses: { orderBy: { order: 'asc' } } } })

    // refresh verses only when a verses array is provided
    if (Array.isArray(body.verses)) {
      const verseRows = body.verses
        .map((v: Record<string, unknown>, i: number) => ({
          order: Number.isFinite(Number(v.order)) ? Number(v.order) : i + 1,
          arabic: clean(v.arabic) ?? '',
          latin: clean(v.latin),
          meaningSu: clean(v.meaningSu),
          meaningId: clean(v.meaningId),
          tafsirId: clean(v.tafsirId),
          tafsirAr: clean(v.tafsirAr),
        }))
        .filter((v: { arabic: string }) => v.arabic.length > 0)
      await db.wiridVerse.deleteMany({ where: { entryId: id } })
      if (verseRows.length) await db.wiridVerse.createMany({ data: verseRows })
    }

    await writeAudit('admin', 'UPDATE', `WIRIDIAN:${prev.slug}`, 'Bacaan diperbarui via CMS.')
    const fresh = await db.wiridEntry.findUnique({ where: { id }, include: { verses: { orderBy: { order: 'asc' } } } })
    return NextResponse.json({ entry: fresh ?? updated })
  } catch (err) {
    console.error('[api/admin/wiridian/[id] PUT]', err)
    return NextResponse.json({ error: 'Gagal memperbarui bacaan.' }, { status: 500 })
  }
}

// ---------- DELETE: remove entry (verses cascade) ----------
export async function DELETE(req: NextRequest, ctx: Ctx) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const { id } = await ctx.params
    const prev = await db.wiridEntry.findUnique({ where: { id } })
    if (!prev) return NextResponse.json({ error: 'Bacaan tidak ditemukan.' }, { status: 404 })
    await db.wiridEntry.delete({ where: { id } })
    await writeAudit('admin', 'DELETE', `WIRIDIAN:${prev.slug}`, 'Bacaan dihapus via CMS.')
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/admin/wiridian/[id] DELETE]', err)
    return NextResponse.json({ error: 'Gagal menghapus bacaan.' }, { status: 500 })
  }
}
