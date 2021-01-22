const path = require('path')
// const webpack = require("webpack")// 用于访问内置插件
// const HtmlWebpackPlugin = require("html-webpack-plugin")//通过 npm 安装

let config = {
    mode: "none", //"production" | "development" | "none"
    entry: "./index.js", //入口文件为一个时的简写
    // entry: { //多个入口文件
    //     main: "./index.js",
    //     app: "./app.js"
    // },
    // output: { //单个出口
    //     path: path.resolve(__dirname,"dist"),
    //     filename: "hello.js"
    // },
    output: { //多个出口
        filename: "[name].js",
        path: path.resolve(__dirname,"dist") //resolve是一个库 用于帮助找到模块的绝对路径
    },
    module: { //loader
        // rules: [
        //     {test: "/\.txt$/",use: "raw-loader"},
        //     { //指定多个 loader
        //         test: "/\.css$/",
        //         use: [
        //             {loader: "style-loader"},
        //             {
        //                 loader: "css-loader",
        //                 options: {
        //                     modules: true
        //                 }
        //             }
        //         ]
        //     }
        // ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(), //内置插件
        // new HtmlWebpackPlugin({template:"./src/index.html"})
    ]
}

module.exports = config;

/*
1. 入口：entry: "./index.js" 
2. 出口：output: {path,filename} //出口目录名 和 生成的文件名
3. loader：module:{rules:[{test,use}]} //test是loader对应的文件 use是遇到对应文件用的loader (先用loader转换再打包)
    loader有三种使用方式：
    (1)配置（推荐）：在 webpack.config.js 文件中指定 loader。
    (2)内联 在每个 import 语句中显式指定 loader。
        import Styles from 'style-loader!css-loader?modules!./styles.css'; 使用 ! 将资源中的 loader 分开
    (3)cli 在 shell 命令中指定它们。
        webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
        这会对 .jade 文件使用 jade-loader，对 .css 文件使用 style-loader 和 css-loader。
4. 插件(plugins)：plugins:[new HtmlWebpackPlugin({template:""})] //template是要打包压缩处理的文件地址
    每个插件具有apply属性的js对象  apply属性会被webpack compiler 调用
5. 模式mode：mode: "production生产"||"development开发" //设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化
6. manifest和runtime 打包部分原理  runtime(运行)时，Manifest 来解析和加载模块
7. targets构建目标： module.exports = {target: 'node'};// webpack 会编译为 用于「类 Node.js」环境的文件



*/