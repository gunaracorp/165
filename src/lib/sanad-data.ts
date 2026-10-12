// 165 — SANAD CHAIN DATA (display-only, recorded — never generated)
//
// Sanad Safety (Master Directive §15): the system does NOT create, merge,
// predict or legitimize sanad. Chains below are RECORDED — reproduced
// faithfully from an identified source with Source → Relationship → Evidence
// → Context → Verification Status — and are displayed AS RECORDED.
//
// Primary chain source: 165-SRC-000003 — the numbered silsilah list
// "Silsilah TQN di Indonesia Yang Diakui Dunia (Mu'tabaroh)", compiled and
// publicly posted by "Al Faqir Santri Angon Gugun Gunara" (the Founder of
// 165, cf. 165-PERSON-000001) on 13-12-2023. The list is reproduced in its
// original order and numbering, including its numbering quirks (the numeral
// 20 is skipped; the numeral 22 appears twice). 165 does NOT silently fix
// what its sources say.
//
// The three jalur (transmission lines) recorded here are the ones directed
// by the Founder for institutional recording:
//   1. Jalur Karawang    — terminal: Abah Ganda/Gana, Cikangkung, Rengasdengklok, Karawang
//   2. Jalur Al-Bantani  — terminal: Abah Haji Sukanta (KH. Agung Ahmad Sukanta bin Salmin), Kaduparasi, Labuan, Banten
//   3. Jalur TQN Suryalaya — terminal: Abah Anom (Syekh Ahmad Shohibulwafa Tajul Arifin), Tasikmalaya
//
// Evidence discipline: every node carries the evidence level of the source it
// rests on. A recorded chain is a record of tradition, NOT a verified
// historical fact and NOT a spiritual legitimacy certificate. Formal Level-A
// collation (ijazah/manuscript deposition) remains open via the contribute
// workflow — never pay-to-verify.

import type { EvidenceLevelKey, VerificationStatusKey } from './165'

// ---------------- sources ----------------

export type SanadSource = {
  id: string
  title: string
  publisher: string
  url?: string
  date?: string
  evidenceLevel: EvidenceLevelKey
  verificationStatus: VerificationStatusKey
  note: string
  dbEntity?: string
}

