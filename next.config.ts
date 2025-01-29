import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'th.bing.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'compass.uol',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'integra.ifrr.edu.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
