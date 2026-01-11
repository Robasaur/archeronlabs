export async function GET() {
  return Response.json({
    hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
    betterAuthUrl: process.env.BETTER_AUTH_URL ?? null,
  })
}