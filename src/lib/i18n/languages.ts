// 165 — Registry bahasa dunia + peta negara
// Cakupan: seluruh bahasa berkode ISO 639-1 yang hidup + bahasa regional utama
// (termasuk bahasa-bahasa Nusantara) + bahasa liturgis/scholarly terpilih.
// Tier:
//   curated — kamus ditulis tangan penuh (id, en, ms, jv, su, ar)
//   ai      — kamus 131 string diterjemahkan mesin AI (scripts/gen-i18n.ts)
//   core    — dapat dipilih; antarmuka mengikuti Bahasa Indonesia (bawaan)
// Status (turunan tier — dipakai registri bahasa):
//   native   = curated (dikusasi penuh)
//   assisted = ai (dibantu mesin, ditampilkan jujur)
//   prep     = core (dapat dipilih; UI mengikuti Bahasa Indonesia)
export type LangTier = 'curated' | 'ai' | 'core'
export type LangStatus = 'native' | 'assisted' | 'prep'

export type LangRegion =
  | 'Nusantara & Melayu'
  | 'Asia Timur'
  | 'Asia Selatan'
  | 'Timur Tengah & Asia Tengah'
  | 'Eropa'
  | 'Afrika'
  | 'Amerika'
  | 'Pasifik & Lainnya'

/** alias registri — UI Peta Bahasa memakai istilah Region */
export type Region = LangRegion
export const REGIONS: readonly LangRegion[] = [
  'Nusantara & Melayu',
  'Asia Timur',
  'Asia Selatan',
  'Timur Tengah & Asia Tengah',
  'Eropa',
  'Afrika',
  'Amerika',
  'Pasifik & Lainnya',
]

export interface LanguageDef {
  code: string
  /** nama bahasa dalam bahasanya sendiri */
  native: string
  /** nama dalam Bahasa Indonesia */
  name: string
  /** nama dalam Bahasa Inggris (registri internasional) */
  en: string
  dir: 'ltr' | 'rtl'
  region: LangRegion
  tier: LangTier
  /** turunan tier — status terjemahan antarmuka yang jujur */
  status: LangStatus
}

const STATUS_BY_TIER: Record<LangTier, LangStatus> = {
  curated: 'native',
  ai: 'assisted',
  core: 'prep',
}

const L = (
  code: string, native: string, name: string, en: string,
  region: LangRegion, tier: LangTier, dir: 'ltr' | 'rtl' = 'ltr',
): LanguageDef => ({ code, native, name, en, region, tier, dir, status: STATUS_BY_TIER[tier] })

export const REGION_ORDER: LangRegion[] = REGIONS as unknown as LangRegion[]

