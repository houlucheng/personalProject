// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// post方式接受前端参数的模块
const bodyParset = require("body-parser")
// post方式解析formdata参数格式的模块
const formidable = require("formidable")
// 向其他服务器端请求数据的模块
const request = require('request')
// 操作文件模块
const fs = require('fs')
const app = express();
app.use(bodyParset.urlencoded()) //post方式请求参数类型为 "application/x-www-form-urlencoded" 时调用
app.use(bodyParset.json()) //post方式请求参数类型为 "application/json 时调用
app.use(express.static(path.join(__dirname,'public')));
// app.use代表拦截所有请求
app.use((req, res, next) => {
    // 允许哪些客户端访问我 '*' 代表允许所有客户端访问我
    res.header('Access-Control-Allow-Origin', "*");
    // 允许客户端通过哪种方式访问我
    res.header('Access-Control-Allow-Methods', 'get,post');
    // 允许客户端发送跨域请求时携带cookie
    res.header('Access-Control-Allow-Credentials', true)
    next();
})

app.get('/first', (req,res) => {
    res.send({name:"Hello word!"});
})
app.post('/firstPost', (req,res) => {
    res.send(req.body);
})
app.get('/text', (req,res) => {
    res.status(400).send("not ok!")
})

app.get('/catch', (req,res) => {
    fs.readFile('./test.txt', (error,result) => {
        console.log(error)
        console.log(result)
        res.send(result)
    })
})

app.post('/formdata', (req, res) => {
    console.log(req)
    //创建formidable表单解析对象
    const form = new formidable.IncomingForm();
    // 解析客户端传过来的FormData对象
    form.parse(req, (error, fields, files) => {
        // fields: 表单当中普通的请求参数
        // files: 和文件上传相关的一些信息
        res.send(fields)
    })
})
app.post('/upload', (req, res) => {
    //创建formidable表单解析对象
    const form = new formidable.IncomingForm();
    // 设置客户端上传文件的存储路径 __dirname是找到绝对路径根路径(ajax文件夹)
    form.uploadDir = path.join(__dirname, 'public', 'uploads')
    // 保留上传文件的后缀名字 (默认false不保留)
    form.keepExtensions = true;
    // 解析客户端传过来的FormData对象
    form.parse(req, (error, fields, files) => {
        // fields: 表单当中普通的请求参数
        // files: 和文件上传相关的一些信息 (上传文件时文件会在这个参数里面)
        res.send(
            {
                path: files.attr.path.split('public')[1]
            }
        )
    })
})

app.get("/jsonp", (req, res) => {
    // var fnName = req.query.callback
    // res.send(fnName + "({name: 'zhangsan'})")
    // 以上代码是jsonp的底层原理 必须返回 执行函数字符串 ：'fn({})'
    // 下面是res自带的jsonp方法 这个方法底层干的就是上面的逻辑
    res.jsonp({name: 'zhangsan'})
})

app.get('/server', (req, res) => {
    // 跨域请求 （服务器端没有通源策略）
    request("http://localhost:3001/cross", (err, response, body) => {
        // response 服务器端的一些响应信息
        // body 请求 /cross 接口返回来的数据
        res.send();
    })
})

app.get('/corss', (req, res) => {
    // 允许哪些客户端访问我 '*' 代表允许所有客户端访问我
    res.header('Access-Control-Allow-Origin', "*");
    // 允许客户端通过哪种方式访问我
    res.header('Access-Control-Allow-Methods', 'get,post')
    // 以上两个设置复用率高所以需要一个中间介来拦截所有请求然后去设置 请看17行
    res.send("ok")
})

app.delete("/user/:id", (req, res) => {
    var id = req.params.id;
    res.send("已删除")
})

app.listen(3003);