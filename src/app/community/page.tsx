import { ContentBlock, PageHero } from "@/components/PagePrimitives";
import { communityContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: communityContent.title,
  description: communityContent.paragraphs.join(" "),
  path: "/community",
});

export default function CommunityPage() {
  return (
    <>
      <PageHero title={communityContent.title} header={communityContent.header} />
      <ContentBlock paragraphs={communityContent.paragraphs} />
    </>
  );
}
