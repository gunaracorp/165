// 165 — WIRIDIAN & BACAAN TQN QODIRIAH NAQSABANDIYAH (arsip Source-First)
//
// DISIPLIN NON-NEGOTIABLE (satu tingkat dengan ruang Rahasia):
//  - Teks Arab yang ditampilkan adalah transkripsi bacaan majelis yang
//    terlestarikan pada sumber publik teridentifikasi — TIDAK ada satu
//    kata Arab yang dikarang.
//  - Terjemahan disebut "terjemahan makna" (bukan pengganti mushaf):
//    Bahasa Sunda & Bahasa Indonesia, ditulis untuk ikhwan & akhwat yang
//    lupa tujuan — agar bacaan kembali bermakna, bukan sekadar rutinitas.
//  - Tafsir di ruang ini adalah PENAFSIRAN MAKNA MAJELIS (penjelasan
//    pengalaman jalur), dengan rujukan Al-Qur'an & hadis yang bisa
//    dicek — bukan tafsir qauli menggantikan para mufassir.
//  - Lafaz & hitungan wiridian yang berbeda antar-majelis DITAMPILKAN
//    JUJUR sebagai perbedaan; amalan lengkap mengikuti ijazah & rapel
//    murshid masing-masing (adab tarekat).
//  - Semua rekaman DISPLAY-ONLY: tidak memberi/menilai legitimasi spiritual.
//  - PERMINTAAN FOUNDER: lapisan Bahasa Sunda (titleSu & arti Sunda)
//    pada qasidah Ibadallah Rijalallah DIHAPUS karena tidak sesuai;
//    entri lain (Nuril Anwar, wiridian, dzikir harian) tetap lengkap.
//
// Sumber utama qasidah: transkripsi majelis publik (Tribun Sumsel 2026,
// arsip lirik majelis Scribd 2021, catatan fadlilsangaji 2014) — silang-cek
// konsisten 13 bait. Sholawat Nuril Anwar: quran.nu.or.id (dari kitab
// "Abwabul Faraj" Sayyid Muhammad bin Alwi al-Maliki Makkah). Dzikir
// harian: tqnn.org.uk (TQN Qodiriyah Naqsabandiyah, resmi).

export type WbLang = { id: string; en?: string }

export type WbGrade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
export type WbStatus = 'DOCUMENTED' | 'TRADITIONAL_ACCOUNT' | 'DISPUTED' | 'UNVERIFIED'

// kind bacaan — menentukan ikon & gaya di ruang publik
export type WbKind = 'QASIDAH' | 'WIRIDIAN' | 'DZIKIR' | 'SHOLAWAT' | 'DUAA'

export type WbVerse = {
  order: number
  arabic: string
  latin: string
  meaningSu?: string // arti Bahasa Sunda (opsional — qasidah Ibadallah: dihapus, tidak sesuai; permintaan Founder)
  meaningId: string // arti Bahasa Indonesia
  tafsirId: string // tafsir lengkap (Indonesia)
  tafsirAr?: string // tafsir singkat (Arab)
}

export type WbEntry = {
  slug: string
  kind: WbKind
  order: number
  titleAr: string
  titleId: string
  titleSu?: string
  subtitleId: string
  ledeId: string
  grade: WbGrade
  status: WbStatus
  sourceRef: string
  noteId: string // catatan adab & cara amalan — jujur, tidak menggurui
  verses: WbVerse[]
}

// ============================================================
// 1. QASIDAH 'IBADALLAH RIJALALLAH AGHITSUNA LI AJLILLAH
//    Qasidah pembuka majelis dzikr TQN Qodiriah-Naqsabandiyah:
//    tawassul kepada para penolong (rijalallah) — karena Allah,
//    bukan selain-Nya. Lantunan paling masyhur di majelis-majelis
//    TQN, termasuk jalur Suryalaya, Karawang & Al-Bantani.
// ============================================================

