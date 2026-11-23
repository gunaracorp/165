// 165 — ARSIP WARISAN (beta, roadmap hari ke-70 & ke-76)
// Data untuk tab "Manuskrip" dan tab "Museum" di ruang Arsip.
//
// DISIPLIN KEJUJURAN (konstitusi editorial 165):
//  · Tidak ada koleksi yang dikarang. Entri manuskrip hanya merujuk benda
//    yang SUDAH terdokumentasi di arsip situs (S1/S2, arsip bacaan CMS,
//    diagram sanad) — sisanya slot "menunggu deposit" yang tampil jujur.
//  · Museum digital memisahkan koleksi yang SUDAH TAYANG (bacaan, diagram,
//    audio beta) dari kategori yang MENUNGGU DEPOSIT (fotografi, video,
//    oral history) — angka nol tetap ditampilkan, tidak di-pads.
//  · Digitalisasi halaman asli (scan/foto manuskrip tua) menunggu unggahan
//    koleksi majelis — slot /manuskrip/<id>/ hal.<n>.jpg disiapkan.

export type Digitalisasi = 'teks' | 'diagram' | 'audio-beta' | 'menunggu'
export type BuktiLevel = 'terdokumentasi' | 'tradisi-cetak' | 'menunggu-deposit'

export interface ManuskripEntry {
  id: string
  judul: string
  jenis: string
  asal: string
  tempat: string
  era: string
  bukti: BuktiLevel
  digitalisasi: Digitalisasi
  /** section key ruang tempat koleksi digitalnya hidup */
  ruang?: string
  note: string
}

export const MANUSKRIP_ENTRIES: ManuskripEntry[] = [
  {
    id: 's1-sanad-tiga-jalur',
    judul: 'Catatan Sanad Tiga Jalur (S1)',
    jenis: 'Naskah sanad',
    asal: 'Jalur Karawang — didirect Founder (S1)',
    tempat: 'Cikangkung, Rengasdengklok, Karawang',
    era: 'Rekaman jalur; tanggal simpul mengikuti sumber biografi publik (S9)',
    bukti: 'terdokumentasi',
    digitalisasi: 'diagram',
    ruang: 'trust',
    note: '39 simpul dari Apex sampai tiga terminal — digitalisasi berupa diagram interaktif di ruang Kejujuran; scan naskah asli menunggu deposit.',
  },
  {
    id: 'nuril-anwar',
    judul: 'Wiridian Nuril Anwar',
    jenis: 'Wiridian Suryalaya',
    asal: 'TQN Suryalaya (S2 · suryalaya.org)',
    tempat: 'Pondok Pesantren Suryalaya, Pagerageung, Tasikmalaya',
    era: 'Amalan pagi-sore yang mengiringi para pirsah',
    bukti: 'terdokumentasi',
    digitalisasi: 'teks',
    ruang: 'wiridian',
    note: 'Teks wiridian terdigitalisasi penuh di ruang Bacaan (CMS) — Arab, Latin, arti & tafsir; tersimpan untuk offline.',
  },
  {
    id: 'qasidah-ibadallah-rijalallah',
    judul: 'Qasidah Ibadallah Rijalallah Aghitsuna li Ajlillah',
    jenis: 'Qasidah 13 bait',
    asal: 'Jalur Karawang — arsip bacaan 165 (S1)',
    tempat: 'Majelis TQN 165 · Karawang',
    era: 'Dilantunkan dalam wiridian majelis',
    bukti: 'terdokumentasi',
    digitalisasi: 'audio-beta',
    ruang: 'wiridian',
    note: 'Teks Arab + Latin + arti Sunda/Indonesia + tafsir lengkap; narasi arti audio (beta) 14 berkas tersedia — lantunan asli majelis menunggu rekaman.',
  },
  {
    id: 'manaqib-al-ghauth',
    judul: 'Manaqib Syekh Abdul Qadir Al-Jaelani',
    jenis: 'Kitab manaqib (tradisi cetak klasik)',
    asal: 'Tradisi manaqib majelis TQN',
    tempat: 'Koleksi majelis — salinan beragam',
    era: 'Karya klasik; pembacaan manaqib berlanjut sampai kini',
    bukti: 'tradisi-cetak',
    digitalisasi: 'menunggu',
    ruang: 'manaqib',
    note: 'Ringkasan kedudukan Ghaus tersedia di ruang Manaqib; digitalisasi halaman salinan koleksi majelis menunggu deposit (slot terbuka).',
  },
  {
    id: 'dokumen-kendali-000',
    judul: 'Master Control 000 & dokumen kendali 165',
    jenis: 'Arsip tata kelola digital',
    asal: 'Arsip internal 165',
    tempat: 'Ruang Dokumen (verbatim bundle)',
    era: 'Dibangun sejak v0.1 — terus-menerus dibersihkan',
    bukti: 'terdokumentasi',
    digitalisasi: 'teks',
    ruang: 'documents',
    note: 'Enam dokumen kendali/kanonik dirender verbatim — konstitusi editorial, kebijakan sumber, governance.',
  },
]

