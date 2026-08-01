import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="chip mb-4">{eyebrow}</span>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="section-title">{title}</span>
      </h2>
      {description ? (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
