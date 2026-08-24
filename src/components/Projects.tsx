import { projects } from "../data/resume";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-slate-50 px-5 py-16 dark:bg-slate-900/40 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="04" title="Projects" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-accent-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:hover:border-accent-700"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{project.name}</h3>
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500">{project.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
                {project.subtitle}
              </p>

              <ul className="mt-4 flex-1 space-y-1.5">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {project.highlight && (
                <p className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-500/10 dark:text-accent-300">
                  {project.highlight}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
