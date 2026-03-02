import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Users, Globe, Heart, Send } from "lucide-react";

export default function YouthAmbassadorPage() {
  return (
    <div>
      <PageBanner
        title="Youth Leadership Ambassador"
        subtitle="Ali Asghar — Leading POWER's Mission in Pakistan"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About", path: "/about" }, { label: "Youth Ambassador" }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ImageWithFallback
              src="/youth-leader.jpg"
              alt="Ali Asghar"
              className="w-full h-[500px] object-cover rounded-[16px]"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
            />
            <div>
              <SectionHeader tag="Youth Leadership" title="Meet Ali Asghar" centered={false} />
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                “It is an incredible honor to serve as the Youth Leadership Ambassador for POWER Pakistan. I accept this responsibility with humility, determination, and a strong belief in the potential of Pakistan’s youth.
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                As young people, we are not just the future — we are the present force of change. My mission is to inspire, engage, and empower youth across our nation to rise together for social justice, education, mental health awareness, and poverty relief.
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                Under the banner of POWER (Pak American Organization for Workers’ Education & Relief), we are building a movement that values compassion, unity, and action. I am committed to creating opportunities for youth to lead with purpose — through volunteerism, training, and service-driven leadership.
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>

                Let’s break barriers, challenge inequalities, and serve our communities — together. Because real power lies in people helping people.
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px", fontWeight: "bold" }}>
                Join me on this journey — because the youth of today will shape the Pakistan of tomorrow.”
              </p>
              {/* <p style={{ fontSize: "16px", color: "#555555", lineHeight: 1.75, marginBottom: "16px" }}>
                As Youth Ambassador, Ali coordinates food distributions, educational programs, and community outreach across multiple cities in Pakistan. He leads a team of young volunteers who share his vision of a better future.
              </p> */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Users, num: "50+", label: "Youth Volunteers" },
                  { icon: Globe, num: "5", label: "Cities Covered" },
                  { icon: Heart, num: "200+", label: "Families Reached" },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-[#F4F6F9] rounded-[12px] p-4">
                    <s.icon size={24} className="text-[#0D7377] mx-auto mb-2" />
                    <div style={{ fontSize: "28px", fontWeight: 800, color: "#D4AF37" }}>{s.num}</div>
                    <div style={{ fontSize: "12px", color: "#555555" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <SectionHeader tag="On The Ground" title="POWER Pakistan" subtitle="Our Pakistan operations run programs in Punjab, Sindh, and KPK provinces." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Punjab", desc: "Food distribution, medical camps, and education support in Lahore and surrounding areas." },
              { title: "Sindh", desc: "Clean water projects, school construction, and disaster relief operations." },
              { title: "KPK", desc: "Women's empowerment workshops and community development programs." },
            ].map((r) => (
              <div key={r.title} className="bg-white rounded-[12px] p-6" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <h4 style={{ fontSize: "18px", fontWeight: 600, color: "#0D7377", marginBottom: "8px" }}>{r.title}</h4>
                <p style={{ fontSize: "14px", color: "#555555", lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[700px] mx-auto px-6">
          <SectionHeader tag="Join The Movement" title="Become a Youth Volunteer" subtitle="Are you a young person in Pakistan who wants to make a difference? Join our team." />
          <div className="bg-white rounded-[12px] p-8" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />
              </div>
              <div>
                <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>City</label>
                <input type="text" className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />
              </div>
              <div>
                <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Age</label>
                <input type="number" className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37]" style={{ fontSize: "15px" }} />
              </div>
            </div>
            <div className="mb-4">
              <label style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B", display: "block", marginBottom: "6px" }}>Why do you want to volunteer?</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] resize-none" style={{ fontSize: "15px" }} />
            </div>
            <button className="w-full bg-[#0D7377] text-white rounded-[6px] py-4 hover:bg-[#0a5c5f] transition-colors flex items-center justify-center gap-2" style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
              <Send size={16} /> Submit Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
