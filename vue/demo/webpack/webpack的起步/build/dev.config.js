const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: "./dist", // 服务于哪个文件夹
    inline: true, // 是否需要实时监听
    // port: 8083 // 设置端口号
    // historyApiFallback: "history" // 设置在SPA页面中，依赖html5的history模式
  }
})