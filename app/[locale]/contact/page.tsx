import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader, Section } from "@/components/ui/Section";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const { contact } = dict;

  const infoItems = [
    contact.info.address,
    contact.info.email,
    contact.info.phone,
    contact.info.hours,
  ];

  return (
    <>
      <PageHeader title={contact.title} subtitle={contact.subtitle} />

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <dl className="space-y-8">
              {infoItems.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-foreground leading-relaxed">
                    {item.label === contact.info.email.label ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 rounded-2xl border border-border bg-surface p-8">
              <h2 className="font-serif text-xl text-foreground">
                {contact.access.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {contact.access.description}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border p-8">
            <ContactForm dict={contact.form} />
          </div>
        </div>
      </Section>
    </>
  );
}
