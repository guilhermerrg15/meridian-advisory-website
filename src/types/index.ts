export type NavItem = {
  label: string;
  href: string;
};

export type ServiceCategory =
  | "strategy"
  | "process"
  | "analytics"
  | "digital";

export type Service = {
  id: ServiceCategory;
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  approach: string;
  deliverables: string[];
  benefits: string[];
  icon: "strategy" | "process" | "analytics" | "digital";
};

export type CaseStudyCategory =
  | "all"
  | "strategy"
  | "operations"
  | "analytics"
  | "digital";

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  category: Exclude<CaseStudyCategory, "all">;
  summary: string;
  context: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  methods: string[];
  outcome: string;
  fictionalDisclaimer: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  focus: string[];
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type Industry = {
  id: string;
  name: string;
  description: string;
};

export type Stat = {
  id: string;
  value: string;
  label: string;
  description: string;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
};

export type Value = {
  id: string;
  title: string;
  description: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  budget: string;
  description: string;
  privacyConsent: boolean;
};
