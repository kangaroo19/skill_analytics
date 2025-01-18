/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.simpleicons.org"],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: false, 
};

export default nextConfig;