export const SANAD_SOURCES: SanadSource[] = [
  {
    id: 'S1',
    title: "Silsilah TQN di Indonesia Yang Diakui Dunia (Mu'tabaroh) — daftar silsilah bernomor 39→1",
    publisher: 'KASKUS — Hukum Islam (penyusun: Al Faqir Santri Angon Gugun Gunara)',
    url: 'https://www.kaskus.co.id/thread/657972234642bc41ca6964da/silsilah-tqn-di-indonesia-yang-diakui-dunia--mutabaroh',
    date: '2023-12-13',
    evidenceLevel: 'B',
    verificationStatus: 'DOCUMENTED',
    note: 'THE chain source. Numbered list 39→1 authored and publicly posted by the Founder of 165 ("Penyusun: Al Faqir Santri Angon Gugun Gunara", hashtags #TQN165). Recorded as founder communication — same evidence class as the Master Build Directive. Reproduced verbatim, including numbering quirks (numeral 20 skipped; numeral 22 used twice).',
    dbEntity: '165-SRC-000003',
  },
  {
    id: 'S2',
    title: 'Sejarah Thariqah Qadiriyah Naqsyabandiyah Pondok Pesantren Suryalaya',
    publisher: 'suryalaya.org — situs resmi Pondok Pesantren Suryalaya',
    url: 'https://www.suryalaya.org/tqn2.html',
    evidenceLevel: 'C',
    verificationStatus: 'DOCUMENTED',
    note: 'Official Suryalaya institutional record: Tholhah bin Talabudin = silsilah ke-35 (after the death of Syaikh Ahmad Khatib, 1878); Abdullah Mubarok bin Nur Muhammad "Abah Sepuh" = ke-36, received khirqah at age 72, founded the pesantren on 7 Rajab 1323 H / 5 September 1905; his 5th son KH. A. Shohibulwafa Tajul Arifin "Abah Anom" appointed wakil talqin and successor. Corroborates the shared anchor: Khatib Sambas = #34.',
  },
  {
    id: 'S3',
    title: 'Kesaksianku Untuk Dia',
    publisher: 'mahmudjonsen.blogspot.com — community testimony',
    url: 'https://mahmudjonsen.blogspot.com/2013/11/kesaksianku-untuk-dia.html',
    date: '2013-11-12',
    evidenceLevel: 'E',
    verificationStatus: 'TRADITIONAL_ACCOUNT',
    note: 'Community testimony: Abah Anom, Syekh Shohibulwafa\' Tajul Arifin, was Mursyid TQN PP Suryalaya "silsilah ke-37"; passed away 05 September 2011 at the age of 96. Cross-checks S2.',
  },
  {
    id: 'S4',
    title: 'Pengaruh Syekh Asnawi di Caringin (excerpt akademik)',
    publisher: 'Scribd — skripsi/tesis akademik',
    url: 'https://id.scribd.com/document/pengaruh-syekh-asnawi-caringin',
    evidenceLevel: 'C',
    verificationStatus: 'DOCUMENTED',
    note: 'Scholarly excerpt: "Syekh Ahmad Sukanta Salmin Labuan al-Banteni RA (1935 M/1356 H – 2015 M/1436 H)". Provides dating for the Al-Bantani terminal mursyid.',
  },
  {
    id: 'S5',
    title: 'Diskusi grup TQN — "tarekat qodiriyah wa naqsabandiyah abah ganda cikangkung, rengasdengklok, karawang. Warid ti ahmad kazim bin asnawi banten"',
    publisher: 'Facebook group (public post & comment)',
    url: 'https://www.facebook.com/groups/piss.ktb/posts/2133624713326992',
    evidenceLevel: 'E',
    verificationStatus: 'TRADITIONAL_ACCOUNT',
    note: 'Independent community cross-check of the Jalur Karawang transmission: Abah Ganda (Cikangkung, Rengasdengklok, Karawang) received the tariqa from Ahmad Kadzim bin Asnawi of Banten — matching the S1 record (#39 ← #38).',
  },
  {
    id: 'S6',
    title: 'Syekh Ahmad Sukanta bin Salmin — TQN Asnawiyah, Kabupaten Pandeglang',
    publisher: 'Instagram @katasef (public post)',
    url: 'https://www.instagram.com/katasef/',
    date: '2026-07',
    evidenceLevel: 'E',
    verificationStatus: 'TRADITIONAL_ACCOUNT',
    note: 'Community record naming "Syekh Ahmad Sukanta bin Salmin" with Tarekat Qodiriyah wa Naqsyabandiyah (TQN) Asnawiyah in Kabupaten Pandeglang. Cross-checks S1/S4.',
  },
  {
    id: 'S7',
    title: 'Syaikh Tubagus Ahmad Kadzim Asnawi, Ulama Sufi Besar dari Banten',
    publisher: 'Pandeglang News (media)',
    url: 'https://www.pandeglangnews.co.id',
    evidenceLevel: 'C',
    verificationStatus: 'DOCUMENTED',
    note: 'News profile of Syaikh Tubagus Ahmad Kadzim Asnawi — "ulama sufi yang berperan penting menjaga kesinambungan sanad keilmuan dan Tarekat Qodiriyah wa Naqsyabandiyah di tanah Banten" (#38 in S1). Page is bot-protected; title/snippet recorded.',
  },
  {
    id: 'S8',
    title: 'Syekh Abdul Karim Mursyid Tarekat dari Banten · Abdul Karim al-Bantani',
    publisher: 'NU Online Banten · Wikipedia (id)',
    url: 'https://id.wikipedia.org/wiki/Abdul_Karim_al-Bantani',
    evidenceLevel: 'C',
    verificationStatus: 'DOCUMENTED',
    note: 'Published background on Syekh Abdul Karim al-Bantani (#35 in S1): mursyid TQN of 19th-century Banten; Wikipedia calls him the last mursyid to unite leadership of the whole TQN branch; NU Online profiles him as mursyid from Banten.',
  },
]

// ---------------- chain nodes (shared spine, 34 → 1) ----------------

