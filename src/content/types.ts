import type { ImageMetadata } from "astro";

export interface Picture {
  src: ImageMetadata;
  alt: string;
}

export interface TextBlock {
  type: "text";
  heading: string;
  paragraphs: string[];
}

export interface MediaBlock {
  type: "media";
  /**
   * single: one wide picture
   * pair: two pictures side by side
   * one-big-two-small: one large picture with two stacked on the right
   * browser: a browser window with a second card on top (needs 2 images)
   * carousel: a slideshow you can click through (any number of images)
   * scrolling-browser: a browser window that slowly scrolls a long page by
   *   itself (image 1 = the full page, image 2 = the pinned top bar)
   */
  layout: "single" | "pair" | "one-big-two-small" | "browser" | "carousel" | "scrolling-browser";
  images: Picture[];
  /**
   * Crop the picture to this shape, e.g. "880 / 560". Leave out to show it whole.
   * For "pair" this is the shape of the whole row.
   */
  aspect?: string;
  /** Space between pictures in a "pair", in pixels (default 16) */
  gap?: number;
  background?: string;
  browserUrl?: string;
  /**
   * scrolling-browser only: where the window sits in the card and how the page
   * scrolls, in Figma pixels (the card is 880 wide). Leave out for the defaults.
   */
  scrollPage?: { windowLeft?: number; windowTop?: number; pageTop?: number; distance?: number; seconds?: number };
  /** Optional link shown under the caption, e.g. to a press article */
  link?: { label: string; href: string };
  /** Bold words that start the caption */
  lead?: string;
  caption: string[];
}

/** A grid of small cards, each with a picture and a short caption */
export interface HighlightsBlock {
  type: "highlights";
  heading: string;
  /**
   * grid: two columns (default)
   * scroll: one row you can scroll sideways, with arrow buttons by the heading.
   *   Give each item a width (in pixels, as in Figma) for this one.
   */
  layout?: "grid" | "scroll";
  items: { image: Picture; lead: string; text: string; width?: number }[];
}

/** Highlights as grey cards with a line icon, a big result and a short note */
export interface StatCardsBlock {
  type: "stat-cards";
  heading: string;
  items: { icon: ImageMetadata; title: string; text: string }[];
}

/** A card listing principles: a name, what it means, and an example */
export interface PrinciplesBlock {
  type: "principles";
  label: string;
  items: { name: string; text: string; practice: string }[];
}

export type Block = TextBlock | MediaBlock | HighlightsBlock | StatCardsBlock | PrinciplesBlock;

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  meta: { label: string; value: string[] }[];
  /** Optional big statement shown above the hero picture */
  intro?: string;
  hero:
    | {
        /** A photo with a logo centered on top */
        kind: "logo-over-photo";
        photo: ImageMetadata;
        logo: ImageMetadata;
        logoAlt: string;
        dim: number;
      }
    | {
        /** One finished picture, exported straight from Figma */
        kind: "image";
        image: ImageMetadata;
        alt: string;
      };
  blocks: Block[];
}
