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

# node自定义模块