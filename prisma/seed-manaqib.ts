/**
 * 165 — MANAQIB SEED (additive, idempotent — pure append)
 *
 * Task 32 — Amanah Founder: Manaqib Syekh Abdul Qodir Al-Jaelani lengkap.
 * Arsip konten lengkap hidup di src/data/manaqib/al-jilani.ts (display).
 * Seed ini mengintegrasikan TOKOH, KITAB, dan SUMBER klasiknya ke graf
 * pengetahuan, semuanya ber-grade & ber-sumber:
 *
 *   Master Blueprint §3.2 (165-SRC-000003, Level B, DOCUMENTED) — deposit
 *   Founder yang mencatat: "`Abd al-Qadir al-Jilani (1077/78–1166) was a
 *   Hanbali scholar, preacher and Sufi shaykh associated with Baghdad; the
 *   Qadiri order took his name (Encyclopaedia Iranica)."
 *
 * DISIPLIN (NON-NEGOTIABLE):
 *   - PERSON-000002 dinaikkan D → C (DOCUMENTED) hanya karena corroborated
 *     oleh deposit Level B + literatur ilmiah — per-node sanad TETAP tidak
 *     diklaim. VersionSnapshot v2 + AuditLog dicatat (pure append).
 *   - Kitab-kitab direkam sebagai BOOK (C DOCUMENTED) — teks tersimpan di
 *     literatur, BUKAN di arsip 165 (maka bukan grade A).
 *   - Al-Fuyudat ar-Rabbaniyyah (genre manakib) = TRADITIONAL_ACCOUNT.
 *   - TIDAK ada relasi guru-murid yang dikarang.
 *   - Idempoten: entitas/relasi yang sudah ada dilewati.
 */
import { PrismaClient } from '@prisma/client'

const PERSON = '165-PERSON-000002'
const SRC_BLUEPRINT = '165-SRC-000003'
const TRAD_QADIRIYYA = '165-TRAD-000002'
const SAMBAS = '165-PERSON-000004'

type EntityUpsert = {
  globalId: string; slug: string; type: string; primaryName: string
  subtitle?: string; summary: string; summaryId?: string
  evidenceLevel: string; verificationStatus: string
  startDate?: string; endDate?: string
  details?: Record<string, unknown>
  names?: { name: string; language: string; kind: string; note?: string }[]
}

