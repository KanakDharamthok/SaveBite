import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="140"
      height="40"
      {...props}
    >
      <path
        d="M25.5,47.5 C12.5,47.5 2.5,37.5 2.5,24.5 C2.5,11.5 12.5,1.5 25.5,1.5 C38.5,1.5 48.5,11.5 48.5,24.5 C48.5,30.5 46.5,35.5 42.5,40.5"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M25.5,1.5 C20.5,10.5 20.5,20.5 30.5,24.5"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text
        x="55"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
      >
        SaveBite
      </text>
    </svg>
  );
}
