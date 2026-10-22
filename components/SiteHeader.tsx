"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { useScrolled } from "@/lib/hooks";
import { navLinks, site, whatsappLink } from "@/lib/site";

export default function SiteHeader() {
  const scrolled = useScrolled(28);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        solid
          ? "border-b border-forest-mid/40 bg-forest-deep/92 shadow-[0_1px_20px_-8px_rgba(22,41,30,0.55)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[84rem] items-center justify-between px-5 transition-all duration-400 sm:px-8 ${
          scrolled ? "h-[68px]" : "h-[84px]"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[0.83rem] font-medium tracking-[0.01em] transition-colors duration-200 ${
                  active ? "text-cream" : "text-cream/75 hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-[2px] origin-left rounded-full bg-clay transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phones[0].value.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 text-[0.83rem] text-cream/80 transition-colors hover:text-cream xl:flex"
          >
            <Icon name="phone" size={15} />
            {site.phones[0].value}
          </a>
          <Link
            href="/contact#enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-[0.83rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-deep hover:shadow-[0_10px_24px_-10px_rgba(194,100,58,0.9)]"
          >
            Plan your trip
            <Icon name="arrow-right" size={15} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-10 place-items-center rounded-full text-cream transition-colors hover:bg-cream/10 lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-t border-forest-mid/40 bg-forest-deep transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 pb-6 pt-3 sm:px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream/10 py-3.5 font-display text-xl text-cream"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#enquiry"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-clay px-5 py-3.5 text-[0.95rem] font-semibold text-white"
          >
            Plan your trip
            <Icon name="arrow-right" size={16} />
          </Link>
          <a
            href={whatsappLink(site.whatsapp[2].number, "Hello Havy Tours, I'd like to plan a trip.")}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-5 py-3.5 text-[0.95rem] font-semibold text-cream"
          >
            <Icon name="whatsapp" size={17} />
            WhatsApp us
          </a>
        </nav>
      </div>
    </header>
  );
}
