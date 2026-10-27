import Section from "@/components/Section";

interface CuriositiesProps {
  label: string;
  title: string;
  items: readonly string[];
}

export default function Curiosities({ label, title, items }: CuriositiesProps) {
  return (
    <Section id="curiosities" label={label} title={title}>
      <ul className="divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li key={item} className="grid gap-3 py-5 sm:grid-cols-[2rem_1fr] sm:gap-5">
            <span aria-hidden="true" className="font-heading text-2xl text-terra">✳</span>
            <p className="max-w-3xl text-lg leading-relaxed text-foreground">{item}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
