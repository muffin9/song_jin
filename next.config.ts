import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["genius.com", "images.genius.com", "images.rapgenius.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
