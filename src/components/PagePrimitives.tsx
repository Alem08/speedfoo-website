import Link from "next/link";

type PageHeroProps = {
  title: string;
  header: string;
  dark?: boolean;
};

export function PageHero({ title, header, dark = true }: PageHeroProps) {
  return (
    <section
      className={`${
        dark ? "mesh-bg text-paper" : "bg-mist text-ink"
      } relative overflow-hidden`}
    >
      <div className="net-pattern absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p
          className={`animate-rise text-xs font-semibold uppercase tracking-[0.22em] ${
            dark ? "text-lime" : "text-field"
          }`}
        >
          {title}
        </p>
        <h1 className="animate-rise-delay mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">
          {header}
        </h1>
      </div>
    </section>
  );
}

type ContentBlockProps = {
  paragraphs: string[];
  children?: React.ReactNode;
};

export function ContentBlock({ paragraphs, children }: ContentBlockProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="space-y-5 text-lg leading-relaxed text-ink/85">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      {children}
    </section>
  );
}

type CtaLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function CtaLink({ href, label, variant = "primary" }: CtaLinkProps) {
  const styles = {
    primary:
      "bg-lime text-ink hover:bg-lime-deep cta-glow shadow-[0_10px_30px_rgba(198,245,61,0.25)]",
    secondary: "bg-ember text-paper hover:brightness-110",
    ghost: "border border-paper/40 text-paper hover:border-lime hover:text-lime",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${styles}`}
    >
      {label}
    </Link>
  );
}
