import { useEffect, useState } from "react";
import type { SkillGroup, SkillHighlight } from "@/content";
import Section from "@/components/Section";
import SkillGroupCard from "@/components/SkillGroupCard";
import SkillTabs, { type SkillTabData } from "@/components/SkillTabs";
import HighlightCard from "@/components/HighlightCard";
import Tag from "@/components/Tag";

interface SkillsSectionProps {
  label: string;
  title: string;
  intro: string;
  tabs: readonly SkillTabData[];
  highlights: readonly SkillHighlight[];
}

const sharedSkills = new Set([
  "AWS", "Azure", "GCP", "Cloudflare", "Microservices", "Distributed Systems",
  "REST APIs", "API Testing", "Incident Management", "Python", "AI Agents", "LLM APIs",
]);

function normalizedSkill(skill: string) {
  if (skill === "Microsoft Azure") return "Azure";
  if (skill === "LLM API Integration") return "LLM APIs";
  return skill;
}

function readTabFromHash(tabs: readonly SkillTabData[]) {
  if (typeof window === "undefined") return tabs[0].id;
  const hashId = window.location.hash.match(/^#skills-(build|deliver)$/)?.[1];
  return tabs.find((tab) => tab.id === hashId)?.id ?? tabs[0].id;
}

export default function SkillsSection({ label, title, intro, tabs, highlights }: SkillsSectionProps) {
  const [activeTab, setActiveTab] = useState(() => readTabFromHash(tabs));

  useEffect(() => {
    if (/^#skills-(build|deliver)$/.test(window.location.hash)) {
      document.getElementById("skills")?.scrollIntoView();
    }
    const syncTabFromHash = () => {
      const hashTab = readTabFromHash(tabs);
      if (window.location.hash === `#skills-${hashTab}`) setActiveTab(hashTab);
    };
    window.addEventListener("hashchange", syncTabFromHash);
    return () => window.removeEventListener("hashchange", syncTabFromHash);
  }, [tabs]);

  const selectTab = (tabId: string) => {
    setActiveTab(tabId);
    const url = `${window.location.pathname}${window.location.search}#skills-${tabId}`;
    window.history.replaceState(null, "", url);
  };

  const isSharedSkill = (skill: string) => sharedSkills.has(normalizedSkill(skill));

  return (
    <Section id="skills" label={label} title={title} className="border-y border-border bg-card">
      <p className="mb-8 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
      <SkillTabs tabs={tabs} activeTab={activeTab} onChange={selectTab} />
      <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Tag shared>Shared skill</Tag>
        <span>appears in both Build and Deliver</span>
      </p>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`skills-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`skills-tab-${tab.id}`}
          tabIndex={0}
          hidden={activeTab !== tab.id}
          className="mt-7 focus-visible:outline-none"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {tab.groups.map((group: SkillGroup) => (
              <SkillGroupCard key={group.title} group={group} isSharedSkill={isSharedSkill} />
            ))}
          </div>
        </div>
      ))}
      <div className="mt-12">
        <h3 className="type-card-title mb-6 text-foreground">Where the two meet</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight) => <HighlightCard key={highlight.title} highlight={highlight} />)}
        </div>
      </div>
    </Section>
  );
}
