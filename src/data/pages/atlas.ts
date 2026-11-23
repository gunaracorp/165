import type { PageEntry } from './types'

// 165 — Atlas tempat & lokasi (60 halaman)
// Konten bahasa Indonesia, jujur, tanpa fabrikasi fakta.
export const ENTRIES: PageEntry[] = [
  {
    slug: 'aleppo',
    kind: 'atlas',
    title: 'Aleppo',
    category: 'Timur Tengah',
    summary: 'Aleppo, kota besar di utara Suriah; kota ulama Syam yang sejak era Seljuk dan Ayyubiyah menjadi rumah khanaqah dan persinggahan jalur tarekat.',
    facts: [
      { label: 'Wilayah', value: 'Utara Suriah, kawasan Syam' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kota ulama Syam; rumah khanaqah era Seljuk-Ayyubiyah dan persinggahan jalur ke Anatolia' },
      { label: 'Jalur terhubung', value: 'Damaskus, Hebron, Anatolia (Bursa), Balkan' },
      { label: 'Kini', value: 'Kota bersejarah yang memulihkan diri setelah kerusakan berat masa perang Suriah' },
    ],
    body: [
      {
        h: 'Kota Ulama di Utara Syam',
        p: [
          'Aleppo adalah salah satu kota tertua yang terus dihuni di dunia dan sejak masa kuno menjadi persimpangan jalur dagang antara Mediterania, Mesopotamia, dan Asia Tengah. Dalam sejarah Islam, kota ini berkembang menjadi pusat ilmu di wilayah Syam. Pada masa dinasti Hamdaniyah di abad ke-10, lingkungan istana Sayf al-Dawlah menjadi ruang para pujangga dan nama al-Mutanabbi melekat pada periode itu. Era Seljuk, Zanki, dan Ayyubiyah kemudian menumbuhkan madrasah serta khanaqah di sekitar Masjid Agung Aleppo dan jalur-jalur kota tua. Medina tua Aleppo kini tercatat sebagai Situs Warisan Dunia UNESCO.',
        ],
      },
      {
        h: 'Khanaqah dan Jejak Jalur Tarekat',
        p: [
          'Kehidupan khanaqah di Aleppo menyatu dengan pola kota-kota Syam, yakni lembaga zikir dan pengajian yang menaungi penuntut ilmu di sekitar para ulama. Dari Aleppo, jalur perjalanan ulama menghubungkan Damaskus, Hebron, dan wilayah Anatolia yang kelak menjadi inti kekuasaan Ottoman. Tradisi inilah yang menjadikan Aleppo dikenang sebagai kota ulama tempat hadits, fikih, dan dzikir tumbuh berdampingan. Perang Suriah yang mulai tahun 2011 merusak sebagian besar medina tua, termasuk Masjid Agung Aleppo, dan kehidupan keagamaan kota terpaksa beradaptasi. Meski demikian, nama Aleppo tetap penting dalam peta sejarah tarekat sebagai simpul utara Syam.',
        ],
      },
    ],
    related: ['damaskus', 'bursa', 'sarajevo', 'hebron'],
  },
  {
    slug: 'balkh',
    kind: 'atlas',
    title: 'Balkh',
    category: 'Asia Tengah & Selatan',
    summary: 'Balkh, kota kuno di utara Afghanistan yang dalam khazanah tarekat dikenang sebagai kota yang dikaitkan dengan Syekh Abu Yazid al-Bistami.',
    facts: [
      { label: 'Wilayah', value: 'Afghanistan utara, dekat kota Mazar-i-Syarif' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kota kuno Khurasan yang secara tradisional dikaitkan dengan Syekh Abu Yazid al-Bistami, tokoh awal fana dalam khazanah sufi' },
      { label: 'Jalur terhubung', value: 'Khurasan-Mawarannahr: Merv, Naisabur, Bukhara' },
      { label: 'Kini', value: 'Situs arkeologi Balkh di sekitar kota modern Mazar-i-Syarif' },
    ],
    body: [
      {
        h: 'Umm al-Bilad, Kota Tua Khurasan',
        p: [
          'Balkh terletak di dataran utara Afghanistan dan sejak masa kuno menjadi salah satu kota terpenting di wilayah Khurasan besar. Tradisi keilmuan Muslim menyebutnya Umm al-Bilad, ibu segala kota, karena usianya yang tua dan kedudukannya di jalur sutra antara India, Persia, dan Asia Tengah. Sebelum Islam, wilayah ini berlapis tradisi Zoroastrian dan Buddhis, lalu berkembang menjadi kota madrasah dan ulama pada masa Islam. Kota tua Balkh kini berupa situs arkeologi yang berdekatan dengan Mazar-i-Syarif, kota utama Afghanistan bagian utara.',
        ],
      },
      {
        h: 'Abu Yazid al-Bistami dan Ingatan Khurasan',
        p: [
          'Dalam khazanah tarekat, Balkh terkenal sebagai kota yang dikaitkan dengan Syekh Abu Yazid al-Bistami, tokoh besar sufi abad ke-9 yang masyhur dengan pengalaman fana dan ungkapan-ungkapan rohaninya. Riwayat yang lebih luas menempatkan kehidupan dan makam beliau di Bastam, kini di Iran, sementara sebagian tradisi Khurasan menyimpan ingatan kaitannya dengan Balkh. Penyair Jalaluddin Rumi juga secara tradisional disebut berasal dari Balkh sebelum keluarganya berpindah ke Anatolia. Kedua kaitan itu menjadikan Balkh salah satu simpul ingatan sufi Khurasan yang terhubung dengan Merv, Naisabur, dan Bukhara. Riwayat-riwayat periode ini disajikan dengan penanda riwayat sebagaimana diwariskan khazanah tarekat.',
        ],
      },
    ],
    related: ['ghazni', 'kabul', 'bukhara', 'merv'],
  },
  {
    slug: 'bandung',
    kind: 'atlas',
    title: 'Bandung',
    category: 'Nusantara',
    summary: 'Bandung, ibu kota Jawa Barat yang menjadi simpul majelis dzikir TQN dan titik temu jejaring tarekat Priangan dengan kota-kota besar.',
    facts: [
      { label: 'Wilayah', value: 'Ibu kota Provinsi Jawa Barat, kawasan Priangan' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul majelis dzikir TQN yang berhubungan dengan pusat tarekat di Tasikmalaya dan pesantren Priangan' },
      { label: 'Jalur terhubung', value: 'Tasikmalaya, Singaparna, Panjalu, Karawang' },
      { label: 'Kini', value: 'Majelis dzikir TQN berlangsung di masjid dan mushala di berbagai penjuru kota' },
    ],
    body: [
      {
        h: 'Kota di Lembah Priangan',
        p: [
          'Bandung berkembang dari kawasan priangan berupa kebun kopi dan pemerintahan kabupaten menjadi ibu kota Jawa Barat yang besar. Sejarah keislaman kawasan ini berakar pada pesantren-pesantren Priangan Timur, dengan Tasikmalaya sebagai lingkungan tarekat yang paling masyhur. Kota Bandung sendiri tumbuh sebagai pusat pendidikan dan perdagangan yang menarik penduduk dari seluruh Jawa Barat, termasuk santri dan jamaah tarekat. Dalam peta TQN Qodiriyah Naqsabandiyah, Bandung menjadi titik temu antara jamaah perkotaan dan pusat-pusat tarekat di Priangan Timur.',
        ],
      },
      {
        h: 'Majelis Dzikir TQN di Kota',
        p: [
          'Majelis dzikir TQN di Bandung berlangsung di masjid, mushala, dan rumah jamaah, mengikuti pola riblah yang dikenal dalam tradisi tarekat ini. Jamaah menerima pemahaman adab dan amalan dzikir melalui sanad yang berhubungan dengan pusat tarekat di Tasikmalaya. Kehadiran perguruan tinggi, birokrasi, dan komunitas perkotaan menjadikan majelis di Bandung bersifat lintas latar pendidikan dan pekerjaan. Untuk detail tokoh dan lokasi tertentu, 165.web.id mengundang pembaca menelusuri langsung kepada pengurus majelis setempat.',
        ],
      },
    ],
    related: ['tasikmalaya', 'singaparna', 'karawang', 'panjalu'],
  },
  {
    slug: 'banjarmasin',
    kind: 'atlas',
    title: 'Banjarmasin',
    category: 'Nusantara',
    summary: 'Banjarmasin, kota sungai di Kalimantan Selatan; pusat keilmuan Islam kawasan Banjar dan simpul majelis tarekat di Kalimantan bagian selatan.',
    facts: [
      { label: 'Wilayah', value: 'Kalimantan Selatan, dataran Sungai Barito' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat pesantren dan kiai kawasan Banjar; simpul majelis dzikir TQN di Kalimantan Selatan' },
      { label: 'Jalur terhubung', value: 'Sambas, Pontianak, Palembang, Makkah' },
      { label: 'Kini', value: 'Kota pelabuhan sungai dengan pesantren dan majelis dzikir yang aktif' },
    ],
    body: [
      {
        h: 'Kota Sungai dari Kesultanan Banjar',
        p: [
          'Banjarmasin berdiri di dataran sungai Barito dengan kanal-kanal yang membuatnya dijuluki kota seribu sungai. Wilayah ini merupakan pusat Kesultanan Banjar yang memeluk Islam pada abad ke-16 dan menjadikan sungai sebagai arteri dakwah serta perdagangan. Budaya Banjar sangat kental dengan nilai pesantren: kiai menempati kedudukan terhormat dan perantauan haji ke Hijaz menjadi tradisi lama masyarakatnya. Komunitas Banjar bahkan lama berdiam di Makkah sebagai pelajar dan pedagang, memperkuat kaitan Kalimantan Selatan dengan pusat ilmu di Hijaz.',
        ],
      },
      {
        h: 'Pesantren, Kiai, dan Tarekat Banjar',
        p: [
          'Dalam lingkungan yang kuat tradisi pesantrennya, tarekat dan majelis dzikir menemukan tanah yang subur di kawasan Banjar. Majelis TQN di Banjarmasin dan sekitarnya berpaut pada sanad tarekat yang berhubungan dengan pusat di Jawa dan ulama Hijaz, mengikuti pola penyebaran tarekat di Nusantara. Pesantren-pesantren di Kalimantan Selatan turut menghidupkan pengajian kitab kuning yang menjadi dasar adab dan ilmu jamaah tarekat. 165.web.id menyajikan Banjarmasin sebagai simpul selatan Kalimantan dalam peta majelis TQN, dengan detail kelembagaan yang sebaiknya diperiksa langsung kepada jamaah setempat.',
        ],
      },
    ],
    related: ['sambas', 'pontianak', 'palembang', 'makkah'],
  },
  {
    slug: 'banten',
    kind: 'atlas',
    title: 'Banten',
    category: 'Nusantara',
    summary: 'Banten, wilayah kesultanan maritim lama di ujung barat Jawa dan salah satu pintu awal masuknya Islam serta tradisi tarekat di Nusantara.',
    facts: [
      { label: 'Wilayah', value: 'Ujung barat Pulau Jawa, kini Provinsi Banten' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kesultanan Islam besar abad ke-16 hingga ke-19; wilayah dengan tradisi tarekat kuat dan ulama masyhur di Hijaz' },
      { label: 'Jalur terhubung', value: 'Serang, Karawang, Makkah, Tasikmalaya' },
      { label: 'Kini', value: 'Situs Kesultanan Banten Lama menjadi kawasan ziarah dan warisan budaya' },
    ],
    body: [
      {
        h: 'Kesultanan Maritim di Selat Sunda',
        p: [
          'Banten tumbuh menjadi kesultanan maritim besar pada abad ke-16 di ujung barat Pulau Jawa. Pelabuhannya menjadi salah satu pusat perdagangan lada yang penting di Asia Tenggara, bersaing dengan pelabuhan besar lain di Nusantara. Masjid Agung Banten Lama yang berdiri di kawasan istana tua menandai pusat keagamaan kesultanan tersebut. Pada masa kejayaannya, Banten menjadi simpul dakwah, pendidikan, dan diplomasi yang menghubungkan Jawa dengan Sumatera, Makkah, dan dunia Arab.',
        ],
      },
      {
        h: 'Ulama dan Tarekat Banten',
        p: [
          'Wilayah Banten melahirkan banyak ulama, dan yang paling masyhur adalah Syekh Nawawi al-Bantani dari Tanara, Serang, yang menulis karya-karya besar di Kairo dan Makkah. Tradisi tarekat di Banten juga kuat, khususnya Qadiriyah, yang dalam banyak catatan tarekat menjadi pintu masuk ajaran dzikir di kawasan ini. Jaringan pesantren dan majelis dzikir Banten menyambung dengan pusat tarekat di Priangan serta dengan sanad ijazah di Makkah dan Madinah. Dalam peta 165.web.id, Banten menjadi simpul barat Jawa yang menghubungkan Karawang, Serang, dan jalur tarekat Nusantara.',
        ],
      },
    ],
    related: ['banten-serang', 'karawang', 'tasikmalaya', 'makkah'],
  },
  {
    slug: 'banten-serang',
    kind: 'atlas',
    title: 'Serang, Banten',
    category: 'Nusantara',
    summary: 'Serang, ibu kota Provinsi Banten; kota Masjid Agung Banten Lama dan lingkungan kelahiran banyak ulama besar Banten yang masyhur di Hijaz.',
    facts: [
      { label: 'Wilayah', value: 'Pesisir utara Provinsi Banten' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat administrasi dan keagamaan Kesultanan Banten; lingkungan kelahiran ulama Bantener yang masyhur di Hijaz' },
      { label: 'Jalur terhubung', value: 'Banten, Karawang, Makkah, Tasikmalaya' },
      { label: 'Kini', value: 'Ibu kota Provinsi Banten dengan situs kesultanan yang terpelihara' },
    ],
    body: [
      {
        h: 'Pusat Kesultanan Banten',
        p: [
          'Serang menjadi pusat pemerintahan Kesultanan Banten, dan di wilayah ini berdiri Masjid Agung Banten Lama bersama sisa-sisa keraton, benteng, dan kawasan perdagangan lama. Masjid agung tersebut dengan pagarnya yang khas menjadi salah satu monumen Islam tertua di Nusantara yang masih digunakan. Kawasan Banten Lama kini menjadi kawasan ziarah yang dikunjungi jamaah dan pengkaji sejarah. Kedudukan Serang sebagai ibu kota provinsi menjadikannya pusat kelembagaan keagamaan di Banten masa kini.',
        ],
      },
      {
        h: 'Tanah Ulama Bantener',
        p: [
          'Wilayah Serang dan sekitarnya dikenal sebagai tanah kelahiran ulama besar. Yang paling terkenal adalah Syekh Muhammad Nawawi al-Bantani dari Tanara, penulis puluhan karya yang menjadi rujukan di pesantren Nusantara dan dunia Arab. Nama Bantener menjadi melekat pada banyak pengajar di Hijaz dan Mesir, menandai kuatnya kaitan wilayah ini dengan pusat ilmu di Timur Tengah. Tradisi tarekat dan majelis dzikir di Banten berhubungan dengan jaringan tersebut, menghubungkan Serang dengan Karawang, Priangan, dan Makkah.',
        ],
      },
    ],
    related: ['banten', 'karawang', 'makkah', 'tasikmalaya'],
  },
  {
    slug: 'banyumas',
    kind: 'atlas',
    title: 'Banyumas',
    category: 'Nusantara',
    summary: 'Banyumas, kawasan barat Jawa Tengah dengan jaringan pesantren dan jalur tarekat yang menyambung Priangan dengan pusat-pusat Jawa Tengah.',
    facts: [
      { label: 'Wilayah', value: 'Jawa Tengah bagian barat, bantaran Sungai Serayu' },
      { label: 'Peran dalam sejarah tarekat', value: 'Jalur tarekat antara Priangan dan Jawa Tengah; jaringan pesantren dan majelis dzikir TQN' },
      { label: 'Jalur terhubung', value: 'Cikangkung, Tasikmalaya, Bandung, Jombang' },
      { label: 'Kini', value: 'Kawasan Purwokerto dengan pesantren dan majelis dzikir aktif' },
    ],
    body: [
      {
        h: 'Tanah Serayu antara Dua Wilayah',
        p: [
          'Banyumas terletak di bagian barat Jawa Tengah di bantaran Sungai Serayu, berbatasan dengan Priangan Timur di seberangnya. Kedudukan geografis ini menjadikannya kawasan penghubung antara budaya dan tradisi keagamaan Sunda dengan Jawa. Pesantren tumbuh di banyak kampung Banyumas, dan dari sana mengalir pengajian kitab serta tradisi dzikir ke arah Priangan dan sebaliknya. Dalam peta tarekat, kawasan ini menjadi jalur penting yang menyambung pusat TQN di Tasikmalaya dengan simpul-simpul Jawa Tengah.',
        ],
      },
      {
        h: 'Jalur Tarekat TQN',
        p: [
          'Majelis dzikir TQN di kawasan Banyumas mengikuti pola yang berlaku di Jawa Tengah barat: pengajian adab, amalan dzikir, dan silaturahmi antarjamaah melalui murabbi setempat. Kampung-kampung seperti Cikangkung di wilayah Purbalingga-Banyumas dikenal dalam jejaring jamaah sebagai simpul majelis pada jalur ini. Untuk menjaga kejujuran informasi, 165.web.id menyajikan kawasan ini secara umum dan mengundang pembaca menelusuri detail kelembagaan langsung kepada jamaah. Kaitan Banyumas dengan Jombang dan Tasikmalaya menunjukkan arus jamaah yang mengalir dari barat ke timur Jawa.',
        ],
      },
    ],
    related: ['cikangkung', 'tasikmalaya', 'jombang', 'bandung'],
  },
  {
    slug: 'basra',
    kind: 'atlas',
    title: 'Basra',
    category: 'Timur Tengah',
    summary: 'Basra, pelabuhan tua di Irak selatan yang menjadi panggung awal gerakan zuhud dan tradisi zikir khafi dalam khazanah sufi.',
    facts: [
      { label: 'Wilayah', value: 'Irak selatan, muara Sungai Tigris dan Efrat' },
      { label: 'Peran dalam sejarah tarekat', value: 'Lingkungan awal zuhud Islam; Hasan al-Bashri dan riwayat tarekat tentang zikir khafi' },
      { label: 'Jalur terhubung', value: 'Baghdad, Damaskus, Khurasan (Merv, Bukhara)' },
      { label: 'Kini', value: 'Kota pelabuhan utama Irak selatan' },
    ],
    body: [
      {
        h: 'Pelabuhan Ilmu di Awal Islam',
        p: [
          'Basra didirikan pada masa khalifah Umar bin Khattab sebagai kota garnisun, lalu berkembang menjadi salah satu kota terpenting dunia Islam awal. Kota ini melahirkan sekolah tata bahasa Arab dengan nama besar Sibawaih dan menjadi panggung perdebatan teologi awal di antara kaum Muslimin. Dalam bidang kerohanian, Basra dikenang sebagai rumah Hasan al-Bashri, ulama zuhud yang wafat sekitar tahun 728 M, serta lingkungan para ahli zuhud awal. Rabiah al-Adawiyah, tokoh zuhud wanita yang sangat berpengaruh, dalam banyak riwayat juga dilekatkan pada lingkungan kota ini.',
        ],
      },
      {
        h: 'Zuhud dan Riwayat Zikir Khafi',
        p: [
          'Dalam riwayat silsilah tarekat, garis zikir khafi sering dihubungkan dengan Hasan al-Bashri sebagai pelopor zuhud yang mengutamakan kesunyian hati. Riwayat ini termasuk bagian tradisi tarekat yang diwariskan secara lisan dan kitab, sehingga 165.web.id menyajikannya dengan penanda riwayat, bukan sebagai fakta kala yang pasti. Meski demikian, peran Basra sebagai panggung awal zuhud adalah bagian mapan dari sejarah Islam. Kota ini kemudian mengalami kemunduran karena gejolak politik dan perubahan aliran sungai, namun namanya tetap besar dalam ingatan sufi bersama Kufah dan Baghdad.',
        ],
      },
    ],
    related: ['damaskus', 'merv', 'bukhara', 'makkah'],
  },
  {
    slug: 'brunei',
    kind: 'atlas',
    title: 'Brunei Darussalam',
    category: 'Simpul Jamaah Global',
    summary: 'Brunei Darussalam, kesultanan Islam tua di pantai utara Kalimantan yang menjaga tradisi keilmuan dan majelis dzikir tarekat hingga kini.',
    facts: [
      { label: 'Wilayah', value: 'Pantai utara Pulau Kalimantan, Asia Tenggara' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kesultanan Islam tua Nusantara; komunitas jamaah TQN berhubungan dengan silsilah Nusantara' },
      { label: 'Jalur terhubung', value: 'Banjarmasin, Kuala Lumpur, Singapura, Makkah' },
      { label: 'Kini', value: 'Negara kesultanan dengan kelembagaan Islam yang kuat' },
    ],
    body: [
      {
        h: 'Kesultanan di Utara Borneo',
        p: [
          'Brunei Darussalam merupakan salah satu kesultanan Islam tertua di Nusantara yang keberlangsungannya berlanjut hingga hari ini. Pada abad ke-16 kesultanan ini menjadi kekuatan maritim yang menjangkau pesisir Kalimantan dan sekitarnya. Identitas keislaman menjadi inti kehidupan negara, tampak pada kelembagaan pendidikan agama, pengelolaan masjid, dan tradisi pengajian kerajaan. Hubungan lama dengan dunia Melayu menjadikan Brunei terhubung dengan jejaring ulama Nusantara dan Hijaz.',
        ],
      },
      {
        h: 'Jamaah TQN di Brunei',
        p: [
          'Majelis dzikir TQN di Brunei berada dalam komunitas Muslim yang kehidupan keagamaannya terselenggara secara kelembagaan. Kaitan dengan silsilah tarekat Nusantara terjalin melalui perantauan ilmu, ibadah haji, dan silaturahmi antarjamaah di kawasan Melayu. Dalam peta 165.web.id, Brunei menjadi simpul utara Kalimantan yang menyandingkan Banjarmasin dan Kuala Lumpur. Kaitan dengan silaturahmi ke simpul Malaysia dan Makkah menjaga keberlanjutan amalan jamaah serta kelangsungan sanad yang diikuti murid-muridnya. Informasi mengenai majelis tertentu sebaiknya ditelusuri langsung kepada jamaah di negara tersebut, mengingat 165.web.id tidak mencantumkan alamat majelis.',
        ],
      },
    ],
    related: ['banjarmasin', 'kuala-lumpur', 'singapura', 'labuan'],
  },
  {
    slug: 'bukhara',
    kind: 'atlas',
    title: 'Bukhara',
    category: 'Asia Tengah & Selatan',
    summary: 'Bukhara, kota ilmu di Asia Tengah; nadi silsilah Khwajagan-Naqsabandiyah dan kampung Baha\'uddin Naqsyaband tidak jauh dari pusat kotanya.',
    facts: [
      { label: 'Wilayah', value: 'Asia Tengah, kini Uzbekistan' },
      { label: 'Peran dalam sejarah tarekat', value: 'Nadi silsilah Naqsyabandiyah dari riwayat Abu Bakr hingga Khwaja Ubaidullah Ahrar; kampung Baha\'uddin Naqsyaband' },
      { label: 'Jalur terhubung', value: 'Ghijduvan, Samarqand, Balkh, Merv' },
      { label: 'Kini', value: 'Situs Warisan Dunia UNESCO dengan madrasah dan khanaqah yang terpelihara' },
    ],
    body: [
      {
        h: 'Bukhara-i Syarif, Kota Madrasah',
        p: [
          'Bukhara adalah salah satu kota ilmu terbesar di dunia Islam. Kota ini menjadi pusat dinasti Samaniyah, dan dari sini lahir Imam Bukhari, penyusun Sahih al-Bukhari yang menjadi rujukan hadits seluruh umat. Madrasah dan majelis pengajian menjamur di sepanjang abad, menjadikan julukan Bukhara-i Syarif, Bukhara yang mulia, melekat pada kota ini. Posisinya di jalur sutra membuat Bukhara tempat pertemuan ulama, saudagar, dan penuntut ilmu dari Khurasan, India, dan Tiongkok.',
        ],
      },
      {
        h: 'Nadi Silsilah Naqsyabandiyah',
        p: [
          'Dalam riwayat silsilah Naqsyabandiyah, garis keberkahan dihubungkan dengan Abu Bakr ash-Shiddiq sebagai asal rohani silsilah ini, lalu mengalir melalui para khwaja Khurasan dan Mawarannahr hingga ke Bukhara. Dari lingkungan Bukhara lahir rangkaian tokoh: Abd al-Khaliq al-Ghijduwani di kota Ghijduvan, hingga Sayyid Amir Kulal dan Baha\'uddin Naqsyaband yang kampungnya berada tidak jauh dari kota ini. Khwaja Ubaidullah Ahrar yang meneruskan pengaruh tarekat pada abad berikutnya juga berhubungan dengan kawasan Mawarannahr. Kompleks makam Baha\'uddin Naqsyaband di dekat Bukhara kini menjadi tempat ziarah jamaah Naqsyabandiyah dari berbagai negara.',
        ],
      },
    ],
    related: ['ghijduvan', 'samarqand', 'balkh', 'merv'],
  },
  {
    slug: 'bursa',
    kind: 'atlas',
    title: 'Bursa',
    category: 'Timur Tengah',
    summary: 'Bursa, ibu kota pertama Kesultanan Utsmani dengan tradisi khanaqah dan makam sufi yang menyambung Anatolia dengan dunia tarekat.',
    facts: [
      { label: 'Wilayah', value: 'Anatolia barat laut, kini Turki' },
      { label: 'Peran dalam sejarah tarekat', value: 'Ibu kota awal Utsmani; lingkungan khanaqah, madrasah, dan makam sufi era Ottoman' },
      { label: 'Jalur terhubung', value: 'Aleppo, Damaskus, Sarajevo, Skopje' },
      { label: 'Kini', value: 'Kota industri Turki dengan situs Ottoman yang terpelihara' },
    ],
    body: [
      {
        h: 'Ibu Kota Pertama Ottoman',
        p: [
          'Bursa ditaklukkan Kesultanan Utsmani pada tahun 1326 dan menjadi ibu kota pertama negara yang kelak menguasai tiga benua. Masjid Agung Bursa atau Ulu Cami, Masjid Hijau, dan kompleks waqf-nya menandai perkembangan arsitektur Islam awal Ottoman. Kota ini berada di ujung jalur sutra Anatolia, dengan han dan pasar sutra yang menjadikannya simpul perdagangan penting. Karakter kota ilmu dan kerajinan ini meletakkan dasar kehidupan keagamaan yang padat.',
        ],
      },
      {
        h: 'Khanaqah dan Sufi Bursa',
        p: [
          'Sebagai pusat Ottoman awal, Bursa menampung khanaqah, zaviye, dan makam para sufi. Tokoh yang terkenal adalah Emir Sultan, ulama keturunan dari Bukhara yang menetap di Bursa pada era awal kesultanan dan makamnya menjadi tempat ziarah hingga kini. Kehidupan tarekat di Bursa menyambung dengan pola kota Syam dan Balkan, karena kesultanan yang sama mengelola waqf dari Anatolia hingga Bosnia. Dalam peta 165.web.id, Bursa menjadi simpul Anatolia yang menyambungkan Aleppo, Damaskus, dan kota-kota Balkan seperti Sarajevo dan Skopje.',
        ],
      },
    ],
    related: ['aleppo', 'damaskus', 'sarajevo', 'skopje'],
  },
  {
    slug: 'cikangkung',
    kind: 'atlas',
    title: 'Cikangkung',
    category: 'Nusantara',
    summary: 'Cikangkung, kampung di kawasan Purbalingga-Banyumas yang dikenal dalam jejaring jamaah sebagai simpul majelis dzikir TQN Jawa Tengah barat.',
    facts: [
      { label: 'Wilayah', value: 'Kawasan Purbalingga-Banyumas, Jawa Tengah' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul majelis dzikir TQN pada jalur tarekat antara Priangan dan Jawa Tengah' },
      { label: 'Jalur terhubung', value: 'Banyumas, Tasikmalaya, Bandung, Jombang' },
      { label: 'Kini', value: 'Kampung yang menjadi tempat berkumpul jamaah dzikir setempat' },
    ],
    body: [
      {
        h: 'Kampung pada Jalur Tarekat',
        p: [
          'Cikangkung adalah kampung di kawasan Purbalingga-Banyumas, wilayah barat Jawa Tengah yang kaya tradisi pesantren. Dalam jejaring jamaah TQN, nama Cikangkung disebut sebagai tempat berdirinya majelis dzikir yang melayani jamaah dari kampung-kampung sekitarnya. Pola kegiatan majelis mengikuti tradisi tarekat pada umumnya: pengajian adab, amalan dzikir yang dipimpin murabbi, dan silaturahmi antar simpul. Posisinya di jalur antara Priangan dan Jawa Tengah menjadikannya bagian dari arus jamaah yang menghubungkan Tasikmalaya dengan Jombang.',
        ],
      },
      {
        h: 'Cara Membaca Simpul Lokal',
        p: [
          '165.web.id menyajikan simpul-simpul kampung seperti Cikangkung dengan hati-hati. Informasi yang beredar di kalangan jamaah tidak selalu lengkap dan tidak selalu terdokumentasi secara publik, sehingga halaman ini tidak mencantumkan nama tokoh, tanggal, atau alamat yang tidak dapat diverifikasi. Pembaca yang ingin menelusuri lebih jauh disarankan berhubungan langsung dengan majelis setempat atau pusat tarekat yang berhubungan. Dengan cara ini, atlas tempat tetap jujur: menyebut simpul yang hidup di jejaring jamaah tanpa mengarang detailnya.',
        ],
      },
    ],
    related: ['banyumas', 'tasikmalaya', 'jombang', 'bandung'],
  },
  {
    slug: 'damaskus',
    kind: 'atlas',
    title: 'Damaskus',
    category: 'Timur Tengah',
    summary: 'Damaskus, ibu kota Syam yang menjadi rumah khanaqah di lereng Jabal Qasyun dan tempat persemayaman Syekh al-Akbar Ibnu Arabi.',
    facts: [
      { label: 'Wilayah', value: 'Syam, kini ibu kota Suriah' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat khanaqah Syam; makam Ibnu Arabi di Jabal Qasyun; kota ulama suf besar seperti Abdul Ghani an-Nabulsi' },
      { label: 'Jalur terhubung', value: 'Aleppo, Hebron, Bursa, Makkah' },
      { label: 'Kini', value: 'Ibu kota Suriah; situs-situs sufi tetap menjadi tempat ziarah' },
    ],
    body: [
      {
        h: 'Syam Qadimah, Kota Sejarah',
        p: [
          'Damaskus termasuk kota tertua yang terus dihuni di dunia dan menjadi ibu kota dinasti Umayyah pada abad ke-7. Masjid Umayyah di pusat kota menjadi salah satu masjid terpenting dalam sejarah Islam. Pada era Seljuk, Zanki, dan Nuruddin Mahmud, Damaskus dipenuhi madrasah dan khanaqah sebagai bagian pembaruan kehidupan keagamaan. Ulama besar lahir dan mengajar di sini, dan lingkungan hadits serta fikih kota ini terkenal di seluruh dunia.',
        ],
      },
      {
        h: 'Jabal Qasyun dan Ibnu Arabi',
        p: [
          'Lereng Jabal Qasyun di sisi utara Damaskus sejak lama menjadi tempat tinggal para ahli zuhud dan berdirinya khanaqah. Di kota inilah Syekh al-Akbar Muhyiddin Ibnu Arabi menetap pada akhir hayatnya, wafat pada tahun 1240, dan makamnya di Jabal Qasyun menjadi pusat ziarah hingga kini. Abdul Ghani an-Nabulsi, ulama Damaskus abad ke-18 yang masyhur dalam tasawuf, turut menghidupkan tradisi ilmu dan dzikir kota ini. Bagi jamaah tarekat, Damaskus menjadi salah satu simpul Syam yang menyambung Aleppo, Hebron, dan kota-kota Anatolia.',
        ],
      },
    ],
    related: ['aleppo', 'hebron', 'bursa', 'makkah'],
  },
  {
    slug: 'delhi',
    kind: 'atlas',
    title: 'Delhi',
    category: 'Asia Tengah & Selatan',
    summary: 'Delhi, kota tua India utara; pusat tarekat Chishtiyya dengan dargah Nizamuddin dan pintu masuk Naqsyabandiyah ke India.',
    facts: [
      { label: 'Wilayah', value: 'India utara, tepi Sungai Yamuna' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat Chishtiyya (Nizamuddin Auliya); kedudukan Baqi Billah dalam masuknya Naqsyabandiyah ke India' },
      { label: 'Jalur terhubung', value: 'Samarqand, Bukhara, Multan, Uch Sharif' },
      { label: 'Kini', value: 'Ibu kota India; dargah Nizamuddin tetap menjadi pusat ziarah besar' },
    ],
    body: [
      {
        h: 'Ibu Kota Sultanat dan Dargah Chishtiyyah',
        p: [
          'Delhi menjadi ibu kota sultanat Islam di India sejak abad ke-13 dan berkembang sebagai pusat ilmu serta kerohanian. Dua tokoh Chishtiyyah yang menandai kota ini adalah Qutbuddin Bakhtiar Kaki dan Nizamuddin Auliya; makam keduanya menjadi dargah yang dikunjungi jutaan peziarah. Di sebelah makam Nizamuddin bersemayam Amir Khusrau, sastrawan dan murid kesayangan sang wali yang melekat pada tradisi qawwali. Ziarah besar di dargah ini membuat Delhi tetap menjadi simpul kehidupan sufi India hingga masa kini.',
        ],
      },
      {
        h: 'Naqsyabandiyah Masuk India',
        p: [
          'Pada akhir abad ke-16, Syekh Baqi Billah membawa silsilah Naqsyabandiyah dari Asia Tengah ke Delhi. Dari lingkungannya lahirlah Ahmad Sirhindi, Mujaddid Alf Sani, yang garis Mujaddidiyah-nya menjadi bagian luas dari silsilah Naqsyabandiyah di banyak wilayah, termasuk yang beredar di Nusantara. Kaitan Delhi dengan Samarqand dan Bukhara menandakan arus ilmu yang mengalir dari Asia Tengah ke India. Dalam peta 165.web.id, Delhi menjadi simpul India utara dalam jalur tarekat yang menyambung Multan dan Uch Sharif di Punjab.',
        ],
      },
    ],
    related: ['samarqand', 'bukhara', 'multan', 'uch-sharif'],
  },
  {
    slug: 'demak',
    kind: 'atlas',
    title: 'Demak',
    category: 'Nusantara',
    summary: 'Demak, kota di pantai utara Jawa Tengah yang dalam historiografi Nusantara dikenal sebagai kerajaan Islam pertama di Jawa.',
    facts: [
      { label: 'Wilayah', value: 'Pantai utara Jawa Tengah' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kerajaan Islam pertama di Jawa menurut historiografi yang beredar; simpul awal Islamisasi Jawa bersama jejaring Walisongo' },
      { label: 'Jalur terhubung', value: 'Jombang, Banyumas, Palembang, Banjarmasin' },
      { label: 'Kini', value: 'Masjid Agung Demak tetap menjadi pusat keagamaan dan ziarah' },
    ],
    body: [
      {
        h: 'Kerajaan Islam Pertama di Jawa',
        p: [
          'Menurut historiografi yang beredar, Demak berdiri sebagai kerajaan Islam pertama di Jawa pada akhir abad ke-15 di bawah Raden Patah. Perkembangannya melekat pada jejaring Walisongo, para wali penyiar Islam yang dalam tradisi Jawa dihubungkan dengan pesisir utara dan timur Jawa. Sebagai bandar di pesisir utara, Demak menjadi simpul dakwah dan perdagangan yang menghubungkan Jawa dengan Sumatera dan Kalimantan. Kisah-kisah pada periode ini banyak berbentuk riwayat dan tradisi lisan, sehingga 165.web.id menyajikannya dengan penanda riwayat.',
        ],
      },
      {
        h: 'Masjid Agung Demak',
        p: [
          'Masjid Agung Demak menjadi monumen paling terkenal dari periode tersebut. Bangunannya dengan saka tatal, tiang dari kayu berpetak, dalam tradisi setempat dihubungkan dengan Sunan Kalijaga dan para wali lain. Masjid ini tetap berfungsi sebagai pusat ibadah dan ziarah, menjadi titik tolak memahami bagaimana Islam Nusantara berkembang lewat masjid, pesantren, dan pesisir. Dalam peta 165.web.id, Demak menjadi simpul awal Islamisasi Jawa yang menyambung dengan pesantren Jawa Timur dan Jawa Tengah.',
        ],
      },
    ],
    related: ['jombang', 'banyumas', 'palembang', 'banjarmasin'],
  },
  {
    slug: 'direktori',
    kind: 'atlas',
    title: 'Direktori Atlas',
    category: 'Simpul Jamaah Global',
    summary: 'Direktori Atlas 165: enam puluh simpul tempat dalam sejarah tarekat, dari Nusantara hingga Timur Tengah, Asia Tengah, Afrika, dan Eropa.',
    facts: [
      { label: 'Wilayah', value: 'Lintas daerah: Nusantara, Timur Tengah, Asia Tengah dan Selatan, Afrika dan Eropa, simpul jamaah global' },
      { label: 'Peran dalam sejarah tarekat', value: 'Peta simpul tempat: pusat silsilah, khanaqah, pusat tarekat, dan majelis jamaah' },
      { label: 'Jalur terhubung', value: 'Seluruh entri atlas, mulai dari Tasikmalaya, Makkah, dan Bukhara' },
      { label: 'Kini', value: 'Dipelihara dan diperbarui bersama redaksi 165.web.id' },
    ],
    body: [
      {
        h: 'Pengantar Atlas 165',
        p: [
          'Atlas 165 adalah bagian dari platform pengetahuan 165.web.id untuk Tarekat Qodiriyah Naqsabandiyah. Halaman-halamannya mengumpulkan enam puluh simpul tempat yang berhubungan dengan sejarah tarekat: pusat silsilah di Asia Tengah, khanaqah di Timur Tengah, pusat tarekat di Nusantara, serta simpul jamaah di berbagai negara. Tujuan atlas ini adalah menyediakan peta tempat yang jujur, dapat dibaca mesin pencari, dan mudah ditelusuri oleh jamaah maupun pengkaji. Setiap halaman ditulis dalam bahasa Indonesia formal dengan pemisahan jelas antara fakta mapan dan riwayat tradisional.',
        ],
      },
      {
        h: 'Cara Membaca Halaman Tempat',
        p: [
          'Setiap halaman tempat memuat ringkasan, fakta singkat, dan uraian bertahap. Fakta singkat dibagi empat: Wilayah, Peran dalam sejarah tarekat, Jalur terhubung, dan Kini. Riwayat tradisional diberi penanda riwayat, sementara fakta yang mapan disajikan langsung. Koordinat geografis sengaja tidak dicantumkan, dan simpul lokal yang informasinya terbatas disajikan secara umum. Bagian jalur terhubung mengundang pembaca melompat antar simpul untuk membaca peta secara menyeluruh.',
        ],
      },
      {
        h: 'Daerah dalam Direktori',
        p: [
          'Entri atlas terbagi lima kelompok daerah. Kelompok Nusantara memuat pusat tarekat seperti Tasikmalaya, Panjalu, dan Pamijahan, serta majelis di berbagai provinsi. Kelompok Timur Tengah memuat Makkah, Madinah, Thaif, Syam, dan Irak.',
          'Kelompok Asia Tengah dan Selatan memuat Bukhara, Ghijduvan, Samarqand, India, dan Punjab. Kelompok Afrika dan Eropa memuat Fez, Kano, Timbuktu, Sarajevo, dan Skopje. Kelompok simpul jamaah global memuat Malaysia, Singapura, Brunei, Belanda, dan Amerika Serikat.',
        ],
      },
    ],
    related: ['tasikmalaya', 'makkah', 'bukhara', 'timbuktu'],
  },
  {
    slug: 'fez',
    kind: 'atlas',
    title: 'Fez',
    category: 'Afrika & Eropa',
    summary: 'Fez, kota ilmu Maroko dengan Universitas al-Qarawiyyin dan tradisi zawiyah Jazuliyyah yang berpengaruh di seluruh Maghrib.',
    facts: [
      { label: 'Wilayah', value: 'Maroko utara' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat keilmuan Maghrib; lingkungan zawiyah Jazuliyyah sekitar ajaran Syekh al-Jazuli' },
      { label: 'Jalur terhubung', value: 'Kano, Timbuktu, Makkah, Damaskus' },
      { label: 'Kini', value: 'Medina Fez tercatat sebagai Situs Warisan Dunia UNESCO' },
    ],
    body: [
      {
        h: 'Qarawiyyin dan Kota Ulama',
        p: [
          'Fez berdiri pada akhir abad ke-8 dan berkembang menjadi ibu kota keilmuan Maghrib. Universitas al-Qarawiyyin yang dirintis Fatimah al-Fihri pada abad ke-9 dikenal sebagai salah satu lembaga pengajian tertua yang terus beroperasi di dunia. Medina tua Fez dengan madrasah, perpustakaan, dan pasar tradisionalnya tercatat sebagai Situs Warisan Dunia UNESCO. Nama-nama besar ilmu Maghrib dan Andalusia mengalir melalui kota ini selama berabad-abad.',
        ],
      },
      {
        h: 'Zawiyah Jazuliyyah',
        p: [
          'Dalam khazanah tarekat Maghrib, Fez menjadi lingkungan penting zawiyah Jazuliyyah, jaringan zawiyyah yang berpaut pada ajaran Syekh Muhammad al-Jazuli, penyusun Dalail al-Khairat. Jaringan Jazuliyyah berpengaruh besar pada kehidupan sufi Maroko pada abad ke-15 dan menjadi model hubungan antara wali, murid, dan masyarakat kota. Dari Maghrib, arus tarekat mengalir ke Afrika Barat, menghubungkan Fez dengan Kano dan Timbuktu. Zawiyah-zawiyah kota ini juga menjadi tempat belajar murid dari desa dan kota sekitar sebelum melanjutkan perjalanan ilmu. Dalam peta 165.web.id, Fez menjadi simpul Afrika utara yang menyambung jalur ziarah menuju Makkah.',
        ],
      },
    ],
    related: ['kano', 'timbuktu', 'makkah', 'damaskus'],
  },
  {
    slug: 'ghazni',
    kind: 'atlas',
    title: 'Ghazni',
    category: 'Asia Tengah & Selatan',
    summary: 'Ghazni, kota pegunungan Afghanistan yang menjadi ibu kota dinasti Ghaznawiyah dan persinggahan jalur sufi Khurasan menuju India.',
    facts: [
      { label: 'Wilayah', value: 'Afghanistan tenggara, kaki Pegunungan Hindu Kush' },
      { label: 'Peran dalam sejarah tarekat', value: 'Ibu kota Ghaznawiyah; lingkungan sufi Khurasan; kampung penyair sufi Hakim Sana\'i' },
      { label: 'Jalur terhubung', value: 'Balkh, Kabul, Naisabur, Multan' },
      { label: 'Kini', value: 'Kota bersejarah dengan sisa-sisa menara era Ghaznawiyah' },
    ],
    body: [
      {
        h: 'Ibu Kota Ghaznawiyah',
        p: [
          'Ghazni menjadi ibu kota dinasti Ghaznawiyah pada abad ke-10 dan ke-11 di bawah Sultan Mahmud. Dari kota ini dinasti tersebut menguasai wilayah luas dari Khurasan hingga India utara, menjadikan Ghazni simpul kekuasaan di jalur Hindu Kush. Sisa-sisa menara peringatan era Ghaznawiyah masih berdiri di kota ini dan menjadi penanda kejayaannya. Perpindahan pusat kekuasaan ke kota lain kemudian menggeser peran Ghazni, namun ingatan era ilmunya tetap terjaga dalam khazanah Khurasan. Posisi di kaki pegunungan menjadikan Ghazni persinggahan penting antara Kabul dan dataran India.',
        ],
      },
      {
        h: 'Sufi Khurasan dan Jalur ke India',
        p: [
          'Dalam khazanah sufi, Ghazni dikenang sebagai kampung Hakim Sana\'i, penyair sufi awal abad ke-12 yang karyanya menjadi rujukan tasawuf berbahasa Persi. Lingkungan sufi Khurasan dengan khanaqah dan pengajian-nya berkejayaan di kawasan ini sebelum era Mongol. Dari Ghazni, jalur sufi dan ilmu mengalir ke Multan dan Uch Sharif di Punjab serta ke Naisabur dan Balkh di Khurasan. Dalam peta 165.web.id, Ghazni menjadi simpul Afghanistan tenggara pada jalur tarekat antara Iran dan India.',
        ],
      },
    ],
    related: ['balkh', 'kabul', 'naisabur', 'multan'],
  },
  {
    slug: 'ghijduvan',
    kind: 'atlas',
    title: 'Ghijduvan',
    category: 'Asia Tengah & Selatan',
    summary: 'Ghijduvan, kota kerajinan dekat Bukhara; kampung Khwaja Abd al-Khaliq al-Ghijduwani penyusun kaidah awal silsilah Naqsyabandiyah.',
    facts: [
      { label: 'Wilayah', value: 'Provinsi Bukhara, Asia Tengah, kini Uzbekistan' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kampung Khwaja Abd al-Khaliq al-Ghijduwani; kaidah-kaidahnya menjadi inti sebelas kaidah Naqsyabandiyah' },
      { label: 'Jalur terhubung', value: 'Bukhara, Samarqand, Balkh, Merv' },
      { label: 'Kini', value: 'Kota kerajinan gerabah terkenal di Provinsi Bukhara' },
    ],
    body: [
      {
        h: 'Kota di Lintasan Bukhara',
        p: [
          'Ghijduvan adalah kota kecil yang berjarak sekitar empat puluh kilometer di sebelah barat daya Bukhara. Kota ini dikenal sebagai pusat kerajinan gerabah yang khas dan berakar panjang pada jalur sutra. Kedudukannya yang dekat dengan Bukhara menjadikan Ghijduvan bagian dari kawasan yang sama dalam sejarah ilmu dan tarekat Mawarannahr. Sebagai kota lama, ia menyimpan lingkungan kampung-kampung yang terhubung dengan riwayat para khwaja.',
        ],
      },
      {
        h: 'Kaidah Ghijduwani',
        p: [
          'Khwaja Abd al-Khaliq al-Ghijduwani adalah tokoh silsilah Khwajagan pada abad ke-12 yang menurut riwayat silsilah menerima tuntunan dari Yusuf al-Hamadani. Padanya dihubungkan delapan kaidah praktik tarekat, di antaranya yad kard yang berarti mengingat, baz gasht kembali ke hati, nigah dasht menjaga hati, yad dasht mengingat terus, hush dar dam menjaga napas, safar dar watan safar di tanah air, dan khalwat dar anjuman sepi di tengah keramaian. Tiga kaidah lain kemudian ditambahkan pada era Baha\'uddin Naqsyaband sehingga menjadi sebelas kaidah yang dikenal jamaah Naqsyabandiyah hingga kini. Dengan demikian, Ghijduvan menjadi salah satu kampung paling penting dalam sejarah praktik tarekat ini.',
        ],
      },
    ],
    related: ['bukhara', 'samarqand', 'balkh', 'merv'],
  },
  {
    slug: 'haram-baitullah',
    kind: 'atlas',
    title: 'Haram Baitullah',
    category: 'Timur Tengah',
    summary: 'Haram Baitullah, Masjidil Haram di Makkah; qiblat umat Islam dan pusat majelis dzikir serta ijazah tarekat sepanjang sejarah.',
    facts: [
      { label: 'Wilayah', value: 'Kota Makkah, Hijaz, Arab Saudi' },
      { label: 'Peran dalam sejarah tarekat', value: 'Qiblat seluruh umat; tempat banyak mursyid menerima ijazah; majelis dzikir riblah di sekitar Haram' },
      { label: 'Jalur terhubung', value: 'Makkah, Madinah, Thaif, Tasikmalaya' },
      { label: 'Kini', value: 'Masjid terbesar di dunia dengan perluasan yang berkelanjutan' },
    ],
    body: [
      {
        h: 'Qiblat Umat Islam',
        p: [
          'Masjidil Haram adalah masjid yang mengelilingi Ka\'bah di Makkah, arah qiblat seluruh umat Islam di dunia. Ia menjadi tujuan haji dan umrah dengan kapasitas jutaan jamaah setelah berbagai tahap perluasan. Dalam ajaran Islam, bangunan ini dihubungkan dengan perintah pembangunan oleh Nabi Ibrahim dan Ismail alaihima al-salam. Tawaf, salat, dan doa yang berputar di sekelilingnya menjadikan Haram pusat kehidupan rohani umat.',
        ],
      },
      {
        h: 'Ijazah dan Riblah di Sekitar Haram',
        p: [
          'Bagi jamaah tarekat, Haram Baitullah memiliki kedudukan khusus sebagai tempat bertemunya para murabbi dari berbagai belahan dunia. Banyak silsilah tarekat Nusantara mencatat mursyid yang menerima ijazah di Makkah, dan dalam riwayat tarekat, majelis dzikir di sekitar Haram menjadi tempat menguatnya sanad. Dalam tradisi TQN, majelis dzikir disebut riblah, sehingga lingkungan Haram dikenal sebagai riblah Makkah. Jamaah Nusantara yang berlabuh di Makkah turut menjaga majelis dzikir di lingkungan tempat tinggal mereka di sekitar kota. Hubungan Makkah dengan pusat tarekat Nusantara tampak pada silsilah yang menyebut ulama Hijaz sebagai pemberi ijazah kepada ulama Nusantara.',
        ],
      },
    ],
    related: ['makkah', 'madinah', 'taif', 'tasikmalaya'],
  },
  {
    slug: 'hebron',
    kind: 'atlas',
    title: 'Hebron',
    category: 'Timur Tengah',
    summary: 'Hebron atau Al-Khalil, kota di Tepi Barat yang menurut tradisi menjadi tempat persemayaman Nabi Ibrahim alaihissalam.',
    facts: [
      { label: 'Wilayah', value: 'Tepi Barat, Palestina, di selatan Yerusalem' },
      { label: 'Peran dalam sejarah tarekat', value: 'Tempat suci Nabi Ibrahim dalam tradisi Islam; kota ziarah dengan lingkungan zawiyah era Mamluk dan Ottoman' },
      { label: 'Jalur terhubung', value: 'Madinah, Damaskus, Aleppo, Makkah' },
      { label: 'Kini', value: 'Kota Palestina dengan situs Ibrahimi yang terpelihara' },
    ],
    body: [
      {
        h: 'Kota Al-Khalil',
        p: [
          'Hebron disebut Al-Khalil dalam tradisi Islam, nama yang berarti sahabat, karena melekat pada gelar Nabi Ibrahim sebagai khalilullah. Di kota ini menurut tradisi berdiri situs makam Nabi Ibrahim beserta keluarganya, yang pada masa kini dikenal sebagai Masjid Ibrahimi. Kota tua Hebron menyimpan bangunan Mamluk dan Ottoman, termasuk lingkungan zawiyah yang menaungi ahli zuhud di sekitar situs suci tersebut. Sebagai kota di Tepi Barat, Hebron hidup dengan penduduk Palestina dan kegiatan keagamaan yang padat.',
        ],
      },
      {
        h: 'Ziarah dan Kehidupan Sufi',
        p: [
          'Ziarah ke makam Nabi Ibrahim termasuk tradisi yang panjang dalam kehidupan Muslim Syam. Pada era Mamluk dan Ottoman, pemerintah mendirikan madrasah, masjid, dan zawiyah di sekeliling situs suci, menjadikan Hebron salah satu pusat ziarah wilayah. Situs Ibrahimi kini terbagi antara ruang salat Muslim dan ruang ibadah Yahudi, situasi yang menjadi bagian dari gejolak wilayah tersebut. Dalam peta 165.web.id, Hebron menjadi simpul Syam selatan yang menyambung Madinah, Damaskus, dan Aleppo.',
        ],
      },
    ],
    related: ['madinah', 'damaskus', 'aleppo', 'makkah'],
  },
  {
    slug: 'jayapura',
    kind: 'atlas',
    title: 'Jayapura',
    category: 'Nusantara',
    summary: 'Jayapura, ibu kota Papua yang menjadi simpul majelis dzikir TQN di timur Nusantara, bertemu masyarakat lokal dan pendatang multikultural.',
    facts: [
      { label: 'Wilayah', value: 'Pantai utara Papua, timur Nusantara' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul majelis dzikir TQN di Papua; titik temu jamaah pendatang dan masyarakat setempat' },
      { label: 'Jalur terhubung', value: 'Manado, Bandung, Tasikmalaya, Makkah' },
      { label: 'Kini', value: 'Kota dengan masjid besar dan majelis dzikir yang aktif' },
    ],
    body: [
      {
        h: 'Islam di Tanah Papua',
        p: [
          'Kehadiran Islam di Papua berakar pada hubungan kawasan timur Nusantara, khususnya pengaruh Kesultanan Tidore di Maluku yang sejak lama berhubungan dengan pesisir Papua. Kota Jayapura sendiri berkembang sebagai pusat administrasi dan perdagangan pada masa Hindia Belanda, lalu menjadi ibu kota provinsi Papua. Masyarakatnya bersifat multikultural dengan pendatang dari berbagai pulau yang berdampingan dengan masyarakat lokal. Dalam lingkungan semacam itu, masjid dan majelis keagamaan menjadi ruang bertemunya berbagai latar belakang.',
        ],
      },
      {
        h: 'Majelis TQN di Jayapura',
        p: [
          'Majelis dzikir TQN di Jayapura melayani jamaah dari komunitas pendatang dan masyarakat setempat. Kegiatannya mengikuti pola riblah pada umumnya: majelis dzikir terjadwal, pengajian adab, dan silaturahmi dengan simpul-simpul lain di timur Indonesia. Silaturahmi jamaah di kawasan ini berlangsung terjadwal dan menyesuaikan keberagaman bahasa serta latar belakang muridnya. Jarak yang jauh dari pusat tarekat di Jawa menjadikan komunikasi antarjamaah bergantung pada murabbi setempat dan jaringan lintas wilayah. 165.web.id menyajikan Jayapura secara umum dan tidak mencantumkan detail majelis yang tidak dapat diverifikasi.',
        ],
      },
    ],
    related: ['manado', 'bandung', 'tasikmalaya', 'makkah'],
  },
  {
    slug: 'jombang',
    kind: 'atlas',
    title: 'Jombang',
    category: 'Nusantara',
    summary: 'Jombang, kota santri di Jawa Timur; rumah TQN Cukir yang dalam riwayat tarekat dilekatkan pada KH Kadzim Asnawi.',
    facts: [
      { label: 'Wilayah', value: 'Jawa Timur, di antara Surabaya dan Kediri' },
      { label: 'Peran dalam sejarah tarekat', value: 'Rumah TQN Cukir; dalam riwayat tarekat, KH Kadzim Asnawi tokoh mursyid yang melayani jamaah Jawa Timur' },
      { label: 'Jalur terhubung', value: 'Malang, Probolinggo, Banyumas, Tasikmalaya' },
      { label: 'Kini', value: 'Pesantren Cukir tetap melayani jamaah TQN' },
    ],
    body: [
      {
        h: 'Kota Santri',
        p: [
          'Jombang dikenal luas sebagai kota santri karena padatnya pesantren di wilayah ini. Pesantren-pesantren besar menjadikan Jombang pusat pendidikan Islam yang menarik santri dari berbagai daerah. Budaya pesantren yang kuat itu turut menjadi lingkungan subur bagi kehidupan tarekat. Majelis dzikir dan pengajian kitab kuning berjalan berdampingan dalam kehidupan keagamaan kota ini.',
        ],
      },
      {
        h: 'TQN Cukir',
        p: [
          'TQN Cukir adalah salah satu cabang TQN yang paling dikenal di Jawa Timur, berpusat di Pesantren Cukir di Jombang. Dalam riwayat tarekat, nama KH Kadzim Asnawi melekat sebagai mursyid yang melayani jamaah besar dan membentuk jejaring murid di banyak wilayah. Kegiatan jamaah berlangsung padat dengan kunjungan murid dari berbagai daerah yang datang menziarahi pesantren serta mengikuti riblah dan pengajian. Kegiatan jamaah Cukir berbentuk majelis dzikir, pengajian adab, dan latihan zikir berpasangan yang dikenal dalam cabang ini. Dalam peta 165.web.id, Jombang menjadi simpul tarekat Jawa Timur yang menyambung Malang, Probolinggo, dan jalur menuju Priangan.',
        ],
      },
    ],
    related: ['malang', 'probolinggo', 'banyumas', 'tasikmalaya'],
  },
  {
    slug: 'kabul',
    kind: 'atlas',
    title: 'Kabul',
    category: 'Asia Tengah & Selatan',
    summary: 'Kabul, ibu kota Afghanistan di jalur Hindu Kush yang menyambung Khurasan dengan India; lingkungan khanaqah dan silsilah sufi.',
    facts: [
      { label: 'Wilayah', value: 'Afghanistan timur, lembah Sungai Kabul' },
      { label: 'Peran dalam sejarah tarekat', value: 'Persimpangan Khurasan dan India; lingkungan khanaqah dan silsilah sufi Afghanistan' },
      { label: 'Jalur terhubung', value: 'Balkh, Ghazni, Delhi, Bukhara' },
      { label: 'Kini', value: 'Ibu kota Afghanistan' },
    ],
    body: [
      {
        h: 'Lembah di Jalur Hindu Kush',
        p: [
          'Kabul terletak di lembah pegunungan Hindu Kush yang menjadikannya pintu antara Khurasan dan India. Sejarahnya panjang sebagai kota dagang dan tempat singgah para perantau ilmu. Pada era Babur pada awal abad ke-16, Kabul menjadi basis dinasti Mughal, dan Babur dimakamkan di Taman Babur yang terpelihara hingga kini. Posisi strategis ini membuat lingkungan keagamaan kota terus menerima arus ulama dari berbagai arah.',
        ],
      },
      {
        h: 'Khanaqah dan Silsilah Afghanistan',
        p: [
          'Afghanistan menyimpan khanaqah dan silsilah sufi yang berhubungan dengan jalur Khurasan dan Asia Tengah. Silsilah Khwajagan dan Naqsyabandiyah melewati wilayah ini dalam perjalanan ilmu antara Bukhara, Balkh, dan India. Nama-nama khwaja dan ulama pengembara ilmu sering singgah di lembah ini sebelum meneruskan perjalanan menuju India atau Khurasan. Kehidupan tarekat di Kabul berlangsung dalam bentuk khanaqah, majelis dzikir, dan pengajian di lingkungan pesantren. Perang yang panjang pada masa kini banyak menggerus kelembagaan tersebut, namun jejaring jamaah tetap hidup di tengah komunitas Muslim kota.',
        ],
      },
    ],
    related: ['balkh', 'ghazni', 'delhi', 'bukhara'],
  },
  {
    slug: 'kaduparasi',
    kind: 'atlas',
    title: 'Kaduparasi',
    category: 'Nusantara',
    summary: 'Kaduparasi, kampung di kawasan Tasikmalaya yang dikenal dalam jejaring jamaah sebagai simpul majelis dzikir TQN lingkungan Priangan.',
    facts: [
      { label: 'Wilayah', value: 'Kawasan Tasikmalaya, Jawa Barat' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul majelis dzikir TQN di lingkungan pusat tarekat Tasikmalaya' },
      { label: 'Jalur terhubung', value: 'Tasikmalaya, Singaparna, Panjalu, Pamijahan' },
      { label: 'Kini', value: 'Kampung dengan majelis dzikir jamaah setempat' },
    ],
    body: [
      {
        h: 'Kampung di Lingkungan Pusat Tarekat',
        p: [
          'Kaduparasi adalah kampung di kawasan Tasikmalaya, wilayah Priangan Timur yang menjadi jantung TQN Qodiriyah Naqsabandiyah di Nusantara. Lingkungan Tasikmalaya menyimpan pusat tarekat seperti Suryalaya di Panjalu dan kompleks ziarah Pamijahan, sehingga kampung-kampung di sekitarnya tumbuh sebagai simpul majelis. Dalam jejaring jamaah, nama Kaduparasi disebut sebagai salah satu tempat berkumpulnya jamaah dzikir. Jejaring majelis kampung semacam ini menuntun jamaah baru melalui pengajian adab sebelum mereka mengikuti riblah di pusat tarekat. Pola kegiatannya mengikuti tradisi TQN: pengajian adab, riblah, dan silaturahmi antar simpul.',
        ],
      },
      {
        h: 'Kejujuran dalam Menyajikan Simpul',
        p: [
          'Atlas 165 menyajikan simpul kampung seperti Kaduparasi dengan hati-hati. Dokumentasi publik mengenai majelis-majelis kampung sering terbatas, sehingga halaman ini tidak mencantumkan nama tokoh, tanggal, atau alamat yang tidak dapat diverifikasi. Pembaca yang menelusuri sejarah majelis di sini disarankan berhubungan langsung dengan jamaah dan pengurus setempat. Cara ini menjaga kejujuran atlas sekaligus menghormati kehidupan majelis yang tidak semuanya tercatat secara tertulis.',
        ],
      },
    ],
    related: ['tasikmalaya', 'singaparna', 'panjalu', 'pamijahan'],
  },
  {
    slug: 'kano',
    kind: 'atlas',
    title: 'Kano',
    category: 'Afrika & Eropa',
    summary: 'Kano, kota tua Hausa di Nigeria utara yang menjadi pusat tarekat Qadiriyah dan Tijaniyah di Afrika Barat.',
    facts: [
      { label: 'Wilayah', value: 'Nigeria utara, kawasan Sahel' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat tarekat Qadiriyah dan Tijaniyah di Afrika Barat' },
      { label: 'Jalur terhubung', value: 'Timbuktu, Fez, Makkah, Damaskus' },
      { label: 'Kini', value: 'Kota besar Muslim dengan masjid agung yang hidup' },
    ],
    body: [
      {
        h: 'Kota Tua Hausa',
        p: [
          'Kano adalah salah satu kota tua di kawasan Hausa, Nigeria utara, dengan tembok kota dan pasar yang sejak lama menjadi simpul dagang trans-Sahara. Perdagangan garam, kulit, dan kain menghubungkan Kano dengan Afrika Utara dan Timur Tengah sejak berabad-abad lalu. Islam masuk dan berakar kuat di kawasan ini, menjadikan Kano salah satu pusat Muslim terbesar di Afrika Barat. Masjid agung dan lingkungan pengajian tradisional menandai kehidupan keagamaan kotanya.',
        ],
      },
      {
        h: 'Tarekat di Afrika Barat',
        p: [
          'Dalam sejarah tarekat Afrika Barat, Qadiriyah dan Tijaniyah adalah dua silsilah yang paling luas kehadirannya. Qadiriyah melekat pada tradisi kesultanan Sokoto di dekatnya, sementara pada abad ke-20 pengajaran Qadiriyah di Kano berkembang pesat di bawah ulama setempat dan menjangkau jamaah besar. Majelis dzikir, maulid, dan pengajian kitab sufi berlangsung dalam bentuk kelembagaan yang kuat di kota ini. Kegiatan maulid besar menjadi ajang tahunan yang mengumpulkan jamaah dari kota dan desa di sekitar Kano. Dalam peta 165.web.id, Kano menyambung Timbuktu dan Fez dalam jalur tarekat Afrika Barat menuju Makkah.',
        ],
      },
    ],
    related: ['timbuktu', 'fez', 'makkah', 'damaskus'],
  },
  {
    slug: 'karawang',
    kind: 'atlas',
    title: 'Karawang',
    category: 'Nusantara',
    summary: 'Karawang, kawasan pesisir Jawa Barat dengan jejaring TQN yang dalam penyebutan jamaah berhubungan dengan Syekh Aab dan Ponpes Sutajaya.',
    facts: [
      { label: 'Wilayah', value: 'Pesisir utara Jawa Barat' },
      { label: 'Peran dalam sejarah tarekat', value: 'Jejaring majelis TQN Karawang; penyebutan jamaah menghubungkannya dengan Syekh Aab dan Pesantren Sutajaya' },
      { label: 'Jalur terhubung', value: 'Bandung, Banten, Tasikmalaya, Singaparna' },
      { label: 'Kini', value: 'Majelis dzikir TQN aktif di berbagai titik kawasan' },
    ],
    body: [
      {
        h: 'Pesisir Utara Priangan',
        p: [
          'Karawang adalah kawasan pesisir utara Jawa Barat yang dikenal sebagai lumbung padi Priangan. Letaknya di jalur pantai utara menjadikannya kawasan lalu lintas orang dan ilmu antara Banten, Jakarta, dan Priangan. Sejarah keagamaan kawasan ini berakar pada pesantren dan kampung-kampung pesantren yang menyambung dengan jejaring keilmuan Jawa Barat. Kedekatan dengan wilayah Banten menjadikan tradisi tarekat Karawang berhubungan dengan lingkungan ulama Banten.',
        ],
      },
      {
        h: 'Jejaring TQN Karawang',
        p: [
          'Dalam penyebutan yang beredar di kalangan jamaah, jejaring TQN Karawang berhubungan dengan tokoh yang disebut Syekh Aab serta Pesantren Sutajaya. 165.web.id menyajikan nama-nama ini sebagaimana disebut jamaah, tanpa menambahkan detail tanggal atau alamat yang tidak dapat diverifikasi. Majelis dzikir di kawasan Karawang berlangsung di masjid dan mushala dengan pola riblah yang berlaku dalam TQN. Silaturahmi antar majelis di pesisir utara ini menjaga keberlanjutan amalan jamaah yang tersebar di kampung-kampung Karawang. Pembaca yang menelusuri lebih jauh disarankan berhubungan langsung dengan pengurus majelis setempat.',
        ],
      },
    ],
    related: ['bandung', 'banten', 'tasikmalaya', 'singaparna'],
  },
  {
    slug: 'kashgar',
    kind: 'atlas',
    title: 'Kashgar',
    category: 'Asia Tengah & Selatan',
    summary: 'Kashgar, oasis di Xinjiang pada jalur sutra yang menjadi simpul penyebaran keluarga khoja berpaut Naqsyabandiyah di Cekungan Tarim.',
    facts: [
      { label: 'Wilayah', value: 'Cekungan Tarim, Xinjiang, kini bagian dari Tiongkok' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul jalur tarekat di Tarim; keluarga khoja Naqsyabandiyah berpengaruh pada abad ke-16 dan ke-17' },
      { label: 'Jalur terhubung', value: 'Bukhara, Samarqand, Delhi, Kabul' },
      { label: 'Kini', value: 'Kota tua Kashgar dengan situs makam Afaq Khoja' },
    ],
    body: [
      {
        h: 'Oasis di Jalur Sutra',
        p: [
          'Kashgar adalah oasis besar di tepi barat Cekungan Tarim, titik temu jalur sutra yang menuju India, Persia, dan Asia Tengah. Kota ini menjadi pusat keislaman di kawasan Xinjiang dengan masjid Id Kah yang besar dan kota tua yang khas. Perdagangan membawa ulama dan ilmu bersama saudagar melintasi oasis-oasis Tarim. Karakter Kashgar sebagai kota tua Muslim terus hidup meski kawasan ini mengalami banyak perubahan pada masa kini.',
        ],
      },
      {
        h: 'Khoja dan Jalur Tarekat Tarim',
        p: [
          'Dalam sejarah tarekat Tarim, pengaruh jalur Yasawiyyah dan Naqsyabandiyah masuk dari Asia Tengah ke oasis-oasis Xinjiang. Pada abad ke-16, keturunan Makhdum-i A\'zam, khwaja Naqsyabandiyah dari Bukhara, membangun kedudukan keagamaan yang kuat di kawasan ini dan dikenal sebagai keluarga khoja. Makam Afaq Khoja di dekat Kashgar menjadi situs terkenal yang menandai era tersebut. Tekke dan majelis dzikir menjadi bagian kehidupan Muslim Tarim hingga perubahan besar pada abad ke-20. Perjalanan ulama antara Bukhara dan Tarim menjadikan oasis ini persinggahan penting dalam peta sanad tarekat Asia Tengah.',
        ],
      },
    ],
    related: ['bukhara', 'samarqand', 'delhi', 'kabul'],
  },
  {
    slug: 'kuala-lumpur',
    kind: 'atlas',
    title: 'Kuala Lumpur',
    category: 'Simpul Jamaah Global',
    summary: 'Kuala Lumpur, ibu kota Malaysia dengan komunitas jamaah TQN yang berhubungan dengan silsilah Nusantara dan majelis dzikir aktif.',
    facts: [
      { label: 'Wilayah', value: 'Malaysia Semenanjung, lembah Sungai Klang' },
      { label: 'Peran dalam sejarah tarekat', value: 'Rumah jamaah TQN Malaysia; majelis dzikir berhubungan dengan pusat tarekat Indonesia' },
      { label: 'Jalur terhubung', value: 'Singapura, Brunei, Patani, Tasikmalaya' },
      { label: 'Kini', value: 'Metropolis Muslim dengan masjid besar dan majelis tarekat' },
    ],
    body: [
      {
        h: 'Metropolis di Lembah Klang',
        p: [
          'Kuala Lumpur berkembang dari kawasan pertambangan timah pada abad ke-19 menjadi ibu kota Malaysia yang besar. Populasi Muslimnya mencakup komunitas Melayu serta pendatang dari seluruh dunia, menjadikan kota ini hidup dengan masjid, surau, dan majelis keagamaan. Kelembagaan keislaman Malaysia yang kuat menaungi kegiatan dakwah dan pengajian di tingkat negara dan komunitas. Sebagai pusat kawasan Melayu, Kuala Lumpur terhubung langsung dengan sejarah keilmuan Patani, Sumatera, dan Jawa.',
        ],
      },
      {
        h: 'Jamaah TQN di Malaysia',
        p: [
          'Jamaah TQN di Kuala Lumpur berada dalam komunitas Melayu yang berhubungan dengan silsilah tarekat Nusantara. Arus jamaah, ulama, dan ijazah mengalir dua arah antara Malaysia dan pusat-pusat tarekat di Indonesia sejak lama. Majelis dzikir berlangsung di masjid, surau, dan rumah jamaah mengikuti pola riblah. Majelis di ibu kota ini menaungi murid dari beragam latar pekerjaan serta mahasiswa yang belajar di Malaysia. 165.web.id menyajikan simpul ini secara umum karena detail kelembagaan majelis Malaysia tidak semuanya terdokumentasi secara publik.',
        ],
      },
    ],
    related: ['singapura', 'brunei', 'patani', 'tasikmalaya'],
  },
  {
    slug: 'labuan',
    kind: 'atlas',
    title: 'Labuan',
    category: 'Simpul Jamaah Global',
    summary: 'Labuan, wilayah federal Malaysia di lepas pantai Kalimantan; rumah komunitas jamaah TQN di kalangan masyarakat pulau.',
    facts: [
      { label: 'Wilayah', value: 'Pulau di lepas pantai Kalimantan, wilayah federal Malaysia' },
      { label: 'Peran dalam sejarah tarekat', value: 'Komunitas jamaah TQN di kalangan masyarakat pulau dan pekerja perantau Nusantara' },
      { label: 'Jalur terhubung', value: 'Brunei, Kuala Lumpur, Banjarmasin, Singapura' },
      { label: 'Kini', value: 'Kawasan perdagangan bebas dengan kehidupan masjid yang aktif' },
    ],
    body: [
      {
        h: 'Pulau di Selat Brunei',
        p: [
          'Labuan adalah gugusan pulau di lepas pantai barat Kalimantan yang berstatus wilayah federal Malaysia. Sejarahnya berlapis: masa dagang kerajaan pulau, masa koloni bebas Inggris, masa pendudukan pada Perang Dunia II, dan masa kini sebagai kawasan perdagangan bebas. Penduduknya mencakup komunitas Melayu, Tionghoa, dan pekerja perantau dari berbagai wilayah Nusantara. Masjid-masjid pulau menjadi pusat kehidupan Muslim di tengah aktivitas ekonomi yang padat.',
        ],
      },
      {
        h: 'Jamaah TQN di Pulau',
        p: [
          'Komunitas Muslim di Labuan mencakup perantau dan keluarga yang berhubungan dengan jejaring tarekat Nusantara. Majelis dzikir TQN di pulau ini berlangsung dalam skala kecil mengikuti pola riblah, dengan silaturahmi ke simpul-simpul di Kalimantan dan Semenanjung Malaya. Jamaah pulau ini mengikuti pengajian adab dan amalan dzikir dengan bimbingan murabbi yang berkunjung dari simpul tetangga. 165.web.id menyajikan Labuan secara umum, tanpa mencantumkan detail majelis yang tidak dapat diverifikasi. Posisinya yang dekat dengan Brunei menjadikan Labuan bagian dari jejaring jamaah pesisir Kalimantan utara.',
        ],
      },
    ],
    related: ['brunei', 'kuala-lumpur', 'banjarmasin', 'singapura'],
  },
  {
    slug: 'madinah',
    kind: 'atlas',
    title: 'Madinah',
    category: 'Timur Tengah',
    summary: 'Madinah, kota hijrah Nabi saw; rumah Masjid Nabawi, Sahifatul Madinah, dan generasi awal ulama yang menjadi akar adab majelis Muslim.',
    facts: [
      { label: 'Wilayah', value: 'Hijaz, Arab Saudi' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kota hijrah dan piagam Nabi; kampung Imam Malik dan ulama awal yang menjadi rujukan adab dan ilmu tarekat' },
      { label: 'Jalur terhubung', value: 'Makkah, Thaif, Damaskus, Haram Baitullah' },
      { label: 'Kini', value: 'Kota ziarah dengan Masjid Nabawi yang terus diperluas' },
    ],
    body: [
      {
        h: 'Yatsrib Menjadi Madinah',
        p: [
          'Madinah sebelumnya bernama Yatsrib, lalu menjadi Madinah an-Nabi setelah hijrah Nabi Muhammad saw pada tahun 622. Di sini dibentuk masyarakat Muslim pertama yang tertata dalam dokumen yang dikenal sebagai Sahifatul Madinah atau Piagam Madinah, memuat kesepakatan berdampingan antara komunitas Muslim, Yahudi, dan suku-suku Arab. Peristiwa ini menjadikan Madinah model masyarakat majelis Muslim pertama: ibadah, musyawarah, dan persaudaraan yang tertata. Bagi kehidupan tarekat, model ini menjadi rujukan adab majelis dan kebersamaan jamaah.',
        ],
      },
      {
        h: 'Kota Ilmu dan Adab',
        p: [
          'Madinah menjadi kampung generasi awal ulama, dan yang paling besar pengaruhnya adalah Imam Malik bin Anas dengan kitab Muwatta-nya. Tradisi ilmu hadits dan fikih kota ini menyebar ke seluruh dunia Islam bersama jamaah haji yang belajar di Hijaz. Makam Baqi menjadi tempat persemayaman banyak sahabat dan keluarga Nabi, menjadi tujuan ziarah jamaah. Dalam peta 165.web.id, Madinah berdampingan dengan Makkah sebagai kota ilmu yang menjadi rujukan adab dan sanad tarekat Nusantara.',
        ],
      },
    ],
    related: ['makkah', 'taif', 'damaskus', 'haram-baitullah'],
  },
  {
    slug: 'makkah',
    kind: 'atlas',
    title: 'Makkah',
    category: 'Timur Tengah',
    summary: 'Makkah, kota kelahiran Nabi saw dan pusat riblah: majelis dzikir serta sanad ijazah tarekat di sekitar Masjidil Haram.',
    facts: [
      { label: 'Wilayah', value: 'Hijaz, Arab Saudi' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat riblah dan sanad tarekat; banyak mursyid Nusantara menerima ijazah di Makkah' },
      { label: 'Jalur terhubung', value: 'Haram Baitullah, Madinah, Thaif, Sambas' },
      { label: 'Kini', value: 'Kota ibadah internasional dengan perluasan masjid berkelanjutan' },
    ],
    body: [
      {
        h: 'Lembah Tempat Ka\'bah',
        p: [
          'Makkah adalah lembah di Hijaz yang menjadi kota kelahiran Nabi Muhammad saw dan lokasi Ka\'bah. Ia menjadi kiblat haji tahunan yang mengumpulkan jutaan Muslim dari seluruh dunia. Arus jamaah haji setiap tahun membentuk komunitas ilmu sementara yang tinggal di sekitar masjid untuk belajar. Gua Hira di sekitar kota menjadi tempat awal peristiwa wahyu menurut riwayat sirah. Sejarah kota melekat pada perjalanan kenabian, pendirian masyarakat Madinah, dan kembalinya beliau ke Hijaz pada akhir hayat.',
        ],
      },
      {
        h: 'Riblah dan Sanad Tarekat',
        p: [
          'Sejak abad-abad lalu, Makkah menjadi tempat belajar jamaah haji yang menetap untuk ilmu, termasuk ulama Nusantara yang membentuk komunitas jawi di Hijaz. Di lingkungan inilah banyak mursyid tarekat menerima ijazah dan memperkuat sanadnya. Ulama Makkah abad ke-19 seperti Sayyid Ahmad Zaini Dahlan terkenal memberi ijazah Qadiriyah kepada ulama dari berbagai wilayah, dan riwayat tarekat Nusantara mencatat kaitan silsilah dengan Makkah. Dalam tradisi TQN, majelis dzikir disebut riblah, menjadikan Makkah sebagai pusat riblah dalam peta 165.web.id.',
        ],
      },
    ],
    related: ['haram-baitullah', 'madinah', 'taif', 'sambas'],
  },
  {
    slug: 'malang',
    kind: 'atlas',
    title: 'Malang',
    category: 'Nusantara',
    summary: 'Malang, kota dataran tinggi di Jawa Timur dengan majelis dzikir TQN yang berhubungan dengan jejaring TQN Cukir Jombang.',
    facts: [
      { label: 'Wilayah', value: 'Jawa Timur bagian selatan, dataran tinggi' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul majelis TQN di Jawa Timur; jejaring dengan pusat Cukir di Jombang' },
      { label: 'Jalur terhubung', value: 'Jombang, Probolinggo, Purworejo, Tasikmalaya' },
      { label: 'Kini', value: 'Kota pendidikan dengan pesantren dan majelis dzikir aktif' },
    ],
    body: [
      {
        h: 'Dataran Tinggi Jawa Timur',
        p: [
          'Malang terletak di dataran tinggi selatan Jawa Timur dengan sejarah yang menyimpan warisan Kanjuruhan dan Singasari. Iklimnya yang sejuk menjadikan Malang kota pendidikan dan peristirahatan, dengan sekolah, perguruan tinggi, dan pesantren yang padat. Masyarakatnya beragam, mencakup komunitas Jawa, Madura, dan Tengger di kawasan sekitarnya. Kepadatan kehidupan pendidikan ini menjadikan majelis keagamaan tumbuh di berbagai lingkungan. Lingkungan pesantren dan komunitas mahasiswa menjadi landasan kegiatan majelis dzikir di kota ini.',
        ],
      },
      {
        h: 'Majelis TQN di Malang',
        p: [
          'Majelis dzikir TQN di Malang berpaut pada jejaring tarekat Jawa Timur yang berpusat antara lain di Cukir, Jombang. Jamaah dari kota dan kampung sekitarnya berkumpul di masjid dan mushala mengikuti jadwal riblah. Kegiatan meliputi dzikir terpimpin, pengajian adab, dan silaturahmi antar simpul Jawa Timur. Jamaah mencakup mahasiswa, keluarga, dan pekerja yang menyesuaikan jadwal majelis dengan pendidikan serta pekerjaan sehari-hari. 165.web.id menyajikan Malang secara umum dan mengundang pembaca menelusuri detail majelis langsung kepada pengurus setempat.',
        ],
      },
    ],
    related: ['jombang', 'probolinggo', 'purworejo', 'tasikmalaya'],
  },
  {
    slug: 'manado',
    kind: 'atlas',
    title: 'Manado',
    category: 'Nusantara',
    summary: 'Manado, ibu kota Sulawesi Utara dengan majelis dzikir TQN yang menjadi tempat jamaah di timur Indonesia.',
    facts: [
      { label: 'Wilayah', value: 'Sulawesi Utara, pesisir utara Pulau Sulawesi' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul majelis TQN di Sulawesi Utara' },
      { label: 'Jalur terhubung', value: 'Jayapura, Banjarmasin, Tasikmalaya, Makkah' },
      { label: 'Kini', value: 'Kota pesisir dengan masjid dan majelis dzikir aktif' },
    ],
    body: [
      {
        h: 'Kota Plural di Sulawesi Utara',
        p: [
          'Manado adalah ibu kota Sulawesi Utara yang dikenal dengan komposisi penduduknya yang mayoritas beragama Kristen. Komunitas Muslim tetap hidup dengan masjid, mushala, dan kegiatan keagamaan yang aktif di tengah masyarakat yang plural. Kehidupan beragama di Manado menandai model berdampingan yang relatif terjaga di Indonesia timur. Komunitas Muslimnya bersifat majemuk, mencakup pendatang dari berbagai pulau dan masyarakat setempat. Kehadiran Islam di Sulawesi Utara berakar pada jalur dagang dan perantau yang menghubungkan kawasan ini dengan wilayah Muslim di Maluku dan Kalimantan.',
        ],
      },
      {
        h: 'Majelis TQN di Manado',
        p: [
          'Majelis dzikir TQN di Manado melayani komunitas Muslim yang beragam latar belakangnya. Kegiatan mengikuti pola riblah, dengan pengajian adab dan silaturahmi antarjamaah. Murabbi setempat menaungi jamaah yang tersebar di kota dan kawasan sekitarnya dengan jadwal yang menyesuaikan kehidupan perkotaan. Posisi Manado di timur Indonesia menjadikannya simpul yang menyambung Jayapura, kota-kota Kalimantan, dan pusat tarekat di Jawa. 165.web.id menyajikan Manado secara umum dan tidak mencantumkan detail majelis yang tidak dapat diverifikasi.',
        ],
      },
    ],
    related: ['jayapura', 'banjarmasin', 'tasikmalaya', 'makkah'],
  },
  {
    slug: 'medina-nabawi',
    kind: 'atlas',
    title: 'Medinah Nabawi',
    category: 'Timur Tengah',
    summary: 'Masjid Nabawi di Madinah; masjid yang dibangun Nabi saw dan menjadi teladan majelis Muslim pertama serta pusat ilmu dan adab jamaah.',
    facts: [
      { label: 'Wilayah', value: 'Madinah, Hijaz, Arab Saudi' },
      { label: 'Peran dalam sejarah tarekat', value: 'Model majelis keagamaan pertama; tempat para sahabat belajar; rujukan adab majelis dzikir' },
      { label: 'Jalur terhubung', value: 'Madinah, Makkah, Haram Baitullah, Thaif' },
      { label: 'Kini', value: 'Salah satu masjid terbesar dunia dengan kubah hijau ikonik' },
    ],
    body: [
      {
        h: 'Masjid yang Dibangun Nabi',
        p: [
          'Masjid Nabawi dibangun oleh Nabi Muhammad saw segera setelah tiba di Madinah pada tahun 622. Bangunan awalnya sederhana, berdinding batang kurma dan beratap pelepah, namun fungsinya sangat luas: tempat salat, pengajian, musyawarah, dan perlindungan masyarakat. Dari masjid inilah masyarakat Muslim pertama mengatur kehidupannya, menjadikannya teladan majelis keagamaan yang menjadi rujukan tradisi tarekat. Kehidupan para sahabat di sekitar masjid menjadi gambaran adab murid kepada guru.',
        ],
      },
      {
        h: 'Rawdah dan Perluasan',
        p: [
          'Ruang antara rumah Nabi dan mimbarnya dikenal sebagai rawdah yang dalam hadits disebut kebun di antara kebun-kebun surga. Kubah hijau yang ikonik hari ini dibangun pada era Ottoman abad ke-19 di lingkungan makam Nabi. Perluasan besar pada masa modern menjadikan Masjid Nabawi salah satu masjid terbesar di dunia dengan kapasitas jutaan jamaah. Perluasan dan pemeliharaan masjid berjalan berkesinambungan sepanjang era, menjaga keberlangsungan fungsi pengajian, salat, dan ziarah hingga masa kini. Bagi jamaah tarekat yang menziarahi Madinah, masjid ini menjadi pusat adab ziarah dan pengingat teladan majelis pertama.',
        ],
      },
    ],
    related: ['madinah', 'makkah', 'haram-baitullah', 'taif'],
  },
  {
    slug: 'merv',
    kind: 'atlas',
    title: 'Merv',
    category: 'Asia Tengah & Selatan',
    summary: 'Merv, oasis besar di Turkmenistan yang menjadi simpul ilmu dan khanaqah awal Khurasan sebelum kehancuran serangan Mongol abad ke-13.',
    facts: [
      { label: 'Wilayah', value: 'Kawasan Mary, Turkmenistan' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul awal kehidupan khanaqah Khurasan; kota ulama seperti Abdullah bin al-Mubarak' },
      { label: 'Jalur terhubung', value: 'Bukhara, Balkh, Naisabur, Ghijduvan' },
      { label: 'Kini', value: 'Situs arkeologi Warisan Dunia UNESCO' },
    ],
    body: [
      {
        h: 'Oasis Khurasan yang Besar',
        p: [
          'Merv adalah oasis besar di kawasan Mary, Turkmenistan, yang menjadi salah satu kota terpenting Khurasan. Pada era Seljuk, Sultan Sanjar menjadikan Merv pusat kekuasaan, dan kota ini berkembang dengan madrasah, perpustakaan, dan tradisi astronomi yang maju. Perpustakaan dan majelis pengajian di oasis ini menjadi rujukan para penuntut ilmu sebelum kota-kota Khurasan lain mengambil alih peran tersebut. Dalam ingatan ilmu awal, Merv dikenang sebagai kampung Abdullah bin al-Mubarak, ulama zuhud dan hadits abad ke-8. Lingkungan sufi kawasan sekitarnya juga menghasilkan tokoh awal seperti Abu Said Abu al-Khair.',
        ],
      },
      {
        h: 'Kejayaan dan Keruntuhan',
        p: [
          'Serangan Mongol tahun 1221 menghancurkan Merv secara menyeluruh, dan kota ini tidak kembali ke kejayaannya. Reruntuhan kota kuno kini menjadi situs arkeologi yang luas dan tercatat sebagai Warisan Dunia UNESCO. Kisah Merv memberi pelajaran penting bagi sejarah tarekat: sanad ilmu dan dzikir bertahan karena dipindahkan para ulama ke kota-kota lain. Dalam peta 165.web.id, Merv menjadi simpul Khurasan yang menyambung Bukhara, Balkh, dan Naisabur.',
        ],
      },
    ],
    related: ['bukhara', 'balkh', 'naisabur', 'ghijduvan'],
  },
  {
    slug: 'minangkabau-sumpur',
    kind: 'atlas',
    title: 'Minangkabau dan Sumpur Kudus',
    category: 'Nusantara',
    summary: 'Sumpur Kudus di Minangkabau, pusat TQN di Sumatera Barat yang meneruskan tradisi surau dan silsilah tarekat Minangkabau.',
    facts: [
      { label: 'Wilayah', value: 'Kabupaten Sijunjung, Sumatera Barat' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat TQN Minangkabau; penerus tradisi surau yang berakar dari era Syekh Burhanuddin Ulakan' },
      { label: 'Jalur terhubung', value: 'Palembang, Banjarmasin, Makkah, Tasikmalaya' },
      { label: 'Kini', value: 'Nagari dengan pesantren-surau dan majelis TQN aktif' },
    ],
    body: [
      {
        h: 'Surau dan Nagari Minangkabau',
        p: [
          'Kehidupan keagamaan Minangkabau berakar pada surau, lembaga pengajian kampung yang menjadi pusat ilmu dan dzikir di Sumatera Barat. Menurut catatan sejarah tarekat, Syekh Burhanuddin Ulakan pada abad ke-17 menerima ijazah dari Syekh Abdurrauf as-Singkili di Aceh dan membuka jalan tarekat di Minangkabau. Dari era itu tradisi surau dan tarekat berkembang di banyak nagari. Sumpur Kudus di Kabupaten Sijunjung dikenal sebagai salah satu nagari yang menjadi pusat kegiatan tarekat di Minangkabau.',
        ],
      },
      {
        h: 'Pusat TQN Minangkabau',
        p: [
          'Dalam penyebutan jamaah, Sumpur Kudus menjadi simpul pusat TQN di Sumatera Barat. Majelis dzikir berlangsung dalam lingkungan surau dan pesantren nagari, mengikuti pola pengajian adab serta riblah yang berlaku dalam TQN. Silaturahmi antar surau di kawasan nagari menjaga keberlanjutan majelis dzikir yang dilayani murabbi dari garis silsilah tarekat setempat. Kaitan dengan Makkah dan pusat tarekat Nusantara terjaga melalui sanad ijazah dan arus perantau ilmu. 165.web.id menyajikan Sumpur Kudus secara umum, tanpa menambahkan detail kelembagaan yang tidak terdokumentasi secara publik.',
        ],
      },
    ],
    related: ['palembang', 'banjarmasin', 'makkah', 'tasikmalaya'],
  },
  {
    slug: 'multan',
    kind: 'atlas',
    title: 'Multan',
    category: 'Asia Tengah & Selatan',
    summary: 'Multan, kota suci Punjab di Pakistan yang dikenal sebagai kota para wali dan pusat Syekh Baha\'ul Haq Zakariya.',
    facts: [
      { label: 'Wilayah', value: 'Punjab, Pakistan' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat Suhrawardiyah di anak benua; makam Baha\'ul Haq Zakariya; kota wali dan pengajian' },
      { label: 'Jalur terhubung', value: 'Uch Sharif, Delhi, Ghazni, Naisabur' },
      { label: 'Kini', value: 'Kota makam sufi di Pakistan dengan kegiatan urus yang hidup' },
    ],
    body: [
      {
        h: 'Kota para Wali',
        p: [
          'Multan adalah salah satu kota Muslim tertua di anak benua India yang berdiri di dataran Punjab. Kota ini dijuluki kota para wali karena padatnya makam sufi yang menjadi tempat ziarah. Iklimnya yang hangat dan pasar yang hidup menjadikan Multan kota dagang serta pengajian sejak era awal Islam di kawasan ini. Letaknya di jalur antara Iran dan India menjadikan Multan pintu arus ilmu dan tarekat ke anak benua. Perantauan ilmu antara Multan, Uch Sharif, dan Delhi menjadikan kawasan ini jantung pengajian Punjab sejak era awal Islam di anak benua.',
        ],
      },
      {
        h: 'Baha\'ul Haq Zakariya',
        p: [
          'Tokoh yang menandai Multan adalah Syekh Baha\'ul Haq Zakariya, ulama sufi abad ke-13 yang menyebarkan Suhrawardiyah di wilayah ini. Makamnya menjadi pusat ziarah dengan kegiatan urus tahunan yang mengumpulkan jamaah. Silsilah Suhrawardiyah dari Multan berhubungan dengan jaringan Uch Sharif dan Delhi, menjadikan Punjab selatan salah satu kawasan sufi terpenting anak benua. Dalam peta 165.web.id, Multan menyambung jalur tarekat antara Ghazni, Naisabur, dan India.',
        ],
      },
    ],
    related: ['uch-sharif', 'delhi', 'ghazni', 'naisabur'],
  },
  {
    slug: 'naisabur',
    kind: 'atlas',
    title: 'Naisabur',
    category: 'Asia Tengah & Selatan',
    summary: 'Naisabur, kota Khurasan yang menjadi kampung Imam Muslim dan Fariduddin Attar serta tempat pengajian Imam al-Ghazali.',
    facts: [
      { label: 'Wilayah', value: 'Khurasan, kini Iran timur laut' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kota ilmu sufi dan hadits; tempat belajar al-Ghazali; kampung Fariduddin Attar dan Imam Muslim' },
      { label: 'Jalur terhubung', value: 'Tus, Merv, Balkh, Ghazni' },
      { label: 'Kini', value: 'Kota di Iran dengan makam Attar yang menjadi tempat ziarah' },
    ],
    body: [
      {
        h: 'Ibu Kota Khurasan',
        p: [
          'Naisabur atau Nishapur adalah kota besar di Khurasan yang menjadi pusat pemerintahan dan ilmu pada abad-abad pertengahan. Dari kota ini lahir Imam Muslim, penyusun Sahih Muslim, serta penyair Umar Khayyam dan ahli hadits al-Hakim an-Naisaburi. Madrasah dan lingkungan pengajian menjadikan Naisabur tujuan para penuntut ilmu dari seluruh Khurasan. Lingkungan madrasah dan majelis hadits di kota ini menarik para penuntut ilmu dari Khurasan, India, hingga kota-kota Mawarannahr. Serangan Mongol tahun 1221 menghancurkan kota ini bersama Merv dan Balkh.',
        ],
      },
      {
        h: 'Attar dan al-Ghazali',
        p: [
          'Dalam khazanah sufi, Naisabur dikenang sebagai kampung Fariduddin Attar, penyair sufi penyusun Tadzkiratul Auliya yang makamnya menjadi tempat ziarah hingga kini. Imam al-Ghazali menempuh pengajian di Naisabur di bawah bimbingan Imam al-Juwaini sebelum perjalanan rohaninya yang terkenal. Kaitan Naisabur dengan Tus di dekatnya menjadikan kawasan ini jantung sufi Khurasan pada abad ke-11 dan ke-12. Dalam peta 165.web.id, Naisabur menyambung Tus, Merv, Balkh, dan jalur menuju Ghazni.',
        ],
      },
    ],
    related: ['tus', 'merv', 'balkh', 'ghazni'],
  },
  {
    slug: 'new-york',
    kind: 'atlas',
    title: 'New York',
    category: 'Simpul Jamaah Global',
    summary: 'New York, simpul jamaah TQN di Amerika Serikat; majelis dzikir komunitas Muslim Nusantara di tengah metropolis besar dunia.',
    facts: [
      { label: 'Wilayah', value: 'Pesisir timur Amerika Serikat' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul jamaah TQN di Amerika; majelis dzikir komunitas Muslim Indonesia dan dunia' },
      { label: 'Jalur terhubung', value: 'Rotterdam, Tasikmalaya, Makkah, Kuala Lumpur' },
      { label: 'Kini', value: 'Kota multikultural dengan masjid dan majelis lintas komunitas' },
    ],
    body: [
      {
        h: 'Metropolis Muslim',
        p: [
          'New York adalah metropolis terbesar Amerika Serikat dengan komunitas Muslim yang sangat beragam, mencakup imigran dari seluruh dunia dan Muslim Amerika yang lahir di sana. Masjid-masjid kota melayani berbagai bahasa dan tradisi, dari komunitas Arab, Afrika, Asia Selatan, hingga Asia Tenggara. Komunitas Indonesia di kawasan New York dan New Jersey menjadi salah satu lingkungan tempat majelis keagamaan Nusantara hidup. Karakter kota yang bergerak cepat menjadikan kegiatan majelis disesuaikan dengan jadwal kerja dan pendidikan jamaah.',
        ],
      },
      {
        h: 'Majelis TQN di Amerika',
        p: [
          'Jamaah TQN di New York berada di antara komunitas Muslim Indonesia yang berhubungan dengan pusat tarekat di Nusantara. Majelis dzikir berlangsung di rumah jamaah, masjid, dan ruang komunitas, dengan silaturahmi ke simpul-simpul Amerika dan Indonesia. Jadwal majelis menyesuaikan rutinitas kerja perkotaan, dengan kegiatan berpindah antara rumah jamaah dan ruang komunitas Muslim setempat. Jaringan digital turut menyambung jamaah yang tersebar di kota-kota Amerika dengan murabbi di Nusantara. 165.web.id menyajikan simpul ini secara umum dan tidak mencantumkan alamat majelis.',
        ],
      },
    ],
    related: ['roterdam', 'tasikmalaya', 'makkah', 'kuala-lumpur'],
  },
  {
    slug: 'palembang',
    kind: 'atlas',
    title: 'Palembang',
    category: 'Nusantara',
    summary: 'Palembang, kota Sungai Musi di Sumatera Selatan; kampung Syekh Abdus Shamad al-Palimbani dan simpul majelis TQN Sumatera selatan.',
    facts: [
      { label: 'Wilayah', value: 'Sumatera Selatan, bantaran Sungai Musi' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kampung Syekh Abdus Shamad al-Palimbani, pengaruh kitab jawi; simpul majelis TQN Sumatera Selatan' },
      { label: 'Jalur terhubung', value: 'Sumpur Kudus, Banjarmasin, Makkah, Demak' },
      { label: 'Kini', value: 'Kota besar Sumatera dengan pesantren dan majelis dzikir aktif' },
    ],
    body: [
      {
        h: 'Kota Sungai Musi',
        p: [
          'Palembang adalah kota tua di bantaran Sungai Musi yang menyimpan lapisan sejarah Sriwijaya sebelum era Islam. Pada abad ke-17 berdiri Kesultanan Palembang Darussalam yang menjadikan kota ini pusat keilmuan Melayu. Jembatan Ampera yang membentang di atas Musi menjadi wajah modern kota yang hidup di atas air. Budaya sungai, pasar terapung, dan kampung tepian menjadikan Palembang khas di antara kota-kota Sumatera.',
        ],
      },
      {
        h: 'Al-Palimbani dan Tarekat',
        p: [
          'Dalam sejarah sufi Nusantara, Palembang melekat pada nama Syekh Abdus Shamad al-Palimbani, ulama abad ke-18 yang menulis Sair as-Salikin, terjemahan Melayu dari sebagian Ihya Ulumuddin karya al-Ghazali. Karyanya menyebarkan ilmu akhlak dan tasawuf dalam bahasa Melayu ke seluruh kawasan kitab jawi. Tradisi tarekat di Sumatera Selatan berhubungan dengan jaringan Makkah dan pusat tarekat Nusantara. Pesantren dan majelis kota ini turut menjaga pengajian kitab yang menjadi dasar ilmu dan adab jamaah tarekat. Majelis TQN di Palembang berlangsung di masjid dan pesantren dengan pola riblah yang umum, dan 165.web.id menyajikannya secara umum tanpa detail yang tidak dapat diverifikasi.',
        ],
      },
    ],
    related: ['minangkabau-sumpur', 'banjarmasin', 'makkah', 'demak'],
  },
  {
    slug: 'pamijahan',
    kind: 'atlas',
    title: 'Pamijahan',
    category: 'Nusantara',
    summary: 'Pamijahan, kampung ziarah di Tasikmalaya tempat makam Syekh Abdul Muhyi, wali yang menyebarkan tarekat di Priangan Timur abad ke-17.',
    facts: [
      { label: 'Wilayah', value: 'Kawasan Tasikmalaya, Jawa Barat' },
      { label: 'Peran dalam sejarah tarekat', value: 'Makam Syekh Abdul Muhyi; pusat ziarah dan simpul awal tarekat di Tasikmalaya sejak abad ke-17' },
      { label: 'Jalur terhubung', value: 'Tasikmalaya, Panjalu, Singaparna, Kaduparasi' },
      { label: 'Kini', value: 'Kompleks ziarah yang dikunjungi jamaah dan peziarah' },
    ],
    body: [
      {
        h: 'Wali Tasikmalaya',
        p: [
          'Pamijahan adalah kampung di kawasan Tasikmalaya yang menjadi pusat ziarah Syekh Abdul Muhyi, tokoh yang dalam riwayat tarekat dan penelitian setempat disebut sebagai wali penyiar Islam dan tarekat di Priangan Timur pada abad ke-17. Kehidupannya menurut riwayat yang diwariskan melekat pada wilayah Sukapura dan lingkungan gunung di sekitar Tasikmalaya. Sebagai pusat ziarah, Pamijahan memiliki kompleks makam dengan lembaga penjaga yang menjalankan tradisi penghormatan kepada sang wali. Riwayat-riwayat tentang tokoh ini disajikan dengan penanda riwayat karena banyak bagiannya diwariskan secara lisan.',
        ],
      },
      {
        h: 'Ziarah dan Tradisi Pamijahan',
        p: [
          'Ziarah ke Pamijahan berlangsung sepanjang tahun dan memuncak pada tradisi tahunan yang mengumpulkan peziarah dari berbagai wilayah. Tradisi lisan kampung menyimpan riwayat perjalanan sang wali, pengajian, dan amalan yang beredar di lingkungan tarekat. Bagi jamaah TQN, Pamijahan menjadi simpul ingatan kepada generasi awal tarekat di Priangan sebelum era pesantren Suryalaya. Dalam peta 165.web.id, Pamijahan berdampingan dengan Panjalu dan Tasikmalaya sebagai tiga titik penting tarekat Tasikmalaya.',
        ],
      },
    ],
    related: ['tasikmalaya', 'panjalu', 'singaparna', 'kaduparasi'],
  },
  {
    slug: 'panjalu',
    kind: 'atlas',
    title: 'Panjalu',
    category: 'Nusantara',
    summary: 'Panjalu, kampung Pesantren Suryalaya di Tasikmalaya; salah satu pusat Tarekat Qodiriyah Naqsabandiyah terbesar di Nusantara.',
    facts: [
      { label: 'Wilayah', value: 'Kawasan Tasikmalaya, Jawa Barat' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kampung Pesantren Suryalaya, pusat TQN Qodiriyah Naqsabandiyah' },
      { label: 'Jalur terhubung', value: 'Tasikmalaya, Singaparna, Pamijahan, Kaduparasi' },
      { label: 'Kini', value: 'Pesantren Suryalaya melayani ribuan jamaah dari berbagai daerah' },
    ],
    body: [
      {
        h: 'Kampung Suryalaya',
        p: [
          'Panjalu adalah kampung di Kabupaten Tasikmalaya yang menjadi rumah Pesantren Suryalaya, salah satu pusat TQN terbesar di Nusantara. Menurut riwayat tarekat, TQN di Suryalaya berkembang pada akhir abad ke-19 hingga awal abad ke-20 melalui ikhtiar para kiai Panjalu, dengan nama Kiai Abdul Hamid melekat dalam catatan tarekat sebagai tokoh awalnya. Sejak era itu Suryalaya menjadi ibu tarekat yang menyebarkan ijazah ke banyak wilayah. Kehidupan kampung Panjalu menyatu dengan kegiatan pesantren, riblah, dan kunjungan jamaah.',
        ],
      },
      {
        h: 'Riblah dan Kegiatan Jamaah',
        p: [
          'Kegiatan jamaah TQN di Suryalaya berpusat pada riblah, majelis dzikir yang berlangsung secara terjadwal. Jamaah menerima amalan dzikir melalui ijazah yang tersambung dengan sanad Qadiriyah dan Naqsyabandiyah. Murid datang dari berbagai provinsi dan bahkan dari luar negeri, menjadikan Panjalu simpul utama peta TQN 165.web.id. Kunjungan jamaah dari berbagai provinsi berlangsung sepanjang tahun dan memuncak pada kegiatan riblah besar yang diadakan pesantren bersama murid-muridnya. Detail sejarah internal tarekat disajikan dengan penanda riwayat dan dapat ditelusuri langsung kepada pesantren.',
        ],
      },
    ],
    related: ['tasikmalaya', 'singaparna', 'pamijahan', 'kaduparasi'],
  },
  {
    slug: 'patani',
    kind: 'atlas',
    title: 'Patani',
    category: 'Simpul Jamaah Global',
    summary: 'Patani, kawasan Thailand selatan yang menjadi pusat kitab jawi dan pondok pesantren dunia Melayu.',
    facts: [
      { label: 'Wilayah', value: 'Thailand bagian selatan; sejarahnya melekat pada kesultanan Patani' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat kitab jawi; rumah ulama Fathani seperti Syekh Daud al-Fathani; lingkungan pondok Melayu' },
      { label: 'Jalur terhubung', value: 'Kuala Lumpur, Singapura, Makkah, Palembang' },
      { label: 'Kini', value: 'Kawasan pondok pesantren yang masih hidup di Thailand selatan' },
    ],
    body: [
      {
        h: 'Serambi Mekkah',
        p: [
          'Patani adalah kawasan di Thailand selatan yang dalam sejarah Melayu melekat pada kesultanan Patani, kerajaan Islam yang berjaya pada abad ke-16 hingga ke-18. Kawasan Melayu menjulukinya serambi Mekkah karena padatnya ulama dan pengajian yang lahir dari sana. Sistem pondok menjadi lembaga pendidikan khas Patani, menaungi santri dari Semenanjung, Sumatera, dan Kalimantan. Keilmuan Patani berhubungan erat dengan jaringan pondok di Semenanjung serta komunitas pelajar Melayu di Hijaz. Identitas Melayu-Muslim kawasan ini tetap hidup dalam kehidupan masyarakat masa kini.',
        ],
      },
      {
        h: 'Kitab Jawi dan Ulama Fathani',
        p: [
          'Dalam khazanah kitab jawi, nama Patani bersinar melalui ulama Fathani pada abad ke-19, di antaranya Syekh Daud bin Abdullah al-Fathani yang menulis banyak kitab yang menjadi rujukan pesantren Nusantara. Ulama-ulama Fathani lainnya menyebar ke Makkah dan berbagai wilayah Melayu, menyambung jaringan pengajian dua arah dengan Hijaz. Tradisi tarekat juga hidup di kawasan ini dengan majelis dzikir di lingkungan pondok. Dalam peta 165.web.id, Patani menjadi simpul Melayu utara yang menyambung Kuala Lumpur, Singapura, dan Makkah.',
        ],
      },
    ],
    related: ['kuala-lumpur', 'singapura', 'makkah', 'palembang'],
  },
  {
    slug: 'pontianak',
    kind: 'atlas',
    title: 'Pontianak',
    category: 'Nusantara',
    summary: 'Pontianak, kota khatulistiwa di Kalimantan Barat dengan majelis TQN yang menyambung silsilah ulama Sambas dan jaringan Kalimantan.',
    facts: [
      { label: 'Wilayah', value: 'Kalimantan Barat, tepi Sungai Kapuas' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul majelis TQN Kalimantan Barat; dekat silsilah ulama Sambas' },
      { label: 'Jalur terhubung', value: 'Sambas, Banjarmasin, Palembang, Makkah' },
      { label: 'Kini', value: 'Kota dengan masjid agung dan majelis dzikir aktif' },
    ],
    body: [
      {
        h: 'Kota Khatulistiwa',
        p: [
          'Pontianak adalah kota yang dilewati garis khatulistiwa dan berdiri di tepi Sungai Kapuas, sungai terpanjang di Indonesia. Kota ini berdiri sebagai pusat Kesultanan Pontianak pada akhir abad ke-18 yang dirintis Syarif Abdurrahman al-Qadri, keturunan Arab Hadramaut. Sebagai kota pelabuhan, Pontianak menjadi simpul dagang dan perantau antara Kalimantan, Semenanjung Malaya, dan Singapura. Komunitas Muslimnya beragam, mencakup Melayu, Tionghoa Muslim, dan keturunan Arab.',
        ],
      },
      {
        h: 'Tarekat di Kalimantan Barat',
        p: [
          'Kalimantan Barat memiliki sejarah tarekat yang kuat, dan yang paling melekat adalah silsilah Syekh Muhammad Khatib Sambas dari Sambas yang berpengaruh dalam riwayat TQN Nusantara. Majelis TQN di Pontianak berlangsung di masjid dan mushala dengan pola riblah serta silaturahmi ke simpul Kalimantan lainnya. Jamaah di kota ini menaungi murid dari wilayah Sungai Kapuas dan perantau yang bekerja di sepanjang sungai. Kaitan dengan Makkah dan pusat tarekat Jawa terjaga melalui arus jamaah haji dan perantau ilmu. 165.web.id menyajikan Pontianak secara umum dan mengundang pembaca menelusuri detail majelis kepada pengurus setempat.',
        ],
      },
    ],
    related: ['sambas', 'banjarmasin', 'palembang', 'makkah'],
  },
  {
    slug: 'probolinggo',
    kind: 'atlas',
    title: 'Probolinggo',
    category: 'Nusantara',
    summary: 'Probolinggo, kota pesisir Jawa Timur dengan majelis dzikir TQN di kaki Bromo dan jejaring tarekat Jawa Timur bagian timur.',
    facts: [
      { label: 'Wilayah', value: 'Pesisir utara Jawa Timur' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul majelis TQN di Jawa Timur bagian timur' },
      { label: 'Jalur terhubung', value: 'Jombang, Malang, Purworejo, Tasikmalaya' },
      { label: 'Kini', value: 'Kota pelabuhan dengan majelis dzikir dan pesantren aktif' },
    ],
    body: [
      {
        h: 'Pesisir Timur Jawa',
        p: [
          'Probolinggo adalah kota pesisir utara Jawa Timur yang menjadi pintu menuju Taman Nasional Bromo Tengger Semeru. Masyarakatnya majemuk, mencakup komunitas Jawa, Madura, dan Tengger yang sebagian beragama Hindu. Sebagai kota pelabuhan dan pertanian, Probolinggo menjadi simpul lalu lintas orang dan ilmu di timur Jawa. Masjid, pesantren, dan majelis keagamaan hidup berdampingan dengan keberagaman kawasan tersebut. Kehidupan keagamaan kawasan ini berakar pada pesantren pesisir yang menyambung jejaring keilmuan Jawa Timur.',
        ],
      },
      {
        h: 'Majelis TQN di Probolinggo',
        p: [
          'Majelis dzikir TQN di Probolinggo berpaut pada jejaring tarekat Jawa Timur yang berhubungan dengan simpul Jombang dan Malang. Kegiatan berbentuk riblah terjadwal, pengajian adab, dan silaturahmi antarjamaah. Jamaah datang dari kota, dari kawasan Madura di seberang selat, serta dari kampung-kampung pegunungan di sekitar Bromo. Posisi kawasan di timur Jawa menjadikan arus jamaah menyambung dengan Madura dan kawasan pegunungan sekitarnya. 165.web.id menyajikan Probolinggo secara umum dan tidak mencantumkan detail majelis yang tidak dapat diverifikasi.',
        ],
      },
    ],
    related: ['jombang', 'malang', 'purworejo', 'tasikmalaya'],
  },
  {
    slug: 'purworejo',
    kind: 'atlas',
    title: 'Purworejo',
    category: 'Nusantara',
    summary: 'Purworejo, kabupaten di selatan Jawa Tengah dengan majelis TQN yang menyambung jalur tarekat bagian tengah Jawa.',
    facts: [
      { label: 'Wilayah', value: 'Jawa Tengah bagian selatan, kaki Perbukitan Menoreh' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul majelis TQN; jalur tarekat antara Banyumas dan Yogyakarta' },
      { label: 'Jalur terhubung', value: 'Banyumas, Malang, Jombang, Cikangkung' },
      { label: 'Kini', value: 'Kawasan pesantren dan majelis dzikir aktif' },
    ],
    body: [
      {
        h: 'Bantaran Selatan Jawa',
        p: [
          'Purworejo adalah kabupaten di selatan Jawa Tengah yang berada di antara Perbukitan Menoreh dan Samudra Hindia. Kawasan ini menyimpan sejarah kerajaan kuno dan pesantren-pesantren kampung yang kuat. Lalu lintas orang dan ilmu mengalir melalui jalur selatan yang menghubungkan Purworejo dengan Yogyakarta dan kawasan Banyumas di sebelah barat. Budaya keagamaannya berakar pada pesantren dan kampung-kampung santri. Pesantren kampung di sini menyambung tradisi pengajian yang mengalir dari jalur selatan Jawa menuju pusat-pusat ilmu di sekitarnya.',
        ],
      },
      {
        h: 'Majelis TQN di Purworejo',
        p: [
          'Majelis dzikir TQN di Purworejo menyambung jalur tarekat bagian tengah Jawa. Jamaah berkumpul di masjid dan mushala kampung mengikuti pola riblah yang berlaku dalam TQN, dengan silaturahmi ke simpul Banyumas, Cikangkung, dan kota-kota lain. Murabbi setempat menuntun jamaah baru melalui pengajian adab sebelum amalan dzikir diberikan sesuai tuntunan tarekat. Posisi kawasan di jalur selatan menjadikan Purworejo bagian dari arus jamaah antara barat dan timur Jawa. 165.web.id menyajikan simpul ini secara umum dan mengundang pembaca menelusuri detailnya langsung kepada jamaah setempat.',
        ],
      },
    ],
    related: ['banyumas', 'malang', 'jombang', 'cikangkung'],
  },
  {
    slug: 'roterdam',
    kind: 'atlas',
    title: 'Rotterdam',
    category: 'Simpul Jamaah Global',
    summary: 'Rotterdam, kota pelabuhan Belanda dengan komunitas jamaah TQN di antara diaspora Nusantara dan komunitas Muslim Eropa.',
    facts: [
      { label: 'Wilayah', value: 'Belanda barat, kota pelabuhan di muara Maas' },
      { label: 'Peran dalam sejarah tarekat', value: 'Rumah jamaah TQN Belanda; majelis dzikir diaspora Nusantara di Eropa' },
      { label: 'Jalur terhubung', value: 'New York, Sarajevo, Skopje, Tasikmalaya' },
      { label: 'Kini', value: 'Kota multikultural dengan masjid lintas komunitas' },
    ],
    body: [
      {
        h: 'Pelabuhan Multikultural',
        p: [
          'Rotterdam adalah pelabuhan terbesar di Eropa dan kota dengan komunitas internasional yang besar. Sejarah migrasi membawa berbagai komunitas ke kota ini, termasuk komunitas Maluku yang datang pada tahun 1951 dan diaspora Indonesia pada era berikutnya. Beberapa komunitas tersebut membawa pengalaman keagamaan Nusantara, termasuk tradisi majelis dzikir dan tarekat yang dijaga di lingkungan mereka. Masjid-masjid Rotterdam melayani komunitas lintas bahasa dan tradisi. Dalam lingkungan semacam itu, amalan dzikir tarekat dipelihara secara tenang di antara keluarga dan komunitas diaspora.',
        ],
      },
      {
        h: 'Jamaah TQN di Belanda',
        p: [
          'Jamaah TQN di Rotterdam berada di antara diaspora Nusantara yang berhubungan dengan pusat tarekat di Indonesia. Majelis dzikir berlangsung di rumah jamaah dan masjid komunitas, dengan pola riblah yang disesuaikan kehidupan kerja di Eropa. Silaturahmi jamaah menyambung dengan simpul-simpul Eropa dan Amerika serta pusat tarekat di Priangan. Jadwal majelis menyesuaikan iklim kerja di Belanda, sementara kegiatan tahunan berlangsung bersama komunitas Muslim yang lebih luas. 165.web.id menyajikan simpul ini secara umum tanpa mencantumkan alamat majelis.',
        ],
      },
    ],
    related: ['new-york', 'sarajevo', 'skopje', 'tasikmalaya'],
  },
  {
    slug: 'samarqand',
    kind: 'atlas',
    title: 'Samarqand',
    category: 'Asia Tengah & Selatan',
    summary: 'Samarqand, permata jalur sutra yang menjadi ibu kota Timuriyah dan simpul silsilah Naqsyabandiyah pada era Khwaja Ahrar.',
    facts: [
      { label: 'Wilayah', value: 'Asia Tengah, kini Uzbekistan' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul silsilah: lingkungan Sayyid Amir Kulal dan kehadiran Khwaja Ubaidullah Ahrar' },
      { label: 'Jalur terhubung', value: 'Bukhara, Ghijduvan, Kashgar, Delhi' },
      { label: 'Kini', value: 'Situs Warisan Dunia UNESCO dengan Registan yang ikonik' },
    ],
    body: [
      {
        h: 'Kota Timur dan Registan',
        p: [
          'Samarqand adalah salah satu kota terpenting jalur sutra dan menjadi ibu kota Timur Lenk pada abad ke-14 hingga ke-15. Registan dengan tiga madrasahnya menjadi karya arsitektur paling terkenal di Asia Tengah, sementara observatorium Ulugh Beg menandai kejayaan astronomi kota ini. Warisan ilmu Samarqand mencakup matematika, astronomi, dan pengajian agama yang menarik ulama dari berbagai penjuru. Kota ini tercatat sebagai Situs Warisan Dunia UNESCO.',
        ],
      },
      {
        h: 'Silsilah Naqsyabandiyah di Samarqand',
        p: [
          'Dalam sejarah silsilah Naqsyabandiyah, Samarqand berhubungan dengan lingkungan Sayyid Amir Kulal, guru para khwaja pada abad ke-14 yang kampungnya berada di kawasan Bukhara. Pengaruh tarekat di Samarqand mencapai puncaknya pada era Khwaja Ubaidullah Ahrar yang berkedudukan di kota ini dan menjadikan silsilah Naqsyabandiyah berpengaruh luas di Mawarannahr. Di dekat kompleks Syah-i Zinda terpelihara makam Khwaja Ala\'uddin Attar, khalifah pertama Baha\'uddin Naqsyaband menurut riwayat silsilah. Dalam peta 165.web.id, Samarqand menyambung Bukhara, Ghijduvan, dan jalur ke Kashgar serta India.',
        ],
      },
    ],
    related: ['bukhara', 'ghijduvan', 'kashgar', 'delhi'],
  },
  {
    slug: 'sambas',
    kind: 'atlas',
    title: 'Sambas',
    category: 'Nusantara',
    summary: 'Sambas, kawasan Kalimantan Barat yang dikenang sebagai kampung Syekh Muhammad Khatib Sambas, ulama besar dalam riwayat TQN Nusantara.',
    facts: [
      { label: 'Wilayah', value: 'Kalimantan Barat, dekat perbatasan Malaysia' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kampung Syekh Muhammad Khatib Sambas; dalam riwayat tarekat, pemegang ijazah Qadiriyah dan Naqsyabandiyah yang berpengaruh di Nusantara' },
      { label: 'Jalur terhubung', value: 'Pontianak, Banjarmasin, Makkah, Tasikmalaya' },
      { label: 'Kini', value: 'Kabupaten Sambas dengan kehidupan pesantren dan majelis dzikir' },
    ],
    body: [
      {
        h: 'Kesultanan Sambas',
        p: [
          'Sambas adalah kawasan di ujung barat Kalimantan yang menjadi pusat Kesultanan Sambas pada abad ke-17. Masjid Jami Sambas yang tua menjadi penanda kehidupan Islam kesultanan tersebut. Kehidupan kampung dan pasar di kawasan ini menyimpan jejak lama interaksi komunitas Melayu, Dayak, dan keturunan Arab Hadramaut. Letaknya dekat perbatasan Malaysia menjadikan Sambas simpul lalu lintas orang dan ilmu antara Kalimantan dan Semenanjung. Kehidupan pesantren dan majelis keagamaan tetap hidup di kabupaten ini hingga masa kini.',
        ],
      },
      {
        h: 'Khatib Sambas',
        p: [
          'Dalam riwayat tarekat Nusantara, nama Syekh Muhammad Khatib Sambas melekat kuat pada Sambas. Beliau dikenal sebagai ulama yang menerima ijazah Qadiriyah dan Naqsyabandiyah di Makkah lalu mengembangkan keduanya di kawasan Melayu, dan riwayat silsilah TQN berhubungan dengan garis ijazah tersebut. Karya-karya yang dinisbatkan kepadanya beredar di lingkungan tarekat Melayu. Bagi peta 165.web.id, Sambas menjadi simpul Kalimantan barat yang menyambung Pontianak, Banjarmasin, dan Makkah, dengan riwayat silsilah disajikan dengan penanda riwayat.',
        ],
      },
    ],
    related: ['pontianak', 'banjarmasin', 'makkah', 'tasikmalaya'],
  },
  {
    slug: 'sarajevo',
    kind: 'atlas',
    title: 'Sarajevo',
    category: 'Afrika & Eropa',
    summary: 'Sarajevo, ibu kota Bosnia yang menandakan kehadiran tarekat dan khanaqah di kawasan Balkan sejak era Ottoman.',
    facts: [
      { label: 'Wilayah', value: 'Bosnia dan Herzegovina, lembah Sungai Miljacka' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat kehidupan tarekat Balkan era Ottoman; khanaqah dan waqf yang terpelihara' },
      { label: 'Jalur terhubung', value: 'Skopje, Bursa, Aleppo, Rotterdam' },
      { label: 'Kini', value: 'Ibu kota Bosnia dengan komunitas Naqsyabandiyah yang tetap aktif' },
    ],
    body: [
      {
        h: 'Kota Ottoman di Balkan',
        p: [
          'Sarajevo berkembang pada abad ke-15 di era Ottoman dan menjadi pusat kehidupan Muslim di Bosnia. Kompleks Gazi Husrev-bey dengan masjid, madrasah, dan waqf-nya yang didirikan pada abad ke-16 menjadi inti kota tua hingga masa kini. Tradisi waqf menjaga kelembagaan keagamaan kota selama berabad-abad, termasuk perpustakaan dan sekolah. Perang 1992 hingga 1995 merusak banyak bangunan, namun pemulihan kota berlangsung cepat.',
        ],
      },
      {
        h: 'Tekke dan Tarekat Balkan',
        p: [
          'Balkan menyimpan sejarah tekke yang padat, dan Bosnia menjadi salah satu pusatnya dengan khanaqah beberapa silsilah termasuk Naqsyabandiyah. Di kawasan sekitar Sarajevo terkenal tekke Naqsyabandiyah di Visoko, dan di Blagaj berdiri tekke tua di tepi mata air Buna. Pasca era sosialis, kehidupan tarekat bangkit kembali di Bosnia dengan majelis dzikir dan pengajian. Kunjungan peziarah dan penuntut ilmu ke tekke-tekke tersebut berlangsung hingga masa kini dengan pola majelis dzikir yang tertata dan hidup. Dalam peta 165.web.id, Sarajevo menyambung Skopje dan Bursa dalam jalur tarekat Balkan-Anatolia.',
        ],
      },
    ],
    related: ['skopje', 'bursa', 'aleppo', 'roterdam'],
  },
  {
    slug: 'singaparna',
    kind: 'atlas',
    title: 'Singaparna',
    category: 'Nusantara',
    summary: 'Singaparna, ibu kota Kabupaten Tasikmalaya yang menjadi pintu menuju Suryalaya dan simpul majelis TQN Priangan Timur.',
    facts: [
      { label: 'Wilayah', value: 'Kabupaten Tasikmalaya, Jawa Barat' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kota administratif dekat pusat TQN Suryalaya; simpul jamaah Priangan Timur' },
      { label: 'Jalur terhubung', value: 'Tasikmalaya, Panjalu, Pamijahan, Kaduparasi' },
      { label: 'Kini', value: 'Kota kecil yang hidup bersama kegiatan pesantren sekitarnya' },
    ],
    body: [
      {
        h: 'Kota di Jantung Priangan Timur',
        p: [
          'Singaparna adalah ibu kota Kabupaten Tasikmalaya yang berada di jantung Priangan Timur. Kota kecil ini menjadi pusat administrasi, perdagangan, dan pendidikan bagi kampung-kampung di sekitarnya. Lingkungan keagamaannya kuat dengan banyaknya pesantren di kawasan Kabupaten Tasikmalaya. Kedekatan dengan pusat-pusat tarekat menjadikan Singaparna bagian dari peta kehidupan TQN di wilayah ini. Aktivitas ekonomi kota kecil ini hidup bersama kalender keagamaan yang dijalankan pesantren di kampung-kampung sekitarnya.',
        ],
      },
      {
        h: 'Pintu Menuju Pusat Tarekat',
        p: [
          'Dari Singaparna, jalan menuju Suryalaya di Panjalu dan kompleks ziarah Pamijahan menghubungkan kota ini dengan pusat TQN. Jamaah yang berkunjung ke Tasikmalaya umumnya melalui Singaparna sebelum menuju kampung-kampung tarekat. Majelis dzikir di kota dan sekitarnya mengikuti pola riblah dengan silaturahmi ke pusat tarekat. Sebagai ibu kota kabupaten, Singaparna juga menjadi titik persinggahan jamaah yang menuju pesantren Suryalaya atau kompleks ziarah sebelum kembali ke daerah asalnya. 165.web.id menyajikan Singaparna sebagai simpul pendukung jaringan Tasikmalaya dengan detail kelembagaan yang ditelusuri langsung kepada jamaah.',
        ],
      },
    ],
    related: ['tasikmalaya', 'panjalu', 'pamijahan', 'kaduparasi'],
  },
  {
    slug: 'singapura',
    kind: 'atlas',
    title: 'Singapura',
    category: 'Simpul Jamaah Global',
    summary: 'Singapura, negara kota dengan komunitas Muslim Melayu dan majelis TQN yang berhubungan dengan silsilah Nusantara.',
    facts: [
      { label: 'Wilayah', value: 'Ujung selatan Semenanjung Melayu' },
      { label: 'Peran dalam sejarah tarekat', value: 'Komunitas jamaah TQN di kalangan Melayu; majelis dzikir berhubungan dengan pusat Nusantara' },
      { label: 'Jalur terhubung', value: 'Kuala Lumpur, Brunei, Patani, Tasikmalaya' },
      { label: 'Kini', value: 'Negara kota multikultural dengan masjid yang terpelihara' },
    ],
    body: [
      {
        h: 'Negara Kota di Muara',
        p: [
          'Singapura adalah negara kota di ujung selatan Semenanjung Melayu yang berkembang pesat sejak abad ke-19 sebagai pelabuhan bebas. Komunitas Melayu-Muslim menjadi bagian penting sejarahnya, tampak pada Kampung Glam dengan Masjid Sultan yang ikonik. Kelembagaan keislaman negara menaungi kehidupan Muslim dalam pendidikan, wakaf, dan pengajian. Majelis keagamaan komunitas berjalan tertata dalam kerangka kelembagaan tersebut bersama pengajian dan kegiatan sosial. Meski berada di tengah kota yang padat dan modern, kehidupan majelis keagamaan tetap hidup.',
        ],
      },
      {
        h: 'Jamaah TQN di Singapura',
        p: [
          'Jamaah TQN di Singapura berada di kalangan komunitas Melayu yang berhubungan dengan silsilah tarekat Nusantara. Majelis dzikir berlangsung di masjid dan mushala dengan pola riblah serta silaturahmi ke simpul Malaysia dan Indonesia. Arus jamaah haji dan perantau ilmu menjaga kaitan dengan Makkah dan pusat-pusat tarekat Priangan. Jamaah menjaga amalan dzikir di tengah kesibukan negara kota, dengan majelis yang berlangsung pada akhir pekan dan hari besar keagamaan. 165.web.id menyajikan simpul ini secara umum tanpa detail majelis yang tidak terdokumentasi secara publik.',
        ],
      },
    ],
    related: ['kuala-lumpur', 'brunei', 'patani', 'tasikmalaya'],
  },
  {
    slug: 'skopje',
    kind: 'atlas',
    title: 'Skopje',
    category: 'Afrika & Eropa',
    summary: 'Skopje, ibu kota Makedonia Utara dengan warisan urban Ottoman dan kenangan kehidupan tekke di kawasan Balkan.',
    facts: [
      { label: 'Wilayah', value: 'Makedonia Utara, tepi Sungai Vardar' },
      { label: 'Peran dalam sejarah tarekat', value: 'Kota Muslim era Ottoman; lingkungan tekke dan zaviye di Makedonia' },
      { label: 'Jalur terhubung', value: 'Sarajevo, Bursa, Aleppo, Rotterdam' },
      { label: 'Kini', value: 'Ibu kota dengan masjid tua dan komunitas Muslim yang hidup' },
    ],
    body: [
      {
        h: 'Kota di Tepi Vardar',
        p: [
          'Skopje berdiri di tepi Sungai Vardar dan menjadi kota penting Balkan pada era Ottoman yang menguasainya pada abad ke-14 hingga awal abad ke-20. Bazar tua dan masjid Mustafa Pasha yang dibangun pada abad ke-15 menandai warisan Muslim kota ini. Gempa besar tahun 1963 merusak banyak bangunan lama, dan kota dibangun kembali pada era Yugoslavia. Hari ini Skopje adalah ibu kota Makedonia Utara dengan komunitas Muslim yang beragam.',
        ],
      },
      {
        h: 'Tekke Makedonia',
        p: [
          'Makedonia menyimpan sejarah tekke dervisy yang padat pada era Ottoman, dan tradisi tersebut terdokumentasi di berbagai kota termasuk di Tetovo dengan tekke Bektasyi yang tua. Di Skopje, lingkungan Muslim hidup dengan masjid, mushala, dan komunitas Albania, Turki, serta Torbesh setempat. Warisan zaviye era Ottoman masih terbaca pada pola kota tua serta kebiasaan keagamaan komunitas Muslim yang tinggal di sekitarnya hingga masa kini. Kehidupan tarekat masa kini berjalan dalam skala kecil melalui majelis dzikir dan pengajian. Dalam peta 165.web.id, Skopje menyambung Sarajevo dan Bursa dalam jalur Balkan-Anatolia.',
        ],
      },
    ],
    related: ['sarajevo', 'bursa', 'aleppo', 'roterdam'],
  },
  {
    slug: 'sulaymaniyah',
    kind: 'atlas',
    title: 'Sulaymaniyah',
    category: 'Timur Tengah',
    summary: 'Sulaymaniyah, kota di Kurdi Irak yang menjadi pusat khanaqah Naqsyabandiyah-Khalidiyah dan lingkungan ulama besar Kurdistan.',
    facts: [
      { label: 'Wilayah', value: 'Kawasan Kurdi, Irak' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat Naqsyabandiyah-Khalidiyah; kawasan dekat kampung Mawlana Khalid al-Kurdi' },
      { label: 'Jalur terhubung', value: 'Damaskus, Aleppo, Makkah, Hebron' },
      { label: 'Kini', value: 'Kota budaya Kurdi dengan khanaqah yang tetap hidup' },
    ],
    body: [
      {
        h: 'Kota Budaya Kurdi',
        p: [
          'Sulaymaniyah didirikan pada akhir abad ke-18 oleh penguasa dinasti Baban dan berkembang menjadi salah satu pusat budaya Kurdistan. Kota ini dikenal dengan julukan kota puisi dan ulama, dengan perpustakaan, pengajian, dan tradisi keilmuan yang kuat. Masyarakatnya Muslim dengan komposisi suku Kurdi yang dominan. Posisi di kaki pegunungan menjadikan Sulaymaniyah kota beriklim nyaman di utara Irak.',
        ],
      },
      {
        h: 'Naqsyabandiyah-Khalidiyah',
        p: [
          'Kawasan sekitar Sulaymaniyah menjadi panggung penting silsilah Naqsyabandiyah: Mawlana Khalid al-Kurdi lahir di Shahrazur tidak jauh dari kota ini, lalu mengembangkan cabang Khalidiyah yang menyebar luas ke Syam, Anatolia, dan wilayah lain. Khanaqah Naqsyabandiyah di Sulaymaniyah menjadi salah satu pusat kegiatan silsilah ini dengan kepemimpinan murabbi yang berlanjut hingga masa kini. Kunjungan jamaah dan penuntut tarekat ke khanaqah ini berlangsung sepanjang tahun dengan pola majelis dzikir yang tertata. Ijazah dan majelis dzikir kawasan ini menyambung dengan jaringan Damaskus dan Makkah. Dalam peta 165.web.id, Sulaymaniyah menjadi simpul Kurdi pada jalur Naqsyabandiyah-Khalidiyah.',
        ],
      },
    ],
    related: ['damaskus', 'aleppo', 'makkah', 'hebron'],
  },
  {
    slug: 'taif',
    kind: 'atlas',
    title: 'Thaif',
    category: 'Timur Tengah',
    summary: 'Thaif, kota pegunungan di Hijaz yang menyejukkan dari Makkah; saksi perjalanan sirah Nabi saw dan kota buah serta mawar.',
    facts: [
      { label: 'Wilayah', value: 'Hijaz, Arab Saudi, di Pegunungan Sarawat' },
      { label: 'Peran dalam sejarah tarekat', value: 'Persinggahan ziarah dari Makkah; latar peristiwa sirah yang memperdalam makna sabar dakwah' },
      { label: 'Jalur terhubung', value: 'Makkah, Haram Baitullah, Madinah, Damaskus' },
      { label: 'Kini', value: 'Tempat peristirahatan musim panas dengan kebun buah dan mawar' },
    ],
    body: [
      {
        h: 'Kota Pegunungan Hijaz',
        p: [
          'Thaif berdiri di pegunungan Sarawat sekitar seratus kilometer dari Makkah dengan iklim yang jauh lebih sejuk. Kota ini merupakan tanah suku Thaqif dan terkenal dengan kebun anggur, buah, serta mawar yang diolah menjadi parfum. Pada masa modern Thaif menjadi tempat peristirahatan musim panas penduduk Hijaz. Kedekatan dengan Makkah menjadikan Thaif bagian dari lingkaran ziarah jamaah haji dan umrah.',
        ],
      },
      {
        h: 'Pelajaran dari Sirah',
        p: [
          'Dalam sirah, Thaif menjadi latar perjalanan dakwah Nabi Muhammad saw yang berat pada masa awal kenabian. Riwayat menyebut penolakan penduduk kota ini terhadap ajakan Nabi dan kesabaran yang ditunjukkan beliau, termasuk kisah Addas, seorang pemuda beriman yang melayani Nabi saat perjalanan itu. Kisah-kisah sirah ini menjadi bahan perenungan keikhlasan dakwah dalam pengajian tarekat. Kisah sabar dakwah di Thaif juga menjadi pengingat bagi murabbi dan murid dalam menjaga adab serta kesabaran menyerahkan pemahaman. Dalam peta 165.web.id, Thaif menjadi simpul Hijaz yang menyambung Makkah dan Madinah.',
        ],
      },
    ],
    related: ['makkah', 'haram-baitullah', 'madinah', 'damaskus'],
  },
  {
    slug: 'tasikmalaya',
    kind: 'atlas',
    title: 'Tasikmalaya',
    category: 'Nusantara',
    summary: 'Tasikmalaya, jantung TQN Qodiriyah Naqsabandiyah di Priangan; kawasan Suryalaya, Pamijahan, dan jejaring majelis dzikir Nusantara.',
    facts: [
      { label: 'Wilayah', value: 'Priangan Timur, Jawa Barat' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat TQN Suryalaya; makam Syekh Abdul Muhyi di Pamijahan; simpul utama jamaah TQN Nusantara' },
      { label: 'Jalur terhubung', value: 'Panjalu, Singaparna, Pamijahan, Bandung' },
      { label: 'Kini', value: 'Kota dengan pesantren, riblah, dan jamaah dari berbagai daerah' },
    ],
    body: [
      {
        h: 'Priangan Timur',
        p: [
          'Tasikmalaya adalah kawasan di Priangan Timur yang dikenal dengan kehidupan pesantren dan kerajinan rakyatnya. Sejarahnya melekat pada wilayah Sukapura dan perkembangan Islam di Priangan sejak era awal. Pesantren tumbuh padat di kampung-kampungnya, menjadikan Tasikmalaya salah satu wilayah dengan tradisi santri terkuat di Jawa Barat. Pesantren dan mushala kampung menyambung jejaring ilmu yang menghubungkan Priangan Timur dengan pusat-pusat Jawa Barat dan Jawa Tengah. Kota ini berdiri di jalur antara Bandung dan Jawa Tengah, melayani lalu lintas jamaah dari berbagai arah.',
        ],
      },
      {
        h: 'Jantung TQN Nusantara',
        p: [
          'Dalam peta TQN Qodiriyah Naqsabandiyah, Tasikmalaya menjadi jantung kegiatan tarekat. Pesantren Suryalaya di Panjalu menjadi ibu tarekat yang menyebarkan ijazah ke seluruh Nusantara, sementara Pamijahan menyimpan makam Syekh Abdul Muhyi sebagai pusat ziarah generasi awal. Riblah berlangsung di banyak kampung dengan jamaah yang menyambung ke simpul Bandung, Karawang, dan kota-kota lain. Bagi 165.web.id, Tasikmalaya adalah simpul pertama yang perlu dibaca untuk memahami peta TQN Nusantara.',
        ],
      },
    ],
    related: ['panjalu', 'singaparna', 'pamijahan', 'bandung'],
  },
  {
    slug: 'timbuktu',
    kind: 'atlas',
    title: 'Timbuktu',
    category: 'Afrika & Eropa',
    summary: 'Timbuktu, kota ilmu di Mali dengan manuskrip Afrika Barat yang berhasil diselamatkan dari kerusakan pada 2012 hingga 2013.',
    facts: [
      { label: 'Wilayah', value: 'Mali, tepi Gurun Sahara' },
      { label: 'Peran dalam sejarah tarekat', value: 'Pusat pengajian dan manuskrip Afrika Barat; jalur ziarah ulama Sahara' },
      { label: 'Jalur terhubung', value: 'Kano, Fez, Makkah, Damaskus' },
      { label: 'Kini', value: 'Situs Warisan Dunia UNESCO dalam pemulihan pasca konflik' },
    ],
    body: [
      {
        h: 'Kota Emas di Tepi Sahara',
        p: [
          'Timbuktu berkembang pada abad ke-13 hingga ke-16 sebagai simpul dagang emas, garam, dan buku di tepi Gurun Sahara. Perjalanan haji Mansa Musa tahun 1324 menempatkan Timbuktu dalam peta dunia Islam, dan kota ini dilengkapi masjid Djinguereber, Sankore, serta Sidi Yahya yang menjadi pusat pengajian. Lingkungan ilmu Sankore dikenal luas dengan tradisi manuskripnya dalam fikih, hadits, astronomi, dan tasawuf. Nama Timbuktu menjadi lambang kota ilmu di Afrika Barat.',
        ],
      },
      {
        h: 'Penyelamatan Manuskrip 2012-2013',
        p: [
          'Pada tahun 2012, kelompok bersenjata menguasai Mali utara dan merusak sebagian situs pusaka Timbuktu. Dalam situasi itu, para penjaga perpustakaan dan keluarga menyelamatkan ratusan ribu manuskrip dengan membawanya keluar dari kota ke Bamako melalui jalur sungai dan gurun hingga tahun 2013. Tindakan ini menjadi salah satu penyelamatan dokumen terbesar dalam sejarah modern dan menempatkan Timbuktu dalam daftar warisan dalam bahaya UNESCO. Kisah ini menandai peran ulama dan keluarga Afrika Barat dalam menjaga khazanah ilmu Islam, termasuk ilmu tarekat, secara umum.',
        ],
      },
    ],
    related: ['kano', 'fez', 'makkah', 'damaskus'],
  },
  {
    slug: 'tus',
    kind: 'atlas',
    title: 'Thus',
    category: 'Asia Tengah & Selatan',
    summary: 'Thus, kawasan di Khurasan dekat Mashhad yang menjadi tempat persemayaman Imam al-Ghazali, penjelajah maqamat dalam khazanah sufi.',
    facts: [
      { label: 'Wilayah', value: 'Khurasan, kini Iran timur laut, dekat Mashhad' },
      { label: 'Peran dalam sejarah tarekat', value: 'Makam Imam al-Ghazali; kota perjalanan rohani penyusun Ihya Ulumuddin' },
      { label: 'Jalur terhubung', value: 'Naisabur, Merv, Balkh, Ghazni' },
      { label: 'Kini', value: 'Kompleks makam al-Ghazali dan Ferdowsi di dekat Mashhad' },
    ],
    body: [
      {
        h: 'Kota di Khurasan',
        p: [
          'Thus adalah kota tua di Khurasan yang terletak tidak jauh dari Mashhad masa kini. Kota ini memiliki lapisan sejarah panjang dan menjadi tempat persemayaman tokoh besar: menurut catatan sejarah, Khalifah Harun ar-Rasyid dimakamkan di sini, begitu pula penyair besar Persia Ferdowsi yang makamnya menjadi monumen kawasan ini. Serangan Mongol tahun 1221 menghancurkan Thus bersama kota-kota Khurasan lainnya. Sisa-sisa tembok kota kuno menandai besarnya kawasan ini sebelum kehancuran abad ke-13. Reruntuhan tersebut kini berdampingan dengan monumen-monumen peringatan modern.',
        ],
      },
      {
        h: 'Perjalanan Al-Ghazali',
        p: [
          'Imam al-Ghazali menetap di Thus pada akhir hayatnya dan wafat di sini pada tahun 1111. Sebelum itu, beliau mengalami perjalanan rohani yang diceritakan sendiri dalam kitab al-Munqidz min ad-Dalal: meninggalkan kedudukan pengajar, menempuh khalwat dan perjalanan, hingga menulis Ihya Ulumuddin yang menjadi rujukan akhlak dan dzikir banyak tarekat. Makam beliau di Thus direnovasi pada abad ke-20 dan menjadi tempat ziarah para pengkaji sufi. Dalam peta 165.web.id, Thus menyambung Naisabur dan jalur sufi Khurasan.',
        ],
      },
    ],
    related: ['naisabur', 'merv', 'balkh', 'ghazni'],
  },
  {
    slug: 'uch-sharif',
    kind: 'atlas',
    title: 'Uch Sharif',
    category: 'Asia Tengah & Selatan',
    summary: 'Uch Sharif, kota sufi di Punjab selatan Pakistan yang menjadi simpul Suhrawardiyah dengan makam Jalaluddin Surkh-Posh Bukhari.',
    facts: [
      { label: 'Wilayah', value: 'Punjab selatan, Pakistan' },
      { label: 'Peran dalam sejarah tarekat', value: 'Simpul Suhrawardiyah; makam Sayyid Jalaluddin Surkh-Posh dan Makhdum Jahaniyan' },
      { label: 'Jalur terhubung', value: 'Multan, Delhi, Ghazni, Makkah' },
      { label: 'Kini', value: 'Kota makam bersejarah dengan situs Bibi Jawindi' },
    ],
    body: [
      {
        h: 'Kota Sufi di Punjab',
        p: [
          'Uch Sharif adalah kota tua di Punjab selatan yang berdiri di kawasan pertemuan sungai menuju Indus. Menurut tradisi setempat, kota ini dikaitkan dengan masa Alexander dan perkembangan Islam awal di Punjab. Uch menjadi terkenal sebagai kota sufi: makam-makam besarnya membentuk kawasan ziarah yang khas dengan arsitektur ubin biru. Kota ini dikenal sebagai pusat sufi di sebelah timur Multan.',
        ],
      },
      {
        h: 'Wali Uch dan Silsilahnya',
        p: [
          'Tokoh yang menandai Uch adalah Sayyid Jalaluddin Surkh-Posh Bukhari, ulama sufi abad ke-13 hingga ke-14 yang keturunannya berpengaruh di kawasan ini, serta Makhdum Jahaniyan Jahangasht, perantau ilmu yang masyhur pada abad ke-14. Makam Bibi Jawindi dengan arsitekturnya yang indah menjadi situs yang tercatat dalam daftar tentatif UNESCO. Ziarah ke makam-makam ini berlangsung sepanjang tahun bersama urus dan majelis pengajian yang diadakan di lingkungan situs. Jaringan sufi Uch menyambung dengan Multan dan Delhi dalam silsilah Suhrawardiyah. Dalam peta 165.web.id, Uch Sharif menjadi simpul Punjab selatan pada jalur tarekat anak benua.',
        ],
      },
    ],
    related: ['multan', 'delhi', 'ghazni', 'makkah'],
  },
// APPEND-ABOVE
]
