import type { SVGProps } from "react";

export function GooglePlayBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="135" height="40" rx="5" ry="5" fill="#000" />
      <g fill="#fff">
        <path d="M15.5 8l-6.8 6.8v10.4l6.8 6.8 14-6.9-14-7.1z" fill="#00f076" />
        <path d="M8.8 14.8l8.3 4.7 6.4-3.7-8.3-4.7z" fill="#00d2ff" />
        <path d="M29.5 21.1l-14 7-6.7-3.8 14-7z" fill="#ff3161" />
        <path d="M8.8 32l6.8-6.8 8.3 4.7-6.8 6.8z" fill="#ffc107" />
        <text x="40" y="19" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold">GET IT ON</text>
        <text x="40" y="31" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">Google Play</text>
      </g>
    </svg>
  );
}
