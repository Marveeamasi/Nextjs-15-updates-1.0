// Next.js 15, next.config.js
module.exports = {
  experimental: {
    staleTimes: {
      dynamic: 30, // Manually set dynamic route staleTime to 30 seconds
      static: 180
    },
  },
};
