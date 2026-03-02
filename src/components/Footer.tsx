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

const socialLinks = [
  { href: "https://www.facebook.com/tahira.din.5?mibextid=ZbWKwL", Icon: Facebook },
  { href: "https://x.com/din_tahira", Icon: Twitter },
  { href: "https://www.instagram.com/tahiragee/", Icon: Instagram },
  { href: "https://www.youtube.com/@PowerByTahiraDin", Icon: Youtube },
  { href: "https://www.tiktok.com/@tahiradin580" },
];

export function Footer() {
  return (
    <footer>
      <div className="bg-[#1B3A6B] text-white pt-16 pb-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/PowerLogo.png"
                  alt="POWER Organization"
                  className="h-16 w-16 object-contain"
                />
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
                {socialLinks.map(({ href, Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center hover:bg-[#D4AF37] transition-colors bg-white/10 aspect-square shrink-0"
                  >
                    {Icon ? <Icon size={18} /> : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" /></svg>
                    )}
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
                "Video Gallery",
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
                  2 Domino Way, Centereach, NY 11720, USA
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
                  <Phone size={16} className="shrink-0 text-[#D4AF37]" /> +631-615-3001
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
