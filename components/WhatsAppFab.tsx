"use client";

import { useState } from "react";
import Icon from "./Icon";
import { useScrolled } from "@/lib/hooks";
import { site, whatsappLink } from "@/lib/site";

export default function WhatsAppFab() {
  const visible = useScrolled(500);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-400 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {open && (
        <div className="w-[16.5rem] overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
          <div className="flex items-center gap-3 bg-forest px-4 py-3.5 text-cream">
            <Icon name="whatsapp" size={22} />
            <div>
              <p className="text-[0.9rem] font-semibold leading-tight">Chat with us</p>
              <p className="text-[0.72rem] text-cream/65">Replies in a few minutes</p>
            </div>
          </div>
          <div className="p-2">
            {site.whatsapp.map((w) => (
              <a
                key={w.number}
                href={whatsappLink(w.number, "Hello Havy Tours, I'd like to plan a trip.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[0.88rem] text-ink transition-colors hover:bg-cream-deep"
              >
                <span>
                  {w.label}
                  <span className="ml-2 text-[0.78rem] text-muted">+{w.number}</span>
                </span>
                <Icon name="arrow-right" size={14} className="text-clay" />
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp menu" : "Chat on WhatsApp"}
        aria-expanded={open}
        className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-105"
      >
        <Icon name={open ? "close" : "whatsapp"} size={26} />
      </button>
    </div>
  );
}
