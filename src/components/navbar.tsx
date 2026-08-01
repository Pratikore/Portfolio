"use client";

import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`glass flex w-full max-w-6xl items-center justify-between gap-3 rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-sm font-bold text-white shadow-lg shadow-brand-500/30">
            PK
          </span>
          <span className="hidden font-display text-sm font-semibold sm:block">
            Pratik Kore
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-brand-500/10 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Pratikore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass glass-hover hidden h-10 w-10 place-items-center rounded-full sm:grid"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/pratik-kore-pk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass glass-hover hidden h-10 w-10 place-items-center rounded-full sm:grid"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="glass glass-hover grid h-10 w-10 place-items-center rounded-full lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-6xl rounded-2xl p-3 lg:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-500/10 hover:text-brand-600 dark:text-slate-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
