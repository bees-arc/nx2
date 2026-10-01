import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Process — 4-Week Synchronized Sprint | NYX Studio',
  description:
    'Experience our battle-tested 4-week sprint cycle. How NYX bridges strategic intelligence, bespoke design, and Next.js engineering into production platforms.',
};

const sprintWeeks = [
  {
    week: 'Week 01',
    num: '01',
    phase: 'Discover & Intelligence',
    tagline: 'Before touching a single pixel, we extract your core value proposition.',
    summary:
      'We immerse ourselves in your business model, customer psychology, and competitive landscape. We define clear KPIs, map user journeys, and establish the technical architecture.',
    deliverables: [
      'Strategic Architecture Blueprint',
      'User Persona & Journey Maps',
      'Competitive Differentiation Audit',
      'Technical Specification & Scope Freeze',
      'SEO Architecture & Content Sitemap',
    ],
    accent: '#2563EB',
  },
  {
    week: 'Week 02',
    num: '02',
    phase: 'Design & Visual Systems',
    tagline: 'We craft an unmistakable digital identity and fluid kinetic prototypes.',
    summary:
      'We establish a custom design system with bespoke typography scales, color tokens, and layout grids. We build high-fidelity interactive wireframes that simulate real user interactions.',
    deliverables: [
      'Interactive Figma Prototypes',
      'Design Token Matrix (Typography, Spacing, Color)',
      'Desktop, Tablet & Mobile Breakpoints',
      'Micro-Interaction & Kinetic Motion Specs',
      'Complete Production Design System',
    ],
    accent: '#3B82F6',
  },
  {
    week: 'Week 03',
    num: '03',
    phase: 'Build & Full-Stack Next.js',
    tagline: 'We engineer blazing platforms with production-grade TypeScript.',
    summary:
      'We bring designs to life using modern Next.js App Router, clean CSS modules, and Framer Motion spring physics. Zero bloated templates, zero generic page builders.',
    deliverables: [
      'Next.js (App Router) Repository',
      'Type-Safe TypeScript Implementation',
      'Fluid Framer Motion Animation Layer',
      'Headless CMS / Form Integrations',
      'Responsive Cross-Browser Polish',
    ],
    accent: '#60A5FA',
  },
  {
    week: 'Week 04',
    num: '04',
    phase: 'Launch & Optimization',
    tagline: 'We deploy, tune Core Web Vitals to 99+, and stress-test every flow.',
    summary:
      'We rigorously optimize image delivery, edge caching, and semantic SEO. We configure telemetry and analytics to ensure your platform starts generating ROI from day one.',
    deliverables: [
      '99+ Google Lighthouse PageSpeed Score',
      'Global Edge CDN Deployment (Vercel)',
      'Telemetry & Privacy-First Analytics Setup',
      'Multi-Device & Cross-Browser Validation',
      'Handover Documentation & Video Walkthrough',
    ],
    accent: '#93C5FD',
  },
];

const principles = [
  {
    title: 'Zero Bloat',
    desc: 'We never use generic WordPress themes or bloated drag-and-drop builders. Every component is custom-crafted in clean, semantic code.',
  },
  {
    title: 'Fixed Timeline & Scope',
    desc: 'We operate in structured 4-week sprint windows. You know exactly what gets delivered on what day — with zero scope drift.',
  },
  {
    title: '100% In-House Craft',
    desc: 'Your project is never outsourced to low-bid sub-agencies. Every wireframe, pixel, and line of code is engineered directly by our core studio.',
  },
  {
    title: 'Commercial Accountability',
    desc: 'We tie visual decisions to commercial metrics: conversion rates, bounce reduction, brand authority, and customer acquisition cost.',
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Methodology</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            How we work.<br />
            <em className={styles.heroItalic}>Built for momentum.</em>
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            A synchronized 4-week sprint framework designed to take ambitious brands from initial strategy
            to a high-performance production platform.
          </p>
        </div>
      </section>

      {/* ─── 4-WEEK SPRINT BREAKDOWN (DARK CANVAS) ─── */}
      <section className={styles.sprintSection}>
        <div className="container">
          <div className={styles.sprintList}>
            {sprintWeeks.map((week) => (
              <div key={week.num} className={styles.sprintCard}>
                {/* Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.weekPill}>
                    <span className={styles.weekDot} style={{ background: week.accent }} />
                    <span>{week.week}</span>
                  </div>
                  <span className={styles.phaseNum}>{week.num} / 04</span>
                </div>

                {/* Title & Tagline */}
                <h2 className={styles.phaseTitle}>{week.phase}</h2>
                <p className={styles.phaseTagline}>{week.tagline}</p>
                <p className={styles.phaseSummary}>{week.summary}</p>

                {/* Deliverables checklist */}
                <div className={styles.deliverablesBox}>
                  <h3 className={styles.deliverablesTitle}>Key Deliverables</h3>
                  <ul className={styles.deliverablesList}>
                    {week.deliverables.map((item) => (
                      <li key={item} className={styles.deliverableItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STUDIO PRINCIPLES ─── */}
      <section className="section section--light">
        <div className="container">
          <div className={styles.principlesHeader}>
            <span className="section-label">Engineering Standards</span>
            <h2 className="t-h2" style={{ maxWidth: '640px' }}>
              Why our process delivers better outcomes.
            </h2>
          </div>

          <div className={styles.principlesGrid}>
            {principles.map((p) => (
              <div key={p.title} className={styles.principleCard}>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="section section--off">
        <div className="container--narrow">
          <div className={styles.bottomCta}>
            <span className="section-label">Next Sprint</span>
            <h2 className="t-h2 reveal">
              Ready to schedule your 4-week sprint?
            </h2>
            <p className="t-body-lg text-muted reveal reveal-delay-1" style={{ maxWidth: '520px' }}>
              We book sprints 2-3 weeks in advance. Start a conversation today to lock in your release window.
            </p>
            <div className="reveal reveal-delay-2">
              <Link href="/contact" className="btn btn--primary btn--lg">
                Book a Sprint →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
