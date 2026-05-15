import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents:true,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: "https",
        port: "",
      },
      {
        hostname: 'energized-corgi-814.convex.cloud',
        protocol: 'https',
        port: "",
      }
    ],
  },
};

export default nextConfig;
