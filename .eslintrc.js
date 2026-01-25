// ESLint configuration for Next.js
// If Next.js isn't installed yet, this will be ignored
let config = {
  rules: {
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/', 'build/'],
}

// Try to extend Next.js config if available
try {
  require.resolve('eslint-config-next')
  config.extends = ['next/core-web-vitals']
} catch (e) {
  // Next.js ESLint config not available, use basic config
  config.parserOptions = {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  config.env = {
    browser: true,
    node: true,
    es6: true,
  }
}

module.exports = config
