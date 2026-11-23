import type { PageEntry } from './types'

// 165 — Perpustakaan bagian 3: SERI "PERJALANAN TUAN SYEKH DARI HULU KE HILIR"
// Seri manaqib dua bahasa (Arab + Indonesia) sesuai pesanan pendiri — langkah
// 9–22 pada Roadmap 99 internal. Doktrin kejujuran: setiap pernyataan diberi
// grade — (1) riwayat mapan tarjamah, (2) riwayat manaqib populer,
// (3) belum diketahui (ditulis jujur, tidak dikarang).
// Bab yang sudah tayang: 1. Bab lain menyusul berurutan.
export const ENTRIES: PageEntry[] = [
  {
    slug: 'perjalanan-tuan-syekh-hulu-hilir',
    kind: 'library',
    title: 'Perjalanan Tuan Syekh Abdul Qodir Al-Jaelani — dari Hulu ke Hilir',
    titleAr: 'رِحْلَةُ الشَّيْخِ عَبْدِ القَادِرِ الجِيلَانِيِّ مِنْ أَوَّلِهِ إِلَى آخِرِهِ',
    category: 'Manaqib & Perjalanan Hulu-Hilir',
    summary: 'Seri 14 bab kisah Tuan Syekh Abdul Qodir Al-Jaelani dari kelahiran di Jilan sampai Baghdad — Arab dan Indonesia, tiap pernyataan ber-grade sumber.',
    facts: [
      { label: 'Jumlah bab', value: '14 bab — langkah 9 sampai 22 pada peta jalan internal pendiri' },
      { label: 'Bahasa', value: 'Arab dan Indonesia saja, sesuai pesanan pendiri' },
      { label: 'Metode', value: 'Tiga tingkat grade: riwayat mapan, riwayat manaqib populer, belum diketahui' },
      { label: 'Status', value: 'Bab 1 tayang; bab berikutnya diterbitkan berurutan' },
    ],
    body: [
      {
        h: 'Apa Seri Ini',
        p: [
          'Seri ini adalah penulisan berkelanjutan tentang perjalanan hidup Tuan Syekh Abdul Qodir Al-Jaelani — semoga Allah melimpahkan rahmat-Nya — disusun bab demi bab dari hulu ke hilir: mulai dari kelahiran di Jilan, pendidikan di Baghdad, masa zuhud, era dakwah, karya-karya besar, hingga wafat dan jejaknya di jamaah-jamaah tarekat hingga ke Nusantara. Penulisan dilakukan dalam dua bahasa saja, Arab dan Indonesia, sesuai pesanan pendiri platform. Setiap bab dirancang sebagai satu halaman mandiri yang statis dan dapat dirayapi mesin pencari, sehingga kisah ini tidak hanya dibaca jamaah, tetapi juga terdokumentasi sebagai arsip pengetahuan yang tumbuh perlahan dan tertib.',
          'Seri ini menjadi bagian dari program penyempurnaan konten platform 165: satu langkah peta jalan internal menghasilkan satu bab. Bab yang sudah tayang ditautkan dari halaman ini, sedangkan bab yang masih dalam antrian pencalonan hanya disebutkan judulnya tanpa tautan, agar tidak pernah ada URL bayangan di platform ini.',
        ],
      },
      {
        h: 'Muqaddimah Arab',
        p: [
          'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ. تُكْتَبُ هَذِهِ الرِّحْلَةُ بِاللُّغَتَيْنِ: العَرَبِيَّةِ وَالإِنْدُونِيْسِيَّةِ. فِي كُلِّ بَابٍ نَعْرِضُ الخَبَرَ بِأَلْسِنَتِهِمَا، مُمَيِّزِينَ مَا يَقِينُ حُرْفِيُّهُ فِي كُتُبِ التَّرَاجِمِ، مِمَّا جَرَى قِصَّةً شَائِعَةً فِي كُتُبِ المَنَاقِبِ، مِمَّا لَمْ يَثْبُتْ فَنَقُولُ فِيهِ: "لا نَعْلَمُ بِجَازِمٍ".',
          'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Perjalanan ini ditulis dengan dua bahasa: Arab dan Indonesia. Pada setiap bab kami menghadirkan kabar dengan dua lidah itu, sambil membedakan mana yang teguh catatannya pada kitab-kitab tarjamah, mana yang berjalan sebagai kisah populer pada kitab-kitab manaqib, dan mana yang belum berteguh — maka kami katakan atasnya dengan jujur: "kami tidak mengetahuinya secara pasti".',
        ],
      },
      {
        h: 'Peta 14 Bab Hulu ke Hilir',
        p: [
          'Bab 1 — Kelahiran di Jilan dan silsilah syarif (470 H / 1077 M). — TAYANG.',
          'Bab 2 — Masa kecil dan pendidikan awal di Jilan.',
          'Bab 3 — Keberangkatan ke Baghdad pada usia belia.',
          'Bab 4 — Guru-guru dan kurikulum ilmu di Baghdad.',
          'Bab 5 — Pengambilan thariqah dan penyulaman pertama.',
          'Bab 6 — Zuhud 25 tahun di padang puing.',
          'Bab 7 — Kembali ke Baghdad: dari dakwah hukum ke dakwah hati.',
          'Bab 8 — Madrasah dan ribath: dua menara pendidikan.',
          'Bab 9 — Khashaish dan karamah pilihan dengan grade sumber.',
          'Bab 10 — Karya tulis besar: al-Ghunya, al-Fath ar-Rabbani, Futuh al-Ghaib, Sirr al-Asrar.',
          'Bab 11 — Murid-murid dan peta pengaruh.',
          'Bab 12 — Wafat (561 H / 1166 M) dan makam.',
          'Bab 13 — Ziarah dan pengaruh global hingga Nusantara.',
          'Bab 14 — Lini masa interaktif hulu-hilir di seksi Manaqib.',
        ],
      },
      {
        h: 'Metode dan Jaminan Kejujuran',
        p: [
          'Setiap pernyataan dalam seri ini diberi grade tiga tingkat. Tingkat pertama adalah riwayat mapan: kabar yang tercatat konsisten pada literatur tarjamah yang dapat dirujuk, seperti tarjamah-kitab ulama Hanabilah (Ibnu Rajab, Ibnu al-Jawzi) dan kamus biografi klasik. Tingkat kedua adalah riwayat manaqib populer: kisah yang berjalan lisan dan tertulis pada kitab-kitab manaqib yang dibaca luas di majelis-majelis, tetapi catatan historisnya tidak semantap tingkat pertama; kisah semacam ini tetap disajikan karena ia bagian hidup dari tradisi jamaah, hanya saja selalu diberi label. Tingkat ketiga adalah yang belum diketahui: ditulis apa adanya sebagai "belum diketahui", tidak pernah dikarang.',
          'Doktrin ini sejalan dengan prinsip seluruh platform 165: setiap pernyataan menyandang tingkat bukti, status verifikasi, dan jejak sumbernya. Bagi jamaah TQN Qodiriah Naqsabandiyah, cara kerja ini bukan sekadar kaidah editorial, melainkan adab ilmu: menghormati batas antara yang diketahui dan yang tidak diketahui adalah bagian dari adab kepada Allah dan kepada para guru.',
        ],
      },
    ],
    related: ['perjalanan-bab-1-kelahiran-di-jilan', 'silsilah', 'manaqib', 'fathul-rabbani'],
  },
  {
    slug: 'perjalanan-bab-1-kelahiran-di-jilan',
    kind: 'library',
    title: 'Bab 1 — Kelahiran di Jilan & Silsilah Syarif (470 H / 1077 M)',
    titleAr: 'البَابُ الأَوَّلُ: مِيلَادُ الشَّيْخِ عَبْدِ القَادِرِ الجِيلَانِيِّ وَنَسَبُهُ الشَّرِيفُ',
    category: 'Manaqib & Perjalanan Hulu-Hilir',
    summary: 'Kelahiran Abdul Qodir Al-Jaelani tahun 470 H (1077 M) di Jilan dan nasab syarif dari dua jalur — ditulis Arab-Indonesia dengan grade riwayat yang jujur.',
    facts: [
      { label: 'Nama', value: 'Abdul Qodir bin Abu Salih Musa — riwayat mapan' },
      { label: 'Kelahiran', value: '470 H / 1077 M di Jilan, kawasan Laut Kaspia (kini Iran utara) — riwayat mapan' },
      { label: 'Hari lahir', value: 'Belum diketahui pasti; manaqib populer menyebut malam Jumat bulan Ramadhan' },
      { label: 'Ayah', value: 'Abu Salih Musa — riwayat mapan; julukan "Jangi Dost" termasuk riwayat manaqib populer' },
      { label: 'Ibu', value: 'Ummul Khair Fatimah bint Abdullah as-Sanadiqiyyah — riwayat manaqib populer' },
      { label: 'Nasab', value: 'Jalur ayah ke Imam Hasan, jalur ibu ke Imam Husain — riwayat manaqib populer' },
    ],
    body: [
      {
        h: 'Muqaddimah Arab — Kalimat Pembuka Bab',
        p: [
          'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ. هَذِهِ أَوَّلُ مَحَطَّاتٍ فِي رِحْلَةِ الشَّيْخِ عَبْدِ القَادِرِ الجِيلَانِيِّ رَحِمَهُ اللهُ: مِيلَادُهُ المُبَارَكُ سَنَةَ أَرْبَعِمِائَةٍ وَسَبْعِينَ لِلْهِجْرَةِ، المَوَافِقِ لِسَنَةِ أَلْفٍ وَسَبْعٍ وَسَبْعِينَ لِلْمِيلَادِ، وَنَسَبُهُ الشَّرِيفُ مِنْ طَرَفَيْ أَبِيهِ وَأُمِّهِ كَمَا جَرَى فِي كُتُبِ التَّرَاجِمِ وَالمَنَاقِبِ المَشْهُورَةِ، مَعَ تَمْيِيزِ مَا يَقِينُ حُرْفِيُّهُ عَمَّا هُوَ قِصَّةٌ شَائِعَةٌ.',
          'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Inilah perhentian pertama dalam perjalanan Tuan Syekh Abdul Qodir Al-Jaelani — semoga Allah merahmatinya: kelahiran yang diberkahi pada tahun 470 Hijriah yang bertepatan dengan tahun 1077 Masehi, dan nasab syarifnya dari jalur ayah dan ibu, sebagaimana yang berjalan pada kitab-kitab tarjamah dan manaqib yang masyhur — sambil membedakan mana kabar yang teguh catatannya dan mana yang berupa kisah populer.',
        ],
      },
      {
        h: 'Kelahiran di Jilan: 470 H / 1077 M',
        p: [
          'Sumber-sumber tarjamah yang dapat dirujuk sepakat bahwa Tuan Syekh Abdul Qodir lahir pada tahun 470 Hijriah, yang bertepatan dengan tahun 1077 Masehi. Tempat kelahirannya adalah Jilan, daerah pegunungan di pesisir Laut Kaspia yang pada masa itu berada di luar jangkauan kota-kota besar ilmu seperti Baghdad, Naisabur, dan Isfahan. Dari daerah pegunungan yang jauh itulah kelak berangkat seorang pemuda yang namanya menjadi salah satu nama paling terkenal dalam sejarah tarekat dan pengajaran agama di dunia Islam.',
          'Adapun hari dan bulan kelahiran yang persis belum berteguh dengan kabar yang bisa diandalkan. Sebagian kitab manaqib mempopulerkan kisah bahwa ia lahir pada malam Jumat di bulan Ramadhan; kisah ini kami sajikan sebagai riwayat manaqib populer, bukan sebagai fakta yang terteguh. Platform 165 memegang prinsip yang tegas pada titik ini: lebih baik jujur mengatakan "belum diketahui" daripada mengarang kepastian yang tidak memiliki jejak sumber.',
        ],
      },
      {
        h: 'Nama dan Dua Penulisan Nisbat: al-Jili dan al-Jailani',
        p: [
          'Nama lengkapnya pada sumber-sumber mapan adalah Abdul Qodir bin Abu Salih Musa. Mengenai nisbat, dalam literatur ditemukan lebih dari satu penulisan: sebagian menulis al-Jili yang mengacu pada Jil, sebagian menulis al-Jailani yang mengacu pada Jilan, dan sebagian lagi menulis al-Zanjili. Perbedaan penulisan semacam ini lazim terjadi pada biografi ulama abad pertengahan karena perbedaan pelafalan, perbedaan desa asal yang berdekatan, dan praktik penyalinan naskah pada zamannya.',
          'يُنْسَبُ الشَّيْخُ إِلَى جِيلَانَ، وَهِيَ بَقْعَةٌ فِي أَقَالِيمِ طَبَرِسْتَانَ قَرِيبَةً مِنْ بَحْرِ قَزْوِينَ، وَقَدْ وَرَدَ فِي الكُتُبِ نِسْبَتُهُ بِصُوَرٍ: الجِيلِيُّ وَالزَّنْجِلِيُّ وَالجِيلَانِيُّ، وَفِي اختِلافِهِمْ كَرَاهَةَ، فَالْمُقْصِدُ بَقْعَةُ النَشْأَةِ وَلَا سِيَّمَا وَهِيَ مَعْرُوفَةٌ.',
          'Tuan Syekh dinisbatkan kepada Jilan, sebuah daerah di kawasan Tabaristan yang dekat dengan Laut Kaspia. Dalam kitab-kitab nisbatnya tercatat dengan beberapa bentuk: al-Jili, al-Zanjili, dan al-Jailani — dan dalam perbedaan itu tidak ada yang patut disesali, sebab yang dimaksud adalah daerah kelahirannya, dan daerah itu telah masyhur. Dalam seri ini kami memakai bentuk "Al-Jaelani" yang akrab pada lidah jamaah Nusantara, sambil mencatat bentuk-bentuk lain agar pembaca tidak bingung ketika membaca sumber yang berbeda.',
        ],
      },
      {
        h: 'Ayah: Abu Salih Musa',
        p: [
          'Ayahnya bernama Abu Salih Musa. Pada sumber-sumber tarjamah, nama ini tercatat sebagai bagian dari identitas Tuan Syekh yang mendasar, sehingga masuk tingkat riwayat mapan. Kitab-kitab manaqib kemudian melengkapi potret beliau: digambarkan sebagai pribadi saleh dan amanah, dan pada sebagian kitab populer disebut dengan julukan "Jangi Dost". Potret dari manaqib ini kami sajikan dengan label riwayat manaqib populer, karena catatan historisnya tidak semantap nama beliau sendiri.',
          'أَبُوهُ: أَبُو صَالِحٍ مُوسَى الزَّنْجِلِيُّ الجِيلِيُّ، وَهُوَ رَجُلٌ صَالِحٌ أَمِينٌ كَمَا صِفَتْهُ كُتُبُ المَنَاقِبِ المَشْهُورَةِ، وَهَذَا وَصْفٌ مَقْبُولٌ عِنْدَ أَهْلِ المَجْلِسِ مَعَ عَلَامَةِ الشَّيْعِ الشَّائِعِ.',
          'Ayahnya adalah Abu Salih Musa al-Zanjili al-Jili — seorang lelaki yang saleh dan amanah sebagaimana digambarkan kitab-kitab manaqib yang masyhur; gambaran ini kami terima sebagaimana adanya di kalangan majelis, dengan tetap menyandang label riwayat populer.',
        ],
      },
      {
        h: 'Ibu: Ummul Khair Fatimah bint Abdullah as-Sanadiqiyyah',
        p: [
          'Kitab-kitab manaqib menyebut nama ibunda beliau: Ummul Khair Fatimah bint Abdullah as-Sanadiqiyyah. Dari jalur inilah manaqib menyambung nasab syarif yang kedua. Ibunda beliau digambarkan sebagai wanita salehah yang tekun ibadah, dan potret ini hidup sangat kuat dalam tradisi lisan jamaah-jamaah manaqib di berbagai negeri. Sebagaimana potret sang ayah, kami menyajikannya dengan label riwayat manaqib populer: disajikan karena ia bagian dari tradisi yang dijaga jamaah, tanpa mengklaimnya sebagai fakta arsip yang terteguh.',
          'أُمُّهُ: أُمُّ الخَيْرِ فَاطِمَةُ بِنْتُ عَبْدِ اللهِ الصَّنَادِقِيَّةُ، وَهِيَ امْرَأَةٌ صَالِحَةٌ عَابِدَةٌ كَمَا ذَكَرَهُ أَصْحَابُ المَنَاقِبِ.',
          'Ibunya adalah Ummul Khair Fatimah bint Abdullah as-Sanadiqiyyah — seorang wanita salehah yang tekun ibadah, sebagaimana yang disebutkan para pengarang manaqib.',
        ],
      },
      {
        h: 'Silsilah Syarif: Dua Jalur yang Dikenal "Al-Aqabain"',
        p: [
          'Ciri paling terkenal dari kelahiran Tuan Syekh pada tradisi manaqib ialah nasabnya yang bersambung dari dua jalur syarif sekaligus. Dari jalur ayah, kitab-kitab manaqib menyambungkannya kepada Imam Hasan bin Ali bin Abi Thalib — semoga Allah rida kepada keduanya; dan dari jalur ibu kepada Imam Husain bin Ali — semoga Allah rida kepada mereka. Kedua jalur ini dalam tradisi manaqib dikenal dengan sebutan "al-Aqabain asy-Syarifain", dua keturunan syarif yang bertemu pada satu insan.',
          'جَرَى فِي كُتُبِ المَنَاقِبِ أَنَّ نَسَبَهُ مِنْ طَرَفِ أَبِيهِ يَنْتَهِي إِلَى الإِمَامِ الحَسَنِ بْنِ عَلِيِّ بْنِ أَبِي طَالِبٍ رَضِيَ اللهُ عَنْهُمَا، وَمِنْ طَرَفِ أُمِّهِ إِلَى الإِمَامِ الحُسَيْنِ رَضِيَ اللهُ عَنْهُ.',
          'Pada kitab-kitab manaqib berjalan bahwa nasabnya dari jalur ayah berujung kepada Imam Hasan bin Ali bin Abi Thalib — semoga Allah rida kepada keduanya — dan dari jalur ibu berujung kepada Imam Husain — semoga Allah rida kepadanya.',
          'Platform 165 menyajikan nasab ini dengan label riwayat manaqib populer dan bukan sebagai fakta arsip. Alasannya jujur dan sederhana: catatan silsilah per generasi dari era itu tidak tersedia untuk diverifikasi satu per satu, dan menyatakan lebih dari yang bisa dibuktikan bertentangan dengan doktrin platform. Namun platform juga tidak meremehkannya, sebab kedudukan nasab ini dalam tradisi jamaah-jamaah manaqib adalah bagian nyata dari sejarah sosial tarekat, dan jamaah TQN Qodiriah Naqsabandiyah di Nusantara mewarisinya dengan penuh penghormatan.',
        ],
      },
      {
        h: 'Kisah Populer Seputar Kelahiran — Disajikan dengan Label Jujur',
        p: [
          'Kitab-kitab manaqib dan tradisi majelis menyimpan beberapa kisah kelahiran yang sangat populer. Antara lain: bahwa kelahiran beliau bertepatan dengan musim sulit di Jilan sehingga penduduk yang lapar mendapat bala bantuan rezeki sejak malam kelahirannya; dan bahwa sang ayah menyaksikan petunjuk-petunjuk kebaikan seputar kelahiran putranya. Kisah-kisah semacam ini dibaca di ribuan majelis manaqib di Nusantara dan menjadi bagian dari rasa hormat jamaah kepada Tuan Syekh.',
          'Dalam kerangka platform 165, seluruh kisah pada bagian ini berdiri di tingkat riwayat manaqib populer. Kami menyajikannya karena nilai adab dan nilai sejarah sosialnya, bukan sebagai klaim fakta yang terteguh. Pembaca yang memerlukan ketegasan historiografis sebaiknya kembali ke bagian "Kelahiran di Jilan" yang hanya memuat kabar bertingkat riwayat mapan: tahun 470 H, tempat Jilan, dan nama beliau.',
        ],
      },
      {
        h: 'Catatan Penutup Bab dan Bab Berikutnya',
        p: [
          'Bab 1 menetapkan tiga kabar bertingkat riwayat mapan — nama Abdul Qodir bin Abu Salih Musa, tahun kelahiran 470 H / 1077 M, dan daerah kelahiran Jilan — serta menyajikan potret keluarga dan nasab syarif dengan label riwayat manaqib populer. Susunan grade ini akan dipakai konsisten pada seluruh bab seri, sehingga pembaca selalu tahu di mana ia berdiri: pada kabar terteguh, pada kisah populer, atau pada hal yang belum diketahui.',
          'Bab 2 akan meneruskan perjalanan ke masa kecil dan pendidikan awal beliau di Jilan: lingkungan pertama yang membentuk bibit zuhud sebelum keberangkatan ke Baghdad. Seperti bab ini, bab kedua akan ditulis dalam dua bahasa, Arab dan Indonesia, dengan grade yang sama. Halaman induk seri selalu memuat status penerbitan bab terbaru.',
        ],
      },
    ],
    related: ['perjalanan-tuan-syekh-hulu-hilir', 'silsilah', 'manaqib', 'futuh-al-ghaib-jilani'],
  },
]
