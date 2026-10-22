import Reveal from "@/components/Reveal";
import { partners } from "@/lib/partners";

/**
 * A quiet logo wall in the spirit of the original site's "Our Partners"
 * section — neutral cards, the genuine logos at natural aspect, in the same
 * order they appear on havytours.com.
 */
export default function Partners() {
  return (
    <section className="border-t border-line bg-cream-deep py-16 sm:py-20">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="max-w-xl">
            <p className="eyebrow text-clay">Our partners</p>
            <h2 className="mt-4 font-display text-[1.8rem] font-semibold leading-[1.1] text-ink sm:text-[2.3rem]">
              Trusted across Uganda&apos;s travel and education sectors.
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
              We work with the operators, lodges, schools and associations behind the
              trips — the same names you&apos;d see on our old site, for the same reason.
            </p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <ul className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <li key={p.logo}>
                <div className="grid h-28 place-items-center rounded-xl border border-line bg-white p-5 transition-colors duration-300 hover:border-ink/20">
                  {/* remote hotlink, not optimisable from the sandbox */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={p.name}
                    loading="lazy"
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <p className="mt-3 text-center text-[0.78rem] font-medium text-muted">
                  {p.name}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
