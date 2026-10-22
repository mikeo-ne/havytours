import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import TourCard from "@/components/TourCard";
import {
  categoryLabel,
  formatPrice,
  getTour,
  relatedTours,
  tours,
  type Tour,
} from "@/lib/tours";
import { site, whatsappLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return { title: "Tour not found" };

  return {
    title: tour.name,
    description: tour.intro,
    openGraph: {
      title: `${tour.name} · Havy Tours`,
      description: tour.summary,
      images: [{ url: tour.image }],
    },
  };
}

function MetaChip({ icon, label, value }: { icon: never; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cream-deep text-clay">
        <Icon name={icon} size={19} />
      </span>
      <div>
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted">
          {label}
        </p>
        <p className="mt-0.5 text-[0.92rem] font-medium text-ink">{value}</p>
      </div>
    </div>
  );
}

/**
 * Thin shell so the route can stream its static shell immediately. The slug is
 * only awaited inside the Suspense boundary below, which keeps client-side
 * navigations to a tour page instant.
 */
export default function TourPage({ params }: Params) {
  return (
    <Suspense fallback={<TourSkeleton />}>
      <TourContent params={params} />
    </Suspense>
  );
}

function TourSkeleton() {
  return (
    <div className="flex min-h-[80vh] items-end bg-forest-deep">
      <div className="mx-auto w-full max-w-[84rem] px-5 pb-16 pt-40 sm:px-8">
        <div className="h-3 w-32 rounded-full bg-cream/12" />
        <div className="mt-6 h-12 w-2/3 rounded-lg bg-cream/12" />
        <div className="mt-3 h-12 w-1/3 rounded-lg bg-cream/12" />
        <p className="mt-10 text-[0.8rem] uppercase tracking-[0.2em] text-cream/35">
          Loading trip…
        </p>
      </div>
    </div>
  );
}

