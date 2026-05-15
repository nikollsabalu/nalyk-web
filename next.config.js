/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com' , 'http://localhost:1337', 'https://pen-online.com'],
    unoptimized: true,
  },
  
}

module.exports = nextConfig
