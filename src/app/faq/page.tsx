import { PageHero } from "@/components/PagePrimitives";
import { faqContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: faqContent.title,
  description: faqContent.header,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero title={faqContent.title} header={faqContent.header} />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="space-y-3">
          {faqContent.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-field/15 bg-paper px-5 py-4 open:border-lime-deep/40"
            >
              <summary className="cursor-pointer list-none font-display text-lg font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-lime-deep transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-ink/75">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
