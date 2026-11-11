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
   */
  layout: "single" | "pair" | "one-big-two-small" | "browser";
  images: Picture[];
  /** Crop the picture to this shape, e.g. "880 / 560". Leave out to show it whole. */
  aspect?: string;
  background?: string;
  browserUrl?: string;
  /** Bold words that start the caption */
  lead?: string;
  caption: string[];
}

export type Block = TextBlock | MediaBlock;

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  meta: { label: string; value: string[] }[];
  hero: {
    kind: "logo-over-photo";
    photo: ImageMetadata;
    logo: ImageMetadata;
    logoAlt: string;
    dim: number;
  };
  blocks: Block[];
}
