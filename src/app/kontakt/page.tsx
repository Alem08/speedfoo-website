import { ContentBlock, PageHero } from "@/components/PagePrimitives";
import { kontaktContent, siteConfig } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: kontaktContent.title,
  description: kontaktContent.paragraphs.join(" "),
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <PageHero title={kontaktContent.title} header={kontaktContent.header} />
      <ContentBlock paragraphs={kontaktContent.paragraphs}>
        <div className="mt-10 rounded-2xl border border-field/15 bg-paper px-6 py-8 shadow-sm">
          <p className="font-display text-2xl font-bold text-ink">{siteConfig.team}</p>
          <p className="mt-2 text-ink/70">{siteConfig.location}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-block text-lg font-semibold text-ember hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>
      </ContentBlock>
    </>
  );
}
