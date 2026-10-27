import React from "react";
import Block from "@/components/portfolio/Block";
import { story } from "@/data/story";

export default function SkillsRow() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
      <Block tone="mint" eyebrow="the work" mark={false} className="md:col-span-5">
        <p className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1]">
          {story.practiceStatement}
        </p>
        <span aria-hidden="true" className="mt-4 block font-display text-2xl text-terra">
          *
        </span>
      </Block>

      <Block
        tone="green"
        eyebrow="my skill"
        title="three habits"
        markClass="text-amethyst"
        className="md:col-span-7"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {story.principles.map((principle, index) => (
            <div key={principle.title}>
              <span className="font-mono text-[10px] tracking-[0.18em] opacity-70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-[1.15rem] leading-tight">{principle.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-[1.7] opacity-80">{principle.body}</p>
            </div>
          ))}
        </div>
      </Block>
    </div>
  );
}