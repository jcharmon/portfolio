/**
 * NextNav case study — all the words and pictures for the page.
 * To change copy, edit the text below. To swap a picture, replace the file in
 * src/assets/nextnav/ with a new one that has the same name.
 */
import type { CaseStudy } from "./types";

import hero from "../assets/nextnav/hero.jpg";
import hlSeriesE from "../assets/nextnav/highlight-series-e.jpg";
import hlResearch from "../assets/nextnav/highlight-research.jpg";
import hlDesignSystem from "../assets/nextnav/highlight-design-system.jpg";
import hlRelationships from "../assets/nextnav/highlight-relationships.jpg";
import incidents from "../assets/nextnav/incidents.jpg";
import helpAlerts from "../assets/nextnav/help-alerts.jpg";
import commandView from "../assets/nextnav/command-view.jpg";
import designLibrary from "../assets/nextnav/design-library.jpg";

const nextnav: CaseStudy = {
  slug: "nextnav",
  title: "NextNav",
  summary:
    "Partnered with NextNav’s founders to bring their breakthrough location tech to life, designing the iOS and tablet apps that keep first responders safe.",
  meta: [
    { label: "Year", value: ["2021"] },
    { label: "Role", value: ["Design lead", "UXR / UX / UI design", "Design system"] },
    { label: "Teamwork made it possible", value: ["TM, John Ashenden and the NextNav leadership team."] },
  ],
  hero: {
    kind: "image",
    image: hero,
    alt: "The NextNav app on a laptop and a phone",
  },
  blocks: [
    {
      type: "text",
      heading: "What is NextNav?",
      paragraphs: [
        "Founded in 2007, NextNav pioneered what they call a Metropolitan Beacon System (MBS), a system similar to GPS except that it functions indoors and includes a Z-axis (altitude) in addition to X (longitude) and Y (latitude).",
        "NextNav’s software is used to enable first responders to effectively respond to emergency incidents by providing them with precise, floor-level, visibility of their team within buildings and urban environments.",
      ],
    },
    {
      type: "text",
      heading: "The task",
      paragraphs: [
        "In 2019, the design agency, TM, partnered with the NextNav team to build a product that brought their breakthrough tech to life.",
        "In April 2020, the team came back to TM to push the product experience and make it more meaningful for first responders. The initial solution wasn’t being fully adopted. It lacked key features needed to be valuable in a real world situation.",
        "I was tasked with leading this new initiative.",
      ],
    },
    {
      type: "highlights",
      heading: "Highlights",
      layout: "scroll",
      items: [
        {
          width: 478,
          image: { src: hlSeriesE, alt: "Responders shown floor by floor on a 3D city map" },
          lead: "Helped raise a $120M Series E.",
          text: "Our design partnership helped NextNav show investors what their 3D location tech could do in the field.",
        },
        {
          width: 392,
          image: { src: hlResearch, alt: "The research plan and research questions" },
          lead: "Designed for complex workflows.",
          text: "Special ops and first responders have unconventional procedures. Through detailed research, we unlocked their workflow...",
        },
        {
          width: 320,
          image: { src: hlDesignSystem, alt: "The NextNav sign in screen" },
          lead: "Built a design system for stress.",
          text: "Large tap targets and a color scheme that reads in a dark command center or bright sun.",
        },
        {
          width: 536,
          image: { src: hlRelationships, alt: "Diagrams of the object structure, the new incident object and the new map" },
          lead: "Mapped out each relationship.",
          text: "We defined how users, teams, groups and a new incident object relate, so one responder can be on many teams and a chain of command can form as teams arrive on scene.",
        },
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: incidents, alt: "Incident view, incident map and 3D building view on iPhone" }],
      lead: "Incidents.",
      caption: [
        "One live map of every responder on scene, with a 3D building view to see who is on which floor and a detail view for the whole incident.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: helpAlerts, alt: "Help alert countdown, individual detail and team help alert screens" }],
      lead: "Help alerts.",
      caption: [
        "A responder in trouble can call for help with one press. Their whole team sees it instantly and can answer right from the alert.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: commandView, alt: "Four tablet screens of the command view" }],
      lead: "Command view.",
      caption: [
        "On tablets, incident commanders see every responder on a 3D map with the incident’s context alongside, so they can run the scene from one screen.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: designLibrary, alt: "Pages from the NextNav design library" }],
      lead: "Design library.",
      caption: [
        "We documented every component, from buttons and type to map markers and their states, so engineers could build fast and the team could keep scaling after launch.",
      ],
    },
  ],
};

export default nextnav;
