import { BoxLabel } from "@/components/BoxLabel";
import { TechIcon } from "@/components/icons/TechIcons";
import { techStack } from "@/content/tech";

export function TechBanner() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="relative border-b border-line">
      <BoxLabel>Stack</BoxLabel>
      <div className="px-section-x pb-10 pt-6 md:px-section-x-lg md:pb-12 md:pt-8">
        <h2
          id="stack-heading"
          className="max-w-[16ch] font-body text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
        >
          This is how I <span className="text-ink-muted">design &amp; build,</span> every day.
        </h2>
        <p className="mt-4 max-w-xl font-body text-body leading-relaxed text-ink-muted">
          Languages, frameworks, data, and the tools behind the products at EmerTech.
        </p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {techStack.map((item) => (
            <li key={item.name} className="w-[6.75rem] sm:w-[7.5rem]">
              <div className="flex aspect-square items-center justify-center border border-[#e4d8b4] bg-white p-4">
                <TechIcon icon={item.icon} className="h-[3.5rem] w-[3.5rem]" />
              </div>
              <p className="mt-2 text-center font-body text-label uppercase leading-tight tracking-[0.12em] text-ink-muted">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
