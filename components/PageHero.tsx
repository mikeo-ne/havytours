import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
  breadcrumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/70 to-forest-deep" />
      </div>

      <div className="relative mx-auto flex min-h-[62vh] max-w-[84rem] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44">
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 text-[0.8rem] text-cream/55"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                <Link
                  href={crumb.href}
                  className="link-underline hover:text-cream"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.028em] text-white sm:text-[3.6rem] lg:text-[4.2rem]">
          {title}
        </h1>
        {text && (
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-cream/72 sm:text-[1.15rem]">
            {text}
          </p>
        )}
      </div>

      <div className="pointer-events-none absolute bottom-8 right-5 hidden items-center gap-2 text-[0.75rem] uppercase tracking-[0.2em] text-cream/40 sm:flex sm:right-8">
        <Icon name="arrow-down" size={14} />
        Scroll
      </div>
    </section>
  );
}
