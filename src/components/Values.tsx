import Section from "@/components/Section";

interface ValueItem {
  title: string;
  body: string;
}

interface ValuesProps {
  label: string;
  title: string;
  items: readonly ValueItem[];
}

export default function Values({ label, title, items }: ValuesProps) {
  return (
    <Section id="values" label={label} title={title} className="bg-secondary/25">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-sm border border-border bg-card p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-8">
            <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
