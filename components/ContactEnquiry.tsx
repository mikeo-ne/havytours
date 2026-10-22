"use client";

import { useSearchParams } from "next/navigation";
import EnquiryForm from "./EnquiryForm";
import { getTour } from "@/lib/tours";

export default function ContactEnquiry() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("tour");
  const tour = slug ? getTour(slug) : undefined;

  if (tour) {
    return (
      <EnquiryForm
        defaultTour={tour.name}
        tourLocked
        heading={`Enquire: ${tour.name}`}
        subheading="We'll confirm availability, permits and a firm price within 48 hours."
        submitLabel="Send enquiry"
      />
    );
  }

  return (
    <EnquiryForm
      heading="Send us a message"
      subheading="Tell us what you're after — even roughly — and we'll come back with an itinerary and a price."
      submitLabel="Send message"
    />
  );
}
