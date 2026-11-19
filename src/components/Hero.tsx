import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden bg-bg text-ink"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 grain" aria-hidden />
      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-layout flex-col justify-between px-section-x py-section-y-sm md:px-section-x-lg md:py-section-y">
        <header className="flex items-center justify-between">
          <p className="font-display text-[1.15rem] tracking-[0.08em] uppercase">
            {site.name}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="font-body text-label uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-ink"
          >
            Contact
          </a>
        </header>

        <div className="mt-stack-lg flex max-w-4xl flex-col gap-stack">
          <h1
            id="hero-heading"
            className="font-display text-hero leading-[0.92] tracking-[-0.02em] uppercase"
          >
            {site.headline}
          </h1>
          <p className="max-w-md font-body text-body leading-relaxed text-ink-muted">
            {site.oneLiner}
          </p>
          <div className="mt-stack flex flex-wrap gap-stack">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-control bg-ink px-6 py-3 font-body text-label uppercase tracking-[0.14em] text-ink-on-dark transition-opacity hover:opacity-80"
            >
              See projects
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center rounded-control border border-line px-6 py-3 font-body text-label uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-ink-on-dark"
            >
              Get in touch
            </a>
          </div>
        </div>

        <p className="mt-stack-lg font-body text-label uppercase tracking-[0.18em] text-ink-muted">
          Portfolio / 2026
        </p>
      </div>
    </section>
  );
}
