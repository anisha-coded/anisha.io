interface HowIWorkProps {
  label: string;
  title: string;
  body: string;
}

export default function HowIWork({ label, title, body }: HowIWorkProps) {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20 lg:py-24" aria-labelledby="how-i-work-title">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground">{label}</p>
        <div>
          <h2 id="how-i-work-title" className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/85">{body}</p>
        </div>
      </div>
    </section>
  );
}
