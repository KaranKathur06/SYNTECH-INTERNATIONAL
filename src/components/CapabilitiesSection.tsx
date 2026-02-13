"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  {
    title: "Casting",
    body: "Controlled casting of cylinder liners and blocks with documented melt chemistry, moulding parameters and riser design for repeatable metallurgy.",
  },
  {
    title: "Forging",
    body: "Precision forgings for sleeves and associated components where grain flow, strength and machinability are critical to engine performance.",
  },
  {
    title: "Fabrication",
    body: "Robust fabricated structures and adapters manufactured to drawing for integration into engine, compressor and industrial assemblies.",
  },
  {
    title: "Machining",
    body: "CNC turning, boring and honing of critical bores and surfaces with controlled geometry, surface finish and fitment-ready tolerances.",
  },
];

export function CapabilitiesSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-capability-card]", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
      });
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <SectionWrapper id="capabilities" variant="dark">
      <div ref={rootRef}>
        <SectionHeader
          eyebrow="Capabilities"
          title="Integrated casting, machining and inspection under one roof"
          subtitle="Our structure is built to support OEM drawings, project-specific requirements and long-term supply programs with stable process windows and documented controls across every operation."
          variant="dark"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item) => (
            <Card
              key={item.title}
              data-capability-card
              className="relative flex h-full flex-col px-6 py-7"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {item.title}
              </div>
              <div className="mt-4 h-[2px] w-10 bg-[color:var(--color-accent-gold)]" />
              <p className="mt-5 text-sm text-slate-700">{item.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

