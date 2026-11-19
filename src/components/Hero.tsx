import { BoxLabel } from "@/components/BoxLabel";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="intro" className="relative border-b border-line" aria-labelledby="hero-heading">
      <BoxLabel>Home</BoxLabel>
      <div className="px-section-x pb-8 pt-6 md:px-section-x-lg md:pt-8">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,22rem)] lg:gap-12">
          <h1
            id="hero-heading"
            className="font-body text-[clamp(2.7rem,5.4vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.045em]"
          >
            {site.headline}{" "}
            <span className="text-ink-muted">{site.headlineRest}</span>
          </h1>
          <div className="lg:pb-2">
            <p className="max-w-md font-body text-body leading-relaxed text-ink-muted">{site.aside}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-control bg-accent px-4 py-2.5 font-body text-body-sm text-accent-ink"
              >
                View selected work
                <span aria-hidden>↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-control border border-line bg-bg px-4 py-2.5 font-body text-body-sm"
              >
                Contact
                <span aria-hidden>↗</span>
              </a>
              {site.resume ? (
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-control border border-line bg-bg px-4 py-2.5 font-body text-body-sm"
                >
                  Resume
                  <span aria-hidden>↗</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
