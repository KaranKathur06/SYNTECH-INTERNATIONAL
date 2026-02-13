import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // For fully static export; switch to a loader/domain config if using remote images
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
