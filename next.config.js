/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    ENV: process.env.ENV,
    API_URI: process.env.API_URI,
    VIDEO_BACKGROUND: process.env.VIDEO_BACKGROUND,
    UPLOAD_URI: process.env.UPLOAD_URI,
    GOOGLE_ANALYTIC_CODE: process.env.GOOGLE_ANALYTIC_CODE,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
  },
};

module.exports = nextConfig;
