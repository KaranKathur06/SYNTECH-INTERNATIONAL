"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseRevealOptions = {
  targetSelector?: string;
  stagger?: number;
};

export function useReveal(options: UseRevealOptions = {}) {
  const { targetSelector = "[data-reveal]", stagger = 0.12 } = options;
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(targetSelector, {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 32,
        duration: 0.6,
        ease: "power2.out",
        stagger,
      });
    }, rootRef);

    return () => ctx.revert();
  }, [targetSelector, stagger]);

  return rootRef;
}

