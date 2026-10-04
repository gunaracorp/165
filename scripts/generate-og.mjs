// 165 — OG image generator (deterministic, text-crisp via sharp SVG→PNG)
// Output: public/og-image.png (1200×630) — used by layout.tsx openGraph/twitter.
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'

const W = 1200, H = 630
const GREEN = '#166534', KHIDR = '#22a35c', GREEN2 = '#14532d', PARCH = '#f2f9f3', BRASS = '#a0771a', INK = '#1e3a2a'

// subtle 8-point star lattice
function stars() {
  let s = ''
  for (let x = 0; x <= W; x += 90) {
    for (let y = 0; y <= H; y += 90) {
      s += `<g transform="translate(${x},${y})" opacity="0.05"><path d="M0 -14 L4 -4 L14 0 L4 4 L0 14 L-4 4 L-14 0 L-4 -4 Z" fill="${GREEN}"/></g>`
    }
  }
  return s
}

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${GREEN}"/>
      <stop offset="0.55" stop-color="${KHIDR}"/>
      <stop offset="1" stop-color="${BRASS}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${PARCH}"/>
  <g>${stars()}</g>
  <rect x="0" y="0" width="${W}" height="14" fill="url(#g)"/>
  <rect x="0" y="${H - 14}" width="${W}" height="14" fill="url(#g)"/>
  <rect x="60" y="60" width="${W - 120}" height="${H - 120}" fill="none" stroke="${BRASS}" stroke-opacity="0.55" stroke-width="2"/>
  <rect x="72" y="72" width="${W - 144}" height="${H - 144}" fill="none" stroke="${GREEN}" stroke-opacity="0.18" stroke-width="1"/>
  <text x="110" y="235" font-family="Georgia, 'Times New Roman', serif" font-size="150" font-weight="bold" fill="${GREEN}" letter-spacing="2">165</text>
  <rect x="112" y="268" width="180" height="5" fill="${BRASS}"/>
  <text x="110" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-weight="bold" fill="${INK}">TQN Qodiriah Naqsabandiyah</text>
  <text x="110" y="382" font-family="Georgia, 'Times New Roman', serif" font-size="27" fill="${GREEN2}">Pengetahuan · Warisan · Preservasi Digital</text>
  <text x="110" y="452" font-family="Verdana, 'DejaVu Sans', sans-serif" font-size="19" fill="#5a6b5a">Setiap pernyataan membawa tingkat bukti, status verifikasi, dan sumbernya.</text>
  <text x="110" y="482" font-family="Verdana, 'DejaVu Sans', sans-serif" font-size="19" fill="#5a6b5a">Every statement carries its evidence level, verification status and source.</text>
  <text x="110" y="548" font-family="Verdana, 'DejaVu Sans', sans-serif" font-size="22" font-weight="bold" fill="${BRASS}">165.web.id</text>
  <text x="${W - 110}" y="548" text-anchor="end" font-family="Verdana, 'DejaVu Sans', sans-serif" font-size="16" fill="#5a6b5a">Didirikan oleh Tuan Haji Gugun Gunara — Muhammad Lutfi Azmi</text>
</svg>`

mkdirSync('public', { recursive: true })
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og-image.png')
console.log('og-image.png written (1200x630)')
