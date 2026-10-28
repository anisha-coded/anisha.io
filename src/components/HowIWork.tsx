import Starburst from "@/components/Starburst";

interface HowIWorkProps {
  label: string;
  title: string;
  body: string;
}

export default function HowIWork({ label, title, body }: HowIWorkProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground dark:bg-secondary/80 dark:text-foreground sm:py-20 lg:py-24" aria-labelledby="how-i-work-title">
      <Starburst className="pointer-events-none absolute left-[5%] top-1/2 hidden w-[clamp(9rem,15vw,17rem)] -translate-y-1/2 text-secondary/70 dark:text-foreground/20 lg:block" />
      <Starburst className="pointer-events-none absolute left-[14%] top-[22%] hidden w-7 rotate-12 text-secondary/90 dark:text-foreground/55 lg:block" />
      <Starburst className="pointer-events-none absolute bottom-[22%] left-[21%] hidden w-5 -rotate-6 text-secondary/85 dark:text-foreground/55 lg:block" />
      <Starburst className="pointer-events-none absolute bottom-[19%] left-[3%] hidden w-6 rotate-6 text-secondary/80 dark:text-foreground/50 lg:block" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground dark:text-foreground"><span aria-hidden="true" className="section-label-mark">✱</span>{label}</p>
        <div>
          <h2 id="how-i-work-title" className="type-section-title">{title}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/85 dark:text-foreground/85">{body}</p>
        </div>
      </div>
    </section>
  );
}
