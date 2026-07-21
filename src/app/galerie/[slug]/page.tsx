import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  galleryImages,
  getGalleryImageBySlug,
} from "@/lib/gallery";
import { titleFromSlug } from "@/lib/gallery-utils";
import { createPageMetadata } from "@/lib/seo";

const BLUR_DATA_URL =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#eef6ea"/>
          <stop offset="50%" stop-color="#d5e8d4"/>
          <stop offset="100%" stop-color="#c6f53d" stop-opacity="0.35"/>
        </linearGradient>
        <filter id="b"><feGaussianBlur stdDeviation="2"/></filter>
      </defs>
      <rect width="24" height="18" fill="url(#g)" filter="url(#b)"/>
    </svg>`
  );

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return galleryImages.map((img) => ({ slug: img.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const image = getGalleryImageBySlug(slug);
  const title = titleFromSlug(slug);

  if (!image) {
    return createPageMetadata({
      title,
      description: "Dieses Galeriebild existiert nicht.",
      path: `/galerie/${slug}`,
    });
  }

  return createPageMetadata({
    title,
    description: image.description,
    path: `/galerie/${image.slug}`,
    image: image.src,
    type: "article",
  });
}

function BackToGalleryButton() {
  return (
    <Link
      href="/galerie"
      className="inline-flex items-center rounded-lg border border-field/20 bg-paper px-4 py-2 text-sm font-semibold text-ink transition hover:border-lime-deep hover:bg-mist"
    >
      ← Zurück zur Galerie
    </Link>
  );
}

export default async function GalerieDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const image = getGalleryImageBySlug(slug);

  if (!image) notFound();

  const pageTitle = titleFromSlug(image.slug);
  const index = galleryImages.findIndex((img) => img.slug === slug);
  const prev = index > 0 ? galleryImages[index - 1] : null;
  const next = index < galleryImages.length - 1 ? galleryImages[index + 1] : null;

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Galerie", href: "/galerie" },
          {
            label: image.folder,
            href: `/galerie/kategorie/${encodeURIComponent(image.folder)}`,
          },
          { label: pageTitle },
        ]}
      />

      <BackToGalleryButton />

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-lime-deep">
        <Link
          href={`/galerie/kategorie/${encodeURIComponent(image.folder)}`}
          className="hover:underline"
        >
          {image.category}
        </Link>
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
        {pageTitle}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/80">
        {image.description}
      </p>

      <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl border border-field/10 bg-mist sm:aspect-[16/10]">
        <Image
          src={image.src}
          alt={pageTitle}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-contain"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm">
        {prev ? (
          <Link href={`/galerie/${prev.slug}`} className="text-field hover:text-lime-deep">
            ← {titleFromSlug(prev.slug)}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/galerie/${next.slug}`} className="text-field hover:text-lime-deep">
            {titleFromSlug(next.slug)} →
          </Link>
        ) : (
          <span />
        )}
      </div>

      <div className="mt-10">
        <BackToGalleryButton />
      </div>
    </main>
  );
}
