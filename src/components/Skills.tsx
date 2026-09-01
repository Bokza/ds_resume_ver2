import { skillCategories } from "../data/resume";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="03" title="Skills" />

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => {
                  const tag = (value: string) => (
                    <span
                      key={value}
                      className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {value}
                    </span>
                  );
                  return Array.isArray(item) ? (
                    <div key={i} className="flex gap-2">
                      {item.map(tag)}
                    </div>
                  ) : (
                    tag(item)
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