export const LANGUAGES: readonly LanguageDef[] = [
  // ---------- Nusantara & Melayu ----------
  L('id', 'Bahasa Indonesia', 'Bahasa Indonesia', 'Indonesian', 'Nusantara & Melayu', 'curated'),
  L('jv', 'Basa Jawa', 'Bahasa Jawa', 'Javanese', 'Nusantara & Melayu', 'curated'),
  L('su', 'Basa Sunda', 'Bahasa Sunda', 'Sundanese', 'Nusantara & Melayu', 'curated'),
  L('ms', 'Bahasa Melayu', 'Bahasa Melayu', 'Malay', 'Nusantara & Melayu', 'curated'),
  L('ban', 'Basa Bali', 'Bahasa Bali', 'Balinese', 'Nusantara & Melayu', 'core'),
  L('bug', 'ᨅᨔ ᨕᨘᨁᨗ', 'Bahasa Bugis', 'Buginese', 'Nusantara & Melayu', 'core'),
  L('ace', 'Acèh', 'Bahasa Aceh', 'Acehnese', 'Nusantara & Melayu', 'core'),
  L('mad', 'Madhurâ', 'Bahasa Madura', 'Madurese', 'Nusantara & Melayu', 'core'),
  L('min', 'Minangkabau', 'Bahasa Minangkabau', 'Minangkabau', 'Nusantara & Melayu', 'core'),
  L('sas', 'Basa Sasak', 'Bahasa Sasak', 'Sasak', 'Nusantara & Melayu', 'core'),
  L('mak', 'Basa Mangkasara', 'Bahasa Makassar', 'Makassarese', 'Nusantara & Melayu', 'core'),
  L('bbc', 'Hata Batak Toba', 'Bahasa Batak Toba', 'Batak Toba', 'Nusantara & Melayu', 'core'),
  L('iba', 'Jaku Iban', 'Bahasa Iban', 'Iban', 'Nusantara & Melayu', 'core'),
  L('tet', 'Tetun', 'Bahasa Tetum', 'Tetum', 'Nusantara & Melayu', 'core'),

  // ---------- Asia Timur ----------
  L('zh', '中文', 'Bahasa Mandarin', 'Chinese (Mandarin)', 'Asia Timur', 'ai'),
  L('ja', '日本語', 'Bahasa Jepang', 'Japanese', 'Asia Timur', 'ai'),
  L('ko', '한국어', 'Bahasa Korea', 'Korean', 'Asia Timur', 'ai'),
  L('mn', 'Монгол', 'Bahasa Mongolia', 'Mongolian', 'Asia Timur', 'ai'),
  L('yue', '粵語', 'Bahasa Kanton', 'Cantonese', 'Asia Timur', 'core'),
  L('ii', 'ꆈꌠꁱꂷ', 'Bahasa Yi', 'Nuosu (Yi)', 'Asia Timur', 'core'),
  L('bo', 'བོད་སྐད།', 'Bahasa Tibet', 'Tibetan', 'Asia Timur', 'core'),
  L('dz', 'རྫོང་ཁ', 'Bahasa Dzongkha', 'Dzongkha', 'Asia Timur', 'core'),
  L('za', 'Vahcuengh', 'Bahasa Zhuang', 'Zhuang', 'Asia Timur', 'core'),

  // ---------- Asia Selatan ----------
  L('hi', 'हिन्दी', 'Bahasa Hindi', 'Hindi', 'Asia Selatan', 'ai'),
  L('ur', 'اردو', 'Bahasa Urdu', 'Urdu', 'Asia Selatan', 'ai', 'rtl'),
  L('bn', 'বাংলা', 'Bahasa Bengali', 'Bengali', 'Asia Selatan', 'ai'),
  L('pa', 'ਪੰਜਾਬੀ', 'Bahasa Punjabi', 'Punjabi', 'Asia Selatan', 'ai'),
  L('gu', 'ગુજરાતી', 'Bahasa Gujarati', 'Gujarati', 'Asia Selatan', 'ai'),
  L('mr', 'मराठी', 'Bahasa Marathi', 'Marathi', 'Asia Selatan', 'ai'),
  L('ta', 'தமிழ்', 'Bahasa Tamil', 'Tamil', 'Asia Selatan', 'ai'),
  L('te', 'తెలుగు', 'Bahasa Telugu', 'Telugu', 'Asia Selatan', 'ai'),
  L('kn', 'ಕನ್ನಡ', 'Bahasa Kannada', 'Kannada', 'Asia Selatan', 'ai'),
  L('ml', 'മലയാളം', 'Bahasa Malayalam', 'Malayalam', 'Asia Selatan', 'ai'),
  L('si', 'සිංහල', 'Bahasa Sinhala', 'Sinhala', 'Asia Selatan', 'ai'),
  L('ne', 'नेपाली', 'Bahasa Nepal', 'Nepali', 'Asia Selatan', 'ai'),
  L('sd', 'سنڌي', 'Bahasa Sindhi', 'Sindhi', 'Asia Selatan', 'ai', 'rtl'),
  L('sa', 'संस्कृतम्', 'Bahasa Sanskerta', 'Sanskrit', 'Asia Selatan', 'core'),
  L('pi', 'पालि', 'Bahasa Pali', 'Pali', 'Asia Selatan', 'core'),
  L('as', 'অসমীয়া', 'Bahasa Assam', 'Assamese', 'Asia Selatan', 'core'),
  L('or', 'ଓଡ଼ିଆ', 'Bahasa Odia', 'Odia', 'Asia Selatan', 'core'),
  L('mai', 'मैथिली', 'Bahasa Maithili', 'Maithili', 'Asia Selatan', 'core'),
  L('ks', 'कॉशुर', 'Bahasa Kashmir', 'Kashmiri', 'Asia Selatan', 'core'),
  L('dv', 'ދިވެހި', 'Bahasa Divehi', 'Divehi (Dhivehi)', 'Asia Selatan', 'core', 'rtl'),

  // ---------- Timur Tengah & Asia Tengah ----------
  L('ar', 'العربية', 'Bahasa Arab', 'Arabic', 'Timur Tengah & Asia Tengah', 'curated', 'rtl'),
  L('fa', 'فارسی', 'Bahasa Persia', 'Persian (Farsi)', 'Timur Tengah & Asia Tengah', 'ai', 'rtl'),
  L('he', 'עברית', 'Bahasa Ibrani', 'Hebrew', 'Timur Tengah & Asia Tengah', 'ai', 'rtl'),
  L('tr', 'Türkçe', 'Bahasa Turki', 'Turkish', 'Timur Tengah & Asia Tengah', 'ai'),
  L('ku', 'Kurdî', 'Bahasa Kurdi', 'Kurdish', 'Timur Tengah & Asia Tengah', 'ai'),
  L('ckb', 'کوردیی ناوەندی', 'Bahasa Kurdi Sorani', 'Central Kurdish (Sorani)', 'Timur Tengah & Asia Tengah', 'core', 'rtl'),
  L('ps', 'پښتو', 'Bahasa Pashto', 'Pashto', 'Timur Tengah & Asia Tengah', 'ai', 'rtl'),
  L('ug', 'ئۇيغۇرچە', 'Bahasa Uighur', 'Uyghur', 'Timur Tengah & Asia Tengah', 'ai', 'rtl'),
  L('az', 'Azərbaycan', 'Bahasa Azerbaijan', 'Azerbaijani', 'Timur Tengah & Asia Tengah', 'ai'),
  L('kk', 'Қазақша', 'Bahasa Kazakh', 'Kazakh', 'Timur Tengah & Asia Tengah', 'ai'),
  L('ky', 'Кыргызча', 'Bahasa Kirgiz', 'Kyrgyz', 'Timur Tengah & Asia Tengah', 'ai'),
  L('uz', 'Oʻzbekcha', 'Bahasa Uzbek', 'Uzbek', 'Timur Tengah & Asia Tengah', 'ai'),
  L('tk', 'Türkmençe', 'Bahasa Turkmen', 'Turkmen', 'Timur Tengah & Asia Tengah', 'ai'),
  L('tg', 'Тоҷикӣ', 'Bahasa Tajik', 'Tajik', 'Timur Tengah & Asia Tengah', 'ai'),
  L('tt', 'Татарча', 'Bahasa Tatar', 'Tatar', 'Timur Tengah & Asia Tengah', 'core'),
  L('hy', 'Հայերեն', 'Bahasa Armenia', 'Armenian', 'Timur Tengah & Asia Tengah', 'ai'),
  L('ka', 'ქართული', 'Bahasa Georgia', 'Georgian', 'Timur Tengah & Asia Tengah', 'ai'),
  L('ab', 'Аҧсуа', 'Bahasa Abkhaz', 'Abkhaz', 'Timur Tengah & Asia Tengah', 'core'),
  L('os', 'Ирон', 'Bahasa Ossetia', 'Ossetian', 'Timur Tengah & Asia Tengah', 'core'),
  L('ba', 'Башҡортса', 'Bahasa Bashkir', 'Bashkir', 'Timur Tengah & Asia Tengah', 'core'),
  L('cv', 'Чӑвашла', 'Bahasa Chuvash', 'Chuvash', 'Timur Tengah & Asia Tengah', 'core'),
  L('ce', 'Нохчийн мотт', 'Bahasa Chechen', 'Chechen', 'Timur Tengah & Asia Tengah', 'core'),
  L('av', 'авар мацӏ', 'Bahasa Avar', 'Avar', 'Timur Tengah & Asia Tengah', 'core'),

  // ---------- Eropa ----------
  L('en', 'English', 'Bahasa Inggris', 'English', 'Eropa', 'curated'),
  L('fr', 'Français', 'Bahasa Prancis', 'French', 'Eropa', 'ai'),
  L('es', 'Español', 'Bahasa Spanyol', 'Spanish', 'Eropa', 'ai'),
  L('de', 'Deutsch', 'Bahasa Jerman', 'German', 'Eropa', 'ai'),
  L('pt', 'Português', 'Bahasa Portugis', 'Portuguese', 'Eropa', 'ai'),
  L('it', 'Italiano', 'Bahasa Italia', 'Italian', 'Eropa', 'ai'),
  L('nl', 'Nederlands', 'Bahasa Belanda', 'Dutch', 'Eropa', 'ai'),
  L('el', 'Ελληνικά', 'Bahasa Yunani', 'Greek', 'Eropa', 'ai'),
  L('ru', 'Русский', 'Bahasa Rusia', 'Russian', 'Eropa', 'ai'),
  L('uk', 'Українська', 'Bahasa Ukraina', 'Ukrainian', 'Eropa', 'ai'),
  L('pl', 'Polski', 'Bahasa Polandia', 'Polish', 'Eropa', 'ai'),
  L('ro', 'Română', 'Bahasa Rumania', 'Romanian', 'Eropa', 'ai'),
  L('hu', 'Magyar', 'Bahasa Hungaria', 'Hungarian', 'Eropa', 'ai'),
  L('cs', 'Čeština', 'Bahasa Ceko', 'Czech', 'Eropa', 'ai'),
  L('sk', 'Slovenčina', 'Bahasa Slovak', 'Slovak', 'Eropa', 'ai'),
  L('bg', 'Български', 'Bahasa Bulgaria', 'Bulgarian', 'Eropa', 'ai'),
  L('sr', 'Српски', 'Bahasa Serbia', 'Serbian', 'Eropa', 'ai'),
  L('hr', 'Hrvatski', 'Bahasa Kroasia', 'Croatian', 'Eropa', 'ai'),
  L('bs', 'Bosanski', 'Bahasa Bosnia', 'Bosnian', 'Eropa', 'ai'),
  L('sl', 'Slovenščina', 'Bahasa Slovenia', 'Slovenian', 'Eropa', 'ai'),
  L('mk', 'Македонски', 'Bahasa Makedonia', 'Macedonian', 'Eropa', 'ai'),
  L('sq', 'Shqip', 'Bahasa Albania', 'Albanian', 'Eropa', 'ai'),
  L('lt', 'Lietuvių', 'Bahasa Lituania', 'Lithuanian', 'Eropa', 'ai'),
  L('lv', 'Latviešu', 'Bahasa Latvia', 'Latvian', 'Eropa', 'ai'),
  L('et', 'Eesti', 'Bahasa Estonia', 'Estonian', 'Eropa', 'ai'),
  L('fi', 'Suomi', 'Bahasa Finlandia', 'Finnish', 'Eropa', 'ai'),
  L('sv', 'Svenska', 'Bahasa Swedia', 'Swedish', 'Eropa', 'ai'),
  L('no', 'Norsk', 'Bahasa Norwegia', 'Norwegian', 'Eropa', 'ai'),
  L('da', 'Dansk', 'Bahasa Denmark', 'Danish', 'Eropa', 'ai'),
  L('is', 'Íslenska', 'Bahasa Islandia', 'Icelandic', 'Eropa', 'ai'),
  L('ga', 'Gaeilge', 'Bahasa Irlandia', 'Irish', 'Eropa', 'ai'),
  L('cy', 'Cymraeg', 'Bahasa Wales', 'Welsh', 'Eropa', 'ai'),
  L('mt', 'Malti', 'Bahasa Malta', 'Maltese', 'Eropa', 'ai'),
  L('ca', 'Català', 'Bahasa Katalan', 'Catalan', 'Eropa', 'ai'),
  L('gl', 'Galego', 'Bahasa Galisia', 'Galician', 'Eropa', 'ai'),
  L('eu', 'Euskara', 'Bahasa Basque', 'Basque', 'Eropa', 'ai'),
  L('eo', 'Esperanto', 'Bahasa Esperanto', 'Esperanto', 'Eropa', 'ai'),
  L('be', 'Беларуская', 'Bahasa Belarus', 'Belarusian', 'Eropa', 'core'),
  L('gd', 'Gàidhlig', 'Bahasa Gaelik Skotlandia', 'Scottish Gaelic', 'Eropa', 'core'),
  L('br', 'Brezhoneg', 'Bahasa Breton', 'Breton', 'Eropa', 'core'),
  L('fy', 'Frysk', 'Bahasa Frisia', 'Frisian', 'Eropa', 'core'),
  L('lb', 'Lëtzebuergesch', 'Bahasa Luksemburg', 'Luxembourgish', 'Eropa', 'core'),
  L('fo', 'Føroyskt', 'Bahasa Faroe', 'Faroese', 'Eropa', 'core'),
  L('kl', 'Kalaallisut', 'Bahasa Greenland', 'Greenlandic', 'Eropa', 'core'),
  L('se', 'Davvisámegiella', 'Bahasa Sami Utara', 'Northern Sami', 'Eropa', 'core'),
  L('rm', 'Rumantsch', 'Bahasa Romansh', 'Romansh', 'Eropa', 'core'),
  L('oc', 'Occitan', 'Bahasa Oksitan', 'Occitan', 'Eropa', 'core'),
  L('co', 'Corsu', 'Bahasa Korsika', 'Corsican', 'Eropa', 'core'),
  L('sc', 'Sardu', 'Bahasa Sardinia', 'Sardinian', 'Eropa', 'core'),
  L('ast', 'Asturianu', 'Bahasa Asturia', 'Asturian', 'Eropa', 'core'),
  L('an', 'Aragonés', 'Bahasa Aragon', 'Aragonese', 'Eropa', 'core'),
  L('li', 'Lèmburgs', 'Bahasa Limburg', 'Limburgish', 'Eropa', 'core'),
  L('gv', 'Gaelg', 'Bahasa Manx', 'Manx', 'Eropa', 'core'),
  L('kw', 'Kernewek', 'Bahasa Kornish', 'Cornish', 'Eropa', 'core'),
  L('la', 'Latina', 'Bahasa Latin', 'Latin', 'Eropa', 'core'),
  L('yi', 'ייִדיש', 'Bahasa Yiddish', 'Yiddish', 'Eropa', 'core', 'rtl'),

  // ---------- Afrika ----------
  L('sw', 'Kiswahili', 'Bahasa Swahili', 'Swahili', 'Afrika', 'ai'),
  L('am', 'አማርኛ', 'Bahasa Amharik', 'Amharic', 'Afrika', 'ai'),
  L('ha', 'Hausa', 'Bahasa Hausa', 'Hausa', 'Afrika', 'ai'),
  L('yo', 'Yorùbá', 'Bahasa Yoruba', 'Yoruba', 'Afrika', 'ai'),
  L('ig', 'Igbo', 'Bahasa Igbo', 'Igbo', 'Afrika', 'ai'),
  L('zu', 'isiZulu', 'Bahasa Zulu', 'Zulu', 'Afrika', 'ai'),
  L('xh', 'isiXhosa', 'Bahasa Xhosa', 'Xhosa', 'Afrika', 'ai'),
  L('af', 'Afrikaans', 'Bahasa Afrikaans', 'Afrikaans', 'Afrika', 'ai'),
  L('sn', 'chiShona', 'Bahasa Shona', 'Shona', 'Afrika', 'ai'),
  L('so', 'Soomaali', 'Bahasa Somali', 'Somali', 'Afrika', 'ai'),
  L('mg', 'Malagasy', 'Bahasa Malagasi', 'Malagasy', 'Afrika', 'ai'),
  L('ff', 'Fulfulde', 'Bahasa Fula', 'Fula', 'Afrika', 'ai'),
  L('rw', 'Kinyarwanda', 'Bahasa Kinyarwanda', 'Kinyarwanda', 'Afrika', 'ai'),
  L('ti', 'ትግርኛ', 'Bahasa Tigrinya', 'Tigrinya', 'Afrika', 'core'),
  L('om', 'Afaan Oromoo', 'Bahasa Oromo', 'Oromo', 'Afrika', 'core'),
  L('aa', 'Afaraf', 'Bahasa Afar', 'Afar', 'Afrika', 'core'),
  L('st', 'Sesotho', 'Bahasa Sesotho', 'Sesotho', 'Afrika', 'core'),
  L('tn', 'Setswana', 'Bahasa Setswana', 'Setswana', 'Afrika', 'core'),
  L('ts', 'Xitsonga', 'Bahasa Tsonga', 'Tsonga', 'Afrika', 'core'),
  L('ss', 'SiSwati', 'Bahasa Swati', 'Swati', 'Afrika', 'core'),
  L('ve', 'Tshivenḓa', 'Bahasa Venda', 'Venda', 'Afrika', 'core'),
  L('nd', 'isiNdebele', 'Bahasa Ndebele', 'Northern Ndebele', 'Afrika', 'core'),
  L('ny', 'Chichewa', 'Bahasa Chichewa', 'Chichewa', 'Afrika', 'core'),
  L('lg', 'Luganda', 'Bahasa Luganda', 'Luganda', 'Afrika', 'core'),
  L('ln', 'Lingála', 'Bahasa Lingala', 'Lingala', 'Afrika', 'core'),
  L('kg', 'Kikongo', 'Bahasa Kongo', 'Kongo', 'Afrika', 'core'),
  L('ki', 'Gĩkũyũ', 'Bahasa Kikuyu', 'Kikuyu', 'Afrika', 'core'),
  L('kj', 'Kuanyama', 'Bahasa Kwanyama', 'Kwanyama', 'Afrika', 'core'),
  L('ng', 'Oshiwambo', 'Bahasa Ndonga', 'Ndonga', 'Afrika', 'core'),
  L('hz', 'Otjiherero', 'Bahasa Herero', 'Herero', 'Afrika', 'core'),
  L('wo', 'Wolof', 'Bahasa Wolof', 'Wolof', 'Afrika', 'core'),
  L('bm', 'Bamanankan', 'Bahasa Bambara', 'Bambara', 'Afrika', 'core'),
  L('ee', 'Eʋegbe', 'Bahasa Ewe', 'Ewe', 'Afrika', 'core'),
  L('tw', 'Twi', 'Bahasa Twi', 'Twi', 'Afrika', 'core'),
  L('ak', 'Akan', 'Bahasa Akan', 'Akan', 'Afrika', 'core'),
  L('kab', 'Kabyle', 'Bahasa Kabyle', 'Kabyle', 'Afrika', 'core'),

  // ---------- Amerika ----------
  L('qu', 'Runa Simi', 'Bahasa Quechua', 'Quechua', 'Amerika', 'core'),
  L('ay', 'Aymar aru', 'Bahasa Aymara', 'Aymara', 'Amerika', 'core'),
  L('gn', "Avañe'ẽ", 'Bahasa Guarani', 'Guarani', 'Amerika', 'core'),
  L('nv', 'Diné bizaad', 'Bahasa Navajo', 'Navajo', 'Amerika', 'core'),
  L('cr', 'ᓀᐦᐃᔭᐍᐏᐣ', 'Bahasa Cree', 'Cree', 'Amerika', 'core'),
  L('iu', 'ᐃᓄᒃᑎᑐᑦ', 'Bahasa Inuktitut', 'Inuktitut', 'Amerika', 'core'),
  L('ik', 'Iñupiaq', 'Bahasa Inupiaq', 'Inupiaq', 'Amerika', 'core'),
  L('ht', 'Kreyòl ayisyen', 'Bahasa Kreol Haiti', 'Haitian Creole', 'Amerika', 'ai'),

  // ---------- Pasifik & Lainnya ----------
  L('mi', 'Te Reo Māori', 'Bahasa Maori', 'Māori', 'Pasifik & Lainnya', 'core'),
  L('sm', "Gagana faʻa Sāmoa", 'Bahasa Samoa', 'Samoan', 'Pasifik & Lainnya', 'core'),
  L('to', 'Lea faka-Tonga', 'Bahasa Tonga', 'Tongan', 'Pasifik & Lainnya', 'core'),
  L('fj', 'Na Vosa Vakaviti', 'Bahasa Fiji', 'Fijian', 'Pasifik & Lainnya', 'core'),
  L('haw', 'ʻŌlelo Hawaiʻi', 'Bahasa Hawaii', 'Hawaiian', 'Pasifik & Lainnya', 'core'),
  L('ty', 'Reo Tahiti', 'Bahasa Tahiti', 'Tahitian', 'Pasifik & Lainnya', 'core'),
  L('bi', 'Bislama', 'Bahasa Bislama', 'Bislama', 'Pasifik & Lainnya', 'core'),
  L('ch', 'Chamoru', 'Bahasa Chamorro', 'Chamorro', 'Pasifik & Lainnya', 'core'),
  L('mh', 'Kajin M̧ajeļ', 'Bahasa Marshall', 'Marshallese', 'Pasifik & Lainnya', 'core'),
  L('na', 'Dorerin Naoero', 'Bahasa Nauru', 'Nauruan', 'Pasifik & Lainnya', 'core'),
  L('ia', 'Interlingua', 'Interlingua', 'Interlingua', 'Pasifik & Lainnya', 'core'),
  L('sah', 'Саха тыла', 'Bahasa Yakut', 'Yakut (Sakha)', 'Pasifik & Lainnya', 'core'),
]

