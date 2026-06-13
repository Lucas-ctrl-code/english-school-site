import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageHeader, Section } from "@/components/ui/Section";
import { getGalleryImages } from "@/lib/images";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

type GalleryPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const images = getGalleryImages();

  return (
    <>
      <PageHeader title={dict.gallery.title} subtitle={dict.gallery.subtitle} />

      <Section>
        <GalleryGrid images={images} closeLabel={dict.gallery.close} />
      </Section>
    </>
  );
}
