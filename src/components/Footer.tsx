interface FooterProps {
  name: string;
  location: string;
  email: string;
  content: {
    prompt: string;
    sayHello: string;
    note: string;
  };
}

export default function Footer({ name, location, email, content }: FooterProps) {
  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-base leading-relaxed text-foreground">
            {content.prompt}{" "}
            <a
              className="inline-flex min-h-11 items-center rounded-full border border-accent-red-deep bg-accent-red-deep px-4 py-2 font-bold text-card shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href={`mailto:${email}`}
            >
              {content.sayHello}
            </a>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{content.note} <span aria-hidden="true" className="text-accent-red-deep">❤</span></p>
        </div>
        <div>
          <p className="font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </footer>
  );
}
