class  Mypromise{
    constructor(excutor){// constructor 接收到一个函数
        // 当resolve执行时，会把当前实例上的成功的池子中所有的方法执行
        // 给实例初始化两个空数组；
        this.fulfilledEvent = [];
        this.rejectedEvent = [];
        let  resolve =()=>{
            // 循环池子中方法，让其挨个执行；
            // 定时器解决了then方法中函数的异步回调问题；
            setTimeout(()=>{
                this.fulfilledEvent.forEach(item=>{
                    if(typeof item==="function"){
                        item();
                    }
                })
            },0);
        };
        // 当reject执行时，会把实例上失败的池子方法执行；
        let reject =()=>{
            let timer = setTimeout(()=>{
                clearTimeout(timer);
                this.fulfilledEvent.forEach(item=>{
                    if(typeof item==="function"){
                        item();
                    }
                });
            },0)
        };
        excutor(resolve,reject);
    }
    // then方法，把成功或失败后的回调放进相应的池子中；
    then(resolveFn,rejectFn){
        this.fulfilledEvent.push(resolveFn);
        this.rejectedEvent.push(rejectFn);
    }
}
new  Mypromise((resolve,reject)=>{
    console.log(1);
    resolve();
}).then(function () {
    console.log(2);
},function () {
    console.log(3);
});
console.log(4);
