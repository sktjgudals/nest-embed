/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    HOST: "http://localhost:4000"
  },
  images: {
    formats: ["image/webp"],
    domains: [
      "img.youtube.com",
      "i.vimeocdn.com",
      "i.ytimg.com"
    ],
  },
  videos: {
    domains: [
      "youtube.com",
      "i.vimeocdn.com"
    ],
  }
}
