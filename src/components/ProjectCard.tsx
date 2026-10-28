import { useEffect, useRef, useState } from "react";
import type { Project } from "@/content";
import Postmark from "@/components/Postmark";
import Tag from "@/components/Tag";
import WashiTape from "@/components/WashiTape";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      id={project.id}
      aria-labelledby={`${project.id}-title`}
      className={`project-reveal relative scroll-mt-24 border border-border bg-background p-6 shadow-md sm:p-8 ${isVisible ? "is-visible" : ""}`}
    >
      <WashiTape className="-rotate-6" />
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground">
          <span aria-hidden="true" className="section-label-mark">✱</span>{project.label}
        </p>
        <div aria-hidden="true" className="relative grid h-14 w-14 shrink-0 rotate-3 place-items-center border border-dashed border-accent-red p-1">
          <span className="grid h-full w-full place-items-center bg-secondary">
            <span className="h-2 w-2 rounded-full bg-accent-red-deep ring-2 ring-background" />
          </span>
          <Postmark className="absolute -right-4 -top-4 h-14 w-14 rotate-[-14deg] text-accent-red opacity-50" />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
        <h3 id={`${project.id}-title`} className="type-card-title max-w-3xl text-foreground">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tracks.map((track) => <Tag key={track}>{track}</Tag>)}
        </div>
      </div>
      <p className="mt-3 max-w-4xl text-lg leading-relaxed text-muted-foreground">{project.tagline}</p>
      <p className="mt-5 text-base leading-relaxed text-foreground">{project.intro}</p>
      <ul className="mt-4 space-y-3">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
            <span aria-hidden="true" className="mt-[0.7em] h-2 w-2 shrink-0 rounded-full bg-accent-red-deep" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 border-t border-dashed border-border pt-5">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-foreground">
          <span aria-hidden="true" className="section-label-mark">✱</span>{project.outcomeLabel}
        </p>
        <p className="mt-2 border-l-2 border-accent-red pl-4 text-base leading-relaxed text-muted-foreground">{project.outcome}</p>
      </div>
    </article>
  );
}
