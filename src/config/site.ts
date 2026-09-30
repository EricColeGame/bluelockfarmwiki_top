export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Blue Lock Farm Wiki",
  shortName: "Blue Lock Farm",
  logoText: "BL",
  tagline: "Codes, Characters, Lockers & Farming Guides",
  description: "Your ultimate guide to Blue Lock Farm on Roblox! Explore active working codes, unlockable Blue Lock characters, locker upgrades, money farming strategies, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bluelockfarmwiki.top",
  supportEmail: "support@bluelockfarmwiki.top",
  gameUrl: "https://www.roblox.com/games/132767904294856/Blue-Lock-Farm",
  heroVideoId: "I3J-VvRn_qY", // Blue Lock Farm (Roblox) gameplay showcase
  social: {
    discord: "https://www.roblox.com/groups/425964032/Finding-Illusions",
    youtube: "https://www.youtube.com/results?search_query=Blue+Lock+Farm+Roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
