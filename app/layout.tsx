import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFab from "@/components/WhatsAppFab";

export const metadata: Metadata = {
  metadataBase: new URL("https://havytours.com"),
  title: {
    default: "Havy Tours & Travel — Uganda safaris, city days & worldwide travel",
    template: "%s · Havy Tours & Travel Uganda",
  },
  description:
    "A Kampala-based destination management company designing gorilla trekking, wildlife safaris, Nile adventures, city tours and international travel since 2016.",
  keywords: [
    "Uganda safari",
    "gorilla trekking Uganda",
    "Kampala city tour",
    "Murchison Falls safari",
    "Queen Elizabeth National Park",
    "Bwindi gorilla permit",
    "source of the Nile",
    "Uganda tour operator",
  ],
  openGraph: {
    title: "Havy Tours & Travel — Uganda, planned properly",
    description:
      "Gorilla trekking, wildlife safaris, Nile adventures, city tours and international travel, designed and operated from Kampala since 2016.",
    type: "website",
    locale: "en_UG",
    siteName: "Havy Tours & Travel Uganda Limited",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-UG">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
