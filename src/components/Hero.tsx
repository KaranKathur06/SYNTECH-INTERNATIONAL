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
      className="relative isolate flex min-h-screen items-center bg-[color:var(--color-page-bg)] text-[color:var(--color-text-dark)]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/hero-industrial-texture.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(11,31,77,0.12),transparent_60%)]" />
      </div>

      <div className="container-page flex flex-col-reverse items-center gap-16 py-32 lg:flex-row lg:items-stretch">
        <div className="w-full max-w-xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
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
            className="mt-6 max-w-xl text-base md:text-lg text-[color:var(--color-text-muted)]"
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
              className="inline-flex items-center justify-center rounded-sm bg-[color:var(--color-primary-bg)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] !text-white shadow-md shadow-slate-900/15 hover:bg-[color:var(--color-secondary-dark)] transition-colors"
            >
              Request Bulk Quote
            </a>
            <div className="flex flex-col text-xs text-[color:var(--color-text-muted)]">
              <span className="font-semibold tracking-[0.22em] uppercase text-slate-500">
                Core Product Lines
              </span>
              <span className="mt-1 text-[color:var(--color-text-muted)]">
                Cylinder liners • Sleeves • Air cooled blocks
              </span>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 text-xs text-[color:var(--color-text-muted)] sm:grid-cols-4">
            <div>
              <dt className="font-semibold tracking-[0.22em] uppercase text-slate-500">
                Capacity
              </dt>
              <dd className="mt-1 text-sm text-[color:var(--color-text-dark)]">
                High-volume, repeatable batch production
              </dd>
            </div>
            <div>
              <dt className="font-semibold tracking-[0.22em] uppercase text-slate-500">
                Tolerances
              </dt>
              <dd className="mt-1 text-sm text-[color:var(--color-text-dark)]">
                CNC-controlled dimensional consistency
              </dd>
            </div>
            <div>
              <dt className="font-semibold tracking-[0.22em] uppercase text-slate-500">
                Inspection
              </dt>
              <dd className="mt-1 text-sm text-[color:var(--color-text-dark)]">
                Structured in-process &amp; final QC checks
              </dd>
            </div>
            <div>
              <dt className="font-semibold tracking-[0.22em] uppercase text-slate-500">
                Deliveries
              </dt>
              <dd className="mt-1 text-sm text-[color:var(--color-text-dark)]">
                Scheduled dispatches for OEM &amp; aftermarket
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative w-full max-w-lg lg:ml-auto">
          <div className="absolute -inset-8 -z-10 rounded-md border border-slate-200 bg-white" />
          <div className="relative overflow-hidden rounded-sm border border-slate-200 bg-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-slate-100/70" />
            <Image
              src="/images/hero-cnc-closeup.jpg"
              alt="Close-up of CNC machining of cylinder components"
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            <div className="relative p-5 md:p-6">
              <div className="inline-flex items-center gap-2 rounded-sm bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-text-dark)] border border-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-gold)]" />
                In-house casting, machining &amp; inspection
              </div>
              <div className="mt-20 flex flex-wrap gap-6 text-xs text-[color:var(--color-text-dark)]">
                <div>
                  <div className="font-semibold tracking-[0.22em] uppercase text-slate-500">
                    Core Focus
                  </div>
                  <div className="mt-1">
                    Cylinder liners &amp; air cooled blocks for diesel and gas
                    engines.
                  </div>
                </div>
                <div>
                  <div className="font-semibold tracking-[0.22em] uppercase text-slate-500">
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

