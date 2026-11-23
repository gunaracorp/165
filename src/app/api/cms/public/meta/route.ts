import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { loadSettings } from '@/lib/cms'

// GET /api/cms/public/meta — pengaturan publik + kategori (untuk halaman blog)
export async function GET() {
  try {
    const [settings, categories] = await Promise.all([
      loadSettings(),
      db.cmsCategory.findMany({
        orderBy: { name: 'asc' },
        include: { _count: { select: { posts: { where: { status: 'published', type: 'post' } } } } },
      }),
    ])
    return NextResponse.json({
      site: {
        title: settings['site.title'],
        tagline: settings['site.tagline'],
        postsPerPage: Number(settings['blog.postsPerPage'] ?? 9),
        showAuthors: settings['blog.showAuthors'] !== 'false',
      },
      categories: categories
        .filter((c) => c._count.posts > 0)
        .map((c) => ({ id: c.id, name: c.name, slug: c.slug, posts: c._count.posts })),
    })
  } catch (err) {
    console.error('[api/cms/public/meta GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}
