import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, credlyProfile } from "@/data/portfolio";
import { BadgeCheck, ExternalLink, ShieldCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified credentials"
          description="Industry certifications verified on Credly. Click any badge to view the credential."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <a
                href={c.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover group flex h-full items-start gap-4 rounded-2xl p-6"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 via-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30">
                  <BadgeCheck className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-base font-semibold leading-snug">
                      {c.name}
                    </h3>
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-brand-500" />
                  </div>
                  <p className="mt-1 text-sm text-brand-600 dark:text-brand-300">
                    {c.issuer}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="chip">{c.code}</span>
                    <span className="text-xs text-slate-400">{c.date}</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 text-center">
          <a
            href={credlyProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            <ShieldCheck className="h-4 w-4 text-accent-500" />
            View all badges on Credly
            <ExternalLink className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
