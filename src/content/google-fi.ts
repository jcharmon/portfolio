/**
 * Google Fi case study — all the words and pictures for the page.
 * To change copy, edit the text below. To swap a picture, replace the file in
 * src/assets/google-fi/ with a new one that has the same name.
 */
import type { CaseStudy } from "./types";

import hero from "../assets/google-fi/hero.jpg";
import hlEveryPhone from "../assets/google-fi/highlight-every-phone.jpg";
import hlIosBeta from "../assets/google-fi/highlight-ios-beta.jpg";
import hlSimKit from "../assets/google-fi/highlight-sim-kit.jpg";
import hlSignUps from "../assets/google-fi/highlight-sign-ups.jpg";
import marketingSite from "../assets/google-fi/marketing-site.jpg";
import signUp1 from "../assets/google-fi/sign-up-1.jpg";
import signUp2 from "../assets/google-fi/sign-up-2.jpg";
import signUp3 from "../assets/google-fi/sign-up-3.jpg";
import signUp4 from "../assets/google-fi/sign-up-4.jpg";
import activation from "../assets/google-fi/activation.jpg";
import mmsSetup from "../assets/google-fi/mms-setup.jpg";
import acceptInvite from "../assets/google-fi/accept-invite.jpg";
import simKit from "../assets/google-fi/sim-kit.jpg";
import packaging from "../assets/google-fi/packaging.jpg";
import whiteboards from "../assets/google-fi/whiteboards.jpg";
import stickyNotes from "../assets/google-fi/sticky-notes.jpg";
import fiApp from "../assets/google-fi/fi-app.jpg";

const googleFi: CaseStudy = {
  slug: "google-fi",
  title: "Google Fi",
  summary:
    "Led initiatives to bring new features to Google Fi, Google’s wireless carrier, bringing transparency, innovation and simplicity to a traditionally complicated industry.",
  meta: [
    { label: "Year", value: ["2018"] },
    { label: "Role", value: ["Design lead", "Design mentorship", "UXR / UX / UI design", "Creative direction"] },
    {
      label: "Teamwork made it possible",
      value: [
        "Jay Wong, Jamie Kim, Drew Shimomura, Shannon Liu, Alyx Ryan, Nick Hioitis, Marcia Jung and the Google Fi leadership, Eng, Product, Ops and Marketing teams.",
      ],
    },
  ],
  hero: {
    kind: "image",
    image: hero,
    alt: "Two people on a sofa using their phones, with the Google Fi app icon",
  },
  blocks: [
    {
      type: "text",
      heading: "What is Google Fi?",
      paragraphs: [
        "Launched in 2015 as an alternative to mainstream carriers, Google Fi offers simplified data plans, easy international use and the ability to switch intelligently between multiple carriers (T-Mobile, Sprint and U.S. Cellular).",
        "Until 2018 it was known as Project Fi and worked with only a few select Google phones.",
      ],
    },
    {
      type: "text",
      heading: "The task",
      paragraphs: [
        "In November 2018, Project Fi officially graduated to Google Fi and added support for all Android phones and iPhones.",
        "To prepare for launch, I was tasked with making sure new and existing customers could activate their service on any device, including iPhones.",
        "That meant an entirely new setup experience for Android and iOS, a complete redesign of all printed material and the creation of an iPhone app.",
      ],
    },
    {
      type: "text",
      heading: "Why it’s hard",
      paragraphs: [
        "Fi had only ever worked on a handful of Google phones. Opening it to every Android phone and iPhone meant a simple setup for everyone, from brand-new customers to families switching devices and bringing their numbers. With little documentation from earlier versions, we pieced together how it all worked as we went, and left better records for the next team.",
      ],
    },
    {
      type: "highlights",
      heading: "Highlights",
      items: [
        {
          image: { src: hlEveryPhone, alt: "A phone showing the Google Fi logo" },
          lead: "Brought Google Fi to iPhone and every Android phone.",
          text: "Grew the customer base 7% in three months, with 386% more new users year over year.",
        },
        {
          image: { src: hlIosBeta, alt: "Google Fi running on an iPhone" },
          lead: "Launched iOS in beta.",
          text: "With no Apple carrier deal, I used usability studies to make the case for an honest beta launch.",
        },
        {
          image: { src: hlSimKit, alt: "The redesigned Google Fi SIM kit" },
          lead: "Redesigned the SIM kit.",
          text: "Led the visual design team with Ops, Marketing and print partners. A million kits shipped.",
        },
        {
          image: { src: hlSignUps, alt: "Press coverage of the Google Fi launch" },
          lead: "Grew sign ups 14x at launch.",
          text: "Better activation support drove 14x more sign ups and 17,700 SIM kits ordered on day one.",
        },
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: marketingSite, alt: "The Google Fi plans page" }],
      lead: "Marketing site.",
      caption: [
        "A refreshed plans page that explains Flexible and Unlimited in plain language, so people can choose a plan before they ever sign up.",
      ],
    },
    {
      type: "media",
      layout: "carousel",
      images: [
        { src: signUp1, alt: "Sign up step 1: choose how many people and a plan type" },
        { src: signUp2, alt: "Sign up step 2" },
        { src: signUp3, alt: "Sign up step 3" },
        { src: signUp4, alt: "Sign up step 4: checkout" },
      ],
      lead: "Sign up and purchasing.",
      caption: [
        "A plan picker built around how many people are on your plan, with clear pricing at every step from choosing a plan to checkout.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: activation, alt: "Activation screens on a phone" }],
      lead: "Activation.",
      caption: [
        "A step-by-step setup that replaced hours in a carrier store, from popping in the SIM to bringing over your number.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: mmsSetup, alt: "Guided MMS settings screens for iPhone" }],
      lead: "MMS setup.",
      caption: [
        "Without a carrier deal, iPhone users had to enter settings by hand. A printed insert paired with guided steps made a technical task feel simple.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: acceptInvite, alt: "The accept invite screen for joining a group plan" }],
      lead: "Accept invite.",
      caption: [
        "People joining a group plan accept one invite, see exactly what they’ll pay and finish setup on their own, without the plan owner stepping in.",
      ],
    },
    {
      type: "media",
      layout: "pair",
      aspect: "880 / 348",
      gap: 20,
      images: [
        { src: simKit, alt: "The Google Fi SIM kit" },
        { src: packaging, alt: "Google Fi retail packaging" },
      ],
      lead: "Printed material.",
      caption: ["A redesigned SIM kit, SIM cards and retail packaging, with a million kits printed for launch."],
    },
    {
      type: "media",
      layout: "pair",
      aspect: "880 / 348",
      gap: 20,
      images: [
        { src: whiteboards, alt: "Whiteboard sketches of the app" },
        { src: stickyNotes, alt: "Sticky notes mapping customer journeys" },
      ],
      lead: "Behind the scenes.",
      caption: [
        "Redoing the app started on whiteboards and sticky notes, mapping our customers core journey to ensure the experience met their needs.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: fiApp, alt: "The Google Fi app on web, Android and iPhone" }],
      lead: "The Fi app.",
      caption: [
        "I led the launch of the iOS app and helped re-architect the Android app around our top five customer journeys, like knowing what you’ll pay and managing who’s on your plan.",
      ],
    },
  ],
};

export default googleFi;
