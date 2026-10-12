// 165 — MANAQIB SYEKH ABDUL QODIR AL-JAELANI (arsip lengkap, Source-First)
//
// DISIPLIN NON-NEGOTIABLE:
//  - Setiap butir membawa grade bukti (A–F) + status verifikasi + sitasi.
//  - Dua genre dipisahkan secara jujur dan TIDAK PERNAH dicampur:
//      · Riwayat sejarah (karya beliau sendiri & sejarawan klasik) → grade C, status DOCUMENTED
//      · Genre manakib/karamah (al-Fuyudat asy-Syatthanaufi & turunannya) → grade C, status TRADITIONAL_ACCOUNT
//  - Tidak ada kutipan Arab yang dikarang. Parafrase diberi label "Parafrase inti".
//  - Data internal pesantren (ijazah per-mata, praktik majelis lokal) menunggu
//    deposit sumber internal — ditandai jujur, tidak pernah dikarang.
//  - Jangkar kanonik: Master Blueprint §3.2 (165-SRC-000003, Level B, DOCUMENTED)
//    — "Tuan Syekh" dalam dokumen Founder merujuk pada Syekh Abd al-Qadir al-Jilani.
//
// ID butir data: 165-MQ-0000xx (stabil, display).

export type LangText = { id: string; en: string }

export type MqGrade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
export type MqStatus = 'DOCUMENTED' | 'TRADITIONAL_ACCOUNT' | 'DISPUTED' | 'UNVERIFIED'

export type MqRecord = {
  globalId: string
  title: LangText
  body: LangText
  date?: LangText
  grade: MqGrade
  status: MqStatus
  source: string
  note?: LangText
}

// ---------------------------------------------------------------- IDENTITY

export const IDENTITY = {
  globalId: '165-PERSON-000002',
  slug: 'abdul-qadir-al-jilani',
  name: { id: 'Muhyiddin Abu Muhammad Abd al-Qadir al-Jilani', en: 'Muhyiddin Abu Muhammad Abd al-Qadir al-Jilani' },
  honorific: { id: 'Ghausul A\u2019zam · Sultanul Awliya · Muhyiddin', en: 'Ghaus al-A\u2019zam · Sultan al-Awliya · Muhyiddin' },
  born: { id: 'Ramadan 470 H · Maret 1077/78 M · Naif, Jilan (Persia)', en: 'Ramadan 470 AH · March 1077/78 CE · Na\u2019if, Gilan (Persia)' },
  died: { id: 'Malam Sabtu, 8 Syawal 561 H · 1166 M · Baghdad (usia ± 91 tahun hijriah)', en: 'Saturday night, 8 Shawwal 561 AH · 1166 CE · Baghdad (± 91 lunar years)' },
  school: { id: 'Mazhab Hanbali · pengajar hadits & fikih, pendakwah, mursyid', en: 'Hanbali school · teacher of hadith & fiqh, preacher, spiritual guide' },
  rest: { id: 'Madrasahnya sendiri, ar-Rusafah, Baghdad — kini Maqam Sultanul Awliya', en: 'His own madrasa, al-Rusafa, Baghdad — today the Maqam Sultan al-Awliya' },
  titles: [
    { id: 'Ghausul A\u2019zam — tolong-menolong yang agung (gelar tarekat)', en: 'Ghaus al-A\u2019zam — the greatest helper (tariqa title)' },
    { id: 'Sultanul Awliya — raja para wali', en: 'Sultan al-Awliya — the king of the saints' },
    { id: 'Muhyiddin — penghidup agama', en: 'Muhyiddin — the reviver of religion' },
    { id: 'Kiblatul Arifin · Pir Dastagir — kiblat para arif; tangan yang menolong', en: 'Kiblat al-Arifin · Pir Dastagir — the qibla of knowers; the helping hand' },
    { id: 'Hasani wal-Husaini — nasab menyambung ke Hasan & Husain (klaim nasab tradisional)', en: 'Hasani wa\u2019l-Husayni — lineage claims to both Hasan & Husayn (traditional)' },
  ] as LangText[],
}

// ---------------------------------------------------------------- RANGKA RANGKUMAN
export const LEDE: LangText = {
  id: 'Manaqib Syekh Abdul Qodir Al-Jaelani disajikan lengkap di sini dengan disiplin yang paling dijaga 165: riwayat hidup dari karya beliau sendiri dan sejarawan klasik, dipisahkan secara jujur dari genre manakib (karamah) yang dipelihara sebagai tradisi — keduanya tampil, keduanya ber-grade, tidak ada yang disamarkan.',
  en: 'The Manaqib of Shaykh Abd al-Qadir al-Jilani is presented here in full under 165\u2019s strictest discipline: the life record drawn from his own works and classical historians, honestly separated from the manqaba genre (karamah) preserved as tradition — both are shown, both are graded, nothing is blurred.',
}

export const GENRE_NOTE: LangText = {
  id: 'Kejujuran genre. Lima ruang di bawah memakai dua takaran berbeda: Riwayat, Karya, dan Silsilah dinilai sebagai catatan sejarah-literatur (grade C, status Documented); ruang Karamah dinilai sebagai genre manakib — dipelihara karena hadir dalam majelis-majelis selama 850 tahun (grade C, status Traditional Account). Tradisi tidak pernah dipromosikan menjadi fakta; fakta tidak pernah dikurangi martabatnya.',
  en: 'Genre honesty. The rooms below use two different measures: Life, Works, and Lineage are assessed as historical-literary records (grade C, Documented); the Karamah room is assessed as the manqaba genre — preserved because it has lived in gatherings for 850 years (grade C, Traditional Account). Tradition is never promoted to fact; fact is never demoted.',
}

// ---------------------------------------------------------------- 1. RIWAYAT (timeline)