const QASIDAH_IBADALLAH: WbEntry = {
  slug: 'qasidah-ibadallah-rijalallah',
  kind: 'QASIDAH',
  order: 1,
  titleAr: 'عِبَادَ اللهِ رِجَالَ اللهِ',
  titleId: "Qasidah 'Ibadallah Rijalallah Aghitsuna li Ajlillah",
  subtitleId: 'Pembuka majelis dzikr TQN — tawassul kepada para penolong karena Allah',
  ledeId:
    "Sebelum dzikir dimulai, majelis TQN berdiri dalam satu kalimat: kepada siapa kami meminta? Jawabnya tuntas dan beradab — kepada para hamba Allah yang Allah cintai, tetapi permohonannya digantung pada Allah: aghitsuna li ajlillah, 'tolonglah kami karena Allah'. Qasidah ini mengajarkan arah permohonan sejak bait pertama, supaya ikhwan & akhwat tidak pernah lupa tujuan.",
  grade: 'B',
  status: 'TRADITIONAL_ACCOUNT',
  sourceRef:
    'Transkripsi majelis publik teridentifikasi: Tribun Sumsel (2026, 13 bait), arsip lirik majelis Scribd (2021), catatan fadlilsangaji (2014) — silang-cek konsisten. Rujukan syariat tawassul: QS 5:35; hadits tawassul Umar r.a. (Bukhari & Muslim).',
  noteId:
    'Dilantunkan berjamaah dalam majelis dzikr TQN. Azam: permohonan kepada Allah — para wali hanya wasilah keberkahan, bukan penyembah. Lafaz "bimuhyiddin" merujuk laqab Syekh Abdul Qadir al-Jilani (Muhyiddin — penghidup agama). Tafsir di bawah ini adalah penafsiran makna majelis, bukan tafsir qauli.',
  verses: [
    {
      order: 1,
      arabic: 'عِبَادَ اللهِ رِجَالَ اللهِ',
      latin: "'Ibadallahi rijalallah",
      meaningId: 'Wahai para hamba Allah, wahai para lelaki (wali-wali) Allah.',
      tafsirId:
        "Majelis dibuka dengan memanggil dua gelar sekaligus: 'ibad (hamba) dan rijal (lelaki yang berdiri tegak). 'Rijalallah' bukan sekadar laki-laki biasa — dalam khazanah para mufassir ia adalah orang-orang yang hatinya berdiri di hadapan Allah sehingga lidah mereka hanya menyebut-Nya dan langkah mereka hanya menuju-Nya. Inilah adab pertama dzikir: kita menoleh kepada manusia, tetapi dengan mata yang melihat Allah di dalamnya. Umar bin Khattab r.a. pernah meminta hujan melalui Ibnu Abbas — 'ya Allah, kami dahulu meminta melalui Nabi-Mu, sekarang melalui paman Nabi-Mu' — dan hujan turun (muttafaq alaih). Jadi pintunya manusia yang dicintai Allah, Gudangnya tetap Allah.",
      tafsirAr:
        "بَدَأُوا بِلِفْظِ الْعُبُودِيَّةِ ثُمَّ الرِّجَالَةِ: الْقَائِمِينَ بِقُلُوبِهِمْ فِي مَشَاهِدِ اللهِ، وَالتَّوَسُّلُ بِهِمْ إِلَى اللهِ مَشْرُوعٌ كَتَوَسُّلِ عُمَرَ بِعَمِّ النَّبِيِّ ﷺ.",
    },
    {
      order: 2,
      arabic: 'عِبَادَ اللهِ رِجَالَ اللهِ أَغِيْثُوْنَا لِأَجْلِ اللهِ … لِأَجْلِ اللهِ',
      latin: "'Ibadallahi rijalallahi aghithuna li-ajlillah … li-ajlillah",
      meaningId:
        'Wahai para hamba Allah, wahai para wali Allah — tolonglah kami, karena Allah … karena Allah.',
      tafsirId:
        "Inilah kalimat kunci yang dipilih sebagai judul ruang ini: aghithuna li ajlillah — 'tolonglah kami karena Allah', bukan 'karena kalian'. Kata li-ajlillah diulang dua kali, seperti palu kecil yang memukul hati: jangan pernah berbalik arah. Tawassul yang benar tidak memindahkan sandaran; ia hanya membuka pintu berkah yang Allah letakkan di tangan hamba-Nya. QS 5:35 memerintahkan mencari wasilah kepada-Nya — dan wasilah itu boleh berupa orang saleh, boleh amal saleh, tetapi harapan hanya bertumpu pada Allah. Yang lupa tujuan akan berhenti di pintu; yang ingat tujuan mengetuk pintu lalu terus berjalan masuk kepada Allah.",
      tafsirAr:
        "لِأَجْلِ اللهِ، لَا لِأَجْلِهِمْ: هُوَ الْبَابُ، وَاللهُ الْغَنِيُّ عَمَّنْ سَوَاهُ. وَهَذَا مَعْنَى {وَابْتَغُوا إِلَيْهِ الْوَسِيلَةَ} (الْمَائِدَةُ: ٣٥).",
    },
    {
      order: 3,
      arabic: 'وَكُونُوا أَوْلَانَا لِلَّهِ عَسَى نَخْطَى بِفَضْلِ اللهِ',
      latin: 'Wakunu aulana lillah, asa nakhtha bifadhlillah',
      meaningId:
        'Jadilah karena Allah pelaku (penolong) bagi kami; mudah-mudahan kami melangkah dengan karunia Allah.',
      tafsirId:
        "Bait ini membalik posisi dengan indah: bukan hanya kita meminta, para wali juga diberi tugas menjadi 'aula' — penolong bagi kami. Ia mengingatkan dua arah tanggung jawab majelis: yang bawah meminta dengan adab, yang atas menolong dengan ihsan. Dan 'asa nakhtha — 'mudah-mudahan kami melangkah' — memakai kata khatha: langkah beruntun menuju Allah, satu dzikir ke satu dzikir. Hadits tiga lelaki gua (riwayat Bukhari & Muslim) mengajarkan tawassul dengan amal saleh: langkah baik yang pernah kita buat adalah modal terdekat. Jadi bait ini sekaligus menasihati: sebelum meminta wasilah, buatlah langkah yang layak menjadi wasilah.",
      tafsirAr:
        "الطَّلَبُ مِنْهُمْ يُقْتَرِنُ بِالْعَمَلِ: {عَسَى نَخْطَى بِفَضْلِ اللهِ} — الْخَطْوَاتُ بِفَضْلِ اللهِ هِيَ الْوَسِيلَةُ الْقَرِيبَةُ، وَالِاسْتِعَانَةُ بِالصَّالِحِينَ مِنْ بَابِ الْمُوَاسَاةِ.",
    },
    {
      order: 4,
      arabic: 'عَلَى الكَافِي صَلَاةُ اللهِ ، عَلَى الشَافِي سَلَامُ اللهِ',
      latin: "'Alal-kafi shalatullah, 'alal-shafi salamullah",
      meaningId:
        'Shalawat Allah atas Nabi Yang Cukup; salam Allah atas Nabi Yang Penyembuh.',
      tafsirId:
        "Di tengah permohonan kepada para wali, bait ini menegakkan pagar: shalawat. Al-Kafi dan Asy-Syafi adalah sifat-sifat Rasulullah ﷺ — mencukupi segala kebutuhan umat dan menyembuhkan hati yang sakit. QS 9:128 menyebutnya: 'sungguh telah datang kepadamu Rasul dari kalangan kalian sendiri, berat penderitaannya menahan kalian, sangat menginginkan keselamatan kalian.' Maka sebelum menyebut para penolong, majelis lebih dahulu menghormati jalan keberkahan itu sendiri: tidak ada tangan wali yang menolong melewati garis kecintaan kepada Nabi. Shalawat adalah kunci yang membuat semua pintu berkah terbuka dengan sopan.",
      tafsirAr:
        "الصَّلَاةُ عَلَى النَّبِيِّ ﷺ مِفْتَاحُ التَّوَسُّلِ: فَهُوَ {كَافٍ} لِأُمَّتِهِ وَ{شَافٍ} لِقُلُوبِهَا، {فِي الْمُؤْمِنِينَ رَءُوفٌ رَحِيمٌ} (التَّوْبَةُ: ١٢٨).",
    },
    {
      order: 5,
      arabic: 'بِمُحْيِي الدِّيْنِ خَلَصْنَا مِنَ البَلْوَى يَا اللهِ',
      latin: 'Bimuhyiddin khalasna minal-balwa ya Allah',
      meaningId:
        'Dengan perantaraan Muhyiddin (penghidup agama), selamatkanlah kami dari segala bala, ya Allah.',
      tafsirId:
        "Muhyiddin adalah laqab Syekh Abdul Qadir al-Jilani — 'yang menghidupkan agama'. Bait ini menyebut beliau secara langsung, karena TQN Qodiriah berdiri di atas sanad kepadanya; lantunan ini juga diabadikan di majelis-majelis Suryalaya dan jalur-jalur Qodiriah-Naqsabandiyah Nusantara. Perhatikan adab lafaznya: seluruh kalimat ditutup dengan 'ya Allah' — permohonan selamat tetap ditujukan kepada Allah, Syekh hanya perantara keberkahan. Doa Yunus (QS 21:87-88) menjadi contohnya: 'tiada Tuhan selain Engkau, Maha Suci Engkau, sesungguhnya aku termasuk orang zalim' — dan Allah menyelamatkan mereka yang berdoa demikian. Bala bertahan sebentar; yang berteduh kepada Allah bertahan selamanya.",
      tafsirAr:
        "الْمُحْيِي لَقَبُ الشَّيْخِ عَبْدِ الْقَادِرِ الْجِيلَانِيِّ، وَالْفَرَاغُ مِنَ الْبَلْوَى لِلَّهِ وَحْدَهُ {لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ} (الْأَنْبِيَاءُ: ٨٧-٨٨).",
    },
    {
      order: 6,
      arabic:
        'وَيَا أَقْطَابُ وَيَا أَنْجَابُ وَيَا سَادَاتُ وَيَا أَحْبَابُ … وَيَا أَحْبَابُ',
      latin: 'Wa ya aqthab, wa ya anjab, wa ya sadat, wa ya ahabb … wa ya ahabb',
      meaningId:
        'Wahai para kutub (poros-poros para wali), wahai para anjab (penjaga setegak paku), wahai para sayyid (pemimpin), wahai para kekasih-Nya.',
      tafsirId:
        "Di sini majelis menyebut peta jabatan para wali dari khazanah tasawuf ahlussunnah: quthb (poros yang berputar di atasnya urusan dunia), anjab (yang menegak seperti paku bangunan), sadat (pemimpin keturunan dan garis ilmu), ahabb (kekasih Allah). Penyebutan ini bukan kosakata gaib yang dijual-jual, melainkan bagian dari pandangan Syekh Abdul Qadir al-Jilani sendiri dalam kitab Al-Ghunyah tentang derajat para auliya. Adabnya: kita menyebut mereka untuk mengingat bahwa Allah tidak meninggalkan dunia ini tanpa penjaga — bukan untuk mengklaim siapa mereka. Allah tahu jajarannya; kita cukup tahu bahwa langit bumi ini tidak pernah kosong.",
      tafsirAr:
        "الْقُطْبُ وَالْأَنْجَابُ وَالسَّادَاتُ مَرَاتِبُ مَشْهُورَةٌ فِي تَرَاثِ أَهْلِ السُّنَّةِ (الْغُنْيَةُ لِلْجِيلَانِيِّ). ذِكْرُهُمْ تَعْرِيفٌ بِرَعَايَةِ اللهِ لِلدُّنْيَا، لَا ادِّعَاءٌ وَلَا تَسْلِيمٌ لِمَنْ لَا يُعْرَفُ.",
    },
    {
      order: 7,
      arabic: 'وَأَنْتُمْ يَا أُلِي الأَلْبَابِ تَعَالَوْا وَانْصُرُوا لِلَّهِ',
      latin: "Wa antum ya ulil-albab, ta'alaw wanshuru lillah",
      meaningId:
        'Dan kalian, wahai para ulul albab (pemilik hati yang cerdas), datanglah dan tolonglah karena Allah.',
      tafsirId:
        "Ulul albab adalah panggilan Al-Qur'an kepada orang-orang yang akalnya berfungsi untuk mengingat Allah: 'orang-orang yang berakal, yang mengingat Allah sambil berdiri, duduk dan berbaring, serta memikirkan penciptaan langit dan bumi' (QS 3:190-191). Bait ini mengajak golongan itu turun ke tengah: tolonglah karena Allah. Menolong di sini tidak selalu berarti mujahadah fisik — cukup menjadi teladan yang baik, menguatkan yang lemah, mengajarkan yang lupa. Majelis TQN dibangun justru di atas tangan-tangan kecil yang bertahan: satu ikhwan yang benar lebih berat daripada seribu penonton.",
      tafsirAr:
        "أُولُو الْأَلْبَابِ {يَذْكُرُونَ اللهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ} (آلِ عِمْرَانَ: ١٩١)، وَالْمَدَدُ لَهُمْ بِالْعِلْمِ وَالْقَدَمِ وَالْقَلْبِ الصَّالِحِ.",
    },
    {
      order: 8,
      arabic:
        'سَأَلْنَاكُمْ سَأَلْنَاكُمْ وَلِلزُّلْفَى رَجَوْنَكُمْ … رَجَوْنَكُمْ',
      latin: "Sa'alnakum sa'alnakum, wa-liz-zulfa rajaunakum … rajaunakum",
      meaningId:
        'Kami meminta kepada kalian, kami meminta kepada kalian, dan karena kedekatan kepada Allah kami berharap kepada kalian.',
      tafsirId:
        "Permintaan diulang dua kali — seperti orang yang menyentuh pundak sahabat lama agar tidak berlebihan bicara. Kata az-zulfa berarti kedekatan; harapan kita kepada para wali hanya setinggi jarak mereka kepada Allah: semakin dekat mereka kepada Allah, semakin wajar keberkahan mengalir dari tangan mereka. Ini keseimbangan yang menegakkan tauhid: kita berharap kepada manusia hanya dalam batas 'ia adalah sahabat Allah', dan Allah sendiri berfirman tentang kedekatan itu: 'Aku lebih dekat kepadanya daripada urat lehernya' (QS 50:16). Yang lupa tujuan mengangkat manusia melebihi batas; yang ingat tujuan mengangkat manusia hanya sampai pintu, lalu mengetuk dengan nama Pemilik rumah.",
      tafsirAr:
        "الرَّجَاءُ بِهِمْ بِقَدْرِ زُلْفَاهُمْ مِنَ اللهِ، وَالقُرْبُ الْحَقِيقِيُّ لِلَّهِ وَحْدَهُ {وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ} (قَ: ١٦).",
    },
    {
      order: 9,
      arabic: 'وَفِي أَمْرٍ قَصَدْنَاكُمْ فَشُدُّوا عَزْمَكُمْ لِلَّهِ',
      latin: "Wa fi amrin qashadnakum, fashuddu 'azmakum lillah",
      meaningId:
        'Dan dalam urusan yang menuntun kami kepada kalian, teguhkanlah tujuan (azam) kalian karena Allah.',
      tafsirId:
        "Bait ini berbicara kepada para penolong itu sendiri: teguhkanlah azam kalian karena Allah. Majelis tidak meminta belas kasihan kepada mereka yang kehilangan arah — ia meminta dari mereka yang arahnya kuat, agar tetap kuat. Azam (tekad) adalah bahan bakar tarekat: QS 94:5-6 menegaskan 'bersama kesulitan ada kemudahan' — tetapi kemudahan itu datang kepada yang tetap berjalan, bukan kepada yang berhenti menunggu. Setiap ikhwan & akhwat yang telah lama berdzikir kadang kehilangan ngarah; bait ini adalah tali yang diselipkan untuk mereka: pegang kembali azam, kerakan lagi tujuan, sebab jalan ini diukur dengan kesungguhan, bukan dengan lamanya duduk.",
      tafsirAr:
        "الْعَزْمَةُ بِاللهِ شَرْطُ السَّلُوكِ: {فَإِنَّ مَعَ الْعُسْرِ يُسْرًا} (الشَّرْحُ: ٥)، وَالسَّلُوكُ يُقَاسُ بِالصِّدْقِ وَالْمُوَاصَلَةِ لَا بِالْمُدَّةِ.",
    },
    {
      order: 10,
      arabic:
        'فَيَا رَبِّي بِسَادَاتِ تَحَقَّقْ لِي إِشَارَتِي … إِشَارَتِي',
      latin: 'Fa ya rabbi bisadati tahaqqaq li isharati … isharati',
      meaningId:
        'Maka ya Rabb-ku, dengan (keberkahan) para sayyid, wujudkanlah bagi aku isyarat (petunjuk-Mu).',
      tafsirId:
        "Perhatikan kembali arah kalimat: permintaan kembali kepada Rabb — 'ya Rabbi'. Yang dimintai wujud adalah isyarat (isyarah/ilham): bimbingan halus yang Allah titipkan ke dalam hati hamba yang rajin menjaga hatinya. Al-Qur'an menyebutnya dalam QS Asy-Syams 91:8 tentang ilham; dan QS 5:16 tentang jalan-jalan menuju Allah yang berlipat. Ilham bukan milik orang sibuk meramal — ia milik hati yang bersih oleh dzikir dan bergantung pada syariat. Itulah sebabnya bait ini muncul setelah bait-bait shalawat dan adab: isyarat tidak turun kepada hati yang lupa jalan, isyarat turun kepada hati yang tahu pintu.",
      tafsirAr:
        "الإِشَارَةُ هِيَ الْإِلْهَامُ الصَّادِقُ الْمُتَّفِقُ مَعَ الشَّرِيعَةِ {وَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا} (الشَّمْسُ: ٨)، وَهُوَ عَطَاءُ اللهِ لِلْقَلْبِ الْمُتَوَارِيِ بِالذِّكْرِ وَالْأَدَبِ.",
    },
    {
      order: 11,
      arabic: 'عَسَى تَأْتِي بِشَارَةٍ وَيَصْفُ وَقْتُنَا لِلَّهِ',
      latin: "Asa ta'ti bisyarah, wayashfu waqtuna lillah",
      meaningId:
        'Mudah-mudahan ia datang membawa kebahagiaan, dan menyucikan waktu kami karena Allah.',
      tafsirId:
        "Bisyarah adalah kebahagiaan yang datang dengan buah petunjuk; wayashfu waqtuna adalah doa agar waktu kami disucikan — dibersihkan dari kesibukan yang menenggelamkan, dari raung yang menghancurkan, dari waktu-waktu kosong yang tidak pernah dijemur dalam cahaya dzikir. Ini doa yang sangat praktis untuk masa kini: banyak hati yang ingat Allah hanya sisa-sisa jam. Majelis TQN mengajarkan pengaturan waktu — wirid pagi, wirid sore, rapel yang tertinggal — karena waktu yang tidak dipagari akan direbut dunia. Yang lupa tujuan mengalir dengan waktunya; yang ingat tujuan memandu waktunya sampai waktunya berakhir dalam genggaman Allah.",
      tafsirAr:
        "الْوَقْتُ أَمِينَةٌ: مَنْ صَافَاهُ بِالذِّكْرِ صَافَاهُ اللهُ بِالْبَشَارَةِ، {وَاذْكُرْ رَبَّكَ كَثِيرًا وَسَبِّحْ بِالْعَشِيِّ وَالْإِبْكَارِ} (آلِ عِمْرَانَ: ٤١).",
    },
    {
      order: 12,
      arabic:
        'بِكَشْفِ الْحِجَابِ عَنْ عَيْنِي وَرَفْعِ البَيْنِ مِنْ بَيْنِ … مِنْ بَيْنِ',
      latin: "Bikashfil-hijabi 'an 'ayni, wa raf'il-bayni min bayni … min bayni",
      meaningId:
        'Dengan terbukanya tirai dari mataku, dan terangkatnya penghalang-penghalang di antara kami.',
      tafsirId:
        "Hijab di sini bukan tirai ruang fisik, melainkan tiga lapisan keruh: hijab di mata (tidak melihat tanda-tanda Allah), bayn di hati (jarak perasaan antara hamba dan Rabb), dan minal bayn (penghalang-penghalang di antara majelis dan kehadiran). Doa ini meminta mereka dicabut satu per satu. QS 2:186 menjadi jaminannya: 'Aku dekat; Aku menjawab doa orang yang berdoa ketika ia berdoa.' Maka dzikir berjamaah inilah mesin pencabut tirai: ketika seratus suara menyebut satu nama, keruh antarhati meleleh dan jarak-hati menguap. Itulah sebabnya majelis TQN tidak pernah dibiarkan sendirian terlalu lama — hati yang jauh dari majelis cepat berkarat.",
      tafsirAr:
        "الْحِجَابُ ثَلَاثَةٌ: عَنِ الْعَيْنِ، وَفِي الْقَلْبِ، وَبَيْنَ الْجَمَاعَةِ. وَرَفْعُهُ بِجَمَاعَةِ الذِّكْرِ وَالْإِقْبَالِ {وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ} (الْبَقَرَةُ: ١٨٦).",
    },
    {
      order: 13,
      arabic:
        'وَطَمْسِي الكَيْفِيَّةِ وَالعَيْنِ بِنُوْرِ الوَجْهِ يَا اللهُ',
      latin: 'Wa thamsil-kayfiyyati wal-ayni binuril-wajhi ya Allah',
      meaningId:
        'Dan hapuskanlah (keraguan tentang) bagaimana dan di mana, dengan cahaya wajah (Dzat)-Nya, ya Allah.',
      tafsirId:
        "Bait penutup adalah mahkota adab tauhid: hapuskanlah dari hatiku semua tanya 'bagaimana' (kayfiyyah) dan 'di mana' ('ayn) tentang Allah — cukuplah cahaya Wajah-Nya. Ini aqidah yang dipegang seluruh ahlussunnah: 'tidak ada sesuatu pun serupa dengan-Nya, dan Dia Yang Maha Mendengar, Maha Melihat' (QS 42:11). Ketika hadits Jibril datang menanyakan iman, jawabannya tidak menyeret akal ke lubang-lubang yang tak bisa diukur; iman berdiri di atas tauhid yang bersih tanpa menghambat sifat-sifat-Nya. Bait ini menjaga majelis dari dua jurang: sebagian orang menyelidiki dengan akal sampai tersesat, sebagian mengada-ada bentuk dan tempat. Majelis TQN memilih jalan ketiga: kenali sifat-Nya dari yang Dia sebut, berdzikirlah dengan nama yang Dia beri — dan diamkan seluruh pertanyaan dengan cahaya.",
      tafsirAr:
        "الْإِيمَانُ بِلَا كَيْفِ شَرْطُ سَلَامِ الْقَلْبِ: {لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ} (الشُّورَى: ١١)، وَالنُّورُ لَا يَحْتَاجُ إِلَى اسْتِقْصَاءِ الْكَيْفِيَّةِ.",
    },
  ],
}

