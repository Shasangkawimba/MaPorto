"use client";
import styles from "./Marquee.module.css";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Marquee() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.trackWrapper}>
        <div className={styles.track}>
          <div className={styles.content}>
            <span>FRONTEND ENGINEERING</span>
            <span className={styles.star}>✦</span>
            <span>BACKEND SYSTEMS</span>
            <span className={styles.star}>✦</span>
            <span>DEVOPS INFRASTRUCTURE</span>
            <span className={styles.star}>✦</span>
            <span>CLOUD ARCHITECTURE</span>
            <span className={styles.star}>✦</span>
          </div>
          <div className={styles.content}>
            <span>FRONTEND ENGINEERING</span>
            <span className={styles.star}>✦</span>
            <span>BACKEND SYSTEMS</span>
            <span className={styles.star}>✦</span>
            <span>DEVOPS INFRASTRUCTURE</span>
            <span className={styles.star}>✦</span>
            <span>CLOUD ARCHITECTURE</span>
            <span className={styles.star}>✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
