import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
  image?: string;
}

export function PageBanner({
  title,
  subtitle,
  breadcrumbs,
  image,
}: PageBannerProps) {
  return (
    <div
      className="relative flex items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "320px", background: image ? undefined : "#1B3A6B" }}
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1B3A6B]/80" />
        </>
      )}
      <div className="relative z-10 px-6 py-16">
        {breadcrumbs && (
          <div
            className="flex items-center justify-center gap-2 mb-4"
            style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {b.path ? (
                  <Link
                    href={b.path}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-[#D4AF37]">{b.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        <div className="w-[60px] h-[3px] bg-[#D4AF37] mx-auto mt-4 mb-3" />
        {subtitle && (
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "600px",
            }}
            className="mx-auto"
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
