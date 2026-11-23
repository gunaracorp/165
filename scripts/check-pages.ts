// Verify all expected slugs exist in the page data files.
import { ENTRIES as G1 } from '../src/data/pages/glossary-1'
import { ENTRIES as G2 } from '../src/data/pages/glossary-2'
import { ENTRIES as G3 } from '../src/data/pages/glossary-3'
import { ENTRIES as G4 } from '../src/data/pages/glossary-4'
import { ENTRIES as L1 } from '../src/data/pages/library-1'
import { ENTRIES as L2 } from '../src/data/pages/library-2'
import { ENTRIES as A } from '../src/data/pages/atlas'
import { ENTRIES as I1 } from '../src/data/pages/institution-1'
import { ENTRIES as I2 } from '../src/data/pages/institution-2'
import { ENTRIES as C } from '../src/data/pages/archive'
import { ENTRIES as Q } from '../src/data/pages/ask'

const all = [
  ...G1, ...G2, ...G3, ...G4, ...L1, ...L2, ...A, ...I1, ...I2, ...C, ...Q,
]

const EXPECTED_GLOSSARY = [
  'abah-ganda','abdulkarim-banten','aceh-tarekat','adab-murid','adzhan','amanah-tarekat','arsip-audio','arsip-foto','ashghal','awrad','baju-tarekat','banjarmasin-tarekat','banten-tarekat','barzanji','bilangan-zikir','bukhara-tarekat','buku-sejarah-tarekat','cabang-ponpes','dark-mode','dhawq','dhuha','digitalisasi-manuskrip','dzikir','dzikir-ahad','dzikir-berjamaah','dzikir-hu','dzikir-jahar','dzikir-khafi','dzikir-lailahaillallah','fana','faqr','firasa','gandul','ghauts','graf-pengetahuan','grebeg','hak-cipta-arsip','hakikat','hal','haram-zikir','haramain','haul','haul-surialaya','haula','herat-tarekat','hilm','himmah','hizb','hulul','idulfitri-tarekat','ihsan','ikhlas','ilham','imam-khataman','istidraj','istighfar','jalur-cukir','jalur-karawang','jalur-surialaya','jalwah','jamasan','jurnal-tasawuf','karamah','khalifah-khusus','khalifah-tarekat','khalwat','khalwat-dar-anjuman','khalwatiyyah','khanaqah','khatam-quran-massal','khatm','khatm-al-khwajagan','khatm-qadiriyyah','khauf','khirqah','kitab-jawi','kitab-tasawuf','kitab-wirid','koleksi-digital','koperasi-jamaah','kutipan-ilmiah','lagu-wiridan','lahan-mu-tabarah','lathifah-akhfa','lathifah-ikhfa','lathifah-khafi','lathifah-lam-yaza','lathifah-qalb','lathifah-sirr','mahabbah','majelis-syura','majelis-talim','makkah-rimayah','manaqib','mandu-tarekat','manuskrip-tarekat','maqam-mursyid','maqam-syekh','marifah','mashyakhah','mata-blok','matan-ijazah','maulid','media-sosial-tarekat','minangkabau-tarekat','muhassabah','mujaddid','mujahadah','muraqabah-maut','murojaah','mursala','mursyid','musyawarah-khalifah','nafs-kamilah','nafs-lawwamah','nafs-muthmainnah','napas-dzikir','naqsabandiyah','naqsabandiyah-khalidiyah','naqsabandiyah-mujaddidiyah','nazar-bar-qadam','padang-tarekat','panji-tarekat','pegon','pendidikan-formal-tarekat','pendidikan-tinggi-tarekat','pendiri-165','pendopo-dzikir','pengajian-ramadhan','pengasuh','pengganti-mursyid','pengkhataman','persistent-url','pesan-mursyid','podcast-tarekat','provenance','puasa-daud','pulung','pwa','qasidah-burda','qiyamul-lail','rabithah','raja','ratib','repository','riyadhah','sabar','sadaqah','safar-dar-watan','samarqand-tarekat','sambutan-talqin','sanad','santri','sedekah-jumat','sedekah-subuh','shathariyyah','silsilah','silsilah-mundur','simtud-durar','structured-data','sulaymaniyah-tarekat','suluk','sumpur','surat-kabar-tarekat','surat-keterangan','surungan-blok','syariat','syauq','syukr','tabarruk','tabungan-jamaah','tahlil','taklim-dzikir','talbiyah-tarekat','talim-masjid','talqin-massal','tarekat','tarekat-mutabarah','tariqah-garut','tasikmalaya-tarekat','tawakkul','tawassul','tawbah','tirakat','tubuh-tarekat-terencana','tujuh-tingkat-nafs','tunjukan-bukti','usaha-pesantren','visi-165','volunteer-165','wahdat-al-wujud','wakil-tarekat','waktu-wirid','waqaf-tarekat','wara','wazifah','wilayah','wirid','wiridan','wuquf-adadi','wuquf-zamani','yad-dasht','yayasan-tarekat','zuhud',
]

