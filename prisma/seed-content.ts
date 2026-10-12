/**
 * 165 — CONTENT SEED (additive, idempotent — never wipes existing data)
 *
 * Phase 15: Founder-directed content filling — "TQN 165 global dan sejarahnya
 * yang lengkap". Records the institutional history of the TQN tradition with
 * web-researched sources, each captured under research/ (P9 corpus).
 *
 * Epistemic policy (NON-NEGOTIABLE, per Master Build Directive):
 *  - Every new entity carries evidenceLevel + verificationStatus + a source trail.
 *  - Sanad Safety preserved: NO STUDENT_OF / TEACHER_OF edges between chain
 *    figures, NO SanadLink rows. Chains remain display-only in src/lib/sanad-data.ts.
 *  - A real competing-source situation (Khatib Sambas death year 1878 vs 1875)
 *    is recorded as a CLAIM with SUPPORTED_BY / DISPUTED_BY stances — shown
 *    side-by-side, never adjudicated by the system.
 *  - Enrichments of existing entities are additive: snapshot + audit, never silent.
 *  - Tradition is never presented as fact; where only community records exist
 *    the record stays at E / TRADITIONAL_ACCOUNT.
 *
 * Run: bun prisma/seed-content.ts   (after prisma/seed.ts + prisma/seed-sanad.ts)
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type SeedRow = {
  globalId: string; slug: string; type: string; primaryName: string;
  subtitle?: string; summary?: string; summaryId?: string; summaryAr?: string;
  evidenceLevel: string; verificationStatus: string;
  startDate?: string; startDatePrecision?: string; endDate?: string; endDatePrecision?: string;
  latitude?: number; longitude?: number; region?: string;
  details?: Record<string, unknown>;
  names?: { name: string; language: string; kind: string; note?: string }[];
}

const T = { DAY: 'DAY', YEAR: 'YEAR', CENTURY: 'CENTURY' }

// ---------------------------------------------------------------------------
// NEW ENTITIES (39)
// ---------------------------------------------------------------------------

const rows: SeedRow[] = [
  // ================= SOURCES (web-researched corpus, captured under research/) =================
  {
    globalId: '165-SRC-000004', slug: 'suryalaya-official-tqn-history', type: 'SOURCE',
    primaryName: 'Sejarah Thariqah Qadiriyah Naqsyabandiyah — situs resmi Pondok Pesantren Suryalaya',
    subtitle: 'Official institutional record of the Suryalaya branch (suryalaya.org)',
    summary: 'The official institutional history page of Pondok Pesantren Suryalaya: the network of deputies of Syaikh Ahmad Khatib (including Syaikh Abdul Karim of Banten), the continuation of leadership by Syaikh Tholhah bin Talabudin in Trusmi, Cirebon after 1878, the khirqah of Abdullah Mubarok "Abah Sepuh" at age 72, the founding of the pesantren on 7 Rajab 1323 H / 5 September 1905, and the succession of KH. A. Shohibulwafa Tajul Arifin "Abah Anom" with wakil talqin across ±35 regions including Singapore and Malaysia.',
    summaryId: 'Halaman sejarah resmi Pondok Pesantren Suryalaya: jaringan wakil Syaikh Ahmad Khatib (termasuk Syaikh Abdul Karim dari Banten), penerusan kepemimpinan oleh Syaikh Tholhah bin Talabudin di Trusmi, Cirebon setelah 1878, khirqah Abdullah Mubarok "Abah Sepuh" pada usia 72 tahun, pendirian pesantren pada 7 Rajab 1323 H / 5 September 1905, dan suksesi KH. A. Shohibulwafa Tajul Arifin "Abah Anom" dengan wakil talqin tersebar di ±35 wilayah termasuk Singapura dan Malaysia.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: {
      sourceType: 'INSTITUTIONAL_OFFICIAL',
      publisher: 'suryalaya.org — situs resmi Pondok Pesantren Suryalaya',
      url: 'https://www.suryalaya.org/tqn2.html',
      accessed: '2026-09-29',
      capture: 'research/p9l-suryalaya-tqn2.json',
      sanadSourceRef: 'S2',
      note: 'Mirror of sanad source S2 as a first-class Source entity so institutional history can cite it.',
    },
  },
  {
    globalId: '165-SRC-000005', slug: 'abdul-karim-al-bantani-reference', type: 'SOURCE',
    primaryName: 'Syekh Abdul Karim Mursyid Tarekat dari Banten · Abdul Karim al-Bantani',
    subtitle: 'Published reference (NU Online Banten · Wikipedia id) — mirror of sanad source S8',
    summary: 'Published background on Syekh Abdul Karim al-Bantani (#35 in the recorded Bantani line): mursyid TQN of 19th-century Banten; the Indonesian Wikipedia article describes him as the last mursyid to unite the leadership of the whole TQN branch; NU Online profiles him as a mursyid from Banten.',
    summaryId: 'Latar belakang terbitan tentang Syekh Abdul Karim al-Bantani (#35 pada jalur Bantani yang terekam): mursyid TQN abad ke-19 dari Banten; Wikipedia Indonesia menyebutnya mursyid terakhir yang mempersatukan kepemimpinan seluruh cabang TQN; NU Online memprofilkannya sebagai mursyid dari Banten.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: {
      sourceType: 'PUBLISHED_REFERENCE',
      publisher: 'NU Online Banten · Wikipedia (id)',
      url: 'https://id.wikipedia.org/wiki/Abdul_Karim_al-Bantani',
      accessed: '2026-09-29',
      capture: 'research/p9a-sambas-search.json · research/p9h-anom-search.json',
      sanadSourceRef: 'S8',
    },
  },
  {
    globalId: '165-SRC-000006', slug: 'asnawi-caringin-academic-excerpt', type: 'SOURCE',
    primaryName: 'Pengaruh Syekh Asnawi di Caringin — kutipan akademik (Scribd)',
    subtitle: 'Scholarly excerpt providing dating for the Al-Bantani terminal mursyid — mirror of sanad source S4',
    summary: 'Scholarly excerpt (thesis/academic work hosted on Scribd) that cites "Syekh Ahmad Sukanta Salmin Labuan al-Banteni RA (1935 M/1356 H – 2015 M/1436 H)" — providing the dating for the Al-Bantani terminal mursyid of the recorded jalur.',
    summaryId: 'Kutipan akademik (karya ilmiah di Scribd) yang mengutip "Syekh Ahmad Sukanta Salmin Labuan al-Banteni RA (1935 M/1356 H – 2015 M/1436 H)" — memberikan penanggalan bagi mursyid terminal jalur Al-Bantani yang terekam.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: {
      sourceType: 'SCHOLARLY_EXCERPT',
      publisher: 'Scribd — skripsi/tesis akademik',
      url: 'https://id.scribd.com/document/pengaruh-syekh-asnawi-caringin',
      accessed: '2026-09-29',
      sanadSourceRef: 'S4',
    },
  },
  {
    globalId: '165-SRC-000007', slug: 'khatib-sambas-scholarly-corpus', type: 'SOURCE',
    primaryName: 'Korpora akademik Ahmad Khatib Sambas — sitasi tingkat judul',
    subtitle: 'Title-level scholarly citations captured from web research (P9 corpus)',
    summary: 'Corpus of title-level academic citations on Ahmad Khatib Sambas gathered during the Phase 15 source review, including the academic work "Latar Belakang Sosial Politik Tarekat Qadiriyah wa Naqsyabandiyah Ahmad Khatib Sambas (1802-1875)" and "Petunjuk Baru Silsilah Ahmad Khatib Sambas: Tiga Teks" (academia.edu). Honest limitation: citations are title-level captures from search results; full texts await deposit and formal collation.',
    summaryId: 'Korpora sitasi akademik tingkat judul tentang Ahmad Khatib Sambas hasil telaah sumber Fase 15, termasuk karya akademik "Latar Belakang Sosial Politik Tarekat Qadiriyah wa Naqsyabandiyah Ahmad Khatib Sambas (1802-1875)" dan "Petunjuk Baru Silsilah Ahmad Khatib Sambas: Tiga Teks" (academia.edu). Keterbatasan yang diakui: sitasi tingkat judul dari tangkapan hasil pencarian; teks penuh menunggu deposit dan kolasi formal.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: {
      sourceType: 'SCHOLARLY_CORPUS',
      citations: [
        'Latar Belakang Sosial Politik Tarekat Qadiriyah wa Naqsyabandiyah Ahmad Khatib Sambas (1802-1875) — judul karya akademik',
        'Petunjuk Baru Silsilah Ahmad Khatib Sambas: Tiga Teks — academia.edu',
      ],
      capture: 'research/p9a-sambas-search.json',
      accessed: '2026-09-29',
      note: 'TITLE-LEVEL citations only. The 1802-1875 life range comes from an academic title; the official Suryalaya record gives death year 1878 — the conflict is recorded as claim 165-CLM-000004.',
    },
  },
  {
    globalId: '165-SRC-000008', slug: 'eponym-founders-encyclopedic-corpus', type: 'SOURCE',
    primaryName: 'Korpora ensiklopedis pendiri eponim — al-Jilani & Baha\u2019 al-Din Naqshband',
    subtitle: 'Encyclopedic reference corpus on the two eponym founders (Qadiriyya · Naqshbandiyya)',
    summary: 'Encyclopedic reference corpus on the two eponym founders: Abd al-Qadir al-Jilani (1077–1166), Hanbali jurist of Gilan who settled in Baghdad, accepted as founder of the Qadiriyya; Khvaja Baha\u2019 al-Din Naqshband (1318–1389) of Bukhara, representative of the Central Asian Khwajagan current, accepted posthumously as the eponym of the Naqshbandiyya.',
    summaryId: 'Korpora referensi ensiklopedis tentang dua pendiri eponim: Abd al-Qadir al-Jilani (1077–1166), ulama Hanbali dari Gilan yang mukim di Baghdad, diakui sebagai pendiri Qadiriyya; Khvaja Baha\u2019 al-Din Naqshband (1318–1389) dari Bukhara, perwakilan arus Khwajagan Asia Tengah, diakui sebagai eponim Naqshbandiyya secara anumerta.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: {
      sourceType: 'ENCYCLOPEDIC_CORPUS',
      items: [
        'Qadiri Order reference — founder Abd al-Qadir al-Gilani (1077–1166), Hanbali',
        'Encyclopaedia-style entry "Naqshband, Baha\u2019 al-Din" — academia.edu',
        'Wikidata: Baha\u2019 al-Din Naqshband (1318–1389), founder of the Naqshbandi order',
      ],
      capture: 'research/p9c-jilani-search.json · research/p9d-naqshband-search.json',
      accessed: '2026-09-29',
    },
  },
  {
    globalId: '165-SRC-000009', slug: 'bruinessen-1992-bibliographic', type: 'SOURCE',
    primaryName: 'Martin van Bruinessen — Tarekat Naqsyabandiyah di Indonesia (Mizan, 1992) — catatan bibliografis',
    subtitle: 'Bibliographic record of the standard scholarly survey, verified through multiple citations',
    summary: 'Bibliographic record of the standard scholarly survey of the Naqshbandiyya in Indonesia: Martin van Bruinessen, "Tarekat Naqsyabandiyah di Indonesia: Survei Historis, Geografis dan Sosiologis" (Bandung: Mizan, 1992) — verified through multiple independent scholarly citations captured during Phase 15 research; the survey covers TQN Suryalaya (cited at p. 91 in the captured literature).',
    summaryId: 'Catatan bibliografis survei ilmiah standar tentang Naqsyabandiyah di Indonesia: Martin van Bruinessen, "Tarekat Naqsyabandiyah di Indonesia: Survei Historis, Geografis dan Sosiologis" (Bandung: Mizan, 1992) — terverifikasi melalui berbagai sitasi ilmiah independen hasil riset Fase 15; survei tersebut membahas TQN Suryalaya (disitasi hlm. 91 dalam literatur yang ditangkap).',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '1992', startDatePrecision: T.YEAR,
    details: {
      sourceType: 'BIBLIOGRAPHIC',
      citation: 'Martin van Bruinessen, Tarekat Naqsyabandiyah di Indonesia: Survei Historis, Geografis dan Sosiologis (Bandung: Mizan, 1992).',
      capture: 'research/p9g-bruinessen-search.json',
      accessed: '2026-09-29',
    },
  },
  {
    globalId: '165-SRC-000010', slug: 'suryalaya-community-biographical-corpus', type: 'SOURCE',
    primaryName: 'Korpora biografis komunitas Suryalaya',
    subtitle: 'Community-recorded biographical dates (blogs & community pages) — weak by design',
    summary: 'Community-recorded biographical corpus on Suryalaya figures: the community blog record of the birth of Syekh A. Shohibulwafa Tajul Arifin "Abah Anom" in Suryalaya on 1 January 1915, and related community pages. Explicitly marked WEAK: dates are kept as community records and cross-checked (age 96 at death on 5 September 2011 is internally consistent) but are not elevated beyond their evidence.',
    summaryId: 'Korpora biografis komunitas tentang tokoh Suryalaya: catatan blog komunitas atas kelahiran Syekh A. Shohibulwafa Tajul Arifin "Abah Anom" di Suryalaya pada 1 Januari 1915, dan halaman komunitas terkait. Ditandai LEMAH secara eksplisit: tanggal disimpan sebagai catatan komunitas dan disilang-cek (usia 96 saat wafat 5 September 2011 konsisten secara internal) namun tidak dinaikkan melampaui buktinya.',
    evidenceLevel: 'E', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: {
      sourceType: 'COMMUNITY',
      items: [
        'rasubhan.blogspot.com — "Syekh A Shohibulwafa Tajul Arifin ... dilahirkan di Suryalaya tanggal 1 Januari 1915"',
        'jambi-nimbuzz-clubz.blogspot.com — 1939 membantu ayahnya mengajar di Suryalaya; 1945–1949 ikut berjuang',
      ],
      capture: 'research/p9b-suryalaya-search.json',
      accessed: '2026-09-29',
      note: 'WEAK SOURCE — community dates stay at E; they corroborate but never outrank C sources.',
    },
  },
  {
    globalId: '165-SRC-000011', slug: 'kadzim-asnawi-news-profile', type: 'SOURCE',
    primaryName: 'Syaikh Tubagus Ahmad Kadzim Asnawi — profil media (Pandeglang News)',
    subtitle: 'News profile of the Banten continuity guardian — mirror of sanad source S7',
    summary: 'News profile of Syaikh Tubagus Ahmad Kadzim Asnawi — "ulama sufi yang berperan penting menjaga kesinambungan sanad keilmuan dan Tarekat Qodiriyah wa Naqsyabandiyah di tanah Banten" (#38 in the recorded list). The page is bot-protected; title/snippet recorded.',
    summaryId: 'Profil berita Syaikh Tubagus Ahmad Kadzim Asnawi — "ulama sufi yang berperan penting menjaga kesinambungan sanad keilmuan dan Tarekat Qodiriyah wa Naqsyabandiyah di tanah Banten" (#38 pada daftar yang terekam). Halaman dilindungi bot; judul/kutipan yang direkam.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: {
      sourceType: 'MEDIA_PROFILE',
      publisher: 'Pandeglang News (media)',
      url: 'https://www.pandeglangnews.co.id',
      accessed: '2026-09-29',
      sanadSourceRef: 'S7',
      note: 'Bot-protected page — title/snippet-level capture recorded honestly.',
    },
  },

  // ================= PERSONS =================
  {
    globalId: '165-PERSON-000004', slug: 'ahmad-khatib-sambas', type: 'PERSON',
    primaryName: 'Syekh Ahmad Khatib bin Abd al-Ghaffar al-Sambas',
    subtitle: 'Penyatu Qodiriyah & Naqsabandiyah (abad ke-19) · titik temu silsilah #34',
    summary: 'Sufi master from Sambas (West Kalimantan) who taught in Mecca and is accepted as the articulator of the combined order Qadiriyah wa Naqsyabandiyah in the 19th century. In the recorded founder list (S1) and in the official Suryalaya numbering he stands at rank #34 — the convergence point of all three recorded jalur. After his death (1878 per the official Suryalaya record; 1875 per an academic title — recorded as a disputed claim), the order\u2019s development continued through his deputies, notably Syaikh Tholhah bin Talabudin in Cirebon and Syaikh Abdul Karim in Banten.',
    summaryId: 'Guru sufi asal Sambas (Kalimantan Barat) yang mengajar di Makkah dan diakui sebagai perumus tarekat gabungan Qadiriyah wa Naqsyabandiyah pada abad ke-19. Dalam daftar pendiri yang terekam (S1) dan penomoran resmi Suryalaya ia berada pada urutan #34 — titik temu ketiga jalur yang terekam. Setelah wafatnya (1878 menurut catatan resmi Suryalaya; 1875 menurut judul akademik — direkam sebagai klaim yang bersengketa), pengembangan tarekat dilanjutkan para wakilnya, terutama Syaikh Tholhah bin Talabudin di Cirebon dan Syaikh Abdul Karim di Banten.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '1802', startDatePrecision: T.YEAR, endDate: '1878', endDatePrecision: T.YEAR,
    details: {
      recordPolicy: 'Historical/institutional record — NOT a sanad-chain row. The 39-level chain remains display-only in /api/sanad.',
      birth: '1802 menurut judul karya akademik (sitasi tingkat judul)',
      deathConflict: '1878 (suryalaya.org, resmi) vs 1875 (judul akademik) — see 165-CLM-000004',
      work: 'Mengajar di Makkah; murid-murid dan wakilnya menyebarkan TQN ke Nusantara',
      sources: ['165-SRC-000004', '165-SRC-000007', '165-SRC-000009'],
    },
    names: [
      { name: 'Ahmad Khatib ibn Abd al-Ghaffar al-Sambas', language: 'en', kind: 'VARIANT' },
      { name: 'Khatib Sambas', language: 'id', kind: 'ALIAS', note: 'bentuk pendek yang lazim dipakai literatur' },
      { name: 'Syaikh KH. Maulana Ahmad Khotib Sambas', language: 'id', kind: 'VARIANT', note: 'bentuk cetak pada daftar silsilah S1' },
    ],
  },
  {
    globalId: '165-PERSON-000005', slug: 'abah-sepuh-suryalaya', type: 'PERSON',
    primaryName: 'Syaikh Abdullah Mubarok bin Nur Muhammad "Abah Sepuh"',
    subtitle: 'Pendiri Pondok Pesantren Suryalaya (1905) · silsilah ke-36',
    summary: 'Student of Syaikh Tholhah bin Talabudin ("Mama Guru Agung", ke-35) in Trusmi, Kalisapu, Cirebon. After long study he received the khirqah at the age of 72 and founded Pondok Pesantren Suryalaya on 7 Rajab 1323 H / 5 September 1905, during the colonial era. Known among the ikhwan as "Abah Sepuh" (the elder). His fifth son KH. A. Shohibulwafa Tajul Arifin was appointed wakil talqin and later succeeded him as mursyid.',
    summaryId: 'Murid Syaikh Tholhah bin Talabudin ("Mama Guru Agung", ke-35) di Trusmi, Kalisapu, Cirebon. Setelah lama berguru, beliau menerima khirqah pada usia 72 tahun dan mendirikan Pondok Pesantren Suryalaya pada 7 Rajab 1323 H / 5 September 1905, pada masa kolonial. Dikenal di kalangan ikhwan sebagai "Abah Sepuh". Putra kelimanya, KH. A. Shohibulwafa Tajul Arifin, diangkat sebagai wakil talqin dan kemudian meneruskan kepemimpinan sebagai mursyid.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: {
      recordPolicy: 'Historical/institutional record — NOT a sanad-chain row.',
      khirqah: 'usia 72 tahun, dari Syaikh Tholhah bin Talabudin (silsilah ke-35)',
      founding: '7 Rajab 1323 H / 5 September 1905 — Pondok Pesantren Suryalaya',
      sources: ['165-SRC-000004'],
    },
    names: [
      { name: 'Abah Sepuh', language: 'id', kind: 'ALIAS', note: 'panggilan para ikhwan — "yang tua"' },
      { name: 'Abdullah Mubarak bin Nur Muhammad', language: 'id', kind: 'VARIANT', note: 'ejaan variant pada catatan resmi' },
    ],
  },
  {
    globalId: '165-PERSON-000006', slug: 'abah-anom-suryalaya', type: 'PERSON',
    primaryName: 'Syekh KH. Ahmad Shohibulwafa Tajul Arifin "Abah Anom"',
    subtitle: 'Mursyid penerus Suryalaya · silsilah ke-37 · w. 5 September 2011',
    summary: 'Fifth son of Abah Sepuh; appointed wakil talqin while still young — the ikhwan called him "Abah Anom" (Kyai Muda). Succeeded his father as mursyid of TQN centered at Pondok Pesantren Suryalaya and led the establishment of wakil talqin across ±35 regions, including Singapore and Malaysia. Community records give his birth as 1 January 1915 in Suryalaya and his passing on 5 September 2011 at the age of 96 (internally consistent). Succession after his passing was publicly questioned by different parties — 165 records the difference without taking sides and asserts no silsilah ke-38.',
    summaryId: 'Putra kelima Abah Sepuh; diangkat sebagai wakil talqin pada usia muda — para ikhwan menyebutnya "Abah Anom" (Kyai Muda). Meneruskan ayahnya sebagai mursyid TQN yang berpusat di Pondok Pesantren Suryalaya dan membina wakil talqin tersebar di ±35 wilayah, termasuk Singapura dan Malaysia. Catatan komunitas menyebut kelahirannya 1 Januari 1915 di Suryalaya dan wafatnya 5 September 2011 pada usia 96 tahun (konsisten secara internal). Suksesi setelah wafatnya dipersoalkan secara publik oleh pihak-pihak berbeda — 165 mencatat perbedaan itu tanpa memihak dan tidak menegaskan silsilah ke-38.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '1915', startDatePrecision: T.YEAR, endDate: '2011-09-05', endDatePrecision: T.DAY,
    details: {
      recordPolicy: 'Historical/institutional record — NOT a sanad-chain row.',
      birth: '1 Januari 1915 di Suryalaya (catatan komunitas — Level E, konsisten dengan usia 96 saat wafat)',
      death: '5 September 2011 (kesaksian komunitas; koroborasi usia)',
      successionNote: 'Penerus setelah Abah Anom dipersoalkan publik — direkam tanpa memihak (lihat 165-EVT-000009 & /api/sanad).',
      communityWork: '1945–1949 ikut perjuangan kemerdekaan (catatan komunitas)',
      sources: ['165-SRC-000004', '165-SRC-000010'],
    },
    names: [
      { name: 'Abah Anom', language: 'id', kind: 'ALIAS', note: '"Kyai Muda" — diangkat pada usia ±35 tahun' },
      { name: 'Syekh Shohibulwafa\u2019 Tajul Arifin', language: 'id', kind: 'VARIANT' },
      { name: 'Kiai Sohibul Wafa Tajul Arifin', language: 'id', kind: 'VARIANT', note: 'bentuk sitasi akademik' },
    ],
  },
  {
    globalId: '165-PERSON-000007', slug: 'abdul-karim-al-bantani', type: 'PERSON',
    primaryName: 'Syekh KH. Agung Abdul Karim al-Bantani',
    subtitle: 'Wakil Ahmad Khatib di Banten · mursyid TQN abad ke-19 · ke-35 jalur Bantani',
    summary: 'Deputy of Syaikh Ahmad Khatib charged with Banten — named "Syaikh Abdul Karim dari Banten" in the official Suryalaya record of the founder\u2019s deputy network. The recorded Bantani line (S1) places him at rank #35 (Tanara). Published references describe him as the mursyid of TQN in 19th-century Banten, and the Indonesian Wikipedia article records him as the last mursyid to unite the leadership of the whole TQN branch.',
    summaryId: 'Wakil Syaikh Ahmad Khatib yang memegang Banten — tercantum sebagai "Syaikh Abdul Karim dari Banten" pada catatan resmi Suryalaya tentang jaringan wakil pendiri tarekat. Jalur Bantani yang terekam (S1) menempatkannya pada urutan #35 (Tanara). Referensi terbitan menggambarkannya sebagai mursyid TQN abad ke-19 di Banten, dan artikel Wikipedia Indonesia mencatatnya sebagai mursyid terakhir yang mempersatukan kepemimpinan seluruh cabang TQN.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '19', startDatePrecision: T.CENTURY,
    details: {
      recordPolicy: 'Historical/institutional record — NOT a sanad-chain row.',
      role: 'Wakil Ahmad Khatib untuk Banten; mursyid TQN abad ke-19',
      place: 'Tanara, Banten',
      sources: ['165-SRC-000004', '165-SRC-000005'],
    },
    names: [
      { name: 'Syaikh Abdul Karim dari Banten', language: 'id', kind: 'VARIANT', note: 'bentuk pada catatan resmi Suryalaya' },
      { name: 'Syekh KH. Agung Abdul Karim', language: 'id', kind: 'VARIANT', note: 'bentuk cetak pada S1 (#35)' },
    ],
  },
  {
    globalId: '165-PERSON-000008', slug: 'ahmad-kadzim-asnawi', type: 'PERSON',
    primaryName: 'Syaikh Tubagus Haji Ahmad Kadzim Asnawi',
    subtitle: 'Ulama sufi besar Banten · penjaga kesinambungan TQN · ke-38 jalur Bantani',
    summary: 'Banten sufi master recorded at rank #38 of the founder-authored list (Menes, Banten). A news profile describes him as a great Sufi scholar who played an important role in maintaining the continuity of the scholarly sanad and TQN in the land of Banten. Independent community records corroborate the recorded transmission toward the Karawang terminal.',
    summaryId: 'Guru sufi Banten yang terekam pada urutan #38 daftar susunan pendiri (Menes, Banten). Profil media menggambarkannya sebagai ulama sufi yang berperan penting menjaga kesinambungan sanad keilmuan dan Tarekat Qodiriyah wa Naqsyabandiyah di tanah Banten. Catatan komunitas yang independen menguatkan jalur periwayatan menuju terminal Karawang.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    region: 'Menes, Banten',
    details: {
      recordPolicy: 'Historical/institutional record — NOT a sanad-chain row.',
      place: 'Menes, Banten',
      role: 'Menjaga kesinambungan TQN di Banten; guru kedua terminal yang terekam (#39a, #39b) menurut S1',
      sources: ['165-SRC-000011'],
    },
    names: [
      { name: 'Al Faqir Tubagus Haji Ahmad Kadzim Asnawi', language: 'id', kind: 'VARIANT', note: 'bentuk cetak pada S1 (#38)' },
      { name: 'Ahmad Kazim bin Asnawi', language: 'id', kind: 'VARIANT', note: 'bentuk pada rekaman komunitas (S5)' },
    ],
  },
  {
    globalId: '165-PERSON-000009', slug: 'ahmad-sukanta-salmin', type: 'PERSON',
    primaryName: 'Syekh Ahmad Sukanta Salmin Labuan al-Banteni',
    subtitle: 'Mursyid terminal jalur Al-Bantani · 1935 – 2015 (M/1356 H – 1436 H)',
    summary: 'Terminal mursyid of the recorded Al-Bantani jalur (#39b), of Kaduparasi, Labuan, Pandeglang, Banten. A scholarly excerpt cites him as "Syekh Ahmad Sukanta Salmin Labuan al-Banteni RA (1935 M/1356 H – 2015 M/1436 H)"; community records associate the Pandeglang context with the TQN Asnawiyah line. Known among the community as "Abah Haji Sukanta".',
    summaryId: 'Mursyid terminal jalur Al-Bantani yang terekam (#39b), dari Kaduparasi, Labuan, Pandeglang, Banten. Kutipan akademik menyebutnya sebagai "Syekh Ahmad Sukanta Salmin Labuan al-Banteni RA (1935 M/1356 H – 2015 M/1436 H)"; catatan komunitas mengaitkan konteks Pandeglang dengan linimasa TQN Asnawiyah. Dikenal di komunitas sebagai "Abah Haji Sukanta".',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '1935', startDatePrecision: T.YEAR, endDate: '2015', endDatePrecision: T.YEAR,
    region: 'Labuan, Pandeglang, Banten',
    details: {
      recordPolicy: 'Historical/institutional record — NOT a sanad-chain row.',
      dating: '1935 M/1356 H – 2015 M/1436 H (kutipan akademik S4)',
      context: 'TQN Asnawiyah, Pandeglang (rekaman komunitas S6)',
      sources: ['165-SRC-000006'],
    },
    names: [
      { name: 'Abah Haji Sukanta', language: 'id', kind: 'ALIAS', note: 'sebutan pendiri 165' },
      { name: 'Syekh Ahmad Sukanta bin Salmin', language: 'id', kind: 'VARIANT', note: 'bentuk pada rekaman komunitas (S6)' },
    ],
  },
  {
    globalId: '165-PERSON-000010', slug: 'abah-ganda-karawang', type: 'PERSON',
    primaryName: 'Abah Ganda (Cikangkung, Rengasdengklok, Karawang)',
    subtitle: 'Mursyid terminal jalur Karawang · direkam dari komunikasi pendiri (S1)',
    summary: 'Terminal mursyid of the recorded Karawang jalur (#39a) of Majelis Dzikir Tarekat Al-Qodiriyah wa Naqsabandiyah, Dusun Cikangkung Timur, Rengasdengklok, Karawang — as recorded in the founder-authored numbered list (S1, Level B). An independent community discussion cross-checks the recorded transmission ("warid ti ahmad kazim bin asnawi banten"). Beyond the recorded list and community cross-check, no further biographical claims are asserted.',
    summaryId: 'Mursyid terminal jalur Karawang yang terekam (#39a) dari Majelis Dzikir Tarekat Al-Qodiriyah wa Naqsabandiyah, Dusun Cikangkung Timur, Rengasdengklok, Karawang — sebagaimana terekam dalam daftar bernomor susunan pendiri (S1, Level B). Diskusi komunitas yang independen menyilang-cek jalur yang terekam ("warid ti ahmad kazim bin asnawi banten"). Di luar daftar yang terekam dan silang-cek komunitas, tidak ada klaim biografis lain yang ditegaskan.',
    evidenceLevel: 'B', verificationStatus: 'TRADITIONAL_ACCOUNT',
    region: 'Karawang, Jawa Barat',
    details: {
      recordPolicy: 'Historical/institutional record — NOT a sanad-chain row. Graded like the SANAD entities themselves: founder-recorded (B), traditional account.',
      terminalRank: '39a',
      chainSourceRef: '165-SRC-000003',
      communityCrossCheck: 'S5 — Facebook group (public post)',
      sources: ['165-SRC-000003'],
    },
    names: [
      { name: 'Abah Gana Karawang', language: 'id', kind: 'ALIAS', note: 'bentuk cetak pada sumber rantai S1' },
      { name: 'Abah Ganda', language: 'id', kind: 'VARIANT', note: 'ejaan variant pemakaian komunitas' },
    ],
  },
  {
    globalId: '165-PERSON-000011', slug: 'martin-van-bruinessen', type: 'PERSON',
    primaryName: 'Martin van Bruinessen',
    subtitle: 'Antropolog & orientalis — penulis survei tarekat Naqsyabandiyah di Indonesia',
    summary: 'Scholar and author of the standard survey "Tarekat Naqsyabandiyah di Indonesia: Survei Historis, Geografis dan Sosiologis" (Bandung: Mizan, 1992) — a widely cited reference for the history of the Naqshbandiyya and TQN in Indonesia, including the Suryalaya branch. Recorded here strictly as the author of the cited work.',
    summaryId: 'Akademisi dan penulis survei standar "Tarekat Naqsyabandiyah di Indonesia: Survei Historis, Geografis dan Sosiologis" (Bandung: Mizan, 1992) — referensi yang luas disitasi untuk sejarah Naqsyabandiyah dan TQN di Indonesia, termasuk cabang Suryalaya. Direkam di sini secara ketat sebagai penulis karya yang disitasi.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    details: {
      recordPolicy: 'Recorded as author of the cited survey only — no further biographical assertions.',
      sources: ['165-SRC-000009'],
    },
  },
  {
    globalId: '165-PERSON-000012', slug: 'sri-mulyati', type: 'PERSON',
    primaryName: 'Sri Mulyati',
    subtitle: 'Penulis "Tarekat-Tarekat Muktabarah di Indonesia" (2004)',
    summary: 'Author of "Tarekat-Tarekat Muktabarah di Indonesia" (2004), a cited scholarly survey of the recognized (mu\u2019tabarah) tariqa orders of Indonesia including Qadiriyah wa Naqsyabandiyah. Recorded from academic bibliographic citations captured during Phase 15 research; publisher data awaits deposit.',
    summaryId: 'Penulis "Tarekat-Tarekat Muktabarah di Indonesia" (2004), survei ilmiah yang disitasi tentang tarekat-tarekat mu\u2019tabarah di Indonesia termasuk Qadiriyah wa Naqsyabandiyah. Direkam dari sitasi bibliografis akademik hasil riset Fase 15; data penerbit menunggu deposit.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '2004', startDatePrecision: T.YEAR,
    details: {
      recordPolicy: 'Recorded as author of the cited work only.',
      bibliography: 'Mulyati, Sri. 2004. Tarekat-Tarekat Muktabarah di Indonesia.',
      capture: 'research/p9f-tqn-java-search.json',
    },
  },

  // ================= INSTITUTION =================
  {
    globalId: '165-INST-000002', slug: 'pondok-pesantren-suryalaya', type: 'INSTITUTION',
    primaryName: 'Pondok Pesantren Suryalaya',
    subtitle: 'Institusi induk TQN Suryalaya — pendiri 7 Rajab 1323 H / 5 September 1905',
    summary: 'The pesantren founded by Syaikh Abdullah Mubarok bin Nur Muhammad "Abah Sepuh" on 7 Rajab 1323 H / 5 September 1905, during the colonial era. It became the institutional anchor that allowed TQN to flourish where earlier outreach outside Java had failed for lack of a permanent institution. Under mursyid KH. A. Shohibulwafa Tajul Arifin "Abah Anom" its wakil talqin network reached ±35 regions including Singapore and Malaysia. The official site suryalaya.org publishes its institutional history.',
    summaryId: 'Pesantren yang didirikan Syaikh Abdullah Mubarok bin Nur Muhammad "Abah Sepuh" pada 7 Rajab 1323 H / 5 September 1905, pada masa kolonial. Ia menjadi jangkar kelembagaan yang membuat TQN dapat berkembang — sesuatu yang gagal dicapai dakwah awal di luar Jawa karena tiadanya lembaga permanen. Di bawah mursyid KH. A. Shohibulwafa Tajul Arifin "Abah Anom", jaringan wakil talqinnya menjangkau ±35 wilayah termasuk Singapura dan Malaysia. Situs resmi suryalaya.org menerbitkan sejarah kelembagaannya.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '1905-09-05', startDatePrecision: T.DAY,
    region: 'Panjalu, Jawa Barat, Indonesia',
    details: {
      hijriFounding: '7 Rajab 1323 H',
      founder: '165-PERSON-000005',
      successorMursyid: '165-PERSON-000006',
      officialSite: 'https://www.suryalaya.org',
      wakilTalqinReach: '±35 wilayah, termasuk Singapura dan Malaysia (S2)',
      sources: ['165-SRC-000004'],
    },
    names: [
      { name: 'PP Suryalaya', language: 'id', kind: 'ALIAS' },
      { name: 'Suryalaya', language: 'id', kind: 'VARIANT' },
    ],
  },

  // ================= PLACES =================
  {
    globalId: '165-PLACE-000004', slug: 'baghdad', type: 'PLACE',
    primaryName: 'Baghdad, Irak',
    subtitle: 'Pusat riwayat Qodiriyah — kota al-Jilani mengajar & dimakamkan',
    summary: 'Capital of Iraq and historical center of Islamic scholarship. Abd al-Qadir al-Jilani (1077–1166) settled here at about eighteen years of age, taught as a Hanbali jurist and Sufi master, and is buried here; the Qadiriyya crystallized around his teachings and resting place.',
    summaryId: 'Ibukota Irak dan pusat keilmuan Islam bersejarah. Abd al-Qadir al-Jilani (1077–1166) mukim di sini pada usia ±delapan belas tahun, mengajar sebagai ulama Hanbali dan guru sufi, dan dimakamkan di sini; Qadiriyya terkristalisasi di sekitar ajaran dan tempat peristirahatannya.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    latitude: 33.3152, longitude: 44.3661, region: 'Irak',
    details: { role: 'pusat Qodiriyah; makam al-Jilani', sources: ['165-SRC-000008'] },
  },
  {
    globalId: '165-PLACE-000005', slug: 'bukhara', type: 'PLACE',
    primaryName: 'Bukhara, Asia Tengah (Uzbekistan)',
    subtitle: 'Kota Baha\u2019 al-Din Naqshband — jantung arus Khwajagan',
    summary: 'Historic Central Asian city of scholars. Khvaja Baha\u2019 al-Din Naqshband (1318–1389) was born, worked and is buried in its surroundings; from this Khwajagan milieu the Naqshbandiyya took its name and its characteristic silent dhikr.',
    summaryId: 'Kota ulama Asia Tengah yang bersejarah. Khvaja Baha\u2019 al-Din Naqshband (1318–1389) lahir, berkarya, dan dimakamkan di sekitarnya; dari lingkungan Khwajagan inilah Naqshbandiyya mengambil nama dan ciri dzikir batinnya.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    latitude: 39.7747, longitude: 64.4286, region: 'Uzbekistan',
    details: { role: 'pusat Naqshbandiyya; makam Baha\u2019 al-Din', sources: ['165-SRC-000008'] },
  },
  {
    globalId: '165-PLACE-000006', slug: 'makkah', type: 'PLACE',
    primaryName: 'Makkah, Arab Saudi',
    subtitle: 'Kota tempat Ahmad Khatib Sambas mengajar — kampung tarekat Nusantara',
    summary: 'The holy city where Ahmad Khatib al-Sambas taught and articulated the combined order in the 19th century. The recorded spine (S1) names Makkah alongside several of its ranks (#33, #32), reflecting the Hijaz as the meeting ground of Nusantara tariqa scholarship.',
    summaryId: 'Kota suci tempat Ahmad Khatib al-Sambas mengajar dan merumuskan tarekat gabungan pada abad ke-19. Punggung rantai yang terekam (S1) menyebut Makkah pada beberapa urutannya (#33, #32) — mencerminkan Hijaz sebagai medan pertemuan keilmuan tarekat Nusantara.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    latitude: 21.3891, longitude: 39.8579, region: 'Arab Saudi',
    details: { role: 'pusat pengajaran Khatib Sambas', sources: ['165-SRC-000004', '165-SRC-000003'] },
  },
  {
    globalId: '165-PLACE-000007', slug: 'sambas', type: 'PLACE',
    primaryName: 'Sambas, Kalimantan Barat',
    subtitle: 'Tanah kelahiran Ahmad Khatib Sambas',
    summary: 'Region in West Kalimantan, homeland of Ahmad Khatib al-Sambas. The official Suryalaya record notes that the spread of TQN in Sambas itself was carried by two of his deputies — Syaikh Nuruddin (from the Philippines) and Syaikh Muhammad Sa\u2019ad, a native son of Sambas — and that outside Java the order grew slowly for lack of a permanent institution such as a pesantren.',
    summaryId: 'Wilayah di Kalimantan Barat, tanah kelahiran Ahmad Khatib al-Sambas. Catatan resmi Suryalaya menyebut penyebaran TQN di Sambas sendiri dilakukan dua wakilnya — Syaikh Nuruddin (dari Filipina) dan Syaikh Muhammad Sa\u2019ad, putra asli Sambas — dan bahwa di luar Jawa tarekat berkembang lambat karena tiadanya lembaga permanen seperti pesantren.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    latitude: 1.3699, longitude: 109.2916, region: 'Kalimantan Barat, Indonesia',
    details: { role: 'asal pendiri TQN', sources: ['165-SRC-000004'] },
  },
  {
    globalId: '165-PLACE-000008', slug: 'panjalu', type: 'PLACE',
    primaryName: 'Panjalu, Jawa Barat',
    subtitle: 'Lingkar Pondok Pesantren Suryalaya (Priangan timur)',
    summary: 'The locality of Pondok Pesantren Suryalaya in the eastern Priangan region of West Java. Historical and institutional records associate the pesantren with Panjalu (recorded administratively in the Tasikmalaya area in older sources); the recorded sanad jalur names "Pondok Pesantren Suryalaya, Tasikmalaya".',
    summaryId: 'Lokasi Pondok Pesantren Suryalaya di wilayah Priangan timur, Jawa Barat. Catatan historis dan kelembagaan mengaitkan pesantren dengan Panjalu (secara administratif dicatat di wilayah Tasikmalaya pada sumber-sumber lama); jalur sanad yang terekam menyebut "Pondok Pesantren Suryalaya, Tasikmalaya".',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    region: 'Jawa Barat, Indonesia',
    details: {
      role: 'lokasi Pondok Pesantren Suryalaya',
      adminNote: 'Catatan administratif lama menyebut Tasikmalaya; dibuka untuk pemutakhiran menurut deposit arsip.',
      sources: ['165-SRC-000004'],
    },
  },
  {
    globalId: '165-PLACE-000009', slug: 'banten', type: 'PLACE',
    primaryName: 'Banten',
    subtitle: 'Koridor TQN Banten — Tanara · Menes · Caringin · Cibeber · Labuan · Pandeglang',
    summary: 'Province of Indonesia and the land of the Bantani TQN line: Abdul Karim al-Bantani (Tanara, ke-35), Agung Muhammad Asnawi (Caringin, ke-36 — namesake of the TQN Asnawiyah line), Ahmad Suhari (Cibeber, ke-37), and Ahmad Kadzim Asnawi (Menes, ke-38) who guarded the continuity of the tariqa in Banten, with the recorded terminal at Labuan, Pandeglang (#39b).',
    summaryId: 'Provinsi di Indonesia dan tanah linimasa TQN Bantani: Abdul Karim al-Bantani (Tanara, ke-35), Agung Muhammad Asnawi (Caringin, ke-36 — namesake linimasa TQN Asnawiyah), Ahmad Suhari (Cibeber, ke-37), dan Ahmad Kadzim Asnawi (Menes, ke-38) yang menjaga kesinambungan tarekat di Banten, dengan terminal yang terekam di Labuan, Pandeglang (#39b).',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    latitude: -6.35, longitude: 106.15, region: 'Banten, Indonesia',
    details: {
      role: 'koridor jalur Bantani (rekaman S1) — nama tempat direkam dari sumber, bukan rantai baru',
      corridor: ['Tanara', 'Menes', 'Caringin', 'Cibeber', 'Labuan, Pandeglang'],
      sources: ['165-SRC-000003', '165-SRC-000005', '165-SRC-000011'],
    },
  },
  {
    globalId: '165-PLACE-000010', slug: 'karawang', type: 'PLACE',
    primaryName: 'Karawang, Jawa Barat',
    subtitle: 'Lingkar jalur Karawang — Cikangkung, Rengasdengklok',
    summary: 'Regency of West Java; home of the recorded Karawang jalur terminal — Majelis Dzikir Tarekat Al-Qodiriyah wa Naqsabandiyah, Dusun Cikangkung Timur, Rengasdengklok (#39a in the founder-authored list).',
    summaryId: 'Kabupaten di Jawa Barat; tanah terminal jalur Karawang yang terekam — Majelis Dzikir Tarekat Al-Qodiriyah wa Naqsabandiyah, Dusun Cikangkung Timur, Rengasdengklok (#39a pada daftar susunan pendiri).',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    latitude: -6.3018, longitude: 107.2971, region: 'Jawa Barat, Indonesia',
    details: { role: 'lingkar terminal #39a', sources: ['165-SRC-000003'] },
  },

  // ================= EVENTS =================
  {
    globalId: '165-EVT-000003', slug: 'qadiriyya-crystallization-baghdad', type: 'EVENT',
    primaryName: 'Kekristalan Tarīqa Qādiriyyah di Baghdad',
    subtitle: 'Abad ke-12 — ajaran al-Jilani mengkristal menjadi tarekat',
    summary: 'The crystallization of the Qadiriyya in Baghdad around the teachings and resting place of Abd al-Qadir al-Jilani (1077–1166). From Baghdad the order spread across the Muslim world and became one of the widest-reaching Sufi orders — later one of the two parent currents of TQN.',
    summaryId: 'Kekristalan Qadiriyya di Baghdad di sekitar ajaran dan tempat peristirahatan Abd al-Qadir al-Jilani (1077–1166). Dari Baghdad tarekat ini menyebar ke seluruh dunia Islam dan menjadi salah satu tarekat sufi terluas — kelak salah satu dari dua induk TQN.',
    summaryAr: 'تبلُّور الطَّريقة القادِرِيَّة في بغداد حول تعاليم الإمام عبد القادر الجيلاني (١٠٧٧–١١٦٦م) ومقامه، حتى صارت من أوسع الطُّرق الصوفية انتشارًا، ثم صارت أحد الأصلين لطريقة القادرية والنقشبندية.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '12', startDatePrecision: T.CENTURY,
    details: { sources: ['165-SRC-000008'], relatedTradition: '165-TRAD-000002' },
  },
  {
    globalId: '165-EVT-000004', slug: 'naqshbandiyya-crystallization', type: 'EVENT',
    primaryName: 'Kekristalan Tarīqa Naqshbandiyya di Transoxiana',
    subtitle: 'Abad ke-14 — Baha\u2019 al-Din Naqshband menjadi eponim',
    summary: 'The crystallization of the Naqshbandiyya in the Central Asian Khwajagan milieu. Khvaja Baha\u2019 al-Din Naqshband (1318–1389) of Bukhara came to be accepted posthumously as the order\u2019s eponym; the chain it records reaches further back through the Khwajagan masters. Its silent dhikr (dhikr al-qalb) later met the vocal dhikr of the Qadiriyya in the combined TQN.',
    summaryId: 'Kekristalan Naqshbandiyya dalam lingkungan Khwajagan Asia Tengah. Khvaja Baha\u2019 al-Din Naqshband (1318–1389) dari Bukhara diterima sebagai eponim tarekat secara anumerta; rantai yang direkamnya menjangkau lebih jauh ke belakang melalui para guru Khwajagan. Dzikir batinnya kelak bertemu dzikir jahr Qadiriyya dalam TQN gabungan.',
    summaryAr: 'تبلُّور الطَّريقة النَّقشبَندِيَّة في وسط آسيا ضمن تيار الخواجكان، حتى صار بهاء الدين النقشبند (١٣١٨–١٣٨٩م) اسمًا لها بعد وفاته، وفيها ميزة الذكر الخفي.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '14', startDatePrecision: T.CENTURY,
    details: { sources: ['165-SRC-000008'], relatedTradition: '165-TRAD-000003' },
  },
  {
    globalId: '165-EVT-000005', slug: 'tqn-unification-makkah', type: 'EVENT',
    primaryName: 'Penyatuan Qodiriyah & Naqsabandiyah oleh Ahmad Khatib Sambas',
    subtitle: 'Abad ke-19, Makkah — lahirnya tarekat gabungan',
    summary: 'In 19th-century Mecca, the sufi master from Sambas articulated the combined order Qadiriyah wa Naqsyabandiyah — joining the vocal dhikr line of the Qadiriyya with the silent dhikr line of the Naqshbandiyya. The official Suryalaya record frames this as a 19th-century achievement of a great Indonesian sufi; his students and deputies then carried the combined order across the Nusantara.',
    summaryId: 'Di Makkah abad ke-19, guru sufi dari Sambas merumuskan tarekat gabungan Qadiriyah wa Naqsyabandiyah — menyatukan garis dzikir jahr Qadiriyya dengan garis dzikir batin Naqshbandiyya. Catatan resmi Suryalaya membingkainya sebagai capaian abad ke-19 seorang sufi besar Indonesia; murid-murid dan wakil-wakilnya kemudian membawa tarekat gabungan ini melintasi Nusantara.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '19', startDatePrecision: T.CENTURY,
    details: {
      sources: ['165-SRC-000004', '165-SRC-000007'],
      convergenceNote: 'Pada S1 dan penomoran resmi Suryalaya, Khatib Sambas sama-sama berada di urutan #34 — titik temu ketiga jalur terekam.',
    },
  },
  {
    globalId: '165-EVT-000006', slug: 'wakil-network-spread-tqn', type: 'EVENT',
    primaryName: 'Jaringan wakil Ahmad Khatib & penyebaran TQN',
    subtitle: 'Setelah 1878 — Banten, Cirebon, Madura, Bali, Kedah, Lampung, Palembang, Sambas',
    summary: 'Per the official Suryalaya record, Syaikh Ahmad Khatib appointed many deputies who spread the combined order in their respective regions: Syaikh Abdul Karim of Banten, Syaikh Ahmad Thalhah of Cirebon, Syaikh Ahmad Hasbullah of Madura, Muhammad Isma\u2019il Ibn Abdul Rahim of Bali, Syaikh Yasin of Kedah (Malaysia), Syaikh Haji Ahmad of Lampung, and Syaikh Muhammad Makruf Ibn Abdullah al-Khatib of Palembang. In Sambas itself the spread was carried by Syaikh Nuruddin (from the Philippines) and Syaikh Muhammad Sa\u2019ad. After his death (1878), Syaikh Tholhah bin Talabudin continued the development from Trusmi, Kalisapu, Cirebon.',
    summaryId: 'Menurut catatan resmi Suryalaya, Syaikh Ahmad Khatib mengangkat banyak wakil yang menyebarkan tarekat gabungan di daerah masing-masing: Syaikh Abdul Karim dari Banten, Syaikh Ahmad Thalhah dari Cirebon, Syaikh Ahmad Hasbullah dari Madura, Muhammad Isma\u2019il Ibn Abdul Rahim dari Bali, Syaikh Yasin dari Kedah (Malaysia), Syaikh Haji Ahmad dari Lampung, dan Syaikh Muhammad Makruf Ibn Abdullah al-Khatib dari Palembang. Di Sambas sendiri penyebarannya dilakukan Syaikh Nuruddin (dari Filipina) dan Syaikh Muhammad Sa\u2019ad. Setelah wafatnya (1878), Syaikh Tholhah bin Talabudin melanjutkan pengembangan dari Trusmi, Kalisapu, Cirebon.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '1878', startDatePrecision: T.YEAR,
    details: {
      sources: ['165-SRC-000004'],
      recordBasis: 'daftar wakil pada catatan resmi suryalaya.org — direkam setia',
      note: 'Rekam institusional tentang jaringan dakwah — BUKAN tautan sanad; rantai tetap display-only di /api/sanad.',
    },
  },
  {
    globalId: '165-EVT-000007', slug: 'suryalaya-founding-1905', type: 'EVENT',
    primaryName: 'Pendirian Pondok Pesantren Suryalaya',
    subtitle: '7 Rajab 1323 H / 5 September 1905 — masa kolonial',
    summary: 'Abdullah Mubarok bin Nur Muhammad "Abah Sepuh" — having received the khirqah at age 72 from Syaikh Tholhah bin Talabudin (ke-35) — founded Pondok Pesantren Suryalaya on 7 Rajab 1323 H / 5 September 1905, in the eastern Priangan of West Java. The pesantren became the permanent institution that allowed TQN to take root and flourish, and later the seat of mursyid Abah Anom\u2019s ±35-region wakil talqin network.',
    summaryId: 'Abdullah Mubarok bin Nur Muhammad "Abah Sepuh" — setelah menerima khirqah pada usia 72 tahun dari Syaikh Tholhah bin Talabudin (ke-35) — mendirikan Pondok Pesantren Suryalaya pada 7 Rajab 1323 H / 5 September 1905, di Priangan timur Jawa Barat. Pesantren menjadi lembaga permanen yang membuat TQN dapat berakar dan berkembang, dan kelak kedudukan mursyid Abah Anom dengan jaringan wakil talqin ±35 wilayah.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '1905-09-05', startDatePrecision: T.DAY,
    details: { hijriDate: '7 Rajab 1323 H', sources: ['165-SRC-000004'], institution: '165-INST-000002', founder: '165-PERSON-000005' },
  },
  {
    globalId: '165-EVT-000008', slug: 'tqn-banten-institutional-line', type: 'EVENT',
    primaryName: 'Kehadiran TQN di Banten — linimasa kelembagaan',
    subtitle: 'Abad ke-19–20 — dari Abdul Karim al-Bantani hingga TQN Asnawiyah Pandeglang',
    summary: 'The institutional history of TQN in Banten: Syaikh Abdul Karim al-Bantani (Tanara) served as Ahmad Khatib\u2019s deputy and is described in published references as the mursyid who united the leadership of the whole TQN branch; the line later associated with the Asnawiyah name in Pandeglang (Caringin, Cibeber, Menes) maintained the order\u2019s continuity, with the recorded terminal mursyid Syekh Ahmad Sukanta Salmin Labuan al-Banteni (1935–2015) at Labuan, Pandeglang. Individual chain positions are recorded display-only in /api/sanad (S1, S7, S8).',
    summaryId: 'Sejarah kelembagaan TQN di Banten: Syaikh Abdul Karim al-Bantani (Tanara) menjadi wakil Ahmad Khatib dan digambarkan referensi terbitan sebagai mursyid yang mempersatukan kepemimpinan seluruh cabang TQN; linimasa yang kemudian berasosiasi dengan nama Asnawiyah di Pandeglang (Caringin, Cibeber, Menes) menjaga kesinambungan tarekat, dengan mursyid terminal yang terekam Syekh Ahmad Sukanta Salmin Labuan al-Banteni (1935–2015) di Labuan, Pandeglang. Posisi rantai per-orang direkam display-only di /api/sanad (S1, S7, S8).',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '19', startDatePrecision: T.CENTURY, endDate: '20', endDatePrecision: T.CENTURY,
    details: {
      sources: ['165-SRC-000005', '165-SRC-000006', '165-SRC-000011'],
      note: 'Rekam kelembagaan per wilayah — BUKAN rantai baru; posisi rantai tetap display-only.',
    },
  },
  {
    globalId: '165-EVT-000009', slug: 'abah-anom-passing-succession', type: 'EVENT',
    primaryName: 'Wafatnya Abah Anom & persoalan suksesi Suryalaya',
    subtitle: '5 September 2011 — perbedaan direkam, institusi tidak memihak',
    summary: 'Syekh KH. Ahmad Shohibulwafa Tajul Arifin "Abah Anom" passed away on 5 September 2011 at the recorded age of 96. The succession after him was publicly questioned by different parties; the official Suryalaya record and the platform\u2019s sanad policy both acknowledge this openly. 165 records the difference without taking sides and asserts no silsilah ke-38 — an application of the institutional rule that differences are displayed, never buried.',
    summaryId: 'Syekh KH. Ahmad Shohibulwafa Tajul Arifin "Abah Anom" wafat pada 5 September 2011 pada usia terekam 96 tahun. Suksesi setelah beliau dipersoalkan secara publik oleh pihak-pihak berbeda; catatan resmi Suryalaya dan kebijakan sanad platform sama-sama mengakui hal itu secara terbuka. 165 mencatat perbedaan itu tanpa memihak dan tidak menegaskan silsilah ke-38 — penerapan kaidah institusi bahwa perbedaan ditampilkan, tidak pernah dikubur.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '2011-09-05', startDatePrecision: T.DAY,
    details: {
      sources: ['165-SRC-000004', '165-SRC-000010'],
      policy: 'Sesuai SANAD_POLICY (/api/sanad): tidak ada silsilah ke-38 yang ditegaskan.',
    },
  },

  // ================= BOOKS =================
  {
    globalId: '165-BOOK-000001', slug: 'bruinessen-tarekat-naqsyabandiyah-1992', type: 'BOOK',
    primaryName: 'Tarekat Naqsyabandiyah di Indonesia: Survei Historis, Geografis dan Sosiologis',
    subtitle: 'Martin van Bruinessen — Bandung: Mizan, 1992',
    summary: 'The standard scholarly survey of the Naqshbandiyya in Indonesia — its history, geography and sociology — widely cited across Indonesian scholarship on the tariqa, including studies of TQN Suryalaya (cited at p. 91 in the captured literature). Recorded as the first entry of the 165 book registry from a bibliographic record verified through multiple independent citations; the physical copy awaits deposit into the 165 archive.',
    summaryId: 'Survei ilmiah standar tentang Naqsyabandiyah di Indonesia — sejarah, geografi, dan sosiologinya — yang luas disitasi dalam keilmuan Indonesia tentang tarekat, termasuk kajian TQN Suryalaya (disitasi hlm. 91 dalam literatur yang ditangkap). Direkam sebagai entri pertama registri buku 165 dari catatan bibliografis yang terverifikasi melalui berbagai sitasi independen; salinan fisiknya menunggu deposit ke arsip 165.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '1992', startDatePrecision: T.YEAR,
    details: {
      publisher: 'Mizan, Bandung',
      year: '1992',
      authorRef: '165-PERSON-000011',
      biblioRecord: '165-SRC-000009',
      depositStatus: 'AWAITING_DEPOSIT — no physical copy in 165 custody yet; evidence stays at C until Level-A deposit.',
    },
  },
  {
    globalId: '165-BOOK-000002', slug: 'mulyati-tarekat-muktabarah-2004', type: 'BOOK',
    primaryName: 'Tarekat-Tarekat Muktabarah di Indonesia',
    subtitle: 'Sri Mulyati — 2004',
    summary: 'A cited scholarly survey of the recognized (mu\u2019tabarah) tariqa orders of Indonesia — including Qadiriyah, Naqsyabandiyah and their combined form — recorded from academic bibliographic citations captured during Phase 15 research. Publisher data awaits deposit; the record is kept honest about what is and is not yet verified.',
    summaryId: 'Survei ilmiah yang disitasi tentang tarekat-tarekat mu\u2019tabarah di Indonesia — termasuk Qadiriyah, Naqsyabandiyah, dan bentuk gabungannya — direkam dari sitasi bibliografis akademik hasil riset Fase 15. Data penerbit menunggu deposit; catatan disimpan dengan jujur tentang apa yang belum terverifikasi.',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED',
    startDate: '2004', startDatePrecision: T.YEAR,
    details: {
      year: '2004',
      authorRef: '165-PERSON-000012',
      bibliography: 'Mulyati, Sri. 2004. Tarekat-Tarekat Muktabarah di Indonesia.',
      depositStatus: 'AWAITING_DEPOSIT — bibliographic citation only; publisher data pending.',
    },
  },

  // ================= TERMS (glossary) =================
  {
    globalId: '165-TERM-000011', slug: 'khatm', type: 'TERM',
    primaryName: 'Khatm',
    subtitle: 'Dzikir rangkaian TQN',
    summary: 'The ordered litany of the TQN (khatm khadirah, khatm qodiriyah) — the complete dzikir sequence recited in congregation. One of the search keys of the 165 registry.',
    summaryId: 'Wirid berurutan TQN (khatm khadirah, khatm qodiriyah) — rangkaian dzikir lengkap yang dibaca berjamaah. Salah satu kunci pencarian registri 165.',
    summaryAr: 'الخاتم: الورد المرتَّب للطريقة القادرية النقشبندية، يُقرأ في الجماعة.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: { sources: ['165-SRC-000002'], recordPolicy: 'Istilah tradisional — direkam sebagai kosakata, bukan fakta historis.' },
    names: [{ name: 'خاتم', language: 'ar', kind: 'VARIANT' }],
  },
  {
    globalId: '165-TERM-000012', slug: 'khirqah', type: 'TERM',
    primaryName: 'Khirqah',
    subtitle: 'Jubah / warisan ruhani pengangkatan guru',
    summary: 'The mantle or spiritual investiture conferred when a master authorizes a successor. Recorded historical instances in the 165 corpus: Abdullah Mubarok "Abah Sepuh" received the khirqah at age 72 from Syaikh Tholhah bin Talabudin (official Suryalaya record).',
    summaryId: 'Jubah atau warisan ruhani yang diserahkan saat seorang guru memberi otorisasi kepada penerus. Contoh sejarah terekam dalam korpus 165: Abdullah Mubarok "Abah Sepuh" menerima khirqah pada usia 72 tahun dari Syaikh Tholhah bin Talabudin (catatan resmi Suryalaya).',
    summaryAr: 'الخِرقة: الرداء أو التسليم الروحي عند إجازة الخليفة.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: { sources: ['165-SRC-000004'], recordedInstance: 'khirqah Abah Sepuh (S2, Level C)' },
    names: [{ name: 'خِرقة', language: 'ar', kind: 'VARIANT' }],
  },
  {
    globalId: '165-TERM-000013', slug: 'talqin', type: 'TERM',
    primaryName: 'Talqin',
    subtitle: 'Pengajaran dzikir & wirid oleh mursyid',
    summary: 'The master\u2019s instruction of the dzikir and wirid to a seeker. A wakil talqin is a deputy entrusted to perform the talqin on the master\u2019s behalf — the Suryalaya record counts ±35 such deputies across regions including Singapore and Malaysia.',
    summaryId: 'Pengajaran dzikir dan wirid oleh mursyid kepada seorang penempuh. Wakil talqin adalah perwakilan yang diberi amanah menalqinkan atas nama mursyid — catatan Suryalaya mencatat ±35 wakil talqin lintas wilayah termasuk Singapura dan Malaysia.',
    summaryAr: 'التلقين: تعليم المُريد الذِّكر والأوراد، وله وكيلٌ يتلقّين نيابةً عن المُرشد.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: { sources: ['165-SRC-000004'], recordedInstance: 'wakil talqin ±35 wilayah (S2, Level C)' },
    names: [{ name: 'تلقين', language: 'ar', kind: 'VARIANT' }],
  },
  {
    globalId: '165-TERM-000014', slug: 'murid-salik', type: 'TERM',
    primaryName: 'Murid (Sālik)',
    subtitle: 'Penempuh jalan di bawah bimbingan mursyid',
    summary: 'The seeker who travels the tariqa path under a mursyid\u2019s guidance — one who takes bai\u2019at, receives talqin, and practices the wirid. In the recorded Suryalaya vocabulary the congregation members are called ikhwan.',
    summaryId: 'Penempuh jalan tarekat di bawah bimbingan mursyid — yang mengikat bai\u2019at, menerima talqin, dan menjalankan wirid. Dalam kosakata Suryalaya yang terekam, anggota jamaah disebut ikhwan.',
    summaryAr: 'المُريد (السَّالِك): من يسلك الطريق تحت إرشاد المُرشد بعد البيعة والتلقين.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: { sources: ['165-SRC-000004'] },
    names: [{ name: 'مُريد', language: 'ar', kind: 'VARIANT' }],
  },
  {
    globalId: '165-TERM-000015', slug: 'khalwat', type: 'TERM',
    primaryName: 'Khalwat',
    subtitle: 'Menyendiri dalam latihan tarekat',
    summary: 'Seclusion practiced in tariqa training. The Naqshbandiyya is known for its principle of "khalwat dar anjuman" — seclusion amid the gathering: present among people, withdrawn in the heart. Recorded as vocabulary of the tradition, not as a claim about any person\u2019s practice.',
    summaryId: 'Menyendiri yang dipraktikkan dalam latihan tarekat. Naqshbandiyya dikenal dengan asas "khalwat dar anjuman" — menyendiri di tengah keramaian: hadir di antara orang banyak, menyendiri di dalam hati. Direkam sebagai kosakata tradisi, bukan klaim atas praktik seseorang.',
    summaryAr: 'الخَلوة: العزلة في التدريب، وعلى النقشبندية "الخلوة در أنجمان" — الخلوة في الجمع.',
    evidenceLevel: 'D', verificationStatus: 'TRADITIONAL_ACCOUNT',
    details: { sources: ['165-SRC-000008'], recordPolicy: 'Kosakata tradisi — tanpa klaim perorangan.' },
    names: [{ name: 'خَلوة', language: 'ar', kind: 'VARIANT' }],
  },

  // ================= CLAIM (competing sources, displayed side-by-side) =================
  {
    globalId: '165-CLM-000004', slug: 'khatib-sambas-death-year', type: 'CLAIM',
    primaryName: 'Tahun wafat Ahmad Khatib Sambas: 1878 M',
    subtitle: 'Dua sumber bersaing — direkam berdampingan, institusi tidak memihak',
    summary: 'The official Suryalaya institutional record states that Syaikh Tholhah bin Talabudin continued the development of TQN "after the death of Syaikh Ahmad Khatib (1878)". An academic thesis title records the life range of Ahmad Khatib Sambas as (1802-1875). Both statements are recorded side-by-side with their sources; 165 does not adjudicate. This claim is marked DISPUTED until a Level-A source settles it.',
    summaryId: 'Catatan resmi kelembagaan Suryalaya menyatakan Syaikh Tholhah bin Talabudin melanjutkan pengembangan TQN "setelah wafatnya Syaikh Ahmad Khatib (1878)". Sebuah judul karya akademik mencatat rentang hidup Ahmad Khatib Sambas sebagai (1802-1875). Kedua pernyataan direkam berdampingan dengan sumbernya; 165 tidak memutuskan. Klaim ini ditandai DISPUTED sampai ada sumber Level-A yang menetapkannya.',
    evidenceLevel: 'C', verificationStatus: 'DISPUTED',
    details: {
      supportedValue: '1878 (suryalaya.org — catatan resmi)',
      disputedValue: '1875 (judul karya akademik — sitasi tingkat judul)',
      resolutionPath: 'Telaah sumber Level-A (naskah/dokumen arsip) atau kolasi literatur ilmiah penuh.',
      relatedEntity: '165-PERSON-000004',
    },
    names: [{ name: 'Khatib Sambas death year dispute', language: 'en', kind: 'VARIANT' }],
  },
]

// ---------------------------------------------------------------------------
// NEW RELATIONSHIPS (each explicit; none inferred; NO student-teacher chain edges)
// ---------------------------------------------------------------------------

const relations = [
  // Khatib Sambas — unifier
  { from: '165-PERSON-000004', to: '165-TRAD-000001', predicate: 'LINEAGE_FOUNDER_OF', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Penyatu dua induk tarekat (abad ke-19, Makkah); titik temu silsilah #34 pada S1 dan penomoran resmi Suryalaya.' },
  { from: '165-PERSON-000004', to: '165-PLACE-000006', predicate: 'LOCATED_IN', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Mukim dan mengajar di Makkah; asal Sambas.' },
  { from: '165-PERSON-000004', to: '165-PLACE-000007', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Tanah asal; penyebaran di Sambas dilakukan dua wakilnya (Syaikh Nuruddin & Syaikh Muhammad Sa\u2019ad).' },
  // Events → places / persons
  { from: '165-EVT-000005', to: '165-PLACE-000006', predicate: 'OCCURRED_IN', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000007', context: 'Penyatuan dua tarekat dirumuskan di Makkah abad ke-19.' },
  { from: '165-EVT-000005', to: '165-PERSON-000004', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000007', context: 'Peristiwa penyatuan yang dirumuskannya.' },
  { from: '165-EVT-000003', to: '165-PLACE-000004', predicate: 'OCCURRED_IN', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000008', context: 'Kekristalan Qadiriyya di Baghdad.' },
  { from: '165-EVT-000003', to: '165-PERSON-000002', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000008', context: 'Kristalisasi ajaran sekitar wafat al-Jilani (1166).' },
  { from: '165-EVT-000004', to: '165-PLACE-000005', predicate: 'OCCURRED_IN', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000008', context: 'Kekristalan Naqshbandiyya di lingkungan Khwajagan, Bukhara.' },
  { from: '165-EVT-000004', to: '165-PERSON-000003', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000008', context: 'Eponim yang diterima anumerta; arus Khwajagan lebih tua.' },
  { from: '165-EVT-000006', to: '165-PLACE-000001', predicate: 'OCCURRED_IN', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Penyebaran lintas daerah: Banten, Cirebon, Madura, Bali, Kedah (Malaysia), Lampung, Palembang, Sambas.' },
  { from: '165-EVT-000006', to: '165-PERSON-000004', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Jaringan wakil setelah wafatnya (1878 menurut catatan resmi Suryalaya).' },
  { from: '165-EVT-000006', to: '165-TRAD-000001', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Penerusan pengembangan tarekat gabungan oleh para wakil.' },
  { from: '165-EVT-000007', to: '165-PLACE-000008', predicate: 'OCCURRED_IN', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Pendirian pesantren di lingkar Panjalu, Priangan timur.' },
  { from: '165-EVT-000007', to: '165-PERSON-000005', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Pendiri — menerima khirqah usia 72 tahun.' },
  { from: '165-EVT-000007', to: '165-INST-000002', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Peristiwa pendirian institusi.' },
  { from: '165-EVT-000008', to: '165-PLACE-000009', predicate: 'OCCURRED_IN', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000005', context: 'Linimasa kelembagaan TQN di Banten.' },
  { from: '165-EVT-000008', to: '165-TRAD-000001', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000005', context: 'Kehadiran TQN Banten — dari Abdul Karim al-Bantani hingga Asnawiyah Pandeglang.' },
  { from: '165-EVT-000009', to: '165-PERSON-000006', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000010', context: 'Wafat Abah Anom — 5 September 2011, usia terekam 96.' },
  { from: '165-EVT-000009', to: '165-INST-000002', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Suksesi dipersoalkan publik — direkam tanpa memihak; tanpa silsilah ke-38.' },
  // Suryalaya institutional line
  { from: '165-PERSON-000005', to: '165-INST-000002', predicate: 'FOUNDED', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: '7 Rajab 1323 H / 5 September 1905; khirqah usia 72 dari Syaikh Tholhah bin Talabudin (ke-35).' },
  { from: '165-PERSON-000006', to: '165-INST-000002', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Putra ke-5 Abah Sepuh; wakil talqin lalu mursyid penerus; jaringan wakil talqin ±35 wilayah termasuk Singapura & Malaysia.' },
  { from: '165-INST-000002', to: '165-PLACE-000008', predicate: 'LOCATED_IN', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004', context: 'Lingkar Panjalu, Priangan timur (catatan lama menyebut Tasikmalaya).' },
  // Banten institutional line
  { from: '165-PERSON-000007', to: '165-TRAD-000001', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000005', context: 'Wakil Ahmad Khatib di Banten; mursyid TQN abad ke-19 (ke-35 jalur Bantani); Wikipedia: mursyid terakhir yang mempersatukan kepemimpinan cabang TQN.' },
  { from: '165-PERSON-000007', to: '165-PLACE-000009', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000005', context: 'Tanara, Banten.' },
  { from: '165-PERSON-000008', to: '165-PLACE-000009', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000011', context: 'Menes, Banten — penjaga kesinambungan TQN di tanah Banten.' },
  { from: '165-PERSON-000009', to: '165-PLACE-000009', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000006', context: 'Kaduparasi, Labuan, Pandeglang; konteks TQN Asnawiyah.' },
  { from: '165-PERSON-000010', to: '165-PLACE-000010', predicate: 'ASSOCIATED_WITH', level: 'B', status: 'TRADITIONAL_ACCOUNT', source: '165-SRC-000003', context: 'Cikangkung, Rengasdengklok — sesuai rekaman S1 #39a; dukungan silang komunitas (S5).' },
  // Eponym founders → places (encyclopedic)
  { from: '165-PERSON-000002', to: '165-PLACE-000004', predicate: 'LOCATED_IN', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000008', context: 'Mukim, mengajar, dan dimakamkan di Baghdad (1077–1166).' },
  { from: '165-PERSON-000003', to: '165-PLACE-000005', predicate: 'LOCATED_IN', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000008', context: 'Bukhara — kelahiran, berkarya, dan makam (1318–1389).' },
  // Books & scholarship
  { from: '165-PERSON-000011', to: '165-BOOK-000001', predicate: 'AUTHORED', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000009', context: 'Penulis survei standar (Mizan, 1992).' },
  { from: '165-BOOK-000001', to: '165-INST-000002', predicate: 'REFERENCES', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000009', context: 'Survei membahas TQN Suryalaya (disitasi literatur, hlm. 91).' },
  { from: '165-BOOK-000001', to: '165-PERSON-000004', predicate: 'REFERENCES', level: 'C', status: 'DOCUMENTED', source: '165-SRC-000009', context: 'Membahas pendiri TQN dalam sejarah Naqsyabandiyah di Indonesia.' },
  { from: '165-PERSON-000012', to: '165-BOOK-000002', predicate: 'AUTHORED', level: 'C', status: 'DOCUMENTED', context: 'Penulis survei mu\u2019tabarah (2004); sitasi bibliografis akademik.' },
  // Claim subject
  { from: '165-CLM-000004', to: '165-PERSON-000004', predicate: 'ASSOCIATED_WITH', level: 'C', status: 'DISPUTED', context: 'Klaim tahun wafat — dua sumber bersaing, tampil berdampingan.' },
]

const claimStances = [
  { claim: '165-CLM-000004', source: '165-SRC-000004', stance: 'SUPPORTED_BY', note: 'Catatan resmi suryalaya.org: pengembangan TQN dilanjutkan Syaikh Tholhah setelah wafatnya Syaikh Ahmad Khatib (1878).' },
  { claim: '165-CLM-000004', source: '165-SRC-000007', stance: 'DISPUTED_BY', note: 'Judul karya akademik mencantumkan rentang hidup (1802-1875) — tahun 1875 sebagai alternatif. Direkam berdampingan; 165 tidak memihak.' },
]

// ---------------------------------------------------------------------------
// ENRICHMENTS of existing entities (additive: snapshot + audit, never silent)
// ---------------------------------------------------------------------------

type Enrichment = {
  globalId: string
  summary?: string
  summaryId?: string
  summaryAr?: string
  evidenceLevel?: string
  verificationStatus?: string
  names?: { name: string; language: string; kind: string; note?: string }[]
  details?: Record<string, unknown>
  reason: string
}

const enrichments: Enrichment[] = [
  {
    globalId: '165-PERSON-000002',
    summary: 'Shaykh Abd al-Qadir al-Jilani (1077–1166), the Hanbali jurist and Sufi master born in Gilan (Persia) who settled and taught in Baghdad, accepted as the historical eponym of the Qadiriyya — one of the two parent currents of TQN. He is buried in Baghdad. Recorded from an encyclopedic reference corpus (165-SRC-000008); his position in the recorded S1 list (#19, numeral 20 skipped) is reproduced as-is — he is NOT asserted as a verified sanad node.',
    summaryId: 'Syekh Abd al-Qadir al-Jilani (1077–1166), ulama Hanbali dan guru sufi kelahiran Gilan (Persia) yang mukim dan mengajar di Baghdad, diakui sebagai eponim sejarah Qadiriyya — salah satu induk TQN. Dimakamkan di Baghdad. Direkam dari korpus referensi ensiklopedis (165-SRC-000008); posisinya pada daftar S1 yang terekam (#19, angka 20 dilewati) direproduksi apa adanya — TIDAK ditegaskan sebagai simpul sanad terverifikasi.',
    summaryAr: 'الإمام عبد القادر الجيلاني (١٠٧٧–١١٦٦م): الفقيه الحنبلي والشيخ الصوفي الغيلاني الذي استقر في بغداد وتصدّى للتعليم، وسمَّت الطريقة القادرية باسمه، ودفن في بغداد.',
    evidenceLevel: 'C',
    verificationStatus: 'DOCUMENTED',
    names: [
      { name: 'عبد القادر الجيلاني', language: 'ar', kind: 'VARIANT' },
      { name: 'Abd al-Qadir al-Jilani', language: 'en', kind: 'VARIANT' },
      { name: 'Al-Ghawth al-A\u2019zam', language: 'en', kind: 'TITLE', note: 'honorific recorded in the reference corpus' },
    ],
    details: {
      origin: 'Gilan, Persia',
      settled: 'Baghdad (usia ±18 tahun)',
      tradition: 'Hanbali',
      burialPlace: 'Baghdad',
      references: ['165-SRC-000008'],
      recordPolicy: 'Eponim sejarah — BUKAN simpul sanad terverifikasi; posisi pada S1 direproduksi apa adanya.',
    },
    reason: 'Phase 15 enrichment: encyclopedic corpus attached (165-SRC-000008); dates, origin and honorifics documented; evidence D→C, status TRADITIONAL_ACCOUNT→DOCUMENTED via editorial flow.',
  },
  {
    globalId: '165-PERSON-000003',
    summary: 'Khwaja Baha\u2019 al-Din Naqshband (1318–1389) of Bukhara, representative of the Central Asian Khwajagan Sufi current, accepted posthumously as the eponym of the Naqshbandiyya — the second parent current of TQN. The chain it records reaches back through the Khwajagan masters before him. Recorded from an encyclopedic reference corpus (165-SRC-000008); his recorded S1 list position (#22, numeral reused) is reproduced as-is — NOT asserted as a verified sanad node.',
    summaryId: 'Khvaja Baha\u2019 al-Din Naqshband (1318–1389) dari Bukhara, perwakilan arus sufi Khwajagan Asia Tengah, diakui sebagai eponim Naqshbandiyya secara anumerta — induk kedua TQN. Rantai yang direkamnya menjangkau lebih jauh ke belakang melalui para guru Khwajagan sebelum beliau. Direkam dari korpus referensi ensiklopedis (165-SRC-000008); posisinya pada daftar S1 yang terekam (#22, angka dipakai ulang) direproduksi apa adanya — TIDAK ditegaskan sebagai simpul sanad terverifikasi.',
    summaryAr: 'الخواجه بهاء الدين النقشبند (١٣١٨–١٣٨٩م): من بوخارى، وتمثُّل لتيار الخواجكان في وسط آسيا، صار اسمًا للطريقة النقشبندية بعد وفاته.',
    evidenceLevel: 'C',
    verificationStatus: 'DOCUMENTED',
    names: [
      { name: 'بهاء الدين النقشبند', language: 'ar', kind: 'VARIANT' },
      { name: 'Baha\u2019uddin Naqshband Bukhari', language: 'en', kind: 'VARIANT' },
    ],
    details: {
      place: 'Bukhara, Transoxiana',
      current: 'Khwajagan',
      burialPlace: 'Bukhara',
      references: ['165-SRC-000008'],
      recordPolicy: 'Eponim anumerta — BUKAN simpul sanad terverifikasi; posisi pada S1 direproduksi apa adanya.',
    },
    reason: 'Phase 15 enrichment: encyclopedic corpus attached (165-SRC-000008); dates, place and Khwajagan context documented; evidence D→C, status TRADITIONAL_ACCOUNT→DOCUMENTED via editorial flow.',
  },
  {
    globalId: '165-TRAD-000001',
    summary: 'TQN Qodiriyah Naqsabandiyah — the combined order articulated in the 19th century by Shaykh Ahmad Khatib al-Sambas (convergence point #34 of the recorded jalur), joining the vocal-dhikr Qadiriyya with the silent-dhikr Naqshbandiyya. Carried across the Nusantara by his deputies; Pondok Pesantren Suryalaya (founded 1905) became one of its principal institutional centers. The three recorded jalur of 165 (Karawang, Al-Bantani, Suryalaya) all converge on Khatib Sambas. Displayed chains remain display-only in /api/sanad.',
    summaryId: 'TQN Qodiriyah Naqsabandiyah — tarekat gabungan yang dirumuskan pada abad ke-19 oleh Syaikh Ahmad Khatib al-Sambas (titik temu #34 jalur yang terekam), menyatukan Qadiriyya ber-dzikir jahr dengan Naqshbandiyya ber-dzikir batin. Dibawa melintasi Nusantara oleh para wakilnya; Pondok Pesantren Suryalaya (didirikan 1905) menjadi salah satu pusat kelembagaan utamanya. Ketiga jalur terekam 165 (Karawang, Al-Bantani, Suryalaya) bertemu pada Khatib Sambas. Rantai yang ditampilkan tetap display-only di /api/sanad.',
    details: {
      unifier: '165-PERSON-000004',
      unificationPeriod: 'Abad ke-19 (Makkah)',
      principalCenters: ['Pondok Pesantren Suryalaya (1905)', 'Koridor Banten/Asnawiyah', 'Jalur Karawang'],
      api: '/api/sanad',
      sources: ['165-SRC-000004', '165-SRC-000007'],
    },
    reason: 'Phase 15 enrichment: institutional history (unification, deputy network, Suryalaya center) documented from the official Suryalaya record; status stays D/TRADITIONAL_ACCOUNT — the tradition itself is a traditional account.',
  },
  {
    globalId: '165-PERSON-000001',
    names: [
      { name: 'Tech Futurist', language: 'en', kind: 'TITLE', note: 'Gelar publik — dinyatakan sendiri di prabudanling.web.id (research/p8)' },
      { name: 'Master Sage Polymath', language: 'en', kind: 'TITLE', note: 'Gelar publik — dinyatakan sendiri di prabudanling.web.id (research/p8)' },
      { name: 'Senior Konsultan Bisnis & IT', language: 'id', kind: 'TITLE', note: 'Gelar publik — dinyatakan sendiri di prabudanling.web.id (research/p8)' },
      { name: 'Prabu Danling', language: 'id', kind: 'ALIAS', note: 'Dimensi Eksekusi — terdokumentasi di situs pribadi pendiri (P8); sinkronisasi aditif atas arahan pengisian konten pendiri' },
      { name: 'Santri Angon', language: 'id', kind: 'ALIAS', note: 'Dimensi Refleksi — terdokumentasi di situs pribadi pendiri (P8); juga tanda tangan penyusun S1' },
    ],
    details: {
      publicTitles: ['Tech Futurist', 'Master Sage Polymath', 'Senior Konsultan Bisnis & IT'],
      publicDimensions: {
        duniawi: 'Gugun Gunara — negara & sistem',
        ruhani: 'Muhammad Lutfi Azmi — ruhani & akademik',
        eksekusi: 'Prabu Danling — strategi & kepemimpinan',
        refleksi: 'Santri Angon — spiritual & inspiratif',
      },
      civilizationalMission: 'Membangkitkan kesadaran diri, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia.',
      motto: 'Prak burukeun — segerakan kesadaran. Ulah edan, kudu eling.',
      identitySource: 'research/p8-prabudanling-founder-profile.json (diakses 2026-09-29)',
    },
    reason: 'Phase 15 enrichment: public titles and the documented four-dimension identity (Satu Jiwa, Empat Dimensi) synced additively from the founder\u2019s own archived site (P8) upon founder-directed content filling.',
  },
]

// Existing relationships upgraded via editorial flow (D→C with attached corpus)
const relationUpgrades = [
  {
    from: '165-PERSON-000002', to: '165-TRAD-000002', predicate: 'LINEAGE_FOUNDER_OF',
    level: 'C', status: 'DOCUMENTED', source: '165-SRC-000008',
    context: 'Historical eponym of the Qadiriyya (1077–1166) — encyclopedic corpus attached. NOT a verified sanad node.',
    reason: 'Phase 15: upgraded D→C — encyclopedic corpus 165-SRC-000008 attached.',
  },
  {
    from: '165-PERSON-000003', to: '165-TRAD-000003', predicate: 'LINEAGE_FOUNDER_OF',
    level: 'C', status: 'DOCUMENTED', source: '165-SRC-000008',
    context: 'Accepted eponym of the Naqshbandiyya (1318–1389), Khwajagan context — encyclopedic corpus attached. NOT a verified sanad node.',
    reason: 'Phase 15: upgraded D→C — encyclopedic corpus 165-SRC-000008 attached.',
  },
  {
    from: '165-TRAD-000002', to: '165-TRAD-000001', predicate: 'LINEAGE_OF',
    level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004',
    context: 'One of the two parent currents drawn upon; the 19th-century unification by Ahmad Khatib Sambas is documented in the official Suryalaya record.',
    reason: 'Phase 15: upgraded E→C — official Suryalaya record documents the combined order.',
  },
  {
    from: '165-TRAD-000003', to: '165-TRAD-000001', predicate: 'LINEAGE_OF',
    level: 'C', status: 'DOCUMENTED', source: '165-SRC-000004',
    context: 'One of the two parent currents drawn upon; the 19th-century unification by Ahmad Khatib Sambas is documented in the official Suryalaya record.',
    reason: 'Phase 15: upgraded E→C — official Suryalaya record documents the combined order.',
  },
]

// ---------------------------------------------------------------------------
// MAIN — additive & idempotent
// ---------------------------------------------------------------------------

async function main() {
  console.log('Seeding 165 content layer (Phase 15 — additive, idempotent)…')

  // 1. new entities
  for (const row of rows) {
    const { names, details, ...entity } = row
    const existing = await prisma.entity.findUnique({ where: { globalId: row.globalId } })
    if (existing) {
      console.log(`  = exists: ${row.globalId} — left untouched`)
      continue
    }
    const created = await prisma.entity.create({
      data: {
        ...entity,
        details: details ? JSON.stringify(details) : null,
        nameVariants: { create: names ?? [] },
      },
    })
    await prisma.versionSnapshot.create({
      data: {
        entityId: created.id, version: 1,
        snapshot: JSON.stringify({ globalId: row.globalId, primaryName: row.primaryName, verificationStatus: row.verificationStatus, evidenceLevel: row.evidenceLevel }),
        changedBy: 'seed-content', reason: 'Phase 15 content recording — founder-directed, source-attached (P9 corpus).',
      },
    })
    await prisma.auditLog.create({
      data: { actor: 'seed-content', action: 'CREATE', target: row.globalId, detail: `Entity ${row.type} recorded during Phase 15 content filling (sources in details / research/p9*).` },
    })
    console.log(`  + created: ${row.globalId} — ${row.primaryName}`)
  }

  // 2. new relationships (dedup by from+to+predicate)
  const idOf = async (globalId: string) => (await prisma.entity.findUnique({ where: { globalId } }))?.id
  for (const r of relations) {
    const fromId = await idOf(r.from)
    const toId = await idOf(r.to)
    if (!fromId || !toId) { console.log(`  ! skipped link ${r.from} -> ${r.to} (missing refs)`); continue }
    const has = await prisma.relationship.findFirst({ where: { fromEntityId: fromId, toEntityId: toId, predicate: r.predicate } })
    if (has) { console.log(`  = link exists: ${r.from} -${r.predicate}-> ${r.to}`); continue }
    await prisma.relationship.create({
      data: {
        fromEntityId: fromId, toEntityId: toId, predicate: r.predicate,
        evidenceLevel: r.level, verificationStatus: r.status, context: r.context, sourceRef: r.source ?? null,
      },
    })
    console.log(`  + link: ${r.from} -${r.predicate}-> ${r.to}`)
  }

  // 3. claim stances (dedup)
  for (const c of claimStances) {
    const claimId = await idOf(c.claim)
    const srcId = await idOf(c.source)
    if (!claimId || !srcId) { console.log(`  ! skipped stance ${c.claim} <- ${c.source}`); continue }
    const has = await prisma.claimSource.findFirst({ where: { claimEntityId: claimId, sourceEntityId: srcId } })
    if (has) { console.log(`  = stance exists: ${c.claim} ${c.stance} ${c.source}`); continue }
    await prisma.claimSource.create({ data: { claimEntityId: claimId, sourceEntityId: srcId, stance: c.stance, note: c.note } })
    console.log(`  + stance: ${c.claim} ${c.stance} ${c.source}`)
  }

  // 4. enrichments (additive, snapshot + audit; idempotent via details marker)
  for (const en of enrichments) {
    const target = await prisma.entity.findUnique({ where: { globalId: en.globalId }, include: { nameVariants: true } })
    if (!target) { console.log(`  ! enrichment skipped (not found): ${en.globalId}`); continue }
    let currentDetails: Record<string, unknown> = {}
    try { currentDetails = target.details ? JSON.parse(target.details) : {} } catch { currentDetails = {} }
    if (currentDetails.enrichedBy === 'seed-content') {
      console.log(`  = enrichment already applied: ${en.globalId}`)
      continue
    }
    const mergedDetails = { ...currentDetails, ...(en.details ?? {}), enrichedBy: 'seed-content' }
    const data: Record<string, unknown> = { details: JSON.stringify(mergedDetails) }
    if (en.summary) data.summary = en.summary
    if (en.summaryId) data.summaryId = en.summaryId
    if (en.summaryAr) data.summaryAr = en.summaryAr
    if (en.evidenceLevel) data.evidenceLevel = en.evidenceLevel
    if (en.verificationStatus) data.verificationStatus = en.verificationStatus
    await prisma.entity.update({ where: { id: target.id }, data })
    // add missing name variants only
    for (const nv of en.names ?? []) {
      const dup = target.nameVariants.some((v) => v.name === nv.name)
      if (!dup) await prisma.nameVariant.create({ data: { ...nv, entityId: target.id } })
    }
    // snapshot at next version
    const last = await prisma.versionSnapshot.findFirst({ where: { entityId: target.id }, orderBy: { version: 'desc' } })
    await prisma.versionSnapshot.create({
      data: {
        entityId: target.id, version: (last?.version ?? 1) + 1,
        snapshot: JSON.stringify({ globalId: en.globalId, primaryName: target.primaryName, verificationStatus: en.verificationStatus ?? target.verificationStatus, evidenceLevel: en.evidenceLevel ?? target.evidenceLevel }),
        changedBy: 'seed-content', reason: en.reason,
      },
    })
    await prisma.auditLog.create({
      data: { actor: 'seed-content', action: 'UPDATE', target: en.globalId, detail: en.reason },
    })
    console.log(`  + enriched: ${en.globalId} (snapshot v${(last?.version ?? 1) + 1})`)
  }

  // 5. relationship upgrades (editorial flow, dedup-safe)
  for (const up of relationUpgrades) {
    const fromId = await idOf(up.from)
    const toId = await idOf(up.to)
    if (!fromId || !toId) { console.log(`  ! upgrade skipped ${up.from} -> ${up.to}`); continue }
    const rel = await prisma.relationship.findFirst({ where: { fromEntityId: fromId, toEntityId: toId, predicate: up.predicate } })
    if (!rel) { console.log(`  ! upgrade target not found: ${up.from} -${up.predicate}-> ${up.to}`); continue }
    if (rel.evidenceLevel === up.level && rel.verificationStatus === up.status) {
      console.log(`  = upgrade already applied: ${up.from} -${up.predicate}-> ${up.to}`)
      continue
    }
    await prisma.relationship.update({
      where: { id: rel.id },
      data: { evidenceLevel: up.level, verificationStatus: up.status, sourceRef: up.source, context: up.context },
    })
    await prisma.auditLog.create({
      data: { actor: 'seed-content', action: 'UPDATE', target: `${up.from} -${up.predicate}-> ${up.to}`, detail: up.reason },
    })
    console.log(`  + upgraded: ${up.from} -${up.predicate}-> ${up.to} (${up.level}/${up.status})`)
  }

  const counts = await prisma.entity.groupBy({ by: ['type'], _count: { type: true } })
  const total = counts.reduce((a, c) => a + c._count.type, 0)
  console.log(`Content seed complete. Entities: ${total}`)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
