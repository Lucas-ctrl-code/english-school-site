import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function PageHeader({
  title,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Common Room
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-foreground lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 lg:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="font-serif text-3xl tracking-tight text-foreground lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-muted leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

type ButtonLinkProps = {
  locale: Locale;
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  locale,
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-dark"
      : "border border-border text-foreground hover:border-accent hover:text-accent";

  return (
    <Link href={localizedPath(locale, href)} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
