import Image from "next/image";
import { ButtonLink, Section, SectionTitle } from "@/components/ui/Section";
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
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-32">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-accent">
              {home.hero.eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              {home.hero.title}
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
              {home.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink locale={locale} href="/courses">
                {home.hero.ctaPrimary}
              </ButtonLink>
              <ButtonLink locale={locale} href="/contact" variant="secondary">
                {home.hero.ctaSecondary}
              </ButtonLink>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
            <Image
              src="/images/class1.jpg"
              alt="Common Room Language Studio classroom"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <Section className="bg-surface">
        <SectionTitle title={home.features.title} align="center" />
        <div className="grid gap-8 md:grid-cols-3">
          {home.features.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-background p-8"
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
        <SectionTitle
          title={home.courses.title}
          subtitle={home.courses.subtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {home.courses.items.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-border"
            >
              <div className="relative aspect-[3/2] bg-surface">
                <Image
                  src={`/images/class${index + 2}.jpg`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink locale={locale} href="/courses" variant="secondary">
            {home.courses.link} →
          </ButtonLink>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle title={home.location.title} />
            <p className="-mt-8 max-w-md text-muted leading-relaxed">
              {home.location.description}
            </p>
            <p className="mt-6 text-sm font-medium text-accent">
              {home.location.address}
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src="/images/class6.jpg"
              alt={home.location.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-border bg-surface px-8 py-16 text-center lg:px-16">
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
