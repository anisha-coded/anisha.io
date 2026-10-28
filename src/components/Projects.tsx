import type { Project } from "@/content";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

interface ProjectsSectionProps {
  label: string;
  title: string;
  detailsNote: string;
  items: readonly Project[];
}

export default function ProjectsSection({ label, title, detailsNote, items }: ProjectsSectionProps) {
  return (
    <Section id="projects" label={label} title={title} className="bg-secondary/25 dark:bg-secondary/45">
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{detailsNote}</p>
      <div className="mt-6 grid gap-6">
        {items.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </Section>
  );
}
