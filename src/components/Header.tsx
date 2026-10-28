import { useEffect, useState } from "react";
import type { NavigationItem } from "@/content";
import type { Theme } from "@/components/ThemeToggle";

interface HeaderProps {
  name: string;
  navigation: readonly NavigationItem[];
  navigationLabel: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  theme: Theme;
  onToggleTheme: () => void;
  themeToggleLabels: {
    lightLabel: string;
    darkLabel: string;
    switchToLight: string;
    switchToDark: string;
  };
}

export default function Header({
  name,
  navigation,
  navigationLabel,
  menuOpenLabel,
  menuCloseLabel,
  theme,
  onToggleTheme,
  themeToggleLabels,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const sectionElements = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);
    if (!sectionElements.length || !("IntersectionObserver" in window)) return;

    const visibleSections = new Set<HTMLElement>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target as HTMLElement;
        if (entry.isIntersecting) visibleSections.add(section);
        else visibleSections.delete(section);
      });
      const closestSection = [...visibleSections].sort((a, b) =>
        Math.abs(a.getBoundingClientRect().top - window.innerHeight * 0.25)
        - Math.abs(b.getBoundingClientRect().top - window.innerHeight * 0.25),
      )[0];
      if (closestSection) setActiveHref(`#${closestSection.id}`);
    }, { rootMargin: "-18% 0px -68% 0px", threshold: 0 });

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navigation]);

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? themeToggleLabels.switchToLight : themeToggleLabels.switchToDark}
          aria-pressed={theme === "dark"}
          title={theme === "dark" ? themeToggleLabels.switchToLight : themeToggleLabels.switchToDark}
          className="theme-name-hint inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-border bg-card px-5 py-2 font-heading text-xl text-foreground shadow-sm transition-[color,background-color,border-color,box-shadow] hover:border-primary hover:bg-secondary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-6 sm:text-2xl"
        >
          {name}
        </button>

        <div className="flex items-center gap-2">
          <nav
            id="primary-navigation"
            aria-label={navigationLabel}
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full order-3 w-full flex-col gap-1 border-b border-border bg-background px-5 py-3 shadow-md sm:px-8 md:static md:order-none md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeHref === item.href ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
                className="nav-ink-link rounded px-2 py-2 text-sm font-medium text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" className="text-xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
