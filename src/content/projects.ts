export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  overview: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: ProjectImage[];
  coverGradient: string;
  gallery: { label: string; gradient: string }[];
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function shot(src: string, width: number, height: number, alt: string): ProjectImage {
  return { src: `${basePath}${src}`, width, height, alt };
}

/** Stand-in stills until Stream All has its own set. */
const sharedShots = [
  shot(
    "/projects/shot-1.jpg",
    1024,
    534,
    "Dark marketing homepage with a large headline and a tilted product dashboard",
  ),
  shot(
    "/projects/shot-2.jpg",
    1024,
    534,
    "Dark marketing section with company names and the headline Built for Fast Moving Teams",
  ),
  shot(
    "/projects/shot-3.jpg",
    1024,
    534,
    "Dark product section showing an audit trail and role-based access",
  ),
];

export const projects: Project[] = [
  {
    slug: "journey-miles",
    title: "Journey Miles",
    year: "2026",
    category: "Mobile",
    overview:
      "A React Native bus-booking app with trip search, an interactive seat map, and ticket confirmation with PNR details.",
    highlights: [
      "Integrated REST APIs using a shared Fetch client for bus search, seat availability, and booking. Handled loading states and displayed API errors in the UI.",
      "Persisted access and refresh tokens with MMKV and implemented automatic token refresh and request retry for expired sessions.",
      "Used React Navigation’s native stack to connect trip search, bus details, seat selection, and sign-in screens.",
      "Set up Jest and React Test Renderer for a basic app-rendering smoke test.",
      "Published Journey Miles to Google Play by building and signing a release Android App Bundle with Gradle.",
    ],
    stack: [
      "React Native",
      "TypeScript",
      "NativeWind",
      "React Navigation",
      "MMKV",
      "Fetch API",
      "REST APIs",
      "Jest",
      "Gradle",
    ],
    images: [
      shot("/projects/journey-miles-1.jpg", 509, 1024, "Journey Miles screen for booking a bus from Lucknow to Mumbai"),
      shot("/projects/journey-miles-2.jpg", 509, 1024, "Journey Miles destination city picker"),
      shot("/projects/journey-miles-3.jpg", 509, 1024, "Journey Miles date picker open on November 2026"),
      shot("/projects/journey-miles-4.jpg", 509, 1024, "Journey Miles list of buses from Lucknow to Mumbai"),
      shot("/projects/journey-miles-5.jpg", 509, 1024, "Journey Miles seat map for a Lucknow to Mumbai bus"),
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.journeymiles",
    githubUrl: "https://github.com/Nazish1712/BusBooking-",
    coverGradient: "linear-gradient(160deg, #fff 0%, #f3f4f6 40%, #e11d48 100%)",
    gallery: [
      {
        label: "Search",
        gradient: "linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%)",
      },
      {
        label: "Seats",
        gradient: "linear-gradient(180deg, #ffffff 0%, #16a34a 100%)",
      },
    ],
  },
  {
    slug: "urban-stay",
    title: "Urban Stay",
    year: "2025",
    category: "Product",
    overview:
      "A property rental app with search, filters, and a booking flow that keeps the user’s place across sessions.",
    highlights: [
      "Responsive SPA with React Router and a glassmorphism interface.",
      "Debounced search, auto-suggestions, and filters backed by mock APIs.",
      "Booking state in Redux Toolkit, persisted with localStorage.",
      "Images on Cloudinary, custom hooks, and shimmer loading states.",
    ],
    stack: ["React", "Redux Toolkit", "Tailwind", "React Router", "Cloudinary"],
    images: [
      shot("/projects/urban-stay-1.jpg", 1024, 528, "Urban Stay homepage with the rental search preview"),
      shot("/projects/urban-stay-2.jpg", 1024, 528, "Urban Stay grid of homes available to book"),
      shot("/projects/urban-stay-3.jpg", 1024, 528, "Urban Stay detail page for Palm Residency in Jaipur"),
    ],
    liveUrl: "https://urban-stay-six.vercel.app",
    githubUrl: "https://github.com/Nazish1712/Urban-Stay",
    coverGradient: "linear-gradient(145deg, #101820 0%, #1c2b3a 45%, #2f536a 100%)",
    gallery: [
      {
        label: "Cover",
        gradient: "linear-gradient(145deg, #101820 0%, #1c2b3a 45%, #2f536a 100%)",
      },
      {
        label: "Search",
        gradient: "linear-gradient(160deg, #1c2b3a 0%, #3d5a73 55%, #c4a35a 100%)",
      },
      {
        label: "Booking",
        gradient: "linear-gradient(180deg, #2f536a 0%, #101820 100%)",
      },
    ],
  },
  {
    slug: "stream-all",
    title: "Stream All",
    year: "2025",
    category: "Product",
    overview:
      "A video streaming app on the YouTube Data API, with playback, search, live chat, and nested comments.",
    highlights: [
      "Embedded playback, dynamic search, and saved videos in localStorage.",
      "Live chat through polling, capped so frequent updates stay smooth.",
      "Debounced search and URL params so suggestions skip extra requests.",
      "Collapsible comment threads animated with Framer Motion.",
    ],
    stack: ["React", "Redux Toolkit", "Tailwind", "YouTube API", "Framer Motion"],
    images: sharedShots,
    liveUrl: "https://stream-all-nine.vercel.app",
    githubUrl: "https://github.com/Nazish1712/StreamALL",
    coverGradient: "linear-gradient(150deg, #1a1024 0%, #3d1f4a 48%, #c45c26 100%)",
    gallery: [
      {
        label: "Cover",
        gradient: "linear-gradient(150deg, #1a1024 0%, #3d1f4a 48%, #c45c26 100%)",
      },
      {
        label: "Player",
        gradient: "linear-gradient(170deg, #120c18 0%, #5c2e1a 60%, #e8d5c4 100%)",
      },
      {
        label: "Chat",
        gradient: "linear-gradient(200deg, #3d1f4a 0%, #1a1024 100%)",
      },
    ],
  },
  {
    slug: "space-explore",
    title: "Space Explore",
    year: "2025",
    category: "Multi-page",
    overview:
      "A space tourism site translated from Figma into a responsive multi-page app, with motion between routes.",
    highlights: [
      "React Router navigation across destination, crew, and technology pages.",
      "Fluid Framer Motion transitions on a layout built for small and large screens.",
      "WebP images for a lighter page. Featured in a Frontend Mentor retweet.",
    ],
    stack: ["React", "Tailwind", "Framer Motion", "React Router"],
    images: [
      shot("/projects/space-explore-1.jpg", 1024, 528, "Space Explore homepage with the Explore button over Earth"),
      shot("/projects/space-explore-2.jpg", 1024, 528, "Space Explore destination page for the Moon"),
      shot("/projects/space-explore-3.jpg", 1024, 528, "Space Explore crew page introducing Douglas Hurley"),
    ],
    liveUrl: "https://space-explore-eta.vercel.app",
    githubUrl: "https://github.com/Nazish1712/Space-explore",
    coverGradient: "linear-gradient(135deg, #0b1020 0%, #1e3a5f 45%, #d7c4a3 100%)",
    gallery: [
      {
        label: "Cover",
        gradient: "linear-gradient(135deg, #0b1020 0%, #1e3a5f 45%, #d7c4a3 100%)",
      },
      {
        label: "Destination",
        gradient: "linear-gradient(120deg, #142033 0%, #0b1020 70%)",
      },
      {
        label: "Crew",
        gradient: "linear-gradient(200deg, #d7c4a3 0%, #1e3a5f 100%)",
      },
    ],
  },
  {
    slug: "agent-flow",
    title: "Agent Flow",
    year: "2025",
    category: "Marketing",
    overview:
      "A SaaS marketing page with 3D perspective, gradient masks, and a design system that switches between light and dark.",
    highlights: [
      "Animated navigation with perspective transforms and masked gradients.",
      "Light and dark themes through next-themes and oklch color tokens.",
    ],
    stack: ["React", "Tailwind", "Framer Motion", "next-themes"],
    images: [
      shot("/projects/agent-flow-1.jpg", 1024, 528, "Agent Flow homepage with the headline and a tilted product dashboard"),
      shot("/projects/agent-flow-2.jpg", 1024, 528, "Agent Flow feature cards for workflows, handoff, and approvals"),
      shot("/projects/agent-flow-3.jpg", 1024, 528, "Agent Flow audit trail and role-based access section"),
      shot("/projects/agent-flow-4.jpg", 1024, 528, "Agent Flow section titled Built for Speed Designed for Scale"),
    ],
    liveUrl: "https://agentflow-marketing-template.vercel.app",
    githubUrl: "https://github.com/Nazish1712/agentflow-marketing-template",
    coverGradient: "linear-gradient(150deg, #101410 0%, #1f3d32 50%, #9dbe7c 100%)",
    gallery: [
      {
        label: "Cover",
        gradient: "linear-gradient(150deg, #101410 0%, #1f3d32 50%, #9dbe7c 100%)",
      },
      {
        label: "Hero",
        gradient: "linear-gradient(170deg, #0e1410 0%, #24382c 55%, #e7e2d6 100%)",
      },
      {
        label: "Theme",
        gradient: "linear-gradient(210deg, #1f3d32 0%, #101410 100%)",
      },
    ],
  },
];

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
