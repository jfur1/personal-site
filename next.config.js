/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // NODE_ENV gets set based on the script -- see package.json
  // basePath: process.env.NODE_ENV === "production" ? "/personal-site" : undefined,
  // assetPrefix: process.env.NODE_ENV === "production" ? "/personal-site" : undefined,

  // basePath: "/personal-site",
  // assetPrefix: "/personal-site"
}

module.exports = nextConfig
