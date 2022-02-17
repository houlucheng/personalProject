class User {
    name:string
    age:number

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }
}

interface Person {
    name:string
    age:number
}

function greeter(val:Person) {
    return 'hello' + val.name + val.age;
}
let user = new User('小明',18)
// console.log(555, user);
// console.log(greeter(user));

let list: number[] = [1, 2, 3, 5]
// 泛型
let list2: Array<number> = [1, 2, 3, 5]
//元组
let x: [string, number]
x = ['nihao', 6]

enum Color {
    red = 5,
    green = 6,
    blue
}

let c:Color = Color.green
// console.log(888, c);


type Params = {
    name?: string,
    age?: number
}

function fn(obj: Params){
    return obj.name
}

console.log(222, fn({name: "小明"}));

