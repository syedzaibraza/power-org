import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Eye, Target, Heart, Award, Users, Globe, Calendar } from "lucide-react";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1670299160449-58cccb9545ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  story: "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

const timeline = [
  { year: "2018", title: "The Seed Is Planted", desc: "Tahira Din begins community outreach in Centereach, NY, helping local Pakistani families." },
  { year: "2019", title: "POWER Is Founded", desc: "POWER Organization officially registered as a 501(c)(3) nonprofit in New York State." },
  { year: "2020", title: "Pakistan Operations Begin", desc: "First food distribution in Lahore, Pakistan during COVID-19 pandemic." },
  { year: "2021", title: "Healthcare Launch", desc: "Free medical camps launched in rural Punjab, serving 200+ patients." },
  { year: "2022", title: "UK Recognition", desc: "Endorsed by members of UK Parliament. Meeting with Manchester Deputy Mayor." },
  { year: "2023", title: "NYC Recognition", desc: "Received recognition from the Mayor of New York City for humanitarian contributions." },
  { year: "2024", title: "Women Empowerment", desc: "Skills training programs for 100+ women across Pakistan." },
  { year: "2025", title: "Growth & Scale", desc: "6 active programs, 500+ families served, 100+ volunteers across two continents." },
];

const team = [
  { name: "Tahira M Taj  ( Tahira Dan)", role: "Chairperson & Founder", image: "/board-of-directors.jpg" },
  { name: "Nawab ub din", role: "Assistant Director", image: "/assistant-director.jpg" },
  { name: "Ali Asghar", role: "Youth Ambassador (Pakistan)", image: "/youth-leader.jpg" },
  { name: "Hiba Omer", role: "Director finance", image: "/director-finance.jpg" },

];

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        title="About POWER Organization"
        subtitle="People Organizing for Welfare, Equality & Reform"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
        image={IMAGES.hero}
      />

      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader tag="Our Story" title="Born from Pain, Built with Purpose" centered={false} />
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.7, marginBottom: "16px" }}>
                POWER Organization was founded by Tahira Din (also known as Tahira M. Taj) in Centereach, New York. What began as one woman&apos;s desire to help her community grew into the <strong>only</strong> Pakistani-American nonprofit in New York operating humanitarian programs simultaneously across two continents.
              </p>
              <p style={{ fontSize: "16px", color: "#555555", lineHeight: 1.7, marginBottom: "16px" }}>
                Tahira&apos;s personal journey through hardship gave her an unshakable understanding of what families in need truly require — not just resources, but dignity, compassion, and sustained support. That understanding became the foundation of POWER.
              </p>
              <p style={{ fontSize: "16px", color: "#555555", lineHeight: 1.7 }}>
                Today, POWER runs six comprehensive programs across the USA and Pakistan, serving 500+ families with food security, education, healthcare, women&apos;s empowerment, disaster relief, and community development.
              </p>
            </div>
            <div>
              <ImageWithFallback src="/Logo.png" alt="POWER volunteers" className="w-full h-[400px] object-contain rounded-[16px]" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader tag="Our Foundation" title="Mission, Vision & Values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To serve humanity across borders by providing essential resources, education, healthcare, and empowerment to the most vulnerable communities in the USA and Pakistan.", color: "#C0392B" },
              { icon: Eye, title: "Our Vision", desc: "A world where no family goes hungry, every child has access to education, and every woman is empowered to build an independent future — from New York to Pakistan.", color: "#0D7377" },
              { icon: Heart, title: "Our Values", desc: "Compassion, Transparency, Cultural Sensitivity, Community-driven Action, Equality, and Accountability guide every program we run and every dollar we spend.", color: "#D4AF37" },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-[12px] p-8 text-center border-t-4 transition-all hover:-translate-y-1" style={{ borderColor: c.color, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5" style={{ background: c.color + "15" }}>
                  <c.icon size={30} style={{ color: c.color }} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#1B3A6B", marginBottom: "12px" }}>{c.title}</h3>
                <p style={{ fontSize: "15px", color: "#555555", lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <SectionHeader tag="Our Journey" title="The POWER Timeline" />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#D4AF37] hidden md:block" />
            {timeline.map((t, i) => (
              <div key={t.year} className={`flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-white rounded-[12px] p-6" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#D4AF37" }}>{t.year}</span>
                    <h4 style={{ fontSize: "18px", fontWeight: 600, color: "#1B3A6B", margin: "4px 0 8px" }}>{t.title}</h4>
                    <p style={{ fontSize: "14px", color: "#555555", lineHeight: 1.6 }}>{t.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-10 h-10 rounded-full bg-[#1B3A6B] items-center justify-center shrink-0 z-10 mt-4">
                  <Calendar size={16} className="text-[#D4AF37]" />
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader tag="Our People" title="Leadership Team" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="bg-white rounded-[12px] p-6 text-center transition-all hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border border-[#1B3A6B]/10">
                  <ImageWithFallback
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#1B3A6B", marginBottom: "4px" }}>{m.name}</h4>
                <p style={{ fontSize: "12px", color: "#555555" }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A6B] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Globe, num: "2", label: "Countries" },
              { icon: Users, num: "500+", label: "Families Served" },
              { icon: Heart, num: "6", label: "Active Programs" },
              { icon: Award, num: "4+", label: "Global Endorsements" },
            ].map((s, i) => (
              <div key={i}>
                <s.icon size={32} className="text-[#D4AF37] mx-auto mb-3" />
                <div style={{ fontSize: "40px", fontWeight: 800, color: "#D4AF37" }}>{s.num}</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#1B3A6B", marginBottom: "16px" }}>Ready to Make a Difference?</h2>
          <p style={{ fontSize: "16px", color: "#555555", marginBottom: "24px" }}>Join us in transforming pain into purpose. Every contribution matters.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://www.clover.com/pay-widgets/f70920f3-b7cc-44bf-82bb-c7ed3fc2ff22" target="_blank" rel="noopener noreferrer" className="bg-[#C0392B] text-white rounded-[6px] hover:bg-[#A93226] transition-all" style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", boxShadow: "0 4px 15px rgba(192,57,43,0.4)" }}>Donate Now</Link>
            <Link href="/get-involved" className="border-2 border-[#1B3A6B] text-[#1B3A6B] rounded-[6px] hover:bg-[#1B3A6B] hover:text-white transition-all" style={{ padding: "12px 28px", fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Get Involved</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
