// 165 — ROADMAP 99 HARI MENUJU SEMPURNA
// Tiga fase × 33 hari — sebagaimana bilangan tasbih (33 × 3 = 99),
// selaras dengan 99 Asmaul Husna yang menjadi renungan sepanjang perjalanan.
// Filosofi: Islam (fondasi) → Iman (ketinggian) → Ihsan (keindahan/sempurna).
// Setiap hari memadukan disiplin ruhani (ibadah · ilmu · amal) dan
// tonggak pembangunan fitur situs 165 (fitur · warisan).
// Item bertanda `soon` adalah fitur yang DIRENCANAKAN — jujur tidak
// disajikan seolah sudah ada (berpijak pada etika editorial 165).

export type RoadmapTag = 'ibadah' | 'ilmu' | 'amal' | 'fitur' | 'warisan'

export interface RoadmapDay {
  d: number
  t: string
  x: string
  g: RoadmapTag
  /** fitur berstatus "direncanakan / segera" — belum terpasang */
  soon?: boolean
}

export interface RoadmapPhase {
  id: 1 | 2 | 3
  name: string
  sub: string
  from: number
  to: number
  hue: string // kelas warna tailwind (badge/border)
  desc: string
}

export const PHASES: RoadmapPhase[] = [
  {
    id: 1,
    name: 'Islam',
    sub: 'Fondasi & Konsistensi',
    from: 1,
    to: 33,
    hue: 'emerald',
    desc: 'Hari 1–33 — menegakkan fondasi: niat, baiat, wirid harian, dan infrastruktur digital pertama (aplikasi, bacaan, tasbih, roadmap).',
  },
  {
    id: 2,
    name: 'Iman',
    sub: 'Ketinggian & Pengetahuan',
    from: 34,
    to: 66,
    hue: 'teal',
    desc: 'Hari 34–66 — naik kelas: dzikir yang lebih dalam, khatam Al-Qur\u2019an, fitur premium (pengingat, audio, AI murabbi, grafik ilmu).',
  },
  {
    id: 3,
    name: 'Ihsan',
    sub: 'Keindahan & Warisan',
    from: 67,
    to: 99,
    hue: 'amber',
    desc: 'Hari 67–99 — beribadah seolah melihat-Nya: warisan digital, komunitas, arsip manuskrip, dan penyempurnaan seluruh fitur.',
  },
]

