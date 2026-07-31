import type {
  Benefit,
  FaqItem,
  Industry,
  ProcessStep,
  Stat,
  TeamMember,
  TimelineEvent,
  Value,
} from "@/types";

export const stats: Stat[] = [
  {
    id: "engagements",
    value: "4",
    label: "Practice areas",
    description:
      "Strategy, process, analytics, and digital—shown as demo offerings.",
  },
  {
    id: "industries",
    value: "6",
    label: "Demo industries featured",
    description: "Sectors used across fictional demonstration scenarios.",
  },
  {
    id: "cases",
    value: "4",
    label: "Fictional case studies",
    description:
      "Demonstration scenarios only—not verified client results.",
  },
  {
    id: "workshops",
    value: "4–6",
    label: "Weeks to first roadmap",
    description:
      "Typical planning window described for mid-market demo engagements.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    description:
      "We interview stakeholders, review existing data, and map the decisions that matter most right now.",
  },
  {
    step: 2,
    title: "Diagnose",
    description:
      "We isolate the constraints that slow progress—unclear priorities, broken handoffs, or untrusted metrics.",
  },
  {
    step: 3,
    title: "Design",
    description:
      "We co-create a practical roadmap with owners, sequencing, and success measures your team can run.",
  },
  {
    step: 4,
    title: "Deliver",
    description:
      "We support implementation through working sessions, playbooks, and decision cadences—not slide-only handoffs.",
  },
  {
    step: 5,
    title: "Embed",
    description:
      "We transfer ownership, refine the operating rhythm, and leave teams with tools they can sustain.",
  },
];

export const industries: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Plant reliability, portfolio focus, and cross-site alignment.",
  },
  {
    id: "healthcare",
    name: "Healthcare services",
    description: "Intake, care coordination, and operational clarity.",
  },
  {
    id: "retail",
    name: "Retail & consumer",
    description: "Regional performance, inventory signals, and campaign learning.",
  },
  {
    id: "professional",
    name: "Professional services",
    description: "Utilization, delivery quality, and scalable operating models.",
  },
  {
    id: "technology",
    name: "Technology & SaaS",
    description: "Go-to-market focus, product ops, and decision dashboards.",
  },
  {
    id: "finance",
    name: "Financial services",
    description: "Process control, reporting integrity, and change readiness.",
  },
];

export const benefits: Benefit[] = [
  {
    id: "practical",
    title: "Practical over theatrical",
    description:
      "We optimize for decisions your team can make next week, not decks that impress once and gather dust.",
  },
  {
    id: "co-created",
    title: "Co-created with operators",
    description:
      "Frontline and functional leaders shape the recommendations so adoption is built in from the start.",
  },
  {
    id: "measurable",
    title: "Measured by operating rhythm",
    description:
      "Every engagement includes clear metrics and a review cadence so progress stays visible after we leave.",
  },
  {
    id: "right-sized",
    title: "Right-sized for mid-market",
    description:
      "We design for organizations that need senior attention without enterprise consulting overhead.",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Who is Meridian Advisory built for?",
    answer:
      "Mid-market leadership teams that need clearer priorities, cleaner processes, trusted metrics, or a practical digital roadmap. Typical clients in our demo scenarios include manufacturers, healthcare networks, retailers, and professional services firms.",
  },
  {
    id: "faq-2",
    question: "How long does a typical engagement last?",
    answer:
      "Discovery and roadmap work often runs four to six weeks. Implementation support can extend across a quarter or longer, depending on scope. We propose a phased plan before work begins.",
  },
  {
    id: "faq-3",
    question: "Do you guarantee financial results?",
    answer:
      "No. We help teams improve decision quality, process clarity, and operating discipline. Outcomes depend on leadership follow-through, market conditions, and internal capacity. We do not promise guaranteed financial results.",
  },
  {
    id: "faq-4",
    question: "How do you work with existing consultants or internal teams?",
    answer:
      "We complement, not replace. Many engagements involve partnering with your PMO, finance, operations, or IT leaders so recommendations fit the systems and culture you already have.",
  },
  {
    id: "faq-5",
    question: "Is this a real consulting firm?",
    answer:
      "No. Meridian Advisory is a fictional brand created as a self-initiated portfolio concept. All people, clients, and case studies on this site are demonstration content.",
  },
];

