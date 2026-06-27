# Harshavardhan K G · Portfolio

Personal portfolio built with Next.js 15, Tailwind CSS, and Framer Motion.
Dark futuristic aesthetic, electric cyan accent, moderate motion budget.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Visit https://vercel.com/new, import the repo.
3. Default settings work. Deploy.
4. Free `*.vercel.app` URL ships in ~60 seconds.
5. Custom domain later: Settings → Domains → add `harshavardhan.dev` (or whichever you buy).

## Updating content

**Everything is in one file**: `src/lib/data.ts`

| Edit this | To update |
|---|---|
| `profile` | name, role, bio, taglines, stats |
| `socials` | GitHub, LinkedIn, email URLs |
| `skillGroups` | skills shown in the Stack section |
| `experience` | timeline entries |
| `projects` | project cards + case study pages |
| `certifications` | About sidebar |
| `languages` | Footer language strip |

No UI changes needed. Add a new project? Push a new `Project` object onto the `projects` array.

## Replacing assets

| Asset | Where | Used by |
|---|---|---|
| Resume PDF | `public/resume.pdf` | Hero CTA, navbar, `/resume` page |
| Avatar PNG (optional upgrade) | `public/avatar.png` | Replace `ParallaxAvatar` SVG in `src/components/ui/ParallaxAvatar.tsx` |
| OG image | `public/og-image.png` (1200×630) | Link previews on Twitter / LinkedIn / iMessage |
| Favicon | `public/favicon.ico` | Browser tab |

## File tour

```
src/
├── app/
│   ├── layout.tsx               root layout, fonts, metadata
│   ├── page.tsx                 home (composes all sections)
│   ├── globals.css              theme tokens, base styles
│   ├── projects/
│   │   ├── page.tsx             archive grid
│   │   └── [slug]/page.tsx      case study (SSG via generateStaticParams)
│   ├── resume/page.tsx          PDF embed
│   ├── blog/page.tsx            "Coming soon" stub
│   └── not-found.tsx            themed 404
├── components/
│   ├── sections/                Hero, About, Skills, Experience, FeaturedProjects, Contact
│   ├── common/                  Navbar, Footer, ScrollProgress, GridBackdrop
│   └── ui/                      Button, Card, Badge, Section, ProjectCard, ParallaxAvatar
└── lib/
    ├── data.ts                  SINGLE SOURCE for all content
    └── utils.ts                 cn() class merger
```

## Design tokens

| Token | Value | Notes |
|---|---|---|
| `--bg-0` | `#0A0A0F` | Page background |
| `--bg-1` | `#12121A` | Cards |
| `--bg-2` | `#1C1C26` | Elevated surfaces |
| `--ink-0` | `#E4E4E7` | Primary text |
| `--ink-1` | `#A1A1AA` | Secondary text |
| `--ink-2` | `#71717A` | Muted text |
| `--accent` | `#00D9FF` | Electric cyan (≈14:1 contrast on `--bg-0`, WCAG AAA) |

Type: **Bricolage Grotesque** (display & sans) + **JetBrains Mono** (mono).

## Performance notes

- Static export of every route (10/10).
- `prefers-reduced-motion` honored across all animations.
- No localStorage / sessionStorage; nothing to break in private browsing.
- Lighthouse targets: Performance ≥95, LCP <1.5s on 4G, CLS 0.

## Upgrade paths (later, not now)

| Want | How |
|---|---|
| Real photo hero | Drop PNG at `public/avatar.png`, replace SVG in `ParallaxAvatar.tsx` with `next/image` |
| Real 3D bust | Add `@react-three/fiber` + `drei`, swap `ParallaxAvatar` body |
| MDX case studies | Add `@next/mdx`, move per-project body to `src/content/projects/*.mdx` |
| Contact form | Add Resend (3K emails/mo free), wire up an `/api/contact` route |
| Analytics | `npm i @vercel/analytics`, add `<Analytics />` to layout |

## License

Personal portfolio. Code is yours to copy and adapt.
