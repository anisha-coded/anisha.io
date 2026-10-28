import Button from "@/components/Button";
import Section from "@/components/Section";
import Starburst from "@/components/Starburst";

interface ContactProps {
  ctaLabel: string;
  openToWork: { label: string; title: string; body: string };
  contact: {
    label: string;
    title: string;
    email: string;
    linkedin: string;
    github: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
}

function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

export default function Contact({ ctaLabel, openToWork, contact }: ContactProps) {
  const links = [
    { label: contact.emailLabel, value: contact.email, href: `mailto:${contact.email}` },
    { label: contact.linkedinLabel, value: contact.linkedin, href: contact.linkedin },
    { label: contact.githubLabel, value: contact.github, href: contact.github },
  ];

  return (
    <>
      <Section id="open-to-work" label={openToWork.label} title={openToWork.title} className="relative isolate overflow-hidden">
        <Starburst className="pointer-events-none absolute right-[6%] top-1/2 hidden w-[clamp(9rem,15vw,17rem)] -translate-y-1/2 text-secondary/70 lg:block" />
        <Starburst className="pointer-events-none absolute right-[20%] top-[17%] hidden w-7 rotate-12 text-primary/45 lg:block" />
        <Starburst className="pointer-events-none absolute bottom-[18%] right-[5%] hidden w-5 -rotate-6 text-primary/40 lg:block" />
        <Starburst className="pointer-events-none absolute bottom-[24%] right-[23%] hidden w-6 rotate-6 text-primary/40 lg:block" />
        <Starburst className="pointer-events-none absolute right-[11%] top-[20%] hidden w-4 -rotate-12 text-primary/35 lg:block" />
        <Starburst className="pointer-events-none absolute bottom-[17%] right-[15%] hidden w-4 rotate-12 text-primary/35 lg:block" />
        <Starburst className="pointer-events-none absolute right-[29%] top-1/2 hidden w-3 -rotate-6 text-primary/30 lg:block" />
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">{openToWork.body}</p>
          <Button href="#contact" className="mt-7">{ctaLabel}</Button>
        </div>
      </Section>
      <Section id="contact" label={contact.label} title={contact.title} className="bg-card">
        <ul className="flex flex-wrap gap-x-8 gap-y-4">
          {links.map((link) => (
            <li key={link.label}>
              <span className="mr-2 font-mono text-xs uppercase tracking-wider text-foreground">{link.label}</span>
              {isPlaceholder(link.value) ? (
                <span className="font-medium text-foreground">{link.value}</span>
              ) : (
                <a className="inline-flex min-h-11 items-center rounded-full border border-accent-red-deep bg-accent-red-deep px-4 py-2 font-medium text-card shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href={link.href}>
                  {link.label === contact.emailLabel ? link.value.replace("mailto:", "") : link.value.replace("https://", "")}
                </a>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
