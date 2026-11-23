// QA langkah 11 — Bab 3 seri hulu-ke-hilir
import { ALL_PAGE_ENTRIES, getEntry, resolveRelated } from '../src/data/pages/index'
import { ROADMAP_99 } from '../src/data/roadmap-99-internal'

let fail = 0
const bad = (msg: string) => { console.error('  ✗ ' + msg); fail++ }
const ok = (msg: string) => console.log('  ✓ ' + msg)

const bab3 = getEntry('library', 'perjalanan-bab-3-keberangkatan-baghdad')
if (!bab3) bad('entri bab-3 tidak ditemukan')
else {
  ok(`bab-3 ada: "${bab3.title}" — ${bab3.body.length} seksi, ${bab3.body.reduce((a, s) => a + s.p.length, 0)} paragraf`)
  if (bab3.summary.length > 160) bad(`summary ${bab3.summary.length} chars (>160)`)
  else ok(`summary ${bab3.summary.length} chars (≤160)`)
  if (!bab3.titleAr) bad('titleAr kosong')
  else ok('titleAr ada: ' + bab3.titleAr.slice(0, 40) + '…')
  const arabParas = bab3.body.flatMap((s) => s.p).filter((p) => {
    const letters = (p.match(/\p{L}/gu) ?? []).length
    if (!letters) return false
    return (p.match(/[\u0600-\u06FF]/g) ?? []).length / letters > 0.5
  })
  ok(`paragraf Arab (RTL auto): ${arabParas.length}`)
  if (arabParas.length < 5) bad('paragraf Arab kurang (harusnya 5 muqaddimah + isi)')
  const rel = resolveRelated(bab3).map((e) => e.slug)
  ok('related bab-3 resolve: ' + rel.join(', '))
  const missing = (bab3.related ?? []).filter((s) => s !== bab3.slug && !rel.includes(s))
  if (missing.length) bad('related tak resolve: ' + missing.join(', '))
  // kata Arab yang salah tidak boleh bocor (mis. ahmad sebagai komparatif)
  if (bab3.body.some((s) => s.p.some((p) => p.includes('أَحْمَدُ مِنِ')))) bad('kata Arab salah masih ada')
}

// rantai seri
const induk = getEntry('library', 'perjalanan-tuan-syekh-hulu-hilir')
const bab2 = getEntry('library', 'perjalanan-bab-2-masa-kecil-jilan')
if (induk?.related?.includes('perjalanan-bab-3-keberangkatan-baghdad')) ok('halaman induk → bab-3 tertaut')
else bad('halaman induk tidak menautkan bab-3')
if (bab2?.related?.includes('perjalanan-bab-3-keberangkatan-baghdad')) ok('bab-2 → bab-3 tertaut')
else bad('bab-2 tidak menautkan bab-3')
const peta = induk?.body.find((s) => s.h.includes('Peta 14 Bab'))
if (peta?.p.find((p) => p.startsWith('Bab 3') && p.includes('TAYANG'))) ok('peta induk: bab 3 bertanda TAYANG')
else bad('peta induk bab 3 tidak bertanda TAYANG')
if ((induk?.facts?.find((f) => f.label === 'Status')?.value ?? '').includes('3')) ok('facts induk: status tiga bab tayang')
else bad('facts induk belum memuat bab 3')
if ((induk?.related ?? []).includes('perjalanan-bab-3-keberangkatan-baghdad')) ok('related induk memuat bab-3')
else bad('related induk tidak memuat bab-3')

// duplikat slug + roadmap
const slugs = ALL_PAGE_ENTRIES.map((e) => e.kind + ':' + e.slug)
const dup = slugs.filter((s, i) => slugs.indexOf(s) !== i)
if (dup.length) bad('slug duplikat: ' + dup.join(', '))
else ok(`tidak ada slug duplikat di ${ALL_PAGE_ENTRIES.length} entri`)
const l11 = ROADMAP_99.find((s) => s.n === 11)
if (l11?.status === 'selesai' && l11.detail.includes('TAYANG')) ok('langkah 11 = selesai (TAYANG)')
else bad('langkah 11 belum selesai/TAYANG')
const st = { selesai: 0, berjalan: 0, direncanakan: 0 } as Record<string, number>
for (const s of ROADMAP_99) st[s.status]++
console.log(`  ✓ distribusi roadmap: ${st.selesai} selesai / ${st.berjalan} berjalan / ${st.direncanakan} direncanakan (total ${ROADMAP_99.length})`)
if (st.selesai + st.berjalan + st.direncanakan !== 99) bad('total langkah ≠ 99')

process.exit(fail ? 1 : 0)
