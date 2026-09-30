'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import Link from 'next/link';
import styles from './HoverMemberServices.module.css';

export interface ServiceItem {
  id: string;
  name: string;
  shortName?: string;
  num: string;
  image: string;
  desc: string;
  tags: string[];
  href: string;
}

const defaultServices: ServiceItem[] = [
  {
    id: 'web-design',
    num: '01',
    name: 'WEBSITE DESIGN',
    shortName: 'Design',
    image: '/images/services/web_design.jpg',
    desc: 'Marketing sites, corporate platforms, and landing pages designed to communicate value and convert visitors.',
    tags: ['Marketing Sites', 'Landing Pages', 'Redesigns', 'Corporate'],
    href: '/services#design',
  },
  {
    id: 'development',
    num: '02',
    name: 'WEB DEVELOPMENT',
    shortName: 'Dev',
    image: '/images/services/web_dev.jpg',
    desc: 'Cutting-edge Next.js builds that are lightning fast, responsive, and SEO-ready from day one.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'APIs'],
    href: '/services#development',
  },
  {
    id: 'ui-ux',
    num: '03',
    name: 'UI/UX DESIGN',
    shortName: 'UI/UX',
    image: '/images/services/uiux_design.jpg',
    desc: 'Research-backed interfaces — wireframes, prototypes, design systems, and delightful digital journeys.',
    tags: ['UX Research', 'Wireframing', 'Design Systems', 'Prototypes'],
    href: '/services#uiux',
  },
  {
    id: 'motion-3d',
    num: '04',
    name: 'MOTION & 3D',
    shortName: '3D & Motion',
    image: '/images/services/img4.png',
    desc: 'WebGL, Three.js shaders, and interactive micro-animations that turn casual visitors into loyal fans.',
    tags: ['Three.js', 'WebGL', 'Framer Motion', 'Micro-interactions'],
    href: '/services#motion',
  },
  {
    id: 'ecommerce',
    num: '05',
    name: 'E-COMMERCE',
    shortName: 'Commerce',
    image: '/images/services/img5.png',
    desc: 'High-conversion storefronts engineered for fast checkout, seamless payments, and repeat sales.',
    tags: ['Shopify', 'Headless', 'CRO', 'Stripe Integration'],
    href: '/services#ecommerce',
  },
  {
    id: 'design-systems',
    num: '06',
    name: 'DESIGN SYSTEMS',
    shortName: 'Systems',
    image: '/images/services/img6.png',
    desc: 'Modular design tokens, reusable component libraries, and scalable UI guidelines for fast shipping.',
    tags: ['Tokens', 'Component Library', 'Figma Tokens', 'Scale'],
    href: '/services#uiux',
  },
  {
    id: 'seo-speed',
    num: '07',
    name: 'SPEED & SEO',
    shortName: 'Vitals',
    image: '/images/services/img7.png',
    desc: 'Perfect 100/100 Core Web Vitals, sub-second load times, and technical search architecture.',
    tags: ['Core Web Vitals', 'Technical SEO', 'CDN Edge', 'Audit'],
    href: '/services#seo',
  },
  {
    id: 'mobile',
    num: '08',
    name: 'MOBILE BUILDS',
    shortName: 'Mobile',
    image: '/images/services/img8.png',
    desc: 'Mobile-first PWA experiences designed with tactile touch feedback and thumb-friendly UX.',
    tags: ['PWA', 'Touch Gestures', 'Mobile UI', 'Offline First'],
    href: '/services#mobile',
  },
];

// Spring physics matching authentic Skiper6
const springConfig = { mass: 0.1, damping: 16, stiffness: 71 };
const scaleSpringConfig = { mass: 0.1, damping: 10, stiffness: 150 };

interface HoverMemberServicesProps {
  services?: ServiceItem[];
  defaultName?: string;
  backgroundColor?: string;
  hoverTextColor?: string;
  cursorColor?: string;
}

