import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  // Allow the sandboxed preview host to talk to the dev server.
  allowedDevOrigins: ["*.e2b.app", "*.arena.ai", "localhost"],

  // Partner logos are hotlinked from the live site and optimised locally.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "havytours.com" },
      { protocol: "https", hostname: "www.havytours.com" },
    ],
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
