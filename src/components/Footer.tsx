interface FooterProps {
  name: string;
  message: string;
  github: string;
}

export default function Footer({ name, message, github }: FooterProps) {
  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{message}</p>
        <a className="font-semibold text-foreground underline decoration-terra underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={github}>
          {name}
        </a>
      </div>
    </footer>
  );
}
