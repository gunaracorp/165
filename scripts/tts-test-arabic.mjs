// Uji TTS Arab — bait 1 qasidah Ibadallah Rijalallah
// Cek apakah output WAV valid & berdurasi wajar
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'

const TEXT = 'عِبَادَ اللهِ رِجَالَ اللهِ'

async function main() {
  const zai = await ZAI.create()
  const voices = ['tongtong', 'kazi', 'xiaochen']
  for (const voice of voices) {
    try {
      const t0 = Date.now()
      const response = await zai.audio.tts.create({
        input: TEXT,
        voice,
        speed: 0.8,
        response_format: 'wav',
        stream: false,
      })
      const arrayBuffer = await response.arrayBuffer()
      const buffer = Buffer.from(new Uint8Array(arrayBuffer))
      const out = `/tmp/tts-test-${voice}.wav`
      fs.writeFileSync(out, buffer)
      const kb = (buffer.length / 1024).toFixed(1)
      console.log(`OK voice=${voice} size=${kb}KB ms=${Date.now() - t0} -> ${out}`)
    } catch (e) {
      console.log(`FAIL voice=${voice}: ${e.message}`)
    }
  }
}

main().catch((e) => {
  console.error('FATAL', e.message)
  process.exit(1)
})
