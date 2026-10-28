import Postmark from "@/components/Postmark";
import WashiTape from "@/components/WashiTape";

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
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-foreground"><span aria-hidden="true" className="section-label-mark">✱</span>{label}</p>
        <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2">
          <article className="relative flex h-full min-h-[25rem] flex-col border border-border bg-background p-6 shadow-md sm:p-8">
            <WashiTape className="-rotate-6" />
            <div className="flex min-h-20 items-start justify-between gap-4 border-b border-dashed border-border pb-5">
              <h2 className="type-card-title text-foreground">{title}</h2>
              <div aria-hidden="true" className="relative grid h-14 w-14 shrink-0 rotate-3 place-items-center border border-dashed border-accent-red p-1">
                <span className="grid h-full w-full place-items-center bg-secondary"><span className="h-2 w-2 rounded-full bg-accent-red-deep ring-2 ring-background" /></span>
                <Postmark className="absolute -right-4 -top-4 h-14 w-14 rotate-[-14deg] text-accent-red opacity-50" />
              </div>
            </div>
            <p className="mt-6 flex-1 border-l-2 border-accent-red pl-5 text-lg leading-relaxed text-muted-foreground">{body}</p>
            <div aria-hidden="true" className="mt-8 border-t border-dashed border-border pt-4 text-right font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground"><span className="section-label-mark">✱</span>From: Anisha</div>
          </article>
          <article className="relative flex h-full min-h-[25rem] flex-col border border-border bg-background p-6 shadow-md sm:p-8">
            <WashiTape className="rotate-3" />
            <div className="flex min-h-20 items-start justify-between gap-4 border-b border-dashed border-border pb-5">
              <h2 className="type-card-title text-foreground">{whyIBuild.title}</h2>
              <div aria-hidden="true" className="relative grid h-14 w-14 shrink-0 -rotate-3 place-items-center border border-dashed border-accent-red p-1">
                <span className="grid h-full w-full place-items-center bg-secondary"><span className="h-2 w-2 rounded-full bg-accent-red-deep ring-2 ring-background" /></span>
                <Postmark className="absolute -right-4 -top-4 h-14 w-14 rotate-[-14deg] text-accent-red opacity-50" />
              </div>
            </div>
            <p className="mt-6 flex-1 border-l-2 border-accent-red pl-5 text-lg leading-relaxed text-muted-foreground">{whyIBuild.body}</p>
            <div aria-hidden="true" className="mt-8 border-t border-dashed border-border pt-4 text-right font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground"><span className="section-label-mark">✱</span>From: Anisha</div>
          </article>
        </div>
      </div>
    </section>
  );
}
