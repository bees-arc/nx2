'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/data/projects';
import styles from './HoverExpandGallery.module.css';

interface HoverExpandGalleryProps {
  projects: Project[];
}

export default function HoverExpandGallery({ projects }: HoverExpandGalleryProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null); // mobile tap

  const effectiveId = hoveredId ?? activeId;

  return (
    <div
      className={styles.gallery}
      onMouseLeave={() => setHoveredId(null)}
      role="list"
      aria-label="Project showcase gallery"
    >
      {projects.map((project) => {
        const isExpanded = effectiveId === project.slug;

        return (
          <motion.div
            key={project.slug}
            className={`${styles.panel} ${isExpanded ? styles.panelExpanded : ''}`}
            animate={{ flex: isExpanded ? 3.5 : 1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28, mass: 0.9 }}
            onMouseEnter={() => setHoveredId(project.slug)}
            onClick={() =>
              setActiveId(activeId === project.slug ? null : project.slug)
            }
            role="listitem"
            aria-expanded={isExpanded}
            style={
              {
                '--panel-accent': project.accentColor,
                '--panel-bg': project.bgColor,
              } as React.CSSProperties
            }
          >
            {/* Background layer */}
            <div className={styles.panelBg} />

            {/* Browser mockup (always visible, scales) */}
            <div className={styles.mockupWrap}>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.browserUrl}>
                    {project.client.toLowerCase().replace(/\s+/g, '')}.com
                  </div>
                </div>
                <div className={styles.browserBody}>
                  {/* Nav */}
                  <div className={styles.mockNav}>
                    <div
                      className={styles.mockLogo}
                      style={{ background: project.accentColor + 'CC' }}
                    />
                    <div className={styles.mockNavLinks}>
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className={styles.mockNavLink} />
                      ))}
                    </div>
                    <div
                      className={styles.mockNavBtn}
                      style={{ background: project.accentColor }}
                    />
                  </div>

                  {/* Hero */}
                  <div
                    className={styles.mockHero}
                    style={{ background: project.accentColor + '18' }}
                  >
                    <div className={styles.mockHeroText}>
                      <div
                        className={styles.mockLine}
                        style={{
                          width: '65%',
                          height: '18px',
                          background: project.accentColor + 'BB',
                        }}
                      />
                      <div
                        className={styles.mockLine}
                        style={{
                          width: '80%',
                          height: '18px',
                          background: project.accentColor + '77',
                        }}
                      />
                      <div
                        className={styles.mockLine}
                        style={{
                          width: '50%',
                          height: '11px',
                          background: project.accentColor + '44',
                          marginTop: '4px',
                        }}
                      />
                      <div className={styles.mockBtns}>
                        <div
                          className={styles.mockBtn}
                          style={{ background: project.accentColor }}
                        />
                        <div
                          className={styles.mockBtnOut}
                          style={{ borderColor: project.accentColor + '55' }}
                        />
                      </div>
                    </div>
                    <div
                      className={styles.mockHeroImg}
                      style={{ background: project.accentColor + '28' }}
                    />
                  </div>

                  {/* Cards */}
                  <div className={styles.mockCards}>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={styles.mockCard}>
                        <div
                          className={styles.mockCardTop}
                          style={{ background: project.accentColor + '22' }}
                        />
                        <div className={styles.mockLine} style={{ width: '70%', height: '8px' }} />
                        <div className={styles.mockLine} style={{ width: '85%', height: '7px' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsed label (visible when not expanded) */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  className={styles.collapsedLabel}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className={styles.collapsedNum}
                    style={{ color: project.accentColor }}
                  >
                    0{projects.indexOf(project) + 1}
                  </span>
                  <span className={styles.collapsedTitle}>{project.name}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expanded overlay with project info */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className={styles.expandedInfo}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className={styles.expandedTop}>
                    <div className={styles.expandedMeta}>
                      <span
                        className={styles.expandedIndustry}
                        style={{ color: project.accentColor }}
                      >
                        {project.industry}
                      </span>
                      {!project.isLive && (
                        <span className={styles.conceptBadge}>Concept</span>
                      )}
                    </div>
                    <h3 className={styles.expandedTitle}>{project.name}</h3>
                    <p className={styles.expandedTagline}>{project.tagline}</p>
                  </div>

                  <div className={styles.expandedBottom}>
                    <div className={styles.expandedServices}>
                      {project.services.map((s) => (
                        <span key={s} className={styles.serviceTag}>{s}</span>
                      ))}
                    </div>
                    <Link
                      href={`/work/${project.slug}`}
                      className={styles.expandedCta}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Case Study
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7h10M7 2l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover gradient sweep */}
            <div
              className={styles.hoverGlow}
              style={{ background: `radial-gradient(ellipse 60% 80% at 50% 100%, ${project.accentColor}18 0%, transparent 70%)` }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
