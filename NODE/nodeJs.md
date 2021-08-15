# 环境变量
```javascript
path: 'c:\User\houlucheng\Dexktop\hello'
```
- 当我们在命令行窗口打开一个文件，或调用一个程序时，系统会首先在当前目录下寻找文件程序，如果找到了则直接打开，如果没有找到则会一次到环境变量path的路径中寻找，直到找到为止，没找到就会报错(此命令不存在)

# node内置模块
### http
- 使用方法
  ```javascript
    // 导入http模块
    const http = require('http')
    
    http.createServer(function(req, res) {

      // 设置响应头
      res.writeHead(200, {'Content-Type': "text/html;charset='UTF-8'"});

      // 解决中文乱码
      res.write("<head> <meta charset='UTF-8'> </head>")

      // 在页面上输出
      res.write("<h2>你好，nodejs</h2>")

      // 给页面输出一句话并结束响应(必须写)
      res.end('Hello World');

    }).listen(8081); // 端口
    
  ```

### url
- 使用方法
  ```javascript
    // 导入url模块
    const URL = require('url')

    // 模拟url
    const api = "http://www.baidu.com?a=123&b=666"

    // 获取url后面的参数  parse的第二个参数true代表把参数转换为对象形式
    const getValue = URL.parse(api, true).query

    console.log(getValue);
  ```

### supervisor (自动重启服务，类似于热更新)
- 使用方法
  ```javascript
    // 1. 安装
        npm install -g supervisor
    // 2. 使用
        supervisor app.js
  ```

### fs
- fs.stat 检测是文件还是目录
  ```
  const fs = require('fs')

  /**
  * @param {*} path 检测的文件或目录的路径
  * @param {*} callback 回调，传递异常参数err 和 data对象
  */
  
  fs.stat('./html', (err, data)=> {
      if(err) {
          // 路径错误时
          console.log(err);
          return
      }
      console.log(`是文件${data.isFile()}`); // 是文件false
      console.log(`是目录${data.isDirectory()}`); // 是目录true
  })
  ```

- fs.mkdir 创建目录
  ```
  const fs = require('fs')

  /**
  * @param {*} path 将创建的目录路径
  * @param {*} mode 目录权限（读写权限），默认777
  * @param {*} callback 回调，传递异常参数err
  */

  fs.mkdir('./css', (err)=> {
      if(err) {
          // 创建失败
          console.log(err);
          return
      }
      console.log("创建成功");
  })
  ```

- fs.writeFile 创建写入文件
  ```
  const fs = require('fs')

  /**
  * @param {*} path 将创建的文件路径
  * @param {*} data 文件中要写的内容
  * @param {*} callback 回调，传递异常参数err
  */

  fs.writeFile('./html/index.html', '你好nodejs', (err)=> {
      // 如果此文件存在将会是替换操作
      if(err) {
          // 创建失败
          console.log(err);
          return
      }
      console.log("创建写入成功");
  })
  ```

- fs.appendFile 追加文件
  ```
  const fs = require('fs')

  /**
  * @param {*} path 将创建的文件路径
  * @param {*} data 文件中要写的内容
  * @param {*} callback 回调，传递异常参数err
  */

  fs.appendFile('./html/index.html', '你好nodejs', (err)=> {
      if(err) {
          // 创建失败
          console.log(err);
          return
      }
      console.log("创建写入成功");
  })
  ```

- fs.readFile 读取文件
  ```

  ```

- fs.readdir 读取目录
  ```

  ```

- fs.rename 重命名
  ```

  ```

- fs.rmdir 删除目录
  ```

  ```

- fs.unlink 删除文件
  ```

  ```


### 模块化

- 导出
  ```javascript
    // app.js

    function person() {
      console.log("看过来")
    }

    const obj = {a: 555}
    // 1. module.exports
    module.exports.person = person
    module.exports = obj
    // 2. exports
    exports.person = person

    // 区别
    // exports 是 module.exports 的简写，相当于 const exports = module.exports
    
  ```
- 导入
  ```javascript
    const per = require('./app.js')
    console.log(per.person)
  ```



# 第三方模块
### 符合CommonJs规范的包目录
- package.json: 包描述文件
- bin：用于存放可执行二进制文件的目录
- lib：用于存放 JavaScript 代码的目录
- doc：用于存放文档的目录

# package.json
### dependencie 与 devDependencie
- ^表示第一位版本号不变，后面两位取最新
- ~前两位不变，最后一位取最新
- *表示全部取最新
  ```javascript
  // npm install md5 --save
  "dependencie": { // 生产环境需要使用的
    "md5": "^2.1.0"
  },
  // npm install Jquery --save-dev 
  "devDependencie": { // 插件只用于开发环境
    "Jquery": "^2.1.0"
  }
  ```
- 区别
  dependencie 生产环境需要使用的。
  devDependencie 只用于开发环境。
  这样做的话，我们在发布的时候，可以将dependencies里的所有包，打包成一个vendor.js文件，因为这个文件都是三方库，代码几乎不太会改变，这样，这部分代码就能很好的被游览器缓存利用了；而对于项目相关的JS代码，愉快得迭代就好了。
  ```javascript
  const pkg = require('./package.json');
  entry: {
      app: path.resolve(__dirname, 'app/index.jsx'), // 这行是项目相关的JS代码
      // 将第三方依赖（node_modules）的库打包
      vendor: Object.keys(pkg.dependencies)
  },
  ```

# 重点
### npm
- npm 安装依赖时新版node自动会在package.json中记录，不是必须加 --save
### cnpm
- cnpm 安装依赖时不加 --save 不会自动记录在package.json中

