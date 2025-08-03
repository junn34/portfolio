'use client';

import { useState, useEffect } from 'react';

import MobileNavigation from './mobile/MobileNavigation';
import HeroSection from './components/HeroSection';

import ContactSection from './components/ContactSection';
import ResumeSection from './components/ResumeSection';
import AboutSection from './components/AboutSection';
import Footer from './layout/Footer';
import Header from './layout/Header';
import ProjectSection from './components/ProjectSection';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <MobileNavigation />
      <HeroSection />

      <AboutSection />
      <ProjectSection />
      <ResumeSection />

      <ContactSection />

      <Footer />
    </div>
  );
}
