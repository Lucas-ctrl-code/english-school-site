"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";

const htmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
  ja: "ja",
};

export function LocaleHtml({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
  }, [locale]);

  return null;
}
