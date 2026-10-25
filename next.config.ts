import type { NextConfig } from "next";

// 165 — TQN Qodiriah Naqsabandiyah Knowledge Platform
// Single-route SPA + knowledge APIs. Standalone output for VPS/server Node.
const nextConfig: NextConfig = {
  output: "standalone",
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
};

export default nextConfig;
