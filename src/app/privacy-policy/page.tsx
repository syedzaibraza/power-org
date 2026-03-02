import { PageBanner } from "@/components/PageBanner";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageBanner
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <p style={{ fontSize: "13px", color: "#555555", marginBottom: "32px" }}>Last updated: February 25, 2026</p>

          {[
            { title: "1. Information We Collect", content: "We collect information you provide directly to us, such as when you make a donation, sign up for our newsletter, volunteer, or contact us. This may include your name, email address, phone number, mailing address, and payment information." },
            { title: "2. How We Use Your Information", content: "We use the information we collect to process donations, communicate with you about our programs and events, send newsletters and updates, improve our website and services, and comply with legal obligations." },
            { title: "3. Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential." },
            { title: "4. Data Security", content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure." },
            { title: "5. Cookies", content: "Our website may use cookies to enhance your experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent." },
            { title: "6. Donation Information", content: "All financial transactions are processed through secure, encrypted payment processors. We do not store credit card information on our servers." },
            { title: "7. Third-Party Links", content: "Our website may contain links to other sites. We are not responsible for the privacy practices or content of these sites." },
            { title: "8. Children's Privacy", content: "Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13." },
            { title: "9. Changes to This Policy", content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last updated' date." },
            { title: "10. Contact Us", content: "If you have any questions about this Privacy Policy, please contact us at info@powerny.org or write to us at POWER Organization, Centereach, NY 11720." },
          ].map((s) => (
            <div key={s.title} className="mb-8">
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#1B3A6B", marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.75 }}>{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
