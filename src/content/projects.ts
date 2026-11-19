export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  overview: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  coverGradient: string;
  gallery: { label: string; gradient: string }[];
};

export const projects: Project[] = [
  {
    slug: "northline",
    title: "Northline",
    year: "2026",
    category: "Product",
    overview:
      "A calm operations dashboard for logistics teams — clear hierarchy, dense data without noise, and a booking flow that feels effortless.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    liveUrl: "https://example.com/northline",
    githubUrl: "https://github.com/example/northline",
    coverGradient: "linear-gradient(145deg, #101820 0%, #1c2b3a 45%, #2f536a 100%)",
    gallery: [
      {
        label: "Cover",
        gradient: "linear-gradient(145deg, #101820 0%, #1c2b3a 45%, #2f536a 100%)",
      },
      {
        label: "Dashboard",
        gradient: "linear-gradient(160deg, #1c2b3a 0%, #3d5a73 55%, #c4a35a 100%)",
      },
      {
        label: "Detail",
        gradient: "linear-gradient(180deg, #2f536a 0%, #101820 100%)",
      },
    ],
  },
  {
    slug: "atelier-press",
    title: "Atelier Press",
    year: "2025",
    category: "Editorial",
    overview:
      "An independent magazine site with a brutalist type system, issue archives, and a reading experience tuned for long-form essays.",
    stack: ["React", "Next.js", "Tailwind"],
    liveUrl: "https://example.com/atelier-press",
    githubUrl: "https://github.com/example/atelier-press",
    coverGradient: "linear-gradient(135deg, #2d3436 0%, #636e72 40%, #dfe6e9 100%)",
    gallery: [
      {
        label: "Cover",
        gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 40%, #dfe6e9 100%)",
      },
      {
        label: "Issue grid",
        gradient: "linear-gradient(120deg, #b2bec3 0%, #2d3436 70%)",
      },
      {
        label: "Article",
        gradient: "linear-gradient(200deg, #dfe6e9 0%, #636e72 100%)",
      },
    ],
  },
  {
    slug: "signal-kit",
    title: "Signal Kit",
    year: "2025",
    category: "Developer tools",
    overview:
      "A lightweight status and alerting console for small teams — crisp mono UI, fast filters, and shareable incident timelines.",
    stack: ["TypeScript", "Node.js", "React", "Git"],
    liveUrl: "https://example.com/signal-kit",
    githubUrl: "https://github.com/example/signal-kit",
    coverGradient: "linear-gradient(150deg, #004d40 0%, #00796b 50%, #26a69a 100%)",
    gallery: [
      {
        label: "Cover",
        gradient: "linear-gradient(150deg, #004d40 0%, #00796b 50%, #26a69a 100%)",
      },
      {
        label: "Timeline",
        gradient: "linear-gradient(170deg, #263238 0%, #004d40 60%, #80cbc4 100%)",
      },
      {
        label: "Filters",
        gradient: "linear-gradient(210deg, #00695c 0%, #1de9b6 100%)",
      },
    ],
  },
];

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
