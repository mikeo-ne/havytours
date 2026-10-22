/**
 * Havy Tours' sister brands and ventures.
 *
 * Epic Escapades content is taken from the live epicescapadesug.com and from
 * the Epic Escapades block on havytours.com. Activity names, prices and
 * contact details are real.
 */

export type Activity = {
  name: string;
  priceUgx: number;
  /** Short note shown on the card. */
  note: string;
  icon: string;
};

export const epicEscapades = {
  name: "Epic Escapades",
  fullName: "Epic Escapades Uganda",
  tagline: "Your fun starts here.",
  parent: "A product of Havy Tours and Travel (U) Ltd",
  website: "https://epicescapadesug.com/",
  image: "/images/epic-escapades.jpg",
  location:
    "Nile Crescent Road, at Brist Triangle Hotel, next to Jinja Sailing Club, Jinja City, Uganda",
  hours: "Open every day, 7:00am – 6:00pm",
  phones: ["+256 773 064420", "+256 703 032191"],
  email: "epicescapadesug@gmail.com",
  intro:
    "Epic Escapades Uganda, based in Jinja, runs adventures on Lake Victoria and the River Nile. Pedal a water bike, tube the lake, take a boat out to the source of the Nile, or spend an afternoon on the party decker. Quad biking, horse riding, kayaking, white water rafting, bungee jumping, fishing and zip-lining are all on the list — and we build corporate team-building days around any combination of them.",
  where: "Lake Victoria & the River Nile, Jinja",
} as const;

export const epicActivities: Activity[] = [
  { name: "Water Biking", priceUgx: 80000, note: "Uganda's first — our own project", icon: "sun" },
  { name: "Tubbing Lake Victoria", priceUgx: 60000, note: "Lazy towed tubes on open water", icon: "sun" },
  { name: "Boat ride to the source of the Nile", priceUgx: 100000, note: "Where 6,650km begins", icon: "plane" },
  { name: "Party Decker Boat", priceUgx: 200000, note: "Double-decker, floating dinners", icon: "users" },
  { name: "Kayaking", priceUgx: 80000, note: "Single or double, calm stretches", icon: "sun" },
  { name: "Quad Biking", priceUgx: 230000, note: "Trails along the Nile bank", icon: "compass" },
  { name: "White Water Rafting", priceUgx: 260000, note: "Class 3–5 rapids, full safety team", icon: "mountain" },
  { name: "Horse Riding", priceUgx: 150000, note: "Riverside trails, all abilities", icon: "compass" },
  { name: "Samuka Island Trips", priceUgx: 150000, note: "Island day out on Lake Victoria", icon: "pin" },
  { name: "Speed Boat Cruising Classes", priceUgx: 250000, note: "Learn to handle a speed boat", icon: "plane" },
  { name: "Zip-lining Adventure", priceUgx: 70000, note: "Over the Nile, 100m+ lines", icon: "mountain" },
  { name: "Corporate Team Building", priceUgx: 450000, note: "Full-day programmes for groups", icon: "users" },
];

/**
 * Ride pricing for the water-bike / jet-ski fleet, as displayed on havytours.com.
 * NOTE: these figures were read from the current site design and should be
 * confirmed with the Epic Escapades team before this page goes live.
 */
export const epicRidePricing = {
  note: "Ride pricing as shown on havytours.com — confirm before launch.",
  resident: {
    label: "EAC residents",
    currency: "UGX",
    rows: [
      { duration: "30 minutes", adult: 80000, child: 60000 },
      { duration: "60 minutes", adult: 150000, child: 130000 },
    ],
  },
  nonResident: {
    label: "Non-residents",
    currency: "USD",
    rows: [
      { duration: "30 minutes", adult: 40, child: 30 },
      { duration: "60 minutes", adult: 50, child: 40 },
    ],
  },
} as const;

export const ugx = (value: number) => `UGX ${value.toLocaleString("en-UG")}`;
