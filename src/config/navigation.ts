import type { LucideIcon } from "lucide-react";
import {
  Backpack,
  BookOpen,
  Coins,
  Compass,
  Gamepad2,
  Sparkles,
  Users,
} from "lucide-react";

export type NavItem = {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
};

// 导航分类来自关键词聚类产物，key 必须与 content/<locale>/ 的子目录名一致。
// key 是翻译键（en.json nav.<key>），path 是 URL。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "codes", path: "/codes", icon: Coins, isContentType: true },
  { key: "progression", path: "/progression", icon: Compass, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Sparkles, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "items", path: "/items", icon: Backpack, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
