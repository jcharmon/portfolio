// "More work" on the home page: a 3-column grid where each piece spans 1, 2 or 3 columns,
// and the popup each tile opens. Mirrors the Figma "More work · Mixed spans" mock (grid 878:9068).
// Pictures live in src/assets/more-work/ (file names below), videos in public/more-work/.
// To add a project: add it to `items`, then place it in a row of `moreWork` at the bottom.
// Leave `popup` out if the tile shouldn't open anything.

/** Shape of the tile as [width, height] (Figma pixels; only the ratio matters for layout) */
type Size = [number, number];

/** A scrolling page inside a window. All numbers are Figma pixels inside the tile or slide. */
export interface Scroll {
  base: string; // picture of everything except the page
  page: string; // the long page that scrolls
  window: { x: number; y: number; w: number; h: number; radius?: number };
  pageHeight: number; // page height at window width
  /** [time, offset] keyframes in seconds, offset in Figma px (negative = scrolled down) */
  keys: [number, number][];
  loop: number; // seconds before it starts again
}

export type TileMedia =
  | { kind: "image"; src: string }
  | { kind: "video"; src: string; poster: string }
  | { kind: "scroll"; scroll: Scroll }
  | { kind: "cycle"; srcs: string[]; every: number };

export type Slide =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster: string; background: string; alt: string; size?: Size } // size = whole video shown at that shape (no phone corners)
  | { kind: "scroll"; scroll: Scroll; size: Size; alt: string };

export interface MoreWorkItem {
  title: string;
  description: string;
  size: Size;
  media?: TileMedia; // leave out for a blurred "Coming soon" tile
  soonImage?: string; // picture to blur on a "Coming soon" tile
  grow?: boolean; // fill the rest of its stack instead of keeping its shape (for Coming soon tiles)
  popup?: {
    project: string;
    title: string;
    description: string;
    credits?: string;
    link?: { label: string; href: string }; // optional link out, shown under the description
    slides: Slide[];
  };
}

/** One spot in a row: spans 1, 2 or 3 columns and holds one tile, or a stack of tiles */
export interface Cell {
  span: 1 | 2 | 3;
  tiles: MoreWorkItem[];
}
export type Row = Cell[];

