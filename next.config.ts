import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/events-news", destination: "/events", permanent: true },
      {
        source: "/donate",
        destination:
          "https://www.clover.com/pay-widgets/f70920f3-b7cc-44bf-82bb-c7ed3fc2ff22",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
