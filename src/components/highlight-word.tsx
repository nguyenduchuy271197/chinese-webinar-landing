import { ReactNode } from "react";

export default function HighlightWord({ children }: { children: ReactNode }) {
  return (
    <span className="relative mx-[0.2em] text-primary inline-flex">
      {children}
      <svg
        viewBox="0 0 396 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[92%] left-0 stroke-secondary"
      >
        <path
          d="M2 15C92.8023 6.70527 278.836 -4.11519 394 6.25321"
          stroke="#F4B205"
          strokeWidth={5}
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