// ---------- MUSEUM DIGITAL (beta, hari ke-76) ----------

export interface MuseumItem {
  id: string
  nama: string
  jenis: string
  status: 'tayang' | 'menunggu-deposit'
  jumlah: string
  ruang?: string
  note: string
}

export const MUSEUM_KOLEKSI: MuseumItem[] = [
  {
    id: 'bacaan-digital',
    nama: 'Koleksi Bacaan & Wiridian',
    jenis: 'Teks digital (CMS)',
    status: 'tayang',
    jumlah: '4 entri · qasidah 13 bait · Nuril Anwar · wiridian TQN · dzikir harian',
    ruang: 'wiridian',
    note: 'Arab, Latin, arti Sunda & Indonesia, tafsir — tanpa database, tampil di mana pun situs di-deploy.',
  },
  {
    id: 'diagram-sanad',
    nama: 'Diagram Sanad Tiga Jalur',
    jenis: 'Visualisasi arsip (S1/S2/S9)',
    status: 'tayang',
    jumlah: '39 simpul · 3 jalur terminal · tafsir tiap simpul',
    ruang: 'trust',
    note: 'Konsiderasi ke-34 Syekh Khatib Sambas; tanggal hanya dari sumber biografi publik — sisanya ruang terbuka.',
  },
  {
    id: 'audio-qasidah',
    nama: 'Narasi Arti Qasidah (beta)',
    jenis: 'Audio sintesis berlabel jujur',
    status: 'tayang',
    jumlah: '14 berkas (pengantar + 13 bait)',
    ruang: 'wiridian',
    note: 'Narasi arti untuk belajar makna — bukan lantunan majelis; slot rekaman asli tersedia.',
  },
  {
    id: 'peta-bahasa',
    nama: 'Peta Bahasa & Registri Negara',
    jenis: 'Registri multibahasa (kurasi)',
    status: 'tayang',
    jumlah: 'Registri bahasa + negara dengan status jujur per bahasa',
    ruang: 'languages',
    note: 'Mesin menyusun draf, dewan menjaga makna — kurasi berlanjut (beta).',
  },
  {
    id: 'fotografi-majelis',
    nama: 'Fotografi Majelis & Artefak Fisik',
    jenis: 'Foto · artefak · dokumen fisik',
    status: 'menunggu-deposit',
    jumlah: '0 terdaftar — masuk hanya dengan hak, sumber & subjek tercatat',
    note: 'Slot unggahan disiapkan: /museum/<id>.jpg dengan metadata sumber. Tidak ada placeholder palsu.',
  },
  {
    id: 'oral-history',
    nama: 'Dokumentasi Video & Oral History',
    jenis: 'Kesaksian terrekam (Level D)',
    status: 'menunggu-deposit',
    jumlah: '0 terdaftar — kesaksian dipelihara apa adanya',
    note: 'Level D: disimpan sebagai kesaksian, tidak pernah diam-diam dinaikkan jadi fakta dokumen.',
  },
]

export const BUKTI_META: Record<BuktiLevel, { label: string; hue: string }> = {
  terdokumentasi: { label: 'Terdokumentasi', hue: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25' },
  'tradisi-cetak': { label: 'Tradisi cetak', hue: 'text-sky-700 dark:text-sky-300 bg-sky-500/10 border-sky-500/25' },
  'menunggu-deposit': { label: 'Menunggu deposit', hue: 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/25' },
}

export const DIGITALISASI_META: Record<Digitalisasi, { label: string; hue: string }> = {
  teks: { label: 'Teks tayang', hue: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25' },
  diagram: { label: 'Diagram tayang', hue: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25' },
  'audio-beta': { label: 'Audio beta', hue: 'text-violet-700 dark:text-violet-300 bg-violet-500/10 border-violet-500/25' },
  menunggu: { label: 'Menunggu scan', hue: 'text-muted-foreground bg-secondary border-border' },
}
