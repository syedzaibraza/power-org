"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { PageBanner } from "@/components/PageBanner";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import videosData from "@/data/videos.json";

type VideoItem = {
  title: string;
  url: string;
  thumbnail: string;
};

function getYouTubeId(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "");
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
  } catch {
    // ignore
  }
  return null;
}

export default function VideoGalleryPage() {
  const videos = videosData as VideoItem[];
  const [videoLightbox, setVideoLightbox] = useState<number | null>(null);

  const goPrev = useCallback(() => {
    if (videoLightbox === null) return;
    const len = videos.length;
    if (len <= 0) return;
    const next = videoLightbox === 0 ? len - 1 : videoLightbox - 1;
    setVideoLightbox(next);
  }, [videoLightbox, videos.length]);

  const goNext = useCallback(() => {
    if (videoLightbox === null) return;
    const len = videos.length;
    if (len <= 0) return;
    const next = videoLightbox === len - 1 ? 0 : videoLightbox + 1;
    setVideoLightbox(next);
  }, [videoLightbox, videos.length]);

  useEffect(() => {
    if (videoLightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVideoLightbox(null);
      }
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoLightbox, goPrev, goNext]);

  const showLightbox = videoLightbox !== null;
  const active = useMemo(
    () => (videoLightbox === null ? null : videos[videoLightbox] ?? null),
    [videoLightbox, videos]
  );
  const youtubeId = active?.url ? getYouTubeId(active.url) : null;

  return (
    <div>
      <PageBanner
        title="Video Gallery"
        subtitle="Moments that capture our mission in action"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Video Gallery" }]}
      />

      <section className="bg-[#F4F6F9] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          {videos.length === 0 && (
            <p className="text-center" style={{ fontSize: "16px", color: "#555555" }}>
              No videos yet. Add video links in <code className="bg-white px-2 py-1 rounded">src/data/videos.json</code> and thumbnails in <code className="bg-white px-2 py-1 rounded">public/video-gallery</code>.
            </p>
          )}

          {videos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {videos.map((v, i) => (
                <button
                  key={v.url}
                  type="button"
                  onClick={() => setVideoLightbox(i)}
                  className="text-left group rounded-[12px] overflow-hidden bg-white flex flex-col"
                  style={{ boxShadow: "0 4px 18px rgba(0,0,0,0.08)" }}
                >
                  <div className="relative" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-black/55 text-white flex items-center justify-center">
                        <Play size={22} />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B" }}>
                      {v.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {showLightbox && (
        <div
          className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center"
          onClick={() => {
            setVideoLightbox(null);
          }}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors z-10 p-2"
            onClick={() => {
              setVideoLightbox(null);
            }}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          <div
            className="w-[95vw] h-[90vh] flex flex-col items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {active && youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                className="rounded-[12px] bg-black"
                style={{ width: "min(92vw, 1600px)", height: "min(82vh, 900px)", border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={active.title}
              />
            ) : active ? (
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
                style={{ fontSize: "16px" }}
              >
                Open video link
              </a>
            ) : null}

            <p
              className="text-center mt-4"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)" }}
            >
              {videoLightbox + 1} / {videos.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

