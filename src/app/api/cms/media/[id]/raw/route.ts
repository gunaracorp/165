import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

type Ctx = { params: Promise<{ id: string }> }

// GET /api/cms/media/[id]/raw — sajikan isi berkas (PUBLIK, dipakai <img> dll.)
export async function GET(_req: NextRequest, { params }: Ctx) {
  try {
    const { id } = await params
    const m = await db.cmsMedia.findUnique({
      where: { id },
      select: { data: true, mime: true, filename: true },
    })
    if (!m) return NextResponse.json({ error: 'Media tidak ditemukan.' }, { status: 404 })

    const bytes = Buffer.from(m.data, 'base64')
    const res = new NextResponse(new Uint8Array(bytes), {
      status: 200,
      headers: {
        'Content-Type': m.mime,
        'Content-Length': String(bytes.length),
        'Cache-Control': 'public, max-age=86400, immutable',
        'Content-Disposition': `inline; filename="${encodeURIComponent(m.filename)}"`,
      },
    })
    return res
  } catch (err) {
    console.error('[api/cms/media/[id]/raw GET]', err)
    return NextResponse.json({ error: 'Media tidak dapat dimuat.' }, { status: 500 })
  }
}
