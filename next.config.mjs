await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
