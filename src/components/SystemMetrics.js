"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import styles from "./SystemMetrics.module.css";
import SectionTag from "./SectionTag";
import { Activity as ActivityIcon, Server, Cpu, Database } from "lucide-react";

const NumberCounter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          nodeRef.current.textContent = Math.floor(value).toLocaleString() + suffix;
        }
      });
      return controls.stop;
    }
  }, [isInView, from, to, duration, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
};

export default function SystemMetrics() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} id="metrics" ref={containerRef}>
      
      <div className={styles.sectionHeader}>
        <SectionTag text="Live Telemetry" />
        <h2 className={styles.sectionTitle}>System Status</h2>
      </div>

      <div className={styles.dashboardGrid}>
        
        {/* Core Vitals Ring */}
        <motion.div 
          className={`${styles.bentoBox} ${styles.boxLarge}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.boxHeader}>
            <Cpu size={20} className={styles.icon} />
            <span className={styles.boxTitle}>Core Vitals</span>
          </div>
          <div className={styles.ringContainer}>
            <svg className={styles.progressRing} viewBox="0 0 120 120">
              <circle className={styles.ringTrack} cx="60" cy="60" r="50" />
              <motion.circle 
                className={styles.ringFill} 
                cx="60" cy="60" r="50"
                initial={{ strokeDasharray: "0 314" }}
                animate={isInView ? { strokeDasharray: "314 314" } : {}}
                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              />
            </svg>
            <div className={styles.ringContent}>
              <span className={styles.ringValue}>
                <NumberCounter to={99} suffix="." />
                <NumberCounter to={9} duration={2.5} />
                <span className={styles.ringPercent}>%</span>
              </span>
              <span className={styles.ringLabel}>System Uptime</span>
            </div>
          </div>
        </motion.div>

        {/* Server Load Sparkline */}
        <motion.div 
          className={`${styles.bentoBox} ${styles.boxWide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.boxHeader}>
            <ActivityIcon size={20} className={styles.icon} />
            <span className={styles.boxTitle}>Commit Velocity</span>
          </div>
          <div className={styles.sparklineContainer}>
            <svg className={styles.sparkline} viewBox="0 0 400 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sparklineGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path 
                className={styles.sparklinePath}
                d="M0,80 C50,80 80,40 120,50 C160,60 190,20 230,30 C270,40 310,10 350,20 C380,27 400,10 400,10"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.path 
                className={styles.sparklineArea}
                d="M0,80 C50,80 80,40 120,50 C160,60 190,20 230,30 C270,40 310,10 350,20 C380,27 400,10 400,10 L400,100 L0,100 Z"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.5 }}
                fill="url(#sparklineGradient)"
              />
            </svg>
            <div className={styles.gridOverlay}></div>
          </div>
        </motion.div>

        {/* Global Deployments */}
        <motion.div 
          className={`${styles.bentoBox} ${styles.boxSmall}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.boxHeader}>
            <Server size={20} className={styles.icon} />
            <span className={styles.boxTitle}>Total Commits</span>
          </div>
          <div className={styles.statContent}>
            <span className={styles.statNumber}>
              <NumberCounter to={1284} duration={2.5} />
            </span>
            <div className={styles.statFooter}>
              <span className={styles.statusDot}></span>
              <span className={styles.statusText}>Systems Online</span>
            </div>
          </div>
        </motion.div>

        {/* Database Queries */}
        <motion.div 
          className={`${styles.bentoBox} ${styles.boxSmall}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.boxHeader}>
            <Database size={20} className={styles.icon} />
            <span className={styles.boxTitle}>Deployments</span>
          </div>
          <div className={styles.statContent}>
            <span className={styles.statNumber}>
              <NumberCounter to={142} duration={2} />
            </span>
            <div className={styles.statFooter}>
              <span className={styles.statusDotPulse}></span>
              <span className={styles.statusText}>Active Sync</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
