import { personal } from "../data/resume";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-5 py-10 dark:border-slate-800 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {personal.nameKo} · {personal.email} · {personal.phone}
        </p>
        <a
          href="#home"
          className="text-sm font-medium text-slate-500 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
        >
          맨 위로 ↑
        </a>
      </div>
    </footer>
  );
}
