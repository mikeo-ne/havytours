import Icon from "./Icon";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-20 text-cream sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 size-[28rem] rounded-full bg-forest-mid/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-gold">What travellers say</p>
              <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.1] text-white sm:text-[2.9rem]">
                Every trip ends with somebody telling a friend.
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-[0.78rem] text-cream/60">
              <Icon name="star" size={14} className="text-gold" />
              Sample content — replace before launch
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-[18px] border border-cream/12 bg-cream/[0.045] p-7 backdrop-blur-sm">
                <Icon name="quote" size={30} className="text-gold/80" />
                <blockquote className="mt-5 flex-1 text-[1rem] leading-relaxed text-cream/82">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-cream/12 pt-5">
                  <p className="text-[0.92rem] font-semibold text-cream">{t.name}</p>
                  <p className="mt-1 text-[0.82rem] text-cream/50">
                    {t.origin} · {t.trip}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
