const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://backenddjango-1.onrender.com',  // Tu backend en Render
      changeOrigin: true,
      secure: true,  // Importante para HTTPS
      pathRewrite: {
        '^/api': '',  // Elimina el prefijo /api al enviar al backend
      },
    })
  );
};