import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/cms/public/kitab?slug=… — PUBLIK: kitab terbit + bab terbit
// Tanpa slug → daftar kitab (ringkas). Dengan slug → satu kitab lengkap
// dengan seluruh bab terbit (teks Arab + terjemah Indonesia).
export async function GET(req: NextRequest) {
  try {
    const slug = (req.nextUrl.searchParams.get('slug') ?? '').trim()
    if (slug) {
      const kitab = await db.cmsKitab.findUnique({
        where: { slug },
        include: { bab: { where: { status: 'published' }, orderBy: [{ order: 'asc' }, { createdAt: 'asc' }] } },
      })
      if (!kitab || kitab.status !== 'published') {
        return NextResponse.json({ error: 'Kitab tidak ditemukan.' }, { status: 404 })
      }
      return NextResponse.json({
        kitab: {
          id: kitab.id, slug: kitab.slug, titleAr: kitab.titleAr, titleId: kitab.titleId,
          subtitleId: kitab.subtitleId, author: kitab.author, ledeId: kitab.ledeId, ledeAr: kitab.ledeAr,
          bab: kitab.bab.map((x) => ({
            id: x.id, order: x.order, titleAr: x.titleAr, titleId: x.titleId,
            arabic: x.arabic, indonesian: x.indonesian,
            kunciAmal: x.kunciAmal ? x.kunciAmal.split('\n').map((s) => s.trim()).filter(Boolean) : [],
          })),
        },
      })
    }

    const items = await db.cmsKitab.findMany({
      where: { status: 'published' },
      orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
      include: { _count: { select: { bab: { where: { status: 'published' } } } } },
    })
    return NextResponse.json({
      items: items.map((k) => ({
        id: k.id, slug: k.slug, titleAr: k.titleAr, titleId: k.titleId,
        subtitleId: k.subtitleId, author: k.author, ledeId: k.ledeId,
        babCount: k._count.bab,
      })),
    })
  } catch (err) {
    console.error('[api/cms/public/kitab GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}
