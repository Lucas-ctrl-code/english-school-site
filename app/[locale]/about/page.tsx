import Image from "next/image";
import { PageHeader, Section, SectionTitle } from "@/components/ui/Section";
import { ABOUT_IMAGE } from "@/lib/images";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const { about } = dict;

  return (
    <>
      <PageHeader title={about.title} subtitle={about.subtitle} large />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-md">
            <Image
              src={ABOUT_IMAGE}
              alt={about.polyglot.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl text-foreground">
              {about.polyglot.title}
            </h2>
            <div className="mt-6 space-y-5 text-muted leading-relaxed">
              {about.polyglot.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionTitle title={about.values.title} align="center" />
        <div className="grid gap-8 md:grid-cols-3">
          {about.values.items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-background p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-accent">
                <span className="text-sm">✦</span>
              </div>
              <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
