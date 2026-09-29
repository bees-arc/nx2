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
  mockPalette: {
    primary: string;
    secondary: string;
    surface: string;
    text: string;
  };
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
      "Meridian's existing site looked like it was built a decade ago — generic stock photos, dense unreadable text blocks, and zero conversion. Potential clients were landing on the site and leaving within seconds.",
    goal: "Rebuild the digital presence from the ground up: establish trust on first impression, make services instantly understandable, and give visitors a clear path to get in touch.",
    approach:
      "We restructured the information architecture around how clients think — not how lawyers think. Practise areas became benefit-led, the team section was made central, and every page was built around a single clear CTA.",
    designDirection: {
      typography: "Sharp serif headlines paired with clean sans body text — signalling both tradition and modernity.",
      colours: "Deep navy and warm off-white with gold accents. Professional without being cold.",
      layout: "Editorial grid with generous whitespace. Sections breathe. Content is never crowded.",
      visualLanguage: "Minimal photography, strong typographic hierarchy, subtle geometric accents.",
      interaction: "Smooth scroll transitions, hover states on team cards, sticky CTA on mobile.",
    },
    development:
      "Built on Next.js with static generation for blazing load times. Contact form integrated with email automation. Analytics tracking configured from day one.",
    outcome: [
      "+140% increase in consultation requests within 90 days",
      "Average time on site increased from 42s to 3m 15s",
      "Bounce rate reduced from 68% to 29%",
      "Lighthouse performance score moved from 41 to 96",
    ],
    tags: ["Websites", "UI/UX", "Corporate"],
    featured: true,
    isLive: false,
    accentColor: "#1B3B6F",
    bgColor: "#F4F6F9",
    mockPalette: { primary: "#1B3B6F", secondary: "#D4AF37", surface: "#F4F6F9", text: "#0F1E36" },
  },
  {
    slug: "forgehaus",
    name: "ForgeHaus",
    client: "ForgeHaus Architecture & Interiors",
    industry: "Architecture & Design",
    year: "2024",
    services: ["Website Design", "Website Development", "Brand Identity"],
    tagline: "Spatial design deserves spatial digital thinking.",
    description:
      "A portfolio website for an architectural studio that treats the screen as an extension of their physical spaces.",
    challenge:
      "Architects care obsessively about proportions, materials, and light. Their old website used a generic WordPress template that felt clumsy and flat — completely misaligned with the quality of their physical work.",
    goal: "Build a digital portfolio that feels like stepping into one of their buildings: calm, deliberate, structurally sound, and beautifully proportioned.",
    approach:
      "We designed an asymmetric grid that creates tension and breathing room in equal measure. Photography was treated as hero content throughout. Text was kept minimal and precise.",
    designDirection: {
      typography: "Large architectural sans-serif for numbers and headers; tight, disciplined body copy.",
      colours: "Monochrome foundation with raw ochre and slate accents reflecting concrete and corten steel.",
      layout: "Full-bleed imagery, asymmetrical margins, modular project detail view.",
      visualLanguage: "High-contrast architectural photography, material textures, line-drawn plans.",
      interaction: "Image zoom on hover, project-to-project smooth transitions, custom cursor on gallery.",
    },
    development:
      "Custom Next.js build with dynamic image optimization. Fluid layouts using modern CSS grid. Zero framework bloat.",
    outcome: [
      "Shortlisted for Studio Site of the Year 2024",
      "Client closed three major residential commissions in the first 60 days",
      "Organic reach grew 210% via social shares of the project detail pages",
      "Lighthouse performance: 98/100",
    ],
    tags: ["Websites", "Brand Systems", "Portfolio"],
    featured: true,
    isLive: false,
    accentColor: "#C96A3D",
    bgColor: "#141412",
    mockPalette: { primary: "#C96A3D", secondary: "#E8D8C8", surface: "#141412", text: "#FFFFFF" },
  },
  {
    slug: "solano",
    name: "Solano Resort",
    client: "Solano Hospitality Group",
    industry: "Hospitality & Travel",
    year: "2025",
    services: ["Website Design", "UI/UX Design", "Booking Engine UX"],
    tagline: "Atmospheric luxury that converts curiosity into bookings.",
    description:
      "A high-end boutique resort website combining rich storytelling with a seamless, friction-free booking flow.",
    challenge:
      "Solano was paying 18% commission to OTAs (Booking.com, Expedia) for the vast majority of their reservations. Their own direct booking website was clunky, confusing, and losing guests at checkout.",
    goal: "Drive direct bookings by creating an online experience so compelling that visitors would never think of booking anywhere else.",
    approach:
      "We brought the atmosphere of the resort forward — scent, light, sound, and stillness conveyed through art direction — and embedded a frictionless 3-step booking drawer accessible from every screen.",
    designDirection: {
      typography: "Refined modern serif paired with a humanist sans for dates and rates.",
      colours: "Warm sand, terracotta, olive leaf, and Mediterranean cobalt.",
      layout: "Fluid, editorial scrolling experience with sticky reservation trigger.",
      visualLanguage: "Warm cinematic photography, ambient video loops, sun-washed tones.",
      interaction: "Date-picker with real-time rate preview, suite virtual tour modal.",
    },
    development:
      "Headless architecture connecting Next.js to the hotel's existing PMS reservation API. Sub-second page loads globally via Edge CDN.",
    outcome: [
      "+64% direct booking share within 4 months",
      "Estimated $180k saved annually in OTA commission fees",
      "Mobile conversion rate increased from 1.1% to 3.8%",
      "Average order value per reservation up 22%",
    ],
    tags: ["Websites", "UI/UX", "E-Commerce"],
    featured: true,
    isLive: false,
    accentColor: "#D97706",
    bgColor: "#FAF7F2",
    mockPalette: { primary: "#D97706", secondary: "#2D6A4F", surface: "#FAF7F2", text: "#1C1917" },
  },
  {
    slug: "stacklayer",
    name: "StackLayer",
    client: "StackLayer Systems",
    industry: "SaaS & Developer Tools",
    year: "2024",
    services: ["UI/UX Design", "Website Design", "Design System"],
    tagline: "Making complex infrastructure feel instantly understandable.",
    description:
      "Product marketing site and design system for a cloud infrastructure orchestration platform.",
    challenge:
      "StackLayer built extraordinary technology for Kubernetes multi-cluster management, but their homepage read like a developer manual. Non-technical buyers couldn't understand what it did, and technical buyers couldn't see the value proposition fast enough.",
    goal: "Translate a complex technical capability into a sharp, credible product narrative that speaks to both CTOs and engineering leads.",
    approach:
      "We built interactive visual product walk-throughs — animated architecture diagrams that let visitors see the problem and the solution in under 10 seconds — backed by clear pricing and self-serve onboarding paths.",
    designDirection: {
      typography: "Technical monospace accents paired with an authoritative geometric sans.",
      colours: "Deep terminal black, electric cyan, vibrant purple accent, crisp white type.",
      layout: "Modular bento grids, code snippet showcases, comparison matrices.",
      visualLanguage: "Abstract vector topologies, interactive terminal previews, live status telemetry.",
      interaction: "Interactive architecture diagram builder, copyable CLI installation commands.",
    },
    development:
      "Built with Next.js App Router, Tailwind tokens, Framer Motion for telemetry animations. MDX documentation engine built in.",
    outcome: [
      "+85% increase in developer signups in month one",
      "Documentation bounce rate reduced from 55% to 22%",
      "Series A lead investor cited the website's clarity as a key reason for taking the pitch meeting",
      "Zero customer support tickets regarding onboarding confusion",
    ],
    tags: ["SaaS & Web Apps", "UI/UX", "Websites"],
    featured: true,
    isLive: false,
    accentColor: "#6366F1",
    bgColor: "#090A0F",
    mockPalette: { primary: "#6366F1", secondary: "#06B6D4", surface: "#090A0F", text: "#F8FAFC" },
  },
  {
    slug: "verdura",
    name: "Verdura Wellness",
    client: "Verdura Botanicals Ltd",
    industry: "E-Commerce & Wellness",
    year: "2025",
    services: ["E-Commerce Design", "Shopify Plus Development", "UI/UX Design"],
    tagline: "Organic skincare backed by clinical clarity.",
    description:
      "A high-performing direct-to-consumer store for an organic skincare label transitioning into international retail.",
    challenge:
      "Verdura's boutique skincare brand had a cult following on Instagram, but their WooCommerce store had an alarming 74% cart abandonment rate and took 6.2 seconds to load on mobile.",
    goal: "Migrate to Shopify Plus with a custom headless frontend engineered for under 1.5s load times, clear ingredient transparency, and frictionless 1-click checkout.",
    approach:
      "We designed an ingredient-first product page layout allowing consumers to filter by skin concern, see clinical test results, and subscribe with flexible delivery frequencies.",
    designDirection: {
      typography: "Clean editorial grotesk paired with gentle humanist body fonts.",
      colours: "Sage green, warm stone, oat milk cream, and subtle copper accents.",
      layout: "Sticky purchase drawer, drawer cart with free shipping progress tier, ingredient glossary modal.",
      visualLanguage: "Macro botanical textures, unretouched skin photography, lab-grade certification badges.",
      interaction: "Interactive skin quiz with dynamic bundle recommendation, smooth accordion reviews.",
    },
    development:
      "Headless Shopify with Next.js frontend deployed to Vercel Edge. Instant search using Algolia. Klaviyo automated customer journeys.",
    outcome: [
      "+112% revenue growth in first quarter post-launch",
      "Cart abandonment dropped from 74% to 49%",
      "Mobile page load time improved from 6.2s to 1.1s",
      "+34% increase in subscription recurring revenue (MRR)",
    ],
    tags: ["E-Commerce", "Websites", "UI/UX"],
    featured: true,
    isLive: false,
    accentColor: "#2D6A4F",
    bgColor: "#F5F3EF",
    mockPalette: { primary: "#2D6A4F", secondary: "#B7E4C7", surface: "#F5F3EF", text: "#1B4332" },
  },
  {
    slug: "crestline",
    name: "Crestline Agency",
    client: "Crestline Strategy Partners",
    industry: "Consulting & Strategy",
    year: "2024",
    services: ["Website Design", "Brand Identity", "Interactive Showcase"],
    tagline: "Strategic clarity for hyper-growth enterprises.",
    description:
      "An unapologetic, high-impact digital presence for an executive strategy advisory firm.",
    challenge:
      "Crestline advises Fortune 500 CEOs, but their website looked like a mid-tier recruitment agency. It lacked punch, gravity, and modern digital poise.",
    goal: "Create a bold, typographic, thought-leadership platform that commands immediate authority in boardrooms across North America and Europe.",
    approach:
      "We stripped away all decorative corporate fluff. In its place: confident editorial headlines, proprietary executive framework calculators, and video perspectives from senior partners.",
    designDirection: {
      typography: "Oversized Swiss modern grotesque with extreme contrast between display and metadata.",
      colours: "Pitch black, titanium white, and a single electric crimson accent line.",
      layout: "Magazine-style case study breakdowns, full-screen thesis statements, split-screen partner directory.",
      visualLanguage: "Monochrome executive portraits, abstract data topologies, tactile typography.",
      interaction: "Kinetic typography triggers, smooth chapter navigation, dark-to-light theme inversions.",
    },
    development:
      "Custom Next.js App Router setup with Framer Motion layout springs. Static markdown CMS for partner insights and publications.",
    outcome: [
      "+280% increase in inbound Fortune 500 RFP inquiries",
      "Average executive dwell time on white papers reached 4m 45s",
      "Recognized by Awwwards with Site of the Day award",
      "Lighthouse 100/100 performance across all audited pages",
    ],
    tags: ["Corporate", "Websites", "Brand Systems"],
    featured: true,
    isLive: false,
    accentColor: "#E63946",
    bgColor: "#0A0A0A",
    mockPalette: { primary: "#E63946", secondary: "#FFFFFF", surface: "#0A0A0A", text: "#F1FAEE" },
  },
  {
    slug: "aether-ai",
    name: "Aether AI",
    client: "Aether Intelligence Inc",
    industry: "Artificial Intelligence",
    year: "2025",
    services: ["UI/UX Design", "Website Design", "Interactive Playground"],
    tagline: "Autonomous neural agents engineered for enterprise scale.",
    description:
      "Developer portal, product interface, and interactive sandbox for an autonomous LLM orchestration platform.",
    challenge:
      "Aether had groundbreaking agent architecture but struggled to demonstrate how their system orchestrates complex multi-step reasoning without overwhelming prospective enterprise clients.",
    goal: "Build an interactive, real-time playground on the homepage where CTOs and AI researchers could test agent workflows live in the browser.",
    approach:
      "We engineered a visual canvas that visualizes live agent reasoning chains in real time, accompanied by crisp API documentation and single-click playground deployments.",
    designDirection: {
      typography: "Modern monospaced numerals paired with an ultra-clean geometric neo-grotesk.",
      colours: "Deep obsidian void, electric violet, neon mint, and glowing frosted glass.",
      layout: "Interactive sandbox split-view, node-graph topology visualizations, live latency metrics.",
      visualLanguage: "Dynamic vector connections, ambient particle meshes, glow shaders.",
      interaction: "Node graph zoom and pan, live code execution sandbox, keyboard-shortcut navigation.",
    },
    development:
      "Next.js with WebAssembly for client-side agent logic simulation, WebSockets for live telemetry, WebGL shaders for graph background.",
    outcome: [
      "Over 45,000 playground simulations executed during launch week",
      "Enterprise pipeline grew by $4.2M ARR in 60 days",
      "Developer waitlist reached 18,000 engineers",
      "Perfect score in Core Web Vitals",
    ],
    tags: ["SaaS & Web Apps", "UI/UX", "Websites"],
    featured: true,
    isLive: false,
    accentColor: "#8B5CF6",
    bgColor: "#06070B",
    mockPalette: { primary: "#8B5CF6", secondary: "#10B981", surface: "#06070B", text: "#F3F4F6" },
  },
  {
    slug: "novus-health",
    name: "Novus Health",
    client: "Novus Precision Health",
    industry: "HealthTech & Biotech",
    year: "2025",
    services: ["UI/UX Design", "Patient Portal Design", "Website Design"],
    tagline: "Preventive medicine powered by personal genomic biomarkers.",
    description:
      "A clinical yet deeply human digital health platform connecting patients with genomic insights and personalized longevity plans.",
    challenge:
      "Health data is intimidating. Novus needed to present complex genomic risk scores and biological age indicators without causing patient anxiety or clinical confusion.",
    goal: "Design a web platform and patient dashboard that translates complex multi-omic data into clear, motivating, actionable health steps.",
    approach:
      "We created an intuitive health score radial system with clear tiered guidance, paired with empathetic typography and secure medical portal integrations.",
    designDirection: {
      typography: "Warm humanistic sans-serif engineered for effortless legibility across all age groups.",
      colours: "Crisp clinical white, calming deep azure, bio-cyan, and warm restorative coral.",
      layout: "Card-based biomarker timelines, collapsible medical insight drawers, lifestyle trackers.",
      visualLanguage: "Gentle biological illustrations, soft daylight photography, HIPAA-certified trust badges.",
      interaction: "Biomarker slider comparisons, interactive longevity simulator, 1-click clinical report export.",
    },
    development:
      "HIPAA-compliant Next.js architecture with end-to-end encrypted API proxies, WCAG 2.1 AAA accessibility compliance.",
    outcome: [
      "Patient onboarding completion rate surged to 94%",
      "Received national digital health design award in 2025",
      "Over 80% of patients reported feeling 'empowered rather than anxious' by their report view",
      "99.98% service uptime across tele-health integrations",
    ],
    tags: ["UI/UX", "Websites", "SaaS & Web Apps"],
    featured: true,
    isLive: false,
    accentColor: "#0284C7",
    bgColor: "#F8FAFC",
    mockPalette: { primary: "#0284C7", secondary: "#F43F5E", surface: "#F8FAFC", text: "#0F172A" },
  },
  {
    slug: "kroma-audio",
    name: "Kroma Audio",
    client: "Kroma Acoustic Technologies",
    industry: "Consumer Electronics & Audio",
    year: "2024",
    services: ["E-Commerce Design", "3D Product Experience", "Brand Identity"],
    tagline: "Acoustic perfection rendered in pure physical form.",
    description:
      "An immersive digital flagship and custom configuration engine for audiophile-grade planar magnetic headphones.",
    challenge:
      "How do you sell $2,500 headphones online where the user cannot hear the sound before purchasing? You have to let them 'feel' the acoustic craftsmanship visually.",
    goal: "Build an audiovisual digital flagship that communicates acoustic precision, material warmth, and artisanal engineering through 3D interaction.",
    approach:
      "We built a real-time WebGL product visualizer allowing buyers to customize headband leather, grille metals, and cable finishes while listening to lossless acoustic simulations.",
    designDirection: {
      typography: "Precision Swiss grotesk with industrial micro-metadata accents.",
      colours: "Pure pitch black, anodized champagne gold, smoked charcoal, and brushed beryllium.",
      layout: "Full-bleed 3D viewport with floating minimal control HUD, tactile material selector.",
      visualLanguage: "Exploded engineering diagrams, macro frequency response curves, cinema-grade product rendering.",
      interaction: "360-degree interactive 3D rotation, real-time material swapping, interactive sound spectrum analyzer.",
    },
    development:
      "Three.js + React Three Fiber integration inside Next.js, Web Audio API for frequency response visualization, Shopify headless checkout.",
    outcome: [
      "Initial production batch sold out in under 72 hours",
      "Average time spent on product visualizer exceeded 4.5 minutes",
      "Online return rate was below 1.2% (industry average is 14%)",
      "FWA of the Day winner",
    ],
    tags: ["E-Commerce", "UI/UX", "Brand Systems"],
    featured: true,
    isLive: false,
    accentColor: "#F59E0B",
    bgColor: "#080808",
    mockPalette: { primary: "#F59E0B", secondary: "#D97706", surface: "#080808", text: "#FAFAFA" },
  },
  {
    slug: "vanguard-capital",
    name: "Vanguard Capital",
    client: "Vanguard Partners LLC",
    industry: "Finance & Private Equity",
    year: "2024",
    services: ["Website Design", "Website Development", "Investor Portal"],
    tagline: "Backing defining founders with disciplined conviction.",
    description:
      "A quiet-luxury digital home and private investor portal for a $1.4B technology growth equity fund.",
    challenge:
      "The firm's existing web presence felt old-fashioned and opaque, failing to resonate with modern software founders who value speed, culture, and high-caliber digital execution.",
    goal: "Design a web experience that signals institutional strength, visionary thesis alignment, and founder-friendly empathy.",
    approach:
      "We designed an editorial portfolio showcasing founders' journeys through video narratives, accompanied by an interactive deal thesis calculator and secure LP reporting vault.",
    designDirection: {
      typography: "Distinctive high-contrast Scotch serif headlines with modern refined grotesque captions.",
      colours: "Deep British racing green, brushed brass, ivory paper, and dark slate.",
      layout: "Editorial portfolio directory, partner perspectives grid, private LP login modal.",
      visualLanguage: "Black and white founder portraits, clean investment timeline infographics, understated luxury.",
      interaction: "Subtle page transitions, interactive fund track record filters, frictionless LP document download.",
    },
    development:
      "Next.js SSR for public pages with ironclad Auth0 integration for the LP investor portal. SOC-2 compliant asset delivery.",
    outcome: [
      "Fund IV oversubscribed by $350M ahead of schedule",
      "Founder inbound pipeline doubled in quality and sector fit",
      "LP portal login satisfaction rating: 98%",
      "Lighthouse desktop & mobile scores both 99+",
    ],
    tags: ["Websites", "Corporate", "UI/UX"],
    featured: true,
    isLive: false,
    accentColor: "#15803D",
    bgColor: "#FBFBFA",
    mockPalette: { primary: "#15803D", secondary: "#CA8A04", surface: "#FBFBFA", text: "#141413" },
  },
  {
    slug: "orbit-aerospace",
    name: "Orbit Aerospace",
    client: "Orbit Launch Systems",
    industry: "Aerospace & Defence",
    year: "2025",
    services: ["Website Design", "Interactive Telemetry", "Brand Identity"],
    tagline: "Precision orbital deployment for the next space economy.",
    description:
      "Next-generation launch provider web platform featuring real-time orbital mission telemetry and payload calculators.",
    challenge:
      "Commercial satellite operators need transparent pricing and launch schedule visibility, which the legacy aerospace industry obscures behind slow procurement cycles.",
    goal: "Create a transparent, modern commercial aerospace web interface that allows satellite operators to configure and reserve payload slots in minutes.",
    approach:
      "We built a dynamic 3D orbit altitude simulator that calculates payload capacity, orbit inclination, and projected launch windows with transparent tier pricing.",
    designDirection: {
      typography: "Technical aerospace monospace numbers paired with clean Scandinavian grotesque text.",
      colours: "Deep cosmic void, glowing rocket telemetry orange, titanium blue, and mission white.",
      layout: "Mission control layout with live countdown clock, interactive globe orbit paths, specification tables.",
      visualLanguage: "High-resolution rocket hardware captures, trajectory telemetry schematics, countdown timers.",
      interaction: "Interactive payload configuration slider, live orbit path 3D globe visualization.",
    },
    development:
      "Next.js App Router, Three.js 3D globe rendering with WebGL shaders, live WebSocket telemetry integration for rocket launches.",
    outcome: [
      "Secured 8 commercial payload reservations in Q1 following launch",
      "Recognized by SpaceTech Design Awards 2025",
      "Zero latency drop during live broadcast of Flight 3 with 250k concurrent viewers",
      "Lighthouse 97/100",
    ],
    tags: ["Websites", "UI/UX", "Brand Systems"],
    featured: true,
    isLive: false,
    accentColor: "#EA580C",
    bgColor: "#040508",
    mockPalette: { primary: "#EA580C", secondary: "#38BDF8", surface: "#040508", text: "#F8FAFC" },
  },
  {
    slug: "lucid-craft",
    name: "Lucid Craft",
    client: "Lucid Furniture Studio",
    industry: "Interior Design & Furniture",
    year: "2024",
    services: ["E-Commerce Design", "AR Product Preview", "UI/UX Design"],
    tagline: "Timeless Scandinavian woodworking for modern interiors.",
    description:
      "Direct-to-consumer digital gallery and augmented reality furniture configuration for bespoke solid wood furniture.",
    challenge:
      "Bespoke solid wood furniture has long lead times and high price points. Customers were hesitant to commit without seeing the wood grain and scale in their actual rooms.",
    goal: "Build an online flagship that demystifies wood selections and enables WebXR Augmented Reality previews right from the mobile browser.",
    approach:
      "We developed an ultra-clean, minimal Nordic layout featuring realistic 4K wood swatch selectors and 1-tap iOS QuickLook AR room placement.",
    designDirection: {
      typography: "Gentle editorial grotesque with generous letter-spacing and calm reading rhythm.",
      colours: "Muted birch cream, warm walnut brown, soft limestone, and matte iron.",
      layout: "Generous full-width photography, split-screen material customizer, quiet product descriptions.",
      visualLanguage: "Natural sunlit room scenes, joinery close-ups, sustainable forestry provenance maps.",
      interaction: "Instant AR room visualization, timber grain zoom inspection, swatch sample ordering flow.",
    },
    development:
      "Headless Shopify backend with Next.js frontend, USDZ and GLTF automated 3D file delivery pipeline for mobile AR.",
    outcome: [
      "+78% increase in custom furniture orders",
      "AR preview users were 3.4x more likely to complete a purchase",
      "Average order value increased from $1,800 to $3,200",
      "Organic press features in Wallpaper* and Dezeen",
    ],
    tags: ["E-Commerce", "Websites", "Brand Systems"],
    featured: true,
    isLive: false,
    accentColor: "#854D0E",
    bgColor: "#FAF8F5",
    mockPalette: { primary: "#854D0E", secondary: "#A16207", surface: "#FAF8F5", text: "#292524" },
  },
  {
    slug: "zephyr-bikes",
    name: "Zephyr Bikes",
    client: "Zephyr Mobility Inc",
    industry: "Electric Mobility & Hardware",
    year: "2025",
    services: ["Website Design", "Bike Configurator", "UI/UX Design"],
    tagline: "Urban speed and minimalist design engineered into every commute.",
    description:
      "A high-energy digital showcase and dynamic 3D configurator for a premium lightweight urban electric bicycle.",
    challenge:
      "Most e-bike websites look like gadget catalogs with cluttered spec sheets. Zephyr wanted to stand out as a sleek lifestyle statement for urban commuters.",
    goal: "Create a fast, magnetic, visually electrifying website that sells the feeling of effortless urban flight while clearly communicating battery and motor reliability.",
    approach:
      "We engineered a kinetic, high-contrast website featuring an interactive 3D bike builder, interactive range-by-city map calculator, and booking flow for local test rides.",
    designDirection: {
      typography: "Bold condensed athletic grotesque paired with crisp technical captions.",
      colours: "Carbon matte black, acid electric lime, tarmac dark gray, and pure white.",
      layout: "Asymmetrical speed scroll, interactive spec cards, sticky test-ride booking drawer.",
      visualLanguage: "Nighttime urban photography with light trails, macro carbon weave closeups, exploded motor animations.",
      interaction: "Interactive bike colour and accessory configurator, real-time battery range estimator.",
    },
    development:
      "Next.js App Router with React Three Fiber, dynamic geometry loading, integrated with Stripe for pre-order deposits.",
    outcome: [
      "Over 3,000 pre-orders secured within 30 days of site launch",
      "+160% increase in certified dealer test-ride bookings",
      "Average site session duration: 3 minutes 40 seconds",
      "Awwwards Mobile Excellence Winner",
    ],
    tags: ["E-Commerce", "Websites", "UI/UX"],
    featured: true,
    isLive: false,
    accentColor: "#84CC16",
    bgColor: "#0E1015",
    mockPalette: { primary: "#84CC16", secondary: "#06B6D4", surface: "#0E1015", text: "#FFFFFF" },
  },
  {
    slug: "pulse-fintech",
    name: "Pulse Fintech",
    client: "Pulse Global Liquidity Ltd",
    industry: "FinTech & Payments",
    year: "2025",
    services: ["UI/UX Design", "Website Design", "Interactive FX Calculator"],
    tagline: "Instant cross-border treasury settlement for global enterprises.",
    description:
      "Marketing website, developer portal, and real-time liquidity calculator for a next-generation corporate treasury platform.",
    challenge:
      "Traditional enterprise banking takes 3–5 days to settle international payments. Pulse solves this in seconds, but institutional CFOs were skeptical of new fintech claims.",
    goal: "Build an unshakeable, enterprise-grade digital experience that proves security, speed, and regulatory compliance at first glance.",
    approach:
      "We built a live FX settlement simulator comparing real-time Pulse settlement times against legacy SWIFT wire benchmarks, paired with transparent API documentation.",
    designDirection: {
      typography: "Crisp monospaced currency tables paired with an authoritative, modern corporate neo-grotesk.",
      colours: "Deep midnight slate, vivid emerald mint, frosted steel, and crisp white type.",
      layout: "Bento dashboard previews, interactive multi-currency calculators, compliance certification grid.",
      visualLanguage: "Live currency ticker ribbons, data flow telemetry, institutional security seals.",
      interaction: "Interactive FX savings calculator, instant API key generator, live global liquidity map.",
    },
    development:
      "Next.js static engine with real-time websocket rate feeds from central bank APIs. SOC2 Type II compliance display.",
    outcome: [
      "Processed over $120M in transaction volume in pilot phase",
      "Inbound demo requests from enterprise CFOs up 240%",
      "Site speed rating 99 on Google PageSpeed Insights",
      "Conversion from visit to developer sandbox creation: 14.8%",
    ],
    tags: ["SaaS & Web Apps", "UI/UX", "Corporate"],
    featured: true,
    isLive: false,
    accentColor: "#10B981",
    bgColor: "#090D14",
    mockPalette: { primary: "#10B981", secondary: "#3B82F6", surface: "#090D14", text: "#F0FDF4" },
  },
  {
    slug: "atelier-noire",
    name: "Atelier Noire",
    client: "Maison Noire Parfumerie",
    industry: "Luxury & Fragrance",
    year: "2024",
    services: ["E-Commerce Design", "Digital Fragrance Finder", "Brand Identity"],
    tagline: "Rare botanical extractions bottled in limited edition glass.",
    description:
      "An evocative sensory e-commerce flagship featuring an olfactory profile quiz and interactive fragrance notes visualizer.",
    challenge:
      "Fragrance is the hardest product to sell online. Customers cannot smell the notes through a digital screen.",
    goal: "Translate scent profiles — top, heart, and base notes — into a synesthetic digital experience that creates an unmistakable sense of atmosphere.",
    approach:
      "We built an interactive Olfactory Wheel allowing users to explore scents through emotion, season, and botanical ingredients, backed by discovery sampling sets.",
    designDirection: {
      typography: "Poetic French serif typography paired with minimal hairline numerals.",
      colours: "Smoked charcoal, warm parchment, rose gold, and deep amber velvet.",
      layout: "Editorial full-page fragrance stories, interactive fragrance note accord breakdowns.",
      visualLanguage: "Slow-motion droplet cinematography, macro glass textures, smoke and botanical stills.",
      interaction: "Interactive Olfactory Note Accord mixer, 3-minute bespoke fragrance quiz.",
    },
    development:
      "Headless Shopify implementation with Next.js frontend, instant client-side cart transitions, Klaviyo luxury email flows.",
    outcome: [
      "+135% increase in discovery sample kit sales",
      "Customer repeat purchase rate reached 42% within 6 months",
      "Featured in Vogue and Harper's Bazaar Digital Design Columns",
      "Average order value of $210",
    ],
    tags: ["E-Commerce", "Websites", "Brand Systems"],
    featured: true,
    isLive: false,
    accentColor: "#E11D48",
    bgColor: "#0F0D0E",
    mockPalette: { primary: "#E11D48", secondary: "#D97706", surface: "#0F0D0E", text: "#FFF1F2" },
  },
  {
    slug: "synapse-robotics",
    name: "Synapse Robotics",
    client: "Synapse Automation AG",
    industry: "Industrial Automation & Robotics",
    year: "2025",
    services: ["UI/UX Design", "Website Design", "Interactive Fleet Simulator"],
    tagline: "Autonomous collaborative mobile robots for gigafactories.",
    description:
      "Product showcase and interactive warehouse floor-plan fleet simulator for an industrial robotics manufacturer.",
    challenge:
      "Supply chain executives were tired of abstract robotics promises and needed to see concrete throughput math and fleet return-on-investment.",
    goal: "Create a digital tool where warehouse managers can drag and drop AMR robots onto simulated facility layouts and see immediate throughput estimates.",
    approach:
      "We engineered a browser-based 2D warehouse simulator allowing visitors to model their own facility throughput and immediately download a custom feasibility study.",
    designDirection: {
      typography: "High-density technical monospace combined with German precision grotesque.",
      colours: "Industrial machine gray, high-visibility hazard yellow, laser cyan, and deep asphalt.",
      layout: "Schematic floor plan grids, robot telemetry HUDs, technical specification split-tables.",
      visualLanguage: "Clean technical orthographic drawings, lidar sensor heatmaps, robot chassis renders.",
      interaction: "Interactive drag-and-drop warehouse robot fleet simulator, payload comparison sliders.",
    },
    development:
      "Next.js App Router with HTML5 Canvas engine for real-time fleet pathfinding simulation, dynamic PDF generation for ROI proposals.",
    outcome: [
      "+190% increase in qualified enterprise sales meetings booked",
      "Over 4,200 custom warehouse simulations executed by logistics directors",
      "Shortened average enterprise sales cycle by 6 weeks",
      "Lighthouse 98/100 performance score",
    ],
    tags: ["SaaS & Web Apps", "UI/UX", "Corporate"],
    featured: true,
    isLive: false,
    accentColor: "#EAB308",
    bgColor: "#111215",
    mockPalette: { primary: "#EAB308", secondary: "#06B6D4", surface: "#111215", text: "#F8FAFC" },
  },
  {
    slug: "terraform-earth",
    name: "Terraform",
    client: "Terraform Ecological Systems",
    industry: "ClimateTech & Sustainability",
    year: "2025",
    services: ["Website Design", "Satellite Data Visualization", "UI/UX Design"],
    tagline: "Planetary-scale satellite intelligence for forest carbon tracking.",
    description:
      "Interactive climate intelligence platform that visualizes real-time satellite biomass tracking and verifiable carbon credits.",
    challenge:
      "Greenwashing has damaged trust in carbon markets. Terraform needed to show that their satellite LiDAR monitoring provides indisputable, scientific truth.",
    goal: "Build an interactive global map interface where corporate ESG buyers can click on individual reforestation projects and inspect canopy growth data.",
    approach:
      "We integrated live satellite map tiles with interactive biomass depth charts, allowing visitors to inspect verified carbon absorption data by hectare.",
    designDirection: {
      typography: "Modern scientific grotesque paired with crisp geospatial coordinate typography.",
      colours: "Canopy deep green, moss emerald, satellite glacier cyan, and rich loam earth tones.",
      layout: "Full-bleed interactive satellite globe, project detail drawers, verifiable credit audit receipts.",
      visualLanguage: "Multispectral satellite imagery, false-colour infrared biomass maps, clean data visualizations.",
      interaction: "Interactive 3D satellite zoom, before-and-after deforestation timeline scrubbers.",
    },
    development:
      "Mapbox GL JS and Next.js integration with real-time GeoJSON endpoints, serverless edge caching for planetary datasets.",
    outcome: [
      "Over 2.5 million hectares of forest placed under verified tracking",
      "Secured partnerships with 14 Fortune 500 corporate sustainability departments",
      "Featured in Bloomberg Green and Wired Climate Innovation",
      "Sub-second map render performance across all modern browsers",
    ],
    tags: ["Websites", "UI/UX", "SaaS & Web Apps"],
    featured: true,
    isLive: false,
    accentColor: "#059669",
    bgColor: "#080F0D",
    mockPalette: { primary: "#059669", secondary: "#10B981", surface: "#080F0D", text: "#ECFDF5" },
  },
  {
    slug: "apex-motors",
    name: "Apex Motors",
    client: "Apex Performance Engineering",
    industry: "Automotive & Supercars",
    year: "2024",
    services: ["Website Design", "3D Vehicle Configurator", "Brand Identity"],
    tagline: "Track-bred hypercars built without aerodynamic compromise.",
    description:
      "A high-octane digital experience and bespoke build configurator for an ultra-limited production track hypercar.",
    challenge:
      "Apex produces only 24 bespoke hypercars per year. Every vehicle is a $3M bespoke commission. The website had to reflect motorsport pedigree and extreme exclusivity.",
    goal: "Create a digital sanctuary of speed: cinematic telemetry, interactive aerodynamic wind tunnel visualizations, and private allocation reservation.",
    approach:
      "We paired high-fidelity 3D vehicle customization with real wind-tunnel aerodynamic telemetry and onboard telemetry sound design.",
    designDirection: {
      typography: "Aggressive, ultra-wide motorsport grotesque paired with technical carbon-spec labels.",
      colours: "Matte carbon obsidian, racing scarlet, raw titanium, and speed yellow accents.",
      layout: "Cinematic full-screen chapters, horizontal aerodynamic telemetry sliders, private VIP portal.",
      visualLanguage: "Wind-tunnel smoke stream simulations, carbon-weave macro textures, track telemetry graphics.",
      interaction: "360-degree aerodynamic downforce visualizer, carbon component selector, engine acoustics player.",
    },
    development:
      "Next.js App Router, WebGL aerodynamic particle simulation, private WebAuthn biometric login for allocation holders.",
    outcome: [
      "All 24 build allocations for the 2025/2026 model year sold out within 14 days",
      "Over 1.2M YouTube and social impressions generated by site launch teaser",
      "Webby Award Nominee for Best Visual Design - Aesthetic",
      "Lighthouse 98/100",
    ],
    tags: ["Websites", "Brand Systems", "UI/UX"],
    featured: true,
    isLive: false,
    accentColor: "#DC2626",
    bgColor: "#070709",
    mockPalette: { primary: "#DC2626", secondary: "#EAB308", surface: "#070709", text: "#FFFFFF" },
  },
  {
    slug: "chronos-labs",
    name: "Chronos Labs",
    client: "Chronos Distributed Systems",
    industry: "Database & Cloud Infrastructure",
    year: "2025",
    services: ["UI/UX Design", "Website Design", "Interactive Benchmarking"],
    tagline: "Sub-millisecond distributed time-series storage for petabyte scale.",
    description:
      "Marketing portal, interactive benchmark comparison suite, and live documentation for an open-source database engine.",
    challenge:
      "Database benchmarks are notoriously contentious. Engineers mistrust marketing claims and demand reproducible performance graphs.",
    goal: "Create an interactive benchmarking suite on the homepage that lets systems engineers filter by query type and verify real throughput metrics.",
    approach:
      "We engineered live, interactive query throughput charts that allow engineers to compare Chronos vs ClickHouse, Cassandra, and InfluxDB under various workloads.",
    designDirection: {
      typography: "Clean monospace data tables paired with an authoritative, modern developer sans-serif.",
      colours: "Deep terminal obsidian, neon turquoise, acid cyan, and crisp white type.",
      layout: "Bento grid architecture, interactive performance charts, quickstart command copy blocks.",
      visualLanguage: "Latency distribution histograms, distributed node cluster topologies, terminal CLI animations.",
      interaction: "Live benchmark slider, copy-to-clipboard CLI installer, interactive query builder.",
    },
    development:
      "Built with Next.js App Router, Chart.js / Canvas rendering for 60fps graph updates, Algolia DocSearch integration.",
    outcome: [
      "GitHub repository stars increased from 1,200 to over 14,000 in 6 months",
      "Cloud managed service signups surpassed 8,500 developer accounts",
      "Developer documentation dwell time increased by 180%",
      "Lighthouse 100/100 performance across all pages",
    ],
    tags: ["SaaS & Web Apps", "UI/UX", "Websites"],
    featured: true,
    isLive: false,
    accentColor: "#06B6D4",
    bgColor: "#0A0D12",
    mockPalette: { primary: "#06B6D4", secondary: "#3B82F6", surface: "#0A0D12", text: "#F0FDFA" },
  },
  {
    slug: "vesper-spirits",
    name: "Vesper Spirits",
    client: "Vesper Distilling Co.",
    industry: "Food & Beverage / Spirits",
    year: "2024",
    services: ["E-Commerce Design", "Brand Storytelling", "UI/UX Design"],
    tagline: "Small-batch botanical spirits crafted for the discerning palate.",
    description:
      "Direct-to-consumer digital distillery and cocktail pairings guide for a boutique craft gin and botanical spirits house.",
    challenge:
      "Vesper was launching in competitive international metropolitan markets without major distributor billboard budgets. The website had to do the heavy lifting of brand romance.",
    goal: "Design a moody, prohibition-inspired digital flagship that educates consumers on botanical sourcing and inspires at-home mixology.",
    approach:
      "We created an interactive 'Cocktail Alchemist' generator that suggests custom cocktails based on what ingredients the user already has in their home bar.",
    designDirection: {
      typography: "Hand-crafted vintage serif inspired by 1920s apothecary labels, paired with disciplined modern numerals.",
      colours: "Deep evergreen velvet, burnished copper, aged cream paper, and smoky glass tint.",
      layout: "Editorial bottle showcase chapters, interactive cocktail recipe cards with ingredient sliders.",
      visualLanguage: "Warm amber glassware photography, botanical still life, copper still schematic drawings.",
      interaction: "Interactive Cocktail Alchemist recipe generator, smooth bottle 360-degree rotation.",
    },
    development:
      "Headless Shopify backend with Next.js frontend, legal age-gate verification with instant session remember, Klaviyo flows.",
    outcome: [
      "+165% growth in direct-to-consumer bottle shipments",
      "Interactive cocktail recipe feature logged over 80,000 mixes in the first holiday quarter",
      "Direct margin improved by 28% compared to wholesale retail distribution",
      "Winner of Best Packaging & Digital Presence at Spirits Business Awards 2024",
    ],
    tags: ["E-Commerce", "Websites", "Brand Systems"],
    featured: true,
    isLive: false,
    accentColor: "#B45309",
    bgColor: "#0A100D",
    mockPalette: { primary: "#B45309", secondary: "#047857", surface: "#0A100D", text: "#FEF3C7" },
  },
  {
    slug: "omnipay-global",
    name: "OmniPay Global",
    client: "OmniPay Financial Technologies",
    industry: "FinTech & E-Commerce",
    year: "2025",
    services: ["UI/UX Design", "Website Design", "Checkout Flow Architecture"],
    tagline: "Zero-friction unified checkout for 180 currencies and 40 payment methods.",
    description:
      "Marketing portal and developer documentation platform for a frictionless global payments orchestration layer.",
    challenge:
      "E-commerce merchants lose up to 35% of international checkouts due to localized payment friction and awkward currency conversions.",
    goal: "Create a vibrant, high-converting product site demonstrating how OmniPay unifies Apple Pay, Klarna, WeChat Pay, and cards in a single line of code.",
    approach:
      "We built an interactive Checkout Playground where merchants can test checkout flows across 15 different countries and currencies in real time.",
    designDirection: {
      typography: "Energetic modern grotesque paired with crisp tabular currency numerals.",
      colours: "Royal electric purple, high-contrast cobalt, energetic magenta, and crisp white type.",
      layout: "Interactive split-screen checkout sandbox, live currency conversion rates, modular feature cards.",
      visualLanguage: "Floating animated credit cards and digital wallets, clean code snippet overlays, security badges.",
      interaction: "Interactive payment method switcher, 1-click sandbox checkout simulation, real-time code generator.",
    },
    development:
      "Next.js App Router, Stripe/Adyen mock sandbox emulator, instant code copy snippets in cURL, Node.js, Python, and Go.",
    outcome: [
      "Over $3.5B in annualized merchant run-rate signed up in first 6 months",
      "Developer integration time reduced from 2 weeks to under 35 minutes",
      "Inbound demo conversions from enterprise retailers up 310%",
      "Lighthouse 99/100 performance across all audited routes",
    ],
    tags: ["SaaS & Web Apps", "UI/UX", "Corporate"],
    featured: true,
    isLive: false,
    accentColor: "#7C3AED",
    bgColor: "#090912",
    mockPalette: { primary: "#7C3AED", secondary: "#2563EB", surface: "#090912", text: "#F5F3FF" },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
