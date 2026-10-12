/**
 * 165 — SANAD RESTORATION SEED (additive, idempotent — pure append)
 *
 * Task 30 — permintaan Founder: kembalikan TIGA jalur transmisi TQN yang
 * tercatat di sumber dunia dan sudah didepositkan sendiri dalam dokumen
 * kanonik 165 (Ruang Dokumen, verbatim):
 *
 *   Master Blueprint §3.4 — Shaykh Ahmad Khatib Sambas (1803–1875),
 *       perumus sintesis Qadiriyah wa Naqsyabandiyah; riset manuskrip
 *       Fath al-'Arifin membuktikan mata rantai melalui Qadiriyah DAN
 *       Naqshbandiyah.
 *   Master Blueprint §3.5 — jalur-jalur transmisi utama TQN ke Jawa
 *       melalui Shaykh Abdul Karim Banten, Shaykh Ahmad Thalhah Cirebon,
 *       dan Shaykh Muhammad Hasbullah Madura, dilanjutkan pusat-pusat
 *       Suryalaya, Rejoso, Mranggen, Pangentongan.
 *
 * DISIPLIN (NON-NEGOTIABLE):
 *   - Semua simpul direkam DENGAN sumber (165-SRC-000003 / §).
 *   - Status historis: TRADITIONAL_ACCOUNT — bukan ijazah terverifikasi.
 *   - Simpul yang belum terekam diberi penanda jujur [ MATA BLOK ] —
 *     TIDAK PERNAH diprediksi, digabung, atau dikarang.
 *   - Rekam ini DISPLAY-ONLY: tidak memberi/nilaian legitimasi spiritual.
 *   - Idempoten: entitas yang sudah ada dilewati (pure append).
 */
import { PrismaClient } from '@prisma/client'

const SRC_BLUEPRINT = '165-SRC-000003'
const SRC_FATH = '165-SRC-000004'

type EntityUpsert = {
  globalId: string; slug: string; type: string; primaryName: string
  subtitle?: string; summary: string; summaryId?: string
  evidenceLevel: string; verificationStatus: string
  startDate?: string; endDate?: string
  details?: Record<string, unknown>
  names?: { name: string; language: string; kind: string; note?: string }[]
}