// ============================================================
// 2. SHOLAWAT NURIL ANWAR
//    (kitab Abwabul Faraj — Sayyid Muhammad bin Alwi al-Maliki, Makkah)
// ============================================================

const SHOLAWAT_NURIL_ANWAR: WbEntry = {
  slug: 'sholawat-nuril-anwar',
  kind: 'SHOLAWAT',
  order: 2,
  titleAr: 'صَلَاةُ نُوْرِ الْأَنْوَارِ',
  titleId: 'Sholawat Nuril Anwar',
  titleSu: 'Sholawat Cahaya Segala Cahaya',
  subtitleId: 'Dari kitab "Abwabul Faraj" — Sayyid Muhammad bin Alwi al-Maliki (Makkah)',
  ledeId:
    'Sholawat yang melantunkan cahaya sebagai temanya: Nabi ﷺ adalah cahaya di antara segala cahaya, rahasia di antara segala rahasia, penawar duka, dan pembuka pintu kemudahan. Dilantunkan di banyak majelis dzikir — termasuk majelis-majelis TQN — untuk membuka pintu kegembiraan dan menyambut waktu dzikir.',
  grade: 'C',
  status: 'DOCUMENTED',
  sourceRef:
    'quran.nu.or.id (NU) — transkripsi dari kitab "Abwabul Faraj" karya Sayyid Muhammad bin Alwi al-Maliki al-Hasani (Makkah), diterjemahkan oleh Mahbib Khoiron.',
  noteId:
    'Dibaca berjamaah atau sendiri — pagi/sore atau pembuka majelis. Pada beberapa majelis TQN dilantunkan saat intizar (menunggu waktu sholat/dzikir).',
  verses: [
    {
      order: 1,
      arabic:
        'اَللّٰهُمَّ صَلِّ عَلَى نُوْرِ الْأَنْوَارِ وَسِرِّ الْأَسْرَارِ وَتِرْيَاقِ الْأَغْيَارِ وَمِفْتَاحِ بَابِ الْيَسَارِ سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ الْمُخْتَارِ وَاٰلِهِ الْأَطْهَارِ وَأَصْحَابِهِ الْأَخْيَارِ عَدَدَ نِعَمِ اللّٰهِ وَإِفْضَالِهِ',
      latin:
        "Allahumma shalli 'ala nuril anwar wa sirril asrar wa tiryaqil aghyar wa miftahi babil yasar sayyidina wa maulana Muhammadin al-mukhtar wa alihil athhar wa ashhabihi al-akhyar 'adada ni'amillahi wa ifdlalih",
      meaningSu:
        'Éé Allah, limpahan rahmat ka cahaya di antara sagala cahaya, rahasia di antara sagala rahasia, penawar duka, jeung pamuka pinto kamudahan — Baginda Nabi Muhammad ﷺ nu kapilih, jeung kulawargana nu suci jeung sahabatna nu hadé, saeueung lobana nikmat Allah jeung karunia-Nya.',
      meaningId:
        'Ya Allah, limpahkanlah rahmat keagungan kepada cahaya di antara segala cahaya, rahasia di antara segala rahasia, penawar duka, dan pembuka pintu kemudahan — yakni Baginda Nabi Muhammad ﷺ, manusia pilihan; kepada keluarganya yang suci dan para sahabatnya yang baik, sebanyak jumlah kenikmatan Allah dan karunia-Nya.',
      tafsirId:
        "Empat sebutan indah digandengkan kepada Nabi ﷺ. Nuril anwar — cahaya di antara segala cahaya: QS An-Nur 24:35 mengabarkan Allah sebagai 'Cahaya langit dan bumi', dan Nabi ﷺ diutus sebagai 'sirajan munira' — lampu yang menyinari (QS Al-Ahzab 33:46). Sirril asrar — rahasia di antara segala rahasia: kedalaman makna keutusan yang hanya disibak kepada hati yang bersih. Tiryaqil aghyar — penawar duka: kecintaan kepada baginda adalah penawar bagi hati yang sekarat oleh duniawi. Miftahu babil yasar — kunci pintu kemudahan: sejak diutusnya baginda, pintu-pintu langit terbuka lebih lebar dari sebelumnya. Sholawat ini ditutup dengan mengangkat kalangan terdekat baginda — ahlul bait yang suci dan sahabat yang baik — lalu mengukur semuanya dengan 'adada ni'amillah': sebanyak seluruh nikmat Allah, yang tidak akan habis dihitung. Itulah adab penutupan yang justru membuka: karena nikmat Allah tiada bilangan, maka shalawat juga tiada batas.",
      tafsirAr:
        "صَلَاةُ النُّورِ مَقْصُودُهُ الْإِهْدَاءُ بِمَقَامِ {سِرَاجًا مُنِيرًا} (الْأَحْزَابُ: ٤٦)، وَالِاسْتِمْرَارُ عَلَيْهَا يَفْتَحُ أَبْوَابَ الْفَرَجِ كَمَا سَمَّاهَا مُصَنِّفُهَا «أَبْوَابُ الْفَرَجِ».",
    },
  ],
}

