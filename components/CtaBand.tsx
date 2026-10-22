import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site, whatsappLink } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-forest px-5 py-20 text-cream sm:px-8 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-[26rem] rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 size-[24rem] rounded-full bg-forest-mid/40 blur-3xl"
      />

      <Reveal>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="eyebrow text-gold">Book now, pay later</p>
          <h2 className="mt-5 font-display text-[2.2rem] font-semibold leading-[1.06] text-white sm:text-[3.1rem]">
            The Pearl of Africa is a two-hour flight from most of the world&apos;s
            problems.
          </h2>
          <p className="mt-6 max-w-xl text-[1.03rem] leading-relaxed text-cream/72">
            Flexible payment plans, friendly cancellation terms and a team on WhatsApp
            from the first message to the drive home.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-deep hover:shadow-[0_14px_32px_-14px_rgba(194,100,58,0.95)]"
            >
              Browse all tours
              <Icon name="arrow-right" size={16} />
            </Link>
            <a
              href={whatsappLink(
                site.whatsapp[2].number,
                "Hello Havy Tours, I'd like to plan a trip.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-[0.95rem] font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
            >
              <Icon name="whatsapp" size={17} />
              WhatsApp reservations
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
