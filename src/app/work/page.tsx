import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected work by NYX — websites and UI/UX experiences built with purpose. View case studies across professional services, hospitality, construction, and more.',
};

const filters = ['All', 'Business', 'Corporate', 'UI/UX'];

export default function WorkPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Portfolio</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            Selected work.<br />
            <em className={styles.heroItalic}>Built with purpose.</em>
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            Every project starts with a problem and ends with a result.
            Here's a selection of what we've built.
          </p>
        </div>
      </section>

      {/* ─── FILTER NOTE ─── */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterRow}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${f === 'All' ? styles.filterBtnActive : ''}`}
                data-filter={f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECT GRID ─── */}
      <section className={`section ${styles.workSection}`}>
        <div className="container">
          <div className={styles.projectGrid}>
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`${styles.projectCard} ${i === 0 ? styles.projectCardHero : ''} reveal`}
                style={{ '--accent': project.accentColor, '--bg': project.bgColor } as React.CSSProperties}
              >
                {/* Visual */}
                <div className={styles.projectCardVisual}>
                  <div className={styles.projectBrowserFrame}>
                    <div className={styles.projectBrowserBar}>
                      <div className={styles.projectBrowserDots}>
                        <span /><span /><span />
                      </div>
                      <div className={styles.projectBrowserUrl}>{project.client.toLowerCase().replace(/\s+/g, '')}.com</div>
                    </div>
                    <div className={styles.projectBrowserBody}>
                      <div className={styles.projectHeroMock} style={{ background: `${project.accentColor}18` }}>
                        <div className={styles.projectMockLines}>
                          <div className={styles.projectMockLine} style={{ width: '55%', background: `${project.accentColor}99`, height: '20px' }} />
                          <div className={styles.projectMockLine} style={{ width: '75%', background: `${project.accentColor}55`, height: '20px' }} />
                          <div className={styles.projectMockLine} style={{ width: '40%', background: `${project.accentColor}33`, height: '14px' }} />
                        </div>
                        <div className={styles.projectMockBtns}>
                          <div className={styles.projectMockBtn} style={{ background: project.accentColor }} />
                          <div className={styles.projectMockBtnOut} style={{ borderColor: `${project.accentColor}44` }} />
                        </div>
                      </div>
                      <div className={styles.projectMockContent}>
                        <div className={styles.projectMockRow}>
                          {[...Array(3)].map((_, j) => (
                            <div key={j} className={styles.projectMockCard}>
                              <div className={styles.projectMockCardTop} style={{ background: `${project.accentColor}22` }} />
                              <div className={styles.projectMockLine} style={{ width: '70%', height: '10px' }} />
                              <div className={styles.projectMockLine} style={{ width: '90%', height: '8px' }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {!project.isLive && (
                    <div className={styles.conceptOverlay}>
                      <span className={styles.conceptTag}>Concept / Case Study</span>
                    </div>
                  )}
                  <div className={styles.projectHoverOverlay}>
                    <span className={styles.projectCta}>View Case Study →</span>
                  </div>
                </div>

                {/* Info */}
                <div className={styles.projectCardInfo}>
                  <div className={styles.projectCardTop}>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectIndustry}>{project.industry}</span>
                      <span className={styles.projectYear}>{project.year}</span>
                    </div>
                    {!project.isLive && (
                      <span className={styles.conceptBadge}>Concept</span>
                    )}
                  </div>
                  <h2 className={`${i === 0 ? 't-h3' : 't-h4'} ${styles.projectName}`}>{project.name}</h2>
                  <p className={`t-small ${styles.projectTagline}`}>{project.tagline}</p>
                  <div className={styles.projectServices}>
                    {project.services.map((s) => (
                      <span key={s} className={styles.serviceTag}>{s}</span>
                    ))}
                  </div>
                  <div className={styles.projectLink}>
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="section section--off">
        <div className="container--narrow">
          <div className={styles.bottomCta}>
            <span className="section-label">Ready?</span>
            <h2 className={`t-h2 reveal`}>
              Your project could be next.
            </h2>
            <p className={`t-body-lg text-muted reveal reveal-delay-1`} style={{ maxWidth: '480px' }}>
              Every great result starts with a conversation.
              Tell us about your project and let's see what we can build together.
            </p>
            <div className={`reveal reveal-delay-2`}>
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
