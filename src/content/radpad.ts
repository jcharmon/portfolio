/**
 * RadPad case study — all the words and pictures for the page.
 * To change copy, edit the text below. To swap a picture, replace the file in
 * src/assets/radpad/ with a new one that has the same name.
 */
import type { CaseStudy } from "./types";

import hero from "../assets/radpad/hero.jpg";
import leaseBuilder from "../assets/radpad/lease-builder.jpg";
import bankAccount from "../assets/radpad/bank-account.jpg";
import feeSummary from "../assets/radpad/fee-summary.jpg";
import sendingTheLease from "../assets/radpad/sending-the-lease.jpg";
import confirmDetails from "../assets/radpad/confirm-details.jpg";
import payment from "../assets/radpad/payment.jpg";

const radpad: CaseStudy = {
  slug: "radpad",
  title: "RadPad",
  summary:
    "Designed and launched tools across web, iOS and Android that made RadPad a one-stop shop for renting and leasing.",
  meta: [
    { label: "Year", value: ["2016"] },
    { label: "Role", value: ["Design lead", "Product strategy", "User research", "UX / UI design", "OOH design"] },
    {
      label: "I didn’t do it alone",
      value: [
        "Tyler Galpin (Creative Director), Matt Miller (Designer), Jonathan Eppers (CEO) and the RadPad engineering team.",
      ],
    },
  ],
  hero: {
    kind: "image",
    image: hero,
    alt: "The RadPad lease signing screen on web and a renter’s phone",
  },
  blocks: [
    {
      type: "text",
      heading: "What is RadPad?",
      paragraphs: [
        "RadPad is a rental marketplace where renters find an apartment, apply, sign their lease and pay rent online. Landlords list long and short term rentals, qualify applicants and accept debit or credit card rent payments, all in one place.",
      ],
    },
    {
      type: "text",
      heading: "The task",
      paragraphs: [
        "Much of renting still happened off RadPad. Landlords sent their own leases, collected signatures by hand and took move-in payments however they could. Our goal was to close that loop: a tool that lets landlords create a lease, send it and have it signed and paid for, all on RadPad. We took it from kickoff to launch in about two months.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: leaseBuilder, alt: "The RadPad lease builder" }],
      lead: "Building the RadPad lease.",
      caption: [
        "The goal was a customizable lease that landlords could trust and renters could actually understand. Landlords set the rent, deposit and terms in a few steps, with plain-language help explaining what each choice meant, and signing was handled through DocuSign.",
      ],
    },
    {
      type: "media",
      layout: "pair",
      aspect: "880 / 348",
      gap: 20,
      images: [
        { src: bankAccount, alt: "Connecting a bank account" },
        { src: feeSummary, alt: "A summary of fees" },
      ],
      lead: "Getting paid.",
      caption: ["Landlords connect a bank account and see a clear summary of every fee before the lease goes out."],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: sendingTheLease, alt: "The lease overview with renter invites" }],
      lead: "Sending the lease.",
      caption: ["One overview to double check the details and invite every renter on the lease by email."],
    },
    {
      type: "media",
      layout: "pair",
      aspect: "880 / 348",
      gap: 20,
      images: [
        { src: confirmDetails, alt: "A renter confirming their details" },
        { src: payment, alt: "Paying first month’s rent and deposit by card" },
      ],
      lead: "Signing and move-in.",
      caption: [
        "Renters confirm their details, sign, and pay first month’s rent and deposit by debit or credit card in one flow.",
      ],
    },
  ],
};

export default radpad;
