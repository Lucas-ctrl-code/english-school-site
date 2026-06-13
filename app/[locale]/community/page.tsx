import Image from "next/image";
import { PageHeader, Section, SectionTitle } from "@/components/ui/Section";
import { COMMUNITY_PHOTOS } from "@/lib/images";
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

      <Section narrow>
        <p className="text-center text-lg leading-relaxed text-muted">
          {community.intro}
        </p>
      </Section>

      <Section className="bg-surface">
        <div className="space-y-6">
          {community.events.map((event, index) => (
            <article
              key={event.id}
              className="grid gap-6 rounded-xl border border-border bg-background p-8 shadow-sm md:grid-cols-[auto_1fr_auto] md:items-center"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface font-serif text-lg text-accent">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="font-serif text-2xl text-foreground">
                  {event.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {event.description}
                </p>
              </div>
              <p className="text-sm font-medium tracking-wide text-accent md:text-right">
                {event.schedule}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle title={community.photos.title} align="center" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {COMMUNITY_PHOTOS.map((src, index) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl shadow-sm ${
                index === 0 ? "col-span-2 aspect-[2/1] md:col-span-1 md:aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt={`${community.photos.title} ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
