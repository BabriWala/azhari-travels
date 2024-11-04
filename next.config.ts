import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.pexels.com"], // Add Pexels domain to the list of allowed image domains
  },
};

export default nextConfig;
