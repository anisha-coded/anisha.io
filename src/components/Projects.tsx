import type { Project } from "@/content";
import Section from "@/components/Section";
import Tag from "@/components/Tag";

interface ProjectsProps {
  label: string;
  title: string;
  items: readonly Project[];
}

function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

export default function Projects({ label, title, items }: ProjectsProps) {
  return (
    <Section id="projects" label={label} title={title} className="bg-secondary/25">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((project, index) => (
          <article key={`${project.title}-${index}`} className="flex min-h-72 flex-col border border-border bg-card p-6 sm:p-7">
            <h3 className="mt-3 font-display text-2xl text-foreground">{project.title}</h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={project.title}>
              {project.technologies.map((technology, tagIndex) => (
                <li key={`${technology}-${tagIndex}`}><Tag>{technology}</Tag></li>
              ))}
            </ul>
            <div className="mt-6">
              {isPlaceholder(project.link) ? (
                <span className="font-mono text-xs text-muted-foreground">{project.link}</span>
              ) : (
                <a className="font-semibold text-primary underline decoration-terra underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={project.link}>
                  {project.title}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
