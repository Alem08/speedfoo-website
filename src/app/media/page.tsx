import GalleryGrid from "@/components/GalleryGrid";
import { ContentBlock, PageHero } from "@/components/PagePrimitives";
import { mediaContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: mediaContent.title,
  description: mediaContent.paragraphs.join(" "),
  path: "/media",
});

export default function MediaPage() {
  return (
    <>
      <PageHero title={mediaContent.title} header={mediaContent.header} />
      <ContentBlock paragraphs={mediaContent.paragraphs} />
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <GalleryGrid />
      </section>
    </>
  );
}
