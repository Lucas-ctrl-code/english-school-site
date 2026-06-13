type CourseIconProps = {
  id: string;
  className?: string;
};

export function CourseIcon({ id, className = "h-6 w-6" }: CourseIconProps) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (id) {
    case "english":
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h10M4 17h14" />
          <circle cx="19" cy="17" r="2" />
        </svg>
      );
    case "exam":
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      );
    case "interview":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3" />
          <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M18 10l2 2-2 2" />
        </svg>
      );
    case "business":
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
          <path d="M3 12h18" />
        </svg>
      );
    case "travel":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 3 3.5 6 3.5 9s-1 6-3.5 9M12 3c-2.5 3-3.5 6-3.5 9s1 6 3.5 9" />
        </svg>
      );
    case "private":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
