/**
 * Thrive Mobile case study — all the words and pictures for the page.
 * To change copy, edit the text below. To swap a picture, replace the file in
 * src/assets/thrive/ with a new one that has the same name.
 */
import type { CaseStudy } from "./types";

import hero from "../assets/thrive/hero.jpg";
import marketingPage from "../assets/thrive/marketing-page-full.jpg";
import browserHeader from "../assets/thrive/browser-header.png";
import enrollment from "../assets/thrive/enrollment.jpg";
import esimActivation from "../assets/thrive/esim-activation.jpg";
import healthCheckIns from "../assets/thrive/health-check-ins.jpg";
import thriveGuide from "../assets/thrive/thrive-guide.jpg";
import designSystem from "../assets/thrive/design-system.jpg";

const thrive: CaseStudy = {
  slug: "thrive",
  title: "Thrive Mobile",
  summary:
    "Led design for a wireless carrier built around health, helping people on a budget stay connected to their phone, their care and their community.",
  meta: [
    { label: "Year", value: ["2024 – 2026"] },
    { label: "Role", value: ["Design lead", "Design team mentorship", "Product strategy", "Design system"] },
    {
      label: "Teamwork made it possible",
      value: [
        "Dylan Mcintyre, Jay Wong, Michael Le, Nicole Andersen, John Anderson, Max and the support of the rest of the Thrive team.",
      ],
    },
  ],
  hero: {
    kind: "image",
    image: hero,
    alt: "A mother and her baby taking a selfie, with the Thrive Mobile logo",
  },
  blocks: [
    {
      type: "text",
      heading: "What is Thrive Mobile?",
      paragraphs: [
        "Thrive Mobile is a wireless carrier for people on a budget. Through the federal Lifeline program and partner health plans, members get a free phone plan, plus an app that connects them to doctors, food, transportation and housing support.",
      ],
    },
    {
      type: "text",
      heading: "The task",
      paragraphs: [
        "Thrive wanted to be more than a phone plan. It wanted to be the place members turn to for their health. When I joined, there was no design system and only a handful of rough mocks. Grounded in research with our members, we took the company through a full rebrand and rebuilt the experience end to end: signing up, activating service, the everyday app and a new AI guide for finding care. I helped oversee a small team of designers, set up the critiques and rituals that kept quality high, and built a design system from scratch so we could ship fast and stay consistent.",
      ],
    },
    {
      type: "media",
      layout: "scrolling-browser",
      background: "#ededf2",
      scrollPage: { windowLeft: 60, windowTop: 48, pageTop: 0, distance: 3088, seconds: 50.5 },
      images: [
        { src: marketingPage, alt: "The Thrive Mobile home page, scrolling from top to bottom" },
        { src: browserHeader, alt: "" },
      ],
      lead: "Marketing site.",
      caption: [
        "We turned a complicated offer into a simple story, so anyone could see what they get, check if they qualify and sign up in minutes.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: enrollment, alt: "Three enrollment screens: checking if you qualify, reviewing your order and a confirmation" }],
      lead: "A new enrollment flow that lifted sign-ups 65%.",
      caption: [
        "Signing up took about seven minutes, needed a phone call to get a sponsor code, and small typos led to failed eligibility checks. We made it fully self-serve, caught errors as people typed and built the Lifeline application right into the flow.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: esimActivation, alt: "Three eSIM setup screens, ending with the member's new phone number" }],
      lead: "eSIM activation.",
      caption: [
        "We unlocked a whole new market for Thrive by letting members bring their own phone. Setting up a phone used to take a lot of hand-holding, so we designed a self-serve eSIM setup anyone can finish in a few simple steps.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: healthCheckIns, alt: "A lock screen notification inviting a member to their weekly check-in" }],
      lead: "Health check-ins.",
      caption: [
        "Members get a free phone plan in exchange for a few minutes a week on their health, so every check-in had to be worth their time. We designed them to feel short, personal and genuinely useful, with content built alongside their health plans.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: thriveGuide, alt: "Three Thrive Guide screens: a home prompt, doctor results and specialist options" }],
      lead: "Thrive Guide.",
      caption: [
        "Our shift from human-assisted support to AI-native care navigation. Members ask in their own words, and the Guide finds in-network care, books appointments, sends reminders and connects them to benefits like food and rides, with a Thrive Assistant a tap away.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: designSystem, alt: "Pieces of the Thrive design system: color swatches, buttons, status chips, icons and cards" }],
      lead: "Design system.",
      caption: [
        "Built from scratch: color, type and spacing tokens, accessible components and patterns shared across iOS, Android and web, documented so every designer and engineer could use it.",
      ],
    },
    {
      type: "text",
      heading: "Building a design culture",
      paragraphs: [
        "Beyond the screens, I wanted design to be part of how Thrive thinks, not a step before engineering. I led a design principles sprint with the team and our cross-functional partners to agree on what good looks like for members. The principles we landed on became a shared language in critiques, planning and product reviews, and helped non-designers make better calls on their own.",
      ],
    },
    {
      type: "principles",
      label: "Thrive design principles",
      items: [
        {
          name: "Reliable",
          text: "We show up with the level of service members need, in the moments they need us.",
          practice: "A data top-up when a member runs low on high-speed data while trying to reach care.",
        },
        {
          name: "Thoughtful",
          text: "We surprise and delight members with content that feels personal and relevant to them.",
          practice: "Wishing members a happy birthday during their weekly health check-in.",
        },
        {
          name: "Make it easy",
          text: "We take the friction out of complex, often overwhelming healthcare tasks. Members have a lot going on, so we take things off their plates rather than add to them.",
          practice: "An always-there button to reach a Thrive Assistant.",
        },
        {
          name: "Respectful",
          text: "We meet a diverse member population, with varying needs, where they are.",
          practice: "Putting a face to the name of every Thrive Assistant.",
        },
        {
          name: "Empowering",
          text: "We give members the support and access to navigate the complex world of healthcare with confidence.",
          practice: "Making things easy without ever coming off as condescending.",
        },
      ],
    },
  ],
};

export default thrive;