export const RIWAYAT: MqRecord[] = [
  {
    globalId: '165-MQ-000001',
    title: { id: 'Kelahiran di Jilan, bulan Ramadan', en: 'Born in Gilan, in the month of Ramadan' },
    body: {
      id: 'Beliau lahir di Naif, kawasan Jilan (Persia), pada bulan Ramadan 470 H; sumber-sumber umum menuliskan 1077 atau 1078 M — keduanya dicatat, tidak dipaksakan satu. Nama lengkapnya: Abu Muhammad Abd al-Qadir; julukan Muhyiddin melekat pada era kedewasaannya.',
      en: 'He was born in Na\u2019if, in the region of Gilan (Persia), in Ramadan 470 AH; general sources write 1077 or 1078 CE — both are kept, neither is forced. Full name: Abu Muhammad Abd al-Qadir; the honorific Muhyiddin attaches later in his adulthood.',
    },
    date: { id: 'Ramadan 470 H · 1077/78 M', en: 'Ramadan 470 AH · 1077/78 CE' },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Al-Ghunya (riwayat diri, jil. 1); Master Blueprint §3.2 (1077/78–1166); Encyclopaedia Iranica, \u201CAbd-al-Qader Jilani\u201D',
  },
  {
    globalId: '165-MQ-000002',
    title: { id: 'Masa kecil: yatim, dibesarkan ibu', en: 'Childhood: orphaned, raised by his mother' },
    body: {
      id: 'Ayahnya, Abu Salih Musa (Jangi Dost), wafat ketika beliau masih kecil; pembesaran dilanjutkan ibunya, Ummul Khair Fatimah — dikenal sebagai wanita salehah yang menitipkan anaknya pada Allah ketika berangkat menuntut ilmu. Pendidikan awal di Jilan: mukri\u2019 Al-Qur\u2019an dan fikih dasar.',
      en: 'His father, Abu Salih Musa (Jangi Dost), died while he was young; he was raised by his mother, Umm al-Khayr Fatima — remembered as a devout woman who entrusted her son to God when he left for study. Early schooling in Gilan: Quranic recitation and basic fiqh.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Ibn Rajab, adh-Dhail \u2018ala Thabaqat al-Hanabilah; al-Fuyudat ar-Rabbaniyyah',
  },
  {
    globalId: '165-MQ-000003',
    title: { id: 'Hijrah ke Baghdad pada usia ± 18 tahun', en: 'Migration to Baghdad at about 18' },
    body: {
      id: '± 488 H (1095 M) beliau berangkat ke Baghdad — pusat ilmu dunia Islam saat itu — untuk menuntut ilmu hadits dan fikih. Kisah kafilah yang dirampok di ujung kota adalah babak paling dikenang dari perjalanan ini (lihat ruang Karamah).',
      en: 'Around 488 AH (1095 CE) he set out for Baghdad — the intellectual capital of the Islamic world — to study hadith and fiqh. The story of the caravan robbed at the city\u2019s edge is the best-remembered chapter of this journey (see the Karamah room).',
    },
    date: { id: '± 488 H / 1095 M', en: '± 488 AH / 1095 CE' },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Ibn Rajab, adh-Dhail; al-Fuyudat ar-Rabbaniyyah',
  },
  {
    globalId: '165-MQ-000004',
    title: { id: 'Studi di Baghdad: fikih Hanbali & hadits', en: 'Studies in Baghdad: Hanbali fiqh & hadith' },
    body: {
      id: 'Fikih Hanbali di bawah Abu Ghalib Ahmad ibn al-Baqillani; hadits di antaranya dari Abu Khaththab Mahfuz al-Kalwadhani dan Abu Zakariyya ath-Thabrizi. Ijazah yang terlestarikan dalam al-Ghunya mencatat puluhan guru hadits — rantai riwayatnya tersambung sampai generasi tabi\u2019in. Disiplin ini penting bagi 165: beliau adalah ulama ber-sanad panjang sebelum menjadi simbol tarekat.',
      en: 'Hanbali fiqh under Abu Ghalib Ahmad ibn al-Baqillani; hadith among others from Abu al-Khattab Mahfuz al-Kalwadhani and Abu Zakariyya al-Tabraizi. The ijaza preserved in al-Ghunya lists dozens of hadith teachers — his chains reach back to the Successors. 165 records this discipline deliberately: he was a scholar of long sanad before he became a symbol of the tariqa.',
    },
    date: { id: '488–496 H', en: '488–496 AH' },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Teks ijazah dalam Al-Ghunya li-Thalibi Thariq al-Haqq; Ibn Rajab, adh-Dhail',
  },
  {
    globalId: '165-MQ-000005',
    title: { id: 'Mashyakhat ar-ru\u2019us — 25 tahun pengembaraan', en: 'Mashyakhat al-ru\u2019us — twenty-five years of wandering' },
    body: {
      id: '± 496–521 H beliau mengembara di reruntuhan-reruntuhan Irak (mashyakhat ar-ru\u2019us — \u201Cperkampungan kepala-kepala\u201D): hidup minim, dzikir, khalwah, tanpa menetap lama di satu tempat. Para sejarawan mencakum periode ini sebagai pembentukan batinnya sebelum mengajar; detail-detailnya masuk genre manakib.',
      en: 'Around 496–521 AH he wandered the ruined outskirts of Iraq (mashyakhat al-ru\u2019us — \u201Cvillages of the heads\u201D): a spare life of dhikr and retreat, never staying long in one place. Historians acknowledge the period as the formation of his inner life before teaching; the details belong to the manqaba genre.',
    },
    date: { id: '± 496–521 H', en: '± 496–521 AH' },
    grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    source: 'Al-Fuyudat ar-Rabbaniyyah; Ibn Rajab, adh-Dhail (periode diakui sejarawan)',
  },
  {
    globalId: '165-MQ-000006',
    title: { id: 'Kembali ke Baghdad — dimulainya khithab', en: 'Return to Baghdad — the preaching begins' },
    body: {
      id: '521 H beliau kembali ke Baghdad dan mulai berkhutbah (khithab). Majelisnya berkembang dari majelis kecil menjadi himpunan besar yang menampung orang dari semua lapis — ulama, pedagang, hingga orang-orang yang jauh dari ilmu. Pengaruh khutbahnya diakui oleh catatan sejarawan Baghdad.',
      en: 'In 521 AH he returned to Baghdad and began preaching (khithab). His gathering grew from a small circle into mass assemblies open to every rank — scholars, merchants, and those far from learning. The pull of his sermons is acknowledged in Baghdad\u2019s historical records.',
    },
    date: { id: '521 H / 1126 M', en: '521 AH / 1126 CE' },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Ibn Rajab, adh-Dhail; adh-Dhahabi, Siyar A\u2019lam an-Nubala',
  },
  {
    globalId: '165-MQ-000007',
    title: { id: 'Memegang madrasah-ribath al-Mukharrimi', en: 'Taking charge of the al-Mukharrimi madrasa-ribat' },
    body: {
      id: '528 H, setelah wafat gurunya Abu Sa\u2019id al-Mubarak al-Mukharrimi, beliau memimpin madrasahnya di tepi timur Tigris — kemudian ditambahkan ribath untuk ahli dzikr. Penggabungan pengajaran syariat dan majelis dzikr di satu tempat inilah yang menjadi cikal bakal jalur Qadiriyyah.',
      en: 'In 528 AH, after the death of his teacher Abu Sa\u2019id al-Mubarak al-Mukharrimi, he took charge of the teacher\u2019s madrasa on the east bank of the Tigris — later adding a ribat for the people of dhikr. The pairing of shari\u2019a teaching and dhikr assemblies in one place became the seed of the Qadiriyya line.',
    },
    date: { id: '528 H / 1133–34 M', en: '528 AH / 1133–34 CE' },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Ibn Rajab, adh-Dhail; Ibn Katsir, al-Bidayah wa an-Nihayah',
  },
  {
    globalId: '165-MQ-000008',
    title: { id: '33 tahun mengajar: fikih, hadits & dzikir', en: 'Thirty-three years of teaching: fiqh, hadith & dhikr' },
    body: {
      id: 'Dari 528 H hingga wafat, beliau membagi pekan antara pengajaran fikih & hadits dan majelis-majelis bimbingan ruhani. Murid-murid menyalin ceramahnya; sebagian menjadi kitab yang masih dibaca hari ini (lihat ruang Karya). Dari ribath inilah penyebaran jalur yang kelak dinisbatkan namanya ke seluruh dunia.',
      en: 'From 528 AH until his death he split his week between teaching fiqh & hadith and the assemblies of spiritual guidance. Students transcribed his sermons; some became the books still read today (see Works). From this ribat the line that would carry his name spread across the world.',
    },
    date: { id: '528–561 H', en: '528–561 AH' },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Ibn Rajab, adh-Dhail; prolog Al-Fath ar-Rabbani',
  },
  {
    globalId: '165-MQ-000009',
    title: { id: 'Fath ar-Rabbani — 62 khutbah terlestarikan', en: 'Al-Fath ar-Rabbani — 62 sermons preserved' },
    body: {
      id: 'Kurun 545–553 H, khutbah-khutbah Jumat beliau di madrasah disalin dan disusun menjadi Al-Fath ar-Rabbani (62 khutbah). Teks ini adalah bukti langsung gaya dakwahnya: panggilan taubat, sabar, dzikir, dan penegakan syariat — bukti primer (sebagaimana teks tersimpan) yang membuat 165 menilai ruang Riwayat dengan takaran sejarah.',
      en: 'Between 545 and 553 AH his Friday sermons at the madrasa were transcribed and arranged as Al-Fath ar-Rabbani (62 sermons). This text is a direct witness to his preaching voice — the call to repentance, patience, dhikr and the upholding of shari\u2019a — a primary witness (inasmuch as the text survives) under the historical measure 165 applies to the Life room.',
    },
    date: { id: '545–553 H', en: '545–553 AH' },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Al-Fath ar-Rabbani (teks terlestarikan, 62 khutbah)',
  },
  {
    globalId: '165-MQ-000010',
    title: { id: 'Wafat & pemakaman di madrasahnya', en: 'Death & burial in his own madrasa' },
    body: {
      id: 'Malam Sabtu, 8 Syawal 561 H (1166 M), pada usia ± 91 tahun hijriah, beliau wafat di Baghdad. Beliau dimakamkan di madrasahnya; tempat itu berkembang menjadi Maqam Sultanul Awliya di ar-Rusafah — pusat ziarah dari berbagai penjuru dunia sampai hari ini.',
      en: 'On Saturday night, 8 Shawwal 561 AH (1166 CE), at about 91 lunar years of age, he died in Baghdad. He was buried in his own madrasa; the site grew into the Maqam Sultan al-Awliya in al-Rusafa — a pilgrimage centre drawing visitors from every direction to this day.',
    },
    date: { id: '8 Syawal 561 H / 1166 M', en: '8 Shawwal 561 AH / 1166 CE' },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Ibn Katsir, al-Bidayah wa an-Nihayah; adh-Dhahabi, Siyar A\u2019lam an-Nubala; Ibn Rajab, adh-Dhail',
  },
  {
    globalId: '165-MQ-000011',
    title: { id: 'Pasca-wafat: Qadiriyyah menyebar ke dunia', en: 'After his death: the Qadiriyya spreads worldwide' },
    body: {
      id: 'Jalur yang dinisbatkan namanya menyebar dari Baghdad ke Suriah, Mesir, Afrika Utara, Turki, Asia Selatan, dan — melalui jalur-jalur Nusantara — kepulauan Indonesia. Sejarah tarekat mencatat Qadiriyyah sebagai salah satu jaringan tasawuf terluas; penyebaran ini fakta sejarah tarekat, terpisah dari karamah-karamah yang diberitakan tentang beliau.',
      en: 'The line carrying his name spread from Baghdad to Syria, Egypt, North Africa, Turkey, South Asia and — through Nusantara\u2019s lines — the Indonesian archipelago. The history of the tariqas records the Qadiriyya among the widest Sufi networks; this spread is a matter of tariqa history, distinct from the karamah stories told about him.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Literatur sejarah tarekat; Master Blueprint §3.2 (165-SRC-000003, Level B)',
  },
  {
    globalId: '165-MQ-000012',
    title: { id: 'Majelis Manaqib di Nusantara', en: 'Manaqib gatherings in the archipelago' },
    body: {
      id: 'Di pesantren-pesantren Sunda & Jawa — termasuk komunitas-komunitas Qodiriyah — pembacaan Manaqib Syattanawfi (al-Fuyudat ar-Rabbaniyyah) menjadi majelis rutin: silsilah dibaca, karamah dikenang, doa khataman diucapkan; pada sebagian majelis dikenal praktik \u201Cberokan\u201D (membaca sambil berdiri). Detail praktik spesifik tiap majelis menunggu dokumentasi sumber internal pesantren — 165 menunggu deposit itu dengan jujur.',
      en: 'In the pesantren of Sunda & Java — including Qadiriyya communities — the reading of Shattanawfi\u2019s Manaqib (al-Fuyudat ar-Rabbaniyya) became a standing assembly: the chain recited, the karamah remembered, the closing prayer offered; some gatherings know the practice of \u201Cberokan\u201D (reciting while standing). The specific practice of each gathering awaits documentation from the pesantren\u2019s internal sources — 165 waits for that deposit honestly.',
    },
    grade: 'D', status: 'TRADITIONAL_ACCOUNT',
    source: 'Catatan agregat tradisi komunitas Nusantara (Level D/E) — deposit sumber internal menunggu',
    note: {
      id: 'Rekam ini bermaksud mengundang pesantren & majelis mendokumentasikan praktiknya sendiri — lewat alur Kontribusi.',
      en: 'This record exists to invite pesantren & gatherings to document their own practice — through the Contribution workflow.',
    },
  },
]

// ---------------------------------------------------------------- 2. KARYA

export const KARYA: MqRecord[] = [
  {
    globalId: '165-MQ-000020',
    title: { id: 'Al-Ghunya li-Thalibi Thariq al-Haqq', en: 'Al-Ghunya li-Talibi Tariq al-Haqq' },
    body: {
      id: 'Karya induk beliau — \u201CCukupan bagi penuntut jalan yang benar\u201D. Memuat riwayat hidup & ijazah beliau sendiri, kaidah fikih ibadah, akhlak, maqamat para ahli, hingga bab akhirat. Di sinilah ijazah & daftar guru haditsnya terlestarikan — sumber utama ruang Riwayat.',
      en: 'His magnum opus — \u201CSufficient Provision for Seekers of the Path of Truth\u201D. It carries his own life record and ijazas, rules of worship, ethics, the stations of the knowers, and the hereafter. His ijazas and the list of his hadith teachers survive here — the primary source for the Life room.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Edisi ilmiah al-Ghunya (4 jilid); disitasi lintas literatur Hanbali',
  },
  {
    globalId: '165-MQ-000021',
    title: { id: 'Al-Fath ar-Rabbani', en: 'Al-Fath ar-Rabbani' },
    body: {
      id: '62 khutbah Jumat (545–553 H) yang disalin murid-muridnya — jendela paling langsung ke suara dakwah beliau. Tema-temanya: taubat, sabar, niat, dzikir, dan berdirinya hati di atas syariat.',
      en: '62 Friday sermons (545–553 AH) transcribed by his students — the most direct window into his preaching voice. Its themes: repentance, patience, intention, dhikr, and the heart standing upon shari\u2019a.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Al-Fath ar-Rabbani (62 khutbah, teks terlestarikan)',
  },
  {
    globalId: '165-MQ-000022',
    title: { id: 'Futuh al-Ghaib', en: 'Futuh al-Ghaib' },
    body: {
      id: '\u201CPembukaan-pembukaan dari alam gaib\u201D — 78 risalah pendek untuk para penuntut: tentang ikhlas, berserah, kesabaran, dan pembersihan hati. Salah satu kitab tasawuf yang paling banyak dibaca dunia.',
      en: '\u201CRevelations of the Unseen\u201D — 78 short epistles for seekers: on sincerity, trust, patience and the purification of the heart. Among the most widely read Sufi books in the world.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Futuh al-Ghaib (78 risalah)',
  },
  {
    globalId: '165-MQ-000023',
    title: { id: 'Sirr al-Asrar', en: 'Sirr al-Asrar' },
    body: {
      id: '\u201CRahasia rahasia\u201D — pedoman adab antara murid dan mursyid, niat dzikir, dan tata kehidupan penuntut jalan. Atribusinya diterima luas dalam literatur tarekat.',
      en: '\u201CSecret of Secrets\u201D — a guide to the disciple\u2019s adab with the guide, the intention of dhikr and the seeker\u2019s conduct. Its attribution is broadly accepted in tariqa literature.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Sirr al-Asrar; literatur tarekat',
  },
  {
    globalId: '165-MQ-000024',
    title: { id: 'Jila\u2019 al-Khatir', en: 'Jila\u2019 al-Khatir' },
    body: {
      id: '\u201CPembersihan hati\u201D — himpunan risalah pendek tentang menata hati dan membersihkannya. Disitasi luas dalam tradisi Qadiriyyah.',
      en: '\u201CThe Purification of the Heart\u201D — a set of short epistles on ordering and cleansing the heart. Widely cited within the Qadiriyya tradition.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Jila\u2019 al-Khatir (Kashf al-Asrar)',
  },
  {
    globalId: '165-MQ-000025',
    title: { id: 'Malfuzat — ucapan yang dikumpulkan murid', en: 'Malfuzat — sayings collected by students' },
    body: {
      id: 'Kumpulan ucapan-ucapan beliau di majelis yang dicatat dan disusun murid-muridnya. Statusnya jujur: rekaman murid terhadap guru — berharga, namun bukan teks yang beliau susun sendiri.',
      en: 'A collection of his sayings in the assemblies, noted and arranged by his students. Its status is stated honestly: students\u2019 records of their teacher — precious, but not a text he arranged himself.',
    },
    grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    source: 'Malfuzat (kompilasi murid-murid)',
  },
]

// ---------------------------------------------------------------- 3. SILSILAH (Qadiriyyah klasik)

export type SilsilahLink = {
  order: number
  name: string
  era: string
  place: string
  grade: MqGrade
  status: MqStatus
  note?: LangText
}

export const SILSILAH_TITLE: LangText = {
  id: 'Silsilah Qadiriyyah — seperti dibaca di majelis-majelis',
  en: 'The Qadiriyya chain — as recited in the gatherings',
}

export const SILSILAH_NOTE: LangText = {
  id: 'Kejujuran tampilan. Ini silsilah klasik Qadiriyyah sebagaimana dibaca dalam majelis-majelis dan literatur tarekat — grade C, status Traditional Account. 165 menampilkannya sebagai warisan tradisi ber-sumber, BUKAN sebagai ijazah terverifikasi per mata. Catatan varian klasik dicantumkan apa adanya (lihat mata ke-3 dan ke-10). Jalur Naqsyabandiyah melalui Abu Bakar ash-Shiddiq terdokumentasi terpisah — lihat Papan Sanad di Ruang Kepercayaan (165-SANAD-000001..003).',
  en: 'Display honesty. This is the classical Qadiriyya chain as recited in the gatherings and tariqa literature — grade C, Traditional Account. 165 shows it as a sourced living tradition, NOT as a per-link verified ijaza. Known classical variants are stated as they are (see links 3 and 10). The Naqshbandiyya line through Abu Bakr as-Siddiq is documented separately — see the Sanad Board in the Trust room (165-SANAD-000001..003).',
}

export const SILSILAH: SilsilahLink[] = [
  { order: 1, name: 'Rasulullah Muhammad ﷺ', era: '571–632 M', place: 'Makkah · Madinah', grade: 'C', status: 'DOCUMENTED' },
  { order: 2, name: 'Saidina Ali ibn Abi Thalib (k.w.)', era: 'w. 40 H', place: 'Madinah · Kufah', grade: 'C', status: 'TRADITIONAL_ACCOUNT' },
  {
    order: 3, name: 'Imam Hasan al-Bashri', era: '21–110 H', place: 'Bashrah', grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    note: {
      id: 'Catatan varian klasik: keduanya tidak pernah bertemu secara terdokumentasi; tradisi tarekat menjelaskan mata ini sebagai \u201Cpintu tawajjuh\u201D (petunjuk tanpa lisan). 165 mencatat penjelasan tradisi DAN catatan kritisnya — keduanya tampil.',
      en: 'Classical variant note: the two never met in any documented record; tariqa tradition explains this link as a \u201Cdoor of tawajjuh\u201D (directed transmission without speech). 165 records both the traditional explanation and the critical note — both are shown.',
    },
  },
  { order: 4, name: 'Habib al-\u2018Ajami', era: 'w. ± 113 H', place: 'Bashrah', grade: 'C', status: 'TRADITIONAL_ACCOUNT' },
  { order: 5, name: 'Dawud ath-Tha\u2019i', era: 'w. 165 H', place: 'Bashrah', grade: 'C', status: 'TRADITIONAL_ACCOUNT' },
  { order: 6, name: 'Ma\u2019ruf al-Karkhi', era: 'w. ± 200 H', place: 'Baghdad', grade: 'C', status: 'TRADITIONAL_ACCOUNT' },
  { order: 7, name: 'Sari as-Saqathi', era: 'w. ± 253 H', place: 'Baghdad', grade: 'C', status: 'TRADITIONAL_ACCOUNT' },
  { order: 8, name: 'Junaid al-Baghdadi', era: 'w. 297/298 H', place: 'Baghdad', grade: 'C', status: 'TRADITIONAL_ACCOUNT' },
  { order: 9, name: 'Abu Bakr asy-Syibli', era: 'w. 334 H', place: 'Baghdad', grade: 'C', status: 'TRADITIONAL_ACCOUNT' },
  {
    order: 10, name: 'Abdul Aziz ath-Thamimi', era: 'abad ke-4 H', place: 'Baghdad', grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    note: {
      id: 'Catatan varian: sebagian ijazah tidak memuat nama ini (Syibli langsung ke Abu al-Farraj ath-Tharthusi). Kedua bentuk silsilah hidup dalam literatur tarekat; 165 tidak memilih diam-diam.',
      en: 'Variant note: some ijazas omit this name (Shibli straight to Abu al-Faraj al-Tartusi). Both forms of the chain live in tariqa literature; 165 does not silently choose.',
    },
  },
  { order: 11, name: 'Abu al-Farraj ath-Tharthusi', era: 'abad ke-4–5 H', place: 'Baghdad', grade: 'C', status: 'TRADITIONAL_ACCOUNT' },
  { order: 12, name: 'Abu Sa\u2019id al-Mubarak al-Mukharrimi', era: 'w. ± 513 H', place: 'Baghdad', grade: 'C', status: 'DOCUMENTED', note: { id: 'Guru fikih-tasawuf beliau; pemilik madrasah yang kemudian dipegang Syekh Abdul Qadir (528 H). Mata ini termasuk yang terdokumentasi terbaik.', en: 'The shaykh\u2019s teacher in fiqh and tasawwuf; owner of the madrasa later taken by Abd al-Qadir (528 AH). Among the best-documented links.' } },
  { order: 13, name: 'Muhyiddin Abd al-Qadir al-Jilani', era: '470–561 H', place: 'Jilan · Baghdad', grade: 'C', status: 'DOCUMENTED' },
]

// ---------------------------------------------------------------- 4. KARAMAH (genre manakib)

export const KARAMAH_NOTE: LangText = {
  id: 'Ruang ini adalah genre manakib (grade C, status Traditional Account): kisah-kisah yang hidup di majelis selama ± 850 tahun, terutama lewat Al-Fuyudat ar-Rabbaniyyah karya Ali ibn Yusuf asy-Syatthanaufi (w. 723 H). 165 memeliharanya karena kehadirannya dalam tradisi — dan menolak menjadikannya alasan klaim legitimasi atau bukti sejarah.',
  en: 'This room is the manqaba genre (grade C, Traditional Account): stories that have lived in gatherings for some 850 years, chiefly through Ali ibn Yusuf al-Shattanawfi\u2019s Al-Fuyudat ar-Rabbaniyya (d. 723 AH). 165 preserves them because of their life in tradition — and refuses to turn them into claims of legitimacy or historical proof.',
}

export const KARAMAH: MqRecord[] = [
  {
    globalId: '165-MQ-000030',
    title: { id: 'Bayi Ramadan yang menahan diri', en: 'The Ramadan infant who held back' },
    body: {
      id: 'Beliau menceritakan: \u201CAku lahir di bulan Ramadan; aku tidak menyusu di siang hari, dan ibuku pun diarahkan menyusuiku di malam hari.\u201D Riwayat ini dinisbatkan kepada beliau sendiri melalui adz-Dhail Ibn Rajab dan manakib.',
      en: 'He narrated: \u201CI was born in Ramadan; I would not nurse by day, and my mother was guided to nurse me by night.\u201D The report is attributed to him through Ibn Rajab\u2019s Dhayl and the manaqib.',
    },
    grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    source: 'Ibn Rajab, adh-Dhail; al-Fuyudat ar-Rabbaniyyah',
  },
  {
    globalId: '165-MQ-000031',
    title: { id: '40 dinar & taubat kepala perampok', en: 'Forty dinars & the robber chief\u2019s repentance' },
    body: {
      id: 'Di ujung Baghdad, kafilah yang membawanya dirampok. Empat puluh dinar miliknya — dijahit ibunya di ketiaknya — tertangkap tangan. Beliau menyerahkannya secara jujur, menyebut itu amanah ibunya. Kepala perampok terguncang, menangis, dan bertaubat; riwayat menyebutnya termasuk yang pertama-tama berganti jalan. Kisah ini kunci memahami cara dakwah beliau: kejujuran yang mengubah hati.',
      en: 'At Baghdad\u2019s edge, the caravan carrying him was robbed. His forty dinars — sewn into his armpit by his mother — were discovered. He surrendered them honestly, naming them his mother\u2019s trust. The robber chief shook, wept, and repented; reports count him among the first to change course. The story is a key to the shaykh\u2019s method: honesty that turns hearts.',
    },
    grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    source: 'Al-Fuyudat ar-Rabbaniyyah; Ibn Rajab, adh-Dhail',
  },
  {
    globalId: '165-MQ-000032',
    title: { id: 'Jawaban yang sama 13 kali', en: 'The same answer thirteen times' },
    body: {
      id: 'Seorang lelaki datang dan bertanya tiga belas kali: \u201CBagaimana keadaanmu, wahai Syaikh?\u201D Beliau menjawab tiga belas kali dengan tenang: \u201CAlhamdulillah atas setiap keadaan.\u201D Lelaki itu berkata, tujuannya menguji kesabaran beliau — lalu beliau menjawab untuk ketiga belas kalinya tanpa satu pun guratan murka.',
      en: 'A man came and asked thirteen times: \u201CHow are you, O Shaykh?\u201D He answered thirteen times, unhurried: \u201CAlhamdulillah, upon every state.\u201D The man said his aim had been to test the shaykh\u2019s patience — and the shaykh answered the thirteenth time without a single trace of anger.',
    },
    grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    source: 'Al-Fuyudat ar-Rabbaniyyah',
  },
  {
    globalId: '165-MQ-000033',
    title: { id: 'Jawaban kepada pengejek', en: 'The answer to the mocker' },
    body: {
      id: 'Seorang pria mengusik: \u201CSudahkah engkau bertaubat dari kebohonganmu?\u201D Beliau menjawab: \u201CTidak, demi Allah — aku tidak pernah berbohong sejak Allah memberiku hidayah.\u201D Jawaban ini tercatat dalam karya para sejarawan (Siyar adz-Dzahabi, adh-Dhail Ibn Rajab) — karenanya termasuk karamah yang takarannya paling kuat.',
      en: 'A man taunted: \u201CHave you repented from your lies?\u201D He answered: \u201CNo, by God — I have not lied since God guided me.\u201D The exchange is recorded by the historians (al-Dhahabi\u2019s Siyar, Ibn Rajab\u2019s Dhayl) — which places it among the most strongly attested of the stories.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Adh-Dhahabi, Siyar A\u2019lam an-Nubala; Ibn Rajab, adh-Dhail',
  },
  {
    globalId: '165-MQ-000034',
    title: { id: 'Khutbah besar yang menarik ribuan', en: 'The great sermon that drew thousands' },
    body: {
      id: 'Manakib memberitakan khutbah-khutbah yang memenuhi lapangan: ribuan hadir, banyak yang bertaubat di tempat. Lapisan sejarahnya: para sejarawan memang mencatat tarikan khutbah beliau yang luar biasa besarnya; angka konversi spesifik milik genre manakib. 165 menampilkan dua lapis itu berdampingan — tidak ada yang saling menggantikan.',
      en: 'The manaqib report sermons that filled open ground: thousands present, many repenting on the spot. The historical layer: the historians do record the extraordinary pull of his preaching; the specific conversion figures belong to the manqaba genre. 165 shows the two layers side by side — neither replacing the other.',
    },
    grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    source: 'Al-Fuyudat ar-Rabbaniyyah; catatan sejarawan Baghdad (dua lapis, tampil berdampingan)',
  },
  {
    globalId: '165-MQ-000035',
    title: { id: 'Tolong-menolong dari jauh — \u201CYa Ghaus!\u201D', en: 'Help from afar — \u201CYa Ghaus!\u201D' },
    body: {
      id: 'Manakib menceritakan orang-orang dalam kesesakan — di laut, di perjalanan, di penjara — yang menyeru namanya dan terbantu dari tempat jauh. Dari riwayat-riwayat inilah julukan Ghausul A\u2019zam dan seruan \u201CYa Abdal Qadir\u201D melekat kuat di tradisi tarekat.',
      en: 'The manaqib tell of people in distress — at sea, on the road, in prison — who called on his name and found help from afar. From such reports the titles Ghaus al-A\u2019zam and the cry \u201CYa Abdal Qadir\u201D took firm hold in tariqa tradition.',
    },
    grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    source: 'Al-Fuyudat ar-Rabbaniyyah; literatur tarekat',
  },
  {
    globalId: '165-MQ-000036',
    title: { id: '\u201CAku tidak mencintaimu karena Allah\u201D', en: '\u201CI do not love you for God\u2019s sake\u201D' },
    body: {
      id: 'Seorang pria berkata: \u201CAku mencintaimu karena Allah.\u201D Beliau menjawab: \u201CAku tidak mencintaimu karena Allah.\u201D Pria itu terpukul lalu mengeluh pada pengikutnya — dan dari mereka ia menerima pembenaran hati yang mengubah keluhannya. Pelajaran yang dibawa majelis dari kisah ini: kejujuran mursyid tidak menari mengikuti selera orang.',
      en: 'A man said: \u201CI love you for God\u2019s sake.\u201D He answered: \u201CI do not love you for God\u2019s sake.\u201D The man was stung and complained to the shaykh\u2019s followers — and from them he received a correction of heart that turned his complaint around. The lesson carried by the gatherings: a guide\u2019s honesty does not dance to please.',
    },
    grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    source: 'Al-Fuyudat ar-Rabbaniyyah',
  },
  {
    globalId: '165-MQ-000037',
    title: { id: 'Kesaksian beliau sendiri tentang kejagaan', en: 'His own testimony of the wakeful visions' },
    body: {
      id: 'Dalam kitab-kitab yang beliau susun sendiri (al-Ghunya, jilid akhir; dan keterangan-keterangan di majelisnya yang tersalin), beliau meriwayatkan pengalaman-pengalaman ruhaninya — termasuk kejagaan bertemu para nabi. 165 merekam ini sebagai kesaksian pengalaman rohani yang beliau laporkan sendiri: berharga sebagai teks primer, tidak diverifikasi sebagai peristiwa.',
      en: 'In the books he arranged himself (the closing volume of al-Ghunya, and remarks in his assemblies as transcribed), he reports his own spiritual experiences — including wakeful meetings with the prophets. 165 records these as testimony of spiritual experience he himself reported: primary as text, unverified as event.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Al-Ghunya (riwayat diri, jil. akhir); teks majelis yang tersalin',
  },
  {
    globalId: '165-MQ-000038',
    title: { id: 'Ribath yang melahirkan generasi', en: 'The ribat that raised generations' },
    body: {
      id: 'Karamah yang berlangsung terus-menerus dan tak terbantahkan adalah peninggalan lembaganya: dari madrasah-ribathnya lahir para pengajar, mufasir, dan mursyid yang menyebarkan jalan itu berabad-abad. 165 menilai ini sebagai \u201Ckaramah lembaga\u201D yang paling dapat diperiksa — buktinya adalah sejarahnya sendiri.',
      en: 'The uninterrupted, undisputed karamah is the legacy of his institution: from his madrasa-ribat came teachers, exegetes and guides who carried the way across centuries. 165 assesses this as the most checkable of \u201Cinstitutional karamah\u201D — its proof is history itself.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Sejarah tarekat; Ibn Rajab, adh-Dhail',
  },
  {
    globalId: '165-MQ-000039',
    title: { id: '850 tahun ziarah di ar-Rusafah', en: '850 years of pilgrimage at al-Rusafa' },
    body: {
      id: 'Makamnya di madrasahnya — kini Maqam Sultanul Awliya — telah dikunjungi peziarah dari seluruh dunia selama hampir sembilan abad, melewati kekhalifahan, kekuasaan, dan perang. Fakta keberlanjutan ziarah ini terekam dalam sejarah; nilainya bagi 165 bukan bukti karamah, melainkan bukti kehidupan sebuah tradisi.',
      en: 'His grave in his own madrasa — today the Maqam Sultan al-Awliya — has received pilgrims from every corner of the world for nearly nine centuries, across caliphates, powers and wars. The continuity of this pilgrimage is on the record; for 165 its value is not proof of karamah but proof of a living tradition.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Sejarah Baghdad & literatur ziarah',
  },
]

// ---------------------------------------------------------------- 5. HIKAM

export const HIKAM_NOTE: LangText = {
  id: 'Kutipan yang terlestarikan apa adanya diberi tanda kutip; inti ajaran yang diparafrasekan diberi label \u201CParafrase inti\u201D supaya tidak ada satu kata pun yang diklaim sebagai perkataan beliau padahal bukan.',
  en: 'Quotations that survive as text are marked with quotation marks; teachings summarized are labelled \u201CCore paraphrase\u201D so that no word is ever claimed as his where it is not.',
}

export type Hikam = {
  globalId: string
  quote?: string
  title: LangText
  body: LangText
  grade: MqGrade
  status: MqStatus
  source: string
}

export const HIKAM: Hikam[] = [
  {
    globalId: '165-MQ-000040',
    title: { id: 'Berdiri di atas syariat', en: 'Standing upon the shari\u2019a' },
    quote: '\u201CJika kalian melihatku tegak di atas syariat, terimalah aku; jika tidak, tolaklah aku.\u201D',
    body: {
      id: 'Perkataan yang diriwayatkan dari majelis-majelisnya dan selaras penuh dengan teks tertulisnya. Inilah pagar kejujuran yang dibawa 165 dalam seluruh penyajian tarekat: tidak ada dzikir yang berdiri di luar syariat.',
      en: 'Reported from his assemblies and fully consistent with his written corpus. It is the fence of honesty 165 carries across every tariqa presentation: no dhikr stands outside the shari\u2019a.',
    },
    grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    source: 'Diriwayatkan dalam majelis Fath ar-Rabbani; konsisten dengan teks Al-Fath ar-Rabbani & Al-Ghunya',
  },
  {
    globalId: '165-MQ-000041',
    title: { id: 'Ikhlaskan segala kepada-Nya', en: 'Hand all to Him' },
    body: {
      id: 'Parafrase inti Futuh al-Ghaib: buanglah ketergantungan pada makhluk, bersihkan niat dari pandangan orang, dan jadikan setiap langkah menghadap Allah — maka hati dibukakan pintu-pintu yang tidak terbuka dengan kekuatan sendiri.',
      en: 'Core paraphrase of Futuh al-Ghaib: release dependence on creatures, cleanse intention of the gaze of others, and turn every step toward God — and the heart is opened doors no strength of its own could open.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Parafrase inti Futuh al-Ghaib (risalah 1–12)',
  },
  {
    globalId: '165-MQ-000042',
    title: { id: 'Sabar adalah panggung pertama', en: 'Patience is the first stage' },
    body: {
      id: 'Parafrase inti Al-Fath ar-Rabbani: sabar di atas perintah, sabar dari larangan, dan sabar atas ujian — tiga sabar ini panggung pertama sebelum dzikir menjadi manis. Khutbah-khutbahnya menagih taubat lebih dahulu, bukan mukjizat.',
      en: 'Core paraphrase of Al-Fath ar-Rabbani: patience upon the command, patience from the prohibition, patience under the trial — these three precede the sweetness of dhikr. His sermons demand repentance first, not wonders.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Parafrase inti Al-Fath ar-Rabbani (khutbah awal)',
  },
  {
    globalId: '165-MQ-000043',
    title: { id: 'Adab murid kepada mursyid', en: 'The disciple\u2019s adab with the guide' },
    body: {
      id: 'Parafrase inti Sirr al-Asrar: adab kepada mursyid adalah pintu manfaat ilmu; murid yang memikul adab membawa berkah pelajarannya, murid yang mengabaikan adab mengeringkan maknanya.',
      en: 'Core paraphrase of Sirr al-Asrar: adab with the guide is the door of the teaching\u2019s benefit; the disciple who carries adab carries its blessing, the one who neglects it dries its meaning.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Parafrase inti Sirr al-Asrar',
  },
  {
    globalId: '165-MQ-000044',
    title: { id: 'Ilmu & adab sebelum klaim', en: 'Knowledge & adab before claims' },
    body: {
      id: 'Pelajaran Master Blueprint §3.2 (Level B, deposit Founder): \u201CAuthority is preserved through learning, adab, practice and transmission — not merely through branding.\u201D — Otoritas dipelihara melalui ilmu, adab, amal, dan transmisi — bukan sekadar merek.',
      en: 'Master Blueprint §3.2 lesson (Level B, Founder\u2019s deposit): \u201CAuthority is preserved through learning, adab, practice and transmission — not merely through branding.\u201D',
    },
    grade: 'B', status: 'DOCUMENTED',
    source: 'Master Blueprint §3.2 (165-SRC-000003, deposit kanonik)',
  },
]

// ---------------------------------------------------------------- 6. DALAM TQN

export type TqnCard = { globalId: string; title: LangText; body: LangText; grade: MqGrade; status: MqStatus; source: string }

export const TQN_CARDS: TqnCard[] = [
  {
    globalId: '165-MQ-000050',
    title: { id: 'Eponim jalur Qodiriyah', en: 'Eponym of the Qadiriyya line' },
    body: {
      id: 'Jalur Qodiriyah (165-TRAD-000002) dinamai menurut beliau. Dalam struktur 165, beliau tercatat \u201Chistorical eponym\u201D — figur sejarah yang menjadi nama jalur — tanpa pernah dipakai sebagai klaim ijazah terverifikasi per mata.',
      en: 'The Qadiriyya line (165-TRAD-000002) carries his name. In 165\u2019s structure he is recorded as \u201Chistorical eponym\u201D — the historical figure the line is named after — never used as a per-link verified ijaza claim.',
    },
    grade: 'B', status: 'DOCUMENTED',
    source: 'Master Blueprint §3.2; Encyclopaedia Iranica, \u201CAbd-al-Qader Jilani\u201D',
  },
  {
    globalId: '165-MQ-000051',
    title: { id: '\u201CTuan Syekh\u201D dalam dokumen Founder', en: '\u201CTuan Syekh\u201D in the Founder\u2019s document' },
    body: {
      id: 'Master Blueprint menyatakan working assumption-nya secara terbuka: dalam dokumen itu, \u201CTuan Syekh\u201D merujuk pada Syekh Abd al-Qadir al-Jilani. Kejujuran definisi ini adalah contoh disiplin sumber yang diberlakukan 165 ke semua catatan.',
      en: 'The Master Blueprint states its working assumption openly: within that document, \u201CTuan Syekh\u201D refers to Shaykh Abd al-Qadir al-Jilani. This definitional honesty exemplifies the source discipline 165 applies to all records.',
    },
    grade: 'B', status: 'DOCUMENTED',
    source: 'Master Blueprint, Working Assumption (hlm. pembuka, 165-SRC-000003)',
  },
  {
    globalId: '165-MQ-000052',
    title: { id: 'Dhikr jahir Qodiriyah · dhikr khafi Naqsyabandiyah', en: 'The Qadiriyya\u2019s voiced dhikr · the Naqshbandiyya\u2019s silent dhikr' },
    body: {
      id: 'TQN menggabungkan dua akar: jalur Qodiriyah (dhikr jahir — dikeraskan) dan jalur Naqsyabandiyah (dhikr khafi — hening; Blueprint §3.3 mencatat pentingnya dhikr hening dalam tradisi awal Naqshbandiyya). Manaqib beliau dan adab Naqsyabandiyah bertemu di satu titik: syariat sebagai dasar semua.',
      en: 'TQN joins two roots: the Qadiriyya line (voiced dhikr) and the Naqshbandiyya line (silent dhikr; Blueprint §3.3 notes the importance of silent dhikr in the early Naqshbandiyya). His manaqib and the Naqshbandi adab meet at one point: the shari\u2019a as the ground of everything.',
    },
    grade: 'B', status: 'DOCUMENTED',
    source: 'Master Blueprint §3.2–3.3; catatan tradisi TQN (Level D/E)',
  },
  {
    globalId: '165-MQ-000053',
    title: { id: 'Tiga jalur transmisi ke Nusantara', en: 'Three transmission lines to the archipelago' },
    body: {
      id: 'Melalui Master Blueprint §3.5 yang didepositkan, jalur-jalur transmisi TQN ke Jawa tercatat melalui Shaykh Abdul Karim Banten, Shaykh Ahmad Thalhah Cirebon, dan Shaykh Muhammad Hasbullah Madura — dilanjutkan pusat Suryalaya, Rejoso, Mranggen, Pangentongan. Lihat Papan Sanad untuk rekaman display-only lengkapnya.',
      en: 'Through the deposited Master Blueprint §3.5, TQN\u2019s transmission lines into Java are recorded through Shaykh Abdul Karim Banten, Shaykh Ahmad Thalhah Cirebon, and Shaykh Muhammad Hasbullah Madura — followed by the centres Suryalaya, Rejoso, Mranggen and Pangentongan. See the Sanad Board for the full display-only records.',
    },
    grade: 'D', status: 'TRADITIONAL_ACCOUNT',
    source: 'Master Blueprint §3.5 (165-SRC-000003); rekaman 165-SANAD-000001..003',
  },
]

// ---------------------------------------------------------------- 7. SUMBER

export type MqSource = { globalId: string; label: string; kind: LangText; grade: MqGrade; status: MqStatus }

export const SOURCES: MqSource[] = [
  { globalId: '165-SRC-000003', label: '165 Master Blueprint v1.0 — §3.2 & Working Assumption', kind: { id: 'Deposit kanonik Founder (Ruang Dokumen, verbatim)', en: 'Founder\u2019s canonical deposit (Document Room, verbatim)' }, grade: 'B', status: 'DOCUMENTED' },
  { globalId: '165-SRC-MQ-IRANICA', label: 'Encyclopaedia Iranica — \u201CAbd-al-Qader Jilani\u201D', kind: { id: 'Ensiklopedia ilmiah (dikutip Blueprint §3.2)', en: 'Scholarly encyclopaedia (cited by Blueprint §3.2)' }, grade: 'C', status: 'DOCUMENTED' },
  { globalId: '165-SRC-MQ-GHUNYA', label: 'Al-Ghunya li-Thalibi Thariq al-Haqq', kind: { id: 'Karya beliau sendiri — riwayat diri & ijazah', en: 'His own work — self-record & ijazas' }, grade: 'C', status: 'DOCUMENTED' },
  { globalId: '165-SRC-MQ-FATH', label: 'Al-Fath ar-Rabbani', kind: { id: '62 khutbah terlestarikan (545–553 H)', en: '62 preserved sermons (545–553 AH)' }, grade: 'C', status: 'DOCUMENTED' },
  { globalId: '165-SRC-MQ-FUTUH', label: 'Futuh al-Ghaib', kind: { id: '78 risalah untuk penuntut jalan', en: '78 epistles for seekers' }, grade: 'C', status: 'DOCUMENTED' },
  { globalId: '165-SRC-MQ-SIRR', label: 'Sirr al-Asrar', kind: { id: 'Pedoman murid & mursyid', en: 'Guide for disciple & guide' }, grade: 'C', status: 'DOCUMENTED' },
  { globalId: '165-SRC-MQ-FUYUDAT', label: 'Al-Fuyudat ar-Rabbaniyyah — Ali ibn Yusuf asy-Syatthanaufi (w. 723 H)', kind: { id: 'Kitab Manaqib induk — genre karamah', en: 'The master Manaqib — the karamah genre' }, grade: 'C', status: 'TRADITIONAL_ACCOUNT' },
  { globalId: '165-SRC-MQ-SIYAR', label: 'Adh-Dhahabi — Siyar A\u2019lam an-Nubala', kind: { id: 'Sejarawan & biografis klasik', en: 'Classical historian & biographer' }, grade: 'C', status: 'DOCUMENTED' },
  { globalId: '165-SRC-MQ-DHAIL', label: 'Ibn Rajab — Adh-Dhail \u2018ala Thabaqat al-Hanabilah', kind: { id: 'Biografis Hanbali klasik', en: 'Classical Hanbali biography' }, grade: 'C', status: 'DOCUMENTED' },
  { globalId: '165-SRC-MQ-BIDAYA', label: 'Ibn Katsir — Al-Bidayah wa an-Nihayah', kind: { id: 'Sejarah klasik', en: 'Classical history' }, grade: 'C', status: 'DOCUMENTED' },
]

export const CLOSING_NOTE: LangText = {
  id: 'Ajakan terbuka. Punya teks ijazah, foto naskah, rekaman majelis manaqib, atau catatan silsilah dari sumber internal pesantren? Sampaikan lewat ruang Kontribusi — setiap deposit akan ditelaah dewan, dan catatan ini akan bertambah, bukan berganti. Begitulah 165 memuliakan Manaqib: dengan bukti, bukan dengan berlebihan.',
  en: 'An open invitation. Holding an ijaza text, a manuscript photo, a manaqib gathering recording, or lineage notes from a pesantren\u2019s internal sources? Submit them through the Contribution room — every deposit goes through council review, and this record will grow, not be replaced. That is how 165 honours the Manaqib: with evidence, never with excess.',
}
