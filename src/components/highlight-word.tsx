import { ReactNode } from "react";

export default function HighlightWord({ children }: { children: ReactNode }) {
  return (
    <span className="relative mx-4 text-[#C61F05] inline-flex">
      {children}
      <svg
        viewBox="0 0 188 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[92%] left-0"
      >
        <path
          d="M2 14.4126C12.3462 11.6536 23.6925 11.495 34.2934 9.34035C54.9672 5.13835 76.7597 4.18101 97.7811 3.00003C127.149 1.35016 156.711 2.23919 186.123 2.23919"
          stroke="#FBB808"
          strokeWidth={3}
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
