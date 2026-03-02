"use client";

import { useCallback, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { FormspreeToast } from "./FormspreeToast";

const ENDPOINT = "https://formspree.io/f/xjgeqrev";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function YouthAmbassadorFormspree() {
  const action = useMemo(() => ENDPOINT, []);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);

      const form = e.currentTarget;
      const fd = new FormData(form);

      const name = String(fd.get("name") ?? "").trim();
      const email = String(fd.get("email") ?? "").trim();
      const city = String(fd.get("city") ?? "").trim();
      const message = String(fd.get("message") ?? "").trim();

      if (!name || !email || !city || !message) {
        setError("Please fill in all required fields.");
        return;
      }
      if (!isValidEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      }

      setSending(true);
      try {
        const res = await fetch(action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: fd,
        });
        const json = await res.json().catch(() => null);

        if (!res.ok) {
          setError(
            json?.error ||
              "Unable to submit right now. Please try again in a moment."
          );
          return;
        }

        form.reset();
        setToastOpen(true);
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setSending(false);
      }
    },
    [action]
  );

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-[12px] p-8"
        style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.1)" }}
        noValidate
      >
        <input
          type="hidden"
          name="_subject"
          value="New Youth Ambassador application from powerny.org"
        />

        {error && (
          <div
            className="mb-5 rounded-[10px] border px-4 py-3"
            style={{
              borderColor: "rgba(185, 28, 28, 0.25)",
              background: "rgba(185, 28, 28, 0.06)",
              color: "#b91c1c",
              fontSize: "14px",
              fontWeight: 600,
            }}
            role="alert"
          >
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="name"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#1B3A6B",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              disabled={sending}
              className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] disabled:opacity-60"
              style={{ fontSize: "15px" }}
              autoComplete="name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#1B3A6B",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              inputMode="email"
              required
              disabled={sending}
              className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] disabled:opacity-60"
              style={{ fontSize: "15px" }}
              autoComplete="email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="city"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#1B3A6B",
                display: "block",
                marginBottom: "6px",
              }}
            >
              City *
            </label>
            <input
              id="city"
              type="text"
              name="city"
              required
              disabled={sending}
              className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] disabled:opacity-60"
              style={{ fontSize: "15px" }}
              autoComplete="address-level2"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#1B3A6B",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Age
            </label>
            <input
              id="age"
              type="number"
              name="age"
              min={10}
              disabled={sending}
              className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] disabled:opacity-60"
              style={{ fontSize: "15px" }}
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#1B3A6B",
              display: "block",
              marginBottom: "6px",
            }}
          >
            Why do you want to volunteer? *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            disabled={sending}
            className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] resize-none disabled:opacity-60"
            style={{ fontSize: "15px" }}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-[#0D7377] text-white rounded-[6px] py-4 hover:bg-[#0a5c5f] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          {sending ? (
            "Submitting..."
          ) : (
            <>
              <Send size={16} /> Submit Application
            </>
          )}
        </button>
      </form>

      <FormspreeToast
        open={toastOpen}
        message="Your application has been submitted."
        onClose={() => setToastOpen(false)}
      />
    </>
  );
}
