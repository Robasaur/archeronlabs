export const ROLES = ["SUPADMIN", "ADMIN", "MOD", "USER"] as const
export type Role = (typeof ROLES)[number]

// Higher number = more power
export const ROLE_RANK: Record<Role, number> = {
  SUPADMIN: 5,
  ADMIN: 4,
  MOD: 1,
  USER: 0,
}

export function isRole(value: string): value is Role {
  return (ROLES as readonly string[]).includes(value)
}