const EXPECTED_LIBRARY = [
  '165-master-blueprint','aajurumiyah','abdul-karim-al-bantani-reference','abwab-al-jannat','aceh-tarekat-ms-corpus-leiden','ad-durarul-faridah','ad-duwal','adab-al-mursyid','adab-berziarah','adabul-muluk','adabul-murid-wal-mursyid','adh-dhurrun-nafis','adz-dzakirah','al-azhar-hamka','al-fathul-mubin-fiqih','al-hisnul-hasin','al-ibar','al-jawahir-al-khams','al-kibrit-al-ahmar','al-luma','al-muhalla','al-munawwir','al-munqidh-min-al-dalal-ghazali','al-wirdul-latif','alghunya-lithalibi','anjuman-talibin','ar-risalah-alqusyairiyyah','asnawi-caringin-academic-excerpt','asrar-al-adyan','asyi-atul-mabahij','at-taaruf','bahishti-zewar','bruinessen-tarekat-naqsyabandiyah-1992','burhan-al-yaqin','dalail-al-khairat-jazuli','dalailul-khairat','durratul-faraid','eponym-founders-encyclopedic-corpus','fathal-arifin','fathul-muin','fathul-qarib','fathul-qarib-tarikh','fathul-rabbani','fihi-ma-fih','fusus-alhikam','futuh-al-ghaib-jilani','gulistan-sadi','hadiqatul-haqiqah','hikmat-yasawi','hujjatullah-albaligha','ianat-al-talibin-syata','ibrahim-bin-adham-biografi','ihya-ulumuddin','ihya-ulumuddin-gandul','ithaf-udzakii','kadzim-asnawi-news-profile','khairot-ulum','khataman-dan-amalan-tqn','khatib-sambas-scholarly-corpus','kitab-al-isfar','kitab-al-wird','lamaat-jami','ma-al-bidayah-wan-nihayah','maktubat-saifuddin','maktubat-sirhindi','maqamat-hariri','marah-labid','masnawi-rumi','mathnawi-manawi-rumi','maula-nabi','maulid-barzanji','maulid-dibai','mawlid-sharaf-al-anam-ms-tradition','miftahul-jannah','mishkat-al-anwar','munjiyat','muntakhab-ahadis-tarekat','muntakhab-al-ahadis',
]

const EXPECTED_ATLAS = [
  'aleppo','balkh','bandung','banjarmasin','banten','banten-serang','banyumas','basra','brunei','bukhara','bursa','cikangkung','damaskus','delhi','demak','direktori','fez','ghazni','ghijduvan','haram-baitullah','hebron','jayapura','jombang','kabul','kaduparasi','kano','karawang','kashgar','kuala-lumpur','labuan','madinah','makkah','malang','manado','medina-nabawi','merv','minangkabau-sumpur','multan','naisabur','new-york','palembang','pamijahan','panjalu','patani','pontianak','probolinggo','purworejo','roterdam','samarqand','sambas','sarajevo','singaparna','singapura','skopje','sulaymaniyah','taif','tasikmalaya','timbuktu','tus','uch-sharif',
]

const EXPECTED_INSTITUTION = [
  'dewan-pakar-165','jam-iyyah-ahlith-thariqah-inst','jamaah-tqn-australia','jamaah-tqn-brunei','jamaah-tqn-eropa','jamaah-tqn-hongkong','jamaah-tqn-jepang','jamaah-tqn-johor','jamaah-tqn-kuala-lumpur','jamaah-tqn-singapura','jamaah-tqn-taiwan','jamaah-tqn-uae','khanaqah-bahauddin-naqshband','khanaqah-damaskus-jabal-qasyun','khanaqah-ghijduvan','khanaqah-kakrala-india','khanaqah-lefke-cyprus','khanqah-golra-sharif','klinik-kesehatan-surialaya','madrasah-cukir','madrasah-surialaya','majelis-dzikir-bandung','majelis-dzikir-banjarmasin','majelis-dzikir-makassar','majelis-dzikir-medan','majelis-dzikir-papua','majelis-dzikir-singapura','majelis-dzikir-surabaya-cukir','maqam-ghawtsul-azham','masjid-ismail-aga-istanbul','musyawarah-mursyid-tqn','naqsabandiyah-afrika','naqsabandiyah-india-umum','naqsabandiyah-turki-umum','perpustakaan-165','perrine-manuskrip-nusantara','pondok-pesantren-suryalaya','ponpes-al-falah-jambi','ponpes-al-fithrah-tasik','ponpes-al-hidayah-batam','ponpes-al-hidayat-jakarta','ponpes-al-ikhlas-sukabumi','ponpes-al-jamiatul-wahidah','ponpes-al-manar-cianjur','ponpes-alkhidmah-pontianak','ponpes-arrahar-bengkulu','ponpes-bahrul-ulum','ponpes-cintaratu','ponpes-cipasung','ponpes-cisayong','ponpes-darul-hikam-medan','ponpes-darul-ulum-makassar','ponpes-darussalam-banjarmasin','ponpes-empangsari','ponpes-hidayatul-mubtadiin-denpasar','ponpes-lirboyo','ponpes-madinatul-ulum-bandarlampung','ponpes-miftahul-huda-kediri','ponpes-miftahul-jannah-malang','ponpes-miftahul-ulum-ambon','ponpes-nurul-huda-palembang','ponpes-nurul-iman-bogor','ponpes-nurul-ulum-jombang','ponpes-nurussalam-surabaya','ponpes-paculgowang','ponpes-rajeg-wetan-surabaya','ponpes-riyadlul-jannah-yogya','ponpes-sukamanah','ponpes-sukanagara','ponpes-surialaya','ponpes-sutajaya-karawang','ponpes-tahtul-ulum-kraksaan','qadiriyyah-maroko-umum','ribath-mukharram-baghdad','sekretariat-surialaya','tekke-murad-molla-istanbul','tqn-timur-tengah-umum','zawiyah-jazuliyyah-marrakech',
]

