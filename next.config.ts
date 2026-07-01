import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack's workspace root to this project. A stray lockfile in a
  // parent dir otherwise makes Next infer `~/` as the root and crash trying
  // to scan sibling dirs macOS blocks (e.g. ~/Documents).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