export type SanadNode = {
  /** rank as printed in S1 (numeral 20 skipped, 22 used twice — reproduced as-is) */
  rank: number
  /** short key for stable rendering */
  key: string
  name: string
  place?: string
  dates?: string
  role?: string
  /** which jalur-segment the node belongs to (above the shared spine) */
  segment?: 'KARAWANG_BANTANI' | 'SURYALAYA'
  /** the founder-marked nodes get brass emphasis */
  founderOf?: 'QODIRIYAH' | 'NAQSABANDIYAH' | 'TQN'
  /** apex/messenger rows are rendered distinctly */
  kind?: 'APEX' | 'RASUL' | 'NORMAL'
  sources: string[]
  note?: string
}

// ---- segment: the Banten/Asnawi transmission recorded in S1 (#38 → #35) ----
const SEG_BANTEN: SanadNode[] = [
  { rank: 38, key: 'ahmad-kadzim-asnawi', name: 'Al Faqir Tubagus Haji Ahmad Kadzim Asnawi', place: 'Menes, Banten', segment: 'KARAWANG_BANTANI', sources: ['S1', 'S7'], note: 'Mengambil ilmu tarekat, hirko(h) tasawuf dan ijazah dari #37. Teacher of both recorded terminals #39a (Karawang) and #39b (Al-Bantani).' },
  { rank: 37, key: 'ahmad-suhari-cibeber', name: 'Syekh KH. Ahmad Suhari', place: 'Cibeber, Banten', segment: 'KARAWANG_BANTANI', sources: ['S1'] },
  { rank: 36, key: 'muhammad-asnawi-caringin', name: 'Syekh KH. Agung Muhammad Asnawi', place: 'Caringin', segment: 'KARAWANG_BANTANI', sources: ['S1'], note: 'Namesake of the TQN Asnawiyah line in Pandeglang (cf. S4, S6).' },
  { rank: 35, key: 'abdul-karim-tanara', name: 'Syekh KH. Agung Abdul Karim', place: 'Tanara, Banten', segment: 'KARAWANG_BANTANI', sources: ['S1', 'S8'], note: 'Identified with Syekh Abdul Karim al-Bantani, mursyid TQN of 19th-century Banten (S8).' },
]

// ---- segment: the Suryalaya transmission recorded in S2 (#37 → #34) ----
const SEG_SURYALAYA: SanadNode[] = [
  { rank: 37, key: 'abah-anom', name: 'Syekh KH. Ahmad Shohibulwafa Tajul Arifin "Abah Anom"', place: 'Pondok Pesantren Suryalaya, Tasikmalaya', dates: 'w. 5 September 2011 M (usia 96)', segment: 'SURYALAYA', sources: ['S2', 'S3'], note: 'Putra ke-5 Abah Sepuh; diangkat wakil talqin lalu mursyid penerus di Suryalaya; silsilah ke-37 menurut penomoran Suryalaya (S2) dan kesaksian murid (S3). Wakil talqin tersebar di ±35 wilayah termasuk Singapura dan Malaysia (S2). Catatan kejujuran: penerus setelah Abah Anom dipersoalkan secara publik oleh pihak-pihak berbeda — 165 mencatat perbedaan itu tanpa memihak dan tidak menetapkan silsilah ke-38.' },
  { rank: 36, key: 'abah-sepuh', name: 'Syaikh Abdullah Mubarok bin Nur Muhammad "Abah Sepuh"', place: 'Pondok Pesantren Suryalaya, Tasikmalaya', dates: 'pendiri pesantren, 7 Rajab 1323 H / 5 September 1905 M', segment: 'SURYALAYA', sources: ['S2'], note: 'Menerima khirqah pada usia 72 tahun dari Mama Guru Agung Syaikh Tholhah bin Talabudin (ke-35); silsilah ke-36.' },
  { rank: 35, key: 'tholhah-talabudin', name: 'Syaikh Tholhah bin Talabudin "Mama Guru Agung"', place: 'Trusmi, Desa Kalisapu, Cirebon', segment: 'SURYALAYA', sources: ['S2'], note: 'Wakil Syaikh Ahmad Khatib yang melanjutkan pengembangan TQN setelah wafatnya Khatib Sambas (1878); silsilah ke-35.' },
]

