import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#F4F6F9]">
      <div className="text-center px-6">
        <div style={{ fontSize: "120px", fontWeight: 800, color: "#D4AF37", lineHeight: 1 }}>404</div>
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#1B3A6B", marginBottom: "12px" }}>Page Not Found</h1>
        <p style={{ fontSize: "16px", color: "#555555", marginBottom: "32px", maxWidth: "400px" }} className="mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white rounded-[6px] hover:bg-[#0D7377] transition-all" style={{ padding: "14px 28px", fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
          <Home size={16} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
