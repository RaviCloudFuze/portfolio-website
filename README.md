<div align="center">

# 🚀 Portfolio Website

### A sleek, data-driven developer portfolio built with Next.js 14, Tailwind CSS & Framer Motion.

**Drop in your data. Deploy in two minutes. Impress in two seconds.**

<br />

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)

</div>

---

## 🌐 Live Demo

> **Visit:** [https://your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)

<p align="center">
  <img src="./public/preview.png" alt="Portfolio preview" width="100%" />
</p>

---

## ✨ Why this project?

Most dev portfolios are either **too plain** or **too bloated**. This one sits in the middle:

- 🧩 **Data-driven** &mdash; edit a few TypeScript files, deploy. No CMS, no DB.
- 🎨 **Premium by default** &mdash; dark-mode-first, brand-colored skill icons, subtle motion.
- ⚡ **Fast** &mdash; static Next.js build, `next/font`, zero runtime bloat.
- 🧱 **Modular** &mdash; every section is its own component, every piece of content its own file.

Built to be **forked, reskinned, and shipped** in an afternoon.

---

## 🔥 Features

- 🌓 **Dark mode first** with smooth light/dark toggle (`next-themes`)
- 🧭 **Sticky navbar** with active-section highlight & smooth scroll
- 💫 **Framer Motion** scroll-reveal, hover physics, and a branded loading screen
- 📄 **Resume viewer** &mdash; inline PDF preview + one-click download
- 💼 **Experience timeline** with company logos, durations, and tech chips
- 🗂️ **Projects grid** with cover art, stack pills, GitHub & live demo links
- 🛠️ **Skills** grouped by Backend / DevOps / Databases / Cloud / IDE &mdash; each with its own brand-colored icon
- 👨‍💻 **Coding profiles** &mdash; GitHub, LeetCode, CodeChef
- 📱 **WhatsApp contact** &mdash; form opens WhatsApp with a prefilled message. No backend.
- ♿ **Accessible & responsive** &mdash; Lighthouse-tuned, keyboard-friendly

---

## 🧱 Tech Stack

| Layer          | Choice                                            |
| -------------- | ------------------------------------------------- |
| ⚙️ Framework    | [Next.js 14](https://nextjs.org/) (App Router)    |
| 💬 Language     | [TypeScript](https://www.typescriptlang.org/)     |
| 🎨 Styling      | [Tailwind CSS](https://tailwindcss.com/) + custom design tokens |
| 💫 Animations   | [Framer Motion](https://www.framer.com/motion/)   |
| 🧩 Icons        | [React Icons](https://react-icons.github.io/react-icons/) (Feather + Simple Icons + Tabler) |
| 🌓 Theming      | [next-themes](https://github.com/pacocoursey/next-themes) |
| 🔤 Fonts        | Inter · Sora · JetBrains Mono (via `next/font`)   |
| 🚀 Deploy       | [Vercel](https://vercel.com/)                     |

---

## 📁 Project Structure

```bash
portfolio-website/
├── app/
│   ├── globals.css          # Tailwind + design tokens + scrollbar
│   ├── icon.svg             # Favicon (auto-detected by Next)
│   ├── layout.tsx           # Root layout (fonts, theme, nav, footer)
│   ├── not-found.tsx        # Custom 404
│   └── page.tsx             # Home, composes all sections
│
├── components/
│   ├── animated.tsx         # FadeIn / Stagger helpers
│   ├── footer.tsx
│   ├── loading-screen.tsx
│   ├── navbar.tsx
│   ├── scroll-progress.tsx
│   ├── section-heading.tsx
│   ├── skill-icon.tsx       # Colored SkillTile + SkillPill
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── skills.tsx
│       ├── experience.tsx
│       ├── projects.tsx
│       ├── profiles.tsx
│       ├── resume.tsx
│       └── contact.tsx
│
├── data/                    # 👈 Edit these to personalize everything
│   ├── site.ts              # Name, role, tagline, socials, resume URL
│   ├── navigation.ts        # Nav menu order
│   ├── experience.ts        # Work history
│   ├── projects.ts          # Project cards
│   ├── skills.ts            # Skill categories
│   └── profiles.ts          # Coding profile cards
│
├── lib/
│   └── utils.ts             # cn() helper (clsx + tailwind-merge)
│
├── public/
│   ├── company-logos/       # Company logos + profile photo
│   ├── icons/               # Brand-icon SVGs (e.g. cursor.svg)
│   ├── projects/            # Project cover art
│   └── resume.pdf           # ← drop your real resume here
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- **Node.js 18.17+** (or 20+)
- **npm**, **pnpm**, or **yarn**

### 1️⃣ Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn
```

### 2️⃣ Start the dev server

```bash
npm run dev
```

Open 👉 [http://localhost:3000](http://localhost:3000)

> 💡 Edits to anything in `data/**` or `components/**` hot-reload instantly.

### 3️⃣ Build for production

```bash
npm run build
npm run start
```

---

## ✍️ Customization

> **Golden rule:** you shouldn't need to touch a single component file to personalize this portfolio.
> All content lives in [`/data`](./data).

| What to change          | File                                     |
| ----------------------- | ---------------------------------------- |
| 🪪 Name, tagline, socials | [`data/site.ts`](./data/site.ts)         |
| 🧭 Nav menu order         | [`data/navigation.ts`](./data/navigation.ts) |
| 💼 Work experience        | [`data/experience.ts`](./data/experience.ts) |
| 🗂️ Projects              | [`data/projects.ts`](./data/projects.ts) |
| 🛠️ Skills & categories   | [`data/skills.ts`](./data/skills.ts)     |
| 👨‍💻 Coding profiles        | [`data/profiles.ts`](./data/profiles.ts) |
| 📄 Resume PDF             | [`public/resume.pdf`](./public)          |
| 🖼️ Profile photo         | `public/company-logos/myself.jpg`        |
| 🎨 Brand colors           | [`tailwind.config.ts`](./tailwind.config.ts) → `brand` / `accent` palettes |

---

## ☁️ Deployment

### 🚀 Deploy on Vercel (recommended)

1. Push this repo to GitHub.
2. Go to **[vercel.com/new](https://vercel.com/new)** and import the repo.
3. Vercel auto-detects Next.js &mdash; hit **Deploy**. No env vars required.

### 💻 Or deploy via CLI

```bash
npm i -g vercel
vercel           # preview deploy
vercel --prod    # promote to production
```

Add a custom domain under **Project → Settings → Domains**. Done.

---

## 📸 Preview

> Add a screenshot at `public/preview.png` and it will render here automatically.

<p align="center">
  <img src="./public/preview.png" alt="Portfolio preview" width="100%" />
</p>

---

## 🧪 Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start dev server on `:3000`   |
| `npm run build`   | Production build              |
| `npm run start`   | Serve the production build    |
| `npm run lint`    | Run ESLint (Next.js config)   |

---

## 📝 License

Released under the **MIT License**.
Fork it, reskin it, ship it. Just don't claim you wrote it from scratch. 🙂

---

<div align="center">

**If this portfolio helped you land something cool, a ⭐ on the repo would make my day.**

</div>
