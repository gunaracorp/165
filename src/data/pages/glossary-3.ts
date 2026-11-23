import type { PageEntry } from './types'

// 165 — Glosarium bagian 3 (slug mashyakhah s.d. pwa)
// Konten bahasa Indonesia, jujur, tanpa fabrikasi fakta.
export const ENTRIES: PageEntry[] = [
  {
    slug: "mashyakhah",
    kind: 'glossary',
    title: "Masyāyikhah",
    titleAr: "المَشَايِخ",
    category: "Struktur Tarekat",
    summary: "Masyāyikhah adalah keseluruhan para mursyid dan khalifah tarekat; badan guru ruhani yang menjadi rujukan silsilah, ijazah, dan adab murid.",
    facts: [
      { label: "Makna harfiah", value: "Bentuk jamak dari syaykh, berarti para guru atau tokoh senior" },
      { label: "Cakupan", value: "Mursyid utama, para khalifah, dan guru-guru senior dalam satu jalur" },
      { label: "Peran kunci", value: "Memberi ijazah, menjaga sanad, dan membimbing adab murid" },
    ],
    body: [
      { h: "Makna dan Kedudukan", p: [
        "Kata masyāyikhah berasal dari syaykh yang berarti guru, orang tua yang dihormati, atau pemimpin keagamaan. Dengan akhiran jamak, masyāyikhah menunjuk keseluruhan para guru dalam satu jalur tarekat. Istilah ini lebih luas daripada kata mursyid, sebab mencakup pula khalifah dan tokoh senior yang melayani majelis tanpa memegang takrir utama. Dalam dokumen ijazah, sebutan masyāyikhah kerap muncul untuk menyebut para guru yang menyambungkan sanad dari satu generasi ke generasi berikutnya.",
        "Menurut tradisi tarekat, kedudukan masyāyikhah adalah penerus peran para nabi dalam mendidik hati manusia. Pernyataan semacam ini dibaca sebagai ungkapan penghormatan dan motivasi adab, bukan penempatan guru di luar batas manusiawi. Para masyāyikhah tetap dituntut berpegang pada Al-Qur'an dan Sunnah, dan setiap tuntunan mereka diuji dengan dalil.",
      ]},
      { h: "Fungsi bagi Komunitas Murid", p: [
        "Bagi murid, masyāyikhah adalah alamat bertanya ketika wirid terasa buntu atau persoalan adab muncul di tengah suluk. Murid dapat menyerahkan urusan bimbingan utama kepada mursyid, sementara khalifah membantu menjawab kebutuhan harian majelis. Jalinan ini dirawat melalui rabithah, yaitu ikatan hati yang menjaga kesungguhan murid meski jarak memisahkan.",
        "Keberadaan masyāyikhah juga menjaga keberlanjutan institusi tarekat. Melalui ijazah yang tersambung, satu generasi mewariskan wirid kepada generasi berikutnya, dan keaslian jalur dapat ditelusuri lewat silsilah. Dengan demikian, masyāyikhah bukan sekadar gelar kehormatan, melainkan tumpuan keberlangsungan amalan tarekat.",
      ]},
    ],
    related: ["mursyid", "silsilah", "khalifah-tarekat", "ijazah"],
  },
  {
    slug: "mata-blok",
    kind: 'glossary',
    title: "Mata Blok",
    category: "Arsip & Digital",
    summary: "Mata Blok adalah istilah kerja 165 untuk titik poin dalam naskah atau blok notasi, penanda tempat sebuah gagasan disimpan dan dirujuk kembali.",
    facts: [
      { label: "Jenis istilah", value: "Kosakata kerja internal platform 165" },
      { label: "Makna", value: "Titik poin atau simpul catatan di dalam naskah dan blok notasi" },
      { label: "Fungsi", value: "Memudahkan penelusuran, kutipan, dan rujukan silang antarhalaman" },
    ],
    body: [
      { h: "Istilah Kerja di Ruang Penyuntingan", p: [
        "Dalam pekerjaan penyusunan halaman 165, naskah panjang tidak diproses sebagai satu gumpalan teks, melainkan dipilah menjadi blok-blok notasi. Setiap blok memuat satu gagasan, satu keterangan sumber, atau satu potong riwayat. Mata Blok adalah nama untuk titik poin di dalam pilahan itu, tempat sebuah gagasan mengangkat kepala dan siap dirujuk. Penulis dapat menyebut Mata Blok tertentu saat meminta kutipan, memindahkan catatan, atau mengaitkan satu halaman dengan halaman lain.",
        "Istilah ini membantu menjaga keteraturan tanpa membebani pembaca. Pembaca 165 tidak perlu mengetahui pilahan internal, namun hasilnya ia rasakan: halaman yang rapi, paragraf yang terarah, dan tautan yang mengarah tepat ke isi yang relevan.",
      ]},
      { h: "Mengapa Istilah Perlu Dicatat", p: [
        "Menyimpan istilah kerja seperti Mata Blok dalam glosarium adalah cara platform menghormati pembacanya. Ketika sebuah kata muncul dalam catatan arsip atau korespondensi penyuntingan, siapa pun yang membaca arsip itu dapat memahami maksudnya tanpa bertanya ulang. Glosarium 165 mengumpulkan istilah tarekat maupun istilah kerja platform dengan rasa hormat yang sama, sebab keduanya sama-sama bagian dari sejarah kerja pengetahuan ini.",
      ]},
    ],
    related: ["visi-165", "sanad", "tarekat"],
  },
  {
    slug: "matan-ijazah",
    kind: 'glossary',
    title: "Matan Ijazah",
    titleAr: "متن الإجازة",
    category: "Kitab & Naskah",
    summary: "Matan ijazah adalah bagian teks pada dokumen ijazah tarekat: kalimat izin, silsilah, urutan wirid, dan doa yang disampaikan guru kepada muridnya.",
    facts: [
      { label: "Kedudukan", value: "Isi teks utama sebuah ijazah, di antara kepala dokumen dan tanda tangan" },
      { label: "Isi lazim", value: "Kalimat izin, silsilah guru, urutan wirid, serta doa penutup" },
      { label: "Fungsi", value: "Bukti tertulis keberlanjutan rantai ijazah antara guru dan murid" },
    ],
    body: [
      { h: "Isi Teks yang Dititipkan Guru", p: [
        "Dokumen ijazah tarekat umumnya terdiri atas tiga bagian: kepala dokumen yang memuat basmalah dan puji-pujian, matan yang berisi teks pokok, serta penutup dengan tanda tangan, cap, dan tanggal. Matan adalah jantung dokumen itu. Di dalamnya guru menuliskan kalimat izin bahwa wirid tertentu diserahkan kepada murid, menyusun silsilah para guru yang menyambungkan jalur, dan menetapkan urutan wirid yang wajib diamalkan.",
        "Bentuk matan tidak seragam antarjalur. Sebagian ditulis ringkas dalam satu halaman, sebagian lain terbentang panjang dengan doa dan nasihat yang bertabur di sela silsilah. Keragaman ini wajar, sebab setiap guru menulis sesuai adab jalurnya dan kebutuhan murid yang diizinkannya.",
      ]},
      { h: "Nilai bagi Penelusuran Sanad", p: [
        "Bagi penelusur sanad, matan ijazah adalah sumber kunci. Dari matan, dapat dibaca siapa guru yang memberi izin, kepada siapa izin itu diberikan, dan wirid apa yang diizinkan. Peneliti membandingkan matan dengan dokumen lain dalam jalur untuk memeriksa kesesuaian nama dan urutan. Karena itulah matan ijazah perlu dirawat dengan cermat: dilipat rapi, dihindarkan dari lembap, dan disalin ulang dengan teliti ketika usia kertas menuntut pembaharuan.",
      ]},
    ],
    related: ["ijazah", "sanad", "silsilah", "mursyid"],
  },
  {
    slug: "maulid",
    kind: 'glossary',
    title: "Maulid",
    titleAr: "المَوْلِد",
    category: "Kebiasaan & Tradisi",
    summary: "Maulid adalah peringatan kelahiran Nabi Muhammad saw. dengan pembacaan kitab maulid, salawat, zikir bersama, dan majelis ilmu di banyak komunitas tarekat.",
    facts: [
      { label: "Objek peringatan", value: "Kelahiran Nabi Muhammad saw. yang masyhur jatuh pada bulan Rabiulawal" },
      { label: "Bentuk kegiatan", value: "Pembacaan kitab maulid, salawat, zikir bersama, dan ceramah" },
      { label: "Kedudukan", value: "Tradisi tua yang penilaiannya beragam, dari disambut hangat hingga ditimbang ulang" },
    ],
    body: [
      { h: "Tradisi yang Menghidupkan Kasih Sayang kepada Nabi", p: [
        "Maulid adalah peringatan kelahiran Nabi Muhammad saw. Tradisi ini tumbuh di banyak negeri Islam dan mengambil bentuk berbeda di tiap daerah: ada yang mengisi malam dengan pembacaan kitab maulid karya ulama klasik, ada yang menyelenggarakan pengajian akbar, ada pula yang memadatkan zikir dan salawat di halqah. Dalam majelis tarekat, maulid kerap menjadi ajang berkumpulnya murid dari berbagai wilayah, menggabungkan wirid rutin dengan pujian kepada Nabi saw.",
        "Menurut riwayat yang masyhur, kelahiran Nabi saw. jatuh pada bulan Rabiulawal, sehingga peringatan maulid memadat pada bulan tersebut. Namun banyak majelis juga membaca kitab maulid di luar bulan itu sebagai pengajian rutin.",
      ]},
      { h: "Catatan Kehadiran yang Jujur", p: [
        "Ulama berbeda pendapat mengenai perayaan maulid. Sebagian menyambutnya sebagai ungkapan syukur dan kasih sayang kepada Nabi saw., sebagian lain menimbangnya dengan kaidah yang berbeda. Kedua arah pendapat lahir dari kalangan yang sama-sama memegang Al-Qur'an dan Sunnah. Halaman ini tidak memaksakan satu pilihan, melainkan menjelaskan tradisi sebagaimana adanya, dengan rasa hormat kepada jamaah yang menghidupinya dan kepada ulama yang menimbang ulang kebiasaan ini.",
      ]},
    ],
    related: ["tarekat", "mursyid", "wirid"],
  },
  {
    slug: "media-sosial-tarekat",
    kind: 'glossary',
    title: "Media Sosial Tarekat",
    category: "Arsip & Digital",
    summary: "Media sosial tarekat adalah pemanfaatan platform digital oleh majelis dan murid untuk menyiarkan pengajian, wirid, jadwal kegiatan, dan pesan adab.",
    facts: [
      { label: "Bentuk umum", value: "Unggahan video pengajian, rekaman zikir, jadwal majelis, dan nasihat singkat" },
      { label: "Peluang", value: "Memperluas jangkauan dakwah tarekat lintas daerah dan lintas generasi" },
      { label: "Tantangan", value: "Isi yang mudah terpotong konteks dan kebutuhan verifikasi kepada mursyid" },
    ],
    body: [
      { h: "Majelis yang Menyusup ke Layar", p: [
        "Media sosial kini menjadi bagian dari kehidupan majelis tarekat. Rekaman pengajian diunggah agar murid yang jauh dapat mengikuti, jadwal halqah disebarkan agar jamaah tidak salah waktu, dan potongan nasihat mursyid dibagikan agar adab tarekat mengalir ke lini masa murid. Bagi jamaah di perantauan, layar kecil kadang menjadi satu-satunya jendela yang menyambungkan mereka dengan majelis asal.",
        "Kemudahan ini membawa peluang sekaligus tantangan. Potongan video yang pendek dapat kehilangan konteks, dan unggahan yang ramai tidak selalu disusun oleh orang yang memegang izin. Karena itu media sosial tarekat sebaiknya dibaca sebagai pengantar menuju majelis, bukan pengganti majelis.",
      ]},
      { h: "Adab Digital Murid", p: [
        "Murid yang mengelola atau menikmati media sosial tarekat dianjurkan menjaga adab yang sama seperti di halqah: tidak memotong ucapan guru semaunya, menyebut sumber dengan jelas, dan menimbang isi sebelum membagikan. Pertanyaan tentang wirid tetap disampaikan kepada mursyid atau khalifah, bukan kepada kolom komentar. Dengan kebiasaan demikian, media sosial menjadi jembatan yang menyehatkan, bukan arena perselisihan.",
      ]},
    ],
    related: ["visi-165", "tarekat", "mursyid"],
  },
  {
    slug: "minangkabau-tarekat",
    kind: 'glossary',
    title: "Tarekat di Minangkabau",
    category: "Sejarah & Tokoh",
    summary: "Tarekat di Minangkabau tumbuh melalui surau dan pengajian ulama setempat; Naqsyabandiyah, Qadiriyah, dan Syattariyah menjadi jalur yang dikenal luas di sana.",
    facts: [
      { label: "Wadah tradisional", value: "Surau sebagai pusat ibadah, pendidikan, dan kegiatan tarekat" },
      { label: "Jalur terkenal", value: "Naqsyabandiyah, Qadiriyah, dan Syattariyah dikenal di wilayah Minangkabau" },
      { label: "Catatan historiografi", value: "Kajian sejarah menempatkan tarekat dalam dinamika sosial-agama Minangkabau" },
    ],
    body: [
      { h: "Surau sebagai Rumah Tarekat", p: [
        "Di Minangkabau, kegiatan keagamaan tradisional berpusat pada surau, bangunan kecil yang berdiri tidak jauh dari musajik desa. Surau berfungsi sebagai tempat shalat, mengaji, tidur santri, dan tempat wirid pengamal tarekat. Melalui surau itulah berbagai jalur tarekat masuk dan tumbuh di lembah-lembah Minangkabau, dibawa oleh ulama yang pulang dari menuntut ilmu ke Mekah dan daerah lain.",
        "Jalur yang dikenal luas di wilayah ini antara lain Naqsyabandiyah, Qadiriyah, dan Syattariyah. Kajian sejarah menempatkan tarekat, khususnya Syattariyah, dalam dinamika sosial-agama Minangkabau abad ke-19, termasuk pada masa pergolakan yang dikenal sebagai era Padri.",
      ]},
      { h: "Kehidupan yang Berlanjut", p: [
        "Kini kegiatan tarekat di Minangkabau berlanjut dalam bentuk yang lebih beragam: surau yang membesar menjadi pesantren, halqah yang rutin di rumah guru, dan komunitas murid yang menjalin silsilah lintas kota. Perubahan zaman memindahkan sebagian pengajian ke media digital, namun adab surau tetap menjadi rasa yang dikenali murid Minangkabau: sederhana, tekun, dan erat kepada gurunya.",
      ]},
    ],
    related: ["tarekat", "silsilah", "tarekat-mutabarah"],
  },
  {
    slug: "muhassabah",
    kind: 'glossary',
    title: "Muḥāsabah",
    titleAr: "المُحَاسَبَة",
    category: "Amalan & Wirid",
    summary: "Muḥāsabah adalah kebiasaan menelaah kembali amal dan cacat diri setiap hari; latihan kejujuran kepada diri sendiri dalam jalan tarekat.",
    facts: [
      { label: "Makna harfiah", value: "Menagih, menimbang, atau menghitung ulang" },
      { label: "Objek", value: "Niat, ucapan, perbuatan, dan kelalaian sepanjang hari" },
      { label: "Amalan pendamping", value: "Istigfar dan mujāhadah yang menuntun perbaikan setelah telaah" },
    ],
    body: [
      { h: "Mengagih Amal Sebelum Dipagari Malam", p: [
        "Muḥāsabah adalah kebiasaan berhenti sejenak untuk menagih diri sendiri: apa yang sudah dikerjakan, apa yang tertinggal, dan niat apa yang mengiringinya. Dalam kebiasaan para pengamal tarekat, telaah ini lazim dilakukan pada waktu-waktu tenang, misalnya sebelum tidur, dengan memutar kembali hari yang baru lewat. Yang ditimbang bukan hanya gerak lahir, melainkan juga hati: iri yang tersembunyi, sombong yang menyusup, atau malas yang menghambat wirid.",
        "Anjuran menelaah diri muncul dalam warisan para ulama sebagai kunci perbaikan. Orang yang tidak berani mengakui cacatnya akan berhenti di tempat yang sama; orang yang mengakui dengan jujur memiliki pintu taubat yang terbuka lebar.",
      ]},
      { h: "Muḥāsabah yang Menyehatkan Hati", p: [
        "Muḥāsabah dalam tarekat bukan ajang memarahi diri tanpa henti. Menurut penjelasan para mursyid, telaah yang sehat berakhir dengan istigfar, tekad perbaikan, dan kembali kepada wirid dengan hati yang lebih ringan. Muḥāsabah berdampingan dengan mujāhadah, yaitu usaha menahan diri, dan dengan murāqabah, yaitu pengawasan hati ketika beramal. Ketiganya membentuk lingkaran latihan yang membuat hari-hari murid terukur dan bermakna.",
      ]},
    ],
    related: ["dzikir", "suluk", "mursyid"],
  },
  {
    slug: "mujaddid",
    kind: 'glossary',
    title: "Mujaddid",
    titleAr: "الْمُجَدِّد",
    category: "Sejarah & Tokoh",
    summary: "Mujaddid adalah pembaru yang diharapkan muncul di awal tiap abad hijriah menurut hadis; gelar yang juga dipakai dalam penisbatan jalur tarekat.",
    facts: [
      { label: "Dasar istilah", value: "Hadis tentang pembaru pada tiap seratus tahun yang diriwayatkan dalam kitab-kitab hadis" },
      { label: "Makna", value: "Penghidup kembali ajaran, bukan pendiri agama baru" },
      { label: "Penggunaan tarekat", value: "Jalur Naqsyabandiyah-Mujaddidiyah menisbatkan diri kepada Ahmad Sirhindi" },
    ],
    body: [
      { h: "Pembaru di Awal Abad", p: [
        "Kata mujaddid berarti pembaru, dari akar kata yang bermakna menghidupkan kembali. Istilah ini muncul dari hadis Nabi saw. yang diriwayatkan dalam kitab-kitab hadis, menyebut bahwa Allah mengutus pada tiap seratus tahun orang yang memperbarui urusan agama. Para ulama memahami pembaruan di sini bukan mengganti ajaran, melainkan menghidupkan kembali ajaran yang pudar: menyucikan akidah, membenahi pemahaman, dan memulihkan amalan.",
        "Siapa yang digelar mujaddid pada tiap abad berbeda penilaiannya antarulama. Yang pasti, gelar ini bukan jabatan resmi yang diberikan lembaga tertentu, melainkan pengakuan para ulama atas kebesaran seorang tokoh dalam menjaga agama.",
      ]},
      { h: "Mujaddid dalam Penisbatan Tarekat", p: [
        "Dalam dunia tarekat, istilah mujaddid melekat pada Ahmad Sirhindi, ulama India abad ke-10 Hijriah yang masyhur digelari Mujaddid Alf Tsani. Jalur Naqsyabandiyah yang menisbatkan diri kepadanya dikenal sebagai Naqsyabandiyah-Mujaddidiyah. Penisbatan ini menandai pengaruh pemikiran Sirhindi dalam menajamkan pembicaraan tauhid di lingkungan tarekat, dan warisannya terbaca sampai pada silsilah-silsilah yang hidup di Nusantara hari ini.",
      ]},
    ],
    related: ["tarekat", "silsilah", "sanad"],
  },
  {
    slug: "mujahadah",
    kind: 'glossary',
    title: "Mujāhadah",
    titleAr: "الْمُجَاهَدَة",
    category: "Amalan & Wirid",
    summary: "Mujāhadah adalah usaha sungguh-sungguh menahan diri dari maksiat dan mengingkari hawa nafsu; latihan diri yang menopang suluk murid tarekat.",
    facts: [
      { label: "Makna harfiah", value: "Berjuang atau menahan diri" },
      { label: "Arah usaha", value: "Meninggalkan yang dilarang dan menegakkan kewajiban dengan istiqamah" },
      { label: "Bentuk lazim", value: "Riyadlah sederhana, pengendalian makan dan bicara, serta wirid yang ditetapkan mursyid" },
    ],
    body: [
      { h: "Perang Kecil Setiap Hari", p: [
        "Mujāhadah berarti berjuang, dan dalam bahasa tasawuf usaha itu diarahkan ke dalam: menahan diri dari yang dilarang dan mengingkari tuntutan hawa nafsu yang menyimpang. Bentuknya sederhana namun berat, misalnya menahan lidah dari ghibah, menahan mata dari yang haram, menahan perut dari kelebihan, dan menahan diri dari pujian yang memabukkan. Menurut tradisi tarekat, mujāhadah adalah peperangan kecil yang diadakan setiap hari, dan kemenangannya dirasakan sebagai hati yang makin lincah dalam wirid.",
        "Mujāhadah tidak berarti menyiksa badan. Syariat menuntut tubuh dirawat, dan mursyid menyesuaikan latihan dengan kekuatan murid masing-masing.",
      ]},
      { h: "Di Bawah Takrir Mursyid", p: [
        "Pengamal tarekat tidak menyusun mujāhadah semaunya. Bentuk riyadlah, porsi wirid, dan latihan khalwat diberikan mursyid sesuai keadaan murid, sebab latihan yang melampaui kadar bisa merusak badan dan menumbuhkan rasa bangga. Murid yang bertahan dalam mujāhadah sederhana namun rutin biasanya lebih cepat merasakan buahnya daripada yang berlebihan lalu berhenti. Kesungguhan yang stabil, itulah yang dicari di jalan suluk.",
      ]},
    ],
    related: ["dzikir", "suluk", "mursyid"],
  },
  {
    slug: "muraqabah-maut",
    kind: 'glossary',
    title: "Murāqabah Maut",
    titleAr: "مُرَاقَبَة الْمَوْت",
    category: "Amalan & Wirid",
    summary: "Murāqabah maut adalah latihan menyadari kematian secara terarah: mengingat bahwa hidup terbatas agar kesungguhan beramal tumbuh di hati murid.",
    facts: [
      { label: "Makna", value: "Murāqabah tentang kematian, bukan takhayul atau perendahan terhadap hidup" },
      { label: "Tujuan", value: "Menumbuhkan zuhud yang sehat, taubat yang cepat, dan amal yang sungguh-sungguh" },
      { label: "Bimbingan", value: "Ditempuh dengan takrir mursyid, tidak diadakan sendirian tanpa izin" },
    ],
    body: [
      { h: "Menghadap Kematian dengan Hati Tenang", p: [
        "Murāqabah maut adalah latihan memandang kematian dari jarak yang dekat: mengingatnya, membayangkan hari terakhir, dan menata hati sebelum hari itu benar-benar datang. Para ulama menjadikan kematian sebagai pemutus kenikmatan dan pengingat utama, sebab ingatan ini memotong kemalasan dan mempercepat taubat. Dalam kebiasaan tarekat, latihan ini menyatu dengan wirid: murid berdzikir sambil menyadari bahwa setiap tarikan napas berhingga.",
        "Menurut tradisi tarekat, murāqabah maut bukan berarti menolak hidup atau mencemaskan setiap langkah. Tujuannya justru menyehatkan cara hidup: karena waktu pendek, murid memilih amalan yang berarti; karena takdir pasti, murid belajar menyerahkan cemas kepada Allah.",
      ]},
      { h: "Buah yang Terbaca dalam Perilaku", p: [
        "Murid yang rutin menghadapkan kematian biasanya tampak pada perilaku sehari-hari: bicara lebih dijaga, dendam lebih mudah dilepas, dan harta lebih ringan dibagikan. Murāqabah maut juga menyiapkan murid menghadapi kepergian orang terdekat dengan hati yang lebih kuat. Meski demikian, latihan ini tetap ditempuh di bawah bimbingan mursyid, terlebih bagi murid yang sedang berduka atau memiliki kecemasan berat, agar ingatan kematian menjadi obat dan bukan beban baru.",
      ]},
    ],
    related: ["dzikir", "suluk", "fana"],
  },
  {
    slug: "murojaah",
    kind: 'glossary',
    title: "Muroja'ah",
    titleAr: "الْمُرَاجَعَة",
    category: "Amalan & Wirid",
    summary: "Muroja'ah adalah kebiasaan mengulang bacaan dan wirid yang telah diajarkan mursyid agar lafal, hafalan, dan kehadiran hati tetap terjaga.",
    facts: [
      { label: "Makna harfiah", value: "Kembali dan mengulang untuk meneliti" },
      { label: "Objek", value: "Wirid, ratiban, ayat, dan doa yang pernah diajarkan guru" },
      { label: "Tempat lazim", value: "Sesi khataman bersama dan pengajian rutin majelis" },
    ],
    body: [
      { h: "Mengulang yang Sudah Diterima", p: [
        "Muroja'ah berarti kembali dan mengulang. Dalam kebiasaan tarekat, murid tidak hanya menerima wirid baru, tetapi juga kembali mengulang wirid lama di hadapan gurunya. Pengulangan ini menjaga tiga hal sekaligus: lafal yang benar, urutan yang tidak tercerai, dan kehadiran hati yang tidak mengendur. Banyak majelis menjadwalkan muroja'ah secara rutin, dan murid membaca wiridnya bergantian sambil dikoreksi bila ada yang luntur.",
        "Muroja'ah juga berlaku pada ilmu yang diajarkan. Nasihat mursyid, catatan pengajian, dan doa-doa yang pernah diberikan diulang dibaca agar tidak berangsur hilang dari ingatan.",
      ]},
      { h: "Adab di Balik Pengulangan", p: [
        "Ada adab yang menjaga muroja'ah: murid mengulang sesuai yang diterima, tidak menambah porsi tanpa izin, dan tidak mencampur wirid dari jalur lain tanpa penjelasan guru. Kebiasaan ini menanamkan kejujuran murid, sebab yang diserahkan kembali kepada guru adalah benang merah yang sama dari yang pernah diterimanya. Di sisi lain, guru yang mendengar muroja'ah dapat menilai kemajuan murid dan menetapkan kapan takrir berikutnya layak diberikan. Pengulangan, demikian, menjadi jembatan antara ijazah yang dulu dan tuntunan yang sedang berlangsung.",
      ]},
    ],
    related: ["wirid", "awrad", "mursyid"],
  },
  {
    slug: "mursala",
    kind: 'glossary',
    title: "Mursalah",
    category: "Amalan & Wirid",
    summary: "Mursalah adalah metode zikir tanpa lisān dan nafas dalam warisan Naqsyabandiyah: kalimat dzikir dilepas dari lafal dan diserahkan ke dalam hati.",
    facts: [
      { label: "Ciri utama", value: "Dzikir berjalan tanpa gerak lidah dan tanpa pengaturan napas" },
      { label: "Posisi dalam jalur", value: "Menjadi penanda metode Naqsyabandiyah di tengah banyak jalur yang menekankan zikir lisān" },
      { label: "Bimbingan", value: "Ditempuh di bawah takrir dan izin mursyid, bukan peniruan mandiri" },
    ],
    body: [
      { h: "Zikir yang Dilepas dari Lisan", p: [
        "Mursalah menunjuk metode dzikir yang dilepaskan dari dua penopang lazim, yaitu lisān dan nafas. Murid tidak menggerakkan lidah dan tidak mengatur tarikan napas; kalimat dzikir diserahkan berputar di dalam hati, sebagaimana dijelaskan para mursyid Naqsyabandiyah. Metode ini berbeda dari zikir jali yang menuntut lafal terdengar dan zikir khafi lisān yang bergerak di mulut tanpa suara.",
        "Menurut penjelasan yang berkembang di kalangan pengamal Naqsyabandiyah, melepas dzikir dari lisān dimaksudkan agar hati tetap terikat pada zikir dalam sela-sela kegiatan, sehingga kehadiran mengikuti murid ke mana pun ia pergi. Bila murid lalai dan dzikirnya terputus, ia cukup menyiapkan hati kembali, sesuai anjuran gurunya, tanpa perlu memulai dari pangkal.",
      ]},
      { h: "Kaidah yang Menjaga Metode", p: [
        "Mursalah tidak diadakan sendirian. Murid menempuhnya setelah menerima takrir dari mursyid, karena kehalusan metode ini memerlukan pengawasan: bila hati yang tenang berangsur menjadi kelambanan, mursyid yang menilai dan menyesuaikan. Dengan kaidah semacam ini, mursalah tetap menjadi amalan yang terikat pada sanad, bukan teknik relaksasi yang berdiri sendiri.",
      ]},
    ],
    related: ["dzikir", "wirid", "suluk"],
  },
  {
    slug: "mursyid",
    kind: 'glossary',
    title: "Mursyid",
    titleAr: "الْمُرْشِد",
    category: "Struktur Tarekat",
    summary: "Mursyid adalah guru pembimbing murid dalam tarekat: pemberi takrir, penjaga adab, dan penjelas hambatan yang muncul di sepanjang jalan suluk.",
    facts: [
      { label: "Tugas pokok", value: "Memberi wirid, memperbaiki keadaan murid, dan menjaga amalan tetap dalam syariat" },
      { label: "Syarat pengangkatan", value: "Ijazah dan silsilah yang tersambung kepada guru sebelumnya" },
      { label: "Batas peran", value: "Bukan objek sembah; tuntunannya diuji dengan Al-Qur'an dan Sunnah" },
    ],
    body: [
      { h: "Guru yang Menghadapkan kepada Allah", p: [
        "Mursyid adalah guru yang tugasnya menghadapkan murid kepada Allah, bukan kepada dirinya. Ia memberi takrir, yaitu wirid yang ditetapkan untuk murid; mengoreksi adab yang longgar; dan menjelaskan hambatan yang muncul ketika murid berjalan dalam suluk. Dalam kebiasaan tarekat, murid menyampaikan keadaan hatinya kepada mursyid secara jujur, dan mursyid menjawab dengan nasihat, wirid, atau latihan yang sesuai.",
        "Kedudukan mursyid dijaga oleh syarat yang jelas: ia harus memegang ijazah dengan silsilah yang tersambung kepada guru sebelumnya, dan amalannya dikenal shalih oleh lingkungannya. Gelar tidak cukup; sanad dan perilaku yang menjadi bukti.",
      ]},
      { h: "Jarak yang Sehat", p: [
        "Tradisi tarekat menuntun murid menghormati mursyid tanpa melampaui batas. Mursyid bukan objek sembah, dan permintaan apa pun tidak diarahkan kepadanya sebagai penyelamat; penyelamat satu-satunya adalah Allah. Setiap ucapan mursyid diterima dengan adab namun diuji dengan dalil, sebab tuntunan yang benar selalu berdiri di atas Al-Qur'an dan Sunnah. Dengan jarak yang sehat semacam ini, hubungan mursyid dan murid menjadi jalinan pendidikan yang menyehatkan, bukan ketergantungan buta.",
      ]},
    ],
    related: ["khalifah-tarekat", "silsilah", "tarekat", "rabithah"],
  },
  {
    slug: "musyawarah-khalifah",
    kind: 'glossary',
    title: "Musyawarah Khalifah",
    category: "Struktur Tarekat",
    summary: "Musyawarah khalifah adalah kebiasaan para khalifah tarekat duduk bersama menimbang urusan majelis, dari jadwal pengajian hingga penyelesaian persoalan murid.",
    facts: [
      { label: "Peserta", value: "Khalifah-khalifah yang memegang izin bimbingan dari mursyid" },
      { label: "Agenda lazim", value: "Koordinasi jadwal, layanan murid, dan keputusan kegiatan bersama" },
      { label: "Nilai yang dianut", value: "Syura atau musyawarah yang dianjurkan Al-Qur'an dalam urusan umat" },
    ],
    body: [
      { h: "Urusan Majelis yang Dibicarakan Bersama", p: [
        "Ketika murid bertambah banyak dan majelis tersebar di beberapa wilayah, urusan tarekat tidak lagi cukup ditangani satu orang. Di sinilah musyawarah khalifah berperan: para khalifah yang memegang izin bimbingan duduk bersama membahas jadwal halqah, pembagian tugas, kebutuhan murid baru, hingga penyelesaian persoalan yang muncul di lapangan. Keputusan yang lahir dari meja musyawarah biasanya lebih tenang dan lebih bisa dilaksanakan, sebab semua pihak yang menjalankan sudah diajak berunding.",
        "Al-Qur'an menganjurkan urusan diatur melalui syura, dan kebiasaan musyawarah khalifah mengambil semangat itu ke dalam tubuh tarekat.",
      ]},
      { h: "Batas yang Tetap Dijaga", p: [
        "Musyawarah khalifah mengurus kepentingan organisasi, namun batas kewenangan tetap dijaga. Persoalan wirid, takrir, dan ijazah kembali kepada mursyid yang memegang sanad, sebab itu bukan bidang yang dapat diputuskan lewat kebanyakan suara. Menurut kebiasaan yang berkembang, hasil musyawarah dilaporkan kepada mursyid untuk diberkahi dan ditetapkan. Pola semacam ini menjaga tarekat tetap tertib: organisasi berjalan dengan syura, sedangkan amalan tetap bersandar pada sanad.",
      ]},
    ],
    related: ["khalifah-tarekat", "mursyid", "tarekat"],
  },
  {
    slug: "nafs-kamilah",
    kind: 'glossary',
    title: "Nafs Kāmilah",
    titleAr: "النَّفْس الْكَامِلَة",
    category: "Kepercayaan & Maqamat",
    summary: "Nafs kāmilah adalah jiwa yang disebut sempurna dalam pembicaraan ahli tarekat: hati yang tenang mengenal Allah dan tampil santun dalam perilaku sehari-hari.",
    facts: [
      { label: "Posisi istilah", value: "Ujung pembicaraan nafs, melengkapi tingkatan ammarah, lawwamah, dan muthmainnah" },
      { label: "Ciri yang disebut", value: "Tunduk pada syariat, murah hati, dan bebas dari belenggu pujian serta celaan" },
      { label: "Catatan penting", value: "Kesempurnaan hakiki hanya milik Allah; manusia dituntut terus menuntut kebaikan" },
    ],
    body: [
      { h: "Ujung dari Pembicaraan Nafs", p: [
        "Pembicaraan tentang nafs dalam tradisi tasawuf lazim bergerak dari tingkatan yang bermasalah menuju keadaan yang tenang: ammarah yang mendorong pada maksiat, lawwamah yang menyalahkan dirinya, dan muthmainnah yang telah tenang karena yakin kepada Allah. Nafs kāmilah menjadi sebutan untuk puncak keadaan itu, jiwa yang telah matang dalam iman, bersih dalam niat, dan santun dalam pergaulan. Istilah ini banyak dipakai dalam pembicaraan tentang insan kamil, manusia sempurna, yang berkembang dalam literatur tasawuf.",
        "Menurut pembicaraan para ahli tarekat, nafs kāmilah bukan keadaan yang diumumkan sendiri. Ia dikenali dari perilaku: kepatuhan pada syariat yang tidak berkurang, lapang dada kepada sesama, dan hati yang tidak terbelenggu pujian.",
      ]},
      { h: "Menuntut Sempurna tanpa Mengaku Sempurna", p: [
        "Murid tarekat memandang nafs kāmilah sebagai arah berjalan, bukan gelar yang direbut. Kesempurnaan hakiki hanya milik Allah, dan manusia yang paling baik tetap membutuhkan taubat. Karena itu murid menuntut kebaikan dengan sungguh-sungguh sambil tetap rendah hati, membiarkan penilaian keadaannya berada di tangan gurunya dan Allah. Arah inilah yang menjaga pembicaraan tentang jiwa sempurna tetap menyehatkan, bukan menjadi jalan bagi pemujaan berlebihan kepada manusia.",
      ]},
    ],
    related: ["fana", "suluk", "mursyid"],
  },
  {
    slug: "nafs-lawwamah",
    kind: 'glossary',
    title: "Nafs Lawwāmah",
    titleAr: "النَّفْس اللَّوَّامَة",
    category: "Kepercayaan & Maqamat",
    summary: "Nafs lawwāmah adalah jiwa yang menyalahkan dirinya setelah berbuat salah; tingkat kesadaran dosa yang diambil sebagai pintu taubat dan perbaikan.",
    facts: [
      { label: "Sumber istilah", value: "Al-Qur'an surah al-Qiyamah ayat 2" },
      { label: "Tanda kehadirannya", value: "Rasa takut, malu, dan keinginan bertaubat setelah kelalaian" },
      { label: "Kedudukan", value: "Di antara nafs ammarah dan nafs muthmainnah dalam pembagian yang masyhur" },
    ],
    body: [
      { h: "Jiwa yang Menyalahkan Dirinya", p: [
        "Nafs lawwāmah dinamai langsung dalam Al-Qur'an, surah al-Qiyamah ayat 2, ketika Allah bersumpah pada jiwa yang banyak menyalahkan. Nama itu menggambarkan keadaan jiwa yang belum bebas dari godaan, namun tidak lagi nyaman di dalam maksiat. Saat tergelincir, ia menyalahkan dirinya; saat sadar, ia buru-buru kembali. Menurut pembagian yang masyhur di kalangan ulama, keadaan ini berdiri di antara nafs ammarah yang berani pada maksiat dan nafs muthmainnah yang telah tenang dalam iman.",
        "Banyak ahli tarbiyah memandang nafs lawwāmah sebagai keadaan yang berkah bagi murid, sebab murid yang berhenti menyalahkan dirinya biasanya berhenti pula memperbaiki diri.",
      ]},
      { h: "Pintu Menuju Keadaan yang Lebih Tinggi", p: [
        "Kesadaran berdosa dalam nafs lawwāmah harus dijaga agar tidak berubah menjadi murka berkepanjangan yang melelahkan hati. Menurut nasihat yang beredar di majelis tarekat, telaah diri ditutup dengan istigfar, taubat, dan kembali kepada wirid dengan hati yang lebih ringan. Murid tidak berhenti di rasa bersalah; ia bergerak ke arah perbaikan yang nyata. Dengan demikian nafs lawwāmah menjadi pintu menuju keadaan yang lebih tinggi, bukan ruang duduk yang akhirnya melumpuhkan.",
      ]},
    ],
    related: ["suluk", "tarekat", "mursyid"],
  },
  {
    slug: "nafs-muthmainnah",
    kind: 'glossary',
    title: "Nafs Muṭma'innah",
    titleAr: "النَّفْس الْمُطْمَئِنَّة",
    category: "Kepercayaan & Maqamat",
    summary: "Nafs muṭma'innah adalah jiwa yang tenang karena yakin kepada Allah; keadaan yang disebut Al-Qur'an dengan panggilan mulia pada akhir kehidupan.",
    facts: [
      { label: "Sumber istilah", value: "Al-Qur'an surah al-Fajr ayat 27 sampai 28" },
      { label: "Ciri", value: "Tenang dalam uji, tidak goyah oleh pujian maupun celaan" },
      { label: "Jalan yang menuntun", value: "Zikir, kepatuhan syariat, dan adab kepada guru dalam bimbingan tarekat" },
    ],
    body: [
      { h: "Jiwa yang Telah Tenang", p: [
        "Nafs muṭma'innah disebut dalam Al-Qur'an surah al-Fajr, ketika Allah berfirman kepada jiwa yang tenang agar kembali kepada-Nya dengan ridha dan diridha. Keadaan ini menjadi harapan terindah yang ditawarkan Al-Qur'an: jiwa yang tidak lagi bergolak oleh panik dunia, karena penuhnya dengan yakin kepada Allah. Ia tetap mengalami uji seperti manusia lain, namun uji tidak menumbuhkan keluh yang lama; ia cepat kembali berdiri.",
        "Menurut pembagian yang masyhur, nafs muṭma'innah berada di atas nafs lawwāmah. Keadaan ini bukan hadiah yang jatuh tanpa sebab, melainkan buah dari perjalanan yang panjang.",
      ]},
      { h: "Jalan Menuju Ketenangan", p: [
        "Para pengamal tarekat menempuh keadaan ini melalui jalan yang sederhana namun berat: dzikir yang rutin, kepatuhan pada syariat yang tidak longgar, dan adab kepada mursyid dalam bimbingan. Ketenangan hati yang benar terbaca dari perilaku: murid yang muṭma'innah tidak rakus pujian, tidak pincang oleh celaan, dan berbagi dengan lapang. Halaman ini menghadirkan istilah sebagaimana ia hidup dalam pembicaraan Al-Qur'an dan tradisi tarekat, sebagai arah yang menunggu di ujung suluk.",
      ]},
    ],
    related: ["fana", "suluk", "dzikir"],
  },
  {
    slug: "napas-dzikir",
    kind: 'glossary',
    title: "Napas Dzikir",
    category: "Amalan & Wirid",
    summary: "Napas dzikir adalah kebiasaan menyinkronkan tarikan dan hembusan napas dengan bacaan zikir; latihan kehadiran hati di bawah bimbingan mursyid.",
    facts: [
      { label: "Bentuk latihan", value: "Menyatukan irama napas dengan lafal zikir secara teratur" },
      { label: "Tujuan", value: "Merapatkan konsentrasi dan menjaga keteraturan wirid" },
      { label: "Aturan penting", value: "Ditempuh sesuai takrir mursyid, bukan eksperimen pribadi" },
    ],
    body: [
      { h: "Irama yang Menautkan Hati", p: [
        "Napas dzikir adalah latihan menautkan bacaan zikir dengan perjalanan napas: lafal mengikuti tarikan, hembusan mengiringi penutup, dan irama itu dijaga stabil dari awal wirid hingga akhir. Dalam kebiasaan banyak majelis tarekat di Indonesia, sinkronisasi semacam ini membantu murid yang kesulitan berkonsentrasi, sebab napas yang tenang menarik hati untuk ikut tenang. Latihan ini menjadikan zikir tidak sekadar dibaca, tetapi dihidupi oleh seluruh badan.",
        "Di sisi lain, banyak pengamal Naqsyabandiyah justru menempuh zikir tanpa pengaturan napas, seperti metode mursalah. Keragaman ini menunjukkan bahwa napas dzikir adalah satu bentuk latihan di antara banyak bentuk, bukan ukuran mutlak keabsahan.",
      ]},
      { h: "Keberhati-hatian yang Dianjurkan", p: [
        "Pengaturan napas menyentuh badan, karena itu dianjurkan berhati-hati. Murid yang memiliki gangguan pernapasan atau jantung menyampaikan keadaannya kepada mursyid sebelum mengikuti latihan bersama, dan takrir disesuaikan dengan kekuatan masing-masing. Latihan napas dzikir bukan latihan menahan napas berlebihan; tujuannya kehadiran hati, bukan tahan napas. Bila irama membuat dada sesak, murid mengembalikan wiridnya ke irama yang santai dan bertanya kepada gurunya.",
      ]},
    ],
    related: ["dzikir", "wirid", "mursyid"],
  },
  {
    slug: "naqsabandiyah",
    kind: 'glossary',
    title: "Naqsyabandiyah",
    titleAr: "النَّقْشَبَنْدِيَّة",
    category: "Struktur Tarekat",
    summary: "Naqsyabandiyah adalah tarekat besar yang menekankan zikir hati dan khalwat dar anjuman; jalur ini berkembang luas di Nusantara hingga hari ini.",
    facts: [
      { label: "Pusat sejarah", value: "Asia Tengah, dengan lingkaran Bukhara sebagai pangkal yang masyhur" },
      { label: "Ciri metode", value: "Zikir qalbi, khalwat dar anjuman, dan kaidah-kaidah seperti nazar bar qadam" },
      { label: "Kedudukan syariat", value: "Wirid dan adabnya berdiri di atas Al-Qur'an dan Sunnah" },
    ],
    body: [
      { h: "Jalur Zikir Hati dari Asia Tengah", p: [
        "Naqsyabandiyah adalah salah satu tarekat terbesar dalam sejarah tasawuf. Jalur ini tumbuh di Asia Tengah, dan nama besar yang melekat erat padanya adalah Baha'uddin Naqsyaband, tokoh abad ke-8 Hijriah yang makamnya di dekat Bukhara menjadi pusat penisbatan jalur. Ciri khas Naqsyabandiyah terletak pada metodenya: dzikir diarahkan ke dalam hati tanpa kelibat, murid berlatih khalwat dar anjuman atau menyendiri di tengah keramaian, dan kaidah-kaidah seperti nazar bar qadam mengingatkan murid menjaga kesadaran dalam setiap langkah.",
        "Menurut tradisi tarekat, silsilah Naqsyabandiyah tersambung melalui Abu Bakar ash-Shiddiq, berbeda dari banyak jalur lain yang tersambung melalui Ali bin Abi Thalib. Penisbatan semacam ini dijaga dalam silsilah tertulis dan ijazah.",
      ]},
      { h: "Tumbuh dan Tersebar di Nusantara", p: [
        "Naqsyabandiyah tiba di Nusantara dan berkembang pesat sejak abad ke-19 melalui ulama-ulama yang membawa ijazah dari Hijaz. Jalur ini menurunkan berbagai cabang, di antaranya Naqsyabandiyah-Khālidiyah dan Naqsyabandiyah-Mujaddidiyah, dan menjadi salah satu tulang punggung Tarekat Qodiriyah Naqsyabandiyah yang hidup di Indonesia hari ini. Di halqah-halqahnya, murid diajarkan wirid, adab kepada mursyid, dan kepatuhan syariat sebagai pangkal segala amalan.",
      ]},
    ],
    related: ["tarekat", "silsilah", "khalwat-dar-anjuman", "mursyid"],
  },
  {
    slug: "naqsabandiyah-khalidiyah",
    kind: 'glossary',
    title: "Naqsyabandiyah-Khālidiyah",
    category: "Struktur Tarekat",
    summary: "Naqsyabandiyah-Khālidiyah adalah cabang Naqsyabandiyah yang menisbatkan diri kepada Maulana Khālid al-Baghdādī dan tersebar luas di Nusantara.",
    facts: [
      { label: "Nama penisbat", value: "Maulana Khālid al-Baghdādī, syeikh Naqsyabandiyah abad ke-19" },
      { label: "Ciri pembinaan", value: "Pengembangan kaidah Naqsyabandiyah dengan pembinaan murid yang teratur" },
      { label: "Kehadiran di Nusantara", value: "Banyak silsilah tarekat di Indonesia tersambung ke jalur ini" },
    ],
    body: [
      { h: "Cabang yang Membuka Jalan ke Hijaz", p: [
        "Naqsyabandiyah-Khālidiyah adalah cabang Naqsyabandiyah yang menisbatkan diri kepada Maulana Khālid al-Baghdādī, syeikh Naqsyabandiyah yang berpusat di Baghdad pada awal abad ke-19. Murid-muridnya menyebarkan ijazah jalur ini ke berbagai negeri, termasuk ke Hijaz, dan dari jalur itulah Naqsyabandiyah berkembang pesat di Nusantara melalui ulama-ulama yang pulang membawa izin. Sebagian besar silsilah Naqsyabandiyah yang hidup di Indonesia hari ini menyebut nama Khālid al-Baghdādī di dalam sanadnya.",
        "Cabang ini melanjutkan ciri utama Naqsyabandiyah: dzikir hati, khalwat dar anjuman, dan adab yang ketat kepada guru. Yang membedakan pada umumnya adalah garis sanad dan kebiasaan pembinaan yang diwariskan murid-murid Khālid.",
      ]},
      { h: "Tempat dalam Peta Tarekat Indonesia", p: [
        "Di Indonesia, jalur Khālidiyah menjumpai penampilan yang beragam: ada yang hidup dalam pesantren tarekat, ada yang berjalan melalui majelis-majelis kota, dan sebagian menjadi bagian dari Tarekat Qodiriyah Naqsyabandiyah yang menggabungkan sanad Qadiriyah dan Naqsyabandiyah. Keragaman ini tidak memutus kebersamaan, sebab murid-murid Khālidiyah tetap diikat oleh wirid, adab, dan penghormatan kepada sanad yang sama.",
      ]},
    ],
    related: ["tarekat", "silsilah", "sanad", "mursyid"],
  },
  {
    slug: "naqsabandiyah-mujaddidiyah",
    kind: 'glossary',
    title: "Naqsyabandiyah-Mujaddidiyah",
    category: "Struktur Tarekat",
    summary: "Naqsyabandiyah-Mujaddidiyah adalah jalur Naqsyabandiyah yang menisbatkan diri kepada Ahmad Sirhindi, mujaddid abad ke-10 Hijriah menurut penisbatan masyhur.",
    facts: [
      { label: "Nama penisbat", value: "Ahmad Sirhindi, ulama India yang digelari Mujaddid Alf Tsani" },
      { label: "Penekanan jalur", value: "Penajaman pembicaraan tauhid dan pembinaan murid dalam adab yang ketat" },
      { label: "Kehadiran", value: "Dijumpai pada sejumlah silsilah Naqsyabandiyah di Indonesia dan dunia" },
    ],
    body: [
      { h: "Warisan Mujaddid Alf Tsani", p: [
        "Naqsyabandiyah-Mujaddidiyah adalah jalur Naqsyabandiyah yang sanadnya melewati Ahmad Sirhindi, ulama dari India abad ke-10 Hijriah yang masyhur digelari Mujaddid Alf Tsani, sebutan penghormatan sebagai pembaru milenium kedua hijriah. Sirhindi dikenal karena usahanya menajamkan pembicaraan tauhid di lingkungan tarekat, dan jalur yang menisbatkan diri kepadanya melanjutkan penekanan tersebut sambil menjaga metode zikir hati yang khas Naqsyabandiyah.",
        "Jalur ini tersebar di berbagai negeri, dari Asia Selatan hingga Asia Tenggara. Di Indonesia, sejumlah silsilah Naqsyabandiyah mencantumkan jalur Mujaddidiyah di dalam sanadnya.",
      ]},
      { h: "Kedudukan di Tengah Keluarga Naqsyabandiyah", p: [
        "Naqsyabandiyah-Mujaddidiyah bukan tandingan bagi cabang lain, melainkan satu cabang di dalam keluarga besar Naqsyabandiyah. Perbedaan antarcabang umumnya berdiri pada garis sanad dan kebiasaan pembinaan, sementara pangkal amalan tetap sama: kepatuhan syariat, dzikir hati, dan adab kepada mursyid. Bagi murid, memahami penisbatan jalur membantu membaca silsilahnya sendiri dengan jujur, dan bagi penelusur sanad, nama Mujaddidiyah menjadi penunjuk jalan saat menelusuri dokumen ijazah lintas negeri.",
      ]},
    ],
    related: ["silsilah", "tarekat", "sanad"],
  },
  {
    slug: "nazar-bar-qadam",
    kind: 'glossary',
    title: "Nazar bar Qadam",
    titleAr: "نَظَر بَر قَدَم",
    category: "Amalan & Wirid",
    summary: "Nazar bar qadam adalah kaidah Naqsyabandiyah yang berarti memandang langkah: murid menjaga pandangan dan langkahnya agar hati tidak tercebur kelalaian.",
    facts: [
      { label: "Makna harfiah", value: "Memandang kepada langkah" },
      { label: "Kedudukan", value: "Salah satu kaidah Naqsyabandiyah yang masyhur, bersama khalwat dar anjuman" },
      { label: "Arah latihan", value: "Kesadaran penuh saat berjalan, duduk, berbicara, dan bekerja" },
    ],
    body: [
      { h: "Menjaga Kesadaran dalam Setiap Langkah", p: [
        "Nazar bar qadam adalah kaidah Naqsyabandiyah yang secara harfiah berarti memandang kepada langkah. Menurut literatur Naqsyabandiyah, kaidah ini dinisbatkan kepada Abdul Khaliq al-Ghujdawani, salah satu guru besar awal jalur tersebut. Ajarannya sederhana untuk didengar dan berat untuk diamalkan: murid menjaga pandangan dan langkahnya ketika berjalan, sehingga hati tidak tercerai oleh pemandangan yang sia-sia dan pikiran tidak tercebur dalam kelalaian.",
        "Maknanya melampaui gerak badan. Menurut penjelasan yang beredar di kalangan pengamal, nazar bar qadam mengajarkan kesadaran penuh dalam seluruh pekerjaan: saat duduk, saat berbicara, saat bekerja, dan saat menghadap orang lain.",
      ]},
      { h: "Kaidah yang Hidup di Luar Halqah", p: [
        "Kebesaran kaidah ini terbaca ketika murid keluar dari halqah. Di tengah keramaian kota, layar, dan urusan dunia, murid Naqsyabandiyah dikenang untuk menjaga langkahnya: tidak menyebar pandangan semaunya, tidak berjalan tanpa arah, dan tidak membiarkan hati melayang mengikuti apa pun yang lewat. Latihan ini berdampingan dengan kaidah khalwat dar anjuman, dan keduanya menjadikan dzikir hati Naqsyabandiyah bergerak mengikuti murid ke mana pun ia pergi.",
      ]},
    ],
    related: ["khalwat-dar-anjuman", "dzikir", "tarekat"],
  },
  {
    slug: "padang-tarekat",
    kind: 'glossary',
    title: "Padang Tarekat",
    category: "Kebiasaan & Tradisi",
    summary: "Padang tarekat adalah ruang terbuka yang dipakai untuk halqah dan zikir bersama saat jamaah melebihi daya tampung bangunan majelis.",
    facts: [
      { label: "Bentuk ruang", value: "Lapangan, halaman pesantren, atau tanah terbuka milik komunitas" },
      { label: "Kegiatan lazim", value: "Halqah besar, wirid bersama, pengajian umum, dan perayaan haul" },
      { label: "Nilai yang dijaga", value: "Ketertiban barisan dan adab pengiring zikir tetap sama seperti di dalam bangunan" },
    ],
    body: [
      { h: "Halqah yang Membuka Langit", p: [
        "Bila jumlah jamaah bertambah banyak, halqah tarekat pindah ke ruang yang lebih lapang: halaman pesantren, lapangan desa, atau tanah terbuka yang disiapkan khusus. Di tempat yang oleh banyak komunitas disebut padang tarekat itu, murid duduk berbaris rapi, wirid dibacakan bersama, dan nasihat pengajian disampaikan dari panggung sederhana. Suasana halqah besar semacam ini biasanya menyertai perayaan haul, pengkhataman besar, atau pengajian akbar yang menarik murid dari berbagai daerah.",
        "Ruang terbuka menghadirkan tantangan tersendiri: udara yang panas, suara yang harus sampai ke barisan belakang, dan ketertiban yang harus dijaga. Karena itu penyelenggaraan padang tarekat biasanya melibatkan banyak petugas dari kalangan murid sendiri.",
      ]},
      { h: "Adab yang Berpindah Tempat", p: [
        "Yang berpindah hanya lokasinya, bukan adabnya. Barisan yang lurus, kekhusyukan yang dijaga, dan penghormatan kepada guru tetap dirawat di bawah langit terbuka. Bagi murid, padang tarekat sering meninggalkan ingatan yang dalam: ribuan suara yang berdatangan dalam satu irama dzikir, dan kesan bahwa majelis ini hidup di mana pun muridnya berkumpul atas nama Allah.",
      ]},
    ],
    related: ["tarekat", "dzikir", "khalifah-tarekat"],
  },
  {
    slug: "panji-tarekat",
    kind: 'glossary',
    title: "Panji Tarekat",
    category: "Kebiasaan & Tradisi",
    summary: "Panji tarekat adalah bendera dan lambang majelis pada prosesi besar; penanda identitas jalur yang dibawa dengan adab, bukan benda yang dimintai berkah.",
    facts: [
      { label: "Bentuk", value: "Bendera, umbul, dan lambang yang menuliskan nama majelis atau jalur tarekat" },
      { label: "Tempat muncul", value: "Prosesi haul, maulid, pengkhataman besar, dan penyambutan tamu" },
      { label: "Makna", value: "Penanda identitas dan kebersamaan, bukan benda yang dimintai kekuatan" },
    ],
    body: [
      { h: "Penanda yang Berkibar di Prosesi", p: [
        "Pada acara besar majelis tarekat, sering tampak panji-panji berkibar: bendera dengan tulisan nama majelis, umbul dengan lambang jalur, dan alat peraga yang dibawa jamaah saat prosesi. Panji tarekat berfungsi menandai identitas, mengatur arah prosesi, dan menghadirkan keindahan yang menyambut tamu. Warna dan bentuknya berbeda antar majelis, sebab tiap komunitas menata lambangnya sesuai adab jalurnya masing-masing.",
        "Kehadiran panji tercatat panjang dalam kehidupan keagamaan Nusantara, mengikuti kebiasaan prosesi haul dan perayaan yang hidup di sekitar pesantren. Di sebagian majelis, panji juga diarak saat wisuda santri dan pengajian akbar, sehingga menjadi bagian dari ingatan visual komunitas murid.",
      ]},
      { h: "Batas yang Dijaga Murid", p: [
        "Murid menjaga batas dalam memaknai panji. Benda itu dibawa dengan rasa hormat karena mewakili majelis, namun tidak dimintai kekuatan dan tidak dijadikan penjaga. Kekuatan hanya diminta kepada Allah, dan lambang hanya menyatakan kebersamaan jamaah. Dengan batas semacam ini, kebiasaan membawa panji tetap sehat: ia menghidupkan suasana prosesi dan menandai rumah komunitas, tanpa menyusup menjadi kepercayaan yang menyimpang.",
      ]},
    ],
    related: ["tarekat", "silsilah", "mursyid"],
  },
  {
    slug: "pegon",
    kind: 'glossary',
    title: "Pegon",
    category: "Kitab & Naskah",
    summary: "Pegon adalah aksara Arab yang dipakai menulis bahasa Jawa, Sunda, dan Melayu; medium utama kitab tarekat dan kitab kuning berbahasa Nusantara.",
    facts: [
      { label: "Fungsi utama", value: "Menuliskan bahasa Nusantara dengan huruf Arab beserta huruf tambahan" },
      { label: "Huruf tambahan", value: "Penanda bunyi p, g, ng, ny, dan c yang tidak ada dalam Arab asli" },
      { label: "Karya yang memakainya", value: "Kitab fiqih, tasawuf, naskah tarekat, dan ijazah berbahasa Jawa maupun Sunda" },
    ],
    body: [
      { h: "Huruf Arab untuk Bahasa Nusantara", p: [
        "Pegon adalah kebiasaan menulis bahasa Jawa, Sunda, Melayu, dan bahasa Nusantara lain dengan huruf Arab. Karena bunyi-bunyi Nusantara tidak semua muat dalam huruf Arab asli, para penulis mengembangkan huruf tambahan untuk bunyi p, g, ng, ny, dan c. Hasilnya menjadi aksara campuran yang dikuasai santri dan kiayi selama ratusan tahun, dan hampir seluruh kitab kuning berbahasa Jawa ditulis dengan pegon sebelum aksara Latin menyebar luas.",
        "Asal nama pegon banyak ditafsirkan berkaitan dengan bunyi yang tersendat atau asing bila dibaca pembaca Arab, namun penelusuran etimologinya belum seragam di kalangan peneliti.",
      ]},
      { h: "Rumah bagi Naskah Tarekat", p: [
        "Bagi dunia tarekat, pegon adalah rumah tempat warisan disimpan. Ijazah silsilah, catatan wirid, syair suluk, dan kitab tasawuf terjemahan banyak ditulis dalam pegon, sehingga membaca naskah tarekat Nusantara menuntut kemampuan dua arah: menguasai huruf Arab dan memahami bahasa setempat. Kini kemampuan membaca pegon mulai langka di kalangan muda, dan digitalisasi naskah pegon menjadi pekerjaan penting agar warisan itu tetap bisa dibaca generasi berikutnya.",
      ]},
    ],
    related: ["ijazah", "sanad", "tarekat"],
  },
  {
    slug: "pendidikan-formal-tarekat",
    kind: 'glossary',
    title: "Pendidikan Formal di Tarekat",
    category: "Struktur Tarekat",
    summary: "Pendidikan formal di tarekat adalah penyelenggaraan sekolah dan madrasah oleh pesantren tarekat agar murid memperoleh ilmu umum berdampingan dengan wirid.",
    facts: [
      { label: "Wadah", value: "Madrasah diniyah, sekolah umum, dan lembaga yang dinaungi pesantren tarekat" },
      { label: "Kurikulum", value: "Ilmu agama berdampingan dengan mata pelajaran umum" },
      { label: "Kehadiran wirid", value: "Jadwal zikir tetap berjalan di sela kegiatan belajar" },
    ],
    body: [
      { h: "Sekolah yang Tumbuh di Rumah Wirid", p: [
        "Banyak pesantren tarekat tidak berhenti pada pengajian wirid. Mereka mengelola madrasah diniyah, sekolah dasar, hingga sekolah menengah, sehingga santri memperoleh pendidikan formal yang diakui negara sambil tetap hidup dalam ritme majelis. Jadwal belajar pagi berdampingan dengan jadwal wirid sore, dan ujian sekolah berdampingan dengan takrir. Pola ini menjawab tuntutan zaman: orang tua menitipkan anak untuk ilmu dunia dan akhirat sekaligus.",
        "Manfaatnya terbaca pada murid yang besar: mereka membawa adab tarekat ke kampus, perkantoran, dan komunitas mereka, sambil tetap kembali kepada majelis untuk memelihara wirid.",
      ]},
      { h: "Tantangan Penyeimbang", p: [
        "Menggabungkan pendidikan formal dan tarekat menuntut penyeimbang yang cermat. Tuntutan akademik tidak boleh meminggirkan wirid, dan tuntutan wirid tidak boleh mematahkan semangat belajar. Menurut kebiasaan banyak pesantren tarekat, penyeimbang ini dijaga lewat jadwal yang disiplin dan pembinaan yang lembut. Murid yang lelah setelah ujian pun dikenang kembali kepada dzikir yang menyegarkan, bukan kepada istirahat yang menghapus wirid sama sekali. Dengan demikian, sekolah di lingkungan tarekat menjadi jalan bagi murid untuk berprestasi tanpa kehilangan akar ruhaninya.",
      ]},
    ],
    related: ["tarekat", "mursyid", "khalifah-tarekat"],
  },
  {
    slug: "pendidikan-tinggi-tarekat",
    kind: 'glossary',
    title: "Pendidikan Tinggi & Tarekat",
    category: "Struktur Tarekat",
    summary: "Pendidikan tinggi dan tarekat bertemu di dua arah: kampus yang mengkaji tarekat secara akademik dan mahasiswa murid yang tetap menjaga wirid di tengah kuliah.",
    facts: [
      { label: "Kajian akademik", value: "Tarekat menjadi bahan penelitian di program studi Islam, sejarah, dan antropologi" },
      { label: "Murid mahasiswa", value: "Banyak pengamal tarekat melanjutkan studi tinggi sambil menjaga halqah" },
      { label: "Arah kerja bersama", value: "Berkembang dorongan digitalisasi naskah dan penelusuran silsilah lintas lembaga" },
    ],
    body: [
      { h: "Tarekat di Meja Penelitian", p: [
        "Tarekat telah lama menjadi bahan kajian di perguruan tinggi. Skripsi, tesis, dan disertasi menelusuri silsilah, kitab, tokoh, dan praktik wirid di berbagai jalur, dari kampus Islam hingga program studi sejarah dan antropologi. Kajian semacam ini membantu menata ulang sejarah tarekat Nusantara dengan data yang teliti, dan hasilnya sering kembali membantu majelis memahami akar jalurnya sendiri.",
        "Arah lain bergerak sebaliknya: murid tarekat yang melanjutkan kuliah membawa wirid ke kota kampus. Mereka mencari atau mendirikan halqah baru, menjaga koneksi dengan mursyid dari jauh, dan menjadikan tarekat tetap hidup di tengah generasi terdidik.",
      ]},
      { h: "Titik Temu yang Perlu Dirawat", p: [
        "Titik temu terbaik antara pendidikan tinggi dan tarekat adalah kejujuran data. Kampus menyumbang metode penelitian yang teliti, sementara majelis menyumbang akses ke naskah, ijazah, dan ingatan para guru. Ketika keduanya bekerja saling menghormati, warisan tarekat terdokumentasi lebih baik, dan kesalahan informasi yang beredar bebas lebih mudah dibetulkan. Platform pengetahuan semacam 165 berdiri di titik temu ini, menjembatani akademik dan majelis dalam satu glosarium yang terbuka.",
      ]},
    ],
    related: ["visi-165", "tarekat", "silsilah"],
  },
  {
    slug: "pendiri-165",
    kind: 'glossary',
    title: "Pendiri 165",
    category: "Sejarah & Tokoh",
    summary: "Pendiri 165 adalah Tuan Haji Gugun Gunara, yang juga dikenal dengan nama Muhammad Lutfi Azmi, penggagas platform pengetahuan Tarekat Qodiriyah Naqsyabandiyah.",
    facts: [
      { label: "Nama", value: "Tuan Haji Gugun Gunara, juga dikenal sebagai Muhammad Lutfi Azmi" },
      { label: "Peran", value: "Penggagas dan pendiri platform pengetahuan 165.web.id" },
      { label: "Arah kerja", value: "Menyusun glosarium, pustaka, dan arsip TQN secara terbuka untuk publik" },
    ],
    body: [
      { h: "Penggagas Rumah Pengetahuan TQN", p: [
        "Platform 165.web.id berdiri atas gagasan Tuan Haji Gugun Gunara, yang juga dikenal dengan nama Muhammad Lutfi Azmi. Ia menginginkan pengetahuan Tarekat Qodiriyah Naqsyabandiyah tersusun dalam halaman-halaman yang nyata, jujur, dan dapat dibaca siapa pun melalui mesin pencari. Dari gagasan itu lahirlah glosarium, pustaka, atlas, dan arsip yang saling terkait, dengan satu slug untuk satu halaman agar setiap rujukan tetap sah dalam waktu yang panjang.",
        "Halaman ini sengaja hanya memuat keterangan yang dapat dipertanggungjawabkan. Data pribadi lain di luar perannya sebagai pendiri tidak dicantumkan di sini, sebagai bentuk kehati-hatian platform terhadap keterangan yang belum dapat diverifikasi.",
      ]},
      { h: "Arah Kerja yang Dititipkan", p: [
        "Peran pendiri pada platform pengetahuan bukan hanya membangun, melainkan juga menetapkan arah: konten ditulis dengan kejujuran absolut, riwayat tradisional diberi label menurut tradisi tarekat, dan yang belum pasti tidak dijadikan fakta. Semangat semacam ini berdampingan dengan adab tarekat yang menghormati guru, sebab kejujuran justru bentuk penghormatan yang paling tahan lama. Halaman-halaman 165 hari ini adalah kelanjutan dari arah yang ditetapkan penggagasnya.",
      ]},
    ],
    related: ["visi-165", "mursyid", "tarekat"],
  },
  {
    slug: "pendopo-dzikir",
    kind: 'glossary',
    title: "Pendopo Dzikir",
    category: "Kebiasaan & Tradisi",
    summary: "Pendopo dzikir adalah paviliun terbuka tempat halqah dilaksanakan; ruang campuran tertutup terbuka yang menjadi wajah keterbukaan majelis tarekat.",
    facts: [
      { label: "Arsitektur", value: "Bangunan beratap dengan ruang terbuka tanpa sekat dinding penuh" },
      { label: "Fungsi", value: "Tempat wirid, takrir, pengajian, dan menyambut tamu majelis" },
      { label: "Sebaran", value: "Dijumpai di pesantren Jawa dan berbagai daerah dengan adaptasi lokal" },
    ],
    body: [
      { h: "Ruang yang Mengalir Udaranya", p: [
        "Pendopo adalah paviliun yang beratap namun terbuka sisi-sisinya, warisan arsitektur Jawa yang diadopsi pesantren dan majelis tarekat. Di bawah atap pendopo, udara mengalir dan pandangan meluas, sementara jamaah duduk berkeliling atau berbaris mengikuti adab halqah. Bagi majelis tarekat, pendopo menjadi tempat yang paling sering dipakai: wirid pagi dan sore, takrir, pengajian kitab, hingga menyambut tamu yang datang bertanya.",
        "Pemilihan pendopo sebagai rumah dzikir menyimpan pesan yang halus. Ruang yang terbuka menghadirkan keterbukaan, dan tempat duduk yang sama rata menghadirkan persaudaraan.",
      ]},
      { h: "Pendopo dan Adab Halqah", p: [
        "Di dalam pendopo, adab halqah tetap berlaku penuh: barisan yang rapi, suara yang dijaga, dan penghormatan kepada guru yang memimpin. Pendopo juga menjadi tempat berlangsungnya acara kecil yang hangat, seperti khataman wirid atau pemberian takrir kepada murid baru. Kini sebagian pendopo didokumentasikan dalam foto dan video majelis, menjadikannya arsip visual yang menunjukkan wajah tarekat Nusantara yang sederhana dan bersahabat. Bagi murid baru, duduk pertama kali di pendopo sering menjadi kenangan pertama tentang hangatnya majelis tarekat.",
      ]},
    ],
    related: ["tarekat", "dzikir", "wirid"],
  },
  {
    slug: "pengajian-ramadhan",
    kind: 'glossary',
    title: "Pengajian Ramadhan",
    category: "Kebiasaan & Tradisi",
    summary: "Pengajian Ramadhan adalah rangkaian majelis ilmu selama bulan puasa: tafsir, hadis, fiqih puasa, dan wirid bersama yang memadatkan kegiatan majelis tarekat.",
    facts: [
      { label: "Waktu", value: "Berlangsung sepanjang bulan Ramadhan, pada siang maupun malam" },
      { label: "Bahan lazim", value: "Tafsir, hadis, fiqih puasa, dan dzikir bersama" },
      { label: "Suasana", value: "Jamaah bertambah banyak dan murid kembali merapatkan diri kepada majelis" },
    ],
    body: [
      { h: "Bulan yang Memanggil Pulang", p: [
        "Ramadhan membawa padatnya majelis tarekat. Pengajian rutin bertambah jadwalnya, murid yang jarang hadir kembali mendatangi halqah, dan pesantren menerima tamu yang ingin mengisi malam dengan ibadah. Materi pengajian menyesuaikan musimnya: tafsir ayat-ayat puasa, hadis tentang keutamaan Ramadhan, fiqih yang membenahi cara beribadah, dan wirid bersama yang diperpanjang. Dengan padatnya kegiatan, bulan puasa menjadi pembaruan tahunan bagi kehidupan tarekat.",
        "Kegiatan ini berdampingan dengan amalan bulan itu: tadarus, shalat tarawih, dan sedekah yang melimpah di lingkungan majelis.",
      ]},
      { h: "Pembaruan Tahunan bagi Murid", p: [
        "Bagi murid, pengajian Ramadhan menjadi titik koreksi tahunan: wirid yang mengendur dirapatkan, adab yang longgar dipelihara kembali, dan niat yang semrawut ditata ulang. Menurut kebiasaan banyak majelis, mursyid atau khalifah memanfaatkan bulan ini untuk memperhatikan murid baru yang datang berbondong-bondong, agar mereka mendapat takrir yang benar sejak awal. Ketika Syawal tiba, majelis berharap membawa pulang buah yang sama: kebiasaan baik yang tidak berhenti bersama berakhirnya puasa.",
      ]},
    ],
    related: ["tarekat", "wirid", "mursyid"],
  },
  {
    slug: "pengasuh",
    kind: 'glossary',
    title: "Pengasuh",
    category: "Struktur Tarekat",
    summary: "Pengasuh adalah pembina utama pesantren yang menjamin pengajian, wirid, dan keseharian santri berjalan; gelar yang biasa melekat pada pendiri atau penerusnya.",
    facts: [
      { label: "Tugas pokok", value: "Menjaga pengajian, mendidik santri, dan memelihara sarana pesantren" },
      { label: "Kedudukan umum", value: "Biasanya pendiri pesantren atau penerus yang ditunjuk dari kalangan kiayi" },
      { label: "Hubungan dengan tarekat", value: "Di pesantren tarekat, pengasuh sering sekaligus mursyid atau pengurus majelis" },
    ],
    body: [
      { h: "Orang yang Menentukan Suasana Pondok", p: [
        "Pengasuh adalah pembina utama sebuah pesantren. Ia menjamin pengajian berjalan, santri terdidik, dan sarana terpelihara, dari masalah kecil seperti kebutuhan harian hingga arah besar seperti pengembangan lembaga. Dalam kebiasaan pesantren Indonesia, gelar pengasuh biasanya melekat pada pendiri, dan bila pendiri wafat, pengasuhan dilanjutkan oleh keluarga atau kiayi yang ditunjuk. Santri mengenal pengasuh sebagai orang yang keputusannya menenangkan dan yang kehadirannya menentukan suasana pondok.",
        "Di pesantren tarekat, peran pengasuh berdampingan dengan peran mursyid. Seorang pengasuh boleh saja bukan mursyid, namun ia menjamin wirid tarekat di pondoknya berjalan tertib di bawah bimbingan guru yang berwenang.",
      ]},
      { h: "Amanah yang Diteruskan", p: [
        "Pengasuhan adalah amanah yang diteruskan, bukan gelar yang diwarisi secara otomatis. Penerus dituntut menjaga kepercayaan pendiri: pengajian tidak dipotong, tarekat tidak disimpangkan, dan santri tidak diabaikan. Karena itu pergantian pengasuh biasanya melalui musyawarah keluarga dan para kiayi, disertai penghormatan kepada mursyid bila pesantren itu berdiri di atas majelis tarekat. Halaman ini menjelaskan istilah sebagaimana ia dipakai di lingkungan pesantren Indonesia.",
      ]},
    ],
    related: ["mursyid", "tarekat", "khalifah-tarekat"],
  },
  {
    slug: "pengganti-mursyid",
    kind: 'glossary',
    title: "Pengganti Mursyid",
    category: "Struktur Tarekat",
    summary: "Pengganti mursyid adalah khalifah atau amir yang diminta menggantikan tugas harian mursyid saat mursyid berhalangan hadir membimbing murid.",
    facts: [
      { label: "Dasar penugasan", value: "Izin dari mursyid, bukan pengangkatan sepihak dari murid" },
      { label: "Tugas lazim", value: "Mengiringi wirid, menjawab persoalan ringan, dan menjaga ketertiban majelis" },
      { label: "Batas kewenangan", value: "Wirid baru dan ijazah tetap menjadi kewenangan mursyid" },
    ],
    body: [
      { h: "Ketika Guru Berhalangan Hadir", p: [
        "Mursyid tidak selalu dapat hadir di setiap halqah. Perjalanan, sakit, dan urusan di wilayah lain bisa berhalangkan kehadirannya. Untuk menjaga amalan murid tidak terputus, mursyid menunjuk pengganti dari kalangan khalifah atau amir majelis. Pengganti mengiringi wirid sesuai takrir yang sudah ditetapkan, menjawab persoalan ringan, dan memastikan halqah berjalan tertib sampai mursyid kembali.",
        "Menurut kebiasaan tarekat, penunjukan pengganti lahir dari izin mursyid, bukan dari kesepakatan murid semata. Izin inilah yang menjaga keabsahan bimbingan dan menghindari tuntunan yang saling bertabrakan.",
      ]},
      { h: "Batas yang Menjaga Tertib", p: [
        "Kewenangan pengganti berbatas pada kebutuhan harian. Wirid baru, takrir yang berbeda, dan ijazah tetap menjadi hak mursyid yang memegang sanad. Murid yang menghadapi persoalan berat dianjurkan menuliskannya atau menyimpannya untuk disampaikan kepada mursyid langsung. Batas semacam ini bukan bentuk kaku yang mengekang, melainkan jalan yang menjaga satu jalur memiliki satu arah bimbingan, sehingga murid tidak tertarik ke tuntunan yang berbeda-beda. Kebiasaan ini juga menenangkan murid, sebab mereka tahu di mana bertanya saat guru utama belum kembali hadir.",
      ]},
    ],
    related: ["khalifah-tarekat", "mursyid", "rabithah"],
  },
  {
    slug: "pengkhataman",
    kind: 'glossary',
    title: "Pengkhataman",
    category: "Kebiasaan & Tradisi",
    summary: "Pengkhataman adalah acara penyelesaian bacaan, baik menuntaskan Al-Qur'an maupun menuntaskan satu set wirid, yang dirayakan bersama dalam majelis.",
    facts: [
      { label: "Makna umum", value: "Menuntaskan bacaan sampai habis satu putaran penuh" },
      { label: "Dua bentuk lazim", value: "Khataman Al-Qur'an dan khataman wirid atau ratiban tertentu" },
      { label: "Bentuk acara", value: "Pembacaan bersama, doa penutup, dan sajian sederhana untuk jamaah" },
    ],
    body: [
      { h: "Menuntaskan Bacaan Bersama-sama", p: [
        "Pengkhataman adalah acara menuntaskan bacaan. Bentuknya yang paling umum adalah khataman Al-Qur'an, ketika seorang santri atau murid menyelesaikan tiga puluh juz dan menutupnya dengan majelis doa. Bentuk lain hidup di majelis tarekat: khataman wirid, ketika satu set bacaan yang ditetapkan guru dituntaskan secara bergantian oleh jamaah. Acara ini biasanya ditutup dengan doa bersama dan sajian sederhana, menjadikan penuntasan bukan pekerjaan sepi melainkan perayaan kebersamaan.",
        "Di sebagian majelis, khataman wirid menandai selesainya takrir tertentu dan menjadi penanda perjalanan murid, disusul penjelasan guru tentang amalan berikutnya.",
      ]},
      { h: "Makna yang Menjaga Kesungguhan", p: [
        "Khataman bukan garis akhir, melainkan penanda kesungguhan. Guru biasanya mengingatkan bahwa yang dirayakan adalah istiqamah yang membawa sampai garis itu, bukan angka putaran semata. Setelah khataman, amalan berlanjut ke jenjang berikutnya atau dipelihara sebagai amalan harian. Jamaah tua dan muda sama-sama dilibatkan, sehingga suasana khataman menjadi ingatan hangat yang menautkan mereka dengan majelis. Dengan makna semacam ini, pengkhataman menjadi kebiasaan yang menyegarkan semangat jamaah tanpa mengubah wirid menjadi lomba angka.",
      ]},
    ],
    related: ["wirid", "awrad", "mursyid"],
  },
  {
    slug: "persistent-url",
    kind: 'glossary',
    title: "Persistent URL",
    category: "Arsip & Digital",
    summary: "Persistent URL adalah alamat halaman yang dibuat stabil permanen; satu slug berdiri untuk satu halaman dan tidak berpindah-pindah di platform 165.",
    facts: [
      { label: "Prinsip", value: "Satu slug mewakili satu halaman nyata, tanpa URL bayangan" },
      { label: "Manfaat", value: "Kutipan, tautan antarhalaman, dan indeks mesin pencari tetap sah" },
      { label: "Penerapan di 165", value: "Glosarium, pustaka, dan arsip memakai alamat tetap yang dapat dikutip ulang" },
    ],
    body: [
      { h: "Alamat yang Tidak Berpindah", p: [
        "Persistent URL adalah alamat halaman yang sengaja dibuat stabil untuk waktu yang panjang. Dalam praktik 165, prinsip ini dijalankan sederhana namun tegas: satu slug berdiri untuk satu halaman nyata, dan slug itu tidak diganti-ganti. Halaman glosarium tarekat yang dikutip hari ini akan tetap berada di alamat yang sama tahun-tahun berikutnya. Tidak ada URL bayangan yang menunggu konten yang belum jelas, sebab setiap alamat yang tersebar harus mengarah pada isi yang benar-benar ada.",
        "Stabilitas alamat bermanfaat bagi banyak pihak: pembaca yang menyimpan tautan, penulis yang mengutip halaman, dan mesin pencari yang menjaga indeksnya tetap bersih.",
      ]},
      { h: "Mengapa Penting bagi Warisan Tarekat", p: [
        "Naskah dan silsilah tarekat dijaga ratusan tahun karena alamatnya jelas: nama kitab, nama guru, dan tempat penyimpanan. Prinsip yang sama dibawa ke dunia digital. Halaman pengetahuan yang menjadi rujukan murid dan peneliti sepatutnya memiliki alamat yang tidak goyah, sebab rujukan yang pindah-pindah akan merusak jaring kutipan dan menimbulkan keraguan. Dengan persistent URL, 165 memperlakukan halamannya seperti naskah: diberi tempat tetap, diberi nama tetap, dan dijaga tetap terbaca.",
      ]},
    ],
    related: ["visi-165", "sanad", "tarekat"],
  },
  {
    slug: "pesan-mursyid",
    kind: 'glossary',
    title: "Pesan Mursyid",
    category: "Struktur Tarekat",
    summary: "Pesan mursyid adalah tuntunan lisan maupun tulisan yang disampaikan mursyid kepada murid; rujukan kecil yang menjaga arah amalan tetap lurus.",
    facts: [
      { label: "Bentuk", value: "Nasihat saat takrir, catatan singkat, dan jawaban atas pertanyaan murid" },
      { label: "Perlakuan murid", value: "Disimpan, diulang, dan diamalkan dengan hati tenang" },
      { label: "Batas", value: "Tidak menggantikan dalil; setiap pesan diuji dengan Al-Qur'an dan Sunnah" },
    ],
    body: [
      { h: "Tuntunan Kecil yang Menjaga Arah", p: [
        "Pesan mursyid adalah nasihat dan keterangan yang disampaikan guru kepada muridnya, baik lisan saat takrir maupun tulisan dalam bentuk catatan singkat. Isinya beragam: peringatan adab, jawaban atas kebingungan wirid, penegasan niat, atau pesan menenangkan saat murid berdukka. Bagi murid, pesan-pesan ini disimpan dan diulang, sebab satu kalimat guru yang dipegang sungguh-sungguh bisa menjadi tumpuan yang menjaga amalan bertahun-tahun.",
        "Murid dianjurkan menyampaikan pesan mursyid apa adanya kepada murid lain yang membutuhkan, tanpa menambah dan tanpa memotong, agar maknanya tidak tergelincir.",
      ]},
      { h: "Adab terhadap Pesan Guru", p: [
        "Adab menjaga perlakuan murid terhadap pesan mursyid. Pesan tidak dilebih-lebihkan menjadi perkataan yang diangkat melebihi kedudukannya, dan tidak pula diperdagangkan sebagai bahan promosi. Yang paling penting, pesan tidak diletakkan di atas dalil: setiap tuntunan guru diuji dengan Al-Qur'an dan Sunnah, sebab guru sendiri yang paling bersungguh-sungguh mengajarkan pengujian semacam itu. Dengan adab demikian, pesan mursyid menjadi cahaya kecil yang menuntun, bukan tali ketergantungan yang mengekang.",
      ]},
    ],
    related: ["mursyid", "rabithah", "tarekat"],
  },
  {
    slug: "podcast-tarekat",
    kind: 'glossary',
    title: "Podcast Tarekat",
    category: "Arsip & Digital",
    summary: "Podcast tarekat adalah siniar berisi pembahasan tarekat, tasawuf, dan pengalaman murid; media dengar yang membawa majelis masuk ke telinga pendengar.",
    facts: [
      { label: "Isi umum", value: "Pembicaraan kitab, riwayat jalur, nasihat adab, dan tanya jawab" },
      { label: "Nilai praktis", value: "Menghadirkan materi pengajian bagi pendengar yang jauh dari majelis" },
      { label: "Catatan kehati-hatian", value: "Isi perlu diuji dan ditanyakan kembali kepada mursyid masing-masing" },
    ],
    body: [
      { h: "Majelis yang Hadir di Telinga", p: [
        "Podcast tarekat adalah siniar yang membahas dunia tarekat dalam format percakapan yang santai: pembahasan kitab, riwayat jalur, nasihat adab, dan tanya jawab dengan guru atau murid senior. Bagi pendengar yang jauh dari majelis, format audio ini menghadirkan suasana duduk bersama yang lebih dekat daripada membaca sendirian. Bagi majelis, podcast menjadi sarana menata ulang materi pengajian menjadi durasi yang mudah diikuti.",
        "Berkembangnya podcast juga menandai pergantian cara generasi baru mengakses ilmu: waktu menunggu dan perjalanan kini bisa diisi dengan pembicaraan yang bermanfaat.",
      ]},
      { h: "Mendengar dengan Adab", p: [
        "Pendengar podcast tarekat dianjurkan mendengar dengan adab yang sama seperti di halqah: memeriksa latar pembicara, memilah isi yang bersumber dari dalil, dan menimbang pendapat pribadi yang disampaikan pembawanya. Pertanyaan tentang wirid tetap bermuara kepada mursyid masing-masing, sebab podcast tidak memegang takrir siapa pun. Dengan kebiasaan semacam ini, media dengar menjadi pengantar ilmu yang menyehatkan, bukan pengganti bimbingan yang berwenang.",
      ]},
    ],
    related: ["visi-165", "tarekat", "mursyid"],
  },
  {
    slug: "provenance",
    kind: 'glossary',
    title: "Provenance",
    category: "Arsip & Digital",
    summary: "Provenance adalah jejak asal-usul dan kepemilikan sebuah dokumen; konsep kunci 165 untuk menimbang sah tidaknya naskah ijazah dan silsilah yang diarsipkan.",
    facts: [
      { label: "Makna", value: "Riwayat siapa pemilik, pembuat, dan pengalih sebuah dokumen" },
      { label: "Nilai bagi arsip", value: "Menentukan kredibilitas naskah dan membantu memutus perdebatan keaslian" },
      { label: "Penerapan di 165", value: "Keterangan arsip mencantumkan asal dan status dokumen secara jujur" },
    ],
    body: [
      { h: "Riwayat yang Melekat pada Dokumen", p: [
        "Provenance adalah istilah arsip dan perpustakaan untuk jejak asal-usul sebuah dokumen: siapa yang membuat, siapa yang menyimpan, dan bagaimana dokumen itu berpindah tangan. Jejak semacam ini menentukan bobot kepercayaan pada naskah, karena dokumen yang riwayatnya jelas lebih mudah ditimbang daripada dokumen yang muncul tanpa sejarah. Dalam dunia tarekat, provenance menemukan tempat yang sangat alami: ijazah dan silsilah memang hidup dari pertanyaan siapa memberi izin kepada siapa.",
        "Naskah ijazah yang menyimpan catatan pemberi izin, penerima izin, dan pengalihannya antarguru adalah contoh dokumen yang provenance-nya dapat ditelusuri.",
      ]},
      { h: "Prinsip Kerja Arsip 165", p: [
        "Provenance menjadi konsep kunci bagi arsip digital 165. Setiap keterangan yang ditampilkan dianjurkan menyertai asalnya: dari mana informasi itu, siapa yang menyebutnya, dan sejauh mana statusnya, apakah mapan, menurut tradisi tarekat, atau masih menunggu kepastian. Prinsip ini menjaga pembaca tidak menelan informasi mentah dan menjaga penulis platform tidak berlepas dari tanggung jawabnya. Arsip yang jujur tentang asal-usulnya adalah arsip yang tahan lama.",
      ]},
    ],
    related: ["visi-165", "sanad", "ijazah", "silsilah"],
  },
  {
    slug: "puasa-daud",
    kind: 'glossary',
    title: "Puasa Daud",
    titleAr: "صَوْم دَاوُد",
    category: "Amalan & Wirid",
    summary: "Puasa Daud adalah puasa sehari berbuka sehari; disebut dalam hadis sebagai puasa yang paling utama setelah puasa Ramadhan.",
    facts: [
      { label: "Aturan", value: "Berpuasa satu hari dan berbuka satu hari secara bergantian" },
      { label: "Dasar", value: "Hadis Nabi saw. yang diriwayatkan dalam Shahih Bukhari dan Shahih Muslim" },
      { label: "Kedudukan", value: "Puasa sunnah yang diadopsi sebagian pengamal tarekat dengan pertimbangan mursyid" },
    ],
    body: [
      { h: "Ibadah Nabi Daud dalam Hadis", p: [
        "Puasa Daud adalah kebiasaan berpuasa satu hari dan berbuka satu hari secara bergantian, diambil dari amalan Nabi Daud alaihissalam. Dalam hadis yang diriwayatkan Shahih Bukhari dan Shahih Muslim, Nabi saw. menyebut puasa Daud sebagai puasa yang paling utama setelah puasa Ramadhan, dan shalat malam yang paling utama adalah shalat Daud yang tidur separuh malam. Dua kebiasaan itu digambarkan berimbang: tidak menyiksa badan, tidak pula berhenti dari kesungguhan.",
        "Keseimbangan itulah yang membuat puasa Daud dipandang cocok untuk jangka panjang, berbeda dari puasa beruntun yang berat dijaga terus-menerus.",
      ]},
      { h: "Tempatnya di Latihan Murid", p: [
        "Sebagian murid tarekat mengadopsi puasa Daud sebagai latihan tambahan, dengan memperhatikan kekuatan badan dan keadaan kesehatan. Menurut kebiasaan majelis, murid yang ingin menambah puasa sunnah menyampaikannya kepada mursyid atau mengikuti anjuran bersama agar latihan tidak melampaui kadar. Puasa Daud bukan kewajiban baru, dan tidak ada dosa bagi yang tidak memuasanya; ia jalan tambahan bagi yang sanggup, diiringi adab menjaga kewajiban tetap utuh.",
      ]},
    ],
    related: ["dzikir", "wirid", "mursyid"],
  },
  {
    slug: "pulung",
    kind: 'glossary',
    title: "Pulung",
    category: "Kebiasaan & Tradisi",
    summary: "Pulung adalah istilah kepercayaan rakyat tentang roh yang konon mendiami benda atau tempat; pembicaraan tarekat menuntunnya kembali kepada tauhid.",
    facts: [
      { label: "Lingkungan istilah", value: "Khazanah kepercayaan Jawa dan Sunda tentang roh yang konon penunggu benda pusaka" },
      { label: "Sifat cerita", value: "Berlangsung lisan dan berubah-ubah bentuk antardaerah" },
      { label: "Sikap tarekat", value: "Tidak diserahkan pada takhayul; dikembalikan kepada keimanan yang lurus" },
    ],
    body: [
      { h: "Istilah dari Kepercayaan Rakyat", p: [
        "Pulung adalah istilah yang hidup dalam kepercayaan rakyat Jawa dan Sunda, menunjuk roh yang konon mendiami benda pusaka, benda tua, atau tempat tertentu, sehingga benda itu dipercaya menyimpan kekuatan. Cerita tentang pulung berpindah dari mulut ke mulut, dan bentuknya berubah menurut daerah masing-masing. Halaman ini memuat istilah itu sebagaimana ia dipakai dalam percakapan masyarakat, tanpa menetapkan benar tidaknya kepercayaan tersebut.",
        "Yang jelas, kisah semacam ini bagian dari khazanah lisan yang tidak terpisah dari sejarah kehidupan desa dan lingkungan warisan, sehingga sering muncul dalam pembicaraan sekitar benda-benda pusaka.",
      ]},
      { h: "Tinjauan Majelis Tarekat", p: [
        "Di lingkungan tarekat dan pesantren, pembicaraan tentang pulung biasanya disambut dengan penuntunan, bukan perendahan. Murid diingatkan bahwa kekuatan hanya milik Allah, benda tidak menyelamatkan, dan hati yang berzikir lebih aman daripada hati yang gelisah menyandarkan harapan pada penunggu. Kiayi dan mursyid mengajarkan murid menata ulang kepercayaan warisan keluarga dengan keimanan yang lurus: menghormati benda pusaka sebagai sejarah, namun tidak menjadikannya tumpuan doa. Cara semacam ini menjaga murid tidak jatuh pada takhayul dan tidak pula mencampuri akidah dengan kepercayaan lama.",
      ]},
    ],
    related: ["tarekat", "mursyid", "tarekat-mutabarah"],
  },
  {
    slug: "pwa",
    kind: 'glossary',
    title: "PWA",
    category: "Arsip & Digital",
    summary: "PWA atau Progressive Web App adalah teknologi situs yang dapat dipasang seperti aplikasi; platform 165 berjalan sebagai PWA agar mudah diakses murid.",
    facts: [
      { label: "Kepanjangan", value: "Progressive Web App, gabungan kemampuan situs dan aplikasi" },
      { label: "Keunggulan", value: "Dapat dipasang dari peramban tanpa toko aplikasi dan hemat ruang perangkat" },
      { label: "Penerapan di 165", value: "Halaman pengetahuan 165.web.id dapat dibuka langsung dan diakses ulang dengan cepat" },
    ],
    body: [
      { h: "Situs yang Bisa Dipasang", p: [
        "PWA atau Progressive Web App adalah cara membangun situs agar berperilaku seperti aplikasi. Pengunjung dapat memasangnya langsung dari peramban tanpa melewati toko aplikasi, ikonnya muncul di layar perangkat, dan halaman yang pernah dibuka dapat diakses kembali dengan cepat. Bagi platform pengetahuan, teknologi ini menghadirkan keuntungan yang jelas: konten tetap dekat dengan pembacanya, tanpa unduhan yang besar dan tanpa hambatan jenis perangkat tertentu.",
        "Platform 165 berjalan sebagai PWA. Murid dapat memasang 165.web.id pada ponselnya dan membuka glosarium, pustaka, maupun arsip kapan pun ia membutuhkan.",
      ]},
      { h: "Mengapa Pilihan ini Cocok untuk 165", p: [
        "Pilihan PWA sejalan dengan semangat 165 yang mengutamakan keterbukaan. Halaman pengetahuan tidak digerbangi oleh toko aplikasi dan tidak dibatasi perangkat, sehingga murid tua maupun muda, dengan ponsel sederhana sekalipun, dapat membaca warisan tarekat dengan mudah. PWA juga memudahkan pembaruan: konten yang disunting langsung tersedia bagi semua pembaca tanpa menunggu rilis baru. Teknologi, dalam kerangka ini, melayani isi, bukan sebaliknya.",
      ]},
    ],
    related: ["visi-165", "tarekat", "silsilah"],
  },
// APPEND-ABOVE
]
