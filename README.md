# Pratik Kore — Portfolio

A modern, responsive portfolio / virtual résumé built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **next-themes**.

Features: glassmorphism cards, animated gradient background, light/dark theme toggle, scroll progress bar, and fully responsive layout (mobile → 4K).

## Sections

- **Hero** — intro, photo, social links, résumé download
- **About** — summary + highlight stats
- **Experience** — Amdocs timeline
- **Projects** — MCO + GitHub projects
- **Skills** — categorized tech stack
- **Certifications** — AWS + Kubernetes (Credly links)
- **Education** — C-DAC + B.E.
- **Contact** — email, phone, LinkedIn, GitHub, Naukri, location
- **Footer**

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Deploy to Vercel

### Option A — Vercel Dashboard (recommended, no CLI)

1. Push this `Portfolio` folder to a GitHub repository.
2. Go to https://vercel.com/new and **Import** the repo.
3. Framework preset is auto-detected as **Next.js** — keep the defaults and click **Deploy**.
4. Your site goes live at `https://<project>.vercel.app`.

### Option B — Vercel CLI

```bash
npm i -g vercel
cd Portfolio
vercel          # first run: log in + link project (follow prompts)
vercel --prod   # deploy to production
```

### Optional environment variable

- `NEXT_PUBLIC_SITE_URL` — your final domain (used for Open Graph / social preview metadata), e.g. `https://pratik-kore.vercel.app`.

## Editing content

All content lives in a single file — **`src/data/portfolio.ts`**. Update text, links, projects, skills, certifications and education there and the whole site updates.

### ⚠️ Placeholders to replace with your real links

These were best guesses from the résumé — update them in `src/data/portfolio.ts`:

- **Naukri** URL (`socials` → Naukri `href`)
- **Credly** badge URLs (`certifications[].credlyUrl`) and `credlyProfile` — paste each certificate's exact Credly badge link.
- Add more **GitHub projects** to the `projects` array as needed.

### Replace the profile photo

Swap `public/profile.png` with your preferred image (keep the same filename, or update `profile.avatar` in the data file).
"# Portfolio" 