async function TourContent({ params }: Params) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const related = relatedTours(tour, 3);
  const gallery = [tour.image, ...tour.gallery].slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.summary,
    touristType: categoryLabel(tour.category),
    provider: {
      "@type": "TravelAgency",
      name: site.legalName,
      address: site.address.oneLine,
      telephone: site.phones[0].value,
      email: site.email,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ── */}
      <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-forest-deep">
        <div className="absolute inset-0">
          <Image
            src={tour.image}
            alt={tour.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/72 via-ink/45 to-ink/88" />
        </div>

        <div className="relative mx-auto w-full max-w-[84rem] px-5 pb-12 pt-36 sm:px-8 sm:pb-16 sm:pt-44">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-[0.8rem] text-cream/55"
          >
            <Link href="/" className="link-underline hover:text-cream">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/tours" className="link-underline hover:text-cream">
              Tours
            </Link>
            <span aria-hidden>/</span>
            <Link
              href={`/tours?category=${tour.category}`}
              className="link-underline hover:text-cream"
            >
              {categoryLabel(tour.category)}
            </Link>
          </nav>

          <p className="eyebrow text-gold">{categoryLabel(tour.category)}</p>
          <h1 className="mt-4 max-w-4xl font-display text-[2.4rem] font-semibold leading-[1.03] tracking-[-0.03em] text-white sm:text-[3.4rem] lg:text-[4rem]">
            {tour.name}
          </h1>

          <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.9rem] text-cream/65">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="pin" size={15} className="text-gold" />
              {tour.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="calendar" size={15} className="text-gold" />
              {tour.days} {tour.days === 1 ? "day" : "days"}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="users" size={15} className="text-gold" />
              {tour.groupSize}
            </span>
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.55fr_0.95fr] lg:gap-16">
            {/* Left column */}
            <div>
              <Reveal>
                <p className="font-display text-[1.3rem] font-medium leading-relaxed text-ink sm:text-[1.5rem]">
                  {tour.intro}
                </p>
              </Reveal>

              <Reveal delay={80}>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: "calendar" as never, label: "Duration", value: `${tour.days} ${tour.days === 1 ? "day" : "days"}` },
                    { icon: "users" as never, label: "Group size", value: tour.groupSize },
                    { icon: "sun" as never, label: "Best season", value: tour.bestSeason },
                    { icon: "compass" as never, label: "Style", value: categoryLabel(tour.category) },
                  ].map((m) => (
                    <MetaChip key={m.label} icon={m.icon} label={m.label} value={m.value} />
                  ))}
                </div>
              </Reveal>

              {/* Highlights */}
              <Reveal delay={100}>
                <div className="mt-14">
                  <h2 className="font-display text-[1.7rem] font-semibold text-ink sm:text-[2rem]">
                    What makes it worth it
                  </h2>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {tour.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 text-[0.93rem] leading-snug text-ink-soft"
                      >
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-forest text-cream">
                          <Icon name="check" size={12} />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Gallery */}
              <Reveal delay={100}>
                <div className="mt-14 grid grid-cols-3 gap-3">
                  {gallery.map((src, i) => (
                    <div
                      key={src + i}
                      className={`relative overflow-hidden rounded-[14px] bg-sand ${
                        i === 0 ? "col-span-3 aspect-[16/9]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${tour.name} — photo ${i + 1}`}
                        fill
                        sizes={i === 0 ? "100vw" : "33vw"}
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Itinerary */}
              <Reveal delay={100}>
                <div className="mt-14">
                  <h2 className="font-display text-[1.7rem] font-semibold text-ink sm:text-[2rem]">
                    Day by day
                  </h2>
                  <ol className="mt-8 border-l border-line pl-0">
                    {tour.itinerary.map((stop, i) => (
                      <li key={stop.label} className="relative pb-9 pl-8 last:pb-0">
                        <span className="absolute -left-[13px] top-1 grid size-[26px] place-items-center rounded-full border-2 border-cream bg-clay text-[0.62rem] font-bold text-white">
                          {i + 1}
                        </span>
                        <p className="eyebrow text-clay">{stop.label}</p>
                        <h3 className="mt-2 font-display text-[1.22rem] font-semibold text-ink">
                          {stop.title}
                        </h3>
                        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                          {stop.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              {/* Inclusions */}
              <Reveal delay={100}>
                <div className="mt-14 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-[18px] border border-line bg-white p-7">
                    <h3 className="font-display text-[1.2rem] font-semibold text-ink">
                      What&apos;s included
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {tour.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[0.92rem] leading-snug text-ink-soft"
                        >
                          <Icon
                            name="check"
                            size={16}
                            className="mt-0.5 shrink-0 text-forest"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[18px] border border-line bg-cream-deep/60 p-7">
                    <h3 className="font-display text-[1.2rem] font-semibold text-ink">
                      Not included
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {tour.excluded.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[0.92rem] leading-snug text-ink-soft"
                        >
                          <Icon
                            name="close"
                            size={16}
                            className="mt-0.5 shrink-0 text-muted"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right column — booking card */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-card">
                <div className="border-b border-line bg-ink px-7 py-7 text-cream">
                  <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-cream/50">
                    {tour.priceOnRequest ? "Price" : "From"}
                  </p>
                  <p className="mt-2 font-display text-[2.6rem] font-semibold leading-none text-white">
                    {formatPrice(tour)}
                  </p>
                  <p className="mt-2.5 text-[0.82rem] text-cream/55">
                    {tour.priceOnRequest
                      ? "Priced to your route, group size and season."
                      : "Per person, based on two sharing. Flexible payment plans available."}
                  </p>
                </div>

                <div className="p-7">
                  <Link
                    href={`/contact?tour=${tour.slug}#enquiry`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-deep hover:shadow-[0_14px_30px_-14px_rgba(194,100,58,0.95)]"
                  >
                    Enquire about this trip
                    <Icon name="arrow-right" size={16} />
                  </Link>

                  <a
                    href={whatsappLink(
                      site.whatsapp[2].number,
                      `Hello Havy Tours, I'd like to know more about the ${tour.name}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-cream-deep"
                  >
                    <Icon name="whatsapp" size={17} />
                    Ask on WhatsApp
                  </a>

                  <dl className="mt-7 space-y-4 border-t border-line pt-6 text-[0.88rem]">
                    {[
                      { icon: "calendar" as never, k: "Duration", v: `${tour.days} ${tour.days === 1 ? "day" : "days"}` },
                      { icon: "users" as never, k: "Group size", v: tour.groupSize },
                      { icon: "sun" as never, k: "Best season", v: tour.bestSeason },
                      { icon: "shield" as never, k: "Payments", v: "Deposit now, balance later" },
                    ].map((row) => (
                      <div key={row.k} className="flex items-start gap-3">
                        <Icon name={row.icon} size={17} className="mt-0.5 shrink-0 text-clay" />
                        <div>
                          <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-muted">
                            {row.k}
                          </dt>
                          <dd className="mt-0.5 text-ink">{row.v}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-6 rounded-xl bg-cream-deep px-4 py-3.5 text-[0.83rem] leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">Book now, pay later.</span>{" "}
                    Secure the permit with a deposit and settle the balance before you
                    travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="border-t border-line bg-cream-deep py-20 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-[1.9rem] font-semibold text-ink sm:text-[2.4rem]">
                You might also like
              </h2>
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-clay link-underline"
              >
                All trips
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t: Tour, i: number) => (
              <Reveal key={t.slug} delay={i * 80}>
                <TourCard tour={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