// ============================================================
// 3. WIRIDIAN TQN — PETA ALUR & LAFAZ INTI
//    (lafaz lengkap & hitungan mengikuti ijazah/rapel murshid masing-masing)
// ============================================================

const WIRIDIAN_TQN: WbEntry = {
  slug: 'wiridian-tqn',
  kind: 'WIRIDIAN',
  order: 3,
  titleAr: 'الْوِرْدُ الْمَنْسُوبُ إِلَى الطَّرِيقَةِ الْقَادِرِيَّةِ النَّقْشَبَنْدِيَّةِ',
  titleId: 'Wiridian TQN — Alur & Lafaz Inti',
  titleSu: 'Wiridian TQN — Alur jeung Lafaz Pokok',
  subtitleId:
    'Wirid harian tarekat Qodiriah-Naqsabandiyah — peta alur lafaz inti yang tersambung di majelis-majelis TQN',
  ledeId:
    'Wiridian adalah wirid harian TQN — dilakukan pagi & sore (atau setelah sholat fardhu) secara berjamaah di langgar/musala atau sendirian bagi yang sudah berijazah. Di bawah ini dipaparkan ALUR dan LAFAZ INTI yang tersambung dari majelis ke majelis: dari Al-Fatihah, panggilan kepada Allah yang Agung, kalimat "Ibadallah rijalallah aghitsuna li ajlillah bi-khairillah wa-jammilillah", dzikr kalimat tauhid, dzikr Allah, hingga Al-Fatihah penutup untuk para umara-ulama-murshid dan seluruh ikhwan akhwat. Lafaz lengkap, tartil, dan hitungan ketepatannya mengikuti ijazah & rapel murshid — inilah adab tarekat yang tidak boleh digantikan oleh teks apa pun, termasuk halaman ini.',
  grade: 'B',
  status: 'TRADITIONAL_ACCOUNT',
  sourceRef:
    'Amalan majelis TQN Qodiriah-Naqsabandiyah (Suryalaya, Karawang/Cikangkung, Al-Bantani & turunannya) — transkripsi publik; disandingkan dengan dalil dzikr: QS 13:28, 33:41, hadits "afdzaludz-dzikr" (Tirmidzi), QS 56:74.',
  noteId:
    'Wiridian dijalankan dengan ijazah murshid (atau izin pengurus majelis untuk yang belum berbaiat). Untuk yang belum — cukup dzikir harian umat (istighfar, sholawat, tasbih) tanpa lafaz tarekat. Hitungan & tartil yang berbeda antar-majelis adalah perbedaan yang dihormati, bukan dihakimi.',
  verses: [
    {
      order: 1,
      arabic: 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ — الْفَاتِحَةُ',
      latin: 'Bismillahirrahmanirrahim — Al-Fatihah (pembukaan)',
      meaningSu:
        'Pamuka sadaya bacaan: Fatihah alatan ka Allah, bari dipasihan ka Nabi ﷺ, auliya, umara, ulama, murshid, jeung sagala ikhwan akhwat.',
      meaningId:
        'Pembuka seluruh bacaan: Al-Fatihah — hadiah kepada Allah (Nur-Nya), kemudian untuk Nabi ﷺ, para auliya, umara-ulama, murshid, dan seluruh ikhwan akhwat.',
      tafsirId:
        "Fatihah disebut 'as-suwarul-'azham' dan 'asy-syifa' — hadits menyebutnya sebagai surat paling agung (Bukhari). Dalam wiridian, Fatihah dibaca dengan dua hadiah: pertama untuk Allah (sebagai pemberi cahaya dzikir), kedua untuk Nabi & jajaran keberkahan — hingga seluruh ikhwan akhwat yang berdzikir bersama. Di sinilah letak keramahan tarekat: tidak ada satu dzikir pun yang dimulai untuk diri sendiri; semuanya dibangun untuk bersama, sehingga yang dzikir sendirian pun sedang berdzikir bersama sanad-nya.",
      tafsirAr:
        "الْفَاتِحَةُ أَعْظَمُ السُّوَرِ وَهِيَ الشِّفَاءُ (الْبُخَارِيُّ)، وَالْإِهْدَاءُ الثَّنَائِيُّ يُبْقِي السَّنَدَ حَيًّا فِي كُلِّ وِرْدٍ.",
    },
    {
      order: 2,
      arabic:
        'يَا عَظِيْمَ يَا عَظِيْمَ يَا عَظِيْمَ ، يَا أَرْحَمَ الرَّاحِمِيْنَ ، يَا حَيُّ يَا قَيُّوْمَ ، يَا بَدِيْعَ السَّمَاوَاتِ وَالْأَرْضِ ، يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
      latin:
        "Ya 'Azhim ya 'Azhim ya 'Azhim, ya Arhamar-rahimin, ya Hayyu ya Qayyum, ya Badi'as-samawati wal-ardh, ya Dzal-Jalali wal-Ikram",
      meaningSu:
        'Éé Nu Agung, éé Nu Agung, éé Nu Agung — éé Nu pangpunjanya rahmatna, éé Anu Mahahidup jeung Mahadirikéwan, éé nu ngajieun langit jeung bumi, éé nu boga kagengsiyan jeung darajat.',
      meaningId:
        'Wahai Yang Maha Agung (tiga kali), wahai Yang Paling Penyayang, wahai Yang Mahahidup dan Mahadirikan, wahai Pencipta langit dan bumi, wahai Pemilik Kemuliaan dan Kedudukan Tertinggi.',
      tafsirId:
        "Panggilan dibangun dari nama-nama yang semuanya berakar Al-Qur'an: 'Azhim muncul di QS Al-Waqi'ah 56:74 'mahaagungkanlah nama Rabb-mu'; Arhamar-rahimin dan Hayyu-Qayyum berdiri di dalam ayat kursi (QS 2:255) — nama-nama yang hadits anjurkan sebagai media doa (Tirmidzi); Badi'as-samawati wal-ardh turun di QS Al-Baqarah 2:117; dan Dzal-Jalali wal-Ikram adalah nama yang Al-Qur'an sebut dengan penghormatan tertinggi: 'kekal wajh Rabb-mu yang mempunyai kemuliaan dan kedudukan tertinggi' (QS Ar-Rahman 55:27). Tiga kali 'Ya 'Azhim' seperti mengetuk tiga pintu beruntun: langit, dunia, dan hati. Majelis yang lupa tujuan akan berhenti pada nama; majelis yang ingat tujuan naik dari nama kepada Pemilik nama.",
      tafsirAr:
        "كُلُّ اسْمٍ هُنَا مَشْرُوعٌ فِي الْكِتَابِ: {سَبِّحِ اسْمَ رَبِّكَ الْأَعْظَمِ} (الْوَاقِعَةُ: ٧٤)، وَ{الْحَيُّ الْقَيُّومُ} فِي الْآيَةِ الْكُرْسِيِّ، وَ{ذُو الْجَلَالِ وَالْإِكْرَامِ} (الرَّحْمَٰنُ: ٢٧) بِأَعْلَى التَّكْرِيمِ.",
    },
    {
      order: 3,
      arabic:
        'عِبَادَ اللهِ رِجَالَ اللهِ أَغِيْثُوْنَا لِأَجْلِ اللهِ بِخَيْرِ اللهِ وَجَمِّيْلِ اللهِ',
      latin: 'Ibadallah rijalallah aghitsuna li-ajlillah bi-khairillah wa-jammilillah',
      meaningSu:
        'Éé para narawadul Allah, éé para salakéwan Allah — pitulunglah abdi sadaya alatan ka Allah, ku hadéna Allah jeung éndahna Allah.',
      meaningId:
        'Wahai para hamba Allah, wahai para lelaki (wali) Allah — tolonglah kami karena Allah, dengan kebaikan Allah dan keindahan Allah.',
      tafsirId:
        "Inilah simpul yang menyambung qasidah dan wiridian: kalimat yang sama, dipandu satu arah. Ditambah dua batang sandaran — bi-khairillah (dengan kebaikan Allah) dan wa-jammilillah (dengan keindahan Allah). Di sini tarekat menegakkan pilar aqidahnya di tengah dzikir: sandaran hanya kepada Allah, kebaikan hanya dari Allah, keindahan hanya milik Allah. Para rijalallah yang disebut adalah saudara-saudara di jalan yang lebih dulu tiba — kehadiran mereka menguatkan, bukan menggantikan. Untuk ikhwan & akhwat yang lama berdzikir dan mulai merasa kering, kalimat ini adalah segarannya kembali: bukan air yang lebih baru yang dicari, melainkan tujuan yang lebih tulus yang dibersihkan.",
      tafsirAr:
        "السَّنَدُ وَالوِرْدُ مُتَصَلَّانِ بِجُمْلَةِ التَّوْحِيدِ: الْخَيْرُ مِنَ اللهِ، وَالْجَمَالُ لَهُ، وَالرِّجَالُ لَهُ فِي مَشَاهِدِهِ — فَالْقَلْبُ مُعَلَّقٌ بِاللهِ وَحْدَهُ.",
    },
    {
      order: 4,
      arabic: 'لَا إِلٰهَ إِلَّا اللهُ',
      latin: 'La ilaha illallah (dzikr kalimat tauhid — dengan lafaz & hitungan tarekat)',
      meaningSu: 'Teu aya nu layak diamba salain Allah.',
      meaningId: 'Tiada Tuhan (yang layak disembah) selain Allah.',
      tafsirId:
        "Kalimat paling padat dalam seluruh penjajakan spiritual: meniadakan semua sandaran yang salah, menegakkan satu sandaran yang benar. QS 14:24-25 membandingkannya dengan pohon kelapa yang baik: akarnya kuat, cabangnya ke langit, buahnya sepanjang waktu — begitulah dzikir tauhid membangun hamba. Dalam wiridian TQN ia dibaca dengan tartil dan hitungan tertentu (berbeda antar-majelis — dihormati); yang penting bukan angka yang dipamerkan, melainkan hati yang benar-benar meniadakan. Setiap 'la' yang keluar dari dada seharusnya menghapus satu genggaman dunia; setiap 'illallah' seharusnya menancapkan satu sandaran ke hati.",
      tafsirAr:
        "كَلِمَةُ التَّوْحِيدِ {كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ} (إِبْرَاهِيمُ: ٢٤)، وَهِيَ أَفْضَلُ الذِّكْرِ (التِّرْمِذِيُّ) — وَالْعِدَّةُ تَابِعَةٌ لِلْإِجَازَةِ، وَالْإِخْلَاصُ الْمَقْصُودُ.",
    },
    {
      order: 5,
      arabic: 'اللهُ — اللهُ — اللهُ',
      latin: 'Allah — Allah — Allah (dzikr ismi dzat)',
      meaningSu: 'Allah — Allah — Allah (ngadzikir ngaran Dzat).',
      meaningId: 'Allah — Allah — Allah (dzikr dengan nama Dzat).',
      tafsirId:
        "Puncak wiridian Qodiriah-Naqsabandiyah: dzikir dengan satu nama — Allah. QS Al-A'raf 7:180 mengabarkan 'milik Allah nama-nama terindah, kepada-Nya bermunajatlah dengan nama-nama itu'; dan QS Ar-Ra'd 13:28 menjanjikan hasilnya: 'hanya dengan mengingat Allah hati menjadi tenteram'. Dzikir ismi dzat adalah dzikir yang menyelamatkan dzikir itu sendiri dari keriuhan bentuk: tanpa gambar, tanpa perbandingan, tanpa tujuan lain — hanya nama Pemberi dzikir. Di titik ini ikhwan & akhwat yang lupa tujuan biasanya menemukannya kembali: tujuan dzikir bukan sensasi, bukan kemewahan pengalaman — tujuan dzikir adalah Allah sendiri, dan segala yang lain hanyalah pupuk di sepanjang jalan.",
      tafsirAr:
        "ذِكْرُ الِاسْمِ الْأَعْظَمِ: {لِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا} (الْأَعْرَافُ: ١٨٠)، {أَلَا بِذِكْرِ اللهِ تَطْمَئِنُّ الْقُلُوبُ} (الرَّعْدُ: ٢٨) — وَالْمَقْصُودُ اللهُ لَا الشَّوْقُ.",
    },
    {
      order: 6,
      arabic:
        'اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهٖ وَصَحْبِهٖ وَسَلِّمْ — ثُمَّ الْفَاتِحَةُ',
      latin: "Allahumma shalli 'ala sayyidina Muhammadin wa 'ala alihi wa shahbihi wa sallim — thumma Al-Fatihah",
      meaningSu:
        'Éé Allah, pasihan shalawat ka Nabi Muhammad ﷺ, kulawarga jeung sahabatna, pasihan salamna — tuluy Fatihah panutup dipasihan ka umara, ulama, murshid, jeung sagala ikhwan akhwat.',
      meaningId:
        'Ya Allah, limpahkanlah shalawat kepada Nabi Muhammad ﷺ, keluarga dan para sahabatnya, dan berilah salam — kemudian Al-Fatihah penutup untuk para umara, ulama, murshid, dan seluruh ikhwan akhwat.',
      tafsirId:
        "Wiridian ditutup — tidak diakhiri. Perbedaannya jauh: yang ditutup merasa selesai, yang ditutup dengan shalawat merasa diawali. QS Al-Ahzab 33:56 mengabarkan Allah dan para malaikat sendiri bershalawat kepada Nabi — maka majelis yang ikut bershalawat sedang berdiri di barisan yang tidak pernah bubar. Al-Fatihah penutup mengalirkan hadiahnya berurutan: untuk umara (agar keadilan negara berkah), ulama (agar ilmu tetap hidup), murshid (agar sanad terus mengalir), dan seluruh ikhwan akhwat (agar satu-per-satu terangkat). Dari titik inilah dzikir hari esok dimulai — sebab wiridian TQN bukan acara, melainkan aliran: jeda antar-dzikir hanyalah nafas di tengah kalimat yang belum selesai.",
      tafsirAr:
        "{إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ} (الْأَحْزَابُ: ٥٦) — وَالْإِهْدَاءُ الْخَتَامِيُّ يُجَدِّدُ السَّنَدَ وَيُوَصِّلُ الْبَرَكَةَ إِلَى كُلِّ الْإِخْوَانِ وَالْأَخَوَاتِ.",
    },
  ],
}

