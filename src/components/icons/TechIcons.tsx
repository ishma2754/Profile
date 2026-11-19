import type { TechIcon as TechMark } from "@/content/tech";

export function TechIcon({ icon, className }: { icon: TechMark; className?: string }) {
  const fill = `#${icon.hex}`;

  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label={icon.title}>
      <title>{icon.title}</title>
      <path d={icon.path} fill={fill} />
    </svg>
  );
}
