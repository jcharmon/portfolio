// The six main projects shown on the home page, in order.
// "ready: true" means the case study page exists and the tile is clickable.
export type ProjectSlug = "opm" | "thrive" | "google-fi" | "bobbie" | "nextnav" | "radpad";

export interface Project {
  slug: ProjectSlug;
  title: string;
  mobileTitle?: string;
  summary: string;
  ready: boolean;
}

export const projects: Project[] = [
  {
    slug: "opm",
    title: "OPM Retirements",
    summary: "Modernizing how America’s federal workforce retires.",
    ready: true,
  },
  {
    slug: "thrive",
    title: "Thrive Mobile",
    summary: "Helping lead design for a wireless carrier built around health.",
    ready: false,
  },
  {
    slug: "google-fi",
    title: "Google Fi",
    summary: "Led design for Google Fi’s launch on iPhone and every Android device.",
    ready: false,
  },
  {
    slug: "bobbie",
    title: "Bobbie",
    summary: "Built a self-serve portal for busy parents and emails that drove $3.6M in year one.",
    ready: false,
  },
  {
    slug: "nextnav",
    title: "NextNav",
    summary: "Shipped the iOS and tablet apps that helped NextNav raise a $120M Series E.",
    ready: false,
  },
  {
    slug: "radpad",
    title: "RadPad",
    summary: "Took leases and move-in payments fully online for renters and landlords.",
    ready: false,
  },
];
