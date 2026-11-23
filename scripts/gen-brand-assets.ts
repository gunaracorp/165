// 165 — brand asset generator: PWA icons (any + maskable) & OG image.
// Draws the institutional wordmark "165" in Emerald Radiance identity.
import sharp from 'sharp'
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const OUT = path.resolve(process.cwd(), 'public/icons')
const PUB = path.resolve(process.cwd(), 'public')
mkdirSync(OUT, { recursive: true })

const EMERALD = '#166534'
const EMERALD_DEEP = '#14532d'
const BRASS = '#e3b95c'
const CREAM = '#f9f6ec'

function svgIcon(size: number, maskable: boolean) {
  const pad = maskable ? size * 0.12 : 0
  const inner = size - pad * 2
  const radius = maskable ? 0 : size * 0.24
  const font = size * (maskable ? 0.34 : 0.36)
  const star = size * 0.16
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${EMERALD}"/>
      <stop offset="1" stop-color="${EMERALD_DEEP}"/>
    </linearGradient>
  </defs>
  <rect x="${pad}" y="${pad}" width="${inner}" height="${inner}" rx="${radius}" fill="url(#bg)"/>
  <g transform="translate(${size / 2}, ${size * 0.24})" fill="${BRASS}" fill-opacity="0.9">
    <path d="M0 ${-star} ${star} 0 0 ${star} ${-star} 0Z"/>
    <rect x="${-star * 0.5}" y="${-star * 0.5}" width="${star}" height="${star}" fill="none" stroke="${BRASS}" stroke-opacity="0.55" stroke-width="${size * 0.006}"/>
  </g>
  <text x="50%" y="${size * (maskable ? 0.72 : 0.74)}" text-anchor="middle" dominant-baseline="middle"
    font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="${font}" fill="${CREAM}">165</text>
</svg>`
}

function svgOg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${EMERALD_DEEP}"/>
      <stop offset="1" stop-color="#0f2a1e"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.8" cy="0" r="1">
      <stop offset="0" stop-color="${BRASS}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${BRASS}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g fill="none" stroke="#e9f5ee" stroke-opacity="0.08">
    ${Array.from({ length: 9 }, (_, i) => `<path d="M${120 + i * 120} 315 l52 -52 52 52 -52 52Z"/><rect x="${120 + i * 120 - 37}" y="278" width="74" height="74"/>`).join('')}
  </g>
  <g transform="translate(600, 210)" fill="${BRASS}">
    <path d="M0 -64 64 0 0 64 -64 0Z" fill-opacity="0.92"/>
    <rect x="-32" y="-32" width="64" height="64" fill="none" stroke="${BRASS}" stroke-opacity="0.6" stroke-width="2.5"/>
  </g>
  <text x="600" y="360" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="150" fill="${CREAM}">165</text>
  <text x="600" y="440" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="${BRASS}">TQN Qodiriah Naqsabandiyah</text>
  <text x="600" y="496" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="26" fill="#e9f5ee" fill-opacity="0.85">Pengetahuan · Warisan · Preservasi Digital</text>
  <text x="600" y="548" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="21" fill="#e9f5ee" fill-opacity="0.6">165.web.id — Setiap pernyataan membawa buktinya</text>
</svg>`
}

async function run() {
  const jobs: Promise<unknown>[] = [
    sharp(Buffer.from(svgIcon(192))).png().toFile(path.join(OUT, 'icon-192.png')),
    sharp(Buffer.from(svgIcon(512))).png().toFile(path.join(OUT, 'icon-512.png')),
    sharp(Buffer.from(svgIcon(512, true))).png().toFile(path.join(OUT, 'icon-maskable-512.png')),
    sharp(Buffer.from(svgIcon(180))).png().toFile(path.join(OUT, 'apple-touch-icon.png')),
    sharp(Buffer.from(svgIcon(32))).png().toFile(path.join(OUT, 'favicon-32.png')),
    sharp(Buffer.from(svgOg())).png().toFile(path.join(PUB, 'og-image.png')),
  ]
  await Promise.all(jobs)
  console.log('brand assets generated: 5 icons + og-image.png')
}

await run()
