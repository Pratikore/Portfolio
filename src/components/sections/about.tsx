import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/portfolio";
import { Rocket, Users, Award, Code2 } from "lucide-react";

const facts = [
  {
    icon: Code2,
    title: "Enterprise Engineering",
    text: "Scalable microservices & reusable components for global telecom leaders — Optus, Vodafone Ireland and PPF.",
  },
  {
    icon: Rocket,
    title: "Performance Driven",
    text: "Modernized Amdocs' flagship MCO app, boosting system performance by 25% and cutting development time by 20%.",
  },
  {
    icon: Users,
    title: "Agile Collaboration",
    text: "Worked across 10+ cross-functional teams in Scrum Agile, refining code quality and reducing post-release bugs.",
  },
  {
    icon: Award,
    title: "Certified & Curious",
    text: "4x cloud certified — 3x AWS (AI Practitioner, Developer Associate, Cloud Practitioner) plus a Certified Kubernetes Application Developer (CKAD).",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Turning complex problems into clean solutions"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="glass h-full rounded-2xl p-8">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {profile.summary}
              </p>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                I specialise in building responsive front-ends with React.js &
                Next.js and robust back-ends with Java & Spring Boot — backed by
                solid CI/CD, cloud-native architecture and a passion for clean,
                maintainable code.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {profile.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="glass rounded-xl p-4 text-center"
                  >
                    <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                      {h.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {facts.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="glass glass-hover h-full rounded-2xl p-6">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
