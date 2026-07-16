"use client";
import { motion } from "framer-motion";
import styles from "./StatsBento.module.css";
import SectionTag from "./SectionTag";

export default function StatsBento() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className={styles.section}>
      <SectionTag text="Metrics" />
      <h2 className={styles.title}>By the Numbers</h2>
      
      <motion.div 
        className={styles.bentoGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item} className={`${styles.bentoCell} ${styles.cellLarge}`}>
          <div className={styles.cellContent}>
            <span className={styles.number}>1.2M+</span>
            <span className={styles.label}>Lines of Code Written</span>
            <div className={styles.bgGlow}></div>
          </div>
        </motion.div>
        
        <motion.div variants={item} className={`${styles.bentoCell} ${styles.cellMedium}`}>
          <div className={styles.cellContent}>
            <span className={styles.number}>14+</span>
            <span className={styles.label}>Products Shipped</span>
          </div>
        </motion.div>
        
        <motion.div variants={item} className={`${styles.bentoCell} ${styles.cellSmall1}`}>
          <div className={styles.cellContent}>
            <span className={styles.number}>5</span>
            <span className={styles.label}>Years Exp.</span>
          </div>
        </motion.div>
        
        <motion.div variants={item} className={`${styles.bentoCell} ${styles.cellSmall2}`}>
          <div className={styles.cellContent}>
            <span className={styles.number}>892</span>
            <span className={styles.label}>Contributions</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
