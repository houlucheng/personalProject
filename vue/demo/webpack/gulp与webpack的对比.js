/*

* 1. grunt/gulp的核心是task(任务) 被称为前端自动化任务管理工具
* 2. 我们可以配置一系列的task并且定义task要处理的事务（例如： ES6 转 ES5，ts转化，图片压缩，sass转css）
  const gulp = require("gulp")'
  const babel = require("gulp-babel");
  gulp.task('js', () =>
    gulp.src('src/*.js')
      .pipe(baabel({
          presets: ['es2015']
      }))
      .pipe(gulp.dest('dist'))
  );
* 3. grunt/gulp更加强调的是前端流程的自动化，模块化不是他的核心
* 4. webpack更加强调的是模块化开发管理，而文件压缩合并、预处理等功能是他附带的功能。
* 5. vue-cli2依赖 webpack 3.6.0版本

* webpack@3.6.0:
    1. webpack ./src/main.js ./dist/bundle.js (把 main.js 打包到 ./dist/bundle.js)
    2. 把上面命令简化为只执行 webpack 就可以打包 看下面代码：
      。创建 webpack.config.js 文件 （文件名是固定的）
      。在webpack.config.js文件中配置入口和出口
        const path = require('path') // 引入node里面的模块时最好执行 “npm init” 创建package.json文件
        module.exports= {
          entry: "./src/main.js", //文件自己看自己项目定义
          output: {
            path: path.resolve(__dirname, "dist"), //__dirname是node里面的全局变量 保存着当前文件夹的路径
            filename: "bundle.js"
          }
        }
    3. 在 package.json 中配置 scripts 相对应的脚本就可以使用 npm run build 来进行打包
      。使用npm run 的时候会先找这个项目里面有没有安装的webpack 没有就会去全局找
    4. loader 是 webpack中的一个核心
      。简单的webpack主要用来处理js代码，并且webpack会自动处理js之间相关的依赖，
      。但是在开发中不仅仅只有js，也需要加载css、图片、一些高级的将ES6转化为ES5代码，将TypeScript转为ES5，将sass、less转为css，将.jsx .vue文件转为js等等
      。对于webpack本身的能力来说对于上面这些转化是不支持的 需要给 webpack 扩展 loader 就可以了
    5. css-loader 只负责将css文件进行加载不负责编译解析 所以必须与 style-loader一起使用
      。style-loader负责将样式添加到DOM中
      module: {
        rules: [
          {
            test: /\.css$/i, //这儿直接是一个正则
            // css-loader只负责将css文件进行加载
            // style-loader负责将样式添加到DOM中
            // 使用多个loader时是从右向左读
            use: ["style-loader", "css-loader"]
          },
        ],
      }
    6. less-loader 加载并编译 LESS 文件
      。“npm install less less-loader --save-dev” // 安装 less 和 less-loader
      // less才是真正编译转化less文件代码的模块 less-loader只是负责加载less文件
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader"
          },{
            loader: "css-loader"
          },{
            loader: "less-loader"
          }
        ]
      }
    7. url-loader 与 file-loader 
      。npm install url-loader --save-dev   
      。npm install file-loader --save-dev
      。特别注意 使用 file-loader 时：
        . 如果你的图片小于limit时不需要file-loader而是直接编译为base64形式引入，
        . 如果图片大于limit时会使用file-loader 这个loader最终会使图片以文件路径形式引入 会把图片打包进dist目录并以哈希值命名 这样就需要特殊配置了
          在webpack.config.js 文件的 output 属性中加入 publicPath 属性 这样以后有关url的资源会自动在前面拼接 ”dist/“
          当index.html打包进dist目录时就不需要设置publicPath属性了
          module.exports = {
            entry: "",
            output: {
              path: "",
              filename: "",
              publicPath: "dist/"
            }
          }
        . 用file-loader默认打包后的图片名称是32位哈希值而且是直接放在dist目录 对其优化可以做如下配置  在options里配置name属性
      。下面是在rules中配置打包图片的代码：
        {
          test: /\.(png|jpg|gif|jpeg)$/i, // jpg 和 jpeg 是一样的
          use: [
            {
              loader: 'url-loader',
              options: {
                // 当加载图片小于limit时 会将图片编译成base64的形式展示
                // 当加载图片大于limit时 需要使用file-loader模块进行加载
                limit: 8196,
                name: "img/[name].[hash:8].[ext]", // 对打包后对图片进行命名 固定写法
              },
            },
          ],
        },

    8. babel-loader (ES6转ES5)
      。"npm install --save-dev babel-loader@7 babel-core babel-preset-es2015" 安装
        {
          test: /\.js$/i,
          // exclude 排除这两个文件里面的js
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              preset: ['es2015']
            }
          }
        }
    9. webpack中使用vue
      。‘npm install vue --save’ // 安装vue 因为生产中也依赖vue所以不需要加 -dev
      。‘import Vue from 'vue'’ // from后面写的不是具体路径时回去node——modules里面找
      。上面两步完成后就能创建vue实例开始开发了 但此时编译之后页面会报错 错误内容是有template模版无法解析 原因看下文：
        . runtime-only // 代码中，不可有任何的template
        . runtime-compiler //代码中，可以有template，因为 compiler 会编译template
        解决方法：
        在 webpack.config.js 中配置 resolve 指定用哪个版本的vue.js
        module.exports = {
          resolve: {
            alias: {
              'vue$': "vue/dist/vue.esm.js"
            }
          }
        }
    10. webpack中对 .vue 文件的编译 vue-loader 和 vue-template-compiler
      。'npm install vue-loader vue-template-compiler --save-dev' 安装编译 .vue 的loader
      。在 webpack.config.js 中配置 vue-loader
        {
          test: /\.vue$/i,
          use: ["vue-loader"]
        }
      。操作完以上步骤时编译运行有可能还是会报错 这个原因是vue-loader版本在 14.0.0 以上需要安装另一个插件来配合使用
      。要想省略 import Vue from 'App.vue' 中 .vue 后缀 需要在 webpack.config.js 中配置 extensions
        module.exports = {
          resolve: {
            extensions: ['.js', '.css', '.vue'],
            alias: {
              "vue$": "vue/dist/vue.esm.js"
            }
          }
        }
    11. plugin
      。在打包后的js中最顶部有一些信息，比如说：作者、描述、版权等等。 （版权中有MIT的说明是开源的）webpack自带插件
        在webpack.config.js中配置
          const webpack = require('webpack')
          mdule.exports = {
            plugin: [
              new webpack.Bannelugin("最红版权归xxx所有")
            ]
          }
      。html-webpack-plugin  处理 html 文件 
        . 'npm install html-webpack-plugin --save-dev' // 安装html-webpack-plugin插件
        . 此插件会在dist文件夹生成一个index.html文件，然后自动把打包后的js引入进去
        . 在webpack.config.js中配置
          const HtmlWebpackPlugin = require("html-webpack-plugin")
          mdule.exports = {
            plugin: [
              new HtmlWebpackPlugin({
                template: "index.html" //在同级目录找index.html作为模版 要不然dist文件下生成的index.html内没有 div哪个DOM
              })
            ]
          }
      。uglifyjs-webpack-plugin 压缩编译最终的js代码
        . 'npm install uglifyjs-webpack-plugin --save-dev' // 安装 uglifyjs-webpack-plugin 插件
        . 在 webpack.config.js 中配置
          const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
          module.exports = {
            plugins: [
              new UglifyjsWebpackPlugin()
            ]
          }
    12. 搭建本地服务器 是基于node的 服务于dist文件夹 这个服务是会把最终的文件放在内存中运行速度会很快不会放在硬盘中
      。'npm install webpack-dev-server --save-dev' // 安装插件
      。在webpack.config.js中配置
        module.exports: {
          devServer: {
            contentBase: "./dist", // 服务于哪个文件夹
            inline: true, // 是否需要实时监听
            port: 8080, // 蛇追端口号
            historyApiFallback: "history" //设置在SPA页面中，依赖html5的history模式
          }
        }
    13. 对webpack.config.js配置进行分离整理
      。把 webpack.config.js 分为 base.config.js(基础配置) dev.config.js(开发时的配置) prod.config.js(生产配置)  放在build文件夹
      。开发时需要运行npm run dev 所以需要 base.config.js 和 dev.config.js 不需要压缩js什么的
      。发布生产时需要先打包 npm run build 所以需要 base.config.js 和 prod.config.js 来进行打包压缩编译
      。合并两个config文件
        . 'npm install webpack-merge --save-dev'
        . 在 dev.config.js 中：
          const webpackMerge = require('webpack-merge');
          const baseConfig = require('./base.config')
          module.exports = webpackMerge(baseConfig, {
            //这里是dev.config.js中的相关配置
          })
      。有了这三个文件就不需要webpack.config.js文件 但是不管 运行 还是 打包 webpack都会去找webpack.config.js文件
      。综上所诉就需要修改package.json文件里面的 scripts 脚本如下：加上 --config 后面写路径
        "build": "webpack --config ./build/prod.config.js"
        "dev": "webpack-dev-server --open --config ./build/dev.config.js"

        
      


*/
