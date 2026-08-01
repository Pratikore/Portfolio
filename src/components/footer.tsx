import { profile, socials } from "@/data/portfolio";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-4 pb-10 pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-2xl p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <a href="#top" className="flex items-center justify-center gap-2.5 md:justify-start">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-sm font-bold text-white">
                  PK
                </span>
                <span className="font-display text-base font-semibold">
                  {profile.name}
                </span>
              </a>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {profile.role} · {profile.location}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass glass-hover grid h-10 w-10 place-items-center rounded-xl"
                >
                  <s.icon className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200/60 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
            <p className="flex items-center gap-1.5">
              © {year} {profile.name}. Built with
              <Heart className="h-4 w-4 fill-brand-500 text-brand-500" /> using
              Next.js & Tailwind CSS.
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 font-medium text-brand-600 transition-colors hover:text-accent-500 dark:text-brand-300"
            >
              Back to top
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
