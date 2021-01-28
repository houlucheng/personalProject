const {add, mul} = require('./js/mathUtils.js')
console.log(add(10, 20)); 
console.log(mul(10, 20));

import {age, height} from "./js/info"
console.log(age);
console.log(height);

import * as obj from "./js/info"
console.log(obj.age);
console.log(obj.height);

// 依赖
require("./css/normal.css")
require("./css/special.less")
document.writeln("<p>hello world!</p>")

import Vue from 'vue'
import App from './components/App'

new Vue({
  el: "#app",
  template: '<App/>',
  components: {
    App,
  }
})

