import path from "path";
import fs from "fs";
import type { NextConfig } from "next";

function findTurbopackRoot(start: string): string {
  let dir = start;
  while (dir !== path.dirname(dir)) {
    if (fs.existsSync(path.join(dir, "node_modules", "next"))) return dir;
    dir = path.dirname(dir);
  }
  return start;
}

const turbopackRoot = findTurbopackRoot(__dirname);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["127.0.0.1", "192.168.0.25"],
  turbopack: {
    root: turbopackRoot,
  },
};

export default nextConfig;
