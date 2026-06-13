import Image from "next/image";
import { ButtonLink, Section, SectionTitle } from "@/components/ui/Section";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CoursesPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale as any);
  const page = dict.courses.page;

  const chargePath = path.join(process.cwd(), "public", "images", "charge.jpg");
  const chargeExists = fs.existsSync(chargePath);
  const chargeSrc = chargeExists ? "/images/charge.jpg" : "/images/school5.jpg";

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            {page.hero.title}
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.35em] text-muted">
            {page.hero.subtitle}
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted">
            {page.hero.intro}
          </p>
        </div>
      </section>

      <Section>
        <SectionTitle title="" subtitle="" align="center" />
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.cards.map((c: any, idx: number) => (
              <article
                key={idx}
                className="rounded-xl border border-border bg-background p-6 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-xl text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.subtitle}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-muted">{c.duration}</div>
                  <div className="text-lg font-medium text-foreground">{c.price}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto px-6 py-12">
          <h2 className="font-serif text-2xl text-center text-foreground">{page.pricingTable.title}</h2>
          <p className="mt-2 text-center text-muted">{page.pricingTable.subtitle}</p>
          <div className="mx-auto mt-8 flex justify-center">
            <a href={chargeSrc} target="_blank" rel="noreferrer noopener" className="block">
              <div className="mx-auto max-w-5xl overflow-hidden rounded-xl shadow-lg">
                <Image src={chargeSrc} alt="Pricing table" width={1400} height={800} className="w-full h-auto object-cover" />
              </div>
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted">{page.pricingTable.note}</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-serif text-2xl text-center text-foreground">{page.learnerPass.title}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {page.learnerPass.plans.map((p: any, i: number) => (
              <div key={i} className="rounded-xl border border-border bg-background p-6 text-center shadow">
                <div className="text-sm text-muted">{p.name}</div>
                <div className="mt-4 text-2xl font-serif text-foreground">{p.price}</div>
                <div className="mt-2 text-sm text-muted">{p.credits}</div>
                <div className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h3 className="font-serif text-2xl text-foreground">{page.cta.title}</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{page.cta.description}</p>
          <div className="mt-8">
            <ButtonLink locale={locale} href={page.cta.href}>
              {page.cta.button}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

