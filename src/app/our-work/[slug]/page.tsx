import Link from "next/link";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Heart, BookOpen, Stethoscope, Users, Shield, Home, Check } from "lucide-react";

const IMAGES = {
  food: "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  education: "https://images.unsplash.com/photo-1763735134663-ae1c4e972365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  healthcare: "https://images.unsplash.com/photo-1633893669122-a34e430e193b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  women: "https://images.unsplash.com/photo-1623121608226-ca93dec4d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  disaster: "https://images.unsplash.com/photo-1764684994219-8347a5ab0e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  community: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

const programs = [
  { slug: "food-security", icon: Heart, title: "Food Security", color: "#C0392B", image: IMAGES.food, desc: "Distributing food packages to 500+ families across Pakistan and New York communities during Ramadan, Eid, and throughout the year.", story: "Our Food Security program was born during the COVID-19 pandemic when Tahira Din organized the first food distribution in Lahore, Pakistan. Since then, we've expanded to serve families in Punjab, Sindh, and New York City.", stats: [{ num: "500+", label: "Families Fed" }, { num: "3,000+", label: "Food Packages" }, { num: "2", label: "Countries" }], points: ["Monthly food distributions in Pakistan", "Ramadan & Eid special drives", "NYC community food pantry support", "Emergency food relief during disasters"] },
  { slug: "education", icon: BookOpen, title: "Education", color: "#0D7377", image: IMAGES.education, desc: "Sponsoring scholarships, school supplies, and building educational infrastructure for underprivileged children.", story: "Education is the foundation of every community's future. Our Education program provides scholarships, school supplies, and even builds schools in areas where children have no access to learning.", stats: [{ num: "200+", label: "Students Supported" }, { num: "3", label: "Schools Supported" }, { num: "1", label: "School Built" }], points: ["Scholarship programs for girls", "School supply distributions", "New school construction in Sindh", "Tutoring and mentorship programs"] },
  { slug: "healthcare", icon: Stethoscope, title: "Healthcare", color: "#27AE60", image: IMAGES.healthcare, desc: "Organizing free medical camps and health awareness programs in rural Pakistan and underserved NY communities.", story: "Access to healthcare is a fundamental right. Our free medical camps in rural Punjab bring doctors, medicine, and health screenings to communities that have never seen a physician.", stats: [{ num: "300+", label: "Patients Served" }, { num: "5", label: "Medical Camps" }, { num: "10+", label: "Doctors Partnered" }], points: ["Free medical camps in rural Punjab", "Medicine and supply distribution", "Health awareness workshops", "Mental health support programs"] },
  { slug: "women-empowerment", icon: Users, title: "Women Empowerment", color: "#D4AF37", image: IMAGES.women, desc: "Skills training, microfinance support, and mentorship for women to achieve financial independence and dignity.", story: "Empowering women empowers entire communities. Our Women Empowerment program provides tailoring, handicraft, and business skills training along with microfinance support.", stats: [{ num: "100+", label: "Women Trained" }, { num: "30+", label: "Businesses Started" }, { num: "5", label: "Training Centers" }], points: ["Tailoring & handicraft workshops", "Microfinance and seed funding", "Business mentorship", "Women's health and rights awareness"] },
  { slug: "disaster-relief", icon: Shield, title: "Disaster Relief", color: "#C0392B", image: IMAGES.disaster, desc: "Rapid response to natural disasters with emergency supplies, shelter, and long-term rebuilding support.", story: "When disaster strikes, POWER responds. From the 2022 Pakistan floods to local emergencies in New York, our disaster relief team mobilizes quickly to provide essential aid.", stats: [{ num: "1,000+", label: "People Aided" }, { num: "3", label: "Major Responses" }, { num: "24h", label: "Response Time" }], points: ["Emergency food and water supply", "Shelter and clothing distribution", "Long-term rebuilding assistance", "Disaster preparedness training"] },
  { slug: "community-development", icon: Home, title: "Community Development", color: "#1B3A6B", image: IMAGES.community, desc: "Building clean water wells, community centers, and essential infrastructure in underserved Pakistani villages.", story: "Sustainable change requires infrastructure. Our Community Development program focuses on building wells, community spaces, and basic amenities that transform entire villages.", stats: [{ num: "3", label: "Wells Built" }, { num: "200+", label: "Families Impacted" }, { num: "2", label: "Community Centers" }], points: ["Clean water well construction", "Community center development", "Road and sanitation improvements", "Renewable energy initiatives"] },
];

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div>
      <PageBanner
        title={program.title}
        subtitle={program.desc}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Our Work", path: "/our-work" }, { label: program.title }]}
        image={program.image}
      />

      <section className="bg-white py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {program.stats.map((s, i) => (
              <div key={i} className="text-center bg-[#F4F6F9] rounded-[12px] p-6">
                <div style={{ fontSize: "40px", fontWeight: 800, color: "#D4AF37" }}>{s.num}</div>
                <div style={{ fontSize: "14px", color: "#555555", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader tag="The Story" title={`About ${program.title}`} centered={false} />
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "20px" }}>{program.story}</p>
              <div className="space-y-3">
                {program.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#27AE60] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span style={{ fontSize: "15px", color: "#1A1A1A", lineHeight: 1.6 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <ImageWithFallback src={program.image} alt={program.title} className="w-full h-[350px] object-cover rounded-[16px]" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }} />
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="bg-[#C0392B] text-white rounded-[6px] hover:bg-[#A93226] transition-all" style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", boxShadow: "0 4px 15px rgba(192,57,43,0.4)" }}>Donate to This Program</Link>
              <Link href="/get-involved" className="bg-[#1B3A6B] text-white rounded-[6px] hover:bg-[#0D7377] transition-all" style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Volunteer</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
