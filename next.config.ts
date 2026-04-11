import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'localhost',
    '192.168.1.4'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/6jeqp5s1e0hu/**'
      }
    ]
  }
};

export default nextConfig;
