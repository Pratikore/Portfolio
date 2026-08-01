import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, socials } from "@/data/portfolio";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have an opportunity or just want to say hi? My inbox is always open."
        />

        <Reveal>
          <div className="glass-strong rounded-3xl p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl font-bold">
                  Reach out directly
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  I&apos;m open to full-time roles, freelance work and
                  interesting collaborations. Pick whichever channel works best
                  for you.
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:scale-[1.03]"
                >
                  <Send className="h-4 w-4" />
                  Send me an email
                </a>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass glass-hover flex items-center gap-3 rounded-xl p-4"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{s.label}</p>
                      <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                        {s.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
