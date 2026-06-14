import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
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
  const { footer, contact } = dict;

  const address = contact?.info?.address?.value ?? "";
  const email = contact?.info?.email?.value ?? "";
  const phone =
    contact?.info?.phone?.value ?? contact?.info?.landline?.value ?? contact?.info?.mobile?.value ?? "";
  const instagram = contact?.info?.instagram?.value ?? "";

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-xl text-foreground">{footer.name}</p>
            <p className="mt-2 text-sm tracking-widest text-muted">
              {footer.tagline}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              {address}
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
              {email ? (
                <a href={`mailto:${email}`} className="transition-colors hover:text-accent">
                  {email}
                </a>
              ) : null}
            </p>
            <p className="mt-2">{phone}</p>
            <p className="mt-2">{instagram}</p>
            <div className="mt-6 flex gap-5 text-xs uppercase tracking-wider">
              <span className="cursor-default">{footer.social.instagram}</span>
              <span className="cursor-default">{footer.social.twitter}</span>
              <span className="cursor-default">{footer.social.facebook}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-xs text-muted">
          <p>
            © {year} {footer.name}. {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
