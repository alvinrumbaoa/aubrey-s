/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URL:'mongodb+srv://aubreydb:Senpou_23@aubreys.utmxqoa.mongodb.net/?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
