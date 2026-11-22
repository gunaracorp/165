/**
 * 165 — SEED JALUR KARAWANG & AL-BANTANI (additive, idempotent — pure append)
 *
 * Permintaan langsung Founder (sesi ini): jalur TQN 165 Qodiriah wa Naqsabandiyah
 * melalui Syekh Tuan Guru Aabah Haji Suganda Karawang (Abah Ganda Cikangkung, #39a)
 * dan Syekh Abah Haji Sukanta bin Salmin (Sukanta Salmin Labuan al-Banteni, #39b).
 *
 * Yang DILAKUKAN seed ini:
 *   - Mendaftarkan SATU rantai sanad baru (165-SANAD-000004) yang menghubungkan
 *     simpul-simpul yang SUDAH terekam (PERSON-000008/9/10 — dibuat Phase 15
 *     dari deposit pendiri S1 + korpus sumber publik), dengan mata rantai yang
 *     HANYA memuat nama yang terekam pada sumber teridentifikasi.
 *   - Mendaftarkan majelis (165-INST-000003) yang terekam pada direktori
 *     silsilah publik TQN Indonesia (Kaskus, direkam sebagai bagian dossier).
 *   - Mendaftarkan sumber agregat (165-SRC-000012) untuk korpus sumber
 *     komunitas publik (Kaskus · YouTube · Facebook · TikTok) yang sebelumnya
 *     belum punya rekaman sumber.
 *
 * DISIPLIN (NON-NEGOTIABLE — sama dengan seed-sanad.ts):
 *   - PURE APPEND: tidak ada entitas lama yang diubah atau dihapus.
 *   - TIDAK ada nama mata rantai yang dikarang. Urutan Kadzim → terminal
 *     (#39a/#39b) terekam pada deposit pendiri S1 (165-SRC-000003) dan
 *     disilang-cek catatan komunitas publik ("warid ti ahmad kazim bin
 *     asnawi banten").
 *   - Generasi antara yang belum terekam diberi penanda JUJUR [ MATA BLOK ]
 *     — tidak pernah diprediksi, digabung, atau diisi nama rekaan.
 *   - Semua rekaman DISPLAY-ONLY: tidak memberi/menilai legitimasi spiritual.
 *   - Idempoten: entitas/relasi/mata yang sudah ada dilewati.
 */
import { PrismaClient } from '@prisma/client'

const SRC_BLUEPRINT = '165-SRC-000003' // deposit pendiri (S1) — Master Blueprint v1.0
const SRC_DOSIER = '165-SRC-000012' // dossier sumber publik komunitas (baru)
const SRC_AKADEMIK = '165-SRC-000006' // kutipan akademik Sukanta Salmin (ada)
const SRC_MEDIA = '165-SRC-000011' // profil media Mama Kadzim (ada)

type EntityUpsert = {
  globalId: string; slug: string; type: string; primaryName: string
  subtitle?: string; summary: string; summaryId?: string
  evidenceLevel: string; verificationStatus: string
  startDate?: string; endDate?: string
  details?: Record<string, unknown>
  names?: { name: string; language: string; kind: string; note?: string }[]
}

