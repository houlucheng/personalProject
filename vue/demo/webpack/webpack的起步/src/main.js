const {add, mul} = require('./mathUtils.js')
console.log(add(10, 20)); 
console.log(mul(10, 20));

import {age, height} from "./info"
console.log(age);
console.log(height);

import * as obj from "./info"
console.log(obj.age);
console.log(obj.height);