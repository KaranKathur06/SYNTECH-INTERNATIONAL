"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-contact-root]", {
        opacity: 0,
        y: 32,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="contact" variant="dark">
      <div ref={rootRef} data-contact-root>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Discuss your cylinder liner and air cooled block requirements"
              subtitle="Share your drawings, annual volume estimates and target schedules. Our team will respond with a structured, technical response—never a generic catalogue quote."
              variant="dark"
            />

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Location
                </div>
                <div className="mt-1">
                  Rajkot, Gujarat, India
                  <br />
                  Industrial manufacturing cluster
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Phone
                </div>
                <div className="mt-1">+91-9099990905</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Email
                </div>
                <div className="mt-1">sales@syntech-international.com</div>
              </div>
            </div>
          </div>

          <div className="card-dark rounded-sm border border-slate-800 bg-slate-950/70 p-6">
            <form className="space-y-4 text-sm">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300"
                >
                  Name &amp; Company
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-sm border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[color:var(--color-accent-gold)]"
                  placeholder="Your name, company and location"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-sm border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[color:var(--color-accent-gold)]"
                  placeholder="name@company.com"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="volume"
                    className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300"
                  >
                    Annual Volume
                  </label>
                  <input
                    id="volume"
                    name="volume"
                    type="text"
                    className="mt-2 w-full rounded-sm border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[color:var(--color-accent-gold)]"
                    placeholder="e.g. 18,000 liners / year"
                  />
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300"
                  >
                    Project Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className="mt-2 w-full rounded-sm border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[color:var(--color-accent-gold)]"
                    placeholder="start date, ramp-up plan"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300"
                >
                  Application &amp; Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-sm border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[color:var(--color-accent-gold)]"
                  placeholder="Briefly describe application, component type, material expectations and any standards to be followed."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-sm bg-[color:var(--color-accent-gold)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-dark)] hover:bg-[#d4b35f] transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="h-64 overflow-hidden rounded-md border border-[color:var(--color-accent-gold)]/70 bg-slate-950/70 shadow-xl shadow-black/40">
            <iframe
              title="Syntech International - Rajkot, Gujarat"
              src="https://www.google.com/maps?q=Syntech+International,+No.-2/4+Street,+Punit+Nagar,+Jamnagar+Road,+150+Ft+Ring+Road,+Rajkot,+Gujarat,+360006,+India&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex items-center">
            <p className="text-sm text-slate-300">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent-gold)]">
                Partner With Syntech International
              </span>
              <br />
              <span className="mt-3 block">
                For procurement teams, we act as a stable, technically grounded
                manufacturing partner—capable of absorbing drawings, validating
                manufacturability and supporting long-term, bulk supply
                commitments.
              </span>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

