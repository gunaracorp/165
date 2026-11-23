import type { PageEntry } from './types'

// 165 — Perpustakaan bagian 1 (slug 165-master-blueprint s.d. fathal-arifin)
// Konten bahasa Indonesia, jujur, tanpa fabrikasi fakta.
export const ENTRIES: PageEntry[] = [
  {
    slug: '165-master-blueprint',
    kind: 'library',
    title: '165 Master Blueprint',
    category: 'Dokumen Institusi',
    summary: 'Dokumen arsitektur buatan sendiri platform 165.web.id yang memetakan perpustakaan, glosarium, atlas, arsip, dan kanal tanya-jawab TQN.',
    facts: [
      { label: 'Penulis', value: 'Tim editorial 165.web.id' },
      { label: 'Dunia Islam', value: 'Dokumen internal platform pengetahuan TQN Qodiriah Naqsabandiyah' },
      { label: 'Bidang', value: 'Arsitektur informasi dan tata kelola konten' },
      { label: 'Kedudukan dalam TQN', value: 'Rujukan kerja pengembangan perpustakaan digital 165' },
    ],
    body: [
      {
        h: 'Kedudukan Dokumen dalam Platform 165',
        p: [
          '165 Master Blueprint adalah dokumen arsitektur yang disusun sendiri oleh tim 165.web.id sebagai platform pengetahuan TQN Qodiriah Naqsabandiyah. Dokumen ini memetakan keseluruhan bangunan informasi platform, mulai dari perpustakaan kitab dan naskah, glosarium istilah, atlas lembaga serta tempat, kanal arsip, hingga ruang tanya-jawab. Setiap halaman pada platform lahir dari satu slug resmi yang tercatat dalam katalog, sehingga tidak ada URL bayangan dan tidak ada halaman yang dibuat sekadar demi mesin pencari. Dengan blueprint ini, tim editorial memegang pegangan bersama tentang apa yang ditulis, siapa yang memverifikasi, dan kapan halaman perlu dimutakhirkan.',
        ],
      },
      {
        h: 'Prinsip Penyusunan',
        p: [
          'Blueprint menegaskan kejujuran historiografis sebagai pondasi seluruh konten. Tahun karangan yang tidak pasti tidak ditulis sebagai fakta, melainkan diganti rentang abad atau keterangan bahwa verifikasi masih berjalan. Bahasa yang dipakai formal-institusional tanpa muatan promosi berlebihan, dan klaim kedudukan kitab selalu berpangkal pada informasi mapan. Bagi jamaah TQN Qodiriah Naqsabandiyah, dokumen ini menjadi bukti bahwa platform 165 dibangun secara tertib, terukur, dan dapat dipertanggungjawabkan sebagai arsip pengetahuan tarekat.',
        ],
      },
    ],
    related: ['alghunya-lithalibi', 'ar-risalah-alqusyairiyyah', 'ihya-ulumuddin'],
  },
  {
    slug: 'aajurumiyah',
    kind: 'library',
    title: 'Al-Ajurumiyyah',
    titleAr: 'الأجرومية',
    category: 'Bahasa & Kamus',
    summary: 'Matan tata bahasa Arab karya Ibnu Ajurrum, teks dasar pengajaran bahasa Arab di pesantren dan pintu utama memahami kitab kuning.',
    facts: [
      { label: 'Penulis', value: 'Ibnu Ajurrum, ulama Sanhaji dari Fez, Maroko; riwayat wafatnya beragam sekitar abad ke-13 sampai ke-14 M' },
      { label: 'Dunia Islam', value: 'Maghribi; teks ini diajarkan luas dari Afrika Utara hingga Nusantara' },
      { label: 'Bidang', value: 'Nahwu (tata bahasa Arab)' },
      { label: 'Kedudukan dalam TQN', value: 'Bekal literasi kitab kuning bagi santri dan jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Pengantar Kitab dan Penulis',
        p: [
          "Al-Ajurumiyyah adalah matan nahwu paling terkenal karya Ibnu Ajurrum, ulama Sanhaji dari Fez, Maroko. Teks singkat ini disusun dalam bab-bab ringkas yang membahas kalam, bagian-bagian kalimat, sampai tanda-tanda i'rab pada berbagai jenis kata. Tanggal wafat penulis diriwayatkan berbeda-beda antarsumber, sehingga ia diposisikan pada rentang abad ke-13 sampai ke-14 M. Meskipun pendek, kitab ini dianggap matan klasik yang hampir selalu menjadi pintu pertama pelajar bahasa Arab di dunia Islam.",
        ],
      },
      {
        h: 'Isi dan Kedudukan',
        p: [
          'Isi kitab bergerak dari pengertian kalam, lalu nama, kata kerja, dan huruf, kemudian tanda-tanda rafa, nashab, jar, dan jazm pada berbagai bentuk kata. Sejumlah syarah menyertainya, dan teks lanjutan seperti al-Mutammimah serta Kafiyah Ibnu Malik kerap menjadi jenjang berikutnya. Di pesantren Nusantara, Al-Ajurumiyyah diajarkan pada tingkat dasar sebelum santri membaca kitab kuning yang lebih besar. Bagi jamaah TQN 165, penguasaan dasar nahwu membantu membaca keterangan pada kitab-kitab wirid dan tasawuf yang umumnya berbahasa Arab.',
          "Latihan setelah hafalan matan biasanya berupa i'rab terhadap kalimat dari kitab lain, sehingga teori langsung dipakai. Cara belajar ini menjadikan nahwu bukan hafalan kering, melainkan alat kerja. Halaman 165 menyarankan pembaca menyelesaikan matan bersama guru sebelum naik ke teks yang lebih panjang.",
        ],
      },
    ],
    related: ['al-munawwir', 'al-muhalla', 'burhan-al-yaqin'],
  },
  {
    slug: 'abdul-karim-al-bantani-reference',
    kind: 'library',
    title: 'Referensi Karya Abdul Karim al-Bantani',
    category: 'Kajian Akademik',
    summary: 'Halaman referensi 165 tentang Kiai Abdul Karim al-Bantani, mufassir Banten abad ke-19 yang mengajar di Haramain dan menjadi guru banyak ulama.',
    facts: [
      { label: 'Penulis', value: 'Kiai Haji Abdul Karim al-Bantani, ulama dan mufassir Banten abad ke-19, wafat di Mekkah' },
      { label: 'Dunia Islam', value: 'Banten, Jawa Barat, dan Haramain pada abad ke-19' },
      { label: 'Bidang', value: 'Tafsir dan pengajaran kitab kuning' },
      { label: 'Kedudukan dalam TQN', value: 'Simpul silsilah keilmuan santri-santi tarekat Nusantara' },
    ],
    body: [
      {
        h: 'Ulama di Balik Referensi',
        p: [
          'Kiai Haji Abdul Karim al-Bantani adalah ulama dan mufassir asal Banten yang giat mengajar di Haramain pada abad ke-19. Ia tercatat sebagai guru bagi sejumlah ulama besar Nusantara yang kemudian membangun pesantren-pesantren Ahlussunnah. Namanya kerap disebut dalam silsilah keilmuan santri Nusantara bersama para pengajar Mekkah dan Madinah era itu. Riwayat tanggal kelahiran dan wafatnya masih beragam antarsumber, sehingga 165 menuliskannya berhati-hati tanpa menetapkan satu angka.',
        ],
      },
      {
        h: 'Isi Rujukan dan Catatan Keilmuan',
        p: [
          'Halaman referensi ini menghimpun informasi mapan tentang karya yang dinisbatkan kepada beliau, terutama tafsir Surah al-Baqarah yang dikenal luas di lingkungan pesantren. Katalog 165 juga mencatat bahwa penisbatan sebagian karya masih diperdebatkan akademisi, sehingga pembaca diarahkan membandingkan berbagai sumber. Dalam kerangka platform, referensi ini menjadi simpul sejarah yang menghubungkan Banten, Mekkah, dan jaringan pesantren tarekat. Bagi jamaah TQN 165, halaman ini menegaskan bahwa penghormatan kepada silsilah berjalan bersama ketelitian riset.',
          'Penelusuran 165 atas referensi ini mencakup pengecekan katalog kitab pesantren dan literatur akademik tentang jaringan Banten-Haramain. Temuan dicatat secara terbuka, termasuk bagian yang masih menunggu sumber tambahan. Pemutakhiran akan diumumkan pada halaman katalog platform.',
        ],
      },
    ],
    related: ['al-azhar-hamka', 'asnawi-caringin-academic-excerpt', 'bruinessen-tarekat-naqsyabandiyah-1992'],
  },
  {
    slug: 'abwab-al-jannat',
    kind: 'library',
    title: 'Abwāb al-Jannah',
    titleAr: 'أبواب الجنة',
    category: 'Ampalan & Wirid',
    summary: 'Kitab adab dan amalan yang memetakan pintu-pintu surga melalui ibadah harian, dzikir, dan akhlak terpuji sesuai tuntunan syariat.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti dalam sumber yang kami akses' },
      { label: 'Dunia Islam', value: 'Khazanah literatur adab-amalan dunia Islam, beredar di lingkungan pesantren dan tarekat' },
      { label: 'Bidang', value: 'Adab dan amalan ibadah harian' },
      { label: 'Kedudukan dalam TQN', value: 'Pembekalan adab amalan harian jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Pengantar dan Makna Judul',
        p: [
          'Abwāb al-Jannah secara harfiah berarti pintu-pintu surga. Katalog 165 mencatat kitab ini sebagai kitab adab dan amalan, yaitu panduan praktik ibadah dan akhlak yang membuka jalan menuju ridha Allah. Data penulis dan tahun karangan belum dapat diverifikasi dari sumber yang kami akses, sehingga halaman ini memaparkan kedudukan umum kitab dalam khazanah literatur adab tanpa menambah klaim yang tidak berpijak. Kehati-hatian ini sejalan dengan kaidah penyusunan konten 165.',
        ],
      },
      {
        h: 'Isi dan Relevansi bagi Jamaah',
        p: [
          'Literatur sejenis umumnya menyusun amalan dalam bab-bab, mulai dari adab wudhu, shalat, dzikir pagi-petang, sampai akhlak sehari-hari, karena itulah judulnya berbentuk jamak. Bagi jamaah TQN Qodiriah Naqsabandiyah, kitab semacam ini berfungsi sebagai pengingat bahwa jalan tarekat berdiri di atas ibadah fardhu yang tertib. Amalan yang diambil tetap mengikuti tuntunan mursyid dan guru-fiqih, bukan praktik swakarya. Dengan demikian, pembacaan kitab adab-amalan menjadi pendamping yang menertibkan wirid harian.',
          'Dalam praktik majelis, kitab adab-amalan biasanya dibaca pelan-pelan bab per bab agar amalan terserap, bukan sekadar dibaca selesai. Pembahasan bersama guru-fiqih membantu membedakan yang wajib, sunnah, dan adab. Cara membaca demikian menjaga kitab tetap hidup sebagai panduan, bukan pajangan rak.',
        ],
      },
    ],
    related: ['al-hisnul-hasin', 'al-wirdul-latif', 'ihya-ulumuddin'],
  },
  {
    slug: 'aceh-tarekat-ms-corpus-leiden',
    kind: 'library',
    title: 'Koleksi Manuskrip Tarekat Aceh di Leiden',
    category: 'Kajian Akademik',
    summary: 'Koleksi manuskrip tarekat dari Aceh yang tersimpan di Perpustakaan Universitas Leiden, sumber penting studi tarekat Nusantara.',
    facts: [
      { label: 'Penulis', value: 'Berbagai pengarang naskah Aceh; koleksi dihimpun pada masa kolonial' },
      { label: 'Dunia Islam', value: 'Aceh dan Hindia Belanda; naskah tersimpan di Leiden, Belanda' },
      { label: 'Bidang', value: 'Manuskripologi tarekat (kajian naskah)' },
      { label: 'Kedudukan dalam TQN', value: 'Bukti dokumentasi perkembangan tarekat, termasuk jalur Naqsyabandiyah, di Nusantara' },
    ],
    body: [
      {
        h: 'Koleksi dan Latar Sejarahnya',
        p: [
          'Perpustakaan Universitas Leiden di Belanda menyimpan sejumlah manuskrip berbahasa Aceh, Melayu, dan Arab yang berasal dari Aceh, termasuk teks-teks tarekat. Koleksi ini terbentuk pada masa Hindia Belanda melalui pengumpulan pejabat kolonial, orientalis, dan peneliti yang berkunjung ke Aceh. Kajian awal atas naskah-naskah Aceh, termasuk praktik tarekat di sana, banyak dikerjakan tokoh seperti Snouck Hurgronje pada akhir abad ke-19. Manuskrip-manuskrip ini menjadi bukti tertulis perkembangan tarekat di pantai barat Sumatera.',
        ],
      },
      {
        h: 'Nilai bagi Kajian Tarekat Nusantara',
        p: [
          'Corpus ini penting karena Aceh merupakan salah satu gerbang masuk tarekat ke Nusantara, dengan jalur-jalur seperti Naqsyabandiyah dan Syattariyah yang tumbuh sejak abad ke-16 hingga ke-19. Bagi tim 165, koleksi Leiden diposisikan sebagai referensi akademik untuk membandingkan riwayat tarekat di Nusantara dengan sumber manuskrip aslinya. Halaman ini tidak menampilkan isi manuskrip secara utuh, melainkan menjelaskan kedudukan koleksi dan arah penelusurannya. Jamaah yang berminat riset dapat menelusuri katalog digital perpustakaan universitas tersebut.',
          'Kajian manuskrip Aceh juga menunjukkan pergantian kebiasaan: teks tarekat ditulis dalam bahasa Melayu beraksara Jawi dengan kutipan Arab. Pemahaman pola semacam itu membantu pembaca membaca literatur tarekat Nusantara awal. 165 mencatat pola tersebut pada arsip risetnya untuk halaman-halaman sejarah berikutnya.',
        ],
      },
    ],
    related: ['bruinessen-tarekat-naqsyabandiyah-1992', 'eponym-founders-encyclopedic-corpus', '165-master-blueprint'],
  },
  {
    slug: 'ad-durarul-faridah',
    kind: 'library',
    title: 'Ad-Durarul Fāridah',
    titleAr: 'الدرر الفريدة',
    category: 'Ampalan & Wirid',
    summary: 'Kumpulan wirid dan dzikir terpilih dalam khazanah tarekat; judulnya berarti permata-mutiara istimewa yang dibaca jamaah harian.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti; penelusuran katalog masih berjalan' },
      { label: 'Dunia Islam', value: 'Khazanah literatur wirid pesantren dan tarekat' },
      { label: 'Bidang', value: 'Dzikir, wirid, dan doa' },
      { label: 'Kedudukan dalam TQN', value: 'Pendamping amalan harian jamaah dalam lingkup TQN' },
    ],
    body: [
      {
        h: 'Judul dan Kedudukan dalam Katalog',
        p: [
          'Ad-Durarul Fāridah berarti permata-mutiara istimewa. Dalam katalog perpustakaan 165, kitab ini dicatat sebagai kumpulan wirid dan dzikir terpilih yang beredar di lingkungan pesantren dan tarekat. Data penulis, tempat penulisan, dan tahun karangan belum terverifikasi secara pasti, sehingga halaman ini sengaja tidak menetapkan atribusi tertentu. Langkah verifikasi melalui perbandingan manuskrip dan edisi cetak masih berjalan di sisi tim editorial.',
        ],
      },
      {
        h: 'Pola Isi dan Adab Mengamalkannya',
        p: [
          'Kitab wirid semacam ini lazimnya memuat dzikir pagi-petang, doa harian, dan nasihat singkat yang disusun agar mudah dihafal. Nilai utamanya adalah keberlanjutan amalan: sedikit tetap rutin lebih dicintai daripada banyak namun terputus. Bagi jamaah TQN 165, wirid apa pun yang diambil dari kitab harus tetap dalam naungan izin dan bimbingan mursyid agar urutan dzikir tarekat tidak tertukar. Halaman ini juga mengingatkan pembaca memeriksa kembali katalog 165 ketika hasil verifikasi terbaru telah dirilis.',
          'Ketika berhadapan dengan kitab wirid yang datanya belum terverifikasi, pembaca disarankan memeriksa daftar isi dan pembanding edisi sebelum mengamalkannya. Langkah kecil ini mencegah tertukarnya bacaan antar kitab yang judulnya mirip. Prinsip yang sama diterapkan tim editorial dalam menilai seluruh koleksi.',
        ],
      },
    ],
    related: ['al-hisnul-hasin', 'al-wirdul-latif', 'fathal-arifin'],
  },
  {
    slug: 'ad-duwal',
    kind: 'library',
    title: 'Ad-Duwal',
    titleAr: 'الدول',
    category: 'Sejarah & Manaqib',
    summary: 'Kitab sejarah dalam khazanah pesantren yang mengulas dinamika dinasti-dinasti dan perjalanan umat Islam dari masa ke masa.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti dalam katalog 165' },
      { label: 'Dunia Islam', value: 'Tradisi historiografi Islam, dibaca dalam lingkungan pesantren' },
      { label: 'Bidang', value: 'Sejarah Islam' },
      { label: 'Kedudukan dalam TQN', value: 'Bekal wawasan sejarah bagi jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Genre Kitab Sejarah Islam',
        p: [
          'Ad-Duwal adalah kitab sejarah dalam khazanah pesantren. Kata duwal merupakan jamak dari dawlah yang berarti dinasti atau negara, sehingga judulnya mengisyaratkan pembahasan dinamika kekuasaan dan perjalanan umat Islam dari masa ke masa. Katalog 165 belum menemukan atribusi penulis yang kokoh untuk edisi yang dirujuk, sehingga halaman ini menuliskan kedudukan genre-nya lebih dahulu. Penelusuran lanjutan atas edisi dan salinan akan memutakhirkan halaman ini.',
        ],
      },
      {
        h: 'Manfaat Membaca Sejarah bagi Jamaah',
        p: [
          'Literatur sejarah membantu jamaah memahami bagaimana ilmu, adab, dan tarekat berpindah dari satu wilayah ke wilayah lain melalui guru dan muridnya. Dari pembacaan sejarah lahir penghargaan pada silsilah, yang dalam TQN menjadi bagian dari adab bermursyid. Kitab-kitab sejarah pesantren umumnya ditulis ringkas agar mudah dihafal santri, kemudian diulas lewat syarah. Bagi pembaca 165, kitab ini sebaiknya dibandingkan dengan karya historiografi besar seperti Al-Ibar dan kajian akademik modern.',
          'Pembacaan kitab sejarah juga melatih kehati-hatian terhadap riwayat: mana yang berdalil kuat dan mana yang bersifat riwayat populer. Kebiasaan membandingkan sumber inilah yang dibawa 165 dalam setiap halaman sejarah. Dengan cara itu, penghormatan pada tradisi berjalan bersama ketelitian.',
        ],
      },
    ],
    related: ['al-ibar', 'bruinessen-tarekat-naqsyabandiyah-1992', 'eponym-founders-encyclopedic-corpus'],
  },
  {
    slug: 'adab-al-mursyid',
    kind: 'library',
    title: 'Adab al-Mursyid',
    titleAr: 'أدب المرشد',
    category: 'Tasawuf & Akhlak',
    summary: 'Kajian adab bagi mursyid tarekat: tanggung jawab pembimbing, keteladanan akhlak, dan batas-batas otoritas spiritual dalam syariat.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti; masuk khazanah literatur adab tarekat' },
      { label: 'Dunia Islam', value: 'Tradisi tasawuf dari abad klasik hingga kontemporer' },
      { label: 'Bidang', value: 'Adab dan tata pergaulan murid-mursyid' },
      { label: 'Kedudukan dalam TQN', value: 'Pengingat amanah mursyid dalam TQN Qodiriah Naqsabandiyah' },
    ],
    body: [
      {
        h: 'Tema dan Konteks',
        p: [
          'Adab al-Mursyid membicarakan sisi lain hubungan murid dan guru rohani, yakni adab yang melekat pada mursyid sendiri. Katalog 165 memuatnya sebagai literatur adab tarekat tanpa atribusi penulis yang terverifikasi. Tradisi tasawuf sejak abad klasik menekankan bahwa pembimbing diuji terlebih dahulu oleh syariat sebelum membimbing orang lain. Kitab semacam ini merekam kaidah-kaidah itu agar kedudukan mursyid tidak disalahpahami sebagai kedudukan mutlak di luar syariat.',
        ],
      },
      {
        h: 'Isi Pokok dan Relevansi',
        p: [
          'Pembahasannya umumnya meliputi kelayakan seorang mursyid, tanggung jawab menjaga amanah, keteladanan akhlak, batasan menampung murid, serta larangan mengada-ada klaim karamah. Bagi TQN Qodiriah Naqsabandiyah 165, literatur seperti ini mengingatkan bahwa otoritas mursyid berdiri di atas kepatuhan kepada syariat dan teladan Nabi. Jamaah yang membacanya diharapkan lebih bijak menilai tuntunan dan tidak mudah terpapar klaim-klaim menyesatkan. Halaman ini dianjurkan dibaca berdampingan dengan kitab adab murid.',
          'Bagi pembimbing majelis, kitab semacam ini dapat dijadikan bahan evaluasi diri berkala, bukan sekadar bahan ceramah. Evaluasi yang jujur menjaga hubungan mursyid-murid tetap amanah. Halaman ini juga menyinggung pentingnya mursyid memiliki guru-fiqih yang memeriksa amalan jamaahnya.',
        ],
      },
    ],
    related: ['adabul-murid-wal-mursyid', 'ar-risalah-alqusyairiyyah', 'al-luma'],
  },
  {
    slug: 'adab-berziarah',
    kind: 'library',
    title: 'Adab Berziarah',
    category: 'Ampalan & Wirid',
    summary: 'Panduan adab berziarah makam dan tempat berkah: tata caranya, bacaan dan doanya, serta larangan-larangan yang menyertainya.',
    facts: [
      { label: 'Penulis', value: 'Kompilasi tradisi; penulis tidak terverifikasi secara pasti' },
      { label: 'Dunia Islam', value: 'Praktik ziarah berlaku luas di dunia Islam termasuk Nusantara' },
      { label: 'Bidang', value: 'Adab dan amalan ziarah' },
      { label: 'Kedudukan dalam TQN', value: 'Ziarah merupakan amalan akrab bagi jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Ziarah dalam Tradisi Muslim',
        p: [
          'Adab Berziarah adalah panduan tata cara mengunjungi makam dan tempat-tempat yang dianggap berkah. Katalog 165 mencatatnya sebagai kitab adab dan amalan, dengan penulis yang belum terverifikasi secara pasti. Praktik ziarah dikenal luas di dunia Islam, termasuk Nusantara, mulai dari ziarah kubur keluarga, ulama, hingga makam mursyid tarekat. Yang dibakukan kitab semacam ini bukan mitos, melainkan adab-adab yang berpangkal pada anjuran hadits dan praktik ulama.',
        ],
      },
      {
        h: 'Adab Pokok yang Ditegaskan',
        p: [
          'Isi kitab biasanya mengurutkan niat kunjungan, bacaan ketika memasuki pemakaman, salam kepada penghuni makam, doa untuk mereka, serta larangan seperti duduk di atas kuburan atau meminta hajat kepada penghuni makam. Bagi jamaah TQN 165, ziarah sering terjadi ketika mengunjungi makam mursyid dan pondok, sehingga panduan ini membantu menjaga kunjungan tetap sederhana dan beradab. Pesan utamanya adalah ziarah menguatkan ingatan kematian dan mendorong amal. Kunjungan tetap disempurnakan dengan doa kepada Allah, bukan kebergantungan pada makhluk.',
          'Kunjungan ziarah paling bermakna ketika diniati sebagai pengingat mati dan penyambung doa, bukan wisata ruhani. Oleh karena itu panduan ini menekankan kesederhanaan: doa singkat, waktu terkendali, dan tempat tetap bersih. Adab yang sama dianjurkan ketika jamaah 165 berkunjung ke makam para guru.',
        ],
      },
    ],
    related: ['abwab-al-jannat', 'al-hisnul-hasin', 'adabul-murid-wal-mursyid'],
  },
  {
    slug: 'adabul-muluk',
    kind: 'library',
    title: 'Adabul Mulūk',
    titleAr: 'أدب الملوك',
    category: 'Tasawuf & Akhlak',
    summary: 'Risalah adab tasawuf dari lingkungan Naqsyabandiyah yang mengatur batin murid dalam menghadap pemimpin rohaninya.',
    facts: [
      { label: 'Penulis', value: 'Dinisbatkan kepada Nuruddin Abdurrahman bin Qasim al-Badakhshi, ahli tarekat Naqsyabandiyah dari Kashmir abad ke-17; riwayatnya masih dikaji peneliti' },
      { label: 'Dunia Islam', value: 'Tradisi tulis Persia dan Kashmir dalam lingkungan Naqsyabandiyah' },
      { label: 'Bidang', value: 'Adab murid terhadap pemimpin rohani' },
      { label: 'Kedudukan dalam TQN', value: 'Cermin adab batin murid dalam TQN Qodiriah Naqsabandiyah' },
    ],
    body: [
      {
        h: 'Risalah Adab dari Lingkungan Naqsyabandiyah',
        p: [
          'Adabul Mulūk adalah risalah tasawuf yang masyhur di lingkungan Naqsyabandiyah, terutama melalui tradisi tulis Persia dan Kashmir. Judulnya secara harfiah berarti adab para raja, dan dalam pemahaman tarekat, raja di sini adalah para pemimpin rohani yang dituakan. Karya ini dinisbatkan kepada Nuruddin Abdurrahman bin Qasim al-Badakhshi, ahli tarekat Naqsyabandiyah dari Kashmir sekitar abad ke-17, dengan catatan bahwa riwayat penulisan masih dikaji para peneliti.',
        ],
      },
      {
        h: 'Isi dan Pesannya bagi Jamaah',
        p: [
          'Risalah ini merinci adab murid kepada guru: cara hadir, cara berbicara, batas percakapan, kesabaran menghadapi tarbiyah, sampai tata menerima dzikir dan irsyad. Nilainya adalah ketertiban batin yang menumbuhkan manfaat, karena dalam tasawuf adab diyakini lebih dahulu daripada banyaknya dzikir. Bagi TQN Qodiriah Naqsabandiyah 165, kitab ini menjadi cermin bahwa penghormatan kepada mursyid adalah adab batin, bukan penghormatan seperti raja duniawi. Pembaca dianjurkan menyandingkannya dengan literatur adab murid-mursyid lainnya.',
          'Para peneliti mencatat risalah adab semacam ini berpindah dari Persia ke Asia Selatan bersama perantauan murid-murid Naqsyabandiyah. Perpindahan itu menunjukkan bahwa adab adalah bagian dari ajaran yang diwariskan, bukan lampiran. 165 memakai data tersebut untuk melengkapi peta literatur adab tarekat.',
        ],
      },
    ],
    related: ['adabul-murid-wal-mursyid', 'adab-al-mursyid', 'ar-risalah-alqusyairiyyah'],
  },
  {
    slug: 'adabul-murid-wal-mursyid',
    kind: 'library',
    title: 'Adabul Murid wal Mursyid',
    titleAr: 'أدب المريد والمرشد',
    category: 'Tasawuf & Akhlak',
    summary: 'Tuntunan adab timbal balik antara murid dan mursyid dalam jalur tarekat: kesungguhan, kesabaran, dan hormat yang beradab.',
    facts: [
      { label: 'Penulis', value: 'Kompilasi tradisi adab tarekat; penulis tidak terverifikasi secara pasti' },
      { label: 'Dunia Islam', value: 'Warisan etika tasawuf dari abad klasik hingga Nusantara' },
      { label: 'Bidang', value: 'Adab murid dan mursyid' },
      { label: 'Kedudukan dalam TQN', value: 'Inti tata pergaulan jamaah dengan mursyid TQN' },
    ],
    body: [
      {
        h: 'Pergaulan Murid dan Mursyid',
        p: [
          'Adabul Murid wal Mursyid membahas adab timbal balik antara pencari jalan dan pembimbingnya. Katalog 165 mencatatnya sebagai kompilasi tradisi adab tarekat tanpa penulis yang terverifikasi secara pasti. Dalam khazanah tasawuf, hubungan murid-mursyid diibaratkan perawat dan penyakit jiwa: bila adab kandas, obat pun sukar masuk. Karena itu para sufi abad klasik mengurutkan adab bahkan sebelum membahas dzikir itu sendiri.',
        ],
      },
      {
        h: 'Kaidah yang Diangkat',
        p: [
          'Kitab semacam ini menegaskan kesungguhan niat, kesabaran menerima nasihat, menjaga rahasia tarekat, tidak mendahului izin guru, serta menempatkan syariat sebagai pangkalan segalanya. Di sisi mursyid, ia dituntut tulus, wara, dan bersedia memperbaiki murid tanpa pamrih. Bagi jamaah TQN 165, bacaan ini membantu menjaga hubungan baiat agar tetap sehat, terarah, dan bebas dari penokohan berlebihan. Dengan adab yang lurus, dzikir yang diberikan mursyid dapat berjalan sesuai tuntunan syariat.',
          'Masalah yang paling sering muncul dalam hubungan murid-mursyid adalah kecewa karena harapan tidak terpenuhi. Kitab adab menjawabnya dengan menegaskan peran masing-masing dan batas tuntutan. Pemahaman ini membantu jamaah 165 menghadapi perbedaan pendapat dengan tenang tanpa meninggalkan baiat secara gegabah.',
        ],
      },
    ],
    related: ['adab-al-mursyid', 'adabul-muluk', 'ar-risalah-alqusyairiyyah'],
  },
  {
    slug: 'adh-dhurrun-nafis',
    kind: 'library',
    title: 'Adz-Dzurrun Nafīs',
    titleAr: 'الدر النفيس',
    category: 'Ampalan & Wirid',
    summary: 'Kitab wirid berjudul Permata Murni yang berisi dzikir, doa, dan nasihat terpilih untuk menemani amalan harian jamaah tarekat.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti; sedang ditelusuri lewat perbandingan manuskrip' },
      { label: 'Dunia Islam', value: 'Khazanah literatur wirid pesantren dan tarekat Nusantara' },
      { label: 'Bidang', value: 'Dzikir dan wirid' },
      { label: 'Kedudukan dalam TQN', value: 'Menemani wirid harian jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Judul dan Status Verifikasi',
        p: [
          'Adz-Dzurrun Nafīs berarti permata yang murni. Katalog 165 menempatkannya pada kelompok kitab wirid dan dzikir yang beredar di lingkungan pesantren serta tarekat Nusantara. Sebagaimana beberapa kitab lain dalam kelompok ini, atribusi penulis belum dapat dipastikan dari sumber yang kami akses, sehingga halaman ini tidak menetapkan nama penulis atau tahun karangan. Pemutakhiran akan dilakukan begitu verifikasi silang atas edisi cetak dan salinan tuntas.',
        ],
      },
      {
        h: 'Isi dan Etika Amalan',
        p: [
          'Kitab wirid jenis ini umumnya merangkum kalimat tayyibah, doa harian, dan nasihat ringkas yang dikutip dari hadits dan perkataan ulama. Kegunaannya paling kuat ketika dibaca dalam irama kehidupan yang tetap: pagi, petang, dan jeda majelis ilmu. Bagi jamaah TQN Qodiriah Naqsabandiyah, wirid pribadi tetap berbeda dari awrad tarekat yang diberikan mursyid, sehingga keduanya ditempatkan pada posisi masing-masing. Pembaca diingatkan untuk tidak mengganti urutan awrad dengan pilihan sendiri tanpa izin.',
          'Judul kitab wirid kerap bersesuaian antar salinan, tetapi isinya dapat berbeda tergantung lingkungan penggandaannya. Karena itu verifikasi edisi dilakukan dengan membandingkan daftar isi, bukan hanya judul. Metode kecil ini telah menyelamatkan banyak halaman 165 dari salah penisbatan.',
        ],
      },
    ],
    related: ['fathal-arifin', 'al-hisnul-hasin', 'ad-durarul-faridah'],
  },
  {
    slug: 'adz-dzakirah',
    kind: 'library',
    title: 'Adz-Dzākirah',
    titleAr: 'الذكرة',
    category: 'Ampalan & Wirid',
    summary: 'Kumpulan dzikir dan wirid yang menuntun jamaah pada kesadaran akan Allah sepanjang hari, sesuai tuntunan mursyid tarekat.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti dalam katalog 165' },
      { label: 'Dunia Islam', value: 'Tradisi dzikir tarekat dari abad klasik hingga kontemporer' },
      { label: 'Bidang', value: 'Dzikir, wirid, dan doa' },
      { label: 'Kedudukan dalam TQN', value: 'Bahan amalan harian jamaah TQN Qodiriah Naqsabandiyah' },
    ],
    body: [
      {
        h: 'Kitab Dzikir dalam Khazanah Tarekat',
        p: [
          'Adz-Dzākirah, yang namanya berarti peringatan, dicatat katalog 165 sebagai kumpulan dzikir dan wirid untuk amalan harian. Data penulis dan masa penyusunan belum terverifikasi secara pasti, sehingga halaman ini memaparkan kedudukan genre-nya dalam tradisi tarekat. Sejak abad klasik, kitab-kitab dzikir disusun agar umat mudah menjaga lisan dan hati di tengah kesibukan, mengikuti anjuran Nabi untuk memperbanyak dzikir. Tradisi ini lalu dilanjutkan tarekat dengan tata dzikir yang terpola.',
        ],
      },
      {
        h: 'Cara Menempatkannya dalam Amalan',
        p: [
          'Pembacaan kitab dzikir paling bermanfaat bila disertai memahami makna, menjaga hukum amalan, dan konsistensi harian. Bagi jamaah TQN 165, kitab semacam ini menjadi referensi penambah bacaan, sementara awrad utama tetap yang diberikan melalui baiat. Halaman ini juga mengingatkan bahwa dzikir bukan sekadar hafalan, melainkan kehadiran hati yang mengingat Allah. Katalog 165 akan memutakhirkan data bibliografis ketika hasil penelusuran lanjutan tersedia.',
          'Dzikir yang tertata memerlukan tiga hal sederhana: waktu yang pasti, bacaan yang dipahami, dan perhitungan yang tidak membebani. Kitab-kitab dzikir klasik mengajarkan pola ini jauh sebelum era aplikasi. Jamaah 165 dapat meneladani pola tersebut dalam wirid harian di rumah maupun majelis.',
        ],
      },
    ],
    related: ['al-hisnul-hasin', 'al-wirdul-latif', 'adh-dhurrun-nafis'],
  },
  {
    slug: 'al-azhar-hamka',
    kind: 'library',
    title: 'Al-Azhar (Hamka)',
    category: 'Kajian Akademik',
    summary: 'Tafsir Al-Azhar karya Buya Hamka, tafsir al-Quran berbahasa Indonesia yang menjadi rujukan umat Islam Indonesia abad ke-20.',
    facts: [
      { label: 'Penulis', value: 'Buya Hamka (Haji Abdul Malik Karim Amrullah), 1908-1981' },
      { label: 'Dunia Islam', value: 'Indonesia abad ke-20; terbit pada era 1960-an' },
      { label: 'Bidang', value: 'Tafsir al-Quran berbahasa Indonesia' },
      { label: 'Kedudukan dalam TQN', value: 'Rujukan pemahaman al-Quran bagi jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Penulis dan Latar Penulisan',
        p: [
          'Tafsir Al-Azhar adalah karya Buya Hamka, nama lengkapnya Haji Abdul Malik Karim Amrullah, ulama dan sastrawan Minangkabau yang hidup 1908 sampai 1981. Karya tafsir ini dikerjakan dalam rentang waktu panjang dan terbit pada era 1960-an, termasuk pada masa pengerjaan yang berlangsung ketika penulis ditahan pemerintah. Hamka menulisnya sebagai tafsir berbahasa Indonesia yang dapat dibaca umat yang belum menguasai bahasa Arab. Judul Al-Azhar terkait majelis pengajian yang diampunya di Masjid Agung Al-Azhar, Jakarta.',
        ],
      },
      {
        h: 'Kedudukan Tafsir bagi Umat',
        p: [
          'Tafsir Al-Azhar menggabungkan penjelasan kebahasaan, tema peradaban, dan nasihat akhlak dengan gaya yang mengalir. Ia termasuk tafsir berbahasa Indonesia paling dikenal pada abad ke-20 dan sering dirujuk dalam kajian umat Islam Indonesia. Bagi jamaah TQN 165, tafsir ini membantu menghadirkan makna al-Quran ketika membaca kitab-kitab tasawuf yang mengutip ayat. 165 menempatkannya sebagai rujukan tafsir modern di samping literatur klasik.',
          'Gaya penulisan Hamka yang menghubungkan ayat dengan persoalan masyarakat menjadikan tafsir ini dekat dengan pembaca awam. Bagi jamaah, tafsir semacam ini cocok dipakai sebagai pendamping murajaah al-Quran harian. Rak tafsir 165 memadukannya dengan rujukan yang lebih akademis.',
        ],
      },
    ],
    related: ['ihya-ulumuddin', 'al-munqidh-min-al-dalal-ghazali', 'muntakhab-al-ahadis'],
  },
  {
    slug: 'al-fathul-mubin-fiqih',
    kind: 'library',
    title: 'Al-Fathul Mubīn',
    titleAr: 'الفتح المبين',
    category: 'Fiqih & Ushul',
    summary: 'Kitab fiqih bermazhab Syafii yang beredar di pesantren Nusantara; judulnya berarti kemenangan yang jelas.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti; karya ini berbeda dari Fathul Muin karya Zainuddin al-Malibari' },
      { label: 'Dunia Islam', value: 'Tradisi fiqih Syafii pesantren Nusantara' },
      { label: 'Bidang', value: 'Fiqih mazhab Syafii' },
      { label: 'Kedudukan dalam TQN', value: 'Bekal fiqih ibadah jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Kitab Fiqih Syafii Pesantren',
        p: [
          'Al-Fathul Mubīn berarti kemenangan yang jelas. Katalog 165 memuatnya sebagai kitab fiqih bermazhab Syafii yang beredar di pesantren Nusantara. Atribusi penulis untuk edisi yang dirujuk belum terverifikasi secara pasti, dan halaman ini sengaja menjauhi penisbatan yang belum kokoh. Nama judul ini juga perlu dibedakan dari Fathul Muin karya Zainuddin al-Malibari, kitab fiqih Syafii yang lebih masyhur dengan syarah-syarah terkenal.',
        ],
      },
      {
        h: 'Fungsi dalam Belajar Fiqih',
        p: [
          "Kitab fiqih matan berukuran kecil biasanya menjadi jembatan sebelum santri naik ke syarah besar seperti Mughnil Muhtaj dan I'anatuth Thalibin. Pembahasannya menyangkup thaharah, shalat, dan bab ibadah lain sesuai kebiasaan matan Syafii. Bagi jamaah TQN 165, kepastian fiqih ibadah adalah syarat berjalannya dzikir dengan tenang, sehingga kitab fiqih dasar tetap dijaga dalam daftar bacaan. Perincian bibliografis akan diperbarui setelah verifikasi edisi selesai.",
          'Dalam peta kitab fiqih Syafii, matan pendek selalu disandingkan dengan syarah agar hukum yang dipendekkan mendapat dalil dan penjelasan. Pembaca 165 diarahkan memilih edisi yang dilengkapi syarah bila memungkinkan. Cara ini mencegah salah paham akibat membaca matan tanpa penjelasan.',
        ],
      },
    ],
    related: ['burhan-al-yaqin', 'al-muhalla', 'bahishti-zewar'],
  },
  {
    slug: 'al-hisnul-hasin',
    kind: 'library',
    title: 'Al-Hisnul Hasīn',
    titleAr: 'الحصن الحصين',
    category: 'Ampalan & Wirid',
    summary: 'Kumpulan dzikir dan doa Nabi dari hadits yang disusun Ibnu al-Jazari, benteng ruhani bagi praktik harian muslim di seluruh dunia.',
    facts: [
      { label: 'Penulis', value: 'Muhammad bin Muhammad bin al-Jazari (Syamsuddin), 751-833 H / 1350-1429 M' },
      { label: 'Dunia Islam', value: 'Syam dan dunia Islam; teks tersebar luas hingga Nusantara' },
      { label: 'Bidang', value: 'Dzikir, doa, dan adab harian dari hadits' },
      { label: 'Kedudukan dalam TQN', value: 'Sumber amalan dzikir-doa harian jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Penulis dan Tujuan Kitab',
        p: [
          'Al-Hisnul Hasīn, benteng yang kokoh, adalah kompilasi dzikir dan doa Nabi yang disusun Ibnu al-Jazari, ahli qiraat dari Syam yang hidup 751 sampai 833 H atau 1350 sampai 1429 M. Kitab ini disusun bukan sebagai kumpulan doa pilihan pribadi, melainkan hadits-hadits dzikir dan doa yang dikutip dengan menyinggung sumbernya. Susunannya diurutkan berdasarkan topik kehidupan, sehingga pembaca menemukan doa untuk waktu-waktu dan keadaan tertentu. Karena ringkas dan rapi, kitab ini menyebar luas dari Syam sampai Nusantara.',
        ],
      },
      {
        h: 'Isi dan Kegunaan Harian',
        p: [
          'Isinya meliputi dzikir pagi-petang, doa bangun tidur, adab makan, doa safar, dan banyak keadaan lain. Kegunaannya bagi jamaah TQN 165 adalah menyediakan bahan dzikir-doa harian yang bersumber hadits sehingga amalan berdiri di atas dalil. Kitab ini juga sering dijadikan bahan pegangan majelis dzikir karena ukurannya kecil dan mudah dibawa. Pembaca dianjurkan memahami makna setiap doa agar amalan tidak berhenti pada pelafalan.',
          'Banyak cetakan Al-Hisnul Hasin beredar dengan terjemahan bahasa Indonesia dan transkripsi latin, sehingga mudah diakses jamaah dewasa maupun pemula. Edisi bersumber hadits mempermudah pengecekan dalil saat dibutuhkan. 165 menyarankan jamaah menyimpan satu edisi di rumah sebagai benteng amalan harian.',
        ],
      },
    ],
    related: ['al-wirdul-latif', 'adz-dzakirah', 'muntakhab-al-ahadis'],
  },
  {
    slug: 'al-ibar',
    kind: 'library',
    title: "Al-'Ibar",
    titleAr: 'كتاب العبر',
    category: 'Sejarah & Manaqib',
    summary: 'Kitab Al-Ibar karya Ibnu Khaldun, mahakarya historiografi Islam yang memuat Muqaddimah dan ilmu tentang kemajemukan peradaban.',
    facts: [
      { label: 'Penulis', value: 'Ibnu Khaldun (Waliuddin Abdurrahman), 732-808 H / 1332-1406 M' },
      { label: 'Dunia Islam', value: 'Maghribi, Andalusia, dan Mesir abad ke-14' },
      { label: 'Bidang', value: 'Sejarah dan ilmu kemasyarakatan' },
      { label: 'Kedudukan dalam TQN', value: 'Memperkaya wawasan sejarah jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Mahakarya Ibnu Khaldun',
        p: [
          'Kitab al-Ibar adalah ensiklopedia sejarah karya Ibnu Khaldun, pemikir Maghribi yang hidup 732 sampai 808 H atau 1332 sampai 1406 M. Karya ini berjudul lengkap Kitab al-Ibar wa Diwan al-Mubtada wal-Khabar, memuat sejarah bangsa-bangsa dari masa Nabi sampai zamannya. Bagian pembuka yang terkenal dengan nama Muqaddimah kemudian menjadi karya mandiri karena kebaruan pemikirannya. Di dalamnya Ibnu Khaldun merumuskan ilmu tentang kemasyarakatan yang kini sering disebut cikal bakal sosiologi.',
        ],
      },
      {
        h: 'Nilai bagi Pembaca Tarekat',
        p: [
          'Pembaca tarekat memperoleh manfaat dari cara Ibnu Khaldun memandang perpindahan ilmu: pengetahuan berpindah melalui guru, murid, dan kota-kota pusat belajar. Cara pandang ini membantu memahami bagaimana tarekat menyebar dari Timur ke Nusantara. Bagi 165, kitab ini menjadi rujukan sejarah klasik yang menyeimbangkan kajian-kajian modern tentang tarekat. Halaman ini memaparkan kedudukan karya tanpa mengutip angka-angka yang belum terverifikasi.',
          'Bagian-bagian sejarah Kitab al-Ibar cukup besar untuk dibaca bertahap, sehingga 165 menyarankan pembaca memulai dari Muqaddimah. Pemahaman istilah kemasyarakatan di dalamnya membantu membaca bagian sejarah berikutnya. Pendekatan bertahap ini juga berlaku bagi kitab-kitab ensiklopedis lain di rak 165.',
        ],
      },
    ],
    related: ['ad-duwal', 'bruinessen-tarekat-naqsyabandiyah-1992', 'eponym-founders-encyclopedic-corpus'],
  },
  {
    slug: 'al-jawahir-al-khams',
    kind: 'library',
    title: 'Al-Jawāhir al-Khams',
    titleAr: 'الجواهر الخمس',
    category: 'Tasawuf & Akhlak',
    summary: 'Karya Syekh Ibrahim Niasse dari Senegal tentang lima mutiara ajaran Tijaniyah; jendela literatur tarekat dari Afrika Barat.',
    facts: [
      { label: 'Penulis', value: 'Syekh Ibrahim bin Abdullah Niasse, 1900-1975, Kaolack, Senegal' },
      { label: 'Dunia Islam', value: 'Afrika Barat abad ke-20, jaringan Tijaniyah lintas benua' },
      { label: 'Bidang', value: 'Tasawuf dan tradisi tarekat Tijaniyah' },
      { label: 'Kedudukan dalam TQN', value: 'Bahan perbandingan literatur tarekat; bukan awrad TQN 165' },
    ],
    body: [
      {
        h: 'Penulis dan Lingkup Karya',
        p: [
          'Al-Jawāhir al-Khams, lima permata, adalah karya Syekh Ibrahim bin Abdullah Niasse, pemimpin tarekat dari Kaolack, Senegal, yang hidup 1900 sampai 1975. Beliau memimpin jaringan Tijaniyah yang besar di Afrika Barat dan dikenal luas hingga Timur Tengah. Kitab ini menghimpun lima naskah inti tentang ajaran Tijaniyah, sehingga menjadi rujukan penting literatur tarekat dari Afrika. Bagi pembaca Nusantara, karya ini membuka jendela ke dunia tarekat di seberang Samudra Hindia.',
        ],
      },
      {
        h: 'Kedudukan dalam Katalog 165',
        p: [
          '165 mencantumkan kitab ini sebagai bahan perbandingan literatur tarekat, bukan sebagai awrad jalur Qodiriah Naqsabandiyah. Perbedaan jalur tidak menghalangi manfaat membaca, karena perkembangan tarekat di dunia Islam saling memengaruhi melalui jaringan guru dan murid. Pembaca diingatkan untuk tetap menjalankan awrad yang telah diwariskan melalui baiat TQN. Kajian lanjutan atas terjemahan dan riwayat edisi masih berjalan di sisi tim editorial.',
          'Penyebaran tulisan Syekh Ibrahim Niasse menunjukkan bahwa jaringan tarekat kini melintasi benua melalui murid yang menetap di negara-negara baru. Data semacam ini berguna untuk memahami geografi tarekat abad ke-20. Rak kajian 165 menyimpan karya ini di kelompok referensi perbandingan.',
        ],
      },
    ],
    related: ['futuh-al-ghaib-jilani', 'alghunya-lithalibi', 'ar-risalah-alqusyairiyyah'],
  },
  {
    slug: 'al-kibrit-al-ahmar',
    kind: 'library',
    title: 'Al-Kibrīt al-Ahmar',
    titleAr: 'الكبريت الأحمر',
    category: 'Tasawuf & Akhlak',
    summary: 'Risalah tasawuf berjudul Belerang Merah, metafora permata tertinggi dalam pencarian ruhani yang diidamkan para pencari hakikat.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti dalam katalog 165' },
      { label: 'Dunia Islam', value: 'Khazanah tasawuf klasik; kibrit al-ahmar melambangkan eliksir tertinggi' },
      { label: 'Bidang', value: 'Tasawuf dan penghayatan ihsan' },
      { label: 'Kedudukan dalam TQN', value: 'Bacaan pendalaman makna dzikir bagi jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Judul yang Menggambarkan Hasrat Pencari',
        p: [
          'Al-Kibrīt al-Ahmar, belerang merah, adalah istilah warisan ilmu kimia klasik untuk zat yang paling dicari para alkimis. Dalam bahasa tasawuf, judul semacam ini dipakai untuk menggambarkan permata tertinggi pencarian ruhani yang jarang diperoleh. Katalog 165 memuat kitab ini sebagai risalah tasawuf, dengan penulis yang belum terverifikasi secara pasti. Halaman ini menjelaskan makna judul dan kedudukan genre-nya tanpa menambah klaim yang belum berpijak.',
        ],
      },
      {
        h: 'Isi Umum dan Adab Membaca',
        p: [
          'Risalah sejenis umumnya membahas pendalaman makna dzikir, penyucian hati, dan tanda-tanda kebenaran pada penghayat tarekat, disampaikan dengan simbol-simbol puitis. Adab membacanya adalah menempatkan teks sebagai motivasi, bukan sebagai pegangan praktik yang menggantikan irsyad mursyid. Bagi jamaah TQN 165, bacaan semacam ini membantu menjaga kesungguhan batin saat menjalankan wirid harian. Pembaca baru dianjurkan berdiskusi dengan guru-fiqih agar simbolisme tidak disalahartikan.',
          'Simbolisme dalam judul-judul tasawuf sering menjadi jebakan bagi pembaca yang menerjemahkannya secara harfiah. Karena itu halaman-halaman 165 selalu memberi konteks istilah sebelum masuk ke pembahasan. Pembaca yang mengikuti urutan halaman akan lebih mudah menangkap maksud penulis lama.',
        ],
      },
    ],
    related: ['al-luma', 'at-taaruf', 'ar-risalah-alqusyairiyyah'],
  },
  {
    slug: 'al-luma',
    kind: 'library',
    title: "Al-Luma'",
    titleAr: 'اللماع',
    category: 'Tasawuf & Akhlak',
    summary: 'Al-Luma fi at-Tasawuf karya al-Qusyairi, pegangan awal tasawuf yang meriwayatkan perkataan para sufi dengan jelas dan beradab.',
    facts: [
      { label: 'Penulis', value: 'Abu al-Qasim Abdurrahman al-Qusyairi, 376-465 H / 986-1072 M' },
      { label: 'Dunia Islam', value: 'Naisabur, Khurasan, abad ke-11' },
      { label: 'Bidang', value: 'Tasawuf, istilah sufi, dan riwayat' },
      { label: 'Kedudukan dalam TQN', value: 'Rujukan sejarah awal tasawuf bagi kajian 165' },
    ],
    body: [
      {
        h: 'Penulis dan Tempat Karya dalam Tasawuf',
        p: [
          'Al-Luma fi at-Tasawuf adalah buku tasawuf awal karya Abu al-Qasim Abdurrahman al-Qusyairi, ulama Naisabur yang hidup 376 sampai 465 H atau 986 sampai 1072 M. Kitab ini disusun ketika tasawuf tengah menghadapi kecaman sebagian fuqaha pada abad ke-11. Al-Qusyairi menjawabnya dengan menampilkan riwayat perkataan para sufi berantai jelas serta penjelasan istilah tasawuf satu per satu. Buku ini sering disebut pegangan awal yang menyelamatkan tasawuf dari tuduhan tanpa dasar.',
        ],
      },
      {
        h: 'Isi dan Manfaatnya',
        p: [
          'Isinya meliputi istilah-istilah sufi seperti fana, baqa, dan mahabbah, riwayat para sufi awal, serta bab-bab tentang adab dan masalah halus syariat. Bagi kajian 165, kitab ini menjadi sumber sejarah awal tasawuf yang mendahului kitab Ar-Risalah al-Qusyairiyyah dari penulis yang sama. Bagi jamaah TQN, membacanya menumbuhkan kepastian bahwa jalur dzikir berakar pada tradisi syariat yang tua. Katalog 165 menempatkannya pada kelompok tasawuf dan akhlak.',
          'Al-Qusyairi menyusun Al-Luma sebelum Ar-Risalahnya yang lebih besar, sehingga banyak istilah dicoba pertama kali di sini. Membaca keduanya berurutan menunjukkan perkembangan pemikiran penulis. Halaman 165 menandai urutan tersebut agar pembaca tidak bingung menentukan titik mulai.',
        ],
      },
    ],
    related: ['ar-risalah-alqusyairiyyah', 'at-taaruf', 'ihya-ulumuddin'],
  },
  {
    slug: 'al-muhalla',
    kind: 'library',
    title: 'Al-Muhallā',
    titleAr: 'المحلى بالآثار',
    category: 'Fiqih & Ushul',
    summary: 'Al-Muhalla bi al-Atsar karya Ibnu Hazm, ensiklopedia fiqih berbasis dalil nash yang khas dalam tradisi zahiriyah Andalusia.',
    facts: [
      { label: 'Penulis', value: 'Ibnu Hazm (Ali bin Ahmad), 384-456 H / 994-1064 M, Cordoba' },
      { label: 'Dunia Islam', value: 'Andalusia abad ke-11' },
      { label: 'Bidang', value: 'Fiqih dan usul berbasis atsar (zahiriyah)' },
      { label: 'Kedudukan dalam TQN', value: 'Sumber studi perbandingan fiqih bagi kajian 165' },
    ],
    body: [
      {
        h: 'Penulis dan Metode Kitab',
        p: [
          'Al-Muhallā bi al-Atsar adalah ensiklopedia fiqih karya Ibnu Hazm, ulama Andalusia yang hidup 384 sampai 456 H atau 994 sampai 1064 M. Kitab ini disusun dengan metode zahiriyah, yaitu berpegang pada nash Al-Quran dan hadits secara langsung dalam menetapkan hukum. Ibnu Hazm menyusunnya dari pembahasan-pembahasan yang sempat terhenti karena peristiwa kehidupannya, lalu diselesaikan dengan struktur bab yang rapi. Karyanya terkenal ketat dalam menuntut dalil untuk setiap penilaian.',
        ],
      },
      {
        h: 'Kedudukan dalam Kajian Fiqih',
        p: [
          'Al-Muhalla tercatat sebagai representasi fiqih zahiriyah yang paling lengkap sampai ke zaman kita. Bagi pembaca pesantren bermazhab Syafii, kitab ini berguna sebagai pembanding cara berdalil, bukan sebagai pegangan amalan utama. Bagi kajian 165, kehadirannya memperkaya rak fiqih sehingga jamaah memahami keberagaman metode dalam fikih Islam. Halaman ini memaparkan kedudukan karya tanpa memasukkannya sebagai kitab wirid tarekat.',
          'Sebelum Al-Muhalla, Ibnu Hazm menulis karya usul yang membahas kaidah memahami dalil, sehingga keduanya perlu dibaca berpasangan untuk memahami cara berpikir penulis. Catatan ini dijadikan petunjuk baca pada halaman rak fiqih 165. Pembaca yang meneliti metode zahiriyah dapat memulai dari karya usul tersebut.',
        ],
      },
    ],
    related: ['al-fathul-mubin-fiqih', 'burhan-al-yaqin', 'ihya-ulumuddin'],
  },
  {
    slug: 'al-munawwir',
    kind: 'library',
    title: 'Al-Munawwir',
    category: 'Bahasa & Kamus',
    summary: 'Kamus Arab-Indonesia Al-Munawwir hasil kerja Pondok Pesantren Al-Munawwir Kudus, kunci utama membaca kitab kuning.',
    facts: [
      { label: 'Penulis', value: 'Tim penyusun Pondok Pesantren Al-Munawwir, Kudus, Jawa Tengah' },
      { label: 'Dunia Islam', value: 'Indonesia; edisi pertama terbit pada era 1980-an' },
      { label: 'Bidang', value: 'Kamus bahasa Arab-Indonesia' },
      { label: 'Kedudukan dalam TQN', value: 'Kunci literasi kitab kuning jamaah dan santri TQN 165' },
    ],
    body: [
      {
        h: 'Kamus dari Lingkungan Pesantren',
        p: [
          'Kamus Al-Munawwir adalah kamus Arab-Indonesia yang disusun oleh tim Pondok Pesantren Al-Munawwir di Kudus, Jawa Tengah. Edisi pertama terbit pada era 1980-an dan kemudian berkembang menjadi salah satu kamus paling banyak dipakai santri di Indonesia. Kamus ini disusun menurut susunan akar kata, memuat makna istilah agama, dan dilengkapi indeks penunjang. Nama kamus mengikuti nama pesantren yang menghidupkannya.',
        ],
      },
      {
        h: 'Peran bagi Santri dan Jamaah',
        p: [
          'Bagi santri, kamus ini menjadi alat kerja harian membaca kitab kuning mulai dari matan nahwu sampai syarah fiqih. Bagi jamaah TQN 165 yang tidak mengaji di pesantren, kamus ini membantu memeriksa makna kata pada kitab wirid dan doa. Katalog 165 menempatkannya pada kelompok bahasa dan kamus, berdampingan dengan matan tata bahasa seperti Al-Ajurumiyyah. Halaman ini juga mengingatkan pentingnya belajar bahasa Arab sebagai jalan memahami sumber ajaran secara langsung.',
          'Kamus ini juga dilengkapi kamus Indonesia-Arab pada edisi lanjutan, sehingga dapat dipakai dua arah. Bagi jamaah yang menulis catatan majelis, kemampuan dua arah ini sangat membantu. 165 mencantumkan keterangan edisi agar pembaca memilih cetakan terbaru.',
        ],
      },
    ],
    related: ['aajurumiyah', 'burhan-al-yaqin', 'al-fathul-mubin-fiqih'],
  },
  {
    slug: 'al-munqidh-min-al-dalal-ghazali',
    kind: 'library',
    title: 'Al-Munqidz minad-Dhalāl',
    titleAr: 'المنقذ من الضلال',
    category: 'Tasawuf & Akhlak',
    summary: 'Autobiografi intelektual Imam al-Ghazali tentang pencarian kebenaran, krisis jiwa, dan penemuan jalan tasawuf yang tertib.',
    facts: [
      { label: 'Penulis', value: 'Imam Abu Hamid al-Ghazali, 450-505 H / 1058-1111 M' },
      { label: 'Dunia Islam', value: 'Khurasan, Baghdad, dan Syam abad ke-11-12' },
      { label: 'Bidang', value: 'Epistemologi, tasawuf, dan autobiografi keagamaan' },
      { label: 'Kedudukan dalam TQN', value: 'Cermin perjalanan murid mencari kebenaran dalam TQN' },
    ],
    body: [
      {
        h: 'Latar Penulisan',
        p: [
          'Al-Munqidz minad-Dhalāl, penyelamat dari kesesatan, adalah risalah autobiografi Imam Abu Hamid al-Ghazali yang hidup 450 sampai 505 H atau 1058 sampai 1111 M. Kitab ini ditulis setelah krisis batin yang membuat beliau berhenti mengajar di Nizamiyah Baghdad dan berkelana. Di dalamnya al-Ghazali menguraikan perjalanan intelektualnya menelusuri berbagai madzhab dan metode mencari kebenaran. Kitab kecil ini menjadi salah satu teks paling banyak dibaca dalam literatur Islam klasik.',
        ],
      },
      {
        h: 'Isi dan Pesannya',
        p: [
          'Isinya memuat penilaian atas ilmu kalam, filsafat, gerakan batiniah, dan akhirnya jalan tasawuf yang menurut beliau memberi cahaya pada hati. Al-Ghazali menegaskan kebenaran tidak cukup dicapai dengan hafalan argumen, tetapi menuntut penyucian diri dan pengalaman dzikir. Bagi jamaah TQN 165, risalah ini seperti cermin perjalanan murid: mencari, ragu, lalu menemukan jalan yang tertib di bawah guru. 165 menempatkannya pada kelompok tasawuf dan akhlak.',
          'Bagian penutup risalah ini membahas hubungan ilmu dengan pengalaman batin dan kewajiban berdakwah, yang menunjukkan jalan pulang al-Ghazali ke pengajaran. Bagian tersebut sering dikutip dalam kajian tasawuf modern. Bagi pembaca 165, kisah beliau menguatkan kesabaran dalam tarbiyah tarekat.',
        ],
      },
    ],
    related: ['ihya-ulumuddin', 'at-taaruf', 'ar-risalah-alqusyairiyyah'],
  },
  {
    slug: 'al-wirdul-latif',
    kind: 'library',
    title: 'Al-Wirdul Latīf',
    titleAr: 'الورد اللطيف',
    category: 'Ampalan & Wirid',
    summary: 'Wird harian karya Habib Umar bin Hafizh dari Tarim, litani pagi-petang yang dibaca jamaah di berbagai belahan dunia.',
    facts: [
      { label: 'Penulis', value: 'Habib Umar bin Hafizh, lahir 1962 di Tarim, Hadramaut, pendiri Darul Musthafa' },
      { label: 'Dunia Islam', value: 'Tarim, Hadramaut, dan jaringan Ba-Alawi global' },
      { label: 'Bidang', value: 'Wirid, dzikir, dan doa harian' },
      { label: 'Kedudukan dalam TQN', value: 'Contoh wirid terstandar yang memperkaya referensi amalan 165' },
    ],
    body: [
      {
        h: 'Penulis dan Fungsi Wird',
        p: [
          'Al-Wirdul Latīf adalah wirid harian karya Habib Umar bin Hafizh, ulama Ba-Alawi dari Tarim, Hadramaut, yang lahir tahun 1962 dan mendirikan Darul Musthafa. Wird ini dibaca pada pagi dan petang oleh jamaah yang tersebar di berbagai negara. Isinya merangkai ayat pilihan, dzikir, shalawat, dan doa yang mengalir indah namun tetap berpijak pada hadits. Fungsinya adalah menata jendela waktu dengan dzikir yang tertib.',
        ],
      },
      {
        h: 'Kedudukan dalam Katalog 165',
        p: [
          'Bagi 165, wirid ini dijadikan contoh baku bagaimana sebuah wird modern disusun: ringkas, berurutan, dan mudah dijaga keberlanjutannya. Katalog menempatkannya pada kelompok amalan dan wirid, berdampingan dengan Al-Hisnul Hasin dan Dalailul Khairat. Jamaah TQN Qodiriah Naqsabandiyah dapat memanfaatkannya sebagai bahan tambahan dengan tetap menjalankan awrad utama dari mursyid. Terjemahan dan riwayat edisi sedang disusun untuk pemutakhiran halaman ini.',
          'Wird ini tersedia dalam banyak terjemahan dan catatan adab oleh jamaah di berbagai negara. Tata bacanya terdokumentasi baik, sehingga mudah dijadikan contoh penataan amalan. Rak wirid 165 memanfaatkannya sebagai pembanding tata untuk halaman-halaman awrad.',
        ],
      },
    ],
    related: ['al-hisnul-hasin', 'dalailul-khairat', 'fathal-arifin'],
  },
  {
    slug: 'alghunya-lithalibi',
    kind: 'library',
    title: 'Al-Ghunya li-Ṭālibī',
    titleAr: 'الغنية لطالبي الجنة',
    category: 'Tasawuf & Akhlak',
    summary: 'Al-Ghunya li Thalibi Jannah karya Syekh Abdul Qadir al-Jilani, ensiklopedia ajaran dan awrad jalur Qodiriyah.',
    facts: [
      { label: 'Penulis', value: 'Syekh Abdul Qadir al-Jilani, 470-561 H / 1077-1166 M, pendiri jalur Qodiriyah' },
      { label: 'Dunia Islam', value: 'Baghdad abad ke-12' },
      { label: 'Bidang', value: 'Akidah, fiqih, tasawuf, dan awrad Qodiriyah' },
      { label: 'Kedudukan dalam TQN', value: 'Kitab rujukan utama TQN Qodiriah Naqsabandiyah 165' },
    ],
    body: [
      {
        h: 'Penulis dan Agungnya Karya',
        p: [
          'Al-Ghunya li Thalibi Jannah, kekayaan bagi pencari surga, adalah karya besar Syekh Abdul Qadir al-Jilani, wali dari Baghdad yang hidup 470 sampai 561 H atau 1077 sampai 1166 M. Beliau adalah pendiri jalur Qodiriyah yang menjadi salah satu akar jalur TQN Qodiriah Naqsabandiyah. Kitab ini dianggap ensiklopedia ajaran beliau karena mencakup akidah, fiqih, akhlak, dan tasawuf sekaligus. Karena keluasan itu, karya ini kerap disebut rujukan utama untuk memahami fikrah Qodiriyah.',
        ],
      },
      {
        h: 'Isi Pokok Kitab',
        p: [
          'Bagian awal membahas akidah dan dalil-dalilnya, kemudian dilanjutkan bab fiqih ibadah yang menghimpun pendapat para imam madzhab. Bagian tasawuf membahas penyakit hati, tata penyembuhannya, maqamat, dan adab. Kitab ini juga memuat penghimpunan awrad dan wirid yang dinisbatkan kepada Syekh Abdul Qadir, yang menjadi acuan berbagai jalur Qodiriyah di dunia. Dengan struktur demikian, pembaca memperoleh peta ajaran yang menyeluruh, bukan potongan-potongan lepas.',
        ],
      },
      {
        h: 'Relevansi bagi Jamaah TQN 165',
        p: [
          'Bagi jamaah TQN Qodiriah Naqsabandiyah 165, kitab ini menjadi rujukan untuk memahami akidah yang dijaga jalur Qodiriyah serta adab murid yang diajarkan mursyid. Wird yang tercantum di dalamnya ditempatkan sebagai bahan kajian, sementara amalan pribadi tetap mengikuti izin mursyid masing-masing. Katalog 165 menaruh kitab ini pada prioritas baca karena kedudukannya dekat dengan silsilah jalur. Pembaca dianjurkan menyandingkannya dengan Futuh al-Ghaib dan Fathul Rabbani.',
        ],
      },
    ],
    related: ['futuh-al-ghaib-jilani', 'fathul-rabbani', 'ihya-ulumuddin'],
  },
  {
    slug: 'anjuman-talibin',
    kind: 'library',
    title: 'Anjuman Talibin',
    category: 'Tasawuf & Akhlak',
    summary: 'Karya khazanah tarekat berjudul Perkumpulan Para Pencari, memuat nasihat dan adab bagi penempuh jalan tasawuf.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti; katalog 165 memuatnya sebagai literatur tarekat' },
      { label: 'Dunia Islam', value: 'Lingkungan literatur tarekat dengan rumpun bahasa Arab-Persia-Melayu' },
      { label: 'Bidang', value: 'Tasawuf dan nasihat tarekat' },
      { label: 'Kedudukan dalam TQN', value: 'Bacaan pelengkap adab dan motivasi jamaah' },
    ],
    body: [
      {
        h: 'Judul dan Kedudukan dalam Katalog',
        p: [
          'Anjuman Talibin dapat dibaca sebagai perkumpulan para pencari. Kata anjuman berakar dari rumpun bahasa Persia dan menyebar ke literatur tarekat di kawasan Asia Selatan hingga Nusantara. Katalog 165 memuat kitab ini sebagai literatur tarekat, dengan penulis yang belum terverifikasi secara pasti dari sumber yang kami akses. Halaman ini sengaja berdiri di atas keterangan yang aman: menjelaskan makna judul dan genre-nya tanpa menetapkan riwayat yang belum kokoh.',
        ],
      },
      {
        h: 'Pembacaan yang Sehat',
        p: [
          'Literatur nasihat tarekat semacam ini umumnya berisi hikmah, adab, dan penguatan kesungguhan bagi pencari jalan. Manfaat terbesar muncul ketika pembaca menyandingkannya dengan kitab-kitab adab yang mapan seperti Ar-Risalah al-Qusyairiyyah. Bagi jamaah TQN 165, bacaan ini dapat menjadi pengingat bahwa tarekat adalah perjalanan bersama dalam majelis, bukan perjalanan sendirian. Hasil verifikasi lanjutan atas penulis dan edisi akan memutakhirkan halaman ini pada masa mendatang.',
          'Judul-judul bergaya Persia pada literatur tarekat menandai jalur penyebaran ajaran melalui Asia Selatan sebelum sampai ke Nusantara. Melacak jejak judul menjadi salah satu metode menelusuri sejarah tarekat. 165 menerapkan metode tersebut pada seluruh koleksi berjudul serupa.',
        ],
      },
    ],
    related: ['adabul-murid-wal-mursyid', 'al-luma', 'at-taaruf'],
  },
  {
    slug: 'ar-risalah-alqusyairiyyah',
    kind: 'library',
    title: 'Ar-Risālah al-Qusyairiyyah',
    titleAr: 'الرسالة القشيرية',
    category: 'Tasawuf & Akhlak',
    summary: 'Traktat tasawuf klasik al-Qusyairi yang merangkum definisi sufi, adab, maqamat, dan ahwal dengan dukungan dalil syariat.',
    facts: [
      { label: 'Penulis', value: 'Abu al-Qasim al-Qusyairi, 376-465 H / 986-1072 M' },
      { label: 'Dunia Islam', value: 'Khurasan abad ke-11; diajarkan luas di dunia Islam' },
      { label: 'Bidang', value: 'Tasawuf syariah (maqamat, ahwal, adab)' },
      { label: 'Kedudukan dalam TQN', value: 'Kurikulum dasar kajian tasawuf terstruktur jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Traktat Tasawuf Klasik',
        p: [
          'Ar-Risālah al-Qusyairiyyah adalah traktat tasawuf paling berpengaruh karya Abu al-Qasim al-Qusyairi, ulama Naisabur yang hidup 376 sampai 465 H atau 986 sampai 1072 M. Kitab ini disusun atas permintaan sekelompok ulama Khurasan untuk menjelaskan madzhab para sufi dengan bahasa yang berpijak pada syariat. Karena ketelitian struktur dan dalilnya, kitab ini diajarkan berabad-abad lamanya dari Timur sampai Nusantara. Ia sering dianggap kurikulum tasawuf tertulis yang paling lengkap dari abad klasik.',
        ],
      },
      {
        h: 'Isi dan Kedudukan',
        p: [
          'Isinya dibagi atas dua kawasan besar: pengantar istilah dan tokoh tasawuf, kemudian bab-bab adab serta maqamat dan ahwal seperti taubah, wara, sabar, dan mahabbah. Setiap bab ditutup dengan kutipan ayat, hadits, dan perkataan para sufi terdahulu. Bagi TQN Qodiriah Naqsabandiyah 165, kitab ini menjadi pegangan memahami tata batin tarekat secara sistematis. Katalog 165 menaruhnya pada kelompok tasawuf dan akhlak bersama Al-Luma dan At-Taaruf.',
          'Banyak syarah dan terjemahan Ar-Risalah al-Qusyairiyyah tersedia, termasuk terjemahan berbahasa Indonesia yang memudahkan majelis. Untuk pembahasan lanjut, syarah klasik membantu menjelaskan istilah-istilah halus. 165 mengarahkan pembaca memulai dari terjemahan sebelum masuk ke teks Arab.',
        ],
      },
    ],
    related: ['al-luma', 'at-taaruf', 'ihya-ulumuddin'],
  },
  {
    slug: 'asnawi-caringin-academic-excerpt',
    kind: 'library',
    title: 'Kutipan Akademik Asnawi Caringin',
    category: 'Kajian Akademik',
    summary: 'Kumpulan kutipan akademik internal 165 tentang KH Asnawi Caringin, ulama TQN dari Caringin, Sukabumi, Jawa Barat.',
    facts: [
      { label: 'Penulis', value: 'Tim riset 165.web.id (kompilasi kutipan)' },
      { label: 'Dunia Islam', value: 'Caringin, Sukabumi, Jawa Barat, jaringan tarekat di Indonesia' },
      { label: 'Bidang', value: 'Biografi ulama tarekat' },
      { label: 'Kedudukan dalam TQN', value: 'Dokumentasi figur ulama TQN Qodiriah Naqsabandiyah' },
    ],
    body: [
      {
        h: 'Figur yang Dikutip',
        p: [
          'KH Asnawi Caringin adalah ulama tarekat dari Caringin, Sukabumi, Jawa Barat, yang tercatat dalam jaringan TQN Qodiriah Naqsabandiyah di wilayah itu. Halaman ini adalah kutipan akademik, yakni penghimpunan potongan riset dan catatan tentang beliau yang disusun tim 165.web.id. Tujuannya adalah menyediakan dokumentasi figur ulama TQN agar silsilah dan jaringan tarekat di Jawa Barat terpetakan dengan tertib. Data biografi yang masih memerlukan silang sumber ditandai demikian adanya.',
        ],
      },
      {
        h: 'Nilai Dokumentasi bagi Platform',
        p: [
          'Dokumentasi ulama daerah sering terabaikan karena arsipnya tersebar di majelis, pesantren, dan ingatan jamaah. Dengan mengumpulkan kutipan akademik secara bertahap, 165 membangun arsip yang dapat diperiksa ulang oleh peneliti. Halaman ini juga membantu jamaah memahami bahwa tarekat hidup melalui rantai guru di berbagai daerah, bukan hanya melalui nama-nama besar. Pemutakhiran akan berlanjut seiring bertambahnya sumber yang dapat diverifikasi.',
          'Kutipan yang dihimpun mencakup catatan tentang lingkup pengajaran, majelis, dan jejak jamaah di wilayah Sukabumi. Setiap potongan disertai keterangan asal sumber bila tersedia. Arsip ini dirancang tumbuh dari tahun ke tahun seiring tambahan testimoni dan dokumen.',
        ],
      },
    ],
    related: ['bruinessen-tarekat-naqsyabandiyah-1992', 'abdul-karim-al-bantani-reference', 'eponym-founders-encyclopedic-corpus'],
  },
  {
    slug: 'asrar-al-adyan',
    kind: 'library',
    title: 'Asrār al-Adyān',
    titleAr: 'أسرار الأديان',
    category: 'Tasawuf & Akhlak',
    summary: 'Karya berjudul Rahasia-Rahasia Agama yang mengulas hikmah dan makna batin ibadah dalam kerangka tasawuf yang syariah.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti; sedang ditelusuri lewat katalog manuskrip' },
      { label: 'Dunia Islam', value: 'Khazanah tasawuf klasik' },
      { label: 'Bidang', value: 'Makna batin ibadah (asrar)' },
      { label: 'Kedudukan dalam TQN', value: 'Pendalaman makna amalan bagi jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Makna Judul dan Genre',
        p: [
          'Asrār al-Adyān berarti rahasia-rahasia agama. Dalam khazanah tasawuf, kata asrar dipakai untuk hikmah dan makna batin di balik syariat, bukan untuk ajaran yang bertentangan dengan nash. Katalog 165 memuat kitab ini sebagai karya tasawuf dengan penulis yang belum terverifikasi secara pasti. Halaman ini membatasi diri pada penjelasan genre dan bahasa judul agar tidak melampaui bukti yang tersedia.',
        ],
      },
      {
        h: 'Kacamata Syariat dalam Membaca Asrar',
        p: [
          'Kitab semacam ini biasanya mengulas makna ibadah, hikmah adab, dan kedalaman makna doa, disusun untuk menumbuhkan khushu. Bacaan yang sehat menempatkan asrar di bawah syariat: makna batin menemani amalan zahir, tidak menggantikannya. Bagi jamaah TQN 165, kerangka ini sejalan dengan tuntunan mursyid yang selalu mengaitkan dzikir dengan kepatuhan syariat. Halaman akan dimutakhirkan begitu verifikasi penulis dan edisi memperoleh hasil.',
          'Kata asrar juga muncul pada banyak judul kitab lain, sehingga perlu kehati-hatian agar tidak tertukar antar karya. Katalog 165 membedakan karya berdasarkan daftar isi dan riwayat edisi. Pembaca yang menemukan judul serupa dianjurkan mencermati deskripsi halaman ini.',
        ],
      },
    ],
    related: ['ihya-ulumuddin', 'ar-risalah-alqusyairiyyah', 'al-kibrit-al-ahmar'],
  },
  {
    slug: 'asyi-atul-mabahij',
    kind: 'library',
    title: "Asyī'atul Mabāhij",
    category: 'Sejarah & Manaqib',
    summary: 'Karya literatur pesantren yang dicatat 165 sebagai bagian khazanah sejarah dan manaqib dalam tradisi tarekat.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti dalam katalog 165' },
      { label: 'Dunia Islam', value: 'Khazanah literatur pesantren dan tarekat' },
      { label: 'Bidang', value: 'Sejarah dan manaqib' },
      { label: 'Kedudukan dalam TQN', value: 'Menambah khazanah bacaan sejarah jamaah' },
    ],
    body: [
      {
        h: 'Kedudukan dalam Katalog',
        p: [
          "Asyī'atul Mabāhij tercatat dalam katalog 165 sebagai bagian khazanah literatur pesantren pada kelompok sejarah dan manaqib. Data penulis, tempat penyusunan, dan tahun karangan belum terverifikasi dari sumber yang kami akses, sehingga halaman ini tidak menetapkan atribusi tertentu. Sikap ini mengikuti kaidah konten 165: lebih baik menahan diri daripada menulis riwayat yang belum berpijak. Penelusuran atas edisi cetak dan salinan masih berjalan.",
        ],
      },
      {
        h: 'Pembacaan Sejarah yang Beradab',
        p: [
          'Literatur sejarah dan manaqib pada pesantren biasanya menyajikan keutamaan para tokoh dan perjalanan ajaran dengan gaya puitis. Pembaca yang matang menyaring isi dengan kaidah: riwayat yang menyentuh akidah diukur dengan syariat, sedangkan gaya bahasa dinikmati sebagai sastra. Bagi jamaah TQN 165, bacaan semacam ini menumbuhkan sayang kepada para guru silsilah tanpa melampaui batas keilmuan. Katalog akan diperbarui ketika hasil verifikasi tersedia.',
          'Judul-judul berakhiran mabahij atau mahasin umumnya digunakan literatur pujian dan keutamaan pada tradisi pesantren. Mengenali pola penamaan semacam ini mempercepat pemetaan genre di rak sejarah. Catatan pola ini dikumpulkan 165 sebagai alat kerja editorial.',
        ],
      },
    ],
    related: ['ad-duwal', 'al-ibar', 'eponym-founders-encyclopedic-corpus'],
  },
  {
    slug: 'at-taaruf',
    kind: 'library',
    title: "At-Ta'rūf",
    titleAr: 'التعرف لمذهب أهل التصوف',
    category: 'Tasawuf & Akhlak',
    summary: 'At-Taaruf karya al-Kalabadzi dari Bukhara, pengenal awal madzhab ahlus suf yang menjelaskan akar syariat ajaran para sufi.',
    facts: [
      { label: 'Penulis', value: 'Abu Bakr Muhammad al-Kalabadzi, wafat 380 H / 990 M di Bukhara' },
      { label: 'Dunia Islam', value: 'Bukhara, abad ke-10' },
      { label: 'Bidang', value: 'Doktrin tasawuf awal' },
      { label: 'Kedudukan dalam TQN', value: 'Rujukan awal memahami posisi tasawuf dalam syariat' },
    ],
    body: [
      {
        h: 'Buku Pengenal Tasawuf Terawal',
        p: [
          'At-Taaruf li Madzhab Ahl at-Tasawwuf adalah karya Abu Bakr Muhammad al-Kalabadzi, sufi Bukhara yang wafat sekitar 380 H atau 990 M. Kitab ini termasuk karya terawal yang mengenalkan madzhab para sufi secara sistematis kepada pembaca umum. Ia disusun pada masa ketika tasawuf kerap dicela sebagian ulama, sehingga Kalabadzi berusaha menunjukkan akar syariat ajaran para sufi. Kitab ini menjadi sumber utama tentang doktrin tasawuf abad ke-10.',
        ],
      },
      {
        h: 'Isi dan Manfaat',
        p: [
          'Isinya merangkum definisi tasawuf menurut para tokoh, penjelasan istilah, bab tentang dukungan ayat dan hadits, serta pembelaan terhadap ucapan-ucapan sufi yang sering disalahpahami. Bagi kajian 165, kitab ini menjadi bukti awal bahwa tasawuf telah memiliki sistem dan rujukan sejak dini. Bagi jamaah TQN, membacanya menumbuhkan kepercayaan bahwa jalur dzikir berdiri di atas tradisi panjang yang teruji. Katalog 165 menempatkannya berdampingan dengan Al-Luma dan Ar-Risalah al-Qusyairiyyah.',
          'Kalabadzi dikenal berhati-hati dalam memilih riwayat, sehingga kitab ini menjadi rujukan tentang apa yang diyakini sufi abad ke-10. Data tersebut penting untuk menilai klaim-klaim yang datang kemudian. Bagi jamaah 165, kitab ini membantu memilah warisan lama dari tafsir modern.',
        ],
      },
    ],
    related: ['al-luma', 'ar-risalah-alqusyairiyyah', 'ihya-ulumuddin'],
  },
  {
    slug: 'bahishti-zewar',
    kind: 'library',
    title: 'Bāhishti Zewar',
    category: 'Fiqih & Ushul',
    summary: 'Bahishti Zewar karya Ashraf Ali Thanwi, ensiklopedia fiqih dan akhlak berbahasa Urdu untuk pendidikan agama di rumah.',
    facts: [
      { label: 'Penulis', value: 'Ashraf Ali Thanwi, 1280-1361 H / 1863-1943 M, ulama jalur Deoband' },
      { label: 'Dunia Islam', value: 'India abad ke-19-20; tersebar di Asia Selatan dan diaspora muslim' },
      { label: 'Bidang', value: 'Fiqih ibadah, adab keluarga, dan akhlak' },
      { label: 'Kedudukan dalam TQN', value: 'Referensi tata hidup muslimah dan keluarga jamaah 165' },
    ],
    body: [
      {
        h: 'Penulis dan Latar Karya',
        p: [
          'Bāhishti Zewar, perhiasan surga, adalah ensiklopedia keagamaan berbahasa Urdu karya Ashraf Ali Thanwi, ulama jalur Deoband yang hidup 1280 sampai 1361 H atau 1863 sampai 1943 M. Kitab ini disusun untuk pendidikan agama di rumah, terutama bagi kaum perempuan dan keluarga. Ia ditulis dalam gaya tanya-jawab yang mudah diikuti pembaca awam. Sejak terbit pada awal abad ke-20, karya ini menyebar di Asia Selatan dan diaspora muslim dunia.',
        ],
      },
      {
        h: 'Isi dan Kedudukan',
        p: [
          'Isinya menyangkup akidah dasar, fiqih ibadah harian, adab keluarga, akhlak, dan pengenalan jalan tasawuf secara sederhana. Bagi kajian 165, kitab ini mencontohkan bagaimana ilmu fiqih-akhlak dikemas untuk pembaca rumahan. Bagi jamaah TQN, referensi semacam ini membantu menertibkan tata hidup keluarga sebagai wadah bagi wirid dan majelis. Katalog menempatkannya pada kelompok fiqih dan usul dengan catatan latar Asia Selatan.',
          'Kitab ini terdiri atas banyak jilid dengan tingkatan pembaca, sehingga keluarga dapat memulai dari jilid dasar. Sistem berjenjang itu menjelaskan ketenarannya di lingkungan pendidikan rumah. 165 mencantumkan catatan jilid pada kolom data ketika verifikasi jilid selesai.',
        ],
      },
    ],
    related: ['ihya-ulumuddin', 'burhan-al-yaqin', 'muntakhab-al-ahadis'],
  },
  {
    slug: 'bruinessen-tarekat-naqsyabandiyah-1992',
    kind: 'library',
    title: 'Bruinessen: Tarekat Naqsyabandiyah di Indonesia (1992)',
    category: 'Kajian Akademik',
    summary: 'Kajian Martin van Bruinessen tahun 1992 tentang sejarah, geografi, dan sosiologi Tarekat Naqsyabandiyah di Indonesia.',
    facts: [
      { label: 'Penulis', value: 'Martin van Bruinessen, antropolog dan islamolog Belanda' },
      { label: 'Dunia Islam', value: 'Indonesia; kajian terbit tahun 1992 dalam bahasa Indonesia' },
      { label: 'Bidang', value: 'Studi tarekat (sejarah, geografi, sosiologi)' },
      { label: 'Kedudukan dalam TQN', value: 'Peta akademik perjalanan Naqsyabandiyah di Nusantara bagi 165' },
    ],
    body: [
      {
        h: 'Kajian dan Penulisnya',
        p: [
          'Karya Martin van Bruinessen berjudul Tarekat Naqsyabandiyah di Indonesia adalah studi yang terbit tahun 1992, hasil riset antropolog Belanda atas perkembangan Naqsyabandiyah di Nusantara. Bruinessen menelusuri jalur-jalur tarekat ini dari pusat-pusatnya di dunia Islam sampai pesantren-pesantren Jawa dan wilayah lain. Kajian ini memetakan sejarah masuknya tarekat, tokoh-tokoh utamanya, dan gejala sosial yang menyertainya. Terbitnya dalam bahasa Indonesia membuat kajian itu mudah diakses pembaca Nusantara.',
        ],
      },
      {
        h: 'Manfaat bagi Jamaah dan Peneliti',
        p: [
          'Bagi peneliti, karya ini menjadi titik tolak banyak studi tarekat Indonesia karena petanya yang terperinci. Bagi jamaah TQN Qodiriah Naqsabandiyah 165, kajian ini membantu memahami kedudukan jalur Qodiriah Naqsabandiyah dalam peta tarekat nasional. 165 menempatkannya pada kelompok kajian akademik dan menggunakannya sebagai rujukan pembanding dalam berbagai halaman sejarah. Pembaca diingatkan bahwa kesimpulan akademik perlu disandingkan dengan riwayat internal tarekat yang dijaga para guru.',
          'Kajian ini juga membahas interaksi tarekat dengan pesantren dan politik lokal, menjadikannya bacaan lintas disiplin. Bagi pembaca yang meneliti wilayah tertentu, peta halaman dalam karya ini mempermudah pelacakan. 165 menyimpan data halaman pada arsip riset internal.',
        ],
      },
    ],
    related: ['aceh-tarekat-ms-corpus-leiden', 'asnawi-caringin-academic-excerpt', 'eponym-founders-encyclopedic-corpus'],
  },
  {
    slug: 'burhan-al-yaqin',
    kind: 'library',
    title: 'Burhān al-Yaqīn',
    titleAr: 'برهان اليقين',
    category: 'Fiqih & Ushul',
    summary: 'Kitab fiqih mazhab Syafii berjudul Burhanul Yaqin yang dipelajari di pesantren sebagai jembatan matan menuju syarah besar.',
    facts: [
      { label: 'Penulis', value: 'Penulis belum terverifikasi secara pasti dalam katalog 165' },
      { label: 'Dunia Islam', value: 'Tradisi fiqih Syafii pesantren Nusantara' },
      { label: 'Bidang', value: 'Fiqih mazhab Syafii' },
      { label: 'Kedudukan dalam TQN', value: 'Bekal fiqih ibadah harian jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Kitab Fiqih dalam Tradisi Pesantren',
        p: [
          'Burhān al-Yaqīn, bukti kepastian, tercatat dalam katalog 165 sebagai kitab fiqih mazhab Syafii yang dipelajari di pesantren Nusantara. Atribusi penulis untuk edisi yang dirujuk belum terverifikasi secara pasti, sehingga halaman ini tidak menetapkan nama penulis. Kitab matan semacam ini biasanya menyangkup bab-bab ibadah dengan redaksi ringkas untuk dihafal. Ketelitian dalam membedakan judul-judul serupa penting karena khazanah fiqih memuat banyak kitab dengan nama mirip.',
        ],
      },
      {
        h: 'Peran Matan Fiqih bagi Jamaah',
        p: [
          'Matan fiqih menjadi kerangka hafalan hukum ibadah sebelum santri masuk ke syarah yang panjang. Bagi jamaah TQN 165, kepastian hukum thaharah dan shalat menopang keberlanjutan dzikir, karena amalan tarekat dibangun di atas ibadah fardhu yang sah. Halaman ini juga mengajak pembaca menempatkan kitab fiqih pada posisinya: pegangan amalan, bukan sekadar bahan diskusi. Perincian edisi dan penulis akan diperbarui setelah verifikasi selesai.',
          'Judul Burhanul Yaqin juga dipakai karya-karya di bidang lain, sehingga pengecekan bidang kitab menjadi langkah pertama verifikasi. Pengecekan semacam ini rutin dikerjakan sebelum halaman dirilis. Halaman ini akan menyertakan daftar edisi bila temuan sudah mencukupi.',
        ],
      },
    ],
    related: ['al-fathul-mubin-fiqih', 'al-muhalla', 'bahishti-zewar'],
  },
  {
    slug: 'dalail-al-khairat-jazuli',
    kind: 'library',
    title: "Dalā'il al-Khairāt (Jazuli)",
    titleAr: 'دلائل الخيرات',
    category: 'Ampalan & Wirid',
    summary: 'Dalailul Khairat karya Syekh al-Jazuli dari Maroko, kumpulan shalawat paling terkenal dalam sejarah dunia Islam.',
    facts: [
      { label: 'Penulis', value: 'Syekh Muhammad bin Sulaiman al-Jazuli, wafat 870 H / 1465 M' },
      { label: 'Dunia Islam', value: 'Maroko abad ke-15; terkenal dari Maghribi hingga Nusantara' },
      { label: 'Bidang', value: 'Shalawat dan wirid kepada Nabi' },
      { label: 'Kedudukan dalam TQN', value: 'Salah satu wirid shalawat akrab dalam majelis TQN 165' },
    ],
    body: [
      {
        h: 'Penulis dan Ketenaranya',
        p: [
          "Dalā'il al-Khairāt adalah kumpulan shalawat dan doa kepada Nabi yang disusun Syekh Muhammad bin Sulaiman al-Jazuli, wali dari Maroko yang wafat 870 H atau 1465 M. Kitab ini termasuk karya paling terkenal dalam genre shalawat di seluruh dunia Islam. Riwayat populer menyebut penyusunannya berangkat dari pengalaman beliau tentang kekuatan shalawat dalam sebuah kisah di padang gurun. Sejak abad ke-15, kitab ini dibaca dari Maghribi sampai Nusantara.",
        ],
      },
      {
        h: 'Isi dan Kedudukan dalam Majelis',
        p: [
          'Isinya memuat shalawat berjenjang, doa, serta wirid pekanan yang dibagi tujuh bagian untuk dibaca tiap hari. Banyak pesantren dan majelis tarekat menjadikannya amalan mingguan dengan tata tertentu. Bagi jamaah TQN 165, kitab ini adalah salah satu sumber shalawat yang akrab pada majelis dzikir. Katalog 165 menempatkannya pada kelompok amalan dan wirid bersama Al-Hisnul Hasin dan Al-Wirdul Latif.',
          'Al-Jazuli terkait dengan jalur Syadziliyah dan dikenal sebagai wali besar di Maghribi. Latar belakang ini membantu pembaca memahami mengapa kitabnya kental dengan cinta kepada Nabi. Rak wirid 165 menandai kitab ini sebagai bacaan shalawat pekanan.',
        ],
      },
    ],
    related: ['dalailul-khairat', 'al-hisnul-hasin', 'al-wirdul-latif'],
  },
  {
    slug: 'dalailul-khairat',
    kind: 'library',
    title: 'Dalailul Khairāt',
    titleAr: 'دلائل الخيرات',
    category: 'Ampalan & Wirid',
    summary: 'Edisi umum Dalailul Khairat yang beredar luas di Indonesia: tata shalawat, doa, dan wirid pekanan kepada Rasulullah.',
    facts: [
      { label: 'Penulis', value: 'Karya Syekh al-Jazuli; edisi umum dengan tata cetak beragam' },
      { label: 'Dunia Islam', value: 'Beredar global, masuk Nusantara sejak berabad-abad lalu' },
      { label: 'Bidang', value: 'Shalawat dan wirid harian-pekanan' },
      { label: 'Kedudukan dalam TQN', value: 'Dibaca dalam majelis dzikir dan shalawat jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Edisi Umum yang Beredar',
        p: [
          'Halaman ini memaparkan Dalailul Khairat dalam edisi umum yang beredar luas di Indonesia. Karya aslinya disusun Syekh al-Jazuli pada abad ke-15, lalu berkembang menjadi banyak versi cetak dengan tata huruf, bahasa penjelas, dan pembagian hizb yang beragam. Edisi-edisi tersebut memuat inti yang sama, yakni rangkaian shalawat dan doa kepada Nabi. Katalog 165 memisahkan halaman karya dan halaman edisi agar pembaca menemukan keterangan sesuai kebutuhan.',
        ],
      },
      {
        h: 'Tata Pembacaan dan Adabnya',
        p: [
          'Tradisi pembacaan yang mapan membagi kitab menjadi tujuh bagian untuk dibaca merata sepanjang pekan. Adab membacanya menyangkup wudhu, menghadap kiblat, serta menjaga kesungguhan hati ketika bershalawat. Bagi jamaah TQN 165, edisi umum ini praktis dipakai dalam majelis karena tersedia di banyak toko dan pesantren. Pembaca dianjurkan mengikuti tata yang diatur majelis setempat agar pembacaan berjalan tertib dan berkesinambungan.',
          'Cetakan edisi umum bervariasi antara edisi berharakat penuh dan edisi ringkas. Pembaca yang baru belajar dianjurkan memilih edisi berharakat agar bacaan benar. Catatan teknis semacam ini disediakan 165 untuk setiap edisi yang masuk katalog.',
        ],
      },
    ],
    related: ['dalail-al-khairat-jazuli', 'al-hisnul-hasin', 'adz-dzakirah'],
  },
  {
    slug: 'durratul-faraid',
    kind: 'library',
    title: "Durratul Farā'id",
    titleAr: 'الدرّة الفرائد',
    category: 'Tasawuf & Akhlak',
    summary: 'Karya khazanah tarekat berjudul Permata Harta Warisan; katalog 165 memuatnya dalam deret literatur nasihat dan adab.',
    facts: [
      { label: 'Penulis', value: 'Belum terverifikasi secara pasti; verifikasi manuskrip masih berjalan' },
      { label: 'Dunia Islam', value: 'Khazanah literatur tarekat pesantren' },
      { label: 'Bidang', value: 'Nasihat, adab, dan pendalaman tarekat' },
      { label: 'Kedudukan dalam TQN', value: 'Bacaan pendalaman adab jamaah TQN 165' },
    ],
    body: [
      {
        h: 'Judul dan Status Data',
        p: [
          "Durratul Farā'id dapat dimaknai permata harta warisan, gabungan kata yang lazim pada judul-judul kitab nasihat dan adab. Katalog 165 memuatnya dalam khazanah literatur tarekat, dengan penulis dan tahun karangan yang belum terverifikasi secara pasti. Halaman ini menahan diri dari penisbatan riwayat yang belum kokoh dan menyajikan kedudukan genre-nya terlebih dahulu. Verifikasi lanjutan atas salinan dan edisi cetak masih dikerjakan tim editorial.",
        ],
      },
      {
        h: 'Nilai Bacaan Nasihat',
        p: [
          'Kitab berjudul permata semacam ini umumnya menghimpun nasihat keilmuan yang diwariskan guru kepada murid, sebagaimana harta yang diwariskan. Pembacaannya paling bermanfaat bila disandingkan dengan kitab adab murid-mursyid yang mapan. Bagi jamaah TQN 165, bacaan nasihat membantu menjaga motivasi dalam perjalanan dzikir yang panjang dan menuntut kesabaran. Halaman ini akan diperbarui ketika hasil penelusuran bibliografis telah tersedia.',
          'Judul dengan kata durrah banyak dipakai pada literatur tarekat dari masa lalu, sehingga pemetaan edisi membutuhkan waktu. Tim editorial menandai setiap kemajuan penelusuran agar tidak ada kerja ganda. Pembaca dapat memantau kemajuan tersebut pada katalog 165.',
        ],
      },
    ],
    related: ['adabul-murid-wal-mursyid', 'adabul-muluk', 'al-kibrit-al-ahmar'],
  },
  {
    slug: 'eponym-founders-encyclopedic-corpus',
    kind: 'library',
    title: 'Korpus Ensiklopedis Eponym Founders',
    category: 'Dokumen Institusi',
    summary: 'Korpus ensiklopedis internal 165 tentang para pendiri tarekat: biografi, silsilah, dan peta penyebaran jalur-jalur tarekat.',
    facts: [
      { label: 'Penulis', value: 'Tim editorial 165.web.id' },
      { label: 'Dunia Islam', value: 'Proyek referensi internal platform 165' },
      { label: 'Bidang', value: 'Ensiklopedi pendiri tarekat (eponym founders)' },
      { label: 'Kedudukan dalam TQN', value: 'Memetakan silsilah TQN Qodiriah Naqsabandiyah dari pendiri hingga mursyid' },
    ],
    body: [
      {
        h: 'Definisi Proyek',
        p: [
          'Korpus Ensiklopedis Eponym Founders adalah proyek referensi internal 165.web.id tentang para pendiri tarekat yang namanya menjadi nama jalur. Abdul Qadir al-Jilani berakar menjadi Qodiriyah, Bahauddin Naqsyaband berakar menjadi Naqsabandiyah, dan pola serupa berlaku pada banyak jalur lain. Korpus ini menyatukan biografi, silsilah, dan peta penyebaran para pendiri dalam satu kerangka kerja yang konsisten. Ia disusun tim editorial 165 sebagai dokumen kerja yang terus bertumbuh.',
        ],
      },
      {
        h: 'Cara Kerja dan Kedudukannya',
        p: [
          'Setiap lembar korpus disusun dari sumber mapan dan selalu menyertakan status verifikasi, sehingga pembaca tahu mana yang kokoh dan mana yang masih ditelusuri. Korpus ini menjadi tulang punggung banyak halaman perpustakaan 165, termasuk halaman kitab-kitab pendiri jalur. Bagi jamaah TQN Qodiriah Naqsabandiyah, memahami eponym pendiri berarti memahami akar nama tarekat yang mereka baiat. Halaman ini menggambarkan sisi teknis platform, bukan kitab yang dibaca ritual.',
          'Korpus ini memakai format lembar yang mudah diperluas, sehingga jalur-jalur baru dapat ditambahkan tanpa mengubah kerangka. Setiap lembar terhubung ke halaman kitab dan halaman atlas yang relevan. Arsitektur semacam ini menjaga konsistensi data di seluruh platform 165.',
        ],
      },
    ],
    related: ['alghunya-lithalibi', '165-master-blueprint', 'bruinessen-tarekat-naqsyabandiyah-1992'],
  },
  {
    slug: 'fathal-arifin',
    kind: 'library',
    title: "Fath al-'Ārifīn",
    titleAr: 'فتح العارفين',
    category: 'Ampalan & Wirid',
    summary: 'Kumpulan wirid dan awrad berjudul Fathal Arifin yang dikenal dalam kalangan jamaah tarekat sebagai pegangan dzikir harian.',
    facts: [
      { label: 'Penulis', value: 'Kompilasi awrad tarekat; penyusun belum terverifikasi secara pasti' },
      { label: 'Dunia Islam', value: 'Lingkungan tarekat Nusantara' },
      { label: 'Bidang', value: 'Wirid, awrad, dan dzikir' },
      { label: 'Kedudukan dalam TQN', value: 'Pegangan wirid harian jamaah TQN Qodiriah Naqsabandiyah' },
    ],
    body: [
      {
        h: 'Kumpulan Wird dalam Lingkungan Tarekat',
        p: [
          "Fath al-'Ārifīn, kemenangan bagi para arif, dikenal dalam kalangan jamaah tarekat sebagai kumpulan wirid dan awrad untuk pegangan dzikir harian. Katalog 165 memuatnya pada kelompok amalan dan wirid dengan penyusun yang belum terverifikasi secara pasti. Kitab semacam ini lazimnya menghimpun kalimat tayyibah, istighfar, shalawat, dan doa dengan urutan tertentu. Ketenarannya tumbuh melalui pengamalan majelis, bukan melalui riwayat bibliografi yang luas.",
        ],
      },
      {
        h: 'Kaidah Mengamalkan Awarid',
        p: [
          'Dalam tradisi tarekat, awrad utama diberikan oleh mursyid melalui baiat dengan urutan dan jumlah tertentu, sehingga kitab wirid berfungsi sebagai pendamping, bukan pengganti irsyad. Bagi jamaah TQN Qodiriah Naqsabandiyah 165, prinsip ini menjaga amalan tetap terarah dan tidak tertukar antarjalur. Pembaca baru dianjurkan memahami makna setiap bacaan sebelum memperbanyak jumlahnya. Katalog 165 akan memutakhirkan data bibliografis ketika verifikasi edisi selesai.',
          'Kitab wirid semacam ini biasanya berukuran saku agar mudah dibawa ke majelis dan safar. Ukuran kecil itu mencerminkan fungsinya sebagai pegangan harian, bukan kitab kajian. 165 mencantumkan catatan penggunaan pada halaman-halaman wirid agar amalan tetap tepat tempat.',
        ],
      },
    ],
    related: ['adh-dhurrun-nafis', 'adz-dzakirah', 'al-wirdul-latif'],
  },
// APPEND-ABOVE
]
