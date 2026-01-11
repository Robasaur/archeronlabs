"use client"

import { createAuthClient } from "better-auth/react"

const authClient = createAuthClient()

export function AuthButton() {
  const { data: session, isPending } = authClient.useSession()

  if (isPending) {
    return (
      <span className="text-sm text-muted-foreground">
        …
      </span>
    )
  }

  if (!session?.user) {
    return (
      <button
        onClick={() => authClient.signIn.social({ provider: "github" })}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        Sign in
      </button>
    )
  }

  return (
    <button
      onClick={() => authClient.signOut()}
      className="text-sm text-muted-foreground hover:text-foreground"
      title={session.user.email ?? ""}
    >
      Sign out
    </button>
  )
}