"use client";

import { useState } from "react";
import { PageBanner } from "@/components/PageBanner";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { X } from "lucide-react";

const tabs = ["All", "Food Drives", "Education", "Healthcare", "Events", "Community"];

const photos = [
  { src: "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Food Drives", caption: "Ramadan food distribution — Lahore, Pakistan" },
  { src: "https://images.unsplash.com/photo-1763735134663-ae1c4e972365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Education", caption: "School supply distribution — Punjab" },
  { src: "https://images.unsplash.com/photo-1633893669122-a34e430e193b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Healthcare", caption: "Free medical camp — Rural Punjab" },
  { src: "https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Events", caption: "Annual Gala 2025 — Long Island, NY" },
  { src: "https://images.unsplash.com/photo-1623121608226-ca93dec4d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Community", caption: "Women's empowerment workshop" },
  { src: "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Community", caption: "Volunteer team — New York" },
  { src: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Community", caption: "Clean water project — Sindh" },
  { src: "https://images.unsplash.com/photo-1771924368443-1d53147edbd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Events", caption: "Community gathering" },
  { src: "https://images.unsplash.com/photo-1764684994219-8347a5ab0e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Food Drives", caption: "Disaster relief distribution" },
  { src: "https://images.unsplash.com/photo-1686397140330-40f4c9919b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Events", caption: "Community event" },
  { src: "https://images.unsplash.com/photo-1670299160449-58cccb9545ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Community", caption: "Unity and teamwork" },
  { src: "https://images.unsplash.com/photo-1624374729491-ac62e16e0bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", cat: "Community", caption: "Pakistan — Cultural heritage" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeTab === "All" ? photos : photos.filter((p) => p.cat === activeTab);

  return (
    <div>
      <PageBanner
        title="Photo Gallery"
        subtitle="Moments that capture our mission in action"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Gallery" }]}
      />

      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((t) => (
              <button key={t} onClick={() => setActiveTab(t)} className={`px-5 py-2.5 rounded-full transition-all ${activeTab === t ? "bg-[#1B3A6B] text-white" : "bg-white text-[#1A1A1A] hover:bg-[#1B3A6B] hover:text-white"}`} style={{ fontSize: "14px", fontWeight: 600, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                {t}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {filtered.map((p, i) => (
              <div key={i} className="break-inside-avoid mb-4 cursor-pointer group" onClick={() => setLightbox(i)}>
                <div className="relative rounded-[12px] overflow-hidden">
                  <ImageWithFallback src={p.src} alt={p.caption} className="w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#1B3A6B]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.9)" }}>{p.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <div className="max-w-[900px] max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback src={filtered[lightbox].src} alt={filtered[lightbox].caption} className="max-w-full max-h-[75vh] object-contain rounded-[8px]" />
            <p className="text-center mt-4" style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>{filtered[lightbox].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
