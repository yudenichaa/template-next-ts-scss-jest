/* eslint-disable @typescript-eslint/no-var-requires */
const env = require('./env');

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [env.IMAGES_HOST.value],
  },
};

module.exports = nextConfig;
