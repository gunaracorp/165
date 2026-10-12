import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'
import { isFounder } from '@/lib/studio-auth'

// 165 — FOUNDER STUDIO · record editing
// Every save snapshots the BEFORE state (VersionSnapshot, never deleted)
// and appends an AuditLog row. Pure incremental preservation.

const PRECISIONS = ['DAY', 'MONTH', 'YEAR', 'DECADE', 'CENTURY', 'UNKNOWN'] as const
const EVIDENCE = ['A', 'B', 'C', 'D', 'E', 'F'] as const
const STATUSES = ['VERIFIED', 'DOCUMENTED', 'COMMUNITY_SUBMITTED', 'DISPUTED', 'TRADITIONAL_ACCOUNT', 'UNVERIFIED', 'WITHDRAWN'] as const
const VISIBILITIES = ['PUBLIC', 'RESTRICTED', 'PRIVATE'] as const

const patchSchema = z.object({
  primaryName: z.string().trim().min(2).max(200).optional(),
  subtitle: z.string().trim().max(300).nullable().optional(),
  summary: z.string().trim().max(4000).nullable().optional(),
  summaryId: z.string().trim().max(4000).nullable().optional(),
  summaryAr: z.string().trim().max(4000).nullable().optional(),
  evidenceLevel: z.enum(EVIDENCE).optional(),
  verificationStatus: z.enum(STATUSES).optional(),
  visibility: z.enum(VISIBILITIES).optional(),
  startDate: z.string().trim().max(40).nullable().optional(),
  startDatePrecision: z.enum(PRECISIONS).nullable().optional(),
  endDate: z.string().trim().max(40).nullable().optional(),
  endDatePrecision: z.enum(PRECISIONS).nullable().optional(),
  region: z.string().trim().max(120).nullable().optional(),
  latitude: z.number().min(-90).max(90).nullable().optional(),
  longitude: z.number().min(-180).max(180).nullable().optional(),
  details: z.record(z.string(), z.unknown()).nullable().optional(),
  reason: z.string().trim().max(300).optional(),
})

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  if (!isFounder(req)) return NextResponse.json({ error: 'Founder authentication required.' }, { status: 401 })
  try {
    const { slug } = await params
    const body = await req.json().catch(() => null)
    const parsed = patchSchema.safeParse(body)
    if (!parsed.success) {
      const first = parsed.error.issues[0]
      return NextResponse.json({ error: `${first?.path?.join('.') ?? 'field'}: ${first?.message ?? 'invalid'}` }, { status: 400 })
    }

    const current = await db.entity.findUnique({
      where: { slug },
      include: { versions: { orderBy: { version: 'desc' }, take: 1 } },
    })
    if (!current) return NextResponse.json({ error: 'Record not found.' }, { status: 404 })

    const d = parsed.data
    const { reason, details, ...fields } = d

    const before = {
      primaryName: current.primaryName, subtitle: current.subtitle,
      summary: current.summary, summaryId: current.summaryId, summaryAr: current.summaryAr,
      evidenceLevel: current.evidenceLevel, verificationStatus: current.verificationStatus,
      visibility: current.visibility, startDate: current.startDate, startDatePrecision: current.startDatePrecision,
      endDate: current.endDate, endDatePrecision: current.endDatePrecision, region: current.region,
      details: current.details ? JSON.parse(current.details) : null,
    }

    const data: Record<string, unknown> = { ...fields }
    if (details !== undefined) data.details = details ? JSON.stringify(details) : null

    const updated = await db.entity.update({ where: { slug }, data })

    const nextVersion = (current.versions[0]?.version ?? 0) + 1
    await db.versionSnapshot.create({
      data: {
        entityId: current.id,
        version: nextVersion,
        snapshot: JSON.stringify({ before }),
        changedBy: 'founder-studio',
        reason: reason || 'Edited via Founder Studio.',
      },
    })
    await db.auditLog.create({
      data: {
        actor: 'founder-studio',
        action: 'UPDATE',
        target: current.globalId,
        detail: `Updated ${Object.keys(fields).concat(details !== undefined ? ['details'] : []).join(', ') || 'no fields'} (v${nextVersion}).`,
      },
    })

    return NextResponse.json({
      ok: true,
      entity: { globalId: updated.globalId, slug: updated.slug, primaryName: updated.primaryName, version: nextVersion },
    })
  } catch (err) {
    console.error('[api/studio/entities PATCH]', err)
    const msg = err instanceof Error ? err.message : String(err)
    const readonly = /readonly|read-only|SQLITE_|P1003|P2021|P2022/i.test(msg)
    return NextResponse.json(
      { error: readonly ? 'The connected database is read-only or absent on this host. Studio writes need a hosted database (free options in README §32) — the public site keeps displaying the bundled snapshot.' : 'Failed to save record.' },
      { status: 503 },
    )
  }
}
