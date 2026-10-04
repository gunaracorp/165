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
    display: 'standalone',
    background_color: '#f2f9f3',
    theme_color: '#166534',
    lang: 'id',
    dir: 'auto',
    categories: ['education', 'books', 'news'],
    icons: [
      { src: '/logo.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/og-image.png', sizes: '1200x630', type: 'image/png', purpose: 'any' },
    ],
  }
}
