/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: { esmExternals: true },
  images: {
    unoptimized: true,
  },
}

const removeImports = require('next-remove-imports')()
module.exports = removeImports(nextConfig)
