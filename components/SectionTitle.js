"use client";
import { useInView } from "@/hooks/useInView";

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = "center",
  className = "" 
}) => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? "visible" : ""} ${alignClasses[align]} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
