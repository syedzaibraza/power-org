interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <span
        className="block mb-2"
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#D4AF37",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
        }}
      >
        {tag}
      </span>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 700,
          color: light ? "#FFFFFF" : "#1B3A6B",
          lineHeight: 1.2,
          marginBottom: "12px",
        }}
      >
        {title}
      </h2>
      <div
        className={`w-[60px] h-[3px] bg-[#D4AF37] ${centered ? "mx-auto" : ""} mb-4`}
      />
      {subtitle && (
        <p
          style={{
            fontSize: "18px",
            color: light ? "rgba(255,255,255,0.8)" : "#555555",
            maxWidth: "640px",
            lineHeight: 1.7,
          }}
          className={centered ? "mx-auto" : ""}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
