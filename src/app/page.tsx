import { Blogs } from "@/components/Blogs";
import { BoxLabel } from "@/components/BoxLabel";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { TechBanner } from "@/components/TechBanner";
import { site } from "@/content/site";

const label = "font-body text-label uppercase tracking-[0.16em] text-ink-muted";

const elsewhere = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Medium", href: site.links.medium },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Blogs />
      <TechBanner />
      <footer id="contact" className="relative border-b border-line">
        <BoxLabel>Contact</BoxLabel>
        <div className="grid gap-10 px-section-x pb-12 pt-8 sm:grid-cols-3 md:px-section-x-lg md:pb-14 md:pt-10">
          <div>
            <p className={label}>Contact</p>
            <a href={`mailto:${site.email}`} className="mt-4 block font-body text-body font-semibold">
              {site.email}
            </a>
            <p className="mt-3 font-body text-body-sm text-ink-muted">Let’s get in touch.</p>
            <a href={site.phoneHref} className="mt-2 block font-body text-body-sm">
              {site.phone}
            </a>
            <a
              href={site.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-body text-body-sm underline underline-offset-4"
            >
              Medium ↗
            </a>
            {site.resume ? (
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-body text-body-sm underline underline-offset-4"
              >
                Resume ↗
              </a>
            ) : null}
          </div>
          <div>
            <p className={label}>Sitemap</p>
            <ul className="mt-4 space-y-2">
              {site.nav
                .filter((item) => item.href !== "#contact")
                .map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="font-body text-body-sm hover:text-ink-muted">
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <p className={label}>Elsewhere</p>
            <ul className="mt-4 space-y-2">
              {elsewhere.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-body-sm hover:text-ink-muted"
                  >
                    {item.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-layout border-t border-line px-section-x py-5 md:px-section-x-lg">
          <p className={label}>© 2026 {site.name}</p>
        </div>
      </footer>
    </main>
  );
}
