import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/WDV463" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
