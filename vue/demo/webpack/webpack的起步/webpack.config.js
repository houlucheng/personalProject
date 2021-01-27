const path = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname是node里面的全局变量 保存着当前文件夹的路径
    filename: "bundle.js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时是从右向左读
        use: ["style-loader", "css-loader"],
      },
      {
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
      },
      {
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
      },

    ]
  }
}