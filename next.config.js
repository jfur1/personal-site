/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "/",
  },
  basePath: "/personal-site",
  assetPrefix: "/personal-site"
}

module.exports = nextConfig
