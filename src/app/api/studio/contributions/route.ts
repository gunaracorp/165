import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'
import { isFounder } from '@/lib/studio-auth'
import { CONTRIBUTION_FLOW, CONTRIBUTION_TERMINAL } from '@/lib/165'

// 165 — FOUNDER STUDIO · contribution review
// The moderation desk: every public submission passes through the
// editorial workflow here. Status transitions are recorded in AuditLog.

const ALL_STATUSES = [...CONTRIBUTION_FLOW, ...CONTRIBUTION_TERMINAL] as readonly string[]

const patchSchema = z.object({
  reference: z.string().trim().min(5),
  status: z.string().refine((s) => ALL_STATUSES.includes(s), 'Unknown workflow status'),
  statusNote: z.string().trim().max(600).optional(),
})

export async function GET(req: NextRequest) {
  if (!isFounder(req)) return NextResponse.json({ error: 'Founder authentication required.' }, { status: 401 })
  try {
    const contributions = await db.contribution.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })
    return NextResponse.json({ contributions })
  } catch (err) {
    console.error('[api/studio/contributions GET]', err)
    return NextResponse.json(
      { error: 'Contributions unavailable on this host (database absent). The public site keeps displaying the bundled snapshot.' },
      { status: 503 },
    )
  }
}

export async function PATCH(req: NextRequest) {
  if (!isFounder(req)) return NextResponse.json({ error: 'Founder authentication required.' }, { status: 401 })
  try {
    const body = await req.json().catch(() => null)
    const parsed = patchSchema.safeParse(body)
    if (!parsed.success) {
      const first = parsed.error.issues[0]
      return NextResponse.json({ error: first?.message ?? 'Invalid request' }, { status: 400 })
    }
    const { reference, status, statusNote } = parsed.data

    const existing = await db.contribution.findUnique({ where: { reference } })
    if (!existing) return NextResponse.json({ error: 'Contribution not found.' }, { status: 404 })

    const updated = await db.contribution.update({
      where: { reference },
      data: { status, statusNote: statusNote ?? existing.statusNote, reviewedBy: 'founder-studio' },
    })

    await db.auditLog.create({
      data: {
        actor: 'founder-studio',
        action: 'STATUS_CHANGE',
        target: reference,
        detail: `Contribution "${existing.title}": ${existing.status} → ${status}.`,
      },
    })

    return NextResponse.json({ ok: true, contribution: { reference: updated.reference, status: updated.status, statusNote: updated.statusNote } })
  } catch (err) {
    console.error('[api/studio/contributions PATCH]', err)
    const msg = err instanceof Error ? err.message : String(err)
    const readonly = /readonly|read-only|SQLITE_|P1003|P2021|P2022/i.test(msg)
    return NextResponse.json(
      { error: readonly ? 'The connected database is read-only or absent on this host. Studio writes need a hosted database (free options in README §32).' : 'Failed to update contribution.' },
      { status: 503 },
    )
  }
}
