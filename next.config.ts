import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Allow Google Drive image links from GAS API
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
      {
        // Allow lh3.googleusercontent.com (common Google image CDN)
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
