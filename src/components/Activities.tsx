import { activities } from "../data/resume";
import { SectionHeading } from "./SectionHeading";

export function Activities() {
  return (
    <section id="activities" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="05" title="Activities" />

        <div className="grid gap-5 sm:grid-cols-2">
          {activities.map((activity) => (
            <div
              key={activity.name}
              className="rounded-xl border border-slate-200 p-5 print:break-inside-avoid dark:border-slate-800"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-bold text-slate-900 dark:text-slate-100">{activity.name}</h3>
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                  {activity.period}
                </span>
              </div>

              {activity.org && (
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{activity.org}</p>
              )}

              {activity.bullets.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {activity.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {activity.result && (
                <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-500/10 dark:text-accent-300">
                  {activity.result}
                </p>
              )}

              {activity.tags && activity.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
