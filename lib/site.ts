export const SITE = {
  name: "alpha.art",
  url: "https://alpha.art",
  title: "alpha.art — the Solana NFT marketplace, returning as open source",
  description:
    "alpha.art is coming back — an open-source Solana NFT exchange with listings, offers and NFT-for-NFT swaps, and zero fees for Piggy holders. Built in the open by Piggy Gang.",
} as const;

/* Same targets as the piggygang.net hub site's footer (../website lib/site.ts)
   so the whole gang points at one X handle, one Discord invite, one org. */
export const LINKS = {
  x: "https://x.com/PiggySolGang",
  discord: "https://discord.gg/8SjGR8Srvz",
  github: "https://github.com/piggygang",
  hub: "https://piggygang.net",
} as const;

export type Social = {
  label: string;
  href: string;
  /** Key into ICONS in components/icons.tsx */
  icon: "x" | "discord" | "github";
};

export const SOCIALS: Social[] = [
  { label: "X", href: LINKS.x, icon: "x" },
  { label: "Discord", href: LINKS.discord, icon: "discord" },
  { label: "GitHub", href: LINKS.github, icon: "github" },
];

export const TEASERS = [
  "Open-source exchange",
  "Listings, offers & NFT-for-NFT swaps",
  "Zero fees for Piggy holders",
] as const;
