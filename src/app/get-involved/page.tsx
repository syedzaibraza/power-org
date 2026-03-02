import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Send, Heart, Building, Globe, Package, Users } from "lucide-react";

const partnerTiers = [
  { title: "Bronze Partner", amount: "$1,000 — $4,999", benefits: ["Logo on website", "Social media mention", "Annual impact report"], color: "#CD7F32" },
  { title: "Silver Partner", amount: "$5,000 — $14,999", benefits: ["All Bronze benefits", "Event sponsorship recognition", "Quarterly updates", "Team volunteer day"], color: "#C0C0C0" },
  { title: "Gold Partner", amount: "$15,000+", benefits: ["All Silver benefits", "Named program sponsorship", "Board presentation access", "Co-branded campaigns", "VIP event access"], color: "#D4AF37" },
];

const inKind = [
  { icon: Package, title: "Food & Supplies", desc: "Non-perishable food items, clothing, hygiene products, school supplies." },
  { icon: Heart, title: "Medical Equipment", desc: "First aid supplies, medical equipment, medicines for our health camps." },
  { icon: Building, title: "Office & Tech", desc: "Computers, printers, office supplies to support our operations." },
  { icon: Globe, title: "Professional Services", desc: "Legal, accounting, marketing, translation services pro bono." },
];

export default function GetInvolvedPage() {
  return (
    <div>
      <PageBanner
        title="Get Involved"
        subtitle="There are many ways to support POWER's mission"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Get Involved" }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <SectionHeader tag="Volunteer" title="Join Our Team" subtitle="Whether you're in New York or Pakistan, your time and skills can make a real difference." />
          <form
            action="https://formspree.io/f/xbdavgwz"
            method="POST"
            className="bg-white rounded-[12px] p-8"
            style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.1)" }}
          >
            <input type="hidden" name="_subject" value="New Get Involved submission from powerny.org" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]"
                  style={{ fontSize: "15px" }}
                />
              </div>
              <div>
                <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]"
                  style={{ fontSize: "15px" }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]"
                  style={{ fontSize: "15px" }}
                />
              </div>
              <div>
                <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Location *</label>
                <select
                  name="location"
                  required
                  className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]"
                  style={{ fontSize: "15px" }}
                >
                  <option value="">Select...</option>
                  <option>New York, USA</option>
                  <option>Pakistan — Punjab</option>
                  <option>Pakistan — Sindh</option>
                  <option>Pakistan — KPK</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Area of Interest *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {["Food Distribution", "Education", "Healthcare", "Women's Programs", "Events & Fundraising", "Social Media & Marketing"].map((a) => (
                  <label key={a} className="flex items-center gap-2 cursor-pointer bg-[#F4F6F9] rounded-[6px] px-3 py-2.5 hover:bg-[#D4AF37]/10 transition-colors">
                    <input type="checkbox" name="interests" value={a} className="accent-[#0D7377]" />
                    <span style={{ fontSize: "13px", color: "#1A1A1A" }}>{a}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Why do you want to volunteer?</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] resize-none"
                style={{ fontSize: "15px" }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0D7377] text-white rounded-[6px] py-4 hover:bg-[#0a5c5f] transition-colors flex items-center justify-center gap-2"
              style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}
            >
              <Send size={16} /> Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader tag="Corporate Partners" title="Partnership Opportunities" subtitle="Partner with POWER to amplify your social impact." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTiers.map((t) => (
              <div key={t.title} className="bg-white rounded-[12px] p-8 text-center border-t-4 transition-all hover:-translate-y-1" style={{ borderColor: t.color, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4" style={{ background: t.color + "20" }}>
                  <Users size={28} style={{ color: t.color }} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#1B3A6B", marginBottom: "4px" }}>{t.title}</h3>
                <p style={{ fontSize: "16px", fontWeight: 700, color: t.color, marginBottom: "16px" }}>{t.amount}</p>
                <ul className="space-y-2 text-left">
                  {t.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ fontSize: "14px", color: "#555555" }}>
                      <span className="text-[#27AE60] mt-0.5">&#10003;</span> {b}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full border-2 border-[#1B3A6B] text-[#1B3A6B] rounded-[6px] py-3 hover:bg-[#1B3A6B] hover:text-white transition-colors" style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Become a Partner
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-white py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <SectionHeader tag="In-Kind Giving" title="Donate Goods & Services" subtitle="Can't donate money? Your goods and professional services are equally valuable." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inKind.map((k) => (
              <div key={k.title} className="bg-[#F4F6F9] rounded-[12px] p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0D7377]/10 flex items-center justify-center shrink-0">
                  <k.icon size={22} className="text-[#0D7377]" />
                </div>
                <div>
                  <h4 style={{ fontSize: "18px", fontWeight: 600, color: "#1B3A6B", marginBottom: "4px" }}>{k.title}</h4>
                  <p style={{ fontSize: "14px", color: "#555555", lineHeight: 1.6 }}>{k.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8" style={{ fontSize: "15px", color: "#555555" }}>
            To arrange in-kind donations, contact us at <a href="mailto:info@powerny.org" className="text-[#0D7377] hover:underline" style={{ fontWeight: 600 }}>info@powerny.org</a>
          </p>
        </div>
      </section>
    </div>
  );
}
