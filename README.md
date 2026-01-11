# Archeron Labs
A public-first CloudOps lab portal developed by myself to design, document, and operate real-world cloud and infrastructure labs. Includes a chat-to-runbook workflow for turning troubleshooting and research into structured operational documentation.

## Tech Stack
- **Next.js** (App Router) + **TypeScript**
- **Prisma** + **PostgreSQL**
- **Auth.js** (GitHub OAuth) for authenticated editing
- **shadcn/ui** (UI components)

## Key Features
- Public browsing of:
  - Projects
  - Chat entries (notes / troubleshooting logs)
  - Runbooks (markdown)
- Authenticated editing (role-gated)
- Chat → Runbook promotion flow
- Draft vs Published visibility for runbooks (public-safe)

## Local Development

### Prerequisites
- Node.js (see `.nvmrc`)
- Package manager: **pnpm** (recommended)
- PostgreSQL database (Neon/Supabase/local Postgres)

### Setup

1) Install dependencies
```bash
npm install