/** peta cepat kode → def */
export const LANG_BY_CODE: Readonly<Record<string, LanguageDef>> = Object.fromEntries(
  LANGUAGES.map((l) => [l.code, l]),
)

export const DEFAULT_LANG = 'id'

export function getLanguage(code: string): LanguageDef | undefined {
  return LANG_BY_CODE[code]
}

export function isSupported(code: string): boolean {
  return code in LANG_BY_CODE
}

export function dirOf(code: string): 'ltr' | 'rtl' {
  return getLanguage(code)?.dir ?? 'ltr'
}

export function tierCounts() {
  const curated = LANGUAGES.filter((l) => l.tier === 'curated').length
  const ai = LANGUAGES.filter((l) => l.tier === 'ai').length
  const core = LANGUAGES.filter((l) => l.tier === 'core').length
  return { curated, ai, core, total: LANGUAGES.length }
}

export function langCounts() {
  const native = LANGUAGES.filter((l) => l.status === 'native').length
  const assisted = LANGUAGES.filter((l) => l.status === 'assisted').length
  const prep = LANGUAGES.filter((l) => l.status === 'prep').length
  return { native, assisted, prep, total: LANGUAGES.length }
}

// ------------------------------------------------------------
// PETA NEGARA — country → languages (registri Peta Bahasa)
// Setiap negara memetakan bahasa resmi/b dominan yang ADA di
// registri 165. Bahasa minoritas tanpa kode registri tidak
// didaftarkan — kejujuran cakupan di atas kepenuhan.
// ------------------------------------------------------------

