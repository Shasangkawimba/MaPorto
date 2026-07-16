import Navigation from "@/components/Navigation";
import SectionTag from "@/components/SectionTag";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className={styles.mainContent} style={{ paddingTop: '150px' }}>
        <section className={styles.section} style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className={styles.sectionHeader}>
            <SectionTag text="Say Hello" />
            <h2 className={styles.sectionTitle} style={{ marginBottom: '40px' }}>
              Let's create something <br />
              <span style={{ fontFamily: 'var(--font-cursive)', fontStyle: 'italic', background: 'linear-gradient(90deg, #fff, #a0a0a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Extraordinary</span>
            </h2>
            <a href="mailto:hello@example.com" style={{ color: 'var(--text-main)', fontSize: '1.5rem', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '5px' }}>
              hello@example.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}