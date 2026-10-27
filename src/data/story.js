import landscape from "@/assets/portfolio/landscape.png";
import swatches from "@/assets/portfolio/swatches.png";
import proofs from "@/assets/portfolio/proofs.png";
import linen from "@/assets/portfolio/linen.png";
import desk from "@/assets/portfolio/desk.png";
import studio from "@/assets/portfolio/studio.png";

export const images = {
  landscape,
  swatches,
  proofs,
  linen,
  desk,
  studio,
};

export const story = {
  name: " ★ ☆ ANISHA KARMAKAR  ☆ ★",
  role: "Software Engineer",
  eyebrow: "Hi! Welcome to my portfolio.",
  title: "portfolio",
  intro:
    "I make things that have to earn their place — identities, interfaces and objects that carry a point of view instead of decorating one.",
  introLabel: "introduction",
  helloLabel: "hello",
  chapters: [
    {
      id: "01",
      marker: "beginnings",
      title: "The first thing I made",
      paragraphs: [
        "I started the way a lot of people start: by making things nobody had asked for. Posters for shows that didn't exist. A logo for a band that was never going to play. The work was bad and it didn't matter — what mattered was that I could point at something and say I made that.",
        "That impulse hasn't changed much. Everything since has been a version of the same thing: taking something shapeless and giving it a form you can hold.",
      ],
    },
    {
      id: "02",
      marker: "craft",
      title: "Learning to look",
      paragraphs: [
        "In the beginning I thought design was about taste — that some people simply had a better eye, and mine would either improve or it wouldn't. What actually changed was slower and far less romantic. I learned to look at my own work the way a stranger would.",
        "The craft took years. Some of it I still learn by copying the people I admire, carefully, until I understand why their decisions hold up.",
      ],
    },
    {
      id: "03",
      marker: "the turn",
      title: "When the surface stopped being enough",
      paragraphs: [
        "There came a point where making things beautiful was no longer enough to keep me interested. I could do it — and that was the problem.",
        "The projects that stayed with me were the ones where the answer moved something: a sentence people finally understood, a form that asked one less question of the person using it.",
      ],
      pull: "The design isn't the object. The object is what the design makes possible.",
      image: images.studio,
      imageCaption: "studio, late afternoon",
    },
    {
      id: "04",
      marker: "people",
      title: "Edited by argument",
      paragraphs: [
        "Most of what I know about this work came out of disagreement — with clients, with engineers, with people who understood the material better than I did. Learning to say \u201cthis isn't working\u201d without needing to be right took longer than learning to set a grid.",
        "I've learned to be edited. The best changes to my work have almost always come from someone who didn't care what I intended.",
      ],
    },
    {
      id: "05",
      marker: "now",
      title: "Still at the same desk",
      paragraphs: [
        "Still start with a page and a pen. Still print things out, because a screen flatters everything. The tools change; the discipline doesn't.",
        "Most weeks look unglamorous: reading, sketching, throwing things away, and then a long stretch of careful making. I've come to like that part best.",
      ],
      image: images.proofs,
      imageCaption: "proofs, mid-week",
    },
  ],
  practiceStatement: "How the work actually gets made.",
  principles: [
    {
      title: "Begin with the problem",
      body: "Mood is a by-product. I write down what the thing has to do, then keep working until the form is the only one that does it.",
    },
    {
      title: "Edit until it's quiet",
      body: "Most of the good decisions look like removal. If a detail needs explaining, it isn't finished.",
    },
    {
      title: "Make it real early",
      body: "Paper, prototypes, ugly screens. A thing in the world teaches you more in an hour than a month of deciding.",
    },
  ],
  closing: "This is where the story is right now — unfinished, on purpose.",
  closingNote: "The next chapter gets written one project at a time.",
};
