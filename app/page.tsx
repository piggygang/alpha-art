import { Fragment } from "react";
import { AlphaGlyph } from "@/components/alpha-glyph";
import { Wordmark } from "@/components/brand/wordmark";
import { Icon, ICONS } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { LINKS, TEASERS } from "@/lib/site";

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
            <Icon path={ICONS.x} className="h-4 w-4" />
            Follow on X
          </a>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-medium transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Icon path={ICONS.discord} className="h-4 w-4" />
            Join the Discord
          </a>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
