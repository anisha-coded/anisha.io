interface FooterProps {
  name: string;
  message: string;
}

export default function Footer({ name, message }: FooterProps) {
  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{message}</p>
        <p className="font-semibold text-foreground">{name}</p>
      </div>
    </footer>
  );
}
