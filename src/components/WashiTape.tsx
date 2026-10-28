interface WashiTapeProps {
  className?: string;
}

export default function WashiTape({ className = "" }: WashiTapeProps) {
  return <span aria-hidden="true" className={`washi-tape pointer-events-none absolute -top-2 left-9 z-10 h-3 w-12 ${className}`} />;
}
