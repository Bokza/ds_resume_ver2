import profileImg from '../assets/profile.jpeg';
import { personal } from '../data/resume';

const contactLinks = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { label: 'Portfolio', value: '포트폴리오', href: personal.portfolio },
  { label: 'Career Doc', value: '경력기술서', href: personal.careerDoc },
];

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-14">
        <img
          src={profileImg}
          alt={`${personal.nameKo} 프로필 사진`}
          className="aspect-4/5 w-28 shrink-0 rounded-2xl object-cover ring-1 ring-slate-200 sm:w-36 dark:ring-slate-800"
        />

        <div className="flex-1">
          <p className="mb-3 font-mono text-sm font-medium text-accent-600 dark:text-accent-400">
            {personal.role}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
            {personal.nameKo}
            <span className="ml-2 text-lg font-normal text-slate-400 dark:text-slate-500">
              {personal.nameEn}
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            {personal.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <span>{personal.birth}</span>
            <span>{personal.military}</span>
            <span>{personal.location}</span>
            <span>{personal.phone}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-accent-300 hover:text-accent-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent-600 dark:hover:text-accent-400"
              >
                {link.value}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl space-y-4 border-t border-slate-200 pt-10 dark:border-slate-800">
        {personal.intro.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-slate-600 dark:text-slate-400">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
