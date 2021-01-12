// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// post方式接受前端参数的模块
const bodyParset = require("body-parser")
// post方式解析formdata参数格式的模块
const formidable = require("formidable")
// 操作文件模块
const fs = require('fs')
const app = express();
app.use(bodyParset.urlencoded()) //post方式请求参数类型为 "application/x-www-form-urlencoded" 时调用
app.use(bodyParset.json()) //post方式请求参数类型为 "application/json 时调用
app.use(express.static(path.join(__dirname,'public')));

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
        res.send('ok')
    })
})

app.listen(3003);