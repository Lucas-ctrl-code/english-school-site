export const locales = ["zh", "en", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  ja: "日本語",
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
