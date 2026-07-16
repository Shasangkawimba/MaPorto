"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Marquee.module.css";

export default function Marquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }, trackRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.trackWrapper}>
        <div className={styles.track} ref={trackRef}>
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
