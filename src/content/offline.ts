/**
 * "Meet me offline": the home page tile and the full-screen photo story it opens.
 * To change a caption, edit the text below. To swap a picture, replace the file in
 * src/assets/offline/ with a new one that has the same name (any size works).
 *
 * kind "photo"  = a regular photo, cropped to fill a rounded card with a shadow.
 * kind "object" = a product cut-out (camera, coffee…) saved as a PNG with a
 *                 see-through background, shown whole with no card.
 */
import type { ImageMetadata } from "astro";

import favoritePeople from "../assets/offline/01-favorite-people.jpg";
import halfMarathonTraining from "../assets/offline/02-half-marathon-training.jpg";
import dallasHalf from "../assets/offline/03-dallas-half-marathon.png";
import upForAnything from "../assets/offline/04-up-for-anything.jpg";
import sushiDate from "../assets/offline/05-sushi-date.jpg";
import meAndMyBoys from "../assets/offline/06-me-and-my-boys.jpg";
import newestAddition from "../assets/offline/07-newest-addition.jpg";
import meAndBlake from "../assets/offline/08-me-and-blake.jpg";
import surfing from "../assets/offline/09-surfing.jpg";
import positiveHappyKind from "../assets/offline/10-positive-happy-kind.jpg";
import leica from "../assets/offline/11-leica-q3.png";
import icedCoffee from "../assets/offline/12-iced-coffee.png";
import chucks from "../assets/offline/13-chucks.png";

export interface OfflineSlide {
  image: ImageMetadata;
  alt: string;
  kind: "photo" | "object";
  title: string;
  text: string;
}

export const offline = {
  /** The home page tile */
  tile: {
    title: "Meet me offline",
    summary: "Learn a little more about me.",
    /** The three stacked photos on the tile, back to front */
    photos: [halfMarathonTraining, surfing, upForAnything],
  },
  slides: [
    {
      image: favoritePeople,
      alt: "A family of five smiling together in their kitchen",
      kind: "photo",
      title: "My favorite people",
      text: "My family and friends are the most important part of my life. Most weekends you’ll find us outside, making plans or making a mess.",
    },
    {
      image: halfMarathonTraining,
      alt: "Jordan cheering with a finisher medal after the Austin Half Marathon",
      kind: "photo",
      title: "Half marathon training",
      text: "I’m always up for an adventure. Lately that means early miles, race bibs and a lot of stretching.",
    },
    {
      image: dallasHalf,
      alt: "A Dallas Half Marathon finisher medal",
      kind: "object",
      title: "Dallas Half Marathon",
      text: "13.1 miles through my hometown. Every early training run was worth it for that finish line.",
    },
    {
      image: upForAnything,
      alt: "Two skiers posing at the top of a snowy mountain",
      kind: "photo",
      title: "Up for anything",
      text: "Give me a slope, a trail or something I’ve never tried before. I’ll say yes and figure it out on the way.",
    },
    {
      image: sushiDate,
      alt: "A boy in a bucket hat slurping a long udon noodle at a sushi restaurant",
      kind: "photo",
      title: "Sushi date",
      text: "Sushi date with my oldest kiddo. Slurping the noodles is part of the fun.",
    },
    {
      image: meAndMyBoys,
      alt: "Two young boys piled on their mom's back on the couch, all smiling",
      kind: "photo",
      title: "Me and my boys",
      text: "Me and my boys. Any spot on the couch can turn into a dogpile.",
    },
    {
      image: newestAddition,
      alt: "A family in a hospital room with a newborn, two older brothers making silly faces",
      kind: "photo",
      title: "Our newest addition",
      text: "Welcoming our newest addition to the crew.",
    },
    {
      image: meAndBlake,
      alt: "A selfie of a mom cheek to cheek with her smiling baby girl",
      kind: "photo",
      title: "Me and Blake",
      text: "Me and Blake, the girl of the crew.",
    },
    {
      image: surfing,
      alt: "Surfing a boat wake while holding a toddler in a life jacket, throwing a peace sign",
      kind: "photo",
      title: "Surfing",
      text: "Surfing the wake with a little co-pilot. Peace signs are required.",
    },
    {
      image: positiveHappyKind,
      alt: "A man laughing with a toddler",
      kind: "photo",
      title: "Positive, happy and kind",
      text: "I try to keep a positive, happy and empathetic attitude, at work and everywhere else.",
    },
    {
      image: leica,
      alt: "A Leica Q3 camera",
      kind: "object",
      title: "LEICA Q3",
      text: "Photography is my favorite hobby. The Q comes almost everywhere with me, and it’s taught me to slow down, notice the light and look for the small details. Those same habits show up in my design work.",
    },
    {
      image: icedCoffee,
      alt: "A cup of iced black coffee",
      kind: "object",
      title: "Iced coffee, everyday",
      text: "You can always find me with an iced coffee, even on the coldest day of the year. No milk, no sugar, lots of ice.",
    },
    {
      image: chucks,
      alt: "A black high-top Converse sneaker",
      kind: "object",
      title: "Chucks, most days",
      text: "Classic black high-tops, a little beat up. I keep it pretty casual, so if you run into me, there's a good chance I'm wearing these.",
    },
  ] satisfies OfflineSlide[],
};
