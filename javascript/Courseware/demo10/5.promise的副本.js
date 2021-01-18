// promise的特点
// promise 是一个内置的类；不仅在window中存在，而且在node的global的全局对象下也存在；
// Promise 是es6新增的内置API；在IE下是不兼容；但是上线时会把所有es6的语法转换成es5;
/*for(var i=0;i<19;i++){
    // 闭包
    // 1.保护变量
    // 2.储存值
}*/

// 1.promise是同步的；传进一个回调函数；当执行promise时，会立即执行这个回调函数；

new Promise(function (resolve,reject) {
    //把then中的函数放进成功的池子的和失败的池子中；
    console.log(1)
    resolve(100);
}).then(function (data) {
    console.log(3);
},function () {
    console.log(4);
}).then(function () {
    console.log(5);
},function () {
    console.log(6);
})
console.log(2);



