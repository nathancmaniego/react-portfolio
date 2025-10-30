"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = "center",
  className = "" 
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const reduceMotion = isMobile;

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
      viewport={{ once: true }}
      style={{ willChange: 'opacity, transform' }}
      className={`${alignClasses[align]} ${className}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : 0.1 }}
        viewport={{ once: true }}
        style={{ willChange: 'opacity, transform' }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : 0.2 }}
          viewport={{ once: true }}
          style={{ willChange: 'opacity, transform' }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;