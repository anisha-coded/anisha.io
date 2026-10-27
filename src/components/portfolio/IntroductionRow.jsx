import React from "react";
import Block from "@/components/portfolio/Block";
import Polaroid from "@/components/portfolio/Polaroid";
import { story, images } from "@/data/story";

export default function IntroductionRow() {
  const first = story.chapters[0];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <Block
        tone="green"
        eyebrow={story.introLabel}
        title="a bit about me"
        markClass="text-coral"
      >
        <div className="grid grid-cols-2 gap-3">
          <Polaroid
            src={images.swatches}
            alt="Hand-painted colour swatch cards on cream paper"
            ratio="aspect-[4/5]"
            rotate="-rotate-2"
            caption="colour studies"
          />
          <Polaroid
            src={images.desk}
            alt="Paper, a brass compass and an inked line on a desk"
            ratio="aspect-[4/5]"
            rotate="rotate-2"
            caption="the desk"
          />
        </div>
        <p className="mt-6 text-[0.95rem] leading-[1.75] opacity-85">{first.paragraphs[0]}</p>
      </Block>

      <Block
        tone="cream"
        eyebrow={story.helloLabel}
        title={`hello, I'm ${story.name}`}
        markClass="text-olive"
      >
        <div className="grid grid-cols-2 gap-3">
          <Polaroid
            src={images.linen}
            alt="Cream linen curtain in afternoon light"
            ratio="aspect-[4/5]"
            rotate="rotate-1"
            caption="soft light"
          />
          <Polaroid
            src={images.proofs}
            alt="Printed proofs scattered on a pale wooden table"
            ratio="aspect-[4/5]"
            rotate="-rotate-1"
            caption="proofs"
          />
        </div>
        <p className="mt-6 text-[0.95rem] leading-[1.75] text-muted-foreground">
          {first.paragraphs[1]}
        </p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-hazel">
          {story.role}
        </p>
      </Block>
    </div>
  );
}