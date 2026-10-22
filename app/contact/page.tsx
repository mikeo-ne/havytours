import type { Metadata } from "next";
import { Suspense } from "react";
import ContactEnquiry from "@/components/ContactEnquiry";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & enquiries",
  description:
    "Talk to Havy Tours & Travel Uganda Limited in Kampala. WhatsApp, phone, email or the enquiry form — we reply with a full itinerary and a fixed price within 48 hours.",
};

const channels = [
  {
    icon: "whatsapp" as const,
    title: "WhatsApp",
    lines: site.whatsapp.map((w) => ({
      label: `${w.label} · +${w.number}`,
      href: whatsappLink(w.number, "Hello Havy Tours, I'd like to plan a trip."),
    })),
  },
  {
    icon: "phone" as const,
    title: "Call",
    lines: site.phones.map((p) => ({ label: p.value, href: p.href })),
  },
  {
    icon: "mail" as const,
    title: "Email",
    lines: [{ label: site.email, href: `mailto:${site.email}` }],
  },
  {
    icon: "clock" as const,
    title: "Opening hours",
    lines: site.hours.map((h) => ({ label: `${h.day} — ${h.time}`, href: "" })),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us where you want to wake up."
        text="One message is enough to start. We'll come back with a day-by-day itinerary and a price that doesn't move — usually within 48 hours."
        image="/images/tours/kampala-city.jpg"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Details */}
            <div>
              <Reveal>
                <h2 className="font-display text-[1.8rem] font-semibold text-ink sm:text-[2.2rem]">
                  Our office
                </h2>
                <div className="mt-6 rounded-[18px] border border-line bg-white p-7">
                  <div className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-clay/10 text-clay">
                      <Icon name="pin" size={21} />
                    </span>
                    <div>
                      <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-muted">
                        Head office
                      </p>
                      <p className="mt-2 font-display text-[1.05rem] font-semibold text-ink">
                        {site.legalName}
                      </p>
                      <p className="mt-2 text-[0.93rem] leading-relaxed text-ink-soft">
                        {site.address.lines.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-xl border border-line">
                    <div className="grid h-52 place-items-center bg-cream-deep">
                      <div className="px-6 text-center">
                        <Icon name="pin" size={26} className="mx-auto text-muted" />
                        <p className="mt-3 text-[0.88rem] font-medium text-ink">
                          Map placeholder
                        </p>
                        <p className="mt-1 text-[0.8rem] text-muted">
                          Embed Google Maps here before launch
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {channels.map((c, i) => (
                  <Reveal key={c.title} delay={i * 70}>
                    <div className="rounded-[16px] border border-line bg-white p-6">
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-lg bg-forest/[0.07] text-forest">
                          <Icon name={c.icon} size={18} />
                        </span>
                        <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                          {c.title}
                        </h3>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {c.lines.map((line) => (
                          <li key={line.label} className="text-[0.92rem]">
                            {line.href ? (
                              <a
                                href={line.href}
                                target={line.href.startsWith("http") ? "_blank" : undefined}
                                rel={line.href.startsWith("http") ? "noreferrer" : undefined}
                                className="link-underline text-ink-soft hover:text-ink"
                              >
                                {line.label}
                              </a>
                            ) : (
                              <span className="text-ink-soft">{line.label}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Form */}
            <div id="enquiry" className="scroll-mt-28">
              <Reveal delay={100}>
                <Suspense
                  fallback={
                    <div className="rounded-[18px] border border-line bg-white p-10 text-center text-[0.9rem] text-muted">
                      Loading form…
                    </div>
                  }
                >
                  <ContactEnquiry />
                </Suspense>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {site.whatsapp.map((w) => (
                    <a
                      key={w.number}
                      href={whatsappLink(
                        w.number,
                        "Hello Havy Tours, I'd like to plan a trip.",
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-[16px] border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:shadow-card"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#25D366]/12 text-[#1DA851]">
                        <Icon name="whatsapp" size={18} />
                      </span>
                      <span>
                        <span className="block text-[0.82rem] font-semibold text-ink">
                          {w.label}
                        </span>
                        <span className="block text-[0.76rem] text-muted">
                          +{w.number}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
