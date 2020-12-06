const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'https://github.com',/*这里写自己的代理地址*/
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api/v4': ''
        },
    }));
};