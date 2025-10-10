/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.course-api.com',
        port: '',
        pathname: '/images/**'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig
