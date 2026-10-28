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
    <Section id="values" label={label} title={title} className="bg-secondary/25 dark:bg-secondary/45">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <article key={item.title} className="relative rounded-sm border border-border bg-card p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="type-card-title text-foreground">{item.title}</h3>
              <span aria-hidden="true" className="shrink-0 font-heading text-3xl italic leading-none text-accent-red">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
