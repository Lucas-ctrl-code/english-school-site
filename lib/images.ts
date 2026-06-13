export const GALLERY_IMAGE_COUNT = 13;

export function getGalleryImages() {
  return Array.from({ length: GALLERY_IMAGE_COUNT }, (_, i) => ({
    src: `/images/class${i + 1}.jpg`,
    alt: `Common Room Language Studio photo ${i + 1}`,
  }));
}

export const HERO_IMAGE = "/images/school1.jpg";
export const ABOUT_IMAGE = "/images/school2.jpg";

export const COMMUNITY_PHOTOS = [
  "/images/class3.jpg",
  "/images/class4.jpg",
  "/images/class5.jpg",
  "/images/class6.jpg",
  "/images/class7.jpg",
  "/images/class8.jpg",
] as const;
