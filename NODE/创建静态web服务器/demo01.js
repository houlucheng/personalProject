const http = require('http');
const fs = require('fs');
const path = require('path')
const url = require('url')

const common = require('./module/common')

http.createServer(function (request, response) {

  // 获取地址
  let pathName = request.url;

  pathName = pathName == "/" ? "/index.html" : pathName

  let extname = path.extname(pathName)

  // 通过fs模块读取文件
  if(pathName != '/favicon.ico') {
    fs.readFile('./static' + pathName, (err, data) => {
      if (err) {
        console.log(err);
        response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
        response.end('err');
        return
      }
      let mime = common.getMime(pathName)
      response.writeHead(200, {'Content-Type': mime + ';charset="utf-8"'});
      response.end(data);
    })
  }

  

}).listen(8081);
