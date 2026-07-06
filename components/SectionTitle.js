"use client";
import { useInView } from "@/hooks/useInView";

const SectionTitle = ({
  title,
  subtitle,
  action,
  align = "left",
  className = "",
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
      className={`fade-in ${isVisible ? "visible" : ""} ${className}`}
    >
      <div
        className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 ${
          align === "center" ? "sm:justify-center" : ""
        }`}
      >
        <div className={alignClasses[align]}>
          <h2 className="display-heading text-4xl sm:text-5xl md:text-6xl text-ink">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-gray-600 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="shrink-0 pb-1">{action}</div>}
      </div>
    </div>
  );
};

export default SectionTitle;
