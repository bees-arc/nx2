import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Website Design, Website Development, and UI/UX Design — built to perform. See what NYX delivers for every project.',
};

const services = [
  {
    id: 'design',
    num: '01',
    title: 'Website Design',
    tagline: 'Websites that communicate value at first glance.',
    description:
      'Great design is not decoration — it is clarity. Every layout, every section, every element serves a purpose. We design marketing sites, business websites, and corporate platforms that work as hard as you do.',
    items: [
      'Marketing websites',
      'Business websites',
      'Landing pages',
      'Corporate websites',
      'Website redesigns',
      'Responsive design',
      'Conversion-focused layouts',
    ],
    accent: '#2563EB',
  },
  {
    id: 'development',
    num: '02',
    title: 'Website Development',
    tagline: 'Fast. Responsive. Built to last.',
    description:
      'We build in Next.js — the modern standard for performance-focused websites. Clean code, SEO-ready structure, and integrations that actually work. Every line serves a purpose.',
    items: [
      'Next.js development',
      'Responsive implementation',
      'Interactive experiences',
      'CMS / content integration',
      'Forms & booking integrations',
      'Analytics setup',
      'SEO-ready structure',
      'Performance optimisation',
    ],
    accent: '#1D4ED8',
  },
  {
    id: 'uiux',
    num: '03',
    title: 'UI/UX Design',
    tagline: 'Interfaces people actually want to use.',
    description:
      'Research-backed design — from understanding your users to delivering polished, production-ready interfaces. We make digital experiences feel effortless.',
    items: [
      'UX research',
      'User flows',
      'Wireframes',
      'Interface design',
      'Design systems',
      'Responsive UI',
      'Interactive prototypes',
    ],
    accent: '#1E40AF',
  },
];

const focusAreas = [
  {
    icon: '◎',
    label: 'Design',
    desc: 'Purposeful, conversion-led visual design.',
  },
  {
    icon: '◈',
    label: 'Usability',
    desc: 'Intuitive navigation and clear user journeys.',
  },
  {
    icon: '⚡',
    label: 'Speed',
    desc: 'Performance-first builds. Fast on every device.',
  },
  {
    icon: '📱',
    label: 'Mobile',
    desc: 'Mobile-first from pixel one. Always.',
  },
  {
    icon: '◉',
    label: 'Conversion',
    desc: 'Every element designed to drive action.',
  },
  {
    icon: '◐',
    label: 'Maintainability',
    desc: 'Clean, structured code you can actually work with.',
  },
];

const processSteps = [
  { step: '01', label: 'Discovery' },
  { step: '02', label: 'Strategy' },
  { step: '03', label: 'UX' },
  { step: '04', label: 'UI Design' },
  { step: '05', label: 'Development' },
  { step: '06', label: 'QA' },
  { step: '07', label: 'Launch' },
  { step: '08', label: 'Support' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">What we do</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            Design. Development.<br />
            Digital experiences built to perform.
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            We don't spread across every digital service. We focus on three disciplines
            and deliver at a level that generic agencies can't match.
          </p>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`${styles.serviceSection} ${index % 2 === 1 ? styles.serviceSectionAlt : ''}`}
        >
          <div className="container">
            <div className={styles.serviceGrid}>
              <div className={styles.serviceLeft}>
                <div className={styles.serviceNum}>{service.num}</div>
                <h2 className={`t-h2 reveal`}>{service.title}</h2>
                <p className={`t-body-lg ${styles.serviceTagline} reveal reveal-delay-1`}>
                  {service.tagline}
                </p>
                <p className={`t-body ${styles.serviceDesc} reveal reveal-delay-2`}>
                  {service.description}
                </p>
                <Link href="/contact" className={`btn btn--primary ${styles.serviceBtn} reveal reveal-delay-3`}>
                  Start a Project →
                </Link>
              </div>
              <div className={`${styles.serviceRight} reveal reveal-delay-1`}>
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

      {/* ─── FOCUS AREAS ─── */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.focusHeader}>
            <span className="section-label section-label--dark">Every project</span>
            <h2 className="t-h2" style={{ maxWidth: '540px' }}>
              What every NYX project focuses on.
            </h2>
          </div>
          <div className={styles.focusGrid}>
            {focusAreas.map((area, i) => (
              <div key={area.label} className={`${styles.focusCard} reveal reveal-delay-${(i % 3) + 1}`}>
                <div className={styles.focusIcon}>{area.icon}</div>
                <h3 className={`t-h4 ${styles.focusLabel}`}>{area.label}</h3>
                <p className={`t-small ${styles.focusDesc}`}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="section section--off">
        <div className="container">
          <div className={styles.processHeader}>
            <span className="section-label">Process</span>
            <h2 className="t-h2">How every project runs.</h2>
          </div>
          <div className={styles.processTrack}>
            {processSteps.map((s, i) => (
              <div key={s.step} className={`${styles.processNode} reveal reveal-delay-${(i % 4) + 1}`}>
                <div className={styles.processNodeNum}>{s.step}</div>
                {i < processSteps.length - 1 && (
                  <div className={styles.processNodeArrow}>→</div>
                )}
                <div className={styles.processNodeLabel}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className={`${styles.processCta} reveal`}>
            <Link href="/process" className="btn btn--outline">
              See Full Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className={`section section--ink ${styles.bottomCta}`}>
        <div className="container--narrow">
          <div className={styles.bottomCtaInner}>
            <h2 className={`t-h2 reveal`}>Tell us what you're building.</h2>
            <p className={`t-body-lg reveal reveal-delay-1`} style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px' }}>
              Whether it's a new website, a redesign, or a complex UI/UX challenge —
              we'd love to hear about it.
            </p>
            <div className={`reveal reveal-delay-2`}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
