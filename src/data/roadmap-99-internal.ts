// ============================================================
// 165 — ROADMAP 99 (INTERNAL · PRIVAT PENDIRI)
// Peta jalan menyempurnakan website TQN 165: 99 langkah, 10 fase.
// DOKTRIN AKSES: data ini hanya boleh diimpor oleh API route
// terproteksi (/api/roadmap/internal — menuntut sesi admin).
// JANGAN diimpor komponen client mana pun (akan terbawa ke bundle
// publik). Tidak masuk sitemap, tidak diindeks mesin pencari.
// Hanya pendiri + steward 165 yang mengetahui isinya.
// ============================================================

export type RoadmapStatus = 'selesai' | 'berjalan' | 'direncanakan'

export interface RoadmapFase {
  id: number
  nama: string
  singkat: string
  tema: string
}

export interface RoadmapStep {
  n: number
  fase: number
  judul: string
  detail: string
  status: RoadmapStatus
}

export const ROADMAP_META = {
  judul: 'Roadmap 99 — Menyempurnakan Website TQN 165',
  deskripsi:
    'Peta jalan internal pendiri: 99 langkah berurutan, dari kisah Tuan Syekh Abdul Qodir Al-Jaelani hulu ke hilir, kisah syekh Naqsyabandiyah super lengkap, sampai operasional situs. Privat — bukan untuk publik.',
  total: 99,
  diperbarui: '24 November 2026',
  prinsip:
    'Tiap langkah mengikuti doktrin 165: setiap pernyataan ber-grade bukti; tidak ada klaim tanpa sumber; tidak ada penghapusan senyap.',
} as const

export const ROADMAP_FASES: RoadmapFase[] = [
  { id: 1, nama: 'Fondasi & Direktori', singkat: 'Fondasi', tema: 'Panggung situs kuat dulu — struktur, metadata, dan standar data sebelum isi disempurnakan.' },
  { id: 2, nama: 'Tuan Syekh Abdul Qodir Al-Jaelani — Hulu ke Hilir', singkat: 'Al-Jaelani', tema: 'Satu bab per langkah: perjalanan hidup dari kelahiran di Jilan sampai makam di Baghdad.' },
  { id: 3, nama: 'Silsilah Emas Naqsyabandiyah — Kisah Syekh Super Lengkap', singkat: 'Naqsyabandiyah', tema: 'Satu langkah = satu syekh: rantai emas dari Abu Bakar ash-Shiddiq hingga penyambung Nusantara.' },
  { id: 4, nama: 'TQN Nusantara — Suryalaya & Jalur Karawang–Sukanta', singkat: 'TQN Nusantara', tema: 'Dari Hijaz ke Garut, Suryalaya, lalu Karawang: tokoh, halau-halau, tradisi, dan jalur ijazah.' },
  { id: 5, nama: 'Kitab & Teks Rujukan (Arab + Indonesia saja)', singkat: 'Kitab ar+id', tema: 'Satu langkah = satu bagian kitab — teks Arab riwayah berdampingan terjemah Indonesia.' },
  { id: 6, nama: 'CMS & Ruang Admin', singkat: 'CMS', tema: 'Panel WordPress-like yang sudah hidup, disempurnakan perlahan.' },
  { id: 7, nama: 'SEO & Indeksasi Google', singkat: 'SEO', tema: 'Supaya 515 URL benar-benar masuk indeks Google dan AI assistant.' },
  { id: 8, nama: 'Fitur Interaktif & PWA', singkat: 'Interaktif', tema: 'Website yang bisa dipakai saat dzikir — bukan sekadar dibaca.' },
  { id: 9, nama: 'Bahasa & Aksesibilitas', singkat: 'Bahasa', tema: 'Enam bahasa, transliterasi konsisten, semua orang bisa mengakses.' },
  { id: 10, nama: 'Operasional & Keamanan', singkat: 'Operasional', tema: 'Rumah yang terawat: rahasia, cadangan, dan langkah ke-100.' },
]

