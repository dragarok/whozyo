# Whozyo — Marketing site

Parent brand for the WhoIsYour___ family. Launching with **WhoIsYourMechanic**.

## Run

```bash
pnpm install
pnpm dev          # http://localhost:3000  (we've been using -p 3737)
```

Production build:

```bash
pnpm build && pnpm start
```

## Stack

- Next.js 15 (App Router, Turbopack)
- React 19
- Tailwind CSS v4 (CSS-first `@theme` tokens — see `app/globals.css`)
- TypeScript
- Fonts: Instrument Serif (display) + Geist (body) + Geist Mono (labels), via `next/font/google`

## Design system

Inherits the WIYM palette so the marketing site and product feel like one company:

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#0B1120` | Page ground |
| `--color-ink` | `#F5F2EB` | Body text (warm bone) |
| `--color-indigo` | `#6366F1` | Brand accent |
| `--color-emerald` | `#10B981` | "Verified / Live" |
| `--color-amber` | `#F59E0B` | "Coming soon / Pending" |

All tokens live in `app/globals.css` under `@theme`. Add new ones there; they become Tailwind classes automatically.

## Structure

```
app/
  layout.tsx           next/font wiring + root <html>
  page.tsx             composes the sections
  globals.css          tokens, grain, animations
components/
  Nav.tsx
  Hero.tsx
  RotatingWord.tsx     typewriter for "Who is your ___?"
  TrustModel.tsx       4-step verification backbone
  FeaturedProduct.tsx  WhoIsYourMechanic card + device mockup
  Verticals.tsx        filings grid (mechanic live, doctor next, ...)
  ForProfessionals.tsx
  Footer.tsx           massive Whozyo. sign-off
```
