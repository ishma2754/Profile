import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

function pagesBasePath() {
  if (!githubPages) return "";
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (!repo || repo.endsWith(".github.io")) return "";
  return `/${repo}`;
}

const basePath = pagesBasePath();

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(githubPages
    ? {
        output: "export",
        images: { unoptimized: true },
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),
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
