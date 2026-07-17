"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "./Card";
import styles from "./ProjectStack.module.css";
import { useIsMobile } from "@/hooks/useIsMobile";

const CardWrapper = ({ work, index, total, progress }) => {
  const isMobile = useIsMobile();

  // As the container scrolls, each card scales down and dims 
  // when the NEXT card starts sliding over it.
  const start = index / total;
  const end = (index + 1) / total;
  const isLast = index === total - 1;
  
  const scale = useTransform(progress, [start, end], [1, isLast ? 1 : 0.95]);
  const opacity = useTransform(progress, [start, end], [1, isLast ? 1 : 0]);

  return (
    <div className={styles.stickyCard} style={{ zIndex: index }}>
      <motion.div 
        style={isMobile ? { width: '100%', height: '100%' } : { scale, opacity, transformOrigin: "top center", width: '100%', height: '100%' }}
        className={styles.cardInner}
      >
        <Card 
          title={work.title} 
          tag={work.tag}
          desc={work.desc}
          githubUrl={work.githubUrl}
          liveUrl={work.liveUrl}
          index={index + 1} 
        />
      </motion.div>
    </div>
  );
};

export default function ProjectStack({ works }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className={styles.stackContainer}>
      {works.map((work, idx) => (
        <CardWrapper 
          key={work.slug} 
          work={work} 
          index={idx} 
          total={works.length} 
          progress={scrollYProgress} 
        />
      ))}
      <div className={styles.stackSpacer}></div>
    </div>
  );
}
