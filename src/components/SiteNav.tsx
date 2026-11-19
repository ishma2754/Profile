import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/content/site";
import { siGithub } from "simple-icons";

const linkedin = {
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

/** Classic Medium monogram — sits inside the icon box without clipping. */
const medium = {
  path: "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
};

const social = [
  { label: "LinkedIn", href: site.links.linkedin, path: linkedin.path },
  { label: "GitHub", href: site.links.github, path: siGithub.path },
  { label: "Medium", href: site.links.medium, path: medium.path },
] as const;

export function SiteNav() {
  const links = site.nav.filter((item) => item.href !== "#contact");
  const contact = site.nav.find((item) => item.href === "#contact");

  return (
    <header className="border-b border-line">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-section-x py-4 md:px-section-x-lg">
        <a href="#intro" className="font-body text-[1.85rem] font-semibold leading-none tracking-[-0.04em] text-ink">
          {site.mark}
        </a>

        <nav aria-label="Page" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-body-sm text-ink hover:text-ink-muted"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex h-5 w-5 items-center justify-center text-ink hover:text-ink-muted"
              >
                <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem] overflow-visible" aria-hidden>
                  <path d={item.path} fill="currentColor" />
                </svg>
              </a>
            ))}
          </div>
          {site.resume ? (
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-body-sm text-ink hover:text-ink-muted"
            >
              Resume
            </a>
          ) : null}
          <ThemeToggle />
          {contact ? (
            <a
              href={contact.href}
              className="inline-flex items-center rounded-control bg-accent px-3 py-1.5 font-body text-body-sm text-accent-ink"
            >
              {contact.label}
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
