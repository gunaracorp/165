// 165 — database bootstrap check.
// The institutional datasets are seeded by dedicated pipelines:
//   bun run seed:all  → seed-heritage + seed-content + seed-manaqib + seed-sanad
// This file intentionally creates NO placeholder content: 165 has no demo
// records — data enters only via the admin registry or the verified seed
// pipelines. Running it simply verifies the schema is live and reports
// the current state of the knowledge base.
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  console.log("🌱 165 — memeriksa database…");
  const [entities, relations, sanadLinks, contributions, subscribers] = await Promise.all([
    db.entity.count(),
    db.relationship.count(),
    db.sanadLink.count(),
    db.contribution.count(),
    db.subscriber.count(),
  ]);
  console.log(
    `✅ 165 siap — ${entities} entitas · ${relations} relasi · ${sanadLinks} jalur sanad · ${contributions} kontribusi · ${subscribers} pelanggan kabar`,
  );
}

main()
  .then(() => db.$disconnect())
  .catch(async (e) => {
    console.error("❌ Pemeriksaan database gagal:", e);
    await db.$disconnect();
    process.exit(1);
  });
