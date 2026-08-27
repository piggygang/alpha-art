import { Icon, ICONS } from "@/components/icons";
import { LINKS, SOCIALS } from "@/lib/site";

/* The hub site's footer (../website components/site-footer.tsx) — line left,
   icon row right — compacted vertically: this footer shares one no-scroll
   viewport with the hero, so the hub's py-10 would blow the 390×664 budget. */
export function SiteFooter() {
  return (
    <footer className="fade border-t border-line [animation-delay:0.8s]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-5 py-4 sm:flex-row sm:justify-between sm:py-5">
        <p className="text-center text-sm text-ink-muted sm:text-left">
          Built in the open — a{" "}
          <a
            href={LINKS.hub}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Piggy Gang
          </a>{" "}
          project.
        </p>

        <ul className="flex items-center gap-3">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Icon path={ICONS[social.icon]} className="h-[18px] w-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
