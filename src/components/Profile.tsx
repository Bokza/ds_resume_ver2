import { certificates, education } from "../data/resume";
import { SectionHeading } from "./SectionHeading";

export function Profile() {
  return (
    <section id="profile" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="01" title="Profile" />

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              학력
            </h3>
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {education.school}{" "}
              <span className="font-normal text-slate-500 dark:text-slate-400">
                {education.major} (GPA {education.gpa})
              </span>
            </p>
            <ul className="mt-3 space-y-1.5">
              {education.timeline.map((item) => (
                <li key={item.period} className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-mono text-slate-400 dark:text-slate-500">{item.period}</span>{" "}
                  {item.note}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              자격증
            </h3>
            <ul className="space-y-3">
              {certificates.map((cert) => (
                <li key={cert.name} className="flex items-center gap-3">
                  <span className="rounded-md bg-accent-50 px-2 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-500/10 dark:text-accent-300">
                    {cert.name}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{cert.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
