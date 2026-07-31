import type { CaseStudy, CaseStudyCategory } from "@/types";

export const caseStudyCategories: {
  id: CaseStudyCategory;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "strategy", label: "Strategy" },
  { id: "operations", label: "Operations" },
  { id: "analytics", label: "Analytics" },
  { id: "digital", label: "Digital" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-northline",
    slug: "northline-manufacturing-priority-reset",
    title: "Priority reset for a multi-plant manufacturer",
    industry: "Manufacturing",
    category: "strategy",
    summary:
      "Helped a fictional mid-market manufacturer align plant leadership around a focused growth and reliability agenda.",
    context:
      "Northline Components (fictional) operated three plants with overlapping product lines and a growing backlog of improvement projects. Leadership wanted to expand into adjacent markets while stabilizing on-time delivery.",
    challenge:
      "Each plant pursued local priorities. Capital requests competed without shared criteria, and the executive team lacked a single view of which initiatives would protect service levels while enabling growth.",
    approach:
      "We facilitated cross-plant strategy workshops, built a transparent initiative scoring model, and created a quarterly governance rhythm so investment decisions could be revisited with fresh operational data.",
    deliverables: [
      "Shared strategic narrative for growth and reliability",
      "Scored initiative portfolio with sequencing",
      "Capital decision criteria and review pack",
      "90-day plant-level execution plans",
    ],
    methods: [
      "Executive facilitation",
      "Initiative scoring",
      "Operating cadence design",
      "Stakeholder interviews",
    ],
    outcome:
      "Illustrative demo outcome: leadership adopted a single priority list, reduced active major initiatives, and established a recurring review that made trade-offs visible before capital was committed. No real client results are claimed.",
    fictionalDisclaimer:
      "Fictional demonstration scenario. Northline Components is not a real company.",
  },
  {
    id: "cs-harbor",
    slug: "harbor-health-intake-redesign",
    title: "Intake redesign for a regional care network",
    industry: "Healthcare services",
    category: "operations",
    summary:
      "Redesigned patient intake workflows for a fictional care network to reduce handoffs and improve scheduling clarity.",
    context:
      "Harbor Care Group (fictional) managed intake across clinics with different forms, handoff rules, and scheduling tools. Staff spent significant time clarifying incomplete referrals.",
    challenge:
      "Patients experienced delays between referral and first appointment. Staff rework varied by clinic, and managers could not see where requests stalled.",
    approach:
      "We mapped the end-to-end intake journey with frontline teams, standardized required information by service line, and redesigned the handoff points between referral, triage, and scheduling.",
    deliverables: [
      "Current- and future-state intake maps",
      "Service-line intake standards",
      "Handoff playbook and exception rules",
      "Operational KPI set for intake cycle time",
    ],
    methods: [
      "Process mapping",
      "Time-and-motion sampling",
      "Role clarification workshops",
      "KPI design",
    ],
    outcome:
      "Illustrative demo outcome: the network defined a single intake standard, reduced avoidable clarification loops in the redesigned flow, and gave managers a shared view of stalled cases. No real client results are claimed.",
    fictionalDisclaimer:
      "Fictional demonstration scenario. Harbor Care Group is not a real organization.",
  },
  {
    id: "cs-brightfield",
    slug: "brightfield-retail-decision-dashboards",
    title: "Decision dashboards for a specialty retailer",
    industry: "Retail",
    category: "analytics",
    summary:
      "Built a trusted metric framework and decision dashboards for a fictional specialty retailer’s regional leaders.",
    context:
      "Brightfield Goods (fictional) expanded to new regions and collected sales, inventory, and campaign data in separate systems. Weekly meetings often spent more time reconciling numbers than deciding actions.",
    challenge:
      "Regional managers disagreed on what “good performance” meant. Inventory risk and campaign ROI were reported inconsistently, delaying corrective action.",
    approach:
      "We defined a metric dictionary tied to weekly decisions, selected a lean set of leading and lagging indicators, and prototyped role-based dashboards with a review agenda that turned insight into next actions.",
    deliverables: [
      "Metric dictionary and decision map",
      "Source-of-truth recommendations",
      "Regional dashboard prototypes",
      "Weekly insight-to-action agenda",
    ],
    methods: [
      "Metric design workshops",
      "Data source inventory",
      "Dashboard prototyping",
      "Decision cadence design",
    ],
    outcome:
      "Illustrative demo outcome: leaders shared one definition of priority metrics, shortened debate time in weekly reviews, and used a consistent agenda to assign follow-ups. No real client results are claimed.",
    fictionalDisclaimer:
      "Fictional demonstration scenario. Brightfield Goods is not a real retailer.",
  },
  {
    id: "cs-lumen",
    slug: "lumen-services-platform-rollout",
    title: "Staged platform rollout for a services firm",
    industry: "Professional services",
    category: "digital",
    summary:
      "Designed a staged digital change plan for a fictional professional services firm replacing fragmented delivery tools.",
    context:
      "Lumen Partners (fictional) ran project intake, staffing, and client reporting across disconnected tools. Leadership wanted a shared delivery platform without freezing billable work mid-transition.",
    challenge:
      "A previous tooling project stalled after a big-bang launch attempt. Adoption varied by practice, and teams lacked a clear release sequence tied to daily workflows.",
    approach:
      "We mapped role-based journeys, sequenced releases by workflow criticality, defined build/buy criteria, and paired each release with enablement and adoption measures.",
    deliverables: [
      "Capability roadmap tied to operating outcomes",
      "Build/buy and vendor evaluation criteria",
      "Staged release plan with change support",
      "Adoption and value-tracking framework",
    ],
    methods: [
      "Journey mapping",
      "Release sequencing",
      "Change-management planning",
      "Adoption metric design",
    ],
    outcome:
      "Illustrative demo outcome: the firm adopted a phased rollout with practice-level champions and clearer adoption checkpoints before expanding scope. No real client results are claimed.",
    fictionalDisclaimer:
      "Fictional demonstration scenario. Lumen Partners is not a real firm.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function filterCaseStudies(
  category: CaseStudyCategory,
): CaseStudy[] {
  if (category === "all") return caseStudies;
  return caseStudies.filter((study) => study.category === category);
}
