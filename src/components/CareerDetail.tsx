import { useState } from 'react';
import { careerDetails, techSummary } from '../data/resume';
import { SectionHeading } from './SectionHeading';

export function CareerDetail() {
  const [activeNo, setActiveNo] = useState(careerDetails[0].no);

  return (
    <section
      id="career-detail"
      className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="05" title="Career Detail" />

        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950 sm:p-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            기술 요약
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {techSummary.map((item, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                <span className="mt-0.5 shrink-0 text-accent-500 dark:text-accent-400">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          role="tablist"
          aria-label="Career Detail"
          className="mb-8 flex gap-1 overflow-x-auto border-b border-slate-200 print:hidden dark:border-slate-800"
        >
          {careerDetails.map((item) => (
            <button
              key={item.no}
              type="button"
              role="tab"
              aria-selected={activeNo === item.no}
              onClick={() => setActiveNo(item.no)}
              className={`relative shrink-0 whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors ${
                activeNo === item.no
                  ? 'text-accent-700 dark:text-accent-400'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {String(item.no).padStart(2, '0')} · {item.name}
              {activeNo === item.no && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-accent-600 dark:bg-accent-400" />
              )}
            </button>
          ))}
        </div>

        {careerDetails.map((item, index) => (
          <div
            key={item.no}
            role="tabpanel"
            className={`${activeNo === item.no ? 'block' : 'hidden print:block'} ${
              index > 0 ? 'print:mt-10 print:border-t print:border-slate-200 print:pt-10' : ''
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {item.name}
                </h3>
                <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
                  {item.nameEn}
                </p>
              </div>
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                {item.company} · {item.period}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {item.role}
              </span>
              <span className="rounded-md bg-accent-50 px-2 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-500/10 dark:text-accent-300">
                기여도 {item.contribution}
              </span>
            </div>

            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              {item.overview}
            </p>

            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  주요 업무
                </h4>
                <ul className="space-y-1.5">
                  {item.tasks.map((task, i) => (
                    <li key={i}>
                      <div className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                        {task.text}
                      </div>
                      {task.sub && (
                        <ul className="mt-1.5 ml-3.5 space-y-1 border-l border-slate-200 pl-3 dark:border-slate-800">
                          {task.sub.map((sub, j) => (
                            <li
                              key={j}
                              className="text-sm leading-relaxed text-slate-500 dark:text-slate-500"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  주요 성과
                </h4>
                <ul className="space-y-1.5">
                  {item.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-0.5 shrink-0 text-accent-500 dark:text-accent-400">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
