/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    minimumCacheTTL: 60,
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
