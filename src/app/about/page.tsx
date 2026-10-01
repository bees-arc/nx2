import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About — The NYX Philosophy & Studio Manifesto | NYX',
  description:
    'Learn why NYX exists. We are an independent digital product and Next.js engineering studio delivering bespoke web experiences that drive commercial momentum.',
};

const creed = [
  {
    num: '01',
    title: 'Clarity Over Novelty',
    desc: 'We never design for the sake of empty aesthetics. Every layout, typography scale, and color token exists to communicate value, guide the visitor, and build trust.',
  },
  {
    num: '02',
    title: 'Performance Is a Feature',
    desc: 'A slow website is an invisible website. We engineer exclusively in Next.js with sub-50ms edge caching, targeting 99+ Google PageSpeed on every release.',
  },
  {
    num: '03',
    title: '100% In-House Craft',
    desc: 'We refuse to white-label or offshore client work to anonymous sub-agencies. Every line of TypeScript and every Figma token is crafted directly by our core founders.',
  },
  {
    num: '04',
    title: 'Code Is Design',
    desc: 'Design doesn’t end in Figma. How code is structured, how fast it compiles, and how gracefully it responds to interaction is an essential part of the user experience.',
  },
  {
    num: '05',
    title: 'Commercial Accountability',
    desc: 'We measure our work by real business outcomes: conversion lift, reduced bounce rates, customer acquisition efficiency, and executive brand authority.',
  },
  {
    num: '06',
    title: 'Radical Transparency',
    desc: 'No hidden retainer markups. No vague timeline promises. We operate in clear 2-week sprint windows with fixed scopes, daily async updates, and guaranteed delivery.',
  },
];

const teamMembers = [
  {
    name: 'Alex Ratnayake',
    role: 'Founder & Creative Director',
    bio: 'Product designer and strategist with a background in conversion architecture. Passionate about stripping away agency bloat to deliver bold, memorable digital identities.',
    initials: 'AR',
    focus: 'Brand Systems • Creative Direction • Information Architecture',
    color: '#2563EB',
  },
  {
    name: 'Jamie Seneviratne',
    role: 'Technical Lead & Partner',
    bio: 'Full-stack software engineer specializing in Next.js App Router, edge computing, and kinetic Framer Motion interactions. Dedicated to zero-bloat, accessible web builds.',
    initials: 'JS',
    focus: 'Next.js 15 • TypeScript • Performance Engineering • Supabase',
    color: '#1D4ED8',
  },
  {
    name: 'Dilshan Perera',
    role: 'Interface Architect',
    bio: 'Design systems specialist with deep expertise in modular token architectures, multi-device responsiveness, and micro-interaction kinetic physics.',
    initials: 'DP',
    focus: 'Figma Systems • Design Tokens • Micro-Interactions • WCAG AA',
    color: '#3B82F6',
  },
];

const studioStats = [
  { val: '17+', label: 'Releases Deployed' },
  { val: '2 Wks', label: 'Standard Sprint' },
  { val: '99+', label: 'Core Web Vitals' },
  { val: '6', label: 'Countries Served' },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Studio Philosophy</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            Built on principles.<br />
            <em className={styles.heroItalic}>Not passing trends.</em>
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            NYX is an independent digital product and Next.js engineering studio based in Colombo,
            deploying high-performance web platforms for ambitious clients across the US, UK, Australia, and beyond.
          </p>

          {/* Quick Studio Stats */}
          <div className={`${styles.statsRow} animate-fade-up animate-fade-up-delay-3`}>
            {studioStats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statNum}>{s.val}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STUDIO MANIFESTO (DARK CANVAS) ─── */}
      <section className={styles.manifestoSection}>
        <div className="container">
          <div className={styles.manifestoGrid}>
            <div className={styles.manifestoLeft}>
              <span className="section-label section-label--dark">The Manifesto</span>
              <h2 className="t-h2" style={{ maxWidth: '520px' }}>
                Why 95% of agency websites fail to perform.
              </h2>
            </div>
            <div className={styles.manifestoRight}>
              <p className={styles.leadPara}>
                Most web agencies build digital billboards. They chase superficial Dribbble trends,
                pile on bloated JavaScript libraries, and outsource actual engineering to the lowest bidder.
              </p>
              <p className={styles.bodyPara}>
                The result? Websites that look flash for a week, take 6 seconds to load on mobile,
                and fail to communicate what the business actually does. Visitors leave before the first fold renders.
              </p>
              <p className={styles.bodyPara}>
                We founded NYX to do the opposite. We view websites as commercial software — instruments designed
                to establish undeniable market authority, communicate value in seconds, and drive qualified revenue.
              </p>
              <div className={styles.quoteBox}>
                <p className={styles.quoteText}>
                  "Design is not how it looks. It's how clearly it communicates and how reliably it performs."
                </p>
                <span className={styles.quoteAuthor}>— NYX Studio Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECHNICAL & CULTURAL CREED ─── */}
      <section className="section section--light">
        <div className="container">
          <div className={styles.creedHeader}>
            <span className="section-label">Core Creed</span>
            <h2 className="t-h2" style={{ maxWidth: '640px' }}>
              The 6 non-negotiable standards behind every build.
            </h2>
          </div>

          <div className={styles.creedGrid}>
            {creed.map((item) => (
              <div key={item.num} className={styles.creedCard}>
                <span className={styles.creedNum}>{item.num}</span>
                <h3 className={styles.creedTitle}>{item.title}</h3>
                <p className={styles.creedDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP & TEAM ─── */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.teamHeader}>
            <span className="section-label section-label--dark">Founding Team</span>
            <h2 className="t-h2">The craftsmen behind the code.</h2>
            <p className="t-body-lg text-muted" style={{ maxWidth: '560px', marginTop: '0.75rem' }}>
              When you partner with NYX, you work directly with experienced practitioners — not junior account executives.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamAvatar} style={{ background: `${member.color}15`, borderColor: `${member.color}40` }}>
                  <span className={styles.teamInitials} style={{ color: member.color }}>{member.initials}</span>
                </div>
                <div className={styles.teamContent}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamBio}>{member.bio}</p>
                  <div className={styles.focusPill}>
                    <span className={styles.focusDot} style={{ background: member.color }} />
                    <span>{member.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="section section--off">
        <div className="container--narrow">
          <div className={styles.bottomCta}>
            <span className="section-label">Let's Connect</span>
            <h2 className="t-h2 reveal">
              Ready to collaborate with a focused studio?
            </h2>
            <p className="t-body-lg text-muted reveal reveal-delay-1" style={{ maxWidth: '520px' }}>
              We're always excited to hear from founders and businesses who take their digital presence seriously.
            </p>
            <div className="reveal reveal-delay-2">
              <Link href="/contact" className="btn btn--primary btn--lg">
                Start a Conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
