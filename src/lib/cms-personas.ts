// ============================================================
// 165 — CMS Peran & Persona: registry Dewan Pakar 46
// Satu persona Master (gabungan 46 dewan pakar lintas bidang,
// "The Ultimate Problem Solver") + 46 persona pakar per bidang.
// Persona aktif dipakai sebagai nama penulis artikel baru —
// seperti "menulis sebagai…" di WordPress.
// Self-seed: tabel kosong → diisi default otomatis saat GET.
// ============================================================
import type { PrismaClient } from '@prisma/client'

export type PersonaSeed = {
  key: string
  name: string
  field: string
  title: string
  bio: string
  icon: string
  master: boolean
  active: boolean
  order: number
}

const MASTER: PersonaSeed = {
  key: 'master',
  name: 'Master Polymath Sage Universal',
  field: 'The Ultimate Problem Solver',
  title: 'Gabungan 46 Dewan Pakar Lintas Bidang',
  bio: 'Peran gabungan seluruh Dewan Pakar 46 — setiap bidang dikuasai dengan pengalaman 150 tahun. Aktifkan untuk menulis artikel dan kitab dwibahasa Arab–Indonesia dengan nama ini.',
  icon: 'crown',
  master: true,
  active: true,
  order: 0,
}

// 46 dewan pakar lintas bidang — urut: ilmu keislaman & warisan 165,
// bahasa & sejarah, hukum & ekonomi, teknologi & kreatif, sosial & riset.
const EXPERT_FIELDS: Array<[string, string, string, string]> = [
  // [bidang, nama penulis, deskripsi kemampuan, ikon]
  ['Akidah & Ilmu Kalam', "Ahli Akidah & Ilmu Kalam", 'Menguji dan menjelaskan akidah Ahlus Sunnah wal Jamaah secara lugas.', 'moon'],
  ["Tafsir Al-Qur'an", "Ahli Tafsir Al-Qur'an", 'Menafsirkan ayat dengan ihtiyat, merujuk tafsir mu\'tabar.', 'book-open'],
  ['Hadis & Ulumul Hadis', 'Ahli Hadis & Ulumul Hadis', 'Menelusuri sanad dan derajat hadis, pemisah teks riwayat dan pandangan pribadi.', 'scroll'],
  ["Fikih Ibadah Mazhab Syafi'i", "Ahli Fikih Mazhab Syafi'i", 'Menjawab persoalan ibadah harian sesuai fiqih mazhab Syafi\u2019i.', 'scale'],
  ['Tasawuf & Akhlak TQN', 'Ahli Tasawuf & Akhlak TQN', 'Membahas adab, akhlak, dan etika suluk Qodiriyah Naqsabandiyah.', 'heart'],
  ['Wirid & Dzikir TQN 165', 'Ahli Wirid & Dzikir', 'Menyusun panduan praktik wiridian 165 dengan rujukan amal TQN.', 'sparkles'],
  ['Sejarah Islam Nusantara', 'Ahli Sejarah Islam Nusantara', 'Menelusuri dakwah Islam di Nusantara: fakta, sumber, dan periodisasi.', 'landmark'],
  ['Sejarah Suryalaya & TQN', 'Ahli Sejarah Suryalaya', 'Menguai kronologi Surialaya, TQN, dan jalinannya dengan 165.', 'landmark'],
  ['Silsilah & Genealogi', 'Ahli Silsilah & Genealogi', 'Menelusuri nasab dan silsilah jalur Karawang–Sukanta–Suryalaya.', 'network'],
  ['Manuskrip & Kodikologi', 'Ahli Manuskrip & Kodikologi', 'Membaca, mendeskripsikan, dan melestarikan naskah kuno.', 'scroll-text'],
  ['Epigrafi & Prasasti', 'Ahli Epigrafi', 'Membaca prasasti, nisan, dan tulisan batu untuk bukti historis.', 'landmark'],
  ['Bahasa Arab', 'Ahli Bahasa Arab', 'Menerjemah dan menyunting teks Arab: nahwu, sharaf, balaghah.', 'languages'],
  ['Bahasa Sunda & Priangan', 'Ahli Bahasa Sunda', 'Menulis dan menyunting konten Bahasa Sunda serta budaya Priangan.', 'languages'],
  ['Bahasa Inggris', 'Penerjemah Bahasa Inggris', 'Menerjemahkan dokumen 165 ke/dari Bahasa Inggris dengan akurat.', 'languages'],
  ['Penyuntingan Bahasa Indonesia', 'Penyunting Bahasa Indonesia', 'Menjaga EYD, tata bahasa, dan gaya penulisan konsisten di seluruh situs.', 'pen-tool'],
  ['Arkeologi Islam', 'Ahli Arkeologi Islam', 'Menafsirkan temuan situs, situs makam, dan artefak sejarah.', 'landmark'],
  ['Hukum Perundang-undangan RI', 'Ahli Hukum Indonesia', 'Memastikan kegiatan 165 patuh regulasi yang berlaku di Indonesia.', 'gavel'],
  ['Hukum Wakaf & Perdata', 'Ahli Hukum Wakaf', 'Mengurus status tanah, wakaf, dan badan hukum yayasan.', 'gavel'],
  ['Ekonomi Syariah', 'Ahli Ekonomi Syariah', 'Merancang program ekonomi umat sesuai prinsip syariah.', 'coins'],
  ['Kewirausahaan & UMKM', 'Ahli Kewirausahaan', 'Membina unit usaha dan kemandirian finansial komunitas.', 'trending-up'],
  ['Akuntansi & Keuangan', 'Ahli Akuntansi & Keuangan', 'Menyusun laporan keuangan, anggaran, dan transparansi dana.', 'calculator'],
  ['Web Fullstack (Next.js & React)', 'Pakar Web Fullstack', 'Membangun dan merawat situs 165: Next.js, React, TypeScript.', 'code'],
  ['Keamanan Siber', 'Pakar Keamanan Siber', 'Mengamankan data pengguna, autentikasi, dan praktik terbaik.', 'shield'],
  ['Basis Data & Arsitektur Sistem', 'Pakar Basis Data', 'Merancang skema data yang bersih dan kueri yang efisien.', 'database'],
  ['Kecerdasan Buatan & Machine Learning', 'Pakar AI & Machine Learning', 'Menghadirkan fitur cerdas: pencarian, rekomendasi, dan bantuan AI.', 'brain'],
  ['DevOps & Infrastruktur', 'Pakar DevOps & Infrastruktur', 'Menjaga deployment, uptime, dan performa layanan 165.', 'server'],
  ['Desain UI/UX', 'Pakar Desain UI/UX', 'Menjaga antarmuka cantik, mudah, dan aksesibel untuk semua usia.', 'palette'],
  ['Fotografi Dokumenter', 'Pakar Fotografi Dokumenter', 'Mendokumentasikan kegiatan majelis dengan foto berbobot.', 'camera'],
  ['Produksi Video & Multimedia', 'Pakar Produksi Video', 'Memproduksi video kajian, profil, dan materi edukasi.', 'video'],
  ['Audio & Produksi Qasidah (TTS)', 'Pakar Audio & TTS', 'Menghasilkan audio qasidah dan bacaan dengan kualitas terbaik.', 'music'],
  ['Musikologi Rebana & Qasidah', 'Ahli Musikologi Rebana', 'Meneliti irama rebana, qasidah, dan tradisi seni sufi.', 'music'],
  ['Jurnalistik & Penulisan Kreatif', 'Pakar Jurnalistik', 'Menulis kabar kegiatan dengan struktur jurnalistik yang rapi.', 'pen-tool'],
  ['Penerbitan & Penyuntingan Naskah', 'Pakar Penerbitan', 'Menyiapkan naskah siap terbit: buku, brosur, dan laporan.', 'book-open'],
  ['Perpustakaan & Ilmu Informasi', 'Pustakawan Digital', 'Mengelola metadata, katalog, dan temu balik pengetahuan.', 'library'],
  ['Museum & Kurasi Warisan', 'Ahli Kurasi Warisan', 'Mengkurasi koleksi warisan 165 untuk pameran digital.', 'archive'],
  ['Pendidikan & Kurikulum', 'Ahli Pendidikan & Kurikulum', 'Merancang kurikulum Akademi 165 dan materi belajar.', 'graduation-cap'],
  ['Pedagogi Pesantren', 'Ahli Pedagogi Pesantren', 'Menjaga metode belajar kitab kuning dan tradisi pesantren.', 'school'],
  ['Psikologi & Bimbingan Konseling', 'Ahli Psikologi & Konseling', 'Menemani persoalan jiwa anggota dengan pendekatan sehat.', 'brain'],
  ['Kesehatan & Gizi Keluarga', 'Ahli Kesehatan & Gizi', 'Menulis panduan kesehatan keluarga yang aman dan teruji.', 'stethoscope'],
  ['Pengembangan Masyarakat', 'Ahli Pengembangan Masyarakat', 'Merancang program pemberdayaan jamaah dan warga sekitar.', 'users'],
  ['Antropologi Budaya Sunda', 'Ahli Antropologi Budaya', 'Mengkaji adat, tradisi, dan kearifan lokal Sunda secara etis.', 'globe'],
  ['Kaligrafi & Seni Rupa Islam', 'Ahli Kaligrafi & Seni Rupa', 'Menghasilkan karya kaligrafi dan identitas visual islami.', 'palette'],
  ['Arsitektur Masjid & Tata Ruang', 'Ahli Arsitektur Masjid', 'Merancang ruang majelis dan masjid yang nyaman.', 'building-2'],
  ['Pertanian & Pemberdayaan Petani', 'Ahli Pertanian', 'Membina pertanian komunitas dan ketahanan pangan.', 'leaf'],
  ['Lingkungan & Keberlanjutan', 'Ahli Lingkungan Hidup', 'Menjaga program 165 ramah lingkungan dan berkelanjutan.', 'leaf'],
  ['Statistika & Riset Kuantitatif', 'Ahli Statistika & Riset', 'Mengolah data survei dan statistik riset 165 dengan benar.', 'chart'],
  ['Manajemen Proyek & Tata Kelola', 'Ahli Manajemen & Tata Kelola', 'Menyusun rencana kerja, tata kelola, dan evaluasi program.', 'network'],
]

export const DEFAULT_PERSONAS: PersonaSeed[] = [
  MASTER,
  ...EXPERT_FIELDS.map(([field, name, bio, icon], i): PersonaSeed => ({
    key: `p-${String(i + 1).padStart(2, '0')}`,
    name,
    field,
    title: `Dewan Pakar 46 · pengalaman 150 tahun`,
    bio,
    icon,
    master: false,
    active: false,
    order: i + 1,
  })),
]

/** Isi tabel persona dengan default bila masih kosong (idempoten). */
export async function ensurePersonaDefaults(db: PrismaClient): Promise<void> {
  const count = await db.cmsPersona.count()
  if (count > 0) return
  await db.cmsPersona.createMany({
    data: DEFAULT_PERSONAS.map((p) => ({
      key: p.key, name: p.name, field: p.field, title: p.title,
      bio: p.bio, icon: p.icon, master: p.master, active: p.active, order: p.order,
    })),
  })
}
