"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2 + i * 0.15,
      }
    })
  };

  return (
    <section className={styles.heroSection} id="home">
      
      {/* Background glowing hexagons / elements */}
      <div className={styles.bgElements}>
        <div className={`${styles.glowBox} ${styles.leftGlow}`}></div>
        <div className={`${styles.glowBox} ${styles.rightGlow}`}></div>
      </div>

      <div className={styles.heroGrid}>
        <div className={styles.container}>
          <motion.div 
            className={styles.availabilityBadge}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.pulse}></span>
            <span className={styles.badgeText}>Available for new projects</span>
          </motion.div>

          <motion.h1 
            className={styles.mainTitle}
            initial="hidden"
            animate="visible"
          >
            <motion.span custom={0} variants={textVariants} className={styles.lineBlock}>Building</motion.span>
            <br />
            <motion.span custom={1} variants={textVariants} className={styles.lineBlock}>Systems</motion.span>
            <br />
            <motion.span custom={2} variants={textVariants} className={`${styles.lineBlock} ${styles.italicAccent}`}>Cleanly</motion.span>
          </motion.h1>

          <motion.div 
            className={styles.subContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className={styles.techTag}>
              <span className={styles.bracket}>&lt;</span> 
              Backend Developer 
              <span className={styles.bracket}> /&gt;</span>
            </div>
            <p className={styles.desc}>
              A backend developer who treats infrastructure <br/> and data logic like a finely tuned system.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className={styles.profileCardWrapper}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProfileCard
            name="Belvarchie"
            title="Backend Developer"
            handle="belvarchie"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/Profile.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            behindGlowEnabled={true}
            behindGlowColor="rgba(255, 255, 255, 0.15)"
            innerGradient="linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 25%, transparent 25%, transparent 100%), radial-gradient(circle at center, #151515 0%, #050505 100%)"
          />
        </motion.div>
      </div>
    </section>
  );
}
