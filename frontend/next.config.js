/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  compiler: {
    styledComponents: true,
    /** @note 開発中も出なくなる */
    removeConsole: process.env.NODE_ENV === 'development' ? false : true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
