import portrait from "@/assets/portfolio/me.png";
import Section from "@/components/Section";

interface AboutProps {
  label: string;
  title?: string;
  paragraphs: readonly string[];
  portraitAlt: string;
}

export default function About({ label, title, paragraphs, portraitAlt }: AboutProps) {
  const finalParagraph = paragraphs.at(-1);
  const textParagraphs = paragraphs.slice(0, -1);

  return (
    <Section id="about" label={label} title={title} labelClassName="text-sm sm:text-base">
      <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start lg:gap-16">
        <figure className="mx-auto w-full max-w-sm border border-border bg-card p-3 shadow-sm md:mx-0">
          <img
            src={portrait}
            alt={portraitAlt}
            className="aspect-[4/5] w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {textParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
      {finalParagraph && (
        <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">{finalParagraph}</p>
      )}
    </Section>
  );
}
