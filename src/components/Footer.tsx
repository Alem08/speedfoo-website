import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-lime/15 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-lime">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-paper/75">
            Speedfoo® – {siteConfig.tagline}
            <br />
            {siteConfig.claim}
            <br />
            Mobil. Modular. Überall spielbar.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime/80">
            Navigation
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper/75 transition hover:text-lime"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime/80">
            Kontakt
          </p>
          <div className="mt-4 space-y-1 text-sm text-paper/75">
            <p>{siteConfig.team}</p>
            <p>{siteConfig.location}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-lime transition hover:text-paper"
            >
              {siteConfig.email}
            </a>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-lime/80">
            Social Media
          </p>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm">
            <li>
              <a
                href={siteConfig.social.instagram}
                className="text-paper/75 hover:text-lime"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.tiktok}
                className="text-paper/75 hover:text-lime"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.youtube}
                className="text-paper/75 hover:text-lime"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.linkedin}
                className="text-paper/75 hover:text-lime"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-paper/60 sm:px-6">
          {siteConfig.footerClaim}
        </p>
      </div>
    </footer>
  );
}
