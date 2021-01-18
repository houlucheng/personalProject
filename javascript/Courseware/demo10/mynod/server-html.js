// 导入
let  http = require("http");
let fs = require("fs");
// 创建服务
let server=http.createServer(function (req,res) {
    // res.setHeader("Content-Type","text/html;charset=UTF-8")
    // 如果当前文件是HTML文件，可以不需要设置响应头，浏览器会自动识别HTML和css;
    // console.log(req.url)
    fs.readFile("./index.html","utf8",function (err,data) {
        // res.end(data);
        console.log(data)
    });
});
// 监听
server.listen(18000,function () {
    console.log("启动成功");
});
// 一旦服务器的代码发生修改，一定重新启动服务；
