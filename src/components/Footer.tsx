interface FooterProps {
  name: string;
  email: string;
  content: {
    prompt: string;
    sayHello: string;
    note: string;
  };
}

export default function Footer({ name, email, content }: FooterProps) {
  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-base leading-relaxed text-foreground">
            {content.prompt}{" "}
            <a
              className="font-semibold underline decoration-terra underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={`mailto:${email}`}
            >
              {content.sayHello}
            </a>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{content.note}</p>
        </div>
        <p className="font-semibold text-foreground">{name}</p>
      </div>
    </footer>
  );
}
