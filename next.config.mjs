/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly use only the App Router - disables Pages Router scanning
  // but keep the pages directory around to avoid Next.js ENOENT warnings
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "teylstfbjtutssnfmhhu.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
