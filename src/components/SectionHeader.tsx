type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  variant?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  variant = "light",
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const titleClass =
    variant === "dark" ? "section-title-light gold-underline" : "section-title gold-underline";
  const subtitleClass =
    variant === "dark" ? "section-subtitle-light" : "section-subtitle";
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      <div className="section-heading">{eyebrow}</div>
      <h2 className={titleClass}>{title}</h2>
      <p className={subtitleClass}>{subtitle}</p>
    </div>
  );
}

