import type { Metadata } from "next";
import { Suspense } from "react";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TourExplorer from "@/components/TourExplorer";
import { categories, tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "All tours & safaris",
  description:
    "Gorilla trekking, wildlife safaris, Nile adventures, Kampala city tours, honeymoons and international travel — every Havy Tours trip in one place, filterable by type, length and budget.",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="All experiences"
        title={`${tours.length} ways to see Uganda — and beyond.`}
        text="Every itinerary below is one we operate ourselves. Filter by what you feel like doing, how long you've got and what you'd rather spend, then tell us your dates."
        image="https://havytours.com/wp-content/uploads/2023/09/Queen-Elizabeth-Havy-Tours-1024x576.jpg"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/tours", label: "Tours" },
        ]}
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Suspense
            fallback={
              <div className="py-20 text-center text-[0.9rem] text-muted">
                Loading trips…
              </div>
            }
          >
            <TourExplorer />
          </Suspense>
        </div>
      </section>

      {/* Category explainer */}
      <section className="border-t border-line bg-cream-deep py-20 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-[1.9rem] font-semibold leading-[1.1] text-ink sm:text-[2.4rem]">
              Not sure which one is you?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={i * 60}>
                <div className="h-full rounded-[16px] border border-line bg-white p-6">
                  <span className="grid size-10 place-items-center rounded-lg bg-forest/[0.07] text-forest">
                    <Icon name={c.icon as never} size={19} />
                  </span>
                  <h3 className="mt-4 font-display text-[1.08rem] font-semibold text-ink">
                    {c.label}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                    {c.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