export interface CountryDef {
  code: string      // ISO 3166-1 alpha-2
  name: string      // nama negara (Indonesia)
  region: Region
  langs: string[]   // kode bahasa registri, urut dominan
}

const C = (code: string, name: string, region: Region, langs: string[]): CountryDef => ({
  code, name, region, langs,
})

export const COUNTRIES: readonly CountryDef[] = [
  // ---------- Nusantara & Melayu ----------
  C('id', 'Indonesia', 'Nusantara & Melayu', ['id', 'jv', 'su', 'ban', 'bug', 'ace', 'mad', 'min', 'sas', 'mak', 'bbc']),
  C('my', 'Malaysia', 'Nusantara & Melayu', ['ms', 'en']),
  C('sg', 'Singapura', 'Nusantara & Melayu', ['en', 'ms', 'zh', 'ta']),
  C('bn', 'Brunei Darussalam', 'Nusantara & Melayu', ['ms']),
  C('th', 'Thailand (Selatan)', 'Nusantara & Melayu', ['ms', 'th']),
  C('tl', 'Timor-Leste', 'Nusantara & Melayu', ['tet', 'pt']),

  // ---------- Asia Timur ----------
  C('cn', 'Tiongkok', 'Asia Timur', ['zh', 'yue', 'ug', 'bo', 'ii', 'za']),
  C('tw', 'Taiwan', 'Asia Timur', ['zh', 'yue']),
  C('hk', 'Hong Kong', 'Asia Timur', ['yue', 'zh', 'en']),
  C('mo', 'Makau', 'Asia Timur', ['yue', 'zh', 'pt']),
  C('jp', 'Jepang', 'Asia Timur', ['ja']),
  C('kp', 'Korea Utara', 'Asia Timur', ['ko']),
  C('kr', 'Korea Selatan', 'Asia Timur', ['ko']),
  C('mn', 'Mongolia', 'Asia Timur', ['mn']),

  // ---------- Asia Selatan ----------
  C('in', 'India', 'Asia Selatan', ['hi', 'en', 'bn', 'ta', 'te', 'mr', 'gu', 'kn', 'ml', 'pa', 'ur', 'sa', 'as', 'or', 'mai', 'ks', 'sd', 'ne']),
  C('pk', 'Pakistan', 'Asia Selatan', ['ur', 'en', 'pa', 'sd', 'ps']),
  C('bd', 'Bangladesh', 'Asia Selatan', ['bn']),
  C('lk', 'Sri Lanka', 'Asia Selatan', ['si', 'ta']),
  C('np', 'Nepal', 'Asia Selatan', ['ne']),
  C('bt', 'Bhutan', 'Asia Selatan', ['dz']),
  C('mv', 'Maladewa', 'Asia Selatan', ['dv']),
  C('af', 'Afghanistan', 'Asia Selatan', ['ps', 'fa', 'uz']),

  // ---------- Timur Tengah & Asia Tengah ----------
  C('sa', 'Arab Saudi', 'Timur Tengah & Asia Tengah', ['ar']),
  C('ae', 'Uni Emirat Arab', 'Timur Tengah & Asia Tengah', ['ar', 'en']),
  C('qa', 'Qatar', 'Timur Tengah & Asia Tengah', ['ar']),
  C('kw', 'Kuwait', 'Timur Tengah & Asia Tengah', ['ar']),
  C('bh', 'Bahrain', 'Timur Tengah & Asia Tengah', ['ar']),
  C('om', 'Oman', 'Timur Tengah & Asia Tengah', ['ar']),
  C('ye', 'Yaman', 'Timur Tengah & Asia Tengah', ['ar']),
  C('jo', 'Yordania', 'Timur Tengah & Asia Tengah', ['ar']),
  C('lb', 'Lebanon', 'Timur Tengah & Asia Tengah', ['ar']),
  C('sy', 'Suriah', 'Timur Tengah & Asia Tengah', ['ar']),
  C('iq', 'Irak', 'Timur Tengah & Asia Tengah', ['ar', 'ku']),
  C('ir', 'Iran', 'Timur Tengah & Asia Tengah', ['fa', 'az', 'ku']),
  C('il', 'Israel', 'Timur Tengah & Asia Tengah', ['he', 'ar']),
  C('ps', 'Palestina', 'Timur Tengah & Asia Tengah', ['ar']),
  C('tr', 'Turki', 'Timur Tengah & Asia Tengah', ['tr', 'ku']),
  C('cy', 'Siprus', 'Timur Tengah & Asia Tengah', ['el', 'tr']),
  C('az', 'Azerbaijan', 'Timur Tengah & Asia Tengah', ['az']),
  C('am', 'Armenia', 'Timur Tengah & Asia Tengah', ['hy']),
  C('ge', 'Georgia', 'Timur Tengah & Asia Tengah', ['ka']),
  C('kz', 'Kazakhstan', 'Timur Tengah & Asia Tengah', ['kk', 'ru']),
  C('uz', 'Uzbekistan', 'Timur Tengah & Asia Tengah', ['uz', 'ru']),
  C('tm', 'Turkmenistan', 'Timur Tengah & Asia Tengah', ['tk']),
  C('kg', 'Kirgizstan', 'Timur Tengah & Asia Tengah', ['ky', 'ru']),
  C('tj', 'Tajikistan', 'Timur Tengah & Asia Tengah', ['tg']),

  // ---------- Eropa ----------
  C('gb', 'Inggris Raya', 'Eropa', ['en', 'cy', 'gd', 'ga']),
  C('ie', 'Irlandia', 'Eropa', ['ga', 'en']),
  C('is', 'Islandia', 'Eropa', ['is']),
  C('no', 'Norwegia', 'Eropa', ['no', 'se']),
  C('se', 'Swedia', 'Eropa', ['sv']),
  C('fi', 'Finlandia', 'Eropa', ['fi', 'sv']),
  C('dk', 'Denmark', 'Eropa', ['da']),
  C('fo', 'Kep. Faroe', 'Eropa', ['fo']),
  C('gl', 'Greenland (Denmark)', 'Eropa', ['kl']),
  C('nl', 'Belanda', 'Eropa', ['nl', 'fy', 'li']),
  C('be', 'Belgia', 'Eropa', ['nl', 'fr', 'de']),
  C('lu', 'Luksemburg', 'Eropa', ['lb', 'fr', 'de']),
  C('de', 'Jerman', 'Eropa', ['de']),
  C('at', 'Austria', 'Eropa', ['de']),
  C('ch', 'Swiss', 'Eropa', ['de', 'fr', 'it', 'rm']),
  C('li', 'Liechtenstein', 'Eropa', ['de']),
  C('fr', 'Prancis', 'Eropa', ['fr', 'br', 'co', 'oc']),
  C('mc', 'Monako', 'Eropa', ['fr']),
  C('es', 'Spanyol', 'Eropa', ['es', 'ca', 'gl', 'eu', 'oc', 'ast']),
  C('pt', 'Portugal', 'Eropa', ['pt']),
  C('ad', 'Andorra', 'Eropa', ['ca']),
  C('it', 'Italia', 'Eropa', ['it', 'sc', 'co']),
  C('mt', 'Malta', 'Eropa', ['mt', 'en']),
  C('sm', 'San Marino', 'Eropa', ['it']),
  C('va', 'Vatikan', 'Eropa', ['it', 'la']),
  C('gr', 'Yunani', 'Eropa', ['el']),
  C('ro', 'Rumania', 'Eropa', ['ro']),
  C('md', 'Moldova', 'Eropa', ['ro', 'ru']),
  C('bg', 'Bulgaria', 'Eropa', ['bg']),
  C('hu', 'Hungaria', 'Eropa', ['hu']),
  C('sk', 'Slovakia', 'Eropa', ['sk']),
  C('cz', 'Ceko', 'Eropa', ['cs']),
  C('pl', 'Polandia', 'Eropa', ['pl']),
  C('ua', 'Ukraina', 'Eropa', ['uk', 'ru']),
  C('by', 'Belarus', 'Eropa', ['be', 'ru']),
  C('ru', 'Rusia', 'Eropa', ['ru', 'tt', 'ba', 'cv', 'ce', 'av', 'os', 'sah']),
  C('ee', 'Estonia', 'Eropa', ['et']),
  C('lv', 'Latvia', 'Eropa', ['lv']),
  C('lt', 'Lituania', 'Eropa', ['lt']),
  C('si', 'Slovenia', 'Eropa', ['sl']),
  C('hr', 'Kroasia', 'Eropa', ['hr']),
  C('ba', 'Bosnia & Herzegovina', 'Eropa', ['bs', 'hr', 'sr']),
  C('rs', 'Serbia', 'Eropa', ['sr', 'hu']),
  C('me', 'Montenegro', 'Eropa', ['sr']),
  C('mk', 'Makedonia Utara', 'Eropa', ['mk']),
  C('al', 'Albania', 'Eropa', ['sq']),
  C('xk', 'Kosovo', 'Eropa', ['sq', 'sr']),

  // ---------- Afrika ----------
  C('eg', 'Mesir', 'Afrika', ['ar']),
  C('ly', 'Libya', 'Afrika', ['ar']),
  C('tn', 'Tunisia', 'Afrika', ['ar']),
  C('dz', 'Aljazair', 'Afrika', ['ar', 'kab']),
  C('ma', 'Maroko', 'Afrika', ['ar', 'kab']),
  C('eh', 'Sahara Barat', 'Afrika', ['ar']),
  C('mr', 'Mauritania', 'Afrika', ['ar', 'wo']),
  C('sd', 'Sudan', 'Afrika', ['ar', 'en']),
  C('ss', 'Sudan Selatan', 'Afrika', ['en']),
  C('et', 'Etiopia', 'Afrika', ['am', 'om', 'ti']),
  C('er', 'Eritrea', 'Afrika', ['ti', 'ar']),
  C('dj', 'Jibuti', 'Afrika', ['aa', 'so', 'ar', 'fr']),
  C('so', 'Somalia', 'Afrika', ['so', 'ar']),
  C('ke', 'Kenya', 'Afrika', ['sw', 'en']),
  C('ug', 'Uganda', 'Afrika', ['en', 'sw', 'lg']),
  C('tz', 'Tanzania', 'Afrika', ['sw', 'en']),
  C('rw', 'Rwanda', 'Afrika', ['rw', 'en', 'fr']),
  C('bi', 'Burundi', 'Afrika', ['rn', 'fr']),
  C('cd', 'Kongo (DRC)', 'Afrika', ['fr', 'ln', 'kg', 'sw']),
  C('cg', 'Kongo (Brazzaville)', 'Afrika', ['fr', 'ln', 'kg']),
  C('ga', 'Gabon', 'Afrika', ['fr']),
  C('gq', 'Guinea Khatulistiwa', 'Afrika', ['es', 'fr']),
  C('cm', 'Kamerun', 'Afrika', ['fr', 'en']),
  C('cf', 'Republik Afrika Tengah', 'Afrika', ['fr', 'sg']),
  C('td', 'Chad', 'Afrika', ['ar', 'fr']),
  C('ne', 'Niger', 'Afrika', ['ha', 'fr']),
  C('ng', 'Nigeria', 'Afrika', ['en', 'ha', 'yo', 'ig']),
  C('bj', 'Benin', 'Afrika', ['fr', 'yo']),
  C('tg', 'Togo', 'Afrika', ['fr', 'ee']),
  C('gh', 'Ghana', 'Afrika', ['en', 'ak', 'ee', 'tw']),
  C('ci', 'Pantai Gading', 'Afrika', ['fr']),
  C('bf', 'Burkina Faso', 'Afrika', ['fr', 'bm']),
  C('ml', 'Mali', 'Afrika', ['bm', 'fr', 'ff']),
  C('sn', 'Senegal', 'Afrika', ['wo', 'fr']),
  C('gm', 'Gambia', 'Afrika', ['en']),
  C('gn', 'Guinea', 'Afrika', ['fr', 'ff']),
  C('sl', 'Sierra Leone', 'Afrika', ['en']),
  C('lr', 'Liberia', 'Afrika', ['en']),
  C('tg2', '—', 'Afrika', []), // placeholder dihapus di bawah
  C('mw', 'Malawi', 'Afrika', ['ny', 'en']),
  C('zm', 'Zambia', 'Afrika', ['en']),
  C('zw', 'Zimbabwe', 'Afrika', ['en', 'sn', 'nd', 'tn', 'ts', 've']),
  C('mz', 'Mozambik', 'Afrika', ['pt']),
  C('mg', 'Madagaskar', 'Afrika', ['mg', 'fr']),
  C('mu', 'Mauritius', 'Afrika', ['en', 'fr']),
  C('sc', 'Seychelles', 'Afrika', ['fr', 'en']),
  C('na', 'Namibia', 'Afrika', ['en', 'ng', 'hz', 'kj']),
  C('bw', 'Botswana', 'Afrika', ['tn', 'en']),
  C('za', 'Afrika Selatan', 'Afrika', ['zu', 'xh', 'af', 'en', 'st', 'tn', 'ts', 'ss', 've', 'nd']),
  C('ls', 'Lesotho', 'Afrika', ['st', 'en']),
  C('sz', 'Eswatini', 'Afrika', ['ss', 'en']),
  C('ao', 'Angola', 'Afrika', ['pt']),
  C('km', 'Komoro', 'Afrika', ['ar', 'fr']),
  C('cv', 'Tanjung Verde', 'Afrika', ['pt']),
  C('st', 'Sao Tome & Principe', 'Afrika', ['pt']),

  // ---------- Amerika ----------
  C('us', 'Amerika Serikat', 'Amerika', ['en', 'es', 'nv', 'cr', 'ik']),
  C('ca', 'Kanada', 'Amerika', ['en', 'fr', 'iu', 'cr']),
  C('mx', 'Meksiko', 'Amerika', ['es']),
  C('gt', 'Guatemala', 'Amerika', ['es']),
  C('bz', 'Belize', 'Amerika', ['en', 'es']),
  C('sv', 'El Salvador', 'Amerika', ['es']),
  C('hn', 'Honduras', 'Amerika', ['es']),
  C('ni', 'Nikaragua', 'Amerika', ['es']),
  C('cr', 'Kosta Rika', 'Amerika', ['es']),
  C('pa', 'Panama', 'Amerika', ['es']),
  C('cu', 'Kuba', 'Amerika', ['es']),
  C('ht', 'Haiti', 'Amerika', ['ht', 'fr']),
  C('do', 'Republik Dominika', 'Amerika', ['es']),
  C('jm', 'Jamaika', 'Amerika', ['en']),
  C('tt', 'Trinidad & Tobago', 'Amerika', ['en']),
  C('bs', 'Bahama', 'Amerika', ['en']),
  C('bb', 'Barbados', 'Amerika', ['en']),
  C('co', 'Kolombia', 'Amerika', ['es']),
  C('ve', 'Venezuela', 'Amerika', ['es']),
  C('gy', 'Guyana', 'Amerika', ['en']),
  C('sr', 'Suriname', 'Amerika', ['nl']),
  C('ec', 'Ekuador', 'Amerika', ['es', 'qu']),
  C('pe', 'Peru', 'Amerika', ['es', 'qu', 'ay']),
  C('bo', 'Bolivia', 'Amerika', ['es', 'qu', 'ay', 'gn']),
  C('py', 'Paraguay', 'Amerika', ['es', 'gn']),
  C('uy', 'Uruguay', 'Amerika', ['es']),
  C('ar', 'Argentina', 'Amerika', ['es']),
  C('cl', 'Chili', 'Amerika', ['es']),
  C('br', 'Brasil', 'Amerika', ['pt']),

  // ---------- Pasifik & Lainnya ----------
  C('au', 'Australia', 'Pasifik & Lainnya', ['en']),
  C('nz', 'Selandia Baru', 'Pasifik & Lainnya', ['en', 'mi']),
  C('fj', 'Fiji', 'Pasifik & Lainnya', ['fj', 'en']),
  C('pg', 'Papua Nugini', 'Pasifik & Lainnya', ['en', 'ho']),
  C('sb', 'Kep. Solomon', 'Pasifik & Lainnya', ['en']),
  C('vu', 'Vanuatu', 'Pasifik & Lainnya', ['bi', 'en', 'fr']),
  C('nc', 'Kaledonia Baru', 'Pasifik & Lainnya', ['fr']),
  C('ws', 'Samoa', 'Pasifik & Lainnya', ['sm', 'en']),
  C('to', 'Tonga', 'Pasifik & Lainnya', ['to', 'en']),
  C('tv', 'Tuvalu', 'Pasifik & Lainnya', ['en']),
  C('ki', 'Kiribati', 'Pasifik & Lainnya', ['en']),
  C('nr', 'Nauru', 'Pasifik & Lainnya', ['na', 'en']),
  C('pw', 'Palau', 'Pasifik & Lainnya', ['en']),
  C('fm', 'Mikronesia', 'Pasifik & Lainnya', ['en']),
  C('mh', 'Kep. Marshall', 'Pasifik & Lainnya', ['mh', 'en']),
  C('gu', 'Guam (AS)', 'Pasifik & Lainnya', ['en', 'ch']),
  C('pf', 'Polinesia Prancis', 'Pasifik & Lainnya', ['fr', 'ty']),
  C('ck', 'Kep. Cook', 'Pasifik & Lainnya', ['en', 'mi']),
  C('nu', 'Niue', 'Pasifik & Lainnya', ['en']),
  C('tp2', '—', 'Pasifik & Lainnya', []), // placeholder dihapus di bawah
].filter((c) => c.code.length === 2)

// ------------------------------------------------------------
// HELPER REGISTRI
// ------------------------------------------------------------

/** status ketersediaan bahasa untuk sebuah negara: 'available' bila
 * minimal satu bahasanya sudah melewati tahap 'prep' */
export function countryStatus(c: CountryDef): 'available' | 'partial' {
  return c.langs.some((code) => LANG_BY_CODE[code]?.status !== 'prep') ? 'available' : 'partial'
}

/** jumlah negara yang memakai sebuah bahasa (dari registri negara) */
export function countriesCountFor(langCode: string): number {
  return COUNTRIES.filter((c) => c.langs.includes(langCode)).length
}

/** apakah bahasa ini RTL */
export function isRtl(code: string): boolean {
  return dirOf(code) === 'rtl'
}
