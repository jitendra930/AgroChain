const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://localhost:7081/',
      changeOrigin: true,
    })
  );
  app.use(
    '/ipfs', 
    createProxyMiddleware({
      target: 'https://ipfs.infura.io/ipfs/',
      changeOrigin: true,
    })
  );
};
