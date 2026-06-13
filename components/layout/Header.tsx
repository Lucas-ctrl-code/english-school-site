"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

function getCurrentPath(pathname: string, locale: Locale): string {
  const prefix = `/${locale}`;
  if (pathname === prefix || pathname === `${prefix}/`) return "";
  return pathname.slice(prefix.length);
}

const navItems = [
  { key: "home" as const, path: "" },
  { key: "about" as const, path: "/about" },
  { key: "courses" as const, path: "/courses" },
  { key: "community" as const, path: "/community" },
  { key: "gallery" as const, path: "/gallery" },
  { key: "contact" as const, path: "/contact" },
];

export function Header({ locale, dict }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = getCurrentPath(pathname, locale);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-18 lg:px-8">
        <Link
          href={localizedPath(locale)}
          className="group flex flex-col"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-serif text-lg tracking-tight text-foreground transition-colors group-hover:text-accent lg:text-xl">
            Common Room
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            Language Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navItems.map(({ key, path }) => (
            <Link
              key={key}
              href={localizedPath(locale, path)}
              className={`text-sm transition-colors hover:text-accent ${
                currentPath === path
                  ? "font-medium text-accent"
                  : "text-muted"
              }`}
            >
              {dict.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher locale={locale} currentPath={currentPath} />
          <Link
            href={localizedPath(locale, "/contact")}
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            {dict.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M3 6h12M3 9h12M3 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                href={localizedPath(locale, path)}
                className={`text-base ${
                  currentPath === path
                    ? "font-medium text-accent"
                    : "text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {dict.nav[key]}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-4">
            <LanguageSwitcher locale={locale} currentPath={currentPath} />
            <Link
              href={localizedPath(locale, "/contact")}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-white"
              onClick={() => setMenuOpen(false)}
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
