export type TourCategory =
  | "wildlife"
  | "primates"
  | "adventure"
  | "culture"
  | "honeymoon"
  | "international";

export type ItineraryStop = {
  label: string;
  title: string;
  text: string;
};

export type Tour = {
  slug: string;
  name: string;
  location: string;
  category: TourCategory;
  days: number;
  priceFrom: number;
  priceOnRequest?: boolean;
  /** One line, used on cards. Max ~90 characters. */
  summary: string;
  /** Two or three sentences used as the tour page lede. */
  intro: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryStop[];
  image: string;
  gallery: string[];
  groupSize: string;
  bestSeason: string;
  featured?: boolean;
};

export const categories: { id: TourCategory; label: string; blurb: string; icon: string }[] = [
  {
    id: "wildlife",
    label: "Wildlife & Safaris",
    blurb: "Game drives, boat cruises and the big open plains of the savanna.",
    icon: "paw",
  },
  {
    id: "primates",
    label: "Gorillas & Primates",
    blurb: "Permit-handled trekking in Bwindi, Kibale and the Virunga massif.",
    icon: "gorilla",
  },
  {
    id: "adventure",
    label: "Adventure & Nile",
    blurb: "Rafting, hiking, climbing and the source of the world's longest river.",
    icon: "mountain",
  },
  {
    id: "culture",
    label: "City & Culture",
    blurb: "Kampala's seven hills, markets, kingdoms and nightlife.",
    icon: "city",
  },
  {
    id: "honeymoon",
    label: "Honeymoon & Romance",
    blurb: "Slow, private, beautifully-planned trips built for two.",
    icon: "heart",
  },
  {
    id: "international",
    label: "International",
    blurb: "Ticketing, visas and hand-picked escapes beyond Uganda.",
    icon: "plane",
  },
];

export const categoryLabel = (id: TourCategory) =>
  categories.find((c) => c.id === id)?.label ?? id;

const IMG = {
  murchison: "/images/tours/murchison-falls.jpg",
  queen: "/images/tours/queen-elizabeth.jpg",
  gorilla: "/images/tours/gorilla-trekking.jpg",
  kidepo: "/images/tours/kidepo.jpg",
  kampala: "/images/tours/kampala-city.jpg",
  sipi: "/images/tours/sipi-falls.jpg",
  rwenzori: "/images/tours/rwenzori.jpg",
  jinja: "/images/tours/jinja-nile.jpg",
  bunyonyi: "/images/tours/lake-bunyonyi.jpg",
  hero: "/images/hero.jpg",
} as const;

