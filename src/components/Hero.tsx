import Button from "@/components/Button";
import Starburst from "@/components/Starburst";

interface HeroProps {
  headline: string;
  subheadline: string;
  supportingLine: string;
  viewWork: string;
  getInTouch: string;
}

export default function Hero({
  headline,
  subheadline,
  supportingLine,
  viewWork,
  getInTouch,
}: HeroProps) {
  const emphasizedWord = "Anisha";
  const emphasizedWordStart = headline.lastIndexOf(emphasizedWord);

  return (
    <section className="relative overflow-hidden border-b border-border bg-card" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:py-36">
        <div className="rise">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-foreground">
            {supportingLine}
          </p>
          <h1 id="hero-title" className="type-hero mt-6 max-w-4xl text-foreground">
            {emphasizedWordStart < 0 ? headline : <>
              {headline.slice(0, emphasizedWordStart)}
              <em className="font-normal">{emphasizedWord}</em>
              {headline.slice(emphasizedWordStart + emphasizedWord.length)}
            </>}
          </h1>
        </div>
        <div className="rise-late lg:pb-2">
          <p className="max-w-xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#skills">{viewWork}</Button>
            <Button href="#contact" variant="secondary">{getInTouch}</Button>
          </div>
        </div>
      </div>
      <span aria-hidden="true" className="pointer-events-none absolute -right-12 top-12 hidden font-heading text-[18rem] leading-none text-secondary/50 lg:block">
        ✳
      </span>
      <Starburst className="pointer-events-none absolute right-[19%] top-[18%] hidden w-6 rotate-12 text-secondary/80 lg:block" />
      <Starburst className="pointer-events-none absolute right-[5%] top-[8%] hidden w-5 -rotate-6 text-secondary/75 lg:block" />
      <Starburst className="pointer-events-none absolute bottom-[16%] right-[7%] hidden w-7 rotate-6 text-secondary/70 lg:block" />
    </section>
  );
}
