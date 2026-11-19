"use client";

import { useId, useState } from "react";
import { getNextProject, projects } from "@/content/projects";
import { ProjectPanel } from "@/components/ProjectPanel";

function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ProjectsAccordion() {
  const baseId = useId();
  const [openSlug, setOpenSlug] = useState<string | null>(projects[0]?.slug ?? null);

  function toggle(slug: string) {
    setOpenSlug((current) => (current === slug ? null : slug));
  }

  function openNext(slug: string) {
    const next = getNextProject(slug);
    if (!next) return;
    setOpenSlug(next.slug);
    requestAnimationFrame(() => {
      document
        .getElementById(`project-${next.slug}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <section
      id="projects"
      className="relative bg-bg-dark text-ink-on-dark"
      aria-labelledby="projects-heading"
    >
      <div className="pointer-events-none absolute inset-0 grain-dark opacity-30" aria-hidden />
      <div className="relative mx-auto w-full max-w-layout px-section-x py-section-y-sm md:px-section-x-lg md:py-section-y">
        <div className="mb-stack-lg flex items-end justify-between gap-4 border-b border-line-on-dark pb-stack">
          <h2
            id="projects-heading"
            className="font-display text-section leading-none tracking-[-0.02em] uppercase"
          >
            Selected work
          </h2>
          <p className="font-body text-label uppercase tracking-[0.16em] text-ink-muted-on-dark">
            {padIndex(0)} — {padIndex(projects.length - 1)}
          </p>
        </div>

        <ul className="border-t border-line-on-dark">
          {projects.map((project, index) => {
            const isOpen = openSlug === project.slug;
            const panelId = `${baseId}-${project.slug}-panel`;
            const buttonId = `${baseId}-${project.slug}-button`;
            const next = getNextProject(project.slug);

            return (
              <li
                key={project.slug}
                id={`project-${project.slug}`}
                className="border-b border-line-on-dark"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(project.slug)}
                    className="group flex w-full items-center gap-4 py-5 text-left transition-colors hover:bg-ink/20 md:gap-8 md:py-7"
                  >
                    <span className="shrink-0 font-body text-label uppercase tracking-[0.16em] text-ink-muted-on-dark">
                      {padIndex(index)}.
                    </span>
                    <span className="flex-1 font-display text-project leading-[0.95] tracking-[-0.02em] uppercase">
                      {project.title}
                    </span>
                    <span
                      className={`shrink-0 font-display text-[1.5rem] transition-transform duration-[var(--theme-accordion)] ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={isOpen ? "block" : "hidden"}
                >
                  {isOpen ? (
                    <ProjectPanel
                      project={project}
                      nextProject={next}
                      onNext={() => openNext(project.slug)}
                    />
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