const entities: EntityUpsert[] = [
  // ---------- SUMBER (deposit kanonik yang menjadi dasar pemulihan) ----------
  {
    globalId: SRC_BLUEPRINT, slug: '165-master-blueprint', type: 'SOURCE',
    primaryName: '165 Master Blueprint v1.0',
    subtitle: 'Dokumen kanonik Founder — tinjauan sejarah tasawuf & TQN (§3.1–3.7)',
    summary: 'One of six canonical control documents deposited by the Founder and readable verbatim in the Ruang Dokumen. Sections 3.1–3.7 review the history of tasawuf, the two lineage roots, Ahmad Khatib Sambas and the TQN formation, transmission into Java, and Suryalaya.',
    summaryId: 'Salah satu dari enam dokumen kanonik yang didepositkan Founder dan dapat dibaca verbatim di Ruang Dokumen. Bagian 3.1–3.7 meninjau sejarah tasawuf, dua akar silsilah, Ahmad Khatib Sambas dan pembentukan TQN, transmisi ke Jawa, serta Suryalaya.',
    evidenceLevel: 'B', verificationStatus: 'DOCUMENTED',
    details: {
      sourceType: 'INSTITUTIONAL',
      location: 'docs/canon/165_MASTER_BLUEPRINT_v1_0.md',
      copy: 'Ruang Dokumen — salinan verbatim',
      restorationBasis: 'Basis pemulihan Tiga Jalur Sanad (Task 30).',
    },
  },
  {
    globalId: SRC_FATH, slug: 'fath-al-arifin-manuscript-research', type: 'SOURCE',
    primaryName: 'Fath al-\'Arifin manuscript transmission research (cited)',
    subtitle: 'Item eksternal — dikutip Master Blueprint §3.4; belum didepositkan dalam arsip 165',
    summary: 'Scholarly research based on manuscripts of Fath al-\'Arifin providing evidence that Ahmad Khatib Sambas had transmission links through both Qadiriyah and Naqshbandiyah (Master Blueprint §3.4). The Blueprint also cites the journal article "Petunjuk Baru Silsilah Ahmad Khatib Sambas: Tiga Teks Tulisan Melayu" (Kementerian Agama). This record registers the citation; the external work itself is NOT yet deposited in 165\'s archive.',
    summaryId: 'Riset ilmiah berbasis manuskrip Fath al-\'Arifin yang memberi bukti bahwa Ahmad Khatib Sambas memiliki mata rantai melalui Qadiriyah dan Naqshbandiyah (Master Blueprint §3.4). Blueprint juga mengutip artikel jurnal "Petunjuk Baru Silsilah Ahmad Khatib Sambas: Tiga Teks Tulisan Melayu" (Kementerian Agama). Rekaman ini mendaftarkan sitasi; karya eksternalnya sendiri BELUM didepositkan dalam arsip 165.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: {
      sourceType: 'EXTERNAL_CITATION',
      citationKey: '165SRC_SAMBAS_FATHARIFIN_1880',
      note: 'External item — cited via Master Blueprint §3.4. Deposit/access pending formal source review.',
    },
  },

  // ---------- TOKOH (empat simpul ber-sumber) ----------
  {
    globalId: '165-PERSON-000004', slug: 'ahmad-khatib-sambas', type: 'PERSON',
    primaryName: 'Shaykh Ahmad Khatib Sambas',
    subtitle: 'Perumus sintesis Qadiriyah wa Naqsyabandiyah (1803–1875)',
    summary: 'Per Master Blueprint §3.4, modern academic literature commonly identifies Shaykh Ahmad Khatib Sambas (1803–1875) as the Nusantara shaykh who formulated the Qadiriyah wa Naqsyabandiyah synthesis in the nineteenth century; manuscript research on Fath al-\'Arifin provides evidence of transmission links through both Qadiriyah and Naqshbandiyah. Recorded as a historical reference figure from a deposited source — NOT asserted as a verified sanad node.',
    summaryId: 'Sesuai Master Blueprint §3.4, literatur akademik modern umumnya mengidentifikasi Shaykh Ahmad Khatib Sambas (1803–1875) sebagai syekh Nusantara yang merumuskan sintesis Qadiriyah wa Naqsyabandiyah pada abad ke-19; riset manuskrip Fath al-\'Arifin memberi bukti mata rantai melalui Qadiriyah dan Naqshbandiyah. Direkam sebagai figur rujukan historis ber-sumber deposit — BUKAN diklaim sebagai simpul sanad terverifikasi.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    startDate: '1803', endDate: '1875',
    details: { role: 'Formulator of the TQN synthesis', blueprintSection: '§3.4', note: 'Dates per the deposited Blueprint; scholarly citations attach during formal source review.' },
    names: [{ name: 'Syekh Ahmad Khatib Sambas', language: 'id', kind: 'VARIANT' }],
  },
  {
    globalId: '165-PERSON-000005', slug: 'abdul-karim-banten', type: 'PERSON',
    primaryName: 'Shaykh Abdul Karim Banten',
    subtitle: 'Tokoh jalur transmisi TQN yang disebut Master Blueprint §3.5',
    summary: 'Per Master Blueprint §3.5, research on the genealogy and spread of TQN in Java identifies major transmission lines through figures such as Shaykh Abdul Karim Banten. Recorded exactly as named in the deposited source; per-generation ijazah documentation is not yet deposited, so no further links are asserted.',
    summaryId: 'Sesuai Master Blueprint §3.5, riset genealogi dan penyebaran TQN di Jawa mengidentifikasi jalur-jalur transmisi utama melalui tokoh seperti Shaykh Abdul Karim Banten. Direkam persis seperti disebut dalam sumber deposit; dokumentasi ijazah per-generasi belum didepositkan, sehingga tidak ada mata rantai lanjutan yang diklaim.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: { role: 'Named transmitter — TQN into Java', blueprintSection: '§3.5' },
    names: [{ name: 'Syekh Abdul Karim Banten', language: 'id', kind: 'VARIANT' }],
  },
  {
    globalId: '165-PERSON-000006', slug: 'ahmad-thalhah-cirebon', type: 'PERSON',
    primaryName: 'Shaykh Ahmad Thalhah Cirebon',
    subtitle: 'Tokoh jalur transmisi TQN yang disebut Master Blueprint §3.5',
    summary: 'Per Master Blueprint §3.5, research on the genealogy and spread of TQN in Java identifies major transmission lines through figures such as Shaykh Ahmad Thalhah Cirebon. Note: a related Cirebon figure, "Shaykh Tholhah bin Talabudin", appears in the Suryalaya institutional record (§3.6) as supporting and authorizing Abah Sepuh — 165 does NOT assert that these two names refer to the same individual.',
    summaryId: 'Sesuai Master Blueprint §3.5, riset genealogi dan penyebaran TQN di Jawa mengidentifikasi jalur-jalur transmisi utama melalui tokoh seperti Shaykh Ahmad Thalhah Cirebon. Catatan: tokoh Cirebon terkait, "Shaykh Tholhah bin Talabudin", muncul dalam catatan kelembagaan Suryalaya (§3.6) sebagai pendukung dan pemberi otorisasi Abah Sepuh — 165 TIDAK mengklaim kedua nama ini orang yang sama.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: { role: 'Named transmitter — TQN into Java', blueprintSection: '§3.5', identityNote: 'Equivalence with "Tholhah bin Talabudin" (§3.6) NOT asserted.' },
    names: [{ name: 'Syekh Ahmad Thalhah Cirebon', language: 'id', kind: 'VARIANT' }],
  },
  {
    globalId: '165-PERSON-000007', slug: 'muhammad-hasbullah-madura', type: 'PERSON',
    primaryName: 'Shaykh Muhammad Hasbullah Madura',
    subtitle: 'Tokoh jalur transmisi TQN yang disebut Master Blueprint §3.5',
    summary: 'Per Master Blueprint §3.5, research on the genealogy and spread of TQN in Java identifies major transmission lines through figures such as Shaykh Muhammad Hasbullah Madura. Recorded exactly as named in the deposited source; per-generation ijazah documentation is not yet deposited, so no further links are asserted.',
    summaryId: 'Sesuai Master Blueprint §3.5, riset genealogi dan penyebaran TQN di Jawa mengidentifikasi jalur-jalur transmisi utama melalui tokoh seperti Shaykh Muhammad Hasbullah Madura. Direkam persis seperti disebut dalam sumber deposit; dokumentasi ijazah per-generasi belum didepositkan, sehingga tidak ada mata rantai lanjutan yang diklaim.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: { role: 'Named transmitter — TQN into Java', blueprintSection: '§3.5' },
    names: [{ name: 'Syekh Muhammad Hasbullah Madura', language: 'id', kind: 'VARIANT' }],
  },

  // ---------- TIGA JALUR SANAD (display-only) ----------
  ...(['abdul-karim-banten', 'ahmad-thalhah-cirebon', 'muhammad-hasbullah-madura'] as const).flatMap(
    (fig, i) => {
      const title = {
        'abdul-karim-banten': 'Shaykh Abdul Karim Banten',
        'ahmad-thalhah-cirebon': 'Shaykh Ahmad Thalhah Cirebon',
        'muhammad-hasbullah-madura': 'Shaykh Muhammad Hasbullah Madura',
      }[fig]
      return [{
        globalId: `165-SANAD-00000${i + 1}`,
        slug: `sanad-line-${fig}`,
        type: 'SANAD',
        primaryName: `TQN transmission line — ${title}`,
        subtitle: 'Jalur transmisi tercatat — display-only, ber-sumber Master Blueprint §3.5',
        summary: `A major transmission line of TQN into Java, recorded in the deposited Master Blueprint §3.5: "Research on the genealogy and spread of TQN in Java identifies major transmission lines through figures such as Shaykh Abdul Karim Banten, Shaykh Ahmad Thalhah Cirebon, and Shaykh Muhammad Hasbullah Madura, followed by several major centers in Java including Suryalaya, Rejoso, Mranggen and Pangentongan." Display-only record. The chain below shows recorded links; the [ MATA BLOK ] node honestly marks generations not yet recorded in accessible sources. This record does NOT confer, evaluate, or rank spiritual legitimacy.`,
        summaryId: `Salah satu jalur transmisi utama TQN ke Jawa, tercatat dalam Master Blueprint §3.5 yang didepositkan: "Riset genealogi dan penyebaran TQN di Jawa mengidentifikasi jalur-jalur transmisi utama melalui tokoh seperti Shaykh Abdul Karim Banten, Shaykh Ahmad Thalhah Cirebon, dan Shaykh Muhammad Hasbullah Madura, dilanjutkan beberapa pusat besar di Jawa antara lain Suryalaya, Rejoso, Mranggen dan Pangentongan." Rekaman display-only. Rantai di bawah menampilkan mata yang tercatat; simpul [ MATA BLOK ] menandai secara jujur generasi yang belum terekam dalam sumber yang dapat diakses. Rekaman ini TIDAK memberi, menilai, atau memeringkat legitimasi spiritual.`,
        evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
        details: {
          displayOnly: true,
          blueprintSection: '§3.5',
          mataBlokPolicy: 'Simpul hilang ditandai jujur — tidak pernah diprediksi/dikarang.',
          sourceRef: SRC_BLUEPRINT,
          centers: ['Suryalaya', 'Rejoso', 'Mranggen', 'Pangentongan'],
        },
      }]
    },
  ),
]

