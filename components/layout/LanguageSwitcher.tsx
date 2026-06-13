import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

type LanguageSwitcherProps = {
  locale: Locale;
  currentPath: string;
};

export function LanguageSwitcher({
  locale,
  currentPath,
}: LanguageSwitcherProps) {
  return (
    <nav
      className="flex items-center gap-2 text-sm"
      aria-label="Language"
    >
      {locales.map((code, index) => {
        const isActive = code === locale;
        return (
          <span key={code} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-border select-none" aria-hidden>
                |
              </span>
            )}
            <Link
              href={localizedPath(code, currentPath)}
              className={`transition-colors ${
                isActive
                  ? "font-medium text-foreground"
                  : "text-muted hover:text-accent"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {localeLabels[code]}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