const BOOKS: EntityUpsert[] = [
  {
    globalId: '165-BOOK-000001', slug: 'al-ghunya-li-thalibi-thariq-al-haqq', type: 'BOOK',
    primaryName: 'Al-Ghunya li-Thalibi Thariq al-Haqq',
    subtitle: 'Karya induk Syekh Abd al-Qadir al-Jilani — memuat ijazah & riwayat dirinya',
    summary: 'The shaykh\u2019s magnum opus, carrying his own life record, his ijazas, the list of his hadith teachers, fiqh of worship, ethics, the stations of the knowers and the hereafter. Primary literary source for the Manaqib room\u2019s Life records (displayed in src/data/manaqib/al-jilani.ts).',
    summaryId: 'Karya induk beliau, memuat riwayat hidupnya sendiri, ijazah-ijazahnya, daftar guru haditsnya, fikih ibadah, akhlak, maqamat, dan akhirat. Sumber literatur utama ruang Riwayat Manaqib (ditampilkan di src/data/manaqib/al-jilani.ts).',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: { author: PERSON, genre: 'Tasawwuf & fikih', sourceRoom: 'Manaqib', mqRefs: ['165-MQ-000020'] },
  },
  {
    globalId: '165-BOOK-000002', slug: 'al-fath-ar-rabbani', type: 'BOOK',
    primaryName: 'Al-Fath ar-Rabbani',
    subtitle: '62 khutbah Jumat (545–553 H) yang disalin murid-muridnya',
    summary: 'Sixty-two Friday sermons delivered at his madrasa between 545–553 AH, transcribed by his students — the most direct witness to his preaching voice.',
    summaryId: '62 khutbah Jumat di madrasahnya (545–553 H) yang disalin murid-muridnya — saksi paling langsung atas suara dakwah beliau.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: { author: PERSON, genre: 'Khutbah', period: '545–553 H', mqRefs: ['165-MQ-000021'] },
  },
  {
    globalId: '165-BOOK-000003', slug: 'futuh-al-ghaib', type: 'BOOK',
    primaryName: 'Futuh al-Ghaib',
    subtitle: '78 risalah pendek untuk para penuntut jalan',
    summary: 'Seventy-eight short epistles for seekers on sincerity, trust, patience and purification of the heart — among the most widely read Sufi books.',
    summaryId: '78 risalah pendek untuk penuntut jalan tentang ikhlas, berserah, sabar, dan pembersihan hati — salah satu kitab tasawuf paling banyak dibaca.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: { author: PERSON, genre: 'Tasawwuf', mqRefs: ['165-MQ-000022'] },
  },
  {
    globalId: '165-BOOK-000004', slug: 'sirr-al-asrar', type: 'BOOK',
    primaryName: 'Sirr al-Asrar',
    subtitle: 'Pedoman adab murid & mursyid',
    summary: 'A guide to the disciple\u2019s adab with the guide, the intention of dhikr, and the seeker\u2019s conduct; attribution broadly accepted in tariqa literature.',
    summaryId: 'Pedoman adab murid kepada mursyid, niat dzikir, dan tata kehidupan penuntut; atribusinya diterima luas dalam literatur tarekat.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: { author: PERSON, genre: 'Tasawwuf', mqRefs: ['165-MQ-000023'] },
  },
  {
    globalId: '165-BOOK-000005', slug: 'jila-al-khatir', type: 'BOOK',
    primaryName: 'Jila\u2019 al-Khatir',
    subtitle: 'Risalah-risalah pembersihan hati',
    summary: 'Short epistles on ordering and cleansing the heart; widely cited within the Qadiriyya tradition.',
    summaryId: 'Risalah pendek tentang menata dan membersihkan hati; disitasi luas dalam tradisi Qadiriyyah.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: { author: PERSON, genre: 'Tasawwuf', mqRefs: ['165-MQ-000024'] },
  },
  {
    globalId: '165-BOOK-000006', slug: 'malfuzat-al-jilani', type: 'BOOK',
    primaryName: 'Malfuzat',
    subtitle: 'Ucapan beliau yang dikumpulkan murid-muridnya',
    summary: 'Sayings of the shaykh in his assemblies, noted and arranged by his students. Recorded honestly as a students\u2019 compilation — precious, but not a text he arranged himself.',
    summaryId: 'Ucapan-ucapan beliau di majelis yang dicatat dan disusun murid-muridnya. Direkam jujur sebagai kompilasi murid — berharga, namun bukan teks yang beliau susun sendiri.',
    evidenceLevel: 'C', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: { author: PERSON, genre: 'Kompilasi murid', mqRefs: ['165-MQ-000025'] },
  },
]

