module.exports = {
    lintOnSave: false,
    devServer: {
        host: '0.0.0.0', // ip
        port: 8081, // 设置端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy:null  //设置代理
    }
}