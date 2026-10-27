import React from "react";
import { story } from "@/data/story";

export default function Closing() {
  return (
    <section className="border border-terra bg-terra p-6 text-background md:p-12">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <p className="max-w-3xl font-display text-[clamp(1.9rem,4.6vw,3.7rem)] leading-[1.02]">
          {story.closing}
        </p>
        <span aria-hidden="true" className="font-display text-4xl text-saffron">
          *
        </span>
      </div>

      <p className="mt-6 max-w-md text-[0.95rem] leading-[1.75] opacity-80">{story.closingNote}</p>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-hazel pt-5 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span>{story.name}</span>
        <span className="opacity-75">{story.role}</span>
        <a href="#top" className="opacity-75 transition-opacity hover:opacity-100">
          back to top
        </a>
      </div>
    </section>
  );
}