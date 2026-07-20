export const siteConfig = {
  name: "Speedfoo®",
  url: "https://www.speedfoo.com",
  email: "info@speedfoo.com",
  location: "Bochum, Deutschland",
  team: "Speedfoo® Team",
  tagline: "die neue hybride Trendsportart",
  claim: "Fußballtechnik × Netztaktik × Inklusion.",
  footerClaim: "Speedfoo® – einfach, dynamisch, inklusiv.",
  social: {
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/was-ist-speedfoo", label: "Was ist Speedfoo?" },
  { href: "/stecksystem", label: "Stecksystem" },
  { href: "/inklusion", label: "Inklusion" },
  { href: "/community", label: "Community" },
  { href: "/media", label: "Media" },
  { href: "/gruender", label: "Gründer" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/faq", label: "FAQ" },
] as const;

export const homeContent = {
  heroTitle: "Speedfoo® – die neue hybride Trendsportart",
  heroSubtitle: "Fußballtechnik × Netztaktik × Inklusion.",
  ctas: [
    { href: "/kontakt", label: "Jetzt Speedfoo testen", variant: "primary" as const },
    { href: "/kontakt", label: "Training oder Event anfragen", variant: "secondary" as const },
    { href: "/kontakt", label: "Kontakt aufnehmen", variant: "ghost" as const },
  ],
  description:
    "Speedfoo® kombiniert Fußballtechnik mit Netztaktik und schafft ein neues, dynamisches Small‑Sided‑Game für alle Altersgruppen und Leistungsstufen.",
};

export const wasIstContent = {
  title: "Was ist Speedfoo?",
  header: "Die neue Sportart, die Fußballtechnik mit Netztaktik verbindet.",
  paragraphs: [
    "Speedfoo ist eine hybride Trendsportart, die Elemente aus Fußball, Tennis und Small‑Sided‑Games vereint.",
    "Der Ball darf den Boden nicht berühren und muss über ein Netz gespielt werden.",
    "Technik, Präzision und Timing stehen im Mittelpunkt — nicht Kraft oder Geschwindigkeit.",
  ],
};

export const stecksystemContent = {
  title: "Stecksystem",
  header: "Modular. Mobil. In Sekunden aufgebaut.",
  paragraphs: [
    "Das Speedfoo‑Stecksystem ist vollständig modular, werkzeuglos und überall einsetzbar.",
    "Es passt in eine Tasche, ist leicht transportierbar und kann Indoor wie Outdoor aufgebaut werden.",
  ],
  fieldSizeLabel: "Spielfeldgröße",
  fieldSize: "12,80 m × 6,40 m",
};

export const inklusionContent = {
  title: "Inklusion",
  header: "Inklusiver Sport – validiert durch Special Olympics NRW.",
  paragraphs: [
    "Speedfoo wurde erfolgreich im Rahmen der Special Olympics NRW Unified‑Formate getestet.",
    "Die Sportart ist barrierearm, fördert Teamplay und ermöglicht faire Teilhabe für Menschen mit und ohne geistige Behinderung.",
  ],
};

export const communityContent = {
  title: "Community",
  header: "Sport für alle – Vereine, Schulen, Frauenmannschaft FC Bochum.",
  paragraphs: [
    "Speedfoo wächst als Community‑Sportart:",
    "Vereine, Schulen, Jugendgruppen, Förderschulen und die Frauenmannschaft des FC Bochum setzen Speedfoo bereits ein.",
    "Gemeinsam entsteht eine neue, inklusive Sportbewegung.",
  ],
};

export const mediaContent = {
  title: "Media",
  header: "Video, Bilder & Studio‑Makroshots.",
  paragraphs: [
    "Erlebe Speedfoo in Aktion:",
    "Spielsequenzen, Trainingsausschnitte, Studio‑Makroshots und das offizielle 45‑Sekunden‑ISPO‑Video.",
  ],
};

export const gruenderContent = {
  title: "Gründer",
  header: "Angesom Phil Tesfai – Gründer von Speedfoo®.",
  paragraphs: [
    "Angesom Phil Tesfai ist Sportinnovator aus Bochum und der kreative Kopf hinter Speedfoo®.",
    "Er entwickelt Sportkonzepte, Community‑Formate und inklusive Bewegungsangebote.",
  ],
};

export const kontaktContent = {
  title: "Kontakt",
  header: "Lass uns spielen. Lass uns kooperieren.",
  paragraphs: [
    "Du möchtest Speedfoo testen, ein Training buchen oder ein Event organisieren?",
    "Wir freuen uns auf deine Anfrage.",
  ],
};

export const faqContent = {
  title: "FAQ",
  header: "Häufige Fragen zu Speedfoo®.",
  items: [
    {
      question: "Was ist Speedfoo?",
      answer:
        "Speedfoo ist eine neue hybride Trendsportart, die Fußballtechnik mit Netztaktik kombiniert.",
    },
    {
      question: "Wie funktioniert das Spiel?",
      answer: "Der Ball darf den Boden nicht berühren und muss über das Netz gespielt werden.",
    },
    {
      question: "Für wen ist Speedfoo geeignet?",
      answer: "Für alle Altersgruppen, Vereine, Schulen und Special‑Olympics‑Athlet:innen.",
    },
    {
      question: "Ist Speedfoo inklusiv?",
      answer: "Ja, validiert durch Special Olympics NRW.",
    },
    {
      question: "Was macht das Stecksystem besonders?",
      answer: "Modular, mobil, werkzeuglos.",
    },
    {
      question: "Kann man Speedfoo überall spielen?",
      answer: "Ja, das Spielfeld passt in eine Tasche.",
    },
    {
      question: "Wie groß ist das Spielfeld?",
      answer: "12,80 m × 6,40 m.",
    },
    {
      question: "Wie kann ich Speedfoo ausprobieren?",
      answer: "Training, Event oder Kooperation.",
    },
    {
      question: "Gibt es ein offizielles Video?",
      answer: "Ja, das 45‑Sekunden‑ISPO‑Video.",
    },
    {
      question: "Wer hat Speedfoo gegründet?",
      answer: "Angesom Phil Tesfai.",
    },
    {
      question: "Wo finde ich weitere Infos?",
      answer: "www.speedfoo.com",
    },
  ],
};
