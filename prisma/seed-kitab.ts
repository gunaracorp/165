// ============================================================
// 165 — Seed KITAB dwibahasa Arab–Indonesia (CMS 165)
// Jilid pertama yang ditulis lewat Role Activation
// "Master Polymath Sage Universal — Gabungan Dewan Pakar 46":
//   1) Fathur Rabbani  — Maqdam + 8 bab (tawhid, dzikir, adab…)
//   2) Mujarrabat 165  — 2 bab (istikharah urusan & sakinah rumah)
// Jalankan: bun prisma/seed-kitab.ts   (idempoten — aman diulang;
// kitab yang sudah ada TIDAK ditimpa agar suntingan admin tetap utuh)
// ============================================================
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const AUTHOR = 'Master Polymath Sage Universal — Gabungan Dewan Pakar 46 (Role Activation, tiap bidang 150 tahun)'

type BabSeed = {
  order: number
  titleAr: string
  titleId: string
  arabic: string
  indonesian: string
  kunciAmal: string[]
}

type KitabSeed = {
  slug: string
  order: number
  titleAr: string
  titleId: string
  subtitleId: string
  ledeId: string
  ledeAr: string
  bab: BabSeed[]
}

const KITAB_SEEDS: KitabSeed[] = [
  {
    slug: 'fathur-rabbani',
    order: 1,
    titleAr: 'الفَتْحُ الرَّبَّانِي',
    titleId: 'Fathur Rabbani — Bukaan dari Tuhan',
    subtitleId: 'Jilid 1 seri kitab 165: jalan tawhid, dzikir, dan adab — dwibahasa Arab–Indonesia',
    ledeId: 'Kitab pertama seri 165, disusun lewat Role Activation Master Polymath Sage Universal — gabungan Dewan Pakar 46 lintas bidang. Tujuh bab inti + maqdam: dari tawhid dan ikhlas, dzikir khafi, muraqabah, adab kepada mursyid, muhasabah dan tawakal, keluarga dan rezeki, sampai khatam dan wirid harian. Setiap bab berisi teks Arab, terjemah makna Bahasa Indonesia, dan kunci amalan.',
    ledeAr: 'وَهَٰذَا كِتَابٌ فِي أَبْوَابِ الطَّرِيقِ: التَّوْحِيدُ، وَالذِّكْرُ، وَالْأَدَبُ، وَالْمُحَاسَبَةُ؛ مَكْتُوبٌ بِاللُّغَتَيْنِ: الْعَرَبِيَّةِ وَالْإِنْدُونِيسِيَّةِ، لِأَهْلِ الطَّرِيقَةِ النَّقْشَبَنْدِيَّةِ الْمُعْتَبَرَةِ فِي جَلَالَةِ الْمِئَتَيْنِ وَالخَمْسَةِ وَالسَّتِّينَ.',
    bab: [
      {
        order: 0,
        titleAr: 'الْمَقْدَمُ',
        titleId: 'Maqdam — Pendahuluan',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى سَيِّدِنَا مُحَمَّدٍ رَسُولِ اللَّهِ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ، أَمَّا بَعْدُ: فَهَٰذَا كِتَابٌ نَسَمَّيْنَاهُ «الفَتْحُ الرَّبَّانِي»، وَهُوَ بَابٌ مِنْ أَبْوَابِ الطَّرِيقَةِ النَّقْشَبَنْدِيَّةِ الْمُعْتَبَرَةِ؛ وَضَعْنَاهُ لِلتَّذْكِيرِ وَالتَّهْذِيبِ وَالتَّنْقِيَةِ. قَالَ اللَّهُ تَعَالَىٰ: «وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنْفَعُ الْمُؤْمِنِينَ». فَمَنْ أَخْلَصَ لِلَّهِ، وَاتَّبَعَ الْمُرْشِدَ فِي الْخَيْرِ، وَأَلْزَمَ الذِّكْرَ، فَإِنَّ اللَّهَ يَفْتَحُ لَهُ أَبْوَابَ الْفَهْمِ وَالسَّكِينَةِ وَالْهِدَايَةِ. وَالتَّوْفِيقُ مِنَ اللَّهِ وَحْدَهُ.',
        indonesian: 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah Tuhan semesta alam; shalawat dan salam atas junjungan kami Nabi Muhammad rasul Allah, keluarganya, dan para sahabatnya seluruhnya.\n\nAmma ba\u2019du — kitab ini kami namai "Fathur Rabbani" (Bukaan dari Tuhan). Ia satu pintu dari pintu-pintu Thariqat Naqsyabandiyah yang mu\u2019tabar, kami susun untuk tiga perkara: mengingatkan (tazkirah), mendidik budi (tahdzib), dan membersihkan jiwa (tazkiyah).\n\nAllah Ta\u2019ala berfirman: "Dan berilah peringatan, karena sesungguhnya peringatan itu bermanfaat bagi orang-orang beriman." (Qs. Adz-Dzariyat [51]: 55)\n\nMaka barang siapa mengikhlaskan diri karena Allah, mengikuti mursyidnya dalam kebaikan, dan konsisten berdzikir — Allah akan membukakan baginya pintu-pintu pemahaman, ketenangan, dan petunjuk. Hanya Allah tempat meminta taufik.',
        kunciAmal: [
          'Niatkan belajar kitab ini untuk membersihkan diri, bukan untuk mencari-cari kesalahan orang lain.',
          'Pelajari perlahan: satu bab dalam satu pekan, dibaca bersama majelis bila memungkinkan.',
          'Praktikkan "kunci amalan" di tiap bab sebelum melanjutkan ke bab berikutnya.',
        ],
      },
      {
        order: 1,
        titleAr: 'التَّوْحِيدُ وَالْإِخْلَاصُ',
        titleId: 'Bab 1 — At-Tauhid wal-Ikhlas (Tawhid dan Ikhlas)',
        arabic: 'إِلَٰهُنَا وَاحِدٌ لَا شَرِيكَ لَهُ. قَالَ اللَّهُ تَعَالَىٰ: «قُلْ هُوَ اللَّهُ أَحَدٌ». وَسِرُّ الطَّرِيقِ الصَّحِيحِ هُوَ الْإِخْلَاصُ: أَنْ يَكُونَ سَعْيُ الْعَبْدِ لِوَجْهِ اللَّهِ وَحْدَهُ، لَا لِلرِّيَاءِ وَلَا لِلسُّمْعَةِ. قَالَ تَعَالَىٰ: «قَدْ أَفْلَحَ مَنْ زَكَّاهَا». فَإِذَا أَخْلَصَ الْعَبْدُ، صَفَا قَلْبُهُ، وَبَصُرَ الْحَقَّ، وَرُزِقَ السَّكِينَةَ فِي الدُّنْيَا وَالْجَنَّةَ فِي الْآخِرَةِ بِإِذْنِ اللَّهِ.',
        indonesian: 'Tuhan kita Esa, tiada sekutu bagi-Nya. Allah Ta\u2019ala berfirman: "Katakanlah: Dialah Allah Yang Maha Esa." (Qs. Al-Ikhlas [112]: 1)\n\nRahasia jalan yang benar adalah ikhlas: seluruh usaha seorang hamba diarahkan hanya untuk wajah Allah — bukan untuk dipuji manusia, bukan pula demi nama baik. Allah Ta\u2019ala berfirman: "Beruntunglah orang yang menyucikan jiwanya." (Qs. Asy-Syams [91]: 9)\n\nBila seorang hamba ikhlas, hatinya menjadi jernih, matanya melihat kebenaran, dan ia dianugerahi ketenangan di dunia serta surga di akhirat — dengan izin Allah.',
        kunciAmal: [
          'Sebelum setiap wirid, periksa niat dengan satu kalimat: "hanya karena Allah".',
          'Sembunyikan sebagian amal baikmu; cukup Allah yang mengetahuinya.',
          'Bila riya\u2019 hadir di hati, tarik kembali niatmu dan perbarui maksud mulia.',
        ],
      },
      {
        order: 2,
        titleAr: 'الطَّرِيقَةُ النَّقْشَبَنْدِيَّةُ',
        titleId: 'Bab 2 — Thariqat Naqsyabandiyah',
        arabic: 'الطَّرِيقَةُ النَّقْشَبَنْدِيَّةُ طَرِيقَةٌ مُعْتَبَرَةٌ، مَنْهَاجُهَا الْكِتَابُ وَالسُّنَّةُ. وَمِنْ خَوَاصِّهَا أَنَّ ذِكْرَهَا خَفِيٌّ فِي الصَّدْرِ: بِلَا حَرَكَةٍ، بِلَا لَفْظٍ، بِلَا صَوْتٍ. وَأَرْكَانُهَا الِاعْتِقَادُ الصَّحِيحُ، وَالذِّكْرُ الْقَلْبِيُّ، وَالْمُشَاهَدَةُ. قَالَ تَعَالَىٰ: «إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ لِمَنْ كَانَ لَهُ قَلْبٌ».',
        indonesian: 'Thariqat Naqsyabandiyah adalah jalan yang mu\u2019tabar; manhajnya Al-Qur\u2019an dan Sunnah. Ia tidak menerima satu pun pengalaman batin yang bertentangan dengan keduanya.\n\nSalah satu kekhasannya: dzikirnya khafi (tersembunyi) di dalam dada — tanpa gerakan, tanpa lafaz, tanpa suara. Pokok-pokoknya tiga: akidah yang benar, dzikir yang hidup di hati, dan mushahadah — menghadirkan diri di hadapan Allah.\n\nAllah Ta\u2019ala berfirman: "Sesungguhnya pada yang demikian itu sungguh terdapat peringatan bagi siapa yang memiliki hati." (Qs. Qaf [50]: 37)',
        kunciAmal: [
          'Pegang rujukan: Al-Qur\u2019an dan Sunnah adalah hakim di atas segala pengalaman.',
          'Dzikir khafi bukan mencari ghaib — ia kembali menyadari hadirnya Allah.',
          'Jaga jamaah; jangan berjalan sendiri-sendiri di jalan ini.',
        ],
      },
      {
        order: 3,
        titleAr: 'الذِّكْرُ الْقَلْبِيُّ الْخَفِيُّ',
        titleId: 'Bab 3 — Dzikir Khafi di Hati (Laqadz)',
        arabic: 'الذِّكْرُ عَيْنُ الطَّرِيقِ. قَالَ تَعَالَىٰ: «أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ». وَوِرْدُ طَرِيقَتِنَا: ذِكْرُ الْقَلْبِ الْخَفِيِّ «لَا إِلَٰهَ إِلَّا اللَّهُ»، سَاعَةً بِسَاعَةٍ، يَوْمًا بِيَوْمٍ. فَإِذَا حَضَرَتِ الْغَفْلَةُ، فَعُدْ إِلَى الذِّكْرِ فَوْرًا. قَالَ تَعَالَىٰ: «يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا».',
        indonesian: 'Dzikir adalah inti jalan ini. Allah Ta\u2019ala berfirman: "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram." (Qs. Ar-Ra\u2019d [13]: 28)\n\nWirid di jalan kita: dzikir khafi di hati — kalimat tauhid "lā ilāha illāllāh" yang dilekatkan dalam dada (di majelis TQN dikenal sebagai laqadz) — berjalan sementara kamu bekerja: jam demi jam, hari demi hari. Ketika lalai datang, kembalilah ke dzikir dengan segera; kembalinya itulah latihan sebenarnya.\n\nAllah Ta\u2019ala berfirman: "Wahai orang-orang yang beriman, ingatlah Allah sebanyak-banyaknya, dan bertasbihlah kepada-Nya pada waktu pagi dan petang." (Qs. Al-Ahzab [33]: 41-42)',
        kunciAmal: [
          'Pasang "titik kembali": setiap berganti jam, hadirkan kembali laqadz semenyah.',
          'Kalimatnya satu — lā ilāha illāllāh; jangan ditukar-tukar.',
          'Kualitas kehadiran hati lebih utama daripada banyaknya hitungan.',
        ],
      },
      {
        order: 4,
        titleAr: 'الْمُرَاقَبَةُ',
        titleId: 'Bab 4 — Al-Muraqabah (Mengawasi Diri di Hadapan Allah)',
        arabic: 'الْمُرَاقَبَةُ: أَنْ يَحْضُرَ الْعَبْدُ أَنَّ اللَّهَ يَرَاهُ فِي كُلِّ حِينٍ. قَالَ تَعَالَىٰ: «أَلَمْ يَعْلَمْ بِأَنَّ اللَّهَ يَرَىٰ». وَقَالَ تَعَالَىٰ: «وَهُوَ مَعَكُمْ أَيْنَ مَا كُنْتُمْ». فَإِذَا حَفِظَ الْعَبْدُ هَٰذَا الْمَعْنَى، تَرَكَ مَا يُحْزِنُ رَبَّهُ، وَأَحْسَنَ صَلَاتَهُ، وَصَفَا قَلْبُهُ.',
        indonesian: 'Muraqabah adalah menghadirkan keyakinan bahwa Allah melihatmu pada setiap saat. Allah Ta\u2019ala berfirman: "Tidakkah ia mengetahui bahwa Allah melihat?" (Qs. Al-Buruj [85]: 14). Dan firman-Nya: "Dan Dia bersama kamu di mana pun kamu berada." (Qs. Al-Hadid [57]: 4)\n\nBila makna ini terjaga di hati, seorang hamba meninggalkan apa yang menyedihkan Rabbnya, memperelok shalatnya, dan hatinya menjadi jernih. Muraqabah bukan rasa takut yang melumpuhkan — ia rasa malu yang memuliakan.',
        kunciAmal: [
          'Sebelum berbuat apa pun, tahan diri seperempat detik sambil berkata dalam hati: "Allah melihatku."',
          'Jaga wajah, lisan, dan layar ponselmu — semuanya wilayah muraqabah zaman ini.',
          'Tutup hari dengan duduk tenang di hadapan Allah semenyah di tempat sujud.',
        ],
      },
      {
        order: 5,
        titleAr: 'الْأَدَبُ إِلَى الْمُرْشِدِ',
        titleId: 'Bab 5 — Adab kepada Mursyid',
        arabic: 'لِلْمُرْشِدِ حَقٌّ عَظِيمٌ: الِاقْتِدَاءُ بِهِ فِي الْعَقِيدَةِ وَالْمَنْهَجِ وَالْخُلُقِ، وَحِفْظُ الْجَمَاعَةِ، وَالتَّوَاضُعُ فِي مَجْلِسِهِ. وَقَالَ تَعَالَىٰ: «يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنْكُمْ». وَلَٰكِنَّ الْعِبَادَةَ لِلَّهِ وَحْدَهُ؛ فَلَا طَاعَةَ لِمَخْلُوقٍ فِي مَعْصِيَةِ الْخَالِقِ، وَلَا يُتَّخَذُ الْمُرْشِدُ إِلَّا مَنْ هُوَ عَلَى الْعِلْمِ وَالدَّلِيلِ.',
        indonesian: 'Mursyid memiliki hak besar: diikuti teladannya dalam akidah, manhaj, dan akhlak; dijaganya jamaah; dan dijaganya rasa hormat di majelisnya. Allah Ta\u2019ala berfirman: "Wahai orang-orang yang beriman, taatilah Allah dan taatilah rasul, serta ulil amri di antara kamu." (Qs. An-Nisa [4]: 59)\n\nNamun ibadah hanyalah untuk Allah semata. Tidak ada ketaatan kepada makhluk dalam kemaksiatan kepada Khaliq; dan tidak pula seorang mursyid itu diambil kecuali ia berdiri di atas ilmu dan dalil. Adab kepada mursyid adalah adab kepada jalan — bukan menyembah manusia.',
        kunciAmal: [
          'Adab adalah ilmu pertama; ilmu tanpa adab tidak tinggal lama.',
          'Hormati mursyid sebagaimana murid menghormati gurunya — jangan menyembahnya.',
          'Bila ada hal yang janggal, tanyakan dengan sopan kepada yang berhak — jangan disebar.',
        ],
      },
      {
        order: 6,
        titleAr: 'الْمُحَاسَبَةُ وَالتَّوَكُّلُ',
        titleId: 'Bab 6 — Muhasabah dan Tawakal',
        arabic: 'الْمُحَاسَبَةُ: أَنْ يُفَحِّصَ الْعَبْدُ عَمَلَهُ فِي أَوَّلِ اللَّيْلِ وَآخِرِهِ. قَالَ تَعَالَىٰ: «يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنْظُرْ نَفْسٌ مَا قَدَّمَتْ لِغَدٍ». وَالتَّوَكُّلُ: أَنْ يُعْهِدَ أَمْرَهُ إِلَى اللَّهِ بَعْدَ الِاعْتِزَامِ وَالْكَسْبِ. قَالَ تَعَالَىٰ: «وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ».',
        indonesian: 'Muhasabah: hamba memeriksa amalnya di awal malam dan di akhirnya — apa yang diperbuat hari ini, apa yang harus diperbaiki esok. Allah Ta\u2019ala berfirman: "Wahai orang-orang yang beriman, bertakwalah kepada Allah dan pandanglah apa yang telah diperbuat untuk hari esok." (Qs. Al-Hasyr [59]: 18)\n\nTawakal: menyerahkan urusan kepada Allah setelah ada azam (tekad) dan ikhtiar mencari. Allah Ta\u2019ala berfirman: "Barang siapa bertakwa kepada Allah, niscaya Dia membuat jalan keluar baginya dan memberinya rezeki dari arah yang tidak disangka-sangkanya." (Qs. At-Talaq [65]: 2-3)\n\nMuhasabah tanpa tawakal melahirkan putus asa; tawakal tanpa muhasabah melahirkan kemalasan. Keduanya berjalan beriringan.',
        kunciAmal: [
          'Siapkan buku kecil muhasabah: satu amal terbaik dan satu kesalahan setiap hari.',
          'Berikhtiar dengan cara halal, lalu sandarkan hasilnya kepada Allah.',
          'Bila urusan seret, periksa silap langkahmu — jangan menyalahkan harapan.',
        ],
      },
      {
        order: 7,
        titleAr: 'الْأُسْرَةُ وَالرِّزْقُ',
        titleId: 'Bab 7 — Keluarga dan Rezeki',
        arabic: 'الْأُسْرَةُ سَكِينَةُ السَّالِكِ؛ فَالرِّفْقُ بِالزَّوْجَةِ وَالْوَلَدِ عِبَادَةٌ. قَالَ تَعَالَىٰ: «رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا». وَالرِّزْقُ بِيَدِ اللَّهِ وَحْدَهُ؛ فَابْتَغُوا مِنْ فَضْلِ اللَّهِ بِالْحَلَالِ، وَحُسْنُ الظَّنِّ بِاللَّهِ مِنْ شُرُوطِ الْإِيمَانِ. قَالَ تَعَالَىٰ: «لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ».',
        indonesian: 'Keluarga adalah ketenangan seorang salik; berlaku lembut kepada istri/suami dan anak adalah ibadah. Allah Ta\u2019ala berfirman: "Ya Rabb kami, anugerahkanlah kepada kami pasangan dan keturunan sebagai penyejuk mata, dan jadikanlah kami pemimpin bagi orang-orang bertakwa." (Qs. Al-Furqan [25]: 74)\n\nRezeki ada di tangan Allah semata; usahakanlah ia dengan cara halal — "maka apabila telah ditunaikan shalat, bertebarlah di bumi, carilah karunia Allah" (Qs. Al-Jumu\u2019ah [62]: 10) — dan berbaik sangka kepada Allah, karena itu bagian dari iman. Allah Ta\u2019ala berfirman: "Sesungguhnya jika kamu bersyukur, pasti Kami akan menambah (nikmat) kepadamu." (Qs. Ibrahim [14]: 7)\n\nDua rakaat sebelum membuka pintu usaha, senyum untuk keluarga, dan sedekah kecil yang rutin — tiga kunci berkah yang jarang gagal.',
        kunciAmal: [
          'Berbicaralah paling indah kepada keluarga; jangan semua santun habis di luar rumah.',
          'Dua rakaat dan satu doa sebelum memulai kerja atau membuka pintu usaha.',
          'Catat rezeki, syukuri dengan lisan, dan sedekahkan sedikit secara rutin.',
        ],
      },
      {
        order: 8,
        titleAr: 'الْخَتْمُ وَالْوِرْدُ الْيَوْمِيُّ',
        titleId: 'Bab 8 — Khatam dan Wirid Harian',
        arabic: 'الْوِرْدُ الْيَوْمِيُّ فِي طَرِيقَتِنَا: الْخَتْمُ، وَذِكْرُ الْقَلْبِ الْخَفِيِّ، وَالأَذْكَارُ الصَّبَاحِيَّةُ وَالْمَسَائِيَّةُ؛ وَأَهَمُّهَا حُضُورُ الْقَلْبِ. وَالنَّصِيحَةُ: لَا تُكَثِّرِ الْعَدَدَ مِنْ غَيْرِ حُضُورٍ. قَالَ تَعَالَىٰ: «فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ». وَإِذَا فَرَغْتَ مِنْ وِرْدِكَ، فَاسْأَلِ اللَّهَ صَالِحَ الدُّنْيَا وَالْآخِرَةِ؛ فَإِنَّ اللَّهَ كَرِيمٌ يُجِيبُ دُعَاءَ مَنْ دَعَاهُ بِفَضْلِهِ وَكَرَمِهِ.',
        indonesian: 'Wirid harian di jalan kita: khatam, dzikir khafi di hati, dan zikir-zikir pagi serta petang; yang paling utama dari semuanya adalah kehadiran hati. Nasihat kami: jangan banyak-banyakkan hitungan tanpa kehadiran — sepuluh dengan hati hadir lebih hampir daripada seribu yang lalai.\n\nAllah Ta\u2019ala berfirman: "Maka ingatlah Aku, niscaya Aku pun akan mengingatmu; bersyukurlah kepada-Ku, dan janganlah kamu mengingkari (nikmat)-Ku." (Qs. Al-Baqarah [2]: 152)\n\nSetiap selesai wirid, mohonlah kepada Allah kebaikan dunia dan akhirat; sesungguhnya Allah Maha Pemurah, Dia menjawab doa orang yang memanggil-Nya dengan karunia dan kemuliaan-Nya.',
        kunciAmal: [
          'Jaga jam wirid pagi–sore seperti jaga shalat: presisi, tidak digeser-geser.',
          'Mulai khatam dengan tenang; akhiri dengan satu doa yang benar-benar dari hati.',
          'Bila lelah, kurangi jumlahnya — jangan hilangkan kehadiran hatinya.',
        ],
      },
    ],
  },
  {
    slug: 'mujarrabat-165',
    order: 2,
    titleAr: 'المُجَرَّبَاتُ',
    titleId: 'Mujarrabat 165 — Resep Jiwa yang Teruji',
    subtitleId: 'Seri kedua: nasihat ringkas untuk urusan dunia yang seret dan rumah yang harus tenang',
    ledeId: 'Seri kedua kitab 165: halaman-halaman pendek untuk dipakai langsung. Bab demi bab ditambahkan satu per satu lewat CMS — mulai dari bila urusan seret (istikharah dan azam) dan sakinah di rumah (wirid keluarga).',
    ledeAr: 'وَهَٰذِهِ صِفَاتٌ مُجَرَّبَةٌ مِنْ أَدْوِيَةِ الْقُلُوبِ عِنْدَ أَهْلِ الطَّرِيقِ؛ نَصِيحَةٌ مُخْتَصَرَةٌ عَمَلِيَّةٌ، تُكْتَبُ بَابًا بَعْدَ بَابٍ.',
    bab: [
      {
        order: 1,
        titleAr: 'إِذَا ضَاقَ عَلَيْكَ الْأَمْرُ',
        titleId: 'Bab 1 — Bila Urusan Seret',
        arabic: 'إِذَا ضَاقَ عَلَيْكَ الْأَمْرُ، فَأَوَّلُ الْعِلَاجِ الصَّبْرُ، وَثَانِيَهُ مُرَاجَعَةُ الْخُطَى، وَثَالِثَهُ الِاسْتِخَارَةُ. قَالَ تَعَالَىٰ: «إِنَّ مَعَ الْعُسْرِ يُسْرًا». وَقَالَ تَعَالَىٰ: «رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي». فَلَا تُقَدِّمْ الْيَأْسَ عَلَى الْعَزْمِ؛ فَإِنَّ اللَّهَ يَفْتَحُ الْأَبْوَابَ لِمَنْ أَحْسَنَ الظَّنَّ بِهِ وَسَعَى.',
        indonesian: 'Bila urusanmu sempit dan seret, tiga obatnya berurutan: pertama sabar (tahan napas, tahan keputusan); kedua mengulur kembali langkah (periksa mana yang silap); ketiga istikharah (minta petunjuk kepada Allah).\n\nAllah Ta\u2019ala berfirman: "Sesungguhnya bersama kesulitan ada kemudahan." (Qs. Al-Insyirah [94]: 6). Dan doa Nabi Musa \u2018alaihissalam: "Ya Rabbku, lapangkanlah dadaku dan mudahkanlah urusanku." (Qs. Thaha [20]: 25-26)\n\nMaka jangan kedepankan putus asa di atas azam; sesungguhnya Allah membukakan pintu-pintu bagi orang yang berbaik sangka kepada-Nya dan tetap berusaha.',
        kunciAmal: [
          'Tiga tarikan napas panjang, sepuluh laqadz — baru putuskan langkah berikutnya.',
          'Tulis tiga opsi jalan keluar; pilih yang paling dekat dengan yang halal.',
          'Minta istikharah, dan minta pandangan orang yang memahami keadaanmu.',
        ],
      },
      {
        order: 2,
        titleAr: 'السَّكِينَةُ فِي الْبَيْتِ',
        titleId: 'Bab 2 — Sakinah di Rumah',
        arabic: 'السَّكِينَةُ نَصِيبُ الْبُيُوتِ الَّتِي فِيهَا الذِّكْرُ وَاللُّطْفُ وَالصَّلَاةُ فِي الْجَمَاعَةِ. قَالَ تَعَالَىٰ: «أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ». فَاجْعَلُوا لِلْبَيْتِ وِرْدًا صَغِيرًا: بَعْدَ الْمَغْرِبِ، عَشْرُ تَسْبِيحَاتٍ مَعَ الْأَهْلِ؛ فَتَسْكُنُ الْأُسْرَةُ وَتُبَارَكُ، بِإِذْنِ اللَّهِ.',
        indonesian: 'Sakinah (ketenangan) adalah bagian rumah-rumah yang di dalamnya ada dzikir, kelembutan, dan shalat berjamaah. Allah Ta\u2019ala berfirman: "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram." (Qs. Ar-Ra\u2019d [13]: 28)\n\nBerikan rumahmu wirid kecil: setelah maghrib, sepuluh tasbih bersama seluruh penghuni rumah — cukup dua menit, tapi setiap hari. Rumah yang kecil wiridnya tapi rutin lebih cepat tenang daripada yang besar tapi jarang.\n\nDengan izin Allah, keluarga menjadi tenang, dan berkah menetap di antara dinding-dindingnya.',
        kunciAmal: [
          'Satu wirid kecil bersama setiap hari lebih utama daripada besar tapi jarang.',
          'Rumah yang berdzikir menjadi rumah yang tenang; teladan berawal dari kepala keluarga.',
          'Akhiri wirid keluarga dengan satu doa bersama: "rabbana hab lana min azwajina…"',
        ],
      },
    ],
  },
]

