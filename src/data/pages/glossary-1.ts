import type { PageEntry } from './types'

// 165 — Glosarium bagian 1 (slug abah-ganda s.d. dzikir-lailahaillallah)
// Konten bahasa Indonesia, jujur, tanpa fabrikasi fakta.
export const ENTRIES: PageEntry[] = [
  {
    slug: 'abah-ganda',
    kind: 'glossary',
    title: 'Abah Ganda',
    category: 'Kebiasaan & Tradisi',
    summary: 'Abah Ganda adalah sebutan kehormatan bagi guru besar tarekat di Jawa Barat, lambang tradisi menghormati pembina rohani dalam TQN.',
    facts: [
      { label: 'Makna "abah"', value: 'Bapa; sapaan hormat bagi mursyid' },
      { label: 'Jenis istilah', value: 'Gelar kehormatan tradisi tarekat' },
      { label: 'Ruang budaya', value: 'Jawa Barat, lingkungan majelis tarekat' },
      { label: 'Terkait adab', value: 'Hubungan murid dengan guru rohani' },
    ],
    body: [
      {
        h: 'Sapaan Bapa dalam Majelis Tarekat',
        p: [
          'Kata abah dalam bahasa Sunda berarti bapa. Di lingkungan tarekat Jawa Barat, kata ini tumbuh menjadi sapaan kehormatan bagi mursyid dan guru besar tarekat, sebab ia membina murid sebagaimana bapa membina anak. Sebutan Abah Ganda masuk dalam khazanah tersebut: gelar yang melekat pada tokoh yang dihormati majelis tarekat, bukan sekadar nama pribadi. Dengan sapaan itu, jarak antara guru dan murid terasa akrab, namun rasa hormat tetap terjaga.',
          'Tradisi memberi gelar semacam ini menunjukkan cara masyarakat tarekat menempatkan gurunya: bukan figur yang ditinggikan di luar batas, melainkan bapa rohani yang amanah. Peringatan, haul, dan kunjungan murid kepada tokoh bergelar Abah menjadi bagian keseharian majelis. Sapaan yang akrab juga meneguhkan murid muda bahwa keilmuan tarekat dijaga oleh manusia yang dapat ditengok dan diteladani langsung.',
        ],
      },
      {
        h: 'Posisi dalam Tradisi TQN',
        p: [
          'Dalam lingkungan TQN Qodiriah Naqsyabandiyah, penghormatan kepada guru besar selalu berdampingan dengan adab murid. Murid menyapa Abah dengan santun, mengikuti bimbingan wirid, dan meneladani akhlaknya. Penghormatan yang sehat berjalan bersama doa dan maulid yang dibaca untuk para guru, bukan dengan klaim berlebihan atas diri mereka. Perlu diungkap dengan jujur bahwa riwayat tentang tokoh-tokoh tertentu, termasuk detail perjalanan hidupnya, beragam antar majelis dan sumber; halaman ini menampilkan kerangka umum tradisinya tanpa menambah kisah yang tidak dapat dipertanggungjawabkan.',
        ],
      },
    ],
    related: ['adab-murid', 'haul-surialaya', 'amanah-tarekat'],
  },
  {
    slug: 'abdulkarim-banten',
    kind: 'glossary',
    title: 'Syekh Abdulkarim Banten',
    titleAr: 'عَبْد الكَرِيم البَنْتَنِي',
    category: 'Sejarah & Tokoh',
    summary: 'Syekh Abdulkarim Banten adalah ulama Banten dalam silsilah tarekat Qadiriyyah Naqsyabandiyah, penyambung ijazah dari Syekh Ahmad Khatib Sambas.',
    facts: [
      { label: 'Nisbat', value: 'Banten, pesisir barat Pulau Jawa' },
      { label: 'Guru dalam silsilah', value: 'Syekh Ahmad Khatib Sambas (riwayat tarekat)' },
      { label: 'Peran', value: 'Mata rantai ijazah Qadiriyyah-Naqsyabandiyah ke Jawa' },
      { label: 'Catatan metodologis', value: 'Detail biografi beragam antar sumber' },
    ],
    body: [
      {
        h: 'Ulama Banten dalam Silsilah Tarekat',
        p: [
          'Syekh Abdulkarim Banten dikenal sebagai ulama Banten yang namanya terpatri dalam silsilah tarekat Qadiriyyah Naqsyabandiyah. Dalam riwayat yang diwariskan majelis, ia adalah murid Syekh Ahmad Khatib Sambas, ulama asal Sambas Kalimantan yang merumuskan amalan Qadiriyyah wa Naqsyabandiyah. Melalui rantai murid inilah ijazah tarekat itu menyeberangi laut, dari Kalimantan menuju Jawa. Di Banten, amalan itu kemudian mengakar dalam pesantren dan kampung-kampung dzikir.',
        ],
      },
      {
        h: 'Penjaga Mata Rantai Ijazah',
        p: [
          'Peran semacam ini penting dalam struktur tarekat. Ijazah tidak berpindah melalui buku, melainkan melalui manusia yang diuji dan dipercaya gurunya. Karena itu, tokoh seperti Abdulkarim Banten diingat bukan hanya sebagai penyampai lafaz wirid, melainkan penjaga keaslian amalan dari gurunya kepada generasi berikutnya. Sumber-sumber tarekat menempatkannya sebagai salah satu mata rantai yang menghubungkan jalur Sambas dengan jalur-jalur tarekat di Jawa Barat.',
          'Perlu diungkap dengan jujur bahwa keterangan rinci tentang tahun kelahiran, tahun wafat, dan perjalanan hidupnya beragam di antara sumber-sumber tarekat. Halaman ini membatasi diri pada posisi yang disepakati luas dalam silsilah. Detail yang tidak dapat dicek tidak ditulis, agar penghormatan tidak berubah menjadi fabrikasi.',
        ],
      },
    ],
    related: ['banten-tarekat', 'amanah-tarekat', 'haramain', 'banjarmasin-tarekat'],
  },
  {
    slug: 'aceh-tarekat',
    kind: 'glossary',
    title: 'Tarekat di Aceh',
    category: 'Sejarah & Tokoh',
    summary: 'Tarekat di Aceh berkembang sejak era kesultanan; Serambi Mekkah menjadi gerbang tasawuf Nusantara dengan majelis Qadiriyyah, Naqsyabandiyah, dan Syattariyah.',
    facts: [
      { label: 'Julukan daerah', value: 'Serambi Mekkah' },
      { label: 'Tarekat dikenal', value: 'Qadiriyyah, Naqsyabandiyah, Syattariyah' },
      { label: 'Tokoh sufi klasik', value: 'Hamzah Fansuri, Abdurrauf as-Singkili' },
      { label: 'Wadah tradisi', value: 'Dayah, masjid, dan majelis dzikir' },
    ],
    body: [
      {
        h: 'Gerbang Islam dan Tasawuf Nusantara',
        p: [
          'Aceh menyimpan tempat istimewa dalam sejarah Islam Nusantara. Kerajaan Samudra Pasai dan Kesultanan Aceh Darussalam menjadikan wilayah ini gerbang perdagangan sekaligus gerbang keilmuan Islam, sehingga dikenal dengan julukan Serambi Mekkah. Di bumi itulah tarekat menemukan tanah yang subur sejak ratusan tahun silam. Dayah, pesantren khas Aceh, menjadi wadah tempat ilmu fiqh dan tasawuf tumbuh berdampingan.',
          'Para sejarawan mencatat perkembangan kajian tasawuf di Aceh pada abad ke-16 dan ke-17, antara lain melalui karya-karya Hamzah Fansuri serta tulisan-tulisan ulama Aceh pada masa itu. Tarekat-tarekat besar seperti Qadiriyyah, Naqsyabandiyah, dan Syattariyah dikenal di sana; Syattariyah melekat pada nama Abdurrauf as-Singkili, ulama besar Aceh. Majelis dzikir tumbuh bersama dayah dan masjid-masjid kota.',
        ],
      },
      {
        h: 'Kesinambungan hingga Kini',
        p: [
          'Bagi lingkungan TQN Qodiriah Naqsyabandiyah, Aceh termasuk wilayah dengan majelis-majelis yang hidup hingga kini. Sejarah panjang itu mengingatkan bahwa tarekat di Nusantara bukan barang baru yang import, melainkan bagian peradaban yang sudah lama berakar. Keberpijakan itu menjadikan halaman-halaman sejarah Aceh penting dibaca oleh siapa pun yang menekuni sejarah tarekat Indonesia.',
        ],
      },
    ],
    related: ['banten-tarekat', 'bukhara-tarekat', 'dzikir-berjamaah'],
  },
  {
    slug: 'adab-murid',
    kind: 'glossary',
    title: 'Adab Murid',
    titleAr: 'أَدَب المُرِيد',
    category: 'Struktur Tarekat',
    summary: 'Adab murid adalah kesantunan murid tarekat kepada Allah, guru, dan majelis; fondasi keberkahan wirid dalam TQN Qodiriah Naqsyabandiyah.',
    facts: [
      { label: 'Istilah Arab', value: 'أَدَب المُرِيد' },
      { label: 'Makna harfiah', value: 'Kesantunan murid; adat yang terhormat' },
      { label: 'Ruang dalam TQN', value: 'Dasar hubungan murid dengan mursyid' },
      { label: 'Terkait', value: 'Izin amalan dan kesungguhan wirid' },
    ],
    body: [
      {
        h: 'Fondasi yang Menjaga Keberkahan',
        p: [
          'Adab berarti kesantunan: cara berpindang yang benar kepada Allah, kepada Rasulullah saw, dan kepada guru. Dalam tarekat, adab bukan tambahan pelengkap, melainkan fondasi. Riwayat para sufi menyebut bahwa keberkahan ilmu bergantung pada adab, dan amalan tanpa adab mudah kehilangan nilainya. Karena itu para guru lebih dahulu mengasuh adab murid sebelum menambah bebannya.',
        ],
      },
      {
        h: 'Wujudnya bagi Murid TQN',
        p: [
          'Bagi murid TQN, adab meliputi hal-hal sederhana yang konsisten: menghadap majelis dalam keadaan bersuci dan berpakaian layak, menyapa Abah mursyid dengan santun, menjaga lafaz wirid sesuai bimbingan, serta tidak membesar-besarkan pengalaman batin. Adab juga berarti jujur: murid melaporkan keadaannya apa adanya, tidak mengada-ada. Murid yang beradab menahan diri dari mengamalkan amalan yang belum diizinkan gurunya, dan menahan lisan dari menilai sesama murid.',
          'Nilai ini sejalan dengan pengertian ihsan dalam hadis Jibril, yaitu beribadah seolah melihat Allah. Dengan adab, dzikir yang diucapkan bibir merambat menjadi dzikir yang hidup di hati. Itulah arah jalur tarekat: amalan yang tertib lahirnya, hidup batinnya, dan lembut akhlaknya.',
        ],
      },
    ],
    related: ['amanah-tarekat', 'haram-zikir', 'ihsan', 'dzikir'],
  },
  {
    slug: 'adzhan',
    kind: 'glossary',
    title: 'Adzan',
    titleAr: 'أَذَان',
    category: 'Amalan & Wirid',
    summary: 'Adzan adalah kumandang pemberitahuan waktu shalat; dalam TQN, panggilan ini menandai awal rangkaian shalat berjamaah dan majelis dzikir.',
    facts: [
      { label: 'Istilah Arab', value: 'أَذَان' },
      { label: 'Makna harfiah', value: 'Pemberitahuan; kumandang' },
      { label: 'Waktu', value: 'Lima kali sehari menurut syariat' },
      { label: 'Terkait amalan', value: 'Shalat fardhu berjamaah sebelum wiridian' },
    ],
    body: [
      {
        h: 'Kumandang yang Menyeru',
        p: [
          'Adzan adalah kumandang pemberitahuan masuknya waktu shalat, diucapkan dengan lafaz-lafaz yang ditetapkan syariat. Makna harfiahnya adalah pemberitahuan: suara yang memanggil manusia meninggalkan kesibukannya sejenak dan menghadap Allah. Dari masjid besar hingga musala desa, adzan menjadi penanda ritme hari seorang muslim. Mendengarnya, menjawabnya, dan berdoa setelahnya termasuk adab yang diajarkan para ulama. Lafaz-lafaznya dinukil dalam riwayat-riwayat yang sahih dan dijaga dengan hati-hati.',
        ],
      },
      {
        h: 'Gerbang Amalan Majelis TQN',
        p: [
          'Dalam lingkungan tarekat, adzan terasa semakin dekat dengan hati. Majelis TQN umumnya berangkat dari shalat fardhu berjamaah; wirid dan dzikir dibingkai oleh shalat, bukan menggantikannya. Kumandang adzan menegaskan bahwa urutan amalan jalur tarekat berdiri di atas kewajiban syariat terlebih dahulu. Di banyak majelis, selesainya shalat fardhu langsung disambung wiridian bersama.',
          'Kebiasaan menyimak adzan dengan tenang membentuk hati yang tidak lelah diseru. Untuk murid yang sibuk bekerja, adzan menjadi penanda waktu yang memanggil pulang, meski shalatnya dijama ataupun digabung sesuai ketentuan. Yang dijaga bukan sekadar jadwal, melainkan hati yang mau diseru.',
        ],
      },
    ],
    related: ['dhuha', 'dzikir-berjamaah', 'idulfitri-tarekat'],
  },
  {
    slug: 'amanah-tarekat',
    kind: 'glossary',
    title: 'Amanah Tarekat',
    titleAr: 'أَمَانَة',
    category: 'Struktur Tarekat',
    summary: 'Amanah tarekat adalah titipan ijazah dan wirid yang dijaga murid serta disampaikan mursyid secara utuh melalui silsilah TQN Qodiriah Naqsyabandiyah.',
    facts: [
      { label: 'Istilah Arab', value: 'أَمَانَة' },
      { label: 'Makna harfiah', value: 'Titipan yang harus dijaga' },
      { label: 'Ruang dalam TQN', value: 'Ijazah, wirid, dan bimbingan mursyid' },
      { label: 'Terkait', value: 'Silsilah guru kepada murid' },
    ],
    body: [
      {
        h: 'Titipan yang Dijaga Utuh',
        p: [
          'Amanah berarti titipan yang wajib dijaga dan disampaikan dengan utuh. Dalam khazanah tarekat, amanah tarekat merujuk pada ijazah amalan, lafaz wirid, dan bimbingan batin yang dititipkan mursyid kepada murid yang telah diuji. Titipan ini tidak boleh diubah-ubah, diperjualbelikan, ataupun dipamerkan. Ia diwariskan dengan tanggung jawab, dari guru yang menilai kesungguhan kepada murid yang menerima dengan adab. Sepanjang jalur ini, kepercayaan adalah modal yang paling tidak boleh hilang.',
        ],
      },
      {
        h: 'Tertib yang Menjaga Jalur',
        p: [
          'Kekuatan TQN Qodiriah Naqsyabandiyah terletak pada disiplin amanah ini. Amalan majelis berasal dari silsilah guru yang tercatat dan dapat dilacak; murid menerima wirid dari mursyidnya, bukan mengarang sendiri. Ketika seorang murid dipercaya menjadi pembina, yang ia bawa adalah titipan gurunya, bukan gagasan pribadi. Tertib inilah yang membuat amalan majelis dapat dipertanggungjawabkan silsilahnya.',
          'Amanah juga menyentuh hal praktis: menjaga nama baik majelis, merawat fasilitas bersama, dan memperlakukan sesama murid dengan adil. Jalur yang amanah akan terasa tenang bagi muridnya. Jalur yang kehilangan amanah mudah disusupi kesombongan dan perselisihan.',
        ],
      },
    ],
    related: ['adab-murid', 'abdulkarim-banten', 'awrad', 'haram-zikir'],
  },
  {
    slug: 'arsip-audio',
    kind: 'glossary',
    title: 'Arsip Audio',
    category: 'Arsip & Digital',
    summary: 'Arsip audio 165.web.id menyimpan rekaman wiridian dan majelis TQN secara display-only, agar lafaz dan tempo bacaan tetap terpelihara.',
    facts: [
      { label: 'Kategori platform', value: 'Arsip & Digital' },
      { label: 'Bentuk koleksi', value: 'Rekaman wiridian, pengajian, dan majelis' },
      { label: 'Prinsip penampilan', value: 'Display-only, tanpa penilaian legitimasi' },
      { label: 'Terkait', value: 'Digitalisasi dan hak cipta arsip' },
    ],
    body: [
      {
        h: 'Rekaman yang Menjaga Tempo Bacaan',
        p: [
          'Arsip audio adalah kumpulan rekaman suara yang disimpan agar tidak hilang oleh waktu. Isinya antara lain rekaman wiridian, pengajian, nasehat pembina, hingga suasana majelis. Bagi komunitas tarekat, rekaman semacam ini menjadi sumber belajar yang hidup; murid yang jauh dapat mendengar lafaz dan tempo wiridian sesuai yang dipegang majelisnya.',
        ],
      },
      {
        h: 'Disiplin Penempatan di 165.web.id',
        p: [
          'Platform 165.web.id menempatkan arsip audio dalam kategori Arsip & Digital dengan disiplin yang tegas. Rekaman ditampilkan apa adanya untuk belajar dan merawat tradisi, bukan untuk menilai atau menjual legitimasi spiritual siapa pun. Keterangan sumber, konteks, dan kondisi perekaman dicantumkan selengkap mungkin. Hal yang tidak diketahui dibiarkan terbuka, tidak diisi dengan dugaan.',
          'Merawat arsip audio berarti merawat ingatan kolektif komunitas. Suara Abah, tempo bacaan, dan jeda doa adalah bagian warisan yang jika tidak direkam akan berhenti pada satu generasi. Karena itu penataan arsip, penamaan berkas, dan pencatatan konteks dikerjakan sejak awal, bukan menyusul. Setiap berkas diberi nama yang bermakna agar mudah ditemukan kembali oleh pembaca berikutnya.',
        ],
      },
    ],
    related: ['arsip-foto', 'digitalisasi-manuskrip', 'hak-cipta-arsip'],
  },
  {
    slug: 'arsip-foto',
    kind: 'glossary',
    title: 'Arsip Foto',
    category: 'Arsip & Digital',
    summary: 'Arsip foto di 165.web.id mendokumentasikan majelis, tokoh, dan naskah tarekat dengan kredit sumber jelas serta prinsip izin penggunaan.',
    facts: [
      { label: 'Kategori platform', value: 'Arsip & Digital' },
      { label: 'Bentuk koleksi', value: 'Foto majelis, tokoh, naskah, dan tempat' },
      { label: 'Prinsip', value: 'Kredit sumber dan izin penggunaan' },
      { label: 'Terkait', value: 'Digitalisasi manuskrip' },
    ],
    body: [
      {
        h: 'Gambar yang Menghadirkan Kenangan',
        p: [
          'Arsip foto menyimpan gambar dari kegiatan dan tokoh: suasana majelis dzikir, haul besar, naskah lama, hingga bangunan pesantren. Foto memiliki kekuatan menghadirkan kembali suasana yang sudah lewat. Bagi murid baru, ia menjadi jembatan untuk mengenal wajah tradisi yang mereka ikuti. Bagi keluarga murid, ia menjadi bukti kegiatan yang dapat dilihat langsung. Koleksinya dikelola menurut tahun dan tema, sehingga pencarian berjalan cepat ketika seseorang perlu menghadirkan kembali suasana majelis tertentu.',
        ],
      },
      {
        h: 'Rambu Penanganan di 165.web.id',
        p: [
          'Di 165.web.id, arsip foto ditangani dengan rambu yang sama seperti arsip lainnya. Setiap gambar menyebut sumbernya, menghormati izin dari pemilik koleksi, dan menampilkan keterangan yang jujur. Foto yang konteksnya tidak jelas tidak diberi keterangan mengada-ada. Prinsipnya sederhana: lebih baik kosong keterangan daripada salah keterangan.',
          'Bagi peneliti dan murid, arsip foto yang tertata membantu pekerjaan dokumentasi sejarah tarekat di Indonesia. Gambar yang lengkap keterangannya adalah sumber yang dapat dipercaya kembali suatu hari nanti. Karena itu pengarsipan foto dikerjakan dengan kesabaran, satu per satu, tanpa berburu sensasi.',
        ],
      },
    ],
    related: ['arsip-audio', 'digitalisasi-manuskrip', 'hak-cipta-arsip'],
  },
  {
    slug: 'ashghal',
    kind: 'glossary',
    title: 'Asyghal',
    titleAr: 'أَشْغَال',
    category: 'Amalan & Wirid',
    summary: 'Asyghal adalah latihan khusus tarekat di luar wirid harian, diberikan mursyid TQN kepada murid dengan izin, jumlah, dan cara yang terukur.',
    facts: [
      { label: 'Istilah Arab', value: 'أَشْغَال' },
      { label: 'Makna harfiah', value: 'Jamak dari syaghl: pekerjaan, latihan' },
      { label: 'Ruang dalam TQN', value: 'Latihan khusus dengan izin mursyid' },
      { label: 'Terkait amalan', value: 'Wirid harian dan dzikir terbimbing' },
    ],
    body: [
      {
        h: 'Pekerjaan Khusus Hati',
        p: [
          'Asyghal adalah bentuk jamak dari kata syaghl yang berarti pekerjaan. Dalam kamus tarekat, asyghal berarti latihan-latihan khusus di luar wirid harian: rangkaian dzikir, jeda napas, dan perhatian hati yang diberikan mursyid kepada murid tertentu sesuai keperluannya. Ia disebut pekerjaan karena sungguh menuntut kerja, yaitu kerja tekun membersihkan hati. Latihan semacam ini dijaga agar tidak menjadi beban yang melebihi ukuran murid.',
        ],
      },
      {
        h: 'Berizan dan Terukur',
        p: [
          'Ciri asyghal adalah sifatnya yang terbatas dan berizan. Murid menerima asyghal dari mursyidnya langsung, dengan jumlah dan caranya dijelaskan. Ia tidak dipajang untuk umum dan tidak diambil dari kitab sembarangan. Ketertiban ini menjaga murid dari berlebih-lebihan sekaligus menjaga amalan dari perubahan yang tidak berijazah.',
          'Dalam TQN Qodiriah Naqsyabandiyah, asyghal berdiri di atas landasan wirid harian, bukan menggantikannya. Murid yang tekun pada wirid wajib dan harian akan menemukan latihan tambahan pada waktunya, sesuai bimbingan. Sebelum waktu itu tiba, kesetiaan pada amalan yang sudah diizinkan justru menjadi latihan terbaik. Sebab latihan yang diizinkan itu sendiri sudah menyimpan keberkahan silsilahnya.',
        ],
      },
    ],
    related: ['awrad', 'bilangan-zikir', 'haram-zikir', 'adab-murid'],
  },
  {
    slug: 'awrad',
    kind: 'glossary',
    title: 'Awrād',
    titleAr: 'أَوْرَاد',
    category: 'Amalan & Wirid',
    summary: 'Awrād adalah wirid harian murid tarekat yang diterima lewat ijazah mursyid; lafaz, bilangan, dan waktunya dipegang utuh dalam TQN.',
    facts: [
      { label: 'Istilah Arab', value: 'أَوْرَاد' },
      { label: 'Makna harfiah', value: 'Jamak dari wird: porsi amalan yang ditetapkan' },
      { label: 'Ruang dalam TQN', value: 'Wirid harian murid sesuai ijazah' },
      { label: 'Terkait', value: 'Bilangan zikir dan asyghal' },
    ],
    body: [
      {
        h: 'Porsi Amalan yang Dititipkan',
        p: [
          'Awrād adalah jamak dari wird, kata yang berarti porsi atau jatah. Para sufi memakainya untuk amalan yang ditetapkan secara teratur: bacaan, dzikir, dan shalat sunnah yang dipegang seorang murid setiap hari. Karena ditetapkan, wirid bersifat menuntun. Ia bukan suasana hati yang datang silih berganti, melainkan janji harian yang dipenuhi.',
        ],
      },
      {
        h: 'Awrād dalam Keseharian TQN',
        p: [
          'Dalam TQN Qodiriah Naqsyabandiyah, awrad diterima murid melalui ijazah mursyid. Lafaz, bilangan, dan waktunya mengikuti bimbingan, sehingga amalan majelis dapat dipertanggungjawabkan silsilahnya. Wiridian yang dijalankan bersama pada majelis adalah bentuk awrad yang paling tampak, sementara wirid pribadi dijalanikan di sela kesibukan hidup. Keduanya berjalan berpasangan dan saling menguatkan.',
          'Kesetiaan pada awrad melatih istiqamah. Para guru tarekat sering menegaskan bahwa yang menyelamatkan bukan amalan besar sesekali, melainkan amalan sedikit yang dikerjakan terus. Ketika wirid harian sudah melekat, hal-hal besar tidak lagi terasa menakutkan. Wirid pribadi juga menyelamatkan murid di hari-hari sulit; saat tidak bisa hadir majelis, lafaz yang sudah diizinkan tetap dijalanikan di mana pun berada.',
        ],
      },
    ],
    related: ['ashghal', 'bilangan-zikir', 'dzikir', 'haram-zikir'],
  },
  {
    slug: 'baju-tarekat',
    kind: 'glossary',
    title: 'Baju Tarekat',
    category: 'Kebiasaan & Tradisi',
    summary: 'Baju tarekat adalah pakaian khas murid pada majelis besar TQN, lambang kesetaraan, komitmen, dan kesungguhan dalam mengikuti bimbingan mursyid.',
    facts: [
      { label: 'Jenis istilah', value: 'Sebutan pakaian khas majelis' },
      { label: 'Waktu dipakai', value: 'Majelis besar, haul, dan wiridian resmi' },
      { label: 'Makna simbolik', value: 'Kesetaraan dan kesungguhan murid' },
      { label: 'Catatan', value: 'Model dan warna beragam antar majelis' },
    ],
    body: [
      {
        h: 'Seragam yang Menghapus Perbedaan',
        p: [
          'Baju tarekat adalah sebutan bagi pakaian khusus yang dikenakan murid pada majelis besar, haul, dan wiridian resmi. Kehadirannya bukan soal gaya, melainkan lambang. Ketika ratusan murid dari latar berbeda duduk dalam pakaian yang sama, perbedaan status dunia dihapus di tengah majelis. Yang tersisa hanyalah posisi duduk sebagai murid yang sama-sama dzikir.',
        ],
      },
      {
        h: 'Penanda Komitmen',
        p: [
          'Bagi banyak murid, baju tarekat juga penanda komitmen. Ia diterima setelah seseorang betul-betul bergabung dalam bimbingan mursyid, sehingga memakainya menjadi pengingat untuk menjaga lisan dan perilaku di mana pun berada. Rasa bangga yang diperbolehkan adalah bangga menjadi bagian dari majelis dzikir, bukan bangga membeda-bedakan. Baju yang sama meneguhkan murid baru bahwa ia datang ke rumah yang sudah panjang usianya.',
          'Perlu dicatat dengan jujur bahwa model, warna, dan waktu pemakaian baju tarekat berbeda antar pesantren dan majelis. Halaman ini menampilkan makna umumnya. Detail masing-masing majelis mengikuti ketentuan pembina masing-masing, dan perbedaan itu ditampakkan apa adanya. Yang dipersatukan adalah hati, bukan selera model masing-masing.',
        ],
      },
    ],
    related: ['haul-surialaya', 'grebeg', 'adab-murid'],
  },
  {
    slug: 'banjarmasin-tarekat',
    kind: 'glossary',
    title: 'Tarekat di Banjarmasin',
    category: 'Sejarah & Tokoh',
    summary: 'Tarekat di Banjarmasin berakar pada tradisi keilmuan Kalimantan Selatan, menyambung rantai Qadiriyyah-Naqsyabandiyah dari Sambas ke seluruh Nusantara.',
    facts: [
      { label: 'Wilayah', value: 'Kalimantan Selatan' },
      { label: 'Wadah tradisi', value: 'Pesantren dan majelis dzikir tepian sungai' },
      { label: 'Keterkaitan', value: 'Rantai Qadiriyyah-Naqsyabandiyah dari Sambas' },
      { label: 'Tokoh rujukan', value: 'Syekh Ahmad Khatib Sambas' },
    ],
    body: [
      {
        h: 'Pusat Keilmuan di Tepian Sungai',
        p: [
          'Banjarmasin tumbuh sebagai pusat Islam di Kalimantan Selatan. Kota yang dijalari sungai ini menghadirkan pesantren tepian air, kitab-kitab pegon, dan majelis dzikir yang hidup dalam keseharian masyarakat. Dari wilayah Kalimantan inilah pula salah satu nadi tarekat Qadiriyyah wa Naqsyabandiyah di Nusantara memancar, melalui Syekh Ahmad Khatib Sambas dari Sambas, Kalimantan Barat. Jalur keilmuan itu kemudian menjalin dengan pusat-pusat pengajian di seluruh kawasan.',
        ],
      },
      {
        h: 'Persinggahan Jalur Ijazah',
        p: [
          'Menurut riwayat yang diwariskan majelis, ijazah tarekat yang dirumuskan Syekh Ahmad Khatib Sambas menyebar ke berbagai penjuru, termasuk wilayah-wilayah Kalimantan, sebelum meluas ke Jawa. Banjarmasin dan sekitarnya menjadi persinggahan penting jalur keilmuan itu. Di sanalah ulama pulang-pergi, kitab tersalin, dan murid-murid bersilaturahmi. Kedudukan itu menjadikan Kalimantan bagian tak terpisahkan dari peta awal tarekat QN.',
          'Kini majelis tarekat di Banjarmasin tetap berjalan dengan coraknya sendiri. Bagi murid TQN, sejarah Kalimantan mengingatkan bahwa jalur dzikir ini tumbuh dari tanah yang sama dengan perjalanan para guru besarnya. Menghormati sejarah itu berarti menjaga silsilah yang diwariskan, bukan sekadar mengenang.',
        ],
      },
    ],
    related: ['banten-tarekat', 'abdulkarim-banten', 'aceh-tarekat'],
  },
  {
    slug: 'banten-tarekat',
    kind: 'glossary',
    title: 'Tarekat di Banten',
    category: 'Sejarah & Tokoh',
    summary: 'Tarekat di Banten hidup kuat dari kampung tarekat hingga majelis besar; tanah ini menyambung silsilah Qadiriyyah Naqsyabandiyah di Jawa Barat.',
    facts: [
      { label: 'Wilayah', value: 'Banten, pesisir barat Pulau Jawa' },
      { label: 'Gelar daerah', value: 'Salah satu tanah tarekat terkuat di Jawa' },
      { label: 'Tokoh rujukan', value: 'Syekh Yusuf al-Makasari, Syekh Abdulkarim Banten' },
      { label: 'Terkait', value: 'Silsilah TQN Qodiriah Naqsyabandiyah' },
    ],
    body: [
      {
        h: 'Tanah Tarekat di Pesisir Barat Jawa',
        p: [
          'Banten dikenal luas sebagai tanah tarekat. Desa-desa di sana bahkan disapa kampung tarekat karena majelis dzikir, pesantren, dan tradisi haul tumbuh di hampir setiap sudutnya. Kehidupan beragama Banten sulit dipisahkan dari wirid. Dari tanah ini banyak murid berangkat mencari guru, dan banyak guru pulang membawa ijazah.',
        ],
      },
      {
        h: 'Simpul Silsilah Qadiriyyah Naqsyabandiyah',
        p: [
          'Sejarah mencatat nama besar seperti Syekh Yusuf al-Makasari, ulama yang berkarya di Banten sebelum dibuang ke tempat pembuangan yang jauh. Sejarah juga mencatat Syekh Abdulkarim Banten yang dalam silsilah TQN menjadi penyambung ijazah Qadiriyyah Naqsyabandiyah dari Kalimantan ke Jawa. Dua nama ini menjadikan Banten simpul penting dalam peta tarekat Nusantara. Jejaknya masih terasa dalam wiridian dan khaul yang digelar hingga kini.',
          'Hingga sekarang majelis-majelis Banten menghidupi wiridian, haul, dan pembinaan murid. Bagi TQN Qodiriah Naqsyabandiyah, tanah ini memiliki tempat khusus karena melintasi perjalanan silsilah gurunya. Mengenangnya berarti menimbang kembali tanggung jawab menjaga amalan yang disampaikan. Sejarah ini juga menjadi pengingat bahwa tanah tarekat menanggung amanah yang tidak kecil.',
        ],
      },
    ],
    related: ['abdulkarim-banten', 'banjarmasin-tarekat', 'haul', 'aceh-tarekat'],
  },
  {
    slug: 'barzanji',
    kind: 'glossary',
    title: 'Barzanji',
    titleAr: 'بَرْزَنْجِي',
    category: 'Kitab & Naskah',
    summary: "Barzanji adalah kitab maulid karya Ja'far al-Barzanji yang dibaca pada haul dan majelis tarekat untuk memperingati kelahiran Nabi Muhammad saw.",
    facts: [
      { label: 'Istilah', value: 'بَرْزَنْجِي' },
      { label: 'Pengarang', value: "Ja'far al-Barzanji, dari klan Barzanji (Kurdistan)" },
      { label: 'Judul kitab', value: 'Iqd al-Jawahir' },
      { label: 'Terkait amalan', value: 'Pembacaan maulid pada haul dan majelis' },
    ],
    body: [
      {
        h: 'Kitab Maulid yang Akrab di Majelis',
        p: [
          "Barzanji adalah sebutan umum bagi kitab maulid karya Ja'far al-Barzanji, ulama dari klan Barzanji di wilayah Kurdistan. Kitab yang dikenal dengan judul Iqd al-Jawahir ini memuat syair pujian atas kelahiran, hijrah, dan keutamaan Nabi Muhammad saw. Bait-baitnya disusun berirama sehingga mudah dibaca berjamaah dan mudah dihafal. Karena keindahannya, kitab ini tersebar luas dari Timur hingga Nusantara.",
        ],
      },
      {
        h: 'Menghidupkan Haul dan Maulid',
        p: [
          "Di Nusantara, Barzanji menjadi bacaan akrab di majelis. Ia dibaca pada maulid, haul, doa selamat, dan peringatan besar tarekat. Bagi murid TQN, pembacaan Barzanji biasanya menjadi bagian pembuka atau penutup rangkaian haul, menempatkan pujian kepada Rasulullah saw sebagai jiwa seluruh perayaan. Nadharnya yang terkenal dibaca dengan lagu khas masing-masing daerah.",
          'Satu kitab, ratusan tradisi bacaan. Banyak majelis menghafal bait-bait tertentu dan menyanyikannya bergantian antar pembaca. Perbedaan lagu dan tempo tidak dipertengkarkan; keduanya sama-sama menghidupkan pujian kepada Nabi saw. Perbedaan semacam ini ditampakkan dengan hormat, sebagaimana perbedaan wiridian antar majelis. Yang disatukan adalah pujian itu sendiri, bukan selera lagu.',
        ],
      },
    ],
    related: ['haul', 'haul-surialaya', 'grebeg'],
  },
  {
    slug: 'bilangan-zikir',
    kind: 'glossary',
    title: 'Bilangan Zikir',
    category: 'Amalan & Wirid',
    summary: 'Bilangan zikir adalah hitungan lafaz wirid yang ditetapkan mursyid TQN; angkanya boleh beragam antar majelis, yang dijaga adalah ijazahnya.',
    facts: [
      { label: 'Makna', value: 'Hitungan lafaz dzikir yang ditetapkan' },
      { label: 'Sumber ketentuan', value: 'Bimbingan dan ijazah mursyid' },
      { label: 'Ruang dalam TQN', value: 'Wiridian majelis dan wirid pribadi' },
      { label: 'Catatan', value: 'Bilangan beragam antar majelis, dijaga apa adanya' },
    ],
    body: [
      {
        h: 'Hitungan yang Menertibkan Amalan',
        p: [
          'Bilangan zikir adalah hitungan lafaz yang ditetapkan dalam wirid, misalnya seratus kali atau sepuluh kali lafaz tertentu. Para guru menetapkan bilangan agar amalan terukur. Dengan begitu, murid tahu kapan wiridnya selesai dan tidak berpindah-pindah antar amalan mengikuti selera. Hitungan juga menjaga murid dari kelelahan yang menyebabkan wirid ditinggalkan. Murid yang baru mulai biasanya diberi hitungan yang ringan terlebih dahulu, lalu ditambah bertahap sesuai kemampuan dan izin gurunya.',
        ],
      },
      {
        h: 'Beragam Angka, Satu Ijazah',
        p: [
          'Dalam TQN Qodiriah Naqsyabandiyah, bilangan zikir mengikuti ijazah mursyid. Karena itu wajar bila angka yang dijalankan satu majelis berbeda dengan majelis lain; perbedaan ini ditampakkan dengan jujur, bukan disamarkan. Yang dijaga bukan penyeragaman angka, melainkan kesetiaan murid pada bimbingan gurunya. Yang tidak berijazah tidak ditambah sendiri.',
          'Di luar hitungan resmi, murid dianjurkan merawat dzikir jantung yang tidak berhitung: sebutan nama Allah yang melekat sepanjang aktivitas. Bilangan melatih disiplin pada waktu-waktu tertentu. Dzikir yang hidup di hati justru melampaui disiplin itu, sebab ia tidak bertanya berapa kali, melainkan terus mengingat.',
        ],
      },
    ],
    related: ['awrad', 'dzikir', 'ashghal', 'hizb'],
  },
  {
    slug: 'bukhara-tarekat',
    kind: 'glossary',
    title: 'Tarekat Bukhara',
    category: 'Sejarah & Tokoh',
    summary: "Tarekat Bukhara merujuk pusat perkembangan Naqsyabandiyah di kota Bukhara, kawasan kelahiran Baha'uddin Naqsyaband dan tradisi dzikir khafi.",
    facts: [
      { label: 'Lokasi', value: "Bukhara, Ma Wara' an-Nahr (kini Uzbekistan)" },
      { label: 'Peran sejarah', value: 'Pusat perkembangan tarekat Naqsyabandiyah' },
      { label: 'Tokoh melekat', value: "Baha'uddin Naqsyaband" },
      { label: 'Warisan amalan', value: 'Dzikir khafi dan pengasuhan pribadi' },
    ],
    body: [
      {
        h: "Kota Ilmu di Ma Wara' an-Nahr",
        p: [
          "Bukhara adalah kota bersejarah di kawasan Ma Wara' an-Nahr, kini berada di Uzbekistan. Kota ini menjadi lumbung keilmuan Islam selama ratusan tahun: madrasah, kitab, dan guru-guru besar lahir dari sekitarnya. Dalam sejarah tasawuf, Bukhara dikenal sebagai pusat perkembangan tarekat Naqsyabandiyah. Kepadatan ilmu di sana menjadikannya persinggahan para penuntut ilmu dari berbagai penjuru dunia Islam.",
        ],
      },
      {
        h: 'Lahirnya Corak Naqsyabandiyah',
        p: [
          "Nama Baha'uddin Naqsyaband, guru besar abad ke-14 yang menjadi rujukan utama tarekat ini, melekat pada daerah sekitar Bukhara. Menurut riwayat silsilah, rantai guru yang disebut khwajagan bergerak di kota-kota kawasan itu sebelum tarekat menyebar ke Turki, India, dan akhirnya Nusantara. Corak khas yang dibawa adalah dzikir khafi, dzikir yang pendiam namun menusuk hati. Kesetiaan pada silsilah dan pengasuhan murid secara pribadi turut menjadi penandanya.",
          'Bagi TQN Qodiriah Naqsyabandiyah, jejak Bukhara bukan nostalgia tempat, melainkan pengingat disiplin. Tarekat yang sampai ke Indonesia hari ini melintasi generasi-generasi guru yang menjaga amalannya dengan utuh. Mengenang kota-kota asal berarti menimbang kembali amanah yang kini berada di tangan murid.',
        ],
      },
    ],
    related: ['herat-tarekat', 'dzikir-khafi', 'haramain'],
  },
  {
    slug: 'buku-sejarah-tarekat',
    kind: 'glossary',
    title: 'Buku Sejarah Tarekat',
    category: 'Kitab & Naskah',
    summary: 'Buku sejarah tarekat merekam silsilah, amalan, dan pertumbuhan majelis; membacanya menuntut silang cek sumber yang jujur dan terdokumentasi.',
    facts: [
      { label: 'Kategori', value: 'Kitab & Naskah' },
      { label: 'Jenis sumber', value: 'Silsilah, manqibat, riwayat pesantren, kajian akademik' },
      { label: 'Fungsi', value: 'Menyimpan jejak guru, amalan, dan majelis' },
      { label: 'Prinsip penggunaan', value: 'Silang cek sumber, tanpa fabrikasi' },
    ],
    body: [
      {
        h: 'Menyimpan Jejak Jalur Dzikir',
        p: [
          'Buku sejarah tarekat adalah literatur yang merekam perjalanan jalur dzikir: siapa guru yang menyambung siapa, amalan apa yang diwariskan, dan bagaimana majelis tumbuh di berbagai daerah. Bentuknya beragam, dari silsilah pendek yang ditulis tangan, kitab manqibat, riwayat pesantren, hingga kajian akademik di universitas. Masing-masing menyimpan lapisan keterangan dengan ketelitian yang berbeda.',
        ],
      },
      {
        h: 'Membaca dengan Silang Cek',
        p: [
          'Membaca buku semacam ini menuntut kesabaran metodologis. Satu peristiwa bisa berbeda penceritaan antar sumber, dan tahun serta nama kadang berubah dalam penyalinan. Karena itu penulis dan pembaca yang jujur melakukan silang cek antar sumber. Mereka memisahkan riwayat tarekat dari catatan sejarah yang terdokumentasi, dan menandai bagian yang masih diperdebatkan. Sumber primer, sekunder, dan narasi lisan dibedakan perannya, sehingga kesimpulan tidak dibangun di atas satu keterangan saja.',
          'Bagi 165.web.id, semangat buku sejarah tarekat dihidupi lewat halaman-halaman glosarium yang berdisiplin pada sumber. Setiap entri dibuat agar bisa diperiksa ulang, bukan agar terdengar megah. Pembaca yang menemukan ketidaksesuaian dipersilakan menelusuri sumber yang dicantumkan dan menimbang sendiri.',
        ],
      },
    ],
    related: ['barzanji', 'gandul', 'digitalisasi-manuskrip'],
  },
  {
    slug: 'cabang-ponpes',
    kind: 'glossary',
    title: 'Cabang Pondok Pesantren',
    category: 'Struktur Tarekat',
    summary: 'Cabang pondok pesantren adalah perpanjangan pesantren induk tarekat di berbagai daerah, menjaga ijazah, wiridian, dan bimbingan tetap tersambung.',
    facts: [
      { label: 'Jenis istilah', value: 'Struktur organisasi pesantren tarekat' },
      { label: 'Hubungan', value: 'Pesantren induk dan pesantren cabang' },
      { label: 'Aliran bimbingan', value: 'Ijazah dan pembina dari pesantren induk' },
      { label: 'Manfaat', value: 'Majelis yang sah lebih dekat ke murid' },
    ],
    body: [
      {
        h: 'Pohon yang Membertumbuh Cabang',
        p: [
          'Pesantren tarekat besar umumnya berkembang seperti pohon. Ada induk tempat mursyid membina, dan cabang-cabang yang berdiri di daerah lain dengan izinnya. Pesantren cabang menjalankan wiridian, pengajian, dan pendidikan santri di kampung halaman mereka, sambil tetap menyambung bimbingan ke induk. Susunan ini membuat bimbingan tidak berhenti di satu titik geografis. Jumlah dan sebaran cabang berbeda antar pesantren, dan keterangan resminya selalu mengikuti pengumuman induk, bukan anggaran pembaca.',
        ],
      },
      {
        h: 'Keutuhan Ijazah Antar Daerah',
        p: [
          'Struktur ini menjaga keutuhan amalan. Lafaz wirid yang dijalanikan pesantren cabang berasal dari ijazah yang sama. Pembina daerah dibekali langsung oleh induk, dan keputusan besar mengenai amalan dikonsultasikan ke atas. Bagi murid, keberadaan cabang memudahkan: mereka tidak perlu menempuh perjalanan jauh untuk duduk dalam majelis yang sah.',
          'Kunjungan murid daerah ke pesantren induk, misalnya saat haul, menjadi jalinan yang menyegarkan. Di sanalah antar-cabang berkenalan dan berbagi pengalaman majelis. Mereka kembali ke daerah masing-masing dengan rasa menjadi satu keluarga dzikir, bukan cabang yang berdiri sendiri.',
        ],
      },
    ],
    related: ['amanah-tarekat', 'haul-surialaya', 'adab-murid', 'dzikir-berjamaah'],
  },
  {
    slug: 'dark-mode',
    kind: 'glossary',
    title: 'Dark Mode',
    category: 'Arsip & Digital',
    summary: 'Dark mode adalah fitur tampilan gelap di 165.web.id agar membaca wiridian dan glosarium tetap nyaman di malam hari tanpa silau layar.',
    facts: [
      { label: 'Kategori platform', value: 'Fitur tampilan 165.web.id' },
      { label: 'Fungsi', value: 'Tampilan gelap untuk kenyamanan membaca' },
      { label: 'Waktu berguna', value: 'Malam hari dan penghematan baterai layar' },
      { label: 'Terkait', value: 'Halaman wiridian dan glosarium' },
    ],
    body: [
      {
        h: 'Tampilan Gelap untuk Bacaan Malam',
        p: [
          'Dark mode adalah fitur platform 165.web.id yang mengubah tampilan halaman menjadi gelap dengan teks terang. Tujuannya sederhana: menjaga kenyamanan mata saat membaca di malam hari dan mengurangi silau pada layar. Murid yang membaca wiridian atau glosarium sebelum tidur dapat memilih mode ini sekali sentuh. Tampilan berubah, isi tidak berubah.',
        ],
      },
      {
        h: 'Kenyamanan Baca yang Panjang',
        p: [
          'Fitur semacam ini penting bagi platform bacaan panjang. Halaman 165 memuat teks Arab, terjemahan, dan paragraf penjelasan yang perlu dibaca dengan tenang. Kontras yang tepat membuat pembacaan bertahan lama tanpa lelah. Dark mode juga membantu perangkat berhemat baterai pada jenis layar tertentu. Pengaturannya sederhana dan tidak menuntut keahlian khusus; preferensi pembaca disimpan agar halaman berikutnya langsung tampil dalam mode yang dipilih. Setelan ini dapat dikembalikan kapan saja ke tampilan terang.',
          'Pada akhirnya, dark mode hanyalah pelayan pengalaman baca. Yang menjadi isi tetap sama: teks yang jujur, sumber yang jelas, dan amalan yang terpelihara. Fitur boleh berganti, isi tidak. Itu adalah tatanan yang dipegang ruang-ruang baca di platform ini.',
        ],
      },
    ],
    related: ['graf-pengetahuan', 'arsip-audio', 'arsip-foto'],
  },
  {
    slug: 'dhawq',
    kind: 'glossary',
    title: 'Dzauq',
    titleAr: 'ذَوْق',
    category: 'Kepercayaan & Maqamat',
    summary: 'Dzauq adalah rasa batin dalam dzikir yang benar-benar dialami murid tarekat; ia buah kesetiaan wirid, bukan cerita yang dipamer-pamerkan.',
    facts: [
      { label: 'Istilah Arab', value: 'ذَوْق' },
      { label: 'Makna harfiah', value: 'Rasa; kelezatan yang dikecap' },
      { label: 'Ruang dalam TQN', value: 'Buah dzikir yang dialami, tidak dipamerkan' },
      { label: 'Terkait', value: "Hāl, fanā', hakikat" },
    ],
    body: [
      {
        h: 'Rasa yang Tidak Bisa Diceritakan Secara Lengkap',
        p: [
          'Dzauq berarti rasa, sebagaimana lidah mengecap makanan. Para sufi memakainya untuk pengalaman batin yang benar-benar dialami: kelezatan dzikir, kemanisan iman, dan kehadiran hati yang tidak bisa dijelaskan hanya dengan definisi. Ilmu mengenai dzauq tidak tercapai dengan hafalan, melainkan dengan menjalani. Karena itu para guru mengajak murid beramal lebih dahulu, bukan sekadar mendengar cerita.',
        ],
      },
      {
        h: 'Buah Kesetiaan, Bukan Target Kejaran',
        p: [
          'Dalam jalur tarekat, dzauq adalah buah dari kesetiaan berwirid, bukan target yang dikejar-kejar. Murid yang rajin dzikir di bawah bimbingan mursyid dapat mengalaminya pada waktunya. Yang penting justru sikapnya ketika itu terjadi: bersyukur tanpa memamerkan dan tanpa mengaku lebih dari yang dirasakan. Murid yang belum merasakan apa pun tidak sedang gagal; jalur ini lebih panjang dari cuaca satu hari.',
          'Para guru mengingatkan agar dzauq tidak diperdagangkan menjadi cerita bombastis. Rasa yang sejati melunakkan akhlak dan menambah kerendahan hati. Bila seseorang makin sombong setelah bercerita rasa, tanda itu perlu diwaspadai dan dilaporkan kepada pembina, bukan disembunyikan. Kejujuran kepada pembina adalah jalan yang paling aman.',
        ],
      },
    ],
    related: ['hal', 'fana', 'hakikat', 'dzikir'],
  },
  {
    slug: 'dhuha',
    kind: 'glossary',
    title: 'Shalat Dhuha',
    titleAr: 'الضُّحَى',
    category: 'Amalan & Wirid',
    summary: 'Shalat Dhuha adalah sunnah pagi hari dua rakaat atau lebih; dalam ritme TQN ia mengisi jeda tenang setelah wirid pagi harian murid.',
    facts: [
      { label: 'Istilah Arab', value: 'الضُّحَى' },
      { label: 'Makna harfiah', value: 'Waktu pagi menjelang siang' },
      { label: 'Bentuk amalan', value: 'Shalat sunnah dua rakaat atau lebih' },
      { label: 'Terkait amalan', value: 'Wirid pagi dan istiqamah harian' },
    ],
    body: [
      {
        h: 'Shalat Pagi yang Menjaga Hati',
        p: [
          'Shalat Dhuha adalah shalat sunnah yang dikerjakan pada waktu dhuha, saat pagi sudah panas namun belum terlalu siang. Kewajiban terkecilnya dua rakaat, dan para ulama menyebut kebiasaan memperbanyaknya sebagai tanda hati yang rajin. Surah adh-Dhuha yang akrab dibaca pada waktunya menghiburkan: Allah tidak meninggalkan hamba-Nya. Shalat ini juga disebut shalat al-awwabin, shalat orang-orang yang kembali kepada Allah.',
        ],
      },
      {
        h: 'Jeda Tenang dalam Ritme Harian',
        p: [
          'Dalam ritme murid tarekat, Dhuha mengisi jeda yang tenang setelah amalan pagi. Sebagian majelis menyandingkannya dengan wirid pagi, sebelum ataupun sesudahnya. Dengan begitu, hari dimulai dari shalat, dzikir, dan niat kerja yang bersih. Amalan ini ringan di waktu, namun terasa dampaknya: hati yang dijaga pagi lebih awal lebih terjaga sepanjang hari. Murid yang berangkat kerja pagi dapat menjalaninya ringkas sebelum berangkat, tanpa mengorbankan kewajiban shalat subuh yang terlebih dahulu.',
          'Sebutan al-awwabin menegaskan esensinya. Bukan pencitraan amalan, melainkan pulang yang berulang-ulang. Murid yang istiqamah pada Dhuha belajar satu kunci hidup tarekat: amalan kecil yang terus, bukan besar yang sesekali.',
        ],
      },
    ],
    related: ['adzhan', 'awrad', 'dzikir', 'haula'],
  },
  {
    slug: 'digitalisasi-manuskrip',
    kind: 'glossary',
    title: 'Digitalisasi Manuskrip',
    category: 'Arsip & Digital',
    summary: 'Digitalisasi manuskrip memotret dan memindai naskah lama pesantren menjadi arsip digital agar khazanah tarekat Nusantara terjaga dan terbuka untuk riset.',
    facts: [
      { label: 'Kategori platform', value: 'Arsip & Digital' },
      { label: 'Bentuk kerja', value: 'Pemotretan atau pemindaian naskah lama' },
      { label: 'Manfaat', value: 'Preservasi, akses riset, dan dokumentasi' },
      { label: 'Terkait', value: 'Arsip foto dan hak cipta arsip' },
    ],
    body: [
      {
        h: 'Menyelamatkan Naskah Sebelum Terlambat',
        p: [
          'Digitalisasi manuskrip adalah pekerjaan mengubah naskah lama menjadi berkas digital: dipotret atau dipindai halaman demi halaman, diberi keterangan, lalu disimpan dalam arsip yang tertata. Tujuannya ganda: menjaga naskah dari kerusakan dan membuka akses bagi pembaca yang tidak mungkin datang ke tempat simpannya. Naskah yang telah dipindaikan dapat dibaca tanpa harus menyentuh kertas aslinya.',
        ],
      },
      {
        h: 'Khazanah Pegon yang Menunggu Diteliti',
        p: [
          'Naskah pesantren Nusantara, termasuk kitab-kitab pegon berbahasa Melayu, Sunda, dan Jawa, menyimpan banyak pengetahuan tarekat yang belum sepenuhnya diteliti. Digitalisasi menyelamatkan khazanah ini sebelum kertas rapuh dan tinta pudar mengambil alih. Hasil pemindaian juga memudahkan penelitian, sebab teks dapat diperbesar, disalin, dan disilangkan dengan sumber lain. Penelusuran yang dulu butuh perjalanan panjang kini bisa dimulai dari satu berkas.',
          'Digitalisasi yang baik mencantumkan asal naskah, kepemilikan koleksi, dan izin penggunaannya. Tanpa keterangan itu, berkas digital kehilangan nilai historisnya dan mudah dipakai sembarangan. Karena itu kerja digitalisasi selalu berjalan bersama kerja mendokumentasi, bukan sekadar memotret cepat. Hasil akhirnya adalah arsip yang bermakna, bukan sekadar gambar.',
        ],
      },
    ],
    related: ['arsip-foto', 'gandul', 'hak-cipta-arsip', 'buku-sejarah-tarekat'],
  },
  {
    slug: 'dzikir',
    kind: 'glossary',
    title: 'Dzikir',
    titleAr: 'ذِكْر',
    category: 'Amalan & Wirid',
    summary: 'Dzikir berarti mengingat Allah dengan hati dan lisan; dalam TQN Qodiriah Naqsyabandiyah ia menjadi nadi wiridian, dari dzikir jahar hingga dzikir khafi.',
    facts: [
      { label: 'Istilah Arab', value: 'ذِكْر' },
      { label: 'Makna harfiah', value: 'Mengingat, menyebut' },
      { label: 'Bentuk utama', value: 'Jahar (bersuara) dan khafi (pendiam)' },
      { label: 'Ruang dalam TQN', value: 'Nadi wiridian majelis dan wirid pribadi' },
    ],
    body: [
      {
        h: 'Makna Bahasa dan Tempatnya dalam Syariat',
        p: [
          "Dzikir berasal dari bahasa Arab yang berarti mengingat dan menyebut. Dalam Al-Qur'an, kata ini dipakai luas, antara lain dalam firman yang menyebut bahwa dengan mengingat Allah hati menjadi tenteram. Dzikir demikian bukan sekadar gerak bibir, melainkan kehadiran hati yang menyebut Allah sambil melupakan lalai. Sebab itu shalat disebut dzikir, dan setiap amalan yang diiringi kesadaran Allah bernilai dzikir.",
          "Para ulama membagi dzikir menjadi dzikir jahar, yang diucapkan dengan suara sehingga terdengar, dan dzikir khafi, yang dijalanikan pendiam di dalam hati. Keduanya dijalankan para sahabat dan dinukil dalam riwayat-riwayat yang sahih. Tarekat-tarekat kemudian berbeda penekanan: sebagian menonjolkan yang bersuara, sebagian menonjolkan yang pendiam. Perbedaan ini masuk wilayah corak, bukan pertentangan kebenaran.",
        ],
      },
      {
        h: 'Dzikir sebagai Nadi TQN Qodiriah Naqsyabandiyah',
        p: [
          'TQN Qodiriah Naqsyabandiyah menggabungkan keduanya secara terukur. Dari jalur Qadiriyyah ia mewarisi kekayaan dzikir bersuara dalam majelis, dan dari jalur Naqsyabandiyah ia menjaga dzikir khafi yang pendiam. Kombinasi ini dijalankan melalui wiridian yang lafaz dan bilangannya dipegang dari mursyid. Murid tidak mengarang amalan; ia menerima, menjaga, dan menghidupi.',
        ],
      },
      {
        h: 'Adab dan Kejujuran',
        p: [
          'Adabnya juga dijaga. Dzikir dimulai dari amalan wajib syariat, dilakukan sesuai bimbingan, dan pengalaman batinnya tidak dipamerkan. Kemajuan murid diukur dari akhlak yang membaik, bukan dari kericuhan amalan atau cerita rasa. Pada akhirnya, dzikir adalah jalan pulang hati kepada Allah, dan pulang itu berlangsung seumur hidup, bukan sekali selesai.',
        ],
      },
    ],
    related: ['dzikir-jahar', 'dzikir-khafi', 'awrad', 'dzikir-lailahaillallah'],
  },
  {
    slug: 'dzikir-ahad',
    kind: 'glossary',
    title: 'Dzikir Ahad',
    titleAr: 'ذِكْر الأَحَد',
    category: 'Kebiasaan & Tradisi',
    summary: 'Dzikir Ahad adalah majelis wiridian pekanan hari Ahad di lingkungan tarekat; menjadi detak rutin pengajian, nasehat pembina, dan silaturahmi murid.',
    facts: [
      { label: 'Jenis istilah', value: 'Sebutan majelis dzikir pekanan' },
      { label: 'Waktu', value: 'Hari Ahad' },
      { label: 'Isi majelis', value: 'Wiridian bersama, pengajian, dan nasehat' },
      { label: 'Catatan', value: 'Jadwal dan bentuk beragam antar pesantren' },
    ],
    body: [
      {
        h: 'Majelis Pekanan yang Menyatukan',
        p: [
          'Dzikir Ahad adalah sebutan bagi majelis dzikir yang digelar pada hari Ahad, ketika banyak orang melonggarkan jadwal kerjanya. Majelis semacam ini menjadi detak pekanan komunitas tarekat. Isinya antara lain wiridian bersama, pengajian kitab, nasehat pembina, dan silaturahmi antar murid. Rangkaian itu menutup satu pekan dan membuka pekan baru dengan dzikir.',
        ],
      },
      {
        h: 'Dukungan yang Tidak Sendirian',
        p: [
          'Nilai terbesarnya ada pada kesinambungan. Murid yang kesulitan merawat wirid pribadi mendapat dukungan dari duduk bersama. Yang jauh dari pesantren dapat mengikuti majelis cabang di sekitarnya, dan Ahad juga menjadi pintu bagi pengunjung baru untuk mengenal suasana tarekat secara terbuka dan santun. Banyak perjalanan murid panjang dimulai dari satu undangan ke majelis Ahad.',
          'Bentuk dan jadwal Dzikir Ahad beragam antar pesantren dan majelis; halaman ini menampilkan pola umumnya. Yang sama dari semua bentuk: shalat fardhu berjalan dahulu, wiridian berlangsung tertib, dan majelis ditutup dengan doa serta bersalaman. Ketertiban kecil semacam ini yang diulang bertahun-tahun menjadi kekuatan majelis. Itu pula yang menjaga majelis tetap ramah bagi tamu.',
        ],
      },
    ],
    related: ['dzikir-berjamaah', 'dzikir', 'haul', 'cabang-ponpes'],
  },
  {
    slug: 'dzikir-berjamaah',
    kind: 'glossary',
    title: 'Dzikir Berjamaah',
    titleAr: 'ذِكْر بِالجَمَاعَة',
    category: 'Amalan & Wirid',
    summary: 'Dzikir berjamaah adalah wiridian bersama satu tempo di majelis TQN; suara serentak saling menguatkan murid dan menjaga tertib lafaz.',
    facts: [
      { label: 'Makna', value: 'Dzikir bersama dalam satu majelis' },
      { label: 'Bentuk', value: 'Wiridian bersama dengan tempo satu' },
      { label: 'Manfaat', value: 'Saling menguatkan dan menjaga tertib' },
      { label: 'Terkait', value: 'Wiridian majelis TQN' },
    ],
    body: [
      {
        h: 'Satu Tempo, Satu Majelis',
        p: [
          'Dzikir berjamaah adalah dzikir yang dijalankan bersama dalam satu majelis, dengan lafaz yang sama dan tempo yang satu. Suara yang serentak membawa manfaat yang sukar didapat sendirian. Murid yang datang dengan pikiran letih ikut terbawa, yang malas ikut terangkat, dan yang baru bergabung belajar tempo dari yang terampil. Majelis menjadi mesin yang menghidupkan anggotanya.',
        ],
      },
      {
        h: 'Tertib yang Dipandu Pembina',
        p: [
          'Majelis TQN menjadikan dzikir berjamaah sebagai wajah amalan yang paling tampak. Wiridian dipandu pembina agar tertib, jeda napas dijaga bersama, dan selesai wiridian diakhiri doa serta saling mendoakan. Keserentakan itu melatih satu hal yang dalam: hati yang terbiasa tidak sendirian lebih mudah tidak sombong. Yang dijaga bukan kecepatan, melainkan kehadiran.',
          'Tetapi majelis bukan pengganti wirid pribadi. Guru tarekat mengingatkan keduanya jalan berdampingan. Dzikir berjamaah menghidupkan kebersamaan pada waktu tertentu, dan wirid pribadi merawatnya di sela hari. Murid yang hanya mengandalkan majelis akan kering antara dua majelis; murid yang hanya sendirian mudah lelah sebelum waktunya. Keseimbangan itulah yang dijaga para pembina.',
        ],
      },
    ],
    related: ['dzikir-ahad', 'dzikir-jahar', 'dzikir', 'cabang-ponpes'],
  },
  {
    slug: 'dzikir-hu',
    kind: 'glossary',
    title: "Dzikir 'Hū'",
    titleAr: 'هُوَ',
    category: 'Amalan & Wirid',
    summary: "Dzikir 'Hū' menempatkan lafaz pendek berarti Dialah sebagai titik fokus wiridian TQN; padat, terukur, dan dijalankan sesuai bimbingan mursyid.",
    facts: [
      { label: 'Istilah Arab', value: 'هُوَ' },
      { label: 'Makna', value: 'Dialah; kata ganti bagi Allah' },
      { label: 'Ruang dalam TQN', value: 'Lafaz pendek dalam wiridian terbimbing' },
      { label: 'Catatan adab', value: 'Dijalanikan sesuai bimbingan mursyid' },
    ],
    body: [
      {
        h: 'Lafaz Pendek yang Padat',
        p: [
          "Lafaz Hū adalah kata ganti dia dalam bahasa Arab, yang oleh para sufi dipahami sebagai sebutan bagi Allah sebagaimana lafaz itu dipakai dalam Al-Qur'an untuk menyifatkan-Nya. Dzikir Hū meletakkan lafaz pendek itu sebagai titik fokus amalan: pendek, padat, dan mudah melekat di hati. Kesederhanaannya justru menjadi kekuatannya, sebab murid tidak sibuk menghafal panjang.",
        ],
      },
      {
        h: 'Dalam Wiridian TQN',
        p: [
          'Dalam wiridian TQN Qodiriah Naqsyabandiyah, lafaz Hū termasuk yang akrab diucapkan, terutama pada bagian wiridian yang khas. Tempo pendeknya memudahkan murid menjaga kesadaran: satu lafaz, satu tarikan napas, satu kehadiran. Murid baru pun dapat mengikutinya tanpa kehilangan arah. Di majelis, lafaz ini kerap terdengar serentak dan menjadi tanda yang dikenali murid-murid lama. Bila murid kelelahan pada wiridian yang panjang, lafaz pendek ini menjadi tempat pulang yang tidak berat namun tetap menyadarkan.',
          'Adabnya tetap dijaga: lafaz dan caranya mengikuti bimbingan mursyid, tidak dikarang sendiri. Dzikir pendek bukan berarti ringan. Yang dituntut justru kehadiran hati yang lebih padat, dan itu adalah latihan seumur wirid, bukan latihan sehari.',
        ],
      },
    ],
    related: ['dzikir-jahar', 'dzikir-khafi', 'dzikir', 'dzikir-lailahaillallah'],
  },
  {
    slug: 'dzikir-jahar',
    kind: 'glossary',
    title: 'Dzikir Jahar',
    titleAr: 'ذِكْر جَهْر',
    category: 'Amalan & Wirid',
    summary: 'Dzikir jahar adalah dzikir bersuara yang dikeraskan, warisan jalur Qadiriyyah dalam wiridian TQN; kerasnya suara dituntun adab dan kehadiran hati.',
    facts: [
      { label: 'Istilah Arab', value: 'ذِكْر جَهْر' },
      { label: 'Makna harfiah', value: 'Dzikir yang dikeraskan' },
      { label: 'Ciri', value: 'Diucapkan bersuara dalam majelis yang tertib' },
      { label: 'Ruang dalam TQN', value: 'Warisan jalur Qadiriyyah dalam wiridian' },
    ],
    body: [
      {
        h: 'Dzikir yang Dikeraskan',
        p: [
          'Dzikir jahar adalah dzikir yang diucapkan dengan suara terdengar. Bibir bergerak, napas mengalir, dan suara memenuhi majelis; dari situ ia disebut dzikir yang dikeraskan. Bentuk ini akrab dalam tradisi Qadiriyyah yang menonjolkan wiridian bersuara secara berjamaah. Di majelis, kerasnya suara dibingkai tertib: ada yang memandu, ada tempo, ada jeda.',
        ],
      },
      {
        h: 'Manfaat dan Jawaban atas Kritik',
        p: [
          'Para pengamat amalan ini menyebut manfaat khasnya. Suara menjaga dari mengantuk, tempo bersama menahan pikiran berkeliaran, dan jeda napas yang teratur membuat tubuh terlibat utuh. Kritik yang pernah disuarakan sebagian orang atas dzikir bersuara dijawab para ulama dengan catatan adab: tempat yang layak, waktu yang pantas, lafaz yang sahih, dan tidak mengganggu orang lain. Dengan rambu itu, dzikir jahar berdiri dalam tradisi yang panjang.',
          'Dalam TQN Qodiriah Naqsyabandiyah, dzikir jahar hidup berdampingan dengan dzikir khafi. Murid dibimbing agar kerasnya suara tidak menggantikan kehadiran hati. Tujuan akhirnya tetap dzikir yang hidup, bukan volume yang membesar. Kerasnya majelis ditinggalkan di majelis; pulangnya murid membawa hati yang tenang.',
        ],
      },
    ],
    related: ['dzikir-khafi', 'dzikir-berjamaah', 'dzikir-hu', 'dzikir'],
  },
  {
    slug: 'dzikir-khafi',
    kind: 'glossary',
    title: 'Dzikir Khafi',
    titleAr: 'ذِكْر خَفِي',
    category: 'Amalan & Wirid',
    summary: 'Dzikir khafi adalah dzikir pendiam di hati tanpa suara, warisan tradisi Naqsyabandiyah; dalam TQN ia berdampingan dengan dzikir jahar terbimbing mursyid.',
    facts: [
      { label: 'Istilah Arab', value: 'ذِكْر خَفِي' },
      { label: 'Makna harfiah', value: 'Dzikir tersembunyi; pendiam di hati' },
      { label: 'Ciri', value: 'Tidak bersuara; hadir dalam kesadaran' },
      { label: 'Ruang dalam TQN', value: 'Warisan jalur Naqsyabandiyah' },
    ],
    body: [
      {
        h: 'Dzikir yang Tersembunyi',
        p: [
          'Dzikir khafi adalah dzikir yang tidak bersuara: lafaz dijalanikan dalam hati, tanpa gerak bibir yang terdengar. Ia disebut tersembunyi karena tidak tampak pada orang luar. Yang terlihat hanyalah orang yang bekerja, berjalan, atau berbincang, sementara hatinya tetap menyebut Allah. Tradisi Naqsyabandiyah dikenal luas menonjolkan bentuk dzikir ini.',
        ],
      },
      {
        h: 'Melekat pada Keseharian',
        p: [
          'Kelebihan dzikir khafi adalah kemampuannya melekat pada keseharian. Murid dapat membawanya di pasar, di kendaraan, dan di meja kerja, tanpa menampakkan dan tanpa membebani. Bentuk ini juga menjadi ukuran kedewasaan amalan: ketika dzikir tidak lagi tergantung suasana tempat, ia mulai hidup. Namun kerendahan hati tetap dijaga, sebab yang tersembunyi bukan berarti yang lebih tinggi.',
          'Dalam TQN Qodiriah Naqsyabandiyah, dzikir khafi dijalanikan di bawah bimbingan mursyid, berdampingan dengan dzikir jahar. Keduanya bukan pilihan selera, melainkan bahan latihan yang diberikan sesuai ketentuan silsilah. Murid tidak menilai mana yang lebih tinggi; ia menjaga apa yang diberikan dan melaporkan keadaannya. Inilah dzikir yang dijaga tanpa suara, namun tampak lewat akhlak.',
        ],
      },
    ],
    related: ['dzikir-jahar', 'dzikir', 'bukhara-tarekat', 'dzikir-hu'],
  },
  {
    slug: 'dzikir-lailahaillallah',
    kind: 'glossary',
    title: 'Dzikir Lā Ilāha Illallāh',
    titleAr: 'لَا إِلَٰهَ إِلَّا اللَّه',
    category: 'Amalan & Wirid',
    summary: 'Dzikir Lā Ilāha Illallāh menghidupkan kalimat tauhid sebagai inti wiridian TQN: mengosongkan hati dari segala yang menyandingkan Allah, lalu mengisinya.',
    facts: [
      { label: 'Lafaz', value: 'Lā ilāha illallāh' },
      { label: 'Istilah Arab', value: 'لَا إِلَٰهَ إِلَّا اللَّه' },
      { label: 'Makna', value: 'Tiada tuhan selain Allah; kalimat tauhid' },
      { label: 'Ruang dalam TQN', value: 'Termasuk lafaz inti wiridian majelis' },
    ],
    body: [
      {
        h: 'Kalimat Tauhid sebagai Dzikir',
        p: [
          'Lā ilāha illallāh adalah kalimat tauhid: tiada tuhan yang berhak disembah kecuali Allah. Lafaz ini adalah inti pengakuan seorang muslim, sekaligus dzikir yang paling berat maknanya. Ketika diucapkan sebagai dzikir, ia bukan sekadar diulang, melainkan dihayati sebagai pernyataan bahwa tidak ada satu pun yang layak digantungkan hati selain Allah. Ringkasnya lafaz tidak mengurangi beratnya isi.',
        ],
      },
      {
        h: 'Gerak Hati dari Pengosongan ke Pengisian',
        p: [
          'Para guru tarekat menjelaskan getarannya. Bagian awal, lā ilāha, mengosongkan hati dari segala yang menyandingkan diri dengan Allah. Bagian akhir, illallāh, mengisinya dengan kehadiran-Nya. Gerak hati dari pengosongan ke pengisian itulah yang dilatih sepanjang jalur tarekat, dan kalimat ini merangkum seluruh gerak itu dalam empat kata.',
          'Dalam wiridian TQN, lafaz ini dijalanikan sesuai bilangan dan tempo dari mursyid, dalam bentuk jahar maupun khafi. Kesederhanaannya jangan menipu murid. Kalimat yang pendek itu memuat seluruh isi agama tauhid, sebab itu ia dijaga adabnya sebagaimana kitab besar dijaga adabnya. Murid yang jujur menjaga kalimat ini akan menjaga kalimat lain pula.',
        ],
      },
    ],
    related: ['dzikir', 'dzikir-hu', 'awrad', 'bilangan-zikir'],
  },
  {
    slug: 'fana',
    kind: 'glossary',
    title: "Fanā'",
    titleAr: 'فَنَاء',
    category: 'Kepercayaan & Maqamat',
    summary: "Fanā' berarti lenyapnya sifat tercela saat hati terbenam dalam dzikir Allah; bukan doktrin menyatu, melainkan buah rendah hati dalam jalur TQN.",
    facts: [
      { label: 'Istilah Arab', value: 'فَنَاء' },
      { label: 'Makna harfiah', value: 'Hilang; lenyap' },
      { label: 'Ruang dalam TQN', value: 'Lenyapnya sifat tercela saat tenggelam dalam dzikir' },
      { label: 'Batas akidah', value: 'Bukan penyatuan dengan Allah; ditolak Ahlussunnah' },
    ],
    body: [
      {
        h: 'Lenyapnya yang Buruk',
        p: [
          "Fanā' berarti hilang atau lenyap. Dalam tasawuf, istilah ini dipakai untuk keadaan ketika sifat-sifat nafsu, ujub, dan kepentingan diri terbenam dalam kehadiran dzikir kepada Allah, sehingga murid merasakan dirinya tidak lagi berpusat pada dirinya. Perlu langsung ditegaskan: fanā' bukan doktrin bahwa manusia menyatu menjadi Allah. Para ulama Ahlussunnah menolak pengertian semacam itu dengan tegas. Istilah pasangannya, baqa, menunjuk kehidupan baru yang tegak di atas taat dan kerendahan hati setelah yang buruk telah lenyap.",
        ],
      },
      {
        h: 'Bukan Penyatuan, Melainkan Penyerahan',
        p: [
          "Para guru menjelaskan fanā' secara sederhana: lenyapnya yang buruk untuk hidupnya yang baik. Ketika kesombongan lenyap, kerendahan hati hidup. Ketika riya lenyap, amalan yang jujur hidup. Fanā' yang benar malah membuat seseorang lebih rendah hati, lebih taat syariat, dan lebih berbudi kepada sesama.",
          'Dalam TQN, keadaan semacam ini tidak dikejar-kejar dan tidak dipamerkan. Ia terjadi di tangan Allah melalui dzikir yang berkelanjutan. Murid yang mengalaminya dianjurkan diam, bersyukur, dan kembali berwirid. Cerita pengalaman semacam ini dilaporkan kepada pembina, bukan dipanggungkan.',
        ],
      },
    ],
    related: ['dhawq', 'hakikat', 'hal', 'hulul'],
  },
  {
    slug: 'faqr',
    kind: 'glossary',
    title: 'Faqr',
    titleAr: 'فَقْر',
    category: 'Kepercayaan & Maqamat',
    summary: 'Faqr adalah merasa miskin di hadapan Allah, sikap batin sufi yang membuka kerendahan hati dan menyelamatkan murid tarekat dari sombong amalan.',
    facts: [
      { label: 'Istilah Arab', value: 'فَقْر' },
      { label: 'Makna harfiah', value: 'Kefakiran; tidak memiliki' },
      { label: 'Makna sufi', value: 'Merasa miskin di hadapan Allah' },
      { label: 'Terkait', value: "Zuhud dan merasa cukup (qanā'ah)" },
    ],
    body: [
      {
        h: 'Miskin yang Membuka Pintu',
        p: [
          'Faqr berarti fakir: tidak memiliki. Para sufi mengangkatnya menjadi sikap batin, yaitu merasa benar-benar miskin di hadapan Allah, tidak punya kekuatan dan kelebihan yang bisa dibanggakan. Kefakiran semacam ini bukan kemiskinan yang dipamerkan, melainkan kerendahan yang membuka pintu penolongan. Orang yang merasa kekurangan akan sungguh-sungguh meminta, dan Allah Maha Kaya lagi Maha Memberi.',
        ],
      },
      {
        h: 'Faqr Bukan Kemalasan',
        p: [
          'Ada riwayat yang dinukil tentang kebanggaan Rasulullah saw atas kefakiran, meskipun derajat kebenarannya diperdebatkan para ahli hadis. Yang jelas, semangatnya sesuai dengan banyak ayat yang memuliakan orang yang merasa kekurangan dirinya. Faqr juga berbeda dari kemalasan: orang yang faqr batinnya justru bekerja lebih tekun, sebab ia tidak menyandarkan hati pada hasil. Ia berusaha sungguh-sungguh sambil mengaku bahwa hasil berada di tangan Allah.',
          'Dalam jalur tarekat, faqr menjadi penawar ujub. Murid yang merasa paling rajin berwirid diingatkan bahwa segala amalannya adalah kebutuhan, bukan prestasi. Ia fakir yang sedang ditolong, bukan kaya yang sedang berprestasi. Kesadaran itu menjaga dzikir tetap rendah hati meskipun sudah bertahun-tahun dijalankan.',
        ],
      },
    ],
    related: ['fana', 'hilm', 'himmah', 'hakikat'],
  },
  {
    slug: 'firasa',
    kind: 'glossary',
    title: 'Firāsah',
    titleAr: 'فِرَاسَة',
    category: 'Kepercayaan & Maqamat',
    summary: 'Firāsah adalah ketajaman batin membaca keadaan seseorang; buah dzikir dan pengalaman pembina TQN, dipakai untuk membela, bukan menghakimi.',
    facts: [
      { label: 'Istilah Arab', value: 'فِرَاسَة' },
      { label: 'Makna harfiah', value: 'Ketajaman membaca keadaan' },
      { label: 'Riwayat melekat', value: 'Nasihat menjaga firasat orang beriman' },
      { label: 'Adab dalam TQN', value: 'Dipakai untuk membimbing, bukan menghakimi' },
    ],
    body: [
      {
        h: 'Membaca Keadaan dengan Cahaya',
        p: [
          'Firāsah berarti ketajaman membaca keadaan, sebagaimana ahli membaca tanah. Dalam khazanah sufi, firasat adalah daya menangkap kenyataan seseorang dari pancaran akhlaknya: air muka, cara bicara, dan kehadiran hatinya. Nasihat yang dinukil antara lain menjaga firasat orang beriman, sebab ia membaca dengan cahaya dari Allah. Karena itu firasat bukan tebakan kosong, melainkan pemahaman yang tumbuh dari kebersihan hati.',
        ],
      },
      {
        h: 'Buah Dzikir dan Pengasuhan',
        p: [
          'Di jalur tarekat, firasat sering melekat pada pembina yang sudah lama mengasuh murid: ia peka terhadap keadaan yang tidak diucapkan. Kemampuan ini dipahami sebagai buah dzikir dan pengalaman mengasuh, bukan sihir ataupun ramalan. Karena itu ia tidak dijual, tidak dipamerkan, dan tidak dijadikan alat pencarian nama. Pembina yang peka justru makin hati-hati bicara.',
          'Adab yang ditegaskan guru-guru TQN ada dua. Murid tidak menggantungkan imannya pada firasat siapa pun, sebab akidah berdiri pada tauhid, bukan pada karisma manusia. Dan firasat yang benar dipakai untuk membela dan membimbing, bukan untuk menjatuhkan. Firasat yang melunakkan orang adalah firasat; yang menjatuhkan hanya kecurigaan.',
        ],
      },
    ],
    related: ['dhawq', 'hal', 'hilm', 'ghauts'],
  },
  {
    slug: 'gandul',
    kind: 'glossary',
    title: 'Gandul',
    category: 'Kitab & Naskah',
    summary: 'Gandul merujuk tradisi salin-menyalin naskah pegon di pesantren; manuskripnya menyimpan wiridian, silsilah, dan qasidah warisan tarekat Nusantara.',
    facts: [
      { label: 'Kategori', value: 'Tradisi tulis pesantren' },
      { label: 'Bentuk', value: 'Naskah salinan, lazimnya aksara pegon' },
      { label: 'Isi lazim', value: 'Tasawuf, wiridian, silsilah, dan qasidah' },
      { label: 'Terkait', value: 'Digitalisasi manuskrip' },
    ],
    body: [
      {
        h: 'Tradisi Menulis di Pesantren',
        p: [
          'Gandul adalah istilah yang dipakai di lingkungan pesantren untuk tradisi salin-menyalin naskah: kitab dan wiridian yang diwariskan lewat tulisan tangan. Salinan lazim ditulis dengan aksara pegon, yaitu huruf Arab yang dipakai untuk menulis bahasa Melayu, Sunda, atau Jawa. Sebelum buku cetak merata, tradisi inilah pembawa ilmu dari guru kepada murid. Salinan menjadi barang berharga yang dijaga turun-temurun.',
        ],
      },
      {
        h: 'Naskah yang Hidup',
        p: [
          'Manuskrip hasil tradisi ini menyimpan lapisan sejarah yang berharga: catatan silsilah, syair qasidah, catatan amalan, hingga doa-doa majelis. Karena ditulis tangan, teksnya hidup. Murid yang menyalin kitab gurunya biasanya membaca ulang, memahami, dan menandai bagian yang tidak jelas. Salinan sekaligus menjadi proses belajar, bukan sekadar pemindahan tulisan.',
          'Naskah lama itu rapuh: kertas menguning, tinta pudar, dan pemiliknya berganti generasi. Karena itu pekerjaan inventarisasi, dokumentasi, dan digitalisasi naskah pesantren penting dikerjakan sebelum keterangan sumbernya hilang. Halaman-halaman seperti ini memang bukan keindahan, melainkan pekerjaan menyelamatkan warisan. Setiap halaman yang terselamatkan adalah satu pintu yang tetap terbuka bagi generasi berikutnya.',
        ],
      },
    ],
    related: ['buku-sejarah-tarekat', 'digitalisasi-manuskrip', 'barzanji'],
  },
  {
    slug: 'ghauts',
    kind: 'glossary',
    title: 'Ghauts',
    titleAr: 'غَوْث',
    category: 'Kepercayaan & Maqamat',
    summary: 'Ghauts berarti pertolongan; dalam tradisi sufi menjadi gelar wali tinggi yang dijelaskan beragam dalam riwayat, dipegang TQN dalam batas adab tauhid.',
    facts: [
      { label: 'Istilah Arab', value: 'غَوْث' },
      { label: 'Makna harfiah', value: 'Pertolongan; dipanggil untuk ditolong' },
      { label: 'Ruang pembahasan', value: 'Gelar wali tinggi dalam sebagian tradisi sufi' },
      { label: 'Catatan', value: 'Detail derajat beragam antar riwayat sufi' },
    ],
    body: [
      {
        h: 'Sebutan Pertolongan',
        p: [
          'Ghawth berarti pertolongan. Sebagai istilah sufi, sebagian tradisi memakainya untuk gelar wali pada derajat tertinggi, yaitu orang yang menjadi penolong tempat umat memohon kepada Allah. Lafaz panggilan untuk ditolong masuk ke dalam doa-doa masyarakat tarekat di banyak daerah. Sebutan ini menggambarkan kerinduan umat kepada penolong yang baik.',
        ],
      },
      {
        h: 'Dipegang dalam Batas Tauhid',
        p: [
          'Perlu dipahami dengan tenang: derajat wilayah dan gelar ghawth dijelaskan berbeda-beda dalam riwayat-riwayat sufi, dan tidak menjadi bagian rukun akidah. Yang disepakati para ulama Ahlussunnah, Allah saja yang memberi pertolongan. Manusia yang baik dapat menjadi wasilah doa dan teladan, tanpa penyekutuan sedikit pun. Riwayat yang beragam itu dibaca dengan hormat tanpa dijadikan pegangan akidah. Sejarah menunjukkan sebutan semacam ini melekat pada tokoh yang hidupnya menjadi tempat bertanya masyarakat di sekitarnya.',
          'Bagi murid TQN, istilah ini dipegang dalam batas adab. Mohon pertolongan diarahkan kepada Allah, sementara para guru dihormati sebagai pembina dan penyambung amalan. Pemahaman yang tegak di jalur tauhid sekaligus hangat dalam tradisi itulah yang dijaga majelis dzikir.',
        ],
      },
    ],
    related: ['haul-surialaya', 'grebeg', 'fana', 'himmah'],
  },
  {
    slug: 'graf-pengetahuan',
    kind: 'glossary',
    title: 'Graf Pengetahuan',
    category: 'Arsip & Digital',
    summary: 'Graf pengetahuan 165.web.id menghubungkan istilah, tokoh, dan amalan TQN menjadi jaringan tautan agar penelusuran khazanah tarekat mudah ditelusuri.',
    facts: [
      { label: 'Kategori platform', value: 'Fitur 165.web.id' },
      { label: 'Bentuk', value: 'Jaringan tautan antar entri' },
      { label: 'Manfaat', value: 'Menelusuri keterkaitan istilah, tokoh, dan amalan' },
      { label: 'Terkait', value: 'Glosarium dan arsip digital' },
    ],
    body: [
      {
        h: 'Peta Antar Halaman',
        p: [
          'Graf pengetahuan adalah fitur platform 165.web.id yang menghubungkan entri-entri menjadi jaringan: istilah terhubung dengan tokoh, tokoh dengan tempat, tempat dengan amalan. Alih-alih halaman yang berdiri sendiri-sendiri, pembaca dapat melompat dari satu istilah ke istilah lain yang benar-benar berkaitan. Tautan itu dipilih dari daftar terkait pada tiap entri.',
        ],
      },
      {
        h: 'Cocok untuk Khazanah yang Sarat Keterkaitan',
        p: [
          'Fitur ini cocok untuk khazanah tarekat yang memang sarat keterkaitan. Silsilah guru-murid, jaringan pesantren cabang, dan keluarga istilah dzikir lebih mudah dipahami bila digambarkan sebagai peta, bukan daftar panjang. Setiap hubungan ditanam dari isi entri itu sendiri, sehingga yang tampil bukan karangan sistem, melainkan hasil penyuntingan konten. Hubungan yang tidak yakin tidak dipaksakan.',
          'Bagi peneliti, graf pengetahuan mempercepat pemetaan tema. Bagi murid baru, ia menjadi pemandu yang tidak menakutkan. Platform menampilkan hubungan, sedangkan penilaian tetap berada di tangan pembaca yang teliti. Graf boleh berubah ketika isi berubah, dan itu bagian dari kejujuran platform. Murid dapat mulai dari satu istilah dan pulang dengan peta yang utuh.',
        ],
      },
    ],
    related: ['dark-mode', 'digitalisasi-manuskrip', 'arsip-audio'],
  },
  {
    slug: 'grebeg',
    kind: 'glossary',
    title: 'Grebeg',
    category: 'Kebiasaan & Tradisi',
    summary: 'Grebeg adalah perayaan besar haul di lingkungan tarekat: prosesi, wiridian massal, dan maulid menjadi wujud penghormatan kepada guru besar TQN.',
    facts: [
      { label: 'Jenis istilah', value: 'Sebutan perayaan besar' },
      { label: 'Ruang', value: 'Haul besar dan peringatan pesantren' },
      { label: 'Isi umum', value: 'Prosesi, wiridian massal, maulid, dan santunan' },
      { label: 'Catatan', value: 'Bentuk beragam antar daerah dan majelis' },
    ],
    body: [
      {
        h: 'Perayaan Besar yang Menyolok',
        p: [
          'Grebeg adalah sebutan perayaan besar yang menyolok: prosesi ramai, kerumunan murid, dan rangkaian amalan massal. Kata ini melekat pada tradisi keraton Jawa sejak lama, lalu dipakai juga untuk perayaan besar di lingkungan pesantren, terutama haul yang mengundang ribuan murid dari berbagai daerah. Semarakan itu menjadi tanda kebesaran peringatan yang digelar.',
        ],
      },
      {
        h: 'Ramai, Namun Tetap Majelis',
        p: [
          'Grebeg dalam lingkungan tarekat bukan pesta hiburan. Isinya tetap bacaan: Barzanji, wiridian bersama, doa, serta pemberian bagi para tamu dan pendatang. Kesemarakan prosesi melambangkan penghormatan kepada guru besar dan kegembiraan menjadi bagian dari majelis dzikir yang panjang usianya. Pengunjung baru biasanya mengenal tarekat pertama kali dari perayaan besar seperti ini. Pengelolaan tempat duduk, pemberian makan, dan ketertiban dikerjakan relawan murid, menjadi latihan berkhidmat yang tidak terlihat di panggung.',
          'Bentuk grebeg beragam antar tempat, dan keterangannya perlu dicek pada sumber masing-masing majelis. Yang sama di seluruh bentuk: prosesi bergerak menuju majelis, bukan menjauh dari dzikir. Ramai yang tidak berujung pada amalan bukanlah grebeg dalam pengertian tarekat.',
        ],
      },
    ],
    related: ['haul', 'haul-surialaya', 'barzanji', 'baju-tarekat'],
  },
  {
    slug: 'hak-cipta-arsip',
    kind: 'glossary',
    title: 'Hak Cipta Arsip',
    category: 'Arsip & Digital',
    summary: 'Hak cipta arsip mengatur kepemilikan dan izin pakai foto, rekaman, serta pindaian naskah TQN; 165.web.id menerapkan kredit sumber dan permohonan izin.',
    facts: [
      { label: 'Kategori platform', value: 'Arsip & Digital' },
      { label: 'Isi aturan', value: 'Kepemilikan, izin pakai, dan kredit sumber' },
      { label: 'Prinsip', value: 'Hormat kepada pemilik koleksi' },
      { label: 'Terkait', value: 'Arsip audio dan arsip foto' },
    ],
    body: [
      {
        h: 'Kepemilikan yang Dihormati',
        p: [
          'Hak cipta arsip menyangkut siapa pemilik sebuah koleksi dan sejauh mana ia boleh dipakai ulang. Foto, rekaman suara, dan pindaian naskah tidak otomatis bebas pakai hanya karena beredar di internet. Di balik setiap arsip ada orang, keluarga, atau lembaga yang menyimpan dan menjaganya bertahun-tahun. Menghormati mereka adalah bagian dari adab ilmu.',
        ],
      },
      {
        h: 'Disiplin di 165.web.id',
        p: [
          'Platform 165.web.id menangani hal ini dengan disiplin. Setiap arsip mencantumkan sumber dan kredit, permohonan izin diajukan kepada pemilik koleksi, dan penggunaan dibatasi sesuai perjanjian. Murid atau peneliti yang hendak memakai ulang arsip dari platform ini diarahkan menghormati ketentuan yang sama. Kredit tidak boleh dipotong, dan kutipan tidak boleh dilepas dari konteksnya. Koleksi milik keluarga atau yayasan diperlakukan lebih hati-hati lagi, sebab bukan semuanya siap dibagikan kepada publik.',
          'Etika arsip sejalan dengan adab tarekat: menghormati amanah orang lain. Arsip yang dipakai dengan izin menjaga kepercayaan. Kepercayaan itulah yang membuat koleksi berikutnya terbuka untuk dibagikan, dan itulah modal paling mahal dalam pekerjaan arsip.',
        ],
      },
    ],
    related: ['arsip-audio', 'arsip-foto', 'digitalisasi-manuskrip'],
  },
  {
    slug: 'hakikat',
    kind: 'glossary',
    title: 'Hakikat',
    titleAr: 'حَقِيقَة',
    category: 'Kepercayaan & Maqamat',
    summary: 'Hakikat adalah kenyataan hakiki yang dituju jalur tarekat; dalam TQN ia berdiri di atas syariat dan dicapai lewat dzikir yang tertib dan berijazah.',
    facts: [
      { label: 'Istilah Arab', value: 'حَقِيقَة' },
      { label: 'Makna harfiah', value: 'Kenyataan hakiki; kebenaran yang mutlak' },
      { label: 'Rangkaian istilah', value: 'Syariat, tariqat, hakikat, makrifat' },
      { label: 'Posisi dalam TQN', value: 'Tujuan jalur, berdiri di atas syariat' },
    ],
    body: [
      {
        h: 'Kenyataan yang Sebenar-benarnya',
        p: [
          'Hakikat berarti kenyataan yang sebenar-benarnya. Dalam susunan istilah tasawuf yang terkenal, syariat adalah aturan ibadah, tariqat adalah jalan menempuhnya, hakikat adalah kenyataan yang ditemui, dan makrifat adalah pengenalan yang makin dalam kepada Allah. Keempatnya bukan tingkatan yang bertentangan, melainkan satu jalan yang bertingkat. Yang membedakan hanya kedalaman, bukan arah.',
        ],
      },
      {
        h: 'Hakikat Meneguhkan Syariat',
        p: [
          'Para ulama mengingatkan orang yang mengaku berhakikat tanpa syariat: itu kekeliruan yang berbahaya. Hakikat justru memperkuat ketaatan; orang yang mengenal Allah lebih dalam makin teguh menjalankan perintah-Nya. Unsur lahiriah dan batiniah tidak dipertentangkan dalam jalur yang lurus. Sejarah membuktikan para sufi besar justru teladan keteguhan shalat dan syariat.',
          'Dalam TQN Qodiriah Naqsyabandiyah, hakikat dikejar dengan cara yang paling tertib: wirid yang dipegang dari mursyid, syariat yang dijaga penuh, dan akhlak yang dirawat. Jalan yang menjanjikan hakikat tanpa dzikir dan tanpa syariat adalah jalan yang menipu. Murid tidak bergegas menuju kata-kata besar; ia setia pada langkah kecil yang diizinkan. Langkah kecil yang setia itulah jalan terdekat.',
        ],
      },
    ],
    related: ['dhawq', 'fana', 'ihsan', 'dzikir'],
  },
  {
    slug: 'hal',
    kind: 'glossary',
    title: 'Hāl',
    titleAr: 'حَال',
    category: 'Kepercayaan & Maqamat',
    summary: 'Hāl adalah keadaan batin yang datang dan pergi dalam dzikir; berbeda dari maqām yang menetap, ia disambut syukur tanpa dipamer-pamerkan.',
    facts: [
      { label: 'Istilah Arab', value: 'حَال' },
      { label: 'Makna harfiah', value: 'Keadaan; suasana batin' },
      { label: 'Lawan istilah', value: 'Maqām, tingkatan yang menetap' },
      { label: 'Adab', value: 'Tidak dipamerkan, tidak dijadikan ukuran orang lain' },
    ],
    body: [
      {
        h: 'Keadaan yang Datang dan Pergi',
        p: [
          'Hāl berarti keadaan. Para sufi memakainya untuk suasana batin yang datang dan pergi: hati yang sekonyong tenteram, khusyuk yang mengalir, atau haru yang tak terjelasa dalam dzikir. Ciri hāl adalah sifatnya sementara. Ia hadir sebagai hadiah, bukan milik yang disimpan.',
        ],
      },
      {
        h: 'Hāl dan Maqām',
        p: [
          'Hāl berbeda dari maqām. Maqām adalah tingkatan yang sudah menetap karena latihan panjang, sedangkan hāl datang sesuai kehendak Allah. Murid yang mendapat hāl dianjurkan bersyukur dan kembali berwirid. Murid yang tidak mendapatkannya dianjurkan sabar, sebab yang menetap justru kewajiban: wirid tetap dijalanikan datangnya hāl atau tidak.',
          'Guru tarekat mengingatkan adab terhadap hāl. Keadaan itu tidak dipamerkan, tidak dilebih-lebihkan, dan tidak dijadikan tongkat pengukur terhadap murid lain. Yang menilai keadaan batin adalah Allah; tugas manusia menjaga amalan. Murid yang tenang terhadap hāl-nya sendiri justru sedang belajar maqām yang sejati. Adab semacam ini diajarkan di setiap majelis. Sebab itu murid tidak mengukur kemajuan dari hāl yang baru sehari lewat, melainkan dari keteguhan wirid dan akhlaknya dalam berhari-hari.',
        ],
      },
    ],
    related: ['dhawq', 'fana', 'hakikat', 'dzikir'],
  },
  {
    slug: 'haram-zikir',
    kind: 'glossary',
    title: 'Zikir yang Dilarang',
    category: 'Amalan & Wirid',
    summary: 'Haram zikir dalam adab tarekat berarti amalan yang belum diizinkan mursyid, seperti wirid tanpa ijazah; aturan ini melindungi tertib dan keselamatan murid.',
    facts: [
      { label: 'Jenis istilah', value: 'Istilah adab jalur tarekat' },
      { label: 'Maksud', value: 'Amalan zikir yang belum diizinkan mursyid' },
      { label: 'Contoh', value: 'Wirid tanpa ijazah; asyghal di luar bimbingan' },
      { label: 'Catatan', value: 'Berbeda dari haram menurut fikih umum' },
    ],
    body: [
      {
        h: 'Istilah Adab Jalur Tarekat',
        p: [
          'Di dalam adab tarekat ada amalan zikir yang disebut haram bagi murid, yaitu amalan yang belum diizinkan gurunya. Contohnya wirid yang diambil tanpa ijazah, asyghal yang dijalankan di luar bimbingan, atau bilangan yang ditambah sendiri. Kata haram di sini dipakai dalam bahasa jalur tarekat tentang tertib amalan bimbingan, bukan penetapan fikih terhadap lafaz dzikir pada umumnya. Perbedaan makna ini perlu dijelaskan agar tidak terjadi salah paham.',
        ],
      },
      {
        h: 'Melindungi, Bukan Membatasi',
        p: [
          'Logikanya mudah dipahami. Amalan jalur tarekat diterima melalui silsilah yang bertanggung jawab, dan mursyid mengetahui kapasitas muridnya sehingga menyusun latihan bertahap. Murid yang mengambil sendiri amalan berat berisiko terluka batin. Yang mengubah lafaz dan bilangan memindahkan amalan dari silsilahnya. Keduanya ditahan bukan karena iri, melainkan karena sayang.',
          'Adab ini justru melindungi murid. Dzikir yang diizinkan dan dijalanikan tertib akan tumbuh aman, sedangkan yang diambil sendiri cepat membesar-besarkan pengalaman. Para guru menegaskan pesannya: laporkan keadaanmu kepada Abah, biarlah amalanmu bertambah pada waktunya. Jalur yang aman lebih berharga daripada jalur yang cepat.',
        ],
      },
    ],
    related: ['adab-murid', 'awrad', 'ashghal', 'amanah-tarekat'],
  },
  {
    slug: 'haramain',
    kind: 'glossary',
    title: 'Haramain',
    titleAr: 'الْحَرَمَيْن',
    category: 'Sejarah & Tokoh',
    summary: 'Haramain berarti dua tanah suci, Makkah dan Madinah; bagi tarekat Nusantara menjadi tempat haji, belajar, dan ijazah silsilah yang terpelihara.',
    facts: [
      { label: 'Istilah Arab', value: 'الْحَرَمَيْن' },
      { label: 'Makna harfiah', value: 'Dua tanah suci' },
      { label: 'Yang dimaksud', value: 'Makkah al-Mukarramah dan Madinah al-Munawwarah' },
      { label: 'Terkait tarekat', value: 'Tempat haji, belajar, dan ijazah' },
    ],
    body: [
      {
        h: 'Dua Tanah Suci',
        p: [
          'Haramain berarti dua tanah suci, sebutan bagi Makkah al-Mukarramah dan Madinah al-Munawwarah. Di Makkah berdiri Baitullah yang menjadi kiblat shalat dan tujuan haji. Di Madinah beristirahat Rasulullah saw di sisi Masjid Nabawi. Dua kota ini menjadi arah kerinduan muslim sepanjang masa, dan namanya selalu memanggil rindu.',
        ],
      },
      {
        h: 'Perjanjian Ilmu di Haramain',
        p: [
          'Bagi dunia tarekat, Haramain punya peran sejarah yang besar. Banyak ulama Nusantara menempuh perjalanan panjang untuk haji sekaligus belajar. Di sanalah ijazah-ijazah tarekat diambil dari para syekh Haramain, kitab-kitab disalin, dan silsilah tersambung. Jejak perjalanan itu masih terbaca dalam silsilah tarekat yang dipegang majelis-majelis Indonesia. Banyak murid TQN mengenang perjalanan pertama mereka ke dua tanah suci sebagai titik perubahan yang tidak mudah dilupakan.',
          'Sampai kini kunjungan ke Haramain menjadi momentum pengajian murid tarekat: berhaji, ziarah, dan menimba amalan dari guru yang sah. Perjalanan itu melatih satu pendidikan yang dalam. Meninggalkan tanah air demi menjemput warisan yang dapat dipertanggungjawabkan adalah bagian dari harga ilmu yang dipegang.',
        ],
      },
    ],
    related: ['abdulkarim-banten', 'herat-tarekat', 'bukhara-tarekat', 'haul'],
  },
  {
    slug: 'haul',
    kind: 'glossary',
    title: 'Haul',
    titleAr: 'حَوْل',
    category: 'Kebiasaan & Tradisi',
    summary: 'Haul adalah peringatan tahunan wafat ulama atau wali: maulid, tahlil, dan wiridian besar yang menghidupkan warisan guru tarekat Nusantara.',
    facts: [
      { label: 'Istilah Arab', value: 'حَوْل' },
      { label: 'Makna harfiah', value: 'Perputaran; satu putaran tahun' },
      { label: 'Dipakai untuk', value: 'Peringatan tahunan wafat ulama dan wali' },
      { label: 'Isi lazim', value: 'Maulid, tahlil, wiridian, dan santunan' },
    ],
    body: [
      {
        h: 'Satu Putaran Tahun, Satu Peringatan',
        p: [
          'Haul secara harfiah berarti perputaran, dan dalam kebiasaan Nusantara dipakai untuk peringatan tahunan wafatnya seorang ulama atau wali. Setiap putaran tahun, murid dan pengagum berkumpul membaca maulid, tahlil, dan doa. Mereka menghidupkan kembali nasehat guru yang telah wafat sambil mendoakannya. Peringatan ini berulang setiap tahun tanpa henti di banyak tempat.',
        ],
      },
      {
        h: 'Isi dan Batasnya',
        p: [
          'Haul bukan ritual menyembah yang wafat, melainkan penghormatan dan doa: memohonkan ampun untuknya, merangkai kebaikan atasnya, dan mengikuti jejak baiknya. Para ulama Nusantara menjadikannya ajang pengajian besar. Ribuan orang berkumpul, dan banyak di antara mereka baru pertama kali mengenal tarekat dari perayaan ini. Haul dengan demikian sekaligus menjadi pintu dakwah yang ramah.',
          'Waktu pelaksanaan haul berbeda antar pesantren mengikuti tanggal wafat guru masing-masing. Karena itu keterangan tanggal perlu dicek pada pengumuman majelis, bukan dihafal sebagai satu angka tunggal. Yang sama di seluruh haul: bacaan untuk Allah, doa untuk guru, dan santunan untuk tamu. Sebab haul yang baik menanggung tiga amanah itu sekaligus.',
        ],
      },
    ],
    related: ['haul-surialaya', 'grebeg', 'barzanji', 'idulfitri-tarekat'],
  },
  {
    slug: 'haul-surialaya',
    kind: 'glossary',
    title: 'Haul Suryalaya',
    category: 'Kebiasaan & Tradisi',
    summary: 'Haul Surialaya adalah peringatan tahunan TQN di Pesantren Surialaya Tasikmalaya: wiridian massal, Barzanji, dan tahlil para guru besar tarekat.',
    facts: [
      { label: 'Lokasi', value: 'Pesantren Surialaya, Tasikmalaya, Jawa Barat' },
      { label: 'Jenis', value: 'Haul tahunan TQN Qodiriah Naqsyabandiyah' },
      { label: 'Isi', value: 'Barzanji, maulid, tahlil, wiridian massal' },
      { label: 'Catatan', value: 'Tanggal dan acara tiap tahun diumumkan majelis' },
    ],
    body: [
      {
        h: 'Peringatan Tahunan di Surialaya',
        p: [
          'Haul Surialaya adalah peringatan tahunan yang digelar Pesantren Surialaya di Tasikmalaya, Jawa Barat, pusat Tarekat Qodiriah Naqsyabandiyah yang dikenal luas. Tiap putaran tahun, murid dari berbagai daerah memenuhi halaman pesantren. Rombongan berdatangan, tenda berdiri, dan wiridian massal bergema dari pagi hingga malam. Suasananya menjadi gambaran hidupnya tarekat di Nusantara.',
        ],
      },
      {
        h: 'Isi yang Tetap pada Jalurnya',
        p: [
          'Isi haul tetap pada jalurnya. Ada pembacaan Barzanji dan maulid, tahlil untuk para guru besar TQN yang telah wafat, wiridian bersama, nasehat pembina, serta doa untuk umat. Bagi banyak murid, haul adalah perjalanan tahunan yang menegarkan. Kembali ke tanah gurunya, berkenalan antar cabang, dan menyegarkan niat berwirid menjadi buah yang dibawa pulang. Relawan dan panitia bekerja berhari-hari sebelum pelaksanaan, sehingga haul juga menjadi latihan khidmat bagi para penyelenggaranya.',
          'Tanggal dan susunan acara haul diumumkan majelis setiap tahunnya, sehingga keterangan terbaik adalah pengumuman resmi pesantren. Halaman ini menampilkan gambaran umumnya tanpa menetapkan angka yang berubah-ubah. Menghormati pengumuman resmi juga bagian dari adab murid terhadap majelisnya.',
        ],
      },
    ],
    related: ['haul', 'grebeg', 'baju-tarekat', 'barzanji'],
  },
  {
    slug: 'haula',
    kind: 'glossary',
    title: "Haulā'",
    titleAr: 'حَوْلَ',
    category: 'Amalan & Wirid',
    summary: 'Haulā adalah lafaz daya dan perubahan dalam kalimat Lā hawla wa lā quwwata illā billāh, pengakuan bahwa semua daya hanya milik Allah.',
    facts: [
      { label: 'Istilah Arab', value: 'حَوْلَ' },
      { label: 'Makna harfiah', value: 'Daya; perubahan keadaan' },
      { label: 'Lafaz akrab', value: 'Lā hawla wa lā quwwata illā billāh' },
      { label: 'Ruang dalam TQN', value: 'Termasuk lafaz wiridian dan doa harian' },
    ],
    body: [
      {
        h: 'Daya yang Hanya Milik Allah',
        p: [
          'Hawla berasal dari akar kata yang bermakna berpaling dan mengubah keadaan. Lafaz ini paling dikenal lewat kalimat Lā hawla wa lā quwwata illā billāh: tiada daya dan tiada kekuatan kecuali dengan Allah. Kalimat pendek ini sering disebut mahkota surga dalam riwayat yang dinukil. Ia menjadi doa pegangan ketika tenaga terasa habis.',
        ],
      },
      {
        h: 'Dua Arah Pengakuan',
        p: [
          'Maknanya menempuh dua arah sekaligus. Hawla menyentuh daya mengubah keadaan, sedangkan quwwah menyentuh kekuatan menahan dan menetapkan; keduanya dinyatakan hanya milik Allah. Ketika murid mengucapkannya, ia sedang mengaku bahwa perubahan hati bukan prestasi sendirian, melainkan pertolongan yang diminta. Pengakuan itu menjaga dzikir tetap rendah hati.',
          'Dalam wiridian TQN dan doa-doa majelis, lafaz ini muncul sebagai penghubung yang akrab antar bagian amalan. Ringkas, mudah dihafal, dan jujur. Kalimat yang tepat diucapkan manusia yang sedang berjuang, baik saat sukses maupun saat lelah. Murid yang sedang diuji kesulitan hidup diajarkan menjadikan lafaz ini napasnya, karena pengakuan kefakiran justru membuka pintu pertolongan Allah.',
        ],
      },
    ],
    related: ['dzikir', 'dzikir-lailahaillallah', 'awrad', 'himmah'],
  },
  {
    slug: 'herat-tarekat',
    kind: 'glossary',
    title: 'Tarekat Herat',
    category: 'Sejarah & Tokoh',
    summary: 'Tarekat Herat menyinggung kota Herat di Khorasan, pusat keilmuan tasawuf yang tersinggung dalam riwayat jalur khwajagan Naqsyabandiyah.',
    facts: [
      { label: 'Lokasi', value: 'Herat, kawasan Khorasan (kini Afghanistan)' },
      { label: 'Peran sejarah', value: 'Pusat keilmuan dan tasawuf Khorasan' },
      { label: 'Keterkaitan', value: 'Jalur khwajagan dalam riwayat Naqsyabandiyah' },
      { label: 'Catatan', value: 'Rincian perjalanan guru mengikuti riwayat silsilah' },
    ],
    body: [
      {
        h: 'Kota Keilmuan di Khorasan',
        p: [
          'Herat adalah kota tua di kawasan Khorasan, kini berada di Afghanistan. Selama berabad-abad ia menjadi pusat keilmuan Islam: madrasah, perpustakaan, dan komunitas ulama tumbuh di sana bersama seni dan perdagangan. Dalam peta tasawuf, Khorasan termasuk kawasan yang melahirkan banyak guru besar. Kota-kota seperti ini menjadi simpul jalur ilmu yang panjang.',
        ],
      },
      {
        h: 'Jalur Khwajagan',
        p: [
          'Menurut riwayat silsilah Naqsyabandiyah, rantai guru yang disebut khwajagan berpindah dari kota ke kota di kawasan itu, dari wilayah sekitar Bukhara hingga Khorasan, sebelum tarekat menyebar lebih luas. Herat masuk ke dalam lanskap perjalanan keilmuan tersebut bersama kota-kota besar lain. Rincian siapa berkarya di mana mengikuti riwayat masing-masing dan perlu dibaca hati-hati. Yang penting dari jalur itu adalah disiplin yang diwariskannya.',
          'Bagi murid TQN Qodiriah Naqsyabandiyah, jejak kota-kota ini mengingatkan asal-usul disiplinnya: dzikir khafi, kesetiaan pada silsilah, dan pengasuhan murid secara pribadi. Tradisi yang sampai ke Nusantara hari ini dibawa generasi yang panjang. Mengenangnya menambah rasa hormat kepada guru-guru yang tidak pernah kita jumpai.',
        ],
      },
    ],
    related: ['bukhara-tarekat', 'haramain', 'dzikir-khafi'],
  },
  {
    slug: 'hilm',
    kind: 'glossary',
    title: 'Hilm',
    titleAr: 'حِلْم',
    category: 'Kepercayaan & Maqamat',
    summary: 'Hilm adalah kesantunan dan murah hati yang menjadi watak; di jalur TQN menjadi ukuran jujur kemajuan dzikir melalui akhlak yang makin lembut.',
    facts: [
      { label: 'Istilah Arab', value: 'حِلْم' },
      { label: 'Makna harfiah', value: 'Santun; murah hati; menahan diri' },
      { label: 'Penanda', value: 'Tenang saat diuji, tidak buru-buru murka' },
      { label: 'Terkait', value: 'Akhlak guru dan teladan para nabi' },
    ],
    body: [
      {
        h: 'Kesantunan yang Menjadi Watak',
        p: [
          'Hilm berarti santun dan murah hati: kesabaran yang sudah menjadi watak, bukan sekadar tabiat sesaat. Orang yang berhilm tenang ketika dibenci, menahan murka ketika diuji, dan menanggapi kebodohan dengan kelembutan. Para ulama menyebut hilm sebagai akhlak para nabi. Yang paling berhilm adalah yang paling diuji dan tetap lembut.',
        ],
      },
      {
        h: 'Ukuran Kemajuan yang Jujur',
        p: [
          'Di jalur tarekat, hilm menjadi ukuran kemajuan yang jujur. Wirid yang banyak tetapi mudah tersinggung perlu diwaspadai, sebab dzikir yang benar perlahan mengencerkan sukar hati. Karena itu pembina mengamati akhlak muridnya lebih dahulu daripada cerita pengalaman batinnya. Akhlak adalah hasil yang paling boleh dipercaya dari latihan bertahun-tahun.',
          'Hilm juga wajib bagi sesama murid. Majelis yang hidup panjang adalah majelis yang santun: keluhan disampaikan lembut, perbedaan tidak dimusuhi, dan nasehat dibungkus hormat. Kesantunan semacam ini adalah dzikir yang tampak. Ia lebih berbicara tentang kemajuan murid daripada kata-kata yang mengaku-ngaku. Kesantunan juga menular; majelis yang penuh orang berhilm membuat murid baru cepat berbaur tanpa takut.',
        ],
      },
    ],
    related: ['himmah', 'faqr', 'ihsan', 'adab-murid'],
  },
  {
    slug: 'himmah',
    kind: 'glossary',
    title: 'Himmah',
    titleAr: 'هِمَّة',
    category: 'Kepercayaan & Maqamat',
    summary: 'Himmah adalah tekad luhur murid tarekat: sungguh-sungguh dalam niat dan wirid TQN, dibingkai adab dan rendah hati agar awet sampai tuntas.',
    facts: [
      { label: 'Istilah Arab', value: 'هِمَّة' },
      { label: 'Makna harfiah', value: 'Tekad; keinginan yang kuat' },
      { label: 'Ruang dalam TQN', value: 'Sungguh-sungguh dalam niat dan wirid' },
      { label: 'Penyeimbang', value: 'Adab dan rendah hati' },
    ],
    body: [
      {
        h: 'Tekad yang Luhur',
        p: [
          'Himmah berarti tekad, keinginan yang kuat untuk mencapai sesuatu yang tinggi. Para sufi mengagungkan himmah yang luhur: hati yang tidak puas dengan setengah-setengah, yang berniat jujur demi Allah dan menempuh jalan sampai tuntas. Tanpa himmah, wirid mudah luntur oleh lelah dan tepi. Dengan himmah, langkah kecil tetap berjalan walau hasilnya belum terlihat.',
        ],
      },
      {
        h: 'Himmah dalam Pembinaan TQN',
        p: [
          'Dalam pembinaan TQN, himmah tampak pada hal-hal sederhana yang dilakukan sungguh-sungguh. Murid datang majelis sebelum waktunya, menjaga wirid pribadi walau jadwal padat, dan memperbaiki kesalahan tanpa berdalih. Guru menumbuhkan himmah murid dengan memberi tugas yang terukur, bukan dengan janji-janji besar. Tekad yang dilatih lewat hal kecil lebih awet daripada tekad yang dikobarkan lewat kata-kata.',
          'Tetapi himmah berjalan berpasangan dengan adab. Tekad yang besar tanpa kerendahan hati cepat berubah menjadi sombong, sedangkan tekad yang dibingkai faqr dan santun akan awet sampai akhir. Pesan para guru ringkas: berambitiuslah dalam memperbaiki diri, rendah hatilah dalam menilai diri. Kedua sikap itu bukan lawan, melainkan sepasang sayap.',
        ],
      },
    ],
    related: ['hilm', 'faqr', 'dhawq', 'haula'],
  },
  {
    slug: 'hizb',
    kind: 'glossary',
    title: 'Hizb',
    titleAr: 'حِزْب',
    category: 'Amalan & Wirid',
    summary: "Hizb berarti bagian: pembagian enam puluh hizb Al-Qur'an serta lafaz wirid tertentu dalam tarekat; pengambilannya mengikuti ijazah mursyid.",
    facts: [
      { label: 'Istilah Arab', value: 'حِزْب' },
      { label: 'Makna harfiah', value: 'Bagian; kelompok' },
      { label: 'Dipakai untuk', value: "Pembagian Al-Qur'an dan lafaz wirid tertentu" },
      { label: 'Terkait', value: 'Bilangan zikir dan awrad' },
    ],
    body: [
      {
        h: 'Makna dan Pemakaian',
        p: [
          "Hizb berarti bagian. Istilah ini dikenal luas dalam pembagian Al-Qur'an: mushaf dibagi menjadi enam puluh hizb untuk memudahkan tahap membaca, dan tiap dua hizb disebut juz. Pembagian semacam ini membantu pembaca yang menuntaskan bacaan secara berkelanjutan. Dengan jatah harian, mushaf selesai diputar, bukan dibaca sekali lalu dilupakan.",
          "Di khazanah wiridian, kata hizb juga dipakai untuk lafaz amalan tertentu yang dirumuskan seorang guru, sehingga muncul sebutan hizb milik tokoh-tokoh tertentu. Isinya umumnya ayat, lafaz tauhid, dan doa yang dirangkai dengan tertib. Pembacaan hizb menjadi bagian wirid harian sebagian murid tarekat. Rumusan tiap guru berbeda, dan perbedaan itu dijaga apa adanya.",
        ],
      },
      {
        h: 'Adab Pengambilan',
        p: [
          "Adabnya sama dengan wirid lain: hizb yang diambil mengikuti ijazah dan bimbingan, bukan sekadar disalin dari kitab. Bagi murid yang belum menerima, amalan wajib dan dzikir ma'tsur yang dinukil dari Rasulullah saw tetap menjadi lahan yang aman. Dari lahan yang aman itulah pintu-pintu wirid berikutnya dibuka pada waktunya. Kesabaran semacam ini adalah adab yang dianjurkan para guru.",
        ],
      },
    ],
    related: ['awrad', 'bilangan-zikir', 'dzikir', 'haula'],
  },
  {
    slug: 'hulul',
    kind: 'glossary',
    title: 'Hulūl',
    titleAr: 'حُلُول',
    category: 'Kepercayaan & Maqamat',
    summary: 'Hulūl berarti menyatu-berhuni, pengertian tasawuf yang ditolak ulama Ahlussunnah; TQN menjaga batas ini dengan memahami fanā secara lurus.',
    facts: [
      { label: 'Istilah Arab', value: 'حُلُول' },
      { label: 'Makna harfiah', value: 'Masuk; menyatu-berhuni' },
      { label: 'Posisi akidah', value: 'Ditolak para ulama Ahlussunnah' },
      { label: 'Terkait', value: "Batas pengertian fanā' dan makrifat" },
    ],
    body: [
      {
        h: 'Pengertian yang Ditolak',
        p: [
          'Hulūl berarti masuk atau berhuni, dan dalam sejarah tasawuf istilah ini dipakai untuk pengertian yang menyimpang: bahwa Allah masuk atau menyatu ke dalam makhluk. Pengertian semacam ini ditolak tegas oleh para ulama Ahlussunnah di seluruh zaman. Allah tidak menyatu dengan apa pun, tidak berhuni di manusia, dan tidak terbatas oleh tempat. Tauhid menuntut batas yang jelas antara Pencipta dan ciptaan.',
        ],
      },
      {
        h: 'Membaca Ucapan Sufi dengan Kaidah',
        p: [
          'Ungkapan-ungkapan puitis sebagian sufi yang terkesan menyembrawang perlu dibaca dengan kaidah ulama. Sebagian dijelaskan sesuai makna yang benar, dan sebagian dinilai keliru. Orang yang kehilangan kendali saat tenggelam dalam keadaan batin bisa melontarkan ucapan yang meleset. Syariat tetap menjadi hakim penengah, dan guru yang berilmulah yang menerjemahkan keadaan itu.',
          "Dalam TQN Qodiriah Naqsyabandiyah, batas ini dijaga jelas. Fanā' dipahami sebagai lenyapnya sifat tercela, bukan penyatuan dengan Allah. Dzikir mendekatkan hamba kepada Rabbnya tanpa meruntuhkan jarak kebershambaan. Makin dalam makrifat seseorang, makin tegas pula tauhidnya; itu adalah tanda jalur yang lurus.",
        ],
      },
    ],
    related: ['fana', 'hakikat', 'dhawq', 'hal'],
  },
  {
    slug: 'idulfitri-tarekat',
    kind: 'glossary',
    title: 'Idulfitri di Tarekat',
    titleAr: 'عِيد الفِطْر',
    category: 'Kebiasaan & Tradisi',
    summary: 'Idulfitri di tarekat dihidupi dengan shalat Id, halal bihalal, dan sungkem kepada mursyid; momen memperbarui ikrar wiridian TQN pasca ramadhan.',
    facts: [
      { label: 'Istilah Arab', value: 'عِيد الفِطْر' },
      { label: 'Isi lazim', value: 'Shalat Id, halal bihalal, dan sungkem' },
      { label: 'Nilai', value: 'Memperbarui ikrar dan saling memaafkan' },
      { label: 'Catatan', value: 'Bentuk beragam antar pesantren' },
    ],
    body: [
      {
        h: 'Lembar Baru Setelah Sebulan Latihan',
        p: [
          'Idulfitri di lingkungan tarekat dihidupi lebih dari sekadar hari raya. Setelah sebulan penuh puasa, murid berkumpul kembali di majelis. Ada shalat Id berjamaah, halal bihalal, dan adat sungkeman kepada Abah mursyid serta orang tua. Momen itu menjadi pembuka lembar baru bagi hati yang baru selesai satu musim latihan.',
        ],
      },
      {
        h: 'Halal Bihalal yang Lebih dalam',
        p: [
          'Halal bihalal dalam majelis tarekat terasa lebih dalam daripada sekadar acara. Murid saling memaafkan, pembina menegaskan kembali niat wiridian, dan yang jauh pulang untuk bersalaman. Banyak pesantren menjadikan hari-hari raya juga diisi pengajian dan wiridian, sebab kumpulnya orang banyak adalah peluang yang tidak disia-siakan. Ramadhan pulang meninggalkan majelis yang makin lengkap.',
          'Bentuk perayaan beragam antar pesantren dan daerah, namun semangatnya satu: hati yang dipulihkan kembali kepada majelis. Idulfitri menjadi penanda bahwa puasa bukan berhenti di ramadhan, melainkan berlanjut sebagai istiqamah wiridian. Amalan yang dilatih sebulan penuh dijaga sepanjang tahun, dan itu adalah ukuran keberhasilannya. Dari halal bihalal itulah murid pulang membawa hati yang kembali utuh.',
        ],
      },
    ],
    related: ['haul', 'dzikir-berjamaah', 'adab-murid', 'dzikir-ahad'],
  },
  {
    slug: 'ihsan',
    kind: 'glossary',
    title: 'Ihsan',
    titleAr: 'إِحْسَان',
    category: 'Kepercayaan & Maqamat',
    summary: 'Ihsan adalah beribadah seolah melihat Allah sebagaimana hadis Jibril; dalam TQN menjadi tujuan akhir pembinaan wiridian dan akhlak murid.',
    facts: [
      { label: 'Istilah Arab', value: 'إِحْسَان' },
      { label: 'Makna harfiah', value: 'Berbuat baik; menyempurnakan' },
      { label: 'Rujukan', value: 'Hadis Jibril tentang ibadah seolah melihat Allah' },
      { label: 'Posisi dalam TQN', value: 'Tujuan akhir pembinaan jalur tarekat' },
    ],
    body: [
      {
        h: 'Puncak Agama dalam Hadis Jibril',
        p: [
          'Ihsan berarti berbuat baik dan menyempurnakan. Dalam hadis Jibril yang masyhur, Rasulullah saw menjelaskan ihsan sebagai beribadah kepada Allah seolah-olah engkau melihat-Nya; bila tidak mampu, maka dengan keyakinan bahwa Dia melihatmu. Definisi ini menempatkan ihsan sebagai puncak agama setelah Islam dan Iman. Ia bukan ilmu tambahan, melainkan kualitas yang menghidupkan seluruh amalan.',
        ],
      },
      {
        h: 'Wilayah Tasawuf dan Tarekat',
        p: [
          'Ihsan adalah wilayah tasawuf dan tarekat. Bila syariat menjaga amal lahir dan iman menjaga kepercayaan hati, ihsan merawat kehadiran batin: shalat yang benar-benar dihadapkan, dzikir yang benar-benar dihayati, dan muamalah yang benar-benar ikhlas. Jalur tarekat disusun untuk menghidupkan dimensi ketiga ini secara terlatih, bukan menggantikan dua dimensi sebelumnya. Justru karena ihsan, syariat makin rapi dijaga.',
          'Buah ihsan terasa pada keseharian: jujur walau tak dilihat, sabar walau tak diberitahu, dan baik walau tak dibalas. Murid TQN mengukur majunya bukan dari cerita batin, melainkan dari tumbuhnya ihsan dalam amalan dan budi. Ihsan yang hidup membuat orang berhati-hati sebelum berbuat, dan itu adalah penghormatan tertinggi kepada Allah yang melihat.',
        ],
      },
    ],
    related: ['hakikat', 'dzikir', 'hilm', 'adab-murid'],
  },
// APPEND-ABOVE
]
