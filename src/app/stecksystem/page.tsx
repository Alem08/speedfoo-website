import { ContentBlock, PageHero } from "@/components/PagePrimitives";
import { stecksystemContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: stecksystemContent.title,
  description: stecksystemContent.paragraphs.join(" "),
  path: "/stecksystem",
});

export default function StecksystemPage() {
  return (
    <>
      <PageHero title={stecksystemContent.title} header={stecksystemContent.header} />
      <ContentBlock paragraphs={stecksystemContent.paragraphs}>
        <div className="mt-10 rounded-2xl border border-field/15 bg-field px-6 py-8 text-paper">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            {stecksystemContent.fieldSizeLabel}
          </p>
          <p className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            {stecksystemContent.fieldSize}
          </p>
        </div>
      </ContentBlock>
    </>
  );
}
