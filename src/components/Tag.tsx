interface TagProps {
  children: string;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}