export const tours: Tour[] = [
  {
    slug: "3-day-gorilla-trekking-safari",
    name: "3-Day Gorilla Trekking Safari",
    location: "Bwindi Impenetrable NP · from Kigali",
    category: "primates",
    days: 3,
    priceFrom: 1400,
    featured: true,
    summary: "Cross into Bwindi and spend an hour with a habituated gorilla family.",
    intro:
      "The shortest route to the most famous hour in African travel. We collect you in Kigali, drive the highlands into southwestern Uganda, and put you in front of a habituated gorilla family with a permit already secured. Two nights, one life-changing morning.",
    highlights: [
      "Gorilla trekking permit secured in advance",
      "Scenic Kigali – Bwindi transfer through the Virunga highlands",
      "Guided forest walk with Uganda Wildlife Authority rangers",
      "Optional community walk with the Batwa",
      "Comfortable lodge stay inside the forest belt",
    ],
    included: [
      "Gorilla trekking permit",
      "2 nights accommodation on a shared basis",
      "All ground transport in a 4x4 safari vehicle",
      "Uganda Wildlife Authority ranger guides",
      "Bottled drinking water throughout",
    ],
    excluded: [
      "International flights and Rwandan transit visa",
      "Travel insurance",
      "Porter hire at the trailhead (approx. US$20, recommended)",
      "Alcoholic drinks and personal items",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        label: "Day 1",
        title: "Kigali → Bwindi",
        text: "Pick-up at 7:00am and a full-day drive north through terraced hills and volcano country. Arrive at the lodge in time for a briefing and an early night.",
      },
      {
        label: "Day 2",
        title: "Gorilla trekking",
        text: "An early start and a ranger-led trek into the forest. Most groups meet their family within two to five hours. You get one full hour with them. Afternoon at leisure or a community walk.",
      },
      {
        label: "Day 3",
        title: "Bwindi → Kigali",
        text: "Breakfast, then the drive back to Kigali with a stop at the equator line. Drop-off at the airport or your hotel by early evening.",
      },
    ],
    image: IMG.gorilla,
    gallery: [IMG.hero, IMG.bunyonyi],
    groupSize: "2 – 8 travellers",
    bestSeason: "Year round · driest Dec–Feb & Jun–Sep",
  },
  {
    slug: "6-day-best-of-uganda-safari",
    name: "6-Day Best of Uganda Safari",
    location: "Murchison · Kibale · Queen Elizabeth",
    category: "wildlife",
    days: 6,
    priceFrom: 2500,
    featured: true,
    summary: "The greatest hits loop: the Nile, the chimpanzees and the crater lakes.",
    intro:
      "Six days that cover the ground most visitors think needs two weeks. You start at the top of Murchison Falls, track chimpanzees in Kibale, cruise the Kazinga Channel and finish among the crater lakes. It is the itinerary we recommend most often.",
    highlights: [
      "Launch cruise to the base of Murchison Falls",
      "Chimpanzee tracking in Kibale Forest",
      "Kazinga Channel boat cruise — one of Africa's densest wildlife concentrations",
      "Game drives across the Kasenyi plains",
      "Crater lakes and the Rwenzori foothills",
    ],
    included: [
      "5 nights mid-range lodge accommodation",
      "All park entries, permits and ranger fees",
      "Transport in a 4x4 safari vehicle with pop-top roof",
      "Full board: breakfast, lunch and dinner",
      "Professional English-speaking driver guide",
    ],
    excluded: [
      "International flights and visas",
      "Gorilla permit (add-on available)",
      "Travel insurance",
      "Drinks and personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        label: "Day 1",
        title: "Kampala → Murchison Falls",
        text: "North through Luwero and Masindi, with a stop at the Ziwa Rhino Sanctuary to track white rhino on foot. Arrive at the park as the light goes gold.",
      },
      {
        label: "Day 2",
        title: "The Nile at its angriest",
        text: "Morning game drive on the Buligi circuit, then the launch cruise to the base of the falls. Afternoon hike to the top, where the whole river squeezes through a seven-metre gap.",
      },
      {
        label: "Day 3",
        title: "Murchison → Kibale",
        text: "A long, beautiful drive south along the Albertine Rift, past the escarpment views toward Fort Portal and the tea estates.",
      },
      {
        label: "Day 4",
        title: "Chimpanzees, then the craters",
        text: "Early chimp tracking in Kibale, then on to Queen Elizabeth National Park via the Ndali–Kasenda crater lakes.",
      },
      {
        label: "Day 5",
        title: "Kazinga Channel",
        text: "Two hours on the water with elephants, buffalo and hippo at the banks. Afternoon game drive on the Kasenyi plains looking for lion.",
      },
      {
        label: "Day 6",
        title: "Queen Elizabeth → Kampala",
        text: "A final drive through the Ishasha sector — known for its tree-climbing lions — before the road home. Evening drop-off in Kampala.",
      },
    ],
    image: IMG.queen,
    gallery: [IMG.murchison, IMG.kidepo],
    groupSize: "2 – 8 travellers",
    bestSeason: "Dec – Feb · Jun – Sep",
  },
  {
    slug: "3-day-murchison-falls-safari",
    name: "3-Day Murchison Falls Safari",
    location: "Murchison Falls NP, northwestern Uganda",
    category: "wildlife",
    days: 3,
    priceFrom: 460,
    summary: "Uganda's biggest park, done properly in a long weekend.",
    intro:
      "The Nile explodes through a seven-metre gap in the rock here, and the park around it holds more wildlife than anywhere else in the country. Three days gets you the game drive, the boat and the hike to the top of the falls.",
    highlights: [
      "Game drive on the Buligi circuit",
      "Launch cruise to the base of the falls",
      "Hike to the top of Murchison Falls",
      "Optional rhino tracking at Ziwa en route",
    ],
    included: [
      "2 nights accommodation",
      "All park entries and transfers",
      "Game drive and launch cruise",
      "Professional driver guide",
      "Bottled drinking water",
    ],
    excluded: ["International flights", "Travel insurance", "Drinks", "Tips", "Optional activities"],
    itinerary: [
      {
        label: "Day 1",
        title: "Kampala → Murchison",
        text: "North through Masindi with an optional stop at Ziwa Rhino Sanctuary. Sunset arrival at the lodge inside the park.",
      },
      {
        label: "Day 2",
        title: "Falls, from both ends",
        text: "Early game drive, then the launch cruise to the foot of the falls. After lunch, hike the top for the view that makes the noise make sense.",
      },
      {
        label: "Day 3",
        title: "Murchison → Kampala",
        text: "A slow morning drive back with a stop at the top of the falls viewpoint before the road south.",
      },
    ],
    image: IMG.murchison,
    gallery: [IMG.queen, IMG.kidepo],
    groupSize: "2 – 8 travellers",
    bestSeason: "Dec – Feb · Jun – Sep",
  },
  {
    slug: "3-day-queen-elizabeth-safari",
    name: "3-Day Queen Elizabeth Safari",
    location: "Queen Elizabeth NP, western Uganda",
    category: "wildlife",
    days: 3,
    priceFrom: 490,
    summary: "Kazinga Channel boat cruise, tree-climbing lions, crater lake views.",
    intro:
      "Uganda's most visited park, and for good reason. Queen Elizabeth packs savanna, swamp, forest and crater lakes into one reserve — and the Kazinga Channel boat cruise is the single best two hours of wildlife viewing in the country.",
    highlights: [
      "Two-hour Kazinga Channel boat cruise",
      "Kasenyi plains game drive",
      "Crater lakes and the Rwenzori backdrop",
      "Optional Ishasha tree-climbing lion drive",
    ],
    included: [
      "2 nights accommodation",
      "All park entries and game drives",
      "Kazinga Channel boat cruise",
      "Breakfast, lunch and dinner",
      "Professional driver guide",
    ],
    excluded: ["International flights", "Travel insurance", "Drinks", "Tips", "Optional activities"],
    itinerary: [
      {
        label: "Day 1",
        title: "Kampala → Queen Elizabeth",
        text: "Southwest past the equator and through the crater lake country, arriving at the lodge in the late afternoon.",
      },
      {
        label: "Day 2",
        title: "Water, then plains",
        text: "An early Kazinga Channel cruise with elephants at the waterline. Afternoon game drive on the Kasenyi plains.",
      },
      {
        label: "Day 3",
        title: "Craters → Kampala",
        text: "A morning drive through the crater lakes, then the long road back to Kampala with a lunch stop in Fort Portal.",
      },
    ],
    image: IMG.queen,
    gallery: [IMG.murchison, IMG.kidepo],
    groupSize: "2 – 8 travellers",
    bestSeason: "Dec – Feb · Jun – Sep",
  },
  {
    slug: "6-day-gorilla-chimpanzee-bwindi-kibale",
    name: "6-Day Gorilla & Chimpanzee Safari",
    location: "Bwindi · Kibale · Lake Bunyonyi",
    category: "primates",
    days: 6,
    priceFrom: 1800,
    featured: true,
    summary: "Two primate species, two forests, one very good week.",
    intro:
      "The primate itinerary. Gorillas in Bwindi, chimpanzees in Kibale, and the cool highlands of Lake Bunyonyi in between to let your legs recover. This is the trip people book when they only get one.",
    highlights: [
      "Gorilla trekking in Bwindi Impenetrable NP",
      "Chimpanzee tracking and habituation in Kibale",
      "Bigodi wetland walk",
      "Canoe trip on Lake Bunyonyi",
      "Tea estate country around Fort Portal",
    ],
    included: [
      "5 nights accommodation",
      "Gorilla and chimpanzee permits",
      "All park entries and ranger fees",
      "4x4 transport and driver guide",
      "Full board from day 1 lunch to day 6 breakfast",
    ],
    excluded: ["International flights and visas", "Travel insurance", "Drinks", "Tips", "Porter hire"],
    itinerary: [
      {
        label: "Day 1",
        title: "Kampala → Fort Portal",
        text: "West through Mubende and the tea estates. Overnight in the foothills of the Rwenzori.",
      },
      {
        label: "Day 2",
        title: "Chimpanzees in Kibale",
        text: "Morning chimp tracking in Kibale Forest — a 95% success rate. Afternoon Bigodi wetland walk for monkeys and birds.",
      },
      {
        label: "Day 3",
        title: "Kibale → Bwindi",
        text: "South through the crater lakes and into the Bwindi forest belt. Afternoon at leisure.",
      },
      {
        label: "Day 4",
        title: "Gorilla trekking",
        text: "The main event. Ranger-led trek into the forest, one full hour with a habituated family, and a certificate to take home.",
      },
      {
        label: "Day 5",
        title: "Lake Bunyonyi",
        text: "Down to the lake — 29 islands, no crocodiles, no bilharzia. Canoe out to Punishment Island before dinner.",
      },
      {
        label: "Day 6",
        title: "Bunyonyi → Kampala",
        text: "A slow drive back through Kabale and the rolling hills of the southwest. Evening drop-off.",
      },
    ],
    image: IMG.gorilla,
    gallery: [IMG.bunyonyi, IMG.hero],
    groupSize: "2 – 8 travellers",
    bestSeason: "Year round · driest Dec–Feb & Jun–Sep",
  },
  {
    slug: "4-day-kidepo-wildlife-safari",
    name: "4-Day Kidepo Wildlife Safari",
    location: "Kidepo Valley NP, Karamoja",
    category: "wildlife",
    days: 4,
    priceFrom: 1800,
    summary: "Uganda's wildest park, and the least crowded by a wide margin.",
    intro:
      "Kidepo is a long way from anywhere, which is exactly the point. Two river valleys, mountain backdrops, and species you will not see in the southern parks — cheetah, caracal, bat-eared fox, ostrich. You may not see another vehicle all day.",
    highlights: [
      "Narus Valley game drives",
      "Cheetah, caracal and bat-eared fox territory",
      "Karamoja cultural encounter",
      "Some of the darkest night skies in East Africa",
    ],
    included: [
      "3 nights accommodation",
      "All park entries and game drives",
      "Transport in a 4x4 safari vehicle",
      "Breakfast, lunch and dinner",
      "Professional driver guide",
    ],
    excluded: ["International flights and visas", "Optional chartered flights", "Travel insurance", "Drinks", "Tips"],
    itinerary: [
      {
        label: "Day 1",
        title: "Kampala → Kidepo",
        text: "A very long day north, or ask us about the light aircraft charter that turns it into 90 minutes. Overnight near the park gate.",
      },
      {
        label: "Day 2",
        title: "The Narus Valley",
        text: "Full day in the Narus Valley, Kidepo's wildlife heartland, with a break for lunch under a borassus palm.",
      },
      {
        label: "Day 3",
        title: "Kanangorok Hot Springs & culture",
        text: "Morning drive out to the hot springs in the far north of the park. Afternoon with a Karamoja community — dance, food and a manyatta visit.",
      },
      {
        label: "Day 4",
        title: "Kidepo → Kampala",
        text: "An early start for the road south, or your flight back to Entebbe. Long day, worth every kilometre.",
      },
    ],
    image: IMG.kidepo,
    gallery: [IMG.queen, IMG.murchison],
    groupSize: "2 – 8 travellers",
    bestSeason: "May – Sep · Dec – Feb",
  },
  {
    slug: "7-day-mountain-rwenzori-climbing",
    name: "7-Day Rwenzori Mountain Climbing",
    location: "Rwenzori Mountains NP, western Uganda",
    category: "adventure",
    days: 7,
    priceFrom: 1950,
    summary: "Seven days to Margherita Peak — Africa's third-highest summit.",
    intro:
      "The Mountains of the Moon are not a walk-up. Glaciers, bogs, giant heather and three vegetation zones stand between you and Margherita Peak at 5,109m. We supply the porters, the cooks and the gear lists; you supply the legs.",
    highlights: [
      "Trek to Margherita Peak (5,109m)",
      "Porter and cook support throughout",
      "Glacier crossing on the Stanley Plateau",
      "Bamboo, heather and Afro-alpine zones",
    ],
    included: [
      "All camping and hut accommodation on the mountain",
      "Porter and guide support",
      "All meals on the trek",
      "Park and rescue fees",
      "Camping equipment (tents, mattresses, mess tent)",
    ],
    excluded: [
      "International flights and visas",
      "Personal climbing gear and sleeping bag hire",
      "Travel insurance (must cover high-altitude trekking)",
      "Tips for porters and guides",
    ],
    itinerary: [
      {
        label: "Day 1",
        title: "Kasese → Nyakalengija",
        text: "Transfer to the trailhead at 1,650m. Gear check, porter allocation and an early night at the base camp.",
      },
      {
        label: "Day 2",
        title: "Nyakalengija → John Matte Hut",
        text: "Through the bamboo and moss-draped rainforest to 3,505m. Wet, muddy and magnificent.",
      },
      {
        label: "Day 3",
        title: "John Matte → Bujuku Hut",
        text: "Into the giant heather and lobelia zone, crossing the Bujuku bogs on boardwalks to 3,962m.",
      },
      {
        label: "Day 4",
        title: "Bujuku → Elena Hut",
        text: "A short but steep day to 4,541m in the Afro-alpine zone. Afternoon acclimatisation walk.",
      },
      {
        label: "Day 5",
        title: "Margherita Peak",
        text: "A 02:00 start, across the Stanley Plateau glacier and up to the summit at 5,109m. Back to Elena for a rest, then down to Bujuku.",
      },
      {
        label: "Day 6",
        title: "Bujuku → Nyakalengija",
        text: "A long descent back through the zones you climbed. Celebration dinner at the trailhead.",
      },
      {
        label: "Day 7",
        title: "Kasese → Kampala / Entebbe",
        text: "Breakfast, transfer back, and a very well-earned shower.",
      },
    ],
    image: IMG.rwenzori,
    gallery: [IMG.sipi, IMG.bunyonyi],
    groupSize: "2 – 10 climbers",
    bestSeason: "Jan – Feb · Jun – Aug",
  },
  {
    slug: "3-day-sipi-falls-hike-coffee-tour",
    name: "3-Day Sipi Falls Hike & Coffee Tour",
    location: "Sipi Falls, Mount Elgon",
    category: "adventure",
    days: 3,
    priceFrom: 650,
    summary: "Three waterfalls, an abseil, and the best coffee in East Africa.",
    intro:
      "Mount Elgon's southern slopes are cool, green and covered in Arabica. Sipi is three waterfalls in a row, a handful of trails between village farms, and an abseil beside the main drop if you want it.",
    highlights: [
      "Guided hike to all three Sipi waterfalls",
      "Arabica coffee tour — pick, roast, cup",
      "Abseiling beside the main falls",
      "Sunrise over the Karamoja plains",
    ],
    included: [
      "2 nights accommodation",
      "All guided hikes and the coffee experience",
      "Abseiling session with certified instructors",
      "Breakfast, lunch and dinner",
      "Transport from Mbale or Kampala",
    ],
    excluded: ["International flights and visas", "Travel insurance", "Drinks", "Tips", "Extra activities"],
    itinerary: [
      {
        label: "Day 1",
        title: "Mbale → Sipi",
        text: "Pick-up and the short climb up to the falls. Afternoon at leisure with the Karamoja plains below you.",
      },
      {
        label: "Day 2",
        title: "Falls, coffee and a rope",
        text: "Morning hike to all three falls with a local guide. Afternoon coffee tour, then abseil 100m down the cliff beside the main drop.",
      },
      {
        label: "Day 3",
        title: "Sipi → Mbale / Kampala",
        text: "Sunrise from the ridge, breakfast, and the drive back down.",
      },
    ],
    image: IMG.sipi,
    gallery: [IMG.rwenzori, IMG.jinja],
    groupSize: "2 – 12 travellers",
    bestSeason: "Year round · driest Dec–Feb & Jun–Sep",
  },
  {
    slug: "1-day-jinja-adventure-safari",
    name: "1-Day Jinja Adventure Safari",
    location: "Jinja · Source of the Nile",
    category: "adventure",
    days: 1,
    priceFrom: 280,
    summary: "Grade-5 rapids, a bungee jump and the source of the Nile in one day.",
    intro:
      "Jinja is the adventure capital of East Africa and it is an easy two-hour drive from Kampala. One day, one very full logbook: the source of the Nile, class-5 white water, and whatever else you have the nerve for.",
    highlights: [
      "Source of the Nile boat trip",
      "White water rafting (grade 3–5)",
      "Optional bungee jump, kayaking or tubing",
      "Water-biking, our own award-winning project",
    ],
    included: [
      "Return transport from Kampala or Jinja",
      "Rafting with certified safety kayakers",
      "Source of the Nile boat trip",
      "Lunch",
      "All safety equipment and briefing",
    ],
    excluded: ["International flights and visas", "Travel insurance", "Optional extras", "Drinks", "Tips"],
    itinerary: [
      {
        label: "Morning",
        title: "Kampala → Jinja",
        text: "Pick-up at 6:30am. On the water by 9:00 for a full day of rafting with a safety briefing and a photographer following the rapids.",
      },
      {
        label: "Midday",
        title: "The source",
        text: "Lunch on the riverbank, then a boat trip out to the point where the Nile leaves Lake Victoria and starts its 6,650km run to the Mediterranean.",
      },
      {
        label: "Afternoon",
        title: "Pick your adrenaline",
        text: "Bungee over the Nile, a sunset kayak, tubing, or a first go at water-biking. Back in Kampala by 8pm.",
      },
    ],
    image: IMG.jinja,
    gallery: [IMG.sipi, IMG.kampala],
    groupSize: "2 – 15 travellers",
    bestSeason: "Year round",
  },
  {
    slug: "2-day-jinja-adventure-package",
    name: "2-Day Jinja Adventure Package",
    location: "Jinja · Source of the Nile",
    category: "adventure",
    days: 2,
    priceFrom: 1400,
    summary: "Every adrenaline option on the Nile, with a night to do it in.",
    intro:
      "The full Jinja menu over two days — rafting, bungee, kayaking, tubing, horse riding and the water-bike — with a riverside night in between. Built for groups who want to tick all the boxes.",
    highlights: [
      "Full-day white water rafting",
      "Bungee jump over the Nile",
      "Sunset kayak and tubing session",
      "Riverside lodge accommodation",
    ],
    included: [
      "1 night riverside accommodation",
      "All listed activities and equipment",
      "Return transport from Kampala",
      "Full board",
      "Certified guides throughout",
    ],
    excluded: ["International flights and visas", "Travel insurance", "Drinks", "Tips", "Extra activities"],
    itinerary: [
      {
        label: "Day 1",
        title: "Rafting & the source",
        text: "Early pick-up, full-day rafting, then a boat trip to the source of the Nile. Sunset at the lodge.",
      },
      {
        label: "Day 2",
        title: "Bungee, tube, ride",
        text: "Bungee over the river first thing, then tubing and horse riding along the banks. Back to Kampala in the evening.",
      },
    ],
    image: IMG.jinja,
    gallery: [IMG.sipi, IMG.bunyonyi],
    groupSize: "2 – 15 travellers",
    bestSeason: "Year round",
  },
  {
    slug: "3-day-lake-bunyonyi-safari",
    name: "3-Day Lake Bunyonyi Safari",
    location: "Lake Bunyonyi, southwestern Uganda",
    category: "adventure",
    days: 3,
    priceFrom: 800,
    summary: "Twenty-nine islands, terraced hills and the quietest water in Uganda.",
    intro:
      "The place with no crocodiles, no hippos and no bilharzia — so you can actually swim. Bunyonyi is 29 green islands in a drowned valley at 1,962m, and it is where we send people who need to stop moving for a while.",
    highlights: [
      "Canoe trip between the islands",
      "Punishment Island and the Batwa story",
      "Swimming in bilharzia-free water",
      "Terraced hillside village walks",
    ],
    included: [
      "2 nights lakeside accommodation",
      "Canoe excursions and island visits",
      "Guided village and hill walks",
      "Breakfast, lunch and dinner",
      "Transport from Kabale or Kampala",
    ],
    excluded: ["International flights and visas", "Travel insurance", "Drinks", "Tips", "Optional activities"],
    itinerary: [
      {
        label: "Day 1",
        title: "Kampala → Bunyonyi",
        text: "A full day southwest through Kabale, arriving at the lake in time for the light to go soft over the terraces.",
      },
      {
        label: "Day 2",
        title: "Twenty-nine islands",
        text: "A morning canoe out to Punishment Island and the Batwa story. Afternoon village walk on the terraced slopes, then a swim.",
      },
      {
        label: "Day 3",
        title: "Bunyonyi → Kampala",
        text: "Sunrise on the water, breakfast, and the long slow drive back via Mbarara.",
      },
    ],
    image: IMG.bunyonyi,
    gallery: [IMG.gorilla, IMG.sipi],
    groupSize: "2 – 10 travellers",
    bestSeason: "Year round",
  },
  {
    slug: "1-day-kampala-city-tour",
    name: "1-Day Kampala City Tour",
    location: "Kampala, Uganda",
    category: "culture",
    days: 1,
    priceFrom: 90,
    summary: "Seven hills, four faiths and the best rolex in the city.",
    intro:
      "Kampala gets dismissed as a transit stop. It shouldn't be. In one day you can stand in the Buganda royal tombs, walk the Uganda Museum's ethnographic halls, haggle in Owino market and eat street food on a hillside with the whole city below you.",
    highlights: [
      "Kasubi Tombs — a UNESCO World Heritage Site",
      "Uganda Museum",
      "Owino and Nakasero markets",
      "Gaddafi Mosque and Namirembe Cathedral",
      "Street-food lunch with a local guide",
    ],
    included: [
      "Full-day private guide",
      "All transport within the city",
      "All site entries",
      "Lunch",
      "Bottled water",
    ],
    excluded: ["International flights and visas", "Personal shopping", "Drinks", "Tips", "Accommodation"],
    itinerary: [
      {
        label: "Morning",
        title: "Buganda and the old city",
        text: "Pick-up at 8:30. Kasubi Tombs first, then Namirembe Cathedral and the Gaddafi Mosque for the view over all seven hills.",
      },
      {
        label: "Midday",
        title: "Markets and street food",
        text: "Down into Owino market — controlled chaos and the best bargains in town — then a street-food lunch of rolex, muchomo and fresh juice.",
      },
      {
        label: "Afternoon",
        title: "Museum and memorial",
        text: "The Uganda Museum's ethnographic and natural history halls, then the Independence Monument and a craft market before drop-off.",
      },
    ],
    image: IMG.kampala,
    gallery: [IMG.jinja, IMG.hero],
    groupSize: "2 – 12 travellers",
    bestSeason: "Year round",
  },
  {
    slug: "kampala-at-night-tour",
    name: "Kampala at Night",
    location: "Kampala, Uganda",
    category: "culture",
    days: 1,
    priceFrom: 50,
    summary: "The city's live music, street food and rooftop view after dark.",
    intro:
      "Kampala after dark is loud, warm and very good fun. We start with street food, move through a live band, and finish on a rooftop with the city lights spread out over the hills.",
    highlights: [
      "Street food crawl",
      "Live Afrobeat or jazz band",
      "Rooftop night view over the seven hills",
      "Safe, guided transport between venues",
    ],
    included: ["Local night guide", "All transport between venues", "One drink", "Street food tasting"],
    excluded: ["Further drinks", "Club entry fees", "Dinner", "Tips"],
    itinerary: [
      {
        label: "19:00",
        title: "Street food first",
        text: "Meet at a hillside food stall for grilled meat, samosas and fresh juice as the city cools down.",
      },
      {
        label: "21:00",
        title: "Live music",
        text: "Into a live band — Afrobeat, jazz or kadongo kamu depending on the night.",
      },
      {
        label: "23:00",
        title: "The rooftop",
        text: "Finish above the city with the lights across the hills, then a guided ride back to your hotel.",
      },
    ],
    image: IMG.kampala,
    gallery: [IMG.jinja, IMG.bunyonyi],
    groupSize: "2 – 10 travellers",
    bestSeason: "Year round · Thu–Sat best",
  },
  {
    slug: "9-day-wilderness-camping-safari",
    name: "9-Day Wilderness Camping Safari",
    location: "Murchison · Kibale · Queen Elizabeth · Bwindi",
    category: "wildlife",
    days: 9,
    priceFrom: 3250,
    summary: "Tents, campfires and the four biggest parks in Uganda.",
    intro:
      "Nine days under canvas across the full sweep of western Uganda. You sleep inside the parks, cook on fire, and hear the night properly. Our most immersive trip, and our best value per day.",
    highlights: [
      "Camping inside Murchison and Queen Elizabeth",
      "Chimpanzee tracking in Kibale",
      "Kazinga Channel cruise",
      "Optional gorilla trekking add-on",
      "Bush breakfasts and campfire dinners",
    ],
    included: [
      "8 nights camping with all equipment",
      "Cook and camp crew",
      "All park entries and permits (gorilla permit optional)",
      "4x4 transport and driver guide",
      "All meals from day 1 to day 9",
    ],
    excluded: ["International flights and visas", "Gorilla permit", "Sleeping bag hire", "Travel insurance", "Tips"],
    itinerary: [
      {
        label: "Days 1–2",
        title: "Murchison Falls",
        text: "North to Ziwa for rhino tracking, then into Murchison for two nights under canvas: game drives, the launch cruise and the hike to the top of the falls.",
      },
      {
        label: "Days 3–4",
        title: "Kibale Forest",
        text: "South to the Rift escarpment. Chimp tracking in Kibale and a wetland walk at Bigodi.",
      },
      {
        label: "Days 5–6",
        title: "Queen Elizabeth",
        text: "Kazinga Channel cruise, Kasenyi game drives and two nights camping with the hippos audible from your tent.",
      },
      {
        label: "Days 7–8",
        title: "Bwindi",
        text: "Into the forest belt. Gorilla trekking on day 8 (permit add-on), with a community walk the day before.",
      },
      {
        label: "Day 9",
        title: "Back to Kampala",
        text: "The long road home, arriving in the evening.",
      },
    ],
    image: IMG.kidepo,
    gallery: [IMG.murchison, IMG.queen],
    groupSize: "2 – 8 travellers",
    bestSeason: "Dec – Feb · Jun – Sep",
  },
  {
    slug: "14-day-uganda-safari",
    name: "14-Day Uganda Safari",
    location: "The full circuit",
    category: "wildlife",
    days: 14,
    priceFrom: 4500,
    summary: "Every major park, every primate, plus the Nile and the mountains.",
    intro:
      "Two weeks that leave very little out: rhino tracking, the Nile, chimpanzees, the Kazinga Channel, gorillas, crater lakes, Sipi Falls and Jinja. The trip for people who are not coming back soon.",
    highlights: [
      "Gorilla and chimpanzee permits included",
      "Murchison, Queen Elizabeth, Kibale, Bwindi, Lake Mburo",
      "Sipi Falls and Mount Elgon",
      "Source of the Nile and Jinja adventures",
      "All park entries and full board",
    ],
    included: [
      "13 nights mid-range accommodation",
      "Gorilla and chimpanzee permits",
      "All park entries and ranger fees",
      "4x4 transport and driver guide for 14 days",
      "Full board throughout",
    ],
    excluded: ["International flights and visas", "Travel insurance", "Drinks", "Tips", "Optional activities"],
    itinerary: [
      {
        label: "Days 1–3",
        title: "The north",
        text: "Ziwa rhino tracking, then Murchison Falls: game drives, launch cruise, hike to the top.",
      },
      {
        label: "Days 4–5",
        title: "Kibale & the craters",
        text: "Chimp tracking in Kibale, Bigodi wetland walk, then the Ndali–Kasenda crater lakes.",
      },
      {
        label: "Days 6–7",
        title: "Queen Elizabeth",
        text: "Kazinga Channel cruise, Kasenyi game drives and the Ishasha tree-climbing lions.",
      },
      {
        label: "Days 8–9",
        title: "Bwindi & Bunyonyi",
        text: "Gorilla trekking, then two nights on the terraced shores of Lake Bunyonyi.",
      },
      {
        label: "Days 10–11",
        title: "Lake Mburo",
        text: "Walking safari and a night game drive — the only park in Uganda where you can do both.",
      },
      {
        label: "Days 12–13",
        title: "Sipi & Jinja",
        text: "East to Sipi Falls for the hike and coffee, then Jinja for the Nile: rafting, the source and a sunset cruise.",
      },
      {
        label: "Day 14",
        title: "Home",
        text: "A short drive back to Kampala or Entebbe for your flight.",
      },
    ],
    image: IMG.murchison,
    gallery: [IMG.queen, IMG.gorilla],
    groupSize: "2 – 8 travellers",
    bestSeason: "Dec – Feb · Jun – Sep",
  },
  {
    slug: "20-day-best-of-uganda-escapade",
    name: "20-Day Best of Uganda Escapade",
    location: "Uganda, end to end",
    category: "wildlife",
    days: 20,
    priceFrom: 0,
    priceOnRequest: true,
    summary: "The complete country, at a walking pace. Priced to your route.",
    intro:
      "Twenty days lets us add the places the shorter loops skip: Kidepo in the far north, the Rwenzori foothills, Kalangala on Lake Victoria, Fort Portal's crater country and Agro-tourism days in between. Tell us what matters and we will build the route around it.",
    highlights: [
      "Kidepo Valley in the far northeast",
      "Gorilla, chimpanzee and golden monkey permits",
      "Kalangala islands on Lake Victoria",
      "Rwenzori foothills and crater lakes",
      "Community and agro-tourism days",
    ],
    included: [
      "All accommodation on the agreed route",
      "All listed permits and park entries",
      "4x4 transport and driver guide for 20 days",
      "Full board throughout",
      "A dedicated trip designer from enquiry to return",
    ],
    excluded: ["International flights and visas", "Travel insurance", "Drinks", "Tips", "Optional activities"],
    itinerary: [
      {
        label: "Days 1–4",
        title: "Kidepo & the north",
        text: "The long road or a charter flight to Kidepo Valley. Four days in Uganda's wildest park, with a Karamoja cultural day.",
      },
      {
        label: "Days 5–8",
        title: "Murchison & the Nile",
        text: "Ziwa rhino tracking, Murchison game drives, the launch cruise and the falls from above.",
      },
      {
        label: "Days 9–12",
        title: "The Albertine Rift",
        text: "Kibale chimpanzees, Rwenzori foothills, Queen Elizabeth's Kazinga Channel and the crater lakes.",
      },
      {
        label: "Days 13–16",
        title: "The southwest",
        text: "Gorillas in Bwindi, golden monkeys at Mgahinga, and rest days on Lake Bunyonyi.",
      },
      {
        label: "Days 17–20",
        title: "The east",
        text: "Lake Mburo, Kalangala on the lake, Sipi Falls and a final Nile day in Jinja before the drive home.",
      },
    ],
    image: IMG.kidepo,
    gallery: [IMG.bunyonyi, IMG.jinja],
    groupSize: "2 – 8 travellers",
    bestSeason: "Dec – Feb · Jun – Sep",
  },
  {
    slug: "international-travel-packages",
    name: "International Travel Packages",
    location: "Worldwide",
    category: "international",
    days: 7,
    priceFrom: 1200,
    featured: true,
    summary: "Ticketing, visas, hotels and itineraries — anywhere you want to go.",
    intro:
      "We are a full-service travel agency, not just a safari operator. Flights, hotel bookings, airport meet-and-greet, visa consultancy and complete multi-country itineraries — London, Dubai, Zanzibar, Cape Town, Bangkok, Bali and the Maldives among them.",
    highlights: [
      "Air ticketing and re-issuance",
      "Hotel booking at negotiated rates",
      "Visa consultancy and application support",
      "Airport transfers and meet & greet",
      "Multi-country itinerary design",
    ],
    included: [
      "Return flights on the agreed routing",
      "Hotel accommodation as booked",
      "Airport transfers on both ends",
      "Visa application support",
      "A named travel consultant throughout",
    ],
    excluded: ["Visa fees paid to embassies", "Travel insurance", "Personal expenses", "Optional excursions", "Excess baggage"],
    itinerary: [
      {
        label: "Step 1",
        title: "Consultation",
        text: "Tell us the budget, the dates and the mood. We come back with two or three real options within 48 hours.",
      },
      {
        label: "Step 2",
        title: "Book & prepare",
        text: "We hold the flights, confirm the hotels and walk you through the visa paperwork line by line.",
      },
      {
        label: "Step 3",
        title: "Go",
        text: "Meet-and-greet at the airport, transfers waiting, and a WhatsApp line to us that works anywhere in the world.",
      },
    ],
    image: IMG.kampala,
    gallery: [IMG.hero, IMG.jinja],
    groupSize: "Any",
    bestSeason: "Year round",
  },
  {
    slug: "honeymoon-holidays-for-two",
    name: "Honeymoon — Holidays for Two",
    location: "Uganda · Zanzibar · Mombasa · Maldives",
    category: "honeymoon",
    days: 7,
    priceFrom: 1900,
    featured: true,
    summary: "Private guides, quiet lodges and not a single shared transfer.",
    intro:
      "Built for two, from the vehicle outward. A private guide, lodges chosen for quiet rather than capacity, and small things we arrange without being asked — a private dinner, a room with a view, a boat with nobody else on it.",
    highlights: [
      "Private vehicle and guide, no sharing",
      "Hand-picked quiet lodges and island stays",
      "Private candlelit dinners and sundowners",
      "Optional Zanzibar, Mombasa or Maldives extension",
      "Flexible payment plans",
    ],
    included: [
      "Private 4x4 and guide throughout",
      "Hand-picked accommodation",
      "All park entries and activities listed",
      "Breakfast daily, plus special dinners as arranged",
      "A dedicated wedding-trip planner",
    ],
    excluded: ["International flights and visas", "Travel insurance", "Spa treatments", "Premium drinks", "Tips"],
    itinerary: [
      {
        label: "Days 1–2",
        title: "Soft landing",
        text: "Airport meet-and-greet, a quiet first night, and no early starts.",
      },
      {
        label: "Days 3–5",
        title: "The wild part",
        text: "A private safari — gorillas, a Kazinga cruise or a Nile sunset, whichever suits you both.",
      },
      {
        label: "Days 6–7",
        title: "Water",
        text: "Bunyonyi, or fly on to Zanzibar, Mombasa or the Maldives for a beach finish.",
      },
    ],
    image: IMG.bunyonyi,
    gallery: [IMG.jinja, IMG.queen],
    groupSize: "2 travellers",
    bestSeason: "Year round",
  },
];

