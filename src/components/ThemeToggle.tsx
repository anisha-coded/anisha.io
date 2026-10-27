export type Theme = "light" | "dark";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  lightLabel: string;
  darkLabel: string;
  switchToLight: string;
  switchToDark: string;
}

export default function ThemeToggle({
  theme,
  onToggle,
  lightLabel,
  darkLabel,
  switchToLight,
  switchToDark,
}: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? switchToLight : switchToDark}
      aria-pressed={isDark}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-foreground transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span aria-hidden="true">{isDark ? "☾" : "☼"}</span>
      <span>{isDark ? darkLabel : lightLabel}</span>
    </button>
  );
}
