import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://powerorg.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Power - Non Profit Organization",
  description:
    "People Organizing for Welfare, Equality & Reform. Transforming Pain Into Purpose — From New York to Pakistan.",
  icons: {
    icon: "/Logo.png",
  },
  openGraph: {
    title: "Power - Non Profit Organization",
    description:
      "People Organizing for Welfare, Equality & Reform. Transforming Pain Into Purpose — From New York to Pakistan.",
    images: ["/FavIcon.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Power - Non Profit Organization",
    description:
      "People Organizing for Welfare, Equality & Reform. Transforming Pain Into Purpose — From New York to Pakistan.",
    images: ["/FavIcon.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <CookieConsent />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
