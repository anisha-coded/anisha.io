import React from "react";
import Block from "@/components/portfolio/Block";
import Polaroid from "@/components/portfolio/Polaroid";
import { story } from "@/data/story";

const tones = ["cream", "green", "mint", "cream"];
const marks = ["text-terra", "text-coral", "text-indian", "text-saffron"];

export default function PathRows() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {story.chapters.slice(1).map((chapter, index) => (
        <Block
          key={chapter.id}
          tone={tones[index % tones.length]}
          markClass={marks[index % marks.length]}
          eyebrow={`${chapter.id} — ${chapter.marker}`}
          title={chapter.title}
        >
          <div className="space-y-4">
            {chapter.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-[0.95rem] leading-[1.75] opacity-85">
                {paragraph}
              </p>
            ))}
          </div>

          {chapter.pull ? (
            <p className="mt-5 border-l-2 border-current pl-4 font-display text-[1.25rem] leading-snug">
              {chapter.pull}
            </p>
          ) : null}

          {chapter.image ? (
            <Polaroid
              src={chapter.image}
              alt={chapter.imageCaption}
              ratio="aspect-[16/10]"
              rotate={index % 2 === 0 ? "-rotate-1" : "rotate-1"}
              caption={chapter.imageCaption}
              className="mt-6"
            />
          ) : null}
        </Block>
      ))}
    </div>
  );
}