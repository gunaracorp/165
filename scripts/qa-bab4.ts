// QA langkah 12 — Bab 4 seri hulu-ke-hilir
import { ALL_PAGE_ENTRIES, getEntry, resolveRelated } from '../src/data/pages/index'
import { ROADMAP_99 } from '../src/data/roadmap-99-internal'

let fail = 0
const bad = (msg: string) => { console.error('  ✗ ' + msg); fail++ }
const ok = (msg: string) => console.log('  ✓ ' + msg)

const bab4 = getEntry('library', 'perjalanan-bab-4-guru-dan-kurikulum-baghdad')
if (!bab4) bad('entri bab-4 tidak ditemukan')
else {
  ok(`bab-4 ada: "${bab4.title}" — ${bab4.body.length} seksi, ${bab4.body.reduce((a, s) => a + s.p.length, 0)} paragraf`)
  if (bab4.summary.length > 160) bad(`summary ${bab4.summary.length} chars (>160)`)
  else ok(`summary ${bab4.summary.length} chars (≤160)`)
  if (!bab4.titleAr) bad('titleAr kosong')
  else ok('titleAr ada: ' + bab4.titleAr.slice(0, 40) + '…')
  const arabParas = bab4.body.flatMap((s) => s.p).filter((p) => {
    const letters = (p.match(/\p{L}/gu) ?? []).length
    if (!letters) return false
    return (p.match(/[\u0600-\u06FF]/g) ?? []).length / letters > 0.5
  })
  ok(`paragraf Arab (RTL auto): ${arabParas.length}`)
  if (arabParas.length < 5) bad('paragraf Arab kurang (harusnya 6: muqaddimah + isi)')
  // enam nama guru wajib hadir di badan teks
  const isi = bab4.body.flatMap((s) => s.p).join('\n')
  for (const nama of ['al-Makhzumi', 'al-Kaludhani', 'Aqil', 'as-Sarraj', 'ash-Shagir', 'al-Banna']) {
    if (isi.includes(nama)) ok(`nama guru tercantum: ${nama}`)
    else bad(`nama guru hilang: ${nama}`)
  }
  const faktaTafsir = bab4.facts?.find((f) => f.label === 'Guru tafsir')
  if (faktaTafsir?.value.includes('belum diketahui')) ok('facts: guru tafsir jujur "belum diketahui"')
  else bad('facts guru tafsir tidak jujur-berlabel')
  const rel = resolveRelated(bab4).map((e) => e.slug)
  ok('related bab-4 resolve: ' + rel.join(', '))
  const missing = (bab4.related ?? []).filter((s) => s !== bab4.slug && !rel.includes(s))
  if (missing.length) bad('related tak resolve: ' + missing.join(', '))
}

// rantai seri
const induk = getEntry('library', 'perjalanan-tuan-syekh-hulu-hilir')
const bab3 = getEntry('library', 'perjalanan-bab-3-keberangkatan-baghdad')
if (induk?.related?.includes('perjalanan-bab-4-guru-dan-kurikulum-baghdad')) ok('halaman induk → bab-4 tertaut')
else bad('halaman induk tidak menautkan bab-4')
if (bab3?.related?.includes('perjalanan-bab-4-guru-dan-kurikulum-baghdad')) ok('bab-3 → bab-4 tertaut')
else bad('bab-3 tidak menautkan bab-4')
const peta = induk?.body.find((s) => s.h.includes('Peta 14 Bab'))
if (peta?.p.find((p) => p.startsWith('Bab 4') && p.includes('TAYANG'))) ok('peta induk: bab 4 bertanda TAYANG')
else bad('peta induk bab 4 tidak bertanda TAYANG')
if ((induk?.facts?.find((f) => f.label === 'Status')?.value ?? '').includes('4')) ok('facts induk: status empat bab tayang')
else bad('facts induk belum memuat bab 4')

// duplikat slug + roadmap
const slugs = ALL_PAGE_ENTRIES.map((e) => e.kind + ':' + e.slug)
const dup = slugs.filter((s, i) => slugs.indexOf(s) !== i)
if (dup.length) bad('slug duplikat: ' + dup.join(', '))
else ok(`tidak ada slug duplikat di ${ALL_PAGE_ENTRIES.length} entri`)
const l12 = ROADMAP_99.find((s) => s.n === 12)
if (l12?.status === 'selesai' && l12.detail.includes('TAYANG')) ok('langkah 12 = selesai (TAYANG)')
else bad('langkah 12 belum selesai/TAYANG')
const st = { selesai: 0, berjalan: 0, direncanakan: 0 } as Record<string, number>
for (const s of ROADMAP_99) st[s.status]++
console.log(`  ✓ distribusi roadmap: ${st.selesai} selesai / ${st.berjalan} berjalan / ${st.direncanakan} direncanakan (total ${ROADMAP_99.length})`)
if (st.selesai + st.berjalan + st.direncanakan !== 99) bad('total langkah ≠ 99')
if (st.selesai !== 30) bad(`langkah selesai ≠ 30 (sekarang ${st.selesai})`)
else ok('30/99 langkah selesai')

process.exit(fail ? 1 : 0)
