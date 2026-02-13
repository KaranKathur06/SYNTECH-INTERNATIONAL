import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath === "" ? undefined : basePath,
  trailingSlash: true,
  images: {
    // For fully static export; switch to a loader/domain config if using remote images
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
