"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the animation starts after element is visible */
  delay?: number;
  /** Direction from which the element slides in */
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("sr-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const directionClass = {
    up: "sr-from-up",
    down: "sr-from-down",
    left: "sr-from-left",
    right: "sr-from-right",
  }[direction];

  return (
    <div ref={ref} className={`sr-hidden ${directionClass} ${className}`}>
      {children}
    </div>
  );
}
