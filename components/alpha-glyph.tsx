/* A single continuous stroke: the pen enters at the top-right tip, sweeps
   down-left into the closed loop, and exits through the same crossing point
   P(64,54) out to the bottom-right tail — so the draw-in animation reads as
   one pen stroke, and the self-crossing gives natural overlap via round caps. */
export const ALPHA_D =
  "M 87 18 C 79 25, 70 40, 64 54 C 61 61, 52 81, 36 81 " +
  "C 21 81, 11 68, 11 51 C 11 35, 21 22, 38 22 " +
  "C 52 22, 58 41, 64 54 C 67 60, 76 74, 88 83";

export function AlphaGlyph({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      /* overflow-visible: the glow's 14px blur must not clip at the viewBox. */
      className={`overflow-visible ${className ?? ""}`}
      aria-hidden="true"
      focusable="false"
    >
      {/* Two plain paths sharing a d, deliberately not <defs>/<use>: dash
          animation through a shadow tree has inheritance edge cases. The
          wrapper <g> fades the glow in once; the path itself breathes. */}
      <g className="alpha-glow-wrap">
        <path
          className="alpha-glow"
          d={ALPHA_D}
          pathLength={1}
          fill="none"
          stroke="var(--brand)"
          strokeWidth={9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        className="alpha-stroke"
        d={ALPHA_D}
        pathLength={1}
        fill="none"
        stroke="var(--brand)"
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
