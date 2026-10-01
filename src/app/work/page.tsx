import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/projects';
import WorkProjectsGrid from '@/components/work/WorkProjectsGrid';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Work — Selected Projects & Case Studies | NYX',
  description:
    'Explore our collection of 17 digital products, Next.js web platforms, and UI/UX design systems engineered for high-growth businesses.',
};

const studioMetrics = [
  { val: '17', label: 'Engineered Releases' },
  { val: '99+', label: 'Average PageSpeed' },
  { val: '2 Wks', label: 'Average Sprint' },
  { val: '100%', label: 'In-House Craft' },
];

export default function WorkPage() {
  return (
    <>
      {/* ─── HERO HEADER ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Portfolio & Case Studies</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            Selected work.<br />
            <em className={styles.heroItalic}>Built to perform.</em>
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            Every engagement starts with commercial clarity and finishes with technical excellence.
            Explore our curated work across corporate platforms, Web3, design systems, and modern web apps.
          </p>

          {/* Studio Metrics Row */}
          <div className={`${styles.heroStats} animate-fade-up animate-fade-up-delay-3`}>
            {studioMetrics.map((stat) => (
              <div key={stat.label} className={styles.heroStatItem}>
                <span className={styles.heroStatNum}>{stat.val}</span>
                <span className={styles.heroStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE PROJECTS CARDS GRID (DARK CANVAS) ─── */}
      <section className={styles.projectsSection}>
        <div className="container">
          <WorkProjectsGrid projects={projects} />
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="section section--off">
        <div className="container--narrow">
          <div className={styles.bottomCta}>
            <span className="section-label">Start a Project</span>
            <h2 className="t-h2 reveal">
              Ready to elevate your digital presence?
            </h2>
            <p className="t-body-lg text-muted reveal reveal-delay-1" style={{ maxWidth: '520px' }}>
              We take on a limited number of clients per sprint to guarantee undivided focus and precision execution.
            </p>
            <div className="reveal reveal-delay-2">
              <Link href="/contact" className="btn btn--primary btn--lg">
                Book a Discovery Call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