// ---- shared spine #34 → #01, recorded in S1 ----
const SPINE: SanadNode[] = [
  { rank: 34, key: 'ahmad-khatib-sambas', name: 'Syekh KH. Maulana Ahmad Khotib Sambas', place: 'Sambas / Makkah', dates: 'w. 1878 M', role: 'Pendiri Tarekat Qodiriah wa Naqsabandiyah', founderOf: 'TQN', sources: ['S1', 'S2', 'S3'], note: 'Titik temu (convergence point) ketiga jalur: penomoran S1 dan penomoran resmi Suryalaya sama-sama menempatkannya pada urutan ke-34.' },
  { rank: 33, key: 'syamsuddin-makkah', name: 'Syekh KH. Syamsuddin', place: 'Makkah', sources: ['S1'] },
  { rank: 32, key: 'murod', name: 'Syekh Al-Alamah Murod', place: 'Makkah — w. 1277 H / 1860 M di Madinah', sources: ['S1'] },
  { rank: 31, key: 'abdul-fattah', name: 'Syekh Abdul Fattah', dates: 'w. 1266 H / 1850 M di Madinah', sources: ['S1'] },
  { rank: 30, key: 'alim-utsman', name: 'Syekh Alim Utsman', sources: ['S1'] },
  { rank: 29, key: 'abdul-rohim', name: 'Syekh Abdul Rohim', sources: ['S1'] },
  { rank: 28, key: 'abu-bakar', name: 'Syekh Abu Bakar', sources: ['S1'] },
  { rank: 27, key: 'yahya', name: 'Syekh Yahya', sources: ['S1'] },
  { rank: 26, key: 'hisamuddin', name: 'Syekh Hisamuddin', sources: ['S1'] },
  { rank: 25, key: 'waliyuddin', name: 'Syekh Waliyuddin', sources: ['S1'] },
  { rank: 24, key: 'nurruddin', name: 'Syekh Nurruddin', sources: ['S1'] },
  { rank: 23, key: 'syaripuddin', name: 'Syekh Syaripuddin', sources: ['S1'] },
  { rank: 22, key: 'syamsuddin-2', name: 'Syekh Syamsuddin', sources: ['S1'], note: 'Angka 22 pertama dalam daftar sumber (angka 20 dilewati sumber).' },
  { rank: 21, key: 'muhammad-al-hattaq', name: 'Syekh Muhammad Al-Hattaq', sources: ['S1'] },
  { rank: 19, key: 'abdul-qadir-al-jaelani', name: "Sultoni Al-Aulia'i Sayyidi Syekh Abdul Qodir Al-Jaelani", role: 'Pendiri Qodiriah', founderOf: 'QODIRIYAH', sources: ['S1'], note: 'Angka 20 dilewati oleh daftar sumber — direproduksi apa adanya. Murid dari #18.' },
  { rank: 18, key: 'abu-said-mubarak', name: "Syekh Abu Sa'id Mubarak Al-Majzumi", sources: ['S1'] },
  { rank: 22, key: 'baha-udin-naqsyabandiyah', name: 'Syekh Muhammad Baha\'udin Al-Naqsyabandiyah', role: 'Pendiri Naqsabandiyah', founderOf: 'NAQSABANDIYAH', sources: ['S1'], note: 'Penyisipan jalur Naqsabandiyah: angka 22 dipakai ulang oleh daftar sumber — direproduksi apa adanya.' },
  { rank: 17, key: 'hasan-ali-karakhi', name: 'Syekh Hasan Ali Al-Karakhi', sources: ['S1'] },
  { rank: 16, key: 'abu-al-faraj-turtusi', name: 'Syekh Abu Al-Faraj Al-Turtusi', sources: ['S1'] },
  { rank: 15, key: 'abdul-wahid-tamimi', name: 'Syekh Abdul Wahid Al-Tamimi', sources: ['S1'] },
  { rank: 14, key: 'abu-bakar-syibli', name: 'Syekh Abu Bakar Al-Syibli', sources: ['S1'] },
  { rank: 13, key: 'junaid-al-bagdadi', name: "Sayyidi To'ifatussufiyah Maulana Abu Qasim Junaidi Al-Bagdadi", sources: ['S1'] },
  { rank: 12, key: 'sirrullah-saqati', name: 'Syekh SIRRullah Al-Saqati', sources: ['S1'] },
  { rank: 11, key: 'maruf-karakhi', name: "Syekh Ma'ruf Al-Karakhi", sources: ['S1'] },
  { rank: 10, key: 'ali-bin-musa-ridho', name: 'Syekh Abu Hasan Ali Bin Musa Ridho', sources: ['S1'] },
  { rank: 9, key: 'musa-al-kadhim', name: 'Maulana Syekh Musa Al-Kadhim', sources: ['S1'] },
  { rank: 8, key: 'jafar-shoddiq', name: "Syekh Al-Imam Ja'far Shoddiq", sources: ['S1'] },
  { rank: 7, key: 'muhammad-al-baqir', name: 'Syekh Al-Imam Muhammad Al-Baqir', sources: ['S1'] },
  { rank: 6, key: 'zainal-abidin', name: 'Syekh Al-Imam Zainal Abidin', sources: ['S1'] },
  { rank: 5, key: 'imam-husain', name: 'Sayyidina Syekh Al-Imam Husain', role: 'Cucu Rasulullah ﷺ', sources: ['S1'] },
  { rank: 4, key: 'imam-ali', name: 'Sayyidina wa Maulana Syekh Al-Imam Ali Karramallahu Wajhahu', role: 'Menantu Rasulullah ﷺ', sources: ['S1'] },
  { rank: 3, key: 'rasulullah', name: 'Sayyidul Mursaliin — Rasulillahi Muhammad ﷺ', kind: 'RASUL', sources: ['S1'] },
  { rank: 2, key: 'malak-jibril', name: 'Sayyidunaa Malak Jibril ʿalaihissalam', kind: 'APEX', sources: ['S1'] },
  { rank: 1, key: 'allah', name: 'Robbul Arbab — Allah Subhaanahu wata\'aalaa', kind: 'APEX', sources: ['S1'] },
]

