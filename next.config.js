/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['covers.openlibrary.org', 'books.google.com', 'm.media-amazon.com'],
  },
};

module.exports = nextConfig;
