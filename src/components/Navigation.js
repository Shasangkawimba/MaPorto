"use client";
import styles from "./Navigation.module.css";
import { X, Home, User, Code, Briefcase, Mail, GitBranch } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomStar from "./CustomStar";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        className={styles.desktopNav}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className={styles.pill}>
          <div className={styles.navLinksLeft}>
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className={styles.link}><Home size={16}/> HOME</a>
            <div className={styles.divider}></div>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className={styles.link}><User size={16}/> ABOUT</a>
            <div className={styles.divider}></div>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className={styles.link}><Code size={16}/> SKILLS</a>
          </div>
          
          <div className={styles.logo}>
            <CustomStar width={30} height={30} fill="#111" />
          </div>
          
          <div className={styles.navLinksRight}>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className={styles.link}><Briefcase size={16}/> WORKS</a>
            <div className={styles.divider}></div>
            <a href="#activity" onClick={(e) => handleScroll(e, 'activity')} className={styles.link}><GitBranch size={16}/> GITHUB</a>
            <div className={styles.divider}></div>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className={styles.link}><Mail size={16}/> HELLO</a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className={styles.mobileNavWrapper}>
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className={styles.mobileNavToggle}
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.mobilePill}>
                <div className={styles.logoMobile}>
                  <CustomStar width={20} height={20} fill="#000" />
                </div>
                <div className={styles.hamburger}>
                  <span className={styles.hamburgerLine}></span>
                  <span className={styles.hamburgerLine}></span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.mobileMenuHeader}>
                <div className={styles.logoMobile}>
                  <CustomStar width={20} height={20} fill="#000" />
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                  <X size={28} strokeWidth={2} color="#fff" />
                </button>
              </div>
              
              <motion.div 
                className={styles.mobileLinksList}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <a href="#home" onClick={(e) => handleScroll(e, 'home')} className={styles.mobileLink}>
                  <Home size={18} /> HOME
                </a>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className={styles.mobileLink}>
                  <User size={18} /> ABOUT
                </a>
                <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className={styles.mobileLink}>
                  <Code size={18} /> SKILLS
                </a>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className={styles.mobileLink}>
                  <Briefcase size={18} /> PROJECTS
                </a>
                <a href="#activity" onClick={(e) => handleScroll(e, 'activity')} className={styles.mobileLink}>
                  <GitBranch size={18} /> ACTIVITY
                </a>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className={styles.mobileLink}>
                  <Mail size={18} /> CONTACT
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
