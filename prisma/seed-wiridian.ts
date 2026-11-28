/**
 * 165 — SEED WIRIDIAN & BACAAN (additive, idempoten — pure append)
 *
 * Permintaan langsung Founder (sesi ini): bacaan "Ibadallah Rijalallah
 * Aghitsuna li Ajlillah dan seterusnya" — lengkap dengan teks Arab,
 * terjemahan makna Bahasa Sunda & Bahasa Indonesia, dan tafsir —
 * untuk para ikhwan & akhwat yang lupa tujuan.
 *
 * Yang DILAKUKAN seed ini:
 *   - Mendaftarkan 4 entri bacaan (WiridEntry + WiridVerse):
 *       1. Qasidah 'Ibadallah Rijalallah Aghitsuna li Ajlillah (13 bait)
 *          — tanpa arti Bahasa Sunda (dihapus per permintaan Founder:
 *          terjemahan Sunda qasidah dinilai tidak sesuai; arti Indonesia
 *          & tafsir tetap)
 *       2. Sholawat Nuril Anwar (kitab Abwabul Faraj — Sayyid Muhammad
 *          bin Alwi al-Maliki) — arti Sunda tetap
 *       3. Wiridian TQN — peta alur & lafaz inti (6 tahap) — arti Sunda tetap
 *       4. Dzikir Harian Pembuka (untuk semua — sebelum ijazah tarekat)
 *          — arti Sunda tetap
 *
 * DISIPLIN (satu tingkat dengan seed-sanad / seed-karawang):
 *   - PURE APPEND + REFRESH VERSE: entri di-upsert berdasarkan slug
 *     (agar CMS tetap sinkron dengan file data), ayat lama dibersihkan
 *     lalu diisi ulang dari satu sumber kebenaran (src/data/wiridian/bacaan.ts).
 *   - Semua rekaman DISPLAY-ONLY: tidak memberi/menilai legitimasi spiritual.
 *   - Lafaz wiridian lengkap & hitungan = ikut ijazah murshid — jujur
 *     dituliskan pada catatan adab tiap entri.
 *   - Idempoten: menjalankan ulang tidak menduplikasi apa pun.
 */
import { PrismaClient } from '@prisma/client'
import { WIRIDIAN_ENTRIES } from '../src/data/wiridian/bacaan'

export async function seedWiridian(prisma: PrismaClient): Promise<number> {
  let saved = 0

  for (const e of WIRIDIAN_ENTRIES) {
    const data = {
      slug: e.slug,
      order: e.order,
      kind: e.kind,
      titleAr: e.titleAr,
      titleId: e.titleId,
      titleSu: e.titleSu ?? null, // null eksplisit — undefined akan dilewati upsert
      subtitleId: e.subtitleId,
      ledeId: e.ledeId,
      grade: e.grade,
      status: e.status,
      sourceRef: e.sourceRef,
      noteId: e.noteId,
      visibility: 'PUBLIC',
    }
    await prisma.wiridEntry.upsert({
      where: { slug: e.slug },
      create: data,
      update: data,
    })
    const entry = await prisma.wiridEntry.findUnique({ where: { slug: e.slug } })
    if (!entry) continue
    // refresh verses from the single source of truth
    await prisma.wiridVerse.deleteMany({ where: { entryId: entry.id } })
    await prisma.wiridVerse.createMany({
      data: e.verses.map((v) => ({
        entryId: entry.id,
        order: v.order,
        arabic: v.arabic,
        latin: v.latin,
        meaningSu: v.meaningSu ?? null, // null eksplisit (qasidah: tanpa arti Sunda)
        meaningId: v.meaningId,
        tafsirId: v.tafsirId,
        tafsirAr: v.tafsirAr ?? null,
      })),
    })
    saved += 1
  }

  await prisma.auditLog.create({
    data: {
      actor: 'seed-wiridian',
      action: 'UPSERT',
      target: 'WIRIDIAN',
      detail: `${saved} entri bacaan (qasidah Ibadallah 13 bait — tanpa arti Sunda per permintaan Founder, Nuril Anwar, wiridian 6 tahap, dzikir harian) — Arab + Indonesia + tafsir, display-only.`,
    },
  })

  console.log(`seed-wiridian: ${saved} entri bacaan tersinkron (idempoten).`)
  return saved
}

/* dijalankan langsung: bun prisma/seed-wiridian.ts */
const isDirect = process.argv[1]?.includes('seed-wiridian')
if (isDirect) {
  const prisma = new PrismaClient()
  seedWiridian(prisma)
    .then(() =>
      console.log(
        'Wiridian & bacaan terekam — Arab + Latin + Indonesia + tafsir (qasidah tanpa arti Sunda per permintaan Founder), display-only, idempoten.',
      ),
    )
    .finally(() => prisma.$disconnect())
}
