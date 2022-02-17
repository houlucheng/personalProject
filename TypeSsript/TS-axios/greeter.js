var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
function greeter(val) {
    return 'hello' + val.name + val.age;
}
var user = new User('小明', 18);
// console.log(555, user);
// console.log(greeter(user));
var list = [1, 2, 3, 5];
// 泛型
var list2 = [1, 2, 3, 5];
//元组
var x;
x = ['nihao', 6];
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 6] = "green";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
var c = Color.green;
function fn(obj) {
    return obj.name;
}
console.log(222, fn({ name: "小明" }));
