import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: false, // Or true if you want to disable ESLint during builds
  },
};

export default nextConfig;