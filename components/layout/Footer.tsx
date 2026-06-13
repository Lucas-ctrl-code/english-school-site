import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

const footerNav = [
  { key: "about" as const, path: "/about" },
  { key: "courses" as const, path: "/courses" },
  { key: "community" as const, path: "/community" },
  { key: "gallery" as const, path: "/gallery" },
  { key: "contact" as const, path: "/contact" },
];

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-foreground">Common Room</p>
            <p className="mt-1 text-sm text-muted">{dict.footer.tagline}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {dict.contact.info.address.value}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="space-y-3">
              {footerNav.map(({ key, path }) => (
                <li key={key}>
                  <Link
                    href={localizedPath(locale, path)}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm text-muted">
            <p>
              <a
                href={`mailto:${dict.contact.info.email.value}`}
                className="transition-colors hover:text-accent"
              >
                {dict.contact.info.email.value}
              </a>
            </p>
            <p className="mt-2">{dict.contact.info.phone.value}</p>
            <p className="mt-4 text-xs leading-relaxed">
              {dict.contact.info.hours.value}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Common Room Language Studio. {dict.footer.rights}
          </p>
          <div className="flex gap-6">
            <span>{dict.footer.links.privacy}</span>
            <span>{dict.footer.links.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
