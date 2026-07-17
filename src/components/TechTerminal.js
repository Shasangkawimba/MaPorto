"use client";
import { motion } from "framer-motion";
import styles from "./TechTerminal.module.css";
import SectionTag from "./SectionTag";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function TechTerminal() {
  const isMobile = useIsMobile();

  return (
    <section className={styles.section}>
      <SectionTag text="Metrics" />
      <h2 className={styles.title}>System Status</h2>

      <motion.div 
        className={styles.terminalContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.terminalHeader}>
          <div className={styles.dots}>
            <span className={styles.dotRed}></span>
            <span className={styles.dotYellow}></span>
            <span className={styles.dotGreen}></span>
          </div>
          <div className={styles.terminalTitle}>belvarchie_profile.js</div>
        </div>

        <div className={styles.terminalBody}>
          <div className={styles.command}>
            <span className={styles.prompt}>$</span> neofetch --metrics
          </div>
          <div className={styles.output}>
            <div className={styles.sysInfo}>
              <div className={styles.asciiArt}>
                <pre>{`
    ___       ___       ___   
   /\\__\\     /\\__\\     /\\__\\  
  /:/ _/_   /:/ _/_   /:/ _/_ 
 /:/_/\__\\ /:/_/\__\\ /:/_/\__\\
 \\:\\/:/  / \\:\\/:/  / \\:\\/:/  /
  \\::/  /   \\::/  /   \\::/  / 
   \\/__/     \\/__/     \\/__/  
                `}</pre>
              </div>
              <div className={styles.specs}>
                <p><span className={styles.key}>Host:</span> Belvarchie Arief Putra Shasangkawimba</p>
                <p><span className={styles.key}>Uptime:</span> 1+ Years Experience</p>
                <p><span className={styles.key}>Focus:</span> Backend Systems & Approval Workflows</p>
                <p><span className={styles.key}>Shell:</span> Laravel / PHP / Inertia</p>
                <p><span className={styles.key}>Status:</span> University Student — Information Systems</p>
                <p><span className={styles.key}>Mode:</span> Building & learning, one system at a time</p>
              </div>
            </div>
          </div>

          <div className={styles.command}>
            <span className={styles.prompt}>$</span> cat active_status.sh
          </div>
          <div className={styles.output}>
            <p className={styles.greenText}>&gt; Open to internship & freelance opportunities.</p>
            <p className={styles.greenText}>&gt; Currently deepening backend architecture skills...</p>
          </div>

          <div className={styles.command}>
            <span className={styles.prompt}>$</span> <span className={styles.cursor}></span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
