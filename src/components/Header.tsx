import { useState } from "react";
import type { NavigationItem } from "@/content";
import type { Theme } from "@/components/ThemeToggle";
import ThemeToggle from "@/components/ThemeToggle";

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

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="font-display text-xl text-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {name}
        </a>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} {...themeToggleLabels} />
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

        <nav
          id="primary-navigation"
          aria-label={navigationLabel}
          className={`${menuOpen ? "flex" : "hidden"} order-3 w-full flex-col gap-1 border-t border-border pt-3 md:order-none md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-0 md:pt-0`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded px-2 py-2 text-sm font-medium text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
