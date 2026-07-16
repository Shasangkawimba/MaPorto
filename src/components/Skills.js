"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import styles from "./Skills.module.css";
import SectionTag from "./SectionTag";
import { Monitor, Server, Cloud, Layout } from "lucide-react";

// Interactive Spotlight Card Component
const SkillCard = ({ domain, idx }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={styles.cardWrapper}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
    >
      <motion.div
        className={styles.spotlight}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className={styles.cardInner}>
        {/* Giant Watermark Icon */}
        <div className={styles.bgWatermark}>
          {domain.icon}
        </div>
        
        <div className={styles.cardContent}>
          <div className={styles.cardTop}>
            <div className={styles.iconBox}>{domain.icon}</div>
            <h3 className={styles.cardTitle}>{domain.title}</h3>
          </div>
          <p className={styles.cardDesc}>{domain.desc}</p>
          
          <div className={styles.skillList}>
            {domain.skills.map((skill, sIdx) => (
              <div 
                key={sIdx} 
                className={styles.skillBadge} 
              >
                <img 
                  src={`https://cdn.simpleicons.org/${skill.slug}/white`} 
                  alt={skill.name} 
                  className={styles.skillIcon} 
                />
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const domains = [
    {
      id: "backend",
      title: "Backend & Systems",
      icon: <Monitor size={24} strokeWidth={1.5} />,
      desc: "Building scalable APIs, robust databases, and secure business logic for real-world applications.",
      skills: [
        { name: "Laravel", slug: "laravel" },
        { name: "PHP", slug: "php" },
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "Redis", slug: "redis" },
      ]
    },
    {
      id: "frontend",
      title: "Frontend & Interfaces",
      icon: <Server size={24} strokeWidth={1.5} />,
      desc: "Comfortable building interactive interfaces on top of backend systems using React and Inertia..",
      skills: [
        { name: "React", slug: "react" },
        { name: "Inertia.js", slug: "inertiajs" },
        { name: "TypeScript", slug: "typescript" },
        { name: "TailwindCSS", slug: "tailwindcss" },
      ]
    },
    {
      id: "cloud",
      title: "DevOps & Infrastructure",
      icon: <Cloud size={24} strokeWidth={1.5} />,
      desc: "Containerizing and deploying applications with Docker, managing servers end-to-end.",
      skills: [
        { name: "Docker", slug: "docker" },
        { name: "Nginx", slug: "nginx" },
        { name: "Linux", slug: "linux" },
        { name: "Git", slug: "git" },
      ]
    },
    {
      id: "tools",
      title: "Tools & Workflow",
      icon: <Layout size={24} strokeWidth={1.5} />,
      desc: "Version control, testing, and collaborative development practices.",
      skills: [
        { name: "Git", slug: "git" },
        { name: "GitHub", slug: "github" },
        { name: "Postman", slug: "postman" },
        { name: "Pest", slug: "pest" },
      ]
    }
  ];

  return (
    <section className={styles.section} id="skills">
      <div className={styles.header}>
        <SectionTag text="Arsenal" />
        <h2 className={styles.title}>What I Bring To The Table</h2>
      </div>

      <div className={styles.grid}>
        {domains.map((domain, idx) => (
          <SkillCard key={idx} domain={domain} idx={idx} />
        ))}
      </div>
    </section>
  );
}
