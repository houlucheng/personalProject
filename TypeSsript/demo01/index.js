var a = 10;
var b = 10;
var s = "hello";
s = a;
// s = b //不能将类型“unknown”分配给类型“string”。
if (typeof b === "string") {
    s = b;
}
s = b;
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
