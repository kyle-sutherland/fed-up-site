/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.vimeocdn.com"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};
export default nextConfig;
