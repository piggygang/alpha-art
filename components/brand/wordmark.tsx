import { ALPHA_D } from "@/components/alpha-glyph";

export function AlphaMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Thicker stroke than the hero: at header size the 8-unit stroke
          reads as hairline. */}
      <path
        d={ALPHA_D}
        fill="none"
        stroke="var(--brand)"
        strokeWidth={11}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* A <span>, not a Link: this is a single-screen site with nowhere to go. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <AlphaMark className="h-8 w-8" />
      <span className="text-lg font-semibold tracking-tight">
        alpha<span className="text-brand">.art</span>
      </span>
    </span>
  );
}
