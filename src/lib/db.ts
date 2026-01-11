import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export function getDb() {
  if (!globalForPrisma.prisma) {
    const DATABASE_URL = process.env.DATABASE_URL
    if (!DATABASE_URL) throw new Error("Missing env var: DATABASE_URL")

    // Prisma 7 "engine type client" requires an adapter OR accelerateUrl
    const adapter = new PrismaNeon({ connectionString: DATABASE_URL })

    globalForPrisma.prisma = new PrismaClient({
      adapter,
      log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
    })
  }

  return globalForPrisma.prisma
}

export const db = getDb()