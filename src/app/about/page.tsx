import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'NYX is a small design studio with big thinking. We build websites and digital experiences that help businesses communicate clearly and create real opportunities.',
};

const beliefs = [
  'Simplicity beats clutter',
  'Design should have a purpose',
  'Every detail matters',
  'Technology should support the experience',
  'Business goals come before trends',
];

const team = [
  {
    name: 'Alex Ratnayake',
    role: 'Founder & Creative Director',
    bio: 'Designer turned studio founder. Obsessed with the intersection of aesthetics and business outcomes.',
    initials: 'AR',
    color: '#2563EB',
  },
  {
    name: 'Jamie Seneviratne',
    role: 'Lead Developer',
    bio: 'Next.js developer who cares deeply about performance, accessibility, and shipping things that actually work.',
    initials: 'JS',
    color: '#1D4ED8',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroDecor} aria-hidden="true">
          <span className={styles.heroDecorText}>NYX</span>
        </div>
        <div className="container">
          <span className="section-label animate-fade-up">About</span>
          <h1 className={`t-h1 ${styles.heroTitle} animate-fade-up animate-fade-up-delay-1`}>
            Small team.<br />
            <em className={styles.heroItalic}>Big thinking.</em>
          </h1>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className={`section section--off ${styles.storySection}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <span className="section-label reveal">Our Story</span>
              <h2 className={`t-h2 reveal reveal-delay-1`}>Why NYX exists.</h2>
            </div>
            <div className={`${styles.storyRight} reveal reveal-delay-2`}>
              <p className={`t-body-lg ${styles.storyText}`}>
                Businesses don't need another website sitting online. They need
                digital experiences that communicate clearly, build trust, and
                create real opportunities.
              </p>
              <p className={`t-body ${styles.storyText}`}>
                NYX was built for businesses that take their digital presence
                seriously — and understand that design is not a cost, it's an
                investment. We work with a small, focused client list to make sure
                every project gets the attention it deserves.
              </p>
              <p className={`t-body ${styles.storyText}`}>
                We're not a production line. We're a studio. And there's a
                meaningful difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BELIEFS ─── */}
      <section className="section section--ink">
        <div className="container">
          <div className={styles.beliefsHeader}>
            <span className="section-label section-label--neutral">What we believe</span>
            <h2 className="t-h2" style={{ maxWidth: '500px' }}>
              The principles that guide every project.
            </h2>
          </div>
          <div className={styles.beliefsList}>
            {beliefs.map((belief, i) => (
              <div key={belief} className={`${styles.beliefItem} reveal reveal-delay-${(i % 3) + 1}`}>
                <span className={styles.beliefNum}>0{i + 1}</span>
                <span className={styles.beliefText}>{belief}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="section">
        <div className="container">
          <div className={styles.teamHeader}>
            <span className="section-label">The Team</span>
            <h2 className="t-h2">The people behind the work.</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={member.name} className={`${styles.teamCard} reveal reveal-delay-${i + 1}`}>
                <div className={styles.teamAvatar} style={{ background: member.color + '18' }}>
                  <span className={styles.teamInitials} style={{ color: member.color }}>
                    {member.initials}
                  </span>
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={`t-h4 ${styles.teamName}`}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={`t-body ${styles.teamBio}`}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section className="section section--off">
        <div className="container">
          <div className={styles.howHeader}>
            <span className="section-label reveal">How we work</span>
            <h2 className={`t-h2 reveal reveal-delay-1`}>Remote. Focused. Clear.</h2>
          </div>
          <div className={styles.howGrid}>
            {[
              {
                title: 'Global collaboration',
                desc: 'We work remotely with clients and partners around the world. Location has never been a barrier to great work.',
              },
              {
                title: 'Direct communication',
                desc: 'No account managers. No layers. You work directly with the people building your project.',
              },
              {
                title: 'Structured process',
                desc: 'Every project follows our 8-step process — from discovery through to post-launch support. No guesswork, no surprises.',
              },
              {
                title: 'Small roster',
                desc: 'We take on a limited number of projects at a time to ensure every client gets genuine focus and care.',
              },
            ].map((item, i) => (
              <div key={item.title} className={`${styles.howCard} reveal reveal-delay-${(i % 4) + 1}`}>
                <div className={styles.howCardDot} />
                <h3 className={`t-h4 ${styles.howCardTitle}`}>{item.title}</h3>
                <p className={`t-body ${styles.howCardDesc}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container--narrow">
          <div className={styles.cta}>
            <h2 className={`t-h2 reveal`}>
              Ready to work with us?
            </h2>
            <p className={`t-body-lg text-muted reveal reveal-delay-1`} style={{ maxWidth: '440px' }}>
              Tell us about your project. If it's a good fit, we'll make it happen.
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
