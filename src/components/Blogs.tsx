import { BoxLabel } from "@/components/BoxLabel";
import { blogs } from "@/content/blogs";
import { site } from "@/content/site";

export function Blogs() {
  return (
    <section id="blogs" className="relative border-b border-line" aria-labelledby="blogs-heading">
      <BoxLabel>Blogs</BoxLabel>
      <div className="px-section-x pb-8 pt-6 md:px-section-x-lg md:pt-8">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,22rem)] lg:gap-12">
          <h2
            id="blogs-heading"
            className="font-body text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.045em]"
          >
            Articles
          </h2>
          <div className="lg:pb-2">
            <p className="max-w-sm font-body text-body leading-relaxed text-ink-muted">
              Writing on React Native, offline work, and the details that keep a mobile product usable in the field.
            </p>
            <a
              href={site.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-control bg-accent px-4 py-2.5 font-body text-body-sm text-accent-ink"
            >
              Read on Medium
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        {blogs.map((post) => (
          <article
            key={post.url}
            className="border-b border-line px-section-x py-8 last:border-b-0 md:px-section-x-lg md:py-10"
          >
            <h3 className="max-w-3xl font-body text-[clamp(1.5rem,2.5vw,1.85rem)] font-semibold tracking-[-0.03em]">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-muted"
              >
                {post.title}
              </a>
            </h3>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-body text-body-sm underline underline-offset-4"
            >
              Read on Medium ↗
            </a>
            <div className="mt-6 max-w-2xl space-y-4">
              {post.excerpt.map((paragraph) => (
                <p key={paragraph} className="font-body text-body leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
