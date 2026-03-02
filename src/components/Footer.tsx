import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer>
      <div className="bg-[#1B3A6B] text-white pt-16 pb-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <span
                    style={{ fontSize: "18px", fontWeight: 800, color: "#1B3A6B" }}
                  >
                    P
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: "18px", fontWeight: 700 }}>POWER</div>
                  <div
                    style={{
                      fontSize: "9px",
                      color: "#D4AF37",
                      letterSpacing: "1px",
                    }}
                  >
                    ORGANIZATION
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                People Organizing for Welfare, Equality & Reform. Transforming
                Pain Into Purpose — From New York to Pakistan.
              </p>
              <div className="flex gap-3 mt-5">
                {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#D4AF37",
                }}
              >
                Quick Links
              </h4>
              {[
                "About Us",
                "Our Work",
                "Donate",
                "Get Involved",
                "Events & News",
                "Gallery",
                "Contact",
              ].map((l) => (
                <Link
                  key={l}
                  href={`/${l.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="block py-1.5 text-white/70 hover:text-[#D4AF37] transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  {l}
                </Link>
              ))}
            </div>

            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#D4AF37",
                }}
              >
                Our Programs
              </h4>
              {[
                "Food Security",
                "Education",
                "Healthcare",
                "Women Empowerment",
                "Disaster Relief",
                "Community Development",
              ].map((p) => (
                <Link
                  key={p}
                  href={`/our-work/${p.toLowerCase().replace(/ /g, "-")}`}
                  className="block py-1.5 text-white/70 hover:text-[#D4AF37] transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  {p}
                </Link>
              ))}
            </div>

            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#D4AF37",
                }}
              >
                Contact Info
              </h4>
              <div className="space-y-3">
                <p
                  className="flex items-start gap-2 text-white/70"
                  style={{ fontSize: "14px" }}
                >
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#D4AF37]"
                  />{" "}
                  Centereach, NY 11720, USA
                </p>
                <p
                  className="flex items-center gap-2 text-white/70"
                  style={{ fontSize: "14px" }}
                >
                  <Mail size={16} className="shrink-0 text-[#D4AF37]" />{" "}
                  info@powerny.org
                </p>
                <p
                  className="flex items-center gap-2 text-white/70"
                  style={{ fontSize: "14px" }}
                >
                  <Phone size={16} className="shrink-0 text-[#D4AF37]" /> (631)
                  000-0000
                </p>
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#D4AF37",
                }}
              >
                Newsletter
              </h4>
              <p
                className="text-white/70 mb-4"
                style={{ fontSize: "14px" }}
              >
                Get updates on our programs and impact stories.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2.5 rounded-l-[6px] bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                  style={{ fontSize: "13px" }}
                />
                <button
                  className="bg-[#D4AF37] text-[#1B3A6B] px-4 rounded-r-[6px] hover:bg-[#c9a432] transition-colors"
                  style={{ fontSize: "13px", fontWeight: 700 }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#122a4f] text-white/50 py-4">
        <div
          className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ fontSize: "13px" }}
        >
          <p>
            &copy; 2026 POWER Organization. All rights reserved. Made with{" "}
            <Heart size={12} className="inline text-[#C0392B]" /> in New York.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/organizational-laws"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Organizational Laws
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
