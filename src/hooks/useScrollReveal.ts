"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".reveal");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add("visible"),
              i * 80
            );
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return containerRef;
}