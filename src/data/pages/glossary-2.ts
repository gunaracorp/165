import type { PageEntry } from './types'

// 165 — Glosarium bagian 2 (slug ikhlas s.d. naqsabandiyah-mujaddidiyah)
// Konten bahasa Indonesia, jujur, tanpa fabrikasi fakta.
export const ENTRIES: PageEntry[] = [
  {
    slug: 'ikhlas',
    kind: 'glossary',
    title: 'Ikhlāṣ',
    titleAr: 'الإخلاص',
    category: 'Kepercayaan & Maqamat',
    summary: 'Ikhlas berarti murni niat semata karena Allah; fondasi setiap dzikir dan wirid dalam TQN Qadiriyah Naqsyabandiyah.',
    facts: [
      { label: 'Makna', value: 'Kemurnian niat; beramal semata mengharap rida Allah, bukan pujian manusia.' },
      { label: 'Akar kata', value: 'Dari bahasa Arab, berarti murni dan terbebas dari campuran.' },
      { label: 'Kedudukan', value: 'Syarat diterimanya ibadah dan seluruh latihan tarekat.' },
      { label: 'Adab', value: 'Dirawat dengan memeriksa niat, bukan diklaim sudah sempurna.' },
    ],
    body: [
      {
        h: 'Makna Ikhlāṣ',
        p: [
          'Ikhlāṣ berasal dari akar bahasa Arab yang berarti murni dan terbebas dari campuran. Dalam ibadah, ikhlas berarti seseorang menghadirkan amal semata karena Allah, bukan karena ingin dipuji atau dianggap hebat. Para ulama menegaskan ikhlas sebagai syarat diterimanya amal, sehingga amal tanpa kejujuran niat hanya gerak badan tanpa nilai ruhani. Karena itu ikhlas bukan perasaan sesaat, melainkan keadaan hati yang dirawat terus-menerus.',
          'Para ulama tasawuf menempatkan ikhlas sebagai pintu masuk sekaligus buah akhir perjalanan ruhani. Semakin dalam seseorang berzikir, semakin ia menyadari betapa mudanya niat terselin oleh keinginan diakui. Maka murid diajak menyuci niat bukan sekali, tetapi di setiap hembusan dzikir dan amal hariannya.',
        ],
      },
      {
        h: 'Ikhlas dalam Latihan Tarekat',
        p: [
          'Dalam Tarekat Qadiriyah Naqsyabandiyah, nilai latihan tidak diukur dari ramainya majelis, melainkan dari kejujuran hati murid. Dzikir yang lafalnya sederhana namun niatnya bersih dinilai lebih berat daripada bacaan merdu yang diakhiri kebanggaan. Karena itu murid dianjurkan memeriksa niat sebelum berzikir dan mengembalikannya bila bergeser di tengah jalan.',
          'Ikhlas juga menjadi benteng dari godaan berbangga. Bila murid mengalami kemudahan atau pengalaman ruhani, ia ditegur adab untuk tidak mempamerkannya dan kembali menempa dzikir. Segala pengalaman yang justru menumbuhkan sombong patut diwaspadai, dan ketaatan yang sederhana tetap istiqamah lebih diutamakan daripada sorotan.',
        ],
      },
    ],
    related: ['dzikir', 'istighfar', 'fana', 'ihsan'],
  },
  {
    slug: 'ilham',
    kind: 'glossary',
    title: 'Ilhām',
    titleAr: 'إلهام',
    category: 'Kepercayaan & Maqamat',
    summary: 'Ilham adalah penerangan yang masuk ke hati; dalam tarekat dipahami sebagai bantuan Allah, bukan pengganti syariat.',
    facts: [
      { label: 'Makna', value: 'Penerangan atau kabar yang hadir di hati tanpa perantara belajar.' },
      { label: 'Kedudukan', value: 'Anugerah Allah kepada hamba yang Dia kehendaki, berbeda dari wahyu.' },
      { label: 'Ukuran', value: 'Dinilai dengan syariat dan diserahkan kepada pandangan mursyid.' },
    ],
    body: [
      {
        h: 'Makna dan Batasan',
        p: [
          'Ilhām berasal dari bahasa Arab yang berarti penerangan yang datang ke hati. Orang yang dilhami mendapat kemudahan memahami atau kesadaran mendalam tanpa proses belajar yang terlihat. Para ulama tasawuf membedakan ilham dari wahyu: wahyu hanya diturunkan kepada nabi dan berstatus hukum yang wajib diikuti, sedangkan ilham dapat menghampiri wali dan hamba saleh sebagai kelembutan Allah.',
          'Karena itu ilham tidak pernah menjadi dasar mengubah syariat. Ilham yang benar justru mendorong orangnya makin taat, makin rendah hati, dan makin tekun berdzikir. Sebaliknya, bila pengalaman hati membuat orang lalai beribadah atau merasa diri terpilih, ia diserahkan kepada mursyid untuk ditimbang dengan tenang.',
        ],
      },
      {
        h: 'Ilham bagi Murid Tarekat',
        p: [
          'Murid yang tekun berdzikir kadang merasakan hatinya ringan, mudah memahami nasihat, atau mimpi yang tampak jelas. Para guru tarekat menasehati murid untuk tidak berbangga dengan pengalaman semacam itu, karena ia dapat hadir dan pergi sesuai kehendak Allah. Murid tetap menjaga wirid, tetap berpegang pada talqin, dan menyampaikan pengalamannya kepada mursyid bila perlu ditimbang.',
          'Adab murid menuntut kejujuran. Mengklaim ilham untuk membenarkan keinginan pribadi atau hal duniawi adalah penyimpangan. Jalan yang aman tetaplah dzikir yang tekun, syariat yang dijaga, dan musyawarah dengan mursyid atau khalifah dalam setiap keputusan penting hidup.',
        ],
      },
    ],
    related: ['ikhlas', 'lathifah-qalb', 'mursyid', 'ihsan'],
  },
  {
    slug: 'imam-khataman',
    kind: 'glossary',
    title: 'Imam Khataman',
    category: 'Struktur Tarekat',
    summary: 'Imam khataman adalah murid yang diberi tugas memimpin bacaan kitab wirid dalam majelis TQN di bawah arahan khalifah.',
    facts: [
      { label: 'Peran', value: 'Memimpin lafal dzikir dan bacaan kitab wirid dalam majelis.' },
      { label: 'Kedudukan', value: 'Petugas majelis yang ditunjuk khalifah atau mursyid.' },
      { label: 'Batas', value: 'Memimpin irama bacaan, bukan mengubah wirid atau menalqin murid.' },
    ],
    body: [
      {
        h: 'Tugas di Tengah Majelis',
        p: [
          'Dalam majelis tarekat, wirid dibaca bersama-sama agar murid saling menyokong dalam dzikir. Agar bacaan seragam dan tenang, ditunjuk seorang imam khataman. Ia memimpin tempo bacaan, menjaga lafal sesuai talqin, dan memastikan seluruh majelis bergerak dalam satu irama yang sama. Tugas ini menuntut ketelitian, karena satu kesalahan lafal dapat terbawa ke banyak orang di belakangnya.',
        ],
      },
      {
        h: 'Kedudukan dalam Struktur',
        p: [
          'Imam khataman berdiri di bawah khalifah tarekat. Ia menerima arahan tentang wirid yang dibaca, urutannya, dan iramanya. Kedudukan ini amanah pelayanan, bukan kewenangan keilmuan: imam khataman tidak berhak menalqin dzikir baru, mengubah redaksi, atau menafsirkan latihan tanpa izin. Sebagian jalur menjadikan tugas ini tahap persiapan sebelum murid diuji lebih lanjut.',
          'Adab imam khataman adalah kerendahan hati. Ia datang lebih awal, menjaga suasana majelis, dan menerima koreksi dengan lapang dada. Bagi murid baru, kehadiran imam khataman yang tenang adalah contoh nyata bagaimana wirid dijaga dengan benar di tengah jamaah. Meski tugasnya tampak besar di depan jamaah, ia tetap menganggap dirinya murid biasa yang sedang menjalankan amanah.',
        ],
      },
    ],
    related: ['khatm', 'khalifah-tarekat', 'talqin-massal', 'lagu-wiridan'],
  },
  {
    slug: 'istidraj',
    kind: 'glossary',
    title: 'Istidrāj',
    titleAr: 'استدراج',
    category: 'Kepercayaan & Maqamat',
    summary: 'Istidraj adalah kelapangan kemudahan dunia yang mengantar lalai; peringatan bagi murid tarekat untuk tetap waspada.',
    facts: [
      { label: 'Makna', value: 'Kelapangan kenikmatan yang menjadi perangkap bagi hati yang lalai.' },
      { label: 'Akar kata', value: 'Dari bahasa Arab, berjalan bertahap sedikit demi sedikit.' },
      { label: 'Adab', value: 'Dipakai untuk introspeksi diri, bukan alasan menghakimi orang lain.' },
    ],
    body: [
      {
        h: 'Makna Istidrāj',
        p: [
          'Istidrāj berarti diberi kelapangan. Orang yang terkena istidraj tampak sejahtera, dihormati, dan mudah dalam segala urusan, padahal kemudahan itu justru menjerumuskan kelalaian. Para ulama menjelaskan proses ini berjalan bertahap: mulai dari kelonggaran kecil, lalu makin lebar, sampai hati benar-benar jauh dari Allah sambil merasa diri terhormat.',
        ],
      },
      {
        h: 'Peringatan bagi Murid',
        p: [
          'Dalam perjalanan tarekat, godaan istidraj bisa muncul dalam bentuk pujian, ramainya jamaah, atau cerita karamah. Murid yang mulai diakui orang mudah lupa bahwa latihan adalah rahasia antara dia dan Allah. Karena itu guru tarekat menekankan ikhlas, dzikir yang tekun, dan pemeriksaan niat sebagai benteng, sekaligus tetap rendah hati dalam ilmu dan adab.',
          'Adab menuntut kehati-hatian: murid tidak boleh mudah menuduh orang lain terkena istidraj, karena keadaan hati manusia hanya Allah yang tahu. Istilah ini paling tepat dipakai untuk cermin diri sendiri, disertai istighfar dan kembali kepada latihan yang diwajibkan mursyid tanpa henti. Dengan sikap itu, pengingat tentang istidraj menjadi pelindung kerendahan hati, bukan senjata untuk menyalahkan.',
        ],
      },
    ],
    related: ['istighfar', 'ikhlas', 'karamah', 'khauf'],
  },
  {
    slug: 'istighfar',
    kind: 'glossary',
    title: 'Istighfār',
    titleAr: 'الاستغفار',
    category: 'Amalan & Wirid',
    summary: 'Istighfar permohonan ampun kepada Allah; amalan harian murid TQN yang menghaluskan hati sebelum dan sesudah dzikir.',
    facts: [
      { label: 'Makna', value: 'Memohon ampun kepada Allah atas dosa yang lalu dan lalai hati.' },
      { label: 'Lafal umum', value: 'Astagfirullahal azim wa atubu ilaih, yang dibaca tekun pagi dan petang.' },
      { label: 'Kedudukan', value: 'Bagian wirid harian murid dan pembuka suasana majelis dzikir.' },
    ],
    body: [
      {
        h: 'Makna Istighfār',
        p: [
          'Istighfār berarti memohon ampun kepada Allah. Murid menyadari dirinya penuh kesalahan, baik yang diketahui maupun yang tidak terasa, sehingga meminta ampun menjadi napas hidup harian. Dalam riwayat yang sahih, Rasulullah sendiri memohon ampun lebih dari tujuh puluh kali dalam sehari, menjadikan istighfar contoh yang diikuti seluruh murid tarekat.',
        ],
      },
      {
        h: 'Istighfar dalam Wirid TQN',
        p: [
          'Dalam rangkaian wirid Tarekat Qadiriyah Naqsyabandiyah, istighfar hadir sebelum dzikir sebagai pembersih pintu hati. Murid juga dianjurkan membaca istighfar pada waktu pagi dan petang, serta memperbanyaknya ketika merasa hati berat atau tergelincir dalam maksiat. Para guru mengibaratkan hati seperti cermin: istighfar adalah alat mengusap debu agar pantulan cahaya zikir kembali jernih.',
          'Adab istighfar menuntut kesungguhan. Memohon ampun disertai niat meninggalkan dosa, mengganti kesalahan dengan amal, dan berlapang dada bila godaan datang lagi. Istighfar yang tekun menghaluskan hati, mempererat hubungan murid dengan mursyidnya, dan membuka pintu ketenangan dalam setiap latihan. Murid juga diajak mengajak keluarga membiasakan istighfar, karena amalan ringan ini bisa dibawa ke mana saja.',
        ],
      },
    ],
    related: ['dzikir', 'wirid', 'ikhlas', 'khatm'],
  },
  {
    slug: 'jalur-cukir',
    kind: 'glossary',
    title: 'Jalur Cukir',
    category: 'Sejarah & Tokoh',
    summary: 'Jalur Cukir adalah penyebaran TQN melalui Pondok Cukir yang menjadi simpul tarekat bagi jamaah kawasan Surabaya dan sekitarnya.',
    facts: [
      { label: 'Kedudukan', value: 'Salah satu jalur silsilah TQN di Jawa bagian timur.' },
      { label: 'Simpul', value: 'Pondok Cukir yang dikenal dalam komunitas TQN kawasan Surabaya.' },
      { label: 'Jangkauan', value: 'Jamaah di Surabaya dan daerah sekitarnya.' },
      { label: 'Catatan', value: 'Kronologi rinci tiap jalur mengikuti riwayat mursyid masing-masing.' },
    ],
    body: [
      {
        h: 'Pengertian Jalur',
        p: [
          'Dalam kosakata murid TQN, jalur berarti garis ijazah yang mengalir dari mursyid kepada khalifah dan seterusnya kepada murid di berbagai daerah. Satu tarekat dapat mengalir melalui banyak jalur, dan masing-masing menjaga silsilah serta kitab wiridnya. Jalur Cukir berkembang melalui Pondok Cukir yang menjadi simpul tarekat bagi komunitas TQN di kawasan Surabaya dan sekitarnya.',
        ],
      },
      {
        h: 'Ciri dan Adab antar Jalur',
        p: [
          'Setiap jalur dapat memiliki penekanan kebiasaan yang berbeda, mulai dari irama majelis, urutan bacaan, hingga adab kunjungan kepada mursyid. Murid jalur Cukir menjaga talqin yang ia terima dan tidak mencampur wirid dari jalur lain tanpa izin mursyidnya. Bersamaan itu, hubungan antar jalur dijaga dengan ukhuwah, karena seluruh garis bertemu pada sanad yang sama.',
          'Platform 165 sengaja tidak mencantumkan kronologi dan nama yang belum terverifikasi untuk menghindari kekeliruan. Bagi murid yang ingin menelusuri kedudukannya dalam jalur Cukir, jalan yang benar adalah bertanya kepada mursyid atau khalifah tempat ia menerima talqin, karena sanad hanya sah jika disampaikan langsung dengan adab. Hal ini pula yang menjaga murid dari perdebatan sejarah yang justru mengikis ukhuwah antar jamaah.',
        ],
      },
    ],
    related: ['jalur-surialaya', 'jalur-karawang', 'silsilah', 'sanad'],
  },
  {
    slug: 'jalur-karawang',
    kind: 'glossary',
    title: 'Jalur Karawang',
    category: 'Sejarah & Tokoh',
    summary: 'Jalur Karawang adalah garis ijazah TQN yang berkembang di Karawang, Jawa Barat, dengan majelis dzikir yang tekun menjaga wirid.',
    facts: [
      { label: 'Kedudukan', value: 'Jalur silsilah TQN yang tumbuh di wilayah Karawang, Jawa Barat.' },
      { label: 'Kegiatan', value: 'Majelis dzikir, pengajian, dan pembinaan murid baru.' },
      { label: 'Catatan', value: 'Sejarah rinci mengikuti riwayat lokal khalifah-khalifah setempat.' },
    ],
    body: [
      {
        h: 'TQN di Karawang',
        p: [
          'Karawang termasuk daerah di Jawa Barat tempat Tarekat Qadiriyah Naqsyabandiyah berkembang pesat. Jalur Karawang merujuk pada garis ijazah yang mengalir melalui khalifah-khalifah di wilayah itu kepada jamaah di sekitarnya. Majelis dzikir rutin menjadi wadah murid menjaga khatam, dzikir latifah, dan adab tarekat dalam kehidupan sehari-hari. Kehadiran majelis di kampung-kampung membuat murid tetap dekat dengan latihan walau jauh dari pusat tarekat.',
        ],
      },
      {
        h: 'Menjaga Sanad dan Ukhuwah',
        p: [
          'Murid jalur Karawang menjaga hubungan rabithah dengan mursyidnya dan mengikuti arahan talqin tanpa menambah atau mengurangi wirid. Bila ada persoalan latihan, ia kembali kepada khalifah yang menalqinnya, bukan kepada kesimpulan sendiri. Kebiasaan ini menjaga kemurnian dzikir sekaligus menempa kerendahan hati.',
          'Antar jalur, termasuk jalur Karawang, jalur Cukir, dan jalur Suryalaya, dijaga rasa persaudaraan. Semuanya minum dari satu mata air yang sama, yaitu silsilah TQN yang bersambung kepada Rasulullah. Platform 165 menghadirkan jalur ini sebagai pengantar, dan menasehati murid menanyakan sanadnya langsung kepada mursyid atau khalifah yang bersangkutan. Dengan cara itu, kebanggaan pada jalur berjalan seiring hormat kepada jalur lain.',
        ],
      },
    ],
    related: ['jalur-surialaya', 'jalur-cukir', 'silsilah', 'talqin-massal'],
  },
  {
    slug: 'jalur-surialaya',
    kind: 'glossary',
    title: 'Jalur Suryalaya',
    category: 'Sejarah & Tokoh',
    summary: 'Jalur Suryalaya adalah jalur utama TQN dari Pesantren Suryalaya Panjalu Tasikmalaya yang dibawa Abah Sepuh dan diteruskan Abah Anom.',
    facts: [
      { label: 'Pusat', value: 'Pesantren Suryalaya, Panjalu, Tasikmalaya, Jawa Barat.' },
      { label: 'Ketokohan', value: 'Didirikan Syekh Abdul Hamid yang dikenal sebagai Abah Sepuh, lalu diteruskan putranya Abah Anom.' },
      { label: 'Ciri latihan', value: 'Dzikir latifah, khatam Qadiriyah Naqsyabandiyah, dan khalwat dar anjuman.' },
      { label: 'Jangkauan', value: 'Jamaah luas di berbagai daerah Indonesia dan luar negeri.' },
    ],
    body: [
      {
        h: 'Pusat Utama TQN',
        p: [
          'Pesantren Suryalaya di Panjalu, Tasikmalaya, dikenal sebagai pusat utama Tarekat Qadiriyah Naqsyabandiyah. Jalur Suryalaya merujuk pada garis ijazah yang mengalir dari pesantren ini ke seluruh penjuru. Menurut riwayat yang mapan di kalangan jamaah, pondok ini didirikan Syekh Abdul Hamid, yang disebut Abah Sepuh, dan pengembangan latihan diteruskan putranya yang disebut Abah Anom hingga tarekat menyebar jauh melalui para khalifahnya.',
        ],
      },
      {
        h: 'Ciri dan Adab Murid',
        p: [
          'Ciri khas latihan pada jalur Suryalaya adalah dzikir latifah yang berpindah perhentian dalam dada, khatam Qadiriyah Naqsyabandiyah sebagai wirid pokok, serta kaidah khalwat dar anjuman. Khalifah khusus dan khalifah tarekat menalqin murid di berbagai daerah, sehingga murid dapat berdzikir di majelis dekat rumahnya sambil tetap terhubung dengan pusat latihan. Setiap murid tetap menerima wirid yang sama dan menjaga lafalnya sebagaimana ditalqinkan.',
          'Murid yang berkunjung ke Suryalaya menjaga adab: tenang, hormat kepada pengurus dan khalifah, serta tidak mengambil wirid tanpa talqin. Informasi resmi tentang jadwal majelis dan haul selalu dirujuk kepada pengurus pesantren. Platform 165 menyajikan jalur ini sebagai pengantar sejarah, bukan pengganti bimbingan langsung dari mursyid.',
        ],
      },
    ],
    related: ['khalifah-tarekat', 'khatm-qadiriyyah', 'haul', 'dzikir'],
  },
  {
    slug: 'jalwah',
    kind: 'glossary',
    title: 'Jalwah',
    titleAr: 'الجلوة',
    category: 'Kepercayaan & Maqamat',
    summary: 'Jalwah menyatakan dirinya Allah kepada hati dalam perjalanan suluk; kemuliaan yang wajib dijaga adab dan kerendahan hati.',
    facts: [
      { label: 'Makna', value: 'Menyatakan diri; keagungan Allah terasa jelas kepada hati.' },
      { label: 'Pasangan istilah', value: 'Berlawanan dengan dzuhul, yakni terasa terselubung dari penglihatan hati.' },
      { label: 'Adab', value: 'Tidak dipamerkan dan diserahkan penilaiannya kepada mursyid.' },
    ],
    body: [
      {
        h: 'Makna Jalwah dan Dzuhul',
        p: [
          'Jalwah berasal dari bahasa Arab yang berarti menyatakan diri atau tampaknya sesuatu secara jelas. Dalam bahasa tasawuf, jalwah adalah ketika keagungan Allah terasa menguasai hati sehingga murid menyadari betapa kecil dirinya. Ia berpasangan dengan dzuhul, yakni keadaan hati yang terasa kering dan terselubung. Para guru menjelaskan kedua keadaan ini datang bergantian sebagai latihan agar murid tidak berlabuh pada kesenangan. Bagi murid, memahami pergeseran keadaan hati membantu ia tidak panik saat dzikir terasa kosong.',
        ],
      },
      {
        h: 'Pembahasan dalam TQN',
        p: [
          'Pada Tarekat Qadiriyah Naqsyabandiyah, pembahasan jalwah dan dzuhul termasuk pelajaran lanjutan yang hanya disentuh setelah murid mantap dalam wirid dan adab. Murid yang merasakan keadaan berat atau ringan dalam dzikir dianjurkan melanjutkan latihan tanpa berlebihan membahasakannya, dan melaporkannya kepada mursyid bila mengganggu. Penjelasan hal semacam ini diberikan secara bertahap sesuai kesanggupan hati murid.',
          'Adab murid menuntut kejujuran dan kerahasiaan. Pengalaman ruhani tidak diumumkan di tengah orang banyak, karena pamer justru membuka pintu takabur. Jalan yang aman tetap dzikir yang tekun, syariat yang dijaga, dan pendampingan mursyid sampai hati kembali tenang dalam latihan yang diwajibkan.',
        ],
      },
    ],
    related: ['fana', 'marifah', 'mursyid', 'ikhlas'],
  },
  {
    slug: 'jamasan',
    kind: 'glossary',
    title: 'Jamasan',
    category: 'Kebiasaan & Tradisi',
    summary: 'Jamasan adalah tradisi memandikan pusaka atau benda bersejarah dengan air dan bunga sebagai bentuk penghormatan warisan.',
    facts: [
      { label: 'Makna', value: 'Memandikan atau menyucikan benda pusaka dan warisan bersejarah.' },
      { label: 'Akar budaya', value: 'Tradisi Jawa yang hidup di keraton, desa, dan lingkungan pesantren.' },
      { label: 'Waktu', value: 'Umumnya menyambut hari besar atau peringatan haul.' },
      { label: 'Nilai', value: 'Penghormatan kepada warisan dan kesempatan bersilaturahmi jamaah.' },
    ],
    body: [
      {
        h: 'Tradisi Memandikan Pusaka',
        p: [
          'Jamasan berasal dari tradisi Jawa yang berarti memandikan benda pusaka, seperti keris, tombak, kitab tua, atau benda peninggalan tokoh. Prosesi biasanya memakai air yang disediakan khusus disertai kembang setaman, dan berlangsung tenang sambil disertai doa bagi para tokoh yang meninggalkan warisan. Masyarakat meyakini jamasan menghadirkan keberkahan warisan, dan lebih penting lagi, ia menjadi momentum merawat benda tersebut agar awet untuk generasi berikutnya.',
        ],
      },
      {
        h: 'Jamasan di Lingkungan Tarekat',
        p: [
          'Di lingkungan tarekat dan pesantren, jamasan dapat menyertai haul atau peringatan hari besar, misalnya pada benda peninggalan syekh yang dijaga komunitas. Kegiatan ini dipahami sebagai bentuk syukur dan penghormatan kepada guru-guru terdahulu, sekaligus sarana kumpul jamaah yang diselingi doa, shalawat, dan pengajian. Suasana kumpul seperti ini juga menghidupkan ukhuwah antar jamaah dari desa sekitar.',
          'Para guru tarekat menegaskan batasnya: yang disembah tetap Allah, dan keberkahan hanya dari Allah, sedangkan benda hanyalah warisan yang dihormati. Dengan pemahaman itu, jamasan menjadi tradisi hangat yang menyatukan budaya lokal dan adab tarekat tanpa menyimpang dari tauhid. Murid diajak memaknai jamasan sebagai perawatan warisan dan pengingat untuk mengamalkan ilmu para pendahulu.',
        ],
      },
    ],
    related: ['haul', 'maqam-syekh', 'manaqib', 'tarekat'],
  },
  {
    slug: 'jurnal-tasawuf',
    kind: 'glossary',
    title: 'Jurnal Tasawuf',
    category: 'Arsip & Digital',
    summary: 'Jurnal Tasawuf di platform 165 adalah ruang esai reflektif tentang perjalanan ruhani, adab tarekat, dan warisan keilmuan.',
    facts: [
      { label: 'Jenis', value: 'Rubrik konten di platform 165 berupa esai dan catatan reflektif.' },
      { label: 'Isi', value: 'Ulasan kitab, pembahasan adab, dan refleksi latihan tarekat.' },
      { label: 'Tujuan', value: 'Menghidupkan tradisi menulis dan mendokumentasikan warisan tasawuf.' },
      { label: 'Adab', value: 'Menulis dengan santun, jujur, dan tidak mempamerkan hal kebatinan.' },
    ],
    body: [
      {
        h: 'Ruang Menulis tentang Tasawuf',
        p: [
          'Tradisi tarekat selalu berjalan seiring tradisi menulis, mulai dari kitab wirid, syair suluk, hingga catatan murid kepada gurunya. Platform 165 menghadirkan rubrik Jurnal Tasawuf sebagai ruang modern untuk kebiasaan itu. Di dalamnya, pembaca dapat menemukan esai reflektif, ulasan kitab tasawuf, dan catatan tentang adab perjalanan ruhani yang ditulis dengan bahasa yang tenang dan terukur.',
        ],
      },
      {
        h: 'Karakter Penulisan',
        p: [
          'Tulisan pada rubrik ini dijaga dengan kejujuran: tidak mengklaim pengalaman kebatinan yang melebihi kenyataan, tidak menyalahkan jalur lain, dan selalu mengarahkan pembaca kembali kepada mursyid serta syariat. Setiap materi menghadap tujuan yang sama, yaitu membantu murid merawat hati, bukan mencari sorotan. Gaya bahasanya dijaga sederhana agar mudah dibaca murid muda dan masyarakat umum.',
          'Sebagai bagian platform, Jurnal Tasawuf berbeda dari Kutipan Ilmiah yang menyajikan potongan sumber dengan rujukan resmi. Jurnal lebih menekankan bingkai bacaan yang hangat, sedangkan keputusan latihan tetap mengikuti bimbingan langsung dari mursyid atau khalifah masing-masing murid. Pembaca juga diajak menyumbangkan tulisan yang jujur dan tidak menghakimi jalur mana pun.',
        ],
      },
    ],
    related: ['kutipan-ilmiah', 'koleksi-digital', 'kitab-tasawuf', 'ihsan'],
  },
  {
    slug: 'karamah',
    kind: 'glossary',
    title: 'Karāmah',
    titleAr: 'الكرامة',
    category: 'Kepercayaan & Maqamat',
    summary: 'Karamah adalah perkara luar biasa yang ditunjukkan Allah melalui wali; bukan tujuan latihan dan tidak dipamerkan.',
    facts: [
      { label: 'Makna', value: 'Perkara luar biasa yang Allah tunjukkan melalui wali-Nya.' },
      { label: 'Beda mukjizat', value: 'Mukjizat menyertai nabi, karamah menyertai wali, istidraj menimpa orang yang sesat.' },
      { label: 'Kedudukan', value: 'Bukan target latihan tarekat; yang dikejar adalah dzikir dan adab.' },
      { label: 'Adab', value: 'Menurut tradisi tarekat, karamah para syekh dijaga dari publikasi berlebihan.' },
    ],
    body: [
      {
        h: 'Makna Karāmah',
        p: [
          'Karāmah berasal dari kata yang berarti kemuliaan. Para ulama menjelaskan bahwa mukjizat menyertai nabi untuk menantang pendusta, karamah menyertai wali sebagai kemuliaan yang datang tiba-tiba, dan istidraj menimpa orang yang makin dibolehkan dalam kemaksiatan. Ketiganya berbeda arah: karamah lahir dari ketaatan dan tidak pernah diupayakan secara sengaja.',
        ],
      },
      {
        h: 'Karamah dalam Tarekat',
        p: [
          'Jamaah TQN memercayai karamah para syekh dan guru terdahulu; kisahnya diwariskan turun-temurun dalam majelis. Namun latihan tarekat tidak pernah berorientasi mencari karamah. Murid diajak tekun berdzikir, menjaga wirid, dan bersabar, sebab mengincar perkara luar biasa justru membuka pintu riya dan khayalan. Cerita karamah yang beredar dijaga oleh para guru agar murid tidak menyimpang dari dzikir yang wajib.',
          'Adab yang dipegang adalah tidak memublikasikan pengalaman yang dicurigai karamah, dan menyampaikannya hanya kepada mursyid bila perlu ditimbang. Kemuliaan yang sejati menumbuhkan kerendahan hati: makin banyak anugerah, makin rendah diri, dan makin tekun pada wirid yang wajib dijalankan setiap hari. Dengan sikap demikian, jamaah tetap hormat kepada guru tanpa menjadikan cerita luar biasa sebagai ukuran keimanan.',
        ],
      },
    ],
    related: ['istidraj', 'fana', 'mursyid', 'ikhlas'],
  },
  {
    slug: 'khalifah-khusus',
    kind: 'glossary',
    title: 'Khalifah Khusus',
    category: 'Struktur Tarekat',
    summary: 'Khalifah khusus adalah wakil mursyid yang memperoleh ijazah lengkap dan berwenang menalqin dzikir TQN kepada calon murid.',
    facts: [
      { label: 'Kedudukan', value: 'Wakil mursyid yang paling dekat dalam rantai ijazah.' },
      { label: 'Otoritas', value: 'Menalqin dzikir dan membimbing murid dengan izin mursyid.' },
      { label: 'Ijazah', value: 'Diperoleh melalui penempaan dan penilaian langsung mursyid.' },
      { label: 'Adab', value: 'Tetap terikat rabithah dan tidak keluar dari garis talqin mursyidnya.' },
    ],
    body: [
      {
        h: 'Wakil Terdekat Mursyid',
        p: [
          'Khalifah berarti wakil atau pengganti. Dalam struktur TQN, khalifah khusus adalah murid yang paling dekat dengan mursyid dan menerima ijazah secara lengkap, sehingga berwenang menalqin dzikir kepada calon murid. Kewenangan ini bukan hasil pengangkatan administratif, melainkan buah penempaan panjang yang diuji mursyid secara langsung. Ijazah ini pula yang menjaga agar talqin yang diterima murid tetap satu garis dengan mursyid pusat.',
        ],
      },
      {
        h: 'Peran dalam Penyebaran Latihan',
        p: [
          'Kehadiran khalifah khusus memungkinkan dzikir TQN menjangkau banyak daerah tanpa menunggu murid datang ke pusat. Khalifah khusus menalqin, mengawasi majelis, dan menilai kesiapan murid, kemudian melaporkannya kepada mursyid. Meski wewenangnya luas, ia tetap terikat rabithah dan menjaga garis talqin mursyidnya tanpa menambah wirid yang tidak diizinkan.',
          'Bagi murid, adab kepada khalifah khusus sama seperti adab kepada mursyid: hormat, jujur tentang kesanggupan latihan, dan tidak membangga-banggakan khalifahnya. Struktur ini menjaga agar sanad tetap bersambung, latihan tetap teratur, dan murid tidak tersesat pada tafsir-tafsir pribadi di luar bimbingan. Murid baru diajak tidak merasa minder berhadapan dengan khalifah khusus, karena tugasnya justru memudahkan murid.',
        ],
      },
    ],
    related: ['khalifah-tarekat', 'mursyid', 'ijazah', 'talqin-massal'],
  },
  {
    slug: 'khalifah-tarekat',
    kind: 'glossary',
    title: 'Khalifah Tarekat',
    category: 'Struktur Tarekat',
    summary: 'Khalifah tarekat adalah murid yang diijazahi mursyid untuk memimpin majelis wirid dan membina jamaah TQN di daerahnya.',
    facts: [
      { label: 'Kedudukan', value: 'Perpanjangan tangan mursyid di daerah tempat jamaah tinggal.' },
      { label: 'Tugas', value: 'Memimpin majelis, menjaga kitab wirid, dan membina adab murid.' },
      { label: 'Rantai', value: 'Sanadnya bersambung sampai mursyid dan silsilah tarekat.' },
      { label: 'Batas', value: 'Tidak mengubah wirid atau menalqin di luar izin mursyid.' },
    ],
    body: [
      {
        h: 'Pengertian dan Tugas',
        p: [
          'Khalifah tarekat adalah murid yang diberi ijazah oleh mursyid untuk memimpin majelis wirid dan membina jamaah di daerahnya. Ia memastikan wirid dibaca sesuai talqin, majelis berjalan tertib, dan murid baru mendapat pendampingan yang benar. Pembagian istilah antara khalifah tarekat dan khalifah khusus berbeda rinciannya antar jalur, namun keduanya sama-sama memegang amanah dari mursyid.',
        ],
      },
      {
        h: 'Menjaga Kontinuitas Tarekat',
        p: [
          'Peran khalifah tarekat sangat menentukan kesinambungan latihan. Melalui khalifah inilah murid di kampung dapat menerima talqin tanpa harus menempuh perjalanan jauh, sementara laporan pembinaan tetap mengalir kepada mursyid. Ukuran keberhasilannya bukan banyaknya murid, melainkan tertibnya wirid dan kejujuran adab jamaah. Di daerah yang jauh, kehadirannya menjadi penghubung yang menjaga komunikasi murid dengan pusat latihan.',
          'Murid menjaga adab kepada khalifah tarekat: taat dalam kebaikan, terbuka tentang persoalan latihan, dan tidak memecah-belah jamaah. Ketika khalifah dan murid sama-sama jujur menjaga amanah, majelis kecil pun menjadi tempat dzikir yang tenang dan berkah bagi sekitarnya. Khalifah yang beradab menjaga muridnya dari perdebatan sepele dan mengarahkan semuanya kepada dzikir.',
        ],
      },
    ],
    related: ['khalifah-khusus', 'mursyid', 'sanad', 'silsilah'],
  },
  {
    slug: 'khalwat',
    kind: 'glossary',
    title: 'Khalwat',
    titleAr: 'الخلوة',
    category: 'Amalan & Wirid',
    summary: 'Khalwat adalah bersemedi menyendiri berdzikir dalam waktu terbatas; dalam TQN dijalankan dengan izin dan pantauan mursyid.',
    facts: [
      { label: 'Makna', value: 'Menyendiri di tempat tenang untuk memusatkan dzikir kepada Allah.' },
      { label: 'Akar kata', value: 'Dari bahasa Arab yang berarti sendirian atau terpisah dari keramaian.' },
      { label: 'Ketentuan', value: 'Dijalankan hanya dengan izin dan pesanan mursyid.' },
      { label: 'Durasi', value: 'Disesuaikan kesanggupan murid, tidak dibesar-besarkan sendiri.' },
    ],
    body: [
      {
        h: 'Makna Khalwat',
        p: [
          'Khalwat berarti menyendiri. Para ahli ruhani bersemedi di tempat yang sunyi agar dzikir tidak terpotong duniawi dan hati mendapat kesempatan menghadap Allah tanpa hambatan. Dalam tarekat, khalwat tidak dipahami sebagai pelarian dari masyarakat, melainkan sesi latihan intensif yang diatur waktu, tempat, dan durasinya oleh guru. Waktu yang tenang semacam ini menjadi kesempatan memeriksa diri dan menguatkan niat.',
        ],
      },
      {
        h: 'Khalwat dalam TQN',
        p: [
          'Pada TQN, khalwat umumnya dijalankan di ruang sederhana seperti bilik atau mushola, dengan murid tetap dalam dzikir khafi dan pantauan mursyid atau khalifah. Tidak semua murid langsung dikhalwati; pemberian khalwat menyesuaikan kesanggupan, kesehatan, dan tanggung jawab masing-masing. Murid yang masih sibuk kerja dan keluarga dapat menempa dzikir tanpa khalwat sampai waktu yang diizinkan datang. Selama menunggu, murid tetap menjaga wirid harian dan adab kepada guru.',
          'Adab yang dijaga adalah kejujuran. Murid tidak memaksakan bersemedi di luar pesanan mursyid, dan tidak menyanjung-nyanjung pengalaman semedi di hadapan orang lain. Khalwat yang sehat berbuah hati lembut dan makin rajin beribadah, bukan menampakkan diri sebagai orang terpilih.',
        ],
      },
    ],
    related: ['khalwat-dar-anjuman', 'dzikir', 'mursyid', 'khalwatiyyah'],
  },
  {
    slug: 'khalwat-dar-anjuman',
    kind: 'glossary',
    title: 'Khalwat Dar Anjuman',
    titleAr: 'خلوة در انجمن',
    category: 'Amalan & Wirid',
    summary: 'Khalwat dar anjuman kaidah khas Naqsyabandiyah: menyendiri dalam hati meski badan berada di tengah umat.',
    facts: [
      { label: 'Makna', value: 'Menyendiri di tengah keramaian; hati tetap terikat dengan Allah.' },
      { label: 'Asal istilah', value: 'Warisan kosakata para khwajagan Naqsyabandiyah.' },
      { label: 'Kedudukan', value: 'Kaidah khas Naqsyabandiyah dalam menjalani suluk.' },
      { label: 'Buah', value: 'Murid tetap aktif bekerja dan berkeluarga tanpa lupa dzikir.' },
    ],
    body: [
      {
        h: 'Makna Kaidah',
        p: [
          'Khalwat dar anjuman berasal dari bahasa Persia yang berarti kesendirian di tengah majelis. Menurut tradisi tarekat, kaidah ini digariskan para guru besar Naqsyabandiyah sebagai cara menjaga dzikir tanpa meninggalkan tanggung jawab sosial. Murid berada di pasar, di kantor, atau di tengah keluarga, namun hatinya tetap tersambung dengan Allah melalui dzikir yang halus. Kaidah ini menjadikan dzikir tidak terputus walau badan sibuk menuntut pekerjaan.',
        ],
      },
      {
        h: 'Suluk di Tengah Umat',
        p: [
          'Kaidah ini menjadikan Naqsyabandiyah dikenal sebagai tarekat yang ramah pada kehidupan kota. Murid tidak harus keluar dari pekerjaan untuk menempa hati; pekerjaan justru menjadi medan latihan sabar, jujur, dan terus berzikir. Kesendirian dijaga dalam dada, sementara badan tetap berkhidmat bagi keluarga dan masyarakat.',
          'Adab murid menegaskan bahwa khalwat dar anjuman bukan alasan mengabaikan majelis atau menolak khalwat sesungguhnya bila dipesankan mursyid. Keduanya berjalan bersama: kesendirian di tengah umat untuk hari biasa, dan waktu khusus bersemedi bila guru menilai murid sudah siap. Sebelum menempuh kerja besar di tengah dunia, murid tetap melewati dasar yang sama: syariat, wirid, dan pendampingan guru.',
        ],
      },
    ],
    related: ['khalwat', 'dzikir', 'silsilah', 'tarekat'],
  },
  {
    slug: 'khalwatiyyah',
    kind: 'glossary',
    title: 'Khalwatiyyah',
    titleAr: 'الخلوتية',
    category: 'Sejarah & Tokoh',
    summary: 'Khalwatiyyah adalah tarekat besar yang menekankan khalwat dan dzikir; pengaruhnya menjangkau Nusantara lewat jaringan silsilah.',
    facts: [
      { label: 'Nama', value: 'Melekat pada tradisi khalwat, yakni bersemedi menyendiri berdzikir.' },
      { label: 'Perkembangan', value: 'Dikenal luas di dunia Islam, termasuk wilayah Persia, Turki, dan sekitarnya.' },
      { label: 'Ciri', value: 'Menekankan khalwat serta dzikir yang dijaga adabnya.' },
      { label: 'Nusantara', value: 'Mengalir ke kepulauan melalui silsilah guru-guru Melayu dan Jawa.' },
    ],
    body: [
      {
        h: 'Tarekat dengan Tradisi Khalwat',
        p: [
          'Khalwatiyyah adalah salah satu tarekat besar dalam sejarah tasawuf. Namanya melekat pada tradisi khalwat, yakni bersemedi menyendiri untuk berdzikir. Tarekat ini berkembang luas di dunia Islam dan menurunkan banyak cabang serta ulama besar yang menulis tentang adab dzikir dan perjalanan ruhani. Sejarahnya panjang dan menyentuh banyak pusat keilmuan Islam dari masa ke masa.',
        ],
      },
      {
        h: 'Jaringan dengan Tarekat Lain',
        p: [
          'Silsilah tarekat di Nusantara sering bersilang. Sebagian guru TQN juga memegang ijazah tarekat lain, dan garis-garis seperti Khalwatiyyah mengalir ke kepulauan melalui ulama Melayu dan Jawa yang belajar ke luar negeri. Karena itu murid dapat menjumpai nama Khalwatiyyah dalam pohon silsilah atau kitab sanad yang dijaga pesantren. Jaringan guru-guru itu membuat peta silsilah tarekat di Nusantara menjadi kaya dan bersilang.',
          'Adab keilmuan menuntut murid tidak membanding-bandingkan tarekat dengan nada merendahkan. Setiap jalur punya penekanan latihan masing-masing, dan yang menilai kesalehan adalah amal serta adab. Platform 165 menghadirkan Khalwatiyyah sebagai bagian peta sejarah tarekat, bukan ajakan berpindah talqin tanpa izin mursyid. Murid cukup fokus menjaga talqin dan adab yang ia terima di majelisnya.',
        ],
      },
    ],
    related: ['tarekat', 'khalwat', 'silsilah', 'sanad'],
  },
  {
    slug: 'khanaqah',
    kind: 'glossary',
    title: 'Khānqāh',
    titleAr: 'خانقاه',
    category: 'Struktur Tarekat',
    summary: 'Khanaqah adalah tempat tinggal dan berzikir para ahli tarekat; padanannya di Nusantara berupa pondok dan majelis dzikir.',
    facts: [
      { label: 'Makna', value: 'Rumah majelis dzikir tempat para ahli tarekat beribadah dan singgah.' },
      { label: 'Akar kata', value: 'Kosakata Persia yang dipakai luas di dunia Islam.' },
      { label: 'Fungsi', value: 'Tempat wirid, pengajian, pendidikan murid, dan layanan jamaah.' },
      { label: 'Padanan', value: 'Di Nusantara bentuknya pondok pesantren dan rumah khalifah.' },
    ],
    body: [
      {
        h: 'Rumah Para Pencari Allah',
        p: [
          'Khānqāh adalah kosakata Persia untuk rumah majelis dzikir. Di khanaqah para murid tinggal atau singgah, berwirid bersama, belajar adab, dan menerima pembinaan guru. Sejarah tasawuf mengenalkan khanaqah sebagai pusat kehidupan tarekat di banyak wilayah dunia Islam, tempat pengetahuan latihan dijaga dan diwariskan kepada murid berikutnya.',
        ],
      },
      {
        h: 'Wujud di Nusantara',
        p: [
          'Di Nusantara, fungsi khanaqah tampil dalam wujud yang hidup di sini: pondok pesantren tarekat, mushola majelis, langgar, atau rumah khalifah tempat murid berkumpul. Bentuk bangsanya berbeda, tetapi jiwa yang sama tetap terasa, yaitu rumah di mana dzikir dijaga, ilmu dibagikan, dan murid mendapat pendampingan. Murid datang, berdzikir, belajar, dan pulang membawa nasihat dari guru.',
          'Platform 165 memakai istilah khanaqah untuk membantu murid memahami sejarah lembaga tarekat. Ketika membaca kitab lama yang menyebut khanaqah, murid dapat menghubungkannya dengan pondok dan majelis yang ia kenal hari ini, sehingga warisan keilmuan terasa dekat dan bisa dilanjutkan dengan adab yang baik. Sebutan berbeda tidak mengubah hakikat: tempat yang menyambung murid dengan latihan tarekat.',
        ],
      },
    ],
    related: ['tarekat', 'majelis-talim', 'khalifah-tarekat', 'mursyid'],
  },
  {
    slug: 'khatam-quran-massal',
    kind: 'glossary',
    title: "Khatam Qur'an Massal",
    category: 'Kebiasaan & Tradisi',
    summary: "Khatam Qur'an massal adalah khataman bersama: murid membaca Al-Qur'an bergantian hingga utuh dalam satu majelis besar.",
    facts: [
      { label: 'Makna', value: "Menyelesaikan bacaan Al-Qur'an secara bergantian bersama-sama." },
      { label: 'Suasana', value: 'Biasa diadakan pada haul atau peringatan besar tarekat.' },
      { label: 'Nilai', value: 'Kebersamaan jamaah dan penghormatan kepada Al-Qur\'an.' },
      { label: 'Ketentuan', value: 'Pembagian juz disusun panitia sesuai ketentuan yang berlaku.' },
    ],
    body: [
      {
        h: 'Khataman Bersama-sama',
        p: [
          "Khatam Qur'an massal adalah kebiasaan membaca Al-Qur'an secara bergantian oleh banyak orang sampai seluruh isi Qur'an selesai dalam satu majelis. Setiap peserta membaca bagian yang dibagikan kepadanya, sehingga keseluruhan juz tersambung seperti satu suara besar. Suasananya khidmat: duduk tenang, bacaan tertib, dan mata terjaga agar tidak tumpang-tindih. Kegiatan ini juga menumbuhkan kebiasaan menghormati kitab suci sejak usia muda.",
        ],
      },
      {
        h: 'Tradisi di Lingkungan Tarekat',
        p: [
          "Di lingkungan TQN, khatam Qur'an massal kerap diadakan saat haul atau peringatan besar. Menurut tradisi tarekat, pahala bacaan dihadirkan kepada guru-guru terdahulu, para syekh silsilah, keluarga, dan kaum muslimin. Kegiatan ini sekaligus menjadi ajang silaturahmi besar antar jamaah dari berbagai daerah. Panitia biasanya menyiapkan tempat duduk dan pembagian juz beberapa hari sebelum acara.",
          'Adab peserta menjaga niat: membaca untuk Allah, bukan demi nama di daftar. Peserta yang tidak lancar tetap boleh ikut dengan bagian yang ia kuasai, karena nilai utamanya adalah kebersamaan dan penghormatan kepada Al-Qur\'an, bukan kemahiran penuh setiap pembaca. Anak-anak pun boleh ikut dengan bacaan yang sesuai kemampuan mereka.',
        ],
      },
    ],
    related: ['haul', 'manaqib', 'khatm', 'majelis-talim'],
  },
  {
    slug: 'khatm',
    kind: 'glossary',
    title: 'Khatm',
    titleAr: 'ختم',
    category: 'Amalan & Wirid',
    summary: 'Khatm adalah wirid pokok TQN yang dibaca murid setiap hari; rangkaian ayat, zikir, dan shalawat hingga kalimat penutup.',
    facts: [
      { label: 'Makna', value: 'Dari kata khatam, meterai atau penyempurnaan; wirid pokok murid TQN.' },
      { label: 'Isi', value: 'Rangkaian ayat Al-Qur\'an, zikir, dan shalawat dengan kalimat penutup.' },
      { label: 'Waktu', value: 'Dianjurkan pagi dan petang menurut ketentuan kitab wirid.' },
      { label: 'Penerimaan', value: 'Hanya melalui talqin dari khalifah atau mursyid.' },
    ],
    body: [
      {
        h: 'Wirid Pokok Murid',
        p: [
          'Khatm berasal dari kata khatam yang berarti meterai atau penyempurnaan. Dalam TQN, khatm adalah wirid pokok: satu rangkaian utuh berisi ayat Al-Qur\u2019an, zikir, dan shalawat yang ditutup kalimat penutup. Murid yang telah menerima talqin menjaga bacaan ini sebagai napas harian, sehingga latihan tarekat tetap bersambung meski ia berada jauh dari majelis. Isi khatm disusun dalam satu rangkaian yang sama bagi semua murid pada satu jalur.',
        ],
      },
      {
        h: 'Menjaga Lafal dan Kesungguhan',
        p: [
          'Lafal khatm dijaga persis sesuai talqin, karena kesalahan kecil dapat berubah makna dan merusak latihan. Di majelis, khatm jamaah dipimpin imam khataman agar tempo seluruh murid seragam. Murid dianjurkan membaca dengan tenang, tidak tergesa, dan lebih menyukai kehadiran hati daripada kecepatan selesai. Khatm yang dijaga setiap hari menjadi tandanya murid betah di jalan tarekat.',
          'Adab khatm juga menjaga waktu. Bila hari terasa padat, murid tetap mengusahakan wirid walau singkat, kemudian menanyakan keadaannya kepada khalifah bila ada hambatan. Kesungguhan yang kecil tetap stabil dinilai lebih baik daripada rajin besar yang cepat padam.',
        ],
      },
    ],
    related: ['khatm-qadiriyyah', 'kitab-wirid', 'talqin-massal', 'dzikir'],
  },
  {
    slug: 'khatm-al-khwajagan',
    kind: 'glossary',
    title: 'Khatm al-Khwājagān',
    titleAr: 'ختم الخواجكان',
    category: 'Amalan & Wirid',
    summary: 'Khatm al-Khwajagan adalah wird warisan para guru awal Naqsyabandiyah; susunan doa silsilah yang dijaga murid garis khwajagan.',
    facts: [
      { label: 'Makna', value: 'Khatm para khwajagan, yakni para guru besar awal silsilah Naqsyabandiyah.' },
      { label: 'Isi', value: 'Susunan doa dan zikir yang menyerap warisan para master silsilah.' },
      { label: 'Kebiasaan', value: 'Dibaca murid garis Naqsyabandiyah, lazimnya menjelang pagi.' },
      { label: 'Fungsi', value: 'Menghubungkan murid dengan warisan silsilah melalui doa.' },
    ],
    body: [
      {
        h: 'Warisan Para Khwajagan',
        p: [
          'Khwājagān adalah sebutan bagi para guru besar awal silsilah Naqsyabandiyah di wilayah Asia Tengah. Khatm al-Khwājagān adalah susunan doa dan zikir yang menurut tradisi tarekat menyerap warisan para guru tersebut. Murid garis Naqsyabandiyah membacanya untuk menghadirkan keberkahan silsilah, lazimnya pada waktu pagi sebelum hari dimulai. Nama ini juga mengingatkan murid pada rantai guru yang panjang sebelum dirinya lahir.',
        ],
      },
      {
        h: 'Adab Bacaan',
        p: [
          'Kebiasaan membaca khatm al-khwajagan berbeda penekanan antar jalur. Sebagian menjadikannya pelengkap wirid harian, sebagian membacanya pada momen tertentu sesuai pesanan mursyid. Murid menjaga redaksi sesuai talqin yang ia terima dan tidak menggabungkan bacaan dari jalur lain tanpa izin.',
          'Nilai terbesar bacaan ini adalah kesadaran sanad: murid merasa dirinya bagian dari rangkaian panjang guru yang berjuang menjaga dzikir sebelum dirinya lahir. Perasaan itu menumbuhkan hormat, sabar, dan tekun, sekaligus menjauhkan murid dari anggapan bahwa latihan adalah urusan pribadi tanpa warisan. Dengan membaca doa para pendahulu, murid belajar merendah dan meniru ketekunan mereka. Karena itu bacaan ini dijaga seperti wirid pokok, bukan ibadah sesaat.',
        ],
      },
    ],
    related: ['khatm', 'silsilah', 'sanad', 'awrad'],
  },
  {
    slug: 'khatm-qadiriyyah',
    kind: 'glossary',
    title: 'Khatm Qādiriyyah',
    titleAr: 'ختم القادرية',
    category: 'Amalan & Wirid',
    summary: 'Khatm Qadiriyyah adalah wird pokok silsilah Qadiriyah yang menurut tradisi tarekat bersambung kepada Syekh Abdul Qadir al-Jilani.',
    facts: [
      { label: 'Kedudukan', value: 'Wirid utama silsilah Qadiriyah dalam TQN.' },
      { label: 'Sumber', value: 'Menurut tradisi tarekat, bersambung kepada Syekh Abdul Qadir al-Jilani.' },
      { label: 'Isi', value: "Ayat Al-Qur'an, zikir, dan shalawat dalam satu rangkaian utuh." },
      { label: 'Talqin', value: 'Hanya melalui khalifah atau mursyid, tidak dibaca atas diri sendiri.' },
    ],
    body: [
      {
        h: 'Wirid Silsilah Qadiriyah',
        p: [
          'Tarekat Qadiriyah Naqsyabandiyah menggabungkan dua garis besar: Qadiriyah dan Naqsyabandiyah. Khatm Qādiriyyah adalah wirid pokok yang dibawa garis Qadiriyah. Menurut tradisi tarekat, rangkaian ini bersambung kepada Syekh Abdul Qadir al-Jilani, sehingga murid yang membacanya merasa terhubung dengan warisan guru besar Baghdad tersebut. Pada majelis besar, khatm ini dibaca bersama-sama dan dipimpin dengan irama yang tenang.',
        ],
      },
      {
        h: 'Kehidupan Harian Murid',
        p: [
          'Di lingkungan jalur Suryalaya, khatm Qodiriyah dibaca murid setiap hari dan juga dibaca bersama di majelis. Lafal dijaga dari kesalahan, urutan dijaga dari perubahan, dan bacaan disertai kehadiran hati. Murid baru hanya membacanya setelah menerima talqin, sehingga sanad wirid tetap sah dan tertib. Murid lama membantu murid baru menjaga lafal sampai terbiasa.',
          'Adab yang ditegaskan guru adalah kejujuran dan kesabaran. Wirid ini tidak dijadikan bahan pamer kekuatan, tidak dijual, dan tidak diubah demi kepraktisan. Justru di dalam kesederhanaan bacaan yang dijaga itulah murid merasakan mantapnya hati dan mengalirnya keberkahan latihan ke keluarga serta lingkungannya. Dalam perjalanan panjang, khatm Qadiriyyah menjadi pengikat murid dengan silsilah Qadiriyah setiap hari.',
        ],
      },
    ],
    related: ['khatm', 'jalur-surialaya', 'talqin-massal', 'manaqib'],
  },
  {
    slug: 'khauf',
    kind: 'glossary',
    title: 'Khauf',
    titleAr: 'الخوف',
    category: 'Kepercayaan & Maqamat',
    summary: 'Khauf adalah rasa takut kepada Allah yang menahan dari maksiat; berpasangan dengan raja dan mendorong istiqamah murid.',
    facts: [
      { label: 'Makna', value: 'Takut kepada Allah yang menahan langkah dari kemaksiatan.' },
      { label: 'Pasangan', value: 'Berpasangan dengan raja, yakni harapan kepada rahmat Allah.' },
      { label: 'Kedudukan', value: 'Salah satu maqam awal dalam perjalanan ruhani tasawuf.' },
      { label: 'Ukuran sehat', value: 'Mendorong ibadah, tidak melumpuhkan dan tidak menimbulkan putus asa.' },
    ],
    body: [
      {
        h: 'Takut yang Menahan',
        p: [
          'Khauf berarti takut, namun dalam tasawuf ia bukan kecemasan kosong, melainkan takut kepada Allah yang menggerakkan ketaatan. Para ulama mengibaratkan khauf dan raja seperti dua sayap: burung hanya terbang seimbang bila keduanya utuh. Takut tanpa harapan menjerumuskan putus asa, sedangkan harapan tanpa takut membuka pintu kelalaian. Khauf yang tepat membuat orang berhati-hati sebelum berbuat salah.',
        ],
      },
      {
        h: 'Khauf dalam Latihan Murid',
        p: [
          'Bagi murid TQN, khauf terasa ketika ia sadar dzikirnya bisa terlepas bila lalai, dan hatinya bisa jauh bila syariat diabaikan. Rasa ini mendorong murid menjaga wirid harian, memperbanyak istighfar, dan berhati-hati pada hal-hal yang mengotori hati. Khauf yang sehat tampak pada rajinnya murid beramal, bukan pada wajah yang muram. Murid yang sadar diri akan lebih hormat kepada wirid dan adab.',
          'Adab murid menahan khauf agar tidak berlebihan. Jika rasa takut membuat seseorang menganggap dosanya tak terampunkan, ia telah melampaui batas dan justru butuh nasihat. Guru tarekat menyeimbangkan murid dengan dzikir, doa, dan kabar gembira tentang rahmat Allah yang melampaui segala dosa bagi hamba yang kembali.',
        ],
      },
    ],
    related: ['ikhlas', 'istighfar', 'mahabbah', 'ihsan'],
  },
  {
    slug: 'khirqah',
    kind: 'glossary',
    title: 'Khirqah',
    titleAr: 'الخرقة',
    category: 'Struktur Tarekat',
    summary: 'Khirqah adalah jubah warisan tarekat yang menyertai ijazah; menurut tradisi tarekat menjadi tanda penerusan sanad.',
    facts: [
      { label: 'Makna', value: 'Jubah atau kain warisan yang menyertai ijazah tarekat.' },
      { label: 'Fungsi', value: 'Tanda penerusan sanad dari guru kepada murid menurut tradisi tarekat.' },
      { label: 'Penyimpanan', value: 'Dijaga pesantren, khalifah, atau keluarga syekh.' },
      { label: 'Adab', value: 'Dihormati tanpa menjadikannya objek takhayul atau pamer.' },
    ],
    body: [
      {
        h: 'Jubah Warisan Tarekat',
        p: [
          'Khirqah berarti jubah atau kain berlubang yang dipakai para ahli ruhani. Dalam sejarah tasawuf, penyerahan khirqah sering menyertai pemberian ijazah: guru menitipkan kain warisan kepada murid yang dinilai siap meneruskan latihan. Menurut tradisi tarekat, khirqah menjadi lambang bahwa sanad tidak putus, sebagaimana dzikir juga mengalir dari hati ke hati.',
        ],
      },
      {
        h: 'Khirqah di Nusantara',
        p: [
          'Di Nusantara, khirqah dan benda warisan lain dijaga oleh pesantren, khalifah, atau keluarga syekh sebagai pusaka tarekat. Pada momen tertentu seperti haul, benda tersebut dapat ditampilkan sebagai penghormatan kepada guru terdahulu dan pengingat bagi murid akan panjangnya rangkaian guru yang telah berjuang. Tampilnya benda warisan dihadiri penjelasan panitia agar murid tidak salah paham.',
          'Adab murid menegaskan batas: kemuliaan ada pada sanad dan amal, bukan pada kain. Murid tidak mengkramatkan benda, tidak menjadikannya bahan pamer, dan tidak membeli-membeli klaim warisan. Penghormatan yang benar justru diwujudkan dengan tekun menjalankan wirid yang diwariskan bersama kain itu. Ukuran kemuliaan murid tetap tertibnya wirid dan akhlaknya, bukan kedekatan dengan benda warisan.',
        ],
      },
    ],
    related: ['ijazah', 'sanad', 'khalifah-tarekat', 'haul'],
  },
  {
    slug: 'kitab-jawi',
    kind: 'glossary',
    title: 'Kitab Jawi',
    category: 'Kitab & Naskah',
    summary: 'Kitab Jawi adalah karya ulama Nusantara beraksara Arab-Melayu yang menjaga ilmu tasawuf dan tarekat di kepulauan.',
    facts: [
      { label: 'Aksara', value: 'Arab yang disesuaikan untuk menulis bahasa Melayu dan bahasa setempat.' },
      { label: 'Penulis', value: 'Di antaranya ulama besar Nusantara seperti Syekh Yusuf Makassar dan Syekh Daud al-Fatani.' },
      { label: 'Isi', value: 'Tasawuf, fiqh, tauhid, wirid, dan nasihat adab.' },
      { label: 'Kini', value: 'Sebagian naskah didigitalkan dan dikaji ulang para peneliti.' },
    ],
    body: [
      {
        h: 'Pusat Ilmu Beraksara Jawi',
        p: [
          'Kitab jawi adalah sebutan bagi karya ulama Nusantara yang ditulis dengan aksara Arab yang disesuaikan untuk bahasa Melayu dan bahasa setempat. Melalui aksara ini, ilmu agama menyebar jauh ke desa-desa yang belum menguasai bahasa Arab. Sebagian besar membahas fiqh, tauhid, dan tasawuf, termasuk wirid dan adab tarekat.',
        ],
      },
      {
        h: 'Peran dalam Tradisi Tarekat',
        p: [
          'Ulama Nusantara seperti Syekh Yusuf Makassar dan Syekh Daud al-Fatani dikenal sebagai penulis kitab jawi yang produktif, dan karya-karya semacam itu turut menjaga semangat tarekat di kepulauan. Di lingkungan majelis, kitab jawi dibacakan dan diterjemahkan lisan oleh guru, sehingga murid yang tidak lancar membaca tetap mengikuti isinya. Kebiasaan ini membuat ilmu tetap mengalir ke murid yang belum lancar membaca aksara jawi.',
          'Hari ini banyak naskah jawi disimpan perpustakaan dan kolektor, lalu didigitalkan agar tidak hilang. Platform 165 mendukung gerakan itu dengan mengarsipkan bahan bacaan dan menghadirkan kembali warisan ulama Nusantara kepada murid generasi baru dengan cara yang mudah diakses. Dengan begitu, warisan ulama Nusantara tetap hidup di tengah zaman digital.',
        ],
      },
    ],
    related: ['kitab-wirid', 'manuskrip-tarekat', 'silsilah', 'koleksi-digital'],
  },
  {
    slug: 'kitab-tasawuf',
    kind: 'glossary',
    title: 'Kitab Tasawuf',
    category: 'Kitab & Naskah',
    summary: 'Kitab tasawuf adalah pusaka keilmuan perjalanan ruhani; karya klasik seperti Ihya Ulumiddin menjadi rujukan ulama tarekat.',
    facts: [
      { label: 'Cakupan', value: 'Akhlak, maqamat, dzikir, adab guru dan murid, serta nasihat ruhani.' },
      { label: 'Contoh klasik', value: 'Ihya Ulumiddin al-Ghazali, Risalah al-Qusyairiyyah, dan Al-Luma\u2019 as-Sarraj.' },
      { label: 'Kedudukan', value: 'Rujukan ulama tarekat dalam membimbing latihan murid.' },
      { label: 'Adab baca', value: 'Dibaca dengan pendamping agar tidak keliru memahami istilah ruhani.' },
    ],
    body: [
      {
        h: 'Genre Kitab Perjalanan Hati',
        p: [
          'Kitab tasawuf adalah genre yang membahas perjalanan ruhani: membersihkan hati, menghadirkan dzikir, menjaga adab kepada guru, dan mengenal derajat-derajat perjalanan menuju Allah. Karya klasik seperti Ihya Ulumiddin karya Imam al-Ghazali dan Risalah al-Qusyairiyyah menjadi rujukan yang dibaca lintas tarekat dan lintas zaman. Buku-buku ini menyusun jalan tasawuf secara berurutan sehingga guru mudah mengambil pelajaran yang sesuai tahap murid.',
        ],
      },
      {
        h: 'Cara Murid Membaca',
        p: [
          'Dalam lingkungan TQN, kitab tasawuf dibaca dengan adab: dipilih bagian yang sesuai tahap murid, dibacakan guru lalu dijelaskan, dan tidak langsung dipraktikkan tanpa izin. Istilah seperti fana, mahabbah, atau marifah mudah salah paham bila dipelajari sendirian, karena para penulisnya memakai bahasa yang padat untuk pembaca berpengalaman. Murid pemula biasanya dimulai dari bagian adab dan akhlak terlebih dahulu.',
          'Platform 165 menyajikan kitab tasawuf dengan pengantar yang jujur dan menandai sumber setiap kutipan. Murid diajak mengambil nasihat yang aman untuk pemula, sementara pembahasan dalam tetap dirujuk kepada mursyid agar latihan tetap di bawah bimbingan yang bersanad. Cara ini menjaga murid dari salah paham istilah yang dalam.',
        ],
      },
    ],
    related: ['jurnal-tasawuf', 'kitab-jawi', 'ihsan', 'marifah'],
  },
  {
    slug: 'kitab-wirid',
    kind: 'glossary',
    title: 'Kitab Wirid',
    category: 'Kitab & Naskah',
    summary: 'Kitab Wirid adalah buku pegangan murid TQN berisi khatam dan dzikir latifah; lafalnya dijaga sesuai talqin mursyid.',
    facts: [
      { label: 'Isi', value: 'Khatam Qadiriyah Naqsyabandiyah, dzikir latifah, doa, dan tawasul.' },
      { label: 'Kedudukan', value: 'Pegangan harian murid TQN setelah menerima talqin.' },
      { label: 'Perbedaan', value: 'Susunan dapat berbeda antar jalur sesuai warisan masing-masing.' },
      { label: 'Perawatan', value: 'Dijaga kebersihan dan adab, diletakkan pada tempat yang hormat.' },
    ],
    body: [
      {
        h: 'Pegangan Harian Murid',
        p: [
          'Kitab wirid adalah buku pegangan murid tarekat yang memuat rangkaian wirid secara lengkap: khatam, dzikir latifah, doa harian, hingga tawasul. Murid membawanya saat berdzikir di rumah dan di majelis, sehingga bacaan tetap sesuai talqin yang diterima. Bagi murid baru, kitab ini menjadi pengantar pertama tentang bentuk latihan TQN. Murid mengenal isi kitab ini setelah menjalani talqin, bukan sebelumnya.',
        ],
      },
      {
        h: 'Menjaga Talqin',
        p: [
          'Kitab wirid tiap jalur dapat berbeda susunan dan penekanan, karena setiap mursyid mewariskan bentuk yang ia terima dari sanadnya. Karena itu murid tidak menggabungkan kitab wirid dari jalur lain tanpa izin, dan tidak memperbaiki apa yang ia anggap keliru tanpa bertanya kepada khalifah. Pertanyaan kecil yang jujur lebih baik daripada kesalahan yang menahun dalam bacaan.',
          'Adab terhadap kitab wirid juga dijaga: diletakkan di tempat yang hormat, tidak dibawa masuk ke tempat kotor, dan tidak dijadikan hiasan. Guru tarekat mengingatkan bahwa berkah bukan pada sampul buku, melainkan pada bacaan yang lafalnya benar dan hatinya hadir. Begitu kitab dijaga, bacaannya juga mudah diwariskan kepada murid berikutnya.',
        ],
      },
    ],
    related: ['khatm', 'khatm-qadiriyyah', 'lagu-wiridan', 'talqin-massal'],
  },
  {
    slug: 'koleksi-digital',
    kind: 'glossary',
    title: 'Koleksi Digital',
    category: 'Arsip & Digital',
    summary: 'Koleksi Digital adalah fitur 165 untuk mengarsipkan dokumen, kitab, dan foto warisan tarekat agar mudah ditemukan kembali.',
    facts: [
      { label: 'Jenis', value: 'Fitur arsip pada platform 165.' },
      { label: 'Isi', value: 'Dokumen, naskah, kitab, foto, dan bahan bacaan warisan tarekat.' },
      { label: 'Tujuan', value: 'Menjaga warisan agar tidak hilang dan mudah dicari generasi berikutnya.' },
      { label: 'Adab', value: 'Sumber dicantumkan jelas dan hak pemilik dihormati.' },
    ],
    body: [
      {
        h: 'Arsip Warisan Tarekat',
        p: [
          'Koleksi Digital adalah fitur platform 165 untuk mengarsipkan warisan tarekat dalam bentuk digital: dokumen, naskah, kitab, foto, dan bahan bacaan lain. Setiap bahan diberi keterangan seperti judul, jenis, dan sumber, sehingga pembaca dapat menemukannya kembali dengan cepat dan memahami konteksnya. Arsip semacam ini penting karena banyak bahan tarekat hanya tersedia satu-dua salinan di pesantren.',
        ],
      },
      {
        h: 'Prinsip Pengarsipan',
        p: [
          'Prinsip yang dijaga adalah kejujuran dan hormat pada sumber. Bahan yang dipublikasikan disertai asalnya, dan bahan yang belum mendapat izin pemilik tidak diumumkan penuh. Naskah tua yang rapuh lebih dulu dipindai agar aslinya tidak makin rusak akibat sering dibuka. Setiap pembaruan koleksi dicatat agar pembaca tahu asal-usul bahan yang sedang dibaca.',
          'Bagi murid, koleksi digital membantu mengenal warisan tanpa harus berpergian jauh. Namun arsip hanya pengantar: kitab yang dibaca untuk latihan tetap mengikuti talqin mursyid, dan penelusuran sejarah yang mendalam tetap disarankan melalui pengurus pesantren atau khalifah yang bersanad. Murid yang menemukan bahan menarik diajak mencantumkan sumbernya ketika membagikannya kepada orang lain.',
        ],
      },
    ],
    related: ['kutipan-ilmiah', 'manuskrip-tarekat', 'jurnal-tasawuf', 'kitab-jawi'],
  },
  {
    slug: 'koperasi-jamaah',
    kind: 'glossary',
    title: 'Koperasi Jamaah',
    category: 'Struktur Tarekat',
    summary: 'Koperasi jamaah adalah lembaga ekonomi yang tumbuh dari komunitas tarekat; saling menolong menjaga kemandirian jamaah.',
    facts: [
      { label: 'Bentuk', value: 'Lembaga ekonomi milik dan dikelola anggota jamaah.' },
      { label: 'Tujuan', value: 'Kemandirian ekonomi dan saling menolong antar murid.' },
      { label: 'Prinsip', value: 'Syariah, transparansi, dan amanah dalam pengelolaan dana.' },
      { label: 'Catatan', value: 'Bentuk dan aturan tiap komunitas berbeda sesuai kebutuhan setempat.' },
    ],
    body: [
      {
        h: 'Ekonomi dari Lingkungan Majelis',
        p: [
          'Koperasi jamaah adalah lembaga ekonomi yang tumbuh dari komunitas tarekat atau pesantren. Para murid yang berdzikir dalam satu majelis berhimpun pula dalam kegiatan ekonomi: menyimpan, saling memberi pinjaman ringan, atau memasarkan hasil usaha anggota. Tujuannya sederhana dan hangat, yaitu jamaah tidak mudah terjerat utang yang merusak, dan kegiatan dzikir tetap bisa jalan tanpa tekanan ekonomi berat. Sebagian komunitas menata usaha bersama seperti warung pesantren atau bengkel jasa anggota.',
        ],
      },
      {
        h: 'Adab dalam Pengelolaan',
        p: [
          'Pengelolaan koperasi jamaah berpegang pada prinsip syariah dan transparansi: dana dicatat, laporan dibuka kepada anggota, dan keputusan besar lewat musyawarah. Karena yang mengurus manusia biasa, pengurus diingatkan menjaga amanah lebih ketat daripada urusan duniawi biasa. Pengurus juga menjaga kemudahan bagi anggota kecil agar manfaatnya menjangkau semua lapisan jamaah.',
          'Guru tarekat menegaskan bahwa koperasi hanyalah sarana, bukan tujuan. Keberhasilan komunitas tidak diukur dari omzet semata, melainkan dari tetap tenangnya majelis, terjaganya adab murid, dan mengalirnya manfaat kepada keluarga serta tetangga di sekitar pesantren. Manfaat yang paling terasa biasanya berupa rasa aman: jamaah tahu ada yang menolong ketika kesulitan.',
        ],
      },
    ],
    related: ['majelis-syura', 'khalifah-tarekat', 'majelis-talim', 'tarekat'],
  },
  {
    slug: 'kutipan-ilmiah',
    kind: 'glossary',
    title: 'Kutipan Ilmiah',
    category: 'Arsip & Digital',
    summary: 'Kutipan Ilmiah adalah fitur 165 untuk menyajikan potongan kitab dan riwayat disertai sumber jelas agar mudah diverifikasi.',
    facts: [
      { label: 'Jenis', value: 'Fitur platform 165 berupa kutipan sumber dengan rujukan resmi.' },
      { label: 'Isi', value: 'Potongan kitab, riwayat, dan pendapat ulama disertai keterangan asal.' },
      { label: 'Tujuan', value: 'Membiasakan budaya bersumber dan mudah diverifikasi pembaca.' },
      { label: 'Kejujuran', value: 'Kutipan tidak dipotong sedemikian rupa hingga berubah makna.' },
    ],
    body: [
      {
        h: 'Budaya Bersumber',
        p: [
          'Kutipan Ilmiah adalah fitur platform 165 yang menyajikan potongan kitab, riwayat, dan pendapat ulama dalam bentuk pendek yang mudah dibaca, disertai keterangan sumber. Tujuannya menumbuhkan budaya bersumber: setiap kabar tentang agama dapat dilacak kembali ke kitab atau tokoh yang mengatakannya. Fitur ini membantu pembaca membedakan kabar yang kuat sumbernya dari kabar yang beredar tanpa dasar.',
        ],
      },
      {
        h: 'Adab Mengutip',
        p: [
          'Kaidah yang dijaga adalah kejujuran kutipan. Kalimat tidak dipotong sedemikian rupa hingga berubah makna, status riwayat tidak dilebihkan, dan bila sumbernya lemah atau diperdebatkan, keterangan itu ditampilkan. Pembaca lalu diajak kembali kepada kitab asli untuk konteks yang utuh. Status sumber ditulis apa adanya, termasuk bila kitabnya jarang atau sulit diperoleh.',
          'Bagi murid TQN, fitur ini membantu memilah kabar yang beredar luas di majelis dan media sosial. Namun keputusan latihan tetap mengikuti mursyid, karena kutipan yang benar pun butuh penjelasan guru agar tidak dipraktikkan di luar tahapan yang tepat. Dengan budaya ini, majelis menjadi tempat kabar yang bersih, bukan tempat desas-desus.',
        ],
      },
    ],
    related: ['koleksi-digital', 'kitab-tasawuf', 'jurnal-tasawuf', 'manuskrip-tarekat'],
  },
  {
    slug: 'lagu-wiridan',
    kind: 'glossary',
    title: 'Lagu Wiridan',
    category: 'Kebiasaan & Tradisi',
    summary: 'Lagu wiridan adalah irama bacaan dzikir dan shalawat dalam majelis TQN; menghadirkan hati tanpa meninggalkan lafal yang benar.',
    facts: [
      { label: 'Bentuk', value: 'Irama dan nadham bacaan wirid, shalawat, serta tawasul.' },
      { label: 'Kedudukan', value: 'Bagian tradisi majelis TQN di Nusantara.' },
      { label: 'Fungsi', value: 'Membantu kehadiran hati dan kekompakan jamaah.' },
      { label: 'Batas', value: 'Lafal tetap mengikuti talqin; irama tidak mengubah redaksi wirid.' },
    ],
    body: [
      {
        h: 'Irama yang Menghidupkan Majelis',
        p: [
          'Majelis dzikir di Nusantara dikenal dengan bacaan berirama: shalawat, tawasul, dan doa dibacakan mengalir seperti lagu. Lagu wiridan menjadi ciri hangat majelis TQN, membuat murid yang lelah tetap betah berdzikir dan jamaah besar bergerak dalam satu tempo. Irama itu juga membantu anak muda dan murid baru ikut serta tanpa merasa kaku. Banyak jalur punya nada khas yang dikenali jamaahnya sejak lama.',
        ],
      },
      {
        h: 'Menjaga Lafal di Atas Irama',
        p: [
          'Guru tarekat menegaskan urutan prioritas: lafal dulu, baru irama. Bacaan yang merdu namun salah lafal tidak diterima dalam latihan, sedangkan bacaan sederhana yang lafalnya benar tetap sah. Imam khataman memegang tanggung jawab menjaga tempo agar irama tidak membuat murid tergesa atau mengubah redaksi. Karena itu murid belajar irama dari majelis, bukan mengarang sendiri di rumah.',
          'Adab lagu wiridan adalah kesederhanaan. Irama disesuaikan suasana majelis, bukan untuk pencarian hiburan. Ketika bacaan berirama dijaga dengan hati yang hadir, majelis menjadi tenang, dan dzikir terasa mengalir sampai ke rumah murid dengan adab yang sama. Irama yang sederhana dan tenang justru lebih mudah dibawa oleh majelis besar.',
        ],
      },
    ],
    related: ['imam-khataman', 'khatm', 'manaqib', 'dzikir'],
  },
  {
    slug: 'lahan-mu-tabarah',
    kind: 'glossary',
    title: 'Lahan Muṭārabah',
    category: 'Amalan & Wirid',
    summary: 'Lahan Mutarabah adalah istilah di platform 165 untuk ruang latihan zikir; murid menempa kehadiran hati dengan adab dzikir tarekat.',
    facts: [
      { label: 'Status', value: 'Istilah yang dipakai platform 165 untuk ruang latihan zikir.' },
      { label: 'Makna', value: 'Lahan atau lapangan tempat murid menempa dzikir secara terbimbing.' },
      { label: 'Isi', value: 'Urutan dzikir, penjelasan adab, dan pengingat tahapan latihan.' },
      { label: 'Batas', value: 'Bukan pengganti talqin dan bimbingan langsung mursyid.' },
    ],
    body: [
      {
        h: 'Lahan Latihan Zikir',
        p: [
          'Lahan Muṭārabah adalah istilah di platform 165 untuk menyebut ruang latihan zikir. Ia menggambar lapangan: tempat murid menempa langkah demi langkah latihan tarekat, mulai dari memahami adab, menjaga lafal, sampai mengenali perhentian dzikir latifah. Nama muṭārabah diambil dari kosakata tarekat yang hidup di lingkungan murid TQN. Ia membantu murid yang belum bisa rutin ke majelis tetap menjaga ritme dzikirnya.',
        ],
      },
      {
        h: 'Cara Menggunakan',
        p: [
          'Lahan ini disusun sebagai konsep belajar bertahap, bukan ajakan berlatih sendiri. Murid pemula diarahkan kepada adab: hadir tepat waktu, jujur tentang kesanggupan, dan tetap terhubung dengan khalifah yang menalqinnya. Materi latihan selalu mengingatkan bahwa talqin hanya sah dari mursyid atau khalifah yang bersanad. Tahapan disusun pelan-pelan sesuai adab umum latihan tarekat.',
          'Kejujuran menjadi pengaman latihan. Bila murid tergoda menambah wirid di luar pesanan atau mengklaim pengalaman yang belum nyata, ia kembali ke pokok: dzikir yang diwajibkan, syariat yang dijaga, dan musyawarah dengan guru. Lahan yang baik menumbuhkan murid yang tenang, bukan murid yang terburu-buru. Ketika murid punya pertanyaan lebih dalam, jawabannya tetap dicari di majelis dan guru yang bersanad.',
        ],
      },
    ],
    related: ['dzikir', 'lathifah-qalb', 'talqin-massal', 'mursyid'],
  },
  {
    slug: 'lathifah-akhfa',
    kind: 'glossary',
    title: 'Laṭīfah Akhfā',
    titleAr: 'لطيفة الأخفى',
    category: 'Kepercayaan & Maqamat',
    summary: 'Latifah Akhfa adalah kehalusan hati yang paling tersembunyi; salah satu perhentian dzikir latifah dalam latihan TQN.',
    facts: [
      { label: 'Makna', value: 'Akhfa berarti paling tersembunyi di antara kehalusan hati.' },
      { label: 'Kedudukan', value: 'Salah satu perhentian dzikir latifah Naqsyabandiyah.' },
      { label: 'Cara', value: 'Dzikir dalam dada tanpa gerak lahir dan tanpa suara.' },
      { label: 'Catatan', value: 'Urutan dan penamaan perhentian dapat berbeda antar jalur.' },
    ],
    body: [
      {
        h: 'Makna Laṭīfah Akhfā',
        p: [
          'Laṭīfah berarti kehalusan, sebutan bagi lembaran hati yang menjadi tempat dzikir berpindah. Akhfā adalah bentuk paling tersembunyi, menyebut kehalusan yang jauh di dalam, tidak terjangkau pancaindra. Dalam dzikir latifah Naqsyabandiyah, akhfa menjadi salah satu perhentian yang ditempuh murid melalui dzikir dalam dada yang makin halus dan makin dalam. Perhentian ini kerap disebut sebagai kedalaman hati yang tak terlihat oleh pancaindra.',
        ],
      },
      {
        h: 'Latihan dan Adabnya',
        p: [
          'Murid tidak berpindah ke perhentian ini dengan kehendak sendiri. Pergeseran dzikir latifah dilakukan menurut pesanan mursyid dan kitab wirid jalur masing-masing, karena urutan penamaan dapat berbeda antar jalur. Tugas murid hanyalah menjaga dzikir tetap hadir, lahir tetap tenang, dan hati tetap sadar diawasi Allah. Murid menjaga napas dan duduknya tetap tenang selama dzikir berjalan.',
          'Adab yang dijaga adalah tidak mengarang pengalaman. Ketika hati terasa terang atau gelap, murid melanjutkan dzikir seperti biasa dan menyampaikannya kepada guru bila perlu ditimbang. Perhentian yang tinggi bukan medan pamer, melainkan tempat murid semakin sadar kecilnya diri di hadapan Allah. Sikap seperti ini menjaga latihan tetap jalan tanpa tergangbu oleh suka duka.',
        ],
      },
    ],
    related: ['lathifah-khafi', 'lathifah-sirr', 'dzikir', 'mursyid'],
  },
  {
    slug: 'lathifah-ikhfa',
    kind: 'glossary',
    title: 'Laṭīfah Ikhfā',
    titleAr: 'لطيفة الإخفا',
    category: 'Kepercayaan & Maqamat',
    summary: 'Latifah Ikhfa adalah perhentian dzikir yang menyembunyikan zikir sampai tingkat paling halus; dinamai dari kata ikhfa.',
    facts: [
      { label: 'Makna', value: 'Dari kata ikhfa, menyembunyikan; dzikir yang tersembunyi sampai ke dalam hati.' },
      { label: 'Kedudukan', value: 'Bagian rangkaian dzikir latifah dalam latihan TQN.' },
      { label: 'Cara', value: 'Zikir halus dalam dada tanpa bunyi dan tanpa gerak.' },
      { label: 'Catatan', value: 'Penamaan perhentian dapat berbeda antar jalur dan kitab wirid.' },
    ],
    body: [
      {
        h: 'Makna Laṭīfah Ikhfā',
        p: [
          'Ikhfā berarti menyembunyikan. Laṭīfah Ikhfā menyebut perhentian dzikir pada kehalusan hati yang tersembunyi penuh, di mana zikir sudah tidak berbunyi sama sekali dan tidak tampak gerak lahirnya. Murid tetap sadar bahwa hatinya menyebut Allah, sekalipun tidak ada yang dapat dilihat dari luar. Nama ini mengingatkan bahwa latihan tertinggi justru yang tak terlihat siapa pun.',
        ],
      },
      {
        h: 'Latihan yang Tersembunyi',
        p: [
          'Dalam rangkaian dzikir latifah TQN, perhentian seperti ikhfa menuntut kesabaran ekstra, karena tak ada suara dan tak ada gerak yang bisa ditunjukkan. Satu-satunya tanda adalah ketenangan murid, akhlaknya yang membaik, dan wiridnya yang tidak putus. Itulah ukuran yang dinilai guru, bukan cerita tentang perasaan. Karena itu murid tidak perlu menunjukkan apa pun kepada teman sejawat.',
          'Adab murid adalah menjaga kerahasiaan latihan. Zikir yang tersembunyi tidak dibicarakan ke mana-mana, dan pengalaman hati hanya diserahkan kepada mursyid. Dengan cara itu dzikir tetap untuk Allah semata, dan murid terlindung dari riya yang menggugurkan nilai amal. Rahasia yang dijaga membuat hati semakin akrab dengan Allah tanpa perlu sorotan.',
        ],
      },
    ],
    related: ['lathifah-akhfa', 'lathifah-lam-yaza', 'dzikir', 'khalwat-dar-anjuman'],
  },
  {
    slug: 'lathifah-khafi',
    kind: 'glossary',
    title: 'Laṭīfah Khafī',
    titleAr: 'لطيفة الخفى',
    category: 'Kepercayaan & Maqamat',
    summary: 'Latifah Khafi adalah lembaran hati yang tersembunyi; pada sebagian kitab disebut sirr as-sirr dalam dzikir latifah.',
    facts: [
      { label: 'Makna', value: 'Khafi berarti tersembunyi; kehalusan hati yang tidak tampak lahir.' },
      { label: 'Kedudukan', value: 'Salah satu perhentian dzikir latifah Naqsyabandiyah.' },
      { label: 'Perbandingan', value: 'Pada sebagian kitab disebut sirr as-sirr, rahasia di atas rahasia.' },
      { label: 'Adab', value: 'Pergeseran perhentian hanya menurut pesanan mursyid.' },
    ],
    body: [
      {
        h: 'Makna Laṭīfah Khafī',
        p: [
          'Khafī berarti tersembunyi. Laṭīfah Khafī menyebut kehalusan hati yang tidak dapat dilihat dan tidak dapat diukur, tempat dzikir bersemayam dalam dada. Pada sebagian kitab wirid dan riwayat tarekat, perhentian ini disebut dengan nama sirr as-sirr, yakni rahasia di atas rahasia, menandakan betapa dalamnya tempat dzikir ini. Sebutan berbeda antar kitab tidak mengubah arah latihan, yakni dzikir yang makin halus.',
        ],
      },
      {
        h: 'Menempa dalam Dada',
        p: [
          'Murid yang menjalankan dzikir latifah tetap pada kebiasaan yang sama: duduk tenang, napas terjaga, dan dzikir dalam dada tanpa bunyi. Perbedaan perhentian tidak mengubah kerja murid, melainkan mengubah kedalaman dzikir yang Allah tunjukkan. Karena itu murid tidak membandingkan pengalamannya dengan murid lain. Yang berubah hanya tempat dzikir dalam perjalanan hati murid.',
          'Adab yang dipegang adalah ketaatan pada talqin. Bila mursyid menetapkan dzikir pada perhentian tertentu, murid menjaganya tanpa menambah. Bila muncul kebingungan atau keadaan hati yang berat, ia menyampaikannya secara jujur, karena guru yang menilai kapan murid siap melangkah lebih dalam. Dengan ketaatan itu, perjalanan berjalan aman dan tidak melompat-lompat.',
        ],
      },
    ],
    related: ['lathifah-qalb', 'lathifah-akhfa', 'dzikir', 'fana'],
  },
  {
    slug: 'lathifah-lam-yaza',
    kind: 'glossary',
    title: 'Laṭīfah Lā-yazāl',
    titleAr: 'لطيفة لا يزال',
    category: 'Kepercayaan & Maqamat',
    summary: 'Latifah Lam Yazal adalah perhentian dzikir dari kalimat Alladzi la yazal; menghadirkan rasa tak pernah putus dari Allah.',
    facts: [
      { label: 'Nama', value: 'Dari zikir Alladzi la yazal, tentang Allah Yang senantiasa ada.' },
      { label: 'Kedudukan', value: 'Perhentian lanjut dalam rangkaian dzikir latifah.' },
      { label: 'Cara', value: 'Dzikir halus dalam dada tanpa bunyi dan gerak lahir.' },
      { label: 'Adab', value: 'Pindah perhentian hanya dengan izin dan pesanan mursyid.' },
    ],
    body: [
      {
        h: 'Makna Lā-yazāl',
        p: [
          'Lā yazāl berasal dari kalimat zikir Alladzi la yazal, yang menyebut Allah Yang tidak pernah berhenti dan senantiasa ada. Perhentian dzikir ini dinamai dari kalimat tersebut karena murid diajak merasakan bahwa sumber dzikirnya tidak pernah putus: Allah senantiasa hadir mengawasi, dan murid senantiasa berada dalam pandangan-Nya. Kalimat ini termasuk zikir yang dikenal luas dalam tradisi dzikir Nusantara.',
        ],
      },
      {
        h: 'Rasa Tak Terputus',
        p: [
          'Murid pada perhentian ini ditempa agar rasa dekat dengan Allah tidak bergantung pada suasana. Saat majelis ramai ataupun sepi, saat hati terang ataupun berat, dzikir tetap jalan seperti napas. Inilah buah yang diinginkan tarekat: murid yang tidak lelah, tidak bosan, dan tidak mencari alasan untuk berhenti.',
          'Adab tetap sama dengan perhentian lain: tidak menggurui murid yang lebih baru, tidak menuntut pergeseran perhentian dari guru, dan tidak menjadikan pengalaman sebagai bahan pamer. Murid melaporkan keadaannya dengan jujur, lalu kembali menjalankan wirid yang diwajibkan dengan tenang. Pengalaman apa pun kembali kepada guru, dan wirid pokok tetap dijaga.',
        ],
      },
    ],
    related: ['lathifah-ikhfa', 'dzikir', 'fana', 'mursyid'],
  },
  {
    slug: 'lathifah-qalb',
    kind: 'glossary',
    title: 'Laṭīfah Qalb',
    titleAr: 'لطيفة القلب',
    category: 'Kepercayaan & Maqamat',
    summary: 'Latifah Qalb adalah perhentian dzikir pertama pada hati; pintu awal latihan TQN sebelum mendaki ke kehalusan yang lebih dalam.',
    facts: [
      { label: 'Makna', value: 'Qalb berarti hati; perhentian dzikir pertama pada latifah.' },
      { label: 'Kedudukan', value: 'Titik awal dzikir latifah dalam latihan murid TQN.' },
      { label: 'Cara', value: 'Dzikir diarahkan pada hati dengan penuh kesadaran.' },
      { label: 'Buah', value: 'Hati menjadi hidup, tenang, dan sadar diawasi Allah.' },
    ],
    body: [
      {
        h: 'Pintu Awal Latihan',
        p: [
          'Qalb berarti hati. Laṭīfah Qalb adalah perhentian pertama dalam dzikir latifah: murid mengarahkan dzikirnya kepada hati, merasakan lafal dalam dada, dan menjaga hati tetap hadir. Inilah pintu yang dilalui setiap murid TQN tanpa terkecuali, sebab latihan selalu dimulai dari tempat yang paling dekat, yaitu hati sendiri. Hati yang hadir membuat dzikir terasa menyatu dengan napas.',
        ],
      },
      {
        h: 'Menjaga Hati Tetap Hidup',
        p: [
          'Tugas murid pada tahap ini sederhana namun menuntut tekun: dzikir tidak putus, napas terjaga, dan hati tidak berpindah ke pikiran lain. Bila hati lalai, murid mengembalikannya tanpa berkecil hati, sebab kembali adalah bagian dari latihan itu sendiri, bukan kegagalan yang memalukan. Murid yang baru mulai dianjurkan berdzikir dalam jumlah yang teratur setiap hari.',
          'Adab yang ditegaskan guru adalah kesungguhan tanpa tergesa. Murid tidak meminta dipindahkan ke perhentian berikutnya, karena yang menilai kesiapan adalah mursyid. Hati yang rajin dzikir pelan-pelan menjadi lembut, mudah menangis ketaatan, dan malu bermaksiat; inilah tanda awal bahwa latihan sedang berjalan. Sabar pada tahap awal adalah kunci agar murid tidak putus di tengah jalan.',
        ],
      },
    ],
    related: ['dzikir', 'lathifah-sirr', 'ihsan', 'talqin-massal'],
  },
  {
    slug: 'lathifah-sirr',
    kind: 'glossary',
    title: 'Laṭīfah Sirr',
    titleAr: 'لطيفة السر',
    category: 'Kepercayaan & Maqamat',
    summary: 'Latifah Sirr adalah kehalusan hati bernama rahasia; perhentian dzikir setelah qalb dalam rangkaian dzikir latifah TQN.',
    facts: [
      { label: 'Makna', value: 'Sirr berarti rahasia; kehalusan hati yang menyimpan dzikir.' },
      { label: 'Kedudukan', value: 'Umumnya perhentian setelah latifah qalb dalam dzikir latifah.' },
      { label: 'Cara', value: 'Dzikir halus dalam dada tanpa bunyi dan tanpa gerak.' },
      { label: 'Adab', value: 'Menjaga rahasia amal dan tidak membuka pengalaman latihan.' },
    ],
    body: [
      {
        h: 'Makna Laṭīfah Sirr',
        p: [
          'Sirr berarti rahasia. Laṭīfah Sirr menyebut kehalusan hati yang menjadi tempat rahasia antara hamba dan Rabbnya. Para guru tasawuf menjelaskan bahwa pada perhentian ini dzikir sudah jauh dari lahir: tidak berbunyi, tidak tampak, dan hanya Allah yang mengetahui kehadirannya. Umumnya murid diarahkan ke perhentian ini setelah mantap pada latifah qalb. Nama ini juga mengingatkan bahwa dzikir terdalam tidak untuk dipublikasikan.',
        ],
      },
      {
        h: 'Merawat Rahasia Amal',
        p: [
          'Nama sirr sekaligus menjadi pesan adab: amal dan pengalaman latihan adalah rahasia. Murid tidak menceritakan dzikirnya untuk dicari orang, tidak menunjukkan wajah berat untuk dipuji, dan tidak menilai latihan murid lain. Rahasia yang dijaga menjaga nilai dzikir, sebagaimana yang bocor mudah jadi bahan riya. Karena itu murid pada perhentian ini terlihat biasa saja di tengah masyarakat.',
          'Pada praktiknya, murid tetap berdzikir dalam dada dengan tenang dan tekun. Bila keadaan hati berubah, ia menyampaikannya kepada mursyid, satu-satunya tempat yang aman untuk membuka perkara dalam. Di tangan guru, pengalaman murid ditimbang, disekat bila berlebihan, dan diarahkan kembali kepada dzikir yang sederhana.',
        ],
      },
    ],
    related: ['lathifah-qalb', 'lathifah-khafi', 'dzikir', 'ikhlas'],
  },
  {
    slug: 'mahabbah',
    kind: 'glossary',
    title: 'Mahabbah',
    titleAr: 'المحبة',
    category: 'Kepercayaan & Maqamat',
    summary: 'Mahabbah adalah cinta kepada Allah yang menguatkan dzikir; murid mengutamakan Rabbnya di atas segala kenikmatan dunia.',
    facts: [
      { label: 'Makna', value: 'Cinta; hati lebih berat kepada Allah daripada kepada dunia.' },
      { label: 'Kedudukan', value: 'Maqam tinggi dalam perjalanan tasawuf.' },
      { label: 'Tanda', value: 'Senang ketaatan, berat maksiat, dan mudah berdzikir.' },
      { label: 'Penjaga', value: 'Dzikir yang tekun, syukur, dan ketaatan pada syariat.' },
    ],
    body: [
      {
        h: 'Cinta kepada Allah',
        p: [
          'Mahabbah berarti cinta. Dalam bahasa tasawuf, mahabbah adalah maqam ketika hati lebih berat kepada Allah daripada kepada segala kenikmatan dunia. Para ulama menyebutnya puncak derajat yang dicari: bukan karena ilmu yang banyak, melainkan karena hati yang bersih dan dzikir yang lama menemani. Ia hadir perlahan setelah hati terbiasa berdzikir dan meninggalkan yang buruk.',
        ],
      },
      {
        h: 'Menumbuhkan Mahabbah',
        p: [
          'Dalam latihan TQN, mahabbah tidak diburu dengan fantasi, melainkan ditumbuhkan dengan dzikir yang tekun dan syukur yang jujur. Semakin hati basah dengan dzikir, semakin ia menemukan rasa yang lebih nikmat daripada kenikmatan yang lalai. Murid juga ditegur adab: cinta kepada mursyid adalah bagian jalan, tetapi tetap dalam batas syariat dan tidak berlebihan. Murid menilai kemajuan dirinya dari memudarnya kesukaan pada yang dilarang.',
          'Adab yang menutup bahasan ini adalah pengawal syariat. Cinta yang benar tidak pernah membenarkan meninggalkan shalat, melanggar batas halal haram, atau merendahkan guru lain. Justru mahabbah yang sehat membuat murid makin tertib: ibadahnya rapi, akhlaknya lembut, dan hatinya makin tenang dalam dzikir.',
        ],
      },
    ],
    related: ['dzikir', 'marifah', 'ikhlas', 'ihsan'],
  },
  {
    slug: 'majelis-syura',
    kind: 'glossary',
    title: 'Majelis Syura',
    category: 'Struktur Tarekat',
    summary: 'Majelis syura adalah forum musyawarah pengurus tarekat dan pesantren; menjaga keputusan tetap amanah dan terbuka.',
    facts: [
      { label: 'Makna', value: 'Forum musyawarah untuk mengambil keputusan bersama.' },
      { label: 'Anggota', value: 'Pengurus, khalifah, dan tokoh jamaah yang berwenang.' },
      { label: 'Fungsi', value: 'Mengatur majelis, pendidikan, keuangan, dan kegiatan jamaah.' },
      { label: 'Nilai', value: 'Transparansi, ukhuwah, dan keputusan yang dijaga bersama.' },
    ],
    body: [
      {
        h: 'Musyawarah dalam Islam',
        p: [
          'Syura berarti musyawarah. Al-Qur\u2019an memuji kaum mukminin yang urusannya dimusyawahkan, dan Rasulullah sendiri membiasakan musyawarah dalam urusan umat. Majelis syura adalah wujud nilai itu: forum tempat para pengurus duduk bersama, mendengar pendapat, lalu mengambil keputusan untuk kebaikan bersama. Bagi komunitas tarekat, musyawarah juga benteng dari kesalahan keputusan satu orang.',
        ],
      },
      {
        h: 'Syura dalam Komunitas Tarekat',
        p: [
          'Di lingkungan tarekat dan pesantren, majelis syura menangani kegiatan besar: jadwal haul, pembinaan majelis cabang, pendidikan murid, hingga urusan keuangan lembaga. Keputusan yang keluar dari syura mengikat dan dihormati seluruh jamaah, sehingga pekerjaan tidak bertumpu pada keinginan pribadi satu orang. Agenda dibicarakan terbuka, lalu keputusan ditulis agar bisa dipertanggungjawabkan.',
          'Adab anggota syura adalah kejujuran dan kerendahan hati: berbicara untuk kebaikan, tidak mengejar kedudukan, dan menerima hasil musyawarah tanpa membangkang. Ketika syura sehat, komunitas tenang; ketika syura diabaikan, mudah muncul gesekan yang merusak suasana dzikir yang sudah lama dijaga. Kepemimpinan yang baik menjadikan syura rutin, bukan hanya ketika ada masalah besar. Bagi jamaah, hasil musyawarah membantu mereka tahu arah kegiatan majelis dengan jelas.',
        ],
      },
    ],
    related: ['khalifah-tarekat', 'koperasi-jamaah', 'majelis-talim', 'mursyid'],
  },
  {
    slug: 'majelis-talim',
    kind: 'glossary',
    title: "Majelis Ta'lim",
    category: 'Struktur Tarekat',
    summary: "Majelis Ta'lim adalah pengajian rutin untuk menimba ilmu agama dan adab tarekat; pintu awal murid mengenal dzikir dan mursyidnya.",
    facts: [
      { label: 'Kegiatan', value: 'Pengajian kitab, ceramah agama, dan wirid bersama.' },
      { label: 'Pengampu', value: 'Mursyid, khalifah, atau ustadz yang diamanahi pesantren.' },
      { label: 'Kedudukan', value: 'Pintu awal bagi calon murid sebelum menerima talqin.' },
      { label: 'Adab', value: 'Datang tepat waktu, mendengarkan baik, dan menjaga ketenangan.' },
    ],
    body: [
      {
        h: 'Rumah Belajar Jamaah',
        p: [
          "Majelis Ta'lim adalah majelis pengajian: jamaah berkumpul untuk mendengarkan ilmu agama, dari fiqh ibadah, akhlak, hingga adab tarekat. Majelis ini bisa berlangsung di mushola, rumah khalifah, atau pesantren, dengan pengampu yang diamanahi. Bagi masyarakat sekitar, majelis ta\u2019lim menjadi jendela pertama mengenal tarekat yang sebenarnya, yakni jalan ilmu, dzikir, dan akhlak. Sebagian majelis diselingi wirid ringan agar suasana tetap hidup.",
        ],
      },
      {
        h: 'Pintu Menuju Talqin',
        p: [
          'Dalam alur pembinaan TQN, majelis talim menyambung dengan majelis dzikir. Calon murid yang hadir rutin belajar adab, memahami urutan latihan, dan mengenal mursyid atau khalifah pembina sebelum menerima talqin. Kebiasaan ini menjaga agar seseorang tidak berdzikir tanpa dasar dan tidak beranggapan tarekat bisa diambil sendiri.',
          'Adab murid pada majelis ta\u2019lim menuntut kesederhanaan: hadir tepat waktu, bertanya dengan hormat, dan tidak memotong penjelasan guru. Ilmu yang diterima di sini menjadi bekal latihan; karena itu para guru menasehati murid mencatat, menyimpan, dan mengamalkan secara bertahap sesuai pesanan pembina. Murid yang rajin ke majelis pengajian biasanya lebih mudah menyesuaikan diri di majelis dzikir.',
        ],
      },
    ],
    related: ['talqin-massal', 'mursyid', 'khalifah-tarekat', 'dzikir'],
  },
  {
    slug: 'makkah-rimayah',
    kind: 'glossary',
    title: 'Makkah Rimayah',
    category: 'Kebiasaan & Tradisi',
    summary: 'Makkah Rimayah merujuk ritual lempar jumrah di Mina dekat Makkah saat haji; jamaah tarekat tetap menjaga wirid di tengah keramaian.',
    facts: [
      { label: 'Makna', value: 'Rimayah berarti melempar; ritual lontar kerikil ke jumrah.' },
      { label: 'Tempat', value: 'Mina, wilayah dekat Makkah yang dilalui jamaah haji.' },
      { label: 'Waktu', value: 'Hari nahr dan hari-hari tasyriq pada bulan Dzulhijjah.' },
      { label: 'Jumlah', value: 'Tujuh kerikil untuk setiap jumrah sesuai ketentuan haji.' },
    ],
    body: [
      {
        h: 'Ritual Lontar Jumrah',
        p: [
          'Rimayah berarti melempar, sebutan bagi ritual lontar kerikil ke tiga jumrah di Mina, wilayah dekat Makkah, saat pelaksanaan haji. Setiap jumrah dilontari tujuh kerikil menurut ketentuan haji. Ritual ini mengenang peristiwa penghormatan Nabi Ibrahim terhadap perintah Allah, dan menjadi bagian yang menandai suasana Dzulhijjah bagi seluruh jamaah dari seluruh dunia.',
        ],
      },
      {
        h: 'Jamaah Tarekat dalam Ibadah Haji',
        p: [
          'Bagi jamaah TQN yang menunaikan haji, suasana Mina yang ramai justru menjadi medan latihan: badan berjalan di tengah kerumunan, sementara hati berusaha tetap dalam dzikir. Kaidah khalwat dar anjuman membantu murid menjaga kesabaran di antara antrean panjang, panas terik, dan lelah badan yang wajar terjadi. Murid yang terbiasa berdzikir biasanya lebih mudah menahan diri di tengah kerumunan.',
          'Adab yang dijaga adalah ketertiban dan keselamatan: jamaah mengikuti petunjuk pengelola haji, tidak melempar berlebihan, dan menolong jamaah yang lemah. Setelah ritual selesai, wirid harian tetap dijaga, karena bagi murid, haji dan tarekat bukan dua hal terpisah, melainkan satu perjalanan menghadap Allah. Sesudah rimayah, jamaah melanjutkan rangkaian haji dengan tenang dan tetap menjaga wirid.',
        ],
      },
    ],
    related: ['khalwat-dar-anjuman', 'dzikir', 'haul', 'istighfar'],
  },
  {
    slug: 'manaqib',
    kind: 'glossary',
    title: 'Manāqib',
    titleAr: 'المناقب',
    category: 'Kitab & Naskah',
    summary: 'Manaqib adalah kitab keutamaan Syekh Abdul Qadir al-Jilani; baca manaqib menjadi tradisi rutin jamaah silsilah Qadiriyah.',
    facts: [
      { label: 'Makna', value: 'Keutamaan dan kebaikan seseorang; genre kitab kisah tokoh agama.' },
      { label: 'Objek terkenal', value: 'Manaqib Syekh Abdul Qadir al-Jilani, pendiri garis Qadiriyah.' },
      { label: 'Tradisi', value: 'Dibaca bersama di majelis TQN, diselingi shalawat dan doa.' },
      { label: 'Adab', value: 'Dibaca untuk meneladani sifat guru, bukan pujian berlebihan.' },
    ],
    body: [
      {
        h: 'Kitab Keutamaan Guru Besar',
        p: [
          'Manāqib berarti keutamaan. Sebagai genre, manaqib adalah kitab yang mengisahkan keutamaan, kehidupan, dan nasihat seorang tokoh agama. Yang paling terkenal di lingkungan tarekat adalah manaqib Syekh Abdul Qadir al-Jilani, guru besar Baghdad yang menjadi pangkal silsilah Qadiriyah. Kitabnya memuat kisah hidupnya dan nasihat-nasihat yang menyentuh hati murid. Manaqib juga menjadi pengantar murid baru mengenal Syekh Abdul Qadir al-Jilani.',
        ],
      },
      {
        h: 'Baca Manaqib di Majelis TQN',
        p: [
          'Menurut tradisi tarekat, jamaah TQN Qadiriyah membaca manaqib secara rutin, biasanya setiap pekan di majelis atau pada momen tertentu seperti haul. Bacaan diselingi shalawat dan doa, dan hadirin diperbolehkan menghadirkan pahalanya kepada guru-guru terdahulu, keluarga, dan kaum muslimin. Kebiasaan ini dikenal luas di majelis-majelis TQN di berbagai daerah.',
          'Adab murid menyaring isi kisah: mana yang jelas nasihatnya dan mana yang perlu kehati-hatian. Guru mengarahkan murid mengambil inti dari manaqib, yaitu meneladani kerendahan hati, ketaatan, dan pengabdian Syekh Abdul Qadir al-Jilani, lalu mewujudkannya dalam dzikir harian dan akhlak kepada sesama. Murid juga diajak membawa nasihat manaqib ke dalam kehidupan keluarga.',
        ],
      },
    ],
    related: ['khatm-qadiriyyah', 'haul', 'kitab-jawi', 'lagu-wiridan'],
  },
  {
    slug: 'mandu-tarekat',
    kind: 'glossary',
    title: 'Mandu Tarekat',
    category: 'Struktur Tarekat',
    summary: 'Mandu tarekat adalah sebutan untuk perwakilan atau utusan tarekat yang diberi mandat melayani majelis; penamaan berbeda antar jalur.',
    facts: [
      { label: 'Makna', value: 'Menyerap kata mandub, yakni utusan atau perwakilan.' },
      { label: 'Tugas', value: 'Melayani majelis sesuai mandat khalifah atau mursyid.' },
      { label: 'Kedudukan', value: 'Di bawah khalifah, bukan pengganti mursyid dan tidak menalqin.' },
      { label: 'Catatan', value: 'Pemakaian istilah berbeda antar komunitas dan jalur.' },
    ],
    body: [
      {
        h: 'Utusan yang Bermandat',
        p: [
          'Kosakata tarekat mengenal istilah mandub, yakni utusan atau perwakilan. Mandu tarekat adalah sebutan untuk murid yang diberi mandat melayani majelis: membantu persiapan wirid, menyampaikan kabar murid kepada khalifah, atau menjaga tertib kegiatan sehari-hari. Mandat itu pemberian khalifah atau mursyid, dan penggunaan istilahnya berbeda-beda di antara jalur. Murid yang dipercaya semacam ini diajak menjaga kerendahan hati karena tugasnya pelayanan.',
        ],
      },
      {
        h: 'Batas Amal',
        p: [
          'Yang membedakan mandu dari khalifah adalah batas kewenangan. Mandu melayani, tetapi tidak menalqin dzikir, tidak mengubah wirid, dan tidak mengayomi murid di luar arahan khalifah. Amal ditimbang dengan adab: melayani tanpa mencari nama, ditugaskan tanpa memilih-milih, dan berlapang dada bila mandat ditarik kembali.',
          'Platform 165 menuliskan istilah ini dengan hati-hati karena tidak seragam di seluruh majelis. Murid yang menjumpai sebutan mandu di majelisnya disarankan bertanya langsung kepada khalifah atau mursyid tentang maksud dan tugasnya di jalur masing-masing, sehingga tidak terjadi kekeliruan dalam memahami struktur tarekat. Penjelasan langsung dari guru selalu lebih aman daripada tafsir dari luar.',
        ],
      },
    ],
    related: ['khalifah-tarekat', 'khalifah-khusus', 'majelis-syura', 'mursyid'],
  },
  {
    slug: 'manuskrip-tarekat',
    kind: 'glossary',
    title: 'Manuskrip Tarekat',
    category: 'Kitab & Naskah',
    summary: 'Manuskrip tarekat adalah naskah tulis tangan berisi wirid, suluk, dan silsilah; warisan yang dirawat dan kini mulai didigitalkan.',
    facts: [
      { label: 'Bentuk', value: 'Naskah tulis tangan pada kertas lama atau dluwang.' },
      { label: 'Isi', value: 'Kitab wirid, syair suluk, doa, dan pohon silsilah tarekat.' },
      { label: 'Pemilik', value: 'Pesantren, keluarga syekh, khalifah, dan perpustakaan.' },
      { label: 'Tantangan', value: 'Perawatan bahan tua dan digitalisasi yang bertahap.' },
    ],
    body: [
      {
        h: 'Warisan Tertulis Tarekat',
        p: [
          'Manuskrip tarekat adalah naskah tulis tangan yang menyimpan ilmu tarekat zaman lampau: kitab wirid, syair suluk, doa-doa talqin, hingga pohon silsilah yang menghubungkan guru dan murid. Nusantara menyimpan banyak naskah semacam ini di pesantren, rumah keluarga syekh, dan perpustakaan. Bahan yang dipakai biasanya kertas lama atau dluwang, dengan tulisan tangan yang kini semakin jarang dilatih. Sebagian naskah juga memuat catatan kecil perjalanan guru-guru tarekat.',
        ],
      },
      {
        h: 'Merawat dan Mengarsipkan',
        p: [
          'Manuskrip tarekat punya dua nilai sekaligus: nilai ilmu dan nilai bukti sanad. Karena itu perawatannya menuntut kehati-hatian: disimpan di tempat yang tidak lembap, tidak diperbaiki sembarangan, dan tidak dijual begitu saja ke tangan yang tidak jelas. Digitalisasi menjadi jalan agar isinya tetap terbaca tanpa merusak naskah aslinya.',
          'Platform 165 mengarsipkan bahan yang telah mendapat izin pemiliknya melalui fitur Koleksi Digital. Murid diajak menghormati manuskrip sebagai warisan guru-guru terdahulu, sekaligus mengambil pelajarannya: sanad dijaga, wirid dilanjutkan, dan kejujuran ilmiah dipegang dalam setiap penulisan ulang. Murid yang hendak mengutip isi manuskrip diajak beritahu pemiliknya dan mencantumkan asalnya.',
        ],
      },
    ],
    related: ['silsilah', 'kitab-jawi', 'koleksi-digital', 'sanad'],
  },
  {
    slug: 'maqam-mursyid',
    kind: 'glossary',
    title: 'Maqām Mursyid',
    titleAr: 'مقام المرشد',
    category: 'Kepercayaan & Maqamat',
    summary: 'Maqam mursyid adalah kedudukan dan derajat pemandu tarekat; murid menghormati tanpa menyekutukan dan tanpa melampaui syariat.',
    facts: [
      { label: 'Makna', value: 'Kedudukan dan derajat ruhani pemandu tarekat.' },
      { label: 'Sumber', value: 'Ijazah yang bersambung dan amal yang teruji, bukan pengangkatan seremonial.' },
      { label: 'Batas', value: 'Mursyid tetap hamba Allah, bukan objek ibadah.' },
      { label: 'Adab murid', value: 'Hormat dan taat dalam kebaikan, tetap cek dengan syariat.' },
    ],
    body: [
      {
        h: 'Kedudukan Pemandu',
        p: [
          'Maqām berarti kedudukan atau derajat. Maqām mursyid membahas sejauh mana kedudukan seorang pemandu tarekat dalam perjalanan murid. Menurut tradisi tarekat, kedudukan itu datang dari ijazah yang bersambung dan amal yang teruji, bukan dari cerita besar yang beredar. Murid menilai guru dari tertibnya wirid, kejujurannya, dan jauhnya ia dari pencarian nama.',
        ],
      },
      {
        h: 'Hormat tanpa Melampaui Batas',
        p: [
          'Adab kepada mursyid dijaga dengan penuh: murid menjaga rabithah, meminta nasihat, dan tidak membicarakan guru di belakang. Namun hormat itu punya batas yang tegas: mursyid tetap hamba Allah yang makan dan tidur seperti manusia lain, tidak dimintai pertolongan sebagaimana Allah diminta, dan tidak dianggap bebas dari tuntutan syariat. Batas ini melindungi murid sekaligus melindungi guru dari kesalahan paham jamaah.',
          'Kejujuran murid menjaga keseimbangan ini. Bila ada guru yang bersikap bertentangan dengan syariat, murid tidak membungkam masalah dengan alasan adab, melainkan mengambil jalan yang benar menurut agama. Maqam yang sejati justru terlihat pada kesederhanaan guru dan mengalirnya kebaikan kepada murid dan masyarakat. Dengan jalan itu, adab dan kejujuran berjalan bersama dalam kehidupan murid.',
        ],
      },
    ],
    related: ['mursyid', 'rabithah', 'ijazah', 'ihsan'],
  },
  {
    slug: 'maqam-syekh',
    kind: 'glossary',
    title: 'Maqam Syekh',
    category: 'Kebiasaan & Tradisi',
    summary: 'Maqam syekh adalah makam atau mausoleum syekh tarekat yang menjadi tempat ziarah murid untuk mendoakan dan meneladani guru.',
    facts: [
      { label: 'Makna', value: 'Makam atau mausoleum syekh tarekat sebagai tempat ziarah.' },
      { label: 'Kegiatan', value: 'Ziarah, tawasul, membaca doa, dan pengajian di sekitarnya.' },
      { label: 'Kebiasaan', value: 'Padat kunjungan saat haul dan hari-hari besar tarekat.' },
      { label: 'Batas adab', value: 'Yang diminta pertolongan hanyalah Allah; makam hanyalah media doa.' },
    ],
    body: [
      {
        h: 'Tempat Ziarah Murid',
        p: [
          'Maqam syekh adalah sebutan untuk makam atau mausoleum syekh tarekat. Di Nusantara, maqam para syekh menjadi tempat ziarah: murid datang, membaca tawasul dan doa, lalu menghadirkan pahalanya kepada guru terdahulu. Suasana ziarah biasanya tenang dan tertib, dan paling padat saat haul atau hari-hari besar tarekat. Sebagian maqam juga menghadirkan pengajian kecil untuk pengunjung yang bertanya.',
        ],
      },
      {
        h: 'Menjaga Batas Tauhid',
        p: [
          'Guru-guru tarekat menegaskan batas ziarah: yang dituju adalah Allah, dan makam hanyalah pengingat serta media doa. Murid tidak meminta hajat kepada makam, tidak beranggapan syekh mengatur rezeki dan nasib, dan tidak menjadikan ziarah pengganti ibadah yang wajib. Nilai ziarah ada pada kembali tekunnya murid berdzikir dan memperbaiki akhlak.',
          'Adab berkunjung juga dijaga secara praktis: berpakaian sopan, menjaga kebersihan area makam, dan menghormati pengurus tempat. Dengan pemahaman yang benar, ziarah menjadi momen murid merenungkan panjangnya rangkaian guru yang telah menjaga dzikir sebelum dirinya, lalu melanjutkan amanah itu dalam kehidupan hariannya. Murid yang datang jauh diajak berencana baik agar ziarah tidak tergesa-gesa.',
        ],
      },
    ],
    related: ['haul', 'manaqib', 'khalifah-tarekat', 'silsilah'],
  },
  {
    slug: 'marifah',
    kind: 'glossary',
    title: "Ma'rifah",
    titleAr: 'المعرفة',
    category: 'Kepercayaan & Maqamat',
    summary: "Ma'rifah adalah mengenal Allah melalui hati yang bersih; buah dzikir yang tekun dalam perjalanan panjang murid tarekat.",
    facts: [
      { label: 'Makna', value: "Mengenal; bukan sekadar tahu, melainkan mengenal dengan hati." },
      { label: 'Akar kata', value: 'Dari bahasa Arab yang berarti mengenal dan mengerti.' },
      { label: 'Kedudukan', value: 'Maqam tinggi setelah ilmu dan amal yang lama menemani.' },
      { label: 'Ciri', value: 'Makin rendah hati dan makin tekun menjaga syariat.' },
    ],
    body: [
      {
        h: 'Mengenal dengan Hati',
        p: [
          "Ma\u2019rifah berarti mengenal. Dalam tasawuf, ma\u2019rifah berbeda dari pengetahuan yang dibaca: ia adalah mengenal Allah melalui hati yang bersih dan dzikir yang lama. Murid tidak mengejar ma\u2019rifah dengan khayalan, melainkan dengan menjaga ibadah, wirid, dan adab, karena mengenal Allah adalah anugerah yang Allah berikan kepada hamba yang ia kehendaki. Karena itu murid diajak sabar, sebab mengenal Allah tidak selesai dalam sehari.",
        ],
      },
      {
        h: 'Buah dari Jalan Panjang',
        p: [
          'Para guru tasawuf menegaskan jalan menuju ma\u2019rifah dimulai dari yang terkecil: menjaga shalat, membersihkan niat, dan tekun berdzikir di bawah bimbingan guru. Semakin jalan ditempuh, semakin orangnya mengenal kebesaran Allah sekaligus mengenal kecilnya diri. Karena itu ciri orang yang mendekat adalah makin rendah hati, bukan makin besar kepala. Jalan yang lurus membuat hati semakin tenang dan semakin rajin dzikir.',
          'Adab murid menjaga diri dari klaim. Mengaku berma\u2019rifah justru tanda jauh, sebab yang benar mengenal lebih takut, lebih senyap, dan lebih tekun pada latihan. Murid TQN meninggalkan perkara ini kepada Allah dan mursyidnya, lalu kembali menjaga wirid hariannya dengan hati yang tenang.',
        ],
      },
    ],
    related: ['fana', 'mahabbah', 'ikhlas', 'ihsan'],
  },
  {
    slug: 'ijazah',
    kind: 'glossary',
    title: 'Ijazah',
    titleAr: 'الإِجَازَة',
    category: 'Struktur Tarekat',
    summary: 'Ijazah adalah izin bersanad yang diberikan guru tarekat kepada muridnya: dasar sahnya talqin, pengangkatan khalifah, dan penerusan silsilah.',
    facts: [
      { label: 'Istilah Arab', value: 'الإِجَازَة; makna memberi izin dan kekuasaan' },
      { label: 'Isi lazim', value: 'Silsilah guru, wirid yang diizinkan, dan batas kewenangan' },
      { label: 'Kedudukan', value: 'Dasar sahnya talqin dan penerusan rantai sanad tarekat' },
      { label: 'Pengujian', value: 'Ketepatan sanad dan kesalehan amal yang diuji lingkungannya' },
    ],
    body: [
      { h: 'Izin yang Bersambung', p: [
        'Ijazah adalah dokumen atau pernyataan izin yang diberikan guru tarekat kepada muridnya. Ia bukan sertifikat kursus; ia penerusan rantai: guru menyatakan bahwa wirid tertentu boleh ditalqinkan kepada orang lain, dan silsilah yang dituliskan menunjukkan dari siapa izin itu mengalir sampai kepada sumber tarekat. Tanpa ijazah yang bersambung, seseorang boleh berdzikir untuk dirinya, namun tidak berwenang menalqinkan kepada orang lain.',
        'Sebagian ijazah bersifat umum, seperti izin mengamalkan wirid tertentu; sebagian lain bersifat khusus, seperti ijazah talqin dan ijazah pengangkatan khalifah. Matan ijazah lazimnya memuat nama-nama silsilah, wirid yang diizinkan, dan batas kewenangan yang diberikan guru, sehingga penerima tahu persis apa yang boleh dan tidak boleh ia lakukan.',
      ]},
      { h: 'Kejujuran Menghadapi Ijazah', p: [
        'Tradisi tarekat menguji ijazah dengan dua jalur: ketepatan sanad dan kesalehan pemegangnya. Nama dalam silsilah diuji tersambung atau tidak, dan pemegang ijazah diuji perilaku amalnya terjaga atau tidak. Platform 165 menghadirkan halaman-halaman ijazah dengan sikap yang sama: klaim disajikan sebagaimana sumbernya menyebut, disertai provenance dan status kolasi, dan perbedaan sumber ditampilkan berdampingan tanpa dipaksakan.',
        'Bagi murid, pesan praktisnya sederhana: ambil talqin dari guru yang ijazahnya jelas dan perilakunya terjaga, lalu pegang talqin itu sampai akhir. Menumpuk ijazah untuk pamer tidak dianjurkan; ijazah adalah amanah yang dijaga, bukan koleksi yang dipamerkan.',
      ]},
    ],
    related: ['sanad', 'silsilah', 'khalifah-tarekat', 'matan-ijazah'],
  },
  {
    slug: 'baiat',
    kind: 'glossary',
    title: 'Baiat',
    titleAr: 'الْبَيْعَة',
    category: 'Struktur Tarekat',
    summary: 'Baiat adalah janji kesetiaan murid kepada mursyid dalam talqin tarekat: masuk jalan dzikir dengan ikatan yang jelas dan adab yang dijaga.',
    facts: [
      { label: 'Istilah Arab', value: 'الْبَيْعَة; makna menjual, karena murid menjual dirinya kepada Allah' },
      { label: 'Contoh Qur\'ani', value: 'Baiat para sahabat di bawah pohon (Fathu Makkah, Al-Fath 18)' },
      { label: 'Isi janji', value: 'Tekun wirid, menjaga syariat, dan menaati tuntunan dalam kebaikan' },
      { label: 'Pelaksanaan', value: 'Melalui talqin mursyid atau khalifah yang berwenang' },
    ],
    body: [
      { h: 'Janji yang Menjajarkan Langkah', p: [
        'Baiat adalah janji yang diucapkan murid ketika masuk tarekat: ia berikrar menjaga wirid, syariat, dan tuntunan guru dalam kebaikan. Akar kata baiat adalah jual-beli, karena dalam ikrar itu murid mengibaratkan diri menjual dirinya kepada Allah, sebagaimana baiat para sahabat di bawah pohon yang diperingati Al-Qur\'an. Dari sinilah baiat menjadi pintu resmi masuk jalan tarekat.',
        'Baiat TQN dilakukan melalui talqin mursyid atau khalifah yang berwenang: murid duduk, mendengarkan nasihat syariat, lalu mengucapkan janji dan menerima wirid pertamanya. Baiat bukan pertunjukan karomah dan bukan jalan pintas taubat; ia komitmen kerja yang panjang, diawali istighfar dan dijaga dengan amalan harian.',
      ]},
      { h: 'Batas dan Adabnya', p: [
        'Baiat tidak menjadikan murid bebas dari tanggung jawab syariat; justru ia menambah beban amanah. Janji yang diucapkan diuji dengan kelakuan: shalat tetap dijaga, wirid tetap dikerjakan, dan nasihat guru diterima dalam kebaikan. Murid yang merasa tidak sanggup menaati dianjurkan berhati jujur sebelum mengucapkan, sebab janji yang ringan diucapkan berat ditagih.',
        'Adab baiat juga menjaga batas mursyid: taat dalam kebaikan, bukan dalam maksiat, dan tidak menjadikan guru objek sembah. Dalam platform 165, halaman-halaman talqin dan ijazah diberi label metodologis; baiat disajikan sebagai tradisi yang dijaga sanad, bukan klaim keistimewaan.',
      ]},
    ],
    related: ['talqin-massal', 'ijazah', 'mursyid', 'faq-apa-itu-baiat'],
  },
// APPEND-ABOVE
]
