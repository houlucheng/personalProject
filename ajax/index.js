// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// /post方式接受前端参数的模块
const bodyParset = require("body-parser")
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

app.listen(3003);