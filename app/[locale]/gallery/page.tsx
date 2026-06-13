import Image from "next/image";
import { PageHeader, Section } from "@/components/ui/Section";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

const GALLERY_COUNT = 13;

type GalleryPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const { gallery } = dict;

  const images = Array.from({ length: GALLERY_COUNT }, (_, i) => ({
    src: `/images/class${i + 1}.jpg`,
    alt: gallery.images[i]?.alt ?? `Gallery image ${i + 1}`,
  }));

  return (
    <>
      <PageHeader title={gallery.title} subtitle={gallery.subtitle} />

      <Section>
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <figure
              key={image.src}
              className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-border"
            >
              <div className="relative aspect-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={index % 3 === 0 ? 1000 : index % 3 === 1 ? 600 : 800}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
