import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empty turbopack config to silence Next.js 16 warning
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/assets': './src/assets',
    };
    return config;
  },
};

export default nextConfig;
