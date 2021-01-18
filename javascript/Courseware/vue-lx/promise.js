
/* 回调 */
//function buy(callback){
//	setTimeout(()=>{
//		let a = "蘑菇";
//		callback(a)
//	},2000);
//}
//buy(function cookie(val){
//	console.log(val)
//})

/* promise */
// let pr = new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		let a = "蘑菇"
// 		resolve(a)
// 	},2000)
// })
// pr.then((data)=>{
// 	console.log(data)
// },()=>{
	
// })


/* promise例子 */
// function buyPack(){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			if(Math.random()>0.5){
// 				resolve("买");
// 			}else{
// 				reject("不买");
// 			}
// 		},Math.random()*1000)

// 	})

// }
// buyPack().then(function(data){
// 	console.log(data)
// },function(data){
// 	console.log(data)

// })

/* Promise-ajax */
function ajax({url="",type='get',dataType='json'}){
	return new Promise((resolve,reject)=>{
		let xhr = new XMLHttpRequest();
		xhr.open(type,url,true);
		xhr.responseType = dataType;
		xhr.onload = function(){
			if(xhr.status === 200){
				resolve(xhr.response)
			}else{
				reject("not found")
			}
		};
		xhr.onerror = function(err){
			reject(err)
		}
		xhr.send();
	})
}
//ajax({url:'./carts.json'}).then((data)=>{
//	console.log(data)
//},(err)=>{
//	console.log(err)
//})











