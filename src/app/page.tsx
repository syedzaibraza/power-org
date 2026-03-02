"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import {
  Heart,
  BookOpen,
  Stethoscope,
  Users,
  Shield,
  Home as HomeIcon,
  Check,
  Star,
  Quote,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Send,
} from "lucide-react";

const IMAGES = {
  hero1:
    "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  hero2:
    "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  hero3:
    "https://images.unsplash.com/photo-1763735134663-ae1c4e972365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  chairperson:
    "https://images.unsplash.com/photo-1646369505567-3a9cbb052342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  whyDonate:
    "https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  project1:
    "https://images.unsplash.com/photo-1633893669122-a34e430e193b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  project2:
    "https://images.unsplash.com/photo-1623121608226-ca93dec4d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  project3:
    "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  event1:
    "https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  event2:
    "https://images.unsplash.com/photo-1771924368443-1d53147edbd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  event3:
    "https://images.unsplash.com/photo-1686397140330-40f4c9919b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  nyc: "https://images.unsplash.com/photo-1739372345980-da1f43431fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  unity:
    "https://images.unsplash.com/photo-1670299160449-58cccb9545ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

const heroSlides = [
  {
    image: IMAGES.hero1,
    title: "Transforming Pain Into Purpose",
    subtitle:
      "From New York to Pakistan — feeding families, educating children, empowering women.",
    cta1: "Donate Now",
    cta1Link: "/donate",
    cta2: "Our Programs",
    cta2Link: "/our-work",
  },
  {
    image: IMAGES.hero2,
    title: "One Mission. Two Continents.",
    subtitle:
      "The only Pakistani-American nonprofit in NY operating dual-continent humanitarian programs.",
    cta1: "Get Involved",
    cta1Link: "/get-involved",
    cta2: "Learn More",
    cta2Link: "/about",
  },
  {
    image: IMAGES.hero3,
    title: "Every Child Deserves A Future",
    subtitle:
      "Providing education, healthcare, and hope to communities in Pakistan and New York.",
    cta1: "Donate Now",
    cta1Link: "/donate",
    cta2: "See Our Impact",
    cta2Link: "/our-work",
  },
];

const programs = [
  {
    icon: Heart,
    title: "Food Security",
    desc: "Distributing food packages to 500+ families across Pakistan and New York communities.",
    color: "#C0392B",
    link: "/our-work/food-security",
  },
  {
    icon: BookOpen,
    title: "Education",
    desc: "Sponsoring scholarships and school supplies for underprivileged children in Pakistan.",
    color: "#0D7377",
    link: "/our-work/education",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Organizing free medical camps and health awareness programs in rural areas.",
    color: "#27AE60",
    link: "/our-work/healthcare",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    desc: "Skills training and microfinance support for women to achieve financial independence.",
    color: "#D4AF37",
    link: "/our-work/women-empowerment",
  },
  {
    icon: Shield,
    title: "Disaster Relief",
    desc: "Rapid response to natural disasters with emergency supplies and rebuilding support.",
    color: "#C0392B",
    link: "/our-work/disaster-relief",
  },
  {
    icon: HomeIcon,
    title: "Community Dev.",
    desc: "Building clean water wells, community centers, and infrastructure in underserved villages.",
    color: "#1B3A6B",
    link: "/our-work/community-development",
  },
];

const campaigns = [
  {
    title: "Ramadan Food Drive 2026",
    desc: "Help us feed 1,000 families this Ramadan across Pakistan.",
    goal: 50000,
    raised: 37500,
    donors: 245,
    image: IMAGES.hero1,
  },
  {
    title: "Build a School in Sindh",
    desc: "A new school will educate 200 children in rural Sindh, Pakistan.",
    goal: 75000,
    raised: 48000,
    donors: 182,
    image: IMAGES.hero3,
  },
  {
    title: "NYC Winter Warmth Program",
    desc: "Distributing winter essentials to homeless families in New York City.",
    goal: 25000,
    raised: 21000,
    donors: 310,
    image: IMAGES.nyc,
  },
];

const endorsements = [
  {
    name: "Member of UK Parliament",
    title: "House of Commons",
    quote:
      "POWER Organization demonstrates exceptional dedication to humanitarian service across borders.",
  },
  {
    name: "Deputy Mayor of Manchester",
    title: "Manchester City Council",
    quote:
      "Their dual-continent model is a blueprint for how diaspora communities can create real impact.",
  },
  {
    name: "Shadow Minister",
    title: "UK Parliament",
    quote:
      "Tahira Din's leadership and vision for POWER is truly transformative and inspiring.",
  },
  {
    name: "NYC Mayor's Office",
    title: "City of New York",
    quote:
      "POWER Organization is a vital part of New York's humanitarian landscape, serving those most in need.",
  },
];

const testimonials = [
  {
    name: "Fatima K.",
    location: "Lahore, Pakistan",
    quote:
      "POWER Organization gave my children hope. The food packages during Ramadan meant my kids didn't go hungry. Tahira ji is a blessing.",
  },
  {
    name: "Ahmed R.",
    location: "Centereach, NY",
    quote:
      "As a volunteer, I've seen firsthand how every dollar makes a difference. This organization is transparent, genuine, and deeply impactful.",
  },
  {
    name: "Sarah M.",
    location: "Karachi, Pakistan",
    quote:
      "The women's empowerment program helped me start my own tailoring business. I can now support my family with dignity.",
  },
];

const events = [
  {
    title: "Annual Gala & Fundraiser 2026",
    date: "March 15, 2026",
    location: "Long Island, NY",
    image: IMAGES.event1,
    category: "Fundraiser",
  },
  {
    title: "Community Health Fair",
    date: "April 5, 2026",
    location: "Centereach, NY",
    image: IMAGES.event2,
    category: "Community",
  },
  {
    title: "Education Drive — Pakistan",
    date: "April 20, 2026",
    location: "Lahore, Pakistan",
    image: IMAGES.event3,
    category: "Program",
  },
];

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 60));
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else setCount(current);
          }, 25);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Instagram({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((s) => (s + 1) % heroSlides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* HERO SLIDER */}
      <section
        className="relative overflow-hidden"
        style={{ height: "clamp(480px, 70vh, 680px)" }}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/85 to-[#1B3A6B]/50" />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 w-full">
            <div className="max-w-[700px]">
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#D4AF37",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                ☪ POWER Organization
              </span>
              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  margin: "16px 0",
                }}
              >
                {heroSlides[currentSlide].title}
              </h1>
              <p
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.6,
                  marginBottom: "32px",
                }}
              >
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={heroSlides[currentSlide].cta1Link}
                  className="inline-block bg-[#C0392B] text-white rounded-[6px] hover:bg-[#A93226] transition-all hover:-translate-y-0.5"
                  style={{
                    padding: "14px 32px",
                    fontSize: "15px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 15px rgba(192,57,43,0.4)",
                  }}
                >
                  {heroSlides[currentSlide].cta1}
                </Link>
                <Link
                  href={heroSlides[currentSlide].cta2Link}
                  className="inline-block border-2 border-white text-white rounded-[6px] hover:bg-white hover:text-[#1B3A6B] transition-all hover:-translate-y-0.5"
                  style={{
                    padding: "12px 28px",
                    fontSize: "15px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {heroSlides[currentSlide].cta2}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? "bg-[#D4AF37] w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() =>
            setCurrentSlide(
              (s) => (s - 1 + heroSlides.length) % heroSlides.length
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((s) => (s + 1) % heroSlides.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight size={22} />
        </button>
      </section>

      {/* IMPACT COUNTER */}
      <section className="bg-[#1B3A6B] py-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: 500, suffix: "+", label: "Families Fed" },
              { num: 2, suffix: "", label: "Countries" },
              { num: 6, suffix: "", label: "Active Programs" },
              { num: 100, suffix: "+", label: "Volunteers" },
            ].map((s, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 800,
                    color: "#D4AF37",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter target={s.num} suffix={s.suffix} />
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.8)",
                    marginTop: "8px",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionHeader
            tag="Who We Are"
            title="One Mission. Two Continents. Infinite Impact."
          />
          <p
            style={{
              fontSize: "18px",
              color: "#1A1A1A",
              lineHeight: 1.75,
            }}
          >
            POWER Organization — People Organizing for Welfare, Equality &
            Reform — is a Pakistani-American humanitarian nonprofit based in
            Centereach, New York. We are the <strong>only</strong> Pakistani-American
            organization in New York operating programs simultaneously in the
            USA and Pakistan, bridging communities across continents to create
            lasting change.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block bg-[#1B3A6B] text-white rounded-[6px] hover:bg-[#0D7377] transition-all hover:-translate-y-0.5"
              style={{
                padding: "14px 32px",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader
            tag="What We Do"
            title="Our Programs"
            subtitle="Six comprehensive programs addressing critical needs across two continents."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p) => (
              <Link
                key={p.title}
                href={p.link}
                className="bg-white rounded-[12px] p-8 transition-all duration-300 hover:-translate-y-1 group border-2 border-transparent hover:border-[#D4AF37]"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ background: p.color + "15" }}
                >
                  <p.icon size={26} style={{ color: p.color }} />
                </div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#C0392B",
                    marginBottom: "8px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#555555",
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  className="mt-4 flex items-center gap-2 text-[#0D7377] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ fontSize: "14px", fontWeight: 600 }}
                >
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGNS */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader
            tag="Active Campaigns"
            title="Help Us Reach Our Goals"
            subtitle="Every donation brings us closer to transforming lives."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
              >
                <div className="relative h-[200px]">
                  <ImageWithFallback
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#C0392B",
                      marginBottom: "8px",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555555",
                      lineHeight: 1.6,
                      marginBottom: "16px",
                    }}
                  >
                    {c.desc}
                  </p>
                  <div className="mb-3">
                    <div
                      className="flex justify-between mb-1.5"
                      style={{ fontSize: "13px", fontWeight: 600 }}
                    >
                      <span className="text-[#27AE60]">
                        ${c.raised.toLocaleString()} raised
                      </span>
                      <span className="text-[#555555]">
                        ${c.goal.toLocaleString()} goal
                      </span>
                    </div>
                    <div className="h-2.5 bg-[#F4F6F9] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#C0392B] rounded-full transition-all"
                        style={{
                          width: `${(c.raised / c.goal) * 100}%`,
                        }}
                      />
                    </div>
                    <div
                      className="mt-1.5 text-right"
                      style={{ fontSize: "12px", color: "#555555" }}
                    >
                      {c.donors} donors
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/donate"
                      className="flex-1 text-center bg-[#C0392B] text-white rounded-[6px] py-2.5 hover:bg-[#A93226] transition-colors"
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Donate
                    </Link>
                    <Link
                      href="/our-work"
                      className="flex-1 text-center border-2 border-[#1B3A6B] text-[#1B3A6B] rounded-[6px] py-2.5 hover:bg-[#1B3A6B] hover:text-white transition-colors"
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENDORSEMENTS */}
      <section className="bg-[#1B3A6B] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader
            tag="Trusted Globally"
            title="Endorsements & Recognition"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {endorsements.map((e, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-[12px] p-6 border border-white/10"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-[#D4AF37] fill-[#D4AF37]"
                    />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  &quot;{e.quote}&quot;
                </p>
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#D4AF37",
                    }}
                  >
                    {e.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {e.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DONATE */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.whyDonate}
            alt="Why donate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1B3A6B]/90" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                tag="Make A Difference"
                title="Why Donate to POWER?"
                light
                centered={false}
              />
              <div className="space-y-4">
                {[
                  "100% transparency — see where every dollar goes",
                  "Dual-continent impact — your donation helps in USA & Pakistan",
                  "Endorsed by UK Parliament members & NYC Mayor's Office",
                  "Tax-deductible contributions",
                  "6 active programs addressing critical humanitarian needs",
                  "Volunteer-driven with minimal overhead costs",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#27AE60] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "rgba(255,255,255,0.9)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="bg-white rounded-[12px] p-8"
              style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.2)" }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#1B3A6B",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Quick Donation
              </h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[25, 50, 100, 250, 500, 1000].map((a) => (
                  <button
                    key={a}
                    className="border-2 border-[#1B3A6B] text-[#1B3A6B] rounded-[6px] py-3 hover:bg-[#1B3A6B] hover:text-white transition-colors"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    ${a}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Custom Amount ($)"
                className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 mb-4 focus:outline-none focus:border-[#D4AF37]"
                style={{ fontSize: "15px" }}
              />
              <Link
                href="/donate"
                className="block text-center bg-[#C0392B] text-white rounded-[6px] py-4 hover:bg-[#A93226] transition-all"
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 15px rgba(192,57,43,0.4)",
                }}
              >
                Donate Now
              </Link>
              <p
                className="text-center mt-3"
                style={{ fontSize: "12px", color: "#555555" }}
              >
                Secure & tax-deductible. All major cards accepted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAIRPERSON MESSAGE */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <ImageWithFallback
                src={IMAGES.chairperson}
                alt="Tahira Din - Chairperson"
                className="w-[400px] h-[500px] object-cover rounded-[16px]"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
              />
            </div>
            <div>
              <SectionHeader
                tag="From Our Founder"
                title="A Message from Tahira Din"
                centered={false}
              />
              <div className="border-l-4 border-[#D4AF37] pl-6 mb-6">
                <p
                  style={{
                    fontSize: "20px",
                    color: "#1B3A6B",
                    lineHeight: 1.6,
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  &quot;I founded POWER because I believe that pain can be
                  transformed into purpose. Every challenge we face is an
                  opportunity to lift someone else.&quot;
                </p>
              </div>
              <p
                style={{
                  fontSize: "16px",
                  color: "#1A1A1A",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                }}
              >
                Tahira Din, also known as Tahira M. Taj, is the Chairperson and
                Founder of POWER Organization. Born out of personal experience
                with hardship, she built POWER to serve as a bridge between
                Pakistani-American communities in New York and vulnerable
                populations in Pakistan.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555555",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                Under her leadership, POWER has grown from a local initiative to
                an internationally recognized organization endorsed by members
                of the UK Parliament and the Mayor of New York City.
              </p>
              <Link
                href="/chairperson"
                className="inline-block bg-[#1B3A6B] text-white rounded-[6px] hover:bg-[#0D7377] transition-all hover:-translate-y-0.5"
                style={{
                  padding: "12px 28px",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Read Full Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader
            tag="Stories of Impact"
            title="What People Are Saying"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-[12px] p-8 relative"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
              >
                <Quote
                  size={40}
                  className="text-[#D4AF37] opacity-30 absolute top-6 right-6"
                />
                <p
                  style={{
                    fontSize: "16px",
                    color: "#1A1A1A",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white"
                    style={{ fontSize: "18px", fontWeight: 700 }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#1B3A6B",
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: "13px", color: "#555555" }}>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                bg: "#1B3A6B",
                title: "Volunteer With Us",
                desc: "Join 100+ volunteers making a difference across two continents.",
                cta: "Sign Up",
                link: "/get-involved",
                icon: Users,
              },
              {
                bg: "#C0392B",
                title: "Make A Donation",
                desc: "Every dollar feeds a family, educates a child, or saves a life.",
                cta: "Donate Now",
                link: "/donate",
                icon: Heart,
              },
              {
                bg: "#0D7377",
                title: "Partner With POWER",
                desc: "Corporate partnerships, sponsorships, and collaborative programs.",
                cta: "Learn More",
                link: "/get-involved",
                icon: Shield,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-[12px] p-10 text-center text-white flex flex-col items-center justify-center min-h-[320px]"
                style={{ background: c.bg }}
              >
                <c.icon size={48} className="mb-6 opacity-80" />
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    opacity: 0.85,
                    lineHeight: 1.6,
                    marginBottom: "24px",
                    maxWidth: "280px",
                  }}
                >
                  {c.desc}
                </p>
                <Link
                  href={c.link}
                  className="inline-block border-2 border-white text-white rounded-[6px] hover:bg-white hover:text-[#1B3A6B] transition-all"
                  style={{
                    padding: "12px 28px",
                    fontSize: "15px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {c.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETED PROJECTS */}
      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader tag="Our Impact" title="Completed Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: IMAGES.project1,
                title: "Free Medical Camp — Punjab",
                desc: "Served 300+ patients in rural Punjab",
              },
              {
                image: IMAGES.project2,
                title: "Women's Skills Workshop",
                desc: "Trained 50 women in tailoring & crafts",
              },
              {
                image: IMAGES.project3,
                title: "Clean Water Project — Sindh",
                desc: "3 wells built serving 200+ families",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="relative group rounded-[12px] overflow-hidden cursor-pointer"
                style={{ height: "300px" }}
              >
                <ImageWithFallback
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#D4AF37",
                        marginBottom: "4px",
                      }}
                    >
                      {p.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT EVENTS */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader tag="Upcoming" title="Events & News" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((e) => (
              <div
                key={e.title}
                className="bg-white rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
              >
                <div className="relative h-[200px]">
                  <ImageWithFallback
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className="absolute top-4 left-4 bg-[#0D7377] text-white px-3 py-1 rounded-full"
                    style={{ fontSize: "12px", fontWeight: 600 }}
                  >
                    {e.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#1B3A6B",
                      marginBottom: "10px",
                    }}
                  >
                    {e.title}
                  </h3>
                  <div
                    className="flex items-center gap-4 mb-2"
                    style={{ fontSize: "13px", color: "#555555" }}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {e.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} /> {e.location}
                    </span>
                  </div>
                  <Link
                    href="/events"
                    className="text-[#0D7377] flex items-center gap-1 mt-3 hover:text-[#1B3A6B] transition-colors"
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

      {/* NEWSLETTER BAND */}
      <section className="bg-[#D4AF37] py-14">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              color: "#1B3A6B",
              marginBottom: "8px",
            }}
          >
            Stay in the Loop
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#1B3A6B",
              opacity: 0.8,
              marginBottom: "24px",
            }}
          >
            Get the latest updates on our programs, events, and impact stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-[6px] bg-white border-0 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]"
              style={{ fontSize: "15px" }}
            />
            <button
              className="bg-[#1B3A6B] text-white rounded-[6px] px-6 py-3.5 hover:bg-[#0D7377] transition-colors flex items-center justify-center gap-2"
              style={{
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              <Send size={16} /> Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* INSTAGRAM GRID */}
      <section className="bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader tag="Follow Us" title="@powerny on Instagram" />
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              IMAGES.hero1,
              IMAGES.hero2,
              IMAGES.hero3,
              IMAGES.project1,
              IMAGES.project2,
              IMAGES.project3,
            ].map((img, i) => (
              <a
                key={i}
                href="#"
                className="relative group rounded-[8px] overflow-hidden aspect-square"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#1B3A6B]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram size={24} className="text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
