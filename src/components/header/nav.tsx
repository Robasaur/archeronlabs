import Link from "next/link"
import { AuthButton } from "./Authbutton"

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/chats", label: "Chats" },
  { href: "/runbooks", label: "Runbooks" },
]

export function SiteNav() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold">
            Archeron Labs
          </Link>

          <nav className="hidden gap-4 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <AuthButton />
          <span className="hidden sm:block text-sm text-muted-foreground">
            Public Read · Auth to edit
          </span>
        </div>
      </div>
    </header>
  )
}