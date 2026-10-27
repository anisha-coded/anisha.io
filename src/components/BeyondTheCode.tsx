interface BeyondTheCodeProps {
  label: string;
  title: string;
  body: string;
  whyIBuild: {
    title: string;
    body: string;
  };
}

export default function BeyondTheCode({ label, title, body, whyIBuild }: BeyondTheCodeProps) {
  return (
    <section id="beyond-the-code" aria-label={label} className="scroll-mt-24 bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-foreground">{label}</p>
        <div className="mt-8 grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-12">
          <article className="flex h-full flex-col">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">{title}</h2>
            <p className="mt-5 flex-1 border-l-2 border-terra pl-5 text-lg leading-relaxed text-muted-foreground">{body}</p>
          </article>
          <article className="flex h-full flex-col">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">{whyIBuild.title}</h2>
            <p className="mt-5 flex-1 border-l-2 border-terra pl-5 text-lg leading-relaxed text-muted-foreground">{whyIBuild.body}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
