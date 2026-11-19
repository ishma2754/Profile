import {
  siAuth0,
  siEthereum,
  siEthers,
  siExpress,
  siFastapi,
  siGit,
  siJavascript,
  siJest,
  siJsonwebtokens,
  siKotlin,
  siMongodb,
  siMui,
  siNextdotjs,
  siNodedotjs,
  siOpenapiinitiative,
  siPostgresql,
  siPrisma,
  siReact,
  siRedux,
  siTailwindcss,
  siTurborepo,
  siTypescript,
  siVite,
  siWeb3dotjs,
  type SimpleIcon,
} from "simple-icons";

export type TechIcon = Pick<SimpleIcon, "title" | "path" | "hex">;

export type TechItem = {
  name: string;
  icon: TechIcon;
};

/** Official Playwright mark — not yet in simple-icons. */
const playwright: TechIcon = {
  title: "Playwright",
  hex: "2EAD33",
  path: "M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 0 1-.171.049Zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z",
};

/** SQL has no brand mark; use the official PostgreSQL elephant for the skill. */
const sql: TechIcon = {
  title: "SQL",
  hex: siPostgresql.hex,
  path: siPostgresql.path,
};

/** Server-Sent Events has no brand mark; use the Node.js mark. */
const sse: TechIcon = {
  title: "SSE",
  hex: siNodedotjs.hex,
  path: siNodedotjs.path,
};

/** RBAC has no brand mark; use the Auth0 mark used for access control. */
const rbac: TechIcon = {
  title: "RBAC",
  hex: siAuth0.hex,
  path: siAuth0.path,
};

export const techStack: TechItem[] = [
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "SQL", icon: sql },
  { name: "Kotlin", icon: siKotlin },
  { name: "React Native", icon: siReact },
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Redux Toolkit", icon: siRedux },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Material UI", icon: siMui },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Express.js", icon: siExpress },
  { name: "FastAPI", icon: siFastapi },
  { name: "REST APIs", icon: siOpenapiinitiative },
  { name: "SSE", icon: sse },
  { name: "Ethers.js", icon: siEthers },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MongoDB", icon: siMongodb },
  { name: "Prisma", icon: siPrisma },
  { name: "Git", icon: siGit },
  { name: "Turborepo", icon: siTurborepo },
  { name: "Vite", icon: siVite },
  { name: "Playwright", icon: playwright },
  { name: "Jest", icon: siJest },
  { name: "JWT", icon: siJsonwebtokens },
  { name: "OAuth 2.0", icon: siAuth0 },
  { name: "RBAC", icon: rbac },
  { name: "Web3", icon: siWeb3dotjs },
  { name: "Ethereum", icon: siEthereum },
];

export const techGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "SQL", "Kotlin"],
  },
  {
    label: "Frontend and mobile",
    items: ["React Native", "React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Material UI"],
  },
  {
    label: "Backend and APIs",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "SSE", "Ethers.js"],
  },
  {
    label: "Data and tooling",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Git", "Turborepo", "Vite"],
  },
  {
    label: "Testing and security",
    items: ["Playwright", "Jest", "JWT", "OAuth 2.0", "RBAC", "Web3", "Ethereum"],
  },
] as const;
