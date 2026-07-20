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
      <ContentBlock paragraphs={mediaContent.paragraphs}>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {["Spielsequenzen", "Trainingsausschnitte", "Studio-Makroshots", "ISPO-Video (45s)"].map(
            (label) => (
              <div
                key={label}
                className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-field/25 bg-mist text-sm font-medium text-muted"
              >
                {label}
              </div>
            )
          )}
        </div>
      </ContentBlock>
    </>
  );
}
