import Image from "next/image";
import Link from "next/link";

export default function Logo({
  tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light" | "footer";
  compact?: boolean;
}) {
  // "dark" = a dark surface, where the orange artwork reads on its own.
  // "light" = a light surface, so the artwork is recoloured to ink for contrast.
  // "footer" = the forest footer, where the artwork is recoloured to cream.
  const src =
    tone === "light"
      ? "/images/brand/havy-logo-neutral.png"
      : tone === "footer"
        ? "/images/brand/havy-logo-footer.png"
        : "/images/brand/havy-logo-main.png";

  const size = compact ? { w: 96, h: 52, cls: "h-11" } : tone === "footer" ? { w: 150, h: 81, cls: "h-[4.6rem]" } : { w: 128, h: 69, cls: "h-14" };

  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 items-center"
      aria-label="Havy Tours and Travel — home"
    >
      <Image
        src={src}
        alt="Havy Tours and Travel"
        width={size.w}
        height={size.h}
        priority
        className={`w-auto transition-transform duration-300 group-hover:-translate-y-0.5 ${size.cls}`}
      />
    </Link>
  );
}
