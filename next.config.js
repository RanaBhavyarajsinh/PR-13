/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compress: true,
  swcMinify: true,
}

module.exports = nextConfig