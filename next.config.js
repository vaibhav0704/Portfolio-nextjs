/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'instagram.fixc2-1.fna.fbcdn.net'
    ]

  }
}

module.exports = nextConfig
