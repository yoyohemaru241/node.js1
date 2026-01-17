/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/node.js1", // ← リポジトリ名
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