export const featuredTours = tours.filter((t) => t.featured);

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);

export const relatedTours = (tour: Tour, count = 3) =>
  tours
    .filter((t) => t.slug !== tour.slug && t.category === tour.category)
    .concat(tours.filter((t) => t.slug !== tour.slug && t.category !== tour.category))
    .slice(0, count);

export const priceBands = [
  { id: "any", label: "Any budget", test: () => true },
  { id: "under500", label: "Under $500", test: (p: number) => p < 500 },
  { id: "500to1500", label: "$500 – $1,500", test: (p: number) => p >= 500 && p <= 1500 },
  { id: "1500to3000", label: "$1,500 – $3,000", test: (p: number) => p > 1500 && p <= 3000 },
  { id: "over3000", label: "$3,000+", test: (p: number) => p > 3000 },
] as const;

export const durationBands = [
  { id: "any", label: "Any length", test: () => true },
  { id: "day", label: "Day trips", test: (d: number) => d === 1 },
  { id: "short", label: "2 – 4 days", test: (d: number) => d >= 2 && d <= 4 },
  { id: "week", label: "5 – 8 days", test: (d: number) => d >= 5 && d <= 8 },
  { id: "long", label: "9+ days", test: (d: number) => d >= 9 },
] as const;

export function formatPrice(tour: Tour) {
  if (tour.priceOnRequest) return "On request";
  return `$${tour.priceFrom.toLocaleString("en-US")}`;
}
