import styles from "./SectionTag.module.css";

export default function SectionTag({ text }) {
  return (
    <div className={styles.tagWrapper}>
      <div className={styles.dot} />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
