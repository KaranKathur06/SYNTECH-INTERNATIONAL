import type { ReactNode } from "react";

type CardProps = {
  variant?: "light" | "dark";
  children: ReactNode;
  className?: string;
};

export function Card({ variant = "light", children, className = "" }: CardProps) {
  const base =
    "rounded-sm border transition-all duration-300 ease-in-out will-change-transform hover:-translate-y-1 hover:shadow-xl";
  const variantClass =
    variant === "light"
      ? "bg-white shadow-lg shadow-slate-900/15 border-slate-200/80 hover:bg-gray-50 hover:border-[color:var(--color-accent-gold)]/80"
      : "bg-white shadow-lg shadow-slate-900/10 border-slate-200/80 hover:bg-slate-50 hover:border-[color:var(--color-accent-gold)]/80";

  return (
    <article
      className={`${base} ${variantClass} border-t-2 border-t-[color:var(--color-accent-gold)] hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      {children}
    </article>
  );
}

