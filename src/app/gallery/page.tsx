"use client";

import { useState, useEffect, useCallback } from "react";
import { PageBanner } from "@/components/PageBanner";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Photo = { src: string; caption: string };

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((r) => r.json())
      .then((data: Photo[]) => {
        setPhotos(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? photos.length - 1 : prev - 1;
    });
  }, [photos.length]);

  const goNext = useCallback(() => {
    setLightbox((prev) => {
      if (prev === null) return 0;
      return prev === photos.length - 1 ? 0 : prev + 1;
    });
  }, [photos.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, goPrev, goNext]);

  return (
    <div>
      <PageBanner
        title="Photo Gallery"
        subtitle="Moments that capture our mission in action"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Gallery" }]}
      />

      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          {loading && (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="break-inside-avoid mb-2">
                  <div
                    className="rounded-[12px] bg-gray-200/80 animate-pulse"
                    style={{ aspectRatio: "4/3", minHeight: "140px" }}
                  />
                </div>
              ))}
            </div>
          )}
          {!loading && photos.length === 0 && (
            <p className="text-center" style={{ fontSize: "16px", color: "#555555" }}>
              No images yet. Add your photos to the <code className="bg-white px-2 py-1 rounded">public/gallery</code> folder.
            </p>
          )}
          {!loading && photos.length > 0 && (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2">
              {photos.map((p, i) => (
                <div
                  key={i}
                  className="break-inside-avoid mb-2 cursor-pointer group"
                  onClick={() => setLightbox(i)}
                >
                  <div className="relative rounded-[12px] overflow-hidden">
                    <ImageWithFallback
                      src={p.src}
                      alt={p.caption}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors z-10 p-2"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          <div
            className="max-w-[95vw] max-h-[95vh] flex flex-col items-center px-20 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 rounded-[12px]">
              <ImageWithFallback
                src={photos[lightbox].src}
                alt={photos[lightbox].caption}
                className="max-w-[90vw] h-[80vh] object-contain rounded-[8px]"
                style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties}
                loading="eager"
              />
            </div>
            <p className="text-center mt-1" style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>
              {lightbox + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
