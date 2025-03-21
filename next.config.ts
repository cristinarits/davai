import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cpyxqewlkqmiuwwmlzaz.supabase.co', // ← use your actual Supabase project domain
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
