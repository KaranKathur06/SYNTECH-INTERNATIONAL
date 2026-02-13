import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

const METALS = [
  "Steel",
  "Iron",
  "Aluminium",
  "Copper",
  "Brass",
  "Stainless Steel",
];

export function MetalsSection() {
  return (
    <SectionWrapper id="metals" variant="dark">
      <SectionHeader
        eyebrow="Metals We Handle"
        title="Controlled metallurgy for consistent performance"
        subtitle="Material selection and verification underpin every cylinder liner and block we manufacture. We work with approved foundries and controlled suppliers to ensure that chemistry, hardness and machinability meet drawing expectations."
        variant="dark"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {METALS.map((metal) => (
          <Card
            key={metal}
            variant="dark"
            className="flex h-28 items-center justify-center text-sm font-semibold tracking-[0.18em] uppercase text-slate-100"
          >
            {metal}
          </Card>
        ))}
      </div>

      <div className="mt-10 max-w-3xl text-sm text-slate-300">
        For each project, we align material grades with engine duty cycles,
        operating environments and customer standards. Heat numbers and material
        test certificates are mapped to every production batch, enabling full
        backward traceability from finished component to melt.
      </div>
    </SectionWrapper>
  );
}

