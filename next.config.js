/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["https://cdn.chec.io/"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.chec.io',
      },
    ],
  }
}
