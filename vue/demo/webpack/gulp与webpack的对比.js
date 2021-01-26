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
    webpack ./src/main.js ./dist/bundle.js (把 main.js 打包到 ./dist/bundle.js)
    把上面命令简化为只执行 webpack 就可以打包 看下面代码：
    。创建 webpack.config.js 文件 （文件名是固定的）
    。在webpack.config.js文件中配置入口和出口
      const path = require('path') // 引入node里面的模块时最好执行 “npm init” 创建package.json文件
      module.exports= {
        entry: "./src/main.js", //文件自己看自己项目定义
        output: {
          path: path.resolve(__dirname, "dist"),
          filename: "bundle.js"
        }
      }
*/
