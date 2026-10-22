import type { SVGProps } from "react";

export type IconName =
  | "paw"
  | "gorilla"
  | "mountain"
  | "city"
  | "heart"
  | "plane"
  | "arrow-right"
  | "arrow-down"
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "check"
  | "star"
  | "compass"
  | "shield"
  | "wallet"
  | "users"
  | "calendar"
  | "quote"
  | "whatsapp"
  | "sun"
  | "globe"
  | "car";

const paths: Record<IconName, React.ReactNode> = {
  paw: (
    <>
      <ellipse cx="6.5" cy="8" rx="1.9" ry="2.5" />
      <ellipse cx="17.5" cy="8" rx="1.9" ry="2.5" />
      <ellipse cx="12" cy="4.6" rx="2.1" ry="2.7" />
      <path d="M12 12.5c3 0 5.4 1.9 5.4 4.2 0 2-1.8 3.3-4 3.3-1 0-1.9-.3-2.7-.9-.8.6-1.7.9-2.7.9-2.2 0-4-1.3-4-3.3 0-2.3 2.4-4.2 5.4-4.2Z" />
    </>
  ),
  gorilla: (
    <>
      <circle cx="12" cy="9" r="5.2" />
      <circle cx="9.6" cy="8.4" r="0.85" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="8.4" r="0.85" fill="currentColor" stroke="none" />
      <path d="M6.8 9.4C5.6 9.4 4.6 10.4 4.6 11.6s1 2.2 2.2 2.2M17.2 9.4c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2" />
      <path d="M8.6 14.2c1.1 1.1 2.1 1.7 3.4 1.7s2.3-.6 3.4-1.7" />
      <path d="M8 18.4c1.6 1.4 2.6 2 4 2s2.4-.6 4-2" />
    </>
  ),
  mountain: (
    <>
      <path d="M3 19.5 9.8 8.2l3.6 6.1 2.2-3.3L21 19.5H3Z" />
      <path d="M8.4 10.9 6.6 14h3.7l1.5-2.6" />
    </>
  ),
  city: (
    <>
      <path d="M3.5 20.5v-11h6v11" />
      <path d="M9.5 20.5V6h7v14.5" />
      <path d="M16.5 20.5v-7h4v7" />
      <path d="M6 12.5h1M6 15.5h1M12.5 9.5h1.5M12.5 12.5h1.5M12.5 15.5h1.5" />
      <path d="M2.5 20.5h19" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.4a4.4 4.4 0 0 1 7.5 3c0 5-7.5 9.6-7.5 9.6Z" />
  ),
  plane: (
    <>
      <path d="M10.5 12.8 3 10.3V8.4l7.5 2.4V4.2c0-.9.6-1.7 1.5-1.7s1.5.8 1.5 1.7v6.6L21 8.4v1.9l-7.5 2.5v3.1l2.4 1.7v1.5L12 18.2l-3.9.9v-1.5l2.4-1.7v-3.1Z" />
    </>
  ),
  "arrow-right": <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />,
  "arrow-down": <path d="M12 4v15m0 0 5.5-5.5M12 19l-5.5-5.5" />,
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  phone: (
    <path d="M6.5 3.5h2.2l1.6 4-2 1.4a10.5 10.5 0 0 0 5.3 5.3l1.4-2 4 1.6v2.2c0 1-.8 1.9-1.9 1.9C10.4 17.9 6.1 13.6 6.1 5.4c0-1.1.9-1.9 1.9-1.9Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.6" />
      <path d="m3.8 7 8.2 5.8L20.2 7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.6 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </>
  ),
  check: <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />,
  star: (
    <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8L12 3.6Z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.2 8.8-2 4.4-4.4 2 2-4.4 4.4-2Z" />
    </>
  ),
  shield: (
    <path d="M12 3.2 19 6v5.6c0 4.2-2.9 7.7-7 9.2-4.1-1.5-7-5-7-9.2V6l7-2.8Z" />
  ),
  wallet: (
    <>
      <rect x="3" y="6.5" width="18" height="12.5" rx="2" />
      <path d="M3 10.5h18M16.5 14.5h1.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 20c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" />
      <path d="M16 5.7a3.2 3.2 0 0 1 0 6.1M17.5 14.9c2 .7 3.4 2.6 3.4 5.1" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3.5v4M16 3.5v4" />
    </>
  ),
  quote: (
    <path d="M9.5 6.5C6.9 7.9 5.5 10.2 5.5 13v4.5h5.2V11.8H8.1c.2-1.4.9-2.5 2.3-3.4l-0.9-1.9Zm9 0c-2.6 1.4-4 3.7-4 6.5v4.5h5.2V11.8h-2.6c.2-1.4.9-2.5 2.3-3.4l-0.9-1.9Z" />
  ),
  whatsapp: (
    <>
      <path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 21l5-1.2A8.4 8.4 0 1 0 12 3.5Z" />
      <path d="M9 8.6c0 3 2.4 5.4 5.4 5.4.9 0 1.9-.5 2.2-1.1l-1.6-1c-.3.3-1 .4-1.4-.1-.2-.3-.5-.7-.9-.9-.3-.2-.8-.1-1 .1l-.9.9c-.6-.3-1.6-1.4-1.8-2.1.4-.3.8-.6 1-.8.3-.2.4-.7.2-1l-1-1.5C9.6 6.9 9 7.7 9 8.6Z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M5.6 18.4l1.7-1.7M16.7 7.3l1.7-1.7" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5S14.4 18.2 12 20.5c-2.4-2.3-3.6-5.3-3.6-8.5S9.6 5.8 12 3.5Z" />
    </>
  ),
  car: (
    <>
      <path d="M4 16.5v-3.2l1.8-4.4A2 2 0 0 1 7.7 7.5h8.6a2 2 0 0 1 1.9 1.4l1.8 4.4v3.2" />
      <path d="M3 16.5h18M4 16.5v2.2h3v-2.2M17 16.5v2.2h3v-2.2" />
      <path d="M6.6 12.2h10.8" />
    </>
  ),
};

export default function Icon({
  name,
  size = 24,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
