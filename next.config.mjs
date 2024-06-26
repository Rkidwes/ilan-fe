/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ["cdn.sanity.io", "i.scdn.co", "via.placeholder.com"],
  }
};

export default nextConfig;
