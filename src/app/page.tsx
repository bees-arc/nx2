import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';
import HoverExpandGallery from '@/components/ui/HoverExpandGallery';
import styles from './page.module.css';

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroLabel}>
            <span className={`section-label animate-fade-up`}>
              Website Design &amp; UI/UX Studio
            </span>
          </div>
          <h1 className={`t-display ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            We build digital<br />
            <em className={styles.heroItalic}>experiences</em> that turn<br />
            attention into action.
          </h1>
          <p className={`t-body-lg ${styles.heroSub} animate-fade-up animate-fade-up-delay-2`}>
            NYX crafts websites and UI/UX that make businesses look credible,
            communicate clearly, and convert visitors into clients.
          </p>
          <div className={`${styles.heroCtas} animate-fade-up animate-fade-up-delay-3`}>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Start a Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/work" className="btn btn--outline btn--lg">
              View Our Work
            </Link>
          </div>
          <div className={`${styles.heroStats} animate-fade-up animate-fade-up-delay-4`}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>Industries served</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Custom builds</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>0</span>
              <span className={styles.statLabel}>Generic templates</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={`${styles.heroVisual} animate-fade-up animate-fade-up-delay-3`}>
          <div className={styles.browserFrame}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots}>
                <span /><span /><span />
              </div>
              <div className={styles.browserUrl}>nyxstudio.co</div>
            </div>
            <div className={styles.browserContent}>
              <div className={styles.mockHero}>
                <div className={styles.mockHeroText}>
                  <div className={styles.mockLine} style={{ width: '70%', height: '32px' }} />
                  <div className={styles.mockLine} style={{ width: '55%', height: '32px' }} />
                  <div className={styles.mockLine} style={{ width: '80%', height: '16px', marginTop: '1rem' }} />
                  <div className={styles.mockLine} style={{ width: '65%', height: '16px' }} />
                  <div className={styles.mockButtons}>
                    <div className={styles.mockBtn} />
                    <div className={styles.mockBtnOutline} />
                  </div>
                </div>
                <div className={styles.mockHeroImg} />
              </div>
              <div className={styles.mockCards}>
                <div className={styles.mockCard}>
                  <div className={styles.mockCardIcon} />
                  <div className={styles.mockLine} style={{ width: '60%', height: '12px' }} />
                  <div className={styles.mockLine} style={{ width: '80%', height: '10px' }} />
                </div>
                <div className={styles.mockCard}>
                  <div className={styles.mockCardIcon} />
                  <div className={styles.mockLine} style={{ width: '55%', height: '12px' }} />
                  <div className={styles.mockLine} style={{ width: '70%', height: '10px' }} />
                </div>
                <div className={styles.mockCard}>
                  <div className={styles.mockCardIcon} />
                  <div className={styles.mockLine} style={{ width: '65%', height: '12px' }} />
                  <div className={styles.mockLine} style={{ width: '75%', height: '10px' }} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.floatingBadge} style={{ top: '12%', right: '-5%' }}>
            <div className={styles.badgeDot} />
            <span>Conversion-focused</span>
          </div>
          <div className={styles.floatingBadge} style={{ bottom: '18%', left: '-6%' }}>
            <div className={styles.badgeDot} style={{ background: '#10B981' }} />
            <span>Performance-first</span>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className={styles.marqueSet}>
              {['Website Design', 'UI/UX', 'Next.js Development', 'Conversion Design', 'Brand Presence', 'Digital Strategy', 'Responsive Builds', 'Custom Experiences'].map((t) => (
                <span key={t} className={styles.marqueeItem}>
                  <span className={styles.marqueeDot} />
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── WHAT NYX DOES ─── */}
      <section className="section section--off">
        <div className="container">
          <div className={styles.servicesHeader}>
            <div>
              <span className="section-label">What we do</span>
              <h2 className="t-h2">Three things.<br />Done exceptionally.</h2>
            </div>
            <p className={`t-body-lg ${styles.servicesSubtitle}`}>
              We don't spread thin across every digital service. We focus on what
              we're best at — and deliver at a level that generic agencies can't match.
            </p>
          </div>

          <div className={styles.serviceCards}>
            {[
              {
                num: '01',
                title: 'Website Design',
                desc: 'Marketing sites, business websites, landing pages, and corporate platforms — designed to communicate your value and convert visitors.',
                href: '/services#design',
                tags: ['Marketing Sites', 'Landing Pages', 'Redesigns', 'Corporate'],
              },
              {
                num: '02',
                title: 'Website Development',
                desc: 'Next.js builds that are fast, responsive, and SEO-ready from day one. Every line of code serves a purpose.',
                href: '/services#development',
                tags: ['Next.js', 'CMS Integration', 'Performance', 'Analytics'],
              },
              {
                num: '03',
                title: 'UI/UX Design',
                desc: 'Research-backed interfaces — from wireframes to high-fidelity design systems. Experiences that users actually enjoy.',
                href: '/services#uiux',
                tags: ['UX Research', 'Wireframes', 'Design Systems', 'Prototypes'],
              },
            ].map((s) => (
              <div key={s.num} className={`${styles.serviceCard} reveal`}>
                <div className={styles.serviceCardNum}>{s.num}</div>
                <h3 className={`t-h4 ${styles.serviceCardTitle}`}>{s.title}</h3>
                <p className={`t-body ${styles.serviceCardDesc}`}>{s.desc}</p>
                <div className={styles.serviceCardTags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                <Link href={s.href} className={`btn btn--ghost ${styles.serviceCardLink}`}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORK ─── */}
      <section className="section">
        <div className="container">
          <div className={styles.workHeader}>
            <div>
              <span className="section-label">Selected Work</span>
              <h2 className="t-h2">Built with purpose.</h2>
            </div>
            <Link href="/work" className="btn btn--outline">
              View All Work →
            </Link>
          </div>

          {/* Skiper35-style hover-expand gallery */}
          <HoverExpandGallery projects={featured} />
        </div>
      </section>

      {/* ─── WHY NYX ─── */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.whyHeader}>
            <span className="section-label section-label--dark">Why NYX</span>
            <h2 className="t-h2" style={{ maxWidth: '640px' }}>
              Not just another agency.<br />A different way of thinking.
            </h2>
          </div>
          <div className={styles.whyGrid}>
            {[
              {
                icon: '◎',
                title: 'Business-first design',
                desc: 'Every design decision is tied to a business goal — not just aesthetics.',
              },
              {
                icon: '◈',
                title: 'Custom experiences',
                desc: 'No templates. No shortcuts. Every project is built specifically for you.',
              },
              {
                icon: '◉',
                title: 'Conversion-focused thinking',
                desc: 'We design for visitors to take action — not just to look at the page.',
              },
              {
                icon: '◐',
                title: 'Modern development',
                desc: 'Next.js, performance-optimised, SEO-ready. Built for today\'s standards.',
              },
              {
                icon: '◑',
                title: 'Responsive by default',
                desc: 'Every build is mobile-first. Always. Not as an afterthought.',
              },
              {
                icon: '◒',
                title: 'Performance-focused delivery',
                desc: 'Fast sites rank better and convert more. Speed is a feature.',
              },
            ].map((item, i) => (
              <div key={item.title} className={`${styles.whyCard} reveal reveal-delay-${(i % 3) + 1}`}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <h3 className={`t-h4 ${styles.whyCardTitle}`}>{item.title}</h3>
                <p className={`t-small ${styles.whyCardDesc}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR APPROACH ─── */}
      <section className="section">
        <div className="container">
          <div className={styles.approachHeader}>
            <span className="section-label">Our Approach</span>
            <h2 className="t-h2">How we work.</h2>
            <p className="t-body-lg text-muted" style={{ maxWidth: '540px', marginTop: '1rem' }}>
              Simple, structured, and always moving forward.
            </p>
          </div>
          <div className={styles.approachSteps}>
            {[
              { num: '01', label: 'Discover', desc: 'We learn your business, audience, and goals before touching a pixel.' },
              { num: '02', label: 'Design', desc: 'We craft the visual direction — layouts, hierarchy, and every detail.' },
              { num: '03', label: 'Build', desc: 'We develop the real thing — fast, responsive, and production-ready.' },
              { num: '04', label: 'Launch', desc: 'We deploy, configure analytics, and make sure everything is perfect.' },
            ].map((step, i) => (
              <div key={step.num} className={`${styles.approachStep} reveal reveal-delay-${i + 1}`}>
                <div className={styles.approachNum}>{step.num}</div>
                <div className={styles.approachLine} />
                <h3 className={`t-h4 ${styles.approachLabel}`}>{step.label}</h3>
                <p className={`t-small ${styles.approachDesc}`}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.approachCta} reveal`}>
            <Link href="/process" className="btn btn--outline">
              See Full Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="section section--light-gray">
        <div className="container">
          <div className={styles.industriesHeader}>
            <span className="section-label">Industries</span>
            <h2 className="t-h2">Who we build for.</h2>
          </div>
          <div className={styles.industriesList}>
            {[
              'Professional Services',
              'Construction & Trades',
              'Restaurants & Hospitality',
              'Agencies',
              'Startups',
              'Local Businesses',
              'Growing Brands',
            ].map((industry) => (
              <div key={industry} className={`${styles.industryItem} reveal`}>
                <span className={styles.industryArrow}>→</span>
                <span className={styles.industryLabel}>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY SPOTLIGHT ─── */}
      <section className="section section--ink">
        <div className="container">
          <div className={styles.spotlightHeader}>
            <span className="section-label section-label--neutral">Featured Result</span>
            <h2 className="t-h2" style={{ maxWidth: '620px' }}>
              How NYX transformed Meridian Law's digital presence.
            </h2>
          </div>
          <div className={styles.spotlightGrid}>
            <div className={styles.spotlightLeft}>
              <div className={`${styles.spotlightBlock} ${styles.spotlightProblem}`}>
                <p className={styles.spotlightBlockLabel}>The Problem</p>
                <p className="t-body" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  An outdated website that looked generic, buried their expertise,
                  and gave potential clients no clear reason to get in touch.
                </p>
              </div>
              <div className={`${styles.spotlightBlock} ${styles.spotlightSolution}`}>
                <p className={styles.spotlightBlockLabel}>The NYX Solution</p>
                <p className="t-body" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  A complete redesign — restructured for how clients think, not how
                  lawyers think. Benefit-led, trust-building, and conversion-focused.
                </p>
              </div>
            </div>
            <div className={styles.spotlightRight}>
              <p className={`t-label ${styles.spotlightOutcomeLabel}`}>Outcomes</p>
              <ul className={styles.spotlightOutcomes}>
                {[
                  'Clearer practice area navigation',
                  'Stronger brand presentation matching offline reputation',
                  'Improved mobile experience for on-the-go clients',
                  'Simplified contact journey with single clear CTA',
                ].map((o) => (
                  <li key={o} className={styles.spotlightOutcomeItem}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8l4 4 6-7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {o}
                  </li>
                ))}
              </ul>
              <Link href="/work/meridian-law" className="btn btn--outline-white" style={{ marginTop: '2rem' }}>
                View Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaBg} aria-hidden="true">
          <div className={styles.finalCtaOrb} />
        </div>
        <div className={`container ${styles.finalCtaInner}`}>
          <div className={styles.finalCtaContent}>
            <h2 className={`t-h1 reveal`}>
              Have a project in mind?
            </h2>
            <p className={`t-body-lg text-muted reveal reveal-delay-1`}>
              Let's build something worth remembering.
            </p>
            <div className={`${styles.finalCtaButtons} reveal reveal-delay-2`}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/work" className="btn btn--outline btn--lg">
                See the Work
              </Link>
            </div>
          </div>
          <div className={styles.finalCtaDecor} aria-hidden="true">
            <span className={styles.finalCtaBigText}>NYX</span>
          </div>
        </div>
      </section>
    </>
  );
}
