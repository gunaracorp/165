import type { PageEntry } from './types'

// 165 — Perpustakaan bagian 3: SERI "PERJALANAN TUAN SYEKH DARI HULU KE HILIR"
// Seri manaqib dua bahasa (Arab + Indonesia) sesuai pesanan pendiri — langkah
// 9–22 pada Roadmap 99 internal. Doktrin kejujuran: setiap pernyataan diberi
// grade — (1) riwayat mapan tarjamah, (2) riwayat manaqib populer,
// (3) belum diketahui (ditulis jujur, tidak dikarang).
// Bab yang sudah tayang: 1–2. Bab lain menyusul berurutan.
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
      { label: 'Status', value: 'Bab 1 dan Bab 2 tayang; bab berikutnya diterbitkan berurutan' },
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
          'Bab 2 — Masa kecil dan pendidikan awal di Jilan. — TAYANG.',
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
    related: ['perjalanan-bab-1-kelahiran-di-jilan', 'perjalanan-bab-2-masa-kecil-jilan', 'silsilah', 'manaqib', 'fathul-rabbani'],
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
    related: ['perjalanan-tuan-syekh-hulu-hilir', 'perjalanan-bab-2-masa-kecil-jilan', 'silsilah', 'manaqib', 'futuh-al-ghaib-jilani'],
  },
  {
    slug: 'perjalanan-bab-2-masa-kecil-jilan',
    kind: 'library',
    title: 'Bab 2 — Masa Kecil & Pendidikan Awal di Jilan',
    titleAr: 'البَابُ الثَّانِي: طُفُولَةُ الشَّيْخِ عَبْدِ القَادِرِ الجِيلَانِيِّ وَتَعْلِيمُهُ الأَوَّلُ فِي جِيلَانَ',
    category: 'Manaqib & Perjalanan Hulu-Hilir',
    summary: 'Masa kecil dan pendidikan awal Abdul Qodir Al-Jaelani di Jilan — hafalan Al-Qur\'an sejak kanak-kanak dan bibit zuhud, ditulis Arab-Indonesia ber-grade.',
    facts: [
      { label: 'Rentang masa kecil', value: '470 H sampai 488 H — seluruhnya di Jilan (riwayat mapan dari tarjamah klasik)' },
      { label: 'Keberangkatan ke Baghdad', value: '488 H pada usia sekitar 17–18 tahun — riwayat mapan; perbedaan angka usia dicatat apa adanya' },
      { label: 'Hafalan Al-Qur\'an', value: 'Sejak kanak-kanak; sebagian manaqib menyebut usia delapan tahun — riwayat manaqib populer' },
      { label: 'Guru masa kecil', value: 'Nama-nama guru di Jilan tidak tercatat pada tarjamah klasik — belum diketahui, tidak dikarang' },
      { label: 'Ayah', value: 'Manaqib menyebut Abu Salih Musa wafat saat Tuan Syekh masih kecil — riwayat manaqib populer' },
      { label: 'Bibit zuhud', value: 'Kecenderungan zuhud dan ibadah sejak remaja — riwayat manaqib populer' },
    ],
    body: [
      {
        h: 'Muqaddimah Arab — Kalimat Pembuka Bab',
        p: [
          'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ. نَعْرِضُ فِي هَذَا البَابِ الثَّانِي مَرْحَلَةَ الطُّفُولَةِ وَالتَّعْلِيمِ الأَوَّلِ فِي جِيلَانَ: حِفْظَ القُرْآنِ فِي الصِّغَرِ كَمَا جَرَى فِي المَنَاقِبِ المَشْهُورَةِ، وَبِذْرَةَ الزُّهْدِ فِي النَّشْأَةِ، مَعَ تَمْيِيزِ مَا يَقِينُ حُرْفِيُّهُ فِي كُتُبِ التَّرَاجِمِ، مِمَّا هُوَ قِصَّةٌ شَائِعَةٌ فِي المَجَالِسِ، مِمَّا لَمْ يَثْبُتْ فَنَقُولُ فِيهِ: "لا نَعْلَمُ بِجَازِمٍ".',
          'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Pada bab kedua ini kami menghadirkan masa kanak-kanak dan pendidikan pertama di Jilan: hafalan Al-Qur\'an pada masa kecil sebagaimana berjalan pada kitab-kitab manaqib yang masyhur, dan bibit zuhud pada masa pertumbuhan — sambil membedakan mana yang teguh catatannya pada kitab-kitab tarjamah, mana yang berupa kisah populer di majelis-majelis, dan mana yang tidak berteguh — maka kami katakan atasnya: "kami tidak mengetahuinya secara pasti".',
        ],
      },
      {
        h: 'Kerangka Waktu: Delapan Belas Tahun Pertama Semua di Jilan',
        p: [
          'Kerangka waktu masa kecil Tuan Syekh tidak memiliki catatan tanggal yang rinci, tetapi dua kutub yang mapan membatasinya dengan rapi: beliau lahir di Jilan tahun 470 Hijriah, dan tarjamah klasik mencatat keberangkatannya ke Baghdad pada tahun 488 Hijriah. Ibnu Rajab al-Hanbali — semoga Allah merahmatinya — dalam ad-Dail \'ala Thabaqat al-Hanabilah mencatat kedatangan itu, dan Ibnu Khalikan dalam Wafayat al-A\'yan menyebut usia beliau saat itu di sekitar tujuh belas sampai delapan belas tahun; perbedaan kecil pada angka usia ini kami catat apa adanya, bukan kami paksa menjadi satu. Maka seluruh masa kecil dan pendidikan awal beliau — dari kanak-kanak sampai pemuda — berlangsung di Jilan, dan halaman ini membaca masa itu hanya dari jangkauan sumber yang tersedia.',
          'لَا نَجِدُ فِي كُتُبِ التَّرَاجِمِ تَوْقِيتاً دَقِيقاً لِسَنَوَاتِ طُفُولَتِهِ، وَلَكِنْ المَشْهُورُ عِنْدَ أَصْحَابِ التَّرَاجِمِ أَنَّهُ قَدِمَ بَغْدَادَ سَنَةَ ثَمَانٍ وَثَمَانِمِائَةٍ وَأَرْبَعِمِائَةٍ فِي حُدُودِ السَّابِعَةَ عَشْرَةَ أَوِ الثَّامِنَةَ عَشْرَةَ مِنْ عُمْرِهِ، فَتَكُونُ سَنَوَاتُ طُفُولَتِهِ وَتَعْلِيمِهِ الأَوَّلِ كُلُّهَا فِي جِيلَانَ.',
          'Kami tidak menemukan pada kitab-kitab tarjamah penandaan tanggal yang persis untuk tahun-tahun kanak-kanaknya. Namun kabar yang masyhur pada mereka adalah datangnya beliau ke Baghdad pada tahun 488 Hijriah pada sekitar usia tujuh belas atau delapan belas tahun. Dengan demikian seluruh tahun-tahun masa kecil dan pendidikan pertamanya berlangsung di Jilan sampai waktu itu.',
        ],
      },
      {
        h: 'Hafalan Al-Qur\'an Sejak Kanak-Kanak',
        p: [
          'Kisah paling populer tentang masa kecil Tuan Syekh ialah hafalan Al-Qur\'an. Kitab-kitab manaqib dan majelis-majelis manaqib mempopulerkan bahwa beliau menuntaskan hafalan Al-Qur\'an ketika masih kanak-kanak, dan sebagian kitab menyebut usia delapan tahun sebagai usia penuntasan itu. Platform menyajikan kabar ini pada tingkat riwayat manaqib populer: ia hidup kuat pada tradisi jamaah dan kami menghormatinya, tetapi tarjamah klasik tidak mencatat angka usia hafalan, sehingga kami tidak mengangkatnya menjadi fakta arsip. Adab jujur platform berdiri di titik yang sama dengan bab sebelumnya: kisah disajikan dengan labelnya, bukan dengan kepastian yang tidak punya jejak.',
          'جَرَى فِي المَنَاقِبِ المَشْهُورَةِ أَنَّهُ حَفِظَ القُرْآنَ الكَرِيمَ فِي صِغَرِ سِنِّهِ، وَذَكَرَ بَعْضُ أَصْحَابِ المَنَاقِبِ أَنَّ ذَلِكَ كَانَ فِي حُدُودِ الثَّامِنَةَ مِنْ عُمْرِهِ، وَهَذَا كُلُّهُ مِنْ عُمْدَةِ المَجَالِسِ المَشْهُورَةِ لا مِنْ عُمْدَةِ التَّرَاجِمِ المُحَقَّقَةِ.',
          'Pada kitab-kitab manaqib yang masyhur berjalan bahwa beliau telah menghafal Al-Qur\'an Al-Karim dalam masa kecilnya, dan sebagian pengarang manaqib menyebut hal itu pada sekitar usia delapan tahun. Seluruh kabar ini bersandar pada majelis-majelis yang masyhur, bukan pada kitab-kitab tarjamah yang dapat dirujuk secara teguh.',
        ],
      },
      {
        h: 'Lingkungan Belajar di Jilan — dan Nama-Nama yang Jujur Tak Terdata',
        p: [
          'Jilan pada abad ke-11 adalah daerah pegunungan di pesisir Laut Kaspia — bukan pusat ilmu seperti Baghdad, Naisabur, atau Isfahan. Dari kerangka waktu ini saja sudah bisa dikatakan dengan jujur bahwa pendidikan pertama beliau berlangsung di majelis-majelis kecil setempat: mengaji mushaf, belajar baca-tulis dan dasar-dasar agama dari para guru kampung halamannya, sebagaimana lazim anak-anak daerah pada zamannya. Kesimpulan semacam ini adalah bacaan wajar atas kerangka waktu mapan, bukan kutipan dari sebuah kitab, dan kami menyatakannya dengan cara itu. Adapun nama-nama guru masa kecilnya: tidak satu nama pun berteguh pada kitab-kitab tarjamah klasik. Sebagian kitab manaqib menyebut seorang guru pertama di Jilan, tetapi jejak nama itu tidak dapat dirujuk pada literatur tarjamah, maka platform memilih menuliskannya apa adanya — belum diketahui — dan tidak mengarang sebuah nama hanya supaya cerita terlihat lengkap.',
          'أَمَّا أَسَاتِذَتُهُ فِي طُفُولَتِهِ فِي جِيلَانَ فَلَمْ تَثْبُتْ أَسْمَاؤُهُمْ فِي كُتُبِ التَّرَاجِمِ المَحَقَّقَةِ، وَذَكَرَ بَعْضُ أَصْحَابِ المَنَاقِبِ اسْمَ مُعَلِّمٍ أَوَّلٍ عَلَى عَادَتِهِمْ بِلا تَثْبُتٍ، فَنَحْنُ لَا نُسَمِّي أَحَداً مِنْهُمْ، وَنَقُولُ فِي ذَلِكَ كُلِّهِ: "لا نَعْلَمُ بِجَازِمٍ".',
          'Adapun para gurunya dalam masa kecilnya di Jilan, nama-nama mereka tidak berteguh pada kitab-kitab tarjamah yang terverifikasi. Sebagian pengarang manaqib menyebut nama seorang guru pertama menurut kebiasaan mereka tanpa keteguhan, maka kami tidak menamai seorang pun dari mereka, dan kami mengatakan atas seluruh hal itu: "kami tidak mengetahuinya secara pasti".',
        ],
      },
      {
        h: 'Wafatnya Sang Ayah dan Tangan Ibu yang Membesarkan',
        p: [
          'Tradisi manaqib menggambarkan masa kecil Tuan Syekh sebagai masa tumbuh di bawah asuhan ibunda. Abu Salih Musa — sang ayah — disebut wafat ketika Tuan Syekh masih kanak-kanak, sehingga tangan yang membesarkan dan menandai masa itu adalah tangan Ummul Khair Fatimah, wanita salehah yang telah diperkenalkan pada Bab 1. Tradisi jamaah menjaga gambaran ini dengan penuh hormat: sang ibu yang menumbuhkan adab, dan sang ibu pula yang kelak menyiapkan keberangkatan putranya ke Baghdad — kisah perpisahan itu akan kami hadirkan utuh pada Bab 3. Seluruh potret ini berdiri pada tingkat riwayat manaqib populer: disajikan karena ia bagian hidup dari tradisi majelis, bukan karena catatan arsipnya terteguh.',
          'جَرَى فِي المَنَاقِبِ أَنَّ أَبَاهُ أَبَا صَالِحٍ مُوسَى تُوُفِّيَ وَابْنُهُ صَغِيرٌ، فَكَبَّرَتْهُ أُمُّهُ أُمُّ الخَيْرِ فَاطِمَةُ رَضِيَ اللهُ عَنْهَا، وَهِيَ الَّتِي أَعَدَّتْهُ لِرِحْلَتِهِ إِلَى بَغْدَادَ عَلَى عَادَةِ أَصْحَابِ المَنَاقِبِ.',
          'Pada kitab-kitab manaqib berjalan bahwa ayahnya, Abu Salih Musa, wafat ketika anaknya masih kecil, maka ibunya, Ummul Khair Fatimah — semoga Allah rida kepadanya — membesarkannya. Ia pula yang menyiapkan putranya untuk perjalanan ke Baghdad, sebagaimana berjalan pada kisah-kisah yang masyhur.',
        ],
      },
      {
        h: 'Bibit Zuhud Sejak Remaja',
        p: [
          'Tradisi manaqib juga menandai masa remaja beliau sebagai masa tumbuhnya bibit zuhud: digambarkan gemar ibadah, menjauhi permainan yang sia-sia, dan berat hati berbicara tentang dirinya. Bibit inilah yang kelak tumbuh menjadi fase khalwat dan riadhah yang panjang — masa zuhud 25 tahun di padang puing yang akan dibahas utuh pada Bab 6 — sebelum akhirnya menjadi gaya dakwah hati yang menggerakkan Baghdad. Tarjamah klasik pada fase ini memang masih sangat hemat: mereka baru banyak bicara ketika beliau sudah duduk di majelis-majelis ilmu Baghdad, sehingga potret remaja yang saleh ini kami letakkan pada tingkat riwayat manaqib populer. Yang penting dari pembacaan ini ialah kejujurannya: kami menunjukkan dari mana kabar itu berangkat, dan pembaca bebas menimbangnya.',
          'جَرَى فِي المَنَاقِبِ أَنَّهُ مَالَ إِلَى الزُّهْدِ وَالعِبَادَةِ مُنْذُ نِشَاحَتِهِ: يَعْزِمُ عَلَى طَاعَةِ اللهِ، وَيَبْعُدُ عَمَّا لَا يَنْفَعُ، وَبُذْرَةُ هَذِهِ النِّشَأَةِ بَدَتْ فِي خَمْسَةَ وَعِشْرِينَ سَنَةً مِنْ خَلْوَةٍ وَرِيَاضَةٍ جَرَتْ بَعْدَ تِلْكَ المَرْحَلَةِ، كَمَا سَيَأْتِي فِي مَحَطَّتِهَا مِنْ هَذِهِ الرِّحْلَةِ.',
          'Pada kitab-kitab manaqib berjalan bahwa beliau condong kepada zuhud dan ibadah sejak masa mudanya: berazam pada ketaatan kepada Allah dan menjauhi apa yang tidak memberi manfaat. Buah dari masa pertumbuhan ini tampak pada dua puluh lima tahun khalwat dan riadhah yang berjalan setelah fase itu, sebagaimana akan datang pada perhentian perjalanan ini.',
        ],
      },
      {
        h: 'Kisah Populer Lain Masa Kecil — Disajikan dengan Label',
        p: [
          'Di luar tema-tema besar di atas, majelis-majelis manaqib menyimpan sejumlah kisah kecil lain tentang masa kecil Tuan Syekh — antara lain gambaran bahwa ia tidak larut bermain seperti anak-anak seusianya, dan tanda-tanda awal kecerdasan serta kelembutan hatinya. Kami tidak menyajikan kisah-kisah itu satu per satu seolah-olah riwayat arsip, sebab tingkat catatannya jelas: kisah majelis yang masyhur, bukan kabar tarjamah yang terteguh. Menyajikannya dengan label jujur jauh lebih mulia daripada menghiasnya seolah-olah fakta yang terekam. Pembaca yang memerlukan ketegasan historiografis kembali ke dua bagian bertingkat riwayat mapan di atas: rentang waktu 470–488 H di Jilan, dan keberangkatan ke Baghdad pada 488 H.',
          'وَمَا سِوَى هَذَا مِنْ رِوَايَاتِ الطُّفُولَةِ الَّتِي تَتَدَاوَرُهَا المَجَالِسُ فَهُوَ مِنَ القِصَصِ المَشْهُورَةِ عِنْدَ أَصْحَابِ المَنَاقِبِ، نَنْقُلُهُ بِعَلَامَتِهِ عَلَى عَادَتِنَا، وَلَا نَزِيدُ عَلَى حَدِّهِ وَلَا نَدَّعِي مَا لَيْسَ لَنَا فِيهِ بُرْهَانٌ.',
          'Selain hal-hal tersebut, riwayat-riwayat masa kecil yang beredar di majelis-majelis termasuk kisah yang masyhur pada para pengarang manaqib. Kami menyampaikannya dengan tanda (label) sesuai kebiasaan kami, dan kami tidak melampaui batasnya serta tidak mendakwa apa yang tidak kami miliki atasnya dalil.',
        ],
      },
      {
        h: 'Catatan Penutup Bab dan Bab Berikutnya',
        p: [
          'Bab 2 menetapkan satu kerangka mapan — masa kecil beliau berlangsung seluruhnya di Jilan antara tahun 470 H dan keberangkatan ke Baghdad pada 488 H — serta tiga potret bertingkat riwayat manaqib populer: hafalan Al-Qur\'an sejak kanak-kanak, wafatnya sang ayah dini di bawah asuhan ibunda, dan tumbuhnya bibit zuhud sejak remaja. Satu hal dinyatakan jujur belum diketahui: nama-nama guru masa kecilnya dan rincian kurikulum Jilan. Susunan grade ini melanjutkan disiplin Bab 1, sehingga pembaca selalu tahu di mana ia berdiri: pada kabar terteguh, pada kisah populer, atau pada hal yang belum diketahui.',
          'Bab 3 meneruskan perjalanan ke peristiwa besar pertama yang keluar dari Jilan: keberangkatan ke Baghdad pada usia belia — perpisahan dengan ibunda, pesan ilmu dan amanah yang dijaga, dan kisah masyhur tentang kejujuran beliau di tengah perjalanan yang dibaca di ribuan majelis. Sebagaimana dua bab sebelumnya, bab ketiga ditulis dalam dua bahasa, Arab dan Indonesia, dengan grade sumber yang sama; halaman induk seri selalu memuat status penerbitan bab terbaru.',
        ],
      },
    ],
    related: ['perjalanan-tuan-syekh-hulu-hilir', 'perjalanan-bab-1-kelahiran-di-jilan', 'silsilah', 'manaqib'],
  },
]
