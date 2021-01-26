export let age = 20;
export let num = function(n) {
  return ++n;
}
let sex = "男";
let fn = function () {
  console.log(123);
}
export {
  sex, fn
}

export class Person {
  run () {
    console.log("在奔跑");
  }
}