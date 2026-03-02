"use client";

import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "cookie-consent";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

function getConsent(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(^| )${COOKIE_CONSENT_KEY}=([^;]+)`)
  );
  return match ? match[2] : null;
}

function setConsent(value: "accepted" | "declined") {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_CONSENT_KEY}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function CookieConsent() {
  const [dismissed, setDismissed] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = getConsent();
    setDismissed(consent !== null);
  }, []);

  const handleChoice = (value: "accepted" | "declined") => {
    setConsent(value);
    setDismissed(true);
  };

  if (dismissed === null || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1B3A6B] text-white py-4 px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)" }}
        >
          We use cookies to improve your experience. By continuing to visit this
          site you agree to our use of cookies.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => handleChoice("accepted")}
            className="bg-[#D4AF37] text-[#1B3A6B] px-5 py-2 rounded-[6px] hover:bg-[#c9a432] transition-colors"
            style={{ fontSize: "13px", fontWeight: 700 }}
          >
            Accept
          </button>
          <button
            onClick={() => handleChoice("declined")}
            className="border border-white/30 text-white px-5 py-2 rounded-[6px] hover:bg-white/10 transition-colors"
            style={{ fontSize: "13px", fontWeight: 500 }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
