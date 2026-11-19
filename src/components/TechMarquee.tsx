import { techStack } from "@/content/tech";
import { TechIcon } from "@/components/icons/TechIcons";

function MarqueeTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
      aria-hidden={ariaHidden || undefined}
    >
      {techStack.map((item) => (
        <li
          key={`${item.name}-${ariaHidden ? "dup" : "main"}`}
          className="flex items-center gap-3 whitespace-nowrap"
        >
          <TechIcon
            name={item.icon}
            className="h-7 w-7 text-ink-on-dark md:h-8 md:w-8"
          />
          <span className="font-body text-label uppercase tracking-[0.2em] text-ink-on-dark">
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-line-on-dark bg-bg-dark py-6 text-ink-on-dark md:py-8"
      aria-label="Tech stack"
    >
      <div className="pointer-events-none absolute inset-0 grain-dark opacity-40" aria-hidden />
      <div className="relative flex w-max marquee-track">
        <MarqueeTrack />
        <MarqueeTrack ariaHidden />
      </div>
    </section>
  );
}
