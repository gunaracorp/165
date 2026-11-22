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
    display_override: ['standalone', 'minimal-ui'],
    orientation: 'portrait-primary',
    background_color: '#f2f9f3',
    theme_color: '#166534',
    lang: 'id',
    dir: 'auto',
    categories: ['education', 'books', 'lifestyle', 'news'],
    prefer_related_applications: false,
    launch_handler: { client_mode: 'navigate-existing' },
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: '/logo.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
    shortcuts: [
      {
        name: 'Bacaan Wiridian',
        short_name: 'Bacaan',
        description: 'Qasidah Ibadallah Rijalallah, wiridian TQN & dzikir harian — Arab, Latin, arti Sunda, tafsir',
        url: '/#wiridian',
      },
      {
        name: 'Tasbih Digital',
        short_name: 'Tasbih',
        description: 'Penghitung dzikir dengan target, getaran halus & streak harian',
        url: '/#tasbih',
      },
      {
        name: 'Roadmap 99 Hari',
        short_name: 'Roadmap 99',
        description: 'Peta perjalanan 3 fase × 33 hari menuju sempurna — Islam, Iman, Ihsan',
        url: '/#roadmap',
      },
      {
        name: 'Sanad Registry',
        short_name: 'Sanad',
        description: 'Tiga jalur sanad TQN tercatat — display-only',
        url: '/#trust',
      },
    ],
  }
}
