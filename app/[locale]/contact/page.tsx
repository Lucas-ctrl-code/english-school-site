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
    contact.info.phone,
    contact.info.email,
    contact.info.instagram,
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
                  <dt className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
                    {item.label}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-foreground">
                    {item.label === contact.info.email.label ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : item.label === contact.info.instagram.label ? (
                      <a
                        href={`https://instagram.com/${item.value.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : item.label === contact.info.phone.label ? (
                      <a
                        href={`tel:${item.value.replace(/\s/g, "")}`}
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

            <div className="mt-12 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
              <div className="flex h-full flex-col items-center justify-center text-muted">
                <svg
                  className="mb-3 h-8 w-8 text-border"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <p className="text-sm font-medium">{contact.map.placeholder}</p>
                <p className="mt-1 max-w-xs px-6 text-center text-xs">
                  {contact.info.address.value}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
            <h2 className="mb-6 font-serif text-2xl text-foreground">
              {contact.cta}
            </h2>
            <ContactForm dict={contact.form} />
          </div>
        </div>
      </Section>
    </>
  );
}
