import { ImageResponse } from "next/og";
import { ALPHA_D } from "@/components/alpha-glyph";
import { SITE } from "@/lib/site";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Rendered once at build time (no dynamic APIs used), served as a static PNG.
   Satori constraints: literal hex only (no CSS vars), explicit display:flex on
   every multi-child div. The wide translucent stroke under the α fakes the
   page's glow — satori has no blur filter. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          background: "#0b0710",
          color: "#f7f1f6",
        }}
      >
        <svg width="230" height="230" viewBox="0 0 100 100">
          <path
            d={ALPHA_D}
            fill="none"
            stroke="#ff5fa2"
            strokeWidth={16}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.25}
          />
          <path
            d={ALPHA_D}
            fill="none"
            stroke="#ff5fa2"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 600 }}>
          alpha<span style={{ color: "#ff5fa2" }}>.art</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#a99cb0" }}>
          coming back — open source · zero fees for Piggy holders
        </div>
      </div>
    ),
    size,
  );
}
