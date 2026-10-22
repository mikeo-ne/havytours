import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  epicActivities,
  epicEscapades,
  epicRidePricing,
  ugx,
} from "@/lib/brands";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Epic Escapades — adventure on the Nile",
  description:
    "Water biking, tubing, boat rides to the source of the Nile, quad biking, kayaking, rafting, zip-lining and corporate team building in Jinja. A product of Havy Tours and Travel (U) Ltd.",
};

const facts = [
  { icon: "clock" as const, label: "Opening hours", value: epicEscapades.hours },
  { icon: "pin" as const, label: "Where", value: "Jinja City, Uganda" },
  { icon: "phone" as const, label: "Bookings", value: epicEscapades.phones.join(" / ") },
  { icon: "mail" as const, label: "Email", value: epicEscapades.email },
];

function PricingTable({
  label,
  currency,
  rows,
}: {
  label: string;
  currency: string;
  rows: readonly { duration: string; adult: number; child: number }[];
}) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-line bg-white">
      <div className="border-b border-line bg-cream-deep px-6 py-4">
        <h3 className="font-display text-[1.05rem] font-semibold text-ink">{label}</h3>
        <p className="mt-0.5 text-[0.78rem] uppercase tracking-[0.12em] text-muted">
          Prices in {currency}
        </p>
      </div>
      <table className="w-full text-left text-[0.92rem]">
        <thead>
          <tr className="border-b border-line text-[0.72rem] uppercase tracking-[0.12em] text-muted">
            <th scope="col" className="px-6 py-3 font-medium">
              Ride
            </th>
            <th scope="col" className="px-3 py-3 text-right font-medium">
              Adult
            </th>
            <th scope="col" className="px-6 py-3 text-right font-medium">
              Child
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.duration} className="border-b border-line/60 last:border-0">
              <td className="px-6 py-4 font-medium text-ink">{row.duration}</td>
              <td className="px-3 py-4 text-right text-ink-soft">
                {currency === "UGX" ? ugx(row.adult) : `US$${row.adult}`}
              </td>
              <td className="px-6 py-4 text-right text-ink-soft">
                {currency === "UGX" ? ugx(row.child) : `US$${row.child}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EpicEscapadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our adventure brand"
        title="Epic Escapades"
        text="Water bikes, jet skis, tubing, boat cruises and everything else that gets you on the Nile — run by our own team in Jinja, an hour and a half from Kampala."
        image={epicEscapades.image}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/epic-escapades", label: "Epic Escapades" },
        ]}
      />

      {/* ── INTRO ── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <Reveal>
              <div>
                <p className="eyebrow text-clay">{epicEscapades.tagline}</p>
                <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-ink sm:text-[2.7rem]">
                  A day on the water, or a week of it.
                </h2>
                <p className="mt-6 text-[1.02rem] leading-relaxed text-ink-soft">
                  {epicEscapades.intro}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-clay/25 bg-clay/[0.06] px-4 py-2 text-[0.82rem] font-medium text-clay-deep">
                  <Icon name="star" size={14} />
                  {epicEscapades.parent}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={epicEscapades.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3.5 text-[0.93rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-deep hover:shadow-[0_14px_30px_-14px_rgba(194,100,58,0.95)]"
                  >
                    Book on epicescapadesug.com
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a
                    href={whatsappLink(
                      "256773064420",
                      "Hello Epic Escapades, I'd like to book an adventure in Jinja.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-[0.93rem] font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-cream-deep"
                  >
                    <Icon name="whatsapp" size={16} />
                    WhatsApp the Jinja team
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-[16px] border border-line bg-white p-5 sm:col-span-2"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-forest/[0.07] text-forest">
                        <Icon name={f.icon} size={19} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted">
                          {f.label}
                        </p>
                        <p className="mt-1 break-words text-[0.93rem] text-ink">
                          {f.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="rounded-[16px] border border-line bg-cream-deep p-5 sm:col-span-2">
                  <div className="flex items-start gap-3.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-clay/10 text-clay">
                      <Icon name="pin" size={19} />
                    </span>
                    <div>
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted">
                        Find us
                      </p>
                      <p className="mt-1 text-[0.93rem] leading-relaxed text-ink">
                        {epicEscapades.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section className="border-y border-line bg-cream-deep py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow text-clay">What&apos;s on offer</p>
                <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-ink sm:text-[2.7rem]">
                  Twelve ways to get wet.
                </h2>
              </div>
              <p className="shrink-0 text-[0.85rem] text-muted">
                East African resident rates, per person
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {epicActivities.map((activity, i) => (
              <Reveal key={activity.name} delay={(i % 3) * 70}>
                <div className="group flex h-full flex-col rounded-[18px] border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-clay/40 hover:shadow-card">
                  <span className="grid size-11 place-items-center rounded-xl bg-forest/[0.07] text-forest transition-colors duration-400 group-hover:bg-clay group-hover:text-white">
                    <Icon name={activity.icon as never} size={21} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.15rem] font-semibold text-ink">
                    {activity.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-ink-soft">
                    {activity.note}
                  </p>
                  <p className="mt-5 border-t border-line pt-4 font-display text-[1.2rem] font-semibold text-clay">
                    {ugx(activity.priceUgx)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RIDE PRICING ── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-clay">Price list</p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-ink sm:text-[2.5rem]">
                Rides by the half hour or the hour.
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-ink-soft">
                The water-bike and jet-ski fleet is priced by ride length, with
                East African resident and non-resident rates.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <PricingTable
                label={epicRidePricing.resident.label}
                currency={epicRidePricing.resident.currency}
                rows={epicRidePricing.resident.rows}
              />
            </Reveal>
            <Reveal delay={100}>
              <PricingTable
                label={epicRidePricing.nonResident.label}
                currency={epicRidePricing.nonResident.currency}
                rows={epicRidePricing.nonResident.rows}
              />
            </Reveal>
          </div>

          <Reveal delay={140}>
            <p className="mt-6 inline-flex items-start gap-2 rounded-xl border border-dashed border-line bg-white/60 px-4 py-3 text-[0.82rem] text-muted">
              <Icon name="star" size={14} className="mt-0.5 shrink-0 text-clay" />
              {epicRidePricing.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PLAN A DAY ── */}
      <section className="border-t border-line bg-forest px-5 py-20 text-cream sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[84rem]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="eyebrow text-gold">Make a day of it</p>
                <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-white sm:text-[2.7rem]">
                  Add Epic Escapades to any Jinja trip.
                </h2>
                <p className="mt-6 text-[1.02rem] leading-relaxed text-cream/72">
                  Every one of our Jinja itineraries can bolt on a water-bike session,
                  a sunset cruise or a full corporate team-building day. Tell us the
                  group and the date and we&apos;ll build it into the route.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/contact?tour=1-day-jinja-adventure-safari#enquiry"
                    className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3.5 text-[0.93rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-deep"
                  >
                    Plan a Jinja day
                    <Icon name="arrow-right" size={15} />
                  </Link>
                  <Link
                    href="/tours?category=adventure"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-[0.93rem] font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
                  >
                    See adventure trips
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="divide-y divide-cream/12 border-y border-cream/12">
                {[
                  { k: "Open", v: epicEscapades.hours },
                  { k: "Where", v: "Nile Crescent Road, next to Jinja Sailing Club" },
                  { k: "Phone", v: epicEscapades.phones.join("  ·  ") },
                  { k: "Email", v: epicEscapades.email },
                  { k: "Group bookings", v: "Corporate days from " + ugx(450000) },
                ].map((row) => (
                  <li
                    key={row.k}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="text-[0.72rem] uppercase tracking-[0.14em] text-cream/45">
                      {row.k}
                    </span>
                    <span className="text-[0.95rem] text-cream sm:text-right">
                      {row.v}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
