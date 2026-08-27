import { Fragment } from "react";
import { AlphaGlyph } from "@/components/alpha-glyph";
import { Wordmark } from "@/components/brand/wordmark";
import { LINKS, TEASERS } from "@/lib/site";

const ICONS = {
  x: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93ZM17.61 20.64h2.04L6.49 3.24H4.3Z",
  discord:
    "M20.32 4.37a19.79 19.79 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.37-.44.86-.61 1.25a18.27 18.27 0 0 0-5.48 0c-.17-.4-.41-.88-.62-1.25a.08.08 0 0 0-.08-.04A19.74 19.74 0 0 0 3.68 4.37a.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06c0 .02.01.04.03.05a19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .09-.03c.46-.63.87-1.29 1.22-1.99a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1 0-.13l.37-.29a.07.07 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.07.07 0 0 1 .08.01l.37.29a.08.08 0 0 1 0 .13c-.6.35-1.22.64-1.87.89a.08.08 0 0 0-.04.11c.36.7.77 1.36 1.22 1.99a.08.08 0 0 0 .09.03 19.84 19.84 0 0 0 6-3.03.08.08 0 0 0 .03-.05c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.33-.96 2.42-2.16 2.42Zm7.98 0c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.33-.95 2.42-2.16 2.42Z",
} as const;

function Icon({ path }: { path: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5">
        <Wordmark />
        <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[11px] text-ink-muted">
          coming soon
        </span>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 py-4 text-center">
        <AlphaGlyph className="size-[clamp(8.5rem,22dvh,16rem)]" />

        <h1 className="rise-h1 mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          The marketplace is coming back.
        </h1>
        <p className="rise mt-3 max-w-md text-base text-ink-muted text-pretty sm:text-lg [animation-delay:0.35s]">
          The Solana NFT exchange returns — open source, by Piggy Gang.
        </p>

        <ul className="rise mt-6 flex flex-col items-center gap-1 font-mono text-xs text-ink-muted sm:flex-row sm:gap-3 [animation-delay:0.5s]">
          {TEASERS.map((teaser, index) => (
            <Fragment key={teaser}>
              {index > 0 && (
                <li aria-hidden="true" className="hidden text-brand sm:block">
                  ·
                </li>
              )}
              <li>{teaser}</li>
            </Fragment>
          ))}
        </ul>

        <div className="rise mt-8 flex flex-wrap items-center justify-center gap-3 [animation-delay:0.65s]">
          <a
            href={LINKS.x}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 items-center gap-2 rounded-full bg-brand px-5 text-sm font-medium text-canvas transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Icon path={ICONS.x} />
            Follow on X
          </a>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-medium transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Icon path={ICONS.discord} />
            Join the Discord
          </a>
        </div>
      </main>

      <footer className="fade border-t border-line [animation-delay:0.8s]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-5 py-4 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <p>
            Built in the open —{" "}
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              github.com/piggygang/alpha-art
            </a>
          </p>
          <a
            href={LINKS.hub}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            A Piggy Gang project
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}
