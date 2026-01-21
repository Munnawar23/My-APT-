import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // 🔥 REQUIRED for Firebase static hosting
  },

  turbopack: {},

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/assets": "./src/assets",
    };
    return config;
  },
};

export default nextConfig;
