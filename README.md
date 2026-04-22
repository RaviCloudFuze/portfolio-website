# Portfolio Website

A modern, fully responsive developer portfolio built with **Next.js 14 (App
Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

It's designed to be dropped in, edited via data files, and deployed to Vercel
in under two minutes.

## Features

- Dark mode by default, with a smooth light/dark toggle (`next-themes`)
- Sticky navbar with active-section highlight + smooth scroll
- Framer Motion page transitions, scroll-reveal, hover scaling, and a branded
  loading screen
- Resume section with inline PDF viewer + download button
- Experience timeline with company logos, duration, stack, and links
- Projects grid with cover images, stack chips, GitHub + live demo
- Skills grouped by Languages / Frameworks / Tools / Current stack
- Coding profiles — GitHub, LeetCode, HackerRank
- Contact form that composes a prefilled email (no backend required)
- Fully responsive, accessibility-aware, and tuned for Lighthouse

## Tech Stack

| Layer      | Choice                                         |
| ---------- | ---------------------------------------------- |
| Framework  | Next.js 14 (App Router)                        |
| Language   | TypeScript                                     |
| Styling    | Tailwind CSS + custom design tokens            |
| Animations | Framer Motion                                  |
| Icons      | React Icons (Feather + Simple Icons)           |
| Theming    | next-themes                                    |
| Fonts      | Inter, Sora, JetBrains Mono (via `next/font`)  |

## Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Tailwind + design tokens + scrollbar
│   ├── icon.svg             # Favicon (auto-detected by Next)
│   ├── layout.tsx           # Root layout (fonts, theme, nav, footer)
│   ├── not-found.tsx        # Custom 404 page
│   └── page.tsx             # Home — composes all sections
├── components/
│   ├── animated.tsx         # FadeIn / Stagger helpers
│   ├── footer.tsx
│   ├── loading-screen.tsx
│   ├── navbar.tsx
│   ├── scroll-progress.tsx
│   ├── section-heading.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── resume.tsx
│       ├── experience.tsx
│       ├── projects.tsx
│       ├── skills.tsx
│       ├── profiles.tsx
│       └── contact.tsx
├── data/
│   ├── site.ts              # Name, role, tagline, socials, resume URL
│   ├── navigation.ts        # Nav links
│   ├── experience.ts        # Work history
│   ├── projects.ts          # Project cards
│   ├── skills.ts            # Skill categories
│   └── profiles.ts          # Coding profiles
├── lib/
│   └── utils.ts             # `cn()` helper (clsx + tailwind-merge)
├── public/
│   ├── README.md            # Notes on required static assets
│   └── resume.pdf           # ← drop your real resume here
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js **18.17+** (or 20+)
- npm / pnpm / yarn

### 1. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — edits in `data/**` or
`components/**` hot-reload instantly.

### 3. Build for production

```bash
npm run build
npm run start
```

## Customizing the content

All personal data lives in [`data/`](./data) — **you should not need to touch
any component file to personalize the portfolio.**

| What to change         | File                 |
| ---------------------- | -------------------- |
| Name, tagline, socials | `data/site.ts`       |
| Nav menu items         | `data/navigation.ts` |
| Work experience        | `data/experience.ts` |
| Projects               | `data/projects.ts`   |
| Skills & categories    | `data/skills.ts`     |
| Coding profile cards   | `data/profiles.ts`   |

Drop your real resume at [`public/resume.pdf`](./public). The path is
controlled via `siteConfig.resumeUrl` in `data/site.ts`.

### Theme colors

Edit [`tailwind.config.ts`](./tailwind.config.ts) — the `brand` and `accent`
palettes drive the gradients, buttons, glow shadows, and focus rings.

## Deploying to Vercel

The fastest path:

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects **Next.js** — just hit **Deploy**. No env vars needed.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel           # first deploy (preview)
vercel --prod    # promote to production
```

Custom domain? Add it under **Project → Settings → Domains** once deployed.

## Scripts

| Command         | Description                 |
| --------------- | --------------------------- |
| `npm run dev`   | Start dev server on :3000   |
| `npm run build` | Production build            |
| `npm run start` | Serve the production build  |
| `npm run lint`  | Run ESLint (Next.js config) |

## License

MIT — use it, fork it, make it yours.
