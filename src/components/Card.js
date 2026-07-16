import { Box, Code, Globe, ShoppingCart, Briefcase, Gamepad2, Link } from "lucide-react";
import styles from "./Card.module.css";

export default function Card({ title, tag, desc, githubUrl, liveUrl, index }) {
  const tags = tag ? tag.split(" • ") : [];
  const formattedIndex = index < 10 ? `0${index}` : index;

  // Dynamically select a premium icon based on the project title
  let ProjectIcon = Box;
  if (title.toLowerCase().includes("pasar")) ProjectIcon = ShoppingCart;
  else if (title.toLowerCase().includes("vendura")) ProjectIcon = Briefcase;
  else if (title.toLowerCase().includes("stikin")) ProjectIcon = Gamepad2;
  else if (title.toLowerCase().includes("singkat")) ProjectIcon = Link;

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        
        {/* Dynamic Backgrounds & Texture */}
        <div className={styles.noiseOverlay}></div>
        <div className={styles.meshBackground}></div>
        <div className={styles.techGrid}></div>

        <div className={styles.topSection}>
          <div className={styles.metaInfo}>
            <span className={styles.indexNumber}>{formattedIndex}</span>
            <span className={styles.metaText}>FEATURED WORK</span>
          </div>
          
          {/* Action Icons placed at top right */}
          <div className={styles.actionIcons}>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Source Code">
              <Code size={20} />
            </a>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Live Website">
              <Globe size={20} />
            </a>
          </div>
        </div>

        <div className={styles.centerSection}>
          
          {/* Stunning Image / Icon Container */}
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <ProjectIcon size={48} strokeWidth={1} color="rgba(255, 255, 255, 0.7)" />
            </div>
          </div>

          <h3 className={styles.title}>{title}</h3>
          
          <p className={styles.description}>{desc}</p>

          <div className={styles.tagContainer}>
            {tags.map((t, i) => (
              <span key={i} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
