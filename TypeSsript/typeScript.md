# TypeScript
## 安装/编译
```jsx
  npm install -g typescript
  // 编译ts代码
  tsc xxx.ts
```
## 基本类型
- 类型声明
  - 类型声明是ts非常重要的一个特点
  - 通过类型声明可以指定TS中变量（参数、形参）的类型
  - 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
  - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值
  - 语法：
      - ```jsx
          let 变量：类型；

          let 变量：类型 = 值；

          function fn(参数：类型，参数：类型)：类型{
            ...
          }
        ``` 
- 自动类型判断
  - TS拥有自动的类型判断机制
  - 当对变量的声明和赋值同时进行时，TS编译器会自动判断变量的类型
  - 所以如果你的变量的声明和赋值同时进行时，可以省略类型声明
- 类型   

    类型|例子|描述
    -|-|-
    number|1,-33,2.5|任意数字
    string|'hi','hi','hi'|任意字符串
    boolean|true,false|布尔值true或false
    字面量|其本身|限制变量的值就是该字面量的值
    any|*|任意类型
    unknown|*|类型安全的any
    void|空值（undefined）|没有值（或undefined）
    never|没有值|不能是任何值
    object|{name: '孙悟空'}|任意的js对象
    array|[1,2,3]|任意js数组
    tuple|[4,5]|元素，TS新增类型，固定长度数组
    enum|enum{A,B}|枚举ts中新增类型

- 类型中的 “或|” “且&” 语法 及 类型别名
  - ```tsx
      let a: number | string | boolean // a的值可以是这三种类型
      // &表示同时
      let b: { name: string } & { name: string }
      b = {name: "孙悟空", age: 18}
      // 类型的别名
      type myType = 1 | 2 | 3 | 4
      let k: myType
      let l: myType
      k = 2
      l = 4
    ```

- number
  - ```jsx
      let num: number
      num = 10
      num = "nihao" // 不能将类型“string”分配给类型“number”。

      function Handel(a: number, b: number): number{
        // 参数以及返回值均为number类型
        return 1 + 1
        // return "hello" // 不能将类型“string”分配给类型“number”。
      }
      Handel(6,8)
      // Handel() // 应有 2 个参数，但获得 0 个
      // Handel("q", 'w') // 不能将类型“string”分配给类型“number”。
    ```

- string
  - ```jsx
      let str: string
      str = "hello!"
      str = true // 不能将类型“boolean”分配给类型“string”。
    ```

- boolean
  - ```jsx
      let str: boolean
      str = true
      str = "true" // 不能将类型“string”分配给类型“boolean”。

- 字面量
  - ```jsx
      let str: 10 | 20 | 'hello' // 只可以是这三种值
      str = 10 // 有点类似常量， 定义了一个值就只能成为这个值了
      str = "hello" // 不能将类型“"hello"”分配给类型“10”。
    ```

- any（任意值）
  - ```jsx
      // 设置any后相当于关闭了ts的类型检测，不建议使用
      let str: any = 10 
      str = "hello"
      str = true
      let str1 // 隐式any
      str1 = "hello"
      str1 = true
    ```

- unknown（未知类型，类型安全的any）
  - ```jsx
      let str: unknown = 10 
      str = "hello"
      str = true
    ```

- void（空值）
  - ```jsx
      // 用来表示空，以函数为例，就表示没有返回值当函数
      function handel(): boolean | number {
        // 没有return默认会解析成为void
        // 有return就会解析成你return的值的类型，这里是boolean
        return true
      }
      function fn(): void{
        // 表示没有返回值
        // return
        return undefined
      }
    ```

- never（没有值）
  - ```jsx
      // 表示永远不反悔类型
      function fn(): nerver{
        throw new Error('报错了')
      }
    ```

- object/Function
  - ```jsx
      let str: object
      str = {}
      str = function a(){} // 也是正确的
      str = 888 // 不能将类型“number”分配给类型“object”。

      // 用来表示对象中是否包含哪些属性,加个问号表示这个属性可选的
      let obj: {name: '孙悟空', age?: string}
      obj = {name: '孙悟空'}
      obj = {name: '你好'} //不能将类型“"你好"”分配给类型“"孙悟空"”。
      // 不能将类型“{ name: "孙悟空"; a: string; }”分配给类型“{ name: "孙悟空"; }”。
      // 对象文字可以只指定已知属性，并且“a”不在类型“{ name: "孙悟空"; }”中。
      obj = {name: "孙悟空", a: '你好'}

      // [propName: string]: any 表示任意类型的属性,propName可任意起名
      let obj1: {name: "hello", [propName: string]: any}
      obj1 = {name: 'hello', a: 111, b: "你好"}


      // Function 设置函数结构的类型声明
      // 语法：（形参：类型, 形参: 类型 ...）=> 返回值
      let d: (a: number, b: number) =>number
      d = function (n1, n2): number {
        return n1 + n2
      }

    ```

- array
  - ```jsx
      // 1. string[]
      let str: string[]
      // 2. Array<number>
      let str1: Array<number>

      str = ['1', '2', '3']
      str = [1, 2, 3] // 不能将类型“number”分配给类型“string”。

      
    ```

- tuple（固定长度类型）
  - ```tsx
      // 元祖，元祖就是固定长度的数组
      let h: [string, number];
      h = ['hello', 123]
    ```

- enum（枚举）
  - ```tsx
      enum Gender{
        Male = 0, // 男
        Female = 1 // 女
      }
      let str: {name: string, gender: Gender}
      str = {
        name: "孙悟空"，
        gender: Gender.Male
      }
      console.log(str.gender === Gender.Male) // true
    ```

- any 与 unknown 的区别
  - unknown 实际上就是一个类型安全的any
  - unknown 类型的变量，不能直接赋值给其他变量
  - ```tsx
      let a: any = 10
      let b: unknown = 10
      let s: string = "hello"
      s = a // 正常赋值
      s = b // 不能将类型“unknown”分配给类型“string”。
      // 可通过两种方式赋值
      // 1. 
      if(typeof b === "string") {
          s = b
      }
      // 2.类型断言，可以用来告诉解析器变量的实际类型
      s = b as string
      s = <string>b
    ```

## 断言
```tsx
  // 类型断言，可以用来告诉解析器变量的实际类型
  let a: any = 10
  let s: string = "hello"

  // 第一种
  s = b as string; // 有点欺骗的意思

  // 第二种
  // 有点欺骗的意思
  s = <string>b;


