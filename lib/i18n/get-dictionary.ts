import en from "@/src/locales/en.json";
import zh from "@/src/locales/zh.json";
import ja from "@/src/locales/ja.json";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, zh, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
