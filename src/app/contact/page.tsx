import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, Phone, MapPin, Clock, Globe, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out anytime"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact" }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader tag="Reach Out" title="Get In Touch" centered={false} />
              <p style={{ fontSize: "16px", color: "#555555", lineHeight: 1.7, marginBottom: "32px" }}>
                Whether you have a question about our programs, want to volunteer, or need assistance, our team is here to help.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", content: "Centereach, NY 11720, United States" },
                  { icon: Mail, title: "Email", content: "info@powerny.org", link: "mailto:info@powerny.org" },
                  { icon: Phone, title: "Phone", content: "(631) 000-0000", link: "tel:+16310000000" },
                  { icon: MessageCircle, title: "WhatsApp", content: "+1 (631) 000-0000", link: "https://wa.me/16310000000" },
                  { icon: Globe, title: "Website", content: "powerny.org", link: "https://powerny.org" },
                  { icon: Clock, title: "Office Hours", content: "Mon — Fri: 9:00 AM — 5:00 PM EST" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0D7377]/10 flex items-center justify-center shrink-0">
                      <c.icon size={22} className="text-[#0D7377]" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#1B3A6B", marginBottom: "2px" }}>{c.title}</h4>
                      {c.link ? (
                        <a href={c.link} className="text-[#0D7377] hover:underline" style={{ fontSize: "15px" }}>{c.content}</a>
                      ) : (
                        <p style={{ fontSize: "15px", color: "#555555" }}>{c.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-[#F4F6F9] rounded-[12px] p-6">
                <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#1B3A6B", marginBottom: "8px" }}>☪ POWER Pakistan Office</h4>
                <p style={{ fontSize: "14px", color: "#555555", lineHeight: 1.6 }}>
                  For Pakistan inquiries, contact our Youth Ambassador Ali Asghar.<br />
                  Email: pakistan@powerny.org
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-[12px] p-8" style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.1)" }}>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#1B3A6B", marginBottom: "20px" }}>Send Us a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>First Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Last Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />
                  </div>
                </div>
                <div className="mb-4">
                  <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Email *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />
                </div>
                <div className="mb-4">
                  <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Subject *</label>
                  <select className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }}>
                    <option value="">Select a subject...</option>
                    <option>General Inquiry</option>
                    <option>Volunteering</option>
                    <option>Donations</option>
                    <option>Partnership</option>
                    <option>Media & Press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Message *</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] resize-none" style={{ fontSize: "15px" }} placeholder="How can we help you?" />
                </div>
                <button className="w-full bg-[#C0392B] text-white rounded-[6px] py-4 hover:bg-[#A93226] transition-all flex items-center justify-center gap-2" style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", boxShadow: "0 4px 15px rgba(192,57,43,0.4)" }}>
                  <Send size={16} /> Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F9] py-0">
        <div className="max-w-[1440px] mx-auto px-6 pb-16">
          <div className="bg-[#C5D3E8] rounded-[12px] h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-[#1B3A6B] mx-auto mb-3" />
              <p style={{ fontSize: "18px", fontWeight: 600, color: "#1B3A6B" }}>Centereach, NY 11720</p>
              <p style={{ fontSize: "14px", color: "#555555" }}>Google Maps integration placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
