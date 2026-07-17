"use client";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import SectionTag from "./SectionTag";

import { useIsMobile } from "@/hooks/useIsMobile";

export default function About() {
  const isMobile = useIsMobile();
  
  const codeLines = [
    "class SoftwareEngineer {",
    "  constructor() {",
    "    this.name = 'Belvarchie';",
    "    this.role = 'Backend Developer';",
    "    this.focus = ['Laravel', 'PostgreSQL', 'Redis'];",
    "  }",
    "",
    "  async solve(problem) {",
    "    let solution = await this.design(problem);",
    "    return this.build(architecture);",
    "  }",
    "}"
  ];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        
        <div className={styles.textContent}>
          <SectionTag text="About Me" />
          <h2 className={styles.title}>Solving Backend<br/>Problems</h2>
          <p className={styles.desc}>
            I focus on the architecture behind the interface, designing 
resilient APIs, structuring relational databases, and writing 
backend logic that scales predictably without unnecessary 
overhead.
          </p>
        </div>

        <motion.div 
          className={styles.terminalContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className={styles.terminalHeader}>
            <div className={styles.dots}>
              <span className={styles.dotRed}></span>
              <span className={styles.dotYellow}></span>
              <span className={styles.dotGreen}></span>
            </div>
            <div className={styles.terminalTitle}>belvarchie_profile.js</div>
          </div>
          <div className={styles.terminalBody}>
            <motion.div
              className={styles.codeBlock}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.codeLine}><span className={styles.lineNum}>1</span><span className={styles.codeText}><span className={styles.keyword}>class</span> <span className={styles.className}>Engineer</span> {'{'}</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>2</span><span className={styles.codeText}>  <span className={styles.keyword}>constructor</span>() {'{'}</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>3</span><span className={styles.codeText}>    <span className={styles.this}>this</span>.<span className={styles.property}>name</span> <span className={styles.operator}>=</span> <span className={styles.string}>'Belvarchie'</span>;</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>4</span><span className={styles.codeText}>    <span className={styles.this}>this</span>.<span className={styles.property}>role</span> <span className={styles.operator}>=</span> <span className={styles.string}>'Backend'</span>;</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>5</span><span className={styles.codeText}>    <span className={styles.this}>this</span>.<span className={styles.property}>stack</span> <span className={styles.operator}>=</span> [</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>6</span><span className={styles.codeText}>      <span className={styles.string}>'Laravel'</span>,</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>7</span><span className={styles.codeText}>      <span className={styles.string}>'PostgreSQL'</span></span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>8</span><span className={styles.codeText}>    ];</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>9</span><span className={styles.codeText}>  {'}'}</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>10</span><span className={styles.codeText}></span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>11</span><span className={styles.codeText}>  <span className={styles.keyword}>async</span> <span className={styles.function}>solve</span>(<span className={styles.variable}>task</span>) {'{'}</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>12</span><span className={styles.codeText}>    <span className={styles.keyword}>await</span> <span className={styles.this}>this</span>.<span className={styles.function}>plan</span>(task);</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>13</span><span className={styles.codeText}>    <span className={styles.keyword}>return</span> <span className={styles.this}>this</span>.<span className={styles.function}>deploy</span>();</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>14</span><span className={styles.codeText}>  {'}'}</span></div>
              <div className={styles.codeLine}><span className={styles.lineNum}>15</span><span className={styles.codeText}>{'}'}</span></div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
