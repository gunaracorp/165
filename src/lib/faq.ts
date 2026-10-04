// 165 — FAQ content (single source of truth)
// Rendered visibly on the homepage AND mirrored as FAQPage JSON-LD in the
// root layout — Google requires structured-data answers to match visible
// content, so both surfaces read from this one file (ONE SOURCE, MANY
// EXPERIENCES). Every answer stays inside evidence discipline: recorded
// facts only, graded, no fabrication.

export type FaqItem = { readonly q: string; readonly a: string }

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    q: 'Apa itu 165.web.id?',
    a: '165 adalah institusi digital pengetahuan, warisan, dan preservasi TQN Qodiriah Naqsabandiyah: arsip digital, basis riset, direktori global, graf pengetahuan, dan sistem sitasi dalam satu fondasi data. Didirikan oleh Tuan Haji Gugun Gunara — Muhammad Lutfi Azmi, Founder & Founding Steward.',
  },
  {
    q: 'Apa itu TQN Qodiriah Naqsabandiyah?',
    a: 'TQN adalah gabungan dua silsilah tarekat besar: Qadiriyah yang berpangkal pada Syekh Abdul Qadir al-Jilani di Baghdad (abad ke-12) dan Naqsyabandiyah yang berpangkal pada Khwaja Baha\u2019 al-Din Naqshband di Bukhara (abad ke-14). Keduanya menyatu dalam satu amalan dzikir yang dikenal luas di Nusantara melalui pusat-pusat seperti Suryalaya, Tasikmalaya.',
  },
  {
    q: 'Apa itu sanad dan jalur apa saja yang terekam di 165?',
    a: 'Sanad adalah rantai transmisi ijazah dari mursyid ke mursyid. 165 mencatat tiga jalur sebagai catatan tampilan (display-only, tanpa klaim otoritas): Jalur Karawang (Abah Ganda, Cikangkung, Rengasdengklok), Jalur Al-Bantani (Abah Haji Sukanta, Kaduparasi, Labuan, Banten), dan Jalur TQN Suryalaya (Abah Anom, Pondok Pesantren Suryalaya).',
  },
  {
    q: 'Bagaimana 165 menjamin keaslian dan kejujuran kontennya?',
    a: 'Setiap pernyataan membawa tingkat bukti A\u2013F, status verifikasi, dan sumbernya. Klaim yang dipertentangkan ditampilkan berdampingan, bukan dipilih salah satu. Prinsipnya tegas: tanpa sumber yang tersimpan, pernyataan tidak berdiri \u2014 dan tidak ada penghapusan senyap atas pengetahuan.',
  },
  {
    q: 'Siapa pendiri 165?',
    a: '165 didirikan oleh Tuan Haji Gugun Gunara \u2014 Muhammad Lutfi Azmi, Founder & Founding Steward; Tech Futurist; Master Sage Polymath; Senior Konsultan Bisnis & IT. Ranah publik keduanya terdokumentasi di 165.web.id dan prabudanling.web.id \u2014 dua ranah, satu jiwa.',
  },
  {
    q: 'Bagaimana cara berkontribusi atau mengoreksi catatan di 165?',
    a: 'Siapa pun dapat mengirim sumber, manuskrip, dokumen pendirian, atau catatan silsilah melalui halaman Contribute. Koreksi masuk sebagai koreksi tercatat \u2014 dengan versi, audit, dan atribusi \u2014 bukan perubahan senyap. Halaman permanen lahir hanya dari sumber yang terverifikasi.',
  },
] as const
