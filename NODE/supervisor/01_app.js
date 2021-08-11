/*
  // 安装 supervisor (自动重启服务 热更新)
      npm install -g supervisor
  // 使用 supervisor
      supervisor app.js
*/



// 引入http模块
const http = require('http');
/*
  用 http.createServer 创建一个服务
  request 获取url传过来的信息
  response 给浏览器的响应信息
*/ 
http.createServer(function (request, response) {
  // 设置响应头
  // response.writeHead(200, {'Content-Type': 'text/plain'});
  response.writeHead(200, {'Content-Type': "text/html;charset='UTF-8'"});

  // 解决中文乱码
  response.write("<head> <meta charset='UTF-8'> </head>")
  // 在页面上输出
  response.write("<h2>你好，nodejs</h2>")
  // 给页面输出一句话并结束响应
  response.end('Hello World');
}).listen(8081);// 端口

console.log('Server running at http://127.0.0.1:8081/');