import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/portfolio";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { getSkillIcon } from "@/components/icons/brand-icons";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
        />

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand-500/60 via-accent-500/40 to-transparent sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company + i}>
                <div className="relative sm:pl-16">
                  {/* node */}
                  <div className="absolute left-0 top-6 hidden h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/40 sm:grid">
                    <Briefcase className="h-4 w-4" />
                  </div>

                  <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-bold">
                          {exp.role}
                        </h3>
                        <p className="text-brand-600 dark:text-brand-300">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="chip">{exp.period}</span>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {exp.points.map((p, idx) => (
                        <li key={idx} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                          <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tech.map((t) => {
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
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
