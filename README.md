# Agent Cockpit — Landing Page

The marketing site for [Agent Cockpit](https://github.com/agent-cockpit/agent-cockpit), served at **[agent-cockpit.dev](https://agent-cockpit.dev)**.

Built with Next.js 16, React 19, Tailwind CSS v4, and GSAP scroll-trigger animations. Matches the pixel-art / terminal aesthetic of the product itself.

---

## What's on the site

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, features, how it works, quick-start, roadmap |
| `/docs` | Getting-started documentation |

---

## Stack

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.2.4 | App Router, SSR/SSG |
| React | 19.2.4 | UI framework |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first CSS |
| GSAP | ^3.15 | Scroll-trigger hero entrance and section animations |

---

## Getting started

**Requirements:** Node.js 18+ and npm/pnpm/yarn.

```bash
# Clone
git clone https://github.com/agent-cockpit/agent-cockpit.git
cd landing-page

# Install
npm install

# Dev server (http://localhost:3000)
npm run dev
```

Other commands:

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## Project structure

```
landing-page/
├── app/
│   ├── components/
│   │   ├── CopyButton.tsx       # Inline copy-to-clipboard button for code snippets
│   │   ├── GithubIcon.tsx       # GitHub SVG icon component
│   │   └── GsapAnimations.tsx   # GSAP scroll-trigger animation setup (client component)
│   ├── docs/
│   │   └── page.tsx             # /docs route — full getting-started guide
│   ├── globals.css              # Design system: tokens, typography, layout, components
│   ├── layout.tsx               # Root layout — fonts, meta, viewport
│   └── page.tsx                 # / route — landing page
├── public/
│   └── assets/
│       ├── faces/               # Pixel-art character face portraits (10 characters)
│       │   ├── alien.png
│       │   ├── astronaut.png
│       │   ├── caveman.png
│       │   ├── ghost.png
│       │   ├── hologram.png
│       │   ├── medicine-woman.png
│       │   ├── monkey.png
│       │   ├── ninja.png
│       │   ├── pirate.png
│       │   └── robot.png
│       └── map-bg.png           # Background texture used in hero section
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config (via postcss)
└── tsconfig.json
```

---

## Design system

All design tokens are defined in `app/globals.css` using CSS custom properties. The palette mirrors the Agent Cockpit UI:

| Token | Value | Use |
|-------|-------|-----|
| `--cyan` | `#3de7d0` | Primary accent, Claude provider |
| `--amber` | `#f5a623` | Warning, approval alerts |
| `--green` | `#4caf7d` | Success, active states |
| `--claude` | `#da7756` | Claude Code provider stripe |
| `--codex` | `#8b5cf6` | Codex provider stripe |
| `--bg` | `#0d0f12` | Page background |
| `--bg-2` | `#111318` | Alternate section background |

Typography uses two variable fonts loaded via `next/font`:

- **`--f-sans`** — display headings
- **`--f-mono`** — all monospace text, labels, and UI chrome
- **`--f-px`** — pixel-art font for phase labels and retro badges

---

## Sections (landing page)

1. **Nav** — site mark, links (Docs, Features, Install, Roadmap), GitHub link, CTA
2. **Hero** — headline, subline, CTA buttons, live mock session window (approvals + second session card)
3. **Features** — 6-card grid: Office Mode, Unified Approvals, Timeline & Replay, Multi-Provider, Diff & Artifact Review, Memory Panel
4. **How it works** — 3-step breakdown: Provider Layer → Daemon Layer → Browser UI
5. **Quick Start** — terminal-style install box with copyable commands (Claude Code + Codex + clone + build + run)
6. **Roadmap** — shipped / in-progress / planned items
7. **Footer** — site mark, GitHub, Docs, Roadmap, Issues, Contributing links

---

## About Agent Cockpit

Agent Cockpit is a local-first control room for running multiple coding agents simultaneously. It turns Claude Code and Codex sessions into something you can see, manage, approve, and review — with a pixel-art office map on top and a full operational control plane underneath.

**Repository:** [github.com/agent-cockpit/agent-cockpit](https://github.com/agent-cockpit/agent-cockpit)
**Product site:** [agent-cockpit.dev](https://agent-cockpit.dev)
**License:** MIT
