/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i0.wp.com', 
      'qcm.imgix.net', 
      'encrypted-tbn0.gstatic.com', 
      'qul.imgix.net',
    ],
  },

}

module.exports = nextConfig
