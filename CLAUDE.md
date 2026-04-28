# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run lint      # ESLint check
npm run preview   # Preview production build locally
```

There are no tests in this project.

## Architecture

Single-page React portfolio with no routing — all sections are rendered sequentially in `App.jsx`:

```
Navbar → Hero → Skills → Projects → Experience → Contact → Footer
```

**Source layout:**
- `src/sections/` — page sections (Hero, Skills, Projects, Experience, Contact), each a self-contained component
- `src/layout/` — Navbar (fixed header + mobile menu) and Footer
- `src/components/` — shared UI: `Button.jsx` (size variants: sm/default/lg) and `AnimatedBorderButton.jsx` (SVG stroke animation)
- `src/data/projects.json` — all project data (title, description, tags, image, links); edit here to add/remove projects

**Path alias:** `@` resolves to `src/` (configured in `vite.config.js`).

## Styling

Tailwind CSS v4 via `@tailwindcss/vite` — there is no `tailwind.config.js`. All theme customization (colors, animations, utilities) lives in `src/index.css` using CSS `@theme` and `@layer`:

- Dark theme with teal primary (`#20b2a6`) and dark background (`#0f1418`)
- Custom utilities: `.glass`, `.glass-strong`, `.glow-text`, `.glow-border`
- Custom animations: `fade-in`, `slow-drift`, `float`, `marquee`, `animated-border`
- Animation delay utilities for staggered entrance effects

## EmailJS (Contact Form)

The contact form in `src/sections/Contact.jsx` uses EmailJS. Three environment variables are required at runtime:

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Create a `.env.local` file with these values for local development.
