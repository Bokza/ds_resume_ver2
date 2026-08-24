type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-3 sm:mb-14">
      <span className="font-mono text-sm font-medium text-accent-600 dark:text-accent-400">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" aria-hidden />
    </div>
  );
}
