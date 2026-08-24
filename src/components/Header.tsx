import { useState } from "react";
import { navSections, personal } from "../data/resume";
import { useActiveSection } from "../hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navSections.map((s) => s.id);

export function Header() {
  const activeId = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md print:hidden dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          {personal.nameEn}
          <span className="text-accent-600 dark:text-accent-400">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                activeId === section.id
                  ? "bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300 md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} stroke="currentColor" className="h-[18px] w-[18px]">
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-5 py-3 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <ul className="flex flex-col gap-1">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                    activeId === section.id
                      ? "bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
