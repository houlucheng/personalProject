//单例模式  本身就是一个简单的对象 ，他产生的原因就是为了防止变量命名冲突，命名空间
//++++++++++++++++++++++“use strict”
//高级单例模式
// var arr=(function(){
// 	var name1='xianghong';
// 	var getName=function(){
// 		console.log(this.name1)
// 	}
// 	return {
// 		name1:name1,
// 		getName:getName
// 	}
// })()
// arr.getName();
// var fn=arr.getName;
// fn();


// function Fn(){
// 	this.x=100;
// 	this.y=200;
// 	this.sum=function(){
// 		console.log(this.x+this.y)
// 		return this；//返回的是这个类的实例
// 	};
// 	this.minus=function(){
// 		console.log(this.y-this.x)
// 	}
// }
// var f=new Fn;//不传参数 小括号写不写无所谓
// f.sum().minus();//要想这样执行 minus() 必须return


// var arry=[1,2,3,4,5,6];
// Array.prototype.push=function(n){
// 	this[this.length]=n;
// 	return this;
// }
// Array.prototype.pop=function(){
// 	this.length--;
// 	return this;
// }
// var arry2=arry.slice().push(10).pop().push(23)

// //================================call的用法
// fn.call(f,1,2,3,4);
/*
本身是用来改变this指向的
先把fn中的this换成f
从call的第二个参数开始，一项一项的传给fn
fn执行（就是让call中的this执行）
*/

// function f1(){
// 	console.log(1)
// }
// function f2(n,m){
// 	console.log(2,n,m);
// 	this();
// 	console.log(this)
// }
// f2.call(f1,12,23,34)


// function f3(name,age){
// 	this.name=name || 'xiaohong';
// 	this.age = age || 18;
// }
// var obj={};
// console.log(obj);//{}
// f3.call(obj,'xiaoming',20);
// console.log(obj);//{name:xiaoming,age:20}
// f3.call(obj);
// console.log(obj);


//==================apply用法
/*
他和call规则一样 唯一不一样的就是传参的形式 call从第二个参数散着传过去，
apply是通过数组或类数组形式

*/

//======================bind用法
// var res=fn.bind(f,1,2,3)
// 先把fn中的this换成f

// var a=parseInt( Math.random()*(0,20)-0)
// console.log(a)

// console.log(Boolean([]))//true

// var ary=[23,34,12,3,35,4,65]
// Math.max.apply(null,ary)//取最大值

//==============对象的解构
// let obj = {name:1,age:2};
// let {name,age} = obj;
// console.log(name,age)

//DOM 重绘 改变元素的样式会让浏览器重新渲染该DOM
// DOM 回流机制 改变元素位置，元素结构的时候会触发浏览器的回流机制；比较消耗性能

//文档碎片
// document.createDocumentFragment()


 //========类数组转化为数组============
function fn(){
	console.log(arguments)
	 var ary=Array.prototype.slice.call(arguments);
	 return ary.join("+")
	 
}
console.log(fn(1,2,3))


//console.log(a)//undefined
//console.log(fn)//undefined
//if(1==1){
//	var a=66;
//	function fn(){
//	}
//}
//console.log(a)//66
//console.log(fn)//function fn(){}

//自执行函数=============================
//～ + !
//~function (){alert(1)}()
//+function (){alert(2)}()
//!function (){alert(3)}()

//=====获取元素=============================
//	var oul=document.getElementById("ul");
//	function mychildren(ele){
//		var nodelist=ele.childNodes;
//		console.log(nodelist)
//		var ary=[];
//		for(var i=0;i<nodelist.length;i++){
//			
//			if(nodelist[i].nodeType == 1){
//				ary.push(nodelist[i])
//			}
//		}
//		
//		return ary
//	}
//var a=mychildren(oul)
//a[0].innerHTML="00000"

//============获取元素===========================
//function myChildren(ele,tagName) {
//      var nodeList = ele.childNodes;
//      var ary = [];
//      for(var i = 0; i < nodeList.length; i++){
//          var temp = nodeList[i];
//          if(typeof tagName === 'undefined'){
//              if(temp.nodeType == 1){
//                  ary.push(temp);
//              }
//          }else {
//              if(temp.nodeType == 1 && temp.nodeName.toLowerCase() === tagName.toLowerCase()){
//                  ary.push(temp);
//              }
//          }
//      }
//      return ary;
//  }

