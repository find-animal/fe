const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        "/api/animals",
      createProxyMiddleware( {
        target: 'https://port-0-be-find-animal-rccln2llw7kdy6q.sel5.cloudtype.app',
        changeOrigin: true
      })
    )
    
  };