export const ROADMAP_99: RoadmapStep[] = [
  // ---------------- FASE 1 — Fondasi & Direktori (1–8) ----------------
  { n: 1, fase: 1, judul: 'Audit peta situs & inventaris konten', detail: 'Semua rute dihitung dan dicatat: 515 URL di sitemap (glossary, library, atlas, institution, archive, ask). Celah dan duplikat teridentifikasi.', status: 'selesai' },
  { n: 2, fase: 1, judul: 'Konsistensi entri lintas direktori', detail: 'Setiap tokoh, tempat dan kitab punya satu entri induk; halaman lain menautkannya lewat slug — tanpa entri kembar antara glossary, atlas dan library.', status: 'berjalan' },
  { n: 3, fase: 1, judul: 'Standar metadata tiap rute', detail: 'Title, description, canonical dan OpenGraph lahir otomatis dari generateMetadata di semua tipe halaman.', status: 'selesai' },
  { n: 4, fase: 1, judul: 'JSON-LD per tipe halaman', detail: 'FAQPage untuk /ask, Article untuk /library, BreadcrumbList dan Organization global — dibaca mesin pencari tanpa menebak.', status: 'selesai' },
  { n: 5, fase: 1, judul: 'Sitemap dinamis & robots', detail: 'sitemap.xml diregenerasi dari data nyata dan robots.txt membuka ruang pengetahuan, menutup API/admin.', status: 'selesai' },
  { n: 6, fase: 1, judul: 'Grade bukti menyala di semua entri', detail: 'Setiap pernyataan ber-evidence level, status verifikasi dan provenance — doktrin: Unknown is better than fabricated certainty.', status: 'berjalan' },
  { n: 7, fase: 1, judul: 'Snapshot statistik & data segar', detail: 'snapshot-counts.json + API stats menjaga angka di halaman depan selalu sinkron dengan registri.', status: 'selesai' },
  { n: 8, fase: 1, judul: 'App-shell v.4 & navigasi pil', detail: 'Header pil kaca mengukur dirinya sendiri, seksi hash-router, AppBar bawah di mobile.', status: 'selesai' },

  // ---------------- FASE 2 — Al-Jaelani hulu ke hilir (9–22) ----------------
  { n: 9, fase: 2, judul: 'Bab 1 — Kelahiran di Jilan & silsilah syarif (470 H / 1077 M)', detail: 'Lahir di Jilan, Persia; silsilah syarif dari kedua jalur keluarga — ditulis dengan grade sumber manaqib.', status: 'direncanakan' },
  { n: 10, fase: 2, judul: 'Bab 2 — Masa kecil & pendidikan awal di Jilan', detail: 'Hafalan Al-Qur\'an dan bibit zuhud sejak remaja; narasi ditandai: mana riwayat kuat, mana kisah populer.', status: 'direncanakan' },
  { n: 11, fase: 2, judul: 'Bab 3 — Keberangkatan ke Baghdad (usia 18)', detail: 'Perpisahan dengan ibunda, pesan ilmu dan amanah; jalur perjalanan Jilan–Baghdad digambarkan di atlas.', status: 'direncanakan' },
  { n: 12, fase: 2, judul: 'Bab 4 — Guru-guru & kurikulum ilmu di Baghdad', detail: 'Fiqih Hanbali, hadits, tafsir; daftar guru dengan catatan sumber per nama.', status: 'direncanakan' },
  { n: 13, fase: 2, judul: 'Bab 5 — Pengambilan thariqah & penyulaman pertama', detail: 'Titik awal jalan hati; hubungan murid–guru thariqah digambarkan dalam grafik sanad.', status: 'direncanakan' },
  { n: 14, fase: 2, judul: 'Bab 6 — Zuhud 25 tahun di padang puing', detail: 'Periode khalwat dan riadhah; disorot hati-hati sebagai fase spiritual, terpisah jelas dari fase dakwah.', status: 'direncanakan' },
  { n: 15, fase: 2, judul: 'Bab 7 — Kembali ke Baghdad: dakwah hukum → dakwah hati', detail: 'Perubahan gaya dakwah menuju majelis zuhud; transisi yang menjadi penanda akhir fase pendidikan.', status: 'direncanakan' },
  { n: 16, fase: 2, judul: 'Bab 8 — Madrasah & Ribath: dua menara pendidikan', detail: 'Ilmu formal dan pembinaan thariqah berjalan berdampingan; struktur murid-murid majelis.', status: 'direncanakan' },
  { n: 17, fase: 2, judul: 'Bab 9 — Khashaish & karamah pilihan', detail: 'Kisah manaqib terkurasi dengan grade: tiap kisah punya sumber, tak ada klaim tanpa jejak.', status: 'direncanakan' },
  { n: 18, fase: 2, judul: 'Bab 10 — Karya tulis besar', detail: 'al-Ghunya, al-Fath ar-Rabbani, Futuh al-Ghaib, Sirr al-Asrar — profil tiap kitab di library dan rencana terjemahan ar+id.', status: 'direncanakan' },
  { n: 19, fase: 2, judul: 'Bab 11 — Murid-murid & peta pengaruh', detail: 'Para murid langsung dan jaringan pengajian; entri institution untuk majelis-majelis yang berlanjut.', status: 'direncanakan' },
  { n: 20, fase: 2, judul: 'Bab 12 — Wafat (561 H / 1166 M) & makam', detail: 'Kondisi akhir, wasiat, dan makam di Baghdad — titik akhir garis hulu-hilir.', status: 'direncanakan' },
  { n: 21, fase: 2, judul: 'Bab 13 — Ziarah & pengaruh global', detail: 'Dari Baghdad ke Asia, Afrika dan Nusantara: bagaimana namanya diangkat di majelis-majelis tarekat.', status: 'direncanakan' },
  { n: 22, fase: 2, judul: 'Bab 14 — Lini masa interaktif hulu-hilir', detail: 'Seksi Manaqib mendapat lini masa visual 470–561 H yang bisa diklik per bab (terhubung atlas + library).', status: 'direncanakan' },

  // ---------------- FASE 3 — Silsilah Emas Naqsyabandiyah (23–40) ----------------
  { n: 23, fase: 3, judul: 'Peta silsilah emas interaktif', detail: 'Grafik sanad yang bisa dijelajahi (API sanad sudah hidup): klik syekh → profil, wilayah, kelanjutan rantai.', status: 'berjalan' },
  { n: 24, fase: 3, judul: 'Abu Bakar ash-Shiddiq — pangkal rantai', detail: 'Asal silsilah Naqsyabandiyah dari sahabat pertama; profil dan makna pangkal rantai.', status: 'direncanakan' },
  { n: 25, fase: 3, judul: 'Salman al-Farisi', detail: 'Penyambung pertama; kisah pencarian kebenarannya sebagai pelajaran jalan thariqah.', status: 'direncanakan' },
  { n: 26, fase: 3, judul: 'Qasim bin Muhammad bin Abu Bakar', detail: 'Generasi tabi\'in di Madinah; penerus amanah dalam keluarga sahabat.', status: 'direncanakan' },
  { n: 27, fase: 3, judul: 'Ja\'far ash-Shadiq', detail: 'Imam ilmu lahir dan batin; simpang dua jalur ilmu dalam rantai.', status: 'direncanakan' },
  { n: 28, fase: 3, judul: 'Abu Yazid al-Busthami', detail: 'Bayazid Bastami: fanā\' dan kisah-kisah ekstremnya — ditandai grade: mana riwayat, mana anekdot populer.', status: 'direncanakan' },
  { n: 29, fase: 3, judul: 'Abu al-Hasan al-Kharqani', detail: 'Pewaris maqam tanpa tarikan awal; kisah adab dan kejujuran.', status: 'direncanakan' },
  { n: 30, fase: 3, judul: 'Abu Ali al-Farmadi', detail: 'Guru khanaqah di kawasan Tus; simpang antara ilmu madrasah dan jalan thariqah.', status: 'direncanakan' },
  { n: 31, fase: 3, judul: 'Yusuf al-Hamadani', detail: 'Khwajagan pertama; pengembangan metode yang dekat dengan sunnah.', status: 'direncanakan' },
  { n: 32, fase: 3, judul: 'Abdul Khaliq al-Gujdawani — delapan kaidah', detail: 'Kaidah asal (khalwat dar anjuman dan saudaranya) yang menjadi tulang metode Naqsyabandiyah.', status: 'direncanakan' },
  { n: 33, fase: 3, judul: 'Arif ar-Riwakri', detail: 'Profil lengkap + posisi dalam rantai (glossary + library).', status: 'direncanakan' },
  { n: 34, fase: 3, judul: 'Mahmud al-Injir al-Faghnawi', detail: 'Profil lengkap; penurunan metode di Faghna.', status: 'direncanakan' },
  { n: 35, fase: 3, judul: 'Ali ar-Ramitani', detail: 'Profil lengkap; khawajagan di Ramitan.', status: 'direncanakan' },
  { n: 36, fase: 3, judul: 'Muhammad Baba as-Samasi', detail: 'Profil lengkap; adab kepada guru sebagai pelajaran utama.', status: 'direncanakan' },
  { n: 37, fase: 3, judul: 'Sayyid Amir Kulal', detail: 'Profil lengkap; jembatan menuju pemantap thariqah.', status: 'direncanakan' },
  { n: 38, fase: 3, judul: 'Bahauddin an-Naqsyaband — pemantap thariqah', detail: 'Thariqah menurut namanya: diam, tafakur, khalwat dar anjuman; Bokhara sebagai pusat (atlas).', status: 'direncanakan' },
  { n: 39, fase: 3, judul: 'Penyambung rantai pasca-Bokhara hingga Nusantara', detail: 'Satu langkah per syekh penyambung; silsilah diverifikasi dengan dokumen jam\'iyyah dan ijazah.', status: 'direncanakan' },
  { n: 40, fase: 3, judul: 'Rantai gabungan TQN: Qodiriyah × Naqsyabandiyah', detail: 'Visual satu silsilah ganda — jalur Qodiriyah dan jalur Naqsyabandiyah bertemu dalam TQN; grafik gabungan di seksi Manaqib.', status: 'direncanakan' },

  // ---------------- FASE 4 — TQN Nusantara (41–52) ----------------
  { n: 41, fase: 4, judul: 'Peta penyebaran TQN di Nusantara', detail: 'Satu peta atlas: titik-titik masuk thariqah, jalur dakwah, dan halau-halau besar.', status: 'direncanakan' },
  { n: 42, fase: 4, judul: 'Abah Sepuh Papandayan — profil lengkap', detail: 'Biografi Syekh Abdul Qodir bin Abdul Muthalib — penyebaran TQN di Garut dan Jawa Barat; diverifikasi dengan sumber jam\'iyyah.', status: 'direncanakan' },
  { n: 43, fase: 4, judul: 'Abah Anom Suryalaya — profil lengkap', detail: 'Biografi dan perjalanan pengemban TQN di Suryalaya, Tasikmalaya; haul dan tradisi.', status: 'direncanakan' },
  { n: 44, fase: 4, judul: 'Jalur Abah Karawang — silsilah & kisah', detail: 'Rantai penurunan ijazah jalur Karawang: tokoh, halau-halau, murid kunci — grade sumber keluarga.', status: 'direncanakan' },
  { n: 45, fase: 4, judul: 'Jalur Abah Sukanta — silsilah & kisah', detail: 'Dokumentasi lengkap jalur Sukanta dengan grade sumber keluarga; dipisah jelas dari jalur Karawang.', status: 'direncanakan' },
  { n: 46, fase: 4, judul: 'Direktori halau-halau & mushola cabang', detail: 'Tiap titik punya entri institution: alamat, khatm, jadwal latihan.', status: 'direncanakan' },
  { n: 47, fase: 4, judul: 'Rahasia angka 165 & bilangan dalam wiridan', detail: 'Halaman Rahasia diperluas: makna bilangan dalam amalan TQN, sesuai adab penyampaian.', status: 'direncanakan' },
  { n: 48, fase: 4, judul: 'Manaqib TQN Suryalaya & tradisi haul', detail: 'Kisah haul Abah Sepuh dan Abah Anom, tradisi khatm dan peringatan thariqah.', status: 'direncanakan' },
  { n: 49, fase: 4, judul: 'Glosarium istilah tarekat harian', detail: 'khalwat, khatm, latihan jantung, dzikir dhamir — setiap istilah punya entri glossary.', status: 'berjalan' },
  { n: 50, fase: 4, judul: 'Profil institution lengkap', detail: 'Jam\'iyyah, majelis dan halau-halau: tiap profil dengan sejarah singkat dan data resmi.', status: 'berjalan' },
  { n: 51, fase: 4, judul: 'Atlas perjalanan sanad', detail: 'Baghdad → Bokhara → Hijaz → Sambas → Garut → Suryalaya → Karawang: 60+ lokasi dengan narasi perhentian.', status: 'berjalan' },
  { n: 52, fase: 4, judul: 'Kalender haul & agenda ibadah', detail: 'Halaman agenda: haul, khatm bersama, hari-hari besar thariqah.', status: 'direncanakan' },

  // ---------------- FASE 5 — Kitab ar+id (53–64) ----------------
  { n: 53, fase: 5, judul: 'Panduan penerbitan kitab bilingual', detail: 'Template bab (teks Arab riwayah + terjemah + catatan), kaidah transliterasi, grade sumber naskah.', status: 'berjalan' },
  { n: 54, fase: 5, judul: 'Fath ar-Rabbani — bagian 1 (ar+id)', detail: 'Muqaddimah dan khutbah-khutbah awal: teks Arab + terjemah Indonesia per bab.', status: 'direncanakan' },
  { n: 55, fase: 5, judul: 'Fath ar-Rabbani — bagian 2 (ar+id)', detail: 'Lanjutan khutbah, satu langkah satu kelompok bab.', status: 'direncanakan' },
  { n: 56, fase: 5, judul: 'Fath ar-Rabbani — bagian 3 (ar+id)', detail: 'Lanjutan khutbah (ar+id).', status: 'direncanakan' },
  { n: 57, fase: 5, judul: 'Fath ar-Rabbani — bagian 4 + indeks doa (ar+id)', detail: 'Khutbah penutup dan indeks doa pilihan.', status: 'direncanakan' },
  { n: 58, fase: 5, judul: 'Fath ar-Rabbani — muqaddimah & penutup (ar+id)', detail: 'Halaman induk kitab di /library: pengantar, silsilah naskah, status kelengkapan terjemahan.', status: 'direncanakan' },
  { n: 59, fase: 5, judul: 'Futuh al-Ghaib — ar+id per pasal', detail: 'Satu langkah satu kelompok pasal; teks pendek, terjemah hati-hati.', status: 'direncanakan' },
  { n: 60, fase: 5, judul: 'al-Ghunya — pasal pilihan urusan thariqah (ar+id)', detail: 'Bagian yang relevan dengan amalan TQN, bukan keseluruhan jilid.', status: 'direncanakan' },
  { n: 61, fase: 5, judul: 'Sirr al-Asrar — ar+id', detail: 'Bab-bab dhikr dan adab; terjemah dengan catatan grade sumber.', status: 'direncanakan' },
  { n: 62, fase: 5, judul: 'Ratib, hizb & qasidah TQN (ar+id)', detail: '13 bait qasidah + wiridian harian sudah tayang; lengkapi teks ratib dan hizb.', status: 'berjalan' },
  { n: 63, fase: 5, judul: 'Manaqib terpilih — ar+id', detail: 'Pilihan kisah manaqib dengan terjemah hati-hati dan grade sumber.', status: 'direncanakan' },
  { n: 64, fase: 5, judul: 'Perpustakaan kitab lengkap', detail: '78+ kitab di /library: tiap kitab punya deskripsi, sumber, dan status terjemahan.', status: 'berjalan' },

  // ---------------- FASE 6 — CMS & Ruang Admin (65–72) ----------------
  { n: 65, fase: 6, judul: 'CMS penuh gaya WordPress', detail: 'Post, kitab, halaman, media, komentar, kategori, tag — semuanya dikelola dari ruang admin.', status: 'selesai' },
  { n: 66, fase: 6, judul: 'Dasbor admin lengkap', detail: 'Dasbor, analitik, registri, bacaan, SEO, kontribusi, terbitkan, panduan.', status: 'selesai' },
  { n: 67, fase: 6, judul: 'Roadmap 99 internal (tab ini)', detail: 'Peta jalan privat pendiri — hanya muncul setelah login admin; tidak di sitemap, tidak diindeks.', status: 'selesai' },
  { n: 68, fase: 6, judul: 'Versi & audit tanpa penghapusan senyap', detail: 'VersionSnapshot + AuditLog: perubahan lama tersimpan dan tercatat.', status: 'selesai' },
  { n: 69, fase: 6, judul: 'Manajemen media', detail: 'Unggah, kelola dan sajikan media via API raw.', status: 'selesai' },
  { n: 70, fase: 6, judul: 'Moderasi kontribusi publik', detail: 'Antrian kontribusi dengan alur setujui/tolak dan catatan.', status: 'selesai' },
  { n: 71, fase: 6, judul: 'Cadangan & ekspor terjadwal', detail: 'Snapshot otomatis harian ke penyimpanan cadangan.', status: 'direncanakan' },
  { n: 72, fase: 6, judul: 'Peran kedua (steward/editor)', detail: 'Selain admin tunggal: akun editor dengan izin terbatas.', status: 'direncanakan' },

  // ---------------- FASE 7 — SEO & Indeksasi (73–81) ----------------
  { n: 73, fase: 7, judul: 'Sitemap.xml penuh (515 URL)', detail: 'Semua entri pengetahuan + seksi institusional terdaftar dan nyata.', status: 'selesai' },
  { n: 74, fase: 7, judul: 'robots.txt & kebijakan crawler AI', detail: 'Mesin pencari dan AI assistant dibuka untuk pengetahuan; API/admin tertutup.', status: 'selesai' },
  { n: 75, fase: 7, judul: 'IndexNow (Bing & sekutu)', detail: 'Ping satu klik dari tab SEO admin; endpoint /api/indexnow hidup.', status: 'selesai' },
  { n: 76, fase: 7, judul: 'Optimasi PageSpeed Insights', detail: 'JS halaman depan 2.590 KB → 894 KB (code-split semua seksi + font bersih).', status: 'selesai' },
  { n: 77, fase: 7, judul: 'Google Search Console: submit & request indexing', detail: 'Properti 165.web.id, submit sitemap, URL Inspection untuk halaman utama dan 490+ entri.', status: 'direncanakan' },
  { n: 78, fase: 7, judul: 'Internal linking antar entri', detail: 'Setiap profil menautkan entri terkait — crawler menyusuri jaringan sanad.', status: 'berjalan' },
  { n: 79, fase: 7, judul: 'Validasi rich results', detail: 'Tes FAQ dan Article di Rich Results Test sampai semua hijau.', status: 'direncanakan' },
  { n: 80, fase: 7, judul: 'Kartu sosial per bagian', detail: 'og-image khusus per seksi/library — saat dibagikan ke WhatsApp/Telegram tampak rapi.', status: 'berjalan' },
  { n: 81, fase: 7, judul: 'Audit indeksasi bulanan', detail: 'Catat statistik terindeks vs "T/A" di Google; target: 100% entri pengetahuan.', status: 'direncanakan' },

  // ---------------- FASE 8 — Fitur Interaktif & PWA (82–89) ----------------
  { n: 82, fase: 8, judul: 'PWA & service worker', detail: 'Bisa dipasang sebagai aplikasi; offline shell dasar.', status: 'selesai' },
  { n: 83, fase: 8, judul: 'Pengingat wirid harian', detail: 'Notification API + fallback jujur saat browser tidak mendukung.', status: 'selesai' },
  { n: 84, fase: 8, judul: 'Pemutar qasidah 13 bait', detail: 'Teks Arab, latin, Sunda, Indonesia + pemutar bertahap.', status: 'selesai' },
  { n: 85, fase: 8, judul: 'Tasbih digital & jadwal sholat', detail: 'Penghitung tasbih dan waktu sholat di seksi interaktif.', status: 'selesai' },
  { n: 86, fase: 8, judul: 'Pencarian spotlight global (Ctrl K)', detail: 'Pencarian lintas entri tanpa meninggalkan halaman.', status: 'selesai' },
  { n: 87, fase: 8, judul: 'Penjelajah graf pengetahuan', detail: 'Seksi Explore: hubungan antar entri tampak sebagai grafik yang bisa dijelajahi.', status: 'berjalan' },
  { n: 88, fase: 8, judul: 'Mode gelap & tema', detail: 'Terang/gelap mengikuti sistem + toggle tersimpan.', status: 'selesai' },
  { n: 89, fase: 8, judul: 'Agenda ibadah interaktif', detail: 'Kalender haul dan pengingat khatm (sambungan langkah 52).', status: 'direncanakan' },

  // ---------------- FASE 9 — Bahasa & Aksesibilitas (90–94) ----------------
  { n: 90, fase: 9, judul: 'i18n enam bahasa', detail: 'id, en, ar, ms, jv, su — UI penuh dengan pemilih bahasa.', status: 'selesai' },
  { n: 91, fase: 9, judul: 'Transliterasi & teks latin konsisten', detail: 'Satu kaidah transliterasi untuk semua bacaan: Arab → latin → terjemah.', status: 'berjalan' },
  { n: 92, fase: 9, judul: 'Aksesibilitas WCAG', detail: 'Kontras, fokus keyboard, ARIA, urutan heading.', status: 'berjalan' },
  { n: 93, fase: 9, judul: 'Mobile-first & AppBar bawah', detail: 'Navigasi bawah ala aplikasi di layar kecil.', status: 'selesai' },
  { n: 94, fase: 9, judul: 'Terjemahan konten pengetahuan', detail: '490+ halaman entri disediakan versi en/ar pelan-pelan (prioritas halaman terpopuler).', status: 'direncanakan' },

  // ---------------- FASE 10 — Operasional & Keamanan (95–99) ----------------
  { n: 95, fase: 10, judul: 'Higiene rahasia & token', detail: 'Tidak ada token di kode; rotasi berkala; token lama yang terekspos direvoke.', status: 'berjalan' },
  { n: 96, fase: 10, judul: 'Hardening login admin', detail: 'Rate limit per IP, cookie HMAC httpOnly, TTL 7 hari.', status: 'selesai' },
  { n: 97, fase: 10, judul: 'Analitik privasi', detail: 'Pelacak ringan milik sendiri — tanpa pihak ketiga.', status: 'selesai' },
  { n: 98, fase: 10, judul: 'Cadangan DB & uji pemulihan', detail: 'Rutin snapshot prisma + drill pemulihan tiap kuartal.', status: 'direncanakan' },
  { n: 99, fase: 10, judul: 'Langkah ke-100: evaluasi satu abad digital', detail: 'Saat 99 langkah lunas: duduk bersama, evaluasi besar, lalu susun Roadmap ke-100.', status: 'direncanakan' },
]
