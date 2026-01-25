"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for performant scroll-triggered animations
 * Uses Intersection Observer API (no Framer Motion overhead)
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.triggerOnce - Only trigger animation once
 * @returns {[React.RefObject, boolean]} - Ref to attach and visibility state
 */
export function useInView({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // If user prefers reduced motion, show immediately
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

/**
 * Hook that returns a ref and className for easy animation
 * @param {string} animationType - 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in'
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} - { ref, className }
 */
export function useAnimateOnScroll(animationType = "fade-in", options = {}) {
  const [ref, isVisible] = useInView(options);
  const className = `${animationType} ${isVisible ? "visible" : ""}`;
  return { ref, className, isVisible };
}

export default useInView;
