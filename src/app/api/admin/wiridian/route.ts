import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { pingSearchEnginesSoon } from '@/lib/indexnow'
import { db } from '@/lib/db'
import { clean, writeAudit } from '@/lib/admin-data'
import { WIRIDIAN_ENTRIES } from '@/data/wiridian/bacaan'

const KINDS = ['QASIDAH', 'SHOLAWAT', 'WIRIDIAN', 'DZIKIR', 'DUAA']
const GRADES = ['A', 'B', 'C', 'D', 'E', 'F']
const STATUSES = ['DOCUMENTED', 'TRADITIONAL_ACCOUNT', 'DISPUTED', 'UNVERIFIED']

function slugify(name: string): string {
  const base = name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64)
  return base || 'bacaan'
}

// ---------- GET: list all entries (admin view — includes PRIVATE) ----------
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const rows = await db.wiridEntry.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
      include: { verses: { orderBy: { order: 'asc' } } },
    })
    return NextResponse.json({ entries: rows })
  } catch (err) {
    console.error('[api/admin/wiridian GET]', err)
    return NextResponse.json({ error: 'Gagal memuat bacaan.' }, { status: 500 })
  }
}

// ---------- POST: create entry (+ verses) ----------
export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const body = await req.json()
    const titleId = clean(body.titleId)
    const titleAr = clean(body.titleAr)
    if (!titleId || !titleAr) {
      return NextResponse.json({ error: 'Judul (Arab & Indonesia) wajib diisi.' }, { status: 400 })
    }
    let slug = clean(body.slug) ? slugify(String(body.slug)) : slugify(titleId)
    const clash = await db.wiridEntry.findUnique({ where: { slug } })
    if (clash) slug = `${slug}-${Date.now().toString(36)}`

    const kind = KINDS.includes(String(body.kind)) ? String(body.kind) : 'QASIDAH'
    const grade = GRADES.includes(String(body.grade)) ? String(body.grade) : 'B'
    const status = STATUSES.includes(String(body.status)) ? String(body.status) : 'TRADITIONAL_ACCOUNT'
    const order = Number.isFinite(Number(body.order)) ? Number(body.order) : 99
    const visibility = body.visibility === 'PRIVATE' ? 'PRIVATE' : 'PUBLIC'

    const verses = Array.isArray(body.verses) ? body.verses : []
    const verseRows = verses
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

    const created = await db.wiridEntry.create({
      data: {
        slug, order, kind, titleAr, titleId,
        titleSu: clean(body.titleSu),
        subtitleId: clean(body.subtitleId),
        ledeId: clean(body.ledeId),
        grade, status,
        sourceRef: clean(body.sourceRef),
        noteId: clean(body.noteId),
        visibility,
        verses: verseRows.length ? { create: verseRows } : undefined,
      },
      include: { verses: { orderBy: { order: 'asc' } } },
    })
    await writeAudit('admin', 'CREATE', `WIRIDIAN:${slug}`, `Bacaan baru (${kind}, ${verseRows.length} bait).`)
    pingSearchEnginesSoon()
    return NextResponse.json({ entry: created }, { status: 201 })
  } catch (err) {
    console.error('[api/admin/wiridian POST]', err)
    return NextResponse.json({ error: 'Gagal menyimpan bacaan.' }, { status: 500 })
  }
}

// ---------- POST fallback seed: sinkron ulang dari dataset bundled ----------
// (dipanggil tombol "Sinkron dari arsip" di panel admin)
export async function PUT(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    let saved = 0
    for (const e of WIRIDIAN_ENTRIES) {
      const data = {
        slug: e.slug, // sebelumnya hilang — tombol "Sinkron dari arsip" gagal runtime & tsc
        order: e.order, kind: e.kind, titleAr: e.titleAr, titleId: e.titleId,
        titleSu: e.titleSu ?? null, // null eksplisit — undefined akan dilewati upsert
        subtitleId: e.subtitleId, ledeId: e.ledeId,
        grade: e.grade, status: e.status, sourceRef: e.sourceRef, noteId: e.noteId,
        visibility: 'PUBLIC',
      }
      await db.wiridEntry.upsert({ where: { slug: e.slug }, create: data, update: data })
      const entry = await db.wiridEntry.findUnique({ where: { slug: e.slug } })
      if (!entry) continue
      await db.wiridVerse.deleteMany({ where: { entryId: entry.id } })
      await db.wiridVerse.createMany({
        data: e.verses.map((v) => ({
          entryId: entry.id, order: v.order, arabic: v.arabic, latin: v.latin,
          meaningSu: v.meaningSu ?? null, // null eksplisit (qasidah: tanpa arti Sunda)
          meaningId: v.meaningId, tafsirId: v.tafsirId,
          tafsirAr: v.tafsirAr ?? null,
        })),
      })
      saved += 1
    }
    await writeAudit('admin', 'SYNC', 'WIRIDIAN', `Sinkron ulang ${saved} entri dari arsip bundled.`)
    pingSearchEnginesSoon()
    return NextResponse.json({ ok: true, synced: saved })
  } catch (err) {
    console.error('[api/admin/wiridian PUT sync]', err)
    return NextResponse.json({ error: 'Gagal sinkronisasi.' }, { status: 500 })
  }
}