// ---------- RELASI (eksplisit; tidak ada yang disimpulkan) ----------
const relationships = [
  { from: '165-PERSON-000004', to: '165-TRAD-000001', predicate: 'FOUNDED', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: '§3.4: "formulated the Qadiriyah wa Naqsyabandiyah synthesis" — recorded from the deposited Blueprint, not asserted as verified ijazah history.' },
  { from: '165-SANAD-000001', to: '165-TRAD-000001', predicate: 'ASSOCIATED_WITH', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: '§3.5 — major transmission line of TQN into Java.' },
  { from: '165-SANAD-000002', to: '165-TRAD-000001', predicate: 'ASSOCIATED_WITH', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: '§3.5 — major transmission line of TQN into Java.' },
  { from: '165-SANAD-000003', to: '165-TRAD-000001', predicate: 'ASSOCIATED_WITH', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: '§3.5 — major transmission line of TQN into Java.' },
  { from: '165-PERSON-000005', to: '165-SANAD-000001', predicate: 'ASSOCIATED_WITH', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: 'Named transmitter of this line (§3.5).' },
  { from: '165-PERSON-000006', to: '165-SANAD-000002', predicate: 'ASSOCIATED_WITH', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: 'Named transmitter of this line (§3.5).' },
  { from: '165-PERSON-000007', to: '165-SANAD-000003', predicate: 'ASSOCIATED_WITH', level: 'D', status: 'TRADITIONAL_ACCOUNT', source: SRC_BLUEPRINT, context: 'Named transmitter of this line (§3.5).' },
  { from: SRC_BLUEPRINT, to: '165-TRAD-000001', predicate: 'DOCUMENTS', level: 'B', status: 'DOCUMENTED', source: SRC_BLUEPRINT, context: 'Historical review: tasawuf → Qadiriyah → Naqsyabandiyah → Sambas → TQN (§3.1–3.7).' },
  { from: SRC_BLUEPRINT, to: SRC_FATH, predicate: 'REFERENCES', level: 'B', status: 'DOCUMENTED', source: SRC_BLUEPRINT, context: '§3.4 — manuscript basis of the Sambas transmission links.' },
]