const EXPECTED_ARCHIVE = [
  'koleksi-arkeologi-tekke','koleksi-audio-wiridan','koleksi-digital-1970','koleksi-doa-harian','koleksi-dokumen-khataman','koleksi-foto-surialaya','koleksi-interview-oral','koleksi-khalifah-mancanegara','koleksi-kitab-tarekat-nusantara','koleksi-kliping-pers','koleksi-majalah-jamaah','koleksi-manuskrip-suluk-jawa','koleksi-manuskrip-wirid','koleksi-musik-wiridan','koleksi-surat-keputusan','koleksi-surat-menyurat','koleksi-surialaya-keuangan','koleksi-video-haul','koleksi-wasiat-mursyid','ordonansi-tarekat-1928','sahifat-al-madinah-piagam','timbuktu-rescue-documentation-2012-2013',
]

const EXPECTED_ASK = [
  'faq-165-api','faq-165-bahasa','faq-165-kontribusi','faq-165-orang-bisa-ikut','faq-165-pwa','faq-165-yayasan','faq-adab-tarekat','faq-apa-itu-baiat','faq-apa-itu-fana','faq-apa-itu-haul-suryalaya','faq-apa-itu-ijazah','faq-apa-itu-khalwat-dar-anjuman','faq-apa-itu-khatam','faq-apa-itu-khataman','faq-apa-itu-maqam-hal','faq-apa-itu-mata-blok','faq-apa-itu-mujahadah','faq-apa-itu-provenance','faq-apa-itu-rabithah','faq-apa-itu-silsilah-mundur','faq-apa-itu-tabarruk','faq-apa-itu-wirid','faq-baca-quran-dulu','faq-beda-dzikir-jahar-khafi','faq-berpindah-mursyid','faq-donasi-arsip','faq-halal-talqin-online','faq-haul-apa','faq-ijazah-musyalafah','faq-jangan-klaim-wali','faq-kaidah-11-naqsabandiyah','faq-lathifah-tujuh','faq-mengapa-165-ada','faq-mengapa-dzikir-bilangan','faq-murid-baru-wirid','faq-nafs-tingkat','faq-salat-tertinggi','faq-syarat-masuk-tarekat','faq-syubhat-tarekat','faq-tarekat-konsumsi-riak','faq-tqn-beda-qadiri-naqsabandi','faq-wahdatul-wujud-heretis','faq-wirid-terasa-berat','faq-ziarah-syirik',
]

const groups: [string, string[], string][] = [
  ['glossary', EXPECTED_GLOSSARY, 'glossary'],
  ['library', EXPECTED_LIBRARY, 'library'],
  ['atlas', EXPECTED_ATLAS, 'atlas'],
  ['institution', EXPECTED_INSTITUTION, 'institution'],
  ['archive', EXPECTED_ARCHIVE, 'archive'],
  ['ask', EXPECTED_ASK, 'ask'],
]

// slug uniqueness across all
const seen = new Set<string>()
let dup = 0
for (const e of all) {
  if (seen.has(e.slug + '|' + e.kind)) dup++
  seen.add(e.slug + '|' + e.kind)
}

console.log('TOTAL entries:', all.length, '| duplicate slug+kind:', dup)

for (const [name, expected, kind] of groups) {
  const kindEntries = all.filter((e) => e.kind === kind)
  const have = new Set(kindEntries.map((e) => e.slug))
  const missing = expected.filter((s) => !have.has(s))
  const extra = kindEntries.filter((e) => !expected.includes(e.slug)).map((e) => e.slug)
  console.log(`[${name}] expected=${expected.length} present=${kindEntries.length} missing=${missing.length} extra=${extra.length}`)
  if (missing.length) console.log('  MISSING:', missing.join(', '))
  if (extra.length) console.log('  EXTRA:', extra.join(', '))
}

// check no placeholder junk
const junk = all.filter((e) => /TODO|XXX|undefined|NaN|\u3010/.test(JSON.stringify(e)))
console.log('junk fields:', junk.length)
