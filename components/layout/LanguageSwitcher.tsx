import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localeNames } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

type LanguageSwitcherProps = {
  locale: Locale;
  currentPath: string;
};

export function LanguageSwitcher({
  locale,
  currentPath,
}: LanguageSwitcherProps) {
  const locales = Object.entries(localeNames) as [Locale, string][];

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-border bg-surface p-1"
      role="group"
      aria-label="Language"
    >
      {locales.map(([code, name]) => {
        const isActive = code === locale;
        return (
          <Link
            key={code}
            href={localizedPath(code, currentPath)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
              isActive
                ? "bg-accent text-white"
                : "text-muted hover:text-foreground"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
