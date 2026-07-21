"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { galleryImages, type GalleryImage } from "@/lib/gallery";
import {
  filterGalleryImages,
  GALLERY_FOLDERS,
  GALLERY_PAGE_SIZE,
  type GalleryFolder,
} from "@/lib/gallery-utils";

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

function GalleryThumb({
  img,
  onOpen,
}: {
  img: GalleryImage;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="group overflow-hidden rounded-xl border border-field/10 bg-paper">
      <button
        type="button"
        onClick={onOpen}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-mist text-left"
        aria-label={`${img.alt} vergrößern`}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, (max-width: 1535px) 20vw, 16vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          onLoad={() => setLoaded(true)}
          className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${
            loaded ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
          }`}
        />
      </button>
      <figcaption className="px-3 py-2 text-sm text-ink/70">
        <Link
          href={`/galerie/kategorie/${encodeURIComponent(img.folder)}`}
          className="font-medium text-ink hover:text-lime-deep"
        >
          {img.category}
        </Link>
        <span className="mx-1.5 text-muted">·</span>
        <Link href={`/galerie/${img.slug}`} className="hover:text-lime-deep hover:underline">
          {img.alt}
        </Link>
      </figcaption>
    </figure>
  );
}

type GalleryGridProps = {
  initialFolder?: GalleryFolder;
  hideFolderFilters?: boolean;
};

export default function GalleryGrid({
  initialFolder = "Bilder",
  hideFolderFilters = false,
}: GalleryGridProps) {
  const [filter, setFilter] = useState<GalleryFolder>(initialFolder);
  const [tag, setTag] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [active, setActive] = useState<GalleryImage | null>(null);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);

  useEffect(() => {
    setFilter(initialFolder);
    setTag(null);
    setPage(1);
  }, [initialFolder]);

  const filtered = useMemo(
    () => filterGalleryImages(galleryImages, { folder: filter, tag, query }),
    [filter, tag, query]
  );

  const tags = useMemo(() => {
    const inFolder = galleryImages.filter((img) => img.folder === filter);
    return Array.from(new Set(inFolder.map((img) => img.category))).sort((a, b) =>
      a.localeCompare(b, "de")
    );
  }, [filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / GALLERY_PAGE_SIZE));

  const pageItems = useMemo(() => {
    const start = (page - 1) * GALLERY_PAGE_SIZE;
    return filtered.slice(start, start + GALLERY_PAGE_SIZE);
  }, [filtered, page]);

  useEffect(() => {
    setPage(1);
  }, [filter, tag, query]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  useEffect(() => {
    setLightboxLoaded(false);
  }, [active?.src]);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <div className="mb-4">
        <label className="sr-only" htmlFor="gallery-search">
          Galerie durchsuchen
        </label>
        <input
          id="gallery-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Suche nach Titel, Kategorie oder Tag…"
          className="w-full rounded-lg border border-field/20 bg-paper px-4 py-2.5 text-sm text-ink outline-none ring-lime-deep/40 placeholder:text-muted focus:ring-2"
        />
      </div>

      {!hideFolderFilters && (
        <div className="mb-4 flex flex-wrap gap-2">
          {GALLERY_FOLDERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setFilter(item);
                setTag(null);
              }}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                filter === item
                  ? "bg-field text-lime"
                  : "bg-mist text-ink/70 hover:bg-field/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTag(null)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
              tag === null
                ? "bg-ember/15 text-ember"
                : "bg-mist text-ink/60 hover:bg-field/10"
            }`}
          >
            Alle Tags
          </button>
          {tags.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTag(item)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                tag === item
                  ? "bg-ember/15 text-ember"
                  : "bg-mist text-ink/60 hover:bg-field/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <p className="mb-4 text-sm text-muted">
        {filtered.length} Ergebnis{filtered.length === 1 ? "" : "se"}
        {filtered.length > GALLERY_PAGE_SIZE
          ? ` · Seite ${page} von ${totalPages}`
          : null}
      </p>

      {pageItems.length === 0 ? (
        <p className="text-muted">Keine Bilder für diese Filter.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {pageItems.map((img) => (
            <GalleryThumb key={img.src} img={img} onOpen={() => setActive(img)} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-lg border border-field/20 px-3 py-1.5 text-sm font-medium disabled:opacity-40"
          >
            Zurück
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              className={`min-w-9 rounded-lg px-2.5 py-1.5 text-sm font-medium ${
                page === n ? "bg-field text-lime" : "bg-mist text-ink/70"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-lg border border-field/20 px-3 py-1.5 text-sm font-medium disabled:opacity-40"
          >
            Weiter
          </button>
        </div>
      )}

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 rounded-lg bg-lime px-4 py-2 text-sm font-semibold text-ink"
          >
            Schließen
          </button>

          <div
            className="relative flex h-[80vh] w-full max-w-5xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-0 flex-1">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                onLoad={() => setLightboxLoaded(true)}
                className={`object-contain transition duration-500 ease-out ${
                  lightboxLoaded ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
            </div>
            <Link
              href={`/galerie/${active.slug}`}
              className="mt-4 self-center rounded-lg bg-lime px-4 py-2 text-sm font-semibold text-ink"
              onClick={() => setActive(null)}
            >
              Zur Detailseite
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
