/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  async headers() {
    return [
      {
        source: "/feedback-widget.js",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
