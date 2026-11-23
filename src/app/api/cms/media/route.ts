import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'

const ALLOWED_MIME = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf']
const MAX_BYTES = 3 * 1024 * 1024 // 3 MB

// GET /api/cms/media — daftar media (tanpa payload)
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const rows = await db.cmsMedia.findMany({
      orderBy: { createdAt: 'desc' },
      take: 200,
      select: { id: true, filename: true, mime: true, size: true, createdAt: true },
    })
    return NextResponse.json({
      items: rows.map((m) => ({
        id: m.id, filename: m.filename, mime: m.mime, size: m.size,
        url: `/api/cms/media/${m.id}/raw`,
        createdAt: m.createdAt.toISOString(),
      })),
    })
  } catch (err) {
    console.error('[api/cms/media GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}

// POST /api/cms/media — unggah berkas (multipart/form-data, field "file")
export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const form = await req.formData()
    const file = form.get('file')
    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Tidak ada berkas yang diunggah.' }, { status: 400 })
    }
    if (!ALLOWED_MIME.includes(file.type)) {
      return NextResponse.json({ error: 'Jenis berkas tidak didukung (pakai JPG, PNG, GIF, WebP, atau PDF).' }, { status: 415 })
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: 'Ukuran berkas melebihi 3 MB.' }, { status: 413 })
    }

    const buf = Buffer.from(await file.arrayBuffer())
    const safeName = (file.name || 'berkas').replace(/[^\w.\-() ]+/g, '_').slice(0, 120)

    const media = await db.cmsMedia.create({
      data: { filename: safeName, mime: file.type, size: file.size, data: buf.toString('base64') },
    })

    return NextResponse.json({
      ok: true,
      media: {
        id: media.id, filename: media.filename, mime: media.mime, size: media.size,
        url: `/api/cms/media/${media.id}/raw`,
        createdAt: media.createdAt.toISOString(),
      },
    })
  } catch (err) {
    console.error('[api/cms/media POST]', err)
    return NextResponse.json({ error: 'Gagal mengunggah berkas.' }, { status: 500 })
  }
}
