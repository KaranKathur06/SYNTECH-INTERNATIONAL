import Image from "next/image";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1581091870622-7b9b9b7b2d0a?auto=format&fit=crop&w=1400&q=80",
    alt: "CNC machining in a manufacturing facility",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1581091012184-7a6d4a2d0e57?auto=format&fit=crop&w=1200&q=80",
    alt: "Precision measurement and quality inspection",
    className: "md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1581092919535-7146a80b8d2c?auto=format&fit=crop&w=1200&q=80",
    alt: "Industrial foundry work and casting operations",
    className: "md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1581094288333-ff3b8c9b0d15?auto=format&fit=crop&w=1200&q=80",
    alt: "Workshop tooling and machine shop environment",
    className: "md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
    alt: "Production line and industrial assembly",
    className: "md:col-span-1",
  },
];

export function FacilityGallerySection() {
  return (
    <SectionWrapper id="facility" variant="light">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Facility"
          title="Manufacturing environment built for repeatable output"
          subtitle="A snapshot of the machining, inspection and production discipline that supports bulk supply programs. Replace these images with your own facility photography for maximum credibility."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {GALLERY.map((item) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm shadow-slate-900/5 ${item.className}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(11,31,77,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="inline-flex max-w-full items-center rounded-sm border border-white/50 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-dark)] shadow-sm shadow-slate-900/10 backdrop-blur">
                  {item.alt}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-md border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 md:grid-cols-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Production readiness
            </div>
            <div className="mt-2 text-sm text-[color:var(--color-text-muted)]">
              Stable throughput planning for recurring purchase orders and scheduled dispatches.
            </div>
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              In-process controls
            </div>
            <div className="mt-2 text-sm text-[color:var(--color-text-muted)]">
              Documented inspection checkpoints to keep dimensional and metallurgical drift in check.
            </div>
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Clean documentation
            </div>
            <div className="mt-2 text-sm text-[color:var(--color-text-muted)]">
              Clear batch IDs, traceability and inspection records designed for procurement teams.
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
