"use client";

import { useState } from "react";
import Link from "next/link";

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
  const [open, setOpen] = useState(false);

  return (
    <header
      data-nav-root
      className="fixed inset-x-0 top-0 z-40 border-b bg-white/95 backdrop-blur border-slate-200"
    >
      <div
        data-nav-inner
        className="container-page flex h-20 items-center justify-between gap-8"
      >
        <Link href="#top" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-sm border border-slate-300 flex items-center justify-center text-xs tracking-[0.18em] font-semibold text-[color:var(--color-text-dark)]">
            SY
          </div>
          <div className="leading-tight">
            <div className="text-xs md:text-sm font-semibold tracking-[0.24em] uppercase text-[color:var(--color-text-dark)]">
              Syntech International
            </div>
            <div className="text-[10px] md:text-[11px] text-[color:var(--color-text-muted)]">
              Manufacturer &amp; Supplier • Rajkot, Gujarat
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-[color:var(--color-text-dark)]">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link hover:text-[color:var(--color-secondary-dark)] transition-colors text-[11px] font-medium tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-sm bg-[color:var(--color-primary-bg)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] !text-white shadow-md shadow-slate-900/15 transition-transform duration-150 hover:bg-[color:var(--color-secondary-dark)] hover:scale-[1.03] active:scale-[0.98]"
          >
            Request Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-slate-300 text-[color:var(--color-text-dark)] lg:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 bg-[color:var(--color-text-dark)]" />
              <span className="block h-0.5 w-4 bg-[color:var(--color-text-dark)]" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-page py-4 space-y-3 text-[11px] tracking-wide uppercase text-[color:var(--color-text-dark)]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-1.5 border-b border-slate-200/80 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-3 inline-flex items-center justify-center rounded-sm bg-[color:var(--color-primary-bg)] px-4 py-2 text-[11px] font-semibold tracking-[0.22em] !text-white"
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

