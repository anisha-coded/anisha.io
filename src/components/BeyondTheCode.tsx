import Section from "@/components/Section";

interface BeyondTheCodeProps {
  label: string;
  title: string;
  body: string;
}

export default function BeyondTheCode({ label, title, body }: BeyondTheCodeProps) {
  return (
    <Section id="beyond-the-code" label={label} title={title} className="bg-card">
      <p className="max-w-3xl border-l-2 border-terra pl-5 text-lg leading-relaxed text-muted-foreground">
        {body}
      </p>
    </Section>
  );
}
