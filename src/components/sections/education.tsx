import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="glass glass-hover h-full rounded-2xl p-7">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold">{e.degree}</h3>
                <p className="mt-1 text-sm text-brand-600 dark:text-brand-300">
                  {e.institution}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="chip">{e.period}</span>
                  <span className="text-xs text-slate-400">{e.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
