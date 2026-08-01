"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile, socials } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-4 pt-28 pb-16 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="chip mb-5">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Available for opportunities
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Pratik Kore</span>
          </h1>

          <p className="mt-4 font-display text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-1 text-sm font-medium tracking-wide text-brand-600 dark:text-brand-300">
            {profile.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.summary}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin className="h-4 w-4 text-brand-500" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:scale-[1.03]"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <Download className="h-4 w-4" />
              Download Résumé
            </a>
          </div>

          {/* Social row */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="glass glass-hover grid h-11 w-11 place-items-center rounded-xl"
              >
                <s.icon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-square">
            {/* rotating ring */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-brand-500 via-accent-500 to-fuchsia-500 opacity-70 blur-2xl animate-spin-slow" />
            <div className="glass-strong relative h-full w-full overflow-hidden rounded-[2rem] p-3">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* floating stat badges */}
            <motion.div
              className="glass absolute -left-6 top-10 rounded-2xl px-4 py-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="font-display text-xl font-bold text-gradient">4.2+</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Years Exp.
              </p>
            </motion.div>
            <motion.div
              className="glass absolute -right-4 bottom-12 rounded-2xl px-4 py-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <p className="font-display text-xl font-bold text-gradient">4x</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Cloud Certs
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
