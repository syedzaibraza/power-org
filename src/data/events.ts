export const categories = [
  "All",
  "Fundraiser",
  "Community",
  "Program",
  "Workshop",
] as const;

export type EventCategory = (typeof categories)[number];

export interface EventItem {
  id: number;
  slug: string;
  title: string;
  date?: string;
  time?: string;
  location?: string;
  desc?: string;
  content?: string;
  image: string;
  upcoming: boolean;
  video?: string;
}

export const events: EventItem[] = [
  {
    id: 1,
    slug: "annual-gala-fundraiser-2026",
    title: "POWER PRESENT CHAND RAAT 14,MARCH 2026",
    // date: "March 15, 2026",
    // time: "6:00 PM — 10:00 PM",
    // location: "Long Island Marriott, NY",
    // desc: "Join us for an elegant evening of celebration, impact stories, and fundraising.",
    // content: `Join POWER for our flagship Annual Gala & Fundraiser 2026 at the Long Island Marriott. This elegant evening brings together supporters, volunteers, and community leaders to celebrate the impact we've made together and raise critical funds for our programs in Pakistan and New York.The night will feature inspiring stories from the field, a silent auction, dinner, and entertainment. All proceeds support our Food Security, Education, Healthcare, and Women Empowerment programs. Your presence and generosity help us reach more families in need.We are deeply grateful to our sponsors and every attendee who makes this event possible. Together we are building a stronger, more compassionate world.`,
    image: "/events/event-1.jpeg",
    upcoming: true,
  },
  {
    id: 2,
    slug: "community-health-fair",
    title: "POWER PRESENT CHAND RAAT 14,MARCH 2026",
    // date: "April 5, 2026",
    // time: "10:00 AM — 4:00 PM",
    // location: "Centereach Community Center, NY",
    // desc: "Free health screenings, nutrition advice, and family activities.",
    // content: `Our Community Health Fair offers free health screenings, nutrition advice, and family-friendly activities for the Centereach community. Partnering with local healthcare providers, we bring blood pressure checks, glucose screenings, and wellness resources to your neighborhood.

    // Whether you're looking for health information, want to meet our volunteers, or simply enjoy a day out with the family, everyone is welcome. This event reflects POWER's commitment to community wellness both abroad and at home.`,
    image:
      "https://images.unsplash.com/photo-1771924368443-1d53147edbd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    video: "https://www.youtube.com/shorts/-w1Vtu9EaMQ",
    upcoming: false,
  },
  {
    id: 3,
    slug: "education-drive-pakistan",
    title: "POWER PRESENT CHAND RAAT 14,MARCH 2026",
    // date: "April 20, 2026",
    // time: "9:00 AM — 3:00 PM",
    // location: "Lahore, Pakistan",
    // desc: "School supply distribution and scholarship award ceremony.",
    // content: `The Education Drive in Lahore brings together students, teachers, and donors for a day of school supply distribution and our annual scholarship award ceremony. We distribute backpacks, books, and stationery to hundreds of children and recognize outstanding scholars who have received POWER scholarships.

    // Education is the foundation of lasting change. This event highlights the impact of your support and inspires the next generation to dream big. Join us in Lahore or follow along online.`,
    image:
      "https://images.unsplash.com/photo-1763735134663-ae1c4e972365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    upcoming: true,
  },
  {
    id: 4,
    slug: "womens-skills-workshop",
    title: "POWER PRESENT CHAND RAAT 14 MARCH 2026",
    // date: "May 10, 2026",
    // time: "11:00 AM — 5:00 PM",
    // location: "Karachi, Pakistan",
    // desc: "Tailoring and business skills training for 30 women.",
    // content: `Our Women's Skills Workshop in Karachi provides tailoring and business skills training for 30 women. Over the course of the day, participants learn practical skills and receive guidance on starting small businesses. This workshop is part of POWER's Women Empowerment program, which has already helped hundreds of women achieve financial independence and dignity.

    // We believe that empowering women empowers entire communities. Your support makes these workshops possible.`,
    image:
      "https://images.unsplash.com/photo-1623121608226-ca93dec4d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    upcoming: true,
  },
  {
    id: 5,
    slug: "ramadan-food-drive-2026",
    title: "POWER PRESENT CHAND RAAT 14 MARCH 2026",
    // date: "March 1, 2026",
    // time: "All Day",
    // location: "Multiple Locations",
    // desc: "Help us distribute food packages to 1,000 families during Ramadan.",
    // content: `During Ramadan, POWER distributes food packages to 1,000 families across Pakistan and New York. Our Ramadan Food Drive brings together volunteers and donors to ensure that families in need can break their fast with dignity. Each package includes essential staples: rice, flour, oil, dates, and more.

    // This annual effort is one of our largest and most impactful. We invite you to donate, volunteer, or spread the word. Every contribution helps a family during this holy month.`,
    image:
      "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    upcoming: true,
  },
  {
    id: 6,
    slug: "ny-volunteer-orientation",
    title:
      "POWER Organization Leadership Meets Mayor Zohran Kwame Mamdani | New Year Greetings",
    // date: "March 8, 2026",
    // time: "2:00 PM — 4:00 PM",
    // location: "Centereach, NY",
    // desc: "Orientation session for new POWER volunteers in New York.",
    // content: `New to POWER? Join us for our NY Volunteer Orientation in Centereach. This session covers who we are, what we do, and how you can get involved. You'll meet other volunteers, learn about upcoming events, and find the role that fits your skills and schedule.

    // Whether you can give an hour a month or lead a project, we welcome you. Orientation is free and open to all. Bring a friend and start your journey with POWER today.`,
    image:
      "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    upcoming: true,
  },
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

export function getRecentEvents(excludeSlug?: string, limit = 5): EventItem[] {
  return events.filter((e) => e.slug !== excludeSlug).slice(0, limit);
}
