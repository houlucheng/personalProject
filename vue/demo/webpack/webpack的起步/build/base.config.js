const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpaackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, '../dist'), // __dirname是node里面的全局变量 保存着当前文件夹的路径
    filename: "bundle.js",
    // publicPath: "dist/" //在用url方式引入的资源路径前面加上 dist 路径
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时是从右向左读
        use: ["style-loader", "css-loader"],
      },{
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },{
        test: /\.(png|jpg|gif|jpeg)$/i, // jpg 和 jpeg 是一样的
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载图片小于limit时 会将图片编译成base64的形式展示
              // 当加载图片大于limit时 需要使用file-loader模块进行加载
              limit: 8196,
              name: "img/[name].[hash:8].[ext]", // 对打包后对图片进行命名
            },
            
          },
        ],
      },{
        test: /\.js$/i,
        // exclude 排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ['@babel/preset-env']
            presets: ["es2015"]
          }
        }
      },{
        test: /\.vue$/i,
        use: ["vue-loader"]
      }

    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin("最终版权归hlc所有"),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    // new UglifyjsWebpaackPlugin(), // 压缩编译
  ],
  // devServer: {
  //   contentBase: "./dist", // 服务于哪个文件夹
  //   inline: true, // 是否需要实时监听
  //   port: 8083 // 设置端口号
  //   // historyApiFallback: "history" // 设置在SPA页面中，依赖html5的history模式

  // }
}