// ============================================================
// 4. DZIKIR HARIAN PEMBUKA (UNTUK SEMUA — SEBELUM IJAZAH TAREKAT)
// ============================================================

const DZIKIR_HARIAN: WbEntry = {
  slug: 'dzikir-harian-pembuka',
  kind: 'DZIKIR',
  order: 4,
  titleAr: 'الذِّكْرُ الْيَوْمِيُّ — الْبَوَابَةُ لِلْجَمِيعِ',
  titleId: 'Dzikir Harian Pembuka (untuk semua)',
  titleSu: 'Dzikir Sapauleuleung — Pikeun Sadaya',
  subtitleId:
    'Amalan dzikir harian umat — pintu terbuka bagi siapa pun, sebelum ijazah tarekat',
  ledeId:
    'Bagi yang belum berijazah, belum berbaiat, atau sedang jauh dari majelis — jalan dzikir tetap terbuka. Dzikir harian ini adalah pintu terbuka TQN: istighfar untuk membersihkan, sholawat untuk menyambung, tasbih untuk menegakkan. Dilakukan pagi & sore (atau setiap ingat), berjamaah atau sendirian. Ikhwan & akhwat yang lupa tujuan biasanya justru pulang lewat pintu ini: mulai dari yang ringan, yang jujur, yang bisa dipegang setiap hari.',
  grade: 'C',
  status: 'DOCUMENTED',
  sourceRef:
    'tqnn.org.uk (TQN Qodiriyah Naqsabandiyah) — dzikir harian jahar & khafiy; dalil: QS 11:3 (istighfar), QS 33:56 (shalawat), QS 33:41-42 & 3:191 (dzikr), hadits "istighfar adalah guru amalan" (Abu Dawud).',
  noteId:
    'Aman bagi semua muslim & muslimah — tidak memerlukan ijazah. Disunnahkan berwudhu, menghadap kiblat, dan menjaga waktu (setelah sholat, pagi/sore). Yang lupa waktu: cukup mengganti dengan dzikir saat ingat — "amalan yang paling Allah cintai adalah yang berkesinambungan walaupun sedikit" (Bukhari & Muslim).',
  verses: [
    {
      order: 1,
      arabic: 'أَسْتَغْفِرُ اللهَ الْغَفُوْرَ الرَّحِيْمَ (×٣)',
      latin: "Astaghfirullahal-Ghafurir-Rahim (3x)",
      meaningSu:
        'Abdi naroskeun hampura ka Allah Nu Mahapengampun, Nu Mahasayang. (3 kali)',
      meaningId:
        'Aku memohon ampun kepada Allah Yang Maha Pengampun, Yang Maha Penyayang. (3 kali)',
      tafsirId:
        "Istighfar selalu pertama — bukan karena kita selalu berdosa besar, tetapi karena kita selalu berkarat kecil: satu hari tanpa dzikir sudah menempel debu pada hati. QS Hud 11:3 memerintahkannya sebagai jalan datangnya rezeki dan kekuatan: 'mohonlah ampun kepada Rabb-mu; sungguh Dia Maha Pengampun — niscaya Dia menurunkan hujan ke atasmu dan menambah kekuatan'. Para ulama menyebut istighfar 'guru amalan' (Abu Dawud): ia menasihati sebelum mengajarkan. Maka sebelum naik ke sholawat dan tasbih, bersihkan dulu cermin — agar semua bacaan setelahnya jatuh ke hati yang lapang, bukan hati yang penuh.",
      tafsirAr:
        "الاسْتِغْفَارُ أُسْتَاذُ الْأَعْمَالِ (أَبُو دَاوُدَ): {اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا} (هُودُ: ٣) — تُطَهَّرُ الْمِرْآةُ قَبْلَ الْإِقْبَالِ.",
    },
    {
      order: 2,
      arabic:
        'اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهٖ وَصَحْبِهٖ وَسَلِّمْ (×٣)',
      latin: "Allahumma shalli 'ala sayyidina Muhammadin wa 'ala alihi wa shahbihi wa sallim (3x)",
      meaningSu:
        'Éé Allah, pasihan shalawat ka Nabi Muhammad ﷺ jeung kulawargana jeung sahabatna, pasihan salamna. (3 kali)',
      meaningId:
        'Ya Allah, limpahkanlah shalawat kepada Nabi Muhammad ﷺ, keluarga dan para sahabatnya, dan berilah salam. (3 kali)',
      tafsirId:
        "Shalawat menyambung: setelah hati bersih dari istighfar, ia disambungkan ke sumur yang tak pernah kering — kecintaan kepada Rasulullah ﷺ. QS Al-Ahzab 33:56 mengabarkan Allah sendiri bershalawat, malaikat ikut bershalawat, lalu memerintah kita: 'wahai orang beriman, bershalawatlah kepadanya dan banyak-banyaklah bershalawat'. Riwayat Muslim menyebut satu shalawat dibalas sepuluh amal — dan orang yang paling layak disebut kikir adalah yang mendengar nama baginda disebut namun tidak bershalawat. Bagi yang jauh dari majelis, shalawat adalah benang terdekat: tidak butuh tempat, tidak butuh ijazah, tidak butuh pembawa — cukup hati yang memanggil dan lidah yang menyebut. Sehingga tidak ada satu ikhwan atau akhwat pun yang benar-benar terputus, kecuali karena berhenti menyebut.",
      tafsirAr:
        "{إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ} (الْأَحْزَابُ: ٥٦)، وَالصَّلَاةُ مِنْهُ عَشْرًا (مُسْلِمٌ) — وَهِيَ الْخَيْطُ الْقَرِيبُ لِمَنْ بَعُدَ عَنِ الْمَجْلِسِ.",
    },
    {
      order: 3,
      arabic:
        'سُبْحَانَ اللهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ',
      latin: 'Subhanallah walhamdulillah wala ilaha illallah wallahu akbar',
      meaningSu:
        'Sagala kakurahan milik Allah, sagala puji milik Allah, teu aya nu layak diamba salain Allah, Allah Nu Luhung.',
      meaningId:
        'Mahasuci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, Allah Maha Besar.',
      tafsirId:
        "Empat kalimat yang menjadi bangunan pilar harian umat: tasbih (membersihkan dari penglihatan yang salah), tahmid (menyusun rasa syukur), tahlil (menegakkan tauhid), takbir (mengagungkan Allah di atas semua masalah). Rasulullah ﷺ menyebut keempatnya sebagai kalimat yang paling disayangi Allah, paling ringan di lisan, dan paling berat di timbangan (Muslim). Bagi yang lupa tujuan — mulailah dari sini setiap pagi dan sore; jangan menunggu niat yang megah, mulai dari kalimat yang benar. QS 33:41-42 memerintah 'dzikirlah kepada Allah dengan dzikir yang banyak dan bertasbihlah pagi dan petang' — dan QS 3:191 menggambarkan buahnya: hati yang mengingat Allah sambil berdiri, duduk dan berbaring. Tujuan tidak datang seperti kilat; tujuan pulih seperti sembuh — sedikit, jujur, setiap hari.",
      tafsirAr:
        "أَحَبُّ الْكَلِمِ إِلَى اللهِ (مُسْلِمٌ)، {وَاذْكُرُوا اللهَ ذِكْرًا كَثِيرًا وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا} (الْأَحْزَابُ: ٤١-٤٢) — وَالْقَصْدُ يَسْتَعِيدُ نَفْسَهُ كَمَا يُشْفَى الْمَرَضُ: قَلِيلًا صَادِقًا كُلَّ يَوْمٍ.",
    },
  ],
}

