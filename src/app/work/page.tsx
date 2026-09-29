import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/projects';
import HoverExpandGallery from '@/components/ui/HoverExpandGallery';
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

      {/* ─── PROJECT GALLERY (Skiper35 hover-expand) ─── */}
      <section className={`${styles.workSection}`}>
        <HoverExpandGallery projects={projects} />
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
