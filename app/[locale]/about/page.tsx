import { PageHeader, Section, SectionTitle } from "@/components/ui/Section";
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
      <PageHeader title={about.title} subtitle={about.subtitle} />

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-foreground lg:text-3xl">
              {about.story.title}
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              {about.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-full w-full max-w-md rounded-3xl border border-border bg-surface p-12">
              <p className="font-serif text-6xl text-accent/30">&ldquo;</p>
              <p className="mt-4 font-serif text-xl leading-relaxed text-foreground">
                {about.values.items[2].description}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionTitle title={about.values.title} align="center" />
        <div className="grid gap-8 md:grid-cols-3">
          {about.values.items.map((item) => (
            <article key={item.title} className="text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 text-accent">
                <span className="font-serif text-lg">✦</span>
              </div>
              <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle title={about.team.title} subtitle={about.team.description} />
      </Section>
    </>
  );
}
