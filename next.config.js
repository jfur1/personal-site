/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "https://jfur1.github.io/personal-site/",
  },
  basePath: "/personal-site",
  assetPrefix: "/personal-site"
}

module.exports = nextConfig
