import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return {
      // Uploads are added after next build; serve them from disk on every request.
      beforeFiles: [{ source: "/uploads/:path*", destination: "/api/uploads/:path*" }],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
