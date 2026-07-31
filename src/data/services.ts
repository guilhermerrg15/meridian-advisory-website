import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "strategy",
    slug: "business-strategy",
    title: "Business strategy",
    shortDescription:
      "Translate market pressure into focused priorities, clear trade-offs, and executable plans.",
    problem:
      "Leadership teams often juggle competing initiatives without a shared definition of success. Strategy becomes a slide deck instead of a decision system, and execution stalls when priorities collide.",
    approach:
      "We facilitate structured working sessions with executives and functional leaders, pressure-test assumptions against market and customer evidence, and convert ambition into a sequenced roadmap with owners, metrics, and decision rules.",
    deliverables: [
      "Strategic narrative and priority map",
      "Initiative portfolio with sequencing logic",
      "Decision criteria and governance cadence",
      "90-day execution plan with ownership",
    ],
    benefits: [
      "Fewer competing priorities and clearer trade-offs",
      "Shared language for investment decisions",
      "Faster alignment between leadership and delivery teams",
      "A practical plan that can survive operational reality",
    ],
    icon: "strategy",
  },
  {
    id: "process",
    slug: "process-optimization",
    title: "Process optimization",
    shortDescription:
      "Remove friction from core workflows so teams deliver consistently without burning out.",
    problem:
      "Growth often adds handoffs, exceptions, and invisible work. Cycle times stretch, quality varies by team, and managers spend more energy firefighting than improving the system.",
    approach:
      "We map end-to-end workflows with the people who run them, isolate bottlenecks and rework loops, and redesign the operating rhythm—roles, checkpoints, and tooling—so the process is simpler to follow and easier to measure.",
    deliverables: [
      "Current-state and future-state process maps",
      "Bottleneck and rework analysis",
      "Standard operating playbooks",
      "KPI definitions and review cadence",
    ],
    benefits: [
      "Shorter cycle times on priority workflows",
      "More consistent quality across teams",
      "Less managerial firefighting",
      "Clearer accountability without adding bureaucracy",
    ],
    icon: "process",
  },
  {
    id: "analytics",
    slug: "data-and-analytics",
    title: "Data and analytics",
    shortDescription:
      "Turn fragmented reporting into decision-ready insight your leaders can trust.",
    problem:
      "Teams pull numbers from different systems, debate whose report is correct, and still struggle to answer basic questions about performance, customers, or capacity.",
    approach:
      "We clarify the decisions analytics must support, define trusted metrics, and design a lean reporting architecture—from source hygiene to dashboards and decision rituals—so insight shows up where work happens.",
    deliverables: [
      "Metric dictionary and decision map",
      "Reporting architecture recommendations",
      "Priority dashboard prototypes",
      "Operating cadence for insight reviews",
    ],
    benefits: [
      "One shared definition of key metrics",
      "Faster answers to recurring business questions",
      "Less manual spreadsheet reconciliation",
      "Better linkage between insight and action",
    ],
    icon: "analytics",
  },
  {
    id: "digital",
    slug: "digital-transformation",
    title: "Digital transformation",
    shortDescription:
      "Modernize tools and ways of working without disrupting the business mid-flight.",
    problem:
      "Technology projects often start with a platform choice instead of a business need. Adoption stalls, legacy processes remain, and teams inherit complexity without clear value.",
    approach:
      "We start from the operating model and customer journey, identify where digital capability removes friction, and sequence change into manageable releases with change management, training, and measurable adoption goals.",
    deliverables: [
      "Capability roadmap tied to business outcomes",
      "Vendor and build/buy evaluation criteria",
      "Release plan with change-management support",
      "Adoption and value-tracking framework",
    ],
    benefits: [
      "Technology investments tied to real workflows",
      "Reduced delivery risk through staged releases",
      "Higher adoption through role-based enablement",
      "Clearer visibility into whether change is working",
    ],
    icon: "digital",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