// ---------------- terminals (the two #39 murids recorded in S1) ----------------

export type SanadTerminal = SanadNode & { jalurKey: string }

const TERMINAL_KARAWANG: SanadNode = {
  rank: 39, key: 'abah-gana-karawang', name: 'Al Faqir Kiyai Haji Syekh "Abah Gana Karawang"',
  place: 'Dusun Cikangkung Timur, Desa Rengasdengklok Utara, Kec. Rengasdengklok, Kab. Karawang, Jawa Barat',
  segment: 'KARAWANG_BANTANI', sources: ['S1', 'S5'],
  note: 'Direkam dalam S1 sebagai murid #38 (Ahmad Kadzim Asnawi, Menes). S5 (komunitas, independen): "abah ganda cikangkung, rengasdengklok, karawang — warid ti ahmad kazim bin asnawi banten". Varian sebutan yang terekam: "Abah Ganda", "Abah Gana", "Mama Suganda" (S5).',
}
const TERMINAL_ALBANTANI: SanadNode = {
  rank: 39, key: 'ahmad-sukanta-salmin', name: 'Syekh KH. Agung Ahmad Sukanta bin Salmin',
  place: 'Kaduparasi, Labuan, Pandeglang, Banten',
  dates: '1935 M / 1356 H – 2015 M / 1436 H (S4)',
  segment: 'KARAWANG_BANTANI', sources: ['S1', 'S4', 'S6'],
  note: 'Direkam dalam S1 sebagai murid #38 (Ahmad Kadzim Asnawi, Menes) — satu baris dengan terminal Karawang. Dikenal juga sebagai "Syekh Ahmad Sukanta Salmin Labuan al-Banteni" (S4); TQN Asnawiyah Pandeglang (S6). Disebut "Abah Haji Sukanta" oleh Founder.',
}

// ---------------- jalur (the three recorded lines) ----------------

export type SanadJalur = {
  key: string
  slug: string
  name: string
  shortName: string
  region: string
  summary: string
  summaryId: string
  terminalRank: string
  evidenceLevel: EvidenceLevelKey
  verificationStatus: VerificationStatusKey
  dbEntity: string
}

