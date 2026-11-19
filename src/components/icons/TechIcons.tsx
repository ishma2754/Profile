import type { JSX } from "react";
import type { TechIconKey } from "@/content/tech";

type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function TechIcon({
  name,
  className,
}: {
  name: TechIconKey;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} />;
}

function ReactIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" {...stroke} />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(60 12 12)"
        {...stroke}
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(120 12 12)"
        {...stroke}
      />
    </svg>
  );
}

function NextIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" {...stroke} />
      <path d="M8 16V8l8 8V8" {...stroke} />
    </svg>
  );
}

function TypeScriptIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" {...stroke} />
      <path d="M8 10h8M12 10v7" {...stroke} />
    </svg>
  );
}

function TailwindIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M4 12c2-5 4-7 6-7 2 0 3 2 4 2s2.5-2 4-2c2 0 3.5 2 4 5-1.5 4-3.5 6-5.5 6-2 0-3-2-4.5-2S7.5 16 6 16c-1.5 0-2.5-1.5-2-4Z"
        {...stroke}
      />
    </svg>
  );
}

function NodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z"
        {...stroke}
      />
      <path d="M12 12v9" {...stroke} />
    </svg>
  );
}

function GitIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="6" cy="6" r="2" {...stroke} />
      <circle cx="18" cy="12" r="2" {...stroke} />
      <circle cx="6" cy="18" r="2" {...stroke} />
      <path d="M6 8v8M6 12h10" {...stroke} />
    </svg>
  );
}

function FigmaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M9 3h3v6H9a3 3 0 0 1 0-6Z" {...stroke} />
      <path d="M12 3h3a3 3 0 0 1 0 6h-3V3Z" {...stroke} />
      <path d="M9 9h3v6H9a3 3 0 0 1 0-6Z" {...stroke} />
      <path d="M12 9h3a3 3 0 1 1 0 6h-3V9Z" {...stroke} />
      <path d="M9 15h3v3a3 3 0 1 1-3-3Z" {...stroke} />
    </svg>
  );
}

const icons: Record<TechIconKey, (props: IconProps) => JSX.Element> = {
  react: ReactIcon,
  nextjs: NextIcon,
  typescript: TypeScriptIcon,
  tailwind: TailwindIcon,
  nodejs: NodeIcon,
  git: GitIcon,
  figma: FigmaIcon,
};
