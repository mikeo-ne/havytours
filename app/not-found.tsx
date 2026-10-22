import Link from "next/link";
import Icon from "@/components/Icon";
import { tours } from "@/lib/tours";

export default function NotFound() {
  const suggestions = tours.filter((t) => t.featured).slice(0, 3);

  return (
    <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-forest-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 size-[30rem] rounded-full bg-forest-mid/25 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[84rem] px-5 py-32 sm:px-8">
        <p className="eyebrow text-gold">Error 404</p>
        <h1 className="mt-5 max-w-2xl font-display text-[3rem] font-semibold leading-[1.02] text-white sm:text-[4.4rem]">
          This road doesn&apos;t go anywhere.
        </h1>
        <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-cream/70">
          The page you were looking for has moved or never existed. Here are three trips
          that definitely do.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-deep"
          >
            Back to home
            <Icon name="arrow-right" size={16} />
          </Link>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-[0.95rem] font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            Browse all trips
          </Link>
        </div>

        <ul className="mt-14 grid max-w-3xl gap-4 border-t border-cream/12 pt-10 sm:grid-cols-3">
          {suggestions.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/tours/${t.slug}`}
                className="group block text-[0.95rem] font-medium text-cream/75 transition-colors hover:text-cream"
              >
                <span className="block text-[0.72rem] uppercase tracking-[0.14em] text-gold/70">
                  {t.days} days
                </span>
                <span className="mt-1.5 block font-display text-[1.1rem]">{t.name}</span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[0.82rem] text-clay">
                  View trip
                  <Icon
                    name="arrow-right"
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
