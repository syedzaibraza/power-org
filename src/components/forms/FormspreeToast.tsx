"use client";

import { useEffect } from "react";

export function FormspreeToast({
  open,
  message,
  onClose,
}: {
  open: boolean;
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(onClose, 3500);
    return () => window.clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed top-6 right-6 z-[200]">
      <div
        className="rounded-[10px] px-4 py-3 border shadow-lg"
        style={{
          background: "#ffffff",
          borderColor: "rgba(0,0,0,0.08)",
          maxWidth: "320px",
        }}
        role="status"
        aria-live="polite"
      >
        <div style={{ fontSize: "14px", fontWeight: 700, color: "#1B3A6B" }}>
          Success
        </div>
        <div style={{ fontSize: "14px", color: "#555555", marginTop: "2px" }}>
          {message}
        </div>
      </div>
    </div>
  );
}

