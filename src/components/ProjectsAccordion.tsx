"use client";

import Image from "next/image";
import { useState } from "react";
import { BoxLabel } from "@/components/BoxLabel";
import { projects, type Project } from "@/content/projects";

function isStoreLink(url?: string) {
  return Boolean(url?.includes("play.google.com"));
}

function ProjectLinks({ project }: { project: Project }) {
  const store = isStoreLink(project.liveUrl);

  if (!project.liveUrl && !project.githubUrl) return null;

  return (
    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-body-sm underline underline-offset-4"
        >
          {store ? "Google Play ↗" : "Live ↗"}
        </a>
      ) : null}
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-body-sm underline underline-offset-4"
        >
          GitHub ↗
        </a>
      ) : null}
    </div>
  );
}

function ProjectCopy({ project }: { project: Project }) {
  return (
    <div className="px-5 py-6 md:px-6">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-body text-[1.65rem] font-semibold tracking-[-0.03em]">{project.title}</h3>
        <span className="bg-accent px-1.5 py-0.5 font-body text-label uppercase tracking-[0.12em] text-accent-ink">
          {project.category}
        </span>
      </div>
      <ProjectLinks project={project} />
      <p className="mt-3 font-body text-body-sm text-ink-muted">
        {project.category}
        <span aria-hidden> · </span>
        {project.year}
      </p>
      {project.stack.length > 0 ? (
        <p className="mt-3 max-w-sm font-body text-body-sm leading-relaxed text-ink-muted">
          {project.stack.join(" · ")}
        </p>
      ) : null}
      <p className="mt-4 max-w-sm font-body text-body-sm leading-relaxed">{project.overview}</p>
      {project.highlights.length > 0 ? (
        <ul className="mt-4 max-w-sm list-disc space-y-2 pl-4 font-body text-body-sm leading-relaxed">
          {project.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function ProjectStills({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const current = project.images[index] ?? project.images[0];

  if (!current) return null;

  const portrait = current.height > current.width;

  return (
    <div>
      <Image
        src={current.src}
        alt={current.alt}
        width={current.width}
        height={current.height}
        sizes={portrait ? "(min-width: 768px) 320px, 70vw" : "(min-width: 1024px) 928px, 100vw"}
        className={
          portrait ? "mx-auto h-auto w-full max-w-[20rem]" : "h-auto w-full"
        }
      />
      {project.images.length > 1 ? (
        <div className="mt-3 flex gap-2" role="tablist" aria-label={`${project.title} pictures`}>
          {project.images.map((image, shot) => {
            const selected = shot === index;
            return (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={image.alt}
                onClick={() => setIndex(shot)}
                className={`relative h-16 w-24 overflow-hidden rounded-control border ${
                  selected ? "border-accent" : "border-line"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  sizes="96px"
                  className="h-full w-full object-contain"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function ProjectsAccordion() {
  const [slug, setSlug] = useState(projects[0]?.slug ?? "");
  const active = projects.find((project) => project.slug === slug) ?? projects[0];
  const live = active?.liveUrl ?? projects[0]?.liveUrl;

  if (!active) return null;

  return (
    <section
      id="projects"
      className="relative border-b border-line"
      aria-labelledby="projects-heading"
    >
      <BoxLabel>Projects</BoxLabel>
      <div className="px-section-x pb-8 pt-6 md:px-section-x-lg md:pt-8">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,22rem)] lg:gap-12">
          <h2
            id="projects-heading"
            className="font-body text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
          >
            Projects
          </h2>
          <div className="lg:pb-2">
            <p className="max-w-sm font-body text-body leading-relaxed text-ink-muted">
              A live bus-booking app, rental search, video playback, a multi-page tourism site, and a
              marketing page.
            </p>
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-control bg-accent px-4 py-2.5 font-body text-body-sm text-accent-ink"
              >
                {isStoreLink(live) ? "View on Google Play" : "View live site"}
                <span aria-hidden>↗</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="grid lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)]">
            <ul className="border-b border-line lg:border-b-0 lg:border-r">
              {projects.map((project) => {
                const selected = project.slug === active.slug;
                return (
                  <li key={project.slug} className="border-b border-line last:border-b-0">
                    {selected ? (
                      <ProjectCopy project={project} />
                    ) : (
                      <div className="px-5 py-5 md:px-6">
                        <button
                          type="button"
                          onClick={() => setSlug(project.slug)}
                          className="w-full text-left font-body text-[1.65rem] text-ink-muted hover:text-ink"
                        >
                          {project.title}
                        </button>
                        <ProjectLinks project={project} />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="min-w-0 px-4 py-6 md:px-8 md:py-8">
              <div>
                <p className="font-body text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.04em]">
                  {active.title}
                </p>
                <ProjectLinks project={active} />
              </div>
              <div className="mt-5">
                <ProjectStills key={active.slug} project={active} />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
