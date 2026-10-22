import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { categoryLabel, formatPrice, type Tour } from "@/lib/tours";

export default function TourCard({
  tour,
  size = "default",
  priority = false,
}: {
  tour: Tour;
  size?: "default" | "large";
  priority?: boolean;
}) {
  const large = size === "large";

  return (
    <article className="group h-full">
      <Link
        href={`/tours/${tour.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-[18px] border border-line/70 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-line hover:shadow-lift"
      >
        <div
          className={`relative w-full overflow-hidden bg-sand ${
            large ? "aspect-[16/11]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={tour.image}
            alt={tour.name}
            fill
            priority={priority}
            sizes={large ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full bg-cream/92 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur-sm">
            {categoryLabel(tour.category)}
          </span>

          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/45 px-3 py-1.5 text-[0.72rem] font-medium text-white backdrop-blur-sm">
            <Icon name="calendar" size={13} />
            {tour.days} {tour.days === 1 ? "day" : "days"}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="flex items-center gap-1.5 text-[0.78rem] text-muted">
            <Icon name="pin" size={14} className="text-clay" />
            {tour.location}
          </p>

          <h3
            className={`mt-3 font-display font-semibold leading-[1.18] text-ink ${
              large ? "text-[1.75rem]" : "text-[1.28rem]"
            }`}
          >
            {tour.name}
          </h3>

          <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">
            {tour.summary}
          </p>

          <div className="mt-auto flex items-end justify-between gap-4 border-t border-line/70 pt-5 [margin-top:1.5rem]">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted">
                {tour.priceOnRequest ? "Price" : "From"}
              </p>
              <p className="mt-1 font-display text-[1.5rem] font-semibold leading-none text-ink">
                {formatPrice(tour)}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-clay">
              View tour
              <Icon
                name="arrow-right"
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
