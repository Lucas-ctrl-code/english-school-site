"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/i18n/types";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const currentPath = getCurrentPath(pathname, locale);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/92 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href={localizedPath(locale)}
          className="group shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-serif text-base tracking-tight text-foreground transition-colors group-hover:text-accent lg:text-lg">
            Common Room
          </span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
            Language Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
          {navItems.map(({ key, path }) => (
            <Link
              key={key}
              href={localizedPath(locale, path)}
              className={`text-sm tracking-wide transition-colors hover:text-accent ${
                currentPath === path
                  ? "font-medium text-accent"
                  : "text-muted"
              }`}
            >
              {dict.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <LanguageSwitcher locale={locale} currentPath={currentPath} />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground xl:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
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
        <div className="border-t border-border bg-background px-6 py-6 xl:hidden">
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
          <div className="mt-6 border-t border-border pt-6">
            <LanguageSwitcher locale={locale} currentPath={currentPath} />
          </div>
        </div>
      )}
    </header>
  );
}
