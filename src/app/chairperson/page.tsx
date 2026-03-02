import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function ChairpersonPage() {
  return (
    <div>
      <PageBanner
        title="Chairperson's Message"
        subtitle="A letter from Tahira Din, Founder & Chairperson"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About", path: "/about" }, { label: "Chairperson's Message" }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-[100px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646369505567-3a9cbb052342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Tahira Din"
                className="w-full h-[500px] object-cover rounded-[16px]"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
              />
              <div className="mt-6 text-center">
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#1B3A6B" }}>Tahira Din</h3>
                <p style={{ fontSize: "14px", color: "#0D7377", fontWeight: 600 }}>Also known as Tahira M. Taj</p>
                <p style={{ fontSize: "14px", color: "#555555" }}>Chairperson & Founder, POWER Organization</p>
              </div>
            </div>

            <div>
              <SectionHeader tag="From the Heart" title="My Message to You" centered={false} />

              <div className="border-l-4 border-[#D4AF37] pl-6 mb-8 py-2">
                <p style={{ fontSize: "22px", color: "#1B3A6B", lineHeight: 1.5, fontWeight: 500, fontStyle: "italic" }}>
                  &quot;I founded POWER because I believe that the deepest pain can be transformed into the most powerful purpose. Our suffering is not a dead end — it is a doorway.&quot;
                </p>
              </div>

              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                Bismillah Ar-Rahman Ar-Rahim,
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                Dear Friends and Supporters,
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                When I started POWER Organization, I did not have a grand plan or a team of advisors. What I had was a simple truth that I learned through my own struggles: that no one should suffer alone, and that those who have been through hardship are uniquely positioned to help others through theirs.
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                POWER — People Organizing for Welfare, Equality & Reform — was born out of this conviction. From our humble beginnings in Centereach, New York, we have grown into the only Pakistani-American nonprofit in the state operating humanitarian programs simultaneously in the USA and Pakistan.
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                Every food package we deliver, every child we educate, every woman we empower, and every family we help rebuild represents a victory — not just for the recipient, but for the idea that compassion knows no borders.
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                I am deeply humbled by the recognition we have received from members of the UK Parliament, the Deputy Mayor of Manchester, and the Mayor of New York City. But our greatest recognition comes from the families we serve — their prayers, their resilience, and their hope fuel everything we do.
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                To our volunteers, donors, and partners: you are the backbone of POWER. Without your generosity, none of this would be possible. Together, we have fed 500+ families, built schools, organized medical camps, and created opportunities for women who had none.
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "16px" }}>
                But our work is far from done. There are still children who cannot attend school, families who go to bed hungry, and women who dream of independence. I invite you to join us — not just with your resources, but with your time, your voice, and your heart.
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "24px" }}>
                Together, we can transform pain into purpose.
              </p>
              <p style={{ fontSize: "16px", color: "#1B3A6B", fontWeight: 600, lineHeight: 1.75 }}>
                With gratitude and hope,<br />
                Tahira Din<br />
                Chairperson & Founder, POWER Organization
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/donate" className="bg-[#C0392B] text-white rounded-[6px] hover:bg-[#A93226] transition-all" style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", boxShadow: "0 4px 15px rgba(192,57,43,0.4)" }}>Support Our Mission</Link>
                <Link href="/contact" className="border-2 border-[#1B3A6B] text-[#1B3A6B] rounded-[6px] hover:bg-[#1B3A6B] hover:text-white transition-all" style={{ padding: "12px 28px", fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Contact Tahira</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
