import Link from "next/link";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/PageBanner";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { CommentSection } from "@/components/CommentSection";
import { getEventBySlug, getRecentEvents } from "@/data/events";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

function RecentEventsSidebar({ excludeSlug }: { excludeSlug: string }) {
  const recent = getRecentEvents(excludeSlug, 5);
  return (
    <div className="bg-white rounded-[12px] p-6 sticky top-24" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
      <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1B3A6B", marginBottom: "16px" }}>
        Recent Events &amp; Posts
      </h3>
      <div className="space-y-4">
        {recent.map((e) => (
          <Link
            key={e.id}
            href={`/events/${e.slug}`}
            className="block group"
          >
            <div className="flex gap-3">
              <div className="w-16 h-16 rounded-[8px] overflow-hidden shrink-0">
                <ImageWithFallback
                  src={e.image}
                  alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className="line-clamp-2 group-hover:text-[#0D7377] transition-colors"
                  style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A" }}
                >
                  {e.title}
                </p>
                <p style={{ fontSize: "11px", color: "#888", marginTop: "2px" }}>{e.date}</p>
              </div>
              <ArrowRight size={14} className="text-[#D4AF37] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div>
      <PageBanner
        title={event.title}
        subtitle={event.desc}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Events & News", path: "/events" },
          { label: event.title },
        ]}
        image={event.image}
      />

      <section className="bg-[#F4F6F9] py-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content + comments */}
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-white rounded-[12px] overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div className="relative">
                  {event.video ? (
                    <YouTubePlayer url={event.video} />
                  ) : (
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* <span className="absolute top-4 left-4 bg-[#0D7377] text-white px-3 py-1 rounded-full" style={{ fontSize: "12px", fontWeight: 600 }}>
                    {event.category}
                  </span> */}
                  {event.upcoming && (
                    <span className="absolute top-4 right-4 bg-[#C0392B] text-white px-3 py-1 rounded-full" style={{ fontSize: "11px", fontWeight: 700 }}>
                      UPCOMING
                    </span>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap gap-4" style={{ fontSize: "14px", color: "#555" }}>
                    {event.date && (
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#D4AF37]" /> {event.date}
                      </span>
                    )}
                    {event.time && (
                      <span className="flex items-center gap-2">
                        <Clock size={16} className="text-[#D4AF37]" /> {event.time}
                      </span>
                    )}
                    {event.location && (
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#D4AF37]" /> {event.location}
                      </span>
                    )}
                  </div>
                  {event.content && (
                    <div
                      className="prose prose-lg max-w-none"
                      style={{
                        fontSize: "16px",
                        color: "#1A1A1A",
                        lineHeight: 1.8,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {event.content}
                    </div>
                  )}
                </div>
              </div>

              <CommentSection eventSlug={event.slug} />
            </div>

            {/* Sidebar: Recent Events */}
            <div className="lg:col-span-1">
              <RecentEventsSidebar excludeSlug={event.slug} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





const YouTubePlayer = ({ url }: { url: string }) => {
  // Extract video ID from any YouTube link
  const getVideoId = (link: string) => {
    try {
      // New URL parser
      const u = new URL(link);

      // Case 1: youtube.com/watch?v=ID
      if (u.searchParams.get("v")) {
        return u.searchParams.get("v");
      }

      // Case 2: youtube.com/shorts/ID
      if (u.pathname.includes("/shorts/")) {
        return u.pathname.split("/shorts/")[1];
      }

      // Case 3: youtu.be/ID
      if (u.hostname === "youtu.be") {
        return u.pathname.slice(1);
      }

      return null;
    } catch {
      return null;
    }
  };

  const videoId = getVideoId(url);

  if (!videoId) return <p>Invalid YouTube URL</p>;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

  return (
    <iframe
      className="w-full h-[700px] object-cover rounded-lg"
      src={embedUrl}
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};