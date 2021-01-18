let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer(function(req,res){
	// console.log(url.parse(req.url,true))
	// res.setHeader("Content-Type","text/html;charset=UTF-8");
	fs.readFile("./4.index.html","utf8",function(err,data){
		console.log(data)
		// res.end(data);
	});
	
});
server.listen(16000,function(){
	console.log("启动成功")
});