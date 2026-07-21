import fs from "fs";
import path from "path";

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, acc);
    } else if (/\.(jpe?g|png|webp|gif)$/i.test(entry.name)) {
      acc.push(full);
    }
  }
  return acc;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function buildDescription({ alt, category, folder }) {
  const title = alt && !/^\d+$/.test(alt.trim()) ? alt : category;
  if (folder === "www") {
    return `Offizielles Speedfoo-Motiv "${title}" aus dem Marken- und Logo-Fundus (Kategorie: ${category}).`;
  }
  if (folder === "Spielfelder") {
    return `Darstellung des Speedfoo-Spielfelds "${title}" – modular, mobil und fuer Indoor wie Outdoor geeignet (Kategorie: ${category}).`;
  }
  return `Speedfoo-Moment "${title}" aus der Kategorie ${category}: Einblicke in Training, Events und inklusive Community-Formate der hybriden Trendsportart.`;
}

const roots = ["Bilder", "Spielfelder", "www"];
const files = [];
const usedSlugs = new Set();

for (const root of roots) {
  for (const file of walk(root)) {
    const rel = file.split(path.sep).join("/");
    const parts = rel.split("/");
    const category = parts.length > 2 ? parts[1] : parts[0];
    const alt = path.basename(file, path.extname(file)).replace(/[_]+/g, " ");
    const src = "/" + parts.map(encodeURIComponent).join("/");

    let base = slugify(`${root}-${category}-${alt}`) || slugify(path.basename(file, path.extname(file))) || "bild";
    let slug = base;
    let n = 2;
    while (usedSlugs.has(slug)) {
      slug = `${base}-${n}`;
      n += 1;
    }
    usedSlugs.add(slug);

    const description = buildDescription({ alt, category, folder: root });
    files.push({ src, alt, category, folder: root, slug, description });
  }
}

fs.mkdirSync("src/lib", { recursive: true });

const body = JSON.stringify(files, null, 2);
const out = `export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  folder: string;
  slug: string;
  description: string;
};

export const galleryImages: GalleryImage[] = ${body};

export const galleryByFolder = {
  Bilder: galleryImages.filter((i) => i.folder === "Bilder"),
  Spielfelder: galleryImages.filter((i) => i.folder === "Spielfelder"),
  www: galleryImages.filter((i) => i.folder === "www"),
} as const;

export function getGalleryImageBySlug(slug: string): GalleryImage | undefined {
  return galleryImages.find((img) => img.slug === slug);
}
`;

fs.writeFileSync("src/lib/gallery.ts", out, "utf8");

console.log("total", files.length);
for (const root of roots) {
  console.log(root, files.filter((f) => f.folder === root).length);
}
