"use client";

import { useState } from "react";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";

const categories = ["All", "Fundraiser", "Community", "Program", "Workshop"];

const events = [
  { id: 1, title: "Annual Gala & Fundraiser 2026", date: "March 15, 2026", time: "6:00 PM — 10:00 PM", location: "Long Island Marriott, NY", category: "Fundraiser", desc: "Join us for an elegant evening of celebration, impact stories, and fundraising.", image: "https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", upcoming: true },
  { id: 2, title: "Community Health Fair", date: "April 5, 2026", time: "10:00 AM — 4:00 PM", location: "Centereach Community Center, NY", category: "Community", desc: "Free health screenings, nutrition advice, and family activities.", image: "https://images.unsplash.com/photo-1771924368443-1d53147edbd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", upcoming: true },
  { id: 3, title: "Education Drive — Pakistan", date: "April 20, 2026", time: "9:00 AM — 3:00 PM", location: "Lahore, Pakistan", category: "Program", desc: "School supply distribution and scholarship award ceremony.", image: "https://images.unsplash.com/photo-1763735134663-ae1c4e972365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", upcoming: true },
  { id: 4, title: "Women's Skills Workshop", date: "May 10, 2026", time: "11:00 AM — 5:00 PM", location: "Karachi, Pakistan", category: "Workshop", desc: "Tailoring and business skills training for 30 women.", image: "https://images.unsplash.com/photo-1623121608226-ca93dec4d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", upcoming: true },
  { id: 5, title: "Ramadan Food Drive 2026", date: "March 1, 2026", time: "All Day", location: "Multiple Locations", category: "Program", desc: "Help us distribute food packages to 1,000 families during Ramadan.", image: "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", upcoming: true },
  { id: 6, title: "NY Volunteer Orientation", date: "March 8, 2026", time: "2:00 PM — 4:00 PM", location: "Centereach, NY", category: "Community", desc: "Orientation session for new POWER volunteers in New York.", image: "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", upcoming: true },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? events : events.filter((e) => e.category === activeCategory);

  return (
    <div>
      <PageBanner
        title="Events & News"
        subtitle="Stay updated with our latest events, campaigns, and news"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Events & News" }]}
      />

      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button key={c} onClick={() => setActiveCategory(c)} className={`px-5 py-2.5 rounded-full transition-all ${activeCategory === c ? "bg-[#1B3A6B] text-white" : "bg-white text-[#1A1A1A] hover:bg-[#1B3A6B] hover:text-white"}`} style={{ fontSize: "14px", fontWeight: 600, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((e) => (
              <div key={e.id} className="bg-white rounded-[12px] overflow-hidden transition-all hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div className="relative h-[220px]">
                  <ImageWithFallback src={e.image} alt={e.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-[#0D7377] text-white px-3 py-1 rounded-full" style={{ fontSize: "12px", fontWeight: 600 }}>{e.category}</span>
                  {e.upcoming && <span className="absolute top-4 right-4 bg-[#C0392B] text-white px-3 py-1 rounded-full" style={{ fontSize: "11px", fontWeight: 700 }}>UPCOMING</span>}
                </div>
                <div className="p-6">
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#1B3A6B", marginBottom: "8px" }}>{e.title}</h3>
                  <p style={{ fontSize: "14px", color: "#555555", lineHeight: 1.6, marginBottom: "12px" }}>{e.desc}</p>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2" style={{ fontSize: "13px", color: "#555555" }}>
                      <Calendar size={14} className="text-[#D4AF37]" /> {e.date}
                    </div>
                    <div className="flex items-center gap-2" style={{ fontSize: "13px", color: "#555555" }}>
                      <Clock size={14} className="text-[#D4AF37]" /> {e.time}
                    </div>
                    <div className="flex items-center gap-2" style={{ fontSize: "13px", color: "#555555" }}>
                      <MapPin size={14} className="text-[#D4AF37]" /> {e.location}
                    </div>
                  </div>
                  {/* <button className="w-full bg-[#1B3A6B] text-white rounded-[6px] py-2.5 hover:bg-[#0D7377] transition-colors flex items-center justify-center gap-2" style={{ fontSize: "14px", fontWeight: 600 }}>
                    View Details <ArrowRight size={14} />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
