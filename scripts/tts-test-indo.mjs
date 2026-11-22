// Uji TTS Indonesia — cek kualitas pengucapan via ASR roundtrip
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'

const SAMPLE = 'Wahai para hamba Allah, wahai para wali Allah — tolonglah kami, karena Allah.'

async function main() {
  const zai = await ZAI.create()
  for (const [voice, speed] of [['tongtong', 0.9], ['xiaochen', 0.9]]) {
    const response = await zai.audio.tts.create({
      input: SAMPLE,
      voice,
      speed,
      response_format: 'wav',
      stream: false,
    })
    const buffer = Buffer.from(new Uint8Array(await response.arrayBuffer()))
    const out = `/tmp/tts-id-${voice}.wav`
    fs.writeFileSync(out, buffer)
    console.log(`OK ${voice} ${(buffer.length / 1024).toFixed(1)}KB -> ${out}`)
  }
}

main().catch((e) => { console.error('FATAL', e.message); process.exit(1) })
