import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";
import { ArrowUpRight, Github, Folder } from "lucide-react";
import { getSkillIcon } from "@/components/icons/brand-icons";

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of enterprise and personal projects. Explore more on my GitHub."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="glass glass-hover group relative flex h-full flex-col rounded-2xl p-7">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30">
                    <Folder className="h-6 w-6" />
                  </div>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source"
                      className="glass grid h-10 w-10 place-items-center rounded-full transition-transform group-hover:rotate-12"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  ) : (
                    <span className="chip">Enterprise</span>
                  )}
                </div>

                <h3 className="font-display text-lg font-bold sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                  {p.subtitle}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">{p.period}</p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {p.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => {
                      const TechIcon = getSkillIcon(t);
                      return (
                        <span key={t} className="chip gap-1.5">
                          {TechIcon ? (
                            <TechIcon className="h-3.5 w-3.5" aria-hidden />
                          ) : null}
                          {t}
                        </span>
                      );
                    })}
                  </div>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-accent-500 dark:text-brand-300"
                    >
                      View project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 text-center">
          <a
            href="https://github.com/Pratikore"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            <Github className="h-4 w-4" />
            View all repositories on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