export const SANAD_JALUR: SanadJalur[] = [
  {
    key: 'KARAWANG',
    slug: 'jalur-karawang-abah-gana',
    name: 'Jalur Karawang — Abah Ganda (Cikangkung, Rengasdengklok)',
    shortName: 'Jalur Karawang',
    region: 'Karawang, Jawa Barat',
    terminalRank: '39a',
    evidenceLevel: 'B',
    verificationStatus: 'TRADITIONAL_ACCOUNT',
    dbEntity: '165-SANAD-000001',
    summary: 'The Karawang transmission recorded in S1: terminal mursyid #39a at Majelis Dzikir Tarekat Al-Qodiriyah wa Naqsabandiyah, Dusun Cikangkung Timur, Rengasdengklok, Karawang — a murid of #38 Tubagus Haji Ahmad Kadzim Asnawi (Menes, Banten), through the Banten/Asnawi line (#37 Suhari Cibeber → #36 Muhammad Asnawi Caringin → #35 Abdul Karim Tanara) down to #34 Ahmad Khotib Sambas. Independently corroborated at community level by S5.',
    summaryId: 'Jalur Karawang sesuai daftar S1: mursyid terminal #39a di Majelis Dzikir Tarekat Al-Qodiriyah wa Naqsabandiyah, Dusun Cikangkung Timur, Rengasdengklok, Karawang — murid #38 Tubagus Haji Ahmad Kadzim Asnawi (Menes, Banten), melalui jalur Banten/Asnawi (#37 Ahmad Suhari Cibeber → #36 Muhammad Asnawi Caringin → #35 Abdul Karim Tanara) turun ke #34 Ahmad Khotib Sambas. Dukungan silang tingkat komunitas dari S5.',
  },
  {
    key: 'AL_BANTANI',
    slug: 'jalur-al-bantani-ahmad-sukanta',
    name: 'Jalur Al-Bantani — Abah Haji Sukanta (Kaduparasi, Labuan)',
    shortName: 'Jalur Al-Bantani',
    region: 'Labuan, Pandeglang, Banten',
    terminalRank: '39b',
    evidenceLevel: 'B',
    verificationStatus: 'TRADITIONAL_ACCOUNT',
    dbEntity: '165-SANAD-000002',
    summary: 'The Al-Bantani transmission recorded in S1: terminal mursyid #39b, Syekh KH. Agung Ahmad Sukanta bin Salmin of Kaduparasi, Labuan, Banten (1935–2015 per S4) — listed in the same source line as the Karawang terminal, taking the tariqa, hirko(h) tasawuf and ijazah from the same #38 Ahmad Kadzim Asnawi (Menes). TQN Asnawiyah Pandeglang context per S6.',
    summaryId: 'Jalur Al-Bantani sesuai daftar S1: mursyid terminal #39b, Syekh KH. Agung Ahmad Sukanta bin Salmin dari Kaduparasi, Labuan, Banten (1935–2015 menurut S4) — tertulis satu baris dengan terminal Karawang, mengambil ilmu tarekat, hirko(h) tasawuf dan ijazah dari #38 Ahmad Kadzim Asnawi (Menes) yang sama. Konteks TQN Asnawiyah Pandeglang dari S6.',
  },
  {
    key: 'SURYALAYA',
    slug: 'jalur-tqn-suryalaya-abah-anom',
    name: 'Jalur TQN Suryalaya — Abah Anom (Tasikmalaya)',
    shortName: 'Jalur TQN Suryalaya',
    region: 'Suryalaya, Tasikmalaya, Jawa Barat',
    terminalRank: '37 (penomoran Suryalaya)',
    evidenceLevel: 'C',
    verificationStatus: 'TRADITIONAL_ACCOUNT',
    dbEntity: '165-SANAD-000003',
    summary: 'The Suryalaya transmission per the official institutional record S2: Abah Anom (Syekh KH. Ahmad Shohibulwafa Tajul Arifin, † 5 September 2011, silsilah ke-37) ← his father Abah Sepuh (Syaikh Abdullah Mubarok bin Nur Muhammad, silsilah ke-36, khirqah at age 72, founder of Pondok Pesantren Suryalaya 1905) ← Syaikh Tholhah bin Talabudin of Kalisapu, Cirebon (silsilah ke-35) ← Syaikh Ahmad Khatib Sambas (ke-34). Numbering agrees with S1 at the #34 anchor.',
    summaryId: 'Jalur Suryalaya menurut catatan resmi institusi (S2): Abah Anom (Syekh KH. Ahmad Shohibulwafa Tajul Arifin, † 5 September 2011, silsilah ke-37) ← ayahnya Abah Sepuh (Syaikh Abdullah Mubarok bin Nur Muhammad, silsilah ke-36, khirqah usia 72 tahun, pendiri Ponpes Suryalaya 1905) ← Syaikh Tholhah bin Talabudin dari Kalisapu, Cirebon (silsilah ke-35) ← Syaikh Ahmad Khatib Sambas (ke-34). Penomoran sepakat dengan S1 pada simpul #34.',
  },
]

