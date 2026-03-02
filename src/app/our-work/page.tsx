import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Heart, BookOpen, Stethoscope, Users, Shield, Home, ArrowRight } from "lucide-react";

const IMAGES = {
  food: "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  education: "https://images.unsplash.com/photo-1763735134663-ae1c4e972365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  healthcare: "https://images.unsplash.com/photo-1633893669122-a34e430e193b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  women: "https://images.unsplash.com/photo-1623121608226-ca93dec4d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  disaster: "https://images.unsplash.com/photo-1764684994219-8347a5ab0e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  community: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

const programs = [
  { slug: "food-security", icon: Heart, title: "Food Security", color: "#C0392B", image: IMAGES.food, desc: "Distributing food packages to 500+ families across Pakistan and New York communities during Ramadan, Eid, and throughout the year." },
  { slug: "education", icon: BookOpen, title: "Education", color: "#0D7377", image: IMAGES.education, desc: "Sponsoring scholarships, school supplies, and building educational infrastructure for underprivileged children." },
  { slug: "healthcare", icon: Stethoscope, title: "Healthcare", color: "#27AE60", image: IMAGES.healthcare, desc: "Organizing free medical camps and health awareness programs in rural Pakistan and underserved NY communities." },
  { slug: "women-empowerment", icon: Users, title: "Women Empowerment", color: "#D4AF37", image: IMAGES.women, desc: "Skills training, microfinance support, and mentorship for women to achieve financial independence and dignity." },
  { slug: "disaster-relief", icon: Shield, title: "Disaster Relief", color: "#C0392B", image: IMAGES.disaster, desc: "Rapid response to natural disasters with emergency supplies, shelter, and long-term rebuilding support." },
  { slug: "community-development", icon: Home, title: "Community Development", color: "#1B3A6B", image: IMAGES.community, desc: "Building clean water wells, community centers, and essential infrastructure in underserved Pakistani villages." },
];

export default function OurWorkPage() {
  return (
    <div>
      <PageBanner
        title="Our Work"
        subtitle="Six comprehensive programs addressing critical needs across two continents"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Our Work" }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader tag="Our Programs" title="What We Do" subtitle="From food security to community development, every program is designed to create lasting, sustainable impact." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((p) => (
              <Link key={p.slug} href={`/our-work/${p.slug}`} className="bg-white rounded-[12px] overflow-hidden flex flex-col md:flex-row transition-all hover:-translate-y-1 group border-2 border-transparent hover:border-[#D4AF37]" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div className="w-full md:w-[200px] h-[200px] md:h-auto shrink-0">
                  <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: p.color + "15" }}>
                      <p.icon size={20} style={{ color: p.color }} />
                    </div>
                    <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#C0392B" }}>{p.title}</h3>
                  </div>
                  <p style={{ fontSize: "15px", color: "#555555", lineHeight: 1.6, marginBottom: "12px" }}>{p.desc}</p>
                  <span className="text-[#0D7377] flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontSize: "14px", fontWeight: 600 }}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
