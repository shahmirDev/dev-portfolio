/** @type {import('next').NextConfig} */
module.exports = {
    async redirects() {
      return [
        {
          source: '/Home',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }
