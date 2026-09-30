'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/data/projects';
import styles from './HoverExpandGallery.module.css';

interface HoverExpandGalleryProps {
  projects: Project[];
}

// Generative artistic card visual matching the skiper35 editorial aesthetic
function ProjectCardVisual({ project }: { project: Project }) {
  const { mockPalette } = project;

  return (
    <div className={styles.cardVisual} style={{ background: mockPalette.surface }}>
      {/* Background artwork */}
      <svg className={styles.cardSvg} viewBox="0 0 280 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`grad-${project.slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={mockPalette.primary} stopOpacity="0.9" />
            <stop offset="100%" stopColor={mockPalette.secondary} stopOpacity="0.85" />
          </linearGradient>
          <pattern id={`grid-${project.slug}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="0" stroke={mockPalette.text} strokeOpacity="0.06" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="20" stroke={mockPalette.text} strokeOpacity="0.06" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Ambient Grid */}
        <rect width="280" height="500" fill={`url(#grid-${project.slug})`} />

        {/* Tailored SVG Art Composition per project style */}
        {project.industry.includes('Architecture') || project.industry.includes('Design') ? (
          <g opacity="0.9">
            <rect x="35" y="70" width="150" height="320" stroke={mockPalette.primary} strokeWidth="1.5" />
            <rect x="75" y="120" width="150" height="280" stroke={mockPalette.secondary} strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="35" y1="230" x2="225" y2="230" stroke={mockPalette.primary} strokeWidth="1.5" />
            <circle cx="150" cy="180" r="42" fill={mockPalette.secondary} fillOpacity="0.25" />
          </g>
        ) : project.industry.includes('Wellness') || project.industry.includes('Luxury') || project.industry.includes('Food') ? (
          <g opacity="0.85">
            {/* Elegant botanical / floral curve silhouettes inspired by skiper35 */}
            <path d="M140 450 C 135 300, 80 220, 70 120 C 60 70, 100 40, 140 100 C 180 40, 220 70, 210 120 C 200 220, 145 300, 140 450 Z" fill={`url(#grad-${project.slug})`} />
            <path d="M140 450 C 120 330, 40 280, 50 190 C 60 140, 110 150, 140 210" stroke={mockPalette.primary} strokeWidth="2" fill="none" />
            <path d="M140 450 C 160 330, 240 280, 230 190 C 220 140, 170 150, 140 210" stroke={mockPalette.secondary} strokeWidth="2" fill="none" />
            <circle cx="140" cy="90" r="14" fill={mockPalette.secondary} />
          </g>
        ) : project.industry.includes('Aerospace') || project.industry.includes('Automotive') ? (
          <g opacity="0.9">
            <ellipse cx="140" cy="220" rx="105" ry="38" stroke={mockPalette.primary} strokeWidth="1.5" transform="rotate(-25 140 220)" />
            <ellipse cx="140" cy="220" rx="105" ry="38" stroke={mockPalette.secondary} strokeWidth="1.5" transform="rotate(25 140 220)" />
            <circle cx="140" cy="220" r="32" fill={`url(#grad-${project.slug})`} />
            <line x1="20" y1="360" x2="260" y2="360" stroke={mockPalette.primary} strokeWidth="1" strokeDasharray="3 3" />
          </g>
        ) : (
          <g opacity="0.85">
            <circle cx="140" cy="200" r="70" stroke={mockPalette.primary} strokeWidth="1.5" />
            <circle cx="140" cy="200" r="42" stroke={mockPalette.secondary} strokeWidth="1.5" strokeDasharray="4 4" />
            <rect x="75" y="135" width="130" height="130" stroke={mockPalette.primary} strokeWidth="1" transform="rotate(45 140 200)" />
            <circle cx="140" cy="200" r="16" fill={`url(#grad-${project.slug})`} />
          </g>
        )}

        {/* Minimal metadata watermark on card */}
        <text x="24" y="435" fill={mockPalette.text} fillOpacity="0.45" fontSize="10" fontFamily="var(--font)" fontWeight="600" letterSpacing="0.1em">
          {project.industry.toUpperCase()}
        </text>
        <text x="24" y="462" fill={mockPalette.text} fillOpacity="0.95" fontSize="17" fontFamily="var(--font)" fontWeight="800" letterSpacing="-0.02em">
          {project.name}
        </text>
      </svg>

      {/* Floating CTA Overlay */}
      <div className={styles.cardOverlay}>
        <div className={styles.cardOverlayTop}>
          <span className={styles.industryBadge}>{project.industry}</span>
        </div>
        <div className={styles.cardOverlayBottom}>
          <p className={styles.cardTagline}>{project.tagline}</p>
          <Link
            href={`/work/${project.slug}`}
            className={styles.caseStudyBtn}
            onClick={(e) => e.stopPropagation()}
          >
            <span>View Case Study</span>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HoverExpandGallery({ projects }: HoverExpandGalleryProps) {
  const [activeSlug, setActiveSlug] = useState<string>(projects[0]?.slug ?? '');
  const galleryRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Record<string, HTMLElement | null>>({});

  const currentIndex = projects.findIndex((p) => p.slug === activeSlug);

  const selectProject = (slug: string) => {
    setActiveSlug(slug);
    const el = panelRefs.current[slug];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    selectProject(projects[prevIdx].slug);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % projects.length;
    selectProject(projects[nextIdx].slug);
  };

  return (
    <div className={styles.shelfContainer}>
      {/* Top shelf ambient shadow */}
      <div className={styles.shelfTopShadow} aria-hidden="true" />

      <div className={styles.galleryWrapper}>
        {/* Floating HUD navigation pill */}
        <div className={styles.galleryNav}>
          <button
            onClick={handlePrev}
            aria-label="Previous book"
            className={styles.navBtn}
          >
            ‹
          </button>
          <span className={styles.navCount}>
            {String(Math.max(1, currentIndex + 1)).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <button
            onClick={handleNext}
            aria-label="Next book"
            className={styles.navBtn}
          >
            ›
          </button>
        </div>

        <div
          ref={galleryRef}
          className={styles.gallery}
          role="list"
          aria-label="Project bookshelf"
        >
          {projects.map((project, index) => {
            const isActive = activeSlug === project.slug;

            return (
              <motion.article
                key={project.slug}
                ref={(el) => {
                  panelRefs.current[project.slug] = el;
                }}
                className={`${styles.panel} ${styles.bookSpine} ${isActive ? styles.panelActive : ''}`}
                animate={{
                  flexGrow: isActive ? 0 : 1,
                  flexShrink: 0,
                  flexBasis: isActive ? 360 : 54,
                  y: isActive ? -10 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onMouseEnter={() => selectProject(project.slug)}
                onClick={() => selectProject(project.slug)}
                role="listitem"
                aria-label={project.name}
              >
                {/* Book spine fabric bookmark ribbon */}
                <div
                  className={styles.spineRibbon}
                  style={{ background: project.mockPalette.primary }}
                  aria-hidden="true"
                />

                {/* ── COLLAPSED STATE: Book Spine sitting on shelf ── */}
                {!isActive && (
                  <div className={styles.collapsedContent}>
                    <div className={styles.spineTopMeta}>
                      <span className={styles.spineIndex}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className={styles.spineBands} />
                    </div>
                    <div className={styles.spineTitleWrap}>
                      <span className={styles.collapsedName}>{project.name}</span>
                    </div>
                    <div className={styles.spineBottomBands} />
                  </div>
                )}

                {/* ── EXPANDED STATE: Book pulled out from shelf ── */}
                {isActive && (
                  <div className={styles.expandedWrapper}>
                    {/* Left vertical spine strip: Year at top, Project Name at bottom */}
                    <div className={styles.activeLeftStrip}>
                      <div className={styles.activeTopMeta}>
                        <span className={styles.activeYear}>{project.year}</span>
                        <span className={styles.activeVol}>№ {String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <span className={styles.activeName}>{project.name}</span>
                    </div>

                    {/* Right book cover card with artwork */}
                    <div className={styles.cardContainer}>
                      <ProjectCardVisual project={project} />
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Physical Bookshelf Plank / Ledge */}
      <div className={styles.shelfPlank} aria-hidden="true">
        <div className={styles.shelfHighlight} />
        <div className={styles.shelfFace} />
        <div className={styles.shelfUnderShadow} />
      </div>
    </div>
  );
}
