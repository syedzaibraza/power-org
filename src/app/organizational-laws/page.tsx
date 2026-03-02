"use client";

import { useState } from "react";
import { PageBanner } from "@/components/PageBanner";
import { ChevronDown } from "lucide-react";

const articles = [
  { title: "Article I — Name and Purpose", content: "The name of this organization shall be POWER Organization — People Organizing for Welfare, Equality & Reform. The organization is established as a 501(c)(3) tax-exempt nonprofit corporation under the laws of the State of New York. The purpose of the organization is to serve humanity through humanitarian aid, education, healthcare, women's empowerment, disaster relief, and community development programs in the United States and Pakistan." },
  { title: "Article II — Membership", content: "Membership in the organization is open to any individual who supports the mission and values of POWER Organization. Members shall have the right to attend general meetings, vote on organizational matters, and participate in programs and events. Membership dues, if any, shall be determined by the Board of Directors." },
  { title: "Article III — Board of Directors", content: "The affairs of the organization shall be managed by a Board of Directors consisting of no fewer than three (3) and no more than fifteen (15) members. Directors shall be elected by the membership at the annual meeting and shall serve terms of two (2) years. The Board shall meet at least quarterly." },
  { title: "Article IV — Officers", content: "The officers of the organization shall include a Chairperson, Vice Chairperson, Secretary, and Treasurer. Officers shall be elected by the Board of Directors from among its members and shall serve terms of two (2) years. The Chairperson shall preside over all meetings and serve as the chief executive officer of the organization." },
  { title: "Article V — Meetings", content: "The annual meeting of the organization shall be held during the first quarter of each calendar year. Special meetings may be called by the Chairperson or by a majority of the Board of Directors. A quorum for any meeting shall consist of a majority of the Board members." },
  { title: "Article VI — Finances", content: "The fiscal year of the organization shall be the calendar year. All funds shall be deposited in the name of the organization in a bank approved by the Board of Directors. Expenditures shall be authorized by the Board and documented with appropriate records. Annual financial reports shall be prepared and made available to members." },
  { title: "Article VII — Committees", content: "The Board of Directors may establish standing or special committees as needed to carry out the work of the organization. Each committee shall have a chairperson appointed by the Board. Committees shall report to the Board regularly on their activities." },
  { title: "Article VIII — Amendments", content: "These organizational laws may be amended by a two-thirds (2/3) vote of the Board of Directors at any regular or special meeting, provided that the proposed amendment has been submitted in writing to all Board members at least thirty (30) days prior to the meeting." },
  { title: "Article IX — Dissolution", content: "In the event of dissolution, all assets remaining after payment of debts shall be distributed to one or more organizations that qualify as tax-exempt under Section 501(c)(3) of the Internal Revenue Code, as determined by the Board of Directors." },
  { title: "Article X — Conflict of Interest", content: "Any Director or Officer who has a financial, personal, or official interest in any matter pending before the organization shall disclose that interest and refrain from participation in any discussion or vote relating to the matter. The organization shall maintain a written conflict of interest policy." },
];

export default function OrgLawsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <PageBanner
        title="Organizational Laws"
        subtitle="Governing documents and bylaws of POWER Organization"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Organizational Laws" }]}
      />

      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="space-y-3">
            {articles.map((a, i) => (
              <div key={i} className="bg-white rounded-[12px] overflow-hidden" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F4F6F9] transition-colors"
                >
                  <span style={{ fontSize: "17px", fontWeight: 600, color: "#1B3A6B" }}>{a.title}</span>
                  <ChevronDown size={20} className={`text-[#D4AF37] transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <p style={{ fontSize: "15px", color: "#1A1A1A", lineHeight: 1.75 }}>{a.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
