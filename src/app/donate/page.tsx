"use client";

import { useState } from "react";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Check, Shield, CreditCard, Lock, Heart, BookOpen, Stethoscope, Users } from "lucide-react";

const tiers = [
  { amount: 25, title: "Supporter", impact: "Feeds a family of 4 for one week", color: "#0D7377" },
  { amount: 50, title: "Champion", impact: "Provides school supplies for 5 children", color: "#1B3A6B" },
  { amount: 100, title: "Hero", impact: "Funds a woman's skills training month", color: "#C0392B", popular: true },
  { amount: 250, title: "Patron", impact: "Sponsors a medical camp for 50 patients", color: "#D4AF37" },
  { amount: 500, title: "Guardian", impact: "Builds a clean water well section", color: "#27AE60" },
  { amount: 1000, title: "Visionary", impact: "Funds a classroom for 30 children", color: "#1B3A6B" },
];

const allocation = [
  { label: "Programs & Services", pct: 82, color: "#1B3A6B", icon: Heart },
  { label: "Education Initiatives", pct: 8, color: "#0D7377", icon: BookOpen },
  { label: "Healthcare", pct: 6, color: "#27AE60", icon: Stethoscope },
  { label: "Admin & Operations", pct: 4, color: "#D4AF37", icon: Users },
];

export default function DonatePage() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <div>
      <PageBanner
        title="Make a Donation"
        subtitle="Every dollar transforms lives — from New York to Pakistan"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Donate" }]}
      />

      {/* <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader tag="Your Impact" title="Choose Your Level of Giving" subtitle="See the real-world impact of every dollar you donate." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.amount} className={`bg-white rounded-[12px] p-6 relative transition-all hover:-translate-y-1 cursor-pointer border-2 ${selectedAmount === t.amount ? "border-[#D4AF37]" : "border-transparent"}`} style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }} onClick={() => { setSelectedAmount(t.amount); setCustomAmount(""); }}>
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C0392B] text-white px-4 py-1 rounded-full" style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>Most Popular</span>
                )}
                <div className="text-center">
                  <div style={{ fontSize: "36px", fontWeight: 800, color: t.color }}>${t.amount}</div>
                  <div style={{ fontSize: "16px", fontWeight: 600, color: "#1B3A6B", margin: "4px 0" }}>{t.title}</div>
                  <div className="w-[40px] h-[2px] bg-[#D4AF37] mx-auto my-3" />
                  <p style={{ fontSize: "14px", color: "#555555", lineHeight: 1.6 }}>{t.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <SectionHeader tag="Donate Now" title="Complete Your Donation" />
          <div className="bg-white rounded-[12px] p-8" style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.1)" }}>
            <div className="flex justify-center mb-8">
              <div className="flex bg-[#F4F6F9] rounded-[6px] p-1">
                {(["once", "monthly"] as const).map((f) => (
                  <button key={f} onClick={() => setFrequency(f)} className={`px-6 py-2.5 rounded-[4px] transition-all ${frequency === f ? "bg-[#1B3A6B] text-white" : "text-[#555555]"}`} style={{ fontSize: "14px", fontWeight: 600, textTransform: "capitalize" }}>
                    {f === "once" ? "One-Time" : "Monthly"}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
              {[25, 50, 100, 250, 500, 1000].map((a) => (
                <button key={a} onClick={() => { setSelectedAmount(a); setCustomAmount(""); }} className={`py-3 rounded-[6px] border-2 transition-all ${selectedAmount === a ? "bg-[#1B3A6B] text-white border-[#1B3A6B]" : "border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white"}`} style={{ fontSize: "16px", fontWeight: 600 }}>
                  ${a}
                </button>
              ))}
            </div>

            <input type="text" placeholder="Custom Amount ($)" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }} className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 mb-6 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />
              </div>
              <div>
                <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />
              </div>
            </div>
            <div className="mb-4">
              <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />
            </div>
            <div className="mb-6">
              <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Message (Optional)</label>
              <textarea rows={3} className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] resize-none" style={{ fontSize: "15px" }} placeholder="Leave a message of support..." />
            </div>

            <button className="w-full bg-[#C0392B] text-white rounded-[6px] py-4 hover:bg-[#A93226] transition-all flex items-center justify-center gap-2" style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", boxShadow: "0 4px 15px rgba(192,57,43,0.4)" }}>
              <Heart size={18} /> Donate {selectedAmount ? `$${selectedAmount}` : customAmount ? `$${customAmount}` : ""} {frequency === "monthly" ? "Monthly" : "Now"}
            </button>

            <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
              {[
                { icon: Shield, label: "501(c)(3) Verified" },
                { icon: Lock, label: "Secure Payment" },
                { icon: CreditCard, label: "All Cards Accepted" },
                { icon: Check, label: "Tax Deductible" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <b.icon size={16} className="text-[#27AE60]" />
                  <span style={{ fontSize: "12px", color: "#555555", fontWeight: 500 }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <SectionHeader tag="Transparency" title="Where Your Money Goes" subtitle="We believe in complete transparency. Here's how we allocate every dollar." />
          <div className="space-y-4">
            {allocation.map((a) => (
              <div key={a.label} className="bg-white rounded-[12px] p-5" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <a.icon size={20} style={{ color: a.color }} />
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "#1B3A6B" }}>{a.label}</span>
                  </div>
                  <span style={{ fontSize: "18px", fontWeight: 700, color: a.color }}>{a.pct}%</span>
                </div>
                <div className="h-3 bg-[#F4F6F9] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${a.pct}%`, background: a.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
