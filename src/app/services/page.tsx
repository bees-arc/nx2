import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services — Website Design, Next.js Development & UI/UX | NYX Studio',
  description:
    'Website Design, Next.js Development, and UI/UX Design engineered to perform. See what NYX delivers for high-growth commercial projects.',
};

const services = [
  {
    id: 'design',
    num: '01',
    title: 'Website Design',
    tagline: 'Websites that communicate commercial value at first glance.',
    description:
      'Great design is not superficial decoration — it is commercial clarity. Every layout, typography hierarchy, and visual element serves a direct purpose: communicating authority and converting visitors into loyal clients.',
    items: [
      'Bespoke Marketing Websites',
      'Corporate & Institutional Platforms',
      'High-Converting Landing Pages',
      'Full Digital Brand Systems',
      'Complete Website Redesigns',
      'Responsive Mobile-First Architecture',
      'Conversion-Focused User Journeys',
    ],
    accent: '#2563EB',
  },
  {
    id: 'development',
    num: '02',
    title: 'Website Development',
    tagline: 'Ultra-fast. Responsive. Engineered in Next.js.',
    description:
      'We build exclusively in Next.js — the gold standard for high-performance web applications. Zero bloated templates, zero generic page builders. Only clean, type-safe TypeScript code and global edge network deployments.',
    items: [
      'Next.js (App Router) Architecture',
      'Type-Safe TypeScript Engineering',
      'Fluid Framer Motion Micro-Interactions',
      'Headless CMS & Content Pipelines',
      'Lead Generation & Booking Integrations',
      'Edge Caching & Core Web Vitals (99+)',
      'Technical SEO & OpenGraph Optimization',
      'Cross-Device & Browser Stress-Testing',
    ],
    accent: '#3B82F6',
  },
  {
    id: 'uiux',
    num: '03',
    title: 'UI/UX Design Systems',
    tagline: 'Interfaces your customers actually love using.',
    description:
      'Research-backed interface architecture — from user psychology analysis to delivery of production-ready design tokens. We remove friction so digital products feel intuitive and effortless.',
    items: [
      'User Research & Competitor Benchmarking',
      'Information Architecture & Sitemaps',
      'Low & High-Fidelity Wireframes',
      'Modular Figma Design Systems',
      'Interactive Kinetic Prototypes',
      'Design Token Libraries (CSS & React)',
      'Accessibility (WCAG 2.1 AA) Compliance',
      'Developer Handover & Documentation',
    ],
    accent: '#60A5FA',
  },
];

const techStack = [
  { name: 'Next.js 15', role: 'Full-Stack React Framework' },
  { name: 'TypeScript', role: 'Production Type Safety' },
  { name: 'Framer Motion', role: 'Physics Kinetic Engine' },
  { name: 'Vanilla CSS Modules', role: 'Zero-Runtime Bloat' },
  { name: 'Figma', role: 'Collaborative Design System' },
  { name: 'Supabase', role: 'Serverless PostgreSQL' },
  { name: 'Vercel Edge', role: 'Sub-50ms Global Routing' },
  { name: 'Lighthouse 99+', role: 'Guaranteed Performance' },
];

const comparisons = [
  {
    feature: 'Development Stack',
    generic: 'Bloated WordPress / Elementor / Webflow templates',
    nyx: 'Custom Next.js App Router & clean TypeScript',
  },
  {
    feature: 'PageSpeed & Performance',
    generic: '30-60 on Google Lighthouse (laggy on mobile)',
    nyx: '95-100 on Google PageSpeed (instantaneous load)',
  },
  {
    feature: 'Communication Layer',
    generic: 'Account managers & junior sub-contractors',
    nyx: 'Direct access to senior founders and engineers',
  },
  {
    feature: 'Design Uniqueness',
    generic: 'Off-the-shelf theme modified with stock icons',
    nyx: '100% bespoke design system tailored to your brand',
  },
  {
    feature: 'Delivery Schedule',
    generic: '3-6 months with frequent scope creep',
    nyx: 'Synchronized 4-week fixed-timeline sprint',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Disciplines & Capabilities</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            Design. Development.<br />
            <em className={styles.heroItalic}>Built to perform.</em>
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            We don't dilute our focus across a hundred shallow services. We specialize in three interconnected
            disciplines and deliver at a standard that generic agencies simply cannot match.
          </p>
        </div>
      </section>

      {/* ─── 3 PRIMARY SERVICES ─── */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`${styles.serviceSection} ${index % 2 === 1 ? styles.serviceSectionAlt : ''}`}
        >
          <div className="container">
            <div className={styles.serviceGrid}>
              <div className={styles.serviceLeft}>
                <div className={styles.serviceNum}>{service.num} // SERVICE</div>
                <h2 className="t-h2 reveal">{service.title}</h2>
                <p className={`t-body-lg ${styles.serviceTagline} reveal reveal-delay-1`}>
                  {service.tagline}
                </p>
                <p className={`t-body ${styles.serviceDesc} reveal reveal-delay-2`}>
                  {service.description}
                </p>
                <div className="reveal reveal-delay-3" style={{ marginTop: '0.75rem' }}>
                  <Link href="/contact" className="btn btn--primary">
                    Inquire About {service.title} →
                  </Link>
                </div>
              </div>
              <div className={`${styles.serviceRight} reveal reveal-delay-1`}>
                <h3 className={styles.deliverablesHeading}>Included Deliverables</h3>
                <div className={styles.serviceItemsList}>
                  {service.items.map((item) => (
                    <div key={item} className={styles.serviceItem}>
                      <span className={styles.serviceItemDot} style={{ background: service.accent }} />
                      <span className={styles.serviceItemLabel}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── TECH STACK MATRIX (DARK EDITORIAL CANVAS) ─── */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.techHeader}>
            <span className="section-label section-label--dark">Engineered For Scale</span>
            <h2 className="t-h2" style={{ maxWidth: '640px' }}>
              The modern production stack behind our builds.
            </h2>
            <p className="t-body-lg text-muted" style={{ maxWidth: '580px', marginTop: '0.75rem' }}>
              We carefully curate enterprise-grade tooling that delivers unparalleled speed, accessibility, and reliability.
            </p>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((tech) => (
              <div key={tech.name} className={styles.techCard}>
                <span className={styles.techDot} />
                <h3 className={styles.techName}>{tech.name}</h3>
                <p className={styles.techRole}>{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON MATRIX ─── */}
      <section className="section section--light">
        <div className="container">
          <div className={styles.compHeader}>
            <span className="section-label">The Studio Advantage</span>
            <h2 className="t-h2">Why clients choose NYX.</h2>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th className={styles.thFeature}>Dimension</th>
                  <th className={styles.thGeneric}>Generic Agencies</th>
                  <th className={styles.thNyx}>NYX Studio</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature}>
                    <td className={styles.tdFeature}>{row.feature}</td>
                    <td className={styles.tdGeneric}>{row.generic}</td>
                    <td className={styles.tdNyx}>
                      <span className={styles.checkBadge}>✓</span>
                      <span>{row.nyx}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className={`section section--ink ${styles.bottomCta}`}>
        <div className="container--narrow">
          <div className={styles.bottomCtaInner}>
            <span className="section-label section-label--neutral">Get Started</span>
            <h2 className="t-h2 reveal">Tell us what you're building.</h2>
            <p className="t-body-lg reveal reveal-delay-1" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px' }}>
              Whether it's a complete new platform, a bespoke design system, or a technical redesign —
              we'd love to examine your objectives.
            </p>
            <div className="reveal reveal-delay-2">
              <Link href="/contact" className="btn btn--primary btn--lg">
                Start a Project →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
