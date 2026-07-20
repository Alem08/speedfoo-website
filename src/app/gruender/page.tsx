import { ContentBlock, PageHero } from "@/components/PagePrimitives";
import { gruenderContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: gruenderContent.title,
  description: gruenderContent.paragraphs.join(" "),
  path: "/gruender",
});

export default function GruenderPage() {
  return (
    <>
      <PageHero title={gruenderContent.title} header={gruenderContent.header} />
      <ContentBlock paragraphs={gruenderContent.paragraphs} />
    </>
  );
}
