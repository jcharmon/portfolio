/**
 * Bobbie case study — all the words and pictures for the page.
 * To change copy, edit the text below. To swap a picture, replace the file in
 * src/assets/bobbie/ with a new one that has the same name.
 */
import type { CaseStudy } from "./types";

import hero from "../assets/bobbie/hero.jpg";
import iconSales from "../assets/bobbie/icon-sales.svg";
import iconEmail from "../assets/bobbie/icon-email.svg";
import iconTeam from "../assets/bobbie/icon-team.svg";
import accountPortal from "../assets/bobbie/account-portal.jpg";
import onboardingQuiz from "../assets/bobbie/onboarding-quiz.jpg";
import emailCampaigns from "../assets/bobbie/email-campaigns.jpg";
import howIsFeeding from "../assets/bobbie/how-is-feeding-going.jpg";
import motherlode from "../assets/bobbie/motherlode.jpg";

const bobbie: CaseStudy = {
  slug: "bobbie",
  title: "Bobbie",
  summary:
    "Helped establish Bobbie as the first DTC infant formula company in the US, on a mission to shake the stigma around how we feed our babies.",
  meta: [
    { label: "Year", value: ["2021 – 2022"] },
    {
      label: "Role",
      value: ["Founding UX designer", "Design direction and leadership", "Product strategy", "UXR / UX / UI design"],
    },
    {
      label: "Teamwork made it possible",
      value: [
        "Laura Modi, Lindsay Monroe, Elieke Kierns, Jennifer Kelly, Jenna Mersch, Human Design Agency, Angeline Giammona, the Bobbie executive team and brand support from Herman Scheer.",
      ],
    },
  ],
  hero: {
    kind: "image",
    image: hero,
    alt: "Bobbie organic infant formula",
  },
  blocks: [
    {
      type: "text",
      heading: "What is Bobbie?",
      paragraphs: [
        "Bobbie is an organic infant formula company, the first direct-to-consumer formula brand in the US. Parents subscribe online and get formula delivered to their door, from a team that talks about feeding without judgment.",
      ],
    },
    {
      type: "text",
      heading: "The task",
      paragraphs: [
        "I joined as the founding UX designer before Series A and stayed through Series B. We were moving at the speed of light, and in year one I helped grow both the company and the design team. I set up our UX process from scratch and designed the site, account and email experiences, all tied closely to revenue.",
      ],
    },
    {
      type: "stat-cards",
      heading: "Highlights",
      items: [
        {
          icon: iconSales,
          title: "$18M in sales in year one",
          text: "I helped redesign the account portal, improved site conversion and shipped new growth features, helping us beat projections 4x with 40% month-over-month growth.",
        },
        {
          icon: iconEmail,
          title: "Earned $3.6M from email",
          text: "I helped set the design strategy and designed the email program, from welcome series and cart reminders to newsletters.",
        },
        {
          icon: iconTeam,
          title: "Built the UX team",
          text: "I set up our UX process and culture, then hired, mentored and managed the team, plus agencies and freelancers.",
        },
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: accountPortal, alt: "The Bobbie account portal" }],
      lead: "Account portal.",
      caption: [
        "A redesign that put the things parents actually needed up front: change bundle size, move a ship date, update billing or track a box. Easy changes meant fewer cancellations.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: onboardingQuiz, alt: "The Bobbie onboarding quiz" }],
      lead: "Onboarding quiz.",
      caption: [
        "A short quiz that asks how each family plans to feed, then recommends the right bundle, with no judgment.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: emailCampaigns, alt: "A selection of Bobbie emails" }],
      lead: "Email campaigns.",
      caption: [
        "Welcome series, cart reminders, newsletters and more. Email was one of our biggest growth channels.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: howIsFeeding, alt: "The How is feeding going? campaign site" }],
      lead: "How is feeding going?",
      caption: [
        "A campaign asking a more inclusive question for every parent, however they feed. I helped design and launch the site where parents share their stories.",
      ],
      link: {
        label: "Read about the campaign",
        href: "https://www.thebump.com/news/bobbie-inclusive-baby-feeding-campaign",
      },
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: motherlode, alt: "The MotherLode fundraising campaign" }],
      lead: "The MotherLode.",
      caption: [
        "We opened our fundraise to the moms who use Bobbie. I helped lead the campaign with our CEO. We raised $250K in under an hour.",
      ],
      link: {
        label: "Read the announcement",
        href: "https://www.businesswire.com/news/home/20210630005380/en/Invest-Like-a-Mother-Bobbie-a-Company-For-and-By-Moms-Launches-The-MotherLode-to-Democratize-Traditional-Fundraising-One-Bottle-at-a-Time",
      },
    },
  ],
};

export default bobbie;