const entities: EntityUpsert[] = [
  // ---------- SUMBER AGREGAT KOMUNITAS ----------
  {
    globalId: SRC_DOSIER, slug: 'dossier-publik-jalur-karawang-albantani', type: 'SOURCE',
    primaryName: 'Dossier sumber publik — jalur Karawang & Al-Bantani (korpus komunitas)',
    subtitle: 'Kumpulan sumber publik teridentifikasi: direktori silsilah Kaskus, kanal komunitas YouTube/Facebook/TikTok, kutipan akademik & profil media',
    summary: 'Aggregated public-source dossier for the Karawang & Al-Bantani transmission line: the Kaskus directory of recognized (mu\'tabarah) TQN silsilah in Indonesia — which records "MAJELIS DZIKIR TAREKAT AL QODIRIYAH WA NAQSABANDIYAH, Dusun Cikangkung Timur, Desa Rengasdengklok Utara, Kec. Rengasdengklok, Kab. Karawang" — public community posts cross-checking the line ("warid ti ahmad kazim bin asnawi banten"), a community YouTube video of baiat/talqin by the TQN mursyid of Cikangkung Karawang, and the academic excerpt recording Syekh Ahmad Sukanta Salmin Labuan al-Banteni (1935 M/1356 H – 2015 M/1436 H). Registered as one aggregated dossier; each item remains a community/media source, graded as a whole.',
    summaryId: 'Dossier sumber publik agregat untuk jalur Karawang & Al-Bantani: direktori Kaskus silsilah TQN mu\'tabarah di Indonesia — yang mencatat "MAJELIS DZIKIR TAREKAT AL QODIRIYAH WA NAQSABANDIYAH, Dusun Cikangkung Timur, Desa Rengasdengklok Utara, Kec. Rengasdengklok, Kab. Karawang" — catatan komunitas publik yang menyilang-cek jalur ("warid ti ahmad kazim bin asnawi banten"), video YouTube komunitas baiat/talqin oleh mursyid TQN Cikangkung Karawang, serta kutipan akademik yang mencatat Syekh Ahmad Sukanta Salmin Labuan al-Banteni (1935 M/1356 H – 2015 M/1436 H). Didftarkan sebagai satu dossier agregat; tiap butir tetap sumber komunitas/media, bergrade sebagai satu kesatuan.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: {
      sourceType: 'COMMUNITY_MEDIA_CORPUS',
      items: [
        'Kaskus — "Silsilah TQN di Indonesia Yang Diakui Dunia (Mu\'tabaroh)" — entri Majelis Dzikir TQN Cikangkung Timur, Rengasdengklok Utara, Karawang (thread 657972234642bc41ca6964da)',
        'YouTube — "Baiat/Talqin oleh Guru Mursyid TQN, Syeikh Kh. Krawang(e)… Cikangkung Karawang" (kanal komunitas)',
        'YouTube — "Silsilah & Sejarah singkat TQN abah cikangkung rengas dengklok karawang" (kanal komunitas)',
        'Facebook (grup komunitas TQN) — catatan publik: "tarekat qodiriyah wa naqsabandiyah abah ganda cikangkung, rengasdengklok, karawang. Warid ti ahmad kazim bin asnawi banten"',
        'TikTok — tag komunitas #tqn165 #karawang #cikangkung (konteks majelis Karawang)',
        'id.scribd.com — "Pengaruh Syekh Asnawi di Caringin" — kutipan: "Syekh Ahmad Sukanta Salmin Labuan al-Banteni RA (1935 M/1356 H – 2015 M/1436 H)" (juga terekam 165-SRC-000006)',
      ],
      crossCheckOf: '165-SRC-000003',
      note: 'Dossier agregat — butir komunitas publik; tiap butir dapat dinaikkan grade-nya saat deposit formal per-butir.',
    },
  },

  // ---------- MAJELIS (institusi lokal) ----------
  {
    globalId: '165-INST-000003', slug: 'majelis-tqn-cikangkung-karawang', type: 'INSTITUTION',
    primaryName: 'Majelis Dzikir TQN Cikangkung — Rengasdengklok, Karawang',
    subtitle: 'Majelis dzikir jalur Karawang · Dusun Cikangkung Timur, Desa Rengasdengklok Utara, Kec. Rengasdengklok, Kab. Karawang',
    summary: 'The Karawang-line dhikr assembly recorded in the public directory of recognized (mu\'tabarah) TQN silsilah in Indonesia: "MAJELIS DZIKIR TAREKAT AL QODIRIYAH WA NAQSABANDIYAH, Dusun Cikangkung Timur, Desa Rengasdengklok Utara, Kec. Rengasdengklok, Kab. Karawang." Community channels further record assemblies and baiat/talqin activity tied to the Cikangkung Karawang majelis. Recorded as an institutional record from the aggregated public dossier — NOT asserted as a verified sanad row and no legitimacy conferred.',
    summaryId: 'Majelis dzikir jalur Karawang yang terekam pada direktori publik silsilah TQN mu\'tabarah di Indonesia: "MAJELIS DZIKIR TAREKAT AL QODIRIYAH WA NAQSABANDIYAH, Dusun Cikangkung Timur, Desa Rengasdengklok Utara, Kec. Rengasdengklok, Kab. Karawang." Kanal komunitas juga merekam aktivitas majelis dan baiat/talqin yang terkait Cikangkung Karawang. Direkam sebagai rekaman kelembagaan dari dossier publik agregat — BUKAN ditetaskan sebagai barisan sanad terverifikasi dan tanpa memberi legitimasi.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: {
      recordPolicy: 'Historical/institutional record — NOT a sanad-chain row.',
      address: 'Dusun Cikangkung Timur, Desa Rengasdengklok Utara, Kec. Rengasdengklok, Kab. Karawang, Jawa Barat',
      terminalMursyid: '165-PERSON-000010',
      sources: [SRC_DOSIER],
    },
    names: [
      { name: 'Majelis Dzikir Tarekat Al Qodiriyah wa Naqsabandiyah Cikangkung', language: 'id', kind: 'VARIANT' },
      { name: 'Majelis TQN 165 Cikangkung', language: 'id', kind: 'VARIANT', note: 'penamaan kanal komunitas' },
    ],
  },

  // ---------- JALUR SANAD KARAWANG & AL-BANTANI (display-only) ----------
  {
    globalId: '165-SANAD-000004', slug: 'sanad-line-karawang-albantani', type: 'SANAD',
    primaryName: 'Jalur Karawang & Al-Bantani — Mama Kadzim → Abah Ganda (#39a) · Abah Sukanta (#39b) — deposit pendiri 165',
    subtitle: 'Jalur transmisi terekam — display-only; deposit pendiri (S1, Level B) + dossier sumber publik komunitas',
    summary: 'The Karawang & Al-Bantani transmission line, recorded from the Founder\'s deposited numbered list (S1, Level B — 165-SRC-000003) and cross-checked against the aggregated public community dossier (165-SRC-000012): Syaikh Tubagus Haji Ahmad Kadzim Asnawi (Mama Kadzim, #38, Menes-Banten) is recorded as the teacher of the two recorded terminals — Abah Ganda of Cikangkung, Rengasdengklok, Karawang (#39a) and Syekh Ahmad Sukanta Salmin Labuan al-Banteni (Abah Haji Sukanta, #39b, 1935–2015). Generations between Shaykh Ahmad Khatib Sambas and #38 are honestly marked [ MATA BLOK ] — never predicted. Community sources independently cross-check the line ("warid ti ahmad kazim bin asnawi banten"). DISPLAY-ONLY: this record does NOT confer, evaluate, or rank spiritual legitimacy, and is not a verified ijazah history.',
    summaryId: 'Jalur Karawang & Al-Bantani, terekam dari daftar bernomor yang didepositkan Founder (S1, Level B — 165-SRC-000003) dan disilang-cek dengan dossier publik komunitas agregat (165-SRC-000012): Syaikh Tubagus Haji Ahmad Kadzim Asnawi (Mama Kadzim, #38, Menes-Banten) terekam sebagai guru dari dua terminal yang terekam — Abah Ganda Cikangkung, Rengasdengklok, Karawang (#39a) dan Syekh Ahmad Sukanta Salmin Labuan al-Banteni (Abah Haji Sukanta, #39b, 1935–2015). Generasi antara Shaykh Ahmad Khatib Sambas dan #38 ditandai JUJUR [ MATA BLOK ] — tidak pernah diprediksi. Sumber komunitas secara independen menyilang-cek jalur ini ("warid ti ahmad kazim bin asnawi banten"). DISPLAY-ONLY: rekaman ini TIDAK memberi, menilai, atau memeringkat legitimasi spiritual, dan bukan sejarah ijazah terverifikasi.',
    evidenceLevel: 'B', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: {
      displayOnly: true,
      chainSourceRef: SRC_BLUEPRINT,
      mataBlokPolicy: 'Simpul hilang ditandai jujur — tidak pernah diprediksi/dikarang.',
      communityCrossCheck: SRC_DOSIER,
      terminals: { '#39a': '165-PERSON-000010', '#39b': '165-PERSON-000009' },
      teacher: { '#38': '165-PERSON-000008' },
      depositBasis: 'Permintaan langsung Founder — jalur TQN 165 melalui Syekh Tuan Guru Aabah Haji Suganda Karawang & Syekh Abah Haji Sukanta bin Salmin.',
    },
  },
]

