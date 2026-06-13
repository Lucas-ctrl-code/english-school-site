import { CourseIcon } from "@/components/courses/CourseIcon";
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.items.map((course) => (
            <article
              key={course.id}
              className="flex flex-col rounded-xl border border-border bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-surface text-accent">
                <CourseIcon id={course.id} />
              </div>
              <h2 className="font-serif text-xl text-foreground">{course.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {course.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted">{courses.note}</p>
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
