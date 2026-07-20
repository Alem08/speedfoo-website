import { CtaLink } from "@/components/PagePrimitives";
import { homeContent, siteConfig } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: homeContent.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="mesh-bg relative min-h-[78vh] overflow-hidden text-paper">
        <div className="net-pattern absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
          <p className="animate-rise font-display text-5xl font-bold tracking-tight text-lime sm:text-7xl md:text-8xl">
            {siteConfig.name}
          </p>
          <h1 className="animate-rise-delay mt-6 max-w-3xl font-display text-2xl font-semibold leading-snug sm:text-4xl">
            {homeContent.heroTitle}
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-xl text-lg text-paper/80 sm:text-xl">
            {homeContent.heroSubtitle}
          </p>
          <div className="animate-rise-delay-2 mt-10 flex flex-wrap gap-3">
            {homeContent.ctas.map((cta) => (
              <CtaLink
                key={cta.label}
                href={cta.href}
                label={cta.label}
                variant={cta.variant}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <p className="text-lg leading-relaxed text-ink/85 sm:text-xl">
            {homeContent.description}
          </p>
        </div>
      </section>
    </>
  );
}
