import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  // Allow the sandboxed preview host to talk to the dev server.
  allowedDevOrigins: ["*.e2b.app", "*.arena.ai", "localhost"],

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
