'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaBalanceScale, FaUsers, FaBriefcase, FaAward } from 'react-icons/fa';

interface StatisticProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const Statistic: React.FC<StatisticProps> = ({ icon, number, label }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-primary text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-primary mb-1">{number}</div>
      <div className="text-gray-600 text-center">{label}</div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section dir="rtl" className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              אודות משרד עורכי דין גמא
            </h2>
            <motion.p variants={itemVariants} className="text-gray-700 mb-6 leading-relaxed text-lg">
              אנחנו משרד עורכי דין מוביל בתחום האופנה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-700 mb-6 leading-relaxed">
              משרדנו מציע ייעוץ משפטי מקיף בכל תחומי האופנה, כולל הגנה על קניין רוחני, חוזי עבודה עם מעצבים ודוגמנים, רגולציה בתעשיית האופנה, סימני מסחר וזכויות יוצרים, וייצוג בסכסוכים משפטיים.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-700 mb-8 leading-relaxed">
              הצוות המקצועי שלנו כולל עורכי דין בעלי ניסיון רב בתחום האופנה, המחויבים להשגת התוצאות הטובות ביותר עבור לקוחותינו. אנו מאמינים בגישה אישית ומותאמת לכל לקוח, תוך הבנה מעמיקה של צרכיו העסקיים והמשפטיים.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md">
                צור קשר עכשיו
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={imageVariants} 
            className="order-1 lg:order-2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
              alt="משרד עורכי דין גמא"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white p-8 rounded-lg shadow-md"
        >
          <motion.div variants={itemVariants}>
            <Statistic 
              icon={<FaBalanceScale />} 
              number="15+" 
              label="שנות ניסיון" 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Statistic 
              icon={<FaUsers />} 
              number="500+" 
              label="לקוחות מרוצים" 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Statistic 
              icon={<FaBriefcase />} 
              number="750+" 
              label="תיקים מוצלחים" 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Statistic 
              icon={<FaAward />} 
              number="25+" 
              label="פרסים והוקרות" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;