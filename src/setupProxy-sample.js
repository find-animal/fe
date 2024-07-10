const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/animals",
    createProxyMiddleware({
      target:
        "${baseUrl}",
      changeOrigin: true,
    })
  );
};