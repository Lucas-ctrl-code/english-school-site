import Image from "next/image";
import { ButtonLink, Section, SectionTitle } from "@/components/ui/Section";
import { HERO_IMAGE } from "@/lib/images";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const { home } = dict;

  return (
    <>
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Common Room Language Studio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/45" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center text-white lg:px-10">
          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            {home.hero.title}
          </h1>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.35em] text-white/85 sm:text-base">
            {home.hero.tagline}
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {home.hero.intro}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink locale={locale} href="/courses">
              {home.hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink locale={locale} href="/contact" variant="light">
              {home.hero.ctaSecondary}
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section className="bg-surface">
        <SectionTitle
          title={home.philosophy.title}
          subtitle={home.philosophy.description}
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {home.philosophy.items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-background p-8 shadow-sm"
            >
              <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle title={home.audience.title} align="center" />
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {home.audience.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border px-5 py-2.5 text-sm text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface">
        <div className="rounded-2xl border border-border px-8 py-16 text-center lg:px-20">
          <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
            {home.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">{home.cta.description}</p>
          <div className="mt-8">
            <ButtonLink locale={locale} href="/contact">
              {home.cta.button}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
