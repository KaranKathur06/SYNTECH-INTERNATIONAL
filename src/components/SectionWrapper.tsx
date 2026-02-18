import { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  variant?: "dark" | "light";
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  variant = "light",
  children,
  className = "",
}: SectionWrapperProps) {
  const base =
    "section-padding-y " +
    (variant === "dark"
      ? "bg-[color:var(--color-page-bg)] text-[color:var(--color-text-dark)]"
      : "bg-[color:var(--color-light-section)] text-[color:var(--color-text-dark)]");

  return (
    <section id={id} className={`${base} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

