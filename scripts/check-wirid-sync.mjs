import { PrismaClient } from '@prisma/client'
const p = new PrismaClient()
const entries = await p.wiridEntry.findMany({ include: { verses: { orderBy: { order: 'asc' } } } })
for (const e of entries) {
  const suCount = e.verses.filter(v => v.meaningSu && v.meaningSu.trim()).length
  console.log(`${e.slug} | verses=${e.verses.length} | meaningSu terisi=${suCount} | titleSu="${e.titleSu?.slice(0,40)}"`)
}
// bandingkan isi verse DB vs bundled utk qasidah (cek apakah ada edit CMS manual)
const q = entries.find(e => e.slug === 'qasidah-ibadallah-rijalallah')
const bundled = (await import('../src/data/wiridian/bacaan.ts')).WIRIDIAN_ENTRIES.find(e => e.slug === 'qasidah-ibadallah-rijalallah')
let mismatch = 0
for (const v of bundled.verses) {
  const db = q.verses.find(x => x.order === v.order)
  if (!db) { console.log('MISSING verse', v.order); mismatch++; continue }
  for (const k of ['arabic','latin','meaningId','tafsirId','tafsirAr']) {
    if ((db[k] ?? null) !== (v[k] ?? null)) { console.log(`DIFF order=${v.order} field=${k}`); mismatch++ }
  }
}
console.log(mismatch === 0 ? 'SINKRON: DB == bundled (aman re-seed)' : `TIDAK SINKRON: ${mismatch} perbedaan`)
await p.$disconnect()
