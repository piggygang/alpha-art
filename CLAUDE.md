# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git rules

- NEVER commit or push. When work is ready, suggest a commit message and let the user run git themselves.
- Suggested commit messages must be a single line, with no Co-Authored-By trailer or any other Claude/AI attribution.

## Commands

Use pnpm (version pinned via `packageManager` in package.json; Node 24 via `.tool-versions`).

- `pnpm dev` — dev server at http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`)
- `pnpm exec next typegen && pnpm exec tsc --noEmit` — typecheck (no package script exists for this; `next typegen` generates `next-env.d.ts` and route types first)

No test framework is configured.

## Architecture

Next.js 16.3.0 App Router with TypeScript strict mode and React 19 — the single-screen coming-soon page for alpha.art. This repo later becomes the exchange frontend. Conventions follow the sibling `../dressme` repo.

- Routes live in `app/` at the repo root (no `src/`). Path alias `@/*` maps to the repo root.
- Layouts/pages use Next 16's generated route-typed props (e.g. `LayoutProps<"/">`) as ambient globals — no import needed; `pnpm exec next typegen` generates them.
- Styling is Tailwind CSS v4 via `@tailwindcss/postcss`: there is no tailwind config file; theme tokens live in `app/globals.css` under `:root` + `@theme inline`. Dark-only (`color-scheme: dark`), no light mode.
- `pnpm-workspace.yaml` exists only for pnpm settings (`allowBuilds`); this is not a monorepo. `sharp` stays disabled — nothing here uses `next/image`.
- `app/opengraph-image.tsx` and `app/apple-icon.tsx` render at build time via `next/og` (satori — needs literal hex colors and explicit `display: flex` on multi-child divs; no sharp involved).

## House style (inherited from dressme)

- Depth is the surface ramp (`canvas` → `surface` → `surface-raised`) plus 1px `--line` borders — **no shadows, no gradients**. The hero glow in `components/alpha-glyph.tsx` is the one sanctioned exception.
- Buttons and pills are `rounded-full`; every interactive element carries `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`.
- The mono font marks machine-ish data (the "coming soon" pill, the teaser list).
- Breakpoints `sm:`/`lg:` only. Page container: `mx-auto w-full max-w-6xl px-5`.
- All motion is CSS-only and lives in `app/globals.css` behind `@media (prefers-reduced-motion: no-preference)`; the base state is the finished, static page — never the other way around.
- The core message must fit one viewport with no scroll at 390×664. `min-h-dvh` on `<body>` (the deliberate departure from dressme's `h-full`) keeps that true under mobile browser chrome; tiny viewports degrade to scroll rather than clipping.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
