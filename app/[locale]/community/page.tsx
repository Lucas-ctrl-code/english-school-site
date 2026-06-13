import { PageHeader, Section, SectionTitle } from "@/components/ui/Section";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

type CommunityPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const { community } = dict;

  return (
    <>
      <PageHeader title={community.title} subtitle={community.subtitle} />

      <Section>
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted">
          {community.intro}
        </p>
      </Section>

      <Section className="bg-surface">
        <SectionTitle title={community.events.title} align="center" />
        <div className="grid gap-8 md:grid-cols-3">
          {community.events.items.map((event) => (
            <article
              key={event.title}
              className="rounded-2xl border border-border bg-background p-8"
            >
              <h3 className="font-serif text-xl text-foreground">{event.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle title={community.testimonials.title} align="center" />
        <div className="grid gap-8 md:grid-cols-3">
          {community.testimonials.items.map((item) => (
            <blockquote
              key={item.author}
              className="rounded-2xl border border-border p-8"
            >
              <p className="font-serif text-lg leading-relaxed text-foreground">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-accent">— {item.author}</footer>
            </blockquote>
          ))}
        </div>
      </Section>
    </>
  );
}
