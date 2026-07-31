export const siteConfig = {
  name: "Meridian Advisory",
  legalName: "Meridian Advisory Demo",
  tagline: "Clarity for complex business decisions",
  description:
    "Portfolio concept site for Meridian Advisory, a fictional boutique consulting brand. It demonstrates how a mid-market firm might present strategy, process, analytics, and digital transformation services.",
  url: "https://meridian-advisory.example.com",
  locale: "en_US",
  portfolioDisclosure:
    "This website is a self-initiated portfolio concept. Meridian Advisory is a fictional brand created for demonstration purposes. All people, clients, case studies, and outcomes shown here are fictional demo content.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    emailLabel: "hello@meridian-advisory.example",
    locationLabel: "Remote-first · Americas & Europe",
    hoursLabel: "Mon–Fri, 9:00–18:00 (local)",
  },
} as const;

export const serviceInterestOptions = [
  { value: "strategy", label: "Business strategy" },
  { value: "process", label: "Process optimization" },
  { value: "analytics", label: "Data and analytics" },
  { value: "digital", label: "Digital transformation" },
  { value: "other", label: "Not sure yet / other" },
] as const;

export const budgetOptions = [
  { value: "under-25k", label: "Under $25,000" },
  { value: "25k-75k", label: "$25,000 – $75,000" },
  { value: "75k-150k", label: "$75,000 – $150,000" },
  { value: "150k-plus", label: "$150,000+" },
  { value: "explore", label: "Still exploring" },
] as const;
