'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HoverExpandGallery.module.css';

interface GalleryItem {
  id: number;
  label: string;
  year: string;
  image: string;
}

const defaultItems: GalleryItem[] = [
  { id: 1, label: "Velvet ® Dreams Studio", year: "2024", image: "/images/skiper35/imgp3.png" },
  { id: 2, label: "Neon Pulse ® Agency", year: "2024", image: "/images/skiper35/illstration15.png" },
  { id: 3, label: "Midnight Canvas", year: "2024", image: "/images/skiper35/img32.png" },
  { id: 4, label: "Echo Digital Lab", year: "2024", image: "/images/skiper35/img27.png" },
  { id: 5, label: "Skiper Creative ® Co ", year: "2023", image: "/images/skiper35/img5.webp" },
  { id: 6, label: "Cosmic Brew Studios", year: "2023—2024", image: "/images/skiper35/illstration12.png" },
  { id: 7, label: "Horizon Typography", year: "2024", image: "/images/skiper35/illstration13.png" },
  { id: 8, label: "Waves & ® Motion", year: "2022—2024", image: "/images/skiper35/img8.webp" },
  { id: 9, label: "Stellar Workshop", year: "2023", image: "/images/skiper35/illstration9.png" },
  { id: 10, label: "Prism ® Media House", year: "2023", image: "/images/skiper35/img17.png" },
  { id: 11, label: "Aurora Design Co ™ ", year: "2023", image: "/images/skiper35/illstration5.png" },
  { id: 12, label: "Flux Interactive", year: "2023", image: "/images/skiper35/img12.png" },
  { id: 13, label: "Ember Creative Lab ™", year: "2022", image: "/images/skiper35/illstration3.png" },
  { id: 14, label: "Zenith Brand Studio", year: "2024", image: "/images/skiper35/img15.png" },
  { id: 15, label: "Quantum Visual Arts", year: "2022—2023", image: "/images/skiper35/img21.png" },
  { id: 16, label: "Quantum Visual Arts", year: "2022—2023", image: "/images/skiper35/img8.png" },
  { id: 17, label: "Quantum Visual Arts", year: "2022—2023", image: "/images/skiper35/img1.png" }
];

interface HoverExpandGalleryProps {
  projects?: unknown;
}

export default function HoverExpandGallery({ projects }: HoverExpandGalleryProps = {}) {
  const [activeIdx, setActiveIdx] = useState<number>(5); // Cosmic Brew Studios default
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    setIsMobile(media.matches);
    const handler = () => setIsMobile(media.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  return (
    <section className={styles.skiperSection}>
      <div className={styles.skiperContainer}>
        <motion.div className={styles.skiperRow}>
          {defaultItems.map((item, index) => {
            const isActive = activeIdx === index;

            return (
              <motion.div
                key={item.id}
                className={styles.panel}
                onClick={isMobile ? () => setActiveIdx(index) : undefined}
                onMouseEnter={isMobile ? undefined : () => setActiveIdx(index)}
                initial={
                  isMobile
                    ? { height: '4rem', width: '100%' }
                    : { width: '4rem', height: '100%' }
                }
                animate={
                  isMobile
                    ? { height: isActive ? '500px' : '4rem', width: '100%' }
                    : { width: isActive ? '28rem' : '4rem' }
                }
                transition={{ stiffness: 200, damping: 25, type: 'spring' }}
              >
                {/* Vertical Label & Year (Exact Skiper35 implementation) */}
                <motion.div
                  className={styles.labelRow}
                  animate={{
                    color: isActive ? '#F1F1F1' : 'rgba(241, 241, 241, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={styles.itemLabel}>{item.label}</p>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        className={styles.itemYear}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.year}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Expanded Image Container */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: Number(isActive) }}
                  className={styles.imageContainer}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <motion.img
                    src={item.image}
                    alt={item.label}
                    className={styles.panelImg}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    onError={(e) => {
                      // Fallback if image still loading
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('illstration12.png')) {
                        target.src = '/images/skiper35/illstration12.png';
                      }
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
