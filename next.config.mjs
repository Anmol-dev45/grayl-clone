/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "grayl.com",
      },
    ],
  },
};

export default nextConfig;
