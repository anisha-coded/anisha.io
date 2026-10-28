interface DoodleArrowProps {
  className?: string;
}

export default function DoodleArrow({ className = "" }: DoodleArrowProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 52 40" fill="none" className={`pointer-events-none ${className}`}>
      <path d="M49 2C37 3 41 13 31 18 24 22 19 22 8 31m0 0 10-3m-10 3 5 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
