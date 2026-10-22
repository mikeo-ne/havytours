import Link from "next/link";

export default function Logo({
  tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const primary = tone === "light" ? "text-white" : "text-ink";
  const secondary = tone === "light" ? "text-white/60" : "text-ink/55";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="Havy Tours and Travel — home"
    >
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-[10px] bg-clay font-display text-[1.35rem] leading-none text-white shadow-[0_6px_18px_-6px_rgba(194,100,58,0.8)] transition-transform duration-300 group-hover:-rotate-6 ${
          compact ? "size-9 text-[1.2rem]" : ""
        }`}
      >
        H
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[1.32rem] font-semibold tracking-tight ${primary}`}
          >
            Havy Tours
          </span>
          <span
            className={`mt-[3px] text-[0.6rem] font-medium tracking-[0.28em] ${secondary}`}
          >
            &amp; TRAVEL · UGANDA
          </span>
        </span>
      )}
    </Link>
  );
}
