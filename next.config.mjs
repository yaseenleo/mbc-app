/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "staging.d1xv86p8bz8o4o.amplifyapp.com",
      },
      {
        hostname: "cdn11.bigcommerce.com",
      },
    ], // Add your hostname here
  },
};

export default nextConfig;
