import { BoxLabel } from "@/components/BoxLabel";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="relative border-b border-line" aria-labelledby="experience-heading">
      <BoxLabel>Experience</BoxLabel>
      <div className="px-section-x pb-8 pt-6 md:px-section-x-lg md:pt-8">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,22rem)] lg:gap-12">
          <div>
            <h2
              id="experience-heading"
              className="font-body text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.045em]"
            >
              {experience.company}
            </h2>
            <p className="mt-4 inline-block bg-accent px-3 py-1.5 font-body text-body font-semibold text-accent-ink">
              {experience.role}
            </p>
          </div>
          <div className="lg:pb-2">
            <p className="font-body text-body-sm text-ink-muted">{experience.dates}</p>
            <p className="mt-3 max-w-sm font-body text-body leading-relaxed text-ink-muted">
              {experience.summary}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        {experience.projects.map((project) => (
          <article key={project.title} className="border-b border-line px-section-x py-8 last:border-b-0 md:px-section-x-lg md:py-10">
            <h3 className="font-body text-[clamp(1.5rem,2.5vw,1.85rem)] font-semibold tracking-[-0.03em]">
              {project.title}
            </h3>
            {project.storeLinks?.length ? (
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {project.storeLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-body-sm underline underline-offset-4"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            ) : null}
            <p className="mt-3 max-w-2xl font-body text-body-sm leading-relaxed text-ink-muted">
              {project.stack.join(" · ")}
            </p>
            <p className="mt-4 max-w-2xl font-body text-body leading-relaxed">{project.overview}</p>
            <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-4 font-body text-body-sm leading-relaxed">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
