import Image from "next/image";
import EnquiryForm from "./EnquiryForm";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function CustomTrip({
  image = "/images/tours/kidepo.jpg",
  id,
}: {
  image?: string;
  id?: string;
}) {
  return (
    <section id={id} className="bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-clay">Nothing fit? Good.</p>
              <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] text-ink sm:text-[2.9rem]">
                Let&apos;s build the trip that isn&apos;t on this website.
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-ink-soft">
                Roughly half of what we run is designed from scratch — around a budget,
                a set of dates, or one specific thing somebody wants to do before
                they&apos;re eighty. Tell us the shape of it and we&apos;ll come back
                with a day-by-day plan and a price that doesn&apos;t move.
              </p>

              <ul className="mt-8 space-y-3.5">
                {[
                  "A day-by-day itinerary within 48 hours",
                  "A fixed quote — no surprise add-ons",
                  "Permits, lodges, transfers and timing handled",
                  "One named trip designer from start to finish",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink-soft">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-forest text-cream">
                      <Icon name="check" size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 overflow-hidden rounded-[18px] border border-line">
                <Image
                  src={image}
                  alt="Open plains and distant mountains in Kidepo Valley, northeastern Uganda"
                  width={900}
                  height={620}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <EnquiryForm
              defaultTour="Custom itinerary"
              heading="Plan a custom trip"
              submitLabel="Request an itinerary"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
