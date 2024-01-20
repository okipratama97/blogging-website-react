/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { // configure hotname for images
    domains: [
      "raw.githubusercontent.com",
      "placehold.co",
      "i.pinimg.com",
    ]
  }
}

module.exports = nextConfig
