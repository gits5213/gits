/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // For static export compatibility
  },
  // Output static HTML for GitHub Pages compatibility
  output: 'export',
  trailingSlash: true,
  // Disable image optimization for static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Disable ESLint during builds if config is missing
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    // Alias react-router-dom to our polyfill for Next.js compatibility
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-router-dom': path.resolve(__dirname, 'src/utils/reactRouterPolyfill.js'),
    }
    
    // Handle image imports - ensure they return string paths for static export
    // Next.js should handle this, but we ensure compatibility
    if (!isServer) {
      // Find and modify existing image rules to ensure string exports
      const rules = config.module.rules
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i]
        if (rule.test && rule.test.toString().includes('png|jpe?g|gif|svg')) {
          // Ensure it uses asset/resource which exports strings
          rule.type = 'asset/resource'
          if (!rule.generator) {
            rule.generator = {}
          }
          rule.generator.filename = 'static/images/[name].[hash][ext]'
        }
      }
    }
    
    return config
  },
}

module.exports = nextConfig