// ---------------- assembled chains (render order: terminal → apex) ----------------

export type AssembledChain = {
  jalur: SanadJalur
  nodes: SanadNode[]
}

export function chainFor(jalurKey: string): AssembledChain | null {
  const jalur = SANAD_JALUR.find((j) => j.key === jalurKey)
  if (!jalur) return null

  let nodes: SanadNode[]
  if (jalur.key === 'SURYALAYA') {
    const terminal: SanadNode = {
      ...SEG_SURYALAYA[0],
      // the terminal is presented as recorded; rank kept as source numbering
    }
    nodes = [terminal, ...SEG_SURYALAYA.slice(1), ...SPINE]
  } else {
    const terminal = jalur.key === 'KARAWANG' ? TERMINAL_KARAWANG : TERMINAL_ALBANTANI
    nodes = [terminal, ...SEG_BANTEN, ...SPINE]
  }
  return { jalur, nodes }
}

export function allChains(): AssembledChain[] {
  return SANAD_JALUR.map((j) => chainFor(j.key)!).filter(Boolean)
}

export const SANAD_POLICY = {
  statusNote:
    'Recorded chains are displayed AS RECORDED from their identified sources. A recorded chain is a record of tradition — not a verified historical fact, not a spiritual legitimacy certificate, and never a certificate issued by 165.',
  statusNoteId:
    'Sanad yang terekam ditampilkan APA ADANYA dari sumbernya yang teridentifikasi. Sanad terekam adalah catatan tradisi — bukan fakta sejarah terverifikasi, bukan sertifikat legitimasi ruhani, dan bukan sesuatu yang diterbitkan 165.',
  collationNote:
    'Formal collation (Level A) is open: ijazah letters, talqin records, silsilah manuscripts and oral testimony from the jalur holders themselves can be deposited through the contribute workflow. Until then every chain carries its current evidence level — and stays below its ceiling.',
  collationNoteId:
    'Kolasi formal (Level A) terbuka: surat ijazah, catatan talqin, manuskrip silsilah, dan kesaksian lisan dari pemegang jalur dapat didepositkan lewat alur contribute. Sampai saat itu setiap sanad memakai tingkat buktinya sekarang — tidak pernah melebihi langit-langitnya.',
  numberingNote:
    'Faithful-reproduction note: the S1 source list skips the numeral 20 and uses the numeral 22 twice (once in the Qadiri spine, once for the founder of the Naqshbandiyya). 165 reproduces the list as recorded and does not silently renumber it.',
  numberingNoteId:
    'Catatan reproduksi setia: daftar sumber S1 melewati angka 20 dan memakai angka 22 dua kali (sekali di tulang punggung Qodiriah, sekali untuk pendiri Naqsabandiyah). 165 mereproduksi daftar apa adanya dan tidak diam-diam menomorinya ulang.',
  successornote:
    'Succession note: public records disagree about who (if anyone) continues after Abah Anom in the Suryalaya line. 165 records the disagreement without adjudicating it — no silsilah ke-38 is asserted here.',
  successorNoteId:
    'Catatan suksesi: catatan publik berbeda pendapat tentang siapa (jika ada) penerus Abah Anom di jalur Suryalaya. 165 mencatat perbedaan itu tanpa memutus — silsilah ke-38 tidak ditegaskan di sini.',
}
