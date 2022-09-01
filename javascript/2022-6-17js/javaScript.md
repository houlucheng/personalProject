##  事件
- DOM 0级事件
    - 一个元素的一个事件只能绑定一次，最后的会覆盖之前的所有
    ```javaScript
        document.body.oClick = function (e) {
            //...
        }
    ```

- DOM 2级事件
    - 一个事件可以绑定多次，而且都会执行
    ```javaScript
        document.body.addEventListener('click', function (e) {
            //...会执行
        }, false)

        document.body.addEventListener('click', function (e) {
            //...也会执行
        }, false)
    ```

## 事件对象
> 事件对象指的是 event, 此对象与绑定的元素以及函数无关，所有的evevt对象都是一个。
#### 鼠标事件对象
`document.onClick = function (e) {}`
- e.clientX 和 e.clientY 当前鼠标点击位置到窗口 X轴 和 Y轴 的距离
- e.pageX 和 pageY 当前鼠标点击位置到body X轴 和 Y轴 的距离，包括滚动后卷起的距离
#### 键盘事件对象 KeyboardEvent
`document.onKeyDown = function (e) {}`
- keyCode 键盘码
- altKey 是否按下alt键(组合按键)
- ctrlKey 是否按下ctrl键(组合按键)
- shiftKey 是否按下shift键(组合按键)
#### 手指事件对象 TouchEvent (移动端)
- changedTouches / touches 都是用来记录手指信息的，平时长用的是changedTouches

## 事件的传播机制
- 阶段一：捕获 CAPTURING_PHASH
    - 从最外层元素一直向里逐级查找，直到找到事件源为止，目的是为冒泡阶段的传播提供路径 => e.path存放的就是捕获阶段收集到的路径
- 阶段二：目标阶段 AT_TARGET
    - 把当前事件源的相关事件执行
- 阶段三：冒泡 BUBBLING_PHASH
    - 按照捕获阶段收集到的路径不仅仅当前事件源的相关事件行为处罚，而且从内到外，其祖先所有元素的相关事件行为都会被触发，(如果做了事件绑定，绑定的方法也会执行)

## 图片懒加载
- onscroll 兼容好但是麻烦性能差
- IntersectionObserver es6方法 兼容性差但方便简洁
    - threshold: [0] 一露头&完全出去触发
    - threshold: [1] 完全出现&出去一点就触发

    ```javascript
    let ob = new IntersectionObserver((changes)=> {
        /*
            changes: 是一个数组，记录了每一个监听元素和可视窗口的交叉信息
                    boundingClientRect：记录当前监听元素的getBoundingClientRect获取的值
                    isIntersecting: true/false true代表出现在可视窗口中，false反之
        */ 
    }, {threshold: [0]})
    ob.observer(box)
    ```


## 模块化
#### AMD（require.js）
```javascript
// index.html
<script src="require.js"></script>
<script src="main.js"></script>

// lib/a.js
define(function() {
    let name = '小明';
    function num() {
        //...
    }
    return {num}
})

// lib/b.js
/*
    依赖的模块需要前置导入
*/
define(['a'],function(aMode) {
    let name = '小明';
    function numAll() {
        aMode.num()
    }
    return {numAll}
})

// main.js
require.config({
    baseUrl: './lib'
})

require(['a', 'b'], function(aMode, bMode) {
    aMode.num();
    bMode.numAll()
})

```

#### CommonJs 按需导入
> 本身每个js就是一个模块，互不影响
```javascript
// a.js 导出模块
module.exports = {
    num: function() {}
}

// b.js 导入模块
const mode = require('a.js')
mode.num()
// 或
const { num } = require('a.js')
num()

```

#### CMD
> 由于CommonJS不支持浏览器，所以淘宝玉伯写了一个插件sea.js，把其定义为CMD模块规范
  本质：把CommonJs规范搬到浏览器端运行

#### ES6Module
> 本身每个js就是一个模块，互不影响
```javascript
// index.html
/* 必须定义 type="module" */
<script type="module" src="main.js" ></script>

// a.js 导出
export const num = 10;
export const fn = ()=>{};
// 一个模块中只能有一个export default
export default function fn1() {}

// main.js 导入
import { num, fn, default: default1 } from 'a.js';
fn()

// 对应export default导出方式
import AModule from 'a.js';
AModule()

// 默认全部导出
import * as AModule from 'a.js'
AModule.num
AModule.default.fn1()

```

## 变量提升
- 大括号块级作用域的变量提升
```javascript
/*
    全局：
        + 变量提升阶段： fn 只声明不定义
        + 代码执行阶段： function fn(){1} 赋值
*/
{
    /*
        局部：function fn 声明加定义
    */
    console.log(fn); // function fn(){1}
    function fn(){1} // 执行到此处时会把fn的值也给全局下附一遍
    fn = 1 // 把局部的fn改为1
    console.log(fn); // 1
}
console.log(fn) // function fn(){1}
```