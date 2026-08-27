import { ImageResponse } from "next/og";
import { ALPHA_D } from "@/components/alpha-glyph";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* Full-bleed canvas background: iOS masks its own corners. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0710",
        }}
      >
        <svg width="132" height="132" viewBox="0 0 100 100">
          <path
            d={ALPHA_D}
            fill="none"
            stroke="#ff5fa2"
            strokeWidth={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
