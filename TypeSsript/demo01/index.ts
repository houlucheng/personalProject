// enum Gender{
//   Male = 0,
//   Female = 1
// }
// let str: {name: string, gender: Gender}
// str = {
//   name: "孙悟空",
//   gender: Gender.Male
// }
// console.log(str.gender === Gender.Male) // true

// let obj: {name: '孙悟空'}
// obj = {name: '孙悟空'}
// obj = {name: '你好'}
// obj = {name: '孙悟空', a: '你好'}

// let obj1: {name: "hello", [propName: string]: any};
// obj1 = {name: 'hello', a: 111, b: "你好"}

// let d: (a: number, b: number) =>number
// d = function (n1, n2) {
//   return n1 + n2
// }

// let str: string[]
// str = ['1', '2', '3']
// str = [1, 2, 3] // 不能将类型“number”分配给类型“array”。




// let a: any = 10
// let b: unknown = 10
// let s: string = "hello"
// s = a
// // s = b //不能将类型“unknown”分配给类型“string”。
// if(typeof b === "string") {
//     s = b
// }
// s = b as string



// let str: object
// str = {}
// str = 888 // 




// let str: unknown = 10 
// str = "hello"
// str = true
// console.log(str);





// let str: any = 10 
// str = "hello"
// str = true
// console.log(str);





// 字面量
// let str: 10
// str = 10
// str = "hello" // 不能将类型“"hello"”分配给类型“10”。



// let str: string
// str = "hello!"
// str = true // 不能将类型“boolean”分配给类型“string”。
// console.log(str);
// function Handel(a: string, b: string): string{
//     return a + b
// }
// console.log(Handel('你好', 'typescript'));







// let num: number
// num = 10
// num = "nihao" // 不能将类型“string”分配给类型“number”。
// console.log(num);
