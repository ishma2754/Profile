import { techGroups } from "@/content/tech";

export function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-heading">
      <div className="mx-auto w-full max-w-layout px-section-x pt-8 md:px-section-x-lg">
        <h2 id="stack-heading" className="sr-only">
          Tools I work with
        </h2>
        <div className="border-t border-line">
          {techGroups.map((group, index) => (
            <div
              key={group.label}
              className="grid gap-1 border-b border-line py-4 md:grid-cols-[11rem_9rem_minmax(0,1fr)] md:items-baseline md:gap-6 md:py-5"
            >
              <p className="font-body text-body-sm font-medium">
                {index === 0 ? "Tools I work with" : ""}
              </p>
              <p className="font-body text-body-sm text-ink-muted">{group.label}</p>
              <p className="font-body text-body-sm">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
