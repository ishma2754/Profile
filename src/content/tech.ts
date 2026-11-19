export type TechItem = {
  name: string;
  icon: TechIconKey;
};

export type TechIconKey =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "nodejs"
  | "git"
  | "figma";

export const techStack: TechItem[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
];
