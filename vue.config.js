const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        // 设置本地服务器打开的域名
        host: "127.0.0.1",
        // 设置本地服务器打开的端口号
        port: "8080",
        // 配置跨立代域问题
        proxy:'http://127.0.0.1:8000',

    }
})
