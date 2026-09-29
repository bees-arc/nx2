export interface Project {
  slug: string;
  name: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  tagline: string;
  description: string;
  challenge: string;
  goal: string;
  approach: string;
  designDirection: {
    typography: string;
    colours: string;
    layout: string;
    visualLanguage: string;
    interaction: string;
  };
  development: string;
  outcome: string[];
  tags: string[];
  featured: boolean;
  isLive: boolean;
  accentColor: string;
  bgColor: string;
}

export const projects: Project[] = [
  {
    slug: "meridian-law",
    name: "Meridian Law",
    client: "Meridian Legal Partners",
    industry: "Professional Services",
    year: "2025",
    services: ["Website Design", "Website Development", "UI/UX Design"],
    tagline: "Turning legal expertise into digital authority.",
    description:
      "A full redesign for a mid-sized law firm that needed to communicate credibility and attract high-value clients online.",
    challenge:
      "Meridian's existing site looked like it was built a decade ago — generic stock photos, dense unreadable text blocks, and zero conversion. Potential clients were landing on the site and leaving within seconds. The firm had a strong reputation offline but was invisible online.",
    goal:
      "Rebuild the digital presence from the ground up: establish trust on first impression, make services instantly understandable, and give visitors a clear path to get in touch.",
    approach:
      "We restructured the information architecture around how clients think — not how lawyers think. Practise areas became benefit-led, the team section was made central (trust comes from people), and every page was built around a single clear CTA.",
    designDirection: {
      typography:
        "Sharp serif headlines paired with clean Poppins body text — signalling both tradition and modernity.",
      colours:
        "Deep navy and warm off-white with gold accents. Professional without being cold.",
      layout:
        "Editorial grid with generous whitespace. Sections breathe. Content is never crowded.",
      visualLanguage:
        "Minimal photography, strong typographic hierarchy, subtle geometric accents.",
      interaction:
        "Smooth scroll transitions, hover states on team cards, sticky CTA on mobile.",
    },
    development:
      "Built on Next.js with static generation for blazing load times. Contact form integrated with email automation. Analytics tracking configured from day one.",
    outcome: [
      "Clearer practice area navigation — visitors find what they need faster",
      "Stronger brand presentation that matches the firm's offline reputation",
      "Improved mobile experience for clients researching on the go",
      "Simplified contact journey with a single prominent CTA",
    ],
    tags: ["Business", "Corporate"],
    featured: true,
    isLive: true,
    accentColor: "#1E3A5F",
    bgColor: "#F5F3EE",
  },
  {
    slug: "forgehaus-construction",
    name: "ForgeHaus",
    client: "ForgeHaus Construction",
    industry: "Construction & Trades",
    year: "2025",
    services: ["Website Design", "Website Development"],
    tagline: "Built tough. Presented beautifully.",
    description:
      "Brand-new website for a high-end residential construction company looking to attract premium clients.",
    challenge:
      "ForgeHaus was doing exceptional work but had no website — only word of mouth. Their competitors had templated sites that all looked the same. They needed something that reflected the quality of their builds.",
    goal:
      "Create a website that positions ForgeHaus in the premium tier of the market, showcasing past projects and making it easy for potential clients to start a conversation.",
    approach:
      "We led with the work. A full-bleed project gallery was the centrepiece, with the company story and process woven around it. The contact flow was simplified to a single, non-intimidating brief form.",
    designDirection: {
      typography:
        "Heavy display type for impact. Clean, readable body copy for detail.",
      colours:
        "Charcoal, raw concrete grey, and a warm amber accent — materials of the craft.",
      layout:
        "Asymmetric grid with oversized project images. Negative space used deliberately.",
      visualLanguage:
        "Raw, textural — referencing the physicality of construction without being industrial.",
      interaction: "Parallax image reveals on scroll. Hover zoom on project cards.",
    },
    development:
      "Next.js with image optimisation for the heavy project photography. Mobile-first responsive build. Google Analytics 4 configured.",
    outcome: [
      "Stronger brand presentation in a competitive market",
      "Clear project showcase that builds immediate trust",
      "Improved mobile experience for clients browsing on site visits",
      "Streamlined enquiry process replacing scattered social DMs",
    ],
    tags: ["Business"],
    featured: true,
    isLive: false,
    accentColor: "#78532A",
    bgColor: "#F2EDE8",
  },
  {
    slug: "solano-restaurant",
    name: "Solano",
    client: "Solano Restaurant Group",
    industry: "Restaurants & Hospitality",
    year: "2026",
    services: ["Website Design", "UI/UX Design", "Website Development"],
    tagline: "An experience before the first bite.",
    description:
      "A premium website for a contemporary restaurant — designed to evoke atmosphere and make booking frictionless.",
    challenge:
      "Solano's old site was a PDF menu embedded in a template. It said nothing about the experience of dining there. Reservations were handled over the phone, resulting in missed bookings and management overhead.",
    goal:
      "Build a site that communicates atmosphere and quality at first glance, while integrating online reservations seamlessly.",
    approach:
      "We designed around the sensory experience of the restaurant — warm lighting palette, editorial food photography layout, and a reservation flow that felt as refined as the dining room itself.",
    designDirection: {
      typography:
        "Elegant editorial serif for headings, minimal sans for navigation and details.",
      colours:
        "Deep terracotta, warm cream, and dark olive — the palette of the cuisine and space.",
      layout:
        "Cinematic full-bleed hero, editorial menu presentation, full-screen section transitions.",
      visualLanguage:
        "Atmospheric and immersive. The site feels like stepping inside.",
      interaction:
        "Smooth page transitions, animated menu reveals, mobile-optimised reservation widget.",
    },
    development:
      "Next.js with third-party reservation system integration. Optimised image delivery for the photography-heavy layout. Structured data for SEO.",
    outcome: [
      "Clearer menu and experience communication reducing pre-visit questions",
      "Stronger atmosphere presentation converting browsers into bookings",
      "Simplified reservation journey replacing all phone bookings",
      "Improved mobile experience for guests researching on the go",
    ],
    tags: ["Business", "UI/UX"],
    featured: true,
    isLive: false,
    accentColor: "#8B4513",
    bgColor: "#FAF5ED",
  },
  {
    slug: "stacklayer-saas",
    name: "StackLayer",
    client: "StackLayer Inc.",
    industry: "SaaS / Startup",
    year: "2026",
    services: ["UI/UX Design", "Website Design"],
    tagline: "Product-led clarity for a developer tool.",
    description:
      "UI/UX redesign of a developer productivity SaaS — from a confusing interface to a clear, fast onboarding flow.",
    challenge:
      "StackLayer had strong functionality but a steep learning curve. Trial users churned before experiencing the value. The interface was built by engineers, not designers — functional but not intuitive.",
    goal:
      "Redesign the onboarding flow and core dashboard to reduce time-to-value for new users, and create a marketing website that clearly communicates the product's benefits.",
    approach:
      "We conducted UX research, mapped the existing user journey to identify friction points, then redesigned from first principles — starting with the user's goal, not the product's features.",
    designDirection: {
      typography:
        "System-adjacent typeface for the product UI. Editorial type for the marketing site.",
      colours:
        "Deep blue-black with electric blue accents and semantic colour coding for states.",
      layout:
        "Structured information hierarchy. Dense but scannable. Data-forward layout patterns.",
      visualLanguage: "Clean, technical precision. Trust through consistency.",
      interaction:
        "Micro-interactions on every interactive element. Animated state transitions.",
    },
    development:
      "Design system delivered in Figma with a full component library. Marketing site in Next.js. Developer handoff documentation included.",
    outcome: [
      "Clearer onboarding journey reducing new user confusion",
      "Stronger product presentation on marketing site",
      "Improved mobile experience for the marketing pages",
      "Simplified customer journey from trial to first value moment",
    ],
    tags: ["UI/UX", "Corporate"],
    featured: false,
    isLive: false,
    accentColor: "#2563EB",
    bgColor: "#EEF2FF",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