const SOURCES: EntityUpsert[] = [
  {
    globalId: '165-SRC-000005', slug: 'encyclopaedia-iranica-abd-al-qader-jilani', type: 'SOURCE',
    primaryName: 'Encyclopaedia Iranica — \u201CAbd-al-Qader Jilani\u201D',
    subtitle: 'Ensiklopedia ilmiah — dikutip Master Blueprint §3.2',
    summary: 'Scholarly encyclopaedia article cited by the deposited Master Blueprint §3.2 as identifying Abd al-Qadir al-Jilani as the eponymous founder of the Qadiri order. The external work is registered here as a citation; deposit of the text itself is pending formal source review.',
    summaryId: 'Artikel ensiklopedia ilmiah yang dikutip Master Blueprint §3.2 sebagai yang mengidentifikasi Abd al-Qadir al-Jilani sebagai pendiri eponim tarekat Qadiri. Karya eksternalnya didaftarkan sebagai sitasi; deposit teksnya menunggu telaah sumber formal.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: { sourceType: 'EXTERNAL_CITATION', citedBy: SRC_BLUEPRINT, citedSection: '§3.2', note: 'External item — cited via deposited Blueprint.' },
  },
  {
    globalId: '165-SRC-000006', slug: 'al-fuyudat-ar-rabbaniyyah', type: 'SOURCE',
    primaryName: 'Al-Fuyudat ar-Rabbaniyyah — Ali ibn Yusuf asy-Syatthanaufi (w. 723 H)',
    subtitle: 'Kitab Manaqib induk — genre karamah',
    summary: 'The master Manaqib compilation of the shaykh\u2019s karamah, recited in gatherings for some 850 years, including in the Nusantara majelis tradition. Genre honesty: miracle reports are preserved as tradition (Traditional Account) — never promoted to historical fact, never used as a legitimacy claim.',
    summaryId: 'Kompilasi Manaqib induk atas karamah beliau yang dibaca di majelis-majelis sekitar 850 tahun, termasuk tradisi majelis Nusantara. Kejujuran genre: riwayat karamah dipelihara sebagai tradisi (Traditional Account) — tidak pernah dipromosikan menjadi fakta sejarah, tidak pernah dipakai klaim legitimasi.',
    evidenceLevel: 'C', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: { sourceType: 'CLASSICAL_TEXT', author: 'Ali ibn Yusuf asy-Syatthanaufi (w. 723 H)', genre: 'Manaqib', mqRefs: ['165-MQ-000031', '165-MQ-000032'] },
  },
  {
    globalId: '165-SRC-000007', slug: 'siyar-a-lam-an-nubala', type: 'SOURCE',
    primaryName: 'Adh-Dhahabi — Siyar A\u2019lam an-Nubala',
    subtitle: 'Biografis & sejarah klasik',
    summary: 'Classical biographical-history collection recording the shaykh among the luminaries; its historian-grade record (e.g. the exchange with the mocker) anchors the Life room\u2019s strongest accounts.',
    summaryId: 'Kumpulan biografi-sejarah klasik yang mencatat beliau di antara para bintang terang; rekaman sejarahnya (mis. jawaban kepada pengejek) menjadi jangkar ruang Riwayat.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: { sourceType: 'CLASSICAL_TEXT', author: 'Adh-Dhahabi', genre: 'Biografi/sejarah', mqRefs: ['165-MQ-000033'] },
  },
  {
    globalId: '165-SRC-000008', slug: 'adh-dhail-thabaqat-al-hanabilah', type: 'SOURCE',
    primaryName: 'Ibn Rajab — Adh-Dhail \u2018ala Thabaqat al-Hanabilah',
    subtitle: 'Biografis Hanbali klasik',
    summary: 'The classical Hanbali biographical continuation recording the shaykh\u2019s life, studies and leadership of the al-Mukharrimi madrasa-ribat.',
    summaryId: 'Lanjutan biografis Hanbali klasik yang mencatat kehidupan, studi, dan kepemimpinan beliau atas madrasah-ribath al-Mukharrimi.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: { sourceType: 'CLASSICAL_TEXT', author: 'Ibn Rajab al-Hanbali', genre: 'Biografi', mqRefs: ['165-MQ-000002', '165-MQ-000007'] },
  },
]

