import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { ContactFormspree } from "@/components/forms/ContactFormspree";

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
                  { icon: MapPin, title: "Address", content: "2 Domino Way, Centereach, NY 11720, United States", link: "https://www.google.com/maps/place/2+Domino+Way,+Centereach,+NY+11720,+USA/@40.8657233,-73.0766528" },
                  { icon: Mail, title: "Email", content: "info@powerny.org", link: "mailto:info@powerny.org" },
                  { icon: Phone, title: "Phone", content: "+631-615-3001", link: "tel:+16316153001" },
                  { icon: WhatsAppIcon, title: "WhatsApp", content: "+631-615-3001", link: "https://wa.me/16316153001" },
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
                  Email: <a href="mailto:pakistan@powerny.org" className="text-[#0D7377] hover:underline" style={{ fontSize: "15px" }}>pakistan@powerny.org</a>
                </p>
              </div>
            </div>

            <div>
              <ContactFormspree />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F9]">
        <div className="max-w-[1440px] mx-auto p-6">
          <div className="rounded-[12px] overflow-hidden border border-gray-200" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <iframe
              src="https://www.google.com/maps?q=2+Domino+Way,+Centereach,+NY+11720&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="POWER Organization location"
            />

          </div>
        </div>
      </section>
    </div>
  );
}
