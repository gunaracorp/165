import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { WIRIDIAN_ENTRIES } from '@/data/wiridian/bacaan'

// 165 — WIRIDIAN & BACAAN (public). Qasidah, sholawat, wiridian & dzikir:
// Arabic + Latin + Sundanese/Indonesian meaning + meaning-commentary.
// Served from the DB (CMS-managed); falls back to the bundled dataset
// when the database is unreachable — the room must never go dark.
export async function GET() {
  try {
    const rows = await db.wiridEntry.findMany({
      where: { visibility: 'PUBLIC' },
      orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
      include: { verses: { orderBy: { order: 'asc' } } },
    })
    return NextResponse.json({
      source: 'db',
      entries: rows.map((e) => ({
        id: e.id,
        slug: e.slug,
        kind: e.kind,
        order: e.order,
        titleAr: e.titleAr,
        titleId: e.titleId,
        titleSu: e.titleSu ?? null,
        subtitleId: e.subtitleId,
        ledeId: e.ledeId,
        grade: e.grade,
        status: e.status,
        sourceRef: e.sourceRef,
        noteId: e.noteId,
        verses: e.verses.map((v) => ({
          order: v.order,
          arabic: v.arabic,
          latin: v.latin,
          meaningSu: v.meaningSu,
          meaningId: v.meaningId,
          tafsirId: v.tafsirId,
          tafsirAr: v.tafsirAr,
        })),
      })),
    })
  } catch (err) {
    console.error('[api/wiridian] db unavailable — falling back to bundled dataset:', err)
    return NextResponse.json({
      source: 'bundled',
      entries: WIRIDIAN_ENTRIES.map((e) => ({
        id: null,
        slug: e.slug,
        kind: e.kind,
        order: e.order,
        titleAr: e.titleAr,
        titleId: e.titleId,
        titleSu: e.titleSu ?? null,
        subtitleId: e.subtitleId,
        ledeId: e.ledeId,
        grade: e.grade,
        status: e.status,
        sourceRef: e.sourceRef,
        noteId: e.noteId,
        verses: e.verses.map((v) => ({
          order: v.order,
          arabic: v.arabic,
          latin: v.latin,
          meaningSu: v.meaningSu ?? null,
          meaningId: v.meaningId,
          tafsirId: v.tafsirId,
          tafsirAr: v.tafsirAr ?? null,
        })),
      })),
    })
  }
}