export const TAG_META: Record<RoadmapTag, { label: string; hue: string }> = {
  ibadah: { label: 'Ibadah', hue: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25' },
  ilmu: { label: 'Ilmu', hue: 'text-sky-700 dark:text-sky-300 bg-sky-500/10 border-sky-500/25' },
  amal: { label: 'Amal', hue: 'text-rose-700 dark:text-rose-300 bg-rose-500/10 border-rose-500/25' },
  fitur: { label: 'Fitur', hue: 'text-violet-700 dark:text-violet-300 bg-violet-500/10 border-violet-500/25' },
  warisan: { label: 'Warisan', hue: 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/25' },
}

export const DAYS: RoadmapDay[] = [
  // ---------- FASE 1 · ISLAM — FONDASI (Hari 1–33) ----------
  { d: 1, g: 'ibadah', t: 'Niat Suci', x: 'Buka perjalanan dengan memperbarui niat: 99 hari menuju ihsan, bukan pamrih melainkan ketulusan.' },
  { d: 2, g: 'ibadah', t: 'Baiat & Konsistensi', x: 'Kembali pada janji baiat — tetapkan jadwal wirid harian yang realistis dan jaga waktu-nya.' },
  { d: 3, g: 'ibadah', t: 'Istighfar 100×', x: 'Mulai disiplin istighfar harian (100×) — membersihkan karat hati sebelum menaik beban ilmu.' },
  { d: 4, g: 'ibadah', t: 'Thayalah 100×', x: 'Laa ilaaha illallah 100× dengan gerak nafi-tsbat — jantung kalimat tauhid masuk ke lubuk hati.' },
  { d: 5, g: 'fitur', t: 'Bacaan Wiridian', x: 'Telusuri ruang Bacaan: qasidah Ibadallah Rijalallah, wiridian TQN & dzikir harian — Arab, Latin, arti Sunda, tafsir.' },
  { d: 6, g: 'ilmu', t: 'Peta Sanad Tiga Jalur', x: 'Pelajari diagram sanad Karawang · Al-Bantani/Kaduparasi · Suryalaya sampai Rasulullah SAW — nama Arab tiap simpul.' },
  { d: 7, g: 'ilmu', t: 'Manaqib Al-Ghauth', x: 'Baca satu bab Manaqaib Syekh Abdul Qadir Al-Jailani — kedudukan Ghaus dan hikmahnya bagi thariqat.' },
  { d: 8, g: 'fitur', t: 'Tasbih Digital', x: 'Gunakan Tasbih digital 165: target harian, getaran halus, dan rekap streak — pengganti sepuasnya manik-manik yang tercecer.' },
  { d: 9, g: 'fitur', t: 'Aplikasi Terpasang', x: 'Pasang 165 sebagai aplikasi (PWA) di ponsel — satu sentuh menuju majelis, kapan pun.' },
  { d: 10, g: 'ibadah', t: 'Dzikir Prahara', x: 'Pelajari gerak & napas dzikir prahara — tentu saja dengan izin dan bimbingan mursyid, bukan dari video.' },
  { d: 11, g: 'ilmu', t: 'Adab Majelis', x: 'Pegang adab majelis dzikir: datang berwudu, tenang, menjaga pandangan dan hati.' },
  { d: 12, g: 'fitur', t: 'Uji Mode Offline', x: 'Matikan internet: buka 165 — bacaan & halaman tersimpan tetap hidup. Offline adalah fitur pelestarian.' },
  { d: 13, g: 'amal', t: 'Jurnal Muhasabah', x: 'Mulai jurnal harian sederhana: apa yang hari ini mengajarkan hati tentang tujuan?' },
  { d: 14, g: 'ilmu', t: 'Kisah & Hikmah', x: 'Baca satu kisah aulia di ruang Kisah — perhatikan status bukti: warisan tradisi, terdokumentasi, terverifikasi.' },
  { d: 15, g: 'ibadah', t: 'Shalat 5 Waktu Tepat', x: 'Kunci fondasi terbesar: shalat lima waktu di awal waktunya, berjamaah bila memungkinkan.' },
  { d: 16, g: 'fitur', t: 'Roadmap Ini Sendiri', x: 'Tandai hari-hari yang sudah dilewati pada Roadmap 99 — kemajuan yang terlihat menjaga semangat.' },
  { d: 17, g: 'ilmu', t: 'Kedudukan Mursyid', x: 'Pelajari adab kepada guru & kedudukan mursyid — jalur tidak lurus tanpa pemandu yang lurus.' },
  { d: 18, g: 'amal', t: 'Sumbang Pengetahuan', x: 'Kirim satu sumbangan atau koreksi lewat ruang Kontribusi — ikut menjaga kejujuran arsip.' },
  { d: 19, g: 'ibadah', t: 'Wirid Malam', x: 'Tambah qiyamul-lail ringan: dua rakaat malam + wirid — hati berbisik lebih jelas di sepertiga malam.' },
  { d: 20, g: 'ibadah', t: 'Asmaul Husna 1–11', x: 'Hafalkan & renungkan 11 nama pertama Allah — satu nama, satu makna, satu renungan harian.' },
  { d: 21, g: 'ibadah', t: 'Asmaul Husna 12–22', x: 'Lanjutkan hafalan — biarkan nama-nama-Nya menata cara pandang hari-harimu.' },
  { d: 22, g: 'fitur', t: 'Tema Gelap Nyaman', x: 'Coba tema gelap 165 — kenyamanan mata untuk wirid malam dan bacaan larut.' },
  { d: 23, g: 'ibadah', t: 'Asmaul Husna 23–33', x: 'Tuntaskan sepertiga pertama Asmaul Husna — ulangi yang lupa, berbagi yang hafal.' },
  { d: 24, g: 'ilmu', t: 'Sejarah Suryalaya', x: 'Baca sejarah TQN Suryalaya & Nuril Anwar — bagaimana zikir menjadi jalan umat dan negeri.' },
  { d: 25, g: 'ilmu', t: 'Sejarah Karawang', x: 'Baca jalur Karawang & Syekh Abah Ganda — kekhususan jalur yang hari ini engkau jalani.' },
  { d: 26, g: 'ilmu', t: 'Sejarah Al-Bantani', x: 'Baca jalur Kaduparasi Labuan Banten — jejak Syekh Nawawi Al-Bantani dalam sanad.' },
  { d: 27, g: 'ibadah', t: 'Puasa Sunnah', x: 'Puasa Senin/Kamis — jaga hati dengan lap sedikit; kenyang berlebihan menidurkan dzikir.' },
  { d: 28, g: 'fitur', t: 'Uji Aksesibilitas', x: 'Jelajahi situs hanya dengan keyboard & pembaca layar — WCAG 2.1 AA bukan slogan melainkan adab pada semua tamu.' },
  { d: 29, g: 'fitur', t: '178 Bahasa', x: 'Coba pengalih bahasa — bagikan bacaan dalam bahasa sesuai saudaramu yang jauh.' },
  { d: 30, g: 'amal', t: 'Sedekah Terkecil', x: 'Satu sedekah kecil setiap hari — merawat majelis adalah merawat diri sendiri.' },
  { d: 31, g: 'amal', t: 'Muhasabah 30 Hari', x: 'Evaluasi jujur bulan pertama: mana yang jalan, mana yang masih kosong — catat tanpa berdalih.' },
  { d: 32, g: 'ilmu', t: 'Kejujuran Data', x: 'Pelajari kebijakan sumber & tingkat bukti 165 — setiap pernyataan membawa sumbernya.' },
  { d: 33, g: 'amal', t: 'Syukur Fase 1', x: 'Tutup fase dengan syukur: fondasi ibadah & aplikasi sudah berdiri — siap naik ke Iman.' },

  // ---------- FASE 2 · IMAN — KETINGGIAN (Hari 34–66) ----------
  { d: 34, g: 'ibadah', t: 'Gerbang Ketinggian', x: 'Niat fase kedua: dari amal lahiriah menuju makna — dzikir mulai memasang mata ke dalam hati.' },
  { d: 35, g: 'ibadah', t: 'Dzikir Isyarat', x: 'Pelajari dzikir isyarat khas Naqsyabandiyah — dzikir dalam dada, sabar menunggu pantauan mursyid.' },
  { d: 36, g: 'ibadah', t: 'Asmaul Husna 34–44', x: 'Lanjut hafalan dengan merenungi makna — bukan sekadar hafal nama, tetapi hidup dalam sifat.' },
  { d: 37, g: 'ibadah', t: 'Sholawat Ibrahimiyah', x: 'Baca sholawat lengkap di ruang Bacaan — pintu kepada Nabi SAW yang membuka semua pintu.' },
  { d: 38, g: 'fitur', t: 'Pengingat Wirid Harian', x: 'Aktifkan pengingat pagi & sore di ruang Tasbih — pemberitahuan muncul saat aplikasi terbuka; izinkan notifikasi sekali saja.' },
  { d: 39, g: 'ilmu', t: 'Nuril Anwar Penuh', x: 'Baca wiridian Nuril Anwar seutuhnya — amalan pagi-sore yang menemani para pirsah Suryalaya.' },
  { d: 40, g: 'ibadah', t: 'Asmaul Husna 45–55', x: 'Sepertiga kedua Asmaul Husna — hitung mundur menuju khatam pertama.' },
  { d: 41, g: 'fitur', t: 'Grafik Pengetahuan', x: 'Jelajahi knowledge graph interaktif — lihat bagaimana tokoh, kitab, dan tempat saling mengikat.' },
  { d: 42, g: 'fitur', t: 'Tanya165', x: 'Ajukan satu pertanyaan agama pada Tanya165 — jawaban berpijak pada nash, bukan angan.' },
  { d: 43, g: 'ibadah', t: 'Asmaul Husna 56–66', x: 'Hafalan & tafsir singkat — biarkan 10 nama berikutnya lembut di lisan.' },
  { d: 44, g: 'ilmu', t: 'Kholiqliq', x: 'Pelajari konsep kholiqliq dalam TQN Suryalaya — teori dzikir tentang membersihkan hati dari kotoran.' },
  { d: 45, g: 'fitur', t: 'Audio Qasidah (beta)', x: 'Dengarkan narasi arti bait demi bait (sintesis beta, jujur berlabel) — slot rekaman asli majelis tersedia.' },
  { d: 46, g: 'ibadah', t: 'Latihan Suluk', x: 'Jalankan latihan sesuai pesanan mursyid — suluk adalah perjalanan yang diatur, bukan improvisasi.' },
  { d: 47, g: 'ibadah', t: 'Asmaul Husna 67–77', x: 'Lanjutkan — makin dekat khatam, makin dalam makna tiap huruf.' },
  { d: 48, g: 'fitur', t: 'Statistik Publik', x: 'Baca dashboard analitik publik — transparansi jumlah entitas & arsip, sebagaimana amal yang tampil jujur.' },
  { d: 49, g: 'ilmu', t: 'Adab Talab', x: 'Baca adab menuntut ilmu dalam tradisi salaf — niat, sabar, hormat, dan lapang dada.' },
  { d: 50, g: 'ibadah', t: 'Asmaul Husna 78–88', x: 'Sepuluh nama lagi — hafalan mulai menyatu dengan doa harian.' },
  { d: 51, g: 'fitur', t: 'Ziarah Virtual', x: 'Jelajahi profil tokoh, institusi & tempat (entitas ber-grade) — ziarah pertama di petapeta data.' },
  { d: 52, g: 'ibadah', t: 'Doa Penutup Wiridian', x: 'Hafalkan doa setelah dzikir — tutup majelis dengan permohonan istiqamah.' },
  { d: 53, g: 'ibadah', t: 'Khatam Asmaul Husna', x: 'Tamat 99 Asmaul Husna pertama — rayakan dengan syukur dan ulang dari nama pertama.' },
  { d: 54, g: 'ilmu', t: 'Hierarki Murid', x: 'Kenali istilah & tingkatan murid (sirep madang, dan lainnya) — semua mulai dari bawah, semua butuh adab.' },
  { d: 55, g: 'fitur', t: 'Rekomendasi Harian', x: 'Buka Dasbor: amalan yang direkomendasikan sesuai hari ini, plus tugas 99 hari hari-nya dalam satu ruang.' },
  { d: 56, g: 'ibadah', t: 'Mulai Khatam Qur\u2019an', x: 'Bila belum pernah khatam sebagai murid, mulai target: satu juz per hari — tilawah sebelum takwil.' },
  { d: 57, g: 'ibadah', t: 'Konsistensi Tilawah', x: 'Jaga ritme juz harian — yang membuat tamat bukan kecepatan melainkan kehadiran.' },
  { d: 58, g: 'ibadah', t: 'Khatam & Hadiah Arwah', x: 'Menuntaskan — berikan hadiah pahala untuk arwah para pirsah & orang tua.' },
  { d: 59, g: 'amal', t: 'Kenali Sektor', x: 'Pelajari sektor-sektor majelis (Balbisa, Pramuka, dan lainnya) — satu majelis, banyak pintu masuk.' },
  { d: 60, g: 'fitur', t: 'Audit Kenyamanan Baca', x: 'Periksa kontras & ukuran huruf — bacaan suci layak terbaca nyaman oleh mata tua maupun muda.' },
  { d: 61, g: 'fitur', t: 'Pembaruan Aplikasi v2', x: 'Terima pembaruan PWA tanpa kehilangan data — jurnal & tasbih tetap tersimpan.' },
  { d: 62, g: 'amal', t: 'Muhasabah Tengah Jalan', x: '66 hari berlalu: ukur bukan dengan hafalan melainkan dengan akhlak — apa yang berubah?' },
  { d: 63, g: 'ibadah', t: 'Wirid Akbar', x: 'Ikuti wirid akbar di majelis — gelombang dzikir bersama yang tidak bisa digantikan majelis dalam dada.' },
  { d: 64, g: 'ilmu', t: 'Renungan tentang Ghaus', x: 'Renungkan kedudukan Al-Ghauth Al-Jailani sebagai pintu thariqat Qodiriyah — hormat sekaligus lurus kepada Allah.' },
  { d: 65, g: 'ilmu', t: 'Kesabaran Para Pirsah', x: 'Baca kisah kesabaran para pirsah — bulan-bulan sepi di ziyarah adalah sekolah paling sunyi.' },
  { d: 66, g: 'amal', t: 'Syukur Fase 2', x: 'Fase Iman tuntas: pengetahuan dalam & fitur premium berdiri — bergerak menuju Ihsan.' },

  // ---------- FASE 3 · IHSAN — SEMPURNA (Hari 67–99) ----------
  { d: 67, g: 'ibadah', t: 'Gerbang Ihsan', x: 'Beribadah seolah melihat-Nya; bila tidak mampu, yakinlah Dia melihatmu — seluruh 99 hari bermuara di sini.' },
  { d: 68, g: 'fitur', t: 'Pasang Aplikasi (beta)', x: 'Tombol pasang langsung di situs untuk Android/iPhone/desktop — aplikasi menempel di layar utama tanpa toko aplikasi.' },
  { d: 69, g: 'ibadah', t: 'Khatam Asmaul Husna Kedua', x: 'Khatam kedua dengan merenungi makna — kali ini nama-nama itu mengenalimu balik.' },
  { d: 70, g: 'warisan', soon: true, t: 'Arsip Manuskrip (beta)', x: 'Jelajahi manuskrip terdigitalisasi — halaman tua yang diselamatkan dari usia.' },
  { d: 71, g: 'amal', t: 'Amal untuk Arwah', x: 'Sedekah & wirid hadiah pahala untuk arwah para pirsah — jalan ini dibangun di atas bahu mereka.' },
  { d: 72, g: 'fitur', t: 'Jadwal Sholat & Kiblat', x: 'Buka ruang Waktu Sholat: jadwal lima waktu sesuai lokasimu (metode KEMENAG RI) dan arah kiblat terhitung.' },
  { d: 73, g: 'ibadah', t: 'Prahara Tingkat Lanjut', x: 'Latihan prahara lanjutan — dengan izin mursyid, tanpa kebanggaan, tanpa publikasi.' },
  { d: 74, g: 'amal', t: 'Koreksi Terbuka', x: 'Usulkan satu koreksi konten — kejujuran arsip adalah ibadah yang sering dilupakan.' },
  { d: 75, g: 'ibadah', t: 'Khatam Asmaul Husna Ketiga', x: 'Tamat ketiga — hafalan menyatu; nama-nama itu kini menjadi bahasa doa harian.' },
  { d: 76, g: 'warisan', soon: true, t: 'Museum Digital (beta)', x: 'Galeri artefak & dokumentasi warisan TQN — koleksi yang hidup, bukan gudang.' },
  { d: 77, g: 'amal', t: 'Ilmu untuk Anak Muda', x: 'Bagikan satu bacaan/qasidah kepada anak muda — pewarisan dimulai dari satu undangan.' },
  { d: 78, g: 'ibadah', t: 'Qasidah Berkumandang', x: 'Nyanyikan qasidah Ibadallah Rijalallah bersama majelis — Ibadallah, rijalallah, aghitsuna li ajlillah.' },
  { d: 79, g: 'fitur', t: 'Basa Sunda Penuh', x: 'Baca seluruh bacaan dalam Basa Sunda — bahasa yang memeluk makna lebih dekat dari bahasa mana pun.' },
  { d: 80, g: 'fitur', soon: true, t: 'Kurasi 178 Bahasa', x: 'Kamus AI 178 bahasa melewati telaah dewan — mesin menerjemahkan, manusia menjaga makna.' },
  { d: 81, g: 'amal', t: 'Tiga Syukur Harian', x: 'Tambahkan tiga syukur di jurnal — muhasabah yang baik selalu berakhir dengan terima kasih.' },
  { d: 82, g: 'amal', t: 'Ziarah Nyata', x: 'Ziarah ke pirsah/ziyarah terdekat bila memungkinkan — tanah yang menyimpan wali itu hidup.' },
  { d: 83, g: 'amal', t: 'Tadarus untuk Orang Tua', x: 'Hadiah tilawah untuk kedua orang tua — pahala pertama jalan ini hutang kepada mereka.' },
  { d: 84, g: 'fitur', t: 'Dasbor Perjalanan', x: 'Rekap kemajuan 99 hari, dzikir hari ini, streak & rekor dalam satu Dasbor premium — cermin, bukan pengawas.' },
  { d: 85, g: 'ibadah', t: 'Malam I\u2019tikaf', x: 'I\u2019tikaf ringan di masjid — biarkan dunia menunggu di luar pintu selama satu malam.' },
  { d: 86, g: 'fitur', soon: true, t: 'Akademi 165 (beta)', x: 'Materi pembelajaran berjenjang — dari pemula sampai calon kurator, dengan ijazah internal.' },
  { d: 87, g: 'amal', t: 'Jadi Mentor', x: 'Bantu satu ikhwan/akhwat baru memulai 99 hari-nya — ilmu yang diwariskan tidak pernah kurus.' },
  { d: 88, g: 'amal', t: 'Kejujuran Mutlak', x: 'Periksa kembali: mana klaim, mana bukti — arsip yang berani menyebut mukzib lebih mulia dari arsip yang gemar memuji.' },
  { d: 89, g: 'fitur', soon: true, t: 'Sertifikasi Kurator (beta)', x: 'Alur kurasi konten oleh dewan pakar — mutu bukan klaim melainkan proses.' },
  { d: 90, g: 'fitur', t: 'Wiridian Offline Penuh', x: 'Tombol “Simpan untuk offline” di ruang Bacaan menyimpan seluruh bacaan ke perangkat — majelis di dalam saku, tanpa syarat sinyal.' },
  { d: 91, g: 'ilmu', t: 'Sabar & Ridha', x: 'Renungan tentang ridha — bukan sekadar menerima takdir, melainkan menerimanya dengan tenang.' },
  { d: 92, g: 'fitur', soon: true, t: 'Peta Dunia Sanad', x: 'Grafik sanad global lintas negara — melihat thariqat sebagai jaringan cahaya.' },
  { d: 93, g: 'amal', t: 'Doa untuk Pendiri & Kurator', x: 'Doa & hadiah pahala untuk pendiri, kurator, dan dewan — mereka yang merawat jalan digital ini.' },
  { d: 94, g: 'amal', t: 'Menulis Warisan', x: 'Tulis satu kesaksian perjalanan 99 hari — kelak dibaca orang lain yang membutuhkannya.' },
  { d: 95, g: 'fitur', t: 'Wawasan Pribadi', x: 'Dasbor kini membaca jurnalmu: total dzikir, rata-rata mingguan, hari terbaik & grafik 14 hari — diri sendiri yang terbaca jujur.' },
  { d: 96, g: 'fitur', t: 'Uji Menyeluruh', x: 'Semua jalur utama diuji: lintas perangkat, offline, aksesibilitas — bug nol di jalur ibadah.' },
  { d: 97, g: 'amal', t: 'Hari Kasih Sayang', x: 'Bantu sesama tanpa pamrih — ihsan yang paling mudah diuji adalah kepada manusia.' },
  { d: 98, g: 'amal', t: 'Muhasabah Akhir', x: '98 hari berlalu: bukan berapa kali engkau melilit tasbih, melainkan seberapa jauh hatimu berpaling dari lalai.' },
  { d: 99, g: 'amal', t: 'Sempurna adalah Milik Tuhan', x: 'Tutup dengan adab: kesempurnaan hanya milik Allah — hari ke-100 adalah istiqamah seumur hidup. Aplikasi & situs 165 resmi v1.0 SEMPURNA.' },
]

export const ROADMAP_TOTAL = DAYS.length
