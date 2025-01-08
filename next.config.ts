import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/convertCase",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
