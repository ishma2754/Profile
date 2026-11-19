import type { Project } from "@/content/projects";

type ProjectPanelProps = {
  project: Project;
  nextProject?: Project;
  onNext: () => void;
};

export function ProjectPanel({
  project,
  nextProject,
  onNext,
}: ProjectPanelProps) {
  return (
    <div className="grid border-t border-line-on-dark bg-bg-dark lg:grid-cols-[minmax(16rem,var(--theme-meta-width))_minmax(0,1fr)]">
      <aside className="flex flex-col gap-stack-lg border-b border-line-on-dark px-section-x py-stack-lg lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-line-on-dark lg:px-section-x-lg lg:py-stack-lg">
        <div>
          <p className="font-body text-label uppercase tracking-[0.18em] text-ink-muted-on-dark">
            {project.year} · {project.category}
          </p>
          <h3 className="mt-3 font-display text-panel leading-[0.95] tracking-[-0.02em] uppercase text-ink-on-dark">
            {project.title}
          </h3>
        </div>

        <div className="grid gap-2">
          <p className="font-body text-label uppercase tracking-[0.16em] text-ink-muted-on-dark">
            Overview
          </p>
          <p className="font-body text-body-sm leading-relaxed text-ink-on-dark">
            {project.overview}
          </p>
        </div>

        <dl className="divide-y divide-line-on-dark border-y border-line-on-dark">
          <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
            <dt className="font-body text-label uppercase tracking-[0.14em] text-ink-muted-on-dark">
              Year
            </dt>
            <dd className="font-body text-body-sm text-ink-on-dark">
              {project.year}
            </dd>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
            <dt className="font-body text-label uppercase tracking-[0.14em] text-ink-muted-on-dark">
              Stack
            </dt>
            <dd className="font-body text-body-sm text-ink-on-dark">
              {project.stack.join(" · ")}
            </dd>
          </div>
          {project.liveUrl ? (
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
              <dt className="font-body text-label uppercase tracking-[0.14em] text-ink-muted-on-dark">
                Live
              </dt>
              <dd>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body-sm text-ink-on-dark underline-offset-4 hover:underline"
                >
                  See it live →
                </a>
              </dd>
            </div>
          ) : null}
          {project.githubUrl ? (
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
              <dt className="font-body text-label uppercase tracking-[0.14em] text-ink-muted-on-dark">
                GitHub
              </dt>
              <dd>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body-sm text-ink-on-dark underline-offset-4 hover:underline"
                >
                  View repo →
                </a>
              </dd>
            </div>
          ) : null}
        </dl>

        {nextProject ? (
          <button
            type="button"
            onClick={onNext}
            className="mt-auto flex w-full items-end justify-between gap-4 border-t border-line-on-dark pt-stack text-left transition-opacity hover:opacity-80"
          >
            <span>
              <span className="block font-body text-label uppercase tracking-[0.16em] text-ink-muted-on-dark">
                Next project
              </span>
              <span className="mt-2 block font-display text-[1.5rem] uppercase tracking-[-0.02em] text-ink-on-dark">
                {nextProject.title}
              </span>
            </span>
            <span className="font-display text-[1.5rem] text-ink-on-dark" aria-hidden>
              →
            </span>
          </button>
        ) : null}
      </aside>

      <div className="flex flex-col gap-0">
        {project.gallery.map((shot) => (
          <figure
            key={`${project.slug}-${shot.label}`}
            className="relative min-h-[50vh] w-full border-b border-line-on-dark last:border-b-0"
            style={{ backgroundImage: shot.gradient }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundImage: shot.gradient }}
              aria-hidden
            />
            <figcaption className="absolute bottom-4 left-4 font-body text-label uppercase tracking-[0.16em] text-ink-on-dark/80 mix-blend-difference">
              {shot.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
