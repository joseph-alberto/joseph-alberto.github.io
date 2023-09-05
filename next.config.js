/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  
  basePath: '/images/portfolio'
}

module.exports = nextConfig
