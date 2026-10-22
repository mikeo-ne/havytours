import type { IconName } from "@/components/Icon";

/**
 * Content that is NOT sourced from the live havytours.com site.
 * Anything with `placeholder: true` is invented sample content for the
 * prototype and must be replaced with real material before launch.
 */

export const stats = [
  { value: "2016", label: "Operating since", note: "Founded in Kampala" },
  { value: "9", label: "Years designing trips", note: "Across Uganda & beyond" },
  { value: "63", label: "Tour companies skilled", note: "Through YUTO training" },
  { value: "50+", label: "Operators connected", note: "Rubirizi Tourism Association" },
];

export const whyUs: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "compass",
    title: "Routes we actually run",
    text: "Every itinerary here is one we operate ourselves, with our own vehicles and guides — not a resold package.",
  },
  {
    icon: "shield",
    title: "Permits handled early",
    text: "Gorilla and chimpanzee permits are limited and sell out months ahead. We secure yours at the point of booking.",
  },
  {
    icon: "wallet",
    title: "Honest pricing, easy terms",
    text: "One clear quote, no surprise add-ons, flexible instalment plans and a cancellation policy written in plain English.",
  },
  {
    icon: "users",
    title: "A human on the other end",
    text: "A named trip designer from first enquiry to the drive home, reachable on WhatsApp at any hour of your trip.",
  },
];

export const steps = [
  {
    step: "01",
    title: "Tell us the shape of it",
    text: "Budget, dates, and the one thing you really want to do. A message or a call is enough to start.",
  },
  {
    step: "02",
    title: "We design and quote",
    text: "Within 48 hours you get a day-by-day itinerary with a fixed price. We revise it until it fits.",
  },
  {
    step: "03",
    title: "You travel, we handle it",
    text: "Permits, lodges, transfers and timing all run in the background. You just show up.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  origin: string;
  trip: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We booked six days with Havy on a friend's recommendation and it was the easiest trip we've ever taken. The gorilla permit was sorted before we'd even paid the deposit.",
    name: "PLACEHOLDER — Sarah & Tom",
    origin: "Manchester, UK",
    trip: "6-Day Best of Uganda",
    placeholder: true,
  },
  {
    quote:
      "What stood out was the guide. He knew every ranger at every gate, and he got us a boat on the Kazinga with nobody else on it.",
    name: "PLACEHOLDER — Daniel K.",
    origin: "Nairobi, Kenya",
    trip: "3-Day Queen Elizabeth",
    placeholder: true,
  },
  {
    quote:
      "They built a twenty-day route around our budget instead of pushing a package at us. Two weeks in and we'd already rebooked for next year.",
    name: "PLACEHOLDER — The Mirembe family",
    origin: "Kampala, Uganda",
    trip: "20-Day Best of Uganda",
    placeholder: true,
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "When is the best time to visit Uganda?",
    a: "The dry seasons — December to February and June to September — give the best wildlife viewing, because animals gather around water and the roads are passable. That said, gorilla trekking runs year round, and the wet seasons mean fewer vehicles and lower lodge rates.",
  },
  {
    q: "Do I need a visa?",
    a: "Most travellers do. Apply online for an e-visa before you fly, or get one on arrival at Entebbe. Your passport needs at least six months of validity. The East African Tourist Visa also covers Kenya and Rwanda on a single entry fee — worth it if you're crossing borders.",
  },
  {
    q: "Which vaccinations are required?",
    a: "Yellow fever vaccination is mandatory if you are arriving from a country with transmission risk, and you may be asked for the certificate at the border. Hepatitis A and B, typhoid and rabies are commonly recommended. Speak to a travel clinic about six weeks before you fly.",
  },
  {
    q: "Is Uganda safe for travellers?",
    a: "Uganda is politically stable and receives visitors without incident every year. Standard precautions apply: don't walk alone in unfamiliar areas after dark, keep valuables out of sight, and use the transfers we arrange rather than flagging down transport.",
  },
  {
    q: "How hard is gorilla trekking, really?",
    a: "It varies. Some families are a 40-minute walk from the trailhead; others take four or five hours over steep, muddy, densely-vegetated ground. Tell us your fitness level honestly and we'll request an easier group. Porters are available at the trailhead for around US$20 and are worth every cent.",
  },
  {
    q: "What should I pack?",
    a: "Lightweight, breathable clothing in neutral colours, a waterproof jacket, sturdy broken-in boots, binoculars, insect repellent, high-factor sunscreen, a reusable bottle and a small first-aid kit. Long sleeves and trousers for the forest, and something warm for the highlands — Kabale and Sipi get cold at night.",
  },
  {
    q: "Can you build something that isn't on the site?",
    a: "That's most of what we do. Roughly half our trips are designed from scratch around a budget, a set of dates or one specific thing somebody wants to see. Use the custom trip form and we'll come back with an itinerary and a price.",
  },
  {
    q: "How do payments work?",
    a: "A deposit confirms the booking and locks in permits and lodges; the balance is due before departure. Instalment plans are available on request, and our cancellation terms are among the friendlier ones in the industry — we'll walk you through the exact dates before you pay anything.",
  },
];

