interface StarburstProps {
  className?: string;
}

export default function Starburst({ className = "" }: StarburstProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 240"
      fill="currentColor"
      focusable="false"
      className={className}
    >
      {Array.from({ length: 8 }, (_, index) => (
        <path
          key={index}
          d="M114 0h12l-3 120h-6z"
          transform={`rotate(${index * 45} 120 120)`}
        />
      ))}
    </svg>
  );
}
