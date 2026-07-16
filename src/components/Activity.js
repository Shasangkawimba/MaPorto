"use client";
import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Activity.module.css";
import SectionTag from "./SectionTag";
import { GitBranch, ArrowUpRight } from "lucide-react";

export default function Activity() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const githubData = {
    login: "Shasangkawimba",
    name: "Belvarsheesh",
    avatar_url: "https://avatars.githubusercontent.com/u/119872442?v=4",
    html_url: "https://github.com/Shasangkawimba",
    bio: "Software Engineer & Open Source Developer",
  };

  // Generate deterministic graph data simulating GitHub activity
  const graphData = useMemo(() => {
    const weeks = 32; // Less weeks to fit cleanly
    const days = 7;
    const data = [];
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        // Pseudo-random generation based on index to prevent hydration mismatch
        const seed = w * 7 + d;
        let level = 0;
        if (seed % 11 === 0 || seed % 7 === 0) level = 4;
        else if (seed % 5 === 0) level = 3;
        else if (seed % 3 === 0) level = 2;
        else if (seed % 2 === 0) level = 1;
        
        // Make the last few weeks more active
        if (w > weeks - 4 && seed % 2 !== 0) level = Math.max(level, 2);
        
        week.push(level);
      }
      data.push(week);
    }
    return data;
  }, []);

  return (
    <section className={styles.section} id="activity" ref={containerRef}>
      <div className={styles.sectionHeader}>
        <SectionTag text="Open Source" />
        <h2 className={styles.sectionTitle}>GitHub Profile</h2>
      </div>

      <motion.div 
        className={styles.profileCard}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.noiseOverlay}></div>
        <div className={styles.techGrid}></div>

        <div className={styles.cardContent}>
          <div className={styles.leftColumn}>
            <div className={styles.avatarWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={githubData.avatar_url} 
                alt={`${githubData.login} avatar`} 
                className={styles.avatar}
              />
            </div>
            
            <div className={styles.userInfo}>
              <h3 className={styles.name}>{githubData.name}</h3>
              <a 
                href={githubData.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.username}
              >
                <GitBranch size={16} />
                @{githubData.login}
              </a>
              <p className={styles.bio}>{githubData.bio}</p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.graphHeader}>
              <span className={styles.graphTitle}>Contribution Activity</span>
              <span className={styles.graphSubtitle}>Past year</span>
            </div>
            
            <div className={styles.graphWrapper}>
              <div className={styles.graphGrid}>
                {graphData.map((week, wIdx) => (
                  <div key={wIdx} className={styles.graphColumn}>
                    {week.map((level, dIdx) => (
                      <div 
                        key={dIdx} 
                        className={`${styles.graphSquare} ${styles['level' + level]}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <a 
              href={githubData.html_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.actionBtn}
            >
              <span>View Full Profile</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
