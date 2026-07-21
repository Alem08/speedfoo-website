import GalleryGrid from "@/components/GalleryGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";
import { galleryImages } from "@/lib/gallery";

const preview = galleryImages[0]?.src;

export const metadata = createPageMetadata({
  title: "Media Galerie",
  description:
    "Erlebe Speedfoo in Aktion: Spielsequenzen, Trainingsausschnitte, Studio-Makroshots und Eventbilder.",
  path: "/galerie",
  image: preview,
});

export default function GaleriePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Galerie" },
        ]}
      />
      <h1 className="mb-8 font-display text-4xl font-bold">Media Galerie</h1>
      <GalleryGrid />
    </main>
  );
}
