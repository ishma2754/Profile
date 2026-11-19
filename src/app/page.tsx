import { Hero } from "@/components/Hero";
import { ProjectsAccordion } from "@/components/ProjectsAccordion";
import { TechMarquee } from "@/components/TechMarquee";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <TechMarquee />
      <ProjectsAccordion />
      <footer className="border-t border-line-on-dark bg-bg-dark px-section-x py-stack md:px-section-x-lg">
        <div className="mx-auto flex max-w-layout flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-label uppercase tracking-[0.16em] text-ink-muted-on-dark">
            Ishma Khan
          </p>
          <p className="font-body text-label uppercase tracking-[0.16em] text-ink-muted-on-dark">
            Built with Next.js
          </p>
        </div>
      </footer>
    </main>
  );
}
