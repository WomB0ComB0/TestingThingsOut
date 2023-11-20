import million from 'million/compiler';
// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default million.next(nextConfig);
