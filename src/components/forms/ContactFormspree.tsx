"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Send } from "lucide-react";
import { FormspreeToast } from "./FormspreeToast";

const ENDPOINT = "https://formspree.io/f/xjgeqylj";

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Volunteering",
  "Donations",
  "Partnership",
  "Media & Press",
  "Other",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function ContactFormspree() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  const action = useMemo(() => ENDPOINT, []);

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const firstName = String(fd.get("firstName") ?? "").trim();
    const lastName = String(fd.get("lastName") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const subject = String(fd.get("subject") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!firstName || !lastName || !email || !subject || !message) {
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
          "Unable to send right now. Please try again in a moment."
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
  }, [action]);

  return (
    <>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="bg-white rounded-[12px] p-8"
        style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.1)" }}
        noValidate
      >
        <h3
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#1B3A6B",
            marginBottom: "20px",
          }}
        >
          Send Us a Message
        </h3>

        <input
          type="hidden"
          name="_subject"
          value="New contact message from powerny.org"
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
              htmlFor="firstName"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#1B3A6B",
                display: "block",
                marginBottom: "6px",
              }}
            >
              First Name *
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              disabled={sending}
              className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] disabled:opacity-60"
              style={{ fontSize: "15px" }}
              autoComplete="given-name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#1B3A6B",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Last Name *
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              disabled={sending}
              className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] disabled:opacity-60"
              style={{ fontSize: "15px" }}
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="mb-4">
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
            name="email"
            type="email"
            inputMode="email"
            required
            disabled={sending}
            className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] disabled:opacity-60"
            style={{ fontSize: "15px" }}
            autoComplete="email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#1B3A6B",
              display: "block",
              marginBottom: "6px",
            }}
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            disabled={sending}
            className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] disabled:opacity-60"
            style={{ fontSize: "15px" }}
            placeholder="+92 308 402 0734"
            autoComplete="tel"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#1B3A6B",
              display: "block",
              marginBottom: "6px",
            }}
          >
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            disabled={sending}
            className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] disabled:opacity-60"
            style={{ fontSize: "15px" }}
            defaultValue=""
          >
            <option value="">Select a subject...</option>
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
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
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            disabled={sending}
            className="w-full px-4 py-3 rounded-[6px] bg-[#F4F6F9] border border-gray-200 focus:outline-none focus:border-[#D4AF37] resize-none disabled:opacity-60"
            style={{ fontSize: "15px" }}
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-[#C0392B] text-white rounded-[6px] py-4 hover:bg-[#A93226] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            boxShadow: "0 4px 15px rgba(192,57,43,0.4)",
          }}
        >
          {sending ? (
            "Sending..."
          ) : (
            <>
              <Send size={16} /> Send Message
            </>
          )}
        </button>
      </form>

      <FormspreeToast
        open={toastOpen}
        message="Your message has been sent."
        onClose={() => setToastOpen(false)}
      />
    </>
  );
}

