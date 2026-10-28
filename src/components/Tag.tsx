interface TagProps {
  children: string;
  shared?: boolean;
}

export default function Tag({ children, shared = false }: TagProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs ${shared ? "shared-skill-tag bg-secondary/50 text-foreground" : "border-border bg-background text-muted-foreground"}`}>
      {shared && <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-red-deep ring-1 ring-card" />}
      {children}
    </span>
  );
}
