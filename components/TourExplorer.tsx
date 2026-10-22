"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import TourCard from "./TourCard";
import Icon from "./Icon";
import {
  categories,
  durationBands,
  priceBands,
  tours,
  type TourCategory,
} from "@/lib/tours";

type Sort = "featured" | "price-asc" | "price-desc" | "days-asc";

const selectClass =
  "appearance-none rounded-full border border-line bg-white px-4 py-2.5 pr-9 text-[0.85rem] font-medium text-ink transition-colors hover:border-ink/25 focus:border-clay focus:outline-none";

export default function TourExplorer() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as TourCategory | null;

  const [category, setCategory] = useState<TourCategory | "all">(
    initialCategory && categories.some((c) => c.id === initialCategory)
      ? initialCategory
      : "all",
  );
  const [duration, setDuration] = useState<string>("any");
  const [budget, setBudget] = useState<string>("any");
  const [sort, setSort] = useState<Sort>("featured");

  const results = useMemo(() => {
    const durationTest = durationBands.find((d) => d.id === duration)?.test ?? (() => true);
    const budgetTest = priceBands.find((b) => b.id === budget)?.test ?? (() => true);

    const filtered = tours.filter(
      (t) =>
        (category === "all" || t.category === category) &&
        durationTest(t.days) &&
        (budget === "any" || budgetTest(t.priceFrom)),
    );

    const sorted = [...filtered];
    if (sort === "price-asc") sorted.sort((a, b) => a.priceFrom - b.priceFrom);
    if (sort === "price-desc") sorted.sort((a, b) => b.priceFrom - a.priceFrom);
    if (sort === "days-asc") sorted.sort((a, b) => a.days - b.days);
    if (sort === "featured")
      sorted.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

    return sorted;
  }, [category, duration, budget, sort]);

  const active = category !== "all" || duration !== "any" || budget !== "any";

  function reset() {
    setCategory("all");
    setDuration("any");
    setBudget("any");
    setSort("featured");
  }

  return (
    <div>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`rounded-full border px-4 py-2.5 text-[0.85rem] font-medium transition-all duration-300 ${
            category === "all"
              ? "border-ink bg-ink text-cream"
              : "border-line bg-white text-ink-soft hover:border-ink/30 hover:text-ink"
          }`}
        >
          All experiences
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.id)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.85rem] font-medium transition-all duration-300 ${
              category === c.id
                ? "border-ink bg-ink text-cream"
                : "border-line bg-white text-ink-soft hover:border-ink/30 hover:text-ink"
            }`}
          >
            <Icon name={c.icon as never} size={15} />
            {c.label}
          </button>
        ))}
      </div>

      {/* Refine row */}
      <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-line pt-7">
        <span className="eyebrow text-muted">Refine</span>

        <div className="relative">
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            aria-label="Filter by length"
            className={selectClass}
          >
            {durationBands.map((d) => (
              <option key={d.id} value={d.id}>
                {d.label}
              </option>
            ))}
          </select>
          <Icon
            name="arrow-down"
            size={13}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
          />
        </div>

        <div className="relative">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            aria-label="Filter by budget"
            className={selectClass}
          >
            {priceBands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
          <Icon
            name="arrow-down"
            size={13}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
          />
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            aria-label="Sort results"
            className={selectClass}
          >
            <option value="featured">Sort: featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="days-asc">Shortest first</option>
          </select>
          <Icon
            name="arrow-down"
            size={13}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
          />
        </div>

        <div className="ml-auto flex items-center gap-4">
          <p className="text-[0.87rem] text-muted">
            <span className="font-semibold text-ink">{results.length}</span>{" "}
            {results.length === 1 ? "trip" : "trips"}
          </p>
          {active && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-clay link-underline"
            >
              Clear filters
              <Icon name="close" size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[18px] border border-dashed border-line bg-white/60 px-8 py-16 text-center">
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-cream-deep text-muted">
            <Icon name="compass" size={22} />
          </span>
          <h3 className="mt-5 font-display text-xl font-semibold text-ink">
            Nothing matches that combination
          </h3>
          <p className="mx-auto mt-3 max-w-md text-[0.95rem] text-ink-soft">
            That&apos;s usually a sign we should design it from scratch. Clear the
            filters, or tell us what you had in mind and we&apos;ll build it.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.9rem] font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Clear filters
            <Icon name="arrow-right" size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
