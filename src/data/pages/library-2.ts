import type { PageEntry } from './types'

// 165 — Perpustakaan bagian 2 (slug fathul-muin s.d. muntakhab-al-ahadis)
// Konten bahasa Indonesia, jujur, tanpa fabrikasi fakta.
export const ENTRIES: PageEntry[] = [
  {
    slug: 'fathul-muin',
    kind: 'library',
    title: "Fathul Mu'īn",
    titleAr: 'فتح المعين',
    category: 'Fiqih & Ushul',
    summary:
      "Fathul Mu'īn karya Sayyid Bakri Syatha: syarah ringkas atas Minhāj at-Tālibīn Imam Nawawi yang menjadi rujukan fiqih Syafiiyah di pesantren Nusantara.",
    facts: [
      { label: 'Penulis', value: 'Sayyid Bakri Syatha ad-Dimyathi' },
      { label: 'Bidang', value: 'Fiqih mazhab Syafii' },
      { label: 'Objek syarah', value: "Minhāj at-Tālibīn karya Imam Nawawi" },
      { label: 'Kedudukan', value: 'Rujukan dasar fiqih di pesantren Nusantara' },
    ],
    body: [
      {
        h: 'Kedudukan dalam Kurikulum Pesantren',
        p: [
          "Fathul Mu'īn adalah syarah mukhtasar atas Minhāj at-Tālibīn karya Imam an-Nawawi yang ditulis oleh Sayyid Bakri Syatha, ulama Syafiiyah asal Dimyat, Mesir. Kitab ini menyajikan pembahasan ibadah dan muamalah dalam bentuk yang ringkas, sehingga mudah dihafalkan oleh santri tingkat dasar.",
          'Dalam tradisi pesantren Nusantara, kitab ini sering dipelajari sebelum naik ke karya yang lebih luas seperti Muharrar dan Iʿānat at-Tālibīn. Ia juga banyak dibaca di lingkungan pesantren tarekat, karena penulisnya sendiri dikenal memiliki kaitan erat dengan kalangan TQN.',
        ],
      },
      {
        h: 'Isi dan Metode Penulisan',
        p: [
          'Sayyid Bakri Syatha menyusun Fathul Muʿīn dengan memilih masalah-masalah yang paling sering dijumpai dalam praktik sehari-hari, seperti thaharah, shalat, puasa, zakat, hingga perkara perkawinan sederhana. Setiap masalah disajikan dalam kalimat pendek yang dekat dengan gaya nadham, sehingga banyak santri menghafalnya sebagai teks berjalan.',
          'Karena ringkasnya, kitab ini umumnya tidak dibaca sendirian, melainkan disertai syarah lisan para guru atau kitab super syarah. Kehadiran Fathul Muʿīn menunjukkan bagaimana tradisi tekstual Syafiiyah bekerja: sebuah teks kecil menjadi pintu masuk menuju jaringan kitab yang lebih besar dan lebih rinci.',
        ],
      },
    ],
    related: ['fathul-qarib', 'ianat-al-talibin-syata', 'fathul-rabbani'],
  },
  {
    slug: 'fathul-qarib',
    kind: 'library',
    title: 'Fathul Qarīb',
    titleAr: 'فتح القريب',
    category: 'Fiqih & Ushul',
    summary:
      'Fathul Qarīb karya Ibn Qasim al-Ghazi: mukhtasar Minhāj at-Tālibīn Imam Nawawi yang ringkas dan menjadi pondasi awal fiqih Syafiiyah di pesantren.',
    facts: [
      { label: 'Penulis', value: 'Ibn Qasim al-Ghazi' },
      { label: 'Bidang', value: 'Fiqih mazhab Syafii' },
      { label: 'Bentuk', value: 'Mukhtasar atas Minhāj at-Tālibīn' },
      { label: 'Peran', value: 'Kitab pegangan santri tingkat dasar' },
    ],
    body: [
      {
        h: 'Identitas dan Kedudukan Kitab',
        p: [
          'Fathul Qarīb adalah mukhtasar atau ringkasan atas Minhāj at-Tālibīn karya Imam an-Nawawi yang disusun oleh Ibn Qasim al-Ghazi, ulama Syafiiyah dari Mesir. Kitab ini memuat inti hukum fiqih dalam lingkup ibadah dan sebagian muamalah, disajikan dalam kalimat pendek yang memudahkan penghafalan.',
          'Di pesantren Nusantara, Fathul Qarīb termasuk kitab bandingan yang setara dengan Fathul Muʿīn. Santri biasanya membaca salah satu dari keduanya sebagai pintu masuk fikih mazhab, lalu lanjut ke syarah yang lebih luas seperti Muharrar atau Tuhfah.',
        ],
      },
      {
        h: 'Fungsi dalam Perkembangan Santri',
        p: [
          'Ringkasnya Fathul Qarīb membuat kitab ini cocok untuk latihan membaca matan: santri belajar mengenali redaksi hukum, istilah teknis, dan urutan bab tanpa langsung terbebani argumen yang panjang. Guru menguraikan dalil dan khilafiah secara lisan sesuai metode bandongan.',
          'Dalam lingkungan pesantren tarekat, penguasaan Fathul Qarīb juga dianggap bekal amalan: wirid dan ibadah harian seorang murid perlu berdiri di atas fikih yang benar. Dengan demikian kitab ini menempati posisi pragmatis sebagai jembatan antara syariat dan tarekat.',
        ],
      },
    ],
    related: ['fathul-muin', 'ianat-al-talibin-syata', 'fathul-rabbani'],
  },
  {
    slug: 'fathul-qarib-tarikh',
    kind: 'library',
    title: 'Fathul Qarīb (Tarikh)',
    titleAr: 'فتح القريب في التاريخ',
    category: 'Sejarah & Manaqib',
    summary:
      'Fathul Qarīb cabang tarikh: karya pengantar ilmu sejarah dan urutan peristiwa besar yang dipelajari untuk melatih kronologi dalam tradisi kitab kuning.',
    facts: [
      { label: 'Bidang', value: 'Tarikh atau sejarah Islami' },
      { label: 'Karakter', value: 'Teks pengantar riwayat peristiwa' },
      { label: 'Isi pokok', value: 'Kronologi nabi, sahabat, dan dinasti' },
      { label: 'Penggunaan', value: 'Pengenalan sejarah di pesantren' },
    ],
    body: [
      {
        h: 'Sisi Tarikh dari Nama yang Sama',
        p: [
          'Di lingkungan pesantren, nama Fathul Qarīb tidak hanya melekat pada kitab fikih. Ada pula karya pengantar tarikh yang menggunakan nama serupa, berisi ringkasan peristiwa besar dari masa nabi hingga periode para dinasti. Teks semacam ini dipakai untuk melatih santri menyusun urutan waktu dan mengenal tokoh-tokoh penting.',
          'Ciri khas kitab tarikh tingkat dasar adalah penyajian kronologis yang padat: tahun peristiwa, nama tokoh, dan garis besar perubahan politik umat. Santri membacanya dengan pertolongan guru karena banyak nama dan angka yang perlu dijelaskan konteksnya.',
        ],
      },
      {
        h: 'Manfaat bagi Santri Tarekat',
        p: [
          'Bagi santri yang bergerak dalam TQN, pengetahuan tarikh memiliki nilai tersendiri: ia memberi kerangka waktu untuk memahami silsilah guru-guru tarekat, sejarah penyebaran thariqah, dan latar lahirnya karya-karya tasawuf yang mereka baca.',
          'Di 165.web.id, halaman ini hadir sebagai pengantar. Pembaca yang hendak mendalami sejarah lebih jauh dapat melanjutkan ke karya tarikh yang lebih besar seperti Al-Bidāyah wan-Nihāyah yang juga tercantum di perpustakaan ini.',
        ],
      },
    ],
    related: ['ma-al-bidayah-wan-nihayah', 'fathul-qarib', 'fathul-rabbani'],
  },
  {
    slug: 'fathul-rabbani',
    kind: 'library',
    title: 'Fath ar-Rabbani',
    titleAr: 'الفتح الرباني والفيض الرباني',
    category: 'Tasawuf & Akhlak',
    summary:
      'Fath ar-Rabbani karya Syekh Abdul Qadir Al-Jilani: 62 maqalah lisan yang menjadi teks pembinaan ruhiah utama pengikut TQN Qodiriah di seluruh dunia.',
    facts: [
      { label: 'Penulis', value: 'Syekh Abdul Qadir Al-Jilani, pendiri Tarekat Qodiriah' },
      { label: 'Jumlah maqalah', value: '62 maqalah yang disampaikan secara lisan di majelis' },
      { label: 'Bahasa asal', value: 'Arab, disalin dan diterjemahkan ke banyak bahasa' },
      { label: 'Kedudukan di 165', value: 'Teks pembinaan utama murid TQN Qodiriah Naqsabandiyah' },
    ],
    body: [
      {
        h: 'Lahirnya Fath ar-Rabbani dari Majelis Pengajian',
        p: [
          'Fath ar-Rabbani, dengan judul lengkap Al-Fath ar-Rabbani wal-Faid ar-Rabbani, berasal dari 62 maqalah yang disampaikan Syekh Abdul Qadir Al-Jilani melalui ceramah lisan di majelis-majelis pengajian Baghdad. Para murid mencatat ucapannya, merapikan redaksinya, dan melestarikannya sebagai kitab yang kini dikenal luas di dunia Islam.',
          'Berdasarkan pengantar para penyunting kitab, maqalah-maqalah ini disampaikan dalam kurun waktu lebih dari satu dekade, sehingga isinya mencerminkan pendewasaan pengajaran beliau. Setiap maqalah berdiri sendiri sebagai nasihat yang utuh, namun keseluruhannya membentuk satu peta jalan perjalanan spiritual seorang pencinta Allah.',
        ],
      },
      {
        h: 'Isi: dari Tawadhu hingga Maqam Tertinggi',
        p: [
          'Maqalah-maqalah dalam Fath ar-Rabbani menelusuri tema-tema besar tasawuf: kejujuran hati, tawadhu, sabar, ikhlas, zuhud, tawakal, cinta kepada Allah, hingga kesadaran akan kedekatan-Nya. Syekh Abdul Qadir Al-Jilani menggabungkan dalil Quran dan hadis dengan pengalaman ruhani yang dalam, sehingga nasihatnya terasa hidup dan menjangkau kalangan umum maupun ahli ilmu.',
          'Di dalamnya juga terdapat wasiat-wasiat khusus kepada murid: perintah menjaga waktu, menghormati sesama, mengendalikan lisan, menghadapkan hati pada Allah dalam setiap keadaan, serta menundukkan syahwat dengan amalan yang terus-menerus. Nada kitab ini adalah nasihat seorang bapa ruhani kepada anak-anaknya, bukan uraian teori yang kering.',
        ],
      },
      {
        h: 'Posisi Khusus dalam Pembinaan TQN',
        p: [
          'Bagi murid TQN Qodiriah Naqsabandiyah di Suryalaya dan majelis-majelis 165, Fath ar-Rabbani memiliki posisi khusus: ia adalah teks yang paling sering dikaji dalam majelis pembinaan karena berbicara langsung kepada keadaan murid yang sedang berlatih dzikir. Petunjuknya mengenai khauf, tawadhu, dan keteguhan hati menjadi cermin praktis bagi kehidupan wirid.',
          'Di 165.web.id, kitab ini ditempatkan sebagai halaman pusat perpustakaan tarekat. Murid baru yang mengikuti pengajian Fath ar-Rabbani dianjurkan membacanya perlahan, satu maqalah dalam satu majelis, dengan bertumpu pada penjelasan mursyid atau guru yang memegang ijazah, karena isi kitab ini dirancang untuk hidup di dalam majelis, bukan sekadar di rak buku.',
        ],
      },
    ],
    related: ['futuh-al-ghaib-jilani', 'alghunya-lithalibi', 'khataman-dan-amalan-tqn'],
  },
  {
    slug: 'fihi-ma-fih',
    kind: 'library',
    title: 'Fīhi Mā Fīh',
    titleAr: 'فيه ما فيه',
    category: 'Tasawuf & Akhlak',
    summary:
      'Fīhi Mā Fīh: kumpulan ucapan lisan Jalaluddin Rumi dalam majelis pengajian, disalin murid, kaya nasihat ruhani dan bahasa yang mengalir.',
    facts: [
      { label: 'Tokoh', value: 'Jalaluddin Rumi, sufi dan penyair dari Konya' },
      { label: 'Bentuk', value: 'Kumpulan ucapan lisan yang disalin murid' },
      { label: 'Isi', value: 'Nasihat tafsir, hadis, dan kehidupan ruhani' },
      { label: 'Catatan', value: 'Judul tidak dipilih Rumi sendiri' },
    ],
    body: [
      {
        h: 'Ucapan Majelis yang Dicatat Murid',
        p: [
          'Fīhi Mā Fīh, yang secara harfiah berarti "di dalamnya ada apa yang ada", adalah kumpulan pembicaraan Jalaluddin Rumi dalam majelis-majelis pengajian dan percakapan sehari-hari, yang dicatat para murid dan kemudian disusun menjadi kitab. Judulnya sendiri bukan pilihan Rumi, melainkan nama yang melekat pada naskah, menandakan bahwa isi kitab lebih penting daripada labelnya.',
          'Isi kitab berpindah-pindah antara penjelasan ayat, hadis, kisah para nabi, hingga nasihat tentang jiwa yang gelisah dan hati yang mencari. Gaya bicara Rumi yang puitis membuat kitab ini dekat dengan suasana Masnawi, meskipun bentuknya prosa dan lebih spontan.',
        ],
      },
      {
        h: 'Nilai bagi Pembaca TQN',
        p: [
          'Bagi murid tarekat, Fīhi Mā Fīh memberi contoh bagaimana seorang guru bertutur: tidak mengajar lewat definisi kaku, melainkan lewat perumpamaan yang menyentuh pengalaman. Tema-tema seperti putus asa dari makhluk, menghadapkan hati kepada Allah, dan membersihkan diri dari perhatian pada dunia adalah tema yang juga hidup dalam pembinaan TQN.',
          '165.web.id menghadirkan kitab ini sebagai bacaan pengantar ruhani. Pembaca dianjurkan menempatkannya sebagai pelengkap, bukan pengganti, teks-teks utama tarekat seperti Fath ar-Rabbani dan Futūh al-Ghaib yang menjadi rujukan pembinaan resmi.',
        ],
      },
    ],
    related: ['masnawi-rumi', 'fathul-rabbani', 'ar-risalah-alqusyairiyyah'],
  },
  {
    slug: 'fusus-alhikam',
    kind: 'library',
    title: 'Fushush al-Hikam',
    titleAr: 'فصوص الحكم',
    category: 'Kajian Akademik',
    summary:
      'Fushush al-Hikam karya Ibn Arabi: ringkasan hikah para nabi yang menjadi objek kajian akademik intensif; di 165 dibaca sebagai studi, bukan teks amalan.',
    facts: [
      { label: 'Penulis', value: 'Muhyiddin Ibn Arabi, sufi Andalusia abad ke-7 H' },
      { label: 'Bentuk', value: '29 bab ringkas bertema hikah para nabi' },
      { label: 'Tata cara di 165', value: 'Dikaji sebagai kajian akademik, bukan teks amalan' },
      { label: 'Pengarang syarah', value: 'Banyak syarah klasik dan kajian modern' },
    ],
    body: [
      {
        h: 'Kedudukan Kitab dalam Sejarah Tasawuf',
        p: [
          'Fushush al-Hikam, sering pula ditulis Fusus al-Hikam, adalah karya Muhyiddin Ibn Arabi yang berisi ringkasan hikmah para nabi, dimulai dari Adam hingga Nabi Muhammad, masing-masing dalam satu bab pendek yang disebut fash. Kitab ini ditulis di Damaskus dan kemudian menjadi salah satu teks yang paling banyak disyarah dalam tradisi tasawuf, antara lain oleh Dawud al-Qashani.',
          'Gaya bahasa Ibn Arabi sangat padat dan memuat istilah-istilah filsafat makrifat yang menuntut pembacaan berlapis. Sebagian pemikirannya menimbulkan perbedaan pendapat di kalangan ulama, sehingga teks ini selalu dibaca bersama khazanah syarah dan kajian kritis, bukan dipahami secara terpisah dari tradisi.',
        ],
      },
      {
        h: 'Cara Menempatkannya di 165.web.id',
        p: [
          'Di perpustakaan 165, Fushush al-Hikam hadir sebagai bahan kajian akademik. Platform ini tidak menjadikan kitab tersebut teks amalan atau wirid TQN, dan tidak mengatribusikan ajaran khususnya kepada pembinaan tarekat. Kehadirannya bertujuan memberi peta yang jujur atas khazanah tasawuf: pembaca mengetahui teks mana yang berpengaruh besar dalam sejarah pemikiran sufi.',
          'Pembaca yang mendalami tasawuf amali disarankan mengutamakan teks pembinaan tarekat seperti Fath ar-Rabbani dan Futūh al-Ghaib, sementara Fushush al-Hikam diakses dengan pendampingan kajian dan penjelasan konteks sejarahnya.',
        ],
      },
    ],
    related: ['fathul-rabbani', 'futuh-al-ghaib-jilani', 'at-taaruf'],
  },
  {
    slug: 'futuh-al-ghaib-jilani',
    kind: 'library',
    title: 'Futūh al-Ghaib',
    titleAr: 'الفتوحات الغيبية',
    category: 'Tasawuf & Akhlak',
    summary:
      'Futūh al-Ghaib karya Syekh Abdul Qadir Al-Jilani: 78 risalah singkat tentang makrifat dan adab murid yang menjadi teks inti pembinaan TQN Qodiriah.',
    facts: [
      { label: 'Penulis', value: 'Syekh Abdul Qadir Al-Jilani, pendiri Tarekat Qodiriah' },
      { label: 'Jumlah risalah', value: '78 risalah pendek bertema makrifat dan adab murid' },
      { label: 'Bahasa asal', value: 'Arab, dengan banyak terjemahan modern' },
      { label: 'Kedudukan di 165', value: 'Teks inti pembinaan bersama Fath ar-Rabbani' },
    ],
    body: [
      {
        h: 'Judul dan Asal Kitab',
        p: [
          'Futūh al-Ghaib, dengan judul lengkap Al-Futuhat al-Ghaibiyyah, berarti "bukaan-bukaan dari gaib". Kitab ini berisi 78 risalah singkat yang memuat penggambaran pengalaman ruhani dan nasihat Syekh Abdul Qadir Al-Jilani kepada para pencari Allah. Berbeda dengan Fath ar-Rabbani yang berbentuk maqalah ceramah, Futūh al-Ghaib lebih ringkas, padat, dan berbicara langsung kepada hati.',
          'Setiap risalah umumnya dimulai dengan pujian kepada Allah dan shalawat, lalu berpindah ke satu tema: penyerahan diri, keikhlasan dalam dzikir, menahan hati dari makhluk, atau kejujuran seorang murid. Panjangnya yang pendek membuat kitab ini cocok dibaca satu risalah dalam satu duduk.',
        ],
      },
      {
        h: 'Isi Pokok: Menyerahkan Hati kepada Allah',
        p: [
          'Tema sentral Futūh al-Ghaib adalah tawakal dan kesadaran bahwa segala kekuatan ada di tangan Allah. Syekh Abdul Qadir Al-Jilani berulang kali menasihati murid untuk memutus pengharapan kepada makhluk, membersihkan hati dari riyaa, dan menjadikan dzikir sebagai napas kehidupan. Beliau juga menyinggung adab murid kepada guru serta etika berada di majelis tarekat.',
          'Bagian-bagian tertentu kitab ini memuat ungkapan pengalaman ruhani yang tinggi, sehingga para ahli tarekat menyarankan pembacaannya disertai penjelasan guru yang berijazah agar tidak disalahpahami. Dengan pendampingan yang benar, risalah-risalah ini menjadi pemandu praktis bagi murid yang sedang menjalankan wirid.',
        ],
      },
      {
        h: 'Kepentingannya bagi TQN',
        p: [
          'Untuk TQN Qodiriah Naqsabandiyah, Futūh al-Ghaib berstatus sangat penting karena berasal langsung dari pendiri Tarekat Qodiriah. Di majelis-majelis 165, kitab ini dikaji bersanding dengan Fath ar-Rabbani: yang satu memberi nasihat panjang bertahap, yang lain memberi pukulan ringkas yang menggugah hati.',
          'Murid yang baru masuk tarekat dianjurkan mengenal kitab ini sejak awal, namun dengan ritme yang teratur dan di bawah bimbingan. Halaman ini di 165.web.id menjadi pintu pengantar; rujukan amalan harian tetap berada pada panduan khataman dan wirid yang disusun platform.',
        ],
      },
    ],
    related: ['fathul-rabbani', 'alghunya-lithalibi', 'khataman-dan-amalan-tqn'],
  },
  {
    slug: 'gulistan-sadi',
    kind: 'library',
    title: 'Gulistān (Sadi)',
    titleAr: 'گلستان',
    category: 'Tasawuf & Akhlak',
    summary:
      'Gulistān karya Sadi Syirazi: kumpulan prosa dan puisi bermuatan hikmah serta etika yang menjadi bahan bacaan akhlak klasik di dunia Islam.',
    facts: [
      { label: 'Penulis', value: 'Sadi Syirazi, penyair Persia abad ke-7 H' },
      { label: 'Bahasa', value: 'Persia, dengan banyak terjemahan' },
      { label: 'Bentuk', value: 'Delapan bab campuran prosa dan puisi' },
      { label: 'Tema', value: 'Hikmah, etika, dan pengamatan kehidupan' },
    ],
    body: [
      {
        h: 'Taman Bunga Hikmah Persia',
        p: [
          'Gulistān, yang berarti taman bunga, adalah karya prosa-puisi Sadi Syirazi yang disusun dalam delapan bab, mencakup tema adab hidup, kebaikan akhlak, cinta, kerendahan hati, hingga nasihat untuk raja dan orang dewasa. Kitab ini ditulis dalam bahasa Persia yang indah, sehingga selama berabad-abad menjadi model pembelajaran bahasa sekaligus bacaan akhlak di dunia Islam.',
          'Gaya Sadi memadukan kisah pendek, dialog, dan nasihat yang ringkas. Contoh terkenalnya adalah bait tentang manusia sebagai anggota satu tubuh: bila satu anggota sakit, anggota yang lain pun tidak tenang. Bait tersebut sering dikutip dalam berbagai bahasa sebagai pesan persaudaraan.',
        ],
      },
      {
        h: 'Nilai Akhlak bagi Pembaca Tarekat',
        p: [
          'Bagi lingkungan tarekat, Gulistān berfungsi sebagai bahan penumbuh akhlak: cerita-ceritanya menyentuh kesabaran, kejujuran, tawadhu, dan kasih sayang kepada sesama, nilai-nilai yang dalam TQN ditempatkan sebagai buah dari dzikir, bukan sekadar teori.',
          'Di 165.web.id, kitab ini hadir sebagai bacaan pengembangan karakter. Pembaca dianjurkan menikmatinya sebagai hikmah universal yang dibingkai Islam, sambil tetap menjadikan teks-teks tarekat yang berijazah sebagai rujukan utama pembinaan.',
        ],
      },
    ],
    related: ['masnawi-rumi', 'ihya-ulumuddin', 'fathul-rabbani'],
  },
  {
    slug: 'hadiqatul-haqiqah',
    kind: 'library',
    title: 'Hadīqatul Haqīqah (Sanai)',
    titleAr: 'حدیقة الحقیقة',
    category: 'Tasawuf & Akhlak',
    summary:
      'Hadīqatul Haqīqah karya Sanai Ghaznawi: mathnawi tasawuf Persia awal tentang hukum, akhlak, dan jalan menuju kebenaran yang mempengaruhi Rumi.',
    facts: [
      { label: 'Penulis', value: 'Sanai Ghaznawi, penyair sufi Persia' },
      { label: 'Bentuk', value: 'Mathnawi panjang dalam bahasa Persia' },
      { label: 'Tema pokok', value: 'Syariat, akhlak, dan jalan makrifat' },
      { label: 'Pengaruh', value: 'Menjadi teladan bagi Masnawi Rumi' },
    ],
    body: [
      {
        h: 'Salah satu Mathnawi Tasawuf Terawal',
        p: [
          'Hadīqatul Haqīqah wa Syariʿatut Thariqah, yang berarti kebun kebenaran dan hukum jalan, adalah mathnawi panjang karya Sanai Ghaznawi, penyair sufi Persia dari Ghazna. Kitab ini termasuk karya tasawuf berbentuk mathnawi yang awal dan berpengaruh, ditulis jauh sebelum Masnawi Rumi muncul.',
          'Isinya bergerak dari pujian kepada Allah dan rasul, pembahasan syariat dan akhlak, hingga nasihat tentang dunia, takut kepada Allah, dan kematian. Sanai memakai kisah singkat dan perumpamaan untuk menyampaikan ajaran, sehingga teks yang panjang ini terasa hidup dan mudah diingat.',
        ],
      },
      {
        h: 'Jejaknya dalam Tradisi Tarekat',
        p: [
          'Sanai dikenal luas di kalangan sufi sebagai guru yang berijazah dalam jalur tasawuf, dan karyanya dikutip oleh banyak tokoh tarekat. Cara beliau merangkai puisi dengan hakikat menjadi model yang kemudian diikuti Attar dan Rumi, sehingga membaca Hadīqatul Haqīqah membantu pembaca memahami akar tradisi Masnawi.',
          'Di 165.web.id, kitab ini disajikan sebagai bagian dari peta khazanah tasawuf Persia. Pembaca TQN dapat menjadikannya bacaan hikmah, dengan tetap menempatkan teks pembinaan tarekat sebagai rujukan amalan utama.',
        ],
      },
    ],
    related: ['masnawi-rumi', 'fathul-rabbani', 'at-taaruf'],
  },
  {
    slug: 'hikmat-yasawi',
    kind: 'library',
    title: 'Hikmat Yasawi',
    titleAr: 'حکمت یسوی',
    category: 'Tasawuf & Akhlak',
    summary:
      'Hikmat Yasawi: warisan syair Ahmad Yasawi, sufi Turkistan yang menjadi bapak penyair tarekat Naqsyabandiyah di Asia Tengah.',
    facts: [
      { label: 'Tokoh', value: 'Ahmad Yasawi, sufi Turkistan abad ke-6 H' },
      { label: 'Bentuk', value: 'Syair-syair hikmat dalam bahasa Turkik' },
      { label: 'Isi', value: 'Nasihat dzikir, akhlak, dan cinta kepada Allah' },
      { label: 'Peran', value: 'Menyebarkan ajaran sufi dalam bahasa umum' },
    ],
    body: [
      {
        h: 'Syair Hikmah dari Turkistan',
        p: [
          'Hikmat Yasawi merujuk pada kumpulan syair berbahasa Turkik yang dinisbatkan kepada Ahmad Yasawi, sufi besar dari Turkistan yang menjadi pionir penyebaran ajaran sufi di Asia Tengah dan kini dihormati sebagai salah satu akar silsilah yang bersambung dengan Naqsyabandiyah. Syair-syair ini disebut hikmat, artinya hikmah, karena setiap bait berisi nasihat keagamaan yang ringkas.',
          'Melalui hikmat, ajaran sufi yang sebelumnya beredar dalam bahasa Arab dan Persia dijangkau kepada masyarakat umum Asia Tengah. Syair Yasawi dinyanyikan dalam majelis dzikir, sehingga ilmu tarekat menyebar lewat telinga dan hati, bukan hanya lewat kitab.',
        ],
      },
      {
        h: 'Maknanya bagi TQN',
        p: [
          'Bagi murid TQN Qodiriah Naqsabandiyah, khazanah Yasawi penting karena memperlihatkan akar Naqsyabandiyah di Asia Tengah dan cara ajaran tarekat diwariskan melalui syair yang mudah dihafal. Nilai-nilai yang diangkatnya, seperti dzikir yang terus-menerus, kerendahan hati, dan pengutamaan guru, selaras dengan pembinaan tarekat secara umum.',
          'Di 165.web.id, halaman ini hadir sebagai pengantar sejarah dan sastra tarekat. Pembaca dianjurkan mengaksesnya sebagai bahan apresiasi dan pengenalan, sementara amalan resmi tetap mengikuti panduan wirid platform.',
        ],
      },
    ],
    related: ['fathul-rabbani', 'maktubat-sirhindi', 'khataman-dan-amalan-tqn'],
  },
  {
    slug: 'hujjatullah-albaligha',
    kind: 'library',
    title: 'Hujjatullāh al-Bālighah (Syah Waliullah)',
    titleAr: 'حجة الله البالغة',
    category: 'Kajian Akademik',
    summary:
      'Hujjatullāh al-Bālighah karya Syah Waliullah Dehlawi: kajian mendalam hikmah syariat, hadis, dan tasawuf yang menjembatani fikih dan ruhani.',
    facts: [
      { label: 'Penulis', value: 'Syah Waliullah ad-Dehlawi, ulama India abad ke-12 H' },
      { label: 'Bidang', value: 'Hikmah syariat, hadis, dan tasawuf' },
      { label: 'Bahasa asal', value: 'Arab dan sebagian Persia' },
      { label: 'Kedudukan', value: 'Karya besar pemikiran Islam di India' },
    ],
    body: [
      {
        h: 'Proyek Pembaruan Syah Waliullah',
        p: [
          'Hujjatullāh al-Bālighah adalah karya utama Syah Waliullah ad-Dehlawi, ulama Delhi yang berusaha merumuskan kembali pemahaman agama dengan bertumpu pada Quran dan hadis, sekaligus menghormati warisan fikih dan tasawuf. Judulnya berarti bukti Allah yang menjangkau, menandakan tujuan kitab menunjukkan kebijaksanaan syariat bagi kehidupan manusia.',
          'Kitab ini dibagi menjadi bagian pembahasan tentang akar keimanan, hikmah syariat, ritual ibadah, dan persoalan masyarakat. Syah Waliullah menampilkan cara berpikir yang menyeimbangkan teks, akal, dan pengalaman ruhani, sehingga karya ini dikaji luas di lingkungan akademik dan pesantren lanjutan.',
        ],
      },
      {
        h: 'Relevansi bagi Kajian Tarekat',
        p: [
          'Syah Waliullah sendiri berhubungan dengan tarekat, termasuk menerima ijazah Naqsyabandiyah, sehingga pandangannya tentang dzikir dan pembinaan ruhani relevan bagi pembaca TQN. Dalam Hujjatullāh al-Bālighah beliau menempatkan amalan hati sebagai jiwa syariat, bukan hal yang terpisah dari hukum.',
          'Di 165.web.id, kitab ini hadir sebagai bahan kajian. Pembaca yang menekuni tasawuf amali disarankan memperlakukannya sebagai peta pemikiran, dengan tetap bertumpu pada teks pembinaan tarekat untuk praktik harian.',
        ],
      },
    ],
    related: ['ihya-ulumuddin', 'fathul-rabbani', 'maktubat-sirhindi'],
  },
  {
    slug: 'ianat-al-talibin-syata',
    kind: 'library',
    title: "I'ānat at-Tālibīn (Sayyid Bakri Syatha)",
    titleAr: 'إعانة الطالبين',
    category: 'Fiqih & Ushul',
    summary:
      "I'ānat at-Tālibīn karya Sayyid Bakri Syatha: syarah lengkap Fathul Mu'īn yang menjadi rujukan fiqih Syafiiyah tingkat lanjut di pesantren Nusantara.",
    facts: [
      { label: 'Penulis', value: 'Sayyid Bakri Syatha ad-Dimyathi' },
      { label: 'Bentuk', value: 'Syarah lengkap atas Fathul Muʿīn' },
      { label: 'Bidang', value: 'Fiqih mazhab Syafii' },
      { label: 'Kedudukan', value: 'Rujukan lanjut santri tingkat atas' },
    ],
    body: [
      {
        h: 'Syarah besar atas Fathul Muʿīn',
        p: [
          "I'ānat at-Tālibīn bi Halli Isyārāt al-Fāḍil al-Kamīn adalah syarah lengkap Sayyid Bakri Syatha atas kitab Fathul Muʿīn karyanya sendiri. Jika matannya ringkas, syarahnya justru sangat luas: beliau menghadirkan perdebatan ulama Syafiiyah, dalil-dalil, dan pilihan-pilihan fatwa yang masyhur dalam masalah ibadah hingga muamalah.",
          'Di pesantren Nusantara, kitab ini menjadi salah satu rujukan tingkat atas bersama Muharrar dan Tuhfah. Santri yang telah menguasai matan naik membaca Iʿānat untuk memahami alasan di balik redaksi pendek Fathul Muʿīn dan melihat peta khilafiah di dalam mazhab.',
        ],
      },
      {
        h: 'Pentingnya bagi Kalangan Tarekat',
        p: [
          'Sayyid Bakri Syatha dikenal pula sebagai ulama yang memiliki kaitan dengan tarekat, sehingga karya fikihnya sering menjadi pegangan murid tarekat yang ingin menjalankan wirid di atas dasar syariat yang kokoh. Pembahasan thaharah dan shalat dalam kitab ini penting bagi murid yang memikul beban wirid harian.',
          'Di 165.web.id, kitab ini hadir sebagai rujukan fiqih pendukung pembinaan TQN. Pembaca dianjurkan mengaksesnya melalui guru atau melalui salinan cetak yang disertai syarah lisan, karena kedalaman isinya menuntut pendampingan.',
        ],
      },
    ],
    related: ['fathul-muin', 'fathul-qarib', 'fathul-rabbani'],
  },
  {
    slug: 'ibrahim-bin-adham-biografi',
    kind: 'library',
    title: 'Biografi Ibrahim bin Adham',
    titleAr: 'ترجمة إبراهيم بن أدهم',
    category: 'Sejarah & Manaqib',
    summary:
      'Biografi Ibrahim bin Adham, sufi legendaris Balkh yang meninggalkan kemewahan dunia dan menjadi teladan zuhud dalam khazanah tasawuf klasik.',
    facts: [
      { label: 'Asal', value: 'Balkh, kawasan Khurasan' },
      { label: 'Gelar populer', value: 'Teladan zuhud dan pertapaan dalam tasawuf' },
      { label: 'Kisah terkenal', value: 'Meninggalkan kedudukan dunia untuk mencari Allah' },
      { label: 'Tempat dalam literatur', value: 'Banyak dikisahkan Attar dan kitab tabaqat sufi' },
    ],
    body: [
      {
        h: 'Tokoh Zuhud dari Balkh',
        p: [
          'Ibrahim bin Adham adalah tokoh sufi awal dari Balkh yang terkenal karena kisah meninggalkan kehidupan yang berlimpah untuk hidup sebagai pertapa pengembara. Dalam literatur tasawuf, namanya menjadi lambang zuhud: sikap melepaskan ketergantungan hati kepada harta dan kedudukan demi mengutamakan Allah.',
          'Kisah hidupnya dituturkan dalam berbagai kitab klasik seperti Tazkiratul Auliya karya Attar dan kitab-kitab tabaqat para sufi. Perlu dicatat bahwa sebagian detail kisahnya berasal dari tutur lisan, sehingga para peneliti memperlakukannya sebagai kisah edifikasi, yang nilai utamanya pada pesan akhlak, bukan pada ketepatan setiap detail.',
        ],
      },
      {
        h: 'Warisan Pesan bagi Murid Tarekat',
        p: [
          'Bagi murid TQN, kisah Ibrahim bin Adham memberi pelajaran yang abadi: kekayaan dan kedudukan tidak pernah menjadi penghalang untuk berbalik kepada Allah, dan setiap orang dapat memulai perubahan dari hatinya sendiri. Ungkapan-ungkapan hikmah yang dinisbatkan kepada beliau tentang hati yang tidur dan umur yang berlalu sering dikutip dalam pembinaan akhlak.',
          'Di 165.web.id, halaman ini hadir sebagai kajian manaqib dan teladan akhlak. Pembaca dianjurkan memahami kisah para ulama sufi dengan adab: mengambil nilai utamanya sambil menjaga kehati-hatian terhadap riwayat yang bervariasi.',
        ],
      },
    ],
    related: ['fathul-rabbani', 'ihya-ulumuddin', 'futuh-al-ghaib-jilani'],
  },
  {
    slug: 'ihya-ulumuddin',
    kind: 'library',
    title: "Ihyā' 'Ulūmiddīn (Al-Ghazali)",
    titleAr: 'إحياء علوم الدين',
    category: 'Tasawuf & Akhlak',
    summary:
      "Ihyā' 'Ulūmiddīn karya Imam Al-Ghazali: ensiklopedia agama empat jilid yang memadukan fikih ibadah, akhlak, dan pembinaan hati secara menyeluruh.",
    facts: [
      { label: 'Penulis', value: 'Imam Abu Hamid Al-Ghazali' },
      { label: 'Struktur', value: 'Empat jilid: ibadah, adat, muhlikah, munjiyah' },
      { label: 'Bahasa asal', value: 'Arab' },
      { label: 'Kedudukan', value: 'Karya tasawuf syariah paling berpengaruh' },
    ],
    body: [
      {
        h: 'Karya Agama yang Menghidupkan Ilmu',
        p: [
          "Ihyā' 'Ulūmiddīn adalah karya besar Imam Abu Hamid Al-Ghazali yang ditulis setelah beliau meninggalkan jabatan mengajar di Baghdad dan berproses sebagai perenung. Kitab ini terdiri atas empat jilid: ibadah, adat kehidupan, pembinas-pembinas yang membinasakan, dan penyelamat-penyelamat yang menyelamatkan.",
          'Al-Ghazali menyusun kitab ini untuk memperlihatkan bahwa ibadah tanpa kehadiran hati hanyalah kerangka kosong. Beliau menjelaskan hukum lahiriah suatu amalan sekaligus rahasia dan muatan batiniahnya, sehingga fikih dan tasawuf berada dalam satu bangunan yang utuh.',
        ],
      },
      {
        h: 'Isi dan Metode',
        p: [
          'Jilid ibadah membahas thaharah hingga haji beserta makna ruhani setiap rukun. Jilid adat menguraikan etika kehidupan, mulai dari makan, menikah, hingga berbisnis. Jilid pembinas mengkaji penyakit hati seperti riyaa, dengki, dan cinta dunia, sedangkan jilid penyelamat menghadirkan jalan pengobatan: taubat, sabar, takut, dan cinta kepada Allah.',
          'Metode Al-Ghazali menggabungkan ayat, hadis, ucapan salaf, dan pengamatan jiwa. Kedalaman tersebut menjadikan kitab ini rujukan utama kalangan tarekat yang menjaga syariat, termasuk lingkungan TQN, dalam pembinaan akhlak murid.',
        ],
      },
      {
        h: 'Kedudukan di 165.web.id',
        p: [
          "Di perpustakaan 165, Ihyā' 'Ulūmiddīn menempati posisi rujukan akhlak dan ruhani bersama kitab-kitab Al-Jilani. Murid TQN dianjurkan membaca bagian penyakit hati dan penyelamat hati secara bertahap, karena bab-bab itu langsung berbicara dengan kondisi jiwa pelaku wirid.",
          'Sebagai catatan kejujuran, kitab ini juga memuat sebagian riwayat yang statusnya perlu dikaji ulang. Pembaca disarankan mengambil isinya dengan pendampingan guru, sebagaimana adab membaca kitab klasik secara umum.',
        ],
      },
    ],
    related: ['munjiyat', 'fathul-rabbani', 'ar-risalah-alqusyairiyyah'],
  },
  {
    slug: 'ihya-ulumuddin-gandul',
    kind: 'library',
    title: 'Ihya Ulumuddin Naskah Gandul',
    category: 'Dokumen Institusi',
    summary:
      'Naskah gandul Ihya Ulumuddin: praktik penyalinan kitab dengan surat ijazah di lingkungan pesantren tarekat, dijaga sebagai warisan dokumentasi Suryalaya.',
    facts: [
      { label: 'Jenis dokumen', value: 'Naskah salinan kitab berformat gandul' },
      { label: 'Gandul', value: 'Surat ijazah yang menyertai penyalinan kitab' },
      { label: 'Fungsi', value: 'Bukti kebolehan membaca dan pengesahan sanad' },
      { label: 'Kedudukan', value: 'Warisan dokumentasi tradisi pesantren tarekat' },
    ],
    body: [
      {
        h: 'Apa Itu Naskah Gandul',
        p: [
          'Dalam tradisi pesantren, terutama pesantren tarekat, penyalinan kitab sering disertai surat ijazah yang dikenal dengan istilah gandul. Gandul berisi pengakuan bahwa seorang santri telah membaca kitab tertentu sampai selesai di hadapan gurunya dan dinyatakan mampu menyalinnya kembali dengan benar.',
          'Naskah gandul biasanya ditulis tangan dengan ukiran kepala surat khusus, mencantumkan nama kitab, nama murid, nama guru, dan tempat tanggal penyalinan. Bagi komunitas tarekat, dokumen ini menegaskan keaslian rantai pengajaran dan menjadi bagian dari dokumentasi silsilah murid.',
        ],
      },
      {
        h: 'Naskah Gandul Ihya Ulumuddin',
        p: [
          'Naskah gandul yang berhubungan dengan Ihya Ulumuddin menandakan bahwa kitab besar Al-Ghazali ini pernah diajarkan dalam majelis pesantren tarekat dan diserahkan kepada murid secara resmi. Kehadiran dokumen semacam ini memperlihatkan bahwa pengajian kitab tasawuf besar tidak berlangsung longgar, melainkan melalui pengesahan yang tertulis.',
          'Di 165.web.id, halaman ini diperlakukan sebagai arsip dan dokumentasi platform. Platform tidak menampilkan seluruh isi dokumen secara utuh, dan tidak menetapkan rincian tanggal serta pemilik tertentu di luar keterangan yang dapat dipertanggungjawabkan.',
        ],
      },
    ],
    related: ['ihya-ulumuddin', 'khataman-dan-amalan-tqn', 'fathul-rabbani'],
  },
  {
    slug: 'ithaf-udzakii',
    kind: 'library',
    title: "Ithāf adz-Dzakī' (Zainuddin al-Malibari)",
    titleAr: 'إتحاف الذكي',
    category: 'Fiqih & Ushul',
    summary:
      "Ithāf adz-Dzakī' karya Zainuddin al-Malibari: syarah Fathul Mu'īn dalam bahasa Melayu-Jawi yang menjadi jembatan fiqih Syafiiyah bagi santri Nusantara.",
    facts: [
      { label: 'Penulis', value: 'Zainuddin al-Malibari, ulama dari Malabar' },
      { label: 'Bentuk', value: "Syarah atas Fathul Mu'īn" },
      { label: 'Bahasa', value: 'Melayu berhuruf Jawi' },
      { label: 'Peran', value: 'Pengantar fikih bagi santri pemula Nusantara' },
    ],
    body: [
      {
        h: 'Syarah Melayu atas Matan Arab',
        p: [
          "Ithāf adz-Dzakī' al-Mubtadi bi Syarhi al-Minjājī al-Mubtadi adalah syarah yang ditulis Zainuddin al-Malibari atas Fathul Muʿīn. Yang menarik, syarah ini ditulis dalam bahasa Melayu berhuruf Jawi, sehingga santri Nusantara yang belum lancar berbahasa Arab tetap dapat menjangkau isi fikih mazhab Syafii.",
          "Kitab ini membahas thaharah, shalat, dan sebagian perkara ibadah lain dengan penjelasan yang dekat dengan praktik sehari-hari. Karena kejelasan bahasanya, Ithāf adz-Dzakī' lama menjadi kitab pertama yang dibaca santri sebelum naik ke syarah berbahasa Arab.",
        ],
      },
      {
        h: 'Perannya dalam Dunia Tarekat Nusantara',
        p: [
          "Di lingkungan pesantren tarekat, penguasaan Ithāf adz-Dzakī' dianggap bekal minimum: murid perlu memahami fikih thaharah dan shalat agar wiridnya berdiri di atas amalan yang sah. Banyak majelis tarekat menjadikan kitab ini bacaan pendamping bagi murid baru.",
          'Di 165.web.id, kitab ini hadir sebagai rujukan fiqih tingkat dasar. Pembaca dianjurkan melanjutkan ke Fathul Muʿīn dan Iʿānat at-Tālibīn untuk pendalaman berbahasa Arab.',
        ],
      },
    ],
    related: ['fathul-muin', 'fathul-qarib', 'fathul-rabbani'],
  },
  {
    slug: 'kadzim-asnawi-news-profile',
    kind: 'library',
    title: 'Profil KH Kadzim Asnawi',
    category: 'Sejarah & Manaqib',
    summary:
      'Profil ringkas KH Kadzim Asnawi, ulama TQN yang dikenal sebagai khalifah tarekat di Cukir, Jombang, Jawa Timur, dengan fakta umum yang luas diketahui.',
    facts: [
      { label: 'Nama', value: 'KH Kadzim Asnawi' },
      { label: 'Kedudukan', value: 'Khalifah TQN di Cukir, Jombang, Jawa Timur' },
      { label: 'Lingkup amanah', value: 'Melayani murid dan majelis tarekat di Cukir' },
      { label: 'Catatan', value: 'Hanya fakta umum yang luas diketahui' },
    ],
    body: [
      {
        h: 'Kedudukan sebagai Khalifah TQN',
        p: [
          'KH Kadzim Asnawi dikenal di kalangan penghayat tarekat sebagai ulama yang memegang amanah khalifah TQN di Cukir, Jombang, Jawa Timur. Dalam struktur tarekat, khalifah adalah murid yang diberi izin oleh mursyid untuk menghidupkan majelis dzikir dan membimbing murid dalam lingkup yang diserahkan kepadanya.',
          'Sebagai khalifah, beliau menjalankan peran pembinaan harian: mengadakan majelis dzikir, menjaga adab murid, dan menyambung silsilah pengajaran tarekat kepada generasi berikutnya. Majelis-majelis di lingkungan Cukir berkembang sebagai bagian dari jaringan TQN di Jawa Timur.',
        ],
      },
      {
        h: 'Catatan Kejujuran 165.web.id',
        p: [
          'Di halaman ini, 165.web.id sengaja hanya menyajikan fakta umum yang luas diketahui oleh kalangan tarekat, yaitu kedudukan beliau sebagai khalifah TQN di Cukir, Jombang. Platform tidak mencantumkan tanggal lahir, tanggal wafat, atau rincian biografi lain yang belum dapat dipertanggungjawabkan sumbernya.',
          'Pembaca yang memiliki keterangan terverifikasi mengenai riwayat beliau dapat menghubungi redaksi 165 melalui kanal resmi agar halaman ini dapat diperkaya secara amanah. Pendekatan ini selaras dengan kaidah redaksi platform: tidak memfabrikasi data pribadi tokoh.',
        ],
      },
    ],
    related: ['khataman-dan-amalan-tqn', 'fathul-rabbani', 'futuh-al-ghaib-jilani'],
  },
  {
    slug: 'khairot-ulum',
    kind: 'library',
    title: 'Khairatul Ulūm',
    titleAr: 'خيرات العلوم',
    category: 'Tasawuf & Akhlak',
    summary:
      'Khairatul Ulūm: teks warisan keilmuan tarekat yang dipelajari di lingkungan pesantren sebagai bahan pengantar khazanah dzikir dan amalan batiniah.',
    facts: [
      { label: 'Bidang', value: 'Khazanah keilmuan tarekat' },
      { label: 'Karakter', value: 'Teks pengantar amalan dan dzikir' },
      { label: 'Penggunaan', value: 'Bahan pengajian di lingkungan pesantren' },
      { label: 'Kedudukan di 165', value: 'Bagian peta khazanah kitab tarekat' },
    ],
    body: [
      {
        h: 'Nama dan Lingkup Kitab',
        p: [
          'Khairatul Ulūm, yang berarti kebaikan-kebaikan ilmu, adalah nama yang melekat pada teks keilmuan tarekat yang dipelajari di lingkungan pesantren. Kitab semacam ini umumnya menghimpun pengantar tentang dzikir, wirid, adab murid, dan pokok-pokok ajaran batiniah dalam bentuk yang dapat diajarkan di majelis.',
          'Karena banyak teks keilmuan tarekat beredar dengan judul serupa di berbagai wilayah, 165.web.id memperlakukan halaman ini dengan hati-hati: platform memaparkan lingkup umum kitab tanpa mengklaim detail pengarang atau nisbah yang belum terverifikasi.',
        ],
      },
      {
        h: 'Tempatnya dalam Pembinaan TQN',
        p: [
          'Bagi murid TQN, teks seperti Khairatul Ulūm membantu menata pemahaman dasar: apa itu dzikir, bagaimana adab terhadap guru, dan bagaimana amalan hati dijaga tetap dalam koridor syariat. Pembacaan semacam ini melengkapi wirid yang sudah berjalan, bukan menggantikannya.',
          'Di 165.web.id, kitab ini hadir sebagai bagian peta khazanah. Pembaca dianjurkan mengutamakan teks pembinaan utama seperti Fath ar-Rabbani dan Futūh al-Ghaib, lalu menjadikan kitab ini bacaan pelengkap.',
        ],
      },
    ],
    related: ['fathul-rabbani', 'futuh-al-ghaib-jilani', 'khataman-dan-amalan-tqn'],
  },
  {
    slug: 'khataman-dan-amalan-tqn',
    kind: 'library',
    title: 'Khataman dan Amalan TQN',
    category: 'Ampalan & Wirid',
    summary:
      'Dokumen panduan khataman dan amalan harian TQN Qodiriah Naqsabandiyah yang disusun platform 165 sebagai rujukan resmi wirid murid.',
    facts: [
      { label: 'Jenis', value: 'Dokumen panduan amalan platform 165' },
      { label: 'Lingkup', value: 'Khataman, wirid harian, dan adab pelaksanaan' },
      { label: 'Kedudukan', value: 'Rujukan amalan murid TQN Qodiriah Naqsabandiyah' },
      { label: 'Prinsip penyajian', value: 'Hanya memuat amalan yang berijazah dan tersusun' },
    ],
    body: [
      {
        h: 'Kedudukan Dokumen',
        p: [
          'Khataman dan Amalan TQN adalah dokumen panduan yang disusun 165.web.id sebagai bagian dari layanan platform bagi murid TQN Qodiriah Naqsabandiyah. Isinya menghimpun urutan khataman, wirid harian, serta adab pelaksanaannya dalam bentuk yang rapi dan mudah diikuti.',
          'Dokumen ini bersifat panduan, bukan kitab klasik. Sumber amalannya mengacu pada rangkaian yang berijazah di lingkungan tarekat, dan penyajiannya di platform dimaksudkan agar murid tidak tercerai-berai dalam berbagai versi amalan yang beredar.',
        ],
      },
      {
        h: 'Isi Pokok Panduan',
        p: [
          'Bagian khataman memuat urusan pembacaan yang dilakukan secara berjamaah atau mandiri dalam majelis tarekat, disertai waktu pelaksanaan yang umum. Bagian amalan harian memuat wirid pagi dan petang, adab sebelum dan sesudah dzikir, serta anjuran menjaga shalat fardu sebagai pondasi seluruh wirid.',
          'Platform menegaskan bahwa dokumen ini tidak menggantikan bimbingan mursyid atau khalifah. Murid baru tetap dianjurkan mengikuti inisiasi dan penjelasan langsung di majelis, karena banyak hal dalam wirid disampaikan secara lisan sesuai kemampuan murid.',
        ],
      },
      {
        h: 'Cara Memanfaatkan Halaman Ini',
        p: [
          'Pembaca dapat menjadikan halaman ini sebagai acuan cepat ketika mengikuti majelis TQN, sekaligus pintu pengantar bagi keluarga murid yang ingin memahami rangkaian amalan yang dijalankan. Bahasa yang digunakan sengaja dibuat lugas agar tidak menimbulkan multitafsir.',
          'Rujukan pendalaman tetap ditujukan ke kitab-kitab tarekat yang terdapat di perpustakaan 165, terutama Fath ar-Rabbani dan Futūh al-Ghaib, agar amalan tidak lepas dari pembinaan ilmu.',
        ],
      },
    ],
    related: ['fathul-rabbani', 'futuh-al-ghaib-jilani', 'muntakhab-ahadis-tarekat'],
  },
  {
    slug: 'khatib-sambas-scholarly-corpus',
    kind: 'library',
    title: 'Korpus Karya KH Khatib Sambas',
    category: 'Sejarah & Manaqib',
    summary:
      'Korpus karya KH Khatib Sambas, ulama TQN dari Sambas, Kalimantan Barat, pemilik ijazah tarekat yang luas, disajikan dengan kehati-hatian sumber.',
    facts: [
      { label: 'Tokoh', value: 'KH Khatib Sambas, ulama TQN dari Sambas' },
      { label: 'Wilayah pengaruh', value: 'Sambas, Kalimantan Barat, dan sekitarnya' },
      { label: 'Dikenal sebagai', value: 'Ulama pemilik ijazah TQN yang luas' },
      { label: 'Kaidah penyajian', value: 'Hanya fakta umum yang luas diketahui' },
    ],
    body: [
      {
        h: 'Ulama TQN dari Sambas',
        p: [
          'KH Khatib Sambas dikenal dalam khazanah tarekat Nusantara sebagai ulama TQN yang berasal dari Sambas, Kalimantan Barat, dan memiliki ijazah tarekat yang luas. Dalam adab tarekat, kelebihan ijazah berarti beliau bersambung kepada lebih dari satu jalur pengajaran, sehingga amanah pengajaran yang beliau bawa menyentuh banyak murid di sekitarnya.',
          'Melalui murid-murid dan khalifah-khalifahnya, pengajaran TQN di wilayah Sambas dan sekitarnya berkembang dan bersambung hingga generasi berikutnya. Jejak beliau penting dicatat karena memperlihatkan bagaimana TQN menyebar tidak hanya di Jawa, tetapi juga di Kalimantan.',
        ],
      },
      {
        h: 'Korpus Karya dan Catatan Sumber',
        p: [
          'Korpus karya yang dinisbatkan kepada KH Khatib Sambas mencakup naskah-naskah pengajaran tarekat dan surat-surat ijazah yang beredar di kalangan murid. Namun, 165.web.id menempatkan halaman ini dengan kaidah kehati-hatian: platform tidak mencantumkan judul karya, tanggal, atau rincian silsilah yang belum dapat diverifikasi sumbernya secara memadai.',
          'Pembaca yang mengakses naskah asli atau salinan ijazah beliau dianjurkan mencatat data bibliografis dengan teliti sebelum mengutip. Halaman ini akan diperkaya ketika keterangan yang lebih terverifikasi tersedia, sesuai prinsip kejujuran redaksi platform.',
        ],
      },
    ],
    related: ['khataman-dan-amalan-tqn', 'fathul-rabbani', 'maktubat-saifuddin'],
  },
  {
    slug: 'kitab-al-isfar',
    kind: 'library',
    title: 'Kitāb al-Isfār',
    titleAr: 'كتاب الإشفار',
    category: 'Kajian Akademik',
    summary:
      'Kitāb al-Isfār: teks klasik berbahasa Arab yang memuat pembahasan keilmuan tarekat dan termasuk khazanah naskah yang dikaji secara akademik.',
    facts: [
      { label: 'Bahasa', value: 'Arab' },
      { label: 'Bidang', value: 'Khazanah keilmuan tarekat klasik' },
      { label: 'Status kajian', value: 'Dikaji sebagai teks akademik' },
      { label: 'Kaidah penyajian', value: 'Tanpa klaim nisbah yang belum terverifikasi' },
    ],
    body: [
      {
        h: 'Pengenalan Teks',
        p: [
          'Kitāb al-Isfār termasuk teks klasik berbahasa Arab yang beredar dalam khazanah keilmuan tarekat dan naskah. Nama kitab ini dikenal di kalangan pengkaji naskah, sementara rincian penulis dan tahun penyusunannya memerlukan penelusuran bibliografis lebih lanjut.',
          'Dalam lingkungan pesantren dan tarekat, teks-teks semacam ini biasanya dibaca dalam majelis tertutup dengan pertolongan guru. Pembacaan itu memerlukan penguasaan bahasa Arab serta pemahaman istilah khusus tarekat yang tidak selalu setara dengan makna harfiahnya.',
        ],
      },
      {
        h: 'Penyajian di 165.web.id',
        p: [
          'Di perpustakaan 165, Kitāb al-Isfār hadir sebagai entri kajian akademik. Platform sengaja tidak mengklaim pengarang, tanggal, atau isi rinci yang belum terverifikasi, dan tidak menjadikan teks ini sebagai wirid atau amalan resmi TQN.',
          'Pembaca yang menemukan salinan kitab ini dianjurkan mencatat data naskah: tempat penyimpanan, jumlah juz, nama penyalin, dan catatan tepi. Data semacam itu berharga bagi dokumentasi khazanah tarekat Nusantara yang sedang dibangun platform.',
        ],
      },
    ],
    related: ['kitab-al-wird', 'fathul-rabbani', 'at-taaruf'],
  },
  {
    slug: 'kitab-al-wird',
    kind: 'library',
    title: 'Kitāb al-Wird',
    titleAr: 'كتاب الورد',
    category: 'Ampalan & Wirid',
    summary:
      'Kitāb al-Wird: sebutan bagi kitab kecil berisi wirid dan dzikir tarekat yang digunakan murid sebagai pegangan amalan harian.',
    facts: [
      { label: 'Jenis', value: 'Kitab kecil wirid dan dzikir tarekat' },
      { label: 'Pengguna', value: 'Murid tarekat dalam amalan harian' },
      { label: 'Isi umum', value: 'Rangkaian dzikir, shalawat, dan doa' },
      { label: 'Adab', value: 'Diambil dari guru yang berijazah' },
    ],
    body: [
      {
        h: 'Kitab Kecil yang Dekat dengan Murid',
        p: [
          'Kitāb al-Wird adalah sebutan bagi kitab kecil yang menghimpun wirid: rangkaian dzikir, shalawat, dan doa yang dijalankan murid tarekat secara teratur. Ukurannya umumnya mungil agar mudah dibawa, dan bahasanya sengaja singkat supaya mudah dihafal.',
          'Dalam adab tarekat, wirid tidak diambil sembarangan dari cetakan mana pun. Murid menerima wirid dari guru yang berijazah, lalu kitab wirid menjadi pegangan tertulis yang menjaga redaksi amalan tetap sama dengan yang diajarkan secara lisan.',
        ],
      },
      {
        h: 'Kaitannya dengan Wirid TQN',
        p: [
          'Bagi murid TQN Qodiriah Naqsabandiyah, keberadaan kitab wirid memperlihatkan prinsip penting: amalan tarekat berdiri di atas sanad dan izin, bukan sekadar teks yang disalin. Halaman panduan Khataman dan Amalan TQN di platform ini mengikuti semangat yang sama, yaitu menyajikan rangkaian amalan secara tertib.',
          '165.web.id menyajikan entri ini sebagai pengantar genre kitab wirid secara umum, dengan tetap menyerukan pembaca memperoleh wirid resmi melalui majelis dan guru yang berwenang.',
        ],
      },
    ],
    related: ['khataman-dan-amalan-tqn', 'kitab-al-isfar', 'fathul-rabbani'],
  },
  {
    slug: 'lamaat-jami',
    kind: 'library',
    title: 'Lamahāt (Jāmī)',
    titleAr: 'لمحات',
    category: 'Tasawuf & Akhlak',
    summary:
      'Lamahāt karya Jāmī: syarah singkat atas Lamahat Niffari, teks tasawuf berisi ungkapan ruhani pendek yang dikaji dengan pendampingan guru.',
    facts: [
      { label: 'Penulis', value: 'Nuruddin Abdurrahman Jāmī, ulama sufi Persia' },
      { label: 'Objek syarah', value: 'Lamahat karya Abu Abdillah an-Niffari' },
      { label: 'Bentuk', value: 'Ungkapan ruhani pendek beserta syarah' },
      { label: 'Bahasa asal', value: 'Arab' },
    ],
    body: [
      {
        h: 'Ungkapan Ruhani dan Syarahnya',
        p: [
          'Lamahāt adalah syarah yang ditulis Jāmī atas teks Lamahat karya Niffari, sufi berbahasa Arab yang menghimpun ungkapan-ungkapan ruhani pendek. Teks Niffari dikenal karena gayanya yang berbeda: kalimat yang langsung, seolah bisikan antara hamba dan Allah, sehingga menuntut pembacaan yang hati-hati.',
          'Jāmī, ulama besar abad ke-9 H dari Herat, menyusun syarah ini untuk menjelaskan maksud setiap ungkapan. Karyanya membantu pembaca memahami teks yang sulit tersebut tanpa terjebak pada tafsir yang menyimpang.',
        ],
      },
      {
        h: 'Kehati-hatian Pembacaan',
        p: [
          'Teks bergaya bisikan ruhani seperti Lamahat Niffari mudah disalahpahami apabila dibaca tanpa pedoman. Karena itu, kalangan tarekat membacanya dengan pendampingan guru yang menguasai istilah tasawuf, agar patah-patah kalimatnya tidak ditafsirkan melampaui konteksnya.',
          'Di 165.web.id, Lamahāt Jāmī hadir sebagai bahan kajian tasawuf. Platform tidak menjadikan teks ini wirid atau amalan resmi TQN; pembaca dianjurkan mengutamakan teks pembinaan tarekat untuk praktik, dan memperlakukan kitab ini sebagai kajian.',
        ],
      },
    ],
    related: ['fathul-rabbani', 'fusus-alhikam', 'at-taaruf'],
  },
  {
    slug: 'ma-al-bidayah-wan-nihayah',
    kind: 'library',
    title: 'Al-Bidāyah wan-Nihāyah (ibn Katsir)',
    titleAr: 'البداية والنهاية',
    category: 'Sejarah & Manaqib',
    summary:
      'Al-Bidāyah wan-Nihāyah karya Ibnu Katsir: karya tarikh besar dari mulai penciptaan hingga zamannya, rujukan sejarah Islam yang luas digunakan.',
    facts: [
      { label: 'Penulis', value: 'Ibnu Katsir, ahli tafsir dan tarikh Damaskus' },
      { label: 'Bidang', value: 'Tarikh dan sirah dalam kerangka kronologis' },
      { label: 'Lingkup isi', value: 'Dari penciptaan hingga zamannya' },
      { label: 'Bahasa asal', value: 'Arab' },
    ],
    body: [
      {
        h: 'Tarikh Kronologis yang Menyeluruh',
        p: [
          'Al-Bidāyah wan-Nihāyah adalah karya tarikh Ibnu Katsir, ahli hadis dan tafsir dari Damaskus abad ke-8 H. Kitab ini menuturkan sejarah dalam urutan waktu: mulai dari penciptaan, kisah para nabi, masa Nabi Muhammad, para sahabat, hingga peristiwa-peristiwa pada zamannya.',
          'Ciri khas kitab ini adalah memadukan tarikh dengan riwayat hadis dan rujukan pendapat ahli sejarah terdahulu. Bagian akhirnya memuat penanda-penanda akhir zaman yang banyak dikutip, sehingga kitab ini menjadi rujukan sekaligus sumber diskusi eskatologi.',
        ],
      },
      {
        h: 'Manfaat bagi Pembaca Perpustakaan 165',
        p: [
          'Bagi pembaca TQN, Al-Bidāyah wan-Nihāyah memberi kerangka waktu yang kokoh untuk memahami kisah para nabi, sirah, dan latar lahirnya khazanah tasawuf. Pemahaman sejarah yang benar melindungi murid dari kisah-kisah karangan yang beredar tanpa sanad.',
          'Di 165.web.id, kitab ini hadir sebagai rujukan sejarah. Pembaca disarankan mengakses terjemahan terpercaya dan menyusuri bab sesuai kebutuhan, karena teks aslinya sangat panjang dan tersusun dalam banyak juz.',
        ],
      },
    ],
    related: ['fathul-qarib-tarikh', 'ihya-ulumuddin', 'fathul-rabbani'],
  },
  {
    slug: 'maktubat-saifuddin',
    kind: 'library',
    title: 'Maktubat Saifuddin',
    titleAr: 'مكتوبات سيف الدين',
    category: 'Tasawuf & Akhlak',
    summary:
      'Maktubat Saifuddin: surat-surat pengajaran ulama Naqsyabandiyah Nusantara yang menuntun murid dalam adab, dzikir, dan perbaikan hati.',
    facts: [
      { label: 'Jenis', value: 'Himpunan surat pengajaran tarekat' },
      { label: 'Konteks', value: 'Tradisi Naqsyabandiyah di Nusantara' },
      { label: 'Isi umum', value: 'Nasihat adab, dzikir, dan penyakit hati' },
      { label: 'Bahasa', value: 'Melayu-Jawi dan Arab sesuai salinan' },
    ],
    body: [
      {
        h: 'Tradisi Maktubat dalam Tarekat',
        p: [
          'Maktubat, yang berarti surat-surat, adalah genre penting dalam tradisi Naqsyabandiyah: para guru menuliskan nasihat kepada murid yang berjauhan tempat, sehingga pembinaan tetap berlangsung meski murid tidak berada di depan guru. Kumpulan surat tersebut kemudian disalin dan dijaga sebagai warisan pengajaran.',
          'Maktubat yang dinisbatkan kepada tokoh bernama Saifuddin termasuk dalam khazanah maktubat Naqsyabandiyah Nusantara. Nama-nama serupa muncul pada beberapa tokoh berbeda di wilayah Nusantara, sehingga 165.web.id menyajikan halaman ini dengan berhati-hati terhadap identitas penulisnya.',
        ],
      },
      {
        h: 'Isi dan Nilai Pengajaran',
        p: [
          'Isi maktubat umumnya bergerak pada tema yang dekat dengan kehidupan murid: menjaga wirid di tengah kesibukan, membersihkan niat, menahan amarah, menghormati guru, dan menghadapi ujian hati. Bahasanya yang kebapaan membuat surat-surat ini terasa seperti nasihat langsung kepada pembaca hari ini.',
          'Di 165.web.id, kitab ini hadir sebagai bagian peta khazanah Naqsyabandiyah Nusantara. Pembaca dianjurkan memperlakukannya sebagai bahan kajian pengajaran tarekat, dengan tetap menjadikan panduan amalan resmi platform sebagai rujukan praktik.',
        ],
      },
    ],
    related: ['maktubat-sirhindi', 'fathul-rabbani', 'khataman-dan-amalan-tqn'],
  },
  {
    slug: 'maktubat-sirhindi',
    kind: 'library',
    title: 'Maktubat Imam Rabbani as-Sirhindi',
    titleAr: 'مكتوبات الإمام الرباني',
    category: 'Tasawuf & Akhlak',
    summary:
      'Maktubat Imam Rabbani as-Sirhindi: 536 surat pengajaran Naqsyabandiyah yang menjaga keseimbangan syariat dan tarekat, rujukan besar tarekat dunia.',
    facts: [
      { label: 'Penulis', value: 'Ahmad as-Sirhindi, dikenal sebagai Imam Rabbani' },
      { label: 'Jumlah surat', value: '536 surat dalam tiga jilid tradisional' },
      { label: 'Tarekat', value: 'Naqsyabandiyah Mujaddidiyah' },
      { label: 'Bahasa asal', value: 'Persia, dengan banyak terjemahan' },
    ],
    body: [
      {
        h: 'Surat-Surat Sang Pembaruan Abad',
        p: [
          'Maktubat adalah kumpulan surat-surat Ahmad as-Sirhindi, ulama Naqsyabandiyah dari India abad ke-11 H yang digelari Imam Rabbani dan mujaddid abad keduanya. Surat-surat tersebut ditulis kepada murid, kerabat, dan penguasa, berisi pembinaan ruhani sekaligus tanggapan atas persoalan umat.',
          'Dalam pengantar kitab, jumlah surat yang diriwayatkan adalah 536 surat yang tersusun dalam tiga jilid. Bahasa asalnya Persia, kemudian diterjemahkan ke Arab, Turki, Urdu, dan bahasa lain, sehingga pengaruhnya menjalar ke tarekat di berbagai negara, termasuk Nusantara.',
        ],
      },
      {
        h: 'Isi Pokok: Syariat, Thariqah, dan Hakikat',
        p: [
          'Tema sentral Maktubat as-Sirhindi adalah keseimbangan: beliau menegaskan bahwa thariqah tidak pernah berdiri di luar syariat, dan maqam tertinggi seorang sufi adalah menyempurnakan ketaatan kepada sunnah Nabi. Surat-suratnya membahas dzikir, muraqabah, fikrah dan wasswasah hati, serta adab murid kepada gurunya.',
          'Bagi TQN Qodiriah Naqsabandiyah, Maktubat ini menjadi rujukan penting karena berasal dari otoritas Naqsyabandiyah yang besar. Murid dianjurkan membacanya bertahap dan bersama pembimbing, karena banyak surat yang ditulis untuk kondisi tertentu penerima surat.',
        ],
      },
    ],
    related: ['fathul-rabbani', 'maktubat-saifuddin', 'khataman-dan-amalan-tqn'],
  },
  {
    slug: 'maqamat-hariri',
    kind: 'library',
    title: 'Maqāmāt al-Harīrī',
    titleAr: 'مقامات الحريري',
    category: 'Bahasa & Kamus',
    summary:
      'Maqāmāt al-Harīrī: mahakarya sastra Arab tentang kefasihan bahasa, lama menjadi buku latihan kefasihan santri bersama Syawahid dan kitab nahu tinggi.',
    facts: [
      { label: 'Penulis', value: 'Al-Qasim al-Hariri, sastrawan Arab abad ke-5-6 H' },
      { label: 'Jumlah maqamah', value: 'Lima puluh maqamah' },
      { label: 'Bidang', value: 'Sastra dan kefasihan bahasa Arab' },
      { label: 'Peran di pesantren', value: 'Bahan latihan kefasihan tingkat lanjut' },
    ],
    body: [
      {
        h: 'Kefasihan Bahasa dalam Bentuk Maqamah',
        p: [
          'Maqāmāt al-Harīrī adalah kumpulan lima puluh maqamah karya al-Qasim al-Hariri, sastrawan Basra. Setiap maqamah menuturkan tokoh pengelana yang menghadirkan bahasa Arab yang luar biasa murni dan sarat makna, dengan jalinan sajak berirama, talmihah, dan permainan makna yang memerlukan kecakapan kebahasaan tinggi untuk memahaminya.',
          'Kitab ini disusun sebagai tanggapan atas Maqamat Badiuzzaman al-Hamadzani dan segera menjadi objek banyak syarah. Di dunia Islam, karya ini juga diangkat ke ruang visual melalui iluminasi naskah yang terkenal, menandakan kedudukannya dalam peradaban buku.',
        ],
      },
      {
        h: 'Fungsi dalam Didikan Santri',
        p: [
          'Dalam kurikulum pesantren, Maqāmāt al-Harīrī lama menjadi buku latihan kefasihan bersama Syawahid dan kitab-kitab nahu tinggi. Santri yang mampu membacanya dengan lancar dianggap telah berlatih menghadapi teks Arab yang paling rumit, sehingga kitab-kitab lain menjadi lebih mudah.',
          'Di 165.web.id, kitab ini hadir sebagai entri bidang bahasa. Platform memaparkannya sebagai warisan kebahasaan, bukan teks amalan, dan menganjurkan pembacaan bersama guru yang menguasai kaidah balaghah.',
        ],
      },
    ],
    related: ['ihya-ulumuddin', 'fathul-rabbani', 'ma-al-bidayah-wan-nihayah'],
  },
  {
    slug: 'marah-labid',
    kind: 'library',
    title: 'Marāh Labīd (Husain bin Muhsin)',
    titleAr: 'مراه اللبيذ',
    category: 'Fiqih & Ushul',
    summary:
      'Marāh Labīd karya Husain bin Muhsin: syarah bahtera atas Safinat an-Najah, matan fikih Syafiiyah ringkas karya Syamsuddin as-Sanusi.',
    facts: [
      { label: 'Penulis', value: 'Husain bin Muhsin' },
      { label: 'Objek syarah', value: 'Safinat an-Najah karya Syamsuddin as-Sanusi' },
      { label: 'Bidang', value: 'Fiqih ibadah mazhab Syafii' },
      { label: 'Penggunaan', value: 'Pengantar fikih di pesantren Nusantara' },
    ],
    body: [
      {
        h: 'Syarah atas Safinat an-Najah',
        p: [
          'Marāh Labīd lil-Istiʿānah ʿalā al-ʿAmal an-Najāh adalah syarah yang ditulis Husain bin Muhsin atas Safinat an-Najah, matan fikih Syafiiyah sangat ringkas karya Syamsuddin as-Sanusi. Matan tersebut memuat thaharah, shalat, dan sebagian perkara ibadah dalam bait yang padat.',
          'Syarah Marāh Labīd menguraikan bait-bait tersebut dengan penjelasan bertahap, memasukkan perkara rincian dan pilihan yang berlaku dalam mazhab. Bagi santri, kombinasi matan dan syarah ini menjadi pintu fikih yang terstruktur sebelum membaca karya yang lebih luas.',
        ],
      },
      {
        h: 'Tempatnya di Pesantren dan Tarekat',
        p: [
          'Safinat an-Najah beserta syarahnya sangat populer di pesantren Nusantara karena ringkas dan mudah dihafal. Di lingkungan pesantren tarekat, fikih thaharah dan shalat yang dipelajari dari kitab ini menjadi bekal langsung untuk menjaga kesahan ibadah harian dan wirid.',
          'Di 165.web.id, Marāh Labīd hadir sebagai rujukan fiqih dasar. Pembaca dianjurkan mengenal matannya terlebih dahulu, lalu menempuh syarah dengan pertolongan guru sesuai metode pengajian klasik.',
        ],
      },
    ],
    related: ['fathul-muin', 'ithaf-udzakii', 'fathul-rabbani'],
  },
  {
    slug: 'masnawi-rumi',
    kind: 'library',
    title: 'Masnawī (Rumi)',
    titleAr: 'مثنوی مولوی',
    category: 'Tasawuf & Akhlak',
    summary:
      'Masnawī karya Jalaluddin Rumi: mathnawi enam daftar penuh kisah dan nasihat ruhani yang menjadi salah satu karya tasawuf paling dibaca dunia.',
    facts: [
      { label: 'Penulis', value: 'Jalaluddin Rumi, sufi dan penyair Konya' },
      { label: 'Bentuk', value: 'Mathnawi enam daftar dalam bahasa Persia' },
      { label: 'Karakter', value: 'Kisah, perumpamaan, dan nasihat ruhani' },
      { label: 'Gelar kitab', value: 'Dijuluki sebagian kalangan sebagai tafsir dalam bahasa Persia' },
    ],
    body: [
      {
        h: 'Karya Besar Rumi',
        p: [
          'Masnawī adalah mathnawi enam daftar karya Jalaluddin Rumi yang ditulis dalam bahasa Persia berupa bait dua baris yang bersajak berpasangan. Rumi menyusunnya atas permintaan murid-muridnya yang ingin pembinaan tertulis, sehingga kitab ini bergerak dari kisah ke kisah sambil menyisipkan nasihat langsung kepada pembaca.',
          'Kisah-kisah dalam Masnawī mengangkat tema kerendahan hati, keikhlasan, kejujuran, dan kerinduan jiwa kepada penciptanya. Gaya yang mengalir menjadikan kitab ini mudah dikutip, dan sebagian kalangan penggemar menyebutnya dengan sebutan hormat sebagai tafsir ruhani dalam bahasa Persia.',
        ],
      },
      {
        h: 'Membaca Masnawī dengan Adab',
        p: [
          'Karena isinya memadukan kisah karangan, alegori, dan nasihat, Masnawī perlu dibaca dengan kecakapan membedakan kisah alegori dan makna hakikatnya. Kalangan tarekat membacanya bersama guru agar hikmahnya tidak tersesat ke tafsir yang menyimpang dari syariat.',
          'Di 165.web.id, Masnawī hadir sebagai bahan kajian tasawuf dan sastra. Pembaca TQN dianjurkan menjadikannya bacaan pengembangan akhlak, dengan tetap menjadikan teks pembinaan tarekat berijazah sebagai rujukan amalan.',
        ],
      },
    ],
    related: ['fihi-ma-fih', 'fathul-rabbani', 'maktubat-sirhindi'],
  },
  {
    slug: 'mathnawi-manawi-rumi',
    kind: 'library',
    title: "Mathnawī-i Ma'nawī (Rumi)",
    titleAr: "مثنوی معنوی",
    category: 'Tasawuf & Akhlak',
    summary:
      "Mathnawī-i Ma'nawī: sebutan edisi lengkap Masnawī Rumi enam daftar yang dijaga teks asalnya untuk kajian akademik dan pembacaan bersama guru.",
    facts: [
      { label: 'Nama lengkap', value: "Mathnawī-i Ma'nawī, mathnawi ruhani" },
      { label: 'Struktur', value: 'Enam daftar, lebih dari dua puluh ribu bait Persia' },
      { label: 'Bahasa asal', value: 'Persia' },
      { label: 'Status di 165', value: 'Entri edisi lengkap, terpisah dari Masnawī' },
    ],
    body: [
      {
        h: 'Mengapa Ada Dua Entri',
        p: [
          "Mathnawī-i Ma'nawī adalah nama lengkap yang melekat pada Masnawī Rumi, yang secara harfiah berarti mathnawi ruhani. Pada halaman ini, 165.web.id menampung entri edisi lengkap enam daftar, sedangkan entri Masnawī pada halaman terpisah menjadi pengantar umum karya.",
          'Pemisahan ini mengikuti kebiasaan perpustakaan: edisi lengkap dan pengantar umum perlu halaman masing-masing agar pembaca dapat menemukan acuan yang sesuai kebutuhan.',
        ],
      },
      {
        h: 'Kajian Edisi Lengkap',
        p: [
          'Teks lengkap enam daftar memuat belasan ribu bait yang menuturkan kisah para nabi, perumpamaan kehidupan, dan nasihat pembinaan jiwa. Kajian akademik terhadap teks ini berkembang pesat: naskah-naskah salinan lama dibandingkan, syarah-syarah klasik ditelusuri, dan terjemahan dibuat dalam banyak bahasa.',
          'Di 165.web.id, entri ini dikaji sebagai warisan tasawuf Persia. Pembaca TQN dianjurkan menempuh pembacaan lengkap secara bertahap bersama guru, sementara rujukan amalan tetap berada pada panduan wirid platform.',
        ],
      },
    ],
    related: ['masnawi-rumi', 'fathul-rabbani', 'fihi-ma-fih'],
  },
  {
    slug: 'maula-nabi',
    kind: 'library',
    title: 'Maulā an-Nabī',
    titleAr: 'مولى النبي',
    category: 'Ampalan & Wirid',
    summary:
      'Maulā an-Nabī: teks pujian dan shalawat kepada Nabi Muhammad yang dibacakan dalam majelis tarekat sebagai bagian penghormatan dan penghubung hati.',
    facts: [
      { label: 'Jenis', value: 'Teks pujian dan shalawat' },
      { label: 'Penggunaan', value: 'Dibacakan dalam majelis tarekat dan haul' },
      { label: 'Isi umum', value: 'Pujian kepada Nabi Muhammad dan doa' },
      { label: 'Kaidah penyajian', value: 'Menurut redaksi yang beredar di majelis' },
    ],
    body: [
      {
        h: 'Teks Shalawat dalam Majelis Tarekat',
        p: [
          'Maulā an-Nabī adalah nama yang melekat pada teks pujian kepada Nabi Muhammad yang dibacakan dalam berbagai majelis tarekat, haul, dan maulid. Teks semacam ini menghimpun kalimat penghormatan kepada Nabi, kisah singkat kelahiran dan perlakuan beliau, serta doa yang diakhiri dengan harapan keberkahan.',
          'Dalam pembinaan TQN, membaca pujian kepada Nabi ditempatkan sebagai bagian adab majelis: dzikir tarekat tidak pernah lepas dari kedekatan hati kepada Nabi Muhammad, sebab sanad tarekat bersambung kepadanya.',
        ],
      },
      {
        h: 'Penyajian yang Berhati-hati',
        p: [
          '165.web.id menyajikan halaman ini sebagai pengantar genre teks shalawat yang beredar di majelis, tanpa mengklaim penulis atau versi tertentu yang belum terverifikasi. Pembaca yang mengikuti majelis akan menemukan redaksi sesuai ketetapan guru di tempatnya masing-masing.',
          'Halaman ini melengkapi entri maulid lain di perpustakaan 165, seperti Maulid Barzanji dan Maulid Dibai, sehingga pembaca memperoleh peta genre pujian nabawi secara utuh.',
        ],
      },
    ],
    related: ['maulid-barzanji', 'khataman-dan-amalan-tqn', 'fathul-rabbani'],
  },
  {
    slug: 'maulid-barzanji',
    kind: 'library',
    title: 'Maulid Barzanji',
    titleAr: 'برزنجي',
    category: 'Ampalan & Wirid',
    summary:
      'Maulid Barzanji karya Jaafar al-Barzanji: syair kelahiran dan keagungan Nabi Muhammad yang paling luas dibacakan di majelis-majelis Nusantara.',
    facts: [
      { label: 'Penulis', value: 'Jaafar ibn Hasan al-Barzanji, ulama Madinah' },
      { label: 'Nama lengkap', value: "Iqd al-Jawāhir fī Mawlid an-Nabī" },
      { label: 'Bentuk', value: 'Syair Arab berirama untuk dibacakan berjamaah' },
      { label: 'Penggunaan', value: 'Maulid, haul, dan majelis shalawat' },
    ],
    body: [
      {
        h: 'Syair Maulid yang Paling Populer',
        p: [
          'Maulid Barzanji adalah karya Jaafar al-Barzanji, ulama yang wafat di Madinah abad ke-12 H. Nama lengkapnya Iqd al-Jawāhir fī Mawlid an-Nabī al-Adhwar. Kitab ini menyusun kisah kelahiran, keagungan, dan kedudukan Nabi Muhammad dalam bentuk syair Arab yang berirama, sehingga nyaman dibacakan berjamaah.',
          'Di Nusantara, Barzanji menjadi maulid yang paling luas dibacakan: di majelis shalawat mingguan, acara tujuh bulanan kehamilan, haul ulama, hingga peringatan maulid besar. Banyak pesantren menuliskan aksara pegon untuk memudahkan santri membaca dengan lagu yang baku.',
        ],
      },
      {
        h: 'Kedudukannya di Lingkungan TQN',
        p: [
          'Di majelis-majelis TQN, pembacaan Barzanji menjadi bagian adab majelis dan acara haul guru-guru tarekat. Kalimat-kalimat pujian dalamnya menumbuhkan cinta kepada Nabi Muhammad, nilai yang menjadi ruh sanad tarekat karena setiap ijazah bersambung hingga kepada beliau.',
          'Di 165.web.id, Maulid Barzanji hadir sebagai entri amalan dan wirid. Pembaca dianjurkan mengikuti redaksi yang diajarkan majelisnya dan menjaga adab majelis maulid sebagaimana diajarkan guru.',
        ],
      },
    ],
    related: ['maulid-dibai', 'maula-nabi', 'khataman-dan-amalan-tqn'],
  },
  {
    slug: 'maulid-dibai',
    kind: 'library',
    title: "Maulid Dibāi'",
    titleAr: "الدبائي",
    category: 'Ampalan & Wirid',
    summary:
      "Maulid Dibāi' karya Abu Abdillah ad-Dibai: matan maulid pendek yang ringkas dan menjadi salah satu teks pujian nabawi yang sering dibacakan di majelis.",
    facts: [
      { label: 'Penulis', value: "Abu Abdillah Muhammad ibn Ahmad ad-Dibai" },
      { label: 'Nama lengkap', value: "Al-Majmūʿah as-Sallāh fī Mawlid al-Mushaffāh" },
      { label: 'Karakter', value: 'Matan pendek, mudah dihafal dan dibacakan' },
      { label: 'Penggunaan', value: 'Maulid dan majelis shalawat' },
    ],
    body: [
      {
        h: 'Maulid Ringkas dari Aden',
        p: [
          "Maulid Dibāi' adalah matan maulid karya Abu Abdillah ad-Dibai, ulama dari Aden yang hidup pada abad ke-10 H. Judul lengkapnya Al-Majmūʿah as-Sallāh fī Mawlid al-Mushaffāh. Dibandingkan maulid lain, teks ini pendek sehingga praktis dibacakan dalam satu majelis tanpa melelahkan pendengar.",
          "Keringkasannya membuat Maulid Dibāi' menjadi pilihan di majelis-majelis yang menuntut waktu singkat, dan banyak guru menjadikannya matan hafalan sebelum murid mengenal Barzanji yang lebih panjang.",
        ],
      },
      {
        h: 'Tempatnya di Genre Maulid',
        p: [
          'Genre maulid berkembang melalui beberapa matan terkenal, antara lain karya Ibnu Dihyah, as-Saiyid al-Bakri, al-Barzanji, dan ad-Dibai. Setiap matan memiliki nada dan gaya tersendiri, namun seluruhnya bermuara pada pujian kepada Nabi Muhammad dan pengharapan keberkahan.',
          "Di 165.web.id, Maulid Dibāi' hadir melengkapi entri Maulid Barzanji dan Maula an-Nabī. Pembaca dianjurkan membaca sesuai ketetapan majelisnya dan menjaga makna kalimat yang dibacakan, bukan sekadar bunyinya.",
        ],
      },
    ],
    related: ['maulid-barzanji', 'maula-nabi', 'khataman-dan-amalan-tqn'],
  },
  {
    slug: 'mawlid-sharaf-al-anam-ms-tradition',
    kind: 'library',
    title: 'Mawlid Syaraf al-Anām (tradisi naskah)',
    titleAr: 'شرف الأنام',
    category: 'Sejarah & Manaqib',
    summary:
      'Mawlid Syaraf al-Anām dalam tradisi naskah: salinan pujian nabawi dengan aksara pegon yang dijaga sebagai warisan dokumentasi majelis-majelis Nusantara.',
    facts: [
      { label: 'Judul teks', value: 'Syaraf al-Anām, mawlid pujian nabawi' },
      { label: 'Bentuk dokumentasi', value: 'Naskah salinan, umumnya beraksara pegon' },
      { label: 'Lingkup', value: 'Tradisi naskah majelis-majelis Nusantara' },
      { label: 'Kedudukan di 165', value: 'Arsip dokumentasi platform' },
    ],
    body: [
      {
        h: 'Mawlid dalam Bentuk Naskah',
        p: [
          'Syaraf al-Anām adalah sebutan bagi teks mawlid pujian kepada Nabi Muhammad yang beredar dalam lingkungan majelis-majelis Nusantara. Selain dicetak, teks ini lama dipelihara dalam bentuk naskah salinan tangan, umumnya ditulis dengan aksara pegon agar santri mudah membacanya dengan lagu majelis.',
          'Naskah-naskah mawlid semacam ini menyimpan bukti hidupnya tradisi pujian nabawi di tingkat lokal: catatan tepi penyalin, tanda lagu, dan catatan majelis turut terekam di dalamnya, sehingga bernilai bagi kajian sejarah keagamaan Nusantara.',
        ],
      },
      {
        h: 'Perlindungan sebagai Dokumentasi',
        p: [
          'Di 165.web.id, halaman ini diperlakukan sebagai entri arsip dan tradisi naskah, bukan panduan amalan. Platform memaparkan lingkup umum teks dan bentuk dokumentasinya tanpa mengklaim detail salinan tertentu yang belum terverifikasi.',
          'Pembaca yang memiliki akses ke salinan Syaraf al-Anām dianjurkan menjaga naskahnya dengan baik dan mendokumentasikan data fisiknya, karena warisan tulisan tangan semacam ini mudah rusak dan sulit diganti.',
        ],
      },
    ],
    related: ['maulid-barzanji', 'maulid-dibai', 'khataman-dan-amalan-tqn'],
  },
  {
    slug: 'miftahul-jannah',
    kind: 'library',
    title: 'Miftāhul Jannah',
    titleAr: 'مفتاح الجنة',
    category: 'Tasawuf & Akhlak',
    summary:
      'Miftāhul Jannah, kunci surga: teks pengantar amalan dan doa yang dipelajari di lingkungan pesantren sebagai bekal ibadah harian murid.',
    facts: [
      { label: 'Makna judul', value: 'Kunci surga' },
      { label: 'Karakter', value: 'Teks pengantar amalan dan doa' },
      { label: 'Penggunaan', value: 'Pengajian dasar di lingkungan pesantren' },
      { label: 'Kaidah penyajian', value: 'Tanpa klaim nisbah yang belum terverifikasi' },
    ],
    body: [
      {
        h: 'Judul dan Lingkup Teks',
        p: [
          'Miftāhul Jannah, yang berarti kunci surga, adalah judul yang melekat pada teks pengantar amalan dan doa yang dipelajari di lingkungan pesantren. Teks semacam ini umumnya menghimpun doa harian, adab ibadah, dan nasihat ringkas agar kehidupan murid tetap dalam koridor syariat.',
          'Judul semacam ini muncul pada beberapa teks di berbagai wilayah, sehingga 165.web.id menyajikan halaman ini sebagai pengantar genre tanpa mengklaim pengarang atau nisbah tertentu yang belum dapat diverifikasi.',
        ],
      },
      {
        h: 'Nilai bagi Murid TQN',
        p: [
          'Bagi murid TQN, teks pengantar doa dan adab ibadah berfungsi sebagai bekal praktis: wirid dan dzikir tarekat tidak berdiri sendirian, melainkan dibungkus adab harian yang diajarkan sejak awal. Teks dasar seperti ini melatih murid mengenal redaksi doa yang benar dan waktu-waktu istimewa dalam ibadah.',
          'Di 165.web.id, kitab ini hadir sebagai bagian peta khazanah. Rujukan amalan resmi tetap berada pada panduan Khataman dan Amalan TQN yang disusun platform.',
        ],
      },
    ],
    related: ['khataman-dan-amalan-tqn', 'kitab-al-wird', 'fathul-rabbani'],
  },
  {
    slug: 'mishkat-al-anwar',
    kind: 'library',
    title: 'Mishkāt al-Anwār (Suhrawardi)',
    titleAr: 'مشكاة الأنوار',
    category: 'Kajian Akademik',
    summary:
      'Mishkāt al-Anwār karya Yahya Suhrawardi: risalah filsafat cahaya yang dikaji secara akademik; di 165 tidak dijadikan teks amalan TQN.',
    facts: [
      { label: 'Penulis', value: 'Yahya ibn Habash as-Suhrawardi, pemikir abad ke-6 H' },
      { label: 'Bidang', value: 'Filsafat cahaya dan hikmah islami' },
      { label: 'Gelar tokoh', value: 'Syekh al-Isyraq, pembuka aliran isyrāq' },
      { label: 'Status di 165', value: 'Kajian akademik, bukan teks amalan' },
    ],
    body: [
      {
        h: 'Risalah Filsafat Cahaya',
        p: [
          'Mishkāt al-Anwār, yang berarti ceruk cahaya, adalah risalah Yahya as-Suhrawardi, pemikir Persia abad ke-6 H yang dikenal sebagai Syekh al-Isyraq. Dalam risalah ini beliau menyusun doktrin cahaya: sesuatu yang nyata pada hakikatnya adalah cahaya, dan tangga-tangga cahaya bermuara pada Cahaya cahaya-cahaya.',
          'Suhrawardi memadukan perangkat filsafat yang diwarisi dari zaman kuno dengan kerangka keislaman, sehingga karyanya dikaji luas dalam sejarah pemikiran Islam, antara lain oleh Qutbuddin asy-Syirazi serta tradisi falsafah Persia seperti Mir Damad dan Mulla Sadra. Bahasanya padat dan bersifat filsafat, bukan panduan amalan.',
        ],
      },
      {
        h: 'Penempatan sebagai Kajian Akademik',
        p: [
          'Di perpustakaan 165, Mishkāt al-Anwār hadir semata sebagai kajian akademik. Platform tidak menjadikan doktrin filsafat isyrāq sebagai ajaran TQN, tidak memakai teks ini sebagai wirid, dan tidak mengatribusikan risalah ini kepada silsilah tarekat apapun.',
          'Pembaca yang menekuni sejarah pemikiran dapat mengakses terjemahan dan kajian sekunder yang tersedia secara luas, sementara pembinaan ruhani tetap bertumpu pada teks pembinaan tarekat yang berijazah.',
        ],
      },
    ],
    related: ['fusus-alhikam', 'fathul-rabbani', 'at-taaruf'],
  },
  {
    slug: 'munjiyat',
    kind: 'library',
    title: 'Munjiyāt (Al-Ghazali)',
    titleAr: 'المنجيات',
    category: 'Tasawuf & Akhlak',
    summary:
      "Munjiyāt, jilid penyelamat dari Ihyā' 'Ulūmiddīn Al-Ghazali: taubat, sabar, takut, harap, cinta, dan jalan pengobatan jiwa bagi pelaku wirid.",
    facts: [
      { label: 'Penulis', value: 'Imam Abu Hamid Al-Ghazali' },
      { label: 'Kedudukan', value: "Jilid penyelamat dari Ihyā' 'Ulūmiddīn" },
      { label: 'Tema pokok', value: 'Taubat, sabar, khauf, harap, dan cinta kepada Allah' },
      { label: 'Kegunaan', value: 'Pembinaan penyakit dan pengobatan hati' },
    ],
    body: [
      {
        h: 'Jilid Penyelamat dari Karya Besar',
        p: [
          "Munjiyāt adalah sebutan bagi jilid keempat Ihyā' 'Ulūmiddīn, yaitu bagian tentang hal-hal yang menyelamatkan. Di dalamnya Al-Ghazali menguraikan taubat sebagai pintu pertama, kemudian menyusuri keutamaan sabar, syukur, harap, takut, zuhud, tawakal, hingga cinta dan keridhaan kepada Allah.",
          'Urutan babnya membentuk tangga pengobatan jiwa: dimulai dari pembersihan penyakit, bergerak ke latihan amalan hati, dan berakhir pada maqam yang tenang. Karena itu bagian ini sering dikutip terpisah sebagai pegangan pembinaan ruhani.',
        ],
      },
      {
        h: 'Manfaat bagi Pelaku Wirid',
        p: [
          'Bagi murid TQN, Munjiyāt menjadi cermin: bab khauf menahan sombong, bab sabar menopang ujian wirid yang panjang, dan bab cinta menyalakan kerinduan kepada Allah. Membaca bagian ini membantu murid memahami bahwa dzikir lahiriah harus disertai perbaikan hati.',
          'Di 165.web.id, entri ini menemani entri Ihya Ulumuddin dan kitab-kitab Al-Jilani. Pembaca dianjurkan membacanya bertahap bersama guru, sebagaimana adab membaca kitab tasawuf klasik secara umum.',
        ],
      },
    ],
    related: ['ihya-ulumuddin', 'fathul-rabbani', 'ar-risalah-alqusyairiyyah'],
  },
  {
    slug: 'muntakhab-ahadis-tarekat',
    kind: 'library',
    title: 'Muntakhab Ahadis Tarekat',
    category: 'Dokumen Institusi',
    summary:
      'Muntakhab Ahadis Tarekat: kompilasi hadis amalan tarekat yang disusun platform 165 sebagai rujukan dalil wirid dan adab majelis TQN.',
    facts: [
      { label: 'Jenis', value: 'Kompilasi hadis dokumen platform 165' },
      { label: 'Lingkup', value: 'Hadis-hadis amalan dzikir, shalawat, dan adab majelis' },
      { label: 'Fungsi', value: 'Rujukan dalil pembinaan amalan TQN' },
      { label: 'Prinsip', value: 'Memilih riwayat yang beredar luas di kitab induk' },
    ],
    body: [
      {
        h: 'Kompilasi Dalil Amalan Tarekat',
        p: [
          'Muntakhab Ahadis Tarekat adalah kompilasi hadis yang disusun 165.web.id sebagai bagian dari dokumen panduan platform. Isinya memilih hadis-hadis tentang dzikir, shalawat, doa, dan adab majelis yang beredar luas pada kitab-kitab induk, kemudian disajikan dalam urutan yang mudah dirujuk saat pengajian.',
          'Sebagai kompilasi platform, dokumen ini tidak menggantikan kitab hadis besar. Penyusunannya dimaksudkan agar murid dan guru memiliki acuan dalil yang seragam ketika menjelaskan dasar amalan tarekat di majelis.',
        ],
      },
      {
        h: 'Cara Menggunakan Dokumen Ini',
        p: [
          'Hadis yang dirujuk sebaiknya dibaca bersama nomor riwayat dan kitab sumbernya agar murid belajar menelusuri ke asal. Untuk perkara yang berbeda status hadisnya, pembaca dianjurkan bertanya kepada guru atau ahli hadis, bukan menarik kesimpulan sendiri.',
          'Di 165.web.id, dokumen ini berdampingan dengan Khataman dan Amalan TQN: satu menyediakan rangkaian amalan, yang lain menyediakan dalilnya, sehingga pembinaan TQN berjalan tertib dan dapat dipertanggungjawabkan.',
        ],
      },
    ],
    related: ['khataman-dan-amalan-tqn', 'muntakhab-al-ahadis', 'fathul-rabbani'],
  },
  {
    slug: 'muntakhab-al-ahadis',
    kind: 'library',
    title: 'Muntakhab al-Ahadis',
    titleAr: 'منتخب الأحاديث',
    category: 'Dokumen Institusi',
    summary:
      'Muntakhab al-Ahadis: himpunan hadis pilihan yang dihimpun untuk rujukan cepat pengajian; di 165 ditempatkan sebagai entri dokumentasi platform.',
    facts: [
      { label: 'Jenis', value: 'Himpunan hadis pilihan' },
      { label: 'Makna judul', value: 'Hadis-hadis yang dipilih' },
      { label: 'Fungsi umum', value: 'Rujukan cepat dalil amalan' },
      { label: 'Kedudukan di 165', value: 'Entri dokumentasi dan rujukan platform' },
    ],
    body: [
      {
        h: 'Genre Himpunan Hadis Pilihan',
        p: [
          'Muntakhab al-Ahadis, yang berarti hadis-hadis yang dipilih, adalah nama bagi himpunan hadis pilihan yang dihimpun untuk memudahkan rujukan cepat. Genre semacam ini umum di lingkungan pesantren dan tarekat: hadis-hadis tentang ibadah, akhlak, dan dzikir dipetik dari kitab-kitab induk lalu disusun berdasarkan tema.',
          'Nilai utama himpunan pilihan adalah kepraktisan, sementara risikonya adalah lepasnya hadis dari konteks kitab sumbernya. Karena itu tradisi yang baik selalu melampirkan rujukan asal agar pembaca dapat menelusuri lebih jauh.',
        ],
      },
      {
        h: 'Tempatnya di Perpustakaan 165',
        p: [
          'Di 165.web.id, Muntakhab al-Ahadis ditempatkan sebagai entri dokumentasi platform bersama Muntakhab Ahadis Tarekat yang berfokus pada dalil amalan tarekat. Platform menampilkan lingkup umum genre ini tanpa mengklaim susunan hadis tertentu di luar yang tersusun di dokumen resmi.',
          'Pembaca yang hendak mendalami hadis disarankan kembali ke kitab induk yang menjadi sumber kutipan, dan menjadikan halaman ini sebagai pintu pengantar, bukan pengganti, khazanah hadis.',
        ],
      },
    ],
    related: ['muntakhab-ahadis-tarekat', 'khataman-dan-amalan-tqn', 'ihya-ulumuddin'],
  },
// APPEND-ABOVE
]
