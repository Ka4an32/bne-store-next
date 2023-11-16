/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  output: "standalone",
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: "@svgr/webpack",
    });

    return config;
  },
};
