import { useState } from 'react';
import { aboutMeSections, howIWork } from '../data/resume';
import { SectionHeading } from './SectionHeading';

export function AboutMe() {
  const [activeTab, setActiveTab] = useState(aboutMeSections[0].id);

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-slate-50 px-5 py-16 dark:bg-slate-900/40 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="06" title="About Me" />

        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950 sm:p-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            How I Work
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {howIWork.map((item, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                <span className="mt-0.5 shrink-0 text-accent-500 dark:text-accent-400">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          role="tablist"
          aria-label="About Me"
          className="mb-8 flex gap-1 border-b border-slate-200 print:hidden dark:border-slate-800"
        >
          {aboutMeSections.map((section) => (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={activeTab === section.id}
              onClick={() => setActiveTab(section.id)}
              className={`relative px-4 py-3 text-sm font-semibold transition-colors ${
                activeTab === section.id
                  ? 'text-accent-700 dark:text-accent-400'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {section.title}
              {activeTab === section.id && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-accent-600 dark:bg-accent-400" />
              )}
            </button>
          ))}
        </div>

        {aboutMeSections.map((section, index) => (
          <div
            key={section.id}
            role="tabpanel"
            className={`space-y-4 ${activeTab === section.id ? 'block' : 'hidden print:block'} ${
              index > 0 ? 'print:mt-6 print:border-t print:border-slate-200 print:pt-6' : ''
            }`}
          >
            <h4 className="hidden text-sm font-semibold text-slate-900 print:block dark:text-slate-100">
              {section.title}
            </h4>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-slate-600 dark:text-slate-400">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