async function main() {
  // ---------- sinkronkan bio Master (Role Activation) ----------
  const master = await db.cmsPersona.findUnique({ where: { key: 'master' } })
  if (master) {
    await db.cmsPersona.update({
      where: { key: 'master' },
      data: {
        bio: 'Peran gabungan seluruh Dewan Pakar 46 — setiap bidang dikuasai dengan pengalaman 150 tahun. Aktifkan untuk menulis artikel dan kitab dwibahasa Arab–Indonesia dengan nama ini.',
      },
    })
    console.log('✓ bio Master (Role Activation) diperbarui')
  } else {
    console.log('• persona belum ada — akan diisi otomatis saat CMS dibuka')
  }

  // ---------- kitab dwibahasa ----------
  for (const k of KITAB_SEEDS) {
    const exists = await db.cmsKitab.findUnique({ where: { slug: k.slug } })
    if (exists) {
      console.log(`• kitab "${k.titleId}" sudah ada — dilewati (suntingan admin tetap utuh)`)
      continue
    }
    const kitab = await db.cmsKitab.create({
      data: {
        slug: k.slug,
        order: k.order,
        titleAr: k.titleAr,
        titleId: k.titleId,
        subtitleId: k.subtitleId,
        ledeId: k.ledeId,
        ledeAr: k.ledeAr,
        author: AUTHOR,
        status: 'published',
        bab: {
          create: k.bab.map((b) => ({
            order: b.order,
            titleAr: b.titleAr,
            titleId: b.titleId,
            arabic: b.arabic,
            indonesian: b.indonesian,
            kunciAmal: b.kunciAmal.join('\n'),
            status: 'published',
          })),
        },
      },
    })
    console.log(`✓ kitab "${kitab.titleId}" diterbitkan dengan ${k.bab.length} bab`)
  }

  console.log('Seed kitab selesai. Masya Allah.')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await db.$disconnect() })
