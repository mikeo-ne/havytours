export type Partner = {
  /** Display label — guessed from the image filename/alt where possible. */
  name: string;
  /** Logo asset, hotlinked from the live site. */
  logo: string;
};

/**
 * The partner logos as they appear, in order, under "Our Partners" on the
 * original havytours.com homepage. Names for the plain numbered assets were not
 * visible in the source, so those are "Partner N" and should be replaced with
 * the real organisations once confirmed. Assets are hotlinked from
 * havytours.com; swap in locally-hosted copies when the final artwork is
 * delivered.
 */
export const partners: Partner[] = [
  {
    name: "Partner 1",
    logo: "https://havytours.com/wp-content/uploads/2023/10/64-280x300_150x150.jpg",
  },
  {
    name: "Partner 2",
    logo: "https://havytours.com/wp-content/uploads/2023/10/65_150x150.jpg",
  },
  {
    name: "Partner 3",
    logo: "https://havytours.com/wp-content/uploads/2023/10/62.png",
  },
  {
    name: "Partner 4",
    logo: "https://havytours.com/wp-content/uploads/2023/10/59.png",
  },
  {
    name: "Partner 5",
    logo: "https://havytours.com/wp-content/uploads/2023/10/58-300x195_2_300x150.jpg",
  },
  {
    name: "Kabojja International School",
    logo: "https://havytours.com/wp-content/uploads/2026/03/Kabojja-Logo.jpg",
  },
  {
    name: "Trinity College Nabbingo",
    logo: "https://havytours.com/wp-content/uploads/2026/03/TCN-logo.png",
  },
  {
    name: "Harvest International School",
    logo: "https://havytours.com/wp-content/uploads/2026/03/Harvest-S.jpg",
  },
  {
    name: "Lubiri Secondary School",
    logo: "https://havytours.com/wp-content/uploads/2026/03/Lubiri-lOGO.png",
  },
  {
    name: "Partner 6",
    logo: "https://havytours.com/wp-content/uploads/2023/10/56-e1696339507766-300x211_150x150.jpg",
  },
  {
    name: "Partner 7",
    logo: "https://havytours.com/wp-content/uploads/2023/10/53.png",
  },
  {
    name: "Partner 8",
    logo: "https://havytours.com/wp-content/uploads/2023/10/57-300x272_150x150.jpg",
  },
  {
    name: "Partner 9",
    logo: "https://havytours.com/wp-content/uploads/2023/10/52-300x189_1_300x150.png",
  },
  {
    name: "Partner 10",
    logo: "https://havytours.com/wp-content/uploads/2023/10/60-300x274_150x150.png",
  },
  {
    name: "Partner 11",
    logo: "https://havytours.com/wp-content/uploads/2023/10/61_150x150.png",
  },
  {
    name: "Partner 12",
    logo: "https://havytours.com/wp-content/uploads/2023/10/63_150x150.png",
  },
];