// ---------- MATA SANAD (display-only; Simpul 2 = [ MATA BLOK ] jujur) ----------
const sanadLinkRows = [
  {
    sanad: '165-SANAD-000001', figureGlobal: '165-PERSON-000005', figure: 'Shaykh Abdul Karim Banten',
  },
  {
    sanad: '165-SANAD-000002', figureGlobal: '165-PERSON-000006', figure: 'Shaykh Ahmad Thalhah Cirebon',
  },
  {
    sanad: '165-SANAD-000003', figureGlobal: '165-PERSON-000007', figure: 'Shaykh Muhammad Hasbullah Madura',
  },
]

const CENTERS_NOTE = 'Jaringan pusat TQN Jawa — Suryalaya · Rejoso · Mranggen · Pangentongan'

export async function seedSanad(prisma: PrismaClient) {
  let created = 0
  const idByGlobal: Record<string, string> = {}
  for (const g of [
    SRC_BLUEPRINT, SRC_FATH,
    '165-PERSON-000004', '165-PERSON-000005', '165-PERSON-000006', '165-PERSON-000007',
    '165-SANAD-000001', '165-SANAD-000002', '165-SANAD-000003',
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
        changedBy: 'seed-sanad', reason: 'Restorasi ber-sumber (Task 30) — Master Blueprint §3.4–3.5.',
      },
    })
    await prisma.auditLog.create({
      data: { actor: 'seed-sanad', action: 'CREATE', target: e.globalId, detail: `Entity ${e.type} direstorasi dari Master Blueprint §3.4–3.5 (permintaan Founder).` },
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

  // 3) mata rantai — 3 simpul per jalur (Sambas → tokoh → [ MATA BLOK ] → jaringan pusat)
  for (const row of sanadLinkRows) {
    const sanadId = idByGlobal[row.sanad]
    if (!sanadId) continue
    const personId = idByGlobal[row.figureGlobal]
    const existing = await prisma.sanadLink.count({ where: { sanadEntityId: sanadId } })
    if (existing > 0) continue
    await prisma.sanadLink.createMany({
      data: [
        {
          sanadEntityId: sanadId, order: 1,
          fromName: 'Shaykh Ahmad Khatib Sambas', toName: row.figure,
          personEntityId: personId,
          eraNote: 'Abad ke-19 — sintesis Qadiriyah wa Naqsyabandiyah',
          evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
          sourceRef: `${SRC_BLUEPRINT} §3.4–3.5`,
          context: 'Dinamai dalam genealogi TQN pada Blueprint yang didepositkan sebagai jalur transmisi utama ke Jawa. BUKAN klaim ijazah terverifikasi.',
        },
        {
          sanadEntityId: sanadId, order: 2,
          fromName: row.figure, toName: '[ MATA BLOK ]',
          eraNote: 'Generasi antara — belum terekam',
          evidenceLevel: 'F', verificationStatus: 'UNVERIFIED',
          context: 'Mata rantai antara belum terekam dalam sumber yang dapat diakses — ditandai jujur, tidak pernah diprediksi. Menunggu deposit dossier/ijazah (mis. Dossier 021 Ahmad Khatib Sambas).',
        },
        {
          sanadEntityId: sanadId, order: 3,
          fromName: '[ MATA BLOK ]', toName: CENTERS_NOTE,
          eraNote: 'Abad ke-19–20',
          evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
          sourceRef: `${SRC_BLUEPRINT} §3.5`,
          context: '§3.5: "followed by several major centers in Java" — Blueprint mencatat jaringan, bukan pemetaan per-jalur; 165 tidak mengklaim pemetaan spesifik.',
        },
      ],
    })
    await prisma.auditLog.create({
      data: { actor: 'seed-sanad', action: 'CREATE', target: row.sanad, detail: 'SanadLink (3 mata, display-only) direstorasi — simpul [ MATA BLOK ] jujur.' },
    })
  }

  // 4) klaim sintesis dua silsilah — corroboration jujur (E → didukung pula deposit B)
  const clm = await prisma.entity.findUnique({ where: { globalId: '165-CLM-000001' } })
  const blueprintId = idByGlobal[SRC_BLUEPRINT]
  if (clm && blueprintId) {
    const dup = await prisma.claimSource.findFirst({
      where: { claimEntityId: clm.id, sourceEntityId: blueprintId, stance: 'SUPPORTED_BY' },
    })
    if (!dup) {
      await prisma.claimSource.create({
        data: { claimEntityId: clm.id, sourceEntityId: blueprintId, stance: 'SUPPORTED_BY', note: '§3.4: sintesis Qadiriyah wa Naqsyabandiyah tercatat dalam Blueprint yang didepositkan — memperkuat dukungan agregat komunitas (E) dengan deposit Level B.' },
      })
      await prisma.entity.update({
        where: { id: clm.id },
        data: {
          evidenceLevel: 'B', verificationStatus: 'DOCUMENTED',
          summary: 'Statement under review: "TQN Qodiriah Naqsabandiyah combines the Qadiriyya and Naqshbandiyya lineages." Supported by aggregate community accounts (Level E) and now corroborated by the deposited Master Blueprint §3.4 (Level B, DOCUMENTED), which records the Qadiriyah wa Naqsyabandiyah synthesis formulated by Shaykh Ahmad Khatib Sambas. Scholarly source review continues.',
          summaryId: 'Pernyataan yang diperiksa: "TQN Qodiriah Naqsabandiyah menggabungkan silsilah Qadiriyya dan Naqshbandiyya." Didukung catatan agregat komunitas (Level E) dan kini tercorroborasi Master Blueprint §3.4 yang didepositkan (Level B, DOCUMENTED), yang mencatat sintesis Qadiriyah wa Naqsyabandiyah yang dirumuskan Shaykh Ahmad Khatib Sambas. Tinjauan sumber ilmiah berlanjut.',
        },
      })
      await prisma.versionSnapshot.create({
        data: {
          entityId: clm.id, version: 2,
          snapshot: JSON.stringify({ globalId: '165-CLM-000001', evidenceLevel: 'B', verificationStatus: 'DOCUMENTED' }),
          changedBy: 'seed-sanad', reason: 'Corroboration: deposit Master Blueprint §3.4 (Task 30).',
        },
      })
      await prisma.auditLog.create({
        data: { actor: 'seed-sanad', action: 'UPDATE', target: '165-CLM-000001', detail: 'Corroborated by 165-SRC-000003 §3.4; E → B (DOCUMENTED).' },
      })
    }
  }

  console.log(`seed-sanad: ${created} entitas baru, relasi/mata/klaim dicek idempoten.`)
  return created
}

/* dijalankan langsung: bun prisma/seed-sanad.ts */
const isDirect = process.argv[1]?.includes('seed-sanad')
if (isDirect) {
  const prisma = new PrismaClient()
  seedSanad(prisma)
    .then(() => console.log('Restorasi sanad selesai — display-only, ber-sumber, MATA BLOK jujur.'))
    .finally(() => prisma.$disconnect())
}
