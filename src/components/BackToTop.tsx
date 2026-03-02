"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 right-7 z-50 w-[44px] h-[44px] rounded-full bg-[#1B3A6B] text-white flex items-center justify-center shadow-lg hover:bg-[#0D7377] transition-all"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
