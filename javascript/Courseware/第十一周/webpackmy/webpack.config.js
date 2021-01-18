let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry:"./src/main.js",
	output:{
		filename:"build.js",
		path:path.resolve("./dist")//通知生成的js放在哪儿
	},
	module:{//用什么解析器
		rules:[
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            // 解析less文件的
            {test:/\.less$/,use:["style-loader",'css-loader','less-loader']},
            // 解析后缀名是png。git  jpg格式的文件；
            {test:/\.(png|jpg|gif)$/,use:"url-loader"}
        ]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:"./src/index.html"
		})
	],
	devServer:{
		 contentBase: "./", 
      historyApiFallback:true,
      inline:true,
      hot:true,
      port:8080
	}
}
