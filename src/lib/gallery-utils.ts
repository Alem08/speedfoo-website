import type { GalleryImage } from "@/lib/gallery";

export const GALLERY_FOLDERS = ["Bilder", "Spielfelder", "www"] as const;
export type GalleryFolder = (typeof GALLERY_FOLDERS)[number];

export const GALLERY_PAGE_SIZE = 12;

export function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function isGalleryFolder(value: string): value is GalleryFolder {
  return (GALLERY_FOLDERS as readonly string[]).includes(value);
}

export function absoluteAssetUrl(siteUrl: string, src: string): string {
  const base = siteUrl.replace(/\/$/, "");
  return src.startsWith("http") ? src : `${base}${src}`;
}

export function filterGalleryImages(
  images: GalleryImage[],
  options: {
    folder?: GalleryFolder | "Alle";
    tag?: string | null;
    query?: string;
  }
): GalleryImage[] {
  const q = options.query?.trim().toLowerCase() ?? "";

  return images.filter((img) => {
    if (options.folder && options.folder !== "Alle" && img.folder !== options.folder) {
      return false;
    }
    if (options.tag && img.category !== options.tag) {
      return false;
    }
    if (!q) return true;
    const haystack = [img.alt, img.category, img.folder, img.slug, img.description]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
