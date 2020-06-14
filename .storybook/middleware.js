const proxy = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
    let p = proxy({
        target: 'http://localhost:5000', // сервер с вашим rest api
        auth: "test:test1",
        changeOrigin: true,
        pathRewrite: {
            '^/open-cmis/browser': '/content-server/cmis/browser'
        }     
    });

    // Привязки путей к прокси
    let bindings = [
        { 
            path: '/api',
            proxy: p
        }      
    ]

    bindings.forEach((binding) => router.use(binding.path, binding.proxy));
};
