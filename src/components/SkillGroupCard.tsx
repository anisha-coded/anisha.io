import type { SkillGroup } from "@/content";
import Tag from "@/components/Tag";

interface SkillGroupCardProps {
  group: SkillGroup;
  isSharedSkill: (skill: string) => boolean;
}

export default function SkillGroupCard({ group, isSharedSkill }: SkillGroupCardProps) {
  return (
    <article className="rounded-sm border border-border bg-background p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-7">
      <h3 className="mb-5 inline-block border-b border-accent-red-deep pb-2 font-heading text-2xl leading-tight text-foreground">
        {group.title}
      </h3>
      <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
        {group.skills.map((skill) => (
          <li key={skill}><Tag shared={isSharedSkill(skill)}>{skill}</Tag></li>
        ))}
      </ul>
    </article>
  );
}
