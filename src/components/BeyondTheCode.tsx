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
        <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2">
          <article className="flex h-full min-h-[25rem] flex-col border border-border bg-background p-6 shadow-md sm:p-8">
            <div className="flex min-h-20 items-start justify-between gap-4 border-b border-dashed border-border pb-5">
              <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">{title}</h2>
              <div aria-hidden="true" className="grid h-14 w-14 shrink-0 rotate-3 place-items-center border border-dashed border-terra p-1">
                <span className="grid h-full w-full place-items-center bg-secondary font-mono text-xs text-secondary-foreground">✳</span>
              </div>
            </div>
            <p className="mt-6 flex-1 border-l-2 border-terra pl-5 text-lg leading-relaxed text-muted-foreground">{body}</p>
            <div aria-hidden="true" className="mt-8 border-t border-dashed border-border pt-4 text-right font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">From: Anisha</div>
          </article>
          <article className="flex h-full min-h-[25rem] flex-col border border-border bg-background p-6 shadow-md sm:p-8">
            <div className="flex min-h-20 items-start justify-between gap-4 border-b border-dashed border-border pb-5">
              <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">{whyIBuild.title}</h2>
              <div aria-hidden="true" className="grid h-14 w-14 shrink-0 -rotate-3 place-items-center border border-dashed border-terra p-1">
                <span className="grid h-full w-full place-items-center bg-secondary font-mono text-xs text-secondary-foreground">✳</span>
              </div>
            </div>
            <p className="mt-6 flex-1 border-l-2 border-terra pl-5 text-lg leading-relaxed text-muted-foreground">{whyIBuild.body}</p>
            <div aria-hidden="true" className="mt-8 border-t border-dashed border-border pt-4 text-right font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">From: Anisha</div>
          </article>
        </div>
      </div>
    </section>
  );
}