export const WIRIDIAN_ENTRIES: WbEntry[] = [
  QASIDAH_IBADALLAH,
  SHOLAWAT_NURIL_ANWAR,
  WIRIDIAN_TQN,
  DZIKIR_HARIAN,
]

// ---------- teks ruang (untuk i18n — default id) ----------
export const WB_LEDE: WbLang = {
  id: 'Ruang bacaan TQN: qasidah, sholawat, wiridian & dzikir — teks Arab terlestarikan, transliterasi Latin, arti Bahasa Sunda & Bahasa Indonesia, dan tafsir makna yang diurut dengan rapi. Ditulis khusus untuk ikhwan & akhwat yang lupa tujuan: agar bacaan kembali bermakna, arah permohonan kembali lurus, dan dzikir kembali pulang kepada Allah.',
  en: 'TQN readings: qasidah, shalawat, wiridian & dhikr — preserved Arabic text, Latin transliteration, meaning in Sundanese & Indonesian, and carefully ordered meaning-commentary. Written especially for brothers & sisters who have forgotten their purpose: so that the reading becomes meaningful again, the direction of request straight again, and dhikr returns home to Allah.',
}

export const WB_ADAB: WbLang = {
  id: 'Adab ruang ini: baca dengan tartil, pahami arti di samping teks — jangan menghafal tanpa makna, dan jangan mengubah lafaz. Amalan tarekat (wiridian lengkap, hitungan, rapel) mengikuti ijazah murshid; ruang ini hanya peta & pengingat. Terjemahan adalah terjemahan makna — bukan pengganti mushaf.',
  en: 'The adab of this room: recite with tartil, understand the meaning beside the text — do not memorize without meaning, and do not alter the wording. Tariqa practice (full wiridian, counts, make-up) follows the murshid ijazah; this room is only a map & reminder. Translations are meaning-translations — not a substitute for the mushaf.',
}

export const WB_TUJUAN: WbLang = {
  id: 'Untuk yang lupa tujuan: mulailah dari Dzikir Harian Pembuka (aman bagi semua). Baca qasidah Ibadallah pelan-pelan sambil memahami artinya — maka arah permohonan akan lurus kembali. Tujuan dzikir bukan pengalaman, bukan sensasi — tujuan dzikir adalah Allah sendiri; dan Allah tidak pernah jauh dari lidah yang menyebut-Nya.',
  en: 'For those who have forgotten: start with the Opening Daily Dhikr (safe for all). Recite the Ibadallah qasidah slowly while understanding its meaning — and the direction of your request will straighten again. The purpose of dhikr is not experience, not sensation — the purpose of dhikr is Allah Himself; and Allah is never far from a tongue that mentions Him.',
}
