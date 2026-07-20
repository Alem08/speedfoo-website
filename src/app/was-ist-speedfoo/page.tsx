import { ContentBlock, PageHero } from "@/components/PagePrimitives";
import { wasIstContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: wasIstContent.title,
  description: wasIstContent.paragraphs.join(" "),
  path: "/was-ist-speedfoo",
});

export default function WasIstSpeedfooPage() {
  return (
    <>
      <PageHero title={wasIstContent.title} header={wasIstContent.header} />
      <ContentBlock paragraphs={wasIstContent.paragraphs} />
    </>
  );
}
