import type { SkillHighlight } from "@/content";

interface HighlightCardProps {
  highlight: SkillHighlight;
}

export default function HighlightCard({ highlight }: HighlightCardProps) {
  return (
    <article className="rounded-sm border border-border bg-background p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6">
      <h4 className="font-heading text-2xl leading-tight text-foreground">{highlight.title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{highlight.body}</p>
    </article>
  );
}
