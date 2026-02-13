import { SectionWrapper } from "./SectionWrapper";

export function AboutSection() {
  return (
    <SectionWrapper id="about" variant="light">
      <div className="grid gap-12 md:grid-cols-[1.3fr_minmax(0,1fr)] items-start">
        <div>
          <div className="section-heading">About Company</div>
          <h2 className="section-title gold-underline">
            Industrial manufacturer with structured, repeatable output
          </h2>
          <p className="section-subtitle">
            SYNTECH INTERNATIONAL is a dedicated manufacturer and supplier of
            cylinder liners, sleeves and air cooled blocks operating from
            Rajkot, Gujarat. We are built around stable processes, disciplined
            inspection and the ability to support bulk, repetitive supply
            programs for OEMs and industrial buyers.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-[color:var(--color-text-dark)]">
                Manufacturer &amp; Supplier
              </h3>
              <p className="mt-3 text-sm text-[color:var(--color-text-muted)]">
                We do not trade in listed parts. We engineer, cast, machine and
                inspect cylinder liners and related components, with structured
                documentation and clear accountability for every batch.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-[color:var(--color-text-dark)]">
                Based in Rajkot, Gujarat
              </h3>
              <p className="mt-3 text-sm text-[color:var(--color-text-muted)]">
                Located within a mature engineering ecosystem, we leverage
                established foundry networks, tooling support and logistics to
                ship consistently to domestic and export customers.
              </p>
            </div>
          </div>
        </div>

        <div className="relative pl-6 border-l-2 border-[color:var(--color-accent-gold)] md:pl-8">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-dark)]">
            Built for procurement teams
          </div>
          <p className="mt-4 text-sm text-[color:var(--color-text-muted)]">
            Procurement managers rely on predictable lead times, controlled
            variation and transparent communication. Our internal planning,
            batch-wise traceability and controlled process windows are designed
            to support high-mix, repetitive orders—not one-off jobs.
          </p>
          <dl className="mt-8 space-y-4 text-sm text-[color:var(--color-text-muted)]">
            <div className="flex gap-3">
              <dt className="w-32 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-dark)]">
                Bulk supply
              </dt>
              <dd>
                Configured to handle scheduled annual volumes through framework
                agreements, call-off orders and project-based releases.
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-32 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-dark)]">
                Inspection
              </dt>
              <dd>
                Incoming, in-process and final inspection with documented gauge
                plans for critical dimensions, surface finish and metallurgy.
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-32 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-dark)]">
                Documentation
              </dt>
              <dd>
                Batch reports, dimensional records and material test
                certificates shared as part of every consignment where required.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </SectionWrapper>
  );
}

