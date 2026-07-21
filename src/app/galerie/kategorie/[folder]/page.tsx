import GalleryGrid from "@/components/GalleryGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from "next/navigation";
import { galleryByFolder, galleryImages } from "@/lib/gallery";
import {
  GALLERY_FOLDERS,
  isGalleryFolder,
  type GalleryFolder,
} from "@/lib/gallery-utils";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ folder: string }>;
};

export function generateStaticParams() {
  return GALLERY_FOLDERS.map((folder) => ({ folder }));
}

export async function generateMetadata({ params }: PageProps) {
  const { folder: raw } = await params;
  const folder = decodeURIComponent(raw);

  if (!isGalleryFolder(folder)) {
    return createPageMetadata({
      title: "Kategorie",
      description: "Galerie-Kategorie nicht gefunden.",
      path: `/galerie/kategorie/${raw}`,
    });
  }

  const images = galleryByFolder[folder];
  return createPageMetadata({
    title: `Galerie · ${folder}`,
    description: `Speedfoo-Galerie: ${images.length} Motive in der Kategorie ${folder}.`,
    path: `/galerie/kategorie/${encodeURIComponent(folder)}`,
    image: images[0]?.src ?? galleryImages[0]?.src,
  });
}

export default async function GalerieKategoriePage({ params }: PageProps) {
  const { folder: raw } = await params;
  const folder = decodeURIComponent(raw) as GalleryFolder;

  if (!isGalleryFolder(folder)) notFound();

  const count = galleryByFolder[folder].length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Galerie", href: "/galerie" },
          { label: folder },
        ]}
      />
      <h1 className="mb-2 font-display text-4xl font-bold">{folder}</h1>
      <p className="mb-8 text-ink/70">{count} Bilder in dieser Kategorie.</p>
      <GalleryGrid initialFolder={folder} hideFolderFilters />
    </main>
  );
}
