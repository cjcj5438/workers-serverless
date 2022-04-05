const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy.createProxyMiddleware('/api', {
      target: "https://my-typescript-worker.1002931123.workers.dev",
      secure: false,
      changeOrigin: true
    })
  );
};
