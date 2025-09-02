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
        d="M35.2,40.8c-4.3,2.8-9.5,3.9-14.8,3.1c-5.2-0.8-9.8-3.4-13.2-7.4c-4.9-5.8-6.3-14-3.5-21.2C6,7.9,13.2,3,21.6,2.6 c8.4-0.4,16.1,4.2,20.1,11.5c1.4,2.5,2.1,5.3,2.2,8.1"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <path
        d="M23.9,2.8c0,0,14.6,13.1,23.3,21.2"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeMiterlimit="10"
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
