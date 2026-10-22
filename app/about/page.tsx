import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import Reveal from "@/components/Reveal";
import { milestones, placeholdersUsed, services, stats, team, values } from "@/lib/content";
import { epicEscapades } from "@/lib/brands";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Havy Tours & Travel Uganda Limited — a Kampala destination management company operating since 2016, skilling 63 tour companies through YUTO and building product across Uganda.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A Kampala company that runs its own trips."
        text="Founded in 2016 as a private destination management company, Havy Tours & Travel has grown into one of Uganda's better-known operators — and into a training body for the industry around it."
        image="/images/about-team.jpg"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />

      {/* ── STORY ── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="eyebrow text-clay">Our story</p>
                <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-ink sm:text-[2.6rem]">
                  Built on a passion for showing people places.
                </h2>
                <div className="mt-6 space-y-5 text-[1rem] leading-relaxed text-ink-soft">
                  <p>
                    Havy Tours &amp; Travel Uganda Limited is a full-service destination
                    management company based in Kampala. We plan and run trips for
                    everyone from single travellers and honeymooners to families,
                    business travellers, student groups and conference delegations.
                  </p>
                  <p>
                    Our largest market sits in the mid-range and luxury bracket. That
                    means comfortable vehicles, lodges we&apos;ve actually stayed in,
                    and guides who know the rangers by name. By operating consistently
                    at that level, we&apos;ve built a client base that comes back — and
                    sends other people.
                  </p>
                  <p>
                    Our team is experienced, knowledgeable and multilingual, with
                    in-depth product knowledge and a commitment to every part of travel
                    and tourism management. Standards are monitored by qualified
                    supervisors, because consistency is what actually keeps a company
                    good.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div className="overflow-hidden rounded-[20px] border border-line">
                  <Image
                    src="/images/tours/lake-bunyonyi.jpg"
                    alt="The terraced hills and islands of Lake Bunyonyi in southwestern Uganda"
                    width={1000}
                    height={1150}
                    className="h-[26rem] w-full object-cover lg:h-[34rem]"
                  />
                </div>
                <div className="absolute -bottom-8 -left-6 hidden rounded-[16px] border border-line bg-white p-6 shadow-lift sm:block lg:-left-10">
                  <p className="font-display text-[2.4rem] font-semibold leading-none text-clay">
                    9
                  </p>
                  <p className="mt-2 max-w-[9rem] text-[0.85rem] leading-snug text-ink-soft">
                    years of designing and operating trips across Uganda
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section className="border-y border-line bg-cream-deep py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow text-clay">What drives us</p>
                <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-ink sm:text-[2.6rem]">
                  Mission, vision, values.
                </h2>
                <div className="mt-8 rounded-[18px] border border-line bg-white p-7">
                  <h3 className="font-display text-[1.15rem] font-semibold text-ink">
                    Our mission
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                    To deliver exciting, adventurous and exceptional tours and travel
                    services across Uganda at the most efficient cost.
                  </p>
                  <div className="my-6 h-px bg-line" />
                  <h3 className="font-display text-[1.15rem] font-semibold text-ink">
                    Our vision
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                    To create unforgettable, first-class tourism experiences as a top
                    tours and travel agency in Uganda.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="flex gap-5 rounded-[18px] border border-line bg-white p-7">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-forest text-cream">
                      <Icon name="check" size={19} />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.25rem] font-semibold text-ink">
                        {v.title}
                      </h3>
                      <p className="mt-2.5 text-[0.96rem] leading-relaxed text-ink-soft">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={280}>
                <div className="rounded-[18px] border border-clay/25 bg-clay/[0.06] p-7">
                  <h3 className="font-display text-[1.25rem] font-semibold text-ink">
                    Our objectives
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Deliver first-class, cost-effective tour packages in Uganda.",
                      "Integrate the world tourism market locally.",
                      "Meet the growing demand for destination Uganda.",
                      "Expose Uganda's natural beauty through film, TV and documentary work.",
                    ].map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-3 text-[0.94rem] leading-snug text-ink-soft"
                      >
                        <Icon
                          name="arrow-right"
                          size={15}
                          className="mt-1 shrink-0 text-clay"
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
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

      {/* ── TIMELINE ── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-clay">Track record</p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-ink sm:text-[2.7rem]">
                Nine years, and the industry around us.
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-ink-soft">
                Beyond our own trips, we train and organise. Our Executive Director
                chairs the board of Young Uganda Tour Operators, and much of our work
                now goes into building product and skills across the sector.
              </p>
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 70} as="li">
                <div className="h-full border-t-2 border-clay pt-6">
                  <p className="font-display text-[1.6rem] font-semibold leading-none text-clay">
                    {m.year}
                  </p>
                  <h3 className="mt-4 font-display text-[1.15rem] font-semibold text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-ink-soft">
                    {m.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="border-t border-line bg-cream-deep py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-clay">What we handle</p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-ink sm:text-[2.6rem]">
                Everything around the trip, not just the trip.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="h-full rounded-[18px] border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                  <span className="grid size-11 place-items-center rounded-xl bg-forest/[0.07] text-forest">
                    <Icon name={s.icon} size={21} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.15rem] font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-ink-soft">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTURES ── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-clay">Our ventures</p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-ink sm:text-[2.6rem]">
                Two brands under one roof.
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
                  <p className="eyebrow text-clay">Adventure · Jinja</p>
                  <h3 className="mt-3 font-display text-[1.5rem] font-semibold text-ink">
                    Epic Escapades
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    Our adventure brand on Lake Victoria and the Nile — water biking,
                    tubing, boat cruises, quad biking, kayaking, rafting, zip-lining and
                    corporate team building. Born from an Aga Khan Foundation grant and
                    now running daily in Jinja.
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
                  <p className="eyebrow text-clay">Romance · Worldwide</p>
                  <h3 className="mt-3 font-display text-[1.5rem] font-semibold text-ink">
                    Honeymoon — destinations around the world
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    Private vehicles, quiet lodges and island finishes. Zanzibar,
                    Mombasa, Seychelles, Dubai and the Maldives — or a Ugandan safari
                    with nobody else in the vehicle.
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

      {/* ── TEAM ── */}
      <section className="border-t border-line bg-cream-deep py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow text-clay">The team</p>
                <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-ink sm:text-[2.6rem]">
                  The people who&apos;ll pick up.
                </h2>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-clay/25 bg-clay/[0.06] px-4 py-2 text-[0.78rem] font-medium text-clay-deep">
                <Icon name="star" size={14} />
                Placeholder — add real names and photos
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.role} delay={i * 70}>
                <div className="overflow-hidden rounded-[18px] border border-line bg-white">
                  <div className="grid aspect-[4/5] place-items-center bg-cream-deep">
                    <span className="grid size-16 place-items-center rounded-full bg-white text-muted">
                      <Icon name="users" size={28} />
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="font-display text-[1.05rem] font-semibold text-ink">
                      {member.name}
                    </p>
                    <p className="mt-1 text-[0.85rem] text-muted">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 rounded-[18px] border border-dashed border-line bg-white/60 p-7">
              <h3 className="flex items-center gap-2 font-display text-[1.05rem] font-semibold text-ink">
                <Icon name="star" size={16} className="text-clay" />
                Prototype note
              </h3>
              <p className="mt-2 text-[0.92rem] text-ink-soft">
                These items are placeholder content and need real material before this
                goes live:
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {placeholdersUsed.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-[0.9rem] text-ink-soft"
                  >
                    <Icon
                      name="arrow-right"
                      size={14}
                      className="mt-1 shrink-0 text-clay"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <Partners />

      <CtaBand />
    </>
  );
}
