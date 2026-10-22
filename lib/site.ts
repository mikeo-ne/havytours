export const site = {
  name: "Havy Tours",
  legalName: "Havy Tours & Travel Uganda Limited",
  shortName: "Havy",
  tagline: "The Pearl of Africa, planned properly.",
  founded: 2016,
  email: "travel@havytours.com",
  website: "www.havytours.com",
  address: {
    lines: ["NSA Mall, Level 2, Suite B07", "Ntinda – Kiwatule Road", "Kampala, Uganda"],
    oneLine: "NSA Mall, Level 2, Suite B07, Ntinda–Kiwatule Road, Kampala, Uganda",
  },
  phones: [
    { label: "Mobile / WhatsApp", value: "+256 773 064420", href: "tel:+256773064420" },
    { label: "Mobile / WhatsApp", value: "+256 701 444020", href: "tel:+256701444020" },
    { label: "Telephone", value: "+256 393 208565", href: "tel:+256393208565" },
  ],
  whatsapp: [
    { label: "Admin", number: "256393208565" },
    { label: "Helpline", number: "256773064420" },
    { label: "Reservations", number: "256705073845" },
  ],
  hours: [
    { day: "Monday – Friday", time: "8:30 – 18:00 EAT" },
    { day: "Saturday", time: "9:00 – 15:00 EAT" },
    { day: "Sunday & public holidays", time: "On call via WhatsApp" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "X", href: "https://x.com/" },
  ],
} as const;

export function whatsappLink(number: string, message?: string) {
  const base = `https://api.whatsapp.com/send?phone=${number}`;
  return message ? `${base}&text=${encodeURIComponent(message)}` : base;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/epic-escapades", label: "Epic Escapades" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
