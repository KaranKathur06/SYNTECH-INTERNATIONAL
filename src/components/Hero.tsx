"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("[data-hero-heading]", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          "[data-hero-sub]",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          "[data-hero-buttons]>a, [data-hero-buttons]>div",
          {
            opacity: 0,
            y: 16,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          "[data-hero-line]",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4",
        );
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative isolate flex min-h-screen items-center bg-[color:var(--color-primary-bg)] text-slate-50"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/hero-industrial-texture.jpg')] bg-cover bg-center opacity-[0.17]" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950/95 to-slate-900/95" />
      </div>

      <div className="container-page flex flex-col-reverse items-center gap-16 py-32 lg:flex-row lg:items-stretch">
        <div className="w-full max-w-xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
            Precision Engineered Components
          </div>
          <h1
            data-hero-heading
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
          >
            Precision Engineered Cylinder Liners &amp; Air Cooled Blocks
          </h1>
          <div
            data-hero-line
            className="mt-6 h-[2px] w-24 bg-[color:var(--color-accent-gold)]"
          />
          <p
            data-hero-sub
            className="mt-6 max-w-xl text-base md:text-lg text-slate-300"
          >
            Trusted manufacturer and supplier based in Rajkot, Gujarat,
            delivering bulk cylinder liners, sleeves and air cooled blocks with
            disciplined casting, machining and 100% traceable inspection.
          </p>

          <div
            data-hero-buttons
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-[color:var(--color-accent-gold)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-dark)] shadow-md shadow-black/50 hover:bg-[#d4b35f] transition-colors"
            >
              Request Bulk Quote
            </a>
            <div className="flex flex-col text-xs text-slate-300">
              <span className="font-semibold tracking-[0.22em] uppercase text-slate-400">
                Core Product Lines
              </span>
              <span className="mt-1 text-slate-300">
                Cylinder liners • Sleeves • Air cooled blocks
              </span>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 text-xs text-slate-300 sm:grid-cols-4">
            <div>
              <dt className="font-semibold tracking-[0.22em] uppercase text-slate-400">
                Capacity
              </dt>
              <dd className="mt-1 text-sm text-slate-100">
                High-volume, repeatable batch production
              </dd>
            </div>
            <div>
              <dt className="font-semibold tracking-[0.22em] uppercase text-slate-400">
                Tolerances
              </dt>
              <dd className="mt-1 text-sm text-slate-100">
                CNC-controlled dimensional consistency
              </dd>
            </div>
            <div>
              <dt className="font-semibold tracking-[0.22em] uppercase text-slate-400">
                Inspection
              </dt>
              <dd className="mt-1 text-sm text-slate-100">
                Structured in-process &amp; final QC checks
              </dd>
            </div>
            <div>
              <dt className="font-semibold tracking-[0.22em] uppercase text-slate-400">
                Deliveries
              </dt>
              <dd className="mt-1 text-sm text-slate-100">
                Scheduled dispatches for OEM &amp; aftermarket
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative w-full max-w-lg lg:ml-auto">
          <div className="absolute -inset-8 -z-10 rounded-md border border-slate-700/70 bg-slate-950/40" />
          <div className="relative overflow-hidden rounded-sm border border-slate-700/80 bg-slate-950/80">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-slate-800/60" />
            <Image
              src="/images/hero-cnc-closeup.jpg"
              alt="Close-up of CNC machining of cylinder components"
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            <div className="relative p-5 md:p-6">
              <div className="inline-flex items-center gap-2 rounded-sm bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300 border border-slate-700/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-gold)]" />
                In-house casting, machining &amp; inspection
              </div>
              <div className="mt-20 flex flex-wrap gap-6 text-xs text-slate-200">
                <div>
                  <div className="font-semibold tracking-[0.22em] uppercase text-slate-400">
                    Core Focus
                  </div>
                  <div className="mt-1">
                    Cylinder liners &amp; air cooled blocks for diesel and gas
                    engines.
                  </div>
                </div>
                <div>
                  <div className="font-semibold tracking-[0.22em] uppercase text-slate-400">
                    Supply
                  </div>
                  <div className="mt-1">
                    OEMs, export buyers &amp; structured aftermarket channels.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

