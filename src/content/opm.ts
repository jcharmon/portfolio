/**
 * OPM Retirements case study — all the words and pictures for the page.
 * To change copy, edit the text below. To swap a picture, replace the file in
 * src/assets/opm/ with a new one that has the same name.
 */
import type { CaseStudy } from "./types";

import hero from "../assets/opm/hero-bg.jpg";
import heroSeal from "../assets/opm/opm-seal.png";
import mapping1 from "../assets/opm/mapping-1.jpg";
import mapping2 from "../assets/opm/mapping-2.jpg";
import mapping3 from "../assets/opm/mapping-3.jpg";
import retirementMap from "../assets/opm/retirement-map.png";
import retirementFlow from "../assets/opm/retirement-flow.png";
import permutations from "../assets/opm/permutations.png";
import team1 from "../assets/opm/team-1.jpg";
import team2 from "../assets/opm/team-2.jpg";
import caseReview from "../assets/opm/case-review.png";
import sixMonths from "../assets/opm/six-months-instant.jpg";
import portal from "../assets/opm/portal-screenshot.png";
import tweet from "../assets/opm/tweet-card.png";

const opm: CaseStudy = {
  slug: "opm",
  title: "OPM Retirements",
  summary:
    "Helped modernize how America’s federal workforce retires, turning a paper process that took months into a digital one measured in days.",
  meta: [
    { label: "Year", value: ["2025 – 2026"] },
    { label: "Role", value: ["Product design", "User research"] },
    {
      label: "Teamwork made it possible",
      value: [
        "Joe Gebbia, Yat Choi, Dennis Li, Gabe Valdivia, Marimar Cabrero, the entire OPM leadership team and several team members across the OPM team.",
      ],
    },
  ],
  hero: {
    kind: "logo-over-photo",
    photo: hero,
    logo: heroSeal,
    logoAlt: "Seal of the U.S. Office of Personnel Management",
    dim: 0.5,
  },
  blocks: [
    {
      type: "text",
      heading: "What is OPM?",
      paragraphs: [
        "The Office of Personnel Management is the HR agency for the federal government. Its Retirement Services team handles retirement for 2.3 million federal employees, and for decades much of that work ran on paper, filed underground in a mine in Boyers, Pennsylvania.",
      ],
    },
    {
      type: "text",
      heading: "The task",
      paragraphs: [
        "Retiring from the federal government could take more than six months on paper, and three past attempts to fix it had failed. I joined a small team to take it digital, designing the retirement application and the tools specialists use to review cases.",
        "Our challenge: could someone retire in six seconds?",
      ],
    },
    {
      type: "text",
      heading: "Why it’s hard",
      paragraphs: [
        "Every federal retiree is paid a pension every month for life, calculated from decades of retirement law and their exact service history. But that history was scattered across payroll, insurance and personnel systems that didn’t talk to each other, with older records still on paper in a mine in Pennsylvania. The rules weren’t written down in one place either. They lived in old tools and in the heads of a few experienced specialists. There was no simple way to calculate a pension. To pull this off, we first had to bring the right people, knowledge and data together in one place.",
      ],
    },
    {
      type: "media",
      layout: "one-big-two-small",
      images: [
        { src: mapping1, alt: "Paper retirement case files spread across a conference table" },
        { src: mapping2, alt: "A whiteboard covered in sticky notes mapping the retirement process" },
        { src: mapping3, alt: "A whiteboard sketch of the retirement system" },
      ],
      lead: "Untangling the system.",
      caption: [
        "Retirement touches dozens of departments, each with its own complicated workflows, we mapped where every piece of information came from and where it went. We broke down what an application consists of and the end-to-end process of retiring.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: retirementMap, alt: "A large flow diagram of every step in a retirement application" }],
      lead: "Mapping the flow.",
      caption: [
        "We traced every retirement path, from early voluntary to death in service, through each step of the application. We learned the rules, found where pulling a retirement package together got tedious, and saw how information bounced between systems. Once we understood the full picture, we knew where to simplify and where to add a human touch.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: retirementFlow, alt: "The new retirement application on desktop and the confirmation screen on a phone" }],
      lead: "The retirement application.",
      caption: [
        "Behind every application is someone who has planned this moment for decades, so we didn’t just put the paper form online. We pulled answers from existing government systems wherever we could, explained each choice in plain language and showed a live estimate of their pension along the way. We wanted retirees to finish feeling cared for, not processed.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: permutations, alt: "Dozens of screens mapping every version of the application" }],
      lead: "Designing for every version of the application.",
      caption: [
        "No two retirements look the same. Military service, a disability claim, a surviving spouse: each one changes which questions apply and what comes next. We mapped every permutation of the form and learned what each question really meant, so the new experience could fully replace the old process, not just sit beside it.",
      ],
    },
    {
      type: "media",
      layout: "pair",
      images: [
        { src: team1, alt: "The team working alongside OPM specialists in their office" },
        { src: team2, alt: "The team outside the Iron Mountain records facility" },
      ],
      lead: "Working with the team.",
      caption: [
        "After an application is completed it needs to be reviewed, we sat beside the team and learned to review a retirement case ourselves, step by step. Watching them work showed us where the hours really went: retyping data, hunting through files and checking documents against each other.",
      ],
    },
    {
      type: "media",
      layout: "single",
      images: [{ src: caseReview, alt: "The rebuilt case review tool showing a summary and documents side by side" }],
      lead: "Rebuilding their review tool.",
      caption: [
        "With that understanding, we rebuilt the internal tool adjudicators use to review and process every retirement case. Some fixes brought in automation and AI-assisted review. Others were simple, like a side-by-side view for comparing documents.",
      ],
    },
    {
      type: "media",
      layout: "single",
      aspect: "880 / 560",
      images: [{ src: sixMonths, alt: "A teammate celebrating at their desk the moment a case was calculated instantly" }],
      lead: "From six months to instant.",
      caption: [
        "With the application and review tool rebuilt, we asked whether some retirements could skip the wait entirely. The photo above captures the moment our system calculated a retirement case instantly and matched an experienced reviewer’s result. Today thousands of routine cases are decided automatically instead of taking six months or more, freeing adjudicators for the complex cases that truly need a person.",
      ],
    },
    {
      type: "media",
      layout: "browser",
      background: "#3c5276",
      browserUrl: "retire.opm.gov/portal",
      images: [
        { src: portal, alt: "The retire.opm.gov portal home page" },
        { src: tweet, alt: "OPM’s post announcing the last day of paper retirement processing" },
      ],
      lead: "Where we landed.",
      caption: [
        "Federal retirement ran on paper for decades. Now it’s digital from start to finish. Within two months of launching retire.opm.gov, nearly every agency had switched over and OPM stopped accepting paper applications. Retirees get a guided application filled in from records the government already has, adjudicators have a tool built around how they actually work, and thousands of routine cases are decided instantly.",
        "The biggest lesson for me: real change comes from working side by side with the people you design for, learning the content as deeply as they do, and building relationships strong enough to earn their trust. I played a small part in a big team effort, and I’m grateful I got the chance to help change something that matters to millions of people.",
      ],
    },
  ],
};

export default opm;
