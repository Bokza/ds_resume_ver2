import { careers } from "../data/resume";
import { SectionHeading } from "./SectionHeading";

export function Career() {
  return (
    <section id="career" className="scroll-mt-20 bg-slate-50 px-5 py-16 dark:bg-slate-900/40 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="02" title="Career" />

        <ol className="relative space-y-10 border-l border-slate-200 pl-8 dark:border-slate-800">
          {careers.map((career) => (
            <li key={career.company} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-500 ring-4 ring-slate-50 dark:ring-slate-900/40" />
              <p className="font-mono text-xs font-medium text-accent-600 dark:text-accent-400">
                {career.period}
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                {career.company}
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{career.role}</p>
              <ul className="mt-3 space-y-1.5">
                {career.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