export default function HoverMemberServices({
  services = defaultServices,
  defaultName = 'SERVICES',
  backgroundColor = '#121212',
  hoverTextColor = '#EF4444',
  cursorColor = '#EF4444',
}: HoverMemberServicesProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Magnetic cursor springs
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);
  const cursorScale = useSpring(0, scaleSpringConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getDelay = (index: number, total: number) => {
    return 0.045 * Math.abs(index - Math.floor(total / 2));
  };

  const letterVariantsIn = {
    hidden: { y: '100%' },
    visible: { y: '0%' },
    exit: { y: '-100%' },
  };

  const letterVariantsDefault = {
    hidden: { y: '-100%' },
    visible: { y: '0%' },
    exit: { y: '0%' },
  };

  if (!mounted) {
    return <section className={styles.sectionPlaceholder} style={{ backgroundColor }} />;
  }

  const activeService = hoveredIdx !== null ? services[hoveredIdx] : null;

  return (
    <section className={styles.skiper6Section} style={{ backgroundColor }}>
      {/* ─── SECTION SUB-HEADER (Top label) ─── */}
      <div className={styles.sectionTop}>
        <div className={styles.sectionBadge}>
          <span className={styles.badgePulse} />
          <span>WHAT WE DO</span>
        </div>
        <p className={styles.sectionSubtitle}>
          Hover any service to reveal our capabilities
        </p>
      </div>

      {/* ─── INTERACTIVE AVATAR ROW & MAGNETIC FOLLOWER ─── */}
      <div
        ref={containerRef}
        className={styles.avatarsWrapper}
        onPointerMove={(e) => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const n = e.clientX - rect.left;
            const r = e.clientY - rect.top;
            mouseX.set(n);
            mouseY.set(r);
          }
        }}
        onPointerEnter={() => cursorScale.set(1)}
        onPointerLeave={() => cursorScale.set(0)}
      >
        {services.map((item, index) => {
          const isItemHovered = hoveredIdx === index;

          return (
            <motion.div
              key={item.id}
              className={styles.avatarCard}
              animate={{
                width: isItemHovered ? 120 : 64,
                height: isItemHovered ? 120 : 64,
              }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onHoverStart={() => setHoveredIdx(index)}
              onHoverEnd={() => setHoveredIdx(null)}
              onClick={() => setHoveredIdx(isItemHovered ? null : index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.name}
                className={styles.avatarImg}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.includes('img1.png')) {
                    target.src = '/images/services/img1.png';
                  }
                }}
              />
              <div className={styles.avatarOverlay}>
                <span className={styles.avatarNum}>{item.num}</span>
              </div>
            </motion.div>
          );
        })}

        {/* Magnetic follower arrow */}
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            scale: cursorScale,
            transformOrigin: 'left top',
            backgroundColor: cursorColor,
          }}
          className={styles.magneticCursor}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.52182 2.75026L12.8858 9.11422L15.253 0.38299L6.52182 2.75026Z"
              fill="white"
            />
            <path
              d="M0.333095 12.3331L3.30294 15.3029L10.3402 6.56864L9.0674 5.29585L0.333095 12.3331Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </div>

      {/* ─── MASSIVE STAGGERED TYPOGRAPHY (Skiper6 exact effect) ─── */}
      <div className={styles.typographyViewport}>
        <AnimatePresence mode="wait">
          {hoveredIdx === null ? (
            <motion.div
              key="default"
              className={styles.titleWrap}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <h2 className={`${styles.mainTitle} ${styles.defaultTitle}`}>
                {Array.from(defaultName).map((char, i) => (
                  <motion.span
                    key={i}
                    className={styles.charSpan}
                    variants={letterVariantsDefault}
                    transition={{
                      duration: 0.7,
                      ease: [0.19, 1, 0.22, 1],
                      delay: getDelay(i, defaultName.length),
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>
          ) : (
            <motion.div
              key={services[hoveredIdx].id}
              className={styles.titleWrap}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <h2
                className={`${styles.mainTitle} ${styles.hoverTitle}`}
                style={{ color: hoverTextColor }}
              >
                {Array.from(services[hoveredIdx].name).map((char, i) => (
                  <motion.span
                    key={i}
                    className={styles.charSpan}
                    variants={letterVariantsIn}
                    transition={{
                      duration: 0.7,
                      ease: [0.19, 1, 0.22, 1],
                      delay: getDelay(i, services[hoveredIdx].name.length),
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── ACTIVE SERVICE DETAIL DRAWER / META ─── */}
      <div className={styles.serviceMetaBar}>
        <AnimatePresence mode="wait">
          {activeService ? (
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={styles.metaContent}
            >
              <div className={styles.metaLeft}>
                <span className={styles.metaNum}>{activeService.num}</span>
                <p className={styles.metaDesc}>{activeService.desc}</p>
              </div>

              <div className={styles.metaRight}>
                <div className={styles.metaTags}>
                  {activeService.tags.map((t) => (
                    <span key={t} className={styles.metaTag}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={activeService.href} className={styles.metaLink}>
                  Explore details →
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.metaPlaceholder}
            >
              <span>{services.length} Specialized Capabilities</span>
              <span className={styles.hintDot}>•</span>
              <span>Next.js • UI/UX • Motion & 3D • Performance</span>
              <span className={styles.hintDot}>•</span>
              <Link href="/services" className={styles.viewAllLink}>
                View All Services →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
