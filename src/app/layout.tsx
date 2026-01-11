import type { Metadata } from "next"
import "./globals.css"
import { SiteNav } from "@/components/header/nav"

export const metadata: Metadata = {
  title: "Archeron Labs",
  description: "CloudOps lab portal with chat-to-runbook documentation.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
