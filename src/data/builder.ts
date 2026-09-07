import troveCover from "../assets/projects/trove.png";

export type BuilderGoal = {
  text: string;
  completed: boolean;
  href?: string;
  subtasks?: {
    text: string;
    completed: boolean;
    href?: string;
  }[];
};

export type BuilderProduct = {
  name: string;
  href: string;
  icon: {
    src: string;
    alt: string;
  };
  media:
    | {
        type: "image";
        src: string;
        alt: string;
      }
    | {
        type: "video";
        src: string;
        poster?: string;
      };
};

export const builderProducts: BuilderProduct[] = [
  {
    name: "Trove",
    href: "https://trove.fascolabs.com/",
    icon: {
      src: "https://trove.fascolabs.com/assets/favicon.svg",
      alt: "Trove logo",
    },
    media: {
      type: "image",
      src: troveCover.src,
      alt: "Trove travel organiser preview.",
    },
  },
];

export type GoalsYear = {
  year: string;
  goals: BuilderGoal[];
};

export const goalsByYear: Record<string, GoalsYear> = {
  "2027": {
    year: "2027",
    goals: [
      { text: "Reach 1K followers on X", completed: false, href: "https://x.com/abhijeet_gautam" },
      { text: "Reach $1K / month revenue", completed: false },
    ],
  },
  "2026": {
    year: "2026",
    goals: [
      {
        text: "Launch at least 2 products",
        completed: false,
        subtasks: [
          { text: "trove.fascolabs.com", completed: true, href: "https://trove.fascolabs.com/" }
        ],
      }
    ],
  },
};

export const goalYears = Object.values(goalsByYear).sort(
  (a, b) => Number(b.year) - Number(a.year),
);
