# alpha.art

The coming-soon page for [alpha.art](https://alpha.art) — the Solana NFT
marketplace, returning as an open-source exchange by
[Piggy Gang](https://piggygang.net). This repo later becomes the exchange
frontend.

## Develop

Uses pnpm (version pinned via `packageManager` in package.json; Node 24 via
`.tool-versions`).

- `pnpm dev` — dev server at http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — ESLint
- `pnpm exec next typegen && pnpm exec tsc --noEmit` — typecheck

## Deploy

Hosted on Vercel. Pushes to `main` deploy to production; pull requests get
preview deploys. No config files needed — Vercel detects Next.js, pnpm and the
Node version from package.json.
