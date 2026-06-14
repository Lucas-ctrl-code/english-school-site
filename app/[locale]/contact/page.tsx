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
    contact.info.landline,
    contact.info.mobile,
    contact.info.line,
  ];
  const emailLabel = contact.info.email?.label;
  const instagramLabel = contact.info.instagram?.label;
  const phoneLabel = contact.info.phone?.label;
  const mapPlaceholder = contact.location?.mapPlaceholder ?? "";

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
                    {item.label === emailLabel ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : item.label === instagramLabel ? (
                      <a
                        href={`https://instagram.com/${item.value.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : item.label === phoneLabel ? (
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
                <p className="text-sm font-medium">{mapPlaceholder}</p>
                <p className="mt-1 max-w-xs px-6 text-center text-xs">
                  {contact.info.address.value}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
                {contact.cardTitle}
              </h3>
              <dl className="space-y-4 text-foreground">
                {infoItems.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
                      {item.label}
                    </dt>
                    <dd className="mt-1 leading-relaxed">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
              <h2 className="mb-4 font-serif text-2xl text-foreground">{contact.lineSection.title}</h2>
              <p className="mb-6 text-sm text-foreground">{contact.lineSection.description}</p>
              <div className="flex justify-center">
                <img
                  src="/images/line-qr.jpg"
                  alt="LINE QR"
                  className="max-w-[300px] rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium text-foreground">{contact.location.title}</h3>
              <p className="mb-4 text-foreground whitespace-pre-line">{contact.location.address}</p>
              <div className="aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
                <div className="flex h-full items-center justify-center text-muted">Google Maps iframe placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
