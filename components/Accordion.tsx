"use client";

import { useState, type ReactNode } from "react";
import Icon from "./Icon";

export type AccordionItem = { title: string; content: ReactNode };

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-[1.12rem] font-semibold leading-snug text-ink sm:text-[1.22rem]">
                {item.title}
              </span>
              <span
                className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-300 ${
                  isOpen ? "rotate-45 border-clay bg-clay text-white" : "hover:border-ink/40"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                  <path
                    d="M7 1.5v11M1.5 7h11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows,opacity] duration-400 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="pb-7 pr-12 text-[0.95rem] leading-relaxed text-ink-soft">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FaqSchema({ items }: { items: AccordionItem[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.title,
            acceptedAnswer: { "@type": "Answer", text: String(item.content) },
          })),
        }),
      }}
    />
  );
}

export function ChevronDown() {
  return <Icon name="arrow-down" size={16} />;
}
