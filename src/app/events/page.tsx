"use client";

import { useState } from "react";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { categories, events } from "@/data/events";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");


  return (
    <div>
      <PageBanner
        title="Events & News"
        subtitle="Stay updated with our latest events, campaigns, and news"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Events & News" }]}
      />

      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((e) => (
              <div key={e.id} className="bg-white rounded-[12px] overflow-hidden transition-all hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div className="relative h-[220px]">
                  <ImageWithFallback src={e.image} alt={e.title} className="w-full h-full object-cover" />
                  {e.upcoming && <span className="absolute top-4 right-4 bg-[#C0392B] text-white px-3 py-1 rounded-full" style={{ fontSize: "11px", fontWeight: 700 }}>UPCOMING</span>}
                </div>
                <div className="p-6">
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#1B3A6B", marginBottom: "8px" }}>{e.title}</h3>
                  <p style={{ fontSize: "14px", color: "#555555", lineHeight: 1.6, marginBottom: "12px" }}>{e.desc}</p>
                  <div className="space-y-1.5 mb-4">
                    {e.date && (
                      <div className="flex items-center gap-2" style={{ fontSize: "13px", color: "#555555" }}>
                        <Calendar size={14} className="text-[#D4AF37]" /> {e.date}
                      </div>
                    )}
                    {e.time && (
                      <div className="flex items-center gap-2" style={{ fontSize: "13px", color: "#555555" }}>
                        <Clock size={14} className="text-[#D4AF37]" /> {e.time}
                      </div>
                    )}
                    {e.location && (
                      <div className="flex items-center gap-2" style={{ fontSize: "13px", color: "#555555" }}>
                        <MapPin size={14} className="text-[#D4AF37]" /> {e.location}
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/events/${e.slug}`}
                    className="w-full bg-[#1B3A6B] text-white rounded-[6px] py-2.5 hover:bg-[#0D7377] transition-colors flex items-center justify-center gap-2"
                    style={{ fontSize: "14px", fontWeight: 600 }}
                  >
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
