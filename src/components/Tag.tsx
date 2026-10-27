interface TagProps {
  children: string;
  shared?: boolean;
}

export default function Tag({ children, shared = false }: TagProps) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 font-mono text-xs ${shared ? "border-terra/50 bg-secondary/50 text-foreground" : "border-border bg-background text-muted-foreground"}`}>
      {children}
    </span>
  );
}
