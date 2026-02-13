import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/SYNTECH-INTERNATIONAL" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
