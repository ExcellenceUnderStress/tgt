import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["127.0.0.1", "192.168.0.25"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
