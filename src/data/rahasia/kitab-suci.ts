// 165 — RAHASIA AL-QUR'AN & HADIS (arsip Source-First)
//
// DISIPLIN NON-NEGOTIABLE:
//  - Teks Arab yang ditampilkan HANYA yang terlestarikan verbatim di mushaf /
//    kitab induk hadis — tidak ada satu kata Arab yang dikarang.
//  - Terjemahan disebut "terjemahan makna" (bukan pengganti mushaf).
//  - Pemetaan grade dalam ruang ini:
//      A = teks Al-Qur'an (mushaf — hafalan mutawatir umat)
//      B = hadis pada kitab induk (al-Bukhari, Muslim, dsb.)
//      C = karya ulama / literatur ilmiah
//      D = riwayat masyhur yang atribusi/sanadnya diperselisihkan
//  - Status jujur: DISPUTED ditampilkan sebagai DISPUTED — tidak pernah dirapikan diam-diam.
//  - Ruang ini TIDAK mengajarkan gaib; ia mengajarkan ADAB terhadap yang tidak diketahui.

export type LangText = { id: string; en: string }

export type RhGrade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
export type RhStatus = 'DOCUMENTED' | 'TRADITIONAL_ACCOUNT' | 'DISPUTED' | 'UNVERIFIED'

export type RhPillar = 'makna' | 'misteri' | 'ilmu' | 'peringatan' | 'dzikir'

export type RhItem = {
  globalId: string
  pillar: RhPillar
  title: LangText
  arabic?: string
  citation?: string
  meaning: LangText
  body: LangText
  grade: RhGrade
  status: RhStatus
  source: string
  note?: LangText
}

export const LEDE: LangText = {
  id: '\u201CRahasia\u201D Al-Qur\u2019an & Hadis bukan teka-teki untuk ditebak, dan bukan pula kunci-kunci gaib untuk diklaim. Ia adalah lapisan makna yang dijaga oleh ilmu, adab, dan syariat: apa yang memang disembunyikan Allah, apa yang dibukakan lewat ilmu para penjaganya, dan apa yang sering dijual palsu di pasar bebas — semuanya kami susun ber-grade, ber-sumber, dan jujur.',
  en: 'The \u201Csecrets\u201D of the Qur\u2019an & Hadith are not riddles to be guessed, nor hidden keys to be claimed. They are layers of meaning guarded by knowledge, adab and the shari\u2019a: what God has indeed concealed, what He opens through the sciences of the guardians, and what is too often sold falsely in the open market — all arranged here graded, sourced, and honest.',
}

export const GRADE_NOTE: LangText = {
  id: 'Takaran bukti ruang ini: A = teks Al-Qur\u2019an (mushaf — hafalan mutawatir umat); B = hadis pada kitab induk (al-Bukhari, Muslim, dll.); C = karya ulama & literatur ilmiah; D = riwayat masyhur yang sanad/atribusinya diperselisihkan. Bahkan hadis yang berisi peringatan pun kami beri grade — sebab itulah adabnya.',
  en: 'This room\u2019s measure: A = Qur\u2019anic text (the mushaf — the umma\u2019s mutawatir memorization); B = hadith in the primary collections (al-Bukhari, Muslim, etc.); C = scholarly works; D = famous reports whose chain/attribution is disputed. Even a hadith of warning gets graded here — that is its adab.',
}

export const ARABIC_NOTE: LangText = {
  id: 'Teks Arab tampil sebagai saksi langsung, diikuti terjemahan makna — dan terjemahan makna tidak pernah menggantikan mushaf. Di mana teks tidak dapat dipastikan satu kata pun, kami menuliskan riwayatnya dengan bahasa kami sendiri dan menandai takarannya.',
  en: 'The Arabic is shown as a direct witness, followed by a meaning-translation — and a meaning-translation never replaces the mushaf. Where not a single word can be confirmed, we write the report in our own words and mark its measure.',
}

// ---------------------------------------------------------------- PILLAR META

export const PILLARS: Record<RhPillar, { title: LangText; lede: LangText }> = {
  makna: {
    title: { id: 'Zahir & Batin — lapisan makna', en: 'Outer & Inner — the layers of meaning' },
    lede: {
      id: 'Al-Qur\u2019an sendiri berbicara tentang ayat yang muhkam dan yang mutasyabihat. Lapisan-lapisan makna adalah bagian dari adab membaca — bukan lisensi menafsir seenaknya.',
      en: 'The Qur\u2019an itself speaks of muhkam and mutashabih verses. Layers of meaning belong to the adab of reading — never a licence to interpret at will.',
    },
  },
  misteri: {
    title: { id: 'Misteri yang memang disembunyikan', en: 'Mysteries indeed concealed' },
    lede: {
      id: 'Sebagian rahasia disembunyikan secara sadar — demi perjuangan, kerendahan hati, dan ketergantungan kepada Allah. Menyebut nama mereka lebih jujur daripada mengarang jawabannya.',
      en: 'Some secrets are deliberately concealed — for striving, humility and dependence on God. Naming them is more honest than inventing answers.',
    },
  },
  ilmu: {
    title: { id: 'Ilmu penjaga makna', en: 'The sciences that guard meaning' },
    lede: {
      id: 'Rahasia yang dibukakan Allah dibukakan lewat disiplin: ulumul Qur\u2019an, musthalahul hadis, kaidah tafsir, maqasid. Inilah pengawas mutu setiap \u201Crahasia\u201D yang diklaim.',
      en: 'What God opens, He opens through discipline: \'ulum al-Qur\u2019an, mustalah al-hadith, the rules of tafsir, the maqasid. These are the quality control of every claimed \u201Csecret\u201D.',
    },
  },
  peringatan: {
    title: { id: 'Peringatan kejujuran', en: 'Warnings of honesty' },
    lede: {
      id: 'Di pasar bebas \u201Crahasia\u201D, hadis palsu, cerita pinjaman, dan batin tanpa syariat dijual paling ramai. Ruang ini pagar pengaman yang tidak boleh dilanggar.',
      en: 'In the open market of \u201Csecrets\u201D, fabricated hadiths, borrowed tales and inner-meanings-without-law sell loudest. This room is the safety fence that must not be crossed.',
    },
  },
  dzikir: {
    title: { id: 'Dzikr & sirr dalam TQN', en: 'Dhikr & sirr in TQN' },
    lede: {
      id: 'Ihsan — menyembah Allah seolah melihat-Nya — adalah \u201Crahasia ibadah\u201D yang diajarkan Rasulullah ﷺ sendiri. Di sinilah dzikr jahir & khafi TQN berpijak, dengan bahasanya yang jujur.',
      en: 'Ihsan — worshipping God as if you see Him — is the \u201Csecret of worship\u201D taught by the Prophet ﷺ himself. Here the voiced & silent dhikr of TQN takes root, in honest language.',
    },
  },
}

