/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath: '/personal-site',
  assetPrefix: '/personal-site'
}

module.exports = nextConfig
