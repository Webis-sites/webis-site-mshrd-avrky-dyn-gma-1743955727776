'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default behavior if no handler is provided
      console.log('CTA clicked');
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900 text-right" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="משרד עורכי דין גמא"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-end justify-center px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-secondary"
          >
            <h3 className="font-serif text-xl font-light tracking-wider text-secondary">משרד עורכי דין גמא</h3>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            משרד עורכי דין <span className="text-primary">מוביל</span> בישראל
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mb-8 text-lg font-light leading-relaxed text-gray-200 md:text-xl"
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <button
              onClick={handleCtaClick}
              className="group relative overflow-hidden rounded-md bg-primary px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
            >
              <span className="relative z-10">קבע תור עכשיו</span>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isLoaded ? { opacity: 0.15, x: 0 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary blur-3xl"
      ></motion.div>
    </section>
  );
};

export default HeroSection;