const RELATIONSHIPS: { from: string; to: string; predicate: string; level: string; status: string; source: string; context: string }[] = [
  ...BOOKS.map((b) => ({
    from: PERSON, to: b.globalId, predicate: 'AUTHORED', level: 'C', status: b.verificationStatus,
    source: b.globalId, context: 'Atribusi kepengarangan diterima luas dalam literatur; ditinjau sumber lanjutan.',
  })),
  { from: PERSON, to: TRAD_QADIRIYYA, predicate: 'LINEAGE_FOUNDER_OF', level: 'C', status: 'DOCUMENTED', source: SRC_BLUEPRINT, context: '§3.2: "the Qadiri order took his name" (Encyclopaedia Iranica) — historical eponym, BUKAN klaim ijazah per mata.' },
  { from: SRC_BLUEPRINT, to: PERSON, predicate: 'DOCUMENTS', level: 'B', status: 'DOCUMENTED', source: SRC_BLUEPRINT, context: '§3.2 — deposit kanonik Founder mendokumentasikan tokoh & tanggal (1077/78–1166).' },
  { from: '165-SRC-000005', to: PERSON, predicate: 'DOCUMENTS', level: 'C', status: 'DOCUMENTED', source: SRC_BLUEPRINT, context: 'Dikutip §3.2 sebagai pengidentifikasi eponim Qadiri.' },
  { from: '165-SRC-000006', to: PERSON, predicate: 'DOCUMENTS', level: 'C', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: 'Genre manakib — dipelihara sebagai tradisi, tidak pernah dipromosikan jadi fakta.' },
  { from: '165-SRC-000007', to: PERSON, predicate: 'DOCUMENTS', level: 'C', status: 'DOCUMENTED', source: SRC_BLUEPRINT, context: 'Rekaman sejarawan klasik.' },
  { from: '165-SRC-000008', to: PERSON, predicate: 'DOCUMENTS', level: 'C', status: 'DOCUMENTED', source: SRC_BLUEPRINT, context: 'Rekaman biografis Hanbali klasik.' },
  { from: SAMBAS, to: TRAD_QADIRIYYA, predicate: 'ASSOCIATED_WITH', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: '§3.4: riset Fath al-\u2018Arifin memberi bukti mata rantai melalui Qadiriyah — direkam dari deposit, tanpa klaim ijazah per mata.' },
]