const items = {
  boombox: {
    title: "Boombox",
    description: "Booking flow for hosted team events.",
    size: [285, 212],
    media: {
      kind: "scroll",
      scroll: {
        base: "base-boombox-tile.jpg",
        page: "page-boombox.jpg",
        window: { x: 16, y: 16, w: 253.33, h: 179.8, radius: 6 },
        pageHeight: 767.92,
        keys: [[1.5, 0], [38.5, -586.5], [41, -586.5], [45, 0]],
        loop: 46.5,
      },
    },
    popup: {
      project: "Boombox",
      title: "Booking flow for events",
      description:
        "Boombox helps teams find and book activities together. I led design as the company moved from public fitness classes to private team experiences, covering navigation, experience pages, booking, payments and dashboards. This flow takes a team from an event page to a sent request.",
      credits:
        "Made with: Jenny Johannesson, Tyler Galpin, Ivy Son, Henry Wu, Blake Hudelson and the Boombox team. Photos in the mocks are placeholders.",
      slides: [
        {
          kind: "scroll",
          size: [720, 511],
          alt: "The Boombox event page, scrolling from top to bottom",
          scroll: {
            base: "",
            page: "page-boombox.jpg",
            window: { x: 0, y: 0, w: 720, h: 511 },
            pageHeight: 2182.5,
            keys: [[1.5, 0], [31.5, -1669.5], [33.5, -1669.5], [35.5, 0]],
            loop: 37,
          },
        },
        { kind: "image", src: "s-boombox-2.jpg", alt: "Picking a date and time for the event" },
        { kind: "image", src: "s-boombox-3.jpg", alt: "Adding a few more details to the request" },
        { kind: "image", src: "s-boombox-4.jpg", alt: "What to expect after sending the request" },
      ],
    },
  },
  juzzyBrand: {
    title: "Uncle Juzzy’s",
    description: "Vibe brand presentation for a restaurant that never opened.",
    size: [285, 175],
    media: { kind: "image", src: "tile-juzzy-brand.jpg" },
    popup: {
      project: "Uncle Juzzy’s",
      title: "Vibe brand presentation",
      description:
        "Vibe, the brand presentation for Uncle Juzzy’s, an Israeli street food restaurant that never opened. It covers what sets it apart, its personality, its mission and three visual concepts to pick from.",
      credits: "Made with: Becca Rabinowitz",
      slides: [
        { kind: "image", src: "s-vibe-1.jpg", alt: "Cover: Vibe" },
        { kind: "image", src: "s-vibe-2.jpg", alt: "Let’s recap: differentiators, personality, mission" },
        { kind: "image", src: "s-vibe-3.jpg", alt: "Key differentiators: understated, nostalgic, done the right way" },
        { kind: "image", src: "s-vibe-4.jpg", alt: "Who we are and who we’re not" },
        { kind: "image", src: "s-vibe-5.jpg", alt: "The Uncle Juzzy’s mission" },
        { kind: "image", src: "s-vibe-6.jpg", alt: "Visual concepts: let’s pick a direction" },
        { kind: "image", src: "s-vibe-7.jpg", alt: "Concept 01: Rough Cut" },
        { kind: "image", src: "s-vibe-8.jpg", alt: "Concept 02: Color & Chaos" },
        { kind: "image", src: "s-vibe-9.jpg", alt: "Concept 03: Contemporary Nostalgia" },
        { kind: "image", src: "s-vibe-10.jpg", alt: "Thank you" },
      ],
    },
  },
  juzzyTee: {
    title: "Uncle Juzzy’s",
    description: "Staff tee for the kitchen crew.",
    size: [285, 285],
    media: { kind: "image", src: "tile-juzzy-tee.jpg" },
    popup: {
      project: "Uncle Juzzy’s",
      title: "Staff tee",
      description: "A mockup of the Uncle Juzzy’s staff tee, with the menu printed big on the back.",
      credits: "Made with: Becca Rabinowitz",
      slides: [{ kind: "image", src: "s-tee-1.jpg", alt: "Two cooks wearing the staff tee in a kitchen" }],
    },
  },
  corona: {
    title: "coronavirus.gov",
    description: "Rethinking the national COVID portal with the White House.",
    size: [285, 338],
    media: {
      kind: "scroll",
      scroll: {
        base: "base-corona-tile.jpg",
        page: "page-corona.jpg",
        window: { x: 25.4, y: 41.42, w: 234.5, h: 296.58 },
        pageHeight: 699.67,
        keys: [[1.5, 0], [25.5, -401.5], [27.5, -401.5], [29.5, 0]],
        loop: 31,
      },
    },
    popup: {
      project: "coronavirus.gov",
      title: "National COVID portal",
      description:
        "Rethinking the national COVID portal with the White House. We simplified the structure so people could quickly find testing, vaccines, treatment and financial help in one place.",
      credits: "Made with: Matthew Miller, Tyler Galpin and Shaun Modi.",
      slides: [
        {
          kind: "scroll",
          size: [720, 540],
          alt: "The coronavirus.gov home page scrolling in a browser",
          scroll: {
            base: "base-corona-slide.jpg",
            page: "page-corona.jpg",
            window: { x: 50, y: 68, w: 620, h: 416 },
            pageHeight: 1849.61,
            keys: [[1.5, 0], [25.5, -1431.6], [27.5, -1431.6], [29.5, 0]],
            loop: 31,
          },
        },
      ],
    },
  },
  acura: {
    title: "Acura",
    description: "Magazine ads for the TLX, MDX and RLX launches at Mullen.",
    size: [285, 214],
    media: { kind: "cycle", srcs: ["s-acura-1.jpg", "s-acura-2.jpg", "s-acura-3.jpg", "s-acura-4.jpg"], every: 0.8 },
    popup: {
      project: "Acura · Mullen",
      title: "Making a decades-old brand feel new",
      description:
        "As Acura's agency of record, Mullen set out to elevate the brand while staying true to what it always stood for. As an art director, I made magazine ads for the TLX, MDX and RLX launches, plus social and digital campaigns, sponsored events like Sundance, New Yorker Fest and Jazz Fest, and concepts for TV and radio.",
      credits: "Made with: Jon Willard, Stanley Chen, Natasha Hugeback, Tedd Wood and Tim Semple.",
      slides: [
        { kind: "image", src: "s-acura-1.jpg", alt: "TLX spread: built to drive, then built to race" },
        { kind: "image", src: "s-acura-2.jpg", alt: "MDX ad: The daring are never done" },
        { kind: "image", src: "s-acura-3.jpg", alt: "TLX ad: An encore you didn’t see coming" },
        { kind: "image", src: "s-acura-4.jpg", alt: "RLX spread: Yes, we are there yet" },
      ],
    },
  },
  localKitchens: {
    title: "Local Kitchens",
    description: "Kitchen display system for busy lines.",
    size: [285, 214],
    media: { kind: "image", src: "tile-local-kitchens.jpg" },
    popup: {
      project: "Local Kitchens",
      title: "Kitchen display system",
      description:
        "A kitchen display system for busy lines. Orders flow to the right station, timers keep tickets moving and cooks bump orders with a single tap.",
      credits: "Made with: Lukas Pfeiffer and the Local Kitchens leadership team.",
      slides: [
        { kind: "image", src: "s-lk-1.jpg", alt: "The kitchen display showing orders by station" },
        { kind: "image", src: "s-lk-2.jpg", alt: "Time in the kitchen: photos of the line and the display in use" },
      ],
    },
  },
  juzzyMobile: {
    title: "Uncle Juzzy’s",
    description: "Mobile website with ordering up front.",
    size: [285, 338],
    media: { kind: "video", src: "/more-work/juzzy-mobile-tile.mp4", poster: "/more-work/juzzy-mobile-tile-poster.jpg" },
    popup: {
      project: "Uncle Juzzy’s",
      title: "Mobile website",
      description:
        "The mobile site for Uncle Juzzy’s, with ordering up front, the menu and everything you need to find the restaurant.",
      credits: "Made with: Becca Rabinowitz",
      slides: [{ kind: "image", src: "s-juzzy-mobile-1.jpg", alt: "The Uncle Juzzy’s home page in a phone" }],
    },
  },
  vooma: {
    title: "Vooma",
    description: "Outlook add-in that turns quote emails into priced replies.",
    size: [1591, 1153],
    media: { kind: "image", src: "tile-vooma.jpg" },
    popup: {
      project: "Vooma",
      title: "Quoting Outlook add-in",
      description:
        "Freight quote requests land in reps’ inboxes all day, and every slow reply loses business. I designed Vooma’s Outlook add-in to sit beside the email, pull out the route and load details, price it with the customer’s own rate tools and draft the reply in one click.",
      credits: "Made with: Jesse Buckingham, Mike Carter and Michael Parlato.",
      link: { label: "vooma.com", href: "https://www.vooma.com/" },
      slides: [
        {
          kind: "image",
          src: "tile-vooma.jpg",
          alt: "The Vooma add-in beside a pickup request email in Outlook, showing the route, details and rate",
        },
      ],
    },
  },
} satisfies Record<string, MoreWorkItem>;

