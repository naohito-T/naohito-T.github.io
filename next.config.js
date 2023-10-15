const path = require('path');

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  eslint: {
    dirs: ['src', 'tests'],
  },
  // sassOptionsはNext.jsでSassを使用する際にSassコンパイラへpathを伝える。includePathsは、Sassファイルの@useや@import時のファイルの探索パスを追加するためのオプション。
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  compiler: {
    /** @note 開発中も出なくなる */
    removeConsole: process.env.NODE_ENV === 'development' ? false : true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
