"use client";
import { motion } from "framer-motion";
import styles from "./CTA.module.css";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      
      {/* Massive Scrolling Marquee Background */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          <span>OPEN FOR COLLABORATION • OPEN FOR COLLABORATION • </span>
          <span>OPEN FOR COLLABORATION • OPEN FOR COLLABORATION • </span>
        </div>
      </div>

      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.leftCol}>
          <p className={styles.subhead}>HAVE AN IDEA?</p>
          <h2 className={styles.heading}>
            Let's <span className={styles.italicAccent}>Collaborate</span>
          </h2>
        </div>
        
        <div className={styles.rightCol}>
          <p className={styles.desc}>
            I am currently open to new opportunities, freelance projects, and exciting collaborations. 
            Whether you have a specific idea in mind or just want to explore possibilities, my inbox is always open.
          </p>
          
          <div className={styles.emailDisplay}>
            <Mail size={18} className={styles.emailIcon} />
            <span>archie220206@gmail.com</span>
          </div>
          
          <div className={styles.contactActions}>
            <MagneticButton>
              <Link href="mailto:archie220206@gmail.com?subject=Collaboration%20Inquiry" className={styles.startBtn}>
                SEND AN EMAIL
                <div className={styles.arrowCircle}>
                  <ArrowUpRight size={16} color="#000" />
                </div>
              </Link>
            </MagneticButton>
            
            <div className={styles.socials}>
              <MagneticButton>
                <Link href="https://github.com/Shasangkawimba" target="_blank" className={styles.socialLink}>GitHub</Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="https://linkedin.com" target="_blank" className={styles.socialLink}>LinkedIn</Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
