class  Mypromise{
    constructor(excutor){// constructor 接收到一个函数
        // this --->实例；
        // 当resolve执行时，会把当前实例上的成功的池子中所有的方法执行
        // 给实例初始化两个空数组；
        // 初始化一个状态，pending
        this.state = "pending";
        this.fulfilledEvent = [];
        this.rejectedEvent = [];
        this.value = undefined;
        let  resolve =result=>{
            // 循环池子中方法，让其挨个执行；
            // 定时器解决了then方法中函数的异步回调问题；
            // 一旦当前状态凝固，不能再次调用resolve状态；
            if(this.state!=="pending")return;
            this.state = "fulfilled";
            this.value  = result;
            setTimeout(()=>{
                this.fulfilledEvent.forEach(item=>{
                    if(typeof item==="function"){
                        item(this.value);
                    }
                })
            },0);
        };
        // 当reject执行时，会把实例上失败的池子方法执行；
        let reject =(reason)=>{
            if(this.state!=="pending")return;
            this.state = "rejected";
            this.value = reason;
            let timer = setTimeout(()=>{
                clearTimeout(timer);
                this.rejectedEvent.forEach(item=>{
                    if(typeof item==="function"){
                        item(this.value);
                    }
                });
            },0)
        };
        // 处理promise中的异常；
        try{
            excutor(resolve,reject);
        }catch (err){
            console.log(err);
            reject(err);
        }
    }
    // then方法，把成功或失败后的回调放进相应的池子中；
    then(resolveFn,rejectFn){
        this.fulfilledEvent.push(resolveFn);
        this.rejectedEvent.push(rejectFn);
    }
}
new  Mypromise((resolve,reject)=>{
    console.log(1);
    throw new  Error("你你");
}).then(function (data) {
    console.log(2);
},function (data) {
    console.log(data);
});
console.log(4);
