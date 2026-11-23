// ============================================================
// 165 — Seed CMS: pengaturan default, kategori, tag, artikel
// sambutan, dan halaman panduan (ala WordPress "Hello world!").
// Jalankan: bun prisma/seed-cms.ts   (idempoten — aman diulang)
// ============================================================
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

function slugify(input: string): string {
  return (input ?? '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function main() {
  // ---------- pengaturan default ----------
  const settings: Array<[string, string]> = [
    ['site.title', '165 — TQN Qodiriah Naqsabandiyah'],
    ['site.tagline', 'Pengetahuan, Warisan & Pelestarian Digital'],
    ['blog.postsPerPage', '9'],
    ['blog.autoApproveComments', 'false'],
    ['blog.showAuthors', 'true'],
  ]
  for (const [key, value] of settings) {
    await db.cmsSetting.upsert({ where: { key }, update: { value }, create: { key, value } })
  }
  console.log('✓ pengaturan default CMS tersimpan')

  // ---------- kategori ----------
  const kabar = await db.cmsCategory.upsert({
    where: { slug: 'kabar-165' },
    update: {},
    create: { name: 'Kabar 165', slug: 'kabar-165', desc: 'Kabar kegiatan & pengumuman dari keluarga 165.' },
  })
  const kajian = await db.cmsCategory.upsert({
    where: { slug: 'kajian' },
    update: {},
    create: { name: 'Kajian', slug: 'kajian', desc: 'Catatan kajian, wirid, dan renungan ruhani.' },
  })
  console.log('✓ kategori siap')

  // ---------- tag ----------
  const tagNames = ['cms', 'panduan', 'wirid', 'kegiatan']
  for (const name of tagNames) {
    await db.cmsTag.upsert({ where: { slug: slugify(name) }, update: {}, create: { name, slug: slugify(name) } })
  }
  const tags = await db.cmsTag.findMany({ where: { name: { in: tagNames } } })
  console.log('✓ tag siap')

  // ---------- artikel sambutan ----------
  const welcomeSlug = 'selamat-datang-di-cms-165'
  const existsPost = await db.cmsPost.findUnique({ where: { slug: welcomeSlug } })
  if (!existsPost) {
    const content = `
<p>Assalamu'alaikum warahmatullahi wabarakatuh.</p>
<p>Alhamdulillah, <strong>CMS 165</strong> kini hadir — cara paling mudah menuliskan kabar, kajian, dan catatan perjalanan ruhani untuk para ikhwan &amp; akhwat. Seperti WordPress yang biasa dipakai, tapi dalam Bahasa Indonesia dan bergaya keluarga 165.</p>
<h2>Cara menulis artikel pertama Anda</h2>
<ol>
<li>Buka menu <strong>CMS</strong> di navigasi atas (atau tekan <code>#cms</code>).</li>
<li>Masuk dengan kata sandi admin (default pengembangan: <code>qodiriyah165</code> — mohon diganti di produksi lewat variabel <code>ADMIN_PASSWORD</code>).</li>
<li>Tekan <strong>Tulis Artikel</strong>, isi judul, tulis isi dengan editor visual, lalu tekan <strong>Terbitkan sekarang</strong>.</li>
</ol>
<h2>Yang bisa Anda lakukan</h2>
<ul>
<li><strong>Artikel &amp; Halaman</strong> — editor visual dengan tebal, miring, heading, daftar, kutipan, tautan, dan gambar dari pustaka media.</li>
<li><strong>Media</strong> — unggah gambar (maks 3 MB), salin tautannya, sisipkan ke artikel, atau jadikan sampul.</li>
<li><strong>Kategori &amp; Tag</strong> — rapikan topik agar pengunjung mudah menemukan.</li>
<li><strong>Komentar</strong> — setujui, tandai spam, atau buang. Moderasi manual disarankan.</li>
<li><strong>Pengaturan</strong> — judul situs, tagline, jumlah artikel per halaman, dan moderasi otomatis.</li>
</ul>
<blockquote><p>Konten terbit langsung tampil di bagian <strong>Artikel</strong> situs — pengunjung bisa membaca dan berkomentar.</p></blockquote>
<p>Barakallahu fiikum. Selamat menulis — semoga menjadi amal jariyah yang mengalir. 🌙</p>
`.trim()

    const post = await db.cmsPost.create({
      data: {
        type: 'post',
        title: 'Selamat Datang di CMS 165 — Sambutan Pertama',
        slug: welcomeSlug,
        excerpt: 'CMS 165 hadir: tulis artikel, kelola halaman, unggah media, dan moderasi komentar — seperti WordPress, tapi Bahasa Indonesia dan sangat mudah.',
        content,
        status: 'published',
        pinned: true,
        publishedAt: new Date(),
        categoryId: kabar.id,
      },
    })
    for (const t of tags) {
      if (['cms', 'panduan'].includes(t.name)) {
        await db.cmsPostTag.create({ data: { postId: post.id, tagId: t.id } })
      }
    }
    console.log('✓ artikel sambutan diterbitkan')
  } else {
    console.log('• artikel sambutan sudah ada — dilewati')
  }

  // ---------- halaman panduan ----------
  const aboutSlug = 'tentang-cms-165'
  const existsPage = await db.cmsPost.findUnique({ where: { slug: aboutSlug } })
  if (!existsPage) {
    await db.cmsPost.create({
      data: {
        type: 'page',
        title: 'Tentang CMS 165',
        slug: aboutSlug,
        excerpt: 'CMS 165 adalah pengelola konten resmi situs 165 — satu tempat untuk menulis, menyimpan media, dan merawat kabar keluarga.',
        content: `
<p><strong>CMS 165</strong> adalah panel pengelola konten (content management system) untuk situs 165 — TQN Qodiriah Naqsabandiyah. Panel ini dibangun dengan prinsip <em>sangat mudah</em>: setiap tombol bernama jelas, setiap aksi punya konfirmasi, dan konten yang dihapus tidak hilang langsung (masuk sampah dulu).</p>
<h2>Prinsip yang dipegang</h2>
<ul>
<li><strong>Setiap konten punya pintu sampah</strong> — artikel dihapus masuk tab Sampah, bisa dikembalikan atau dihapus permanen.</li>
<li><strong>Komentar tidak otomatis tampil</strong> — pengunjung menulis, admin menyetujui; kecuali moderasi otomatis diaktifkan di Pengaturan.</li>
<li><strong>Media tersimpan rapi</strong> — gambar yang diunggah bisa dipakai berulang dan dihapus bila tak terpakai.</li>
</ul>
<h2>Untuk siapa?</h2>
<p>Untuk pendiri dan pengurus 165 yang mengelola kabar kegiatan, kajian rutin, dan pengumuman — tanpa perlu menyentuh kode.</p>
`.trim(),
        status: 'published',
        publishedAt: new Date(),
      },
    })
    console.log('✓ halaman "Tentang CMS 165" diterbitkan')
  } else {
    console.log('• halaman panduan sudah ada — dilewati')
  }

  console.log('Seed CMS selesai. Masya Allah.')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await db.$disconnect() })
