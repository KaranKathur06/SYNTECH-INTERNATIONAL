import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";

const INDUSTRIES = [
  {
    title: "Automotive OEM & Aftermarket",
    body: "Engine cylinder liners and blocks for commercial vehicles, tractors and industrial engines with stable batch-wise performance.",
  },
  {
    title: "Aerospace & Defense",
    body: "Precision-machined liners and sleeves for ground support equipment and auxiliary power units where reliability is non-negotiable.",
  },
  {
    title: "Electronics Manufacturing",
    body: "Custom machined components and thermal management parts for production machinery and high-duty electronic assemblies.",
  },
  {
    title: "Robotics & Automation Systems",
    body: "Machined elements and sleeves integrated into motion systems and high-cycle automation modules.",
  },
  {
    title: "Renewable Energy",
    body: "Components for engine-driven gensets and auxiliary systems in solar, wind and hybrid power projects.",
  },
  {
    title: "Oil & Gas Equipment",
    body: "Wear-resistant liners and machined parts for compressors, pumping units and associated equipment.",
  },
  {
    title: "Marine & Shipbuilding",
    body: "Cylinder liners and sleeves supporting marine engines and auxiliary power systems with corrosion-aware material selection.",
  },
];

export function IndustriesSection() {
  return (
    <SectionWrapper id="industries" variant="light">
      <SectionHeader
        eyebrow="Industries We Serve"
        title="Engineered for demanding industrial environments"
        subtitle="Our components serve as critical elements in engines and industrial systems operating in demanding, high-load conditions. We align our manufacturing discipline with the expectations of OEM and project procurement teams."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((industry) => (
          <div
            key={industry.title}
            className="space-y-3 rounded-sm border border-slate-200/70 bg-white/90 px-5 py-5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl hover:border-[color:var(--color-accent-gold)]/80"
            data-reveal
          >
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-[color:var(--color-text-dark)]">
              {industry.title}
            </h3>
            <p className="text-sm text-[color:var(--color-text-muted)]">
              {industry.body}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