const gocardStaggered: MoreWorkItem = {
  title: "GoCard",
  description: "Screens from the GoCard mobile web app.",
  size: [2000, 1130],
  media: { kind: "image", src: "tile-gocard-staggered.jpg" },
  popup: {
    project: "GoCard · Jawnt",
    title: "Mobile web app screens",
    description:
      "Screens from the GoCard mobile web app: getting a new card ready, adding money, managing the card and linking a physical card.",
    slides: [{ kind: "image", src: "tile-gocard-staggered.jpg", alt: "GoCard app screens laid out in staggered rows on navy" }],
  },
};

/** A tile that grows to fill the space left in its stack. Shows a blurred "Coming soon" picture. */
const soon = (soonImage: string): MoreWorkItem => ({ title: "Coming soon", description: "", size: [285, 200], soonImage, grow: true });

/**
 * The grid, row by row (Figma "More work · Mixed spans", grid 878:9068).
 * Each row has cells that span 1, 2 or 3 of the 3 columns. A cell with more than one
 * tile stacks them, and the last tile in a cell stretches to fill the row's height.
 * Pictures show whole at their own shape (a stretched last tile trims a little off its edges).
 * Tiles that span 2 or 3 columns use sharper pictures (`...items.x, media`).
 */
export const moreWork: Row[] = [
  [{ span: 3, tiles: [gocardStaggered] }],
  [
    { span: 2, tiles: [items.vooma] },
    { span: 1, tiles: [soon("s-lk-2.jpg")] },
  ],
  [
    { span: 1, tiles: [soon("s-vibe-8.jpg")] },
    {
      span: 2,
      tiles: [{ ...items.boombox, media: { ...items.boombox.media, scroll: { ...items.boombox.media.scroll, base: "base-boombox-wide.jpg" } } }],
    },
  ],
  [
    { span: 2, tiles: [{ ...items.localKitchens, media: { kind: "image", src: "tile-local-kitchens-wide.jpg" } }] },
    { span: 1, tiles: [soon("s-tee-1.jpg")] },
  ],
  [
    { span: 1, tiles: [soon("s-vibe-6.jpg")] },
    { span: 2, tiles: [items.acura] },
  ],
  [
    {
      span: 2,
      tiles: [{ ...items.corona, media: { ...items.corona.media, scroll: { ...items.corona.media.scroll, base: "base-corona-wide.jpg" } } }],
    },
    { span: 1, tiles: [items.juzzyMobile, items.juzzyTee] },
  ],
  [{ span: 3, tiles: [{ ...items.juzzyBrand, media: { kind: "image", src: "tile-juzzy-brand-wide.jpg" } }] }],
];
