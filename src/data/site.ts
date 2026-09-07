import type { ImageMetadata } from "astro";

export const site = {
  name: "Abhijeet Gautam",
  shortName: "Abhijeet",
  title: "Abhijeet Gautam — Backend & DevTools Engineer",
  description:
    "Backend and devtools engineer who likes building systems from scratch and understanding how they work at their core. I work primarily with TypeScript and Rust, and am open to remote engineering opportunities.",
  url: "https://abhijeetgautam.in",
  email: "abhijeetgautam572@gmail.com",
  role: "Backend & DevTools Engineer",
  availability: "Open to remote engineering opportunities",
  hero: {
    title:
      "I build reliable systems and developer tools from first principles.",
    description:
      "I’m a backend and devtools engineer who enjoys building systems from scratch. I mostly work in TypeScript and Rust, and like understanding how things work at their core.",
  },
  nav: [
    { label: "Home", href: "/engineer/home" },
    { label: "Projects", href: "/engineer/projects" },
    { label: "Experience", href: "/engineer/experience" },
    { label: "Blog", href: "/engineer/blog" },
  ],
} as const;

export const socials = [
  { label: "Resume", href: "/engineer/resume", icon: "resume" },
  { label: "Mail", href: `mailto:${site.email}`, icon: "mail" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abhijeet-gautam-a413b1211",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/Abhijeet-Gautam5702",
    icon: "github",
  },
] as const;

export const technologies = [
  "Rust",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "DynamoDB",
  "Redpanda",
  "DuckDB",
  "React Native",
] as const;

export type Project = {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  languages: { name: string; color: string }[];
  repository: string;
  liveUrl?: string;
  stars: number;
  featured: boolean;
  mark: string;
  image?: {
    src: ImageMetadata;
    alt: string;
  };
  status?: "WIP";
};

export const projects: Project[] = [
  {
    name: "Femto",
    slug: "femto",
    description:
      "A terminal-native text editor in Rust with familiar controls, built for focused daily use.",
    longDescription:
      "An actively developed terminal editor with two clear modes and built-in save, copy, cut, paste, undo, search, selection, and unsaved-change protection.",
    languages: [{ name: "Rust", color: "#d97757" }],
    repository: "https://github.com/Abhijeet-Gautam5702/femto",
    stars: 0,
    featured: true,
    mark: "fe",
    status: "WIP",
  },
  {
    name: "Wish",
    slug: "wish",
    description:
      "A small Unix-like shell in Rust, built to learn how real shells work.",
    longDescription:
      "An educational systems project covering processes, pipelines, input/output redirection, interactive line editing, command history, built-ins, and exit status handling.",
    languages: [{ name: "Rust", color: "#d97757" }],
    repository: "https://github.com/Abhijeet-Gautam5702/wish",
    stars: 0,
    featured: true,
    mark: "sh",
  },
  {
    name: "forg",
    slug: "forg",
    description:
      "A focused file-organiser CLI that sorts files into predictable folders by extension.",
    longDescription:
      "Built in Rust to explore filesystem semantics, safe file operations, and the ergonomics of small command-line tools.",
    languages: [{ name: "Rust", color: "#d97757" }],
    repository: "https://github.com/Abhijeet-Gautam5702/forg",
    stars: 0,
    featured: true,
    mark: "fg",
  },
];

export type Experience = {
  company: string;
  slug: string;
  companyType: string;
  role: string;
  period: string;
  description: string;
  location: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: "ZFunds Distribution Pvt. Ltd.",
    slug: "zfunds",
    companyType: "FinTech",
    role: "Full Stack Engineer",
    period: "Mar 2025 — Apr 2026",
    description:
      "Developed robust backend APIs and shipped financial-product features end to end.",
    location: "Gurugram, India",
    points: [
      "Built a real-time data synchronization pipeline from DynamoDB Streams through Redpanda to PostgreSQL, reducing cross-database inconsistencies and manual reconciliation.",
      "Shipped a UPI Autopay SIP booking flow across React Native and backend integrations, contributing to a 35% increase in monthly sales.",
      "Created an in-house commission payout system with DuckDB and a custom rule engine, replacing a three-to-five-day manual workflow.",
      "Developed an AI-powered portfolio assistant using retrieval-augmented generation, prompt engineering, and token-compression strategies.",
      "Built a scalable fixed-deposit booking system for investments across multiple banks and NBFCs.",
    ],
  },
];

export const contributions = [
  {
    id: 1,
    repo: "requestly",
    title: "fix: updated interceptor logic for Safari",
    status: "merged",
    date: "Oct 12",
  },
  {
    id: 2,
    repo: "flexprice",
    title: "feat: add support for tiered pricing",
    status: "open",
    date: "Oct 5",
  },
  {
    id: 3,
    repo: "cal.com",
    title: "refactor: simplify invite user flow",
    status: "merged",
    date: "Sep 28",
  },
  {
    id: 4,
    repo: "supabase",
    title: "docs: clarify self-hosting steps",
    status: "merged",
    date: "Sep 15",
  },
] as const;
