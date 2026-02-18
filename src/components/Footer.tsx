import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container-page py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[color:var(--color-text-muted)]">
        <div>
          <div className="font-semibold tracking-[0.22em] uppercase text-[color:var(--color-text-dark)]">
            Syntech International
          </div>
          <div className="mt-1">
            Precision Engineered Cylinder Liners, Sleeves &amp; Air Cooled
            Blocks
          </div>
          <div className="mt-1 text-slate-500">
            Rajkot, Gujarat • Serving OEMs, Tier-1s &amp; Industrial Buyers
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1 text-[11px]">
          <div>© {new Date().getFullYear()} SYNTECH INTERNATIONAL. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="#contact" className="hover:text-[color:var(--color-text-dark)]">
              Contact
            </Link>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">
              Built for industrial procurement decision makers.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

