const path = require('path');
// 生成html
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 每次打包生成新的dist文件，保证是最新代码
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 入口文件
    entry: './src/index.ts',
    // 指定打包文件输入目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件
        filename: 'bundle.js',
        // 告诉webpack不适用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    mode: "development",
    // 指定webpack打包时使用的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                // use: 'ts-loader',
                use: [
                    // 配置loader
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置loader
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {   
                                        // 要兼容的目标浏览器
                                        targets: { // 兼容到谷歌88版本
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        // 指定corejs的版本
                                        // 比如说用了 用了promise， babel编译不了 ie 11里面也没有这个方法，打包时就会使用corejs里面自己实现的promise给编译
                                        "corejs": "3",
                                        // 使用corejs的方式 "usage": 标识按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    }, 
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_module/
            }
        ]

    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: '哈哈哈',
            template: './src/index.html'
        })
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}