/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    reactStrictMode: true,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'media.licdn.com',
        }]
    }
};

export default nextConfig;
