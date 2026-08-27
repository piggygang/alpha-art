import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@PiggySolGang",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0710",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/* min-h-dvh, not h-full: the single-screen layout must fill exactly one
          viewport under mobile browser chrome, and degrade to scroll on tiny
          viewports rather than clip. Body is a flex column whose children must
          stay the header, main and footer. */}
      <body className="flex min-h-dvh flex-col font-sans">{children}</body>
    </html>
  );
}
