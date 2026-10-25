import type { MetadataRoute } from 'next'

// 165 — web app manifest (installability + brand consistency in search results)
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '165 — TQN Qodiriah Naqsabandiyah · Pengetahuan, Warisan & Preservasi Digital',
    short_name: '165',
    description:
      'Institusi digital pengetahuan, warisan, dan preservasi TQN Qodiriah Naqsabandiyah. Setiap pernyataan membawa tingkat bukti, status verifikasi, dan sumbernya.',
    id: '/',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#f2f9f3',
    theme_color: '#166534',
    lang: 'id',
    dir: 'auto',
    categories: ['education', 'books', 'news'],
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: '/logo.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
    shortcuts: [
      {
        name: 'Jelajah Entitas',
        short_name: 'Jelajah',
        description: 'Seluruh entitas: tokoh, institusi, tempat, kitab, klaim',
        url: '/#explore',
      },
      {
        name: 'Pustaka & Arsip',
        short_name: 'Pustaka',
        description: 'Katalog kitab, manuskrip & koleksi',
        url: '/#library',
      },
      {
        name: 'Sanad Registry',
        short_name: 'Sanad',
        description: 'Tiga jalur sanad TQN tercatat — display-only',
        url: '/#trust',
      },
      {
        name: 'Kontribusi',
        short_name: 'Kontribusi',
        description: 'Kirim kiriman untuk telaah dewan',
        url: '/#contribute',
      },
    ],
  }
}