// ---------------------------------------------------------------- ITEMS

export const ITEMS: RhItem[] = [
  // ============================ 1. MAKNA ============================
  {
    globalId: '165-RH-000001', pillar: 'makna',
    title: { id: 'Muhkam & mutasyabihat — Al-Qur\u2019an menyebutnya sendiri', en: 'Muhkam & mutashabih — the Qur\u2019an names them itself' },
    arabic: 'هُوَ الَّذِي أَنزَلَ عَلَيْكَ الْكِتَابَ مِنْهُ آيَاتٌ مُّحْكَمَاتٌ هُنَّ أُمُّ الْكِتَابِ وَأُخَرُ مُتَشَابِهَاتٌ',
    citation: 'QS Ali \u2018Imran 3:7 (potongan)',
    meaning: {
      id: 'Dialah yang menurunkan Kitab kepadamu; di antaranya ada ayat-ayat muhkam — mereka induk Kitab — dan yang lain mutasyabihat.',
      en: 'It is He who sent down upon you the Book; in it are verses muhkam — they are the Mother of the Book — and others mutashabih.',
    },
    body: {
      id: 'Rahasia pertama diumumkan oleh Kitab itu sendiri: ada ayat pokok yang jelas dasarnya, dan ada ayat yang maknanya berlapis. Orang yang berlaku sombong terhadap lapisan kedua — dan orang yang menyerah total pada lapisan kedua sambil meninggalkan yang pertama — sama-sama diperingatkan oleh ayat yang sama.',
      en: 'The first secret is announced by the Book itself: some verses are clear in their foundation, others are layered in meaning. The arrogant who reject the second layer — and the one who abandons the first for the second — are warned by the very same verse.',
    },
    grade: 'A', status: 'DOCUMENTED',
    source: 'Al-Qur\u2019an, Ali \u2018Imran 3:7; tafsir bil-ma\u2019thur (ath-Thabari)',
  },
  {
    globalId: '165-RH-000002', pillar: 'makna',
    title: { id: 'Dalam tiap ayat: zahir & batin (riwayat sahabat)', en: 'In every verse: an outer & an inner (Companion report)' },
    meaning: {
      id: 'Riwayat masyhur dari sahabat: \u201CAl-Qur\u2019an diturunkan atas tujuh wajah (bacaan): dalam tiap ayat ada zahir dan batin; dan tiap batin punya batin lagi hingga tujuh batin.\u201D',
      en: 'A famous Companion report: \u201CThe Qur\u2019an was revealed upon seven aspects (of reading): in every verse there is an outer and an inner; and every inner has an inner, up to seven inners.\u201D',
    },
    body: {
      id: 'Riwayat ini hidup luas di kalangan ulama — dan justru karena itu harus diberi takaran jujur: sebagian ahli hadis menilainya mursal, sebagian memperkuat dari jalur lain, dan as-Suyuti membahasnya panjang lebar dalam al-Itqan. 165 menampilkannya sebagai riwayat masyhur (grade D) — bukan sebagai teks mushaf, bukan pula sebagai hadis shahih.',
      en: 'This report lives widely among scholars — and precisely for that reason it must be measured honestly: some hadith critics grade it mursal, others strengthen it via other chains, and as-Suyuti discusses it at length in al-Itqan. 165 shows it as a famous report (grade D) — neither mushaf text nor authenticated hadith.',
    },
    grade: 'D', status: 'TRADITIONAL_ACCOUNT',
    source: 'Dinisbatkan kepada Ibnu Mas\u2019ud & Ali (athar sahabat); dibahas as-Suyuti, Al-Itqan fi \u2018Ulum al-Qur\u2019an',
    note: {
      id: 'Catatan kejujuran: atribusi athar ini diperselisihkan para ahli — itulah sebabnya grade-nya D, dan itulah adab yang diajarkan ruang ini.',
      en: 'Honesty note: the attribution of this athar is disputed by the experts — hence grade D, and that is the very adab this room teaches.',
    },
  },
  {
    globalId: '165-RH-000003', pillar: 'makna',
    title: { id: 'Ilmu jawahir — mutiara-mutiara Al-Qur\u2019an', en: 'The science of jewels — the pearls of the Qur\u2019an' },
    meaning: {
      id: 'Imam al-Ghazali menata Al-Qur\u2019an sebagai himpunan mutiara: surat-surat sebagai mutiara, dan Al-Fatihah sebagai mutiaranya — dengan para \u201Cjawahir\u201D tertentu yang menjadi inti doa dan dzikir.',
      en: 'Imam al-Ghazali arranges the Qur\u2019an as a chest of pearls: the suras as pearls, and al-Fatiha as the pearl of pearls — with certain \u201Cjewels\u201D as the core of prayer and remembrance.',
    },
    body: {
      id: 'Jawahir al-Qur\u2019an adalah contoh paling terhormat tentang cara memandang \u201Crahasia\u201D: bukan pengganti pengajian, melainkan peta untuk kembali lebih dalam ke mushaf. Al-Ghazali sendiri memaklumi: tanpa pemahaman tafsir, peta mutiaranya tidak akan bermanfaat.',
      en: 'Jawahir al-Qur\u2019an is the most honourable example of beholding \u201Csecrets\u201D: not a replacement for study, but a map back into the mushaf, deeper. Al-Ghazali himself concedes: without tafsir\u2019s understanding, the pearl-map profits nothing.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Al-Ghazali, Jawahir al-Qur\u2019an wa Fawarih al-Qur\u2019an',
  },
  {
    globalId: '165-RH-000004', pillar: 'makna',
    title: { id: 'Batin tanpa syariat — pagar yang tidak boleh dibongkar', en: 'Inner without law — the fence that must not fall' },
    meaning: {
      id: 'Ungkapan yang masyhur di kalangan ulama: \u201CSyariat tanpa hakikat terbuka bagi kepalsuan; hakikat tanpa syariat terbuka bagi zandaqah.\u201D Atribusi kalimatnya diperselisihkan — pesannya disepakati.',
      en: 'A saying famous among scholars: \u201CThe law without its inner truth opens to falsehood; the inner truth without the law opens to heresy.\u201D Its attribution is disputed — its lesson is agreed.',
    },
    body: {
      id: 'Setiap generasi menghadapi godaan yang sama: mengklaim \u201Cmakna dalam\u201D yang membebaskan dari hukum lahir. Sejarah menyimpan cukup banyak gerakan yang hancur di jalan ini. 165 menuliskan pagar ini di awal ruang Rahasia — karena manakib Syekh Abdul Qadir sendiri (lihat ruang Manaqib) berdiri di atas syariat.',
      en: 'Every generation faces the same temptation: to claim an \u201Cinner meaning\u201D that releases one from the outward law. History keeps plenty of movements that broke on this road. 165 writes this fence at the front of the Secrets room — for the manaqib of Shaykh Abd al-Qadir himself (see the Manaqib room) stand upon the shari\u2019a.',
    },
    grade: 'D', status: 'TRADITIONAL_ACCOUNT',
    source: 'Aforisme masyhur literatur tasawuf (atribusi diperselisihkan); Master Blueprint §3.2 lesson',
  },

  // ============================ 2. MISTERI ============================
  {
    globalId: '165-RH-000005', pillar: 'misteri',
    title: { id: 'Malam Lailatul Qadar — pastinya disembunyikan', en: 'Laylat al-Qadr — its exact night concealed' },
    arabic: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ﴿١﴾ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ﴿٢﴾ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ﴿٣﴾',
    citation: 'QS Al-Qadr 97:1–3',
    meaning: {
      id: 'Sesungguhnya Kami menurunkannya pada malam kemuliaan. Dan tahukah kamu apakah malam kemuliaan itu? Malam kemuliaan itu lebih baik dari seribu bulan.',
      en: 'Indeed, We sent it down in the Night of Decree. And what will make you know what the Night of Decree is? The Night of Decree is better than a thousand months.',
    },
    body: {
      id: 'Malam yang nilainya melebihi seribu bulan ini sengaja disembunyikan pastinya — dan Rasulullah ﷺ mengajarkan mencarinya pada malam-malam ganjil sepuluh terakhir Ramadan (riwayat al-Bukhari & Muslim). Rahasia yang disembunyikan untuk membuat umat berjuang: inilah model \u201Crahasia\u201D yang sehat.',
      en: 'The night worth more than a thousand months has its exact date deliberately concealed — and the Prophet ﷺ taught seeking it on the odd nights of Ramadan\u2019s last ten (al-Bukhari & Muslim). A secret kept so the umma strives: this is the healthy model of a \u201Csecret\u201D.',
    },
    grade: 'A', status: 'DOCUMENTED',
    source: 'QS Al-Qadr 97:1–3 (A); hadis riwayat al-Bukhari & Muslim tentang sepuluh malam terakhir (B)',
  },
  {
    globalId: '165-RH-000006', pillar: 'misteri',
    title: { id: 'Hakikat ruh — \u201Cilmu hanya sedikit\u201D', en: 'The nature of the soul — \u201Cknowledge is but little\u201D' },
    arabic: 'وَيَسْأَلُونَكَ عَنِ الرُّوحِ ۖ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا',
    citation: 'QS Al-Isra 17:85',
    meaning: {
      id: 'Dan mereka bertanya kepadamu tentang ruh. Katakanlah: \u201CRuh itu termasuk urusan Tuhanku, dan kamu tidak diberi ilmu kecuali sedikit.\u201D',
      en: 'And they ask you about the soul. Say: \u201CThe soul is of the affair of my Lord, and you have been given of knowledge only little.\u201D',
    },
    body: {
      id: 'Pertanyaan tertua manusia dijawab Al-Qur\u2019an dengan batas yang jujur: ruh adalah urusan Rabb, ilmu yang diberikan sedikit. Setiap buku yang mengklaim \u201Cmembongkar\u201D hakikat ruh secara penuh berdiri di depan ayat ini — 165 menaruh ayat ini sebagai ukuran semua klaim ruhani.',
      en: 'The oldest of human questions is answered by the Qur\u2019an with an honest limit: the soul is of the Lord\u2019s affair, and of knowledge you are given little. Every book claiming to \u201Cunveil\u201D the soul\u2019s nature fully stands before this verse — 165 sets it as the measure of all spiritual claims.',
    },
    grade: 'A', status: 'DOCUMENTED',
    source: 'Al-Qur\u2019an, Al-Isra 17:85',
  },
  {
    globalId: '165-RH-000007', pillar: 'misteri',
    title: { id: 'Huruf muqatta\u2019at — 29 pembukaan yang maknanya ditahan', en: 'The muqatta\u2019at — 29 openings whose meaning is withheld' },
    citation: 'QS Al-Baqarah 2:1 dan 28 surah lainnya',
    meaning: {
      id: 'Alif. Lam. Mim. — dan pembukaan-pembukaan semisalnya di 28 surah lain: huruf-huruf terpisah yang dibaca, dipelihara, dan makna sepenuhnya tidak dibukakan.',
      en: 'Alif. Lam. Mim. — and such openings across 28 other suras: disjointed letters recited, preserved, and whose full meaning is not opened.',
    },
    body: {
      id: 'Mufasir mencatat puluhan pendapat — singkatan nama Allah, nama surah, isyarat kemenangan, dan pendapat teragung yang dinukil dari Ali & Ibnu Abbas: \u201CAllah paling tahu maksudnya.\u201D Umat menjaga bacaannya dengan mutawatir sambil merendahkan hati terhadap maknanya — kombinasi keimanan yang justru menandakan aslinya wahyu.',
      en: 'Exegetes record dozens of views — God\u2019s names abbreviated, sura names, hints of victory, and the gravest view transmitted from Ali & Ibn Abbas: \u201CAllah knows best its intent.\u201D The umma guards the reading by tawatur while humbling itself before the meaning — a combination of faith that itself attests revelation.',
    },
    grade: 'A', status: 'DOCUMENTED',
    source: 'Mushaf (29 surah); kompilasi pendapat mufasir dalam as-Suyuti, Al-Itqan (C)',
    note: {
      id: 'Hurufnya grade A (teks mushaf); penafsirannya grade C (karya ulama) — dua takaran, satu butir.',
      en: 'The letters are grade A (mushaf text); the interpretations are grade C (scholarly works) — two measures, one entry.',
    },
  },
  {
    globalId: '165-RH-000008', pillar: 'misteri',
    title: { id: 'Lima kunci gaib — hanya milik Allah', en: 'Five keys of the unseen — God\u2019s alone' },
    arabic: 'إِنَّ اللَّهَ عِندَهُ عِلْمُ السَّاعَةِ وَيُنَزِّلُ الْغَيْثَ وَيَعْلَمُ مَا فِي الْأَرْحَامِ ۖ وَمَا تَدْرِي نَفْسٌ مَّاذَا تَكْسِبُ غَدًا ۖ وَمَا تَدْرِي نَفْسٌ بِأَيِّ أَرْضٍ تَمُوتُ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ',
    citation: 'QS Luqman 31:34',
    meaning: {
      id: 'Sesungguhnya pada Allah saja ada ilmu hari Kiamat; Dialah yang menurunkan hujan, dan Dia mengetahui isi kandungan. Tidak seorang pun yang tahu apa yang akan dia perbuat besok, dan tidak seorang pun yang tahu di bumi mana dia akan mati. Sesungguhnya Allah Maha Mengetahui lagi Maha Menghimpun.',
      en: 'Indeed, God alone has knowledge of the Hour; He sends down the rain and knows what is in the wombs. No soul knows what it will earn tomorrow, and no soul knows in what land it will die. Indeed, God is Knowing and Aware.',
    },
    body: {
      id: 'Lima gaib ini dikunci oleh Kitab itu sendiri — dan hadis riwayat Muslim menegaskan siapa yang mendatangi \u201Cpembuka kunci\u201D palsu. Setiap janji membongkarnya — dari ramalan nasib hingga jual-beli \u201Cangka keberuntungan\u201D — terukur langsung oleh ayat ini.',
      en: 'Five unseen matters are locked by the Book itself — and the hadith in Muslim warns against those who claim to pick such locks. Every promise to unveil them — from fate-readings to sold \u201Clucky numbers\u201D — is measured directly by this verse.',
    },
    grade: 'A', status: 'DOCUMENTED',
    source: 'Al-Qur\u2019an, Luqman 31:34 (A); hadis larangan mendatangi peramal, riwayat Muslim (B)',
  },
  {
    globalId: '165-RH-000009', pillar: 'misteri',
    title: { id: 'Lauhul Mahfuzh — segala kejadian tercatat', en: 'The Preserved Tablet — all events inscribed' },
    arabic: 'مَا أَصَابَ مِن مُّصِيبَةٍ فِي الْأَرْضِ وَلَا فِي أَنفُسِكُمْ إِلَّا فِي كِتَابٍ مِّن قَبْلِ أَن نَّبْرَأَهَا ۚ إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ',
    citation: 'QS Al-Hadid 57:22',
    meaning: {
      id: 'Tidak ada satu pun bencana yang menimpa di bumi dan pada dirimu sendiri, melainkan telah tertulis dalam Kitab (Lauhul Mahfuzh) sebelum Kami mewujudkannya. Sesungguhnya yang demikian itu mudah bagi Allah.',
      en: 'No disaster strikes upon the earth or among yourselves but that it is in a Register before We bring it into being. Indeed, that is easy for God.',
    },
    body: {
      id: '\u201CRahasia\u201D tentang takdir dijawab bukan dengan penglihatan gaib, melainkan dengan catatan yang dijamin Kitabnya — dan sekaligus dengan amanah ikhtiar manusia. Ahli sunnah menata iman kepada qadha-qadar di antara dua jurang: jabariah dan qadariah — disiplin yang menjaga hati dari dua sesat sekaligus.',
      en: 'The \u201Csecret\u201D of destiny is answered not by visions but by a Register guaranteed by the Book — and, at once, by the trust of human striving. Ahl al-sunna order faith in qada & qadar between two pits: jabariyya and qadariyya — a discipline guarding the heart from both errors at once.',
    },
    grade: 'A', status: 'DOCUMENTED',
    source: 'Al-Qur\u2019an, Al-Hadid 57:22; kaidah aswaja tentang qadha-qadar (C)',
  },
  {
    globalId: '165-RH-000010', pillar: 'misteri',
    title: { id: 'Tujuh huruf — kaya bacaan yang dijaga', en: 'Seven letters — the guarded richness of recitation' },
    meaning: {
      id: 'Rasulullah ﷺ bersabda: \u201CAl-Qur\u2019an diturunkan atas tujuh huruf.\u201D',
      en: 'The Prophet ﷺ said: \u201CThe Qur\u2019an was revealed upon seven letters (modes).\u201D',
    },
    body: {
      id: 'Hadis ini pintu di balik kekayaan qiraat: ragam bacaan yang tersambung sampai Rasulullah ﷺ lewat sanad tawatir — bukan ragam yang dikarang belakangan. \u201CRahasia\u201D filologis ini dijaga umat lewat rantai hafalan: satu-satunya kitab dunia yang rahasianya dilindungi dengan cara begitu.',
      en: 'This hadith opens the door to the richness of qira\u2019at: variant readings connected to the Prophet ﷺ through mass-transmitted chains — not later inventions. This philological \u201Csecret\u201D is guarded by chains of memorization: the only book on earth whose secrets are protected that way.',
    },
    grade: 'B', status: 'DOCUMENTED',
    source: 'Hadis riwayat al-Bukhari (No. 2416), Muslim; disiplin qiraat mutawatir (C)',
  },

  // ============================ 3. ILMU ============================
  {
    globalId: '165-RH-000011', pillar: 'ilmu',
    title: { id: 'Ulumul Qur\u2019an — inventorij rahasia yang dibukakan', en: '\'ulum al-Qur\u2019an — the inventory of what is opened' },
    meaning: {
      id: 'Asbabun nuzul, nasikh-mansukh, muhkam-mutasyabih, i\u2019rab, gharib, munasabah — ulumul Qur\u2019an adalah daftar seluruh pintu yang dibukakan Allah untuk memahami Kitab-Nya.',
      en: 'Occasions of revelation, abrogating & abrogated, muhkam & mutashabih, grammar, rare words, inter-sura coherence — \'ulum al-Qur\u2019an is the inventory of every door God opened for understanding His Book.',
    },
    body: {
      id: 'Al-Itqan as-Suyuti merangkum delapan puluh jenis ilmu di sekitar mushaf. Pelajarannya jujur: sebelum mengklaim \u201Crahasia\u201D, seseorang wajib tahu pintu mana yang sudah dibukakan — dan oleh siapa pintu itu dijaga selama empat belas abad.',
      en: 'Al-Suyuti\u2019s al-Itqan gathers some eighty sciences around the mushaf. Its lesson is honest: before claiming a \u201Csecret\u201D, one must know which doors were opened — and by whom they have been guarded for fourteen centuries.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'As-Suyuti, Al-Itqan fi \u2018Ulum al-Qur\u2019an; az-Zarkasyi, Al-Burhan',
  },
  {
    globalId: '165-RH-000012', pillar: 'ilmu',
    title: { id: 'Sanad & matan — pengawas mutu hadis', en: 'Sanad & matan — the quality control of hadith' },
    meaning: {
      id: 'Musthalahul hadis menata setiap riwayat: sahih, hasan, dhaif, mauqu\u2019, maudhu\u2019 — lewat pemeriksaan sanad (rantai perawi) dan matan (teksnya).',
      en: 'Hadith methodology grades every report: sahih, hasan, da\u2019if, mawquf, mawdu\u2019 — by examining the chain (sanad) and the text (matan).',
    },
    body: {
      id: 'Islam menemukan \u201Cpeer review\u201D enam abad sebelum dunia akademik modern: perawi diperiksa nama, periwaannya, kejujurannya, dan daya ingatnya. Ruang Rahasia tanpa disiplin ini akan menjadi pasar bebas palsu — karena itu 165 menempelkan grade pada setiap hadis yang dikutip.',
      en: 'Islam invented peer review six centuries before modern academia: narrators checked by name, era, honesty and memory. A \u201Csecrets\u201D room without this discipline becomes a false-goods bazaar — which is why 165 attaches a grade to every hadith it quotes.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Musthalahul hadis (Ibnu Shalah, Muqaddimah; as-Suyuthi, Thadrib ar-Rawi)',
  },
  {
    globalId: '165-RH-000013', pillar: 'ilmu',
    title: { id: 'Tafsir bil-ma\u2019tsur & batas tafsir bil-ra\u2019yi', en: 'Tafsir by transmission & the limits of opinion' },
    meaning: {
      id: 'Tafsir bil-ma\u2019tsur bersandar pada Al-Qur\u2019an, sunnah, dan perkataan sahabat; tafsir bil-ra\u2019yi dibatasi kaidah bahasa & ushul — dan dilarang menjadi kendaraan selera.',
      en: 'Tafsir by transmission rests on the Qur\u2019an, the Sunna and the Companions\u2019 words; tafsir by opinion is bounded by language & usul — and forbidden to become a vehicle of taste.',
    },
    body: {
      id: 'Batas inilah yang membuat \u201Crahasia\u201D Al-Qur\u2019an tetap rahasia yang terjaga: pintunya dibuka dengan kaidah, bukan dengan keberanian kosong. Imam-Imam tafsir menegaskan: yang membenarkan bicara atas Kitab tanpa ilmu, ia memikul dosa atas bahunya sendiri.',
      en: 'This boundary keeps the Qur\u2019an\u2019s \u201Csecrets\u201D guarded secrets: their door opens by discipline, not by empty boldness. The masters of tafsir state it plainly: whoever speaks on the Book without knowledge carries the sin on his own back.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Ath-Thabari, Jami\u2019 al-Bayan; Ibnu Taimiyah, Muqaddimah fi Ushul at-Tafsir',
  },
  {
    globalId: '165-RH-000014', pillar: 'ilmu',
    title: { id: 'Maqasid — makna besar di balik hukum', en: 'Maqasid — the great meanings behind the rulings' },
    meaning: {
      id: 'Asy-Syathibi dan Ibnu \u2018Asyur mengajarkan: di balik hukum-hukum syariat tersimpan maqasid — menjaga agama, jiwa, akal, keturunan, dan harta.',
      en: 'Al-Shatibi and Ibn \u2018Ashur teach: behind the rulings of the shari\u2019a stand its aims — the protection of religion, life, intellect, lineage and property.',
    },
    body: {
      id: 'Maqasid adalah \u201Crahasia\u201D yang justru dianjurkan dicari — namun dengan disiplin: dari teks, bukan dari selera. Para penghimpunnya adalah ahli ushul berkaliber, bukan pencari sensasi; itulah bedanya ilmu dan klaim.',
      en: 'The maqasid are a \u201Csecret\u201D one is encouraged to seek — yet with discipline: from the texts, not from taste. Their systematizers were masters of usul, not sensation-seekers; that is the difference between knowledge and claims.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Asy-Syathibi, Al-Muwafaqat; Ibnu \u2018Asyur, Maqashid asy-Syari\u2019ah al-Islamiyyah',
  },
  {
    globalId: '165-RH-000015', pillar: 'ilmu',
    title: { id: 'Tadabbur — pintu yang wajib didorong', en: 'Tadabbur — the door you must push' },
    arabic: 'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',
    citation: 'QS Muhammad 47:24',
    meaning: {
      id: 'Maka tidakkah mereka mentadabburi Al-Qur\u2019an, ataukah ada gembok pada hati-hati mereka?',
      en: 'Then do they not reflect upon the Qur\u2019an, or are there locks upon their hearts?',
    },
    body: {
      id: 'Ayat ini adalah tawaran dan peringatan sekaligus: pintu makna memang ada — dan gemboknya bisa berada di hati pembaca, bukan di Kitab. \u201CRahasia\u201D yang paling terbuka kadang tertutup oleh sibuknya dunia; tadabbur adalah adab mengetuknya berulang kali.',
      en: 'This verse is an offer and a warning at once: the door of meaning exists — and the lock may sit in the reader\u2019s heart, not in the Book. The most open \u201Csecret\u201D can be shut by a busy life; tadabbur is the adab of knocking, again and again.',
    },
    grade: 'A', status: 'DOCUMENTED',
    source: 'Al-Qur\u2019an, Muhammad 47:24; didampingi QS Al-Hasyr 59:21 tentang beratnya makna',
  },

  // ============================ 4. PERINGATAN ============================
  {
    globalId: '165-RH-000016', pillar: 'peringatan',
    title: { id: 'Hadis palsu — larangan paling keras', en: 'Fabricated hadith — the sternest warning' },
    meaning: {
      id: 'Rasulullah ﷺ bersabda: \u201CBarangsiapa berdusta atasku dengan sengaja, maka hendaklah menempati tempat duduknya di neraka.\u201D',
      en: 'The Prophet ﷺ said: \u201CWhoever tells a lie against me intentionally, let him take his seat in the Fire.\u201D',
    },
    body: {
      id: 'Larangan paling keras dalam menyebar riwayat ditujukan kepada pemalsu hadis. Karena itu setiap \u201Crahasia keutamaan\u201D yang viral wajib diperiksa kitab induknya lebih dahulu — bukan diterima karena indah dan dibagikan karena takut.',
      en: 'The sternest warning about transmitting reports was aimed at fabricators. Hence every viral \u201Csecret virtue\u201D must be checked against the primary collections first — not accepted because it is beautiful, nor shared out of fear.',
    },
    grade: 'B', status: 'DOCUMENTED',
    source: 'Hadis riwayat Muslim (Muqaddimah); Ibn al-Jauzi, Al-Maudhu\u2019at (C)',
  },
  {
    globalId: '165-RH-000017', pillar: 'peringatan',
    title: { id: 'Hadis-hadis \u201Crahasia\u201D viral — alat cek praktis', en: 'Viral \u201Csecret\u201D hadiths — a practical check' },
    meaning: {
      id: 'Para penghimpun sejak awal mencatat riwayat-riwayat palsu dalam kitab khusus — Al-Maudhu\u2019at Ibn al-Jauzi, adz-Dza\u2019ifah al-\u2018Iraqi, hingga Silsilah adh-Dha\u2019ifah al-Albani — sebagai alat pemeriksa publik.',
      en: 'Collectors recorded fabricated reports in dedicated books from the start — Ibn al-Jawzi\u2019s al-Mawdu\u2019at, al-\u2018Iraqi\u2019s adh-Dhiya\u2019, to al-Albani\u2019s Silsilat ad-Da\u2019ifa — as public inspection tools.',
    },
    body: {
      id: 'Contoh polanya: \u201Ckeutamaan membaca surat X ber-pahala Y\u201D dengan angka mungil, \u201Cdoa rahasia pembuka rezeki\u201D tanpa sumber, \u201Chadis\u201D tentang segala hal yang tidak ditemukan di kitab induk. Alat cek 165: cari di kitab induk, cari grade sanadnya, tanya dewan — bukan ulas-ulas lalu bagikan.',
      en: 'Typical patterns: \u201Crecite sura X for Y rewards\u201D with tidy numbers, \u201Csecret prayer of provision\u201D with no source, \u201Chadiths\u201D about everything found nowhere in the primary collections. 165\u2019s check: look in the primary books, look for the chain\u2019s grade, ask the council — never skim-and-share.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'Ibn al-Jauzi, Al-Maudhu\u2019at; al-\u2018Iraqi, al-Mughni; al-Albani, Silsilah adh-Dha\u2019ifah',
  },
  {
    globalId: '165-RH-000018', pillar: 'peringatan',
    title: { id: 'Israiliyyat — cerita pinjaman di dalam tafsir', en: 'Isra\u2019iliyyat — borrowed tales inside tafsir' },
    meaning: {
      id: 'Kaidah para ulama: cerita Bani Israil yang masuk tafsir berdiri pada tiga takaran — yang bertentangan dengan Al-Qur\u2019an ditolak; yang bersanad shahih diterima; yang tidak keduanya, dibiarkan tanpa diklaim.',
      en: 'The scholars\u2019 rule for Isra\u2019iliyyat tales entering tafsir stands on three measures — what contradicts the Qur\u2019an is rejected; what has an authentic chain is accepted; what has neither is left unclaimed.',
    },
    body: {
      id: 'Banyak \u201Crahasia\u201D populer tentang kisah-kisah nabi berasal dari sumber pinjaman yang tidak pernah diperiksa. Disiplin israiliyyat adalah contoh tertua tentang cara umat ini menyaring informasi asing — dan 165 mengikuti kaidah yang sama dalam menyaring sumber apa pun.',
      en: 'Many popular \u201Csecrets\u201D about the prophets\u2019 stories come from borrowed, unchecked sources. The isra\u2019iliyyat discipline is the umma\u2019s oldest example of filtering foreign information — and 165 applies the same rule to every source.',
    },
    grade: 'C', status: 'DOCUMENTED',
    source: 'As-Suyuthi, Al-Itqan (jenis-jenis riwayat israiliyyat); Ibnu Katsir, muqaddimah tafsir',
  },
  {
    globalId: '165-RH-000019', pillar: 'peringatan',
    title: { id: '\u201CYa Ghaib!\u201D — hanya Allah yang mengetahuinya', en: '\u201CThe Unseen!\u201D — God\u2019s alone to know' },
    arabic: 'قُل لَّا يَعْلَمُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ الْغَيْبَ إِلَّا اللَّهُ',
    citation: 'QS An-Naml 27:65 (potongan)',
    meaning: {
      id: 'Katakanlah: \u201CTidak seorang pun di langit dan di bumi yang mengetahui yang gaib kecuali Allah.\u201D',
      en: 'Say: \u201CNone in the heavens and earth knows the unseen except God.\u201D',
    },
    body: {
      id: 'Ayat ini menutup seluruh pasar ramal, pengukur nasib, dan \u201Cpembuka rahasia\u201D berbayar. TQN yang dijaga 165 tidak pernah menjual gaib; mursyid yang jujur mengajarkan adab, bukan menjual kunci. Di mana ada klaim sebaliknya — di sanalah pagar ruang ini paling tinggi.',
      en: 'This verse shuts the whole market of soothsayers, fate-readers and paid \u201Csecret-openers\u201D. The TQN guarded by 165 never sells the unseen; an honest guide teaches adab, not keys. Wherever the opposite is claimed — there this room\u2019s fence is highest.',
    },
    grade: 'A', status: 'DOCUMENTED',
    source: 'Al-Qur\u2019an, An-Naml 27:65; hadis larangan peramal, riwayat Muslim (B)',
  },
  {
    globalId: '165-RH-000020', pillar: 'peringatan',
    title: { id: 'Hadis peringatan itu sendiri pun ber-grade', en: 'Even the warning hadith gets graded' },
    meaning: {
      id: 'Hadis yang masyhur: \u201CBarangsiapa berbicara tentang Al-Qur\u2019an dengan pendapatnya, hendaklah menyiapkan tempat duduknya di neraka.\u201D Para muhaddits menilai sanadnya lemah; banyak yang menilainya tidak shahih dari Rasulullah ﷺ.',
      en: 'The famous report: \u201CWhoever speaks of the Qur\u2019an by his own opinion, let him prepare his seat in the Fire.\u201D The hadith critics grade its chain weak; many grade it not authentic from the Prophet ﷺ.',
    },
    body: {
      id: 'Ironi yang mengajarkan: peringatan melawan tafsir sembarangan sendiri harus diberi grade sebelum dijadikan alat. 165 menampilkannya apa adanya — masyhur dalam literatur, lemah dalam sanad — supaya pengunjung melihat disiplin bekerja pada dirinya sendiri, bukan hanya pada orang lain.',
      en: 'An instructive irony: the warning against loose interpretation must itself be graded before it is wielded. 165 shows it as it is — famous in the literature, weak in chain — so the visitor sees the discipline applied to itself, not only to others.',
    },
    grade: 'D', status: 'DISPUTED',
    source: 'Masyhur; dinilai dhaif/maudhu\u2019 oleh banyak muhaddits (lih. adz-Dzahabi, Tadzkirat al-Huffazh muqaddimah)',
    note: {
      id: 'Status DISPUTED ditampilkan sebagai DISPUTED — tidak pernah \u201Cdirapikan\u201D diam-diam. Inilah doktrin 165 bekerja pada ruangnya sendiri.',
      en: 'A DISPUTED status is displayed as disputed — never silently \u201Ccleaned up\u201D. This is 165\u2019s doctrine applied to its own rooms.',
    },
  },

  // ============================ 5. DZIKIR ============================
  {
    globalId: '165-RH-000021', pillar: 'dzikir',
    title: { id: 'Ihsan — \u201Crahasia ibadah\u201D yang diajarkan Nabi ﷺ', en: 'Ihsan — the \u201Csecret of worship\u201D taught by the Prophet ﷺ' },
    arabic: 'أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ',
    citation: 'Hadits Jibril — riwayat Muslim (potongan)',
    meaning: {
      id: '\u201CHendaklah engkau menyembah Allah seolah-olah engkau melihat-Nya; jika engkau tidak melihat-Nya, sesungguhnya Dia melihatmu.\u201D',
      en: '\u201CTo worship God as though you see Him; for if you do not see Him, He surely sees you.\u201D',
    },
    body: {
      id: 'Ketika Jibril bertanya tentang ihsan, Rasulullah ﷺ menjawab dengan kalimat ini — dan kalimat inilah \u201Crahasia ibadah\u201D paling otentik: bukan ilmu tersembunyi, melainkan hadirnya hati yang diberi mata. Dari pintu inilah seluruh dzikr TQN berangkat.',
      en: 'When Jibril asked about ihsan, the Prophet ﷺ answered with these words — and they are the most authentic \u201Csecret of worship\u201D: not hidden knowledge, but a heart made present and given eyes. From this door all TQN dhikr departs.',
    },
    grade: 'B', status: 'DOCUMENTED',
    source: 'Hadis Jibril, riwayat Muslim (Kitab al-Iman); disepakati maknanya para imam sunnah',
  },
  {
    globalId: '165-RH-000022', pillar: 'dzikir',
    title: { id: 'Hadis qudsi — \u201CAku menurut sangkaan hamba-Ku\u201D', en: 'A sacred hadith — \u201CI am as My servant thinks of Me\u201D' },
    arabic: 'أَنَا عِنْدَ ظَنِّ عَبْدِي بِي',
    citation: 'Hadis qudsi — riwayat al-Bukhari & Muslim (potongan)',
    meaning: {
      id: '\u201CAku berada menurut sangkaan hamba-Ku kepada-Ku.\u201D',
      en: '\u201CI am as My servant thinks of Me.\u201D',
    },
    body: {
      id: 'Hadis qudsi adalah genre tersendiri: makna dari Allah, lafaz dari Nabi ﷺ. Kalimat ini membuka \u201Crahasia\u201D paling personal — sangkaan baik kepada Allah adalah bagian dari ibadah itu sendiri, dan ia mengubah cara seseorang membaca setiap ayat.',
      en: 'A sacred hadith is its own genre: meaning from God, wording from the Prophet ﷺ. This line opens the most personal of \u201Csecrets\u201D — good opinion of God is itself part of worship, and it changes how one reads every verse.',
    },
    grade: 'B', status: 'DOCUMENTED',
    source: 'Hadis qudsi, riwayat al-Bukhari & Muslim (Kitab ad-Dhikr)',
  },
  {
    globalId: '165-RH-000023', pillar: 'dzikir',
    title: { id: 'Dzikir — perjanjian dua arah', en: 'Dhikr — a two-way covenant' },
    arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ',
    citation: 'QS Al-Baqarah 2:152',
    meaning: {
      id: 'Karena itu, ingatlah kepada-Ku, Aku pun akan ingat kepadamu; bersyukurlah kepada-Ku dan janganlah kamu mengingkari(-Ku).',
      en: 'So remember Me; I will remember you. And be grateful to Me and do not deny Me.',
    },
    body: {
      id: 'Sebelum berbicara tentang \u201Ckeutamaan dzikir\u201D, Kitab menempatkan dzikir sebagai perjanjian dua arah. Di TQN, jahir (Qodiriyah) maupun khafi (Naqsyabandiyah) sama-sama tunduk pada ayat ini: dzikir bukan jasa kepada Allah, melainkan anugerah dikenang oleh-Nya.',
      en: 'Before any talk of dhikr\u2019s \u201Cvirtues\u201D, the Book sets dhikr as a two-way covenant. In TQN, voiced (Qadiriyya) and silent (Naqshbandiyya) alike stand under this verse: dhikr is no favour to God — it is the grace of being remembered by Him.',
    },
    grade: 'A', status: 'DOCUMENTED',
    source: 'Al-Qur\u2019an, Al-Baqarah 2:152; Blueprint §3.3 tentang dhikr hening Naqshbandiyya (B)',
  },
  {
    globalId: '165-RH-000024', pillar: 'dzikir',
    title: { id: 'Lathaif — peta hati dari terminologi tasawuf', en: 'The lata\u2019if — a map of the heart from Sufi terminology' },
    meaning: {
      id: 'Qalb, ruh, sirr, khafi, akhfa — lathaif adalah peta pusat-pusat kehalusan jiwa yang dibicarakan literatur tasawuf untuk menuntun dzikr.',
      en: 'Qalb, ruh, sirr, khafi, akhfa — the lata\u2019if are a map of the heart\u2019s subtle centres discussed in Sufi literature to guide dhikr.',
    },
    body: {
      id: 'Kejujuran pertama majelis TQN: lathaif adalah terminologi tasawuf — bukan teks hadis, bukan ayat. Ia peta pengalaman ruhani yang diwariskan para mursyid (al-Qusyairi, ar-Risalah, dsb.) dan dipakai sebagai penyusun adab dzikr. 165 menampilkan peta itu dengan labelnya — tidak pernah dijual sebagai doktrin mushaf.',
      en: 'The first honesty of the TQN gathering: the lata\u2019if are Sufi terminology — neither hadith nor verse. They are a map of spiritual experience handed down by the guides (al-Qushayri\u2019s Risala and beyond) used to order the adab of dhikr. 165 shows the map with its label — never sold as mushaf doctrine.',
    },
    grade: 'C', status: 'TRADITIONAL_ACCOUNT',
    source: 'Al-Qusyairi, Ar-Risalah; literatur lathaif tarekat (tradisi mursyid)',
    note: {
      id: 'Catatan jujur: detail peta lathaif beragam antar tarekat — variasi ditampilkan, tidak dirapikan diam-diam.',
      en: 'Honesty note: lata\u2019if maps vary across tariqas — variations are displayed, never silently flattened.',
    },
  },
  {
    globalId: '165-RH-000025', pillar: 'dzikir',
    title: { id: 'Jahir & khafi bertemu di syariat', en: 'Voiced & silent meet in the shari\u2019a' },
    meaning: {
      id: 'Qodiriyah mewarisi dzikr jahir; Naqsyabandiyah mewarisi dzikr khafi — dan keduanya bertemu di satu titik yang sama: tidak ada dzikir yang diakui di luar syariat dan sunnah.',
      en: 'The Qadiriyya inherits voiced dhikr; the Naqshbandiyya inherits silent dhikr — and both meet at one point: no dhikr is acknowledged outside the shari\u2019a and the Sunna.',
    },
    body: {
      id: 'Master Blueprint §3.3 (Level B) mencatat pentingnya disiplin syariat dan dzikr hening dalam tradisi awal Naqshbandiyya; manakib Syekh Abdul Qadir menegaskan hal yang sama untuk Qodiriyah. \u201CRahasia\u201D terbesar TQN ternyata paling terbuka: kejujuran amal, kesabaran dzikir, dan syariat sebagai rumahnya.',
      en: 'Master Blueprint §3.3 (Level B) records the discipline of shari\u2019a and silent dhikr in the early Naqshbandiyya; the manaqib of Shaykh Abd al-Qadir affirm the same for the Qadiriyya. TQN\u2019s greatest \u201Csecret\u201D turns out the most open: honesty of deed, patience of dhikr, and the shari\u2019a as their home.',
    },
    grade: 'B', status: 'DOCUMENTED',
    source: 'Master Blueprint §3.2–3.3 (165-SRC-000003, Level B); manakib (lihat ruang Manaqib)',
  },
]

export const CLOSING_NOTE: LangText = {
  id: 'Penutup yang jujur: ruang ini tidak menjual rahasia — ia mengajarkan adab terhadap rahasia. Yang disembunyikan Allah tetap disembunyikan; yang dibukakan melalui ilmu dikembalikan kepada ilmunya; yang dipalsukan ditelanjangi takarannya. Punya teks asli, naskah, atau riwayat majelis tentang tema-tema ini? Kirim lewat ruang Kontribusi — catatan ini bertambah, bukan berganti.',
  en: 'An honest close: this room sells no secrets — it teaches the adab of secrets. What God concealed stays concealed; what He opened through knowledge is returned to its knowledge; what was fabricated is unmasked by its measure. Holding original texts, manuscripts, or gathering records on these themes? Submit via the Contribution room — this record grows, never gets replaced.',
}
