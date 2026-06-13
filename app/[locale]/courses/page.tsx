import { ButtonLink, PageHeader, Section } from "@/components/ui/Section";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

type CoursesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function CoursesPage({ params }: CoursesPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const { courses } = dict;

  return (
    <>
      <PageHeader title={courses.title} subtitle={courses.subtitle} />

      <Section>
        <div className="mb-12 flex flex-wrap gap-3">
          <span className="text-sm font-medium text-muted">{courses.levels.title}:</span>
          {courses.levels.items.map((level) => (
            <span
              key={level}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground"
            >
              {level}
            </span>
          ))}
        </div>

        <div className="space-y-8">
          {courses.items.map((course) => (
            <article
              key={course.title}
              className="grid gap-8 rounded-2xl border border-border p-8 lg:grid-cols-[1fr_auto] lg:items-start"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-serif text-2xl text-foreground">{course.title}</h2>
                  <span className="rounded-full bg-surface px-3 py-1 text-xs text-muted">
                    {course.level}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent">{course.duration}</p>
                <p className="mt-4 max-w-2xl text-muted leading-relaxed">
                  {course.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-border px-4 py-1.5 text-xs text-muted"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-foreground">{courses.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">{courses.cta.description}</p>
          <div className="mt-8">
            <ButtonLink locale={locale} href="/contact">
              {courses.cta.button}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
