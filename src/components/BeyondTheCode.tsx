import { useEffect, useRef, useState } from "react";
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
  thinkingWithAI: {
    id: string;
    title: string;
    paragraphs: readonly string[];
    fromLabel: string;
  };
}

export default function BeyondTheCode({ label, title, body, whyIBuild, thinkingWithAI }: BeyondTheCodeProps) {
  const doodleRef = useRef<HTMLSpanElement>(null);
  const [doodleVisible, setDoodleVisible] = useState(false);

  useEffect(() => {
    const doodle = doodleRef.current;
    if (!doodle || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setDoodleVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setDoodleVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(doodle);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="beyond-the-code" aria-label={label} className="scroll-mt-24 bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-foreground"><span aria-hidden="true" className="section-label-mark">✱</span>{label}</p>
        <div className="mt-8 grid auto-rows-fr grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
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
          <article id={thinkingWithAI.id} tabIndex={-1} aria-labelledby={`${thinkingWithAI.id}-title`} className="relative col-span-1 flex h-full min-h-[25rem] flex-col border border-border bg-background p-6 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red-deep focus-visible:ring-offset-2 sm:p-8 md:col-span-2 lg:col-span-1">
            <WashiTape className="-rotate-3" />
            <div className="flex min-h-20 items-start justify-between gap-4 border-b border-dashed border-border pb-5">
              <h2 id={`${thinkingWithAI.id}-title`} className="type-card-title text-foreground">{thinkingWithAI.title}</h2>
              <div className="relative grid h-14 w-14 shrink-0 rotate-3 place-items-center border border-dashed border-accent-red p-1">
                <span className="grid h-full w-full place-items-center bg-secondary">
                  <span ref={doodleRef} aria-hidden="true" className={`thinking-doodle ${doodleVisible ? "is-visible" : ""}`}>
                    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
                      <path className="thinking-scribble" d="M20 24c-2-9-12-8-12-1s10 7 11 0c1-8-10-13-14-6-4 7 4 15 11 10 6-4-2-13-7-8-5 5 4 13 11 8 5-4 0-11-5-9-4 2-3 7 1 8" stroke="var(--accent-red-deep)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" pathLength="1" />
                      <path className="thinking-arrow-line" d="M25 24h15" strokeLinecap="round" strokeWidth="2.5" pathLength="1" />
                      <path className="thinking-arrow-head" d="m36 19 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" pathLength="1" />
                    </svg>
                  </span>
                </span>
                <Postmark className="absolute -right-4 -top-4 h-14 w-14 rotate-[-14deg] text-accent-red opacity-50" />
              </div>
            </div>
            <div className="mt-6 flex-1 space-y-4 border-l-2 border-accent-red pl-5 text-lg leading-relaxed text-muted-foreground">
              {thinkingWithAI.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div aria-hidden="true" className="mt-8 border-t border-dashed border-border pt-4 text-right font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground"><span className="section-label-mark">✱</span>{thinkingWithAI.fromLabel}</div>
          </article>
        </div>
      </div>
    </section>
  );
}
