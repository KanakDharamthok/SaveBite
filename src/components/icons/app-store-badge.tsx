import type { SVGProps } from "react";

export function AppStoreBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="120" height="40" rx="5" ry="5" fill="#000" />
      <g fill="#fff">
        <path d="M16.4 13.9c-.8 0-1.5.2-2.1.6-.6.4-1.1 1-1.3 1.7-.3 1 .1 2 .8 2.8.7.8 1.8 1.2 2.9 1.2.8 0 1.5-.2 2.1-.6.6-.4.9-1 .9-1.6 0-.1-.1-.1 0 0h-3.4c-1.3 0-2-.8-2-2.2 0-1.4.7-2.3 2.1-2.3h3.8c.1-.8-.2-1.6-.8-2.1-.6-.6-1.4-1-2.3-1zm.3 2.9h.8c.4 0 .6.3.6.8s-.2.8-.6.8h-.8c-.4 0-.6-.3-.6-.8s.2-.8.6-.8z" />
        <path d="M9.3 12.3c0-.6.5-1 1.2-1 .7 0 1.1.4 1.1 1v15.3c0 .6-.4 1-1.1 1-.6 0-1.1-.4-1.1-1V12.3zm20.8 1.8c-.8 0-1.5.2-2.1.6-.6.4-1.1 1-1.3 1.7-.3 1 .1 2 .8 2.8.7.8 1.8 1.2 2.9 1.2.8 0 1.5-.2 2.1-.6.6-.4.9-1 .9-1.6 0-.1 0-.1 0 0h-3.4c-1.3 0-2-.8-2-2.2 0-1.4.7-2.3 2.1-2.3h3.8c.1-.8-.2-1.6-.8-2.1-.6-.6-1.4-1-2.3-1zm.3 2.9h.8c.4 0 .6.3.6.8s-.2.8-.6.8h-.8c-.4 0-.6-.3-.6-.8s.2-.8.6-.8z" />
        <text x="35" y="19" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold">Download on the</text>
        <text x="35" y="31" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">App Store</text>
      </g>
    </svg>
  );
}