export const values: Value[] = [
  {
    id: "clarity",
    title: "Clarity before complexity",
    description:
      "We make the hard trade-offs visible so teams can choose with confidence.",
  },
  {
    id: "respect",
    title: "Respect for operators",
    description:
      "People closest to the work hold essential knowledge. We design with them, not around them.",
  },
  {
    id: "evidence",
    title: "Evidence over opinion theater",
    description:
      "Recommendations are grounded in interviews, process evidence, and decision needs—not buzzwords.",
  },
  {
    id: "stewardship",
    title: "Stewardship of attention",
    description:
      "Leadership time is scarce. We protect it with focused agendas and decisive artifacts.",
  },
];

export const principles: Value[] = [
  {
    id: "start-decisions",
    title: "Start from decisions",
    description:
      "If a deliverable does not change how a decision is made, it is optional.",
  },
  {
    id: "sequence",
    title: "Sequence ruthlessly",
    description:
      "Doing fewer things in the right order beats parallel overload.",
  },
  {
    id: "leave-systems",
    title: "Leave systems, not dependency",
    description:
      "Playbooks, cadences, and metric definitions should outlast the engagement.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    role: "Managing Partner, Strategy",
    bio: "Leads executive facilitation and initiative portfolio design for mid-market leadership teams.",
    focus: ["Strategy", "Governance", "Facilitation"],
  },
  {
    id: "jordan-lee",
    name: "Jordan Lee",
    role: "Principal, Operations",
    bio: "Specializes in process redesign, handoff clarity, and KPI rhythms for service and industrial teams.",
    focus: ["Process", "Operating models", "KPIs"],
  },
  {
    id: "samira-khan",
    name: "Samira Khan",
    role: "Principal, Analytics",
    bio: "Builds metric frameworks and decision dashboards that reduce reporting noise.",
    focus: ["Metrics", "Dashboards", "Data quality"],
  },
  {
    id: "morgan-blake",
    name: "Morgan Blake",
    role: "Principal, Digital Change",
    bio: "Connects technology roadmaps to adoption plans and staged release design.",
    focus: ["Digital", "Change management", "Roadmaps"],
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2018",
    title: "Concept founding (demo)",
    description:
      "Fictional founding story: Meridian Advisory begins as a boutique practice focused on mid-market decision clarity.",
  },
  {
    year: "2020",
    title: "Operations practice expands",
    description:
      "Demo milestone: process optimization offerings grow to support multi-site and multi-clinic clients.",
  },
  {
    year: "2022",
    title: "Analytics studio launched",
    description:
      "Demo milestone: metric design and decision dashboard work becomes a dedicated practice area.",
  },
  {
    year: "2024",
    title: "Digital change integrated",
    description:
      "Demo milestone: digital transformation work is integrated with strategy and operations engagements.",
  },
  {
    year: "2026",
    title: "Portfolio website concept",
    description:
      "This website is published as a self-initiated portfolio demonstration of a consulting brand experience.",
  },
];

export const companyStory = {
  headline: "A boutique practice built for decision clarity",
  paragraphs: [
    "Meridian Advisory was created as a fictional boutique consulting brand for this portfolio project. In the demonstration narrative, the firm helps mid-market leaders cut through initiative overload, repair broken workflows, and build analytics and digital plans their teams can actually run.",
    "The working model emphasizes senior attention, co-creation with operators, and artifacts that survive the engagement: priority maps, playbooks, metric dictionaries, and decision cadences.",
    "All people, clients, and outcomes on this site are fictional demonstration content. They are not real employees, clients, or verified results.",
  ],
  mission:
    "Help leadership teams make clearer decisions, run cleaner operations, and adopt change without losing the plot.",
};
