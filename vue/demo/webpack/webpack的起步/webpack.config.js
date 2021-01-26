const path = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname是node里面的全局变量 保存着当前文件夹的路径
    filename: "bundle.js"
  },
}