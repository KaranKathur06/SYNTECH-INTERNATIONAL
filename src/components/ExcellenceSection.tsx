"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  "Raw Material Procurement",
  "Incoming Inspection",
  "Casting / Forging",
  "CNC Machining",
  "Surface Finishing",
  "Final Quality Control",
  "Packaging & Shipping",
];

const WHY_US = [
  "Strict Quality Control",
  "Skilled Workforce",
  "Bulk Production Capability",
  "Timely Delivery",
  "Industrial Infrastructure",
];

export function ExcellenceSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-process-step]", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 32,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="excellence" variant="light" className="bg-slate-100">
      <div ref={rootRef}>
        <SectionHeader
          eyebrow="Manufacturing Excellence"
          title="Operational discipline through structured processes"
          subtitle="Our manufacturing philosophy is built on repeatability. From raw material to packed component, every step is defined, measured and monitored to provide procurement teams with predictable supply and consistent performance in the field."
        />

        <div className="mt-12">
          <ol className="space-y-6">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step}
                data-process-step
                className="flex items-start gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--color-accent-gold)] bg-white text-[11px] font-semibold text-[color:var(--color-text-dark)]">
                    {index + 1}
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="mt-2 h-8 w-px bg-[color:var(--color-accent-gold)]/60" />
                  )}
                </div>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-dark)]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-sm text-[color:var(--color-text-muted)]">
              Every project starts with a clear understanding of the operating
              environment, expected life and critical-to-quality dimensions.
              Process sheets, inspection plans and tooling are aligned to this
              definition so that each batch behaves like the previous one—across
              thousands of components.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-dark)]">
              Why procurement teams choose Syntech
            </h3>
            <ul className="space-y-2 text-sm text-[color:var(--color-text-muted)]">
              {WHY_US.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

