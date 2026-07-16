import Navigation from "@/components/Navigation";
import SectionTag from "@/components/SectionTag";
import Card from "@/components/Card";
import CTA from "@/components/CTA";
import styles from "../page.module.css";
import cmsData from "@/data/cms.json";

export default function Work() {
  return (
    <>
      <Navigation />
      <main className={styles.mainContent} style={{ paddingTop: '150px' }}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <SectionTag text="Portfolio" />
            <h2 className={styles.sectionTitle}>Selected Works</h2>
          </div>
          
          <div className={styles.gridContainer}>
            {cmsData.works.map((work, idx) => (
              <Card 
                key={work.slug} 
                title={work.title} 
                tag={work.tag} 
                href={`/work/${work.slug}`} 
                index={idx} 
              />
            ))}
          </div>
        </section>
        <CTA />
      </main>
    </>
  );
}