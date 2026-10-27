import React from "react";
import Polaroid from "@/components/portfolio/Polaroid";
import { story, images } from "@/data/story";

export default function PortfolioHeader() {
  return (
    <header className="border border-border bg-card p-5 md:p-8">
      <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.26em] text-hazel">
        <span>{story.eyebrow}</span>
        <span>★ ☆ {story.name} ☆ ★</span>
      </div>

      <div className="mt-3 flex flex-wrap items-end gap-x-4">
        <h1 className="font-display text-[clamp(3.4rem,16vw,11rem)] leading-[0.8] text-[#0b2e17]">
          {story.title}
        </h1>
        <span aria-hidden="true" className="pb-3 font-display text-3xl text-terra md:text-5xl">
          *
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-8">
          <Polaroid
            src={images.landscape}
            alt="A wild meadow in warm late-afternoon light"
            ratio="aspect-[16/9]"
            rotate="-rotate-1"
            caption="somewhere in between"
          />
        </div>
        <p className="text-[0.95rem] leading-[1.75] text-muted-foreground md:col-span-4 md:pt-2">
          {story.intro}
        </p>
      </div>
    </header>
  );
}
