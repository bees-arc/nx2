'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import styles from './Skiper19HowWeWork.module.css';

/**
 * Skiper19: Svg follow scroll & 4-Card Convergence
 * Refactored to seamlessly match NYX Editorial Minimalist Design System:
 * - Clean dark surface cards matching NYX cards (.whyCard, .serviceCard)
 * - Restrained, elegant NYX Blue stroke connecting the 4 cards on scroll
 * - Editorial typography with standard section labels and buttons
 * - No neon glows, no sci-fi meters, no green pulsing pills
 */

interface StepData {
  id: string;
  num: string;
  duration: string;
  title: string;
  desc: string;
  side: 'left' | 'right';
}

const steps: StepData[] = [
  {
    id: 'discover',
    num: '01',
    duration: 'Days 01–03',
    title: 'Discover',
    desc: 'We learn your business, audience, and goals before touching a pixel — extracting your core value proposition and analyzing competitive landscapes.',
    side: 'left',
  },
  {
    id: 'design',
    num: '02',
    duration: 'Days 04–07',
    title: 'Design',
    desc: 'We craft the visual direction — shaping an unmistakable digital presence with interactive wireframes, modular design systems, and fluid prototypes.',
    side: 'right',
  },
  {
    id: 'build',
    num: '03',
    duration: 'Days 08–11',
    title: 'Build',
    desc: 'We develop the real thing — engineering blazing Next.js platforms with production-grade TypeScript, fluid animations, and headless CMS integrations.',
    side: 'left',
  },
  {
    id: 'launch',
    num: '04',
    duration: 'Days 12–14',
    title: 'Launch',
    desc: 'We deploy, configure analytics, optimize Core Web Vitals to 99+, and stress-test across every device to make sure everything is perfect.',
    side: 'right',
  },
];

export default function Skiper19HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const checkViewport = () => setIsDesktop(window.innerWidth > 991);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 88%', 'end 80%'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.95], [0, 1]);
  const strokeDashoffset = useTransform(pathLength, (value) => 1 - value);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.22) setActiveStep(0);
    else if (latest < 0.48) setActiveStep(1);
    else if (latest < 0.74) setActiveStep(2);
    else setActiveStep(3);
  });

  // Smooth subtle horizontal convergence matching cards
  const card1X = useTransform(scrollYProgress, [0.05, 0.22], isDesktop ? [-40, 0] : [0, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.02, 0.18], [0.4, 1]);

  const card2X = useTransform(scrollYProgress, [0.22, 0.44], isDesktop ? [40, 0] : [0, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.18, 0.38], [0.4, 1]);

  const card3X = useTransform(scrollYProgress, [0.44, 0.66], isDesktop ? [-40, 0] : [0, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.38, 0.58], [0.4, 1]);

  const card4X = useTransform(scrollYProgress, [0.66, 0.88], isDesktop ? [40, 0] : [0, 0]);
  const card4Opacity = useTransform(scrollYProgress, [0.58, 0.8], [0.4, 1]);

  const cardTransforms = [
    { x: card1X, opacity: card1Opacity },
    { x: card2X, opacity: card2Opacity },
    { x: card3X, opacity: card3Opacity },
    { x: card4X, opacity: card4Opacity },
  ];

  // Natural organic Bézier curve starting by the header text and weaving through 4 cards
  const curvyPath =
    'M 670,190 C 820,190 940,240 940,340 C 940,430 840,480 620,530 C 440,570 340,620 340,730 C 340,840 440,890 660,940 C 820,980 940,1030 940,1140 C 940,1250 820,1310 660,1360 C 440,1410 340,1470 340,1580 C 340,1670 420,1720 500,1770';

  return (
    <section ref={containerRef} className={styles.section} id="how-we-work">
      {/* ─── SECTION HEADER (Aligned with NYX Design System) ─── */}
      <div className="container">
        <div className={styles.header}>
          <span className="section-label section-label--dark">Our Approach</span>
          <h2 className="t-h2" style={{ maxWidth: '700px' }}>
            How we work. <br />
            <span style={{ color: 'var(--white, #ffffff)' }}>Built for momentum.</span>
          </h2>
          <p className="t-body-lg" style={{ color: '#8A8A84', maxWidth: '580px', marginTop: '1rem', lineHeight: '1.65' }}>
            Scroll down to experience our synchronized 4-card workflow. The dynamic stroke guides each milestone, connecting strategy to deployment.
          </p>
        </div>
      </div>

      {/* ─── INTERACTIVE TIMELINE & 4 MEETING CARDS ─── */}
      <div className={styles.flowStage}>
        {/* Central S-Curve Follow Scroll Track */}
        <div className={styles.svgTrackContainer} aria-hidden="true">
          <svg
            className={styles.svgCurve}
            viewBox="0 0 1000 1800"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Base Background Track Line */}
            <path
              d={curvyPath}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Active NYX Blue Following Stroke */}
            <motion.path
              d={curvyPath}
              stroke="#2563EB"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                pathLength,
                strokeDashoffset,
              }}
            />
          </svg>
        </div>

        {/* 4 Cards Stack with progressive horizontal meeting on scroll */}
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
                  }}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`${styles.stepCard} ${isCardActive ? styles.stepCardActive : ''}`}
                  >
                    {/* Anchor Dot where stroke meets the card */}
                    <div
                      className={`${styles.meetingNode} ${isLeft ? styles.nodeLeft : styles.nodeRight}`}
                    >
                      <div className={styles.nodeInnerDot} />
                    </div>

                    {/* Card Top Metadata */}
                    <div className={styles.cardHeader}>
                      <span className={styles.cardNum}>{step.num}</span>
                      <span className={styles.cardDuration}>{step.duration}</span>
                    </div>

                    <div className={styles.cardDivider} />

                    {/* Card Content */}
                    <h3 className={styles.cardTitle}>{step.title}</h3>
                    <p className={styles.cardDesc}>{step.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── BOTTOM CTA ─── */}
      <div className="container">
        <div className={styles.bottomCta}>
          <Link href="/process" className="btn btn--outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
            See Full Process →
          </Link>
        </div>
      </div>
    </section>
  );
}
