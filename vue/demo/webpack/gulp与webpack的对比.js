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


*/
