import type { Locale } from "@/lib/i18n/config";

export function localizedPath(locale: Locale, path: string = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}
