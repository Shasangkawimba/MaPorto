import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SectionTag from "@/components/SectionTag";
import ProjectStack from "@/components/ProjectStack";
import CTA from "@/components/CTA";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechTerminal from "@/components/TechTerminal";
import Activity from "@/components/Activity";
import BeamsBackground from "@/components/BeamsBackground";
import styles from "./page.module.css";
import cmsData from "@/data/cms.json";

export default function Home() {
  return (
    <>
      <BeamsBackground />
      <Navigation />
      
      <div className={styles.siteWrapper}>
        <Hero />
        <Marquee />
        
        <main className={styles.mainContent}>
          <About />
          <Skills />
          
          {/* Projects Section */}
          <section className={styles.section} id="projects">
            <div className={styles.sectionHeader}>
              <SectionTag text="Selected Works" />
              <h2 className={styles.sectionTitle}>Featured Projects</h2>
            </div>
            
            <ProjectStack works={cmsData.works} />
          </section>

          <TechTerminal />
          <Activity />
        </main>
      </div>

      <footer className={styles.footerReveal}>
        <div id="contact" className={styles.contactWrapper}>
          <CTA />
        </div>
      </footer>
    </>
  );
}
