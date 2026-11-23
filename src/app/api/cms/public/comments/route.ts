import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { commentAllowed, loadSettings } from '@/lib/cms'

// POST /api/cms/public/comments — kirim komentar pengunjung (PUBLIK)
// Status: "approved" bila moderasi otomatis aktif, selain itu "pending".
export async function POST(req: NextRequest) {
  try {
    const ip = (req.headers.get('x-forwarded-for') ?? 'local').split(',')[0].trim()
    if (!commentAllowed(ip)) {
      return NextResponse.json(
        { error: 'Terlalu banyak komentar. Mohon tunggu beberapa menit.' },
        { status: 429 },
      )
    }

    const b = await req.json().catch(() => null)
    const slug = String(b?.slug ?? '').trim()
    const name = String(b?.name ?? '').trim()
    const email = String(b?.email ?? '').trim()
    const body = String(b?.body ?? '').trim()

    if (!slug) return NextResponse.json({ error: 'Artikel tidak valid.' }, { status: 400 })
    if (name.length < 2 || name.length > 60) {
      return NextResponse.json({ error: 'Nama wajib diisi (2–60 karakter).' }, { status: 400 })
    }
    if (body.length < 4 || body.length > 2000) {
      return NextResponse.json({ error: 'Komentar wajib diisi (4–2000 karakter).' }, { status: 400 })
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Alamat email tidak valid.' }, { status: 400 })
    }

    const post = await db.cmsPost.findUnique({
      where: { slug },
      select: { id: true, status: true, type: true },
    })
    if (!post || post.status !== 'published' || post.type === 'page') {
      return NextResponse.json({ error: 'Artikel tidak ditemukan.' }, { status: 404 })
    }

    const settings = await loadSettings()
    const auto = settings['blog.autoApproveComments'] === 'true'

    const c = await db.cmsComment.create({
      data: {
        postId: post.id,
        name,
        email: email || null,
        body,
        status: auto ? 'approved' : 'pending',
      },
    })

    return NextResponse.json({
      ok: true,
      id: c.id,
      approved: auto,
      message: auto
        ? 'Terima kasih! Komentar Anda sudah tampil.'
        : 'Terima kasih! Komentar Anda menunggu persetujuan admin.',
    })
  } catch (err) {
    console.error('[api/cms/public/comments POST]', err)
    return NextResponse.json({ error: 'Gagal mengirim komentar.' }, { status: 500 })
  }
}
