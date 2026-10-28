import type { KeyboardEvent } from "react";
import type { SkillGroup } from "@/content";

export interface SkillTabData {
  id: string;
  label: string;
  groups: readonly SkillGroup[];
}

interface SkillTabsProps {
  tabs: readonly SkillTabData[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export default function SkillTabs({ tabs, activeTab, onChange }: SkillTabsProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex: number | undefined;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    onChange(tabs[nextIndex].id);
    document.getElementById(`skills-tab-${tabs[nextIndex].id}`)?.focus();
  };

  return (
    <div role="tablist" aria-label="Skills focus" className="inline-flex w-full max-w-sm rounded-full border border-border bg-card p-1">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          id={`skills-tab-${tab.id}`}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`skills-panel-${tab.id}`}
          tabIndex={activeTab === tab.id ? 0 : -1}
          onClick={() => onChange(tab.id)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          className={`relative min-h-11 flex-1 rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${activeTab === tab.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
