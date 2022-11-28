/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === "production" ? "/personal-site" : undefined,
  assetPrefix: process.env.NODE_ENV === "production" ? "/personal-site" : undefined,
}

module.exports = nextConfig
