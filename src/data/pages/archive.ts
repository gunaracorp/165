import type { PageEntry } from './types'

// 165 — Koleksi arsip digital (22 halaman)
// Konten bahasa Indonesia, jujur: koleksi didefinisikan sebagai unit arsip
// platform 165, tanpa mengarang jumlah item atau detail dokumen fiktif.
export const ENTRIES: PageEntry[] = [
  {
    slug: 'koleksi-arkeologi-tekke',
    kind: 'archive',
    title: 'Koleksi Arkeologi Tekke',
    category: 'Foto & Visual',
    summary: 'Unit kurasi dokumentasi arkeologis jejak bangunan dan benda tekke: pencatatan visual, inventarisasi, serta perlindungan konteks situs.',
    facts: [
      { label: 'Jenis koleksi', value: 'Dokumentasi visual sisa bangunan dan benda tekke' },
      { label: 'Unit kurasi', value: 'Unit arsip digital arkeologi tekke' },
      { label: 'Metode digitalisasi', value: 'Fotografi dokumentasi dengan pencatatan konteks lokasi' },
      { label: 'Kebijakan akses', value: 'Publikasi bertahap sesuai izin pemilik situs' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Istilah tekke dikenal sebagai sebutan bagi kompleks pembinaan dan perjalanan ruhani tarekat, dan jejak fisiknya mudah rapuh terhadap usia serta perubahan tata ruang. Koleksi ini dikurasi untuk mendokumentasikan sisa bangunan, ornamen, prasasti kecil, dan benda peninggalan yang menyaksikan kehidupan majelis pada masa lampau. Tujuan utamanya adalah menjaga konteks situs agar tidak hilang sebelum sempat dicatat. Dokumentasi ini juga menjadi bahan rujukan bagi kajian arsitektur, epigrafi, dan sejarah sosial tarekat.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari foto dokumentasi bangunan dan benda, salinan ukiran atau tulisan pada nisan, serta catatan lokasi yang menjelaskan konteks penemuan. Setiap item diberi nomor inventaris, keterangan asal-usul, dan nama pemberi izin. Digitalisasi dilakukan lewat fotografi bertahap dengan pencahayaan rapi, disertai pencatatan arah hadap dan perkiraan ukuran. Metadata yang lengkap disimpan agar objek tetap dapat dibaca lintas generasi meski kondisi fisiknya berubah.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi ini bersifat berkembang dan ditambahkan seiring perizinan dari pemilik situs serta pengurus majelis. Item ditampilkan sesuai izin akses, sehingga sebagian dokumentasi hanya tersedia bagi kurasi internal terlebih dahulu. Platform 165 tidak memuat jumlah item karangan; setiap penambahan diumumkan apa adanya. Publik yang memiliki dokumentasi serupa dipersilakan menghubungi tim kurasi melalui saluran resmi situs.',
        ],
      },
    ],
    related: ['koleksi-foto-surialaya', 'koleksi-manuskrip-wirid', 'koleksi-surat-menyurat'],
  },

  {
    slug: 'koleksi-audio-wiridan',
    kind: 'archive',
    title: 'Koleksi Audio Wiridan',
    category: 'Audio & Video',
    summary: 'Unit kurasi rekaman audio wiridan: pelestarian tembrek dan lafal amalan, digitalisasi dengan metadata provenan, akses bertahap sesuai izin.',
    facts: [
      { label: 'Jenis koleksi', value: 'Rekaman audio wiridan dan pembinaan majelis' },
      { label: 'Unit kurasi', value: 'Unit arsip digital audio wiridan' },
      { label: 'Metode digitalisasi', value: 'Penyalinan ke format audio digital dengan metadata provenan' },
      { label: 'Kebijakan akses', value: 'Publikasi sesuai izin pemberi rekaman' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Amalan wiridan hidup lewat suara: tembrek, jeda, dan lafal yang diwariskan secara lisan antar pembimbing. Koleksi audio ini dikurasi untuk memelihara dimensi bunyi amalan agar pembimbingan generasi berikutnya tidak bergantung pada teks semata. Arsip suara juga membantu jamaah yang berjauhan mempelajari irama bacaan sesuai petunjuk majelis. Dengan pelestarian digital, tradisi yang semula terbatas di tempat majelis dapat terawatkan tanpa kehilangan rasa aslinya.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari rekaman pengajian wiridan, bacaan doa, dan sesi pembinaan yang direkam dengan izin majelis. Rekaman disalurkan ke format audio digital dengan penjagaan kualitas bunyi, lalu diberi metadata provenan berisi keterangan peristiwa, lokasi, dan pihak pemberi rekaman. Penyuntingan dilakukan seminimal mungkin supaya nada asli tetap utuh. Setiap berkas ditandai status akses sebelum dipublikasikan.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses yang diberikan pemberi rekaman. Sebagian rekaman mungkin hanya tampil sebagai katalog tanpa berkas penuh bila pemilik belum meluluskan publikasi. Platform 165 tidak membuat daftar rekaman fiktif; slot kosong dibiarkan jujur sambil menunggu deposit. Jamaah yang menyimpan rekaman lama dipersilakan menawarkannya untuk didigitalkan bersama tim kurasi.',
        ],
      },
    ],
    related: ['koleksi-musik-wiridan', 'koleksi-video-haul', 'koleksi-doa-harian', 'koleksi-manuskrip-wirid'],
  },

  {
    slug: 'koleksi-digital-1970',
    kind: 'archive',
    title: 'Koleksi Digitalisasi 1970-an',
    category: 'Dokumen Historis',
    summary: 'Unit kurasi digitalisasi dokumen era 1970-an: pemindaian bertahap, metadata provenan, dan pelestarian catatan administratif dekade tersebut.',
    facts: [
      { label: 'Jenis koleksi', value: 'Dokumen kertas era 1970-an' },
      { label: 'Unit kurasi', value: 'Unit digitalisasi dekade 1970-an' },
      { label: 'Metode digitalisasi', value: 'Pemindaian bertahap dengan metadata provenan' },
      { label: 'Kebijakan akses', value: 'Akses bertahap sesuai izin dan privasi' },
    ],
    body: [
      {
        h: 'Latar Dekade 1970-an',
        p: [
          'Dekade 1970-an merupakan periode penting bagi kehidupan organisasi tarekat di Indonesia modern, ketika banyak pesantren menata ulang administrasi, korespondensi, dan publikasinya. Dokumen dari masa ini menjadi sumber primer untuk membaca perubahan kelembagaan dan kehidupan jamaah. Koleksi ini dikurasi untuk memindahkan sisa kertas era tersebut ke media digital sebelum kerusakan makin meluas. Fokusnya adalah pelestarian, bukan penilaian atas isi dokumen.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari surat, catatan administrasi, undangan acara, dan terbitan cetak sederhana bertanggal sekitar 1970-an yang tersimpan di lingkungan majelis atau keluarga jamaah. Pemindaian dilakukan bertahap dengan penjagaan kondisi kertas, lalu setiap berkas diberi metadata provenan: asal simpanan, kisaran tahun, dan pemberi izin. Dekade dipakai sebagai kerangka pengelompokan, bukan klaim kepastian tanggal pada tiap dokumen. Ketidakpastian dicantumkan apa adanya di kolom catatan.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses serta kebutuhan perlindungan data pribadi. Dokumen yang menyebut nama pribadi dapat ditunda publikasinya hingga izin diperoleh. Platform 165 tidak mengarang daftar dokumen spesifik untuk dekade ini dan tidak mencantumkan jumlah item yang belum terverifikasi. Deposit baru dari simpanan keluarga jamaah sangat diharapkan untuk memperkaya unit ini.',
        ],
      },
    ],
    related: ['koleksi-surat-keputusan', 'koleksi-surat-menyurat', 'koleksi-kliping-pers', 'koleksi-surialaya-keuangan'],
  },

  {
    slug: 'koleksi-doa-harian',
    kind: 'archive',
    title: 'Koleksi Doa Harian',
    category: 'Manuskrip & Naskah',
    summary: 'Unit kurasi teks doa harian jamaah: transkripsi Arab, Latin, dan arti, penelusuran sumber, serta publikasi sesuai izin akses.',
    facts: [
      { label: 'Jenis koleksi', value: 'Teks doa harian Arab, Latin, dan arti' },
      { label: 'Unit kurasi', value: 'Unit kurasi teks amalan harian' },
      { label: 'Metode digitalisasi', value: 'Transkripsi diperiksa ulang dan pemindaian halaman asli' },
      { label: 'Kebijakan akses', value: 'Tayang sesuai izin pemberi teks' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Doa harian adalah nafas kecil yang mengiringi jamaah dari pagi hingga sore, dan teksnya tersebar di banyak catatan pribadi serta cetakan sederhana. Koleksi ini dikurasi agar amalan yang lazim dipraktikkan memiliki rujukan teks yang rapi dan mudah dibaca. Tujuannya bukan menggantikan pembimbingan mursyid, melainkan menyediakan bacaan pendamping yang terdokumentasi baik. Teks yang tertib juga mengurangi perbedaan lafal yang muncul dari penurunan lisan.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini menghimpun teks doa berbahasa Arab beserta tulisan Latin dan arti, baik dari naskah tulisan tangan maupun cetakan yang diizinkan pemiliknya. Transkripsi diperiksa ulang sebelum tayang, dan sumber penurunan dicatat sebagai bagian metadata. Pemindaian halaman asli dilakukan bila izin tersedia. Setiap entri diberi keterangan jenis amalan agar pembaca memahami konteks pemakaiannya.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses pemberi teks. Teks yang belum lolos pemeriksaan diberi tanda proses, bukan dipublikasikan terburu-buru. Platform 165 tidak mencantumkan jumlah doa yang belum terkumpul sebagai angka tertentu. Jamaah dapat menawarkan salinan teks keluarga untuk diperiksa dan didigitalkan melalui saluran resmi platform.',
        ],
      },
    ],
    related: ['koleksi-manuskrip-wirid', 'koleksi-dokumen-khataman', 'koleksi-audio-wiridan'],
  },

  {
    slug: 'koleksi-dokumen-khataman',
    kind: 'archive',
    title: 'Koleksi Dokumen Khataman',
    category: 'Manuskrip & Naskah',
    summary: 'Unit kurasi dokumen seputar khataman: teks amalan, catatan pengurusan, dan naskah terkait, didigitalisasi dengan metadata provenan.',
    facts: [
      { label: 'Jenis koleksi', value: 'Teks khataman dan catatan pengurusan terkait' },
      { label: 'Unit kurasi', value: 'Unit kurasi dokumen khataman' },
      { label: 'Metode digitalisasi', value: 'Pemindaian naskah dan transkripsi terperiksa' },
      { label: 'Kebijakan akses', value: 'Akses bertahap mengikuti kebijakan majelis' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Khataman merupakan rangkaian amalan wirid yang menjadi titik tolak pembinaan jamaah, sehingga dokumen seputarnya menyimpan jejak cara bimbingan dijalankan. Koleksi ini dikurasi untuk menjaga teks amalan, catatan pengurusan, dan naskah terkait agar tradisi dapat dibaca ulang dengan benar. Perhatian utama diberikan pada keutuhan teks dan kejelasan urutan bacaan. Dengan arsip yang tertib, perbedaan versi antarmajelis dapat ditelusuri secara tenang.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari teks khataman dalam bentuk naskah tulisan tangan, cetakan, serta catatan pengurusan yang berkaitan dengan pembinaan jamaah. Digitalisasi dilakukan lewat pemindaian halaman asli dan transkripsi yang diperiksa ulang, disertai metadata provenan berisi asal-usul dokumen. Bila terdapat perbedaan urutan atau tambahan bacaan antar salinan, perbedaan itu dicatat, bukan diratakan. Izin pemilik dokumen selalu menjadi syarat sebelum tayang.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses serta kebijakan majelis. Dokumen yang menyangkut pembimbingan pribadi dapat diberi akses terbatas terlebih dahulu. Platform 165 tidak mengarang nama dokumen atau tanggal arsip individual; setiap penambahan hanya muncul setelah terverifikasi. Rujukan teks wiridian yang telah terdigitalisasi penuh dapat dibaca pada ruang Bacaan platform ini.',
        ],
      },
    ],
    related: ['koleksi-manuskrip-wirid', 'koleksi-doa-harian', 'koleksi-wasiat-mursyid'],
  },

  {
    slug: 'koleksi-foto-surialaya',
    kind: 'archive',
    title: 'Koleksi Foto Suryalaya',
    category: 'Foto & Visual',
    summary: 'Unit kurasi dokumentasi foto lingkungan dan kegiatan Suryalaya: pemindaian arsip visual, metadata provenan, akses bertahap menjaga privasi.',
    facts: [
      { label: 'Jenis koleksi', value: 'Foto bangunan, kegiatan, dan suasana Suryalaya' },
      { label: 'Unit kurasi', value: 'Unit arsip visual Suryalaya' },
      { label: 'Metode digitalisasi', value: 'Pemindaian arsip lama dan kurasi foto baru' },
      { label: 'Kebijakan akses', value: 'Publikasi bertahap menjaga privasi jamaah' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Pondok Pesantren Suryalaya di Pagerageung merupakan pusat perjalanan TQN yang menyimpan lanskap bangunan, ruang majelis, dan kegiatan harian yang terus berubah. Koleksi foto ini dikurasi untuk merekam wajah lingkungan tersebut lintas waktu. Tujuannya adalah menyediakan sumber visual yang jujur bagi jamaah, peneliti, dan pengurus yang membutuhkan rujukan ruang. Foto juga menjadi pengingat bagi mereka yang tidak dapat hadir langsung.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari foto bangunan, suasana haul, kegiatan harian, dan potret kelompok majelis yang diizinkan pemiliknya. Arsip lama dipindai dengan penjagaan kondisi cetakan, sementara foto baru diproses tanpa penyesuaian yang mengubah fakta visual. Setiap berkas diberi metadata provenan: pemberi foto, keterangan peristiwa bila diketahui, dan status izin. Keterangan yang tidak pasti dinyatakan demikian, tidak ditebak-tebak.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses. Foto yang memuat wajah pribadi dapat ditunda publikasinya demi menjaga privasi hingga persetujuan diperoleh. Platform 165 tidak mengarang jumlah foto atau tanggal pengambilan yang belum terverifikasi. Deposit foto dari keluarga jamaah dan arsip pribadi sangat diharapkan untuk memperkaya unit ini.',
        ],
      },
    ],
    related: ['koleksi-arkeologi-tekke', 'koleksi-video-haul', 'koleksi-interview-oral'],
  },

  {
    slug: 'koleksi-interview-oral',
    kind: 'archive',
    title: 'Koleksi Wawancara Lisan',
    category: 'Audio & Video',
    summary: 'Unit kurasi sejarah lisan: wawancara tokoh dan jamaah tua tarekat, direkam dan ditranskripsi dengan persetujuan narasumber.',
    facts: [
      { label: 'Jenis koleksi', value: 'Rekaman dan transkripsi wawancara sejarah lisan' },
      { label: 'Unit kurasi', value: 'Unit sejarah lisan platform 165' },
      { label: 'Metode digitalisasi', value: 'Perekaman berpersetujuan dan transkripsi ditinjau narasumber' },
      { label: 'Kebijakan akses', value: 'Akses disepakati bersama narasumber' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Banyak pengalaman tarekat hanya hidup dalam ingatan tokoh dan jamaah tua, mulai dari cara bimbingan dijalankan hingga suasana majelis pada masa lampau. Koleksi wawancara lisan dikurasi untuk menangkap memori itu sebelum terlewati waktu. Sejarah lisan melengkapi dokumen tertulis karena menyingkap hal yang tidak pernah dicatat. Hasilnya menjadi sumber bagi kajian sejarah sosial tarekat di Nusantara.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari rekaman wawancara dengan narasumber yang bersedia berbicara tentang kehidupan tarekat secara jujur. Perekaman dilakukan dengan persetujuan awal, disertai catatan konteks pertemuan. Rekaman ditranskripsikan dan narasumber diberi kesempatan meninjau catatan sebelum arsip ditetapkan. Metadata provenan mencatat nama narasumber sesuai izin, lokasi, dan kisaran waktu wawancara.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses yang disepakati narasumber. Sebagian rekaman hanya tersedia sebagai ringkasan bila narasumber menahan suara penuh. Rangkuman ditulis dengan gaya yang setia pada tutur narasumber tanpa tambahan narasi. Platform 165 tidak mengarang daftar narasumber atau kutipan fiktif; setiap arsip lahir dari pertemuan nyata. Ajakan wawancara terbuka bagi keluarga jamaah yang menyimpan memori penting.',
        ],
      },
    ],
    related: ['koleksi-audio-wiridan', 'koleksi-video-haul', 'koleksi-foto-surialaya'],
  },

  {
    slug: 'koleksi-khalifah-mancanegara',
    kind: 'archive',
    title: 'Koleksi Khalifah Mancanegara',
    category: 'Dokumen Administrasi',
    summary: 'Unit kurasi jejak administrasi khalifah tarekat di mancanegara: korespondensi dan catatan penunjukan, diakses bertahap.',
    facts: [
      { label: 'Jenis koleksi', value: 'Surat penunjukan dan korespondensi khalifah luar negeri' },
      { label: 'Unit kurasi', value: 'Unit kurasi jaringan khalifah mancanegara' },
      { label: 'Metode digitalisasi', value: 'Pemindaian bertahap dengan metadata provenan' },
      { label: 'Kebijakan akses', value: 'Akses terkendali atas data pribadi' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Khalifah tarekat yang bertugas di mancanegara menjembatani bimbingan antara pusat pesantren dan jamaah di luar negeri. Jejak administrasi mereka, seperti surat penunjukan, korespondensi, dan catatan kunjungan, menyimpan sejarah penyebaran tarekat lintas batas. Koleksi ini dikurasi untuk memelihara jejak tersebut sebagai sumber sejarah jaringan tarekat. Arsipnya juga membantu memetakan kapan dan bagaimana majelis tumbuh di berbagai negara.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari surat penunjukan, surat-menyurat resmi, serta catatan administratif yang berkaitan dengan penugasan khalifah di luar negeri. Pemindaian dilakukan bertahap dan setiap berkas diberi metadata provenan: asal simpanan, pihak terkait, dan pemberi izin. Nama pribadi dapat disamarkan bila kebijakan akses menuntut demikian. Perbedaan bahasa dalam korespondensi dicatat sebagai bagian keterangan arsip.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses serta sensitivitas data pribadi. Dokumen yang menyebut penugasan pribadi dapat ditunda hingga izin keluarga diperoleh. Rujukan silang ke unit surat-menyurat dibuat bila satu berkas berkaitan dengan korespondensi pusat. Platform 165 tidak mengarang daftar khalifah atau tanggal penunjukan yang belum terverifikasi. Keluarga khalifah di berbagai negara dipersilakan menawarkan simpanan untuk didigitalkan.',
        ],
      },
    ],
    related: ['koleksi-surat-menyurat', 'koleksi-surat-keputusan', 'koleksi-kitab-tarekat-nusantara'],
  },

  {
    slug: 'koleksi-kitab-tarekat-nusantara',
    kind: 'archive',
    title: 'Koleksi Kitab Tarekat Nusantara',
    category: 'Manuskrip & Naskah',
    summary: 'Unit kurasi kitab tarekat Nusantara: katalogisasi terbitan dan naskah suluk, wirid, serta adab, dilengkapi metadata bibliografis.',
    facts: [
      { label: 'Jenis koleksi', value: 'Kitab tarekat cetak dan naskah salinan' },
      { label: 'Unit kurasi', value: 'Unit kurasi bibliografi tarekat Nusantara' },
      { label: 'Metode digitalisasi', value: 'Katalogisasi bibliografis dan pemindaian berizin' },
      { label: 'Kebijakan akses', value: 'Tayang setelah metadata minimum terpenuhi' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Literatur tarekat Nusantara tumbuh dalam bentuk naskah dan terbitan cetak yang membahas suluk, wirid, adab, dan nasihat ruhani. Banyak di antaranya tersebar di pesantren kecil dan simpanan pribadi sehingga rawan luput dari pencatatan. Koleksi ini dikurasi untuk menjadikan literatur tersebut dapat ditemukan, dibaca, dan dirujuk dengan tertib. Katalog yang baik adalah pintu masuk pelestarian sebelum naskah terurai oleh usia.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari kitab tarekat terbitan cetak, naskah salinan, serta catatan pengajaran yang berkaitan dengan tradisi suluk di Nusantara. Metodenya adalah katalogisasi bibliografis: judul, penulis bila diketahui, tempat dan kisaran terbit, serta keterangan fisik. Digitalisasi halaman dilakukan lewat pemindaian dengan izin pemilik, disertai pencatatan provenan salinan. Item yang belum memenuhi metadata minimum ditandai menunggu kelengkapan, bukan dipublikasikan separuh.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses. Naskah yang masih dalam pemeriksaan pembacaan ditunda tayangnya agar kesalahan baca tidak membeku dalam arsip. Platform 165 tidak mengarang daftar kitab fiktif atau atribusi penulis tanpa dasar. Peneliti dan pemilik naskah dipersilakan berkoordinasi untuk deposit dan pemeriksaan bersama.',
        ],
      },
    ],
    related: ['koleksi-manuskrip-suluk-jawa', 'koleksi-manuskrip-wirid', 'koleksi-khalifah-mancanegara'],
  },

  {
    slug: 'koleksi-kliping-pers',
    kind: 'archive',
    title: 'Koleksi Kliping Pers',
    category: 'Pers & Majalah',
    summary: 'Unit kurasi kliping pers tentang tarekat dan Suryalaya: pemindaian potongan media dengan metadata sumber untuk rujukan sejarah publik.',
    facts: [
      { label: 'Jenis koleksi', value: 'Potongan surat kabar tentang tarekat' },
      { label: 'Unit kurasi', value: 'Unit arsip kliping pers' },
      { label: 'Metode digitalisasi', value: 'Pemindaian kliping dengan metadata sumber' },
      { label: 'Kebijakan akses', value: 'Publikasi sesuai izin pemilik simpanan' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Pers menyimpan potret publik tarekat: berita kunjungan, catatan acara, dan opini yang muncul di sekitar majelis. Kliping yang dulu disimpan di karton kini rapuh dan mudah tercecer. Koleksi ini dikurasi untuk memindahkan potongan media itu ke bentuk digital yang tertib. Tujuannya adalah menjaga sumber sejarah publik agar dapat dirujuk lintas waktu tanpa bergantung pada ingatan.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari potongan surat kabar dan rubrik yang berkaitan dengan tarekat serta lingkungan Suryalaya, milik simpanan majelis atau keluarga jamaah. Pemindaian dilakukan dengan pencatatan metadata: nama media bila terbaca, kisaran tanggal, halaman, dan pemberi izin. Bila keterangan sumber tidak terbaca penuh, ketidakpastian itu dicatat apa adanya. Kliping tidak dipotong ulang secara digital agar bentuk aslinya tetap terlihat.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses. Potongan yang memuat nama pribadi dapat ditunda publikasinya hingga kebijakan privasi terpenuhi. Keterangan sumber yang kabur dilaporkan sebagai bagian catatan kurasi, bukan ditebak. Platform 165 tidak mengarang daftar berita atau tanggal terbit yang belum terverifikasi. Simpanan kliping keluarga jamaah diundang untuk deposit agar lapisan pers masa lampau makin lengkap.',
        ],
      },
    ],
    related: ['koleksi-majalah-jamaah', 'koleksi-digital-1970', 'koleksi-foto-surialaya'],
  },

  {
    slug: 'koleksi-majalah-jamaah',
    kind: 'archive',
    title: 'Koleksi Majalah Jamaah',
    category: 'Pers & Majalah',
    summary: 'Unit kurasi majalah dan buletin jamaah: pelestarian terbitan internal tarekat secara digital, lengkap metadata edisi dan provenan.',
    facts: [
      { label: 'Jenis koleksi', value: 'Majalah, buletin, dan lembaran berkala internal' },
      { label: 'Unit kurasi', value: 'Unit kurasi terbitan berkala jamaah' },
      { label: 'Metode digitalisasi', value: 'Pemindaian per edisi lengkap dengan metadata' },
      { label: 'Kebijakan akses', value: 'Menunggu persetujuan pemegang hak terbit' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Majalah dan buletin jamaah menjadi panggung internal tempat nasihat, kabar majelis, dan catatan kegiatan ditulis sendiri oleh lingkungan tarekat. Terbitan semacam ini jarang masuk perpustakaan besar sehingga mudah hilang antar edisi. Koleksi ini dikurasi untuk menyelamatkan deret terbitan tersebut secara digital. Dengan deret yang tertib, pembaca dapat mengikuti perkembangan bahasa dan kehidupan jamaah dari waktu ke waktu.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari majalah, buletin, dan lembaran berkala internal yang diizinkan pengurus atau pemilik simpanan. Pemindaian dilakukan per edisi, lengkap dengan sampul, daftar isi, dan halaman iklan lembaga bila ada, karena semuanya bernilai sejarah. Metadata mencatat judul terbitan, nomor edisi bila terbaca, kisaran tahun, dan provenan simpanan. Edisi yang hilang dicatat sebagai kekosongan deret, bukan ditambal dengan angka karangan.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses pemberi terbitan. Bila hak terbit masih disandang pihak tertentu, publikasi menunggu persetujuan resmi. Platform 165 tidak mengarang nama majalah atau jumlah edisi yang belum terverifikasi. Pengurus dan pembaca lama dipersilakan menyerahkan edisi yang tersimpan untuk melengkapi deret.',
        ],
      },
    ],
    related: ['koleksi-kliping-pers', 'koleksi-video-haul', 'koleksi-digital-1970'],
  },

  {
    slug: 'koleksi-manuskrip-suluk-jawa',
    kind: 'archive',
    title: 'Koleksi Manuskrip Suluk Jawa',
    category: 'Manuskrip & Naskah',
    summary: 'Unit kurasi manuskrip suluk berbahasa Jawa beraksara pegon: digitalisasi hati-hati, pembacaan filologis, dan akses bertahap.',
    facts: [
      { label: 'Jenis koleksi', value: 'Naskah suluk Jawa beraksara pegon' },
      { label: 'Unit kurasi', value: 'Unit kurasi manuskrip suluk Jawa' },
      { label: 'Metode digitalisasi', value: 'Pemindaian resolusi tinggi dan transkripsi terperiksa' },
      { label: 'Kebijakan akses', value: 'Katalog tayang lebih dulu dari teks penuh' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Suluk berbahasa Jawa, umumnya ditulis beraksara pegon, menyimpan perenungan ruhani penuntun jalan tarekat dalam bentuk syair dan catatan perjalanan batin. Naskah jenis ini rapuh sekaligus menuntut pembacaan cermat karena aksara dan istilahnya khas. Koleksi ini dikurasi untuk memelihara naskah suluk Jawa beserta pembacaan yang bertanggung jawab. Tujuannya adalah menjaga warisan sastra tarekat Nusantara tetap terbaca oleh generasi berikutnya.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari naskah suluk pegon milik simpanan majelis, keluarga, dan pemilik koleksi yang bersedia bekerja sama. Digitalisasi dilakukan hati-hati: pemindaian resolusi tinggi, pencatatan kondisi fisik, dan transkripsi bertahap yang diperiksa pembaca pegon berpengalaman. Metadata provenan mencatat asal salinan, keterangan penyalin bila diketahui, dan status izin. Terjemahan hanya diberikan pada bagian yang telah melewati pemeriksaan.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses. Naskah yang sedang diperiksa tampil sebagai katalog tanpa transkripsi penuh agar pembacaan keliru tidak membeku. Catatan perbedaan bacaan antar pemeriksa ditulis pada keterangan, bukan dihapus. Platform 165 tidak mengarang judul suluk atau nama penyalin yang belum terverifikasi. Pemilik naskah dipersilakan mengajukan deposit melalui saluran resmi untuk pemeriksaan bersama.',
        ],
      },
    ],
    related: ['koleksi-manuskrip-wirid', 'koleksi-kitab-tarekat-nusantara', 'koleksi-wasiat-mursyid'],
  },

  {
    slug: 'koleksi-manuskrip-wirid',
    kind: 'archive',
    title: 'Koleksi Manuskrip Wirid',
    category: 'Manuskrip & Naskah',
    summary: 'Unit kurasi manuskrip wirid: naskah amalan dan catatan sanad yang didigitalisasi dengan pencatatan asal-usul dan izin akses.',
    facts: [
      { label: 'Jenis koleksi', value: 'Naskah wirid tulisan tangan dan salinan awal' },
      { label: 'Unit kurasi', value: 'Unit kurasi manuskrip wirid' },
      { label: 'Metode digitalisasi', value: 'Pemindaian per halaman dan transkripsi bertahap' },
      { label: 'Kebijakan akses', value: 'Akses terbatas untuk naskah izin pembimbingan' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Manuskrip wirid adalah naskah amalan yang ditulis tangan dan diwariskan dalam lingkaran pembimbingan tarekat. Isinya berkisar pada teks wirid, urutan bacaan, hingga catatan sanad yang menyertai penurunan izin. Koleksi ini dikurasi agar naskah-naskah tersebut terdokumentasi tertib sebelum kerusakan kertas dan lupa pewaris merenggut informasinya. Arsip yang baik juga menolong perbandingan antar salinan dilakukan secara adil.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari naskah wirid tulisan tangan, salinan cetak awal, serta catatan pendamping yang diizinkan pemiliknya. Pemindaian dilakukan per halaman dengan pencatatan kondisi, ukuran, dan tanda baca khas naskah. Metadata provenan memuat asal-usul salinan dan pemberi izin. Transkripsi dikerjakan bertahap dan ditandai status pemeriksaan, sehingga pembaca tahu mana teks yang telah diteliti.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses. Naskah yang menyangkut izin pembimbingan dapat diberi akses terbatas mengikuti kebijakan majelis. Perbandingan antar salinan dicatat sebagai keterangan, bukan sebagai keputusan mutlak. Platform 165 tidak mengarang jumlah naskah, nama penyalin, atau tanggal salinan yang belum terverifikasi. Deposit naskah dari keluarga jamaah terbuka melalui saluran resmi platform.',
        ],
      },
    ],
    related: ['koleksi-doa-harian', 'koleksi-dokumen-khataman', 'koleksi-manuskrip-suluk-jawa'],
  },

  {
    slug: 'koleksi-musik-wiridan',
    kind: 'archive',
    title: 'Koleksi Musik Wiridan',
    category: 'Audio & Video',
    summary: 'Unit kurasi dimensi musik wiridan: rekaman hadrah, terbangan, dan qasidah yang dipelihara sebagai warisan bunyi majelis.',
    facts: [
      { label: 'Jenis koleksi', value: 'Rekaman hadrah, terbangan, dan qasidah' },
      { label: 'Unit kurasi', value: 'Unit kurasi warisan bunyi wiridan' },
      { label: 'Metode digitalisasi', value: 'Penyalinan audio dengan metadata provenan' },
      { label: 'Kebijakan akses', value: 'Publikasi sesuai izin kelompok pemilik' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Dimensi musik wiridan hidup dalam hadrah, terbangan, dan lagu qasidah yang mengiringi majelis. Pola ritme dan melodi ini diwariskan lewat praktik, bukan notasi, sehingga mudah bergeser tanpa dokumentasi. Koleksi ini dikurasi untuk memelihara warisan bunyi tarekat sebagai bagian warisan budaya Nusantara. Arsipnya membantu kelompok hadrah muda mempelajari bentuk lama dengan rujukan yang jujur.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari rekaman latihan dan penampilan hadrah, terbangan, serta bacaan qasidah yang diizinkan kelompok pemiliknya. Rekaman didigitalisasi dengan penjagaan kualitas bunyi dan metadata provenan: kelompok, peristiwa, kisaran waktu, dan pemberi izin. Keterangan irama dan instrumen dicatat sebagai teks pendamping. Rekaman tidak disunting berlebihan agar warna bunyi asli tetap terdengar.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses kelompok. Sebagian rekaman tampil sebagai katalog ringkas bila publikasi penuh belum diizinkan. Catatan perbandingan antar versi irama ditulis pada kolom keterangan arsip. Platform 165 tidak mengarang nama kelompok atau jumlah rekaman yang belum terverifikasi. Kelompok hadrah dan jamaah diundang menyetor rekaman lama untuk didigitalkan bersama tim kurasi.',
        ],
      },
    ],
    related: ['koleksi-audio-wiridan', 'koleksi-video-haul', 'koleksi-doa-harian'],
  },

  {
    slug: 'koleksi-surat-keputusan',
    kind: 'archive',
    title: 'Koleksi Surat Keputusan',
    category: 'Dokumen Administrasi',
    summary: 'Unit kurasi surat keputusan organisasi pesantren: pemindaian dokumen administratif dengan metadata provenan dan akses terkendali.',
    facts: [
      { label: 'Jenis koleksi', value: 'Surat keputusan organisasi pesantren dan yayasan' },
      { label: 'Unit kurasi', value: 'Unit arsip keputusan kelembagaan' },
      { label: 'Metode digitalisasi', value: 'Pemindaian utuh beserta kop dan tanda tangan' },
      { label: 'Kebijakan akses', value: 'Akses khusus untuk dokumen berdata pribadi' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Surat keputusan adalah dokumen administratif yang menetapkan kebijakan organisasi pesantren dan yayasan pembina tarekat. Isinya membantu pembaca memahami bagaimana kelembagaan mengatur tugas, lembaga, dan program dari masa ke masa. Koleksi ini dikurasi untuk memelihara dokumen tersebut sebagai sumber sejarah administrasi yang dapat dirujuk. Tanpa arsip keputusan, kisah organisasi mudah dipenuhi versi lisan yang saling berbeda.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari surat keputusan internal organisasi yang diizinkan pengurus untuk didigitalkan. Pemindaian dilakukan utuh mulai kop, batang surat, hingga tanda tangan, karena semuanya bernilai provenan. Metadata mencatat kisaran tanggal bila terbaca, pihak penerbit, dan asal simpanan. Dokumen yang menyebut data pribadi diberi perlakuan akses khusus sesuai kebijakan kurasi.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses penerbit dokumen. Sebagian keputusan hanya tampil sebagai keterangan katalog tanpa berkas penuh bila isinya sensitif. Rujukan lintas unit dibuat ketika satu keputusan berkaitan dengan korespondensi atau catatan keuangan. Platform 165 tidak mengarang nomor keputusan, tanggal, atau nama pejabat yang belum terverifikasi. Pengurus lembaga dipersilakan menyerahkan salinan resmi untuk diperiksa dan diarsipkan.',
        ],
      },
    ],
    related: ['koleksi-surat-menyurat', 'koleksi-surialaya-keuangan', 'koleksi-digital-1970'],
  },

  {
    slug: 'koleksi-surat-menyurat',
    kind: 'archive',
    title: 'Koleksi Surat-Menyurat',
    category: 'Dokumen Administrasi',
    summary: 'Unit kurasi korespondensi pesantren: surat-menyurat dengan khalifah, tokoh, dan lembaga, dipindai dengan metadata dan akses bertahap.',
    facts: [
      { label: 'Jenis koleksi', value: 'Surat masuk, surat keluar, dan draf korespondensi' },
      { label: 'Unit kurasi', value: 'Unit kurasi korespondensi tarekat' },
      { label: 'Metode digitalisasi', value: 'Pemindaian utuh termasuk amplop' },
      { label: 'Kebijakan akses', value: 'Penutupan nama pribadi pada tampilan publik' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Surat-menyurat adalah jantung administrasi tarekat masa lampau: penghubung pesantren dengan khalifah, tokoh masyarakat, instansi, dan jamaah yang berjauhan. Isinya merekam tata krama resmi, bahasa persuratan, serta jaringan relasi yang membentang luas. Koleksi ini dikurasi untuk memelihara korespondensi tersebut sebagai sumber sejarah sosial. Arsip surat juga menolong penelusuran kronologi peristiwa yang tidak tercatat di tempat lain.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari surat masuk, surat keluar, dan draf korespondensi yang diizinkan pemilik simpanan. Pemindaian dilakukan utuh beserta amplop bila tersimpan, karena catatan pos bernilai bagi sejarah jaringan. Metadata provenan memuat asal simpanan, kisaran tanggal bila terbaca, dan pihak terkait sesuai izin. Nama pribadi dapat ditutup sebagian pada tampilan publik tanpa mengubah berkas asli.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses. Surat yang memuat urusan pribadi ditunda tayangnya hingga kebijakan privasi terpenuhi. Berkas asli tetap tersimpan utuh sekalipun tampilan publik menutup sebagian nama. Platform 165 tidak mengarang isi surat atau nama pengirim yang belum terverifikasi. Keluarga dan lembaga yang menyimpan korespondensi lama dipersilakan mengajukan deposit melalui saluran resmi.',
        ],
      },
    ],
    related: ['koleksi-surat-keputusan', 'koleksi-khalifah-mancanegara', 'koleksi-surialaya-keuangan'],
  },

  {
    slug: 'koleksi-surialaya-keuangan',
    kind: 'archive',
    title: 'Koleksi Keuangan Suryalaya',
    category: 'Dokumen Administrasi',
    summary: 'Unit kurasi catatan keuangan Suryalaya: pelestarian buku dan nota administratif sebagai sumber sejarah sosial, akses terbatas.',
    facts: [
      { label: 'Jenis koleksi', value: 'Buku kas, nota, dan rekapitulasi pembukuan' },
      { label: 'Unit kurasi', value: 'Unit arsip keuangan Suryalaya' },
      { label: 'Metode digitalisasi', value: 'Pemindaian per halaman dengan catatan kondisi' },
      { label: 'Kebijakan akses', value: 'Akses paling terkendali di unit administrasi' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Catatan keuangan pesantren, seperti buku kas, nota, dan rekapitulasi sederhana, adalah sumber sejarah sosial yang sering diabaikan. Dari situ terbaca bagaimana majelis menyelenggarakan acara, memelihara bangunan, dan menopang kegiatan jamaah. Koleksi ini dikurasi untuk melestarikan dokumen keuangan Suryalaya sebagai keterangan masa lalu yang jujur. Nilai utamanya adalah pola penyelenggaraan, bukan angka untuk ditimbang ulang hari ini.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari buku catatan, nota, dan dokumen rekapitulasi yang diizinkan pengurus untuk didigitalkan. Pemindaian dilakukan per halaman dengan pencatatan kondisi kertas dan bentuk pembukuan yang dipakai. Metadata provenan memuat asal simpanan dan kisaran periode bila terbaca. Ketidakpastian periode dicatat apa adanya dan tidak ditebak demi kerapian tabel.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi ini bersifat sensitif sehingga kebijakan aksesnya paling terkendali di antara unit administrasi. Berkas penuh dapat hanya tersedia bagi kurasi internal, sementara publik melihat keterangan katalog. Penjelasan pola pembukuan ditulis pada keterangan katalog agar nilai dokumen tetap terbaca. Platform 165 tidak mengarang angka keuangan atau periode yang belum terverifikasi. Pengurus lembaga menjadi pihak yang menentukan laju publikasi unit ini.',
        ],
      },
    ],
    related: ['koleksi-surat-keputusan', 'koleksi-surat-menyurat', 'koleksi-digital-1970'],
  },

  {
    slug: 'koleksi-video-haul',
    kind: 'archive',
    title: 'Koleksi Video Haul',
    category: 'Audio & Video',
    summary: 'Unit kurasi rekaman video haul: dokumentasi peringatan tahunan tarekat yang didigitalisasi dengan izin dan metadata provenan.',
    facts: [
      { label: 'Jenis koleksi', value: 'Rekaman video prosesi dan tausiyah haul' },
      { label: 'Unit kurasi', value: 'Unit kurasi dokumentasi haul' },
      { label: 'Metode digitalisasi', value: 'Penyalinan ke format arsip dan keterangan segmen' },
      { label: 'Kebijakan akses', value: 'Menunggu persetujuan atas wajah jamaah' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Haul adalah peringatan tahunan yang mengumpulkan jamaah dari berbagai penjuru, menyimpan tata acara, nuansa majelis, dan ekspresi kebersamaan yang khas. Rekaman video memelihara dimensi gerak dan suasana yang tidak dapat ditangkap teks atau foto. Koleksi ini dikurasi untuk menjadikan dokumentasi haul tersimpan tertib lintas tahun. Rekaman lama milik pribadi juga bernilai bila konteks peristiwanya jelas.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari rekaman video prosesi haul, tausiyah, dan suasana majelis yang diizinkan perekam dan pengurus acara. Digitalisasi mencakup penyalinan ke format arsip, penjagaan kualitas gambar, serta pemangkasan teknis seminimal mungkin. Metadata provenan memuat perekam, peristiwa, lokasi, dan status izin. Video panjang dibekali keterangan segmen agar penelusuran lebih mudah.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses. Rekaman yang memuat wajah jamaah dapat ditunda publikasinya hingga persetujuan diperoleh. Platform 165 tidak mengarang daftar acara atau tahun haul yang belum terverifikasi. Tim dokumentasi majelis diundang menyetor rekaman lama agar deret tahunan dapat dibangun secara jujur.',
        ],
      },
    ],
    related: ['koleksi-audio-wiridan', 'koleksi-foto-surialaya', 'koleksi-musik-wiridan'],
  },

  {
    slug: 'koleksi-wasiat-mursyid',
    kind: 'archive',
    title: 'Koleksi Wasiat Mursyid',
    category: 'Dokumen Historis',
    summary: 'Unit kurasi wasiat dan nasihat mursyid: teks warisan ruhani yang ditranskripsikan dan dipublikasikan sesuai izin akses.',
    facts: [
      { label: 'Jenis koleksi', value: 'Teks wasiat dan nasihat mursyid' },
      { label: 'Unit kurasi', value: 'Unit kurasi warisan wasiat' },
      { label: 'Metode digitalisasi', value: 'Transkripsi terperiksa dan pemindaian salinan asli' },
      { label: 'Kebijakan akses', value: 'Sesuai izin ahli waris dan majelis' },
    ],
    body: [
      {
        h: 'Tujuan Pengumpulan',
        p: [
          'Wasiat mursyid adalah nasihat penutup yang disampaikan pembimbing tarekat kepada jamaah, lazimnya berisi pesan keteguhan adab dan arah perjalanan ruhani. Teks wasiat menempati posisi khusus karena lahir dari pengalaman panjang pembimbingan. Koleksi ini dikurasi untuk memelihara teks wasiat beserta konteks penyampaiannya. Tujuannya adalah menjaga pesan tersebut terbaca utuh tanpa pergeseran makna seiring waktu.',
        ],
      },
      {
        h: 'Jenis Item dan Metode',
        p: [
          'Unit ini mencari teks wasiat tulisan tangan, salinan cetakan, serta catatan penyampaian yang diizinkan pemilik atau ahli waris. Transkripsi diperiksa ulang sebelum tayang dan metadata provenan mencatat asal-usul teks. Kutipan yang belum terverifikasi tidak dipublikasikan demi menjaga kewibawaan pesan. Konteks waktu penyampaian dicatat hanya bila sumbernya jelas.',
        ],
      },
      {
        h: 'Status Koleksi',
        p: [
          'Koleksi berkembang dan item ditampilkan sesuai izin akses ahli waris serta kebijakan majelis. Sebagian wasiat hanya tersedia sebagai keterangan katalog bila teks penuh belum diluluskan. Setiap penetapan status dicatat pada keterangan arsip agar proses kurasi transparan. Platform 165 tidak mengarang isi wasiat atau nama penerima yang belum terverifikasi. Keluarga pembimbing dan majelis dipersilakan mengajukan deposit teks melalui saluran resmi.',
        ],
      },
    ],
    related: ['koleksi-manuskrip-wirid', 'koleksi-dokumen-khataman', 'koleksi-manuskrip-suluk-jawa'],
  },

  {
    slug: 'ordonansi-tarekat-1928',
    kind: 'archive',
    title: 'Ordonansi Tarekat 1928',
    category: 'Dokumen Historis',
    summary: 'Halaman penjelasan Ordonansi Tarekat 1928: kebijakan pemerintah kolonial Hindia Belanda yang mengatur izin dan pendaftaran tarekat.',
    facts: [
      { label: 'Jenis koleksi', value: 'Halaman penjelasan dokumen sejarah' },
      { label: 'Unit kurasi', value: 'Unit rujukan sejarah kebijakan tarekat' },
      { label: 'Metode digitalisasi', value: 'Penyusunan berdasarkan rujukan literatur mapan' },
      { label: 'Kebijakan akses', value: 'Terbuka untuk umum' },
    ],
    body: [
      {
        h: 'Latar Kebijakan Kolonial',
        p: [
          'Ordonansi Tarekat 1928 adalah ketentuan yang dikeluarkan pemerintah kolonial Hindia Belanda untuk mengatur keberadaan tarekat di wilayah jajahannya. Melalui ordonansi tersebut, praktik tarekat dan para mursyidnya dihadapkan pada tuntutan izin serta pendaftaran resmi kepada pemerintah. Kebijakan ini lahir dari kekhawatiran kolonial terhadap gerakan Islam yang dinilai berpotensi menggerakkan massa. Bagi tarekat, ordonansi menambah satu lapis pengawasan di atas kehidupan ruhani yang sebelumnya berjalan dalam lingkaran majelis.',
        ],
      },
      {
        h: 'Makna bagi Dokumen Arsip',
        p: [
          'Bagi pembaca arsip, ordonansi ini menjadi kunci untuk memahami banyak dokumen administrasi tarekat era kolonial, seperti permohonan izin, surat balasan instansi, dan catatan pengawasan. Dokumen sejenis membantu menjelaskan posisi tarekat dalam tata kelola kolonial tanpa perlu mengarang narasi tambahan. Kehadiran ordonansi juga menjelaskan mengapa sejumlah pesantren merapikan surat-menyurat resmi pada periode tersebut. Unit rujukan ini disusun agar peneliti membaca arsip dengan konteks kebijakan yang tepat.',
        ],
      },
      {
        h: 'Status Halaman',
        p: [
          'Halaman ini adalah entri penjelasan dokumen historis mapan, bukan klaim kepemilikan naskah ordonansi oleh platform. Rujukan arsip untuk koleksi administrasi platform diarahkan pada unit surat-menyurat dan surat keputusan yang berkembang secara bertahap. Platform 165 tidak mencantumkan nomor staatsblad atau tanggal arsip individual yang belum terverifikasi. Penambahan rujukan primer akan diumumkan apa adanya saat deposit tersedia.',
        ],
      },
    ],
    related: ['sahifat-al-madinah-piagam', 'koleksi-kitab-tarekat-nusantara', 'koleksi-surat-keputusan'],
  },

  {
    slug: 'sahifat-al-madinah-piagam',
    kind: 'archive',
    title: 'Sahifat al-Madinah',
    category: 'Dokumen Historis',
    summary: 'Halaman penjelasan Sahifat al-Madinah: piagam Nabi Muhammad SAW yang mengatur tata hidup bersama komunitas Madinah pasca hijrah.',
    facts: [
      { label: 'Jenis koleksi', value: 'Halaman penjelasan dokumen sejarah' },
      { label: 'Unit kurasi', value: 'Unit rujukan dokumen peradaban' },
      { label: 'Metode digitalisasi', value: 'Penyusunan berdasarkan literatur sirah mapan' },
      { label: 'Kebijakan akses', value: 'Terbuka untuk umum' },
    ],
    body: [
      {
        h: 'Dokumen dan Konteksnya',
        p: [
          'Sahifat al-Madinah, yang juga dikenal sebagai Piagam Madinah, adalah dokumen yang dinisbatkan kepada Nabi Muhammad SAW setelah hijrah ke Madinah. Piagam ini mengatur tata hidup bersama antara komunitas Muslim dan komunitas lain di Madinah, mencakup perjanjian pertahanan, penyelesaian sengketa, dan penghormatan antar kelompok. Dalam khazanah sejarah hukum, piagam ini kerap disebut sebagai salah satu dokumen tertulis tertua yang mengatur kehidupan bersama masyarakat majemuk. Teksnya dikenal melalui pewarisan dalam literatur sirah klasik, bukan melalui lembar asli yang masih tersimpan.',
        ],
      },
      {
        h: 'Makna bagi Kurasi Arsip',
        p: [
          'Bagi platform arsip, Sahifat al-Madinah menjadi rujukan nilai tentang bagaimana dokumen perjanjian menjaga kebersamaan komunitas lintas latar. Prinsip yang sama menggerakkan kerja kurasi 165: menjaga kejujuran sumber, menghormati pihak yang berbeda latar, dan menaruh perjanjian tertulis di atas ingatan lisan semata. Halaman ini disusun sebagai entri penjelasan, bukan klaim kepemilikan manuskrip. Pembaca diarahkan pada literatur sirah dan kajian sejarah untuk pembacaan teks yang lebih dalam.',
        ],
      },
      {
        h: 'Status Halaman',
        p: [
          'Entri ini mapan sebagai penjelasan dokumen historis dan tidak memuat jumlah item arsip. Rujukan silang diarahkan pada unit manuskrip platform yang berkembang sesuai deposit. Ketepatan kutipan selalu mengikuti edisi literatur yang jelas, dan perbedaan penomoran bait antar edisi diakui apa adanya. Pembaruan halaman dilakukan bila rujukan baru memberi tambahan yang berarti.',
        ],
      },
    ],
    related: ['ordonansi-tarekat-1928', 'timbuktu-rescue-documentation-2012-2013', 'koleksi-manuskrip-suluk-jawa'],
  },

  {
    slug: 'timbuktu-rescue-documentation-2012-2013',
    kind: 'archive',
    title: 'Dokumentasi Penyelamatan Manuskrip Timbuktu 2012–2013',
    category: 'Dokumen Historis',
    summary: 'Halaman penjelasan penyelamatan manuskrip Timbuktu 2012–2013: evakuasi ratusan ribu naskah dari konflik Mali dan pelajarannya bagi arsip.',
    facts: [
      { label: 'Jenis koleksi', value: 'Halaman penjelasan peristiwa sejarah' },
      { label: 'Unit kurasi', value: 'Unit rujukan perlindungan manuskrip' },
      { label: 'Metode digitalisasi', value: 'Penyusunan berdasarkan sumber peristiwa mapan' },
      { label: 'Kebijakan akses', value: 'Terbuka untuk umum' },
    ],
    body: [
      {
        h: 'Peristiwa Penyelamatan',
        p: [
          'Antara 2012 dan 2013, kota Timbuktu di Mali mengalami pendudukan kelompok bersenjata yang mengancam keberadaan manuskrip berusia berabad-abad. Keluarga penyimpan naskah, pustakawan, dan penggerak lokal kemudian menyelundupkan ratusan ribu manuskrip keluar dari kota menuju wilayah selatan yang lebih aman. Evakuasi dilakukan secara diam-diam dengan memindahkan naskah dalam peti melalui jalur sungai dan darat sebelum kota diserang lebih lanjut. Tindakan ini dikenal sebagai salah satu aksi penyelamatan manuskrip terbesar dalam sejarah modern, dan sebagian naskah yang tertinggal dilaporkan mengalami kerusakan atau dimusnahkan.',
        ],
      },
      {
        h: 'Pelajaran bagi Kerja Arsip',
        p: [
          'Peristiwa ini menegaskan bahwa ancaman bagi naskah tidak selalu datang dari usia kertas, tetapi juga dari konflik dan kelalaian keamanan. Penyelamatan Timbuktu menunjukkan pentingnya jaringan keluarga penyimpan naskah, kecepatan evakuasi, serta kerja sama internasional dalam perlindungan warisan tulis. Setelah pemulihan, upaya digitalisasi manuskrip hasil penyelamatan menjadi model bagi lembaga arsip di berbagai negara. Bagi 165, peristiwa ini menjadi cermin bahwa digitalisasi dan pencatatan provenan adalah bentuk perlindungan yang harus dijalankan sebelum ancaman datang.',
        ],
      },
      {
        h: 'Status Halaman',
        p: [
          'Halaman ini adalah entri penjelasan peristiwa historis mapan, bukan unit kepemilikan manuskrip Mali oleh platform. Rujukan kurasi diarahkan pada disiplin metadata provenan dan akses bertahap yang juga dipakai pada koleksi manuskrip 165. Platform 165 tidak mencantumkan angka naskah yang berlebihan atau daftar lembaga yang belum terverifikasi. Pembaruan dilakukan hanya bila sumber baru memberi koreksi yang berarti.',
        ],
      },
    ],
    related: ['sahifat-al-madinah-piagam', 'ordonansi-tarekat-1928', 'koleksi-kitab-tarekat-nusantara'],
  },

// APPEND-ABOVE
]
