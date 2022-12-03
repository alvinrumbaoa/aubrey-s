/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URL:'mongodb+srv://aubreydb:Senpou_23@aubreys.utmxqoa.mongodb.net/?retryWrites=true&w=majority'
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
}
const { withSuperjson } = require('next-superjson')
module.exports = withSuperjson()(nextConfig)
