// promise的特点
// promise 是一个内置的类；不仅在window中存在，而且在node的global的全局对象下也存在；
// Promise 是es6新增的内置API；在IE下是不兼容；但是上线时会把所有es6的语法转换成es5;
/*for(var i=0;i<19;i++){
    // 闭包
    // 1.保护变量
    // 2.储存值
}*/

// 1.promise是同步的；传进一个回调函数；当执行promise时，会立即执行这个回调函数；

// 2. promise 有三个状态；
// pending  等待状态
// fulfilled   成功态
// rejected   失败态
// 一旦当前状态发生改变，当前状态凝固；resolve是从pending到fulfilled时触发的；rejected是pending到rejected触发；

// 3. resolve和reject传参的问题；

// 4.如果在Promise的回调函数中，抛出异常；会触发rejected中的所有函数；



new Promise(function (resolve,reject) {
    //把then中的函数放进成功的池子的和失败的池子中；
    console.log(1);
    //reject(100);
    //throw new Error("错了就改")
}).then(function (data) {
    console.log(data);
    return 300;
},function () {
    console.log(4);
});
console.log(2);



