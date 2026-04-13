import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@jade-innovation/template-design"],
  webpack(config) {
    config.resolve.alias["@jade-innovation/template-design/style.css"] =
      path.resolve(
        "node_modules/@jade-innovation/template-design/dist/style.css",
      );
    return config;
  },
};

export default nextConfig;
