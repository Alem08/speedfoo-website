import { ContentBlock, PageHero } from "@/components/PagePrimitives";
import { inklusionContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: inklusionContent.title,
  description: inklusionContent.paragraphs.join(" "),
  path: "/inklusion",
});

export default function InklusionPage() {
  return (
    <>
      <PageHero title={inklusionContent.title} header={inklusionContent.header} />
      <ContentBlock paragraphs={inklusionContent.paragraphs} />
    </>
  );
}
