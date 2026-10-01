'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import styles from './Skiper19HowWeWork.module.css';

/**
 * Skiper19: Svg follow scroll & 4-Card Convergence
 * Adapted from Skiper UI (https://skiper-ui.com/v1/skiper19)
 * Brand-tuned with NYX Blue Design System (#2563EB, #3B82F6, #60A5FA).
 *
 * Enhanced with synchronized scroll pacing:
 * - Thick, bold SVG strip (strokeWidth 16) with luminous inner core
 * - Perfectly paced scroll timing (draws in lockstep as cards enter view)
 * - 4 meeting pipeline cards converging to center on scroll
 */

interface StepData {
  id: string;
  num: string;
  phase: string;
  title: string;
  desc: string;
  duration: string;
  output: string;
  tags: string[];
  side: 'left' | 'right';
  icon: React.ReactNode;
}

const steps: StepData[] = [
  {
    id: 'discover',
    num: '01',
    phase: 'Phase 01 / Strategy',
    title: 'Discover & Intelligence',
    desc: 'We extract your core value proposition, interview stakeholders, and analyze competitive landscapes before touching a single pixel.',
    duration: 'Week 01',
    output: 'Strategic Architecture & Product Spec',
    tags: ['Brand Deep-Dive', 'User Personas', 'Market Intelligence', 'Sitemap & Journey'],
    side: 'left',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polygon points="11 8 13 12 9 12" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'design',
    num: '02',
    phase: 'Phase 02 / Creative',
    title: 'Design & Visual Systems',
    desc: 'We shape an unmistakable digital presence — crafting interactive wireframes, modular design tokens, and fluid kinetic prototypes.',
    duration: 'Week 02',
    output: 'Production-Ready Design System (Figma)',
    tags: ['Interactive Wireframes', 'Design Systems', 'Micro-Interactions', 'High-Fi Layouts'],
    side: 'right',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    id: 'build',
    num: '03',
    phase: 'Phase 03 / Engineering',
    title: 'Build & Full-Stack Development',
    desc: 'We engineer blazing Next.js platforms with production-grade TypeScript, Framer Motion animations, and seamless headless integrations.',
    duration: 'Week 03',
    output: 'High-Performance Next.js Application',
    tags: ['Next.js App Router', 'TypeScript & React', 'Fluid Physics & Shaders', 'Headless CMS'],
    side: 'left',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    id: 'launch',
    num: '04',
    phase: 'Phase 04 / Delivery',
    title: 'Launch & Global Scale',
    desc: 'We conduct multi-device stress testing, configure edge CDN delivery, optimize Core Web Vitals to 99+, and equip your team for growth.',
    duration: 'Week 04',
    output: 'Live Edge-Deployed Web Experience',
    tags: ['Edge CDN Deployment', 'Technical SEO 100', 'Core Web Vitals 99+', 'Training & Handover'],
    side: 'right',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function Skiper19HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  // Check screen width for responsive convergence behavior
  useEffect(() => {
    const checkViewport = () => setIsDesktop(window.innerWidth > 991);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Carefully tuned scroll timing:
  // Starts when section approaches mid-screen ('start 65%')
  // Finishes when user actually reaches the bottom of the 4 cards ('end 80%')
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 80%'],
  });

  // Track progress and illuminate cards synchronously
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const clamped = Math.min(Math.max(latest, 0), 1);
    setProgressPercent(Math.round(clamped * 100));

    if (clamped >= 0.82) {
      setActiveStep(3);
    } else if (clamped >= 0.58) {
      setActiveStep(2);
    } else if (clamped >= 0.32) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
  });

  // Skiper19 SVG stroke path length transform: perfectly synchronized [0, 1] -> [0, 1]
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const strokeDashoffset = useTransform(pathLength, (value) => 1 - value);

  // Card 1 Convergence: enters smoothly and aligns as line reaches it
  const card1X = useTransform(scrollYProgress, [0.0, 0.28], [isDesktop ? -70 : 0, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.0, 0.22], [0.35, 1]);
  const card1Scale = useTransform(scrollYProgress, [0.0, 0.25], [0.97, 1]);

  // Card 2 Convergence: enters smoothly and aligns as line reaches it
  const card2X = useTransform(scrollYProgress, [0.22, 0.52], [isDesktop ? 70 : 0, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.20, 0.45], [0.35, 1]);
  const card2Scale = useTransform(scrollYProgress, [0.22, 0.50], [0.97, 1]);

  // Card 3 Convergence: enters smoothly and aligns as line reaches it
  const card3X = useTransform(scrollYProgress, [0.48, 0.76], [isDesktop ? -70 : 0, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.45, 0.68], [0.35, 1]);
  const card3Scale = useTransform(scrollYProgress, [0.48, 0.72], [0.97, 1]);

  // Card 4 Convergence: enters smoothly and aligns as line reaches it
  const card4X = useTransform(scrollYProgress, [0.70, 0.98], [isDesktop ? 70 : 0, 0]);
  const card4Opacity = useTransform(scrollYProgress, [0.68, 0.88], [0.35, 1]);
  const card4Scale = useTransform(scrollYProgress, [0.70, 0.95], [0.97, 1]);

  const cardTransforms = [
    { x: card1X, opacity: card1Opacity, scale: card1Scale },
    { x: card2X, opacity: card2Opacity, scale: card2Scale },
    { x: card3X, opacity: card3Opacity, scale: card3Scale },
    { x: card4X, opacity: card4Opacity, scale: card4Scale },
  ];

  return (
    <section ref={containerRef} className={styles.skiper19Section} id="how-we-work">
      {/* Ambient Visual Atmosphere (NYX Brand Colors) */}
      <div className={styles.ambientBackground} aria-hidden="true">
        <div className={styles.ambientGlowTop} />
        <div className={styles.ambientGlowBottom} />
        <div className={styles.gridPattern} />

        {/* ─── AUTHENTIC SKIPER19 SIGNATURE AMBIENT SVG (NYX BLUE BRAND) ─── */}
        <svg
          viewBox="0 0 1278 2319"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.skiper19AmbientSvg}
        >
          <motion.path
            d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
            stroke="#2563EB"
            strokeWidth="16"
            strokeLinecap="round"
            strokeOpacity="0.25"
            style={{
              pathLength,
              strokeDashoffset,
            }}
          />
        </svg>
      </div>

      {/* Section Header */}
      <div className={styles.headerContainer}>
        <div className={styles.badgeWrapper}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>NYX Process Architecture</span>
        </div>

        <h2 className={styles.mainTitle}>
          How we work. <br />
          <span className={styles.titleHighlight}>Built for momentum.</span>
        </h2>

        <p className={styles.subtitle}>
          Scroll down to experience our synchronized 4-card workflow. The dynamic stroke guides each milestone, connecting strategy to deployment.
        </p>

        {/* Live Scroll Progress Pill */}
        <div className={styles.progressIndicator} aria-label={`Scroll progress ${progressPercent}%`}>
          <div className={styles.progressBarTrack}>
            <motion.div
              className={styles.progressBarFill}
              style={{ scaleX: scrollYProgress }}
            />
          </div>
          <span className={styles.progressLabel}>
            PHASE {String(activeStep + 1).padStart(2, '0')}/04 • {progressPercent}%
          </span>
        </div>
      </div>

      {/* ─── INTERACTIVE TIMELINE & 4 MEETING CARDS STAGE ─── */}
      <div className={styles.flowStage}>
        {/* Central S-Curve Follow Scroll Track (Thick Skiper19 Strip) */}
        <div className={styles.svgTrackContainer} aria-hidden="true">
          <svg
            className={styles.svgCurve}
            viewBox="0 0 1000 1200"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* NYX Blue Brand Gradients */}
              <linearGradient id="nyxBlueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1D4ED8" />
                <stop offset="35%" stopColor="#2563EB" />
                <stop offset="70%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>

              <linearGradient id="nyxCoreGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#DBEAFE" />
              </linearGradient>

              {/* Luminous Neon Filter */}
              <filter id="nyxGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Inactive Track Strip (Thick Background Base) */}
            <path
              d="M 500,20 C 500,90 460,100 460,175 C 460,270 540,360 540,465 C 540,560 460,650 460,755 C 460,850 540,940 540,1045 C 540,1120 500,1150 500,1190"
              stroke="rgba(37, 99, 235, 0.08)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Thick Active Glow Strip (strokeWidth 16) */}
            <motion.path
              d="M 500,20 C 500,90 460,100 460,175 C 460,270 540,360 540,465 C 540,560 460,650 460,755 C 460,850 540,940 540,1045 C 540,1120 500,1150 500,1190"
              stroke="url(#nyxBlueGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#nyxGlow)"
              style={{
                pathLength,
                strokeDashoffset,
              }}
            />

            {/* Inner Bright Neon Core Line (strokeWidth 4) */}
            <motion.path
              d="M 500,20 C 500,90 460,100 460,175 C 460,270 540,360 540,465 C 540,560 460,650 460,755 C 460,850 540,940 540,1045 C 540,1120 500,1150 500,1190"
              stroke="url(#nyxCoreGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                pathLength,
                strokeDashoffset,
              }}
            />
          </svg>
        </div>

        {/* 4 Cards Stack with progressive horizontal convergence ("cards meet on scroll") */}
        <div className={styles.cardsStack}>
          {steps.map((step, index) => {
            const isCardActive = activeStep >= index;
            const isLeft = step.side === 'left';
            const transform = cardTransforms[index];

            return (
              <div
                key={step.id}
                className={`${styles.cardRow} ${isLeft ? styles.rowLeft : styles.rowRight}`}
              >
                <motion.div
                  className={styles.cardMotionWrapper}
                  style={{
                    x: transform.x,
                    opacity: transform.opacity,
                    scale: transform.scale,
                  }}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`${styles.stepCard} ${isCardActive ? styles.stepCardActive : ''}`}
                  >
                    <div className={styles.cardGlowOverlay} />

                    {/* Card Meeting Anchor Node (Point where thick stroke meets the card) */}
                    <div
                      className={`${styles.meetingNode} ${isLeft ? styles.nodeLeft : styles.nodeRight}`}
                    >
                      <div className={styles.nodeInnerDot} />
                    </div>

                    {/* Card Top Metadata */}
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIndexGroup}>
                        <div className={styles.cardIconBox}>{step.icon}</div>
                        <div>
                          <div className={styles.cardIndex}>PHASE {step.num}</div>
                          <span className="t-label" style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`${styles.statusPill} ${isCardActive ? styles.statusPillActive : ''}`}
                      >
                        <span className={styles.statusPillDot} />
                        <span>{isCardActive ? 'Connected' : 'Next Stage'}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <h3 className={styles.cardTitle}>{step.title}</h3>
                    <p className={styles.cardDescription}>{step.desc}</p>

                    {/* Tag Deliverables */}
                    <div className={styles.tagsList}>
                      {step.tags.map((tag) => (
                        <span key={tag} className={styles.tagItem}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Key Output Banner */}
                    <div className={styles.outputBanner}>
                      <span className={styles.outputLabel}>Key Deliverable</span>
                      <span className={styles.outputValue}>{step.output}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── BOTTOM PIPELINE SUMMARY & ACTIONS ─── */}
      <div className={styles.bottomActionWrapper}>
        <div className={styles.pipelineSummary}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryVal}>4 Weeks</span>
            <span className={styles.summaryLbl}>Average Sprint</span>
          </div>
          <div className={styles.summarySep} />
          <div className={styles.summaryItem}>
            <span className={styles.summaryVal}>100%</span>
            <span className={styles.summaryLbl}>In-House Craft</span>
          </div>
          <div className={styles.summarySep} />
          <div className={styles.summaryItem}>
            <span className={styles.summaryVal}>99+</span>
            <span className={styles.summaryLbl}>Google PageSpeed</span>
          </div>
        </div>

        <div className={styles.ctaButtons}>
          <Link href="/contact" className={styles.primaryCta}>
            <span>Start a Project</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/work" className={styles.secondaryCta}>
            <span>Explore Case Studies</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
