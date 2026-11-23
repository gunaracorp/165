// QA langkah 10 — Bab 2 seri hulu-ke-hilir
import { ALL_PAGE_ENTRIES, getEntry, resolveRelated } from '../src/data/pages/index'
import { ROADMAP_99 } from '../src/data/roadmap-99-internal'

let fail = 0
const bad = (msg: string) => { console.error('  ✗ ' + msg); fail++ }
const ok = (msg: string) => console.log('  ✓ ' + msg)

// 1. Entri Bab 2 ada & utuh
const bab2 = getEntry('library', 'perjalanan-bab-2-masa-kecil-jilan')
if (!bab2) bad('entri bab-2 tidak ditemukan')
else {
  ok(`bab-2 ada: "${bab2.title}" — ${bab2.body.length} seksi, ${bab2.body.reduce((a, s) => a + s.p.length, 0)} paragraf`)
  if (bab2.summary.length > 160) bad(`summary ${bab2.summary.length} chars (>160)`)
  else ok(`summary ${bab2.summary.length} chars (≤160)`)
  if (!bab2.titleAr) bad('titleAr kosong')
  else ok('titleAr ada: ' + bab2.titleAr.slice(0, 40) + '…')
  const arabParas = bab2.body.flatMap((s) => s.p).filter((p) => {
    const letters = (p.match(/\p{L}/gu) ?? []).length
    if (!letters) return false
    return (p.match(/[\u0600-\u06FF]/g) ?? []).length / letters > 0.5
  })
  ok(`paragraf Arab (RTL auto): ${arabParas.length}`)
  if (arabParas.length < 7) bad('paragraf Arab kurang dari 7 (harusnya 7 muqaddimah+isi)')
  // 2. Related resolve
  const rel = resolveRelated(bab2).map((e) => e.slug)
  ok('related bab-2 resolve: ' + rel.join(', '))
  const missing = (bab2.related ?? []).filter((s) => s !== bab2.slug && !rel.includes(s))
  if (missing.length) bad('related tak resolve: ' + missing.join(', '))
}

// 3. Halaman induk & Bab 1 menautkan bab-2
const induk = getEntry('library', 'perjalanan-tuan-syekh-hulu-hilir')
const bab1 = getEntry('library', 'perjalanan-bab-1-kelahiran-di-jilan')
if (induk?.related?.includes('perjalanan-bab-2-masa-kecil-jilan')) ok('halaman induk → bab-2 tertaut')
else bad('halaman induk tidak menautkan bab-2')
if (bab1?.related?.includes('perjalanan-bab-2-masa-kecil-jilan')) ok('bab-1 → bab-2 tertaut')
else bad('bab-1 tidak menautkan bab-2')
const peta = induk?.body.find((s) => s.h.includes('Peta 14 Bab'))
const petaBab2 = peta?.p.find((p) => p.startsWith('Bab 2') && p.includes('TAYANG'))
if (petaBab2) ok('peta induk: bab 2 bertanda TAYANG')
else bad('peta induk bab 2 tidak bertanda TAYANG')
const statusFact = induk?.facts?.find((f) => f.label === 'Status')?.value ?? ''
if (statusFact.includes('Bab 1 dan Bab 2')) ok('facts induk: status dua bab tayang')
else bad('facts induk belum memuat bab 2')

// 4. Tidak ada duplikat slug lintas semua entri
const slugs = ALL_PAGE_ENTRIES.map((e) => e.kind + ':' + e.slug)
const dup = slugs.filter((s, i) => slugs.indexOf(s) !== i)
if (dup.length) bad('slug duplikat: ' + dup.join(', '))
else ok(`tidak ada slug duplikat di ${ALL_PAGE_ENTRIES.length} entri`)

// 5. Roadmap 99: langkah 9 & 10 selesai, distribusi status
const st = { selesai: 0, berjalan: 0, direncanakan: 0 } as Record<string, number>
for (const s of ROADMAP_99) st[s.status]++
const l9 = ROADMAP_99.find((s) => s.n === 9)
const l10 = ROADMAP_99.find((s) => s.n === 10)
if (l9?.status === 'selesai') ok('langkah 9 = selesai')
else bad('langkah 9 belum selesai')
if (l10?.status === 'selesai' && l10.detail.includes('TAYANG')) ok('langkah 10 = selesai (TAYANG)')
else bad('langkah 10 belum selesai/TAYANG')
console.log(`  ✓ distribusi roadmap: ${st.selesai} selesai / ${st.berjalan} berjalan / ${st.direncanakan} direncanakan (total ${ROADMAP_99.length})`)
if (st.selesai + st.berjalan + st.direncanakan !== 99) bad('total langkah ≠ 99')

// 6. Sitemap akan memuat bab-2 (regenerasi otomatis dari entri)
const { KIND_PATH } = await import('../src/data/pages/types')
const url = KIND_PATH.library + 'perjalanan-bab-2-masa-kecil-jilan'
ok('URL bab-2 pada sitemap baru: /library/perjalanan-bab-2-masa-kecil-jilan (' + url + ')')

process.exit(fail ? 1 : 0)
