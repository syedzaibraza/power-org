"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "Our Story", path: "/about" },
      { label: "Chairperson's Message", path: "/chairperson" },
      { label: "Youth Ambassador", path: "/youth-ambassador" },
    ],
  },
  {
    label: "Our Work",
    path: "/our-work",
    children: [
      { label: "All Programs", path: "/our-work" },
      { label: "Food Security", path: "/our-work/food-security" },
      { label: "Education", path: "/our-work/education" },
      { label: "Healthcare", path: "/our-work/healthcare" },
      { label: "Women Empowerment", path: "/our-work/women-empowerment" },
      { label: "Disaster Relief", path: "/our-work/disaster-relief" },
      { label: "Community Development", path: "/our-work/community-development" },
    ],
  },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Events & News", path: "/events" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      <div
        className={`hidden md:block bg-[#F4F6F9] transition-all duration-300 ${isScrolled ? "h-0 overflow-hidden opacity-0" : "h-[40px] opacity-100"
          } `}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          <div
            className="flex items-center gap-5"
            style={{ fontSize: "13px", color: "#555555" }}
          >
            <span className="flex items-center gap-1.5">
              <Phone size={13} /> (631) 000-0000
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} /> info@powerny.org
            </span>
            <span className="hidden md:inline">Centereach, NY 11720</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-[#555555] hover:text-[#1B3A6B] transition-colors"
            >
              <Facebook size={15} />
            </a>
            <a
              href="#"
              className="text-[#555555] hover:text-[#1B3A6B] transition-colors"
            >
              <Instagram size={15} />
            </a>
            <a
              href="#"
              className="text-[#555555] hover:text-[#1B3A6B] transition-colors"
            >
              <Youtube size={15} />
            </a>
            <span
              className="text-[#555555] text-[12px] ml-2 cursor-pointer hover:text-[#1B3A6B]"
            >
              EN | اردو
            </span>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 bg-[#1B3A6B] transition-shadow duration-300 ${isScrolled ? "shadow-lg" : ""
          }`}
        style={{ height: "75px" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center">
              <span
                style={{ fontSize: "18px", fontWeight: 800, color: "#1B3A6B" }}
              >
                P
              </span>
            </div>
            <div className="hidden sm:block">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                }}
              >
                POWER
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 400,
                  color: "#D4AF37",
                  letterSpacing: "1px",
                }}
              >
                ORGANIZATION
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setOpenDropdown(link.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.path}
                  className={`px-3 py-2 text-white/90 hover:text-white transition-colors flex items-center gap-1 ${pathname === link.path ? "text-[#D4AF37]" : ""
                    }`}
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  {link.label}
                  {link.children && <ChevronDown size={13} />}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl py-2 min-w-[220px] border border-gray-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className="block px-4 py-2.5 text-[#1A1A1A] hover:bg-[#F4F6F9] hover:text-[#0D7377] transition-colors"
                        style={{ fontSize: "14px", fontWeight: 400 }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden md:block bg-[#C0392B] text-white rounded-[6px] hover:bg-[#A93226] transition-all hover:-translate-y-0.5"
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                boxShadow: "0 4px 15px rgba(192,57,43,0.4)",
              }}
            >
              Donate Now
            </Link>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#1B3A6B] pt-[115px] overflow-y-auto lg:hidden">
          <div className="px-6 py-4">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="border-b border-white/10"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={link.path}
                    className="block py-4 text-white"
                    style={{ fontSize: "18px", fontWeight: 500 }}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      className="text-white/60 p-2"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  )}
                </div>
                {link.children && openDropdown === link.label && (
                  <div className="pl-4 pb-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className="block py-2.5 text-white/70 hover:text-[#D4AF37] transition-colors"
                        style={{ fontSize: "15px" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6">
              <Link
                href="/donate"
                className="block text-center bg-[#C0392B] text-white rounded-[6px] py-4"
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
