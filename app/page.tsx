import Image from "next/image";
import Link from "next/link";
import Accordion, { FaqSchema } from "@/components/Accordion";
import CtaBand from "@/components/CtaBand";
import CustomTrip from "@/components/CustomTrip";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import TourCard from "@/components/TourCard";
import { categories, featuredTours, tours } from "@/lib/tours";
import { epicEscapades } from "@/lib/brands";
import { faqs, stats, steps, whyUs } from "@/lib/content";

export default function HomePage() {
  const [lead, ...rest] = featuredTours;
  const gridTours = rest.slice(0, 3);

  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest-deep">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="A mountain gorilla in the misty rainforests of southwestern Uganda"
            fill
            priority
            sizes="100vw"
            className="hero-drift object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/85" />
        </div>

        <div className="relative mx-auto w-full max-w-[84rem] px-5 pb-14 pt-40 sm:px-8 sm:pb-20 sm:pt-48">
          <p className="eyebrow text-gold">Kampala, Uganda · Since 2016</p>

          <h1 className="mt-6 max-w-5xl font-display text-[3rem] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-[4.6rem] lg:text-[5.6rem]">
            The Pearl of Africa,
            <br />
            <span className="text-gold">planned to the last permit.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-cream/78 sm:text-[1.18rem]">
            Gorilla trekking, savanna safaris, the source of the Nile and city days —
            designed and operated from Kampala by people who run these routes
            themselves. Pick a trip below, or let us build one around you.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-deep hover:shadow-[0_16px_34px_-14px_rgba(194,100,58,0.95)]"
            >
              Browse {tours.length} trips
              <Icon name="arrow-right" size={16} />
            </Link>
            <Link
              href="/contact#enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-[0.95rem] font-semibold text-cream backdrop-blur-sm transition-colors hover:border-cream hover:bg-cream/10"
            >
              Plan something custom
            </Link>
          </div>

          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-7 border-t border-cream/15 pt-9 sm:grid-cols-4">
            {[
              { k: `${tours.length}`, v: "Curated trips" },
              { k: "9", v: "Years on the ground" },
              { k: "48h", v: "To a full itinerary" },
              { k: "24/7", v: "WhatsApp support" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-[1.9rem] font-semibold leading-none text-white">
                  {s.k}
                </dt>
                <dd className="mt-2 text-[0.8rem] leading-snug text-cream/55">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────────────── SIGNATURE JOURNEYS ───────────────────── */}
      <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow text-clay">Signature journeys</p>
                <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
                  The four trips we book most often.
                </h2>
              </div>
              <Link
                href="/tours"
                className="inline-flex shrink-0 items-center gap-2 text-[0.9rem] font-semibold text-clay link-underline"
              >
                See all {tours.length} trips
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <Reveal className="lg:row-span-2">
              <TourCard tour={lead} size="large" priority />
            </Reveal>
            <div className="grid gap-7">
              {gridTours.map((tour, i) => (
                <Reveal key={tour.slug} delay={i * 90}>
                  <TourCard tour={tour} priority={i === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── EXPERIENCE TYPES ───────────────────── */}
      <section className="border-y border-line bg-cream-deep py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-clay">What we do</p>
              <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
                Six ways to spend your time here.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => {
              const count = tours.filter((t) => t.category === c.id).length;
              return (
                <Reveal key={c.id} delay={i * 70}>
                  <Link
                    href={`/tours?category=${c.id}`}
                    className="group flex h-full flex-col rounded-[18px] border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-clay/40 hover:shadow-card"
                  >
                    <span className="grid size-12 place-items-center rounded-xl bg-forest/[0.07] text-forest transition-colors duration-400 group-hover:bg-clay group-hover:text-white">
                      <Icon name={c.icon as never} size={23} />
                    </span>
                    <h3 className="mt-6 font-display text-[1.28rem] font-semibold text-ink">
                      {c.label}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[0.93rem] leading-relaxed text-ink-soft">
                      {c.blurb}
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 text-[0.83rem] font-semibold text-clay">
                      {count} {count === 1 ? "trip" : "trips"}
                      <Icon
                        name="arrow-right"
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────── WHY US ───────────────────── */}
      <section className="relative bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow text-clay">Why Havy</p>
                <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
                  We run these routes. We don&apos;t resell them.
                </h2>
                <p className="mt-6 text-[1rem] leading-relaxed text-ink-soft">
                  Havy Tours &amp; Travel Uganda Limited has been designing and
                  operating trips from Kampala since 2016 — our own vehicles, our own
                  guides, and relationships at every park gate in the country.
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-clay link-underline"
                >
                  Read our story
                  <Icon name="arrow-right" size={15} />
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-x-10 gap-y-11 sm:grid-cols-2">
              {whyUs.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div>
                    <span className="grid size-11 place-items-center rounded-xl bg-clay/10 text-clay">
                      <Icon name={item.icon} size={21} />
                    </span>
                    <h3 className="mt-5 font-display text-[1.15rem] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[0.93rem] leading-relaxed text-ink-soft">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── STATS ───────────────────── */}
      <section className="bg-ink py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="border-l border-cream/12 pl-6">
                  <p className="font-display text-[2.6rem] font-semibold leading-none text-gold sm:text-[3.1rem]">
                    {s.value}
                  </p>
                  <p className="mt-3 text-[0.92rem] font-medium text-cream">{s.label}</p>
                  <p className="mt-1 text-[0.82rem] text-cream/45">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── MORE FROM HAVY ───────────────────── */}
      <section className="relative overflow-hidden border-y border-line bg-cream-deep py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-clay">More from Havy</p>
              <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
                Two more ways we do this.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <Reveal>
              <Link
                href="/epic-escapades"
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <Image
                    src={epicEscapades.image}
                    alt="A red water bike on the Nile at Jinja, Uganda"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow text-clay">Our adventure brand</p>
                  <h3 className="mt-3 font-display text-[1.6rem] font-semibold text-ink">
                    Epic Escapades
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    Water biking, tubing, boat rides to the source of the Nile, quad
                    biking, kayaking, rafting, zip-lining and corporate team building —
                    run by our own team in Jinja, open every day.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-clay">
                    Explore Epic Escapades
                    <Icon
                      name="arrow-right"
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={110}>
              <Link
                href="/tours?category=honeymoon"
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <Image
                    src="/images/honeymoon.jpg"
                    alt="A dhow boat off a Zanzibar beach at sunset"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow text-clay">Honeymoon</p>
                  <h3 className="mt-3 font-display text-[1.6rem] font-semibold text-ink">
                    Destinations around the world
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    Private guides, quiet lodges and island finishes — Zanzibar,
                    Mombasa, Seychelles, Dubai and the Maldives, or a safari with
                    nobody else in the vehicle.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-clay">
                    See honeymoon trips
                    <Icon
                      name="arrow-right"
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────── HOW IT WORKS ───────────────────── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-clay">How it works</p>
              <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
                Three steps, no guesswork.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div className="relative h-full rounded-[18px] border border-line bg-white p-8">
                  <span className="font-display text-[3rem] font-semibold leading-none text-clay/20">
                    {s.step}
                  </span>
                  <h3 className="mt-4 font-display text-[1.3rem] font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CustomTrip id="custom" />

      {/* ───────────────────── FAQ ───────────────────── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow text-clay">Good to know</p>
                <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] text-ink sm:text-[2.9rem]">
                  Questions we get every week.
                </h2>
                <p className="mt-6 text-[1rem] leading-relaxed text-ink-soft">
                  Visas, jabs, difficulty levels and money — answered plainly. Anything
                  not here, ask us directly.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border-t border-line">
                <Accordion
                  items={faqs.map((f) => ({ title: f.q, content: f.a }))}
                  defaultOpen={0}
                />
              </div>
              <FaqSchema items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
