/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: { esmExternals: true },
  images: { unoptimized: true },
  basePath: '/solidity-website',
  assetPath: '',
}

const removeImports = require('next-remove-imports')()
module.exports = removeImports(nextConfig)
