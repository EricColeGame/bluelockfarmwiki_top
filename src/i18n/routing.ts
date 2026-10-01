import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

// 最终支持的语言集合（唯一真相源）：English / 日本語 / Português / Español
export const locales = ["en", "ja", "pt", "es"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: siteConfig.defaultLocale as Locale,
  localePrefix: "always",
  localeDetection: false,
});
