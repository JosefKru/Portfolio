/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['cdn.sanity.io'] },

  // localePath: path.resolve('./public/static/locales'),
}

module.exports = nextConfig
