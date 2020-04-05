module.exports = {
    lintOnSave: false,
    devServer: {
        host: '127.0.0.1',
        port: 8000,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8888',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}