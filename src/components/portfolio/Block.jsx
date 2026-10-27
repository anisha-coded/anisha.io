import React from "react";
import { cn } from "@/lib/utils";

const tones = {
  cream: "bg-background text-foreground border-border",
  green: "bg-terra text-background border-terra",
  mint: "bg-secondary text-secondary-foreground border-secondary",
};

export default function Block({
  tone = "cream",
  eyebrow,
  title,
  mark = true,
  markClass = "text-terra",
  className,
  children,
}) {
  return (
    <section className={cn("flex flex-col border p-5 md:p-8", tones[tone], className)}>
      {eyebrow ? (
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] opacity-75">
          {eyebrow}
        </span>
      ) : null}

      {title ? (
        <h2 className="mt-2 flex items-start gap-1.5 font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[0.95]">
        <span>{title}</span>
          {mark ? (
            <span aria-hidden="true" className={markClass}>
              *
            </span>
          ) : null}
        </h2>
      ) : null}

      <div className="mt-6 flex-1">{children}</div>
    </section>
  );
}