```

## 接口interface  (就是定义一个规范)
### type
- type 描述一个对象的类型，不可以重复声明
  ```tsx
    type myType = {
      name: string,
      age: number
    }

    // 不可以重复声明，会报错
    type myType = {}
  ```
### interface 和 implements
- 接口用来定义一个类结构，用来定义一个类中应该包含那些属性和方法，同时接口也可以当成类型声明去使用，可以重复声明，接口里都是抽象方法
  ```tsx
    interface myInterface {
      name: string,
      age: number
    }

    // 可以重复声明，两个会合并
    interface myInterface {
      name: string,
      age: number
    }

    // 接口可以在定义类的时候去限制类的结构
    // 接口中所有的属性都不能有实际值
    // 接口只定义对象的结构，而不考虑实际值
    // 在接口中所有的方法都是抽象方法
    interface myInter {
      name: string;

      sayHello():void;
    }

    // 定义类时，可以使类去实现一个接口
    // 实现接口就是使类满足接口的要求
    class myClass implements myInter {
      name: string;
      constructor(name: string) {
        this.name = name
      }

      sayHello(){
        console.log("大家好")
      };
    }
  ```

## 泛型
  ```
    // 形参和返回值的类型相同，不知道形参的类型，也不知道返回值的类型，就可以用如下写法
    // T 可以是任何值
    function fn<T, k>(a: T): T{

    }
    fn(10); // 不指定泛型，Ts可以自动对类型进行推断
    fn<string>('hello') //指定泛型
    fn<number, string>(10, "hello")



    // 接口继承
    interface Inter {
      length: number
    }

    // T extends Inter 表示泛型T必须是Inter的实现类(子类)
    function fn3<T extends Inter>(a: T): number{
      return a.length
    }
    fn3({length: 10})
    fn3([1,2,3])


    // 类
    class MyClass<T> {
      name: T;
      constructor(name: T) {
        this.name = name
      }
    }
    const mc = new MyClass<string>("孙悟空")
  ```

## 编译选项
- 自动编译某个ts文件
  - 编译文件时，使用 -w 指令后，TS编译器会自动监视文件对变化，并在文件发生变化时对文件进行重新编译。
  - 示例：
    - ```
        tsc xxx.ts -w
      ```
- 自动编辑所有ts文件
  - 创建 tsconfig.json 文件
  - 执行
    - ```
        tsc // 只编译一次 
        或 
        tsc -w // 实时监听自动编译
      ```
- tsconfig.json 配置项
  ```tsx
    {
        /*
            用来指定哪些ts文件需要被编译(包含)
            * 一个 星 表示的是任意文件
            ** 两个 星 表示的是任意目录
        */
        "include": [
            "./src/**/*"
        ],
        /*
            用来指定哪些ts文件不被编译(不包含)
            默认值：["node_modules", "bower_components", "hspm_packages"]
            * 一个 星 表示的是任意文件
            ** 两个 星 表示的是任意目录
        */
        "exclude": [
            "./src/02/**/*"
        ],
        /*
            继承 某个配置文件
        */
        "extends": "./configs/base",
        /*
            指定被编译文件的列表，只有需要编译的文件少时才会用到
        */
        "files": [
            "core.ts",
            "app.ts",
            "index.ts",
        ],
        /*
            编译器的选项
        */
        "compilerOptions": {
            // 用来指定ts被编译为的ES版本
            // 'es3'(默认), 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'esnext'(最新)
            "target": "es3",

            // 指定使用的模块化的规范
            // es6和es2015一样
            // "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015"(推荐), "ES2020", "ESNext", "None", "es2022", "node12", "nodenext"
            "module": "ES2015",

            // 用来指定项目中要使用的库
            // 正常情况下用不到，除非说ts不是在浏览器中运行的是在node中运行的，用不到DOM那么可以动一下
            // 默认就是在浏览器中运行所需要的一些库
            // "ES5", "ES6", "ES2015", "ES2015.Collection", "ES2015.Core", "ES2015.Generator", "ES2015.Iterable", "ES2015.Promise", "ES2015.Proxy", "ES2015.Reflect", 
            // "ES2015.Symbol.WellKnown", "ES2015.Symbol", "ES2016", "ES2016.Array.Include", "ES2017", "ES2017.Intl", "ES2017.Object", "ES2017.SharedMemory", 
            // "ES2017.String", "ES2017.TypedArrays", "ES2018", "ES2018.AsyncGenerator", "ES2018.AsyncIterable", "ES2018.Intl", "ES2018.Promise", "ES2018.Regexp", 
            // "ES2019", "ES2019.Array", "ES2019.Object", "ES2019.String", "ES2019.Symbol", "ES2020", "ES2020.BigInt", "ES2020.Promise", "ES2020.String", 
            // "ES2020.Symbol.WellKnown", "ESNext", "ESNext.Array", "ESNext.AsyncIterable", "ESNext.BigInt", "ESNext.Intl", "ESNext.Promise", "ESNext.String", 
            // "ESNext.Symbol", "DOM", "DOM.Iterable", "ScriptHost", "WebWorker", "WebWorker.ImportScripts", "Webworker.Iterable", "ES7", "ES2021", "ES2020.SharedMemory", 
            // "ES2020.Intl", "ES2021.Promise", "ES2021.String", "ES2021.WeakRef", "ESNext.WeakRef", "es2021.intl"
            // "lib": [
            //     "DOM"
            // ],
            
            // 指定编译后文件的所在目录
            "outDir": "./dist",

            // 将编译后的代码合并为一个文件
            "outFile": "./dist/app.js",

            // 是否对js文件进行编译，默认是false
            "allowJs": false,

            // 是否检查js代码是否符合语法规范，默认是false
            "checkJs": false,
            
            // 是否移除注释
            "removeComments": false,

            // 不生成编译后的文件,只想检查语法时使用
            "noEmit": false,
                
            // 有错误时不生成编译文件，把编译变的比较严格
            "noEmitOnError": false,

            // 所有严格检查的总开关，建议设为true
            "strict": false,

            // 用来设置编译后的文件是否使用严格模式
            // 在编译后的文件开头加 'use strict'
            // 如果使用的es6的导入导出模块的方法，就会自动进入严格模式
            "alwaysStrict": false,

            // 不允许隐式的any类型
            "noImplicitAny": false,

            // 不允许不明确类型的this
            // function a() { console.log(this)}
            "noImplicitThis": false,

            // 严格的检查空值（比如用document获取一个元素有可能没有这个元素）
            "strictNullChecks": false,
        }
    }
  ```

## 用webpack编译ts
- 安装
  ```
    // ts-loader 把 webpack 和 typescript 进行整合变成一体，必须用他才能让typescript在webpack中使用
    npm i -D webpack webpack-cli typescript ts-loader

    // 为了使打包后的文件兼容性好
    // core-js 模拟js运行环境
    npm i -D @babel/core @babel/preset-env babel-loader core-js
  ```

## CSS兼容插件
- postcss用来使css打包后可以兼容更低版本的浏览器
```
  npm i -D postcss postcss-loader postcss-preset-env
```


## 类的私有属性
- 静态方法
  - 要添加静态方法，在方法前加关键字static
- ES6 中的子类
  - 我们使用super和extends关键字扩展类，super必须在this之前被调用！
- public
  - 在属性或方法前加上 public，不加public默认也是public，在任何地方都可以使用
- private
  - 私有属性，当成员被标记成private时，它就不能在声明它的类的外部访问，要获取或者修改可以调用内部的一个方法然后在方法内改变
- protected
  - protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类（子类）中仍然可以访问
- readonly修饰符
  - 你可以使用 readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。