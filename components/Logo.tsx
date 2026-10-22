import Image from "next/image";
import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  // The brand artwork is orange-on-transparent, designed for dark surfaces.
  // The header (forest), footer (forest-deep) and hero backdrops are all dark,
  // so one artwork serves everywhere — header and footer look identical.
  const size = compact ? { w: 96, h: 52, cls: "h-11" } : { w: 128, h: 69, cls: "h-14" };

  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 items-center"
      aria-label="Havy Tours and Travel — home"
    >
      <Image
        src="/images/brand/havy-logo-main.png"
        alt="Havy Tours and Travel"
        width={size.w}
        height={size.h}
        priority
        className={`w-auto transition-transform duration-300 group-hover:-translate-y-0.5 ${size.cls}`}
      />
    </Link>
  );
}
