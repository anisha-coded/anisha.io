import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  title?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  labelClassName?: string;
}

export default function Section({
  id,
  label,
  title,
  children,
  className = "",
  titleClassName = "",
  labelClassName = "text-xs",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      aria-label={title ? undefined : label}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className={`font-mono font-medium uppercase tracking-[0.18em] text-foreground ${labelClassName}`}>
          {label}
        </p>
        {title && (
          <h2
            id={`${id}-title`}
            className={`type-section-title mt-3 max-w-3xl text-foreground ${titleClassName}`}
          >
            {title}
          </h2>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
