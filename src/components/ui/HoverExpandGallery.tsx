'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/data/projects';
import styles from './HoverExpandGallery.module.css';

interface HoverExpandGalleryProps {
  projects: Project[];
}

// Minimal browser-window mockup inside each panel
function PanelMockup({ project }: { project: Project }) {
  const { mockPalette } = project;
  return (
    <div className={styles.mockup} style={{ background: mockPalette.surface }}>
      {/* Nav bar */}
      <div className={styles.mockNav} style={{ borderBottom: `1px solid ${mockPalette.primary}18` }}>
        <div className={styles.mockLogo} style={{ background: mockPalette.primary }} />
        <div className={styles.mockNavRight}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className={styles.mockNavLink} style={{ background: mockPalette.text + '22' }} />
          ))}
          <div className={styles.mockNavCta} style={{ background: mockPalette.primary }} />
        </div>
      </div>

      {/* Hero area */}
      <div className={styles.mockHero} style={{ background: mockPalette.primary + '0E' }}>
        <div className={styles.mockHeroLeft}>
          <div className={styles.mockHL} style={{ width: '72%', height: 22, background: mockPalette.primary + 'CC' }} />
          <div className={styles.mockHL} style={{ width: '88%', height: 22, background: mockPalette.primary + '88' }} />
          <div className={styles.mockHL} style={{ width: '55%', height: 13, background: mockPalette.primary + '44', marginTop: 6 }} />
          <div className={styles.mockBtns}>
            <div className={styles.mockBtn} style={{ background: mockPalette.primary }} />
            <div className={styles.mockBtnOut} style={{ border: `1.5px solid ${mockPalette.primary}55` }} />
          </div>
        </div>
        <div className={styles.mockHeroImg} style={{ background: mockPalette.primary + '28' }}>
          <div className={styles.mockImgAccent} style={{ background: mockPalette.secondary + '60' }} />
        </div>
      </div>

      {/* Cards row */}
      <div className={styles.mockCards}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className={styles.mockCard} style={{ background: mockPalette.primary + '08' }}>
            <div className={styles.mockCardTop} style={{ background: mockPalette.secondary + '33' }} />
            <div className={styles.mockHL} style={{ width: '65%', height: 9, background: mockPalette.text + '33' }} />
            <div className={styles.mockHL} style={{ width: '80%', height: 7, background: mockPalette.text + '1A' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HoverExpandGallery({ projects }: HoverExpandGalleryProps) {
  const [activeSlug, setActiveSlug] = useState<string>(projects[0]?.slug ?? '');

  return (
    <div className={styles.gallery} role="list" aria-label="Project gallery">
      {projects.map((project, index) => {
        const isActive = activeSlug === project.slug;

        return (
          <motion.article
            key={project.slug}
            className={`${styles.panel} ${isActive ? styles.panelActive : ''}`}
            animate={{ flex: isActive ? 4.5 : 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30, mass: 1 }}
            onMouseEnter={() => setActiveSlug(project.slug)}
            onClick={() => setActiveSlug(project.slug)}
            role="listitem"
            aria-label={project.name}
          >
            {/* ── COLLAPSED STATE: vertical rotated label ── */}
            <AnimatePresence>
              {!isActive && (
                <motion.div
                  className={styles.collapsedContent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <span className={styles.collapsedIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.collapsedName}>{project.name}</span>
                  <span className={styles.collapsedIndustry}>{project.industry}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── EXPANDED STATE: full content ── */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className={styles.expandedContent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: 0.08 }}
                >
                  {/* Year label — left side, rotated */}
                  <div className={styles.yearLabel}>{project.year}</div>

                  {/* Main visual mockup */}
                  <div className={styles.visualArea}>
                    <PanelMockup project={project} />
                    {!project.isLive && (
                      <div className={styles.conceptSticker}>
                        <span>Concept</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom info bar */}
                  <div className={styles.infoBar}>
                    <div className={styles.infoLeft}>
                      <p className={styles.infoIndustry}>{project.industry}</p>
                      <h3 className={styles.infoName}>{project.name}</h3>
                      <p className={styles.infoTagline}>{project.tagline}</p>
                    </div>
                    <div className={styles.infoRight}>
                      <div className={styles.infoServices}>
                        {project.services.map((s) => (
                          <span key={s} className={styles.serviceChip}>{s}</span>
                        ))}
                      </div>
                      <Link
                        href={`/work/${project.slug}`}
                        className={styles.cta}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Case Study
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </div>
  );
}
