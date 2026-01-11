import { db } from "@/lib/db"

type TableRow = {
  tablename: string
}

export async function GET() {
  try {
    const tables: TableRow[] = await db.$queryRaw<TableRow[]>`
      select tablename
      from pg_tables
      where schemaname = 'public'
      order by tablename;
    `

    const verificationExists = tables.some(
      (t: TableRow) => t.tablename === "verification"
    )

    return Response.json({
      ok: true,
      verificationExists,
      tables: tables.map((t: TableRow) => t.tablename),
    })
  } catch (e: any) {
    return Response.json(
      { ok: false, error: e?.message ?? String(e) },
      { status: 500 }
    )
  }
}