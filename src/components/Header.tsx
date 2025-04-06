'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = [
    { id: 'home', label: 'דף הבית' },
    { id: 'about', label: 'אודות' },
    { id: 'services', label: 'תחומי התמחות' },
    { id: 'team', label: 'הצוות המשפטי' },
    { id: 'cases', label: 'תיקים בולטים' },
    { id: 'contact', label: 'צור קשר' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" dir="rtl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-primary font-serif">
            <h1 className="text-2xl md:text-3xl font-bold">משרד עורכי דין גמא</h1>
            <p className="text-xs md:text-sm text-secondary">משפט אופנה וקניין רוחני</p>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`py-2 px-1 font-medium transition-all duration-300 border-b-2 hover:text-secondary ${
                    activeSection === item.id
                      ? 'border-secondary text-secondary'
                      : 'border-transparent text-primary'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary hover:text-secondary transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-right py-2 px-1 font-medium transition-all duration-300 border-r-4 ${
                      activeSection === item.id
                        ? 'border-secondary text-secondary'
                        : 'border-transparent text-primary hover:border-secondary/30 hover:text-secondary/70'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;