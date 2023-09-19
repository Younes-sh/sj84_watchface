const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // مسیری که می‌خواهید به بک‌اند ارتباط برقرار کنید
    createProxyMiddleware({
      target: 'https://sj84-watchface-back.vercel.app/', // آدرس بک‌اند شما
      changeOrigin: true,
    })
  );
};