export async function seedManaqib(prisma: PrismaClient) {
  let created = 0
  const idByGlobal: Record<string, string> = {}
  for (const g of [PERSON, SRC_BLUEPRINT, TRAD_QADIRIYYA, SAMBAS, ...BOOKS.map((b) => b.globalId), ...SOURCES.map((s) => s.globalId)]) {
    const found = await prisma.entity.findUnique({ where: { globalId: g } })
    if (found) idByGlobal[g] = found.id
  }

  // 1) entitas baru — pure append
  for (const e of [...BOOKS, ...SOURCES]) {
    if (idByGlobal[e.globalId]) continue
    const row = await prisma.entity.create({
      data: {
        globalId: e.globalId, slug: e.slug, type: e.type, primaryName: e.primaryName,
        subtitle: e.subtitle, summary: e.summary, summaryId: e.summaryId,
        evidenceLevel: e.evidenceLevel, verificationStatus: e.verificationStatus,
        startDate: e.startDate, startDatePrecision: e.startDate ? 'YEAR' : undefined,
        endDate: e.endDate, endDatePrecision: e.endDate ? 'YEAR' : undefined,
        details: e.details ? JSON.stringify(e.details) : null,
        nameVariants: { create: e.names ?? [] },
      },
    })
    idByGlobal[e.globalId] = row.id
    await prisma.versionSnapshot.create({
      data: {
        entityId: row.id, version: 1,
        snapshot: JSON.stringify({ globalId: e.globalId, primaryName: e.primaryName, evidenceLevel: e.evidenceLevel, verificationStatus: e.verificationStatus }),
        changedBy: 'seed-manaqib', reason: 'Manaqib lengkap (Task 32) — amanah Founder, ber-grade & ber-sumber.',
      },
    })
    await prisma.auditLog.create({
      data: { actor: 'seed-manaqib', action: 'CREATE', target: e.globalId, detail: `${e.type} Manaqib direkam ber-sumber (Task 32).` },
    })
    created++
  }

  // 2) relasi — cek dulu agar idempoten
  for (const r of RELATIONSHIPS) {
    const from = idByGlobal[r.from], to = idByGlobal[r.to]
    if (!from || !to) continue
    const dup = await prisma.relationship.findFirst({ where: { fromEntityId: from, toEntityId: to, predicate: r.predicate } })
    if (dup) continue
    await prisma.relationship.create({
      data: { fromEntityId: from, toEntityId: to, predicate: r.predicate, evidenceLevel: r.level, verificationStatus: r.status, context: r.context, sourceRef: r.source },
    })
  }

  // 3) perkaya PERSON-000002 — corroboration deposit Level B (D → C DOCUMENTED), pure append (v2)
  const person = idByGlobal[PERSON] ? await prisma.entity.findUnique({ where: { id: idByGlobal[PERSON] } }) : null
  if (person && person.evidenceLevel === 'D') {
    const prevVersion = await prisma.versionSnapshot.count({ where: { entityId: person.id } })
    await prisma.entity.update({
      where: { id: person.id },
      data: {
        evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
        subtitle: 'Eponim historis jalur Qadiriyya · Ghausul A\u2019zam — Hanbali, Baghdad (1077/78–1166)',
        summary: 'Hanbali scholar, preacher and Sufi shaykh of Baghdad (commonly 1077/78–1166 CE) after whom the Qadiriyya lineage is named. Documented against the deposited Master Blueprint §3.2 (Level B) which cites Encyclopaedia Iranica, and recorded with his works, classical biographies and the manqaba genre in the Manaqib room. Recorded as a historical reference figure — NOT as a verified node in any specific sanad chain, and never as a claim of spiritual legitimacy.',
        summaryId: 'Ulama Hanbali, pendakwah, dan mursyid Baghdad (umumnya 1077/78–1166 M) yang menjadi nama bagi silsilah Qadiriyya. Terdokumentasi melalui Master Blueprint §3.2 yang didepositkan (Level B) yang mengutip Encyclopaedia Iranica, dan direkam bersama karya-karyanya, biografis klasik, serta genre manakib di ruang Manaqib. Direkam sebagai figur rujukan historis — BUKAN sebagai simpul terverifikasi dalam sanad tertentu, dan tidak pernah sebagai klaim legitimasi spiritual.',
        details: JSON.stringify({
          role: 'Historical eponym — Qadiriyya lineage',
          titles: ['Ghaus al-A\u2019zam', 'Sultan al-Awliya', 'Muhyiddin', 'Kiblat al-Arifin'],
          born: 'Ramadan 470 H / 1077-78 M — Naif, Jilan (Persia)',
          died: '8 Syawal 561 H / 1166 M — Baghdad',
          blueprintSection: '§3.2',
          manaqibRoom: 'Ruang Manaqib — arsip lengkap src/data/manaqib/al-jilani.ts',
          note: 'Per-node sanad claims remain NOT asserted; documented against deposited Blueprint §3.2 (Level B) + scholarly literature (C).',
        }),
      },
    })
    await prisma.versionSnapshot.create({
      data: {
        entityId: person.id, version: prevVersion + 1,
        snapshot: JSON.stringify({ globalId: PERSON, evidenceLevel: 'C', verificationStatus: 'DOCUMENTED' }),
        changedBy: 'seed-manaqib', reason: 'Corroboration: deposit Master Blueprint §3.2 (Level B) + Encyclopaedia Iranica (C) — Task 32.',
      },
    })
    await prisma.auditLog.create({
      data: { actor: 'seed-manaqib', action: 'UPDATE', target: PERSON, detail: 'Perkaya profil Manaqib & corroborated oleh 165-SRC-000003 §3.2; D → C (DOCUMENTED). Per-node sanad tetap tidak diklaim.' },
    })
  }

  console.log(`seed-manaqib: ${created} entitas baru; PERSON-000002 diperkaya (corroborated §3.2); relasi dicek idempoten.`)
  return created
}

/* dijalankan langsung: bun prisma/seed-manaqib.ts */
const isDirect = process.argv[1]?.includes('seed-manaqib')
if (isDirect) {
  const prisma = new PrismaClient()
  seedManaqib(prisma)
    .then(() => console.log('Integrasi Manaqib selesai — kitab, sumber klasik, dan relasi ber-grade tersambung.'))
    .finally(() => prisma.$disconnect())
}
