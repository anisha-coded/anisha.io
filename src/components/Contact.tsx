import Button from "@/components/Button";
import Section from "@/components/Section";

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
      <Section id="open-to-work" label={openToWork.label} title={openToWork.title}>
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
                <a className="font-medium text-foreground underline decoration-terra underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={link.href}>
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