// ---------- RELASI (eksplisit; tidak ada yang disimpulkan) ----------
const relationships = [
  { from: '165-PERSON-000008', to: '165-PERSON-000010', predicate: 'TEACHER_OF', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_DOSIER, context: 'Catatan komunitas publik: "warid ti ahmad kazim bin asnawi banten" — konsisten dengan daftar susunan pendiri (S1, 165-SRC-000003) yang mencatat Mama Kadzim (#38) sebagai guru terminal Karawang (#39a). Display-only — bukan klaim ijazah terverifikasi.' },
  { from: '165-PERSON-000008', to: '165-PERSON-000009', predicate: 'TEACHER_OF', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: 'S1 (deposit pendiri): Mama Kadzim (#38) terekam sebagai guru kedua terminal (#39a, #39b) — termasuk Syekh Ahmad Sukanta Salmin Labuan al-Banteni (#39b, 1935–2015 per kutipan akademik 165-SRC-000006). Display-only.' },
  { from: '165-PERSON-000008', to: '165-SANAD-000004', predicate: 'ASSOCIATED_WITH', level: 'B', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: 'Guru #38 pada jalur yang didepositkan pendiri (S1, Level B).' },
  { from: '165-PERSON-000009', to: '165-SANAD-000004', predicate: 'ASSOCIATED_WITH', level: 'B', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: 'Terminal #39b (Al-Bantani) pada jalur yang didepositkan pendiri.' },
  { from: '165-PERSON-000010', to: '165-SANAD-000004', predicate: 'ASSOCIATED_WITH', level: 'B', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: 'Terminal #39a (Karawang) pada jalur yang didepositkan pendiri.' },
  { from: '165-SANAD-000004', to: '165-PLACE-000010', predicate: 'ASSOCIATED_WITH', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_DOSIER, context: 'Jalur terekam menamat pada majelis Karawang (Cikangkung, Rengasdengklok).' },
  { from: '165-INST-000003', to: '165-PLACE-000010', predicate: 'LOCATED_IN', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_DOSIER, context: 'Dusun Cikangkung Timur, Desa Rengasdengklok Utara, Kec. Rengasdengklok, Kab. Karawang — terekam pada direktori publik.' },
  { from: '165-PERSON-000010', to: '165-INST-000003', predicate: 'ASSOCIATED_WITH', level: 'B', status: 'TRADITIONAL_ACCOUNT', source: SRC_DOSIER, context: 'Mursyid terminal jalur Karawang (#39a) yang terekam terkait dengan majelis Cikangkung — rekaman kelembagaan, bukan penilaian legitimasi.' },
  { from: SRC_DOSIER, to: '165-SANAD-000004', predicate: 'DOCUMENTS', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_DOSIER, context: 'Dossier komunitas publik mendokumentasikan jalur & silang-ceknya (butir per-butir menunggu deposit formal).' },
  { from: SRC_DOSIER, to: '165-INST-000003', predicate: 'DOCUMENTS', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_DOSIER, context: 'Entri direktori Kaskus mencatat majelis Cikangkung Timur secara bernama dan beralamat.' },
  { from: SRC_AKADEMIK, to: '165-PERSON-000009', predicate: 'DOCUMENTS', level: 'C', status: 'DOCUMENTED', source: SRC_AKADEMIK, context: 'Kutipan akademik: "Syekh Ahmad Sukanta Salmin Labuan al-Banteni RA (1935 M/1356 H – 2015 M/1436 H)" — nama & rentang tahun.' },
  { from: SRC_MEDIA, to: '165-PERSON-000008', predicate: 'DOCUMENTS', level: 'C', status: 'DOCUMENTED', source: SRC_MEDIA, context: 'Profil media Pandeglang News: ulama sufi penjaga kesinambungan TQN di Banten.' },
]