//=====上级作用域=========
//var n=10;
//var obj={//执行完才能赋值给obj
//	n:20,
//	fn:(function(n){
//		return function(){
//			console.log(n)
//		}
//	})(obj.n)//报错 自执行函数还没有执行完 不会赋值给obj
//}
//obj.fn()

//===========================
//function fn(i){
//	return function (n){
//		console.log(n+(++i));
//	}
//}
//var f=fn(10);
//f(20);//31
//fn(10) (20);//31
//f(30);//42
//fn(20) (10);//31
//f(40);//53



// var num=1;//6
// obj={
// 	num:2,//6
// 	fn:(function(num){//5
// 		this.num *= 2;
// 		num += 2;//3
// 		return function(){
// 			this.num *= 3;
// 			num++;
// 			console.log(num)
// 		}
// 	})(num)
// }
// var fn=obj.fn;
// fn();//4
// obj.fn();//5
// console.log(num,obj.num)//6 6

//>>>>>构造函数执行>>>>>>>》》》》》》》》》》》》》》》》》》》
//构造函数执行写不写括号都会执行（new fn;）
// 1.先型参赋值
// 2.变量提升
// 3.浏览器会创建一个对象数据值（this/实例）
// 4.从上到下执行
// 5.浏览器会把创建的实例返回  相当于自己return this  所以实力返回的就是this
//======>>>>>>>>构造函数默认返回this  但是如果你手动设置return 如果return的是基本数据类型则无效  
// ======》》》》》》如果return是一个引用数据类型则返回你设置的这个东西
//函数体内的私有变量与实例无关
//不同的实例是不同的空间地址
//》》》》》》》在之前后台也把构造函数叫做单例模式《《《《《《《

//function Fn(){
//	var num=100;
//	this.name="nihao";
//	this.sum=function(){}
////	return 10;//无效
//	return {name:"345"}//有效
//}
//var f1=new Fn();
//var f2=new Fn;
//f1===f2//false 地址不一样
//console.log(f1.num);//undefined num是私有作用域里面的 实力里面并没有num
//console.log(f1.name);//"nihao"
//f1.sum===f2.sum //==>false 

//===========================》》》》》》》》》》》》》》》》》》》。
//var obj={'name':'你好',age:10}
//instanceof 是检测一个实例是否属于某个对象的实例
//hasOwnProperty() (obj.hasOwnProperty("name")) 检测该属性是否属于某个对象的私有属性
//in   ("name" in obj)  检测该属性是否属于某个对象的属性(不区分私有和共有)

//#############   js中的对象和函数汇总   ####################________________________
//>对象数据类型的值
//> {} 普通对象
//> [] 数组
//> /^&/ 正则
//> Math 数学函数
//> 一般类的实例都是对象数据类型的
//> 函数的prototype属性
//> 实例的_proto_

//#############  函数数据类型值   ####################________________________
//》 普通函数
//》 所有的类(内置类和自定义类)

//=====原型======
// 1.所有的函数都天生自带一个属性： prototype (原型)
// 2.prototype这个对象，浏览器会默认为其开辟一个堆内存，在这个堆内存中天生自带一个属性：constructor（构造函数），这个属性存储的值就是函数当前本身
// 3.每一个类的实例都天生自带一个属性： _proto_,属性值是当前对象所属类的原型（prototype）

//===========数组去重==============
//var ary=[1,2,1,2,3,2,3,1,3,2,2];
//function tab(ary){
//	var obj={};
//	for (var i=0;i<ary.length;i++) {
//		var item = ary[i];
//		if(typeof obj[item] !== "undefined"){
//			ary[i] = ary[ary.length-1];
//			ary.length--;
//			i--;
//			continue;
//		}
//		obj[item]=item;
//	}
//	
//	obj = null;
//	return ary;
//}
//tab(ary)
//console.log(ary)

//================内置类原型上扩展方法=======
//Number.prototype.plus=function(item){
//	return this+item;
//}
//Number.prototype.minus=function(item){
//	return this-item;
//}
//console.log((2).plus(3).minus(1))

//======= 360面试题 =============
//var num = 10;
//var obj = {num:20};
//opbj.fn = (function(num){//自执行函数this是window （自上而下执行的时候才会执行自执行函数）
//	this.num = num * 3;
//	num++;
//	return function(n) {
//		this.num += n;
//		num++;
//		console.log(num);
//	}
//})(obj.num)
//var fn = obj.fn;
//fn(5);
//obj.fn(10);
//console.log(num,obj.num);//65 30