export const services = [
  {
    icon: "paw" as IconName,
    title: "Wildlife safaris & tour guiding",
    text: "Private 4x4, pop-top roof, professional driver-guide, park entries and permits handled.",
  },
  {
    icon: "heart" as IconName,
    title: "Honeymoon & romantic holidays",
    text: "Private vehicles, quiet lodges, candlelit dinners and island extensions built for two.",
  },
  {
    icon: "plane" as IconName,
    title: "Air ticketing & hotel booking",
    text: "Issuance, re-issuance and routing advice, plus negotiated hotel rates worldwide.",
  },
  {
    icon: "globe" as IconName,
    title: "Visa consultancy",
    text: "Application support and document review for Uganda, the UK, Schengen and beyond.",
  },
  {
    icon: "users" as IconName,
    title: "Business travel, workshops & conferences",
    text: "Group logistics, venue sourcing, transport and full on-the-ground coordination.",
  },
  {
    icon: "car" as IconName,
    title: "Car hire & airport transfers",
    text: "Meet-and-greet at Entebbe, self-drive or chauffeured, city or upcountry.",
  },
];

export const values = [
  {
    title: "Detail and quality",
    text: "The difference between a good trip and a great one is usually twenty small things nobody notices. We notice them.",
  },
  {
    title: "Comfort and elegance",
    text: "We book the room with the view and the vehicle with the working air conditioning. Comfort is not an upgrade.",
  },
  {
    title: "Memorable experiences",
    text: "Places you'll still be talking about in ten years, not a checklist of stops.",
  },
];

export const milestones = [
  {
    year: "2016",
    title: "Founded in Kampala",
    text: "Havy Tours & Travel Uganda Limited opens as a private destination management company.",
  },
  {
    year: "2019",
    title: "YUTO leadership",
    text: "Our Executive Director becomes Chairman of the Board of Directors for Young Uganda Tour Operators.",
  },
  {
    year: "2021",
    title: "Film & Cultural Week",
    text: "Partner to the Uganda–USA Film and Cultural Week at the Uganda National Cultural Centre, leading sites and cultural tourism.",
  },
  {
    year: "2022",
    title: "Skilling 63 companies",
    text: "Tour guiding, air ticketing, hospitality, branding, partnerships and product development programmes for 213 YUTO members.",
  },
  {
    year: "2023",
    title: "Aga Khan Foundation grant",
    text: "Havy wins a competitive grant for Uganda's first water-biking adventure project, now running in Jinja.",
  },
  {
    year: "2024",
    title: "Rubirizi Tourism Association",
    text: "In partnership with Elephant Hab Safari Lodge, connecting 50+ operators to build new product around the crater lakes.",
  },
];

export const team: { name: string; role: string; note?: string; placeholder?: boolean }[] = [
  { name: "PLACEHOLDER", role: "Executive Director", placeholder: true },
  { name: "PLACEHOLDER", role: "Head of Operations", placeholder: true },
  { name: "PLACEHOLDER", role: "Safari & Product Manager", placeholder: true },
  { name: "PLACEHOLDER", role: "Ticketing & Visas", placeholder: true },
];

export const placeholdersUsed = [
  "Client testimonials — three sample quotes on the home page.",
  "Team names, photos and roles on the About page.",
  "Star rating and review-count figures shown in the trust strip.",
  "Instagram gallery images on the home page.",
  "Office map on the contact page (embed a real map before launch).",
];
