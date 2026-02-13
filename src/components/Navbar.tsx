"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#metals" },
  { label: "Excellence", href: "#excellence" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);

    const ctx = gsap.context(() => {
      gsap.from("[data-nav-root]", {
        opacity: 0,
        y: -24,
        duration: 0.6,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        start: 0,
        end: 160,
        onUpdate: (self) => {
          const compressed = self.progress > 0.35;
          gsap.to("[data-nav-inner]", {
            height: compressed ? 64 : 80,
            duration: 0.2,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      ctx.revert();
    };
  }, []);

  return (
    <header
      data-nav-root
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        solid
          ? "bg-slate-900/85 backdrop-blur border-[color:var(--color-accent-gold)]/60"
          : "bg-slate-900/10 border-transparent"
      }`}
    >
      <div
        data-nav-inner
        className="container-page flex h-20 items-center justify-between gap-8 transition-[height] duration-200"
      >
        <Link href="#top" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-sm border border-slate-500 flex items-center justify-center text-xs tracking-[0.18em] font-semibold text-slate-200">
            SY
          </div>
          <div className="leading-tight">
            <div className="text-xs md:text-sm font-semibold tracking-[0.24em] uppercase text-slate-200">
              Syntech International
            </div>
            <div className="text-[10px] md:text-[11px] text-slate-400">
              Manufacturer &amp; Supplier • Rajkot, Gujarat
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-200">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link hover:text-white transition-colors text-[11px] font-medium tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-sm bg-[color:var(--color-accent-gold)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-dark)] shadow-md shadow-amber-900/40 transition-transform duration-150 hover:bg-[#d4b35f] hover:scale-[1.03] active:scale-[0.98]"
          >
            Request Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-slate-700 text-slate-200 lg:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 bg-slate-200" />
              <span className="block h-0.5 w-4 bg-slate-200" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/98">
          <div className="container-page py-4 space-y-3 text-[11px] tracking-wide uppercase text-slate-200">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-1.5 border-b border-slate-800/60 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-3 inline-flex items-center justify-center rounded-sm bg-[color:var(--color-accent-gold)] px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-[color:var(--color-text-dark)]"
              onClick={() => setOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

