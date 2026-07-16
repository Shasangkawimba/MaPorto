import Navigation from "@/components/Navigation";
import SectionTag from "@/components/SectionTag";
import CTA from "@/components/CTA";
import styles from "../page.module.css";

export default function About() {
  return (
    <>
      <Navigation />
      <main className={styles.mainContent} style={{ paddingTop: '150px' }}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <SectionTag text="About Me" />
            <h2 className={styles.sectionTitle}>Belvarchie Shasangkawimba</h2>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            <p style={{ marginBottom: '20px' }}>
              I am an IT professional and software engineer with a passion for designing experiences that sit at the intersection of high-end aesthetics and modern engineering.
            </p>
            <p>
              By combining creative direction with technical execution, I strive to build products that not only perform flawlessly but leave a lasting impression.
            </p>
          </div>
        </section>
        <CTA />
      </main>
    </>
  );
}