// ---------- MATA SANAD (display-only; [ MATA BLOK ] jujur untuk yang belum terekam) ----------
const P8 = 'Syaikh Tubagus Haji Ahmad Kadzim Asnawi'
const P9 = 'Syekh Ahmad Sukanta Salmin Labuan al-Banteni'
const P10 = 'Abah Ganda (Cikangkung, Rengasdengklok, Karawang)'
const INST = 'Majelis Dzikir TQN Cikangkung — Rengasdengklok, Karawang'

const sanadLinkRows: {
  order: number
  fromName: string
  toName: string
  personGlobal?: string
  eraNote: string
  evidenceLevel: string
  verificationStatus: string
  sourceRef?: string
  context: string
}[] = [
  {
    order: 1,
    fromName: 'Shaykh Ahmad Khatib Sambas', toName: '[ MATA BLOK ]',
    eraNote: 'Abad ke-19 — jalur Banten (Al-Bantani)',
    evidenceLevel: 'F', verificationStatus: 'UNVERIFIED',
    context: 'Generasi antara belum terekam dalam sumber yang dapat diakses — ditandai jujur, tidak pernah diprediksi. Menunggu deposit dossier/ijazah per-generasi jalur Banten.',
  },
  {
    order: 2,
    fromName: '[ MATA BLOK ]', toName: P8, personGlobal: '165-PERSON-000008',
    eraNote: '#38 daftar susunan pendiri (S1) — Menes, Banten',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    sourceRef: `${SRC_BLUEPRINT} (S1) · ${SRC_MEDIA}`,
    context: 'Posisi #38 terekam pada daftar susunan pendiri (S1, Level B). Profil media (165-SRC-000011) menggambarkan beliau sebagai ulama sufi penjaga kesinambungan TQN di Banten. Display-only.',
  },
  {
    order: 3,
    fromName: P8, toName: P10, personGlobal: '165-PERSON-000010',
    eraNote: 'Terminal #39a — Cikangkung, Rengasdengklok, Karawang',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    sourceRef: `${SRC_DOSIER} · ${SRC_BLUEPRINT} (S1)`,
    context: 'S1 mencatat Mama Kadzim (#38) sebagai guru terminal #39a; silang-cek komunitas publik: "warid ti ahmad kazim bin asnawi banten". Display-only — bukan klaim ijazah terverifikasi.',
  },
  {
    order: 4,
    fromName: P8, toName: P9, personGlobal: '165-PERSON-000009',
    eraNote: 'Terminal #39b — Kaduparasi, Labuan, Pandeglang · 1935–2015',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    sourceRef: `${SRC_BLUEPRINT} (S1) · ${SRC_AKADEMIK}`,
    context: 'S1 mencatat Mama Kadzim (#38) sebagai guru kedua terminal (#39a, #39b); nama & rentang tahun Sukanta Salmin terekam pada kutipan akademik (165-SRC-000006). Display-only.',
  },
  {
    order: 5,
    fromName: P10, toName: INST,
    eraNote: 'Jaringan majelis Karawang — Cikangkung, Rengasdengklok',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    sourceRef: SRC_DOSIER,
    context: 'Mata kelembagaan: majelis Cikangkung terekam pada direktori publik silsilah TQN mu\'tabarah — rekaman kelembagaan, bukan mata ijazah.',
  },
]

export async function seedKarawang(prisma: PrismaClient) {
  let created = 0
  const idByGlobal: Record<string, string> = {}
  for (const g of [
    SRC_BLUEPRINT, SRC_AKADEMIK, SRC_MEDIA,
    '165-PERSON-000008', '165-PERSON-000009', '165-PERSON-000010',
    '165-PLACE-000010', SRC_DOSIER, '165-INST-000003', '165-SANAD-000004',
  ]) {
    const found = await prisma.entity.findUnique({ where: { globalId: g } })
    if (found) idByGlobal[g] = found.id
  }

  // 1) entitas — pure append (yang sudah ada dilewati)
  for (const e of entities) {
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
        snapshot: JSON.stringify({ globalId: e.globalId, primaryName: e.primaryName, verificationStatus: e.verificationStatus, evidenceLevel: e.evidenceLevel }),
        changedBy: 'seed-karawang', reason: 'Jalur Karawang & Al-Bantani — deposit pendiri (sesi ini), ber-sumber S1 + dossier publik.',
      },
    })
    await prisma.auditLog.create({
      data: { actor: 'seed-karawang', action: 'CREATE', target: e.globalId, detail: `Entity ${e.type} direkam dari deposit pendiri (S1) + dossier sumber publik komunitas — display-only.` },
    })
    created++
  }

  // 2) relasi — cek dulu agar idempoten
  for (const r of relationships) {
    const from = idByGlobal[r.from], to = idByGlobal[r.to]
    if (!from || !to) continue
    const dup = await prisma.relationship.findFirst({ where: { fromEntityId: from, toEntityId: to, predicate: r.predicate } })
    if (dup) continue
    await prisma.relationship.create({
      data: { fromEntityId: from, toEntityId: to, predicate: r.predicate, evidenceLevel: r.level, verificationStatus: r.status, context: r.context, sourceRef: r.source },
    })
  }

  // 3) mata rantai — idempoten per jalur
  const sanadId = idByGlobal['165-SANAD-000004']
  if (sanadId) {
    const existing = await prisma.sanadLink.count({ where: { sanadEntityId: sanadId } })
    if (existing === 0) {
      await prisma.sanadLink.createMany({
        data: sanadLinkRows.map((l) => ({
          sanadEntityId: sanadId, order: l.order,
          fromName: l.fromName, toName: l.toName,
          personEntityId: l.personGlobal ? idByGlobal[l.personGlobal] : null,
          eraNote: l.eraNote,
          evidenceLevel: l.evidenceLevel, verificationStatus: l.verificationStatus,
          sourceRef: l.sourceRef ?? null,
          context: l.context,
        })),
      })
      await prisma.auditLog.create({
        data: { actor: 'seed-karawang', action: 'CREATE', target: '165-SANAD-000004', detail: 'SanadLink (5 mata, display-only) — jalur Karawang & Al-Bantani; simpul [ MATA BLOK ] jujur.' },
      })
    }
  }

  console.log(`seed-karawang: ${created} entitas baru, relasi/mata dicek idempoten.`)
  return created
}

/* dijalankan langsung: bun prisma/seed-karawang.ts */
const isDirect = process.argv[1]?.includes('seed-karawang')
if (isDirect) {
  const prisma = new PrismaClient()
  seedKarawang(prisma)
    .then(() => console.log('Jalur Karawang & Al-Bantani terekam — display-only, ber-sumber, MATA BLOK jujur.'))
    .finally(() => prisma.$disconnect())
}
