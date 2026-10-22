import Link from "next/link";
import CurrentYear from "./CurrentYear";
import Logo from "./Logo";
import Icon from "./Icon";
import { categories } from "@/lib/tours";
import { site, whatsappLink } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-cream/75">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[32rem] rounded-full bg-forest-mid/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-[84rem] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-cream/60">
              A Kampala-based destination management company building safaris, city
              days and international itineraries across Uganda and beyond — since{" "}
              {site.founded}.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {site.whatsapp.map((w) => (
                <a
                  key={w.number}
                  href={whatsappLink(
                    w.number,
                    `Hello Havy Tours (${w.label}), I'd like to plan a trip.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-3.5 py-2 text-[0.78rem] font-medium text-cream/80 transition-colors hover:border-cream/40 hover:text-cream"
                >
                  <Icon name="whatsapp" size={15} />
                  {w.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-cream/40">Explore</h3>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              {[
                { href: "/", label: "Home" },
                { href: "/tours", label: "All tours" },
                { href: "/epic-escapades", label: "Epic Escapades" },
                { href: "/about", label: "About us" },
                { href: "/contact", label: "Contact" },
                { href: "/contact#enquiry", label: "Plan a custom trip" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="link-underline text-cream/70 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-cream/40">Experiences</h3>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/tours?category=${c.id}`}
                    className="link-underline text-cream/70 hover:text-cream"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-cream/40">Find us</h3>
            <ul className="mt-5 space-y-4 text-[0.92rem]">
              <li className="flex gap-3">
                <Icon name="pin" size={17} className="mt-0.5 shrink-0 text-clay" />
                <span className="text-cream/70">
                  {site.address.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
              {site.phones.map((p) => (
                <li key={p.value} className="flex gap-3">
                  <Icon name="phone" size={17} className="mt-0.5 shrink-0 text-clay" />
                  <a
                    href={p.href}
                    className="link-underline text-cream/70 hover:text-cream"
                  >
                    {p.value}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Icon name="mail" size={17} className="mt-0.5 shrink-0 text-clay" />
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline text-cream/70 hover:text-cream"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-7 text-[0.82rem] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline hover:text-cream"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
