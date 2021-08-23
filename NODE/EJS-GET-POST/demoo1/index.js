const http = require('http');
const fs = require('fs');
const path = require('path')
const url = require('url')
const ejs = require('ejs')

const common = require('./module/common')

http.createServer(function (request, response) {

  // 获取地址
  let pathName = url.parse(request.url).pathname;

  if(pathName == "/login") {
    const list = [
      { title: "新闻1" },
      { title: "新闻2" },
      { title: "新闻3" },
      { title: "新闻4" }
    ]
    ejs.renderFile('./views/login.ejs', {msg: '我很不好', list} , (err, data) => {
      response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      response.end(data);
    })
  }
  

}).listen(8081);
