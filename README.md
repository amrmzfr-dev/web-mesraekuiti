# Ozone Treatment — Mesra Ekuiti Sdn Bhd

Promotional website for **Mesra Ekuiti Sdn Bhd**, Malaysia's professional ozone car sanitization service. Built with Next.js 15 as a fully static export.

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: shadcn/ui + Base UI

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, The Problem, What Is Ozone, Machine Illustration, How It Works, Treatments, Why Ozone, FAQ |
| `/about` | Company profile, core values, milestone timeline (1998–2024) |
| `/treatments` | Treatment tiers (Basic / Standard / Premium), full comparison table, FAQ, CTA |
| `/technology` | Ozone mechanism, method comparison table, safety & certifications, FAQ, CTA |
| `/operators` | B2B page — operator benefits, stats strip, partner process, FAQ, contact form |
| `/contact` | Office address, phone, business hours, embedded map |

## Project Structure

```
app/                    # Next.js App Router pages
components/
  sections/             # Page-specific sections (Hero, FAQ, Treatments, …)
  sections/home/        # Home-only sections (TheProblem, MachineIllustration)
  shared/               # Reusable layout components (Navbar, Footer, PageHero, WaveDivider, CtaBanner, AnimatedCounter, SectionWrapper)
  ui/                   # Base UI primitives (Button, Card, Accordion)
lib/
  constants.ts          # All copy, data arrays, and site config
  types.ts              # Shared TypeScript types
  animations.ts         # Framer Motion variants
public/                 # Static assets (images)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs a fully static site to `/out` — no server required. Deploy to any static host (Netlify, Vercel static, S3, etc.).
