interface PostmarkProps {
  className?: string;
}

export default function Postmark({ className = "" }: PostmarkProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 64 64" fill="none" className={`pointer-events-none ${className}`}>
      <circle cx="40" cy="34" r="18" stroke="currentColor" strokeWidth="1.6" />
      <g className="postmark-cancel-lines" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 19c7-5 12 5 19 0s12 5 19 0" />
        <path d="M1 26c7-5 12 5 19 0s12 5 19 0" />
        <path d="M2 33c7-5 12 5 19 0s12 5 19 0" />
      </g>
    </svg>
  );
}
