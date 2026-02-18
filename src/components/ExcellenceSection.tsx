import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";

const PROCESS_STEPS = [
  {
    title: "Raw material procurement",
    body: "Verified sources, controlled chemistry and traceable heat numbers before production begins.",
  },
  {
    title: "Incoming inspection",
    body: "Dimensional checks and material verification aligned to drawing and customer requirements.",
  },
  {
    title: "Casting & forging",
    body: "Stable process windows and documented parameters to ensure consistent metallurgy.",
  },
  {
    title: "CNC machining",
    body: "Bore geometry, surface finish and fits delivered with CNC-controlled repeatability.",
  },
  {
    title: "Surface finishing",
    body: "Deburring, cleaning and protective finishing designed for handling and shipment integrity.",
  },
  {
    title: "Final quality control",
    body: "Batch-wise inspection records and gauge plans for critical-to-quality features.",
  },
  {
    title: "Packaging & dispatch",
    body: "Structured packing and labeling to protect parts and reduce receiving time for buyers.",
  },
];

const WHY_US = [
  "Strict quality control",
  "Skilled workforce",
  "Bulk production capability",
  "On-time dispatch planning",
  "Industrial infrastructure",
];

export function ExcellenceSection() {
  return (
    <SectionWrapper id="excellence" variant="light" className="bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Manufacturing Excellence"
          title="Operational discipline through structured processes"
          subtitle="Our manufacturing philosophy is built on repeatability. From raw material to packed component, every step is defined, measured and monitored to provide procurement teams with predictable supply and consistent performance in the field."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {PROCESS_STEPS.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-md border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 hover:border-[color:var(--color-accent-gold)]/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[color:var(--color-primary-bg)] text-[11px] font-semibold tracking-[0.22em] !text-white shadow-sm shadow-slate-900/10 ring-1 ring-slate-900/5 transition-transform duration-300 group-hover:scale-[1.03]">
                      <span className="absolute inset-0 rounded-md bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)] opacity-80" />
                      <span className="relative">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-dark)]">
                        {step.title}
                      </div>
                      <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-md border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Repeatability
                  </div>
                  <div className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                    Process sheets, inspection plans and tooling are aligned so that each batch behaves like the previous one.
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Traceability
                  </div>
                  <div className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                    Heat numbers and inspection records mapped to production lots for audit-ready procurement workflows.
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Consistency
                  </div>
                  <div className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                    Dimensional stability and surface finish control for OEM and long-run replacement programs.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-md border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-dark)]">
              Why procurement teams choose Syntech
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-text-muted)]">
              {WHY_US.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-md border border-slate-200 bg-slate-50 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Procurement-ready outputs
              </div>
              <div className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                Batch reports, inspection records and structured communication designed to support audits and long-term supply programs.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </SectionWrapper>